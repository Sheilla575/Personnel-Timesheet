<h2 class="h4 mb-1">Weekly Timesheet</h2>
<p class="mb-4">
    Customized table based on Bootstrap with additional elements
    and more functions
</p>
<div class="row col-12 justify-content-end  ">
    <div class="col-md-7 mb-4">
        <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <strong class="mr-auto">Pendding Approval</strong>
                <small>11 mins ago</small>
                <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="toast-body"><span class="fe fe-alert-circle fe-16 mr-2 text-danger"></span> You have pending timesheet approvals for <strong>Week 50</strong>. </div>
        </div>
    </div>
    <div class="col-md-7 mb-4">
        <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <strong class="mr-auto">Pending Approval</strong>
                <small>11 mins ago</small>
                <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="toast-body"><span class="fe fe-alert-circle fe-16 mr-2 text-danger"></span> You have pending timesheet approvals for <strong>Week 50</strong>. </div>
        </div>
    </div>
</div>
<hr>
<div class="card shadow eq-card">
    <div class="card-body">
        <div class="toolbar row align-items-center  mb-5">
            <div class="col">
                <form class="form-inline mr-auto searchform">
                    <div class="form-row">
                        <input class="form-control mr-sm-2 pl-4" style="width: 350px; font-size: 12px;" type="search" placeholder="Search by Name ..." aria-label="Search">
                    </div>
                </form>
            </div>
            <div class="col ml-auto">
                <div class="dropdown align-items-center d-flex float-right">
                    <form class="form-inline mr-auto">
                        <div class="form-group">
                            <select class="form-control" style="width: 130px;">
                                <option value=""><a class="dropdown-item" href="#">Export</a></option>
                                <option value=""><a class="dropdown-item" href="#">Delete</a></option>
                            </select>
                        </div>
                    </form>
                    <strong class="title m-3">Week 50</strong>
                    <a href="#" class="nav-link p-0"><span class="fe fe-chevron-left fe-16"><span></a>
                    <a href="#" class="nav-link p-0"><span class="fe fe-chevron-right fe-16"><span></a>
                    <div class="dropdown-menu" aria-labelledby="actionMenuButton">
                        <a class="dropdown-item" href="#">Export</a>
                        <a class="dropdown-item" href="#">Delete</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
            </div>
        </div>
        <style>
            table {
                border-collapse: separate;
                /* Resets spacing */
                border-spacing: 1px;
                /* Equivalent to cellspacing="1" */
            }
        </style>
        <table class="table timesheet table-hover mt-n3 mb-n1">
            <thead>
                <tr class="thead-light">
                    <th class="w-25" colspan="2" style="font-size: 14px; padding-left: 3.5rem;">User</th>
                    <th class="days-column" style="font-size: 14px;">Day 1</th>
                    <th class="days-column" style="font-size: 14px;">Day 2</th>
                    <th class="days-column" style="font-size: 14px;">Day 3</th>
                    <th class="days-column" style="font-size: 14px;">Day 4</th>
                    <th class="days-column" style="font-size: 14px;">Day 5</th>
                    <th class="days-column" style="font-size: 14px;">Day 6</th>
                    <th class="days-column" style="font-size: 14px;">Day 7</th>

                    <th style="font-size: 14px;">Total Man-hrs</th>
                    <th style="font-size: 14px;">Status</th>
                    <th style="font-size: 14px;">Action</th>
                </tr>
            </thead>
            <tbody>
                @foreach($team as $t)
                    <!-- Data User-->
                    <tr class="accordion-toggle collapsed" id="c-{{ $t->id_employee }}" data-toggle="collapse" data-parent="#c-{{ $t->id_employee }}" href="#collap-{{ $t->id_employee }}" style="border-bottom: 1px;">
                        <td class="border-0" style="width: 10px;">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="{{ $t->id_employee }}" />
                                <label class="custom-control-label" for="{{ $t->id_employee }}"></label>
                            </div>
                        </td>
                        <td class="w-25 border-0">
                            {{ $t->employee->name }}<br /><span class="small text-muted">{{ $t->employee->position->positions_name }}</span>
                        </td>
                        <td class="">0</td>
                        <td class="">0</td>
                        <td class="">0</td>
                        <td class="">0</td>
                        <td class="">0</td>
                        <td class="">0</td>
                        <td class="">0</td>
                        @if($timesheet->where('id_employee', $t->id_employee))
                        <!-- @foreach($timesheetactivity as $day)
                        <td class="">{{ $day->sum('hours') }}
                            <span class="fe fe-message-square ml-2"
                                data-bs-toggle="popover"
                                data-bs-placement="top"
                                data-bs-html="true"
                                data-bs-offset="0,14"
                                title="Notes"
                                data-content="MWT JPMP & JPMPL">
                            </span>
                        </td>
                        @endforeach -->
                    <td>
                        @if($timesheet->where('id_employee', $t->id_employee))
                        {{ $timesheetactivity->where('id_timesheet', '$t->employee->timesheet->id')->sum('hours') }}
                        @endif
                    </td>
                    @else
                    <td class="">0h</td>
                    @endif
                    <td><span class="badge badge-warning">Draft</span></td>
                    <td>
                        <button class="btn btn-sm dropdown-toggle more-horizontal" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="text-muted sr-only">Action</span>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#">Edit</a>
                            <a class="dropdown-item" href="#">Remove</a>
                            <a class="dropdown-item" href="#">Assign</a>
                        </div>
                    </td>
                </tr>
                @foreach($timesheet as $s)
                @if($t->id_employee == $s->id_employee)
                <tr id="collap-{{ $s->id_employee }}" class="collapse in p-3 bg-light">
                    <td colspan="">
                        Week - {{ $s->week }}
                    </td>
                    <td>{{ $s->activity->name_activity }}</td>
                    @foreach($timesheetactivity->where('id_timesheet', $s->id) as $ta)
                    <td class="">{{ $ta->hours }}
                        <!-- <span class="fe fe-message-square ml-2"
                            data-bs-toggle="popover"
                            data-bs-placement="top"
                            data-bs-html="true"
                            data-bs-offset="0,14"
                            title="Notes"
                            data-content="MWT JPMP & JPMPL">
                        </span> -->
                    </td>
                    @endforeach
                    <td class="">{{ $timesheetactivity->where('id_timesheet', $s->id)->sum('hours') }}</td>
                    <td colspan="2">{{ $s->status }}</td>
                </tr>
                @endif
                @endforeach
                <!-- Detail Activity User -->
                @endforeach


            </tbody>
            <thead>
                <tr class="text-center">
                    <th></th>
                    <th>
                        <div class="d-flex justify-content-between">
                            <button type="button" class="btn mb-2 btn-success text-white ml-2 mr-2" style="width: 95px;box-shadow: 6px 8px 9px rgba(203, 216, 227, 0.5);">Approve</button>
                            <button type="button" class="btn mb-2 btn-secondary text-white mr-2" style="width: 95px; box-shadow: 6px 8px 9px rgba(203, 216, 227, 0.5);"><span class="fe fe-check fe-22 mr-2"></span>Reject</button>
                        </div>
                    </th>
                    <th class="days-column">16h</th>
                    <th class="days-column">16h</th>
                    <th class="days-column">16h</th>
                    <th class="days-column">16h</th>
                    <th class="days-column">32h</th>
                    <th class="days-column">0h</th>
                    <th class="days-column">0h</th>
                    <th>88h</th>
                    <th colspan="2"></th>
                </tr>
            </thead>
        </table>

        <livewire:report-manhours :year="2025" :week="17" :codeProject="$project->code_project" />

    </div> <!-- .card-body -->
</div> <!-- .card -->
