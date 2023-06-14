@include('page_start')
<div class="app-content content">
    <div class="content-overlay"></div>
    <div class="content-wrapper">
        <div class="content-header row">
            <div class="content-header-left col-12 mb-2 mt-1">
                <div class="breadcrumbs-top">
                    <h5 class="content-header-title float-left pr-1 mb-0">Video Content</h5>
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
                            <h4 class="card-title">Edit Video Content</h4>
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
                            <form method="post" action="update-video-content" class="row" ref="form" v-if="$cookies.get('permissions').includes('Write')">
                                @csrf        
                                <input type="hidden" name="videosectionid" value="{{$videocontent->videosection_id}}">                        

                                <div class="col-lg-6">
                                    <fieldset class="form-group">
                                        @if ($errors->has('first_title'))
                                            @foreach ($errors->get('first_title') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>First title</label>
                                        @endif
                                        <vs-input
                                        name="first_title"
                                        value="{{ $videocontent->first_title }}"
                                        dark  />
                                    </fieldset>
                                </div>
                                <div class="col-lg-6">
                                    <fieldset class="form-group">
                                        @if ($errors->has('second_title'))
                                            @foreach ($errors->get('second_title') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>Second title</label>
                                        @endif
                                        <vs-input
                                        name="second_title"
                                        value="{{ $videocontent->second_title }}"
                                        dark  />
                                    </fieldset>
                                </div>

                                <div class="col-md-12">
                                    @if ($errors->has('videosection_content'))
                                        @foreach ($errors->get('videosection_content') as $message)
                                            <p class="text-danger">{{ $message }}</p>
                                        @endforeach
                                        @else
                                        <label>Write in detail</label>
                                    @endif
                                    <textarea id="my-editor" name="videosection_content" class="form-control">{{$videocontent->videosection_content}}</textarea>
                                    <div>
                                        &nbsp;
                                    </div>
                                </div>
                                <div class="col-6">
                                    @if ($errors->has('video_cover'))
                                        @foreach ($errors->get('video_cover') as $message)
                                            <p class="text-danger">{{ $message }}</p>
                                        @endforeach
                                        @else
                                        <label>Video Cover ( W 528PX x H 400PX )</label>
                                    @endif
                                    <div class="input-group">
                                        <span class="input-group-btn">
                                          <a id="lfm" data-input="thumbnail" data-preview="holder" class="btn btn-primary">
                                            <i class="fa fa-picture-o"></i> Choose
                                          </a>
                                        </span>
                                        <input id="thumbnail" class="form-control" type="text" name="video_cover" value="{{ $videocontent->video_cover }}">
                                      </div>
                                    <img id="holder" style="margin-top:15px;max-height:100px;">
                                </div>
                                
                                <div class="col-lg-6">
                                    <fieldset class="form-group">
                                        @if ($errors->has('video_url'))
                                            @foreach ($errors->get('video_url') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>Video URL</label>
                                        @endif
                                        <vs-input
                                        name="video_url"
                                        value="{{ $videocontent->video_url }}"
                                        dark  />
                                    </fieldset>
                                </div>

                                <div class="col-lg-6">
                                    <fieldset class="form-group">
                                        @if ($errors->has('firstsection_title'))
                                            @foreach ($errors->get('firstsection_title') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>First Section Title</label>
                                        @endif
                                        <vs-input
                                        name="firstsection_title"
                                        value="{{ $videocontent->firstsection_title }}"
                                        dark  />
                                    </fieldset>
                                </div>
                                
                                <div class="col-md-12">
                                    <fieldset class="form-group">
                                        @if ($errors->has('firstsection_details'))
                                            @foreach ($errors->get('firstsection_details') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>First Section Content</label>
                                        @endif
                                        <textarea class="form-control" name="firstsection_details" rows="2">{{$videocontent->firstsection_details}}</textarea>
                                    </fieldset>
                                </div>
                               
                                <div class="col-lg-6">
                                    <fieldset class="form-group">
                                        @if ($errors->has('secondsection_title'))
                                            @foreach ($errors->get('secondsection_title') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>Second Section Title</label>
                                        @endif
                                        <vs-input
                                        name="secondsection_title"
                                        value="{{ $videocontent->secondsection_title }}"
                                        dark  />
                                    </fieldset>
                                </div>
                                
                                <div class="col-md-12">
                                    <fieldset class="form-group">
                                        @if ($errors->has('secondsection_details'))
                                            @foreach ($errors->get('secondsection_details') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>First Section Content</label>
                                        @endif
                                        <textarea class="form-control" name="secondsection_details" rows="2">{{$videocontent->secondsection_details}}</textarea>
                                    </fieldset>
                                </div>
                                
                                <div class="col-lg-6">
                                    <fieldset class="form-group">
                                        @if ($errors->has('thirdsection_title'))
                                            @foreach ($errors->get('thirdsection_title') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>Third Section Title</label>
                                        @endif
                                        <vs-input
                                        name="thirdsection_title"
                                        value="{{ $videocontent->thirdsection_title }}"
                                        dark  />
                                    </fieldset>
                                </div>
                                
                                <div class="col-md-12">
                                    <fieldset class="form-group">
                                        @if ($errors->has('thirdsection_details'))
                                            @foreach ($errors->get('thirdsection_details') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>Third Section Content</label>
                                        @endif
                                        <textarea class="form-control" name="thirdsection_details" rows="2">{{$videocontent->thirdsection_details}}</textarea>
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