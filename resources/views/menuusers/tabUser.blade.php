<div class="col-md-12 my-4">
    <h2 class="h4 mb-1">Customize table rendering</h2>
    <p class="mb-3">
        Additional table rendering with vertical border, rich
        content formatting for cell
    </p>
    <div class="card shadow">
        <div class="card-body">
            <div class="toolbar">
                <form class="form">
                    <div class="form-row">
                        <div class="form-group col-auto mr-auto">
                            <label
                                class="my-1 mr-2 sr-only"
                                for="inlineFormCustomSelectPref1">Show</label>
                            <select
                                class="custom-select mr-sm-2"
                                id="inlineFormCustomSelectPref1">
                                <option value="">...</option>
                                <option value="1">12</option>
                                <option value="2" selected>32</option>
                                <option value="3">64</option>
                                <option value="3">128</option>
                            </select>
                        </div>
                        <div class="form-group col-auto">
                            <label for="search" class="sr-only">Search</label>
                            <input
                                type="text"
                                class="form-control"
                                id="search1"
                                value=""
                                placeholder="Search" />
                        </div>
                    </div>
                </form>
            </div>
            <!-- table -->
            <table class="table table-borderless table-hover">
                <thead>
                    <tr>
                        <td>
                            <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    class="custom-control-input"
                                    id="all2" />
                                <label
                                    class="custom-control-label"
                                    for="all2"></label>
                            </div>
                        </td>
                        <th></th>
                        <th>User</th>
                        <th>Role Aksess</th>
                        <th>Type User</th>
                        <th>Create Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($users as $u)
                    <tr>
                        <td>
                            <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    class="custom-control-input"
                                    id="2474" />
                                <label
                                    class="custom-control-label"
                                    for="2474"></label>
                            </div>
                        </td>
                        <td>
                            <div class="avatar avatar-md">
                                <img
                                    src="them-timesheet/assets/avatars/face-3.jpg"
                                    alt="..."
                                    class="avatar-img rounded-circle" />
                            </div>
                        </td>
                        <td>
                            <p class="mb-0 text-muted">
                                <strong>{{ $u->name }}</strong>
                            </p>
                            <small class="mb-0 text-muted">{{ $u->email }}</small>
                        </td>
                        <td>
                            <p class="mb-0 text-muted">{{ $u->role->roles_name }}</p>
                            <small class="mb-0 text-muted">Active</small>
                        </td>
                        <td>
                            <p class="mb-0 text-muted">
                                <a href="#" class="text-muted">{{ $u->type_user  }}</a>
                            </p>
                            <small class="mb-0 text-muted"></small>
                        </td>
                        <td class="text-muted">{{ $u->created_at->format('d/M/Y') }}</td>
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
                                <a class="dropdown-item" type="bottom" data-toggle="modal" data-target="#updateuser{{$u->id}}">Edit</a>
                                <form method="POST" action="{{ route('destroy_user', $u->id) }}" class="d-inline" onsubmit="return confirm('are you sure want to delete this data users ?')">
                                    @csrf
                                    <button class="dropdown-item" type="submit" data-toggle="tooltip" value="Delete" title=" Delete">
                                        Remove
                                    </button>
                                </form>
                                <a class="dropdown-item" href="#">Assign</a>
                            </div>
                        </td>
                    </tr>
                    <!-- Modal Update User -->
                    <div class="modal fade" id="updateuser{{$u->id}}" tabindex="-1" role="dialog" aria-labelledby="updateuser{{$u->id}}" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="EditEmployeeLabel">Add Position</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <form action="{{ route('update_user', $u->id) }}" method="POST">
                                        @csrf
                                        <div class="form-group row">
                                            <div class="col-sm-3">Name</div>
                                            <div class="col-sm-9">
                                                <input class="form-control" type="text" name="name" value="{{ $u->name }}" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3">Email</div>
                                            <div class="col-sm-9">
                                                <input class="form-control" type="text" name="email" value="{{ $u->email }}" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3">Role Aksess </div>
                                            <div class="col-sm-9">
                                                <select class="form-control select2" id="simple-select2" name="level_roles">
                                                    <option value="{{ $u->id }}">{{ $u->role->roles_name }}</option>
                                                    @foreach($roles as $r)
                                                    <option value="{{ $r->id }}">{{ $r->roles_name }}</option>
                                                    @endforeach
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3">Type User </div>
                                            <div class="col-sm-9">
                                                <select id="inputState4" class="custom-select my-1 mr-sm-2 select2" name="type_user" id="inlineFormInputName4">
                                                    <option value="{{ $u->type_user }}">{{ $u->type_user }}</option>
                                                    <option value="HO">HO</option>
                                                    <option value="Non HO">Non HO</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3">New Password</div>
                                            <div class="col-sm-9">
                                                <input class="form-control" type="password" name="password" value="{{ $u->password }}" />
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
        </div>
    </div>
</div>