(self.webpackChunk=self.webpackChunk||[]).push([[304],{7277:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>a});var o=r(3645),s=r.n(o)()((function(t){return t[1]}));s.push([t.id,".vs-input{width:100%}.vs__clear{display:none}.vs__search{height:30px!important}.vs__selected{font-size:13px!important;background-color:#ecf0f1;border:1px solid #222;border-radius:2px;color:#222;line-height:2px;padding:5px;border-radius:5px}",""]);const a=s},7304:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>i});var o=r(7757),s=r.n(o);function a(t,e,r,o,s,a,c){try{var n=t[a](c),l=n.value}catch(t){return void r(t)}n.done?e(l):Promise.resolve(l).then(o,s)}function c(t){return function(){var e=this,r=arguments;return new Promise((function(o,s){var c=t.apply(e,r);function n(t){a(c,o,s,n,l,"next",t)}function l(t){a(c,o,s,n,l,"throw",t)}n(void 0)}))}}function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const l={props:["id"],data:function(){var t;return n(t={categories:[],product_title:"",product_color:"",product_model:"",fuel_type:""},"product_model",""),n(t,"category",""),n(t,"description",""),n(t,"errors",[]),t},methods:{loadCategories:function(){var t=this;return c(s().mark((function e(){var r,o,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.get("".concat(t.$base,"categories-dropdown"));case 3:return r=e.sent,o=r.data,t.categories=o,e.next=8,axios.get("".concat(t.$base,"product-edit-js/").concat(t.id));case 8:a=e.sent,t.category=[{label:a.data.category_name,value:a.data.category_id}],t.product_title=a.data.product_name,t.product_color=a.data.product_color,t.product_model=a.data.product_model,t.fuel_type=a.data.product_fueltype,t.description=a.data.product_details,e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),alert(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})))()},update:function(){var t=this;return c(s().mark((function e(){var r,o,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$vs.loading({target:t.$refs.form,color:"dark",text:"Processing..."}),e.prev=1,console.log(t.category.value),e.next=5,axios.post("".concat(t.$base,"product-update"),{productid:t.id,category:t.category.value,title:t.product_title,color:t.product_color,model:t.product_model,fueltype:t.fuel_type,description:t.description});case 5:o=e.sent,a=o.data,r.close(),t.$vs.notification({color:"dark",title:"Done",text:a.msg}),t.isOpen=!1,t.loadApi(),console.log(a.msg),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),r.close(),422==e.t0.response.status?t.errors=e.t0.response.data.errors:alert(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})))()}},created:function(){this.loadCategories()}};r(2636);const i=(0,r(1900).Z)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.$cookies.get("permissions").includes("Write")?r("form",{ref:"form",staticClass:"row",on:{submit:function(e){return e.preventDefault(),t.update()}}},[r("div",{staticClass:"col-md-12"},[r("fieldset",{staticClass:"form-group"},[r("label",{class:[t.errors.category?"danger":""],domProps:{textContent:t._s(t.errors.category?t.errors.category[0]:"Product Category *")}}),t._v(" "),r("v-select",{attrs:{options:t.categories,placeholder:"Choose Category"},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}})],1)]),t._v(" "),r("div",{staticClass:"col-md-6"},[r("fieldset",{staticClass:"form-group"},[r("label",{class:[t.errors.product_title?"danger":""],domProps:{textContent:t._s(t.errors.product_title?t.errors.product_title[0]:"Product Title *")}}),t._v(" "),r("vs-input",{staticStyle:{width:"100% !important"},attrs:{dark:"",placeholder:"Type product title"},model:{value:t.product_title,callback:function(e){t.product_title=e},expression:"product_title"}})],1)]),t._v(" "),r("div",{staticClass:"col-md-6"},[r("fieldset",{staticClass:"form-group"},[r("label",{class:[t.errors.product_color?"danger":""],domProps:{textContent:t._s(t.errors.product_color?t.errors.product_color[0]:"Product Color *")}}),t._v(" "),r("vs-input",{staticStyle:{width:"100% !important"},attrs:{dark:"",placeholder:"Type product color"},model:{value:t.product_color,callback:function(e){t.product_color=e},expression:"product_color"}})],1)]),t._v(" "),r("div",{staticClass:"col-md-6"},[r("fieldset",{staticClass:"form-group"},[r("label",{class:[t.errors.product_model?"danger":""],domProps:{textContent:t._s(t.errors.product_model?t.errors.product_model[0]:"Product Model *")}}),t._v(" "),r("vs-input",{staticStyle:{width:"100% !important"},attrs:{dark:"",placeholder:"Type product model"},model:{value:t.product_model,callback:function(e){t.product_model=e},expression:"product_model"}})],1)]),t._v(" "),r("div",{staticClass:"col-md-6"},[r("fieldset",{staticClass:"form-group"},[r("label",{class:[t.errors.fuel_type?"danger":""],domProps:{textContent:t._s(t.errors.fuel_type?t.errors.fuel_type[0]:"Fuel Type *")}}),t._v(" "),r("vs-input",{staticStyle:{width:"100% !important"},attrs:{dark:"",placeholder:"Enter fuel type"},model:{value:t.fuel_type,callback:function(e){t.fuel_type=e},expression:"fuel_type"}})],1)]),t._v(" "),r("div",{staticClass:"col-md-12"},[r("fieldset",{staticClass:"form-group"},[r("label",{class:[t.errors.description?"danger":""],domProps:{textContent:t._s(t.errors.description?t.errors.description[0]:"Product Description *")}}),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control",attrs:{placeholder:"Write product description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})])]),t._v(" "),t._m(0)]):t._e()}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-md-12"},[r("button",{staticClass:"btn btn-dark glow shadow mr-1 mb-1",attrs:{type:"submit"}},[t._v("Update")])])}],!1,null,null,null).exports},1900:(t,e,r)=>{"use strict";function o(t,e,r,o,s,a,c,n){var l,i="function"==typeof t?t.options:t;if(e&&(i.render=e,i.staticRenderFns=r,i._compiled=!0),o&&(i.functional=!0),a&&(i._scopeId="data-v-"+a),c?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},i._ssrRegister=l):s&&(l=n?function(){s.call(this,(i.functional?this.parent:this).$root.$options.shadowRoot)}:s),l)if(i.functional){i._injectStyles=l;var d=i.render;i.render=function(t,e){return l.call(e),d(t,e)}}else{var u=i.beforeCreate;i.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:i}}r.d(e,{Z:()=>o})},2636:(t,e,r)=>{var o=r(7277);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,r(5346).Z)("302eb4e6",o,!0,{})}}]);