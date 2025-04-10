<!-- / .card-desk-->
<div class="row">
    <div class="col-md-12">
        <div class="card shadow mb-4">
            <div class="card-header">
                <strong class="card-title">Form row</strong>
            </div>
            <div class="card-body">
                <form method="POST" action="{{ route('store_user') }}" method="POST">
                    @csrf
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputEmail4">Email</label>
                            <input
                                type="email"
                                class="form-control"
                                id="inputEmail5" name="email" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputPassword4">Password</label>
                            <input
                                type="password"
                                class="form-control"
                                id="inputPassword5" name="password" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress">Full Name</label>
                        <input
                            type="text"
                            class="form-control"
                            id="inputAddress5"
                            placeholder="1234 Main St" name="name" />
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputState2">Position</label>
                            <select id="inputState2" class="form-control select2" name="id_position">
                                <option selected>Choose...</option>
                                <option value="0">00 - User Management/Person In Charge</option>
                                @foreach($position as $p)
                                <option value="{{ $p->id }}">{{ $p->positions_name }} - {{ $p->disciplin->disciplin_name }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputState3">Role Aksess</label>
                            <select id="inputState3" class="form-control select2" name="level_roles">
                                <option selected>Choose...</option>
                                @foreach($roles as $r)
                                <option value="{{ $r->id }}">{{ $r->roles_name }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="inputState4">Type User</label>
                            <select id="inputState4" class="custom-select my-1 mr-sm-2 select2" name="type_user" id="inlineFormInputName4">
                                <option value="HO">HO</option>
                                <option value="Non HO">Non HO</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-check">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                id="gridCheck5" />
                            <label class="form-check-label" for="gridCheck5">
                                Check me out
                            </label>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary submit-btn">Submit</button>
                </form>
            </div>
            <!-- /. card-body -->
        </div>
        <!-- /. card -->
    </div>
    <!-- /. col -->
</div>
<!-- /. end-section -->