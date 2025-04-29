<h5 class="mb-0 mt-5">Create New Activity</h5>
<div class="row col-12 col-lg-12 col-xl-12">
    <form action="{{ route('store_Activity') }}" method="POST">
        @csrf
        <div class="form-row">
            <div class="form-group col-md-2">
                <label for="part1">Code Activity</label>
                <input type="text" name="part1" id="part1" class="form-control code-part-1" maxlength="3" placeholder="ABC" style="width: 100px;">
            </div>
            <div class="form-group col-md-2 mt-2">
                <label for="part2 d-none"></label>
                <input type="text" name="part2" id="part2" class="form-control code-part-2" maxlength="3" placeholder="ABC" style="width: 105px;">
            </div>
            <div class="form-group col-md-2 mt-2">
                <label for="part3 d-none"></label>
                <input type="text" name="part3" id="part3" class="form-control code-part-3" maxlength="5" placeholder="ABC123" style="width: 105px;">
            </div>
            <div class="form-group col-md-6">
                <p class="mb-2">Code requirements</p>
                <p class="small text-muted"> To create a valid activity code, it must match one of the following formats</p>
                <ul class="small pl-1 mb-0">
                    <li>PS-PMT- _._._ (a combination of Code Position and Code Discipline)</li>
                    <li>InitialNameActivity-AB12 (a combination of activity initials and alphanumeric code)</li>
                </ul>
            </div>
        </div>
        <div class="form-group">
            <label for="inputAddress5">Name Activity</label>
            <input type="text" class="form-control" name="name_activity" id="inputAddress5">
        </div>
        <div class="form-group">
            <label for="inputAddress6">Dicipline Activity</label>
            <select id="inputAddress6" class="form-control select2" name="id_disciplin">
                <option selected="">Choose...</option>
                @foreach($disciplin as $d)
                <option value="{{ $d->id }}">{{ $d->id }} - {{ $d->disciplin_name }}</option>
                @endforeach
            </select>
        </div>
        <button type="submit" class="btn btn-primary">Save</button>
    </form>
</div>
<hr class="my-4">
<h2 class="h4 mb-1">Import Data Activity</h2>
<div class="form-group col-md-10">
    <p class="small text-muted mb-2">Use this feature to import activity data into the timesheet system automatically via an Excel file. Make sure each row of data follows the correct format and code rules.</p>
    <p class="small">Code Requirements: <br> To create a valid activity code, it must match one of the following formats</p>
    <ul class="small mb-0">
        <li>Format 1: PS-PMT-X02 (a combination of Code Position and Code Discipline)</li>
        <li>Format 2: InitialNameActivity-AB12 (a combination of activity initials and alphanumeric code)</li>
    </ul>
    <p class="small text-muted mb-2">All codes must be unique, match existing discipline data, and must not duplicate existing records in the system.</p>
    <a href="{{ route('downloadTemplateActivity') }}" class="btn btn-sm btn-outline-success">
        Download Template Excel Activity
    </a>
</div>
<livewire:import-activity />
<hr class="my-4">
<h2 class="h4 mb-1">List of Activity</h2>
<p class="mb-4">
    Add new activity and view the complete list of existing activity
</p>
<div class="card shadow">
    <div class="card-body">
        <div class="toolbar row mb-3">
            <div class="col">
                <form class="form-inline">
                    <div class="form-row">
                        <form method="GET" action="{{ route('Page_Setting') }}">
                            <div class="form-group col-md-6">
                                <input type="text" class="form-control" name="search" id="search" value="{{ request('search') }}" placeholder="Search Activity" />
                            </div>
                        </form>
                    </div>
                </form>
            </div>
            <div class="col ml-auto">
                <div class="dropdown float-right">
                    <form method="GET" action="{{ route('Page_Setting') }}">
                        <div class="form-group col-md-12">
                            <label class="sr-only" for="search">Filter Head of:</label>
                            <select class="custom-select select2" name="search" id="search" onchange="this.form.submit()">
                                <option disabled selected>Head of Discipline Choose...</option>
                                @foreach($list_discipline as $d)
                                    <option value="{{ $d->id }}" {{ request('search') == $d->id ? 'selected' : '' }}>
                                        {{ $d->id }} - {{ $d->disciplin_name }}
                                    </option>
                                @endforeach
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- table -->
        <table class="table table-bordered">
            <thead>
                <tr role="row">
                    <th colspan="3">Disciplines</th>
                    <th colspan="3">Activity</th>
                </tr>
                <tr role="row">
                    <th>
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="all" />
                            <label class="custom-control-label" for="all"></label>
                        </div>
                    </th>
                    <th>Code</th>
                    <th>Disciplines</th>
                    <th class="">Code</th>
                    <th class="w-50">Activity</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                @foreach($activity as $a)
                <tr>
                    <td>
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="4574" />
                            <label class="custom-control-label" for="4574"></label>
                        </div>
                    </td>
                    <td>{{ $a->disciplin->id }}</td>
                    <td>{{ $a->disciplin->disciplin_name }}</td>
                    <td>{{ $a->id }}</td>
                    <td>{{ $a->name_activity }}</td>
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
                            <a class="dropdown-item" data-toggle="modal" data-target="#UpdateActivity{{ $a->id }}">Edit</a>
                            <form method="POST" action="{{ route('destroy_Activity', $a->id) }}" class="d-inline" onsubmit="return confirm('are you sure want to delete this data Position - {{ $a->positions_name }} ?')">
                                @csrf
                                <button class="dropdown-item" type="submit" data-toggle="tooltip" value="Delete" title=" Delete">
                                    Remove
                                </button>
                            </form>
                        </div>
                    </td>
                </tr>
                <!-- Modal Update Position -->
                <div class="modal fade" id="UpdateActivity{{ $a->id }}" tabindex="-1" role="dialog" aria-labelledby="UpdateActivity{{ $a->id }}" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="EditEmployeeLabel">Update {{ $a->id }}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form action="{{ route('update_Activity', $a->id) }}" method="POST">
                                    @csrf
                                    <div class="form-group row">
                                        <div class="col-sm-3">Head Of Disciplin</div>
                                        <div class="col-sm-9">
                                            <select class="form-control bg-transparent select2" id="simple-select2" name="id_disciplin">
                                                <option value="{{ $a->disciplin->id }}">{{ $a->disciplin->id }} - {{ $a->disciplin->disciplin_name }}</option>
                                                <optgroup label="Head Of Disciplin">
                                                    @foreach($disciplin as $d)
                                                    <option value="{{ $d->id }}">{{ $d->id }} - {{ $d->disciplin_name }}</option>
                                                    @endforeach
                                                </optgroup>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="inputEmail3" class="col-sm-3 col-form-label">Code Activity</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" id="inputEmail3" name="id" value="{{ $a->id }}" readonly />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="inputEmail3" class="col-sm-3 col-form-label">Name Activity</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" id="inputEmail3" name="name_activity" value="{{ $a->name_activity }}" />
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
                        </div>
                    </div>
                </div>
                @endforeach
            </tbody>
        </table>
        {{ $activity->links('partials.pagination') }}
    </div>
</div>

<script>
    $(document).ready(function() {
        function updateFinalCode() {
            let part1 = $('.code-part-1').val().toUpperCase();
            let part2 = $('.code-part-2').val().toUpperCase();
            let part3 = $('.code-part-3').val().toUpperCase();

            // Simpan hasil gabungan ke hidden input
            $('#final_code').val(`${part1}-${part2}-${part3}`);
        }

        // Validasi input hanya huruf/angka sesuai bagian
        $('.code-part-1, .code-part-2').on('input', function() {
            this.value = this.value.replace(/[^A-Z]/gi, '').toUpperCase().slice(0, 3);
            updateFinalCode();
        });

        $('.code-part-3').on('input', function() {
            this.value = this.value.replace(/[^A-Z0-9]/gi, '').toUpperCase().slice(0, 5);
            updateFinalCode();
        });
    });
</script>
