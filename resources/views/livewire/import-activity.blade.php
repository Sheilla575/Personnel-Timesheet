<div>
    <form wire:submit.prevent="preview">
        <div class="form-group mb-3">
            <div class="custom-file">
                <input type="file" wire:model="file" class="custom-file-input" id="customFile" />
                <label class="custom-file-label" for="customFile">{{ $file ? $file->getClientOriginalName() : 'Choose file' }}</label> @error('file')
                <span class="text-danger">{{ $message }}</span> @enderror
            </div>
        </div>
        <button class="btn btn-primary" type="submit">Preview Data Import</button>
    </form>

    @if ($previewData)
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th>ID</th>
                <th>ID Discipline</th>
                <th>Name Activity</th>
                <th>Error</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($previewData as $i => $row)
            <tr @if(isset($validationErrors[$i])) style="background-color: #ffe0e0;" @endif>
                <td>{{ $row['code_activity'] ?? '-' }}</td>
                <td>{{ $row['id_discipline'] ?? '-' }}</td>
                <td>{{ $row['name_activity'] ?? '-' }}</td>
                <td>
                    @if (isset($validationErrors[$i]))
                    <ul>
                        @foreach ($validationErrors[$i] as $error)
                        <li class="text-danger">{{ $error }}</li>
                        @endforeach
                    </ul>
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