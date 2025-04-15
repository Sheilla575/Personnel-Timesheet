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
                            <tr>
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