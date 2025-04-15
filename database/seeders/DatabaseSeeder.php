<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Activity;
use App\Models\Department;
use App\Models\Disciplin;
use App\Models\Division;
use App\Models\Employee;
use App\Models\Position;
use App\Models\Project;
use App\Models\Role;
use App\Models\TeamProject;
use App\Models\User;
use Illuminate\Database\Seeder;

use function Laravel\Prompts\password;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $roles = [
            [
                'roles_name' => 'Master Admin',
                'level_roles' => '1'
            ],
            [
                'roles_name' => 'Management',
                'level_roles' => '1'
            ],
            [
                'roles_name' => 'Project Manager',
                'level_roles' => '2'
            ],
            [
                'roles_name' => 'Head Of Disciplin',
                'level_roles' => '2'
            ],
            [
                'roles_name' => 'employee',
                'level_roles' => '3'
            ],

        ];
        foreach ($roles as $c) {
            Role::create($c);
        }

        $department = [
            [
                'id' => 'DP01',
                'department_name' => 'Engineering dan Keproyekan'
            ],
            [
                'id' => 'DP02',
                'department_name' => 'Sumber Daya Manusia'
            ],
            [
                'id' => 'DP04',
                'department_name' => 'Komersial'
            ],
            [
                'id' => 'DP05',
                'department_name' => 'Penilaian Kinerja dan Hukum'
            ],
        ];
        foreach ($department as $d) {
            Department::create($d);
        }

        $division = [
            [
                'id' => 'ENG',
                'id_department' => 'DP01',
                'division_name' => 'Engineering'
            ],
            [
                'id' => 'HR',
                'id_department' => 'DP02',
                'division_name' => 'Human Resource'
            ],
        ];
        foreach ($division as $e) {
            Division::create($e);
        }

        $discipline = [
            [
                'id' => 'HOD01',
                'id_division' => 'ENG',
                'disciplin_name' => 'Head of Discipline Process and Process Safety'
            ],
            [
                'id' => 'HOD02',
                'id_division' => 'ENG',
                'disciplin_name' => 'Head of Departement of Civil & Structure'
            ],
            [
                'id' => 'HOD03',
                'id_division' => 'ENG',
                'disciplin_name' => 'Head of Discipline Pipeline'
            ],
            [
                'id' => 'PMT',
                'id_division' => 'ENG',
                'disciplin_name' => 'Project Management Team'
            ],
            [
                'id' => 'PSS',
                'id_division' => 'ENG',
                'disciplin_name' => 'Project Support Service'
            ],
        ];
        foreach ($discipline as $s) {
            Disciplin::create($s);
        }

        $position = [
            [
                'id' => 'PS',
                'id_disciplin' => 'HOD01',
                'positions_name' => 'Process'
            ],
            [
                'id' => 'PF',
                'id_disciplin' => 'HOD01',
                'positions_name' => 'Process Safety'
            ],
            [
                'id' => 'DF',
                'id_disciplin' => 'HOD01',
                'positions_name' => 'Drafter'
            ],
            [
                'id' => 'CS',
                'id_disciplin' => 'HOD02',
                'positions_name' => 'Civil and Structure'
            ],
            [
                'id' => 'DS',
                'id_disciplin' => 'HOD03',
                'positions_name' => 'Designer'
            ],
            [
                'id' => 'PL',
                'id_disciplin' => 'HOD03',
                'positions_name' => 'Pipeline'
            ],
            [
                'id' => 'PM',
                'id_disciplin' => 'PMT',
                'positions_name' => 'Project Manager'
            ],
            [
                'id' => 'PIC',
                'id_disciplin' => 'PMT',
                'positions_name' => 'Person In Charge'
            ],
            [
                'id' => 'PE',
                'id_disciplin' => 'PMT',
                'positions_name' => 'Project Engineer'
            ],
            [
                'id' => 'PMC',
                'id_disciplin' => 'PSS',
                'positions_name' => 'Project Performance'
            ],
            [
                'id' => 'DC',
                'id_disciplin' => 'PSS',
                'positions_name' => 'Document Control'
            ],
            [
                'id' => 'PA',
                'id_disciplin' => 'PSS',
                'positions_name' => 'Project Admin'
            ],
        ];
        foreach ($position as $p) {
            Position::create($p);
        }

        $activity =
            [
                [
                    'id' => 'PM-PMT-EA',
                    'id_disciplin' => 'PMT',
                    'name_activity' => 'Environmental Impact Analysis (AMDAL)'
                ],
                [
                    'id' => 'PM-PMT-CE',
                    'id_disciplin' => 'PMT',
                    'name_activity' => 'Cost Estimate'
                ],
                [
                    'id' => 'PM-PMT-SC',
                    'id_disciplin' => 'PMT',
                    'name_activity' => 'Schedule'
                ],
                [
                    'id' => 'PM-PMT-SW',
                    'id_disciplin' => 'PMT',
                    'name_activity' => 'Scope of Work'
                ],
                [
                    'id' => 'PM-PMT-MM',
                    'id_disciplin' => 'PMT',
                    'name_activity' => 'Minutes of Meeting'
                ],
                [
                    'id' => 'PS-DB-01',
                    'id_disciplin' => 'HOD01',
                    'name_activity' => 'Design Basis'
                ],
                [
                    'id' => 'PS-DB-02',
                    'id_disciplin' => 'HOD01',
                    'name_activity' => 'Utilities & Offsite System Description'
                ],
                [
                    'id' => 'PS-PH-01',
                    'id_disciplin' => 'HOD01',
                    'name_activity' => 'Operating Philosophy'
                ],
                [
                    'id' => 'PS-PH-02',
                    'id_disciplin' => 'HOD01',
                    'name_activity' => 'Control Philosophy'
                ],
                [
                    'id' => 'PF-DB-01',
                    'id_disciplin' => 'HOD01',
                    'name_activity' => 'Design Basis'
                ],
                [
                    'id' => 'PF-DB-02',
                    'id_disciplin' => 'HOD01',
                    'name_activity' => 'Utilities & Offsite System Description'
                ],
                [
                    'id' => 'PF-PH-01',
                    'id_disciplin' => 'HOD01',
                    'name_activity' => 'Operating Philosophy'
                ],
                [
                    'id' => 'PF-PH-02',
                    'id_disciplin' => 'HOD01',
                    'name_activity' => 'Control Philosophy'
                ],
                [
                    'id' => 'PL-DB-01',
                    'id_disciplin' => 'HOD03',
                    'name_activity' => 'Design Basis'
                ],
                [
                    'id' => 'PL-SP-01',
                    'id_disciplin' => 'HOD03',
                    'name_activity' => 'Material Specification'
                ],
                [
                    'id' => 'PL-SP-02',
                    'id_disciplin' => 'HOD03',
                    'name_activity' => 'Coating & Wrapping Specification'
                ],
            ];
        foreach ($activity as $a) {
            Activity::create($a);
        }

        $user = [
            [
                'name' => 'Sheila Rizky Saputri',
                'email' => 'sheilla@admin.com',
                'password' => bcrypt('123123'),
                'level_roles' => '1',
                'type_user' => 'HO',
            ]
        ];
        foreach ($user as $u) {
            User::create($u);
        }

        $employee =
            [
                // User Project Manager
                [
                    'id' => 'EP001',
                    'id_position' => 'PM',
                    'name' => 'Ade Yohanda Fajri',
                    'email' => 'ade@pt-sena.co.id',
                    'type_user' => 'HO',
                    'level_roles' => '3',
                    'password' => bcrypt('123123'),
                ],
                [
                    'id' => 'EP002',
                    'id_position' => 'PM',
                    'name' => 'Wahyu Edi S',
                    'email' => 'wahyu@pt-sena.co.id',
                    'type_user' => 'HO',
                    'level_roles' => '3',
                    'password' => bcrypt('123123'),
                ],
                [
                    'id' => 'EP004',
                    'id_position' => 'PM',
                    'name' => 'Sibarani K.R',
                    'email' => 'sibarani@pt-sena.co.id',
                    'type_user' => 'HO',
                    'level_roles' => '3',
                    'password' => bcrypt('123123'),
                ],
                [
                    'id' => 'EP005',
                    'id_position' => 'PM',
                    'name' => 'Asmi wahyuni',
                    'email' => 'asmi@pt-sena.co.id',
                    'type_user' => 'HO',
                    'level_roles' => '3',
                    'password' => bcrypt('123123'),
                ],
                // User Project Admin
                [
                    'id' => 'EP006',
                    'id_position' => 'PA',
                    'name' => 'Syafa Nurul K',
                    'email' => 'syafa@pt-sena.co.id',
                    'type_user' => 'HO',
                    'level_roles' => '5',
                    'password' => bcrypt('123123'),
                ],
                [
                    'id' => 'EP007',
                    'id_position' => 'PA',
                    'name' => 'Erlia Larasati',
                    'email' => 'erlia@pt-sena.co.id',
                    'type_user' => 'HO',
                    'level_roles' => '5',
                    'password' => bcrypt('123123'),
                ],
                [
                    'id' => 'EP008',
                    'id_position' => 'PA',
                    'name' => 'Devi Ulfiana',
                    'email' => 'ddevi@pt-sena.co.id',
                    'type_user' => 'HO',
                    'level_roles' => '5',
                    'password' => bcrypt('123123'),
                ],
                // User Proccess
                [
                    'id' => 'EP009',
                    'id_position' => 'PS',
                    'name' => 'Nurhua Kumala S',
                    'email' => 'nurhua@pt-sena.co.id',
                    'type_user' => 'HO',
                    'level_roles' => '5',
                    'password' => bcrypt('123123'),
                ],
                [
                    'id' => 'EP010',
                    'id_position' => 'PS',
                    'name' => 'Ressa Fitra Adinda',
                    'email' => 'ressa@pt-sena.co.id',
                    'type_user' => 'HO',
                    'level_roles' => '5',
                    'password' => bcrypt('123123'),
                ],
                [
                    'id' => 'EP011',
                    'id_position' => 'PF',
                    'name' => 'Pangiastika Putri Wulandari',
                    'email' => 'pangiastika@pt-sena.co.id',
                    'type_user' => 'HO',
                    'level_roles' => '5',
                    'password' => bcrypt('123123'),
                ],
                [
                    'id' => 'EP012',
                    'id_position' => 'PF',
                    'name' => 'Tedy Krisna Arimukti',
                    'email' => 'tedy@pt-sena.co.id',
                    'type_user' => 'HO',
                    'level_roles' => '5',
                    'password' => bcrypt('123123'),
                ],

                // User Pipeline
                [
                    'id' => 'EP013',
                    'id_position' => 'PL',
                    'name' => 'Muhammad Yusuf Jammil',
                    'email' => 'yusuf@pt-sena.co.id',
                    'type_user' => 'HO',
                    'level_roles' => '5',
                    'password' => bcrypt('123123'),
                ],
                [
                    'id' => 'EP014',
                    'id_position' => 'PL',
                    'name' => 'Eky Misbahuddin Hakiki',
                    'email' => 'Eky@pt-sena.co.id',
                    'type_user' => 'HO',
                    'level_roles' => '5',
                    'password' => bcrypt('123123'),
                ],
            ];
        foreach ($employee as $e) {
            Employee::create($e);
        }

        $project =
            [
                [
                    'code_project' => 'NK-P-241102',
                    'name_project' => 'Tes Project 01',
                    'start_date' => '2024-11-12',
                    'end_date' => '2025-12-12',
                    'total_plan_manhours' => '1200',
                    'project_manager' => 'EP001',
                    'status' => 'Active'
                ],
                [
                    'code_project' => 'NK-P-241113',
                    'name_project' => 'Tes Project 02',
                    'start_date' => '2024-11-12',
                    'end_date' => '2025-12-12',
                    'total_plan_manhours' => '1200',
                    'project_manager' => 'EP001',
                    'status' => 'Active'
                ],
                [
                    'code_project' => 'NK-P-241114',
                    'name_project' => 'Tes Project 03',
                    'start_date' => '2024-11-12',
                    'end_date' => '2025-12-12',
                    'total_plan_manhours' => '1200',
                    'project_manager' => 'EP001',
                    'status' => 'Active'
                ],
                [
                    'code_project' => 'NK-P-250202',
                    'name_project' => 'Tes Project 04',
                    'start_date' => '2025-02-12',
                    'end_date' => '2025-12-12',
                    'total_plan_manhours' => '1200',
                    'project_manager' => 'EP002',
                    'status' => 'Active'
                ],
                [
                    'code_project' => 'NK-P-250203',
                    'name_project' => 'Tes Project 05',
                    'start_date' => '2025-02-12',
                    'end_date' => '2025-12-12',
                    'total_plan_manhours' => '1200',
                    'project_manager' => 'EP002',
                    'status' => 'Active'
                ],
                [
                    'code_project' => 'NK-P-250311',
                    'name_project' => 'Tes Project 06',
                    'start_date' => '2025-02-12',
                    'end_date' => '2025-12-12',
                    'total_plan_manhours' => '1200',
                    'project_manager' => 'EP005',
                    'status' => 'Active'
                ],
            ];

        foreach ($project as $p) {
            Project::create($p);
        }

        $team =
            [
                [
                    'code_project' => 'NK-P-241102',
                    'id_employee' => 'EP001',
                    'status' => 'Active'
                ],
                [
                    'code_project' => 'NK-P-241102',
                    'id_employee' => 'EP008',
                    'status' => 'Active'
                ],
                [
                    'code_project' => 'NK-P-241102',
                    'id_employee' => 'EP012',
                    'status' => 'Active'
                ],
                [
                    'code_project' => 'NK-P-241102',
                    'id_employee' => 'EP013',
                    'status' => 'Active'
                ],
                [
                    'code_project' => 'NK-P-241102',
                    'id_employee' => 'EP014',
                    'status' => 'Active'
                ],
                [
                    'code_project' => 'NK-P-250202',
                    'id_employee' => 'EP002',
                    'status' => 'Active'
                ],
                [
                    'code_project' => 'NK-P-250202',
                    'id_employee' => 'EP006',
                    'status' => 'Active'
                ],
                [
                    'code_project' => 'NK-P-250311',
                    'id_employee' => 'EP005',
                    'status' => 'Active'
                ],
                [
                    'code_project' => 'NK-P-241102',
                    'id_employee' => 'EP007',
                    'status' => 'Active'
                ],
            ];
        foreach ($team as $t) {
            TeamProject::create($t);
        }
    }
}
