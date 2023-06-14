/*! For license information please see 615.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[615],{9663:(t,e,r)=>{r.d(e,{Z:()=>a});var n=r(3645),o=r.n(n)()((function(t){return t[1]}));o.push([t.id,".vs-input{width:100%!important}.vs__search{height:30px!important}",""]);const a=o},9615:(t,e,r)=>{r.r(e),r.d(e,{default:()=>h});function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},s="function"==typeof Symbol?Symbol:{},i=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",u=s.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function d(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,s=Object.create(o.prototype),i=new P(n||[]);return a(s,"_invoke",{value:C(t,r,i)}),s}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=d;var f={};function p(){}function v(){}function g(){}var m={};l(m,i,(function(){return this}));var _=Object.getPrototypeOf,y=_&&_(_($([])));y&&y!==e&&r.call(y,i)&&(m=y);var b=g.prototype=p.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(a,s,i,c){var u=h(t[a],t,s);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==n(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){o("next",t,i,c)}),(function(t){o("throw",t,i,c)})):e.resolve(d).then((function(t){l.value=t,i(l)}),(function(t){return o("throw",t,i,c)}))}c(u.arg)}var s;a(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return s=s?s.then(n,n):n()}})}function C(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return S()}for(r.method=o,r.arg=a;;){var s=r.delegate;if(s){var i=k(s,r);if(i){if(i===f)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=h(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function k(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function $(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return v.prototype=g,a(b,"constructor",{value:g,configurable:!0}),a(g,"constructor",{value:v,configurable:!0}),v.displayName=l(g,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(x.prototype),l(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var s=new x(d(e,r,n,o),a);return t.isGeneratorFunction(r)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},w(b),l(b,u,"Generator"),l(b,i,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=$,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return s.type="throw",s.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var i=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(i&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(i){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var s=a?a.completion:{};return s.type=t,s.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:$(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function a(t,e,r,n,o,a,s){try{var i=t[a](s),c=i.value}catch(t){return void r(t)}i.done?e(c):Promise.resolve(c).then(n,o)}function s(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var s=t.apply(e,r);function i(t){a(s,n,o,i,c,"next",t)}function c(t){a(s,n,o,i,c,"throw",t)}i(void 0)}))}}const i={data:function(){return{users:{},pagination:"",search:"",title:"",password:"",count:0,passDiv:!1,disabledDiv:!1,deleteDiv:!1,popup:!1,hasVisiblePassword:!1,userId:"",errors:[]}},methods:{loadApi:function(){var t=arguments,e=this;return s(o().mark((function r(){var n,a,s,i;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.length>0&&void 0!==t[0]?t[0]:1,a=e.$vs.loading({target:e.$refs.table,color:"dark"}),r.prev=2,r.next=5,axios.get("".concat(e.$base,"team-js-list/").concat(e.pagination,"?page=").concat(n,"&search=").concat(e.search));case 5:s=r.sent,i=s.data,e.users=i[0],e.count=i[1],a.close(),r.next=16;break;case 12:r.prev=12,r.t0=r.catch(2),alert(r.t0),a.close();case 16:case"end":return r.stop()}}),r,null,[[2,12]])})))()},changePass:function(t,e){this.userId=t,this.title=e,this.popup=!0,this.passDiv=!0,this.disabledDiv=!1},updatePassword:function(){var t=this;return s(o().mark((function e(){var r,n,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$vs.loading({target:t.$refs.form,color:"dark",text:"Processing..."}),e.prev=1,e.next=4,axios.put("".concat(t.$base,"user-password-update"),{userid:t.userId,password:t.password});case 4:n=e.sent,a=n.data,r.close(),t.$vs.notification({color:"dark",title:"Done",text:a.msg}),t.popup=!1,t.loadApi(),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),r.close(),422==e.t0.response.status?t.errors=e.t0.response.data.errors:alert(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))()},statusChange:function(t,e){var r=this;if(confirm("Do you want to change status ?")){var n=this.$vs.loading({target:this.$refs.table,color:"dark",text:"Processing..."});axios.get("".concat(this.$base,"user-status-update/").concat(t,"/").concat(e)).then((function(t){n.close(),r.loadApi()})).catch((function(t){return alert(t)}))}},destory:function(t){var e=this;if(confirm("The operation will delete the user?")&&confirm("You can lose this data completely. Are you sure to remove?")){var r=this.$vs.loading({target:this.$refs.table,color:"dark",text:"Processing..."});axios.delete("".concat(this.$base,"team-mgt/").concat(t,"/")).then((function(t){r.close(),e.$vs.notification({color:"dark",title:"Done",text:t.data.msg}),e.loadApi()})).catch((function(t){return alert(t)}))}}},created:function(){this.loadApi()}};var c=r(3379),u=r.n(c),l=r(9663),d={insert:"head",singleton:!1};u()(l.Z,d);l.Z.locals;const h=(0,r(1900).Z)(i,(function(){var t=this,e=t._self._c;return t.$cookies.get("permissions").includes("Read")?e("section",{staticClass:"row"},[e("section",{staticClass:"col-md-6"},[e("div",{staticClass:"badge badge-primary mr-1 mb-1"},[t._v("Total Members: "),e("b",[t._v(t._s(t.count))])])]),t._v(" "),e("section",{staticClass:"col-md-6"},[e("vs-input",{staticStyle:{float:"right"},attrs:{dark:"",placeholder:"Search a Member"},on:{keyup:function(e){return t.loadApi()}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table"},[t._m(0),t._v(" "),e("tbody",t._l(t.users.data,(function(r,n){return e("tr",{key:n},[e("td",[t._v("\n                            "+t._s(n+=1)+"\n                        ")]),t._v(" "),e("td",[r.adprofile_avatar?e("img",{directives:[{name:"img",rawName:"v-img"}],staticClass:"users-avatar-shadow rounded-circle",attrs:{src:r.adprofile_avatar,height:"48"}}):e("img",{staticClass:"users-avatar-shadow rounded-circle",attrs:{src:"imgs/default.png",height:"48"}})]),t._v(" "),e("td",[t._v("\n                            "+t._s(r.adfirst_name+" "+r.adlast_name)+"\n                        ")]),t._v(" "),e("td",[t._v("\n                            "+t._s(r.aduser_name)+"\n                        ")]),t._v(" "),e("td",t._l(r.roles,(function(r,n){return e("small",{key:n,staticClass:"badge badge-info"},[t._v(t._s(r.adrole_title))])})),0),t._v(" "),e("td",[1===r._status?e("span",{staticClass:"badge badge-light-success"},[t._v("Active")]):e("span",{staticClass:"badge badge-light-danger"},[t._v("Disabled")])]),t._v(" "),e("td",[e("div",{staticClass:"dropdown"},[t._m(1,!0),t._v(" "),e("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},[t.$cookies.get("permissions").includes("Edit")?e("a",{staticClass:"dropdown-item",attrs:{href:"team-mgt/".concat(r.aduser_id,"/edit")}},[t._v("Edit")]):t._e(),t._v(" "),t.$cookies.get("permissions").includes("Edit")?e("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changePass(r.aduser_id,r.adfirst_name+" "+r.adlast_name)}}},[t._v("Change Password")]):t._e(),t._v(" "),t.$cookies.get("permissions").includes("Edit")?e("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.statusChange(r.aduser_id,r._status)}}},[t._v(t._s(1===r._status?"Disable":"Enable"))]):t._e(),t._v(" "),t.$cookies.get("permissions").includes("Delete")?e("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.destory(r.aduser_id)}}},[t._v("Delete")]):t._e()])])])])})),0)]),t._v(" "),e("pagination",{attrs:{data:t.users},on:{"pagination-change-page":t.loadApi}})],1),t._v(" "),e("vs-dialog",{attrs:{blur:"","prevent-close":"",width:"60%"},model:{value:t.popup,callback:function(e){t.popup=e},expression:"popup"}},[t.passDiv?e("section",{staticClass:"card"},[e("header",{staticClass:"card-header"},[e("h4",{staticClass:"card-title"},[t._v("Change Password for "+t._s(t.title))])]),t._v(" "),e("form",{ref:"form",staticClass:"card-body",on:{submit:function(e){return e.preventDefault(),t.updatePassword()}}},[e("div",{staticClass:"col-md-12"},[e("fieldset",{staticClass:"form-group"},[e("label",{class:[t.errors.password?"danger":""],domProps:{textContent:t._s(t.errors.password?t.errors.password[0]:"Password *")}}),t._v(" "),e("vs-input",{attrs:{type:"password",visiblePassword:t.hasVisiblePassword,placeholder:"Type Password","icon-after":""},on:{"click-icon":function(e){t.hasVisiblePassword=!t.hasVisiblePassword}},scopedSlots:t._u([{key:"icon",fn:function(){return[t.hasVisiblePassword?e("i",{staticClass:"bx bx-hide"}):e("i",{staticClass:"bx bx-show-alt"})]},proxy:!0}],null,!1,4205987399),model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)]),t._v(" "),e("div",{staticClass:"col-md-12"},[e("button",{staticClass:"btn btn-dark glow shadow mr-1 mb-1",attrs:{type:"submit"}},[t._v("Update")])])])]):t._e()])],1):t._e()}),[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",[t._v("\n                            S#\n                        ")]),t._v(" "),e("th",[t._v("Avatar")]),t._v(" "),e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Username")]),t._v(" "),e("th",[t._v("Position")]),t._v(" "),e("th",[t._v("Status")]),t._v(" "),e("th",[t._v("Options")])])])},function(){var t=this._self._c;return t("button",{staticClass:"btn btn-default btn-sm dropdown-toggle",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t("i",{staticClass:"bx bx-dots-vertical-rounded"})])}],!1,null,null,null).exports},1900:(t,e,r)=>{function n(t,e,r,n,o,a,s,i){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=r,u._compiled=!0),n&&(u.functional=!0),a&&(u._scopeId="data-v-"+a),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):o&&(c=i?function(){o.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:o),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:u}}r.d(e,{Z:()=>n})}}]);