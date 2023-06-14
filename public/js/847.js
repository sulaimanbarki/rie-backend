(self.webpackChunk=self.webpackChunk||[]).push([[847],{3333:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(3645),a=r.n(s)()((function(e){return e[1]}));a.push([e.id,".vs-input{width:100%}.vs__search{height:30px!important}",""]);const n=a},3847:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var s=r(7757),a=r.n(s);function n(e,t,r,s,a,n,i){try{var o=e[n](i),c=o.value}catch(e){return void r(e)}o.done?t(c):Promise.resolve(c).then(s,a)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(s,a){var i=e.apply(t,r);function o(e){n(i,s,a,o,c,"next",e)}function c(e){n(i,s,a,o,c,"throw",e)}o(void 0)}))}}const o={data:function(){return{degrees:{},field:"",degree_title:"",fields:[],errors:[],title:"",editId:"",isOpen:!1,createDiv:!1,editDiv:!1}},methods:{loadApi:function(){var e=arguments,t=this;return i(a().mark((function r(){var s,n,i,o,c;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s=e.length>0&&void 0!==e[0]?e[0]:1,n=t.$vs.loading({target:t.$refs.table,color:"dark"}),r.prev=2,r.next=5,axios.get("".concat(t.$base,"degree-mgt-js?page=").concat(s));case 5:return i=r.sent,o=i.data,r.next=9,axios.get("".concat(t.$base,"field-dropdown"));case 9:c=r.sent,t.fields=c.data,t.degrees=o,n.close(),r.next=19;break;case 15:r.prev=15,r.t0=r.catch(2),alert(r.t0),n.close();case 19:case"end":return r.stop()}}),r,null,[[2,15]])})))()},openCreate:function(){try{this.isOpen=this.createDiv=!0,this.editDiv=!1}catch(e){alert(e)}},create:function(){var e=this;return i(a().mark((function t(){var r,s,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$vs.loading({target:e.$refs.form,color:"dark",text:"Processing..."}),t.prev=1,t.next=4,axios.post("".concat(e.$base,"degree-mgt"),{degree_title:e.degree_title,field:e.field.value});case 4:s=t.sent,n=s.data,r.close(),e.$vs.notification({color:"dark",title:"Done",text:n.msg}),e.isOpen=!1,e.degree_level="",e.loadApi(),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(1),r.close(),422==t.t0.response.status?e.errors=t.t0.response.data.errors:alert(t.t0);case 17:case"end":return t.stop()}}),t,null,[[1,13]])})))()},openEdit:function(e){var t=this;return i(a().mark((function r(){var s,n,i;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s=t.$vs.loading({target:t.$refs.form,color:"dark",text:"Processing..."}),r.prev=1,t.isOpen=!0,t.createDiv=!1,t.editDiv=!0,t.editId=e,r.next=8,axios.get("".concat(t.$base,"degree-mgt/").concat(e));case 8:n=r.sent,i=n.data,t.degree_title=i[0].degree_title,t.field={value:i[1].field_id,label:i[1].field_title},s.close(),r.next=19;break;case 15:r.prev=15,r.t0=r.catch(1),alert(r.t0),s.close();case 19:case"end":return r.stop()}}),r,null,[[1,15]])})))()},update:function(){var e=this;return i(a().mark((function t(){var r,s,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$vs.loading({target:e.$refs.form,color:"dark",text:"Processing..."}),t.prev=1,t.next=4,axios.put("".concat(e.$base,"degree-mgt/").concat(e.editId),{degree_title:e.degree_title});case 4:s=t.sent,n=s.data,r.close(),e.$vs.notification({color:"dark",title:"Done",text:n.msg}),e.isOpen=!1,e.loadApi(),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(1),r.close(),422==t.t0.response.status?e.errors=t.t0.response.data.errors:alert(t.t0);case 16:case"end":return t.stop()}}),t,null,[[1,12]])})))()},changeStatus:function(e,t){var r=this;return i(a().mark((function s(){var n,i,o;return a().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(!confirm("Do you want to change status of the Degree?")){s.next=16;break}return n=r.$vs.loading({target:r.$refs.table,color:"dark",text:"Processing..."}),s.prev=2,s.next=5,axios.get("".concat(r.$base,"degree-mgt_status/").concat(e,"/").concat(t));case 5:i=s.sent,o=i.data,n.close(),r.$vs.notification({color:"dark",title:"Done",text:o.msg}),r.loadApi(),s.next=16;break;case 12:s.prev=12,s.t0=s.catch(2),alert(s.t0),n.close();case 16:case"end":return s.stop()}}),s,null,[[2,12]])})))()},remove:function(e){var t=this;return i(a().mark((function r(){var s,n,i;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!confirm("This operation is irreversible. Do you want to delete the Degree?")){r.next=16;break}return s=t.$vs.loading({target:t.$refs.table,color:"dark",text:"Processing..."}),r.prev=2,r.next=5,axios.delete("".concat(t.$base,"degree-mgt/").concat(e));case 5:n=r.sent,i=n.data,s.close(),t.$vs.notification({color:"dark",title:"Done",text:i.msg}),t.loadApi(),r.next=16;break;case 12:r.prev=12,r.t0=r.catch(2),alert(r.t0),s.close();case 16:case"end":return r.stop()}}),r,null,[[2,12]])})))()}},created:function(){this.loadApi()}};r(9317);const c=(0,r(1900).Z)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.$cookies.get("permissions").includes("Read")?r("section",{staticClass:"row"},[r("div",{staticClass:"col-12 table-responsive"},[e.$cookies.get("permissions").includes("Write")?r("a",{staticClass:"btn btn-info shadow mr-1 mb-1",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.openCreate()}}},[e._v("Create a Degree")]):e._e(),e._v(" "),r("table",{ref:"table",staticClass:"table table-hover table-striped mb-0",staticStyle:{width:"100%"}},[e._m(0),e._v(" "),r("tbody",e._l(e.degrees.data,(function(t,s){return r("tr",{key:s},[r("td",[e._v("\n                        "+e._s(s+=1)+"\n                    ")]),e._v(" "),r("td",[e._v("\n                        "+e._s(t.degree_title)+"\n                        "),r("div",{staticClass:"badge badge-info mr-1 mb-1"},[e._v("\n                            "+e._s(t.field_title)+"\n                        ")])]),e._v(" "),r("td",[1===t._status?r("div",{staticClass:"badge badge-success mr-1 mb-1"},[e._v("\n                            Active\n                        ")]):r("div",{staticClass:"badge badge-danger mr-1 mb-1"},[e._v("\n                            Disabled\n                        ")])]),e._v(" "),r("td",[r("div",{staticClass:"btn-group mr-1 mb-1"},[r("div",{staticClass:"dropdown"},[r("button",{staticClass:"btn btn-sm btn-secondary dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e._v("\n                                    Options\n                                ")]),e._v(" "),r("div",{staticClass:"dropdown-menu dropdown-menu-right"},[e.$cookies.get("permissions").includes("Edit")?r("a",{staticClass:"dropdown-item active",attrs:{href:""},on:{click:function(r){return r.preventDefault(),e.openEdit(t.degree_id)}}},[e._v("Edit")]):e._e(),e._v(" "),e.$cookies.get("permissions").includes("Edit")?r("a",{staticClass:"dropdown-item",attrs:{href:""},on:{click:function(r){return r.preventDefault(),e.changeStatus(t.degree_id,t._status)}}},[e._v("Change Status")]):e._e(),e._v(" "),e.$cookies.get("permissions").includes("Delete")?r("a",{staticClass:"dropdown-item",attrs:{href:""},on:{click:function(r){return r.preventDefault(),e.remove(t.degree_id)}}},[e._v("Remove")]):e._e()])])])])])})),0)]),e._v(" "),r("pagination",{attrs:{data:e.degrees},on:{"pagination-change-page":e.loadApi}}),e._v(" "),r("vs-dialog",{attrs:{blur:"","prevent-close":"",width:"80%"},scopedSlots:e._u([{key:"header",fn:function(){return[r("h4",{staticClass:"not-margin"},[e._v("\n                    "+e._s(e.createDiv?"Create a":"Edit")+"  "),r("b",[e._v("Degree")])])]},proxy:!0}],null,!1,2447691536),model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}},[e._v(" "),e.createDiv?r("div",{staticClass:"con-form"},[r("form",{ref:"form",staticClass:"row",on:{submit:function(t){return t.preventDefault(),e.create()}}},[r("div",{staticClass:"col-12"},[r("fieldset",{staticClass:"form-group"},[r("label",{class:[e.errors.field?"danger":""],domProps:{textContent:e._s(e.errors.field?e.errors.field[0]:"Edit Field")}}),e._v(" "),r("v-select",{attrs:{options:e.fields,placeholder:"Select Field"},model:{value:e.field,callback:function(t){e.field=t},expression:"field"}})],1)]),e._v(" "),r("div",{staticClass:"col-12"},[r("fieldset",{staticClass:"form-group"},[r("label",{class:[e.errors.degree_title?"danger":""],domProps:{textContent:e._s(e.errors.degree_title?e.errors.degree_title[0]:"Degree")}}),e._v(" "),r("vs-input",{attrs:{dark:"",type:"text",placeholder:"Type Skill e.g  Bs(IT), MsCS"},model:{value:e.degree_title,callback:function(t){e.degree_title=t},expression:"degree_title"}})],1)]),e._v(" "),r("div",{staticClass:"col-12"},[r("button",{staticClass:"btn btn-dark glow shadow mr-1 mb-1",attrs:{type:"submit"}},[e._v("Create")])])])]):e._e(),e._v(" "),e.editDiv?r("div",{staticClass:"con-form"},[r("form",{ref:"form",staticClass:"row",on:{submit:function(t){return t.preventDefault(),e.update()}}},[r("div",{staticClass:"col-12"},[r("fieldset",{staticClass:"form-group"},[r("label",{class:[e.errors.field?"danger":""],domProps:{textContent:e._s(e.errors.field?e.errors.field[0]:"Edit Field")}}),e._v(" "),r("v-select",{attrs:{options:e.fields,placeholder:"Select Field"},model:{value:e.field,callback:function(t){e.field=t},expression:"field"}})],1)]),e._v(" "),r("div",{staticClass:"col-12"},[r("fieldset",{staticClass:"form-group"},[r("label",{class:[e.errors.degree_title?"danger":""],domProps:{textContent:e._s(e.errors.degree_title?e.errors.degree_title[0]:"Degree")}}),e._v(" "),r("vs-input",{attrs:{dark:"",type:"text",placeholder:"Type Skill e.g  Bs(IT), MsCS"},model:{value:e.degree_title,callback:function(t){e.degree_title=t},expression:"degree_title"}})],1)]),e._v(" "),r("div",{staticClass:"col-12"},[r("button",{staticClass:"btn btn-dark glow shadow mr-1 mb-1",attrs:{type:"submit"}},[e._v(e._s(e.createDiv?"Create":"Edit"))])])])]):e._e()])],1)]):e._e()}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",{staticClass:"thead-dark"},[r("tr",[r("th",[e._v("\n                        #\n                    ")]),e._v(" "),r("th",[e._v("\n                        Title\n                    ")]),e._v(" "),r("th",[e._v("\n                        Status\n                    ")]),e._v(" "),r("th",[e._v("\n                        Options\n                    ")])])])}],!1,null,null,null).exports},1900:(e,t,r)=>{"use strict";function s(e,t,r,s,a,n,i,o){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=r,l._compiled=!0),s&&(l.functional=!0),n&&(l._scopeId="data-v-"+n),i?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=c):a&&(c=o?function(){a.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:a),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(e,t){return c.call(t),d(e,t)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:e,options:l}}r.d(t,{Z:()=>s})},9317:(e,t,r)=>{var s=r(3333);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals);(0,r(5346).Z)("57fdefca",s,!0,{})}}]);