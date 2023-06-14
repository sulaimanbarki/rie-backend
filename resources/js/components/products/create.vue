<template>
    <form @submit.prevent="create()" v-if="$cookies.get('permissions').includes('Write')" id="stacked-pill">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="card-header">
                               
                            </div>
                            <div class="card-body">
                                <div class="row pills-stacked">
                                    <div class="col-md-3 col-sm-12">
                                        <ul class="nav nav-pills flex-column text-center text-md-left pill-container">
                                            <li class="nav-item">
                                                <a class="nav-link" id="home-tab-end" data-toggle="pill" href="#basic-info-1" aria-controls="basic-info-1" aria-selected="true">
                                                    Basic Info
                                                </a>
                                            </li>
                                           
                                            <li class="nav-item">
                                                <a class="nav-link" id="size" data-toggle="pill" href="#size-1" aria-controls="size-1" role="tab" aria-selected="false">
                                                    Size Parameters
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="quality" data-toggle="pill" href="#quality-1" aria-controls="quality-1" role="tab" aria-selected="true">
                                                    Quality Parameters
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="performance" data-toggle="pill" href="#performance-1" aria-controls="performance-1" role="tab" aria-selected="true">
                                                    Performance Parameters
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="engine" data-toggle="pill" href="#engine-1" aria-controls="engine-1" role="tab" aria-selected="true">
                                                    Engine
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="transmission" data-toggle="pill" href="#transmission-1" aria-controls="transmission-1" role="tab" aria-selected="true">
                                                    Transmission
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="clutch" data-toggle="pill" href="#clutch-1" aria-controls="clutch-1" role="tab" aria-selected="true">
                                                    Clutch
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="axle" data-toggle="pill" href="#axle-1" aria-controls="axle-1" role="tab" aria-selected="true">
                                                    Axle
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="frame" data-toggle="pill" href="#frame-1" aria-controls="frame-1" role="tab" aria-selected="true">
                                                    Frame
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="suspension" data-toggle="pill" href="#suspension-1" aria-controls="suspension-1" role="tab" aria-selected="true">
                                                    Suspension
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="tyres" data-toggle="pill" href="#tyres-1" aria-controls="tyres-1" role="tab" aria-selected="true">
                                                    Tyres
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="braking" data-toggle="pill" href="#braking-1" aria-controls="braking-1" role="tab" aria-selected="true">
                                                    Braking System
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="steering" data-toggle="pill" href="#steering-1" aria-controls="steering-1" role="tab" aria-selected="true">
                                                    Steering Device
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="fuel" data-toggle="pill" href="#fuel-1" aria-controls="fuel-1" role="tab" aria-selected="true">
                                                    Fuel Tank
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="cabin" data-toggle="pill" href="#cabin-1" aria-controls="cabin-1" role="tab" aria-selected="true">
                                                    Cabin
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="electrical" data-toggle="pill" href="#electrical-1" aria-controls="electrical-1" role="tab" aria-selected="true">
                                                    Electrical
                                                </a>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                      <div class="col-md-9 col-sm-12">

                                      
                                        <div class="tab-content">
                                                <div class="tab-pane active" id="basic-info-1" aria-labelledby="basic-info" role="tabpanel"  aria-expanded="true">
                                                    
                                                    <div class="row">
                                                        <div class="col-md-12"><strong>Basic Information</strong> </div>
                                                        <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.product_title ? 'danger' : '']" v-text="errors.product_title ? errors.product_title[0] : 'Product Title *'"></label>
                                                                <vs-input
                                                                v-model="product_title" placeholder="Type product title" />
                                                            </fieldset>
                                                        </div>

                                                        <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.category ? 'danger' : '']" v-text="errors.category ? errors.category[0] : 'Product Category *'"></label>
                                                                <v-select :options="categories" v-model="category" placeholder="Choose Category" ref="input"  @input="loadSubCategories"></v-select>
                                                            </fieldset>
                                                        </div>

                                                        <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.subcategory ? 'danger' : '']" v-text="errors.subcategory ? errors.subcategory[0] : 'Product Subcategory *'"></label>
                                                                <v-select :options="subcategories" v-model="subcategory" placeholder="Choose Subcategory"></v-select>
                                                            </fieldset>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.model_number ? 'danger' : '']" v-text="errors.model_number ? errors.model_number[0] : 'Model Number'"></label>
                                                                <vs-input
                                                                v-model="model_number" placeholder="Enter model number" />
                                                            </fieldset>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.driving_method ? 'danger' : '']" v-text="errors.driving_method ? errors.driving_method[0] : 'Driving Method'"></label>
                                                                <vs-input
                                                                v-model="driving_method" placeholder="Enter driving method" />
                                                            </fieldset>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.description ? 'danger' : '']" v-text="errors.description ? errors.description[0] : 'Product Description *'"></label>
                                                                <textarea v-model="description" placeholder="Write product description" class="form-control"></textarea>
                                                            </fieldset>
                                                        </div>
                                                        
                                                    </div>

                                                </div>

                                                <div class="tab-pane" id="size-1" aria-labelledby="size" role="tabpanel">
                                                    
                                                    <div class="row">
                                                        <div class="col-md-12"><strong>Size Parameters</strong> </div>
                                                        <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.total_length ? 'danger' : '']" v-text="errors.total_length ? errors.total_length[0] : 'Total Length(mm)'"></label>
                                                                <vs-input
                                                                v-model="total_length" placeholder="Enter total length" />
                                                            </fieldset>
                                                        </div>

                                                        <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.overall_width ? 'danger' : '']" v-text="errors.overall_width ? errors.overall_width[0] : 'Overall Width(mm)'"></label>
                                                                <vs-input
                                                                v-model="overall_width" placeholder="Enter overall width" />
                                                            </fieldset>
                                                        </div>

                                                        <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.total_height ? 'danger' : '']" v-text="errors.total_height ? errors.total_height[0] : 'Total Height(mm)'"></label>
                                                                <vs-input
                                                                v-model="total_height" placeholder="Enter total height" />
                                                            </fieldset>
                                                        </div>

                                                        <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.wheel_base ? 'danger' : '']" v-text="errors.wheel_base ? errors.wheel_base[0] : 'Wheel Base(mm)'"></label>
                                                                <vs-input
                                                                v-model="wheel_base" placeholder="Enter wheel base" />
                                                            </fieldset>
                                                        </div>

                                                        <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.front_rear_suspension ? 'danger' : '']" v-text="errors.front_rear_suspension ? errors.front_rear_suspension[0] : 'Front / Rear suspension (mm)'"></label>
                                                                <vs-input
                                                                v-model="front_rear_suspension" placeholder="Enter front / rear suspension" />
                                                            </fieldset>
                                                        </div>

                                                        <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.wheel_track ? 'danger' : '']" v-text="errors.wheel_track ? errors.wheel_track[0] : 'Wheel Track (front/back)(mm)'"></label>
                                                                <vs-input
                                                                v-model="wheel_track" placeholder="Enter wheel track" />
                                                            </fieldset>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="tab-pane" id="quality-1" aria-labelledby="quality" role="tabpanel">
                                                    
                                                    <div class="row">
                                                        <div class="col-md-12"><strong>Quality Parameters</strong> </div>
                                                        <div class="col-md-6">
                                                                <fieldset class="form-group">
                                                                    <label :class="[errors.total_weight ? 'danger' : '']" v-text="errors.total_weight ? errors.total_weight[0] : 'Total Weight (kg)'"></label>
                                                                    <vs-input
                                                                    v-model="total_weight" placeholder="Enter total weight" />
                                                                </fieldset>
                                                            </div>

                                                            <div class="col-md-6">
                                                                <fieldset class="form-group">
                                                                    <label :class="[errors.total_vehicle_mass ? 'danger' : '']" v-text="errors.total_vehicle_mass ? errors.total_vehicle_mass[0] : 'Total Vehicle Mass (kg)'"></label>
                                                                    <vs-input
                                                                    v-model="total_vehicle_mass" placeholder="Enter total vehicle mass" />
                                                                </fieldset>
                                                            </div>
                                                    </div>

                                                
                                                </div>
                                                <div class="tab-pane" id="performance-1" aria-labelledby="performance" role="tabpanel">
                                                    
                                                    <div class="row">
                                                        <div class="col-md-12"><strong>Performance Parameteres</strong></div>
                                                        <div class="col-md-6">
                                                                <fieldset class="form-group">
                                                                    <label :class="[errors.maximum_speed ? 'danger' : '']" v-text="errors.maximum_speed ? errors.maximum_speed[0] : 'Maximum Speed (km/h)'"></label>
                                                                    <vs-input
                                                                    v-model="maximum_speed" placeholder="Enter maximum speed" />
                                                                </fieldset>
                                                            </div>

                                                            <div class="col-md-6">
                                                                <fieldset class="form-group">
                                                                    <label :class="[errors.minimum_turning_diameter ? 'danger' : '']" v-text="errors.minimum_turning_diameter ? errors.minimum_turning_diameter[0] : 'Minimum Turning Diameter'"></label>
                                                                    <vs-input
                                                                    v-model="minimum_turning_diameter" placeholder="Enter minimum turning diameter" />
                                                                </fieldset>
                                                            </div>
                                                        </div>

                                                </div>
                                                <div class="tab-pane" id="engine-1" aria-labelledby="engine" role="tabpanel">

                                                    <div class="row">
                                                        <div class="col-md-12"><strong>Engine</strong></div>
                                                        <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.engine_model ? 'danger' : '']" v-text="errors.engine_model ? errors.engine_model[0] : 'Model'"></label>
                                                                <vs-input
                                                                v-model="engine_model" placeholder="Enter model" />
                                                            </fieldset>
                                                        </div>

                                                        <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.engine_type ? 'danger' : '']" v-text="errors.engine_type ? errors.engine_type[0] : 'Type'"></label>
                                                                <vs-input
                                                                v-model="engine_type" placeholder="Enter type" />
                                                            </fieldset>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.bore_diameter ? 'danger' : '']" v-text="errors.bore_diameter ? errors.bore_diameter[0] : 'Bore Diameter(mm)'"></label>
                                                                <vs-input
                                                                v-model="bore_diameter" placeholder="Enter bore diameter(mm)" />
                                                            </fieldset>
                                                        </div>

                                                        <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.engine_stroke ? 'danger' : '']" v-text="errors.engine_stroke ? errors.engine_stroke[0] : 'Stroke (mm)'"></label>
                                                                <vs-input
                                                                v-model="engine_stroke" placeholder="Enter engine stroke (mm)" />
                                                            </fieldset>
                                                        </div>

                                                        <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.engine_displacement ? 'danger' : '']" v-text="errors.engine_displacement ? errors.engine_displacement[0] : 'Engine Displacement'"></label>
                                                                <vs-input
                                                                v-model="engine_displacement" placeholder="Enter engine displacement (cc)" />
                                                            </fieldset>
                                                        </div>

                                                        <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.compression_ratio ? 'danger' : '']" v-text="errors.compression_ratio ? errors.compression_ratio[0] : 'Compression Ratio'"></label>
                                                                <vs-input
                                                                v-model="compression_ratio" placeholder="Enter compression ratio" />
                                                            </fieldset>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.rated_power ? 'danger' : '']" v-text="errors.rated_power ? errors.rated_power[0] : 'Rated Power kW(Ps)'"></label>
                                                                <vs-input
                                                                v-model="rated_power" placeholder="Enter rated power kW(Ps)" />
                                                            </fieldset>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.rated_speed ? 'danger' : '']" v-text="errors.rated_speed ? errors.rated_speed[0] : 'Rated Speed r/min'"></label>
                                                                <vs-input
                                                                v-model="rated_speed" placeholder="Enter rated speed r/min" />
                                                            </fieldset>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.maximum_torque ? 'danger' : '']" v-text="errors.maximum_torque ? errors.maximum_torque[0] : 'Maximum Torque N m /r/min'"></label>
                                                                <vs-input
                                                                v-model="maximum_torque" placeholder="Enter maximum torque N m /r/min" />
                                                            </fieldset>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.engine_fuel_type ? 'danger' : '']" v-text="errors.engine_fuel_type ? errors.engine_fuel_type[0] : 'Engine Fuel Type'"></label>
                                                                <vs-input
                                                                v-model="engine_fuel_type" placeholder="Enter engine fuel type" />
                                                            </fieldset>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                <div class="tab-pane" id="transmission-1" aria-labelledby="transmission" role="tabpanel">
                                                    
                                                    <div class="row">
                                                        <div class="col-md-12"><strong>Transmission</strong></div>
                                                        <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.transmission_model ? 'danger' : '']" v-text="errors.transmission_model ? errors.transmission_model[0] : 'Model'"></label>
                                                                <vs-input
                                                                v-model="transmission_model" placeholder="Enter model" />
                                                            </fieldset>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.control_method ? 'danger' : '']" v-text="errors.control_method ? errors.control_method[0] : 'Control Method'"></label>
                                                                <vs-input
                                                                v-model="control_method" placeholder="Enter control method" />
                                                            </fieldset>
                                                        </div>
                                                           <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.speed_ratio ? 'danger' : '']" v-text="errors.speed_ratio ? errors.speed_ratio[0] : 'Speed Ratio'"></label>
                                                                <vs-input
                                                                v-model="speed_ratio" placeholder="Enter speed ratio" />
                                                            </fieldset>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="tab-pane" id="clutch-1" aria-labelledby="clutch" role="tabpanel">
                                                    
                                                    <div class="row">
                                                        <div class="col-md-12"><strong>Clutch</strong></div>
                                                        <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.clutch_type ? 'danger' : '']" v-text="errors.clutch_type ? errors.clutch_type[0] : 'Type'"></label>
                                                                <vs-input
                                                                v-model="clutch_type" placeholder="Enter Type" />
                                                            </fieldset>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.clutch_diameter ? 'danger' : '']" v-text="errors.clutch_diameter ? errors.clutch_diameter[0] : 'Diameter(mm)'"></label>
                                                                <vs-input
                                                                v-model="clutch_diameter" placeholder="Enter Diameter(mm)" />
                                                            </fieldset>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.manipulation_method ? 'danger' : '']" v-text="errors.manipulation_method ? errors.manipulation_method[0] : 'Manipulation Method'"></label>
                                                                <vs-input
                                                                v-model="manipulation_method" placeholder="Enter manipulation method" />
                                                            </fieldset>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="tab-pane" id="axle-1" aria-labelledby="axle" role="tabpanel">
                                                    
                                                    <div class="row">
                                                        <div class="col-md-12"><strong>Axle</strong></div>
                                                        <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.front_axle ? 'danger' : '']" v-text="errors.front_axle ? errors.front_axle[0] : 'Front Axle'"></label>
                                                                <vs-input
                                                                v-model="front_axle" placeholder="Enter front axle" />
                                                            </fieldset>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.rear_axle ? 'danger' : '']" v-text="errors.rear_axle ? errors.rear_axle[0] : 'Rear Axle'"></label>
                                                                <vs-input
                                                                v-model="rear_axle" placeholder="Enter rear axle" />
                                                            </fieldset>
                                                        </div>
                                                     </div>

                                                </div>
                                                <div class="tab-pane" id="frame-1" aria-labelledby="frame" role="tabpanel">
                                                    
                                                    <div class="row">
                                                        <div class="col-md-12"><strong>Frame</strong></div>
                                                        <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.structure_type ? 'danger' : '']" v-text="errors.structure_type ? errors.structure_type[0] : 'Structure Type'"></label>
                                                                <vs-input
                                                                v-model="structure_type" placeholder="Enter structure type" />
                                                            </fieldset>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.standard_sizes ? 'danger' : '']" v-text="errors.standard_sizes ? errors.standard_sizes[0] : 'Standard Sizes'"></label>
                                                                <vs-input
                                                                v-model="standard_sizes" placeholder="Enter standard sizes" />
                                                            </fieldset>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="tab-pane" id="suspension-1" aria-labelledby="suspension" role="tabpanel">
                                                    
                                                    <div class="row">
                                                        <div class="col-md-12"><strong>Suspension</strong></div>
                                                         <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.front_suspension_structure ? 'danger' : '']" v-text="errors.front_suspension_structure ? errors.front_suspension_structure[0] : 'Front Suspension Structure'"></label>
                                                                <vs-input
                                                                v-model="front_suspension_structure" placeholder="Enter front suspension structure" />
                                                            </fieldset>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.rear_suspension_structure ? 'danger' : '']" v-text="errors.rear_suspension_structure ? errors.rear_suspension_structure[0] : 'Rear Suspension Structure'"></label>
                                                                <vs-input
                                                                v-model="rear_suspension_structure" placeholder="Enter rear suspension structure" />
                                                            </fieldset>
                                                        </div>
                                                     </div>

                                                </div>
                                                <div class="tab-pane" id="tyres-1" aria-labelledby="tyres" role="tabpanel">
                                                    
                                                    <div class="row">
                                                        <div class="col-md-12"><strong>Tyres</strong></div>
                                                        <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.tyres_model ? 'danger' : '']" v-text="errors.tyres_model ? errors.tyres_model[0] : 'Model'"></label>
                                                                <vs-input
                                                                v-model="tyres_model" placeholder="Enter Model" />
                                                            </fieldset>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="tab-pane" id="braking-1" aria-labelledby="braking" role="tabpanel">
                                                    
                                                    <div class="row">
                                                        <div class="col-md-12"><strong>Braking System</strong></div>
                                                        <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.braking_type ? 'danger' : '']" v-text="errors.braking_type ? errors.braking_type[0] : 'Braking Type'"></label>
                                                                <vs-input
                                                                v-model="braking_type" placeholder="Enter braking type" />
                                                            </fieldset>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.driving_brake ? 'danger' : '']" v-text="errors.driving_brake ? errors.driving_brake[0] : 'Driving Brake'"></label>
                                                                <vs-input
                                                                v-model="driving_brake" placeholder="Enter driving brake" />
                                                            </fieldset>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.parking_brake ? 'danger' : '']" v-text="errors.parking_brake ? errors.parking_brake[0] : 'Parking Brake'"></label>
                                                                <vs-input
                                                                v-model="parking_brake" placeholder="Enter parking brake" />
                                                            </fieldset>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.auxiliary_brake ? 'danger' : '']" v-text="errors.auxiliary_brake ? errors.auxiliary_brake[0] : 'Auxiliary Brake'"></label>
                                                                <vs-input
                                                                v-model="auxiliary_brake" placeholder="Enter auxiliary brake" />
                                                            </fieldset>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="tab-pane" id="steering-1" aria-labelledby="steering" role="tabpanel">
                                                    
                                                    <div class="row">
                                                        <div class="col-md-12"><strong>Steering System</strong></div>
                                                        <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.steering_type ? 'danger' : '']" v-text="errors.steering_type ? errors.steering_type[0] : 'Steering Type'"></label>
                                                                <vs-input
                                                                v-model="steering_type" placeholder="Enter steering type" />
                                                            </fieldset>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="tab-pane" id="fuel-1" aria-labelledby="fuel" role="tabpanel">
                                                    
                                                    <div class="row">
                                                        <div class="col-md-12"><strong>Fuel Tank</strong></div>
                                                        <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.capacity ? 'danger' : '']" v-text="errors.capacity ? errors.capacity[0] : 'Capacity'"></label>
                                                                <vs-input
                                                                v-model="capacity" placeholder="Enter capacity" />
                                                            </fieldset>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.material ? 'danger' : '']" v-text="errors.material ? errors.material[0] : 'Material'"></label>
                                                                <vs-input
                                                                v-model="material" placeholder="Enter material" />
                                                            </fieldset>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="tab-pane" id="cabin-1" aria-labelledby="cabin" role="tabpanel">
                                                    <div class="row">
                                                        <div class="col-md-12"><strong>Cabin</strong></div>
                                                        <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.cabin_type ? 'danger' : '']" v-text="errors.cabin_type ? errors.cabin_type[0] : 'Type'"></label>
                                                                <vs-input
                                                                v-model="cabin_type" placeholder="Enter Type" />
                                                            </fieldset>
                                                        </div>
                                                     </div>
                                                </div>
                                                <div class="tab-pane" id="electrical-1" aria-labelledby="electrical" role="tabpanel">

                                                    <div class="row">
                                                        <div class="col-md-12"><strong> Electrical System</strong></div>
                                                        <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.vehicle_voltage ? 'danger' : '']" v-text="errors.vehicle_voltage ? errors.vehicle_voltage[0] : 'Vehicle Voltage'"></label>
                                                                <vs-input
                                                                v-model="vehicle_voltage" placeholder="Enter vehicle voltage" />
                                                            </fieldset>
                                                        </div>
                                                         <div class="col-md-6">
                                                            <fieldset class="form-group">
                                                                <label :class="[errors.battery ? 'danger' : '']" v-text="errors.battery ? errors.battery[0] : 'Battery'"></label>
                                                                <vs-input
                                                                v-model="battery" placeholder="Enter battery" />
                                                            </fieldset>
                                                        </div>
                                                    </div>

                                                </div>

                                            <div>&nbsp;</div>
                                            <div class="col-md-12">
                                                <button type="submit" class="btn btn-dark glow shadow mr-1 mb-1">Submit</button>
                                            </div> 
                                        </div>
                                        
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </form>
</template>
<style>
.vs-input {
    width: 100%;
}
.vs__clear{
    display: none;
}
.vs__search{
    height: 30px !important;
}
.vs__selected{
    font-size: 13px !important;
    background-color: #ecf0f1;
    border: 1px solid #222;
    border-radius: 2px;
    color: #222;
    line-height: 2px;
    padding: 5px;
    border-radius: 5px;
}

</style>

<script>
export default {
    data () {
        return {
            categories:[],
            subcategories:[],
            product_title: '',
            product_color:'',
            product_model:'',
            fuel_type:'',
            product_model:'',
            category: '',
            subcategory:'',
            model_number:'',
            driving_method:'',
            total_length:'',
            overall_width:'', 
            total_height:'', 
            wheel_base:'', 
            front_rear_suspension:'', 
            wheel_track:'',
            total_weight:'',
            total_vehicle_mass:'',
            maximum_speed:'',
            minimum_turning_diameter:'',
            engine_model:'',
            engine_type:'',
            bore_diameter:'',
            engine_stroke:'',
            engine_displacement:'',
            compression_ratio:'',
            rated_power:'',
            rated_speed:'',
            maximum_torque:'',
            engine_fuel_type:'',
            transmission_model:'',
            control_method:'',
            speed_ratio:'',
            clutch_type:'',
            clutch_diameter:'',
            manipulation_method:'',
            front_axle:'',
            rear_axle:'',
            structure_type:'',
            standard_sizes:'',
            front_suspension_structure:'',
            rear_suspension_structure:'',
            tyres_model:'',
            braking_type:'',
            driving_brake:'',
            parking_brake:'',
            auxiliary_brake:'',
            steering_type:'',
            capacity:'',
            material:'',
            cabin_type:'',
            vehicle_voltage:'',
            battery:'',
            description: '',
            errors: [],
        }
    },
    methods: {
       
        async loadCategories () {
            try {
                const { data } = await axios.get(`${this.$base}categories-dropdown`)
                this.categories = data
            } catch (err) {
                alert(err)
            }
        },
        loadSubCategories (){
            const loading = this.$vs.loading({
                target: this.$refs.form,
                color: 'dark',
                text: 'Processing...'
            })
            axios.post(`${this.$base}load-category-wise-subcategory`, {
                categoryid: this.category.value,
            }).then(response => {
                this.subcategories = response.data
                loading.close()
            }).catch (err => {
                loading.close()
                alert('An error occur while initiating subcategories data ' + err)
            })
            loading.close()
        },
        async create () {
            const loading = this.$vs.loading({
                target: this.$refs.form,
                color: 'dark',
                text: 'Processing...'
            })
            try {
                const { data } = await axios.post(`${this.$base}products-mgt`, {
                    category: this.category['value'],
                    subcategory: this.subcategory['value'],
                    product_title: this.product_title,
                    model_number: this.model_number,
                    driving_method: this.driving_method,
                    total_length: this.total_length, 
                    overall_width: this.overall_width, 
                    total_height: this.total_height, 
                    wheel_base: this.wheel_base, 
                    front_rear_suspension: this.front_rear_suspension, 
                    wheel_track: this.wheel_track, 
                    total_weight: this.total_weight, 
                    total_vehicle_mass: this.total_vehicle_mass,
                    maximum_speed: this.maximum_speed,
                    minimum_turning_diameter: this.minimum_turning_diameter,
                    engine_model: this.engine_model,
                    engine_type: this.engine_type,
                    bore_diameter: this.bore_diameter,
                    engine_stroke: this.engine_stroke,
                    engine_displacement: this.engine_displacement,
                    compression_ratio: this.compression_ratio,
                    rated_power: this.rated_power,
                    rated_speed: this.rated_speed,
                    maximum_torque:this.maximum_torque,
                    engine_fuel_type: this.engine_fuel_type,
                    transmission_model: this.transmission_model,
                    control_method: this.control_method,
                    speed_ratio: this.speed_ratio,
                    clutch_type: this.clutch_type,
                    clutch_diameter: this.clutch_diameter,
                    manipulation_method: this.manipulation_method,
                    front_axle: this.front_axle,
                    rear_axle: this.rear_axle,
                    structure_type: this.structure_type,
                    standard_sizes: this.standard_sizes,
                    front_suspension_structure: this.front_suspension_structure,
                    rear_suspension_structure: this.rear_suspension_structure,
                    tyres_model: this.tyres_model,
                    braking_type: this.braking_type,
                    driving_brake: this.driving_brake,
                    parking_brake: this.parking_brake,
                    auxiliary_brake: this.auxiliary_brake,
                    steering_type: this.steering_type,
                    capacity: this.capacity,
                    material: this.material,
                    cabin_type: this.cabin_type,
                    vehicle_voltage: this.vehicle_voltage,
                    battery: this.battery,
                    color: this.product_color,
                    model: this.product_model,
                    fueltype: this.fuel_type,
                    description: this.description
                });
                loading.close()
                this.$vs.notification({
                    color: 'dark',
                    title: 'Done',
                    text: data.msg
                })
                this.loadApi();

            } catch (err) {
                loading.close()
                if ( err.response.status == 422 ) {
                    this.errors = err.response.data.errors
                } else {
                    alert(err)
                }
            }
        },
    },
    created () {
        this.loadCategories()
    }
}
</script>