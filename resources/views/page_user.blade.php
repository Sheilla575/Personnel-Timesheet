@extends('layout.mainpage')
@section('main')
<div class="container-fluid">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-10 col-xl-12">
            <h2 class="h3 mb-4 page-title">Master Data User/Employee</h2>
            <div class="my-4">
                <ul class="nav nav-tabs mb-4" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link nav-1 active" id="users-tab" data-toggle="tab" href="#users" role="tab" aria-controls="users" aria-selected="true">User Non HO</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-1" id="employee-tab" data-toggle="tab" href="#employee" role="tab" aria-controls="employee" aria-selected="false">Employee</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-1" id="role-tab" data-toggle="tab" href="#role" role="tab" aria-controls="role" aria-selected="false">Role Aksess</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-1" id="form-tab" data-toggle="tab" href="#form" role="tab" aria-controls="form" aria-selected="false">Form Add User</a>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="users" role="tabpanel" aria-labelledby="users-tab">
                        @include('menuusers.tabUser')
                    </div>
                    <div class="tab-pane fade" id="employee" role="tabpanel" aria-labelledby="employee-tab">
                        @include('menuusers.tabEmployee')
                    </div>
                    <div class="tab-pane fade" id="role" role="tabpanel" aria-labelledby="role-tab">
                        @include('menuusers.tabRole')
                    </div>
                    <div class="tab-pane fade" id="form" role="tabpanel" aria-labelledby="form-tab">
                        @include('menuusers.tabForm')
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