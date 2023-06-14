/*! For license information please see 252.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[252],{4321:(t,e,r)=>{r.d(e,{Z:()=>i});var n=r(3645),o=r.n(n)()((function(t){return t[1]}));o.push([t.id,".vs-input{width:100%}.vs__search{height:30px!important}.vs__selected{background-color:#ecf0f1;border:1px solid #222;border-radius:2px;border-radius:5px;color:#222;font-size:13px!important;line-height:2px;padding:5px}",""]);const i=o},5252:(t,e,r)=>{r.r(e),r.d(e,{default:()=>d});function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),c=new S(n||[]);return i(a,"_invoke",{value:k(t,r,c)}),a}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var p={};function h(){}function v(){}function y(){}var g={};l(g,c,(function(){return this}));var m=Object.getPrototypeOf,_=m&&m(m($([])));_&&_!==e&&r.call(_,c)&&(g=_);var b=y.prototype=h.prototype=Object.create(g);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(i,a,c,s){var u=d(t[i],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==n(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,c,s)}),(function(t){o("throw",t,c,s)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,s)}))}s(u.arg)}var a;i(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function k(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return O()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=d(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=d(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function $(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return v.prototype=y,i(b,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:v,configurable:!0}),v.displayName=l(y,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(x.prototype),l(x.prototype,s,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(b),l(b,u,"Generator"),l(b,c,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=$,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:$(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function i(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,s,"next",t)}function s(t){i(a,n,o,c,s,"throw",t)}c(void 0)}))}}const c={data:function(){return{policies:{},errors:[],title:"",editId:""}},methods:{loadApi:function(){var t=arguments,e=this;return a(o().mark((function r(){var n,i,a,c;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.length>0&&void 0!==t[0]?t[0]:1,i=e.$vs.loading({target:e.$refs.table,color:"dark"}),r.prev=2,r.next=5,axios.get("".concat(e.$base,"policy-js?page=").concat(n));case 5:a=r.sent,c=a.data,e.policies=c,i.close(),r.next=15;break;case 11:r.prev=11,r.t0=r.catch(2),alert(r.t0),i.close();case 15:case"end":return r.stop()}}),r,null,[[2,11]])})))()},openCreate:function(){window.location.href="policies-mgt/create"},openEdit:function(t){window.location.href="policies-mgt/".concat(t,"/edit")},changeStatus:function(t,e){var r=this;return a(o().mark((function n(){var i,a,c;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!confirm("Do you want to change status of this role?")){n.next=16;break}return i=r.$vs.loading({target:r.$refs.table,color:"dark",text:"Processing..."}),n.prev=2,n.next=5,axios.get("".concat(r.$base,"policy_status/").concat(t,"/").concat(e));case 5:a=n.sent,c=a.data,i.close(),r.$vs.notification({color:"dark",title:"Done",text:c.msg}),r.loadApi(),n.next=16;break;case 12:n.prev=12,n.t0=n.catch(2),alert(n.t0),i.close();case 16:case"end":return n.stop()}}),n,null,[[2,12]])})))()},remove:function(t){var e=this;return a(o().mark((function r(){var n,i,a;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!confirm("This operation is irreversible. Do you want to delete this role?")){r.next=16;break}return n=e.$vs.loading({target:e.$refs.table,color:"dark",text:"Processing..."}),r.prev=2,r.next=5,axios.delete("".concat(e.$base,"policies-mgt/").concat(t));case 5:i=r.sent,a=i.data,n.close(),e.$vs.notification({color:"dark",title:"Done",text:a.msg}),e.loadApi(),r.next=16;break;case 12:r.prev=12,r.t0=r.catch(2),alert(r.t0),n.close();case 16:case"end":return r.stop()}}),r,null,[[2,12]])})))()}},created:function(){this.loadApi()}};var s=r(3379),u=r.n(s),l=r(4321),f={insert:"head",singleton:!1};u()(l.Z,f);l.Z.locals;const d=(0,r(1900).Z)(c,(function(){var t=this,e=t._self._c;return t.$cookies.get("permissions").includes("Read")?e("section",{staticClass:"row"},[e("div",{staticClass:"col-12 table-responsive"},[t.$cookies.get("permissions").includes("Write")?e("a",{staticClass:"btn btn-info shadow mr-1 mb-1",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.openCreate()}}},[t._v("Create a Policy")]):t._e(),t._v(" "),e("table",{ref:"table",staticClass:"table table-hover table-striped mb-0",staticStyle:{width:"100%"}},[t._m(0),t._v(" "),e("tbody",t._l(t.policies.data,(function(r,n){return e("tr",{key:n},[e("td",[t._v("\n                        "+t._s(n+=1)+"\n                    ")]),t._v(" "),e("td",[t._v("\n                        "+t._s(r.policy_title)+"\n                    ")]),t._v(" "),e("td",[1===r.policy_status?e("div",{staticClass:"badge badge-success mr-1 mb-1"},[t._v("\n                            Active\n                        ")]):e("div",{staticClass:"badge badge-danger mr-1 mb-1"},[t._v("\n                            Disabled\n                        ")])]),t._v(" "),e("td",[e("div",{staticClass:"btn-group mr-1 mb-1"},[e("div",{staticClass:"dropdown"},[e("button",{staticClass:"btn btn-sm btn-secondary dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n                                    Options\n                                ")]),t._v(" "),e("div",{staticClass:"dropdown-menu dropdown-menu-right"},[t.$cookies.get("permissions").includes("Edit")?e("a",{staticClass:"dropdown-item active",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.openEdit(r.policy_id)}}},[t._v("Edit")]):t._e(),t._v(" "),t.$cookies.get("permissions").includes("Edit")?e("a",{staticClass:"dropdown-item",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.changeStatus(r.policy_id,r.policy_status)}}},[t._v("Change Status")]):t._e(),t._v(" "),t.$cookies.get("permissions").includes("Delete")?e("a",{staticClass:"dropdown-item",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.remove(r.policy_id)}}},[t._v("Remove")]):t._e()])])])])])})),0)]),t._v(" "),e("pagination",{attrs:{data:t.policies},on:{"pagination-change-page":t.loadApi}})],1)]):t._e()}),[function(){var t=this,e=t._self._c;return e("thead",{staticClass:"thead-dark"},[e("tr",[e("th",[t._v("\n                        #\n                    ")]),t._v(" "),e("th",[t._v("\n                        Policy Title\n                    ")]),t._v(" "),e("th",[t._v("\n                        Status\n                    ")]),t._v(" "),e("th",[t._v("\n                        Options\n                    ")])])])}],!1,null,null,null).exports},1900:(t,e,r)=>{function n(t,e,r,n,o,i,a,c){var s,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=r,u._compiled=!0),n&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=s):o&&(s=c?function(){o.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:o),s)if(u.functional){u._injectStyles=s;var l=u.render;u.render=function(t,e){return s.call(e),l(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,s):[s]}return{exports:t,options:u}}r.d(e,{Z:()=>n})}}]);