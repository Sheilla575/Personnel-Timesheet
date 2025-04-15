<div>
    <div class="mb-4">
        <label>Week:</label>
        <input class="form-control border rounded mr-2 ml-2" wire:model="week" type="week" name="week">
        <button wire:click="getManhoursTeam({{ $year }}, {{ $week }}, '{{ $codeProject }}')" class="btn btn-primary">Load Data</button>

    </div>

    <table class="table table-bordered">
        <thead>
            <tr>
                <th>Employee</th>
                <th>Activity</th>
                @foreach ($weekDates as $date)
                <th>{{ \Carbon\Carbon::parse($date['date'])->format('D, d M') }}</th>
                @endforeach
            </tr>
        </thead>
        <tbody>
            @foreach ($activities as $item)
            <tr>
                <td>{{ $item['employee']->name ?? '-' }}</td>
                <td>{{ $item['activity']->name_activity ?? '-' }}</td>
                @foreach ($weekDates as $date)
                <td>
                    {{ $item['details'][$date]['man_hours'] ?? 0 }}
                </td>
                @endforeach
            </tr>
            @endforeach
        </tbody>
    </table>
</div>