@extends('layout.mainpage')
@section('main')
<div class="container-fluid">
    <div class="row justify-content-center">
        <div class="col-12">
            <h1 class="page-title"></h1>
        </div>
        <!-- .col-12 -->
    </div>
    <div class="col-md-12 my-4">
        <h2 class="h4 mb-1">Log Import</h2>
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
                                <input type="text" class="form-control" id="search1" value="" placeholder="Search" />
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
                                    <input type="checkbox" class="custom-control-input" id="all2" />
                                    <label class="custom-control-label" for="all2"></label>
                                </div>
                            </td>
                            <th>Import Data</th>
                            <th>File Name</th>
                            <th>Status </th>
                            <th>Message</th>
                            <th>User By</th>
                            <th>Detail Import</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($logimport as $i)
                        <tr>
                            <td>
                                <div class="custom-control custom-checkbox">
                                    <input
                                        type="checkbox"
                                        class="custom-control-input"
                                        id="{{ $i->id }}" />
                                    <label
                                        class="custom-control-label"
                                        for="{{ $i->id }}"></label>
                                </div>
                            </td>
                            <td>
                                <p class="mb-0 text-muted">
                                    <strong>{{ $i->source_table }}</strong>
                                </p>
                            </td>
                            <td>
                                <p class="mb-0 text-muted">{{ $i->filename }}</p>
                            </td>
                            <td>
                                <p class="mb-0 text-muted">
                                    <a href="#" class="text-muted">{{ $i->status  }}</a>
                                </p>
                            </td>
                            <td class="text-muted">
                                <p class="mb-0 text-muted">{{ $i->message }}</p>
                            </td>
                            <td>{{ $i->imported_by_name  }}</td>
                            <td>
                                {{ $i->imported_at }}
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
                {{ $logimport->links('partials.pagination') }}
            </div>
        </div>
    </div>
</div>

@endsection