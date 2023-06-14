(self.webpackChunk=self.webpackChunk||[]).push([[984],{4103:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(3645),o=s.n(r)()((function(e){return e[1]}));o.push([e.id,'.vs-input{width:100%}.vs__search{height:30px!important}.vs__selected{font-size:13px!important;background-color:#ecf0f1;border:1px solid #222;border-radius:2px;color:#222;line-height:2px;padding:5px;border-radius:5px}.pac-container{background-color:#fff;position:absolute!important;z-index:1000;border-radius:0;border:1px solid #ecf0f1;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-shadow:none;box-sizing:border-box;overflow:hidden}.pac-logo:after{content:"";padding:1px 1px 1px 0;height:16px;text-align:right;display:block}.hdpi.pac-logo:after,.pac-logo:after{background-image:none!important}.pac-item{cursor:pointer;padding:8px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;line-height:30px;text-align:left;font-size:13px;color:#ccc}.pac-item:hover{color:#222}.pac-item-selected,.pac-item-selected:hover,.pac-item:hover{background-color:#999}.pac-matched{font-weight:700}.pac-item-query{font-size:13px;padding-right:3px;color:#222}.pac-item-query:hover{color:$secondary!important}.pac-icon{width:15px;height:20px;margin-right:7px;margin-top:6px;display:inline-block;vertical-align:top}.hdpi .pac-icon,.pac-icon{background-image:none}.pac-icon-search{background-position:-1px -1px}.pac-item-selected .pac-icon-search{background-position:-18px -1px}.pac-icon-marker{background-position:-1px -161px}.pac-item-selected .pac-icon-marker{background-position:-18px -161px}.pac-placeholder{color:#222}',""]);const a=o},1984:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var r=s(7757),o=s.n(r);function a(e,t,s,r,o,a,n){try{var i=e[a](n),c=i.value}catch(e){return void s(e)}i.done?t(c):Promise.resolve(c).then(r,o)}function n(e){return function(){var t=this,s=arguments;return new Promise((function(r,o){var n=e.apply(t,s);function i(e){a(n,r,o,i,c,"next",e)}function c(e){a(n,r,o,i,c,"throw",e)}i(void 0)}))}}const i={props:["userId"],data:function(){return{first_name:"",last_name:"",city:"",country:"",bio:"",roles:[],permissions:[],role_assigned:[],permission_assigned:[],img:"",errors:[],hasVisiblePassword:!1}},methods:{loadCityApi:function(){var e=this;this.$loader.load().then((function(t){var s=new t.maps.places.Autocomplete(document.getElementById("city"),{types:["(cities)"]});s.setFields(["address_components","geometry","icon","name"]),s.addListener("place_changed",(function(){var t=s.getPlace();if(t.geometry){t.address_components.length;var r=t.address_components.length-1;e.country=t.address_components[r].long_name,e.city=t.name}else alert("No details available for input: '"+t.name+"'")}))}))},loadApi:function(){var e=this;return n(o().mark((function t(){var s,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.get("".concat(e.$base,"team-mgt/").concat(e.userId));case 3:s=t.sent,r=s.data,e.first_name=r[0].first_name,e.last_name=r[0].last_name,e.city=r[0].city,e.country=r[0].country,e.bio=r[0].bio,e.role_assigned=r[0].roles.map((function(e){return{value:e.adrole_id,label:e.adrole_title}})),e.permission_assigned=r[0].permissions.map((function(e){return{value:e.permission_id,label:e.permission_title}})),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),alert(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})))()},loadRoles:function(){var e=this;return n(o().mark((function t(){var s,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.get("".concat(e.$base,"roles-dropdown-list"));case 3:s=t.sent,r=s.data,e.roles=r,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),alert(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},loadPermissions:function(){var e=this;return n(o().mark((function t(){var s,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.get("".concat(e.$base,"permission-dropdown-list"));case 3:s=t.sent,r=s.data,e.permissions=r,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),alert(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},update:function(){var e=this;return n(o().mark((function t(){var s,r,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=e.$vs.loading({target:e.$refs.form,color:"dark",text:"Processing..."}),t.prev=1,t.next=4,axios.put("".concat(e.$base,"team-mgt/").concat(e.userId),{first_name:e.first_name,last_name:e.last_name,username:e.username,password:e.password,city:e.city,country:e.country,bio:e.bio,role_assigned:e.role_assigned,permission_assigned:e.permission_assigned});case 4:r=t.sent,a=r.data,s.close(),e.$vs.notification({color:"dark",title:"Done",text:a.msg}),e.isOpen=!1,e.loadApi(),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(1),s.close(),422==t.t0.response.status?e.errors=t.t0.response.data.errors:alert(t.t0);case 16:case"end":return t.stop()}}),t,null,[[1,12]])})))()}},created:function(){this.loadCityApi(),this.loadRoles(),this.loadPermissions(),this.loadApi()}};s(4032);const c=(0,s(1900).Z)(i,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.$cookies.get("permissions").includes("Edit")?s("form",{ref:"form",staticClass:"row",on:{submit:function(t){return t.preventDefault(),e.update()}}},[s("div",{staticClass:"col-md-6"},[s("fieldset",{staticClass:"form-group"},[s("label",{class:[e.errors.first_name?"danger":""],domProps:{textContent:e._s(e.errors.first_name?e.errors.first_name[0]:"First Name *")}}),e._v(" "),s("vs-input",{staticStyle:{width:"100% !important"},attrs:{dark:"",placeholder:"Type First Name"},model:{value:e.first_name,callback:function(t){e.first_name=t},expression:"first_name"}})],1)]),e._v(" "),s("div",{staticClass:"col-md-6"},[s("fieldset",{staticClass:"form-group"},[s("label",{class:[e.errors.last_name?"danger":""],domProps:{textContent:e._s(e.errors.last_name?e.errors.last_name[0]:"Last Name *")}}),e._v(" "),s("vs-input",{attrs:{dark:"",placeholder:"Type Last Name"},model:{value:e.last_name,callback:function(t){e.last_name=t},expression:"last_name"}})],1)]),e._v(" "),s("div",{staticClass:"col-md-6"},[s("fieldset",{staticClass:"form-group"},[s("label",{class:[e.errors.city?"danger":""],domProps:{textContent:e._s(e.errors.city?e.errors.city[0]:"City *")}}),e._v(" "),s("input",{staticClass:"form-control",attrs:{id:"city",dark:"",placeholder:"Type City"}})])]),e._v(" "),s("div",{staticClass:"col-md-6"},[s("fieldset",{staticClass:"form-group"},[s("label",{class:[e.errors.role_assigned?"danger":""],domProps:{textContent:e._s(e.errors.role_assigned?e.errors.role_assigned[0]:"Roles *")}}),e._v(" "),s("v-select",{attrs:{options:e.roles,multiple:"",placeholder:"Select Role/Roles"},model:{value:e.role_assigned,callback:function(t){e.role_assigned=t},expression:"role_assigned"}})],1)]),e._v(" "),s("div",{staticClass:"col-md-6"},[s("fieldset",{staticClass:"form-group"},[s("label",{class:[e.errors.permission_assigned?"danger":""],domProps:{textContent:e._s(e.errors.permission_assigned?e.errors.permission_assigned[0]:"Permissions *")}}),e._v(" "),s("v-select",{attrs:{options:e.permissions,multiple:"",placeholder:"Select Permissions"},model:{value:e.permission_assigned,callback:function(t){e.permission_assigned=t},expression:"permission_assigned"}})],1)]),e._v(" "),s("div",{staticClass:"col-md-6"},[s("fieldset",{staticClass:"form-group"},[s("label",{class:[e.errors.img?"danger":""],domProps:{textContent:e._s(e.errors.img?e.errors.img[0]:"Profile Image")}}),e._v(" "),s("input",{staticClass:"form-control",attrs:{type:"file"}})])]),e._v(" "),s("div",{staticClass:"col-md-12"},[s("fieldset",{staticClass:"form-group"},[s("label",{class:[e.errors.img?"bio":""],domProps:{textContent:e._s(e.errors.bio?e.errors.img[0]:"About/Bio")}}),e._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.bio,expression:"bio"}],staticClass:"form-control",attrs:{placeholder:"Write some bio"},domProps:{value:e.bio},on:{input:function(t){t.target.composing||(e.bio=t.target.value)}}})])]),e._v(" "),e._m(0)]):e._e()}),[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-md-12"},[s("button",{staticClass:"btn btn-dark glow shadow mr-1 mb-1",attrs:{type:"submit"}},[e._v("Update")])])}],!1,null,null,null).exports},1900:(e,t,s)=>{"use strict";function r(e,t,s,r,o,a,n,i){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=s,l._compiled=!0),r&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),n?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(n)},l._ssrRegister=c):o&&(c=i?function(){o.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:o),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(e,t){return c.call(t),d(e,t)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,c):[c]}return{exports:e,options:l}}s.d(t,{Z:()=>r})},4032:(e,t,s)=>{var r=s(4103);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);(0,s(5346).Z)("d2f969ae",r,!0,{})}}]);