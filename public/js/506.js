(self.webpackChunk=self.webpackChunk||[]).push([[506],{8539:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var r=n(3645),s=n.n(r)()((function(e){return e[1]}));s.push([e.id,".vs-input{width:100%}.vs__search{height:30px!important}.vs__selected{font-size:13px!important;background-color:#ecf0f1;border:1px solid #222;border-radius:2px;color:#222;line-height:2px;padding:5px;border-radius:5px}",""]);const o=s},5506:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var r=n(7757),s=n.n(r);function o(e,t,n,r,s,o,i){try{var a=e[o](i),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,s)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,s){var i=e.apply(t,n);function a(e){o(i,r,s,a,c,"next",e)}function c(e){o(i,r,s,a,c,"throw",e)}a(void 0)}))}}const a={data:function(){return{services:{},errors:[],title:"",editId:""}},methods:{loadApi:function(){var e=arguments,t=this;return i(s().mark((function n(){var r,o,i,a;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.length>0&&void 0!==e[0]?e[0]:1,o=t.$vs.loading({target:t.$refs.table,color:"dark"}),n.prev=2,n.next=5,axios.get("".concat(t.$base,"services-js?page=").concat(r));case 5:i=n.sent,a=i.data,t.services=a,o.close(),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(2),alert(n.t0),o.close();case 15:case"end":return n.stop()}}),n,null,[[2,11]])})))()},openCreate:function(){window.location.href="services-mgt/create"},openEdit:function(e){window.location.href="services-mgt/".concat(e,"/edit")},remove:function(e){var t=this;return i(s().mark((function n(){var r,o,i;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!confirm("This operation is irreversible. Do you want to delete this service?")){n.next=16;break}return r=t.$vs.loading({target:t.$refs.table,color:"dark",text:"Processing..."}),n.prev=2,n.next=5,axios.delete("".concat(t.$base,"services-mgt/").concat(e));case 5:o=n.sent,i=o.data,r.close(),t.$vs.notification({color:"dark",title:"Done",text:i.msg}),t.loadApi(),n.next=16;break;case 12:n.prev=12,n.t0=n.catch(2),alert(n.t0),r.close();case 16:case"end":return n.stop()}}),n,null,[[2,12]])})))()}},created:function(){this.loadApi()}};n(2490);const c=(0,n(1900).Z)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.$cookies.get("permissions").includes("Read")?n("section",{staticClass:"row"},[n("div",{staticClass:"col-12 table-responsive"},[e.$cookies.get("permissions").includes("Write")?n("a",{staticClass:"btn btn-info shadow mr-1 mb-1",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.openCreate()}}},[e._v("Create Service")]):e._e(),e._v(" "),n("table",{ref:"table",staticClass:"table table-hover table-striped mb-0",staticStyle:{width:"100%"}},[e._m(0),e._v(" "),n("tbody",e._l(e.services.data,(function(t,r){return n("tr",{key:r},[n("td",[e._v("\n                        "+e._s(r+=1)+"\n                    ")]),e._v(" "),n("td",[e._v("\n                        "+e._s(t.service_name)+"\n                    ")]),e._v(" "),n("td",[e._v("\n                        "+e._s(t.service_excerpt)+"\n                    ")]),e._v(" "),n("td",[n("div",{staticClass:"btn-group mr-1 mb-1"},[n("div",{staticClass:"dropdown"},[n("button",{staticClass:"btn btn-sm btn-secondary dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e._v("\n                                    Options\n                                ")]),e._v(" "),n("div",{staticClass:"dropdown-menu dropdown-menu-right"},[e.$cookies.get("permissions").includes("Edit")?n("a",{staticClass:"dropdown-item active",attrs:{href:""},on:{click:function(n){return n.preventDefault(),e.openEdit(t.service_id)}}},[e._v("Edit")]):e._e(),e._v(" "),e.$cookies.get("permissions").includes("Delete")?n("a",{staticClass:"dropdown-item",attrs:{href:""},on:{click:function(n){return n.preventDefault(),e.remove(t.service_id)}}},[e._v("Remove")]):e._e()])])])])])})),0)]),e._v(" "),n("pagination",{attrs:{data:e.services},on:{"pagination-change-page":e.loadApi}})],1)]):e._e()}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",{staticClass:"thead-dark"},[n("tr",[n("th",[e._v("\n                        #\n                    ")]),e._v(" "),n("th",[e._v("\n                        Service Title\n                    ")]),e._v(" "),n("th",[e._v("\n                        Excerpt\n                    ")]),e._v(" "),n("th",[e._v("\n                        Options\n                    ")])])])}],!1,null,null,null).exports},1900:(e,t,n)=>{"use strict";function r(e,t,n,r,s,o,i,a){var c,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),r&&(d.functional=!0),o&&(d._scopeId="data-v-"+o),i?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},d._ssrRegister=c):s&&(c=a?function(){s.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:s),c)if(d.functional){d._injectStyles=c;var l=d.render;d.render=function(e,t){return c.call(t),l(e,t)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,c):[c]}return{exports:e,options:d}}n.d(t,{Z:()=>r})},2490:(e,t,n)=>{var r=n(8539);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);(0,n(5346).Z)("426009ac",r,!0,{})}}]);