<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Mevents;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;

class EventsManagement extends Controller
{
    public function index()
    {
        return view('dashboard.events.list');
    }
    public function renderList()
    {
        $query = Mevents::paginate(10);
        return response()->json($query);
    }
    public function create()
    {
        return view('dashboard.events.create');
    }
    public function store(Request $request)
    {
        $request->validate([
            'event_title' => 'required',
            'event_cover'  => 'required',
            'event_excerpt' => 'required'
        ]);
        Mevents::create([
            'event_title' => trim($request->event_title),
            'event_slug' => Str::slug(trim($request->event_title)),
            'event_cover' => $request->event_cover,
            'event_date' => date('Y-m-d', strtotime($request->event_date)),
            'event_time' => $request->event_time,
            'event_excerpt' => trim($request->event_excerpt),
            'event_description' => $request->event_description,
        ]);

        return redirect()->back()->with('msg', 'You have successfully created '. $request->event_title);
    }

    public function status_change($id, $status)
    {
        $event = Mevents::find($id);
        $event->_status = $status == 1 ? 0 : 1;
        $event->save();
        return response()->json(['msg' => 'Status has been updated.']);
    }

    public function edit($id)
    {
        return view('dashboard.events.edit', [
            'event' => Mevents::find($id)
        ]);
    }

    public function update(Request $request)
    {
        $request->validate([
            'event_title' => 'required',
            'event_cover'  => 'required',
            'event_excerpt' => 'required'
        ]);
        
        $event = Mevents::where('event_id',$request->eventid)->first();
        $event->event_title = trim($request->event_title);
        $event->event_slug = Str::slug(trim($request->event_title));
        $event->event_cover = $request->event_cover;
        $event->event_date = date('Y-m-d', strtotime($request->event_date));
        $event->event_time = $request->event_time;
        $event->event_excerpt = $request->event_excerpt;
        $event->event_description = trim($request->event_description);
        $event->save();
        return redirect()->back()->with('msg', 'Event has been updated.');
    }

    public function destroy($id)
    {
        Mevents::find($id)->delete();
        return response()->json(['msg' => 'The event has been successfully deleted.']);
    }
}
