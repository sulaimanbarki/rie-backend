"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_products_edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/edit.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['id'],
  data: function data() {
    var _ref;
    return _ref = {
      categories: [],
      subcategories: [],
      product_title: '',
      product_color: '',
      product_model: '',
      fuel_type: ''
    }, _defineProperty(_ref, "product_model", ''), _defineProperty(_ref, "category", ''), _defineProperty(_ref, "subcategory", ''), _defineProperty(_ref, "subcategory", ''), _defineProperty(_ref, "model_number", ''), _defineProperty(_ref, "driving_method", ''), _defineProperty(_ref, "total_length", ''), _defineProperty(_ref, "overall_width", ''), _defineProperty(_ref, "total_height", ''), _defineProperty(_ref, "wheel_base", ''), _defineProperty(_ref, "front_rear_suspension", ''), _defineProperty(_ref, "wheel_track", ''), _defineProperty(_ref, "total_weight", ''), _defineProperty(_ref, "total_vehicle_mass", ''), _defineProperty(_ref, "maximum_speed", ''), _defineProperty(_ref, "minimum_turning_diameter", ''), _defineProperty(_ref, "engine_model", ''), _defineProperty(_ref, "engine_type", ''), _defineProperty(_ref, "bore_diameter", ''), _defineProperty(_ref, "engine_stroke", ''), _defineProperty(_ref, "engine_displacement", ''), _defineProperty(_ref, "compression_ratio", ''), _defineProperty(_ref, "rated_power", ''), _defineProperty(_ref, "rated_speed", ''), _defineProperty(_ref, "maximum_torque", ''), _defineProperty(_ref, "engine_fuel_type", ''), _defineProperty(_ref, "transmission_model", ''), _defineProperty(_ref, "control_method", ''), _defineProperty(_ref, "speed_ratio", ''), _defineProperty(_ref, "clutch_type", ''), _defineProperty(_ref, "clutch_diameter", ''), _defineProperty(_ref, "manipulation_method", ''), _defineProperty(_ref, "front_axle", ''), _defineProperty(_ref, "rear_axle", ''), _defineProperty(_ref, "structure_type", ''), _defineProperty(_ref, "standard_sizes", ''), _defineProperty(_ref, "front_suspension_structure", ''), _defineProperty(_ref, "rear_suspension_structure", ''), _defineProperty(_ref, "tyres_model", ''), _defineProperty(_ref, "braking_type", ''), _defineProperty(_ref, "driving_brake", ''), _defineProperty(_ref, "parking_brake", ''), _defineProperty(_ref, "auxiliary_brake", ''), _defineProperty(_ref, "steering_type", ''), _defineProperty(_ref, "capacity", ''), _defineProperty(_ref, "material", ''), _defineProperty(_ref, "cabin_type", ''), _defineProperty(_ref, "vehicle_voltage", ''), _defineProperty(_ref, "battery", ''), _defineProperty(_ref, "description", ''), _defineProperty(_ref, "errors", []), _ref;
  },
  methods: {
    loadSubCategories: function loadSubCategories() {
      var _this = this;
      var loading = this.$vs.loading({
        target: this.$refs.form,
        color: 'dark',
        text: 'Processing...'
      });
      axios.post("".concat(this.$base, "load-category-wise-subcategory"), {
        categoryid: this.category.value
      }).then(function (response) {
        _this.subcategories = response.data;
        loading.close();
      })["catch"](function (err) {
        loading.close();
        alert('An error occur while initiating subcategories data ' + err);
      });
      loading.close();
    },
    loadCategories: function loadCategories() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$axios$get, data, editproduct;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios.get("".concat(_this2.$base, "categories-dropdown"));
            case 3:
              _yield$axios$get = _context.sent;
              data = _yield$axios$get.data;
              _this2.categories = data;
              _context.next = 8;
              return axios.get("".concat(_this2.$base, "product-edit-js/").concat(_this2.id));
            case 8:
              editproduct = _context.sent;
              _this2.category = [{
                "label": editproduct.data['category_name'],
                "value": editproduct.data['category_id']
              }];
              if (_this2.category) {
                _this2.loadSubCategories();
                _this2.subcategory = [{
                  "label": editproduct.data['subcategory_name'],
                  "value": editproduct.data['subcategory_id']
                }];
              }
              _this2.product_title = editproduct.data.product_name;
              _this2.description = editproduct.data['product_details'];
              _this2.model_number = editproduct.data.basic_model_number;
              _this2.driving_method = editproduct.data.basic_driving_method;
              _this2.total_length = editproduct.data.size_total_length;
              _this2.overall_width = editproduct.data.size_overall_width;
              _this2.total_height = editproduct.data.size_total_height;
              _this2.wheel_base = editproduct.data.size_wheel_base;
              _this2.front_rear_suspension = editproduct.data.size_front_rear_suspension;
              _this2.wheel_track = editproduct.data.size_wheel_track;
              _this2.total_weight = editproduct.data.quality_total_weight;
              _this2.total_vehicle_mass = editproduct.data.quality_total_vehicle_mass;
              _this2.maximum_speed = editproduct.data.performance_maximum_speed;
              _this2.minimum_turning_diameter = editproduct.data.performance_minimum_turning_diameter;
              _this2.engine_model = editproduct.data.engine_engine_model;
              _this2.engine_type = editproduct.data.engine_engine_type;
              _this2.bore_diameter = editproduct.data.engine_bore_diameter;
              _this2.compression_ratio = editproduct.data.engine_compression_ratio;
              _this2.engine_stroke = editproduct.data.engine_engine_stroke, _this2.engine_displacement = editproduct.data.engine_engine_displacement, _this2.rated_speed = editproduct.data.engine_rated_speed;
              _this2.rated_power = editproduct.data.engine_rated_power;
              _this2.maximum_torque = editproduct.data.engine_maximum_torque;
              _this2.engine_fuel_type = editproduct.data.engine_engine_fuel_type;
              _this2.transmission_model = editproduct.data.transmission_transmission_model;
              _this2.control_method = editproduct.data.transmission_control_method;
              _this2.speed_ratio = editproduct.data.transmission_speed_ratio;
              _this2.clutch_type = editproduct.data.clutch_clutch_type;
              _this2.clutch_diameter = editproduct.data.clutch_clutch_diameter;
              _this2.manipulation_method = editproduct.data.clutch_manipulation_method;
              _this2.front_axle = editproduct.data.axle_front_axle;
              _this2.rear_axle = editproduct.data.axle_rear_axle;
              _this2.structure_type = editproduct.data.frame_structure_type;
              _this2.standard_sizes = editproduct.data.frame_standard_sizes;
              _this2.front_suspension_structure = editproduct.data.suspension_front_suspension_structure;
              _this2.rear_suspension_structure = editproduct.data.suspension_rear_suspension_structure;
              _this2.tyres_model = editproduct.data.tyres_tyres_model;
              _this2.braking_type = editproduct.data.braking_braking_type;
              _this2.driving_brake = editproduct.data.braking_driving_brake;
              _this2.parking_brake = editproduct.data.braking_parking_brake;
              _this2.auxiliary_brake = editproduct.data.braking_auxiliary_brake;
              _this2.steering_type = editproduct.data.steering_steering_type;
              _this2.capacity = editproduct.data.fuel_capacity;
              _this2.material = editproduct.data.fuel_material;
              _this2.cabin_type = editproduct.data.cabin_cabin_type;
              _this2.vehicle_voltage = editproduct.data.electrical_vehicle_voltage;
              _this2.battery = editproduct.data.electrical_battery;
              _context.next = 61;
              break;
            case 58:
              _context.prev = 58;
              _context.t0 = _context["catch"](0);
              alert(_context.t0);
            case 61:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 58]]);
      }))();
    },
    update: function update() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var loading, _yield$axios$post, data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              loading = _this3.$vs.loading({
                target: _this3.$refs.form,
                color: 'dark',
                text: 'Processing...'
              });
              _context2.prev = 1;
              _context2.next = 4;
              return axios.post("".concat(_this3.$base, "product-update"), {
                productid: _this3.id,
                category: _this3.category['value'],
                subcategory: _this3.subcategory['value'],
                product_title: _this3.product_title,
                model_number: _this3.model_number,
                driving_method: _this3.driving_method,
                total_length: _this3.total_length,
                overall_width: _this3.overall_width,
                total_height: _this3.total_height,
                wheel_base: _this3.wheel_base,
                front_rear_suspension: _this3.front_rear_suspension,
                wheel_track: _this3.wheel_track,
                total_weight: _this3.total_weight,
                total_vehicle_mass: _this3.total_vehicle_mass,
                maximum_speed: _this3.maximum_speed,
                minimum_turning_diameter: _this3.minimum_turning_diameter,
                engine_model: _this3.engine_model,
                engine_type: _this3.engine_type,
                bore_diameter: _this3.bore_diameter,
                engine_stroke: _this3.engine_stroke,
                engine_displacement: _this3.engine_displacement,
                compression_ratio: _this3.compression_ratio,
                rated_power: _this3.rated_power,
                rated_speed: _this3.rated_speed,
                maximum_torque: _this3.maximum_torque,
                engine_fuel_type: _this3.engine_fuel_type,
                transmission_model: _this3.transmission_model,
                control_method: _this3.control_method,
                speed_ratio: _this3.speed_ratio,
                clutch_type: _this3.clutch_type,
                clutch_diameter: _this3.clutch_diameter,
                manipulation_method: _this3.manipulation_method,
                front_axle: _this3.front_axle,
                rear_axle: _this3.rear_axle,
                structure_type: _this3.structure_type,
                standard_sizes: _this3.standard_sizes,
                front_suspension_structure: _this3.front_suspension_structure,
                rear_suspension_structure: _this3.rear_suspension_structure,
                tyres_model: _this3.tyres_model,
                braking_type: _this3.braking_type,
                driving_brake: _this3.driving_brake,
                parking_brake: _this3.parking_brake,
                auxiliary_brake: _this3.auxiliary_brake,
                steering_type: _this3.steering_type,
                capacity: _this3.capacity,
                material: _this3.material,
                cabin_type: _this3.cabin_type,
                vehicle_voltage: _this3.vehicle_voltage,
                battery: _this3.battery,
                color: _this3.product_color,
                model: _this3.product_model,
                fueltype: _this3.fuel_type,
                description: _this3.description
              });
            case 4:
              _yield$axios$post = _context2.sent;
              data = _yield$axios$post.data;
              loading.close();
              _this3.$vs.notification({
                color: 'dark',
                title: 'Done',
                text: data.msg
              });
              _this3.isOpen = false;
              _this3.loadApi();
              console.log(data.msg);
              _context2.next = 17;
              break;
            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](1);
              loading.close();
              if (_context2.t0.response.status == 422) {
                _this3.errors = _context2.t0.response.data.errors;
              } else {
                alert(_context2.t0);
              }
            case 17:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[1, 13]]);
      }))();
    }
  },
  created: function created() {
    this.loadCategories();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/edit.vue?vue&type=template&id=8799d5cc&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/edit.vue?vue&type=template&id=8799d5cc& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.$cookies.get("permissions").includes("Write") ? _c("form", {
    attrs: {
      id: "stacked-pill"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.update();
      }
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-12"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row pills-stacked"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "col-md-9 col-sm-12"
  }, [_c("div", {
    staticClass: "tab-content"
  }, [_c("div", {
    staticClass: "tab-pane active",
    attrs: {
      id: "basic-info-1",
      "aria-labelledby": "basic-info",
      role: "tabpanel",
      "aria-expanded": "true"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.product_title ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.product_title ? _vm.errors.product_title[0] : "Product Title *")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Type product title"
    },
    model: {
      value: _vm.product_title,
      callback: function callback($$v) {
        _vm.product_title = $$v;
      },
      expression: "product_title"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.category ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.category ? _vm.errors.category[0] : "Product Category *")
    }
  }), _vm._v(" "), _c("v-select", {
    ref: "input",
    attrs: {
      options: _vm.categories,
      placeholder: "Choose Category"
    },
    on: {
      input: _vm.loadSubCategories
    },
    model: {
      value: _vm.category,
      callback: function callback($$v) {
        _vm.category = $$v;
      },
      expression: "category"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.subcategory ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.subcategory ? _vm.errors.subcategory[0] : "Product Subcategory *")
    }
  }), _vm._v(" "), _c("v-select", {
    attrs: {
      options: _vm.subcategories,
      placeholder: "Choose Subcategory"
    },
    model: {
      value: _vm.subcategory,
      callback: function callback($$v) {
        _vm.subcategory = $$v;
      },
      expression: "subcategory"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.model_number ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.model_number ? _vm.errors.model_number[0] : "Model Number")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter model number"
    },
    model: {
      value: _vm.model_number,
      callback: function callback($$v) {
        _vm.model_number = $$v;
      },
      expression: "model_number"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.driving_method ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.driving_method ? _vm.errors.driving_method[0] : "Driving Method")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter driving method"
    },
    model: {
      value: _vm.driving_method,
      callback: function callback($$v) {
        _vm.driving_method = $$v;
      },
      expression: "driving_method"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.description ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.description ? _vm.errors.description[0] : "Product Description *")
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
      placeholder: "Write product description"
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
  })])])])]), _vm._v(" "), _c("div", {
    staticClass: "tab-pane",
    attrs: {
      id: "size-1",
      "aria-labelledby": "size",
      role: "tabpanel"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.total_length ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.total_length ? _vm.errors.total_length[0] : "Total Length(mm)")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter total length"
    },
    model: {
      value: _vm.total_length,
      callback: function callback($$v) {
        _vm.total_length = $$v;
      },
      expression: "total_length"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.overall_width ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.overall_width ? _vm.errors.overall_width[0] : "Overall Width(mm)")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter overall width"
    },
    model: {
      value: _vm.overall_width,
      callback: function callback($$v) {
        _vm.overall_width = $$v;
      },
      expression: "overall_width"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.total_height ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.total_height ? _vm.errors.total_height[0] : "Total Height(mm)")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter total height"
    },
    model: {
      value: _vm.total_height,
      callback: function callback($$v) {
        _vm.total_height = $$v;
      },
      expression: "total_height"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.wheel_base ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.wheel_base ? _vm.errors.wheel_base[0] : "Wheel Base(mm)")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter wheel base"
    },
    model: {
      value: _vm.wheel_base,
      callback: function callback($$v) {
        _vm.wheel_base = $$v;
      },
      expression: "wheel_base"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.front_rear_suspension ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.front_rear_suspension ? _vm.errors.front_rear_suspension[0] : "Front / Rear suspension (mm)")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter front / rear suspension"
    },
    model: {
      value: _vm.front_rear_suspension,
      callback: function callback($$v) {
        _vm.front_rear_suspension = $$v;
      },
      expression: "front_rear_suspension"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.wheel_track ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.wheel_track ? _vm.errors.wheel_track[0] : "Wheel Track (front/back)(mm)")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter wheel track"
    },
    model: {
      value: _vm.wheel_track,
      callback: function callback($$v) {
        _vm.wheel_track = $$v;
      },
      expression: "wheel_track"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "tab-pane",
    attrs: {
      id: "quality-1",
      "aria-labelledby": "quality",
      role: "tabpanel"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_vm._m(3), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.total_weight ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.total_weight ? _vm.errors.total_weight[0] : "Total Weight (kg)")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter total weight"
    },
    model: {
      value: _vm.total_weight,
      callback: function callback($$v) {
        _vm.total_weight = $$v;
      },
      expression: "total_weight"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.total_vehicle_mass ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.total_vehicle_mass ? _vm.errors.total_vehicle_mass[0] : "Total Vehicle Mass (kg)")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter total vehicle mass"
    },
    model: {
      value: _vm.total_vehicle_mass,
      callback: function callback($$v) {
        _vm.total_vehicle_mass = $$v;
      },
      expression: "total_vehicle_mass"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "tab-pane",
    attrs: {
      id: "performance-1",
      "aria-labelledby": "performance",
      role: "tabpanel"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_vm._m(4), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.maximum_speed ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.maximum_speed ? _vm.errors.maximum_speed[0] : "Maximum Speed (km/h)")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter maximum speed"
    },
    model: {
      value: _vm.maximum_speed,
      callback: function callback($$v) {
        _vm.maximum_speed = $$v;
      },
      expression: "maximum_speed"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.minimum_turning_diameter ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.minimum_turning_diameter ? _vm.errors.minimum_turning_diameter[0] : "Minimum Turning Diameter")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter minimum turning diameter"
    },
    model: {
      value: _vm.minimum_turning_diameter,
      callback: function callback($$v) {
        _vm.minimum_turning_diameter = $$v;
      },
      expression: "minimum_turning_diameter"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "tab-pane",
    attrs: {
      id: "engine-1",
      "aria-labelledby": "engine",
      role: "tabpanel"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_vm._m(5), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.engine_model ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.engine_model ? _vm.errors.engine_model[0] : "Model")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter model"
    },
    model: {
      value: _vm.engine_model,
      callback: function callback($$v) {
        _vm.engine_model = $$v;
      },
      expression: "engine_model"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.engine_type ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.engine_type ? _vm.errors.engine_type[0] : "Type")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter type"
    },
    model: {
      value: _vm.engine_type,
      callback: function callback($$v) {
        _vm.engine_type = $$v;
      },
      expression: "engine_type"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.bore_diameter ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.bore_diameter ? _vm.errors.bore_diameter[0] : "Bore Diameter(mm)")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter bore diameter(mm)"
    },
    model: {
      value: _vm.bore_diameter,
      callback: function callback($$v) {
        _vm.bore_diameter = $$v;
      },
      expression: "bore_diameter"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.engine_stroke ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.engine_stroke ? _vm.errors.engine_stroke[0] : "Stroke (mm)")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter engine stroke (mm)"
    },
    model: {
      value: _vm.engine_stroke,
      callback: function callback($$v) {
        _vm.engine_stroke = $$v;
      },
      expression: "engine_stroke"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.engine_displacement ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.engine_displacement ? _vm.errors.engine_displacement[0] : "Engine Displacement")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter engine displacement (cc)"
    },
    model: {
      value: _vm.engine_displacement,
      callback: function callback($$v) {
        _vm.engine_displacement = $$v;
      },
      expression: "engine_displacement"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.compression_ratio ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.compression_ratio ? _vm.errors.compression_ratio[0] : "Compression Ratio")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter compression ratio"
    },
    model: {
      value: _vm.compression_ratio,
      callback: function callback($$v) {
        _vm.compression_ratio = $$v;
      },
      expression: "compression_ratio"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.rated_power ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.rated_power ? _vm.errors.rated_power[0] : "Rated Power kW(Ps)")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter rated power kW(Ps)"
    },
    model: {
      value: _vm.rated_power,
      callback: function callback($$v) {
        _vm.rated_power = $$v;
      },
      expression: "rated_power"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.rated_speed ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.rated_speed ? _vm.errors.rated_speed[0] : "Rated Speed r/min")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter rated speed r/min"
    },
    model: {
      value: _vm.rated_speed,
      callback: function callback($$v) {
        _vm.rated_speed = $$v;
      },
      expression: "rated_speed"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.maximum_torque ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.maximum_torque ? _vm.errors.maximum_torque[0] : "Maximum Torque N m /r/min")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter maximum torque N m /r/min"
    },
    model: {
      value: _vm.maximum_torque,
      callback: function callback($$v) {
        _vm.maximum_torque = $$v;
      },
      expression: "maximum_torque"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.engine_fuel_type ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.engine_fuel_type ? _vm.errors.engine_fuel_type[0] : "Engine Fuel Type")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter engine fuel type"
    },
    model: {
      value: _vm.engine_fuel_type,
      callback: function callback($$v) {
        _vm.engine_fuel_type = $$v;
      },
      expression: "engine_fuel_type"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "tab-pane",
    attrs: {
      id: "transmission-1",
      "aria-labelledby": "transmission",
      role: "tabpanel"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_vm._m(6), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.transmission_model ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.transmission_model ? _vm.errors.transmission_model[0] : "Model")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter model"
    },
    model: {
      value: _vm.transmission_model,
      callback: function callback($$v) {
        _vm.transmission_model = $$v;
      },
      expression: "transmission_model"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.control_method ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.control_method ? _vm.errors.control_method[0] : "Control Method")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter control method"
    },
    model: {
      value: _vm.control_method,
      callback: function callback($$v) {
        _vm.control_method = $$v;
      },
      expression: "control_method"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.speed_ratio ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.speed_ratio ? _vm.errors.speed_ratio[0] : "Speed Ratio")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter speed ratio"
    },
    model: {
      value: _vm.speed_ratio,
      callback: function callback($$v) {
        _vm.speed_ratio = $$v;
      },
      expression: "speed_ratio"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "tab-pane",
    attrs: {
      id: "clutch-1",
      "aria-labelledby": "clutch",
      role: "tabpanel"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_vm._m(7), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.clutch_type ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.clutch_type ? _vm.errors.clutch_type[0] : "Type")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter Type"
    },
    model: {
      value: _vm.clutch_type,
      callback: function callback($$v) {
        _vm.clutch_type = $$v;
      },
      expression: "clutch_type"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.clutch_diameter ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.clutch_diameter ? _vm.errors.clutch_diameter[0] : "Diameter(mm)")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter Diameter(mm)"
    },
    model: {
      value: _vm.clutch_diameter,
      callback: function callback($$v) {
        _vm.clutch_diameter = $$v;
      },
      expression: "clutch_diameter"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.manipulation_method ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.manipulation_method ? _vm.errors.manipulation_method[0] : "Manipulation Method")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter manipulation method"
    },
    model: {
      value: _vm.manipulation_method,
      callback: function callback($$v) {
        _vm.manipulation_method = $$v;
      },
      expression: "manipulation_method"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "tab-pane",
    attrs: {
      id: "axle-1",
      "aria-labelledby": "axle",
      role: "tabpanel"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_vm._m(8), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.front_axle ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.front_axle ? _vm.errors.front_axle[0] : "Front Axle")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter front axle"
    },
    model: {
      value: _vm.front_axle,
      callback: function callback($$v) {
        _vm.front_axle = $$v;
      },
      expression: "front_axle"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.rear_axle ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.rear_axle ? _vm.errors.rear_axle[0] : "Rear Axle")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter rear axle"
    },
    model: {
      value: _vm.rear_axle,
      callback: function callback($$v) {
        _vm.rear_axle = $$v;
      },
      expression: "rear_axle"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "tab-pane",
    attrs: {
      id: "frame-1",
      "aria-labelledby": "frame",
      role: "tabpanel"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_vm._m(9), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.structure_type ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.structure_type ? _vm.errors.structure_type[0] : "Structure Type")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter structure type"
    },
    model: {
      value: _vm.structure_type,
      callback: function callback($$v) {
        _vm.structure_type = $$v;
      },
      expression: "structure_type"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.standard_sizes ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.standard_sizes ? _vm.errors.standard_sizes[0] : "Standard Sizes")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter standard sizes"
    },
    model: {
      value: _vm.standard_sizes,
      callback: function callback($$v) {
        _vm.standard_sizes = $$v;
      },
      expression: "standard_sizes"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "tab-pane",
    attrs: {
      id: "suspension-1",
      "aria-labelledby": "suspension",
      role: "tabpanel"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_vm._m(10), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.front_suspension_structure ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.front_suspension_structure ? _vm.errors.front_suspension_structure[0] : "Front Suspension Structure")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter front suspension structure"
    },
    model: {
      value: _vm.front_suspension_structure,
      callback: function callback($$v) {
        _vm.front_suspension_structure = $$v;
      },
      expression: "front_suspension_structure"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.rear_suspension_structure ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.rear_suspension_structure ? _vm.errors.rear_suspension_structure[0] : "Rear Suspension Structure")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter rear suspension structure"
    },
    model: {
      value: _vm.rear_suspension_structure,
      callback: function callback($$v) {
        _vm.rear_suspension_structure = $$v;
      },
      expression: "rear_suspension_structure"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "tab-pane",
    attrs: {
      id: "tyres-1",
      "aria-labelledby": "tyres",
      role: "tabpanel"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_vm._m(11), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.tyres_model ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.tyres_model ? _vm.errors.tyres_model[0] : "Model")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter Model"
    },
    model: {
      value: _vm.tyres_model,
      callback: function callback($$v) {
        _vm.tyres_model = $$v;
      },
      expression: "tyres_model"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "tab-pane",
    attrs: {
      id: "braking-1",
      "aria-labelledby": "braking",
      role: "tabpanel"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_vm._m(12), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.braking_type ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.braking_type ? _vm.errors.braking_type[0] : "Braking Type")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter braking type"
    },
    model: {
      value: _vm.braking_type,
      callback: function callback($$v) {
        _vm.braking_type = $$v;
      },
      expression: "braking_type"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.driving_brake ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.driving_brake ? _vm.errors.driving_brake[0] : "Driving Brake")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter driving brake"
    },
    model: {
      value: _vm.driving_brake,
      callback: function callback($$v) {
        _vm.driving_brake = $$v;
      },
      expression: "driving_brake"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.parking_brake ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.parking_brake ? _vm.errors.parking_brake[0] : "Parking Brake")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter parking brake"
    },
    model: {
      value: _vm.parking_brake,
      callback: function callback($$v) {
        _vm.parking_brake = $$v;
      },
      expression: "parking_brake"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.auxiliary_brake ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.auxiliary_brake ? _vm.errors.auxiliary_brake[0] : "Auxiliary Brake")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter auxiliary brake"
    },
    model: {
      value: _vm.auxiliary_brake,
      callback: function callback($$v) {
        _vm.auxiliary_brake = $$v;
      },
      expression: "auxiliary_brake"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "tab-pane",
    attrs: {
      id: "steering-1",
      "aria-labelledby": "steering",
      role: "tabpanel"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_vm._m(13), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.steering_type ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.steering_type ? _vm.errors.steering_type[0] : "Steering Type")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter steering type"
    },
    model: {
      value: _vm.steering_type,
      callback: function callback($$v) {
        _vm.steering_type = $$v;
      },
      expression: "steering_type"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "tab-pane",
    attrs: {
      id: "fuel-1",
      "aria-labelledby": "fuel",
      role: "tabpanel"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_vm._m(14), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.capacity ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.capacity ? _vm.errors.capacity[0] : "Capacity")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter capacity"
    },
    model: {
      value: _vm.capacity,
      callback: function callback($$v) {
        _vm.capacity = $$v;
      },
      expression: "capacity"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.material ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.material ? _vm.errors.material[0] : "Material")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter material"
    },
    model: {
      value: _vm.material,
      callback: function callback($$v) {
        _vm.material = $$v;
      },
      expression: "material"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "tab-pane",
    attrs: {
      id: "cabin-1",
      "aria-labelledby": "cabin",
      role: "tabpanel"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_vm._m(15), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.cabin_type ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.cabin_type ? _vm.errors.cabin_type[0] : "Type")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter Type"
    },
    model: {
      value: _vm.cabin_type,
      callback: function callback($$v) {
        _vm.cabin_type = $$v;
      },
      expression: "cabin_type"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "tab-pane",
    attrs: {
      id: "electrical-1",
      "aria-labelledby": "electrical",
      role: "tabpanel"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_vm._m(16), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.vehicle_voltage ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.vehicle_voltage ? _vm.errors.vehicle_voltage[0] : "Vehicle Voltage")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter vehicle voltage"
    },
    model: {
      value: _vm.vehicle_voltage,
      callback: function callback($$v) {
        _vm.vehicle_voltage = $$v;
      },
      expression: "vehicle_voltage"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("fieldset", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": [_vm.errors.battery ? "danger" : ""],
    domProps: {
      textContent: _vm._s(_vm.errors.battery ? _vm.errors.battery[0] : "Battery")
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Enter battery"
    },
    model: {
      value: _vm.battery,
      callback: function callback($$v) {
        _vm.battery = $$v;
      },
      expression: "battery"
    }
  })], 1)])])]), _vm._v(" "), _c("div", [_vm._v(" ")]), _vm._v(" "), _vm._m(17)])])])])])])])]) : _vm._e();
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-3 col-sm-12"
  }, [_c("ul", {
    staticClass: "nav nav-pills flex-column text-center text-md-left pill-container"
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      id: "home-tab-end",
      "data-toggle": "pill",
      href: "#basic-info-1",
      "aria-controls": "basic-info-1",
      "aria-selected": "true"
    }
  }, [_vm._v("\n                                        Basic Info\n                                    ")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      id: "size",
      "data-toggle": "pill",
      href: "#size-1",
      "aria-controls": "size-1",
      role: "tab",
      "aria-selected": "false"
    }
  }, [_vm._v("\n                                        Size Parameters\n                                    ")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      id: "quality",
      "data-toggle": "pill",
      href: "#quality-1",
      "aria-controls": "quality-1",
      role: "tab",
      "aria-selected": "true"
    }
  }, [_vm._v("\n                                        Quality Parameters\n                                    ")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      id: "performance",
      "data-toggle": "pill",
      href: "#performance-1",
      "aria-controls": "performance-1",
      role: "tab",
      "aria-selected": "true"
    }
  }, [_vm._v("\n                                        Performance Parameters\n                                    ")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      id: "engine",
      "data-toggle": "pill",
      href: "#engine-1",
      "aria-controls": "engine-1",
      role: "tab",
      "aria-selected": "true"
    }
  }, [_vm._v("\n                                        Engine\n                                    ")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      id: "transmission",
      "data-toggle": "pill",
      href: "#transmission-1",
      "aria-controls": "transmission-1",
      role: "tab",
      "aria-selected": "true"
    }
  }, [_vm._v("\n                                        Transmission\n                                    ")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      id: "clutch",
      "data-toggle": "pill",
      href: "#clutch-1",
      "aria-controls": "clutch-1",
      role: "tab",
      "aria-selected": "true"
    }
  }, [_vm._v("\n                                        Clutch\n                                    ")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      id: "axle",
      "data-toggle": "pill",
      href: "#axle-1",
      "aria-controls": "axle-1",
      role: "tab",
      "aria-selected": "true"
    }
  }, [_vm._v("\n                                        Axle\n                                    ")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      id: "frame",
      "data-toggle": "pill",
      href: "#frame-1",
      "aria-controls": "frame-1",
      role: "tab",
      "aria-selected": "true"
    }
  }, [_vm._v("\n                                        Frame\n                                    ")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      id: "suspension",
      "data-toggle": "pill",
      href: "#suspension-1",
      "aria-controls": "suspension-1",
      role: "tab",
      "aria-selected": "true"
    }
  }, [_vm._v("\n                                        Suspension\n                                    ")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      id: "tyres",
      "data-toggle": "pill",
      href: "#tyres-1",
      "aria-controls": "tyres-1",
      role: "tab",
      "aria-selected": "true"
    }
  }, [_vm._v("\n                                        Tyres\n                                    ")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      id: "braking",
      "data-toggle": "pill",
      href: "#braking-1",
      "aria-controls": "braking-1",
      role: "tab",
      "aria-selected": "true"
    }
  }, [_vm._v("\n                                        Braking System\n                                    ")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      id: "steering",
      "data-toggle": "pill",
      href: "#steering-1",
      "aria-controls": "steering-1",
      role: "tab",
      "aria-selected": "true"
    }
  }, [_vm._v("\n                                        Steering Device\n                                    ")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      id: "fuel",
      "data-toggle": "pill",
      href: "#fuel-1",
      "aria-controls": "fuel-1",
      role: "tab",
      "aria-selected": "true"
    }
  }, [_vm._v("\n                                        Fuel Tank\n                                    ")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      id: "cabin",
      "data-toggle": "pill",
      href: "#cabin-1",
      "aria-controls": "cabin-1",
      role: "tab",
      "aria-selected": "true"
    }
  }, [_vm._v("\n                                        Cabin\n                                    ")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      id: "electrical",
      "data-toggle": "pill",
      href: "#electrical-1",
      "aria-controls": "electrical-1",
      role: "tab",
      "aria-selected": "true"
    }
  }, [_vm._v("\n                                        Electrical\n                                    ")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-12"
  }, [_c("strong", [_vm._v("Basic Information")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-12"
  }, [_c("strong", [_vm._v("Size Parameters")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-12"
  }, [_c("strong", [_vm._v("Quality Parameters")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-12"
  }, [_c("strong", [_vm._v("Performance Parameteres")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-12"
  }, [_c("strong", [_vm._v("Engine")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-12"
  }, [_c("strong", [_vm._v("Transmission")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-12"
  }, [_c("strong", [_vm._v("Clutch")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-12"
  }, [_c("strong", [_vm._v("Axle")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-12"
  }, [_c("strong", [_vm._v("Frame")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-12"
  }, [_c("strong", [_vm._v("Suspension")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-12"
  }, [_c("strong", [_vm._v("Tyres")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-12"
  }, [_c("strong", [_vm._v("Braking System")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-12"
  }, [_c("strong", [_vm._v("Steering System")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-12"
  }, [_c("strong", [_vm._v("Fuel Tank")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-12"
  }, [_c("strong", [_vm._v("Cabin")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-12"
  }, [_c("strong", [_vm._v(" Electrical System")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-12"
  }, [_c("button", {
    staticClass: "btn btn-dark glow shadow mr-1 mb-1",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("Submit")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/edit.vue?vue&type=style&index=0&id=8799d5cc&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/edit.vue?vue&type=style&index=0&id=8799d5cc&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.vs-input {\n    width: 100%;\n}\n.vs__clear{\n    display: none;\n}\n.vs__search{\n    height: 30px !important;\n}\n.vs__selected{\n    font-size: 13px !important;\n    background-color: #ecf0f1;\n    border: 1px solid #222;\n    border-radius: 2px;\n    color: #222;\n    line-height: 2px;\n    padding: 5px;\n    border-radius: 5px;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/edit.vue?vue&type=style&index=0&id=8799d5cc&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/edit.vue?vue&type=style&index=0&id=8799d5cc&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_id_8799d5cc_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=style&index=0&id=8799d5cc&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/edit.vue?vue&type=style&index=0&id=8799d5cc&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_id_8799d5cc_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_id_8799d5cc_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/products/edit.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/products/edit.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _edit_vue_vue_type_template_id_8799d5cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=8799d5cc& */ "./resources/js/components/products/edit.vue?vue&type=template&id=8799d5cc&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/js/components/products/edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _edit_vue_vue_type_style_index_0_id_8799d5cc_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.vue?vue&type=style&index=0&id=8799d5cc&lang=css& */ "./resources/js/components/products/edit.vue?vue&type=style&index=0&id=8799d5cc&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_8799d5cc___WEBPACK_IMPORTED_MODULE_0__.render,
  _edit_vue_vue_type_template_id_8799d5cc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/products/edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/products/edit.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/products/edit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/products/edit.vue?vue&type=template&id=8799d5cc&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/products/edit.vue?vue&type=template&id=8799d5cc& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_8799d5cc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_8799d5cc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_8799d5cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=template&id=8799d5cc& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/edit.vue?vue&type=template&id=8799d5cc&");


/***/ }),

/***/ "./resources/js/components/products/edit.vue?vue&type=style&index=0&id=8799d5cc&lang=css&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/products/edit.vue?vue&type=style&index=0&id=8799d5cc&lang=css& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_id_8799d5cc_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=style&index=0&id=8799d5cc&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/edit.vue?vue&type=style&index=0&id=8799d5cc&lang=css&");


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