@include('page_start')
<div class="app-content content">
    <div class="content-overlay"></div>
    <div class="content-wrapper">
        <div class="content-header row">
            <div class="content-header-left col-12 mb-2 mt-1">
                <div class="breadcrumbs-top">
                    <h5 class="content-header-title float-left pr-1 mb-0">Menus</h5>
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
                            <h4 class="card-title">Edit menu</h4>
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
                            <form method="post" action="menus-mgt/{{$menu->menu_id}}" class="row" ref="form" v-if="$cookies.get('permissions').includes('Write')">
                                @method('PUT')
                                @csrf        
                                <input type="hidden" name="menuid" value="{{$menu->menu_id}}">                       
                                <div class="col-lg-6">
                                    <fieldset class="form-group">
                                        @if ($errors->has('menu_title'))
                                            @foreach ($errors->get('menu_title') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>menu Title</label>
                                        @endif
                                        <vs-input
                                        name="menu_title"
                                        value="{{ $menu->menu_title }}"
                                        dark  />
                                    </fieldset>
                                </div>
                                
                                <div class="col-lg-6">
                                    <fieldset class="form-group">
                                        @if ($errors->has('menu_order'))
                                            @foreach ($errors->get('menu_order') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>menu Order</label>
                                        @endif
                                        <vs-input
                                        name="menu_order"
                                        value="{{ $menu->menu_order }}"
                                        dark  />
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