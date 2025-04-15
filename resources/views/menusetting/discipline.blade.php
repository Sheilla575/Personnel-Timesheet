<h2 class="h4 mb-1">Grouped Master Data Disciplline & Position</h2>
<p class="mb-4">
    Add new disciplines and view the complete list of existing disciplines
</p>
<div class="card shadow">
    <div class="card-body">
        <div class="toolbar row mb-3">
            <div class="col">
                <form class="form-inline">
                    <div class="form-row">
                        <form method="GET" action="{{ route('Page_Setting') }}">
                            <div class="form-group col-md-6">
                                <input type="text" class="form-control" name="search" id="search" value="{{ request('search') }}" placeholder="Search Position" />
                            </div>
                        </form>
                        <div class="form-group col-md-6">
                            <label class="sr-only" for="inlineFormCustomSelectPref">Head Of</label>
                            <select class="custom-select select2" id="inlineFormCustomSelectPref">
                                <option selected>Head of Discipline Choose...</option>
                                @foreach($disciplin as $c)
                                <option value="1">{{ $c->disciplin_name }}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col ml-auto">
                <div class="dropdown float-right">
                    <button class="btn btn-primary float-right ml-3" type="button" data-toggle="modal" data-target="#AddPosition">
                        Add more Position+
                    </button>
                </div>
            </div>
        </div>
        <!-- table -->
        <table class="table table-bordered">
            <thead>
                <!-- <tr role="row">
                                    <th colspan="3">Orders</th>
                                    <th colspan="4">Billing</th>
                                    <th colspan="3">State</th>
                                </tr> -->
                <tr role="row">
                    <th>
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="all" />
                            <label class="custom-control-label" for="all"></label>
                        </div>
                    </th>
                    <th>ID</th>
                    <th>Head of Discipline</th>
                    <th>Code Position</th>
                    <th class="w-50">Position</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                @foreach($position as $p)
                <tr>
                    <td>
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="4574" />
                            <label class="custom-control-label" for="4574"></label>
                        </div>
                    </td>
                    <td>{{ $p->disciplin->id }}</td>
                    <td>{{ $p->disciplin->disciplin_name }}</td>
                    <td>{{ $p->id }}</td>
                    <td>{{ $p->positions_name }}</td>
                    <td>
                        <button class="btn btn-sm dropdown-toggle more-horizontal" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="text-muted sr-only">Action</span>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" data-toggle="modal" data-target="#UpdatePosition{{ $p->id }}">Edit</a>
                            <form method="POST" action="{{ route('destroy_Position', $p->id) }}" class="d-inline" onsubmit="return confirm('are you sure want to delete this data Position - {{ $p->positions_name }} ?')">
                                @csrf
                                <button class="dropdown-item" type="submit" data-toggle="tooltip" value="Delete" title=" Delete">
                                    Remove
                                </button>
                            </form>
                            <a class="dropdown-item" href="#">Assign</a>
                        </div>
                    </td>
                </tr>
                <!-- Modal Update Position -->
                <div class="modal fade" id="UpdatePosition{{ $p->id }}" tabindex="-1" role="dialog" aria-labelledby="UpdatePosition{{ $p->id }}" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="EditEmployeeLabel">Update {{ $p->positions_name }}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form action="{{ route('update_Position', $p->id) }}" method="POST">
                                    @csrf
                                    <div class="form-group row">
                                        <div class="col-sm-3">Head Of Disciplin</div>
                                        <div class="col-sm-9">
                                            <select class="form-control bg-transparent select2" id="simple-select2" name="id_disciplin">
                                                <option value="{{ $p->disciplin->id }}">{{ $p->disciplin->id }} - {{ $p->disciplin->disciplin_name }}</option>
                                                <optgroup label="Head Of Disciplin">
                                                    @foreach($disciplin as $d)
                                                    <option value="{{ $d->id }}">{{ $d->id }} - {{ $d->disciplin_name }}</option>
                                                    @endforeach
                                                </optgroup>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="inputEmail3" class="col-sm-3 col-form-label">Code Position</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" id="inputEmail3" name="id" value="{{ $p->id }}" readonly />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="inputEmail3" class="col-sm-3 col-form-label">Name Position</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" id="inputEmail3" name="positions_name" value="{{ $p->positions_name }}" />
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
            {{ $position->links('partials.pagination') }}
        </table>
    </div>
</div>


<!-- Modal Add Position -->
<div class="modal fade" id="AddPosition" tabindex="-1" role="dialog" aria-labelledby="AddPosition" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="EditEmployeeLabel">Add Position</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form action="{{ route('store_Position') }}" method="POST">
                    @csrf
                    <div class="form-group row">
                        <div class="col-sm-3">Code unique Position (ID)</div>
                        <div class="col-sm-9">
                            <input class="form-control" id="example-date" type="text" name="id" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-3">Name Position</div>
                        <div class="col-sm-9">
                            <input class="form-control" id="example-date" type="text" name="positions_name" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-3">Head Of </div>
                        <div class="col-sm-9">
                            <select class="form-control select2" id="simple-select2" name="id_disciplin">
                                <option value="">Option</option>
                                @foreach($disciplin as $d)
                                <option value="{{ $d->id }}">{{ $d->disciplin_name }}</option>
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