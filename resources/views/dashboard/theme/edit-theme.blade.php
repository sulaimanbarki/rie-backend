@include('page_start')
<div class="app-content content">
    <div class="content-overlay"></div>
    <div class="content-wrapper">
        <div class="content-header row">
            <div class="content-header-left col-12 mb-2 mt-1">
                <div class="breadcrumbs-top">
                    <h5 class="content-header-title float-left pr-1 mb-0">Theme</h5>
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
                            <h4 class="card-title">Edit Theme</h4>
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
                            <form method="post" action="theme-update" class="row" ref="form" v-if="$cookies.get('permissions').includes('Write')">
                                @csrf        
                                <input type="hidden" name="themeid" value="{{$theme->theme_id}}">                       

                                <div class="col-lg-6">
                                    <fieldset class="form-group">
                                        @if ($errors->has('theme_title'))
                                            @foreach ($errors->get('theme_title') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>Theme Title</label>
                                        @endif
                                        <vs-input
                                        name="theme_title"
                                        value="{{ $theme->theme_title }}"
                                        dark  />
                                    </fieldset>
                                </div>

                                <div class="col-6">
                                    @if ($errors->has('theme_logo'))
                                        @foreach ($errors->get('theme_logo') as $message)
                                            <p class="text-danger">{{ $message }}</p>
                                        @endforeach
                                        @else
                                        <label>Theme Logo</label>
                                    @endif
                                    <div class="input-group">
                                        <span class="input-group-btn">
                                          <a id="lfm" data-input="thumbnail" data-preview="holder" class="btn btn-primary">
                                            <i class="fa fa-picture-o"></i> Choose
                                          </a>
                                        </span>
                                        <input id="thumbnail" class="form-control" type="text" name="theme_logo" value="{{ $theme->theme_logo }}">
                                      </div>
                                    <img id="holder" style="margin-top:15px;max-height:100px;">
                                </div>

                                <div class="col-lg-6">
                                    <fieldset class="form-group">
                                        @if ($errors->has('theme_instagram'))
                                            @foreach ($errors->get('theme_instagram') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>Instagram URL</label>
                                        @endif
                                        <vs-input
                                        name="theme_instagram"
                                        value="{{ $theme->theme_instagram }}"
                                        dark  />
                                    </fieldset>
                                </div>

                                <div class="col-lg-6">
                                    <fieldset class="form-group">
                                        @if ($errors->has('theme_facebook'))
                                            @foreach ($errors->get('theme_facebook') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>Facebook URL</label>
                                        @endif
                                        <vs-input
                                        name="theme_facebook"
                                        value="{{ $theme->theme_facebook }}"
                                        dark  />
                                    </fieldset>
                                </div>

                                <div class="col-lg-6">
                                    <fieldset class="form-group">
                                        @if ($errors->has('theme_twitter'))
                                            @foreach ($errors->get('theme_twitter') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>Twitter URL</label>
                                        @endif
                                        <vs-input
                                        name="theme_twitter"
                                        value="{{ $theme->theme_twitter }}"
                                        dark  />
                                    </fieldset>
                                </div>

                                <div class="col-lg-6">
                                    <fieldset class="form-group">
                                        @if ($errors->has('theme_linkdin'))
                                            @foreach ($errors->get('theme_linkdin') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>Linkdin URL</label>
                                        @endif
                                        <vs-input
                                        name="theme_linkdin"
                                        value="{{ $theme->theme_linkdin }}"
                                        dark  />
                                    </fieldset>
                                </div>
                                
                                <div class="col-lg-6">
                                    <fieldset class="form-group">
                                        @if ($errors->has('theme_email'))
                                            @foreach ($errors->get('theme_email') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>Email</label>
                                        @endif
                                        <vs-input
                                        name="theme_email"
                                        value="{{ $theme->theme_email }}"
                                        dark  />
                                    </fieldset>
                                </div>

                                <div class="col-lg-6">
                                    <fieldset class="form-group">
                                        @if ($errors->has('theme_copyright'))
                                            @foreach ($errors->get('theme_copyright') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>Copy rights</label>
                                        @endif
                                        <vs-input
                                        name="theme_copyright"
                                        value="{{ $theme->theme_copyright }}"
                                        dark  />
                                    </fieldset>
                                </div>

                                <div class="col-lg-6">
                                    <fieldset class="form-group">
                                        @if ($errors->has('theme_phone'))
                                            @foreach ($errors->get('theme_phone') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>Phone #</label>
                                        @endif
                                        <vs-input
                                        name="theme_phone"
                                        value="{{ $theme->theme_phone }}"
                                        dark  />
                                    </fieldset>
                                </div>

                                <div class="col-md-12">
                                    @if ($errors->has('theme_address'))
                                        @foreach ($errors->get('theme_address') as $message)
                                            <p class="text-danger">{{ $message }}</p>
                                        @endforeach
                                        @else
                                        <label>Address</label>
                                    @endif
                                    <textarea name="theme_address" rows="3" class="form-control">{{$theme->theme_address}}</textarea>
                                </div>

                                <div>&nbsp;</div>

                                <div class="col-md-12">
                                    @if ($errors->has('theme_about'))
                                        @foreach ($errors->get('theme_about') as $message)
                                            <p class="text-danger">{{ $message }}</p>
                                        @endforeach
                                        @else
                                        <label>Our Company</label>
                                    @endif
                                    <textarea name="theme_about" rows="3" class="form-control">{{$theme->theme_about}}</textarea>
                                </div>

                                <div class="col-md-12" style="display: none">
                                    
                                    <textarea id="my-editor" name="nothing" class="form-control"></textarea>
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