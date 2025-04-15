<div>
    @if (session()->has('success'))
    <div class="alert alert-success">{{ session('success') }}</div>
    @endif
    <form wire:submit.prevent="preview">
        <div class="form-group mb-3">
            <div class="custom-file">
                <input type="file" wire:model="file" class="custom-file-input" id="customFile" />
                <label class="custom-file-label" for="customFile">{{ $file ? $file->getClientOriginalName() : 'Choose file' }}</label> @error('file')
                <span class="text-danger">{{ $message }}</span> @enderror
            </div>
        </div>
        <button class="btn btn-primary" type="submit">Preview Data Import</button>
        <div wire:loading>
            Loading preview...
        </div>
    </form>

    @if($previewData)
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th>Code Project</th>
                <th>Email</th>
                <th>Status</th>
                <th>Error</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($previewData as $row)
            <tr class="{{ !$row['valid'] ? 'table-danger' : '' }}">
                <td>{{ $row['code_project'] ?? '-' }}</td>
                <td>{{ $row['email'] ?? '-' }}</td>
                <td>{{ $row['status'] ?? '-' }}</td>
                <td>
                    @if(!$row['valid'])
                    <ul>
                        @foreach ($row['errors'] as $error)
                        <li class="text-danger">{{ $error }}</li>
                        @endforeach
                    </ul>
                    @else
                    <span class="text-success">Valid</span>
                    @endif
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>

    @if (empty($validationErrors))
    <button wire:click="import" class="btn btn-success">Import Data</button>
    @else
    <div class="text-danger">Perbaiki data sebelum diimport.</div>
    @endif
    @endif
</div>