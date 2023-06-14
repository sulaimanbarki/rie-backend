@include('page_start')
<div class="app-content content">
    <div class="content-overlay"></div>
    <div class="content-wrapper">
        <div class="content-header row">
            <div class="content-header-left col-12 mb-2 mt-1">
                <div class="breadcrumbs-top">
                    <h5 class="content-header-title float-left pr-1 mb-0">Jobs</h5>
                    <div class="breadcrumb-wrapper d-none d-sm-block">
                        <ol class="breadcrumb p-0 mb-0 pl-1">
                            <li class="breadcrumb-item"><a href="/"><i class="bx bx-home-alt"></i></a>
                            </li>
                            <li class="breadcrumb-item active">Management
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-body">

            <div class="row" id="basic-table">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Create a Job</h4>
                            @if(Session::has('msg'))
                                <div class="alert alert-success col-12">
                                    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                                    <strong>Well done!</strong>  {{Session::get('msg')}}
                                </div>
                            @endif
                            @if(Session::has('msgErr'))
                                <div class="alert alert-warning col-12">
                                    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                                    <strong>Whoops!</strong>  {{Session::get('msgErr')}}
                                </div>
                            @endif
                        </div>
                        <div class="card-body">
                            <form method="post" action="jobs-mgt" class="row" ref="form" v-if="$cookies.get('permissions').includes('Write')">
                                @csrf
                                <div class="col-md-6">
                                    <fieldset class="form-group">
                                        @if ($errors->has('job_title'))
                                            @foreach ($errors->get('job_title') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>Job Title</label>
                                        @endif
                                        <vs-input
                                        name="job_title"
                                        dark />
                                    </fieldset>
                                </div>

                                <div class="col-md-6">
                                    <fieldset class="form-group">
                                        @if ($errors->has('job_last_date'))
                                            @foreach ($errors->get('job_last_date') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>Apply Last Date</label>
                                        @endif
                                        <vs-input
                                        type="date"
                                        name="job_last_date"
                                        dark/>
                                    </fieldset>
                                </div>

                                <div class="col-md-6">
                                    <fieldset class="form-group">
                                        @if ($errors->has('job_location'))
                                            @foreach ($errors->get('job_location') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>Job Location</label>
                                        @endif
                                        <vs-input
                                        name="job_location"
                                        dark />
                                    </fieldset>
                                </div>

                                <div class="col-md-6">
                                    <fieldset class="form-group">
                                        @if ($errors->has('job_type'))
                                            @foreach ($errors->get('job_type') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>Job Type</label>
                                        @endif
                                        <vs-input
                                        name="job_type"
                                        dark />
                                    </fieldset>
                                </div>

                                <div class="col-md-6">
                                    <fieldset class="form-group">
                                        @if ($errors->has('job_experience'))
                                            @foreach ($errors->get('job_experience') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>Job Experience</label>
                                        @endif
                                        <vs-input
                                        name="job_experience"
                                        dark />
                                    </fieldset>
                                </div>

                                <div class="col-md-6">
                                    <fieldset class="form-group">
                                        @if ($errors->has('job_education'))
                                            @foreach ($errors->get('job_education') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>Job Education</label>
                                        @endif
                                        <vs-input
                                        name="job_education"
                                        dark  />
                                    </fieldset>
                                </div>

                                <div class="col-md-6">
                                    @if ($errors->has('job_features'))
                                        @foreach ($errors->get('job_features') as $message)
                                            <p class="text-danger">{{ $message }}</p>
                                        @endforeach
                                        @else
                                        <label>Job Features</label>
                                    @endif
                                    <textarea name="job_features" rows="5" class="form-control">{!! old('job_features') !!}</textarea>
                                </div>

                                <div class="col-md-6">
                                    @if ($errors->has('job_benifits'))
                                        @foreach ($errors->get('job_benifits') as $message)
                                            <p class="text-danger">{{ $message }}</p>
                                        @endforeach
                                        @else
                                        <label>Job Benifits</label>
                                    @endif
                                    <textarea name="job_benifits" rows="5" class="form-control">{!! old('job_benifits') !!}</textarea>
                                </div>
                                <div>&nbsp;</div>
                                <div class="col-md-12">
                                    @if ($errors->has('job_detail'))
                                        @foreach ($errors->get('job_detail') as $message)
                                            <p class="text-danger">{{ $message }}</p>
                                        @endforeach
                                        @else
                                        <label>Job Description</label>
                                    @endif
                                    <textarea id="my-editor" name="job_detail" class="form-control">{!! old('blog_details') !!}</textarea>
                                </div>
                                
                                <div>
                                    &nbsp;
                                </div>
                                <div class="col-md-12">
                                    <button type="submit" class="btn btn-dark glow shadow mr-1 mb-1">Create</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
@include('page_end')
<style>
    .vs-input{
        width: 100%;
    }
</style>