@extends('layout.mainpage')
@section('main')
<div class="container-fluid">
    <div class="row justify-content-center">
        <div class="col-12">
            <div class="row align-items-center my-4">
                <div class="col">
                    <h2 class="h3 mb-0 page-title">Employee {{ $title }}</h2>
                </div>
                <div class="col-auto">
                    <!-- <button type="button" class="btn btn-secondary"><span class="fe fe-trash fe-12 mr-2"></span>Delete</button>
                    <button type="button" class="btn btn-primary"><span class="fe fe-filter fe-12 mr-2"></span>Create</button> -->
                </div>
            </div>
            <hr>
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
            <h5 class="mb-0 mt-5">Add Personnel Project</h5>
            <div class="row col-md-12">
                <form action="{{ route('store_Activity') }}" method="POST">
                    @csrf
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="simple-select2">Search Employee</label>
                            <select class="form-control select2" id="simple-select2" name="id_employee">
                                <optgroup label="Alaskan/Hawaiian Time Zone">
                                    @foreach($employee as $e)
                                    <option value="{{ $e->id }}">{{ $e->name }} - {{ $e->position->positions_name }}</option>
                                    @endforeach
                                </optgroup>
                            </select>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="simple-select2">Plan Man Hours</label>
                            <input type="number" min="1" name="status" class="form-control">
                        </div>
                        <!-- form-group -->
                        <div class="form-group col-md-2">
                            <label for="multi-select2">Status</label>
                            <input type="text" name="status" class="form-control select2" value="Active" readonly>
                        </div>
                        <div class="form-group col-md-2" style="margin-top: 30px;">
                            <button class="btn btn-secondary add-row">Add</button>
                        </div>
                        <!-- form-group -->
                    </div>

                    <button type="submit" class="btn btn-primary">Save</button>
                </form>
            </div>
            <hr class="my-4">
            <h2 class="h4 mb-1">Import Data Team Project</h2>
            <div class="form-group col-md-10">
                <p class="small text-muted mb-2">Use this feature to import team members into a project. Please ensure the data you upload follows the requirements below:</p>
                <ul class="small mb-0">
                    <li>File Format: Excel (.xlsx)</li>
                    <li>File Size: Maximum 2MB</li>
                    <li>Each personnel must be already registered as an employee in the system.</li>
                    <li>Make sure the name and email match exactly with the existing employee data to avoid import errors.</li>
                    <li>Personnel are identified using a combination of:</li>
                    <ul class="small mb-0">
                        <li>Code Project</li>
                        <li>Email</li>
                    </ul>
                </ul>
                <a href="{{ route('downloadTemplateTeamProject') }}" class="btn btn-sm btn-outline-success">
                    Download Template Team Project
                </a>
            </div>
            <div class="form-group col-md-10">
                <livewire:import-team />
            </div>

            <!-- .tab-pane -->
            <hr>
            <!-- table -->
            <div class="card shadow">
                <div class="card-body">
                    <table class="table table-borderless table-hover">
                        <thead>
                            <tr>
                                <th>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="all2">
                                        <label class="custom-control-label" for="all2"></label>
                                    </div>
                                </th>
                                <th>ID</th>
                                <th>User</th>
                                <th>Email</th>
                                <th>Position</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($employee as $e)
                            <tr class="accordion-toggle collapsed" id="c-{{ $e->id_employee }}" data-toggle="collapse" data-parent="#c-{{ $e->id_employee }}" href="#collap-{{ $e->id_employee }}" style="border-bottom: 1px;">
                                <td>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="{{ $e->id }}">
                                        <label class="custom-control-label" for="{{ $e->id }}"></label>
                                    </div>
                                </td>
                                <td>
                                    <div class="avatar avatar-sm">
                                        <img src="{{ asset('them-timesheet/assets/avatars/face-3.jpg') }}" alt="..." class="avatar-img rounded-circle">
                                    </div>
                                </td>
                                <td>
                                    <p class="mb-0 text-muted"><strong>{{ $e->name }}</strong></p>
                                </td>
                                <td>
                                    <p class="mb-0 text-muted">{{ $e->email }}</p>
                                </td>
                                <td>
                                    <p class="mb-0 text-muted"><a href="#" class="text-muted">{{ $e->position->positions_name }}</a></p>
                                    <small class="mb-0 text-muted">{{ $e->position->disciplin->disciplin_name }}</small>
                                </td>
                                <td><button class="btn btn-sm dropdown-toggle more-horizontal" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span class="text-muted sr-only">Action</span>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item" href="#">Edit</a>
                                        <a class="dropdown-item" href="#">Remove</a>
                                        <a class="dropdown-item" href="#">Assign</a>
                                    </div>
                                </td>
                            </tr>
                            @foreach($team->where('id_employee' == $e->id_employee) as $p)
                            <tr id="collap-{{ $e->id_employee }}" class="collapse in p-3 bg-light">
                                <td>{{ $p->codeproject}}</td>
                                <td>00 Hrs</td>
                            </tr>
                            @endforeach
                            @endforeach

                        </tbody>
                    </table>
                </div>
            </div>
            <nav aria-label="Table Paging" class="my-3">
                <ul class="pagination justify-content-end mb-0">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        </div> <!-- .col-12 -->
    </div> <!-- .row -->
</div>
@endsection