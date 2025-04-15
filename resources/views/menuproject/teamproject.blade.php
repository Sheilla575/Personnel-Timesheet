<h2 class="h4 mb-1">Project Manager</h2>
<div class="row mt-2 align-items-center">
    <div class="col">
        <p>{{ $project->employee->name_user }}</p>
    </div>
    <div class="col-auto">
        <a class="ml-2 close" href=""><span class="fe fe-edit fe-16 mr-2"></span></a>
    </div>
</div>
<strong>Team Personil Head Office<p class="text-muted">you have {{ $project->teamproject->count('code_project') }} personil for this project</p> </strong>
<div class="col-md-12 border-top">
    <div class="file-container">
        <div class="file-panel">
            <div class="row">
                <table class="table table-borderless table-striped">
                    <thead>
                        <tr>
                            <th></th>
                            <th class="w-50">Name</th>
                            <th>Discipline/Position</th>
                            <th>Plan Manhours</th>
                            <th>Last Update</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($team as $t)
                        <tr class="file-list">
                            <td class="text-center">
                                <div class="circle circle-sm bg-light">
                                    <span class="fe fe-user fe-16 text-muted"></span>
                                </div>
                                <span class="dot dot-md bg-success mr-1"></span>
                            </td>
                            <th scope="row">{{ $t->employee->name }}<br />
                                <div class="align-items-center">
                                    <span class="card badge badge-light text-success">Activity <i class="fe fe-external-link fe-12"></i></span>
                                </div>
                            </th>
                            <td class="text-muted">{{ $t->employee->position->positions_name }}</td>
                            <td></td>
                            <td class="text-muted">Mar 17, 2020</td>
                            <td>
                                <div class="file-action">
                                    <button type="button" class="btn btn-link dropdown-toggle more-vertical p-0 text-muted mx-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span class="text-muted sr-only">Action</span>
                                    </button>
                                    <div class="dropdown-menu m-2">
                                        <a class="dropdown-item" href="#"><i class="fe fe-chevrons-right fe-12 mr-4"></i>Move</a>
                                        <a class="dropdown-item" href="#"><i class="fe fe-copy fe-12 mr-4"></i>Copy</a>
                                        <a class="dropdown-item" href="#"><i class="fe fe-edit-3 fe-12 mr-4"></i>Rename</a>
                                        <a class="dropdown-item" href="#"><i class="fe fe-delete fe-12 mr-4"></i>Delete</a>
                                        <a class="dropdown-item" href="#"><i class="fe fe-share fe-12 mr-4"></i>Share</a>
                                        <a class="dropdown-item" href="#"><i class="fe fe-download fe-12 mr-4"></i>Download</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div> <!-- .row -->
        </div>
        <!-- .file-panel -->
        <div class="info-panel overflow-auto" style="height: 500px;">
            <div class="info-content p-3 border-left">
                <div class="d-flex align-items-center mb-3">
                    <div class="flex-fill">
                        <span class="circle circle-sm bg-white mr-2">
                            <span class="fe fe-user fe-18 text-muted"></span>
                        </span>
                        <span class="h6">Muhammad Darwis</span>
                    </div>
                    <span class="btn close-info">
                        <i class="fe fe-x"></i>
                    </span>
                </div>
                <p class="h5">Detail Activity</p>
                <hr class="my-2">
                <div class="tab-content" id="file-tabs">
                    <div class="tab-pane fade show active" id="detail" role="tabpanel" aria-labelledby="tab-detail">

                        <dl class="row my-4 small">
                            <dt class="col-6 text-muted">Design Basis</dt>
                            <dd class="col-6">4 hrs</dd>
                            <dt class="col-6 text-muted">Utilities & Offsite System Description</dt>
                            <dd class="col-6">23 hrs</dd>
                            <dt class="col-6 text-muted">Operating Philosophy</dt>
                            <dd class="col-6">32 hrs</dd>
                        </dl>
                        <hr>
                        <dl class="row my-4 small">
                            <dt class="col-6 text-muted">Total</dt>
                            <dd class="col-6">66 hrs</dd>
                        </dl>
                    </div> <!-- .tab-pane -->
                    <div class="tab-pane fade" id="activity" role="tabpanel" aria-labelledby="tab-activity">
                        <div class="timeline">
                            <div class="pb-3 timeline-item item-primary">
                                <div class="pl-5 small">
                                    <div class="mb-1"><strong>@Brown Asher</strong><span class="text-muted mx-1">have uploaded</span><strong>Tinydash</strong></div>
                                    <span class="badge badge-pill badge-dark">1h ago</span>
                                </div>
                            </div>
                            <div class="pb-3 timeline-item item-warning">
                                <div class="pl-5 small">
                                    <div class="mb-3"><strong>@Fletcher</strong><span class="text-muted mx-1">shared</span><strong>Tiny Admin</strong></div>
                                    <ul class="avatars-list mb-2">
                                        <li>
                                            <a href="#!" class="avatar avatar-sm">
                                                <img alt="..." class="avatar-img rounded-circle" src="./assets/avatars/face-1.jpg">
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" class="avatar avatar-sm">
                                                <img alt="..." class="avatar-img rounded-circle" src="./assets/avatars/face-4.jpg">
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" class="avatar avatar-sm">
                                                <img alt="..." class="avatar-img rounded-circle" src="./assets/avatars/face-3.jpg">
                                            </a>
                                        </li>
                                    </ul>
                                    <span class="badge badge-pill badge-dark">1h ago</span>
                                </div>
                            </div>
                            <div class="pb-3 timeline-item item-success">
                                <div class="pl-5 small">
                                    <div class="mb-2"><strong>@Kelley Sonya</strong><span class="text-muted small mx-1">has commented on</span><strong>Advanced table</strong></div>
                                    <div class="card d-inline-flex mb-2">
                                        <div class="card-body bg-light py-2 px-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
                                    </div>
                                    <span class="badge badge-pill badge-dark">1h ago</span>
                                </div>
                            </div>
                        </div> <!-- / .timeline -->
                    </div> <!-- .tab-pane -->
                </div> <!-- .tab-content -->
            </div>
        </div>
    </div> <!-- .file-container -->
</div> <!-- .tab-pane -->