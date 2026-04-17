@extends('layout.mainpage')
@section('main')
<div class="container-fluid">
    <div class="row justify-content-center">
        <div class="col-12">
            <div class="mb-4">
                @if (session('success'))
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Success!</strong> {!! session('success') !!} <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                @elseif (session('error'))
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Error!</strong> {!! session('error') !!}<button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                @endif
            </div>
            <div class="row align-items-center my-3">
                <div class="col">
                    <h2 class="page-title">Agenda Calendar</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-7">
                    <div id="calendar"></div>
                </div>
                <div class="col-md-5 border-left">
                    <div class="row align-items-center my-3">
                        <div class="col">
                            <form action="{{ url()->current() }}" method="get" class="form-inline mr-auto searchform">
                                <div class="form-row">
                                    <input class="form-control mr-sm-2 pl-4" type="search" placeholder="Search Event ..." aria-label="Search" value="{{ request('keyword') }}">
                                </div>
                            </form>
                        </div>
                        <div class="col-auto">
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#eventModal">
                                <span class="fe fe-plus fe-16 mr-3"></span>New Event
                            </button>
                        </div>
                        <div class="col-md-12 mt-3 timeline">
                            <h6 class="text-uppercase text-muted mb-4">Event</h6>
                            @foreach($events as $e)
                            @php
                            $date = $e->date;
                            $dateText = new DateTime($date);
                            @endphp

                            @if($e->is_holiday == '1')
                            <div class="pb-3 timeline-item item-primary">
                                <div class="card shadow mr-3 mb-3">
                                    <div class="card-body py-3 ">
                                        <div class="row align-items-center">
                                            <div class="col pr-0">
                                                <strong class="text-primary"><?php echo $dateText->format('Y, M d') ?></strong>
                                                <p class="mb-0">{{ $e->agenda }}</p>
                                                @if($e->is_holiday == '1')
                                                <span class="badge badge-primary ml-2">Public Holiday</span>
                                                @else
                                                <span class="badge badge-secondary ml-2">Event Company</span>
                                                @endif
                                                <p class="small text-muted mb-0">{{ $e->note }}</p>
                                            </div>
                                            <div class="col-auto">
                                                <button type="button" class="btn btn-sm" data-toggle="modal" data-target="#eventModal{{ $e->id }}">
                                                    <small class="fe fe-edit fe-12 text-muted"></small>
                                                </button>
                                                <button type="button" class="btn btn-sm" data-toggle="modal">
                                                    <small class="fe fe-trash fe-12 text-danger"></small>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            @else
                            <div class="pb-3 timeline-item item-success">
                                <div class=" card shadow mr-3 mb-3">
                                    <div class="card-body py-3 ">
                                        <div class="row align-items-center">
                                            <div class="col pr-0">
                                                <strong class="text-primary"><?php echo $dateText->format('Y, M d') ?></strong>
                                                <p class="mb-0">{{ $e->agenda }}</p>
                                                <p class="small text-muted mb-0">{{ $e->note }}</p>
                                            </div>
                                            <div class="col-auto">
                                                <button type="button" class="btn btn-sm" data-toggle="modal" data-target="#eventModal{{ $e->id }}">
                                                    <small class="fe fe-edit fe-12 text-muted"></small>
                                                </button>

                                                <form method="POST" action="{{ route('destroy_calendar', $e->id) }}" class="d-inline" onsubmit="return confirm('are you sure want to delete this event {{ $e->agenda }}, {{ $e->date }} ?')">
                                                    @csrf
                                                    <button class="btn btn-sm" type="submit" data-toggle="tooltip" value="Delete" title=" Delete">
                                                        <small class="fe fe-trash fe-12 text-danger"></small>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            @endif
                            <!-- update event modal -->
                            <div class="modal fade" id="eventModal{{ $e->id }}" tabindex="-1" role="dialog" aria-labelledby="eventModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="varyModalLabel">Event : {{ $e->agenda }} | <?php echo $dateText->format('Y, M d') ?></h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <form action="{{ route('update_calendar', $e->id) }}" method="POST">
                                            @csrf
                                            <div class="modal-body p-4">

                                                <div class="form-group">
                                                    <label for="eventTitle" class="col-form-label">Event</label>
                                                    <input type="text" class="form-control" id="eventTitle" name="agenda" value="{{ $e->agenda }}" placeholder="Add event title" />
                                                </div>
                                                <div class="form-group">
                                                    <label for="eventNote" class="col-form-label">Note</label>
                                                    <textarea class="form-control" id="eventNote" name="note" value="{{ $e->note }}" placeholder="Add some note for your event">{{ $e->note }}</textarea>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-8">
                                                        <label for="eventType">Event type</label>
                                                        <div class="form-check">
                                                            @if($e->is_holiday == '1')
                                                            <input class="form-check-input" type="checkbox" name="is_holiday" id="is_holiday" value="1" checked />
                                                            @else
                                                            <input class="form-check-input" type="checkbox" name="is_holiday" value="1" id="is_holiday" />
                                                            @endif
                                                            <label class="form-check-label" for="is_holiday">
                                                                Public Holiday
                                                            </label>
                                                        </div>
                                                        <div class="form-check mb-2">
                                                            @if($e->is_editable == '1')
                                                            <input class="form-check-input" type="checkbox" name="is_editable" value="1" id="is_editable" checked />
                                                            @else
                                                            <input class="form-check-input" type="checkbox" name="is_editable" value="1" id="is_editable" />
                                                            @endif
                                                            <label class="form-check-label" for="is_editable">
                                                                Enable - Timesheet
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="date-input1">Date Event</label>
                                                        <div class="input-group">
                                                            <div class="input-group-prepend">
                                                                <div class="input-group-text" id="button-addon-date"> <span class="fe fe-calendar fe-16"></span>
                                                                </div>
                                                            </div>
                                                            <input type="date" class="form-control" name="date" value="{{ $e->date }}" id="drgpicker-start" />
                                                        </div>
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="startDate">Man hours</label>
                                                        <div class="input-group">
                                                            <div class="input-group-prepend">
                                                                <div class="input-group-text" id="button-addon-time"> <span class="fe fe-clock fe-16"></span>
                                                                </div>
                                                            </div>
                                                            <input type="number" class="form-control time-input" id="start-time" placeholder="0" value="{{ $e->Bonus_Manhours }}" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer d-flex justify-content-between">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">
                                                    Close
                                                </button>
                                                <button type="submit" class="btn mb-2 btn-primary">
                                                    Save Event
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <!-- update event modal -->
                            @endforeach
                        </div>
                    </div>
                    {{ $events->links('partials.pagination') }}
                </div>
            </div>
            <!-- new event modal -->
            <div class="modal fade" id="eventModal" tabindex="-1" role="dialog" aria-labelledby="eventModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="varyModalLabel">New Event</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form action="{{ route('store_calendar') }}" method="POST">
                            @csrf
                            <div class="modal-body p-4">
                                <div class="form-group">
                                    <label for="eventTitle" class="col-form-label">Event</label>
                                    <input type="text" class="form-control" id="eventTitle" name="agenda" value="" placeholder="Add event title" />
                                </div>
                                <div class="form-group">
                                    <label for="eventNote" class="col-form-label">Note</label>
                                    <textarea class="form-control" id="eventNote" name="note" placeholder="Add some note for your event"></textarea>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-8">
                                        <label for="eventType">Event type</label>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="is_holiday" value="1" id="is_holiday" />
                                            <label class="form-check-label" for="is_holiday">
                                                Public Holiday
                                            </label>
                                        </div>
                                        <div class="form-check mb-2">
                                            <input class="form-check-input" type="checkbox" name="is_editable" value="1" id="is_editable" />
                                            <label class="form-check-label" for="is_editable">
                                                Enable - Timesheet
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="date-input1">Start Date</label>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text" id="button-addon-date"> <span class="fe fe-calendar fe-16"></span>
                                                </div>
                                            </div>
                                            <input type="text" class="form-control drgpicker" name="date" id="drgpicker-start" />
                                        </div>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="startDate">Man hours (Optional)</label>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text" id="button-addon-time"> <span class="fe fe-clock fe-16"></span>
                                                </div>
                                            </div>
                                            <input type="number" class="form-control time-input" id="start-time" name="Bonus_Manhours" value="0" placeholder="0" />
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="modal-footer d-flex justify-content-between">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">
                                        Close
                                    </button>
                                    <button type="submit" class="btn btn-primary">
                                        Save Event
                                    </button>
                                </div> -->
                            </div>
                            <div class="modal-footer d-flex justify-content-between">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">
                                    Close
                                </button>
                                <button type="submit" class="btn mb-2 btn-primary">
                                    Save Event
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div> <!-- .row -->
</div>

<!-- Script Calender -->
<script src="them-timesheet/js/fullcalendar.js"></script>
<script src="them-timesheet/js/fullcalendar.custom.js"></script>
<script>
    /** full calendar */
    var calendarEl = document.getElementById('calendar')
    if (calendarEl) {
        document.addEventListener('DOMContentLoaded', function() {
            var calendar = new FullCalendar.Calendar(calendarEl, {
                plugins: ['dayGrid', 'timeGrid', 'list', 'bootstrap'],
                timeZone: 'UTC',
                themeSystem: 'bootstrap',
                header: {
                    left: 'today, prev, next',
                    center: 'title',
                    right: '' //'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
                },
                buttonIcons: {
                    prev: 'fe-arrow-left',
                    next: 'fe-arrow-right',
                    prevYear: 'left-double-arrow',
                    nextYear: 'right-double-arrow'
                },
                weekNumbers: true,
                eventLimit: true, // allow "more" link when too many events
                events: '/get-events'
            })
            calendar.render()
        })
    }
</script>
@endsection
