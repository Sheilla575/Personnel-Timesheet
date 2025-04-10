<?php

namespace App\Http\Controllers;

use App\Models\Calendar;
use Carbon\Carbon;
use Illuminate\Http\Request;

class CalendarController extends Controller
{

    public function index_calender(Request $request)
    {
        $pagination  = 5;
        $events = Calendar::when($request->keyword, function ($query) use ($request) {
            $query->where('agenda', 'like', "%{$request->agenda}%");
        })->orderBy('created_at', 'asc')->paginate($pagination);
        return view('calender', [
            'title' => 'Calendar',
            'events' => $events,
        ]);
    }
    public function getEvents()
    {
        $events = Calendar::all()->map(function ($event) {
            return [
                'title' => $event->agenda,
                'date' => $event->date,
                'description' => $event->note ?? '',
                'color' => $event->color ?? '#3788d8'
            ];
        });

        return response()->json($events);
    }
    public function store_calendar(Request $request)
    {
        try {
            $request->validate([
                'agenda' => 'required',
                'date' => 'required|unique:calendars,date',
                'is_holiday' => 'nullable|boolean',
                'is_editable' => 'nullable|boolean',
                'note' => 'nullable|string',
            ]);
            Calendar::create([
                'agenda' => $request->agenda,
                'date' => Carbon::parse($request->date)->format('Y-m-d'),
                'note' => $request->note,
                'is_holiday' => $request->is_holiday ?? 0,
                'is_editable' => $request->is_editable ?? 0,
                'Bonus_Manhours' => $request->Bonus_Manhours ?? 0
            ]);

            return redirect()->back()->with('success', 'Event created successfully.');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Validation failed: ' . $e->getMessage());
        }
    }
    public function update_calendar(Request $request, $id)
    {
        try {
            $event = Calendar::find($id);
            if ($event) {
                $request->validate([
                    'agenda' => 'required',
                    'date' => 'required|unique:calendars,date,' . $event->id,
                    'note' => 'nullable|string',
                    'is_holiday' => 'nullable|boolean',
                    'is_editable' => 'nullable|boolean',
                    'Bonus_Manhours' => 'nullable|integer',
                ]);
                $event->update([
                    'agenda' => $request->agenda,
                    'date' => $request->date,
                    'note' => $request->note,
                    'is_holiday' => $request->is_holiday ?? 0,
                    'is_editable' => $request->is_editable ?? 0,
                    'Bonus_Manhours' => $request->Bonus_Manhours ?? 0
                ]);
                return redirect()->back()->with('success', 'Event updated successfully.');
            } else {
                return redirect()->back()->with('error', 'Event not found.');
            }
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Validation failed: ' . $e->getMessage());
        }
    }
    public function destroy_calendar($id)
    {
        try {
            $event = Calendar::find($id);
            if ($event) {
                $event->delete();
                return redirect()->back()->with('success', 'Event deleted successfully.');
            } else {
                return redirect()->back()->with('error', 'Event not found.');
            }
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Validation failed: ' . $e->getMessage());
        }
    }
}
