<div class="toolbar row mb-3">
    <div class="col">
        <h5 class="mb-0">Department</h5>
    </div>
    <div class="col ml-auto">
        <div class="dropdown float-right">
            <button class="btn btn-primary float-right ml-3" type="button" data-toggle="modal" data-target="#AddDepartment">
                Add more Department+
            </button>
        </div>
    </div>
</div>
@foreach($department as $d)
<div class="row mt-2 align-items-center">
    <div class="col">
        <p>{{ $d->department_name }}</p>
    </div>
    <div class="col-auto">
        <button
            class="btn btn-sm dropdown-toggle more-horizontal"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            <span class="text-muted sr-only">Action</span>
        </button>
        <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" style="cursor: pointer" data-toggle="modal" data-target="#UpdateDepartment{{ $d->id }}">Edit</a>
            <form method="POST" action="{{ route('destroy_department', $d->id) }}" class="d-inline" onsubmit="return confirm('are you sure want to delete this department data - {{ $d->department_name }} ?')">
                @csrf
                <button class="dropdown-item" type="submit" data-toggle="tooltip" value="Delete" title=" Delete">
                    Remove
                </button>
            </form>
        </div>
    </div>
</div>
<div class="modal fade" id="UpdateDepartment{{ $d->id }}" tabindex="-1" role="dialog" aria-labelledby="UpdateDepartment{{ $d->id }}" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="EditEmployeeLabel">Update {{ $d->department_name }}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form action="{{ route('update_department', $d->id) }}" method="POST">
                    @csrf
                    <div class="form-group row">
                        <div class="col-sm-3">Department Name</div>
                        <div class="col-sm-9">
                            <input class="form-control" type="text" name="department_name" value="{{ $d->department_name }}" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-3">Status </div>
                        <div class="col-sm-9">
                            <select id="inputState4" class="custom-select my-1 mr-sm-2 select2" name="status" id="inlineFormInputName4">
                                <option value="{{ $d->status }}">{{ $d->status }}</option>
                                <option value="Active">Active</option>
                                <option value="Non Active">Non Active</option>
                            </select>
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
@endforeach
<hr class="my-4">
<div class="toolbar row mb-3">
    <div class="col">
        <strong class="mb-0">Discipline</strong>
        <p>Control Discipline settings and view the list of existing departments or division</p>
    </div>
    <div class="col ml-auto">
        <div class="dropdown float-right">
            <button class="btn btn-primary float-right ml-3" type="button" data-toggle="modal" data-target="#AddDiscipline">
                Add more Discipline+
            </button>
        </div>
    </div>
</div>
<table class="table border bg-white">
    <thead>
        <tr>
            <th>Division</th>
            <th>Disciplin</th>
            <th>Head of Discipline</th>
            <th>Date</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        @foreach($disciplin as $c)
        <tr>
            <td>{{ $c->division->division_name }}</td>
            <th scope="col"></i>{{ $c->disciplin_name }}</th>
            <td>{{ $c->assignment }}</td>
            <td>{{ $c->assignment_date }}</td>
            <td>
                <button
                    class="btn btn-sm dropdown-toggle more-horizontal"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    <span class="text-muted sr-only">Action</span>
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" style="cursor: pointer" data-toggle="modal" data-target="#UpdateDiscipline{{ $c->id }}">Edit</a>
                    <form method="POST" action="{{ route('destroy_discipline', $c->id) }}" class="d-inline" onsubmit="return confirm('are you sure want to delete this department data - {{ $c->disciplin_name }} ?')">
                        @csrf
                        <button class="dropdown-item" type="submit" data-toggle="tooltip" value="Delete" title=" Delete">
                            Remove
                        </button>
                    </form>
                </div>
            </td>
        </tr>
        <!-- Modal Detail Discipline -->
        <div class="modal fade" id="UpdateDiscipline{{ $c->id }}" tabindex="-1" role="dialog" aria-labelledby="DetailHOD" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="EditEmployeeLabel">Update {{ $c->disciplin_name }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form action="{{ route('assign_HOD', $c->id) }}" method="POST">
                            @csrf
                            <div class="form-group row">
                                <div class="col-sm-3">Disciplin</div>
                                <div class="col-sm-9">
                                    <input class="form-control" id="example-date" type="text" name="disciplin_name" value="{{ $c->disciplin_name }}" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputEmail3" class="col-sm-3 col-form-label">Assign HOD</label>
                                <div class="col-sm-9">
                                    <select class="form-control form-control-sm select2 bg-transparent" id="simple-select2" name="assignment">
                                        <option value="{{ $c->email }}">{{ $c->assignment }}</option>
                                        <optgroup label="Data User Management">
                                            @foreach($users as $u)
                                            <option value="{{ $u->email }}">{{ $u->name }} - {{ $u->role->roles_name }}</option>
                                            @endforeach
                                        </optgroup>
                                        <optgroup label="Data Employee">
                                            @foreach($employee as $e)
                                            <option value="{{ $e->email }}">{{ $e->name }} - {{ $e->position->positions_name }}</option>
                                            @endforeach
                                        </optgroup>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputEmail3" class="col-sm-3 col-form-label">Email</label>
                                <div class="col-sm-9">
                                    <input type="email" class="form-control" id="inputEmail3" value="employee@pt-sena.co.id" disabled />
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-3">Date</div>
                                <div class="col-sm-9">
                                    <input class="form-control" id="example-date" type="date" name="assignment_date" value="{{$c->assignment_date}}" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-3">Division</div>
                                <div class="col-sm-9">
                                    <select class="form-control select2" id="simple-select2" name="id_division">
                                        @foreach($division as $d)
                                        <option value="{{ $d->id }}">{{ $d->division_name }}</option>
                                        @endforeach
                                    </select>
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
        @endforeach
    </tbody>
</table>


<!-- Modal Add Department -->
<div class="modal fade" id="AddDepartment" tabindex="-1" role="dialog" aria-labelledby="AddDepartment" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="EditEmployeeLabel">Add Department</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form action="{{ route('store_department') }}" method="POST">
                    @csrf
                    <div class="form-group row">
                        <div class="col-sm-3">Department Name</div>
                        <div class="col-sm-9">
                            <input class="form-control" type="text" name="department_name" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-3">Status</div>
                        <div class="col-sm-9">
                            <select id="inputState4" class="custom-select my-1 mr-sm-2 select2" name="status" id="inlineFormInputName4">
                                <option value="Active">Active</option>
                                <option value="Non Active">Non Active</option>
                            </select>
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

<!-- Modal Add Discipline -->
<div class="modal fade" id="AddDiscipline" tabindex="-1" role="dialog" aria-labelledby="AddDiscipline" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="EditEmployeeLabel">Add Discipline</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form action="{{ route('store_discipline') }}" method="POST">
                    @csrf
                    <div class="form-group row">
                        <div class="col-sm-3">Discipline Name</div>
                        <div class="col-sm-9">
                            <input class="form-control" type="text" name="discipline_name" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-3">Division </div>
                        <div class="col-sm-9">
                            <select class="form-control" id="simple-select2" name="id_division">
                                <option selected>Choose...</option>
                                @foreach($division as $d)
                                    <option value="{{ $d->id }}">{{ $d->division_name }}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-3 col-form-label">Assign HOD</label>
                        <div class="col-sm-9">
                            <select class="form-control form-control-sm select2 bg-transparent" id="simple-select2" name="assignment">
                                <optgroup label="Data User Management">
                                    @foreach($users as $u)
                                        <option value="{{ $u->email }}">{{ $u->name }} - {{ $u->role->roles_name }}</option>
                                    @endforeach
                                </optgroup>
                                <optgroup label="Data Employee">
                                    @foreach($employee as $e)
                                        <option value="{{ $e->email }}">{{ $e->name }} - {{ $e->position->positions_name }}</option>
                                    @endforeach
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-3">Assignment Date</div>
                        <div class="col-sm-9">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text" id="button-addon-date"> <span class="fe fe-calendar fe-16"></span>
                                    </div>
                                </div>
                                <input type="text" class="form-control drgpicker" name="assignment_date" id="drgpicker-start" />
                            </div>
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

