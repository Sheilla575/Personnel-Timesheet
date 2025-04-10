<h5 class="mb-0 mt-5">Department</h5>
@foreach($department as $d)
<div class="row mt-2 align-items-center">
    <div class="col">
        <p>{{ $d->department_name }}</p>
    </div>
    <div class="col-auto">
        <a class="ml-2 close" href=""><span class="fe fe-edit fe-16 mr-2"></span></a>
    </div>
</div>
@endforeach
<hr class="my-4">
<strong class="mb-0">Division</strong>
<p>Control Disciplin settings and view the list of existing departments or division</p>
<table class="table border bg-white">
    <thead>
        <tr>
            <th>Division</th>
            <th>Disciplin</th>
            <th>Head of Disciplin</th>
            <th>Date</th>
            <th></th>
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
                <button type="button" class="btn btn-sm" data-toggle="modal" data-target="#{{ $c->id }}">
                    <small class="fe fe-edit fe-12 text-muted"></small>
                </button>
            </td>
        </tr>
        <!-- Modal Detail Discipline -->
        <div class="modal fade" id="{{ $c->id }}" tabindex="-1" role="dialog" aria-labelledby="DetailHOD" aria-hidden="true">
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
                                    <input class="form-control" id="example-date" type="date" name="assignment_date" />
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