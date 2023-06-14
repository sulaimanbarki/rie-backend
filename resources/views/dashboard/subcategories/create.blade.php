@include('page_start')
<div class="app-content content">
    <div class="content-overlay"></div>
    <div class="content-wrapper">
        <div class="content-header row">
            <div class="content-header-left col-12 mb-2 mt-1">
                <div class="breadcrumbs-top">
                    <h5 class="content-header-title float-left pr-1 mb-0">Subcategories</h5>
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
                            <h4 class="card-title">Create Sub Category</h4>
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
                            <form method="post" action="sub-categories-mgt" class="row" ref="form" v-if="$cookies.get('permissions').includes('Write')">
                                @csrf
                                <div class="col-md-6">
                                    @php
                                        $categories = App\Models\Mcategories::where('_status', 1)->select('category_id','category_name')
                                        ->orderBy('category_name')->get();
                                    @endphp
                                    <fieldset class="form-group">
                                        @if ($errors->has('category'))
                                            @foreach ($errors->get('category') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>Categories</label>
                                        @endif
                                        <select class="form-control" name="category" id="basicSelect">
                                            <option disabled selected>Choose Category</option>
                                            @foreach ($categories as $item)
                                                <option value="{{$item->category_id}}">{{$item->category_name}}</option>
                                            @endforeach
                                            
                                        </select>
                                    </fieldset>
                                </div>
                                <div class="col-md-6">
                                    <fieldset class="form-group">
                                        @if ($errors->has('subcategory_title'))
                                            @foreach ($errors->get('subcategory_title') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>Subcategory Title</label>
                                        @endif
                                        <vs-input
                                        name="subcategory_title"
                                        value="{{ old('subcategory_title')}} "
                                        dark />
                                    </fieldset>
                                </div>

                                <div class="col-md-6">
                                    <fieldset class="form-group">
                                        @if ($errors->has('subcategory_order'))
                                            @foreach ($errors->get('subcategory_order') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>Subcategory Order</label>
                                        @endif
                                        <vs-input
                                        name="subcategory_order"
                                        value="{{ old('subcategory_order')}} "
                                        dark/>
                                    </fieldset>
                                </div>

                                <div class="col-6">
                                    @if ($errors->has('subcategory_image'))
                                        @foreach ($errors->get('subcategory_image') as $message)
                                            <p class="text-danger">{{ $message }}</p>
                                        @endforeach
                                        @else
                                        <label>Subcategory Image  ( W 238PX x H 145PX )</label>
                                    @endif
                                    <div class="input-group">
                                        <span class="input-group-btn">
                                          <a id="lfm" data-input="thumbnail" data-preview="holder" class="btn btn-primary">
                                            <i class="fa fa-picture-o"></i> Choose
                                          </a>
                                        </span>
                                        <input id="thumbnail" class="form-control" type="text" name="subcategory_image" value="{{ old('subcategory_image')}}">
                                      </div>
                                    <img id="holder" style="margin-top:15px;max-height:100px;">
                                </div>

                                <div class="col-md-12" style="display: none">
                                    <textarea id="my-editor" name="category_summary" class="form-control">{!! old('category_summary') !!}</textarea>
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