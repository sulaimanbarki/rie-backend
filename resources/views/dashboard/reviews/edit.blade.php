@include('page_start')
<div class="app-content content">
    <div class="content-overlay"></div>
    <div class="content-wrapper">
        <div class="content-header row">
            <div class="content-header-left col-12 mb-2 mt-1">
                <div class="breadcrumbs-top">
                    <h5 class="content-header-title float-left pr-1 mb-0">Reviews</h5>
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
                            <h4 class="card-title">Edit Review</h4>
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
                            <form method="post" action="{!! route('review-mgt.update', $review->review_id) !!}" class="row" ref="form" v-if="$cookies.get('permissions').includes('Write')">
                                @csrf
                                @method('PUT')
                                <div class="col-md-6">

                                    <fieldset class="form-group">
                                        @if ($errors->has('name'))
                                            @foreach ($errors->get('name') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>Reviewer Name</label>
                                        @endif
                                        <input type="text" class="form-control" name="name" value="{{ $review->review_name }} " placeholder="Reviewer name">
                                    </fieldset>
                                </div>

                                <div class="col-md-6">
                                    <fieldset class="form-group">
                                        @if ($errors->has('designation'))
                                            @foreach ($errors->get('designation') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>Designation</label>
                                        @endif
                                        <input type="text" class="form-control" name="designation" value="{{ $review->review_designation }} " placeholder="Reviewer designation">
                                    </fieldset>
                                </div>

                                <div class="col-12">
                                    @if ($errors->has('image'))
                                        @foreach ($errors->get('image') as $message)
                                            <p class="text-danger">{{ $message }}</p>
                                        @endforeach
                                        @else
                                        <label>Reviewer Image ( W 100PX, H 100PX )</label>
                                    @endif
                                    <div class="input-group">
                                        <span class="input-group-btn">
                                          <a id="lfm" data-input="thumbnail" data-preview="holder" class="btn btn-primary">
                                            <i class="fa fa-picture-o"></i> Choose
                                          </a>
                                        </span>
                                        <input id="thumbnail" value={{ $review->review_image }} class="form-control" type="text" name="image">
                                      </div>
                                    <img id="holder" style="margin-top:15px;max-height:100px;">
                                </div>

                                <div class="col-md-12">
                                    <fieldset class="form-group">
                                        @if ($errors->has('content'))
                                            @foreach ($errors->get('content') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>Reviewer Image ( W 100PX, H 100PX )</label>
                                        @endif
                                        <textarea class="form-control" name="content" rows="4">{!! $review->review_content !!}</textarea>
                                    </fieldset>
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