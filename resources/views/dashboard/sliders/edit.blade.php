@include('page_start')
<div class="app-content content">
    <div class="content-overlay"></div>
    <div class="content-wrapper">
        <div class="content-header row">
            <div class="content-header-left col-12 mb-2 mt-1">
                <div class="breadcrumbs-top">
                    <h5 class="content-header-title float-left pr-1 mb-0">Sliders</h5>
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
                            <h4 class="card-title">Edit Slider</h4>
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
                            <form method="post" action="slider-update" class="row" ref="form" v-if="$cookies.get('permissions').includes('Write')">
                                @csrf        
                                <input type="hidden" name="sliderid" value="{{$slider->slider_id}}">                       
                                <div class="col-lg-6">
                                    <fieldset class="form-group">
                                        @if ($errors->has('slider_title'))
                                            @foreach ($errors->get('slider_title') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>Slider Title</label>
                                        @endif
                                        <vs-input
                                        name="slider_title"
                                        value="{{ $slider->slider_title }}"
                                        dark  />
                                    </fieldset>
                                </div>

                                <div class="col-lg-6">
                                    <fieldset class="form-group">
                                        @if ($errors->has('slider_link'))
                                            @foreach ($errors->get('slider_link') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>Slider Link</label>
                                        @endif
                                        <vs-input
                                        name="slider_link"
                                        value="{{ $slider->slider_link }}"
                                        dark  />
                                    </fieldset>
                                </div>
                                <div class="col-lg-6">
                                    <fieldset class="form-group">
                                        @if ($errors->has('slider_order'))
                                            @foreach ($errors->get('slider_order') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>Slider Order</label>
                                        @endif
                                        <vs-input
                                        name="slider_order"
                                        value="{{ $slider->slider_order }}"
                                        dark  />
                                    </fieldset>
                                </div>

                                <div class="col-6">
                                    @if ($errors->has('slider_cover'))
                                        @foreach ($errors->get('slider_cover') as $message)
                                            <p class="text-danger">{{ $message }}</p>
                                        @endforeach
                                        @else
                                        <label>Slider Cover ( W 1366PX, H 515PX )</label>
                                    @endif
                                    <div class="input-group">
                                        <span class="input-group-btn">
                                          <a id="lfm" data-input="thumbnail" data-preview="holder" class="btn btn-primary">
                                            <i class="fa fa-picture-o"></i> Choose
                                          </a>
                                        </span>
                                        <input id="thumbnail" value={{ $slider->slider_image }} class="form-control" type="text" name="slider_cover">
                                      </div>
                                    <img id="holder" style="margin-top:15px;max-height:100px;">
                                </div>

                                <div class="col-md-12">
                                    <fieldset class="form-group">
                                        @if ($errors->has('slider_summary'))
                                            @foreach ($errors->get('slider_summary') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>Write in detail</label>
                                        @endif
                                        <textarea class="form-control" name="slider_summary" rows="4">{{ $slider->slider_description }}</textarea>
                                    </fieldset>
                                </div>

                                <div class="col-md-12" style="display: none">
                                    <textarea id="my-editor" class="form-control"></textarea>
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