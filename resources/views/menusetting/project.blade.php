<div class="toolbar row align-items-center mb-1">
    <div class="col">
        <strong class="mb-0">Project</strong>
        <p>Control department settings and view the list of existing departments</p>
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
        @foreach($listproject as $j)
        <tr>
            <th scope="col"></i>{{ $j->name_project }}</th>
            <td>{{ $j->code_project }}</td>
            <td>{{ $j->employee->name }}</td>
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