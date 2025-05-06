<h2 class="h4 mb-1">Project Manager</h2>
<div class="row mt-2 align-items-center">
    <div class="col">
        <p>{{ $project->employee->name_user }}</p>
    </div>
    <div class="col-auto">
        <a class="ml-2 close" href=""><span class="fe fe-edit fe-16 mr-2"></span></a>
    </div>
</div>
<strong>Team Personil Head Office<p class="text-muted">you have {{ $project->teamproject->count('code_project') }} personil for this project</p> </strong>
<div class="col-md-12 border-top">
    <div class="file-container">
        <div class="file-panel">
            <form id="timesheetForm" method="POST" action="{{ route('update_timesheet') }}">
                @csrf
                <div class="row">
                    <table class="table table-borderless table-striped">
                        <thead>
                        <tr>
                            <th></th>
                            <th class="w-50">Name</th>
                            <th>Discipline/Position</th>
                            <th>Plan Manhours</th>
                            <th>Last Update</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($team as $t)
                            <tr class="file-list accordion-toggle collapsed" id="c-{{ $t->id_employee }}" data-toggle="collapse" data-parent="#c-{{ $t->id_employee }}" href="#collap-{{ $t->id_employee }}" style="border-bottom: 1px;">
{{--                                <td class="border-0" style="width: 10px;">--}}
{{--                                    <div class="custom-control custom-checkbox">--}}
{{--                                        <input type="checkbox"--}}
{{--                                               class="custom-control-input time-sheet-checkbox"--}}
{{--                                               name="timesheet_ids[]"--}}
{{--                                               value="{{ $t->id_employee }}"--}}
{{--                                               id="emp-{{ $t->id_employee }}" />--}}
{{--                                        <label class="custom-control-label" for="emp-{{ $t->id_employee }}"></label>--}}
{{--                                    </div>--}}
{{--                                </td>--}}
                                <th scope="row">{{ $t->employee->name }}<br />
                                    <div class="align-items-center">
                                        <span class="card badge badge-light text-success">Activity <i class="fe fe-external-link fe-12"></i></span>
                                    </div>
                                </th>
                                <td class="text-muted">{{ $t->employee->position->positions_name }}</td>
                                <td></td>
                                <td class="text-muted">Mar 17, 2020</td>
                                <td>
                                    <div class="file-action">
                                        <button type="button" class="btn btn-link dropdown-toggle more-vertical p-0 text-muted mx-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span class="text-muted sr-only">Action</span>
                                        </button>
                                        <div class="dropdown-menu m-2">
                                            <a class="dropdown-item" href="#"><i class="fe fe-chevrons-right fe-12 mr-4"></i>Move</a>
                                            <a class="dropdown-item" href="#"><i class="fe fe-copy fe-12 mr-4"></i>Copy</a>
                                            <a class="dropdown-item" href="#"><i class="fe fe-edit-3 fe-12 mr-4"></i>Rename</a>
                                            <a class="dropdown-item" href="#"><i class="fe fe-delete fe-12 mr-4"></i>Delete</a>
                                            <a class="dropdown-item" href="#"><i class="fe fe-share fe-12 mr-4"></i>Share</a>
                                            <a class="dropdown-item" href="#"><i class="fe fe-download fe-12 mr-4"></i>Download</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                            <tr id="collap-{{ $t->id_employee }}" class="collapse bg-light">
                                <td colspan="6" class="p-0">
                                    <table class="table table-sm mb-0">
                                        <thead>
                                        <tr class="thead-light">
                                            <th class="w-10" style="font-size: 14px; text-align: center"></th>
                                            <th class="w-10" style="font-size: 14px; padding-left: 3.5rem; text-align: center">Week</th>
                                            <th class="w-10" style="font-size: 14px; padding-left: 3.5rem;">Activity</th>
                                            <th class="days-column" style="font-size: 14px;">Day 1</th>
                                            <th class="days-column" style="font-size: 14px;">Day 2</th>
                                            <th class="days-column" style="font-size: 14px;">Day 3</th>
                                            <th class="days-column" style="font-size: 14px;">Day 4</th>
                                            <th class="days-column" style="font-size: 14px;">Day 5</th>
                                            <th class="days-column" style="font-size: 14px;">Day 6</th>
                                            <th class="days-column" style="font-size: 14px;">Day 7</th>

                                            <th style="font-size: 14px;">Total Man-hrsss</th>
                                            <th style="font-size: 14px;">Status</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        @foreach($timesheet->where('id_employee', $t->id_employee) as $s)
                                            @if($t->id_employee == $s->id_employee)
                                                <tr>
                                                    <td class="border-0" style="width: 10px;">
                                                        <div class="custom-control custom-checkbox">
                                                            <input type="checkbox"
                                                                   class="custom-control-input time-sheet-checkbox"
                                                                   name="timesheet_ids[]"
                                                                   value="{{ $s->id }}"
                                                                   id="timesheet-{{ $s->id }}" />
                                                            <label class="custom-control-label" for="timesheet-{{ $s->id }}"></label>
                                                        </div>
                                                    </td>
                                                    <td>Week - {{ $s->week }}</td>
                                                    <td>{{ $s->activity->name_activity }}</td>
                                                    @foreach($timesheetactivity->where('id_timesheet', $s->id) as $ta)
                                                        <td>{{ $ta->hours }}</td>
                                                    @endforeach
                                                    <td>{{ $timesheetactivity->where('id_timesheet', $s->id)->sum('hours') }}</td>
                                                    <td colspan="2">{{ $s->status }}</td>
                                                </tr>
                                            @endif
                                        @endforeach
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                        <tfoot>
                            <tr class="text-center">
                                <th></th>
                                <th>
                                    <input type="hidden" name="status" id="statusInput">
                                    <input type="hidden" name="code_project" value="{{ $project->code_project }}">
                                    <div class="d-flex justify-content-between">
                                        <a class="btn mb-2 btn-success text-white ml-2 mr-2" style="width: 95px; box-shadow: 6px 8px 9px rgba(203, 216, 227, 0.5);" onclick="setStatus('approved')">Approve</a>
                                        <a class="btn mb-2 btn-secondary text-white mr-2" style="width: 95px; box-shadow: 6px 8px 9px rgba(203, 216, 227, 0.5);" onclick="setStatus('rejected')"><span class="fe fe-check fe-22 mr-2"></span>Reject</a>
                                    </div>
                                </th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </form>
        </div>
        <!-- .file-panel -->
        <div class="info-panel overflow-auto" style="height: 500px;">
            <div class="info-content p-3 border-left">
                <div class="d-flex align-items-center mb-3">
                    <div class="flex-fill">
                        <span class="circle circle-sm bg-white mr-2">
                            <span class="fe fe-user fe-18 text-muted"></span>
                        </span>
                        <span class="h6">Muhammad Darwis</span>
                    </div>
                    <span class="btn close-info">
                        <i class="fe fe-x"></i>
                    </span>
                </div>
                <p class="h5">Detail Activity</p>
                <hr class="my-2">
                <div class="tab-content" id="file-tabs">
                    <div class="tab-pane fade show active" id="detail" role="tabpanel" aria-labelledby="tab-detail">

                        <dl class="row my-4 small">
                            <dt class="col-6 text-muted">Design Basis</dt>
                            <dd class="col-6">4 hrs</dd>
                            <dt class="col-6 text-muted">Utilities & Offsite System Description</dt>
                            <dd class="col-6">23 hrs</dd>
                            <dt class="col-6 text-muted">Operating Philosophy</dt>
                            <dd class="col-6">32 hrs</dd>
                        </dl>
                        <hr>
                        <dl class="row my-4 small">
                            <dt class="col-6 text-muted">Total</dt>
                            <dd class="col-6">66 hrs</dd>
                        </dl>
                    </div> <!-- .tab-pane -->
                    <div class="tab-pane fade" id="activity" role="tabpanel" aria-labelledby="tab-activity">
                        <div class="timeline">
                            <div class="pb-3 timeline-item item-primary">
                                <div class="pl-5 small">
                                    <div class="mb-1"><strong>@Brown Asher</strong><span class="text-muted mx-1">have uploaded</span><strong>Tinydash</strong></div>
                                    <span class="badge badge-pill badge-dark">1h ago</span>
                                </div>
                            </div>
                            <div class="pb-3 timeline-item item-warning">
                                <div class="pl-5 small">
                                    <div class="mb-3"><strong>@Fletcher</strong><span class="text-muted mx-1">shared</span><strong>Tiny Admin</strong></div>
                                    <ul class="avatars-list mb-2">
                                        <li>
                                            <a href="#!" class="avatar avatar-sm">
                                                <img alt="..." class="avatar-img rounded-circle" src="./assets/avatars/face-1.jpg">
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" class="avatar avatar-sm">
                                                <img alt="..." class="avatar-img rounded-circle" src="./assets/avatars/face-4.jpg">
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" class="avatar avatar-sm">
                                                <img alt="..." class="avatar-img rounded-circle" src="./assets/avatars/face-3.jpg">
                                            </a>
                                        </li>
                                    </ul>
                                    <span class="badge badge-pill badge-dark">1h ago</span>
                                </div>
                            </div>
                            <div class="pb-3 timeline-item item-success">
                                <div class="pl-5 small">
                                    <div class="mb-2"><strong>@Kelley Sonya</strong><span class="text-muted small mx-1">has commented on</span><strong>Advanced table</strong></div>
                                    <div class="card d-inline-flex mb-2">
                                        <div class="card-body bg-light py-2 px-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
                                    </div>
                                    <span class="badge badge-pill badge-dark">1h ago</span>
                                </div>
                            </div>
                        </div> <!-- / .timeline -->
                    </div> <!-- .tab-pane -->
                </div> <!-- .tab-content -->
            </div>
        </div>
    </div> <!-- .file-container -->
</div> <!-- .tab-pane -->

<script>
    function setStatus(status) {
        document.getElementById('statusInput').value = status;
        document.getElementById('timesheetForm').submit();
    }
</script>
