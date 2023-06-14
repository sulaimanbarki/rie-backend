"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_roles_home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/roles/home.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/roles/home.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      roles: {},
      description: '',
      role: '',
      modules: [],
      selectedModules: [],
      links: [],
      assigned_links: [],
      assigned_modules: [],
      errors: [],
      title: '',
      editId: '',
      isOpen: false,
      createDiv: false,
      editDiv: false,
      moduleDiv: false,
      assignDiv: false
    };
  },
  methods: {
    loadApi: function loadApi() {
      var _arguments = arguments,
        _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var page, loading, _yield$axios$get, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              page = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 1;
              loading = _this.$vs.loading({
                target: _this.$refs.table,
                color: 'dark'
              });
              _context.prev = 2;
              _context.next = 5;
              return axios.get("".concat(_this.$base, "role-js?page=").concat(page));
            case 5:
              _yield$axios$get = _context.sent;
              data = _yield$axios$get.data;
              _this.roles = data;
              loading.close();
              _context.next = 15;
              break;
            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](2);
              alert(_context.t0);
              loading.close();
            case 15:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[2, 11]]);
      }))();
    },
    openCreate: function openCreate() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _yield$axios$get2, data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _this2.isOpen = _this2.createDiv = true;
              _this2.editDiv = false;
              _this2.moduleDiv = false;
              _this2.assignDiv = false;
              _context2.next = 7;
              return axios.get("".concat(_this2.$base, "modules-dropdown"));
            case 7:
              _yield$axios$get2 = _context2.sent;
              data = _yield$axios$get2.data;
              _this2.modules = data;
              _context2.next = 15;
              break;
            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](0);
              alert(_context2.t0);
            case 15:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 12]]);
      }))();
    },
    changeInput: function changeInput() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var loading, _yield$axios$post, data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              loading = _this3.$vs.loading({
                target: _this3.$refs.form,
                color: 'dark',
                text: 'Processing...'
              });
              _context3.prev = 1;
              _context3.next = 4;
              return axios.post("".concat(_this3.$base, "module-link-via-module"), {
                modules: _this3.selectedModules
              });
            case 4:
              _yield$axios$post = _context3.sent;
              data = _yield$axios$post.data;
              _this3.links = data;
              loading.close();
              _context3.next = 14;
              break;
            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](1);
              alert(_context3.t0);
              loading.close();
            case 14:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[1, 10]]);
      }))();
    },
    create: function create() {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var loading, _yield$axios$post2, data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              loading = _this4.$vs.loading({
                target: _this4.$refs.form,
                color: 'dark',
                text: 'Processing...'
              });
              _context4.prev = 1;
              _context4.next = 4;
              return axios.post("".concat(_this4.$base, "roles-mgt"), {
                role: _this4.role,
                description: _this4.description,
                assigned_links: _this4.assigned_links,
                selectedModules: _this4.selectedModules
              });
            case 4:
              _yield$axios$post2 = _context4.sent;
              data = _yield$axios$post2.data;
              loading.close();
              _this4.$vs.notification({
                color: 'dark',
                title: 'Done',
                text: data.msg
              });
              _this4.isOpen = false;
              _this4.loadApi();
              _context4.next = 16;
              break;
            case 12:
              _context4.prev = 12;
              _context4.t0 = _context4["catch"](1);
              loading.close();
              if (_context4.t0.response.status == 422) {
                _this4.errors = _context4.t0.response.data.errors;
              } else {
                alert(_context4.t0);
              }
            case 16:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[1, 12]]);
      }))();
    },
    openEdit: function openEdit(id) {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var loading, _yield$axios$get3, data;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              loading = _this5.$vs.loading({
                target: _this5.$refs.form,
                color: 'dark',
                text: 'Processing...'
              });
              _context5.prev = 1;
              _this5.isOpen = true;
              _this5.createDiv = false;
              _this5.moduleDiv = false;
              _this5.editDiv = true;
              _this5.assignDiv = false;
              _this5.editId = id;
              _context5.next = 10;
              return axios.get("".concat(_this5.$base, "roles-mgt/").concat(id));
            case 10:
              _yield$axios$get3 = _context5.sent;
              data = _yield$axios$get3.data;
              _this5.role = data.adrole_title;
              _this5.description = data.adrole_description;
              loading.close();
              _context5.next = 21;
              break;
            case 17:
              _context5.prev = 17;
              _context5.t0 = _context5["catch"](1);
              alert(_context5.t0);
              loading.close();
            case 21:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[1, 17]]);
      }))();
    },
    update: function update() {
      var _this6 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var loading, _yield$axios$put, data;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              loading = _this6.$vs.loading({
                target: _this6.$refs.form,
                color: 'dark',
                text: 'Processing...'
              });
              _context6.prev = 1;
              _context6.next = 4;
              return axios.put("".concat(_this6.$base, "roles-mgt/").concat(_this6.editId), {
                role: _this6.role,
                description: _this6.description
              });
            case 4:
              _yield$axios$put = _context6.sent;
              data = _yield$axios$put.data;
              loading.close();
              _this6.$vs.notification({
                color: 'dark',
                title: 'Done',
                text: data.msg
              });
              _this6.isOpen = false;
              _this6.loadApi();
              _context6.next = 16;
              break;
            case 12:
              _context6.prev = 12;
              _context6.t0 = _context6["catch"](1);
              loading.close();
              if (_context6.t0.response.status == 422) {
                _this6.errors = _context6.t0.response.data.errors;
              } else {
                alert(_context6.t0);
              }
            case 16:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[1, 12]]);
      }))();
    },
    changeStatus: function changeStatus(id, status) {
      var _this7 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var loading, _yield$axios$get4, data;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              if (!confirm('Do you want to change status of this role?')) {
                _context7.next = 16;
                break;
              }
              loading = _this7.$vs.loading({
                target: _this7.$refs.table,
                color: 'dark',
                text: 'Processing...'
              });
              _context7.prev = 2;
              _context7.next = 5;
              return axios.get("".concat(_this7.$base, "role_status/").concat(id, "/").concat(status));
            case 5:
              _yield$axios$get4 = _context7.sent;
              data = _yield$axios$get4.data;
              loading.close();
              _this7.$vs.notification({
                color: 'dark',
                title: 'Done',
                text: data.msg
              });
              _this7.loadApi();
              _context7.next = 16;
              break;
            case 12:
              _context7.prev = 12;
              _context7.t0 = _context7["catch"](2);
              alert(_context7.t0);
              loading.close();
            case 16:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[2, 12]]);
      }))();
    },
    remove: function remove(id) {
      var _this8 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var loading, _yield$axios$delete, data;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              if (!confirm('This operation is irreversible. Do you want to delete this role?')) {
                _context8.next = 16;
                break;
              }
              loading = _this8.$vs.loading({
                target: _this8.$refs.table,
                color: 'dark',
                text: 'Processing...'
              });
              _context8.prev = 2;
              _context8.next = 5;
              return axios["delete"]("".concat(_this8.$base, "roles-mgt/").concat(id));
            case 5:
              _yield$axios$delete = _context8.sent;
              data = _yield$axios$delete.data;
              loading.close();
              _this8.$vs.notification({
                color: 'dark',
                title: 'Done',
                text: data.msg
              });
              _this8.loadApi();
              _context8.next = 16;
              break;
            case 12:
              _context8.prev = 12;
              _context8.t0 = _context8["catch"](2);
              alert(_context8.t0);
              loading.close();
            case 16:
            case "end":
              return _context8.stop();
          }
        }, _callee8, null, [[2, 12]]);
      }))();
    },
    getRoleBaseModule: function getRoleBaseModule(id) {
      var _this9 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var loading, _yield$axios$get5, data;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              loading = _this9.$vs.loading({
                target: _this9.$refs.card,
                color: 'dark',
                text: 'Processing...'
              });
              _context9.prev = 1;
              _context9.next = 4;
              return axios.get("".concat(_this9.$base, "get-role-base-modules/").concat(id));
            case 4:
              _yield$axios$get5 = _context9.sent;
              data = _yield$axios$get5.data;
              _this9.assigned_modules = data;
              loading.close();
              _context9.next = 14;
              break;
            case 10:
              _context9.prev = 10;
              _context9.t0 = _context9["catch"](1);
              alert(_context9.t0);
              loading.close();
            case 14:
            case "end":
              return _context9.stop();
          }
        }, _callee9, null, [[1, 10]]);
      }))();
    },
    openModules: function openModules(id, title) {
      var _this10 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              try {
                _this10.isOpen = true;
                _this10.editDiv = _this10.createDiv = false;
                _this10.moduleDiv = true;
                _this10.assignDiv = false;
                _this10.title = title;
                _this10.getRoleBaseModule(id);
              } catch (err) {
                alert(err);
              }
            case 1:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }))();
    },
    removeLink: function removeLink(roleLinkid, roleId) {
      var _this11 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
        var _yield$axios$delete2, data;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              _context11.prev = 0;
              if (!confirm('Do you want to remove the link from the role?')) {
                _context11.next = 8;
                break;
              }
              _context11.next = 4;
              return axios["delete"]("".concat(_this11.$base, "remove-link-role/").concat(roleLinkid));
            case 4:
              _yield$axios$delete2 = _context11.sent;
              data = _yield$axios$delete2.data;
              _this11.$vs.notification({
                color: 'dark',
                title: 'Done',
                text: data.msg
              });
              _this11.getRoleBaseModule(roleId);
            case 8:
              _context11.next = 13;
              break;
            case 10:
              _context11.prev = 10;
              _context11.t0 = _context11["catch"](0);
              alert(_context11.t0);
            case 13:
            case "end":
              return _context11.stop();
          }
        }, _callee11, null, [[0, 10]]);
      }))();
    },
    removeRoleModule: function removeRoleModule(rolemoduleId) {
      var _this12 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
        var _yield$axios$delete3, data;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              _context12.prev = 0;
              if (!confirm('Do you want to remove the module from the role?. This may remove entire links within the module.')) {
                _context12.next = 10;
                break;
              }
              if (!confirm('Are you sure about this operation?')) {
                _context12.next = 10;
                break;
              }
              _context12.next = 5;
              return axios["delete"]("".concat(_this12.$base, "remove-module-role/").concat(rolemoduleId));
            case 5:
              _yield$axios$delete3 = _context12.sent;
              data = _yield$axios$delete3.data;
              _this12.$vs.notification({
                color: 'dark',
                title: 'Done',
                text: data.msg
              });
              _this12.isOpen = false;
              console.log(data.msg);
            case 10:
              _context12.next = 15;
              break;
            case 12:
              _context12.prev = 12;
              _context12.t0 = _context12["catch"](0);
              alert(_context12.t0);
            case 15:
            case "end":
              return _context12.stop();
          }
        }, _callee12, null, [[0, 12]]);
      }))();
    },
    assignModule: function assignModule(id, title) {
      var _this13 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
        var _yield$axios$get6, data;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              _this13.isOpen = true;
              _this13.editDiv = _this13.createDiv = false;
              _this13.moduleDiv = false;
              _this13.assignDiv = true;
              _this13.title = title;
              _this13.editId = id;
              _context13.next = 8;
              return axios.get("".concat(_this13.$base, "modules-dropdown"));
            case 8:
              _yield$axios$get6 = _context13.sent;
              data = _yield$axios$get6.data;
              _this13.modules = data;
            case 11:
            case "end":
              return _context13.stop();
          }
        }, _callee13);
      }))();
    },
    assignNewModule: function assignNewModule() {
      var _this14 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
        var loading, _yield$axios$post3, data;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              loading = _this14.$vs.loading({
                target: _this14.$refs.form,
                color: 'dark',
                text: 'Processing...'
              });
              _context14.prev = 1;
              _context14.next = 4;
              return axios.post("".concat(_this14.$base, "assign-modules"), {
                assigned_links: _this14.assigned_links,
                selectedModules: _this14.selectedModules,
                roleId: _this14.editId
              });
            case 4:
              _yield$axios$post3 = _context14.sent;
              data = _yield$axios$post3.data;
              loading.close();
              _this14.$vs.notification({
                color: 'dark',
                title: 'Done',
                text: data.msg
              });
              _this14.isOpen = false;
              _this14.loadApi();
              _context14.next = 16;
              break;
            case 12:
              _context14.prev = 12;
              _context14.t0 = _context14["catch"](1);
              loading.close();
              if (_context14.t0.response.status == 422) {
                _this14.errors = _context14.t0.response.data.errors;
              } else {
                alert(_context14.t0);
              }
            case 16:
            case "end":
              return _context14.stop();
          }
        }, _callee14, null, [[1, 12]]);
      }))();
    }
  },
  created: function created() {
    this.loadApi();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/roles/home.vue?vue&type=template&id=c6a33608&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/roles/home.vue?vue&type=template&id=c6a33608& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.$cookies.get("permissions").includes("Read") ? _c("section", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 table-responsive"
  }, [_vm.$cookies.get("permissions").includes("Write") ? _c("a", {
    staticClass: "btn btn-info shadow mr-1 mb-1",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.openCreate();
      }
    }
  }, [_vm._v("Create a Role")]) : _vm._e(), _vm._v(" "), _c("table", {
    ref: "table",
    staticClass: "table table-hover table-striped mb-0",
    staticStyle: {
      width: "100%"
    }
  }, [_vm._m(0), _vm._v(" "), _c("tbody", _vm._l(_vm.roles.data, function (i, x) {
    return _c("tr", {
      key: x
    }, [_c("td", [_vm._v("\n                        " + _vm._s(x += 1) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(i.adrole_title) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(i.adrole_description) + "\n                    ")]), _vm._v(" "), _c("td", [_c("a", {
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.openModules(i.adrole_id, i.adrole_title);
        }
      }
    }, [_vm._v("Modules Assigned")])]), _vm._v(" "), _c("td", [i.adrole_status === 1 ? _c("div", {
      staticClass: "badge badge-success mr-1 mb-1"
    }, [_vm._v("\n                            Active\n                        ")]) : _c("div", {
      staticClass: "badge badge-danger mr-1 mb-1"
    }, [_vm._v("\n                            Disabled\n                        ")])]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "btn-group mr-1 mb-1"
    }, [_c("div", {
      staticClass: "dropdown"
    }, [_c("button", {
      staticClass: "btn btn-sm btn-secondary dropdown-toggle",
      attrs: {
        type: "button",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false"
      }
    }, [_vm._v("\n                                    Options\n                                ")]), _vm._v(" "), _c("div", {
      staticClass: "dropdown-menu dropdown-menu-right"
    }, [_vm.$cookies.get("permissions").includes("Edit") ? _c("a", {
      staticClass: "dropdown-item active",
      attrs: {
        href: ""
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.openEdit(i.adrole_id);
        }
      }
    }, [_vm._v("Edit")]) : _vm._e(), _vm._v(" "), _vm.$cookies.get("permissions").includes("Edit") ? _c("a", {
      staticClass: "dropdown-item",
      attrs: {
        href: ""
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.changeStatus(i.adrole_id, i.adrole_status);
        }
      }
    }, [_vm._v("Change Status")]) : _vm._e(), _vm._v(" "), _vm.$cookies.get("permissions").includes("Write") ? _c("a", {
      staticClass: "dropdown-item",
      attrs: {
        href: ""
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.assignModule(i.adrole_id, i.adrole_title);
        }
      }
    }, [_vm._v("Assign Module")]) : _vm._e(), _vm._v(" "), _vm.$cookies.get("permissions").includes("Delete") ? _c("a", {
      staticClass: "dropdown-item",
      attrs: {
        href: ""
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.remove(i.adrole_id);
        }
      }
    }, [_vm._v("Remove")]) : _vm._e()])])])])]);
  }), 0)]), _vm._v(" "), _c("pagination", {
    attrs: {
      data: _vm.roles
    },
    on: {
      "pagination-change-page": _vm.loadApi
    }
  }), _vm._v(" "), _c("vs-dialog", {
    attrs: {
      blur: "",
      "prevent-close": "",
      width: "80%"
    },
    scopedSlots: _vm._u([{
      key: "header",
      fn: function fn() {
        return [_vm.moduleDiv !== true ? _c("h4", {
          staticClass: "not-margin"
        }, [_vm._v("\n                    " + _vm._s(_vm.createDiv ? "Create a" : "Edit") + "  "), _c("b", [_vm._v("Role")])]) : _vm._e()];
      },
      proxy: true
    }], null, false, 753819705),
    model: {
      value: _vm.isOpen,
      callback: function callback($$v) {
        _vm.isOpen = $$v;
      },
      expression: "isOpen"
    }
  }, [_vm._v(" "), _vm.createDiv ? _c("div", {
    staticClass: "con-form"
  }, [_c("form", {
    ref: "form",
    staticClass: "row",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.create();
      }
    }
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.role ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.role ? _vm.errors.role[0] : "Role")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      dark: "",
      type: "text",
      placeholder: "Type Role"
    },
    model: {
      value: _vm.role,
      callback: function callback($$v) {
        _vm.role = $$v;
      },
      expression: "role"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("h6", {
    domProps: {
      textContent: _vm._s("Select Module")
    }
  }), _vm._v(" "), _vm._l(_vm.modules, function (a, b) {
    return _c("vs-checkbox", {
      key: b,
      staticStyle: {
        "float": "left"
      },
      attrs: {
        dark: "",
        val: a.value
      },
      on: {
        change: function change($event) {
          return _vm.changeInput();
        }
      },
      model: {
        value: _vm.selectedModules,
        callback: function callback($$v) {
          _vm.selectedModules = $$v;
        },
        expression: "selectedModules"
      }
    }, [_vm._v("\n                                " + _vm._s(a.label) + "\n                            ")]);
  })], 2)]), _vm._v(" "), _vm.selectedModules.length ? _c("section", {
    staticClass: "col-md-12"
  }, _vm._l(_vm.links, function (i, x) {
    return _c("div", {
      key: x,
      staticClass: "card"
    }, [_c("header", {
      staticClass: "card-header"
    }, [_c("h4", {
      staticClass: "card-title"
    }, [_vm._v("Links in "), _c("b", [_vm._v(_vm._s(_vm.selectedModules.length ? i.list.module.module_title : ""))])])]), _vm._v(" "), _c("section", {
      staticClass: "card-body"
    }, [_c("div", {
      staticClass: "center"
    }, _vm._l(i.list.links, function (a, b) {
      return _c("vs-checkbox", {
        key: b,
        staticStyle: {
          "float": "left"
        },
        attrs: {
          val: a.modulelink_id
        },
        model: {
          value: _vm.assigned_links,
          callback: function callback($$v) {
            _vm.assigned_links = $$v;
          },
          expression: "assigned_links"
        }
      }, [_vm._v("\n                                        " + _vm._s(a.link_title) + "\n                                    ")]);
    }), 1)])]);
  }), 0) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.description ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.description ? _vm.errors.description[0] : "Description")
    }
  }), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.description,
      expression: "description"
    }],
    staticClass: "form-control",
    attrs: {
      rows: "3",
      placeholder: "Type Description if needed"
    },
    domProps: {
      value: _vm.description
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.description = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("button", {
    staticClass: "btn btn-dark glow shadow mr-1 mb-1",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("Create")])])])]) : _vm._e(), _vm._v(" "), _vm.editDiv ? _c("div", {
    staticClass: "con-form"
  }, [_c("form", {
    ref: "form",
    staticClass: "row",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.update();
      }
    }
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.role ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.role ? _vm.errors.role[0] : "Edit Role")
    }
  }), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.role,
      expression: "role"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "basicInput",
      placeholder: "Type Role"
    },
    domProps: {
      value: _vm.role
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.role = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.description ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.description ? _vm.errors.description[0] : "Edit Description")
    }
  }), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.description,
      expression: "description"
    }],
    staticClass: "form-control",
    attrs: {
      rows: "3",
      placeholder: "Type Description if needed"
    },
    domProps: {
      value: _vm.description
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.description = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("button", {
    staticClass: "btn btn-dark glow shadow mr-1 mb-1",
    attrs: {
      type: "submit"
    }
  }, [_vm._v(_vm._s(_vm.createDiv ? "Create" : "Edit"))])])])]) : _vm._e(), _vm._v(" "), _vm.moduleDiv ? _c("div", [_c("div", {
    ref: "card",
    staticClass: "card collapse-icon accordion-icon-rotate"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("h4", {
    staticClass: "card-title"
  }, [_vm._v("Modules Assigned to "), _c("b", [_vm._v(_vm._s(_vm.title))])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, _vm._l(_vm.assigned_modules, function (i, x) {
    return _c("section", {
      key: x,
      staticClass: "col-md-12"
    }, [_c("h4", {
      staticClass: "text-info"
    }, [_vm._v(_vm._s(x += 1) + ": " + _vm._s(i.module) + " "), _c("vs-button", {
      staticStyle: {
        "float": "right"
      },
      attrs: {
        icon: "",
        color: "danger"
      },
      on: {
        click: function click($event) {
          return _vm.removeRoleModule(i.rolemodule_id);
        }
      }
    }, [_c("i", {
      staticClass: "bx bxs-trash"
    })])], 1), _vm._v(" "), _c("hr"), _vm._v(" "), _c("table", {
      staticClass: "table table-stripped"
    }, [_c("thead", [_c("tr", [_c("th", [_vm._v("\n                                            #\n                                        ")]), _vm._v(" "), _c("th", [_vm._v("\n                                            Link Title\n                                        ")]), _vm._v(" "), _c("th", [_vm._v("\n                                            Link\n                                        ")]), _vm._v(" "), _c("th", [_vm._v("\n                                            Remove\n                                        ")])])]), _vm._v(" "), _c("tbody", _vm._l(i.links, function (a, b) {
      return _c("tr", {
        key: b
      }, [_c("td", [_vm._v("\n                                            " + _vm._s(b += 1) + "\n                                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                                            " + _vm._s(a.link_title) + "\n                                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                                            " + _vm._s(a.link_val) + "\n                                        ")]), _vm._v(" "), _c("td", [_c("vs-button", {
        staticStyle: {
          "float": "right"
        },
        attrs: {
          icon: "",
          color: "danger",
          border: ""
        },
        on: {
          click: function click($event) {
            return _vm.removeLink(a.rolelink_id, a.adrole_id);
          }
        }
      }, [_c("i", {
        staticClass: "bx bxs-trash"
      })])], 1)]);
    }), 0)])]);
  }), 0)])]) : _vm._e(), _vm._v(" "), _vm.assignDiv ? _c("div", [_c("div", {
    ref: "card",
    staticClass: "card collapse-icon accordion-icon-rotate"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("h4", {
    staticClass: "card-title"
  }, [_vm._v("Assign to Module & links to "), _c("b", [_vm._v(_vm._s(_vm.title))])])]), _vm._v(" "), _c("form", {
    staticClass: "card-body",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.assignNewModule.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("button", {
    staticClass: "btn btn-dark glow shadow mr-1 mb-1",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("Add Module")])]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("h6", {
    "class": [_vm.errors.selectedModules ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.selectedModules ? _vm.errors.selectedModules[0] : "Select Module")
    }
  }), _vm._v(" "), _vm._l(_vm.modules, function (a, b) {
    return _c("vs-checkbox", {
      key: b,
      staticStyle: {
        "float": "left"
      },
      attrs: {
        dark: "",
        val: a.value
      },
      on: {
        change: function change($event) {
          return _vm.changeInput();
        }
      },
      model: {
        value: _vm.selectedModules,
        callback: function callback($$v) {
          _vm.selectedModules = $$v;
        },
        expression: "selectedModules"
      }
    }, [_vm._v("\n                                    " + _vm._s(a.label) + "\n                                ")]);
  })], 2)]), _vm._v(" "), _vm.selectedModules.length ? _c("section", {
    staticClass: "col-md-12"
  }, _vm._l(_vm.links, function (i, x) {
    return _c("div", {
      key: x,
      staticClass: "card"
    }, [_c("header", {
      staticClass: "card-header"
    }, [_c("h4", {
      staticClass: "card-title"
    }, [_vm._v("Links in "), _c("b", [_vm._v(_vm._s(_vm.selectedModules.length ? i.list.module.module_title : ""))])])]), _vm._v(" "), _c("section", {
      staticClass: "card-body"
    }, [_c("label", {
      "class": [_vm.errors.assigned_links ? "danger" : ""],
      domProps: {
        textContent: _vm._s(_vm.errors.assigned_links ? _vm.errors.assigned_links[0] : "")
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "center"
    }, _vm._l(i.list.links, function (a, b) {
      return _c("vs-checkbox", {
        key: b,
        staticStyle: {
          "float": "left"
        },
        attrs: {
          val: a.modulelink_id
        },
        model: {
          value: _vm.assigned_links,
          callback: function callback($$v) {
            _vm.assigned_links = $$v;
          },
          expression: "assigned_links"
        }
      }, [_vm._v("\n                                            " + _vm._s(a.link_title) + "\n                                        ")]);
    }), 1)])]);
  }), 0) : _vm._e()])])]) : _vm._e()])], 1)]) : _vm._e();
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "thead-dark"
  }, [_c("tr", [_c("th", [_vm._v("\n                        #\n                    ")]), _vm._v(" "), _c("th", [_vm._v("\n                        Role Title\n                    ")]), _vm._v(" "), _c("th", [_vm._v("\n                        Description\n                    ")]), _vm._v(" "), _c("th", [_vm._v("\n                        No. Of Modules\n                    ")]), _vm._v(" "), _c("th", [_vm._v("\n                        Status\n                    ")]), _vm._v(" "), _c("th", [_vm._v("\n                        Options\n                    ")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/roles/home.vue?vue&type=style&index=0&id=c6a33608&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/roles/home.vue?vue&type=style&index=0&id=c6a33608&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.vs-input {\n    width: 100%;\n}\n.vs__search{\n    height: 30px !important;\n}\n.vs__selected{\n    font-size: 13px !important;\n    background-color: #ecf0f1;\n    border: 1px solid #222;\n    border-radius: 2px;\n    color: #222;\n    line-height: 2px;\n    padding: 5px;\n    border-radius: 5px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/roles/home.vue?vue&type=style&index=0&id=c6a33608&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/roles/home.vue?vue&type=style&index=0&id=c6a33608&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_c6a33608_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./home.vue?vue&type=style&index=0&id=c6a33608&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/roles/home.vue?vue&type=style&index=0&id=c6a33608&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_c6a33608_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_c6a33608_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/roles/home.vue":
/*!************************************************!*\
  !*** ./resources/js/components/roles/home.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_vue_vue_type_template_id_c6a33608___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.vue?vue&type=template&id=c6a33608& */ "./resources/js/components/roles/home.vue?vue&type=template&id=c6a33608&");
/* harmony import */ var _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.vue?vue&type=script&lang=js& */ "./resources/js/components/roles/home.vue?vue&type=script&lang=js&");
/* harmony import */ var _home_vue_vue_type_style_index_0_id_c6a33608_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.vue?vue&type=style&index=0&id=c6a33608&lang=css& */ "./resources/js/components/roles/home.vue?vue&type=style&index=0&id=c6a33608&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _home_vue_vue_type_template_id_c6a33608___WEBPACK_IMPORTED_MODULE_0__.render,
  _home_vue_vue_type_template_id_c6a33608___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/roles/home.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/roles/home.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/roles/home.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/roles/home.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/roles/home.vue?vue&type=template&id=c6a33608&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/roles/home.vue?vue&type=template&id=c6a33608& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_c6a33608___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_c6a33608___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_c6a33608___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./home.vue?vue&type=template&id=c6a33608& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/roles/home.vue?vue&type=template&id=c6a33608&");


/***/ }),

/***/ "./resources/js/components/roles/home.vue?vue&type=style&index=0&id=c6a33608&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/roles/home.vue?vue&type=style&index=0&id=c6a33608&lang=css& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_c6a33608_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./home.vue?vue&type=style&index=0&id=c6a33608&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/roles/home.vue?vue&type=style&index=0&id=c6a33608&lang=css&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);