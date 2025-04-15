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