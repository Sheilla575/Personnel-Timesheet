@extends('layout.mainpage')
@section('main')
<div class="container-fluid">
    <div class="row justify-content-center">
        <div class="col-12">
            <div class="mb-4">
                @if (session('success'))
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Success!</strong> {!! session('success') !!} <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                @elseif ($errors->any())
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Validation Error!</strong> Please fix the following issues:
                    <ul class="mb-0 mt-2">
                        @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                @endif
            </div>
            <div class="row align-items-center my-3">
                <div class="col">
                    <h2 class="page-title">Weekly Timesheet</h2>
                </div>
                <div class="col-auto">
                    <input class="form-control border rounded mr-2 ml-2" style="box-shadow: 6px 8px 9px rgba(203, 216, 227, 0.5);" id="week_number" onchange="fetchWeekCalendar(this.value)" type="week" name="week_number">

                </div>
            </div>
            <div class="row">
                <div class="col-md-11">
                    <!-- table -->
                    <style>
                        .frozen-column {
                            min-width: max-content;
                            /* Lebar kolom pertama */
                            position: sticky;
                            left: 0;
                            z-index: 999;
                            border-right: 1px solid #ddd;
                        }

                        th,
                        td {
                            text-align: left;
                            border: 1px solid #ddd;
                            background-color: #ffffff;
                        }

                        th {
                            background-color: #f8f9fa;
                        }

                        .days-column {
                            min-width: 75px;
                            /* Lebar per kolom bulan */
                        }
                    </style>

                    <style>
                        .texarea {
                            width: 120px;
                            background-color: #555;
                            color: #fff;
                            text-align: center;
                            border-radius: 6px;
                            padding: 5px 0;
                            position: absolute;
                            z-index: 10;
                        }

                        .tooltip {
                            position: relative;
                            display: inline-block;
                            border-bottom: 1px dotted black;
                        }

                        .tooltip .tooltiptext {
                            visibility: hidden;
                            width: 120px;
                            background-color: #555;
                            color: #fff;
                            text-align: center;
                            border-radius: 6px;
                            padding: 5px 0;
                            position: absolute;
                            z-index: 1;
                            bottom: 125%;
                            left: 50%;
                            margin-left: -60px;
                            opacity: 0;
                            transition: opacity 0.3s;
                        }

                        .tooltip .tooltiptext::after {
                            content: "";
                            position: absolute;
                            top: 100%;
                            left: 50%;
                            margin-left: -5px;
                            border-width: 5px;
                            border-style: solid;
                            border-color: #555 transparent transparent transparent;
                        }

                        .tooltip:hover .tooltiptext {
                            visibility: visible;
                            opacity: 1;
                        }
                    </style>
                    <form method="POST" action="{{ route('draft_timesheet') }}" enctype="multipart/form-data">
                        @csrf
                        <table class="table table-borderless table-striped" id="timesheetTable"></table>
                    </form>
                    <table class="table table-borderless table-striped">
                        <thead>
                            <tr id="days-header">
                                <th class="frozen-column text-right"><button type="button" class="btn mb-2 btn-light btn-sm mt-3"><span class="fe fe-plus-circle fe-16 text-primary"><span></button></th>
                                <th class="frozen-column">Project</th>
                                <th></th>
                                <th class="w-25">Activity</th>
                                <th class="days-column"></th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($timesheet->where('id_employee', user()->id) as $t)
                            <tr>
                                <td class="frozen-column"><a class="ml-2 close" href=""><span class="fe fe-x-circle fe-16 mr-2"></span></a></td>
                                <td class="frozen-column text-center fe-12" colspan="2">
                                    <select class="form-control form-control-sm select2 bg-transparent border-0 text-center" title="Judul Popover">
                                        <optgroup label="Select Project">
                                            <option value="">{{ $t->code_project }}</option>
                                            @if (user()->role->level_role == 2)
                                            @foreach ($projetPM as $p)
                                            <option value="{{ $p->code_project }}">{{ $p->code_project }}</option>
                                            @endforeach
                                            @else
                                            @foreach ($projetUser as $p)
                                            <option value="{{ $p->code_project }}">{{ $p->code_project }}</option>
                                            @endforeach
                                            @endif
                                        </optgroup>
                                    </select>
                                </td>
                                <td scope="col">
                                    <select class='form-control form-control-sm mr-sm-2 bg-transparent border-0 text-muted select2 ' type='search' style="width: max-content;">
                                        <optgroup label="Select Project">
                                            <option value="">{{ $t->code_activity }}</option>
                                            <option>IT - Network monitoring and troubleshoot</option>
                                            <option>IT - Network monitoring and troubleshoot</option>
                                            <option>IT - Network monitoring and troubleshoot</option>
                                            <option>IT - Network monitoring and troubleshoot</option>
                                        </optgroup>
                                        </optgroup>
                                    </select>
                                </td>
                                @foreach($timesheetActivity->where('id_timesheet', $t->id) as $a)
                                <td class="text-center">
                                    <input class="form-control form-control-sm text-center"
                                        type="text" value="00:00"
                                        pattern="^([0-9]{1,2}):([0-5][0-9])$" required>
                                </td>
                                @endforeach
                            </tr>
                            @endforeach
                        </tbody>

                        <thead>
                            <tr>
                                <th class="frozen-column " colspan="3">
                                    <div class="d-flex justify-content-between">
                                        <button type="button" class="btn mb-2 btn-success text-white ml-2 mr-2" style="width: 75px;box-shadow: 6px 8px 9px rgba(203, 216, 227, 0.5);">Save</button>
                                        <button type="button" class="btn mb-2 btn-secondary text-white ml-2 mr-2" style="width: 95px; box-shadow: 6px 8px 9px rgba(203, 216, 227, 0.5);"><span class="fe fe-check fe-22 mr-2"></span>submit</button>
                                    </div>
                                </th>
                                <th class="frozen-column"></th>
                                <th class="days-column" style="position: static;">00h:00m</th>
                                <th class="days-column">00h:00m</th>
                                <th class="days-column">00h:00m</th>
                                <th class="days-column">00h:00m</th>
                                <th class="days-column">00h:00m</th>
                                <th class="days-column">00h:00m</th>
                                <th class="days-column">00h:00m</th>
                                <th>00h:00m</th>
                            </tr>
                        </thead>
                    </table>

                </div> <!-- .col -->
            </div> <!-- .row -->
        </div>
    </div> <!-- .row -->
</div>
<!-- <script>
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById('week_number').addEventListener("change", function() {
            let weekValue = this.value;
            if (!weekValue) return;

            let [year, weekNumber] = weekValue.split("-W"); // Ambil tahun dan week
            console.log("Year:", year, "Week:", weekNumber); // Debugging

            fetch(`/get-week-calendar?year=${year}&week_number=${weekNumber}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    let headerHTML = `
                        <th class="frozen-column text-right">
                            <button type="button" class="btn mb-2 btn-light btn-sm mt-3 add-row-btn">
                                <span class="fe fe-plus-circle fe-16 text-primary"></span>
                            </button>
                        </th>
                        <th class="frozen-column">Project</th>
                        <th></th>
                        <th class="w-25">Activity</th>
                    `; // Reset header
                    const formatter = new Intl.DateTimeFormat('en-US', {
                        day: '2-digit', // 15
                        month: 'short', // Tue
                        year: 'numeric' // 2025
                    });
                    data.forEach(item => {
                        let formattedDate = formatter.format(new Date(item.date)); // Format tanggal
                        headerHTML += `
                            <th class="text-right">
                                ${formattedDate}
                                ${item.is_holiday ? `<br><span class="text-danger ">(Holiday: ${item.description})</span>` : ""}
                            </th>`;
                    });
                    document.getElementById('days-header').innerHTML = headerHTML;
                })
                .catch(error => console.error("Fetch error:", error));
        });
    });
</script> -->
<!-- <script>
    document.addEventListener("DOMContentLoaded", function() {
        let weekInput = document.getElementById("week_number");
        let timesheetBody = document.getElementById("timesheet-body");
        let addRowButton = document.getElementById("add-row");

        // Fetch data tanggal berdasarkan minggu yang dipilih
        weekInput.addEventListener("change", function() {
            let weekValue = this.value;
            if (!weekValue) return;

            let [year, weekNumber] = weekValue.split("-W");

            fetch(`/get-week-calendar?year=${year}&week_number=${weekNumber}`)
                .then(response => response.json())
                .then(data => {
                    updateTable(data.dates); // Update tabel dengan tanggal baru
                })
                .catch(error => console.error("Fetch error:", error));
        });

        // Fungsi untuk update tabel berdasarkan tanggal
        function updateTable(dates) {
            let headerRow = document.getElementById("days-header");
            headerRow.innerHTML = `<th>Project</th><th>Activity</th>`; // Reset header

            dates.forEach(date => {
                let formattedDate = new Date(date.date).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric"
                });

                headerRow.innerHTML += `<th class="text-center">${formattedDate}${date.is_holiday ? `<br><span class="text-danger">(Libur)</span>` : ""}</th>`;
            });

            timesheetBody.innerHTML = ""; // Reset tabel body
            addRow(); // Tambahkan row pertama
        }

        // Fungsi untuk menambahkan baris baru
        function addRow() {
            let row = document.createElement("tr");
            row.innerHTML = `
                    <td><input type="text" name="projects[]" required></td>
                    <td><input type="text" name="activities[]" required></td>
                `;

            // Ambil jumlah kolom (tanggal) dari header
            let dates = document.querySelectorAll("#days-header th").length - 2;

            for (let i = 0; i < dates; i++) {
                row.innerHTML += `<td><input type="number" name="manhours[]" min="0" max="12" class="manhours" required></td>`;
            }

            timesheetBody.appendChild(row);
        }

        // Event Listener tombol tambah row
        addRowButton.addEventListener("click", addRow);
    });
</script> -->
<!-- <script>
    function fetchWeekCalendar() {
        let weekNumber = document.getElementById('week_number').value;

        fetch(`/get-week-calendar?week_number=${weekNumber}`)
            .then(response => response.json())
            .then(data => {
                let tableHTML = '<table border="1"><tr><th>Date</th><th>Agenda</th><th>Project</th><th>Activity</th><th>Man Hours</th></tr>';

                data.forEach(item => {
                    let disabledAttr = !item.is_editable ? "disabled" : ""; // Disable jika is_editable = false
                    let manHoursValue = item.default_man_hours !== null ? item.default_man_hours : ""; // Auto-isi man hours jika ada

                    tableHTML += `
                        <tr>
                            <td>${item.date} ${item.agenda ? `(Agenda: ${item.agenda})` : ""}</td>
                            <td>${item.agenda ? item.agenda : "-"}</td>
                            <td><input type="text" name="activities[][project_code]" ${disabledAttr}></td>
                            <td><input type="text" name="activities[][activity]" ${disabledAttr}></td>
                            <td><input type="number" name="activities[][man_hours]" min="0" max="12" value="${manHoursValue}" ${disabledAttr}></td>
                        </tr>
                    `;
                });

                tableHTML += '</table>';
                document.getElementById('timesheetTable').innerHTML = tableHTML;
            });
    }
</script> -->
<!-- <script>
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById('week_number').addEventListener("change", function() {
            let weekValue = this.value;
            if (!weekValue) return;

            let [year, weekNumber] = weekValue.split("-W"); // Ambil tahun dan week
            console.log("Year:", year, "Week:", weekNumber); // Debugging

            fetch(`/get-week-calendar?year=${year}&week_number=${weekNumber}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    // let tableHTML = `
                    //     <table border="1">
                    //         <tr>
                    //             <th>Project</th>
                    //             <th>Activity</th>
                    //             <th>${item.date} (Holiday: ${item.description})</th>
                    //         </tr>
                    // `;

                    // data.forEach(item => {
                    //     let formattedDate = formatter.format(new Date(item.date)); // Format tanggal

                    // });

                    data.forEach(item => {
                        tableHTML += `
                         <table border="1">
                            <th class="text-right">
                                ${item.date}
                                ${item.is_holiday ? `<br><span class="text-danger ">(Holiday: ${item.description})</span>` : ""}
                            </th>`;
                        if (item.is_holiday) {
                            // Jika hari libur, otomatis isi 8 jam kerja & disable input
                            tableHTML += `
                                <tr>
                                    <td>${item.date} (Holiday: ${item.description})</td>
                                    <td colspan="2">Auto-filled</td>
                                    <td>
                                        <input type="hidden" name="activities[][man_hours]" value="8">
                                        8 Hours
                                    </td>
                                </tr>
                            `;
                        } else {
                            // Jika bukan hari libur, tampilkan input normal
                            tableHTML += `
                                <tr>
                                    <td>
                                        <input type="hidden" name="activities[][date]" value="${item.date}">
                                        ${item.date}
                                    </td>
                                    <td><input type="text" name="activities[][project_code]" required></td>
                                    <td><input type="text" name="activities[][activity]" required></td>
                                    <td><input type="number" name="activities[][man_hours]" min="0" max="12" required></td>
                                </tr>
                            `;
                        }
                    });

                    tableHTML += '</table>';
                    document.getElementById('timesheetTable').innerHTML = tableHTML;
                })
                .catch(error => console.error("Fetch error:", error));
        });
    });
</script> -->
<!-- <script>
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById('week_number').addEventListener("change", function() {
            let weekValue = this.value;
            if (!weekValue) return;

            let [year, weekNumber] = weekValue.split("-W"); // Ambil tahun dan week
            console.log("Year:", year, "Week:", weekNumber); // Debugging

            fetch(`/get-week-calendar?year=${year}&week_number=${weekNumber}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    let tableHTML = `
                        <table border="1">
                            <thead>
                                <tr>
                                    <th>Project</th>
                                    <th>Activity</th>
                    `;

                    // **Menambahkan header tanggal**
                    data.forEach(item => {
                        let formattedDate = new Date(item.date).toLocaleDateString("id-ID", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric"
                        });

                        tableHTML += `<th>${formattedDate} ${item.is_holiday ? `<br><span class="text-danger">(Holiday: ${item.description})</span>` : ""}</th>`;
                    });

                    tableHTML += `</tr></thead><tbody>`;

                    // **Menambahkan baris input**
                    tableHTML += `
                        <tr>
                            <td><input type="text" name="activities[][project_code]" required></td>
                            <td><input type="text" name="activities[][activity]" required></td>
                    `;

                    data.forEach(item => {
                        if (item.is_holiday) {
                            // **Hari Libur - Isi otomatis 8 jam, disable input**
                            tableHTML += `<td><input type="hidden" name="activities[][man_hours]" value="8"> 8 Hours (Auto-filled)</td>`;
                        } else {
                            // **Hari kerja normal**
                            tableHTML += `<td><input type="number" name="activities[][man_hours]" min="0" max="12" required></td>`;
                        }
                    });

                    tableHTML += `</tr></tbody></table>`;

                    document.getElementById('timesheetTable').innerHTML = tableHTML;
                })
                .catch(error => console.error("Fetch error:", error));
        });
    });
</script> -->

<!-- Fix -->
<script>
    document.addEventListener("DOMContentLoaded", function() {
        const weekNumberInput = document.getElementById('week_number');
        const timesheetTable = document.getElementById('timesheetTable');
        const userId = "{{ user()->id }}"; // ini masukin nilai user id dari server
        let weekData = [];

        weekNumberInput.addEventListener("change", function() {
            let weekValue = this.value;
            if (!weekValue) return;

            let [year, weekNumber] = weekValue.split("-W"); // Ambil tahun dan week
            console.log("Year:", year, "Week:", weekNumber); // Debugging

            fetch(`/get-week-calendar?year=${year}&week_number=${weekNumber}&employee_id=${userId}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {

                    // **Menambahkan header tanggal**
                    weekData = data;

                    let tableHTML = `
                        <table class="table table-borderless table-striped">
                        
                        <input type="hidden" name="id_employee" value='{{ user()->id }}'>
                        <input type="hidden" name="week" value='${weekNumber}'>
                        <input type="hidden" name="year" value='${year}'>
                            <thead>
                                <tr>
                                     <th class="frozen-column text-right"><button type="button" onclick="addNewRow()" class="btn mb-2 btn-light btn-sm mt-3"><span class="fe fe-plus-circle fe-16 text-primary"><span></button></th>
                                    <th class="frozen-column w-25">Project</th>
                                    <th></th>
                                    <th class="w-25">Activity</th>
                    `;

                    // **Menambahkan header tanggal**
                    const weekDates = data.weekDates;
                    weekData.weekDates.forEach(item => {
                        let formattedDate = new Date(item.date).toLocaleDateString("id-ID", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric"
                        });

                        tableHTML += `<th>${formattedDate} ${item.is_holiday ? `<br><span class="text-danger">(${item.agenda})</span>` : ""}</th>`;
                    });

                    tableHTML += `</tr></thead><tbody id="timesheetBody"></tbody></table>
                       <thead>
                            <tr>
                                <th class="frozen-column" colspan="2">
                                    <div class="d-flex">
                                        <button type="submit" name="action" value="draft" class="btn mb-2 btn-secondary text-white mr-2" style="width: 75px;box-shadow: 6px 8px 9px rgba(203, 216, 227, 0.5);">Save</button>
                                        <button type="submit" name="action" value="pending"class="btn mb-2 btn-success text-white ml-2" style="width: 95px; box-shadow: 6px 8px 9px rgba(203, 216, 227, 0.5);"><span class="fe fe-check fe-22 mr-2"></span>submit</button>
                                    </div>
                                </th>
                                <th class="frozen-column" colspan="9"></th>
                            </tr
                        </thead>
                    `;

                    timesheetTable.innerHTML = tableHTML;

                    // Tambahkan satu baris awal secara default
                    // addNewRow();
                    let isLocked = data.status; // Ambil status dari data yang diterima
                    console.log('Status:', isLocked);
                    if (data.activities && data.activities.length > 0) {
                        data.activities.forEach((activity, i) => {
                            addNewRow(activity, isLocked);
                        });
                    } else {
                        addNewRow(null, isLocked);
                    }
                    if (weekData.status == 'Draft') {
                        weekData.activities.forEach((activity, i) => {

                        });
                    }
                    if (weekData.status == 'Pending') {
                        weekData.activities.forEach((activity, i) => {

                        });
                    }
                })
                .catch(error => console.error("Fetch error:", error));
        });

        // **Fungsi untuk menambahkan row baru**
        window.addNewRow = function(activity = null, locked = false) {
            let rowHTML = '';
            const tbody = document.getElementById('timesheetBody');
            const isLocked = activity?.status ?? 'new'; // Ambil nilai dari parameter
            let rowId = `row-${Date.now()}`;
            let selectedProject = activity?.code_project ?? '';
            let selectedActivity = activity?.code_activity ?? '';
            let detailDates = activity?.details ?? {};

            if (isLocked == 'new') {
                rowHTML = `
                    <tr id="${rowId}">
                        <td>
                            <a class="ml-2 close" onclick="removeRow('${rowId}')"><span class="fe fe-x-circle fe-16 mr-2"></span></a>
                        </td>
                        <td class="frozen-column" colspan="2">
                        <select class="form-control form-control-sm select2 bg-transparent border-0" title="Judul Popover" name="activities[${rowId}][code_project]">
                            <option>Select Project</option>    
                            <optgroup label="Select Project">
                                @if (user()->role->level_role == 2)
                                @foreach ($projetPM as $p)
                                <option value="{{ $p->code_project }}">{{ $p->code_project }}</option>
                                @endforeach
                                @else
                                @foreach ($projetUser as $p)
                                <option value="{{ $p->code_project }}">{{ $p->code_project }}</option>
                                @endforeach
                                @endif
                            </optgroup>
                            
                            <optgroup label="Internal Diciplin">
                                @foreach($disciplin as $d)
                                    <option>{{ $d->disciplin_name }}</option>
                                @endforeach
                            </optgroup>
                        </select>
                        </td>
                        <td>
                            <select class="form-control form-control-sm mr-sm-2 bg-transparent border-0 text-muted select2" name="activities[${rowId}][code_activity]" style="width: max-content;">
                             <option>Select Activity</option>        
                            <optgroup label="Select Activity">
                                    @foreach ($activity as $a)
                                    <option value="{{ $a->id }}">{{ $a->id }} - {{ $a->name_activity }}</option>
                                    @endforeach
                                </optgroup>
                            </select>
                        </td>
                    `;
                weekData.weekDates.forEach(item => {
                    let dateStr = item?.date || ''; // atau beri default kosong
                    if (dateStr) {
                        let noteId = `note-${Date.now()}-${dateStr.replace(/-/g, '')}`;
                        let match = activity?.details?.[dateStr] ?? {};
                        let manHours = match[dateStr]?.man_hours ?? 0;
                        let note = match?.note || '';

                        // lanjut generate rowHTML sesuai kebutuhan...
                        // let noteId = `Manhours`;
                        if (match.status == 'Draft') {
                            rowHTML +=
                                `<td>
                                <input type="date" name="activities[${rowId}][${noteId}][date]" value='${item.date}' hidden>
                                <input class="form-control form-control-sm text-center" type="text" value="${item.man_hours}" type="hidden" name="activities[${rowId}][${noteId}][man_hours]" style="width: 60px;"onfocus="showNote('${noteId}')" 
                                                onblur="hideNote('${noteId}')" 
                                                oninput="validateWeekHours()">
                                <textarea id="${noteId}" name="activities[${rowId}][${noteId}][note]" class="form-control note-input mt-2" placeholder="Tambahkan catatan..." style="display: none;"></textarea>
                                </td>`;
                        }
                        if (item.is_editable == '0') {
                            rowHTML +=
                                `<td>
                                <input type="date" name="activities[${rowId}][${noteId}][date]" value='${item.date}' hidden>
                                <input class="form-control form-control-sm text-center" type="text" value="${manHours}" type="hidden" name="activities[${rowId}][${noteId}][man_hours]" value="${manHours}" style="width: 60px;" readonly>
                                </td>`;
                        } else {
                            rowHTML +=
                                `<td>
                                <input type="date" name="activities[${rowId}][${noteId}][date]" value='${item.date}' hidden>
                                <input class="form-control form-control-sm text-center" type="text" value="${manHours}" type="hidden" name="activities[${rowId}][${noteId}][man_hours]" style="width: 60px;"onfocus="showNote('${noteId}')" 
                                                onblur="hideNote('${noteId}')" 
                                                oninput="validateWeekHours()">
                                <textarea id="${noteId}" name="activities[${rowId}][${noteId}][note]" class="form-control note-input mt-2" placeholder="Tambahkan catatan..." style="display: none;"></textarea>
                                </td>`;
                        }
                    } else {
                        console.warn('Tanggal tidak ditemukan di item:', item);
                    }

                });
            } else {
                rowHTML += `
                 <tr id="${rowId}">
                    <td>
                    </td>
                     <td class="frozen-column" colspan="2">
                    <select class="form-control form-control-sm select2 bg-transparent border-0" title="Judul Popover" name="activities[${rowId}][code_project]">
                        <optgroup label="Select Project">
                            
                            @if (user()->role->level_role == 2)
                            @foreach ($projetPM as $p)
                            <option value="{{ $p->code_project }}" ${selectedProject == "{{ $p->code_project }}" ? 'selected' : ''}>{{ $p->code_project }}</option>
                            @endforeach
                            @else
                            @foreach ($projetUser as $p)
                            <option value="{{ $p->code_project }}">{{ $p->code_project }}</option>
                            @endforeach
                            @endif
                        </optgroup>
                        
                        <optgroup label="Internal Diciplin">
                            @foreach($disciplin as $d)
                                <option>{{ $d->disciplin_name }}</option>
                            @endforeach
                        </optgroup>
                    </select>
                    </td>
                    <td>
                        <select class="form-control form-control-sm mr-sm-2 bg-transparent border-0 text-muted select2" name="activities[${rowId}][code_activity]" style="width: max-content;">
                            <optgroup label="Select Activity">
                                @foreach ($activity as $a)
                                <option value="{{ $a->id }}" ${selectedActivity == "{{ $a->id }}" ? 'selected' : ''}>{{ $a->id }} - {{ $a->name_activity }}</option>
                                @endforeach
                            </optgroup>
                        </select>
                    </td>
                `;
                weekData.weekDates.forEach(item => {
                    let dateStr = item?.date || ''; // atau beri default kosong

                    if (dateStr) {
                        let noteId = `note-${Date.now()}-${dateStr.replace(/-/g, '')}`;
                        let match = activity?.details?.[dateStr] ?? {};
                        let manHours = match.man_hours ?? 0;
                        let status = match.status; // Ambil status dari match
                        let note = match?.note || '';
                        console.log('manHours:', activity.status);

                        // lanjut generate rowHTML sesuai kebutuhan...
                        // let noteId = `Manhours`;

                        if (item.is_editable == '0') {
                            rowHTML = `<td>
                                <input type="date" name="activities[${rowId}][${noteId}][date]" value='${item.date}' hidden>
                                <input class="form-control form-control-sm text-center" type="text" value="${manHours}" type="hidden" name="activities[${rowId}][${noteId}][man_hours]" value="${manHours}" style="width: 60px;" readonly>
                                </td>`;
                        }
                        if (activity.status == 'Pending') {
                            rowHTML += `<td>
                                <input type="date" name="activities[${rowId}][${noteId}][date]" value='${item.date}' hidden>
                                <input class="form-control form-control-sm text-center" type="text" value="${manHours}" type="hidden" name="activities[${rowId}][${noteId}][man_hours]" value="${manHours}" style="width: 60px;" readonly>
                                </td>`;
                        } else {
                            rowHTML += `<td>
                        <input type="date" name="activities[${rowId}][${noteId}][date]" value='${item.date}' hidden>
                        <input class="form-control form-control-sm text-center" type="text" value="${manHours}" type="hidden" name="activities[${rowId}][${noteId}][man_hours]" style="width: 60px;"onfocus="showNote('${noteId}')" 
                                        onblur="hideNote('${noteId}')" 
                                        oninput="validateWeekHours()">
                        <textarea id="${noteId}" name="activities[${rowId}][${noteId}][note]" class="form-control note-input mt-2" placeholder="Tambahkan catatan..." style="display: none;"></textarea>
                        </td>`;
                        }
                    } else {
                        console.warn('Tanggal tidak ditemukan di item:', item);
                    }

                });
            }

            rowHTML += `</tr>`;
            tbody.insertAdjacentHTML("beforeend", rowHTML);
        };

        // **5️⃣ Fungsi untuk menghapus row**
        window.removeRow = function(rowId) {
            let row = document.getElementById(rowId);
            if (row) {
                row.remove();
                validateWeekHours(); // Periksa kembali total jam kerja setelah menghapus row
            }
        };

        // **Fungsi untuk validasi total manhours dalam 1 minggu**
        // window.validateWeekHours = function() {
        //     let totalHours = 0;
        //     document.querySelectorAll('input[name="activities[][man_hours]"]').forEach(input => {
        //         totalHours += parseFloat(input.value) || 0;
        //     });

        //     if (totalHours < 40) {
        //         alert("Total jam kerja dalam 1 minggu harus minimal 40 jam!");
        //     }
        // };

        // **7️⃣ Fungsi untuk menampilkan note saat input manhours diklik**
        window.showNote = function(noteId) {
            document.getElementById(noteId).style.display = "block";
        };

        // **8️⃣ Fungsi untuk menyembunyikan note saat input kehilangan fokus**
        window.hideNote = function(noteId) {
            let noteField = document.getElementById(noteId);
            if (noteField.value.trim() === "") {
                noteField.style.display = "none";
            }
        };
    });
</script>
<!-- <script>
    document.addEventListener("DOMContentLoaded", function() {
        const weekNumberInput = document.getElementById("week_number");
        const timesheetTable = document.getElementById("timesheetTable");
        let weekData = [];

        weekNumberInput.addEventListener("change", function() {
            let weekValue = this.value;
            if (!weekValue) return;

            let [year, weekNumber] = weekValue.split("-W"); // Ambil tahun dan week
            console.log("Year:", year, "Week:", weekNumber); // Debugging

            fetch(`/get-week-calendar?year=${year}&week_number=${weekNumber}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    weekData = data; // Simpan data minggu untuk menambah row baru
                    let tableHTML = `
                    <table class="table table-borderless table-striped">
                        <input type="hidden" name="id_employee" value='EP008'>
                        <input type="hidden" name="week" value='${weekNumber}'>
                        <input type="hidden" name="year" value='${year}'>
                        <thead>
                            <tr>
                                <th class="text-center"></th>
                                <th class="frozen-column w-25">Project</th>
                                <th></th>
                                <th class="w-25">Activity</th>
                `;

                    // Menambahkan header tanggal
                    data.forEach(item => {
                        let formattedDate = new Date(item.date).toLocaleDateString("id-ID", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                        });

                        tableHTML += `<th class="days-column">${formattedDate} ${item.is_holiday ? `<br><span class="text-danger">(${item.agenda})</span>` : ""}</th>`;
                    });

                    tableHTML += `</tr></thead><tbody id="timesheetBody"></tbody> </table>
                    <button type="button" onclick="addNewRow()" class="btn btn-primary mt-2">Tambah Row</button>
                    <button type="submit" class="btn btn-primary submit-btn">Save</button>
                `;
                    timesheetTable.innerHTML = tableHTML;

                    // Tambahkan satu baris awal secara default
                    addNewRow();
                })
                .catch(error => console.error("Fetch error:", error));
        });

        // Fungsi untuk menambahkan row baru
        window.addNewRow = function() {
            const tbody = document.getElementById("timesheetBody");
            let rowId = `row-${Date.now()}`;
            let rowHTML = `
             <tr id="${rowId}">
                <td ><a class="ml-2 close" href="" onclick="removeRow('${rowId}')"><span class="fe fe-x-circle fe-16 mr-2"></span></a></td>
                <td class="frozen-column" colspan="2">
                    <select class="form-control form-control-sm select2 bg-transparent border-0" title="Judul Popover" name="activities[${rowId}][code_project]">
                        <optgroup label="Select Project">
                            <option value="">Select Project</option>
                           @if (user()->role->level_role == 2)
                            @foreach ($projetPM as $p)
                            <option value="{{ $p->code_project }}">{{ $p->code_project }}</option>
                            @endforeach
                            @else
                            @foreach ($projetUser as $p)
                            <option value="{{ $p->code_project }}">{{ $p->code_project }}</option>
                            @endforeach
                            @endif
                        </optgroup>
                        <optgroup label="Internal Diciplin">
                            @foreach($disciplin as $d)
                                <option>{{ $d->disciplin_name }}</option>
                            @endforeach
                        </optgroup>
                    </select>
                </td>
               <td>
                <select class="form-control form-control-sm select2 activity-select" name="activities[${rowId}][code_activity]">
                    <option value="">Pilih Activity</option>
                    @foreach ($activity as $a)
                    <option value="{{ $a->id }}">{{ $a->id }} - {{ $a->name_activity }}</option>
                    @endforeach
                </select>
            </td>
        `;

            weekData.forEach(item => {
                let noteId = `manhours-${Date.now()}-${item.date.replace(/-/g, "")}`;

                if (item.is_editable == "0") {
                    rowHTML +=
                        `<td>
                        <input class="form-control form-control-sm text-center" type="text" value="08:00" disabled>
                    </td>`;
                } else {
                    rowHTML += `<td>
                    <input type="hidden" name="activities[${rowId}][${noteId}][date]" value='${item.date}'>
                    <input class="form-control form-control-sm text-center manhour-input" type="number" 
                        
                        name="activities[${rowId}][${noteId}][man_hours]" 
                        style="width: 60px;" onfocus="showNote('${noteId}')"
                        onblur="hideNote('${noteId}')" 
                        oninput="validateWeekHours()">

                    <span id="${noteId}-tooltip" class="note-tooltip" style="display: none;">Note :
                    <textarea id="${noteId}" name="activities[${rowId}][${noteId}][note]" class="form-control note-input mt-2" 
                        placeholder="Tambahkan catatan..." style="display: none;"></textarea></span>
                </td>`;
                }
            });

            rowHTML += `</tr>`;

            tbody.insertAdjacentHTML("beforeend", rowHTML);
        };

        // Fungsi untuk menghapus row
        window.removeRow = function(rowId) {
            let row = document.getElementById(rowId);
            if (row) {
                row.remove();
                validateWeekHours();
            }
        };

        // Fungsi untuk menampilkan tooltip catatan
        window.showNote = function(noteId) {
            let noteTooltip = document.getElementById(`${noteId}-tooltip`);
            let noteTextarea = document.getElementById(noteId);
            if (noteTooltip) {
                noteTooltip.style.display = "block";
                noteTextarea.style.display = "block";
                noteTooltip.style.position = "relatif";
                noteTextarea.style.width = "150px";
                noteTooltip.style.zIndex = "10";
                noteTooltip.style.background = "white";
                noteTooltip.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
                noteTooltip.style.padding = "5px";
                noteTooltip.style.borderRadius = "5px";
                noteTooltip.style.left = "50%";
                noteTooltip.style.top = "30%";
                noteTooltip.style.transform = "translateX(-50%)";
                noteTooltip.style.cursor = "pointer";
            }
            // Klik tooltip untuk membuka textarea
            noteTooltip.onclick = function() {
                if (noteTooltip) {
                    noteTextarea.style.display = "block"; // Tampilkan textarea
                    noteTextarea.focus(); // Fokus ke textarea
                }
                if (!noteTooltip) {
                    noteTooltip.style.display = "none"; // Tampilkan textarea
                }
            };
        };

        window.hideNote = function(noteId, event) {
            let noteTooltip = document.getElementById(`${noteId}-tooltip`);
            let noteTextarea = document.getElementById(noteId);

            // Periksa apakah event berasal dari dalam textarea
            if (event && noteTextarea.contains(event.relatedTarget)) {
                return; // Jangan sembunyikan jika masih fokus di textarea
            }

            // Sembunyikan hanya jika pengguna mengklik di luar input dan textarea
            setTimeout(() => {
                if (noteTextarea && !noteTextarea.matches(":focus")) {
                    noteTextarea.style.display = "none";
                    if (noteTooltip) {
                        noteTooltip.style.display = "none"; // Kembalikan tooltip jika tidak ada input
                    }
                }
            }, 200);
        };

        // Fungsi untuk validasi pengisian manhours
        window.validateWeekHours = function() {
            let allRows = document.querySelectorAll("#timesheetBody tr");
            let projectActivities = new Map();
            let dailyHours = {};
            let weeklyHours = 0;

            allRows.forEach(row => {
                let project = row.querySelector(".project-select").value;
                let activity = row.querySelector(".activity-select").value;
                let hoursInputs = row.querySelectorAll(".manhour-input");

                if (!project || !activity) return;

                let key = `${project}-${activity}`;
                if (projectActivities.has(key)) {
                    alert(`Activity "${activity}" sudah ada di Project "${project}". Harap pilih activity lain.`);
                    row.remove();
                    return;
                } else {
                    projectActivities.set(key, true);
                }

                hoursInputs.forEach(input => {
                    let value = input.value;
                    let [hours, minutes] = value.split(":").map(Number);
                    let totalMinutes = hours * 60 + minutes;

                    let date = input.name.match(/\d{4}-\d{2}-\d{2}/)[0];
                    dailyHours[date] = (dailyHours[date] || 0) + totalMinutes;
                    weeklyHours += totalMinutes;
                });
            });

            // if (weeklyHours / 60 < 40) {
            //     alert("Total jam dalam satu minggu harus minimal 40 jam.");
            // }
        };
    });
</script> -->
<!-- <script>
    function fetchWeekDates() {
        let weekNumber = document.getElementById('week_number').value;

        fetch(`/get-week-calendar?week_number=${weekNumber}`)
            .then(response => response.json())
            .then(data => {
                let tableHTML = '<table border="1"><tr><th>Date</th><th>Project</th><th>Activity</th><th>Man Hours</th></tr>';

                data.forEach(item => {
                    let disabledAttr = item.is_editable ? "" : "disabled"; // Jika tidak bisa diedit, disable input
                    let manHoursValue = item.is_holiday ? "8" : ""; // Jika libur, default 8 jam

                    tableHTML += `
                        <tr>
                            <td>${item.date} ${item.is_holiday ? `(Holiday: ${item.description})` : ""}</td>
                            <td><input type="text" name="activities[][project_code]" ${disabledAttr}></td>
                            <td><input type="text" name="activities[][activity]" ${disabledAttr}></td>
                            <td><input type="number" name="activities[][man_hours]" min="0" max="12" value="${manHoursValue}" ${disabledAttr}></td>
                        </tr>
                    `;
                });

                tableHTML += '</table>';
                document.getElementById('timesheetTable').innerHTML = tableHTML;
            });
    }
</script> -->

@endsection