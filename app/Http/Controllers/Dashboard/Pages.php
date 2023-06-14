<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Mpage;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Traits\shortCode;
use Illuminate\Support\Facades\DB;

class Pages extends Controller
{
    use shortCode;

    public function index()
    {
        return view('dashboard.pages.list');
    }

    public function renderList()
    {
        $query = DB::table('wq_pages')
            ->join('wq_menus', 'wq_pages.menu_id', 'wq_menus.menu_id')
            ->select('wq_menus.menu_title', 'wq_pages.page_title', 'wq_pages.page_id')
            ->paginate(10);
        return response()->json($query);
    }

    public function create()
    {
        return view('dashboard.pages.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'page_title' => 'required|unique:wq_pages,page_title',
            'menu_id'  => 'required',
            'page_summary'  => 'required',
            'page_details'  => 'required',
            'page_buttonlabel'  => 'required',
            'page_url'  => 'required',
        ]);

        $imageName = '';
        if ($request->img) {
            $imageName = time() . '.' . $request->img->getClientOriginalExtension();
            $request->img->move(public_path('images'), $imageName);
            $imageName = env('APP_URL') . '/images/' . $imageName;
        }

        Mpage::create([
            'menu_id' => $request->menu_id,
            'page_title' => trim($request->page_title),
            'page_slug' => Str::slug(trim($request->page_title)),
            'page_cover' => $imageName,
            'page_summary' => trim($request->page_summary),
            'page_details' => trim($request->page_details),
            'page_buttonlabel' => trim($request->page_buttonlabel),
            'page_url' => trim($request->page_url),
            'page_status' => 1,
        ]);

        return response()->json(['msg' => $request->page_title . ' has been added.']);
    }

    public function edit($id)
    {
        return view('dashboard.pages.edit', [
            'page' => Mpage::find($id)
        ]);
    }

    public function show ($id)
    {
        $query = DB::table('wq_pages')
        ->join('wq_menus', 'wq_pages.menu_id', 'wq_menus.menu_id')
        ->where('wq_pages.page_id', $id)->first();

        $list = [];

        array_push($list, [
            'menu' => [
                'label' => $query->menu_title,
                'value' => $query->menu_id,
            ],
            'page_title' => $query->page_title,
            'page_summary' => $query->page_summary,
            'page_details' => $query->page_details,
            'page_buttonlabel' => $query->page_buttonlabel,
            'page_url' => $query->page_url,
        ]);
        return response()->json($list[0]);
    }

    public function update(Request $request, $pageId)
    {
        $request->validate([
            'page_title' => 'required|unique:wq_pages,page_title,' . $pageId . ',page_id',
            'menu_id'  => 'required',
            'page_summary'  => 'required',
            'page_details'  => 'required',
            'page_buttonlabel'  => 'required',
            'page_url'  => 'required',
        ]);
        $page = Mpage::where('page_id', $pageId)->first();

        $imageName = '';
        if ($request->img) {
            $imageName = time() . '.' . $request->img->getClientOriginalExtension();
            $request->img->move(public_path('images'), $imageName);
            $imageName = env('APP_URL') . '/images/' . $imageName;

            $page->page_cover = $imageName;
        }

        $page->page_title = trim($request->page_title);
        $page->menu_id = trim($request->menu_id);
        $page->page_summary = trim($request->page_summary);
        $page->page_details = trim($request->page_details);
        $page->page_buttonlabel = trim($request->page_buttonlabel);
        $page->page_url = trim($request->page_url);

        $page->save();
        
        return response()->json(['msg' => $request->page_title . ' has been updated.']);
    }

    public function destroy($id)
    {
        Mpage::find($id)->delete();
        return response()->json(['msg' => 'The menu has been successfully deleted.']);
    }
}
