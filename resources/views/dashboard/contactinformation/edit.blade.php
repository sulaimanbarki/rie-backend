@include('page_start')
<div class="app-content content">
    <div class="content-overlay"></div>
    <div class="content-wrapper">
        <div class="content-header row">
            <div class="content-header-left col-12 mb-2 mt-1">
                <div class="breadcrumbs-top">
                    <h5 class="content-header-title float-left pr-1 mb-0">Categories</h5>
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
                            <h4 class="card-title">Edit Category</h4>
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
                            <form method="post" action="contact-update" class="row" ref="form" v-if="$cookies.get('permissions').includes('Write')">
                                @csrf
                                <input type="hidden" name="contactid" value="{{$contact->contact_id}}">
                                <div class="col-md-6">
                                    <fieldset class="form-group">
                                        @if ($errors->has('contact_title'))
                                            @foreach ($errors->get('contact_title') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>Branch Name</label>
                                        @endif
                                        <vs-input
                                        name="contact_title"
                                        value="{{ $contact->contact_title }} "
                                        dark />
                                    </fieldset>
                                </div>
                                <div class="col-md-6">
                                    <fieldset class="form-group">
                                        @if ($errors->has('contact_branch'))
                                            @foreach ($errors->get('contact_branch') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>Branch (City)</label>
                                        @endif
                                        <vs-input
                                        name="contact_branch"
                                        value="{{ $contact->contact_branch }} "
                                        dark/>
                                    </fieldset>
                                </div>

                                <div class="col-md-6">
                                    <fieldset class="form-group">
                                        @if ($errors->has('contact_phone'))
                                            @foreach ($errors->get('contact_phone') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>Branch Phone</label>
                                        @endif
                                        <vs-input
                                        name="contact_phone"
                                        value="{{ $contact->contact_phone }} "
                                        dark/>
                                    </fieldset>
                                </div>

                                <div class="col-md-6">
                                    <fieldset class="form-group">
                                        @if ($errors->has('contact_mobile'))
                                            @foreach ($errors->get('contact_mobile') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>Branch Mobile</label>
                                        @endif
                                        <vs-input
                                        name="contact_mobile"
                                        value="{{ $contact->contact_mobile }} "
                                        dark/>
                                    </fieldset>
                                </div>

                                <div class="col-md-6">
                                    <fieldset class="form-group">
                                        @if ($errors->has('contact_fax'))
                                            @foreach ($errors->get('contact_fax') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>Branch Fax</label>
                                        @endif
                                        <vs-input
                                        name="contact_fax"
                                        value="{{ $contact->contact_fax }} "
                                        dark/>
                                    </fieldset>
                                </div>

                                <div class="col-md-6">
                                    <fieldset class="form-group">
                                        @if ($errors->has('contact_email'))
                                            @foreach ($errors->get('contact_email') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>Branch Email</label>
                                        @endif
                                        <vs-input
                                        name="contact_email"
                                        value="{{ $contact->contact_email }} "
                                        dark/>
                                    </fieldset>
                                </div>


                                <div class="col-md-12">
                                    <fieldset class="form-group">
                                        @if ($errors->has('contact_address'))
                                            @foreach ($errors->get('contact_address') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>Contant Address</label>
                                        @endif
                                        <textarea class="form-control" name="contact_address" rows="4">{{ $contact->contact_address }}</textarea>
                                    </fieldset>
                                </div>
                                
                                <div>
                                    &nbsp;
                                </div>
                                <div class="col-md-12">
                                    <button type="submit" class="btn btn-dark glow shadow mr-1 mb-1">Update</button>
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