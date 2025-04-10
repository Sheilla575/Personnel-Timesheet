@extends('layout.mainpage')
@section('main')
<div class="container-fluid">
    <div class="row justify-content-center">
        <div class="col-12">
            <h3 class="mb-0 mt-5">Project</h3>
            <div class="mt-2 align-items-center">
                <h5 class="text-muted">{{ $project->name_project }}</h5>
            </div>
            <div class="row  mt-4">
                <div class="col-md-6 col-xl-3 mb-4">
                    <div class="card shadow">
                        <div class="card-body">
                            <p class="small text-muted mb-0">Team Member Project</p>
                            <div class="row align-items-center mt-2 mb-1">
                                <div class="col align-items-center">
                                    <span class="h4">26</span>
                                    <!-- <div class="align-items-center no-gutters">
                            <div class="progress progress-sm" style="height:3px">
                              <div class="progress-bar bg-primary" role="progressbar" style="width: 47%" aria-valuenow="87" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-3 mb-4">
                    <div class="card shadow">
                        <div class="card-body">
                            <p class="small text-muted mb-0">Total Plan Manhours</p>
                            <div class="row align-items-center mt-2">
                                <div class="col align-items-center">
                                    <span class="h4">12.356</span>
                                    <div class="align-items-center no-gutters">
                                        <div class="progress progress-sm" style="height:3px">
                                            <div class="progress-bar bg-primary" role="progressbar" style="width: 47%" aria-valuenow="87" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-3 mb-4">
                    <div class="card shadow">
                        <div class="card-body">
                            <p class="small text-muted mb-0">Total Approve Manhours</p>
                            <div class="row align-items-center mt-2">
                                <div class="col align-items-center">
                                    <span class="h4">456</span>
                                    <div class="align-items-center no-gutters">
                                        <div class="progress progress-sm" style="height:3px">
                                            <div class="progress-bar bg-success" role="progressbar" style="width: 47%" aria-valuenow="87" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-3 mb-4">
                    <div class="card shadow">
                        <div class="card-body">
                            <p class="small text-muted mb-0">Total Actual Manhours</p>
                            <div class="row align-items-center mt-2">
                                <div class="col align-items-center">
                                    <span class="h4">356</span>
                                    <div class="align-items-center no-gutters">
                                        <div class="progress progress-sm" style="height:3px">
                                            <div class="progress-bar bg-warning" role="progressbar" style="width: 47%" aria-valuenow="87" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <h2 class="h3 mb-4 page-title"><a class="text-muted nav-item" href="#">Project</a>/Pekerjaan Engineering Service South Senoro Project</h2> -->

            <div class="row">
            </div>
            <div class="my-4">
                <ul class="nav nav-tabs" id="pills-tab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link nav-1 active" id="pills-team-tab" data-toggle="pill" href="#pills-team" role="tab" aria-controls="pills-team" aria-selected="false">Team Member</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-1" id="pills-timesheet-tab" data-toggle="pill" href="#pills-timesheet" role="tab" aria-controls="pills-timesheet" aria-selected="true"><span class="fe fe-calendar mr-2"></span>Timesheet</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-1" id="pills-plan-manhours-tab" data-toggle="pill" href="#pills-plan-manhours" role="tab" aria-controls="pills-plan-manhours" aria-selected="false">Reports Man Hours</a>
                    </li>
                </ul>
            </div>
            <div class="tab-content mb-1" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-team" role="tabpanel" aria-labelledby="pills-team-tab">
                    @include('menuproject.teamproject')
                </div>
                <div class="tab-pane fade" id="pills-timesheet" role="tabpanel" aria-labelledby="pills-timesheet-tab">
                    @include('menuproject.reporttimesheet')
                </div>
                <div class="tab-pane fade" id="pills-plan-manhours" role="tabpanel" aria-labelledby="pills-plan-manhours-tab">
                    @include('menuproject.reportmanhours')
                </div>

            </div>
        </div>
    </div> <!-- .row -->
</div> <!-- .container-fluid -->
@endsection