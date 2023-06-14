@include('page_start')
<div class="app-content content">
    <div class="content-overlay"></div>
    <div class="content-wrapper">
        <div class="content-header row">
            <div class="content-header-left col-12 mb-2 mt-1">
                <div class="breadcrumbs-top">
                    <h5 class="content-header-title float-left pr-1 mb-0">Events</h5>
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
                            <h4 class="card-title">Edit Event</h4>
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
                            <form method="post" action="event-update" class="row" ref="form" v-if="$cookies.get('permissions').includes('Write')">
                                @csrf        
                                <input type="hidden" name="eventid" value="{{$event->event_id}}">                       

                                <div class="col-lg-6">
                                    <fieldset class="form-group">
                                        @if ($errors->has('event_title'))
                                            @foreach ($errors->get('event_title') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>Event Title</label>
                                        @endif
                                        <vs-input
                                        name="event_title"
                                        value="{{ $event->event_title }}"
                                        dark  />
                                    </fieldset>
                                </div>

                                <div class="col-lg-6">
                                    <fieldset class="form-group">
                                        @if ($errors->has('event_date'))
                                            @foreach ($errors->get('event_date') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>Event Date</label>
                                        @endif
                                        <vs-input
                                        name="event_date"
                                        type="date"
                                        value="{{ $event->event_date }}"
                                        dark  />
                                    </fieldset>
                                </div>

                                <div class="col-lg-6">
                                    <fieldset class="form-group">
                                        @if ($errors->has('event_time'))
                                            @foreach ($errors->get('event_time') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>Event Time</label>
                                        @endif
                                        <vs-input
                                        name="event_time"
                                        type="time"
                                        value="{{ $event->event_time }}"
                                        dark  />
                                    </fieldset>
                                </div>

                                <div class="col-6">
                                    @if ($errors->has('event_cover'))
                                        @foreach ($errors->get('event_cover') as $message)
                                            <p class="text-danger">{{ $message }}</p>
                                        @endforeach
                                        @else
                                        <label>Event Cover  ( Auto Adjustable )</label>
                                    @endif
                                    <div class="input-group">
                                        <span class="input-group-btn">
                                          <a id="lfm" data-input="thumbnail" data-preview="holder" class="btn btn-primary">
                                            <i class="fa fa-picture-o"></i> Choose
                                          </a>
                                        </span>
                                        <input id="thumbnail" class="form-control" type="text" name="event_cover" value="{{ $event->event_cover }}">
                                      </div>
                                    <img id="holder" style="margin-top:15px;max-height:100px;">
                                </div>
                                <div class="col-md-12">
                                    <fieldset class="form-group">
                                        @if ($errors->has('event_excerpt'))
                                            @foreach ($errors->get('event_excerpt') as $message)
                                                <p class="text-danger">{{ $message }}</p>
                                            @endforeach
                                            @else
                                            <label>Event Excerpt</label>
                                        @endif
                                        <textarea class="form-control" name="event_excerpt" rows="4">{{ $event->event_excerpt }}</textarea>
                                    </fieldset>
                                </div>
                                <div class="col-md-12">
                                    @if ($errors->has('event_description'))
                                        @foreach ($errors->get('event_description') as $message)
                                            <p class="text-danger">{{ $message }}</p>
                                        @endforeach
                                        @else
                                        <label>Write in detail</label>
                                    @endif
                                    <textarea id="my-editor" name="event_description" class="form-control">{{ $event->event_description }}</textarea>
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