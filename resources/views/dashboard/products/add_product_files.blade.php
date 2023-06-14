@include('page_start')
<div class="app-content content">
    <div class="content-overlay"></div>
    <div class="content-wrapper">
        <div class="content-header row">
            <div class="content-header-left col-12 mb-2 mt-1">
                <div class="breadcrumbs-top">
                    <h5 class="content-header-title float-left pr-1 mb-0">Products</h5>
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
                            <h4 class="card-title">Add Files</h4>
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
                            <form method="post" action="add-product-files" class="row" ref="form" enctype="multipart/form-data" v-if="$cookies.get('permissions').includes('Write')">
                                @csrf
                                <input class="form-control" type="hidden" name="product_id" value="{{ $id }}">
                                <div class="col-12">
                                    @if ($errors->has('file'))
                                        @foreach ($errors->get('file') as $message)
                                            <p class="text-danger">{{ $message }}</p>
                                        @endforeach
                                        @else
                                        <label>Product File</label>
                                    @endif
                                    <fieldset class="form-group">
                                        <div class="custom-file">
                                            <input type="file" name="file" class="custom-file-input" id="inputGroupFile01">
                                            <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                                        </div>
                                    </fieldset>
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
                                        <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="category" style="width: 165.406px;">Image</th>
                                        <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="action" style="width: 84.6094px;">action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                @php
                                 $s = 1;   
                                @endphp
                                @foreach ($productfiles as $item)
                                <tr role="row" class="odd">
                                        <td class="text-bold-600 pr-0 sorting_1">{{ $s++ }}</td>
                                        <td>
                                            <a href="{{$item->product_file}}" target="_blank">Download File</a>
                                        </td>
                                        <td>
                                            <div class="dropdown">
                                                <span class="bx bx-dots-vertical-rounded font-medium-3 dropdown-toggle nav-hide-arrow cursor-pointer" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="menu"></span>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a class="dropdown-item" href="delete-product-files/{{$item->productfile_id}}" onclick="return confirm('Are you sure?')"><i class="bx bx-trash mr-1"></i> delete</a>
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