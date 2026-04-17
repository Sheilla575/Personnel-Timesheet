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
    {{ $listproject->links('partials.pagination') }}
</table>

<button type="button" class="btn btn-primary mb-2" data-toggle="modal" data-target="#addProject">
    Add New Project
</button>

<div class="modal fade" id="addProject" tabindex="-1" role="dialog" aria-labelledby="addProjectLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <form action="{{ route('store_Project') }}" method="POST">
            @csrf
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Add Project</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div class="modal-body">
                    <div class="form-group">
                        <label for="code_project">Code Project</label>
                        <input type="text" class="form-control" name="code_project" required>
                    </div>

                    <div class="form-group">
                        <label for="name_project">Name Project</label>
                        <input type="text" class="form-control" name="name_project" required>
                    </div>

                    <div class="form-group">
                        <label for="start_date">Start Date</label>
                        <input type="date" class="form-control" name="start_date" required>
                    </div>

                    <div class="form-group">
                        <label for="end_date">End Date</label>
                        <input type="date" class="form-control" name="end_date" required>
                    </div>

                    <div class="form-group">
                        <label for="project_manager">Project Manager</label>
                        <select class="form-control select2" name="project_manager" required>
                            <option value="">Select Manager</option>
                            @foreach ($projectManagers as $manager)
                                <option value="{{ $manager->id }}">{{ $manager->name }}</option>
                            @endforeach
                        </select>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary">Save Project</button>
                </div>
            </div>
        </form>
    </div>
</div>
