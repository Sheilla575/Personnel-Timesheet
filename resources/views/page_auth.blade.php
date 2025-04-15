@extends('layout.mainpage')
@section('main')
<div class="container-fluid">
    <div class="row justify-content-center">
        <div class="col-12">
            <h1 class="page-title"></h1>
        </div>
        <!-- .col-12 -->
    </div>
    <div class="align-items-center h-100 d-flex w-50 mx-auto">
        <div class="mx-auto text-center">
            <h1 class="display-1 m-0 font-weight-bolder text-muted" style="font-size:80px;"></h1>
            <h1 class="mb-1 text-muted font-weight-bold">OOPS!</h1>
            <h6 class="mb-3 text-muted">You Don't have Access For this Page.</h6>
            <a href="#" class="btn btn-lg btn-primary px-5">Back to Dashboard</a>
        </div>
    </div>
</div>

@endsection