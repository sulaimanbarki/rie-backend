@include('page_start')
<div class="app-content content">
    <div class="content-overlay"></div>
    <div class="content-wrapper">
        <div class="content-header row">
            <div class="content-header-left col-12 mb-2 mt-1">
                <div class="breadcrumbs-top">
                    <h5 class="content-header-title float-left pr-1 mb-0">Certificates</h5>
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
                            <h4 class="card-title">Add Certificate</h4>
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
                            <form method="post" action="add-certificate" class="row" ref="form" v-if="$cookies.get('permissions').includes('Write')">
                                @csrf
                                <div class="col-lg-12">
                                    <fieldset class="form-group">
                                        @if ($errors->has('certificate_name'))
                                            @foreach ($errors->get('certificate_name') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>Certificate Name</label>
                                        @endif
                                        <vs-input
                                        name="certificate_name"
                                        value="{{ old('certificate_name')}}"
                                        dark  />
                                    </fieldset>
                                </div>

                                <div class="col-12">
                                    @if ($errors->has('certificate_image'))
                                        @foreach ($errors->get('certificate_image') as $message)
                                            <p class="text-danger">{{ $message }}</p>
                                        @endforeach
                                        @else
                                        <label>Certificate ( W 50PX x H 50PX )</label>
                                    @endif
                                    <div class="input-group">
                                        <span class="input-group-btn">
                                          <a id="lfm" data-input="thumbnail" data-preview="holder" class="btn btn-primary">
                                            <i class="fa fa-picture-o"></i> Choose
                                          </a>
                                        </span>
                                        <input id="thumbnail" class="form-control" type="text" name="certificate_image" value="{{ old('certificate_image')}}">
                                      </div>
                                    <img id="holder" style="margin-top:15px;max-height:100px;">
                                </div>

                                <div class="col-md-12" style="display: none">
                                    <textarea id="my-editor"  class="form-control"></textarea>
                                </div>
                                
                                <div>
                                    &nbsp;
                                </div>
                                <div class="col-md-12">
                                    <button type="submit" class="btn btn-dark glow shadow mr-1 mb-1">Create</button>
                                </div>
                            </form>


                            <table id="table-extended-success" class="table mb-0 dataTable no-footer" role="grid">
                                <thead>
                                    <tr role="row">
                                        <th class="sorting_asc" tabindex="0" aria-controls="table-extended-success" rowspan="1" colspan="1" aria-sort="ascending" aria-label="campaign: activate to sort column descending" style="width: 216.797px;">S#</th>
                                        <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="category" style="width: 165.406px;">Certificate</th>
                                        <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="category" style="width: 165.406px;">Image</th>
                                        <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="action" style="width: 84.6094px;">action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                @php
                                 $s = 1;   
                                @endphp
                                @foreach ($certificates as $item)
                                <tr role="row" class="odd">
                                        <td class="text-bold-600 pr-0 sorting_1">{{ $s++ }}</td>
                                        <td>{{ $item->certificate_name}}</td>
                                        <td><img style="width: 100px;" v-img src="{{$item->certificate_file}}" alt="card"></td>
                                        <td>
                                            <div class="dropdown">
                                                <span class="bx bx-dots-vertical-rounded font-medium-3 dropdown-toggle nav-hide-arrow cursor-pointer" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="menu"></span>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a class="dropdown-item" href="delete-certificate/{{$item->certificate_id}}" onclick="return confirm('Are you sure?')"><i class="bx bx-trash mr-1"></i> delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    @endforeach
                                  </tbody>
                            </table>
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