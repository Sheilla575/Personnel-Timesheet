@extends('layout.mainpage')
@section('main')
<div class="container-fluid">
    <div class="row justify-content-center">

        <div class="col-12 col-lg-10 col-xl-10">
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
            <h2 class="h3 mb-4 page-title">Settings</h2>
            <div class="my-4">
                <ul class="nav nav-tabs mb-4" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link nav-1 active" id="division-tab" data-toggle="tab" href="#division" role="tab" aria-controls="division" aria-selected="true">Division & Department</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-1" id="discipline-tab" data-toggle="tab" href="#discipline" role="tab" aria-controls="discipline" aria-selected="false">Discipline</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-1" id="activity-tab" data-toggle="tab" href="#activity" role="tab" aria-controls="activity" aria-selected="false">Activity Settings</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-1" id="project-tab" data-toggle="tab" href="#project" role="tab" aria-controls="project" aria-selected="false">Project</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-1" id="employee-tab" data-toggle="tab" href="#employee" role="tab" aria-controls="employee" aria-selected="false">Roles Aksess</a>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="division" role="tabpanel" aria-labelledby="division-tab">
                        @include('menusetting.division')
                    </div>
                    <div class="tab-pane fade" id="discipline" role="tabpanel" aria-labelledby="discipline-tab">
                        @include('menusetting.discipline')
                    </div>
                    <div class="tab-pane fade" id="activity" role="tabpanel" aria-labelledby="activity-tab">
                        @include('menusetting.activity')
                    </div>
                    <div class="tab-pane fade" id="project" role="tabpanel" aria-labelledby="project-tab">
                        @include('menusetting.project')
                    </div>
                    <div class="tab-pane fade" id="employee" role="tabpanel" aria-labelledby="employee-tab">

                    </div>
                </div> <!-- /.card-body -->

            </div>
        </div> <!-- .row -->
    </div> <!-- .container-fluid -->

    <!-- Modal Form Edit Employee -->
    <div class="modal fade" id="EditEmployee" tabindex="-1" role="dialog" aria-labelledby="EditEmployeeLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="EditEmployeeLabel">Settings Employee</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group row">
                            <label for="inputEmail3" class="col-sm-3 col-form-label">Username</label>
                            <div class="col-sm-9">
                                <input type="email" class="form-control" id="inputEmail3" value="Mohammad Darwis" disabled />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputEmail3" class="col-sm-3 col-form-label">Email</label>
                            <div class="col-sm-9">
                                <input type="email" class="form-control" id="inputEmail3" value="employee@pt-sena.co.id" disabled />
                            </div>
                        </div>
                        <fieldset class="form-group">
                            <div class="row">
                                <label class="col-form-label col-sm-3 pt-0">Status</label>
                                <div class="col-sm-9">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                                        <label class="form-check-label" for="gridRadios1">
                                            Active
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                        <label class="form-check-label" for="gridRadios2">
                                            Resign
                                        </label>
                                    </div>
                                    <div class="form-check disabled">
                                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled />
                                        <label class="form-check-label" for="gridRadios3">
                                            Third disabled radio
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <div class="form-group row">
                            <div class="col-sm-3">Decipline</div>
                            <div class="col-sm-9">
                                <select class="form-control select2" id="simple-select2">
                                    <option value="AK">Junior Process Safety Engineer</option>
                                    <option value="AK">Senior Process Safety Engineer</option>
                                    <option value="AK">Process Engineer</option>
                                    <option value="AK">Senior Process Engineer</option>
                                    <option value="AK">Instrument Engineer</option>
                                </select>
                            </div>

                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3" for="exampleFormControlTextarea1">Note</label>
                            <div class="col-sm-9">
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                            </div>
                        </div>
                        <div class="form-group mb-2 text-right">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">
                                Close
                            </button>
                            <button type="submit" class="btn btn-primary">
                                submit
                            </button>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <!-- <button type="button" class="btn mb-2 btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn mb-2 btn-primary">Send message</button> -->
                </div>
            </div>
        </div>
    </div>
</div>

@endsection