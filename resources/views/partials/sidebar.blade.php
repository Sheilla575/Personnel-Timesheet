<aside class="sidebar-left border-right bg-white shadow" id="leftSidebar" data-simplebar>
    <a href="#" class="btn collapseSidebar toggle-btn d-lg-none text-muted ml-2 mt-3" data-toggle="toggle">
        <i class="fe fe-x"><span class="sr-only"></span></i>
    </a>
    <nav class="vertnav navbar navbar-light">
        <!-- nav bar -->
        <div class="w-100 mb-4 d-flex">
            <a class="navbar-brand mx-auto mt-2 flex-fill text-center" href="./index.html">
                <svg version="1.1" id="logo" class="navbar-brand-img brand-sm" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 120 120" xml:space="preserve">
                    <g>
                        <polygon class="st0" points="78,105 15,105 24,87 87,87 	" />
                        <polygon class="st0" points="96,69 33,69 42,51 105,51 	" />
                        <polygon class="st0" points="78,33 15,33 24,15 87,15 	" />
                    </g>
                </svg>
            </a>
        </div>
        <p class="text-muted nav-heading mt-4 mb-1">
            <span>Timesheet</span>
        </p>
        <ul class="navbar-nav flex-fill w-100 mb-2">
            <li class="nav-item w-100">
                <a class="nav-link" href="{{ route('worksheet') }}">
                    <i class="fe fe-calendar fe-16"></i>
                    <span class="ml-3 item-text">Timesheet</span>
                </a>
            </li>
        </ul>
        <p class="text-muted nav-heading mt-4 mb-1">
            <span>Management</span>
        </p>
        <ul class="navbar-nav flex-fill w-100 mb-2">
            <li class="nav-item w-100">
                <a class="nav-link" href="page-approval.html">
                    <i class="fe fe-pocket fe-16"></i>
                    <span class="ml-3 item-text">Approval</span>
                    <span class="badge badge-pill badge-primary">4</span>
                </a>
            </li>
            <li class="nav-item w-100">
                <a class="nav-link" href="{{ route('listproject') }}">
                    <i class="fe fe-briefcase fe-16"></i>
                    <span class="ml-3 item-text">Project</span>
                </a>
            </li>
        </ul>
        <ul class="navbar-nav flex-fill w-100 mb-2">
            <li class="nav-item dropdown">
                <a href="#Discipline" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle nav-link">
                    <i class="fe fe-award fe-16"></i>
                    <span class="ml-3 item-text">Discipline</span>
                </a>
                <ul class="collapse list-unstyled pl-4 w-100" id="Discipline">
                    @foreach ($disciplines as $item)
                    <li class="nav-item">
                        <a class="nav-link pl-3" href="{{ Route('index_Discipline', $item->id ) }}"><span class="ml-1 item-text">{{ $item->disciplin_name }}</span></a>
                    </li>
                    @endforeach
                </ul>
            </li>
        </ul>
        <p class="text-muted nav-heading mt-4 mb-1">
            <span>Setting Controller</span>
        </p>
        <ul class="navbar-nav flex-fill w-100 mb-2">
            <li class="nav-item w-100">
                <a class="nav-link" href="{{ route('index_calender') }}">
                    <i class="fe fe-calendar fe-16"></i>
                    <span class="ml-3 item-text">Calendar</span>
                </a>
            </li>
            <li class="nav-item w-100">
                <a class="nav-link" href="{{ route('index_users') }}">
                    <i class="fe fe-users fe-16"></i>
                    <span class="ml-3 item-text">Employee</span>
                </a>
            </li>
            <li class="nav-item w-100">
                <a class="nav-link" href="{{ route('Page_Setting') }}">
                    <i class="fe fe-settings fe-16"></i>
                    <span class="ml-3 item-text">Settings Apps</span>
                </a>
            </li>
            <li class="nav-item w-100">
                <a class="nav-link" href="{{ route('index_logimport') }}">
                    <i class="fe fe-database fe-16"></i>
                    <span class="ml-3 item-text">Log Import</span>
                </a>
            </li>
        </ul>
    </nav>
</aside>
