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
                        <th>ID</th>
                        <th>User</th>
                        <th>Email</th>
                        <th class="w-25">Department/Position</th>
                        <th>Role Aksess</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    @foreach($employee as $p)
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
                                <strong>{{ $p->name }}</strong>
                            </p>
                            <small class="mb-0 text-muted">{{ $p->id }}</small>
                        </td>
                        <td>
                            <p class="mb-0 text-muted">{{ $p->email }}</p>
                        </td>
                        <td class="w-25">
                            <small class="text-muted">{{ $p->position->disciplin->disciplin_name }}</small>
                            <p class="mb-0 text-muted">
                                <a href="#" class="text-muted">{{ $p->position->positions_name }}</a>
                            </p>
                        </td>
                        <td class="text-muted">
                            <p class="mb-0 text-muted">{{ $p->role->roles_name }}</p>
                            <small>Level{{ $p->role->level_roles }}</small>
                        </td>
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
                                <a class="dropdown-item" href="#">Edit</a>
                                <a class="dropdown-item" href="#">Remove</a>
                                <a class="dropdown-item" href="#">Assign</a>
                            </div>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
</div>