(self.webpackChunk=self.webpackChunk||[]).push([[677],{2745:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>l});var s=a(3645),r=a.n(s)()((function(t){return t[1]}));r.push([t.id,".vs-input{width:100%}.vs__clear{display:none}.vs__search{height:30px!important}.vs__selected{font-size:13px!important;background-color:#ecf0f1;border:1px solid #222;border-radius:2px;color:#222;line-height:2px;padding:5px;border-radius:5px}",""]);const l=r},6677:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>c});var s=a(7757),r=a.n(s);function l(t,e,a,s,r,l,i){try{var o=t[l](i),n=o.value}catch(t){return void a(t)}o.done?e(n):Promise.resolve(n).then(s,r)}function i(t){return function(){var e=this,a=arguments;return new Promise((function(s,r){var i=t.apply(e,a);function o(t){l(i,s,r,o,n,"next",t)}function n(t){l(i,s,r,o,n,"throw",t)}o(void 0)}))}}function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}const n={data:function(){var t;return o(t={categories:[],subcategories:[],product_title:"",product_color:"",product_model:"",fuel_type:""},"product_model",""),o(t,"category",""),o(t,"subcategory",""),o(t,"model_number",""),o(t,"driving_method",""),o(t,"total_length",""),o(t,"overall_width",""),o(t,"total_height",""),o(t,"wheel_base",""),o(t,"front_rear_suspension",""),o(t,"wheel_track",""),o(t,"total_weight",""),o(t,"total_vehicle_mass",""),o(t,"maximum_speed",""),o(t,"minimum_turning_diameter",""),o(t,"description",""),o(t,"errors",[]),t},methods:{loadCategories:function(){var t=this;return i(r().mark((function e(){var a,s;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.get("".concat(t.$base,"categories-dropdown"));case 3:a=e.sent,s=a.data,t.categories=s,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},loadSubCategories:function(){var t=this,e=this.$vs.loading({target:this.$refs.form,color:"dark",text:"Processing..."});axios.post("".concat(this.$base,"load-category-wise-subcategory"),{categoryid:this.category.value}).then((function(a){t.subcategories=a.data,e.close()})).catch((function(t){e.close(),alert("An error occur while initiating subcategories data "+t)})),e.close()},create:function(){var t=this;return i(r().mark((function e(){var a,s,l;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.$vs.loading({target:t.$refs.form,color:"dark",text:"Processing..."}),e.prev=1,e.next=4,axios.post("".concat(t.$base,"products-mgt"),{category:t.category.value,subcategory:t.subcategory.value,product_title:t.product_title,model_number:t.model_number,driving_method:t.driving_method,total_length:t.total_length,overall_width:t.overall_width,total_height:t.total_height,wheel_base:t.wheel_base,front_rear_suspension:t.front_rear_suspension,wheel_track:t.wheel_track,total_weight:t.total_weight,total_vehicle_mass:t.total_vehicle_mass,maximum_speed:t.maximum_speed,minimum_turning_diameter:t.minimum_turning_diameter,color:t.product_color,model:t.product_model,fueltype:t.fuel_type,description:t.description});case 4:s=e.sent,l=s.data,a.close(),t.$vs.notification({color:"dark",title:"Done",text:l.msg}),t.isOpen=!1,t.category=t.product_title=t.product_color=t.product_model=t.fuel_type=t.description="",t.loadApi(),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),a.close(),422==e.t0.response.status?t.errors=e.t0.response.data.errors:alert(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})))()}},created:function(){this.loadCategories()}};a(2569);const c=(0,a(1900).Z)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.$cookies.get("permissions").includes("Write")?a("form",{attrs:{id:"stacked-pill"},on:{submit:function(e){return e.preventDefault(),t.create()}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"}),t._v(" "),a("div",{staticClass:"card-body"},[a("div",{staticClass:"row pills-stacked"},[t._m(0),t._v(" "),a("div",{staticClass:"col-md-9 col-sm-12"},[a("div",{staticClass:"tab-content"},[a("div",{staticClass:"tab-pane active",attrs:{id:"basic-info-1","aria-labelledby":"basic-info",role:"tabpanel","aria-expanded":"true"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("fieldset",{staticClass:"form-group"},[a("label",{class:[t.errors.product_title?"danger":""],domProps:{textContent:t._s(t.errors.product_title?t.errors.product_title[0]:"Product Title *")}}),t._v(" "),a("vs-input",{attrs:{placeholder:"Type product title"},model:{value:t.product_title,callback:function(e){t.product_title=e},expression:"product_title"}})],1)]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("fieldset",{staticClass:"form-group"},[a("label",{class:[t.errors.category?"danger":""],domProps:{textContent:t._s(t.errors.category?t.errors.category[0]:"Product Category *")}}),t._v(" "),a("v-select",{ref:"input",attrs:{options:t.categories,placeholder:"Choose Category"},on:{input:t.loadSubCategories},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}})],1)]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("fieldset",{staticClass:"form-group"},[a("label",{class:[t.errors.subcategory?"danger":""],domProps:{textContent:t._s(t.errors.subcategory?t.errors.subcategory[0]:"Product Subcategory *")}}),t._v(" "),a("v-select",{attrs:{options:t.subcategories,placeholder:"Choose Subcategory"},model:{value:t.subcategory,callback:function(e){t.subcategory=e},expression:"subcategory"}})],1)]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("fieldset",{staticClass:"form-group"},[a("label",{class:[t.errors.model_number?"danger":""],domProps:{textContent:t._s(t.errors.model_number?t.errors.model_number[0]:"Model Number")}}),t._v(" "),a("vs-input",{attrs:{placeholder:"Enter model number"},model:{value:t.model_number,callback:function(e){t.model_number=e},expression:"model_number"}})],1)]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("fieldset",{staticClass:"form-group"},[a("label",{class:[t.errors.driving_method?"danger":""],domProps:{textContent:t._s(t.errors.driving_method?t.errors.driving_method[0]:"Driving Method")}}),t._v(" "),a("vs-input",{attrs:{placeholder:"Enter driving method"},model:{value:t.driving_method,callback:function(e){t.driving_method=e},expression:"driving_method"}})],1)]),t._v(" "),a("div",{staticClass:"col-md-12"},[a("fieldset",{staticClass:"form-group"},[a("label",{class:[t.errors.description?"danger":""],domProps:{textContent:t._s(t.errors.description?t.errors.description[0]:"Product Description *")}}),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control",attrs:{placeholder:"Write product description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})])])])]),t._v(" "),a("div",{staticClass:"tab-pane",attrs:{id:"size-1","aria-labelledby":"size",role:"tabpanel"}},[a("div",{staticClass:"col-md-6"},[a("fieldset",{staticClass:"form-group"},[a("label",{class:[t.errors.total_length?"danger":""],domProps:{textContent:t._s(t.errors.total_length?t.errors.total_length[0]:"Total Length(mm)")}}),t._v(" "),a("vs-input",{attrs:{placeholder:"Enter total length"},model:{value:t.total_length,callback:function(e){t.total_length=e},expression:"total_length"}})],1)]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("fieldset",{staticClass:"form-group"},[a("label",{class:[t.errors.overall_width?"danger":""],domProps:{textContent:t._s(t.errors.overall_width?t.errors.overall_width[0]:"Overall Width(mm)")}}),t._v(" "),a("vs-input",{attrs:{placeholder:"Enter overall width"},model:{value:t.overall_width,callback:function(e){t.overall_width=e},expression:"overall_width"}})],1)]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("fieldset",{staticClass:"form-group"},[a("label",{class:[t.errors.total_height?"danger":""],domProps:{textContent:t._s(t.errors.total_height?t.errors.total_height[0]:"Total Height(mm)")}}),t._v(" "),a("vs-input",{attrs:{placeholder:"Enter total height"},model:{value:t.total_height,callback:function(e){t.total_height=e},expression:"total_height"}})],1)]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("fieldset",{staticClass:"form-group"},[a("label",{class:[t.errors.wheel_base?"danger":""],domProps:{textContent:t._s(t.errors.wheel_base?t.errors.wheel_base[0]:"Wheel Base(mm)")}}),t._v(" "),a("vs-input",{attrs:{placeholder:"Enter wheel base"},model:{value:t.wheel_base,callback:function(e){t.wheel_base=e},expression:"wheel_base"}})],1)]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("fieldset",{staticClass:"form-group"},[a("label",{class:[t.errors.front_rear_suspension?"danger":""],domProps:{textContent:t._s(t.errors.front_rear_suspension?t.errors.front_rear_suspension[0]:"Front / Rear suspension (mm)")}}),t._v(" "),a("vs-input",{attrs:{placeholder:"Enter front / rear suspension"},model:{value:t.front_rear_suspension,callback:function(e){t.front_rear_suspension=e},expression:"front_rear_suspension"}})],1)]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("fieldset",{staticClass:"form-group"},[a("label",{class:[t.errors.wheel_track?"danger":""],domProps:{textContent:t._s(t.errors.wheel_track?t.errors.wheel_track[0]:"Wheel Track (front/back)(mm)")}}),t._v(" "),a("vs-input",{attrs:{placeholder:"Enter wheel track"},model:{value:t.wheel_track,callback:function(e){t.wheel_track=e},expression:"wheel_track"}})],1)])]),t._v(" "),a("div",{staticClass:"tab-pane",attrs:{id:"quality-1","aria-labelledby":"quality",role:"tabpanel"}},[a("div",{staticClass:"col-md-6"},[a("fieldset",{staticClass:"form-group"},[a("label",{class:[t.errors.total_weight?"danger":""],domProps:{textContent:t._s(t.errors.total_weight?t.errors.total_weight[0]:"Total Weight (kg)")}}),t._v(" "),a("vs-input",{attrs:{placeholder:"Enter total weight"},model:{value:t.total_weight,callback:function(e){t.total_weight=e},expression:"total_weight"}})],1)]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("fieldset",{staticClass:"form-group"},[a("label",{class:[t.errors.total_vehicle_mass?"danger":""],domProps:{textContent:t._s(t.errors.total_vehicle_mass?t.errors.total_vehicle_mass[0]:"Total Vehicle Mass (kg)")}}),t._v(" "),a("vs-input",{attrs:{placeholder:"Enter total vehicle mass"},model:{value:t.total_vehicle_mass,callback:function(e){t.total_vehicle_mass=e},expression:"total_vehicle_mass"}})],1)])]),t._v(" "),a("div",{staticClass:"tab-pane",attrs:{id:"performance-1","aria-labelledby":"performance",role:"tabpanel"}},[a("div",{staticClass:"col-md-6"},[a("fieldset",{staticClass:"form-group"},[a("label",{class:[t.errors.maximum_speed?"danger":""],domProps:{textContent:t._s(t.errors.maximum_speed?t.errors.maximum_speed[0]:"Maximum Speed (km/h)")}}),t._v(" "),a("vs-input",{attrs:{placeholder:"Enter maximum speed"},model:{value:t.maximum_speed,callback:function(e){t.maximum_speed=e},expression:"maximum_speed"}})],1)]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("fieldset",{staticClass:"form-group"},[a("label",{class:[t.errors.minimum_turning_diameter?"danger":""],domProps:{textContent:t._s(t.errors.minimum_turning_diameter?t.errors.minimum_turning_diameter[0]:"Minimum Turning Diameter")}}),t._v(" "),a("vs-input",{attrs:{placeholder:"Enter minimum turning diameter"},model:{value:t.minimum_turning_diameter,callback:function(e){t.minimum_turning_diameter=e},expression:"minimum_turning_diameter"}})],1)])]),t._v(" "),a("div",{staticClass:"tab-pane",attrs:{id:"engine-1","aria-labelledby":"engine",role:"tabpanel"}},[t._v("\n                                                5\n                                            ")]),t._v(" "),a("div",{staticClass:"tab-pane",attrs:{id:"transmission-1","aria-labelledby":"transmission",role:"tabpanel"}},[t._v("\n                                                6\n                                            ")]),t._v(" "),a("div",{staticClass:"tab-pane",attrs:{id:"clutch-1","aria-labelledby":"clutch",role:"tabpanel"}},[t._v("\n                                                clutch\n                                            ")]),t._v(" "),a("div",{staticClass:"tab-pane",attrs:{id:"axle-1","aria-labelledby":"axle",role:"tabpanel"}},[t._v("\n                                                axle\n                                            ")]),t._v(" "),a("div",{staticClass:"tab-pane",attrs:{id:"frame-1","aria-labelledby":"frame",role:"tabpanel"}},[t._v("\n                                                Frame\n                                            ")]),t._v(" "),a("div",{staticClass:"tab-pane",attrs:{id:"suspension-1","aria-labelledby":"suspension",role:"tabpanel"}},[t._v("\n                                                Suspension\n                                            ")]),t._v(" "),a("div",{staticClass:"tab-pane",attrs:{id:"tyres-1","aria-labelledby":"tyres",role:"tabpanel"}},[t._v("\n                                                Tyres\n                                            ")]),t._v(" "),a("div",{staticClass:"tab-pane",attrs:{id:"braking-1","aria-labelledby":"braking",role:"tabpanel"}},[t._v("\n                                                Braking System\n                                            ")]),t._v(" "),a("div",{staticClass:"tab-pane",attrs:{id:"steering-1","aria-labelledby":"steering",role:"tabpanel"}},[t._v("\n                                                Steering System\n                                            ")]),t._v(" "),a("div",{staticClass:"tab-pane",attrs:{id:"fuel-1","aria-labelledby":"fuel",role:"tabpanel"}},[t._v("\n                                                Fuel Tank\n                                            ")]),t._v(" "),a("div",{staticClass:"tab-pane",attrs:{id:"cabin-1","aria-labelledby":"cabin",role:"tabpanel"}},[t._v("\n                                                Cabin\n                                            ")]),t._v(" "),a("div",{staticClass:"tab-pane",attrs:{id:"electrical-1","aria-labelledby":"electrical",role:"tabpanel"}},[t._v("\n                                                Electrical System\n                                            ")])]),t._v(" "),a("div",[t._v(" ")]),t._v(" "),t._m(1)])])])])])])]):t._e()}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-3 col-sm-12"},[a("ul",{staticClass:"nav nav-pills flex-column text-center text-md-left pill-container"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{id:"home-tab-end","data-toggle":"pill",href:"#basic-info-1","aria-controls":"basic-info-1","aria-selected":"true"}},[t._v("\n                                                Basic Info\n                                            ")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{id:"size","data-toggle":"pill",href:"#size-1","aria-controls":"size-1",role:"tab","aria-selected":"false"}},[t._v("\n                                                Size Parameters\n                                            ")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{id:"quality","data-toggle":"pill",href:"#quality-1","aria-controls":"quality-1",role:"tab","aria-selected":"true"}},[t._v("\n                                                Quality Parameters\n                                            ")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{id:"performance","data-toggle":"pill",href:"#performance-1","aria-controls":"performance-1",role:"tab","aria-selected":"true"}},[t._v("\n                                                Performance Parameters\n                                            ")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{id:"engine","data-toggle":"pill",href:"#engine-1","aria-controls":"engine-1",role:"tab","aria-selected":"true"}},[t._v("\n                                                Engine\n                                            ")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{id:"transmission","data-toggle":"pill",href:"#transmission-1","aria-controls":"transmission-1",role:"tab","aria-selected":"true"}},[t._v("\n                                                Transmission\n                                            ")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{id:"clutch","data-toggle":"pill",href:"#clutch-1","aria-controls":"clutch-1",role:"tab","aria-selected":"true"}},[t._v("\n                                                Clutch\n                                            ")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{id:"axle","data-toggle":"pill",href:"#axle-1","aria-controls":"axle-1",role:"tab","aria-selected":"true"}},[t._v("\n                                                Axle\n                                            ")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{id:"frame","data-toggle":"pill",href:"#frame-1","aria-controls":"frame-1",role:"tab","aria-selected":"true"}},[t._v("\n                                                Frame\n                                            ")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{id:"suspension","data-toggle":"pill",href:"#suspension-1","aria-controls":"suspension-1",role:"tab","aria-selected":"true"}},[t._v("\n                                                Suspension\n                                            ")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{id:"tyres","data-toggle":"pill",href:"#tyres-1","aria-controls":"tyres-1",role:"tab","aria-selected":"true"}},[t._v("\n                                                Tyres\n                                            ")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{id:"braking","data-toggle":"pill",href:"#braking-1","aria-controls":"braking-1",role:"tab","aria-selected":"true"}},[t._v("\n                                                Braking System\n                                            ")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{id:"steering","data-toggle":"pill",href:"#steering-1","aria-controls":"steering-1",role:"tab","aria-selected":"true"}},[t._v("\n                                                Steering Device\n                                            ")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{id:"fuel","data-toggle":"pill",href:"#fuel-1","aria-controls":"fuel-1",role:"tab","aria-selected":"true"}},[t._v("\n                                                Fuel Tank\n                                            ")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{id:"cabin","data-toggle":"pill",href:"#cabin-1","aria-controls":"cabin-1",role:"tab","aria-selected":"true"}},[t._v("\n                                                Cabin\n                                            ")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{id:"electrical","data-toggle":"pill",href:"#electrical-1","aria-controls":"electrical-1",role:"tab","aria-selected":"true"}},[t._v("\n                                                Electrical\n                                            ")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-12"},[a("button",{staticClass:"btn btn-dark glow shadow mr-1 mb-1",attrs:{type:"submit"}},[t._v("Submit")])])}],!1,null,null,null).exports},1900:(t,e,a)=>{"use strict";function s(t,e,a,s,r,l,i,o){var n,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=a,c._compiled=!0),s&&(c.functional=!0),l&&(c._scopeId="data-v-"+l),i?(n=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=n):r&&(n=o?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),n)if(c.functional){c._injectStyles=n;var d=c.render;c.render=function(t,e){return n.call(e),d(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,n):[n]}return{exports:t,options:c}}a.d(e,{Z:()=>s})},2569:(t,e,a)=>{var s=a(2745);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);(0,a(5346).Z)("a7d7ebb4",s,!0,{})}}]);