<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\MadminProfile;
use App\Models\MuserToPermission;
use App\Models\MuserToRole;
use App\Models\User;
use App\Traits\shortCode;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;

class UserMgt extends Controller
{
    use shortCode;

    public function index()
    {
        return view('dashboard.usermgt.list');
    }
    public function render_list(Request $request, $pagination = 10)
    {
        $query = DB::table('admin_users')
            ->join('admin_profile', 'admin_users.aduser_id', '=', 'admin_profile.aduser_id')
            ->select('admin_users.aduser_id', 'admin_users.aduser_code', 'admin_users.adfirst_name',
            'admin_users.adlast_name', 'admin_users.aduser_name', 'admin_users.created_at', 'admin_users.aduser_uuid',
            'admin_profile.adprofile_city', 'admin_profile.adprofile_country', 'admin_profile.adprofile_avatar',
            'admin_users._status')
            ->orIf($request->search, 'admin_users.aduser_name', 'LIKE', "%$request->search%")
            ->orIf($request->search, 'admin_users.adfirst_name', 'LIKE', "%$request->search%")
            ->orIf($request->search, 'admin_users.adlast_name', 'LIKE', "%$request->search%")
            ->orIf($request->search, 'admin_profile.adprofile_city', 'LIKE', "%$request->search%")
            ->orIf($request->search, 'admin_profile.adprofile_country', 'LIKE', "%$request->search%")
            ->orderBy('admin_users.created_at', 'DESC')
            ->paginate($pagination);
            $data = $query->getCollection()->transform(function ($item, $key)
            {
                $item->roles = DB::table('aduser_to_role')
                            ->join('admin_roles', 'aduser_to_role.adrole_id', '=', 'admin_roles.adrole_id')
                            ->where('aduser_to_role.aduser_id', $item->aduser_id)
                            ->select('admin_roles.adrole_title')->get();

                return $item;
            });

            $response = [
                'current_page' => $query->currentPage(),
                'data' => $data,
                'from' => $query->firstItem(),
                'last_page' => $query->lastPage(),
                'last_page_url' => $query->lastPage(),
                'next_page_url' => $query->nextPageUrl(),
                'path' => $query->url($pagination),
                'per_page' => $query->perPage(),
                'prev_page_url' => $query->previousPageUrl(),
                'to' => $pagination,
                'total' => $query->total()
            ];
            return response()
                    ->json([
                        $response,
                        $query->total()
                    ]);
        
    }
    public function create()
    {
        return view('dashboard.usermgt.create');
    }
    public function store(Request $request)
    {

        DB::beginTransaction();

        try {
            $request->validate([
                'first_name' => 'required',
                'last_name' => 'required',
                'username' => 'required | email | unique:admin_users,aduser_name',
                'password' => ['required', Password::min(8)],
                'city' => 'required',
                'role_assigned' => 'required',
                'permission_assigned' => 'required',
                'img' => 'required',
            ]);
    
            $request['role_assigned'] = json_decode($request->role_assigned);

            $user = User::create([
                'aduser_code' => $this->runCode(),
                'aduser_uuid' => (string) Str::uuid(),
                'adfirst_name' => trim($request->first_name),
                'adlast_name' => trim($request->last_name),
                'aduser_name' => trim($request->username),
                'password' => bcrypt($request->password),
                '_hint' => Crypt::encryptString($request->password)
            ]);
    
            //data
            foreach ( $request->role_assigned as $row ) {

                MuserToRole::create([
                    'aduser_id' => $user->aduser_id,
                    'adrole_id' => $row->value
                ]);
                
            }

            $request['permission_assigned'] = json_decode($request->permission_assigned);

            foreach ( $request->permission_assigned as $row ) {

                MuserToPermission::create([
                    'aduser_id' => $user->aduser_id,
                    'permission_id' => $row->value
                ]);

            }

            $image = $request->img;
            $extension = $image->getClientOriginalExtension();
            $file_name = time() . '.' . $extension;

            $image->move(public_path('uploads/'), $file_name);
            $image_in_database = '/uploads/' . $file_name;

            MadminProfile::create([
                'aduser_id' => $user->aduser_id,
                'adprofile_city' => $request->city,
                'adprofile_country' => $request->country,
                'adprofile_avatar' => env('APP_URL') . $image_in_database,
                'adprofile_bio' => $request->bio,
            ]);

            DB::commit();
            return response()->json(['msg' => $request->first_name . ' has been added to the team.']);

        } catch (\Exception $e) {
            DB::rollBack();

            return response()->json(['msgErr' => $e->getMessage()]);
        }
    }
    public function change_password(Request $request)
    {
        $request->validate([
            'password' => ['required', Password::min(8)]
        ]);
        $user = User::find($request->userid);
        $user->password = bcrypt($request->password);
        $user->_hint = Crypt::encryptString($request->password);
        $user->save();
        return response()->json(['msg' => 'Password has been updated.']);
    }
    public function change_status($userid, $status)
    {
        $user = User::find($userid);
        $user->_status = $status == 1 ? 0 : 1;
        $user->save();
        return response()->json(['msg' => 'Status has been updated.']);
    }
    public function edit($id)
    {
        return view('dashboard.usermgt.edit', [
            'id' => $id
        ]);
    }
    public function show($id)
    {
        $query = DB::table('admin_users')
        ->join('admin_profile', 'admin_users.aduser_id', '=', 'admin_profile.aduser_id')
        ->where('admin_users.aduser_id', $id)->first();
        $list = [];
        array_push($list, [
            'first_name' => $query->adfirst_name,
            'last_name' => $query->adlast_name,
            'username' => $query->aduser_name,
            'id' => $query->aduser_id,
            'city' => $query->adprofile_city,
            'country' => $query->adprofile_country,
            'avatar' => $query->adprofile_avatar,
            'bio' => $query->adprofile_bio,
            'roles' => DB::table('aduser_to_role')
                    ->join('admin_users', 'aduser_to_role.aduser_id', '=', 'admin_users.aduser_id')
                    ->join('admin_roles', 'aduser_to_role.adrole_id', '=', 'admin_roles.adrole_id')
                    ->where('admin_users.aduser_id', $id)->get(),
            'permissions' => DB::table('aduser_to_permission')
                    ->join('admin_users', 'aduser_to_permission.aduser_id', '=', 'admin_users.aduser_id')
                    ->join('admin_permission', 'aduser_to_permission.permission_id', '=', 'admin_permission.permission_id')
                    ->where('admin_users.aduser_id', $id)->get()
        ]);
        return response()->json($list);
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'city' => 'required',
            'role_assigned' => 'required',
            'permission_assigned' => 'required'
        ]);
        $user = User::find($id);
        $user->adfirst_name = trim($request->first_name);
        $user->adlast_name = trim($request->last_name);
        $user->save();

        $request['role_assigned'] = json_decode($request->role_assigned);
        $request['permission_assigned'] = json_decode($request->permission_assigned);
       
        MuserToRole::where('aduser_id', $id)->delete();
        foreach ( $request->role_assigned as $row ) {
            MuserToRole::create([
                'aduser_id' => $user->aduser_id,
                'adrole_id' => $row->value
            ]);
        }
        MuserToPermission::where('aduser_id', $id)->delete();
        foreach ( $request->permission_assigned as $row ) {
            MuserToPermission::create([
                'aduser_id' => $user->aduser_id,
                'permission_id' => $row->value
            ]);
        }

        $profile = MadminProfile::where('aduser_id', $id)->first();
        if ($request->img) {
            $image = $request->img;
            $extension = $image->getClientOriginalExtension();
            $file_name = time() . '.' . $extension;
            $image->move(public_path('uploads/'), $file_name);
            $image_in_database = 'uploads/' . $file_name;
            $profile->adprofile_avatar = env('APP_URL') . $image_in_database;
        }
        $profile->adprofile_city = $request->city;
        $profile->adprofile_country = $request->country;
        $profile->adprofile_bio = $request->bio;
        $profile->save();
        //data
        return response()->json(['msg' => 'The user has been successfully updated.']);
    }

    public function destroy($id)
    {
        $user = User::find($id)->delete();
        MuserToRole::where('aduser_id', $id)->delete();
        MuserToPermission::where('aduser_id', $id)->delete();
        return response()->json(['msg' => 'The data is removed completely.']);
    }
}
