@extends('layout.mainpage')
@section('main')
<div class="container-fluid">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-10 col-xl-12">
            <div class="row mt-4">
                <div class="col-md-3">
                    <div class="card shadow mb-4">
                        <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col-3 text-center">
                                    <span class="circle circle-md bg-primary">
                                        <span class="fe fe-briefcase fe-24 text-white"></span>
                                    </span>
                                </div>
                                <div class="col">
                                    <h3 class="h6 mb-0 text-uppercase">General</h3>
                                    <p class="small text-muted mb-0">Popular questions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card shadow mb-4">
                        <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col-3 text-center">
                                    <span class="circle circle-md bg-success">
                                        <span class="fe fe-shopping-bag fe-24 text-white"></span>
                                    </span>
                                </div>
                                <div class="col">
                                    <h3 class="h6 mb-0 text-uppercase">Orders</h3>
                                    <p class="small text-muted mb-0">Orders proccesing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card shadow mb-4">
                        <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col-3 text-center">
                                    <span class="circle circle-md bg-warning">
                                        <span class="fe fe-truck fe-24 text-white"></span>
                                    </span>
                                </div>
                                <div class="col">
                                    <h3 class="h6 mb-0 text-uppercase">Shipment</h3>
                                    <p class="small text-muted mb-0">Shipping problems</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card shadow mb-4">
                        <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col-3 text-center">
                                    <span class="circle circle-md bg-secondary">
                                        <span class="fe fe-package fe-24 text-white"></span>
                                    </span>
                                </div>
                                <div class="col">
                                    <h3 class="h6 mb-0 text-uppercase">Return</h3>
                                    <p class="small text-muted mb-0">Returning item</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="toolbar row align-items-center mb-1">
                <div class="col">
                    <p>Control project settings and view the list of existing projects</p>
                </div>
                <div class="col-auto">
                    <form class="form-inline searchform">
                        <div class="form-row">
                            <input class="form-control mr-sm-2 pl-4" style="width: 350px; font-size: 12px;" type="search" placeholder="Search Project ..." aria-label="Search">
                        </div>
                    </form>
                </div>
            </div>
            <table class="table border bg-white">
                <thead>
                    <tr>
                        <th>Title Project</th>
                        <th>Code Project</th>
                        <th>Project Manager</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    @foreach($listproject->where('project_manager', user()->id) as $j)
                    <tr>
                        <th scope="col"></i>{{ $j->name_project }}</th>
                        <td>{{ $j->code_project }}</td>
                        <td>{{ $j->employee->name_user }}</td>
                        <td>{{ $j->status }}</td>
                        <td>
                            <a type="button" class="btn btn-sm" href="/project/{{ $j->code_project }}">
                                <small class="fe fe-external-link fe-16 text-muted"></small>
                            </a>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
            <nav aria-label="Table Paging" class="mb-0 text-muted">
                <ul class="pagination justify-content-end mb-0">
                    <li class="page-item">
                        <a class="page-link" href="#">Previous</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">1</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">2</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">3</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
            <!-- end section I -->
            <hr class="my-4">
            <strong class="mb-0">System</strong>
            <p>Please enable system alert you will get.</p>
            <div class="list-group mb-5 shadow">
                <div class="list-group-item">
                    <div class="row align-items-center">
                        <div class="col">
                            <strong class="mb-0">Notify me about new features and updates</strong>
                            <span class="badge badge-pill badge-success">Active</span>
                            <p class="text-muted mb-0">NK-P-241102.</p>
                        </div> <!-- .col -->
                        <div class="col-auto">
                            <div class="custom-control custom-switch">
                                <input type="checkbox" class="custom-control-input" id="alert3" checked>
                                <span class="custom-control-label"></span>
                            </div>
                        </div> <!-- .col -->
                    </div> <!-- .row -->
                </div> <!-- .list-group-item -->
            </div>
        </div> <!-- .row -->
    </div> <!-- .container-fluid -->


</div>

@endsection