<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ImportController extends Controller
{
    public function preview_activity()
    {
        return view('import.preview', [
            'title' => 'Preview Import',
        ]);
    }

    public function import_activity()
    {
        return view('import.import', [
            'title' => 'Import Data',
        ]);
    }
}
