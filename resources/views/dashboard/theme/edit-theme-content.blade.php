@include('page_start')
<div class="app-content content">
    <div class="content-overlay"></div>
    <div class="content-wrapper">
        <div class="content-header row">
            <div class="content-header-left col-12 mb-2 mt-1">
                <div class="breadcrumbs-top">
                    <h5 class="content-header-title float-left pr-1 mb-0">Theme Content</h5>
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
                            <h4 class="card-title">Edit Theme Content</h4>
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
                            <form method="post" action="themecontent-mgt-update" class="row" ref="form" v-if="$cookies.get('permissions').includes('Write')">
                                @csrf        
                                <input type="hidden" name="themecontentid" value="{{$themecontent->themecontent_id}}">                       

                                <div class="col-12">
                                    @if ($errors->has('about_cover'))
                                        @foreach ($errors->get('about_cover') as $message)
                                            <p class="text-danger">{{ $message }}</p>
                                        @endforeach
                                        @else
                                        <label>About Cover (W 350 x H 480)</label>
                                    @endif
                                    <div class="input-group">
                                        <span class="input-group-btn">
                                          <a id="lfm" data-input="thumbnail" data-preview="holder" class="btn btn-primary">
                                            <i class="fa fa-picture-o"></i> Choose
                                          </a>
                                        </span>
                                        <input id="thumbnail" class="form-control" type="text" name="about_cover" value="{{ $themecontent->themecontent_about_image }}">
                                      </div>
                                    <img id="holder" style="margin-top:15px;max-height:100px;">
                                </div>

                                <div class="col-md-12">
                                    @if ($errors->has('vision'))
                                        @foreach ($errors->get('vision') as $message)
                                            <p class="text-danger">{{ $message }}</p>
                                        @endforeach
                                        @else
                                        <label>Our Vision</label>
                                    @endif
                                    <textarea name="vision" rows="3" class="form-control">{{$themecontent->themecontent_vision}}</textarea>
                                </div>

                                <div>&nbsp;</div>

                                <div class="col-md-12">
                                    @if ($errors->has('mission'))
                                        @foreach ($errors->get('mission') as $message)
                                            <p class="text-danger">{{ $message }}</p>
                                        @endforeach
                                        @else
                                        <label>Our Mission</label>
                                    @endif
                                    <textarea name="mission" rows="3" class="form-control">{{$themecontent->themecontent_mission}}</textarea>
                                </div>

                                <div>&nbsp;</div>

                                <div class="col-md-12">
                                    @if ($errors->has('achivement'))
                                        @foreach ($errors->get('achivement') as $message)
                                            <p class="text-danger">{{ $message }}</p>
                                        @endforeach
                                        @else
                                        <label>Achivement</label>
                                    @endif
                                    <textarea name="achivement" rows="3" class="form-control">{{$themecontent->themecontent_achivement}}</textarea>
                                </div>

                                <div>&nbsp;</div>

                                <div class="col-md-12">
                                    @if ($errors->has('products'))
                                        @foreach ($errors->get('products') as $message)
                                            <p class="text-danger">{{ $message }}</p>
                                        @endforeach
                                        @else
                                        <label>Products</label>
                                    @endif
                                    <textarea name="products" rows="3" class="form-control">{{$themecontent->themecontent_products}}</textarea>
                                </div>

                                <div>&nbsp;</div>


                                <div class="col-md-12">
                                    @if ($errors->has('services'))
                                        @foreach ($errors->get('services') as $message)
                                            <p class="text-danger">{{ $message }}</p>
                                        @endforeach
                                        @else
                                        <label>Services</label>
                                    @endif
                                    <textarea name="services" rows="3" class="form-control">{{$themecontent->themecontent_services}}</textarea>
                                </div>

                                <div>&nbsp;</div>


                                <div class="col-md-12">
                                    @if ($errors->has('career'))
                                        @foreach ($errors->get('career') as $message)
                                            <p class="text-danger">{{ $message }}</p>
                                        @endforeach
                                        @else
                                        <label>Career</label>
                                    @endif
                                    <textarea name="career" rows="3" class="form-control">{{$themecontent->themecontent_career}}</textarea>
                                </div>

                                <div>&nbsp;</div>


                                <div class="col-md-12">
                                    @if ($errors->has('contact'))
                                        @foreach ($errors->get('contact') as $message)
                                            <p class="text-danger">{{ $message }}</p>
                                        @endforeach
                                        @else
                                        <label>Contact</label>
                                    @endif
                                    <textarea name="contact" rows="3" class="form-control">{{$themecontent->themecontent_contact}}</textarea>
                                </div>

                                <div>&nbsp;</div>


                                <div class="col-md-12">
                                    @if ($errors->has('about'))
                                        @foreach ($errors->get('about') as $message)
                                            <p class="text-danger">{{ $message }}</p>
                                        @endforeach
                                        @else
                                        <label>About us</label>
                                    @endif
                                    <textarea name="about" rows="3" class="form-control">{{$themecontent->themecontent_about}}</textarea>
                                </div>

                                <div>&nbsp;</div>

                                <div class="col-md-12">
                                    @if ($errors->has('groupofcompanies'))
                                        @foreach ($errors->get('groupofcompanies') as $message)
                                            <p class="text-danger">{{ $message }}</p>
                                        @endforeach
                                        @else
                                        <label>Group of Companies</label>
                                    @endif
                                    <textarea name="groupofcompanies" rows="3" class="form-control">{{$themecontent->themecontent_groupof_companies}}</textarea>
                                </div>

                                <div>&nbsp;</div>

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