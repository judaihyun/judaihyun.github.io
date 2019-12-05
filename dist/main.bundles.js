/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/core/draw.js":
/*!**************************!*\
  !*** ./src/core/draw.js ***!
  \**************************/
/*! exports provided: Draw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Draw\", function() { return Draw; });\n/* harmony import */ var _options_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../options/values */ \"./src/options/values.js\");\n/* harmony import */ var _helper_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/index */ \"./src/helper/index.js\");\n\n\n\n\nvar Draw = {\n  drawOptions: function drawOptions() {\n    var ctx = this.getContext();\n    var width = ctx.canvas.width,\n        height = ctx.canvas.height;\n    var leftPadding = _options_values__WEBPACK_IMPORTED_MODULE_0__[\"computedSize\"].options.layout.padding.left,\n        rightPadding = _options_values__WEBPACK_IMPORTED_MODULE_0__[\"computedSize\"].options.layout.padding.right,\n        topPadding = _options_values__WEBPACK_IMPORTED_MODULE_0__[\"computedSize\"].options.layout.padding.top,\n        bottomPadding = _options_values__WEBPACK_IMPORTED_MODULE_0__[\"computedSize\"].options.layout.padding.bottom,\n        chartWidth = _options_values__WEBPACK_IMPORTED_MODULE_0__[\"computedSize\"].options.layout.chartWidth,\n        chartHeight = _options_values__WEBPACK_IMPORTED_MODULE_0__[\"computedSize\"].options.layout.chartHeight;\n    return {\n      width: width,\n      height: height,\n      leftPadding: leftPadding,\n      rightPadding: rightPadding,\n      topPadding: topPadding,\n      bottomPadding: bottomPadding,\n      chartWidth: chartWidth,\n      chartHeight: chartHeight\n    };\n  },\n  yGridWithLabel: function yGridWithLabel(label)\n  /* it depends on labels */\n  {\n    var ctx = this.getContext();\n    var options = this.drawOptions();\n    var labelLength = label.length || 1;\n    var stepx = options.chartWidth / (labelLength - 1);\n    var height = options.chartHeight + options.topPadding;\n    var width = options.chartWidth + options.leftPadding;\n    _options_values__WEBPACK_IMPORTED_MODULE_0__[\"dataPoints\"][0].xPoint.splice(0);\n    ctx.save();\n    ctx.strokeStyle = _options_values__WEBPACK_IMPORTED_MODULE_0__[\"computedSize\"].options.scales.yAxes[0].gridLines.color;\n    ctx.lineWidth = _options_values__WEBPACK_IMPORTED_MODULE_0__[\"computedSize\"].options.scales.yAxes[0].gridLines.lineWidth;\n\n    for (var x = options.leftPadding, yAxes = 0; x <= width; x += stepx, yAxes++) {\n      ctx.beginPath();\n      ctx.moveTo(x, options.topPadding);\n      ctx.lineTo(x, height);\n      _options_values__WEBPACK_IMPORTED_MODULE_0__[\"dataPoints\"][0].xPoint.push(x);\n      this.bottomLabel(label[yAxes], x, options.chartHeight + options.bottomPadding);\n      ctx.stroke();\n    }\n\n    ctx.restore();\n  },\n  bottomLabel: function bottomLabel(string, x, y) {\n    if (!string) return;\n    var ctx = this.getContext();\n    ctx.fillText(string, x, y);\n  },\n  xGridWithLabel: function xGridWithLabel(max, min) {\n    var ctx = this.getContext();\n    var options = this.drawOptions();\n    var nice, niceMax, niceMin, tickStep, yTickNumber;\n\n    if (max !== min) {\n      nice = _helper_index__WEBPACK_IMPORTED_MODULE_1__[\"Helper\"].niceScale(min, max);\n      niceMax = nice.niceMaximum;\n      niceMin = nice.niceMinimum;\n      tickStep = nice.tickSpacing;\n      yTickNumber = (niceMax - niceMin) / tickStep + 1;\n    } else {\n      tickStep = 0.2;\n      niceMax = max + tickStep * 5;\n      niceMin = max - tickStep * 5;\n      yTickNumber = 11;\n    }\n\n    var stepy = Math.ceil(options.chartHeight / yTickNumber);\n    var yTick = niceMax;\n    var height = options.chartHeight + options.topPadding;\n    var width = options.chartWidth + options.leftPadding;\n    _options_values__WEBPACK_IMPORTED_MODULE_0__[\"dataPoints\"].tickNumber = yTickNumber;\n    _options_values__WEBPACK_IMPORTED_MODULE_0__[\"dataPoints\"].niceMax = niceMax;\n    _options_values__WEBPACK_IMPORTED_MODULE_0__[\"dataPoints\"].niceMin = niceMin;\n    _options_values__WEBPACK_IMPORTED_MODULE_0__[\"dataPoints\"].tickStep = tickStep;\n    _options_values__WEBPACK_IMPORTED_MODULE_0__[\"dataPoints\"].stepy = stepy;\n    Object(_helper_index__WEBPACK_IMPORTED_MODULE_1__[\"debugConsole\"])('-----------');\n    Object(_helper_index__WEBPACK_IMPORTED_MODULE_1__[\"debugConsole\"])('tickStep: ' + tickStep);\n    Object(_helper_index__WEBPACK_IMPORTED_MODULE_1__[\"debugConsole\"])('niceMax : ' + niceMax);\n    Object(_helper_index__WEBPACK_IMPORTED_MODULE_1__[\"debugConsole\"])('niceMin : ' + niceMin);\n    Object(_helper_index__WEBPACK_IMPORTED_MODULE_1__[\"debugConsole\"])('yTickNumber : ' + yTickNumber);\n    Object(_helper_index__WEBPACK_IMPORTED_MODULE_1__[\"debugConsole\"])('stepy : ' + stepy);\n    Object(_helper_index__WEBPACK_IMPORTED_MODULE_1__[\"debugConsole\"])('tickStep : ' + tickStep);\n    Object(_helper_index__WEBPACK_IMPORTED_MODULE_1__[\"debugConsole\"])('-----------');\n    ctx.save();\n    ctx.strokeStyle = _options_values__WEBPACK_IMPORTED_MODULE_0__[\"computedSize\"].options.scales.xAxes[0].gridLines.color;\n    var lineWidth = _options_values__WEBPACK_IMPORTED_MODULE_0__[\"computedSize\"].options.scales.xAxes[0].gridLines.lineWidth;\n\n    for (var y = options.topPadding; y < height; y += stepy) {\n      ctx.beginPath();\n      ctx.lineWidth = lineWidth;\n\n      if (yTick === 0) {\n        ctx.lineWidth = lineWidth * 2;\n      }\n\n      this.yTickLabel(yTick, options.leftPadding - 20, y);\n      ctx.moveTo(options.leftPadding - 10, y);\n      ctx.lineTo(width, y);\n      yTick -= tickStep;\n      ctx.stroke();\n      _options_values__WEBPACK_IMPORTED_MODULE_0__[\"dataPoints\"].tickHeight = y;\n    }\n\n    ctx.restore();\n  },\n  yTickLabel: function yTickLabel(tick, x, y) {\n    var ctx = this.getContext();\n    var yTick = tick.toFixed(1);\n    ctx.fillText(yTick, x, y);\n  },\n  drawGrid: function drawGrid(data) {\n    var ctx = this.getContext();\n    var fontSize = _options_values__WEBPACK_IMPORTED_MODULE_0__[\"globalDefaults\"].defaultFontSize,\n        fontStyle = fontSize + 'px ' + 'Arial';\n    ctx.font = fontStyle, ctx.textAlign = 'center', ctx.textBaseline = 'middle';\n    var label = data.labels;\n    this.yGridWithLabel(label);\n    var dataValue = data.datasets[0].data;\n    var maxValue = Math.max.apply(null, dataValue);\n    var minValue = Math.min.apply(null, dataValue);\n    this.xGridWithLabel(maxValue, minValue);\n  },\n  axisTitles: function axisTitles(scales, axesType) {\n    var labelString,\n        width,\n        height,\n        fontSize = _options_values__WEBPACK_IMPORTED_MODULE_0__[\"globalDefaults\"].defaultFontSize,\n        fontStyle = fontSize + 'px ' + 'Arial';\n    var ctx = this.getContext();\n    ctx.save();\n    ctx.fillStyle = _options_values__WEBPACK_IMPORTED_MODULE_0__[\"globalDefaults\"].defaultFontColor;\n    ctx.lineWidth = 1;\n    ctx.font = fontStyle;\n    ctx.textAlign = 'center';\n    ctx.textBaseline = 'middle';\n\n    if (axesType === 'xAxes') // bottom legend lable\n      {\n        labelString = scales[0].scaleLabel.labelString;\n        width = ctx.canvas.width / 2;\n        ctx.fillText(labelString, width, _options_values__WEBPACK_IMPORTED_MODULE_0__[\"computedSize\"].options.layout.bottomLable.height + fontSize + 1);\n      } else if (axesType === 'yAxes') {\n      // left legend lable\n      labelString = scales[0].scaleLabel.labelString;\n      width = ctx.canvas.width;\n      height = ctx.canvas.height / 2;\n      ctx.translate(25, height);\n      ctx.rotate(Math.PI * 1.5);\n      ctx.fillText(labelString, 0, 0);\n    }\n\n    ctx.restore();\n  },\n  linePoint: function linePoint(data, xPoint) {\n    var ctx = this.getContext();\n    var options = this.drawOptions();\n    var niceMax = _options_values__WEBPACK_IMPORTED_MODULE_0__[\"dataPoints\"].niceMax;\n    var tickStep = _options_values__WEBPACK_IMPORTED_MODULE_0__[\"dataPoints\"].tickStep;\n    var height = _options_values__WEBPACK_IMPORTED_MODULE_0__[\"dataPoints\"].tickHeight - options.topPadding;\n    var stepy = _options_values__WEBPACK_IMPORTED_MODULE_0__[\"dataPoints\"].stepy;\n    Object(_helper_index__WEBPACK_IMPORTED_MODULE_1__[\"debugConsole\"])('Draw.point()');\n    Object(_helper_index__WEBPACK_IMPORTED_MODULE_1__[\"debugConsole\"])('height : ' + height);\n    Object(_helper_index__WEBPACK_IMPORTED_MODULE_1__[\"debugConsole\"])('stepy : ' + stepy);\n    data.forEach(function (i, index) {\n      // data\n      var data = i;\n      var y;\n\n      if (data === 0) {\n        y = niceMax / tickStep * stepy;\n      } else if (data < 0) {\n        data *= -1;\n        y = stepy / tickStep * data + niceMax / tickStep * stepy;\n      } else if (data > 0) {\n        y = stepy / tickStep * niceMax - stepy / tickStep * data;\n      }\n\n      var x = xPoint[index];\n      _options_values__WEBPACK_IMPORTED_MODULE_0__[\"dataPoints\"][0].yPoint.push(y + options.topPadding);\n      ctx.save();\n      ctx.beginPath();\n      ctx.fillStyle = _options_values__WEBPACK_IMPORTED_MODULE_0__[\"globalDefaults\"].dataPointColor;\n      ctx.arc(x, y + options.topPadding, 3, 0, Math.PI * 2);\n      ctx.fill();\n      ctx.restore();\n    });\n  },\n  lineCurve: function lineCurve() {\n    var ctx = this.getContext();\n    ctx.save();\n    ctx.beginPath();\n    var length = _options_values__WEBPACK_IMPORTED_MODULE_0__[\"dataPoints\"][0].xPoint.length;\n    var xPoint = _options_values__WEBPACK_IMPORTED_MODULE_0__[\"dataPoints\"][0].xPoint;\n    var yPoint = _options_values__WEBPACK_IMPORTED_MODULE_0__[\"dataPoints\"][0].yPoint;\n    Object(_helper_index__WEBPACK_IMPORTED_MODULE_1__[\"debugConsole\"])(_options_values__WEBPACK_IMPORTED_MODULE_0__[\"dataPoints\"][0].yPoint);\n    ctx.moveTo(xPoint[0], yPoint[0]);\n    ctx.strokeStyle = _options_values__WEBPACK_IMPORTED_MODULE_0__[\"globalDefaults\"].curveLineColor;\n    ctx.lineWidth = 2;\n\n    for (var i = 0; i < length; i++) {\n      Object(_helper_index__WEBPACK_IMPORTED_MODULE_1__[\"debugConsole\"])('x : ' + xPoint[i]);\n      Object(_helper_index__WEBPACK_IMPORTED_MODULE_1__[\"debugConsole\"])('y : ' + yPoint[i]);\n      ctx.lineTo(xPoint[i], yPoint[i]);\n      ctx.stroke();\n    }\n\n    _options_values__WEBPACK_IMPORTED_MODULE_0__[\"dataPoints\"][0].yPoint.splice(0);\n    ctx.restore();\n  },\n  baseCanvas: function baseCanvas() {\n    Draw.setContext(this.ctx);\n    var opts = this.config.options;\n    var data = this.config.data;\n    Draw.drawGrid(data);\n\n    for (var i = 0; i < data.datasets.length; i++) {\n      Draw.linePoint(data.datasets[i].data, _options_values__WEBPACK_IMPORTED_MODULE_0__[\"dataPoints\"][0].xPoint);\n    }\n    /*\r\n    data.datasets.forEach(function(i, index){\r\n        this.linePoint(i.data, dataPoints[0].xPoint);\r\n    });\r\n    */\n\n\n    Draw.lineCurve();\n\n    for (var axes in opts.scales) {\n      if (opts.scales[axes][0].display) {\n        Draw.axisTitles(opts.scales[axes], axes);\n      }\n    }\n  },\n  getContext: function getContext() {\n    return this.ctx;\n  },\n  setContext: function setContext(_ctx) {\n    this.ctx = _ctx;\n  }\n};\n\n//# sourceURL=webpack:///./src/core/draw.js?");

/***/ }),

/***/ "./src/core/engine.js":
/*!****************************!*\
  !*** ./src/core/engine.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _options_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../options/values */ \"./src/options/values.js\");\n/* harmony import */ var _helper_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/index */ \"./src/helper/index.js\");\n/* harmony import */ var _draw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./draw */ \"./src/core/draw.js\");\n\n\n\n'use strict';\n\nvar JChart = function JChart(ctx, config) {\n  if (!(this instanceof JChart)) {\n    return new JChart(ctx, config);\n  }\n\n  this.initialize(ctx, config);\n\n  this.update = function () {\n    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);\n    _draw__WEBPACK_IMPORTED_MODULE_2__[\"Draw\"].baseCanvas.call(this);\n  };\n\n  this.changeRatio = function () {\n    _helper_index__WEBPACK_IMPORTED_MODULE_1__[\"Helper\"].computeSize(this.ctx);\n    this.baseDrawing();\n  };\n\n  this.getCurrentOpt = function () {\n    return _options_values__WEBPACK_IMPORTED_MODULE_0__[\"computedSize\"].options;\n  };\n\n  this.setLog = function (value) {\n    if (_helper_index__WEBPACK_IMPORTED_MODULE_1__[\"Helper\"].isExist(value)) {\n      DEBUG_MODE = value;\n    }\n  };\n\n  this.areaShow = function () {\n    return _helper_index__WEBPACK_IMPORTED_MODULE_1__[\"Helper\"].drawingRect(ctx);\n  };\n\n  return this;\n};\n\nJChart.computedSize = {};\n\nJChart.prototype.initialize = function (ctx, config) {\n  this.ctx = _helper_index__WEBPACK_IMPORTED_MODULE_1__[\"Helper\"].contextValidator(ctx, config);\n  if (this.ctx < 0) return -1;\n  this.config = _helper_index__WEBPACK_IMPORTED_MODULE_1__[\"Helper\"].mergeConfig(config);\n  _draw__WEBPACK_IMPORTED_MODULE_2__[\"Draw\"].setContext(ctx);\n  this.bindEvent();\n  this.baseDrawing();\n};\n\nJChart.prototype.bindEvent = function () {\n  var responsive = this.config.options.responsive || false;\n\n  if (responsive) {\n    this.bindResizeEvent();\n  }\n};\n\nJChart.prototype.baseDrawing = function () {\n  _helper_index__WEBPACK_IMPORTED_MODULE_1__[\"Helper\"].ratioCalculator(this.ctx);\n  _helper_index__WEBPACK_IMPORTED_MODULE_1__[\"Helper\"].computeSize(this.ctx);\n  _draw__WEBPACK_IMPORTED_MODULE_2__[\"Draw\"].baseCanvas.call(this);\n};\n\nJChart.prototype.bindResizeEvent = function () {\n  console.warn('responsive mode : on');\n  window.addEventListener('resize', function () {\n    this.resizingCanvas();\n  }.bind(this));\n};\n\nJChart.prototype.resizingCanvas = function () {\n  _helper_index__WEBPACK_IMPORTED_MODULE_1__[\"Helper\"].ratioCalculator(this.ctx);\n  Object(_helper_index__WEBPACK_IMPORTED_MODULE_1__[\"debugConsole\"])(\"resize width=\".concat(this.ctx.canvas.width, \" height=\").concat(this.ctx.canvas.height));\n  _helper_index__WEBPACK_IMPORTED_MODULE_1__[\"Helper\"].computeSize(this.ctx);\n  _draw__WEBPACK_IMPORTED_MODULE_2__[\"Draw\"].baseCanvas.call(this);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (JChart);\n\n//# sourceURL=webpack:///./src/core/engine.js?");

/***/ }),

/***/ "./src/helper/index.js":
/*!*****************************!*\
  !*** ./src/helper/index.js ***!
  \*****************************/
/*! exports provided: debugConsole, Helper, DEBUG_MODE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"debugConsole\", function() { return debugConsole; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Helper\", function() { return Helper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DEBUG_MODE\", function() { return DEBUG_MODE; });\n/* harmony import */ var _scale_calculate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scale.calculate */ \"./src/helper/scale.calculate.js\");\n/* harmony import */ var _size_calculate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./size.calculate */ \"./src/helper/size.calculate.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/helper/utils.js\");\n/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./merge */ \"./src/helper/merge.js\");\n\n\n\n\n'use strict';\n\nvar DEBUG_MODE = false;\n\nfunction debugConsole(str) {\n  if (typeof DEBUG_MODE !== 'undefined' && DEBUG_MODE) console.log(str);\n}\n\nvar Helper = {};\nHelper.niceScale = _scale_calculate__WEBPACK_IMPORTED_MODULE_0__[\"niceScale\"];\nHelper.ratioCalculator = _size_calculate__WEBPACK_IMPORTED_MODULE_1__[\"ratioCalculator\"];\nHelper.contextValidator = _utils__WEBPACK_IMPORTED_MODULE_2__[\"contextValidator\"];\nHelper.isExist = _utils__WEBPACK_IMPORTED_MODULE_2__[\"isExist\"];\nHelper.drawingRect = _utils__WEBPACK_IMPORTED_MODULE_2__[\"drawingRect\"];\nHelper.mergeConfig = _merge__WEBPACK_IMPORTED_MODULE_3__[\"mergeConfig\"];\nHelper.computeSize = _size_calculate__WEBPACK_IMPORTED_MODULE_1__[\"computeSize\"];\n\n\n//# sourceURL=webpack:///./src/helper/index.js?");

/***/ }),

/***/ "./src/helper/merge.js":
/*!*****************************!*\
  !*** ./src/helper/merge.js ***!
  \*****************************/
/*! exports provided: mergeConfig, appendConfig, objIterator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mergeConfig\", function() { return mergeConfig; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendConfig\", function() { return appendConfig; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"objIterator\", function() { return objIterator; });\n/* harmony import */ var _options_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../options/values */ \"./src/options/values.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\n'use strict';\n\nfunction mergeConfig(config) {\n  var data = config.data = config.data || {};\n  data.labels = data.labels || [];\n  data.datasets = data.datasets || [];\n  config.options = config.options || _options_values__WEBPACK_IMPORTED_MODULE_0__[\"defaultConfig\"].options;\n  config.options = appendConfig({}, _options_values__WEBPACK_IMPORTED_MODULE_0__[\"defaultConfig\"].options, config.options);\n\n  _options_values__WEBPACK_IMPORTED_MODULE_0__[\"computedSize\"]._set(config.options);\n\n  console.log(_options_values__WEBPACK_IMPORTED_MODULE_0__[\"computedSize\"]);\n  return config;\n}\n/**\r\n* https://stackoverflow.com/a/20591261/9373458\r\n* merge two objects.\r\n* usage :  extend(target, obj1, obj2)\r\n* @param target\r\n* @param default\r\n* @param source \r\n*/\n\n\nfunction appendConfig(target) {\n  for (var i = 1; i < arguments.length; ++i) {\n    var from = arguments[i];\n    if (_typeof(from) !== 'object') continue;\n\n    for (var j in from) {\n      if (Object.prototype.hasOwnProperty.call(from, j)) {\n        target[j] = _typeof(from[j]) === 'object' ? appendConfig({}, target[j], from[j]) : from[j];\n      }\n    }\n  }\n\n  return target;\n}\n/**\r\n *  \r\n */\n\n\nfunction objIterator(target) {\n  for (var prop in target) {\n    if (Object.prototype.hasOwnProperty.call(target, prop)) {\n      if (_typeof(target[prop]) === 'object' && !Array.isArray(target[prop])) {\n        console.log('[object] ' + prop);\n        objIterator(target[prop]);\n      } else if (Array.isArray(target[prop])) {\n        console.log('[array] ' + prop);\n        var temp = target[prop];\n\n        for (var i = 0; i < temp.length; ++i) {\n          if (_typeof(temp[i]) === 'object' && !Array.isArray(temp[i])) {\n            objIterator(temp[i]);\n          } else {\n            console.log('[' + i + '] ' + temp[i]);\n          }\n        }\n      } else if (typeof target[prop] === 'string') {\n        console.log('[string] ' + prop + ' ' + target[prop]);\n      } else if (typeof target[prop] === 'boolean') {\n        console.log('[boolean] ' + prop + ' ' + target[prop]);\n      }\n    }\n  }\n}\n\n\n\n//# sourceURL=webpack:///./src/helper/merge.js?");

/***/ }),

/***/ "./src/helper/scale.calculate.js":
/*!***************************************!*\
  !*** ./src/helper/scale.calculate.js ***!
  \***************************************/
/*! exports provided: niceScale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"niceScale\", function() { return niceScale; });\n/* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/log10 */\nMath.log10 = Math.log10 || function (x) {\n  return Math.log(x) * Math.LOG10E;\n};\n\nfunction niceScale(min, max) {\n  /*\r\n      to get a 'nice number' algorithm. detail below \r\n  https://stackoverflow.com/questions/8506881/nice-label-algorithm-for-charts-with-minimum-ticks\r\n  */\n  var minPoint = min;\n  var maxPoint = max;\n  var maxTicks = 11;\n  var tickSpacing;\n  var range;\n  var niceMin;\n  var niceMax;\n  scaleCalculator();\n  return {\n    tickSpacing: tickSpacing,\n    niceMinimum: niceMin,\n    niceMaximum: niceMax\n  };\n\n  function scaleCalculator() {\n    range = niceNum(maxPoint - minPoint, false);\n    tickSpacing = niceNum(range / (maxTicks - 1), true);\n    niceMin = Math.floor(minPoint / tickSpacing) * tickSpacing;\n    niceMax = Math.ceil(maxPoint / tickSpacing) * tickSpacing;\n  }\n}\n\nfunction niceNum(localRange, round) {\n  var exponent;\n  /** exponent of localRange */\n\n  var fraction;\n  /** fractional part of localRange */\n\n  var niceFraction;\n  /** nice, rounded fraction */\n\n  exponent = Math.floor(Math.log10(localRange));\n  fraction = localRange / Math.pow(10, exponent);\n\n  if (round) {\n    if (fraction < 1.5) niceFraction = 1;else if (fraction < 3) niceFraction = 2;else if (fraction < 7) niceFraction = 5;else niceFraction = 10;\n  } else {\n    if (fraction <= 1) niceFraction = 1;else if (fraction <= 2) niceFraction = 2;else if (fraction <= 5) niceFraction = 5;else niceFraction = 10;\n  }\n\n  return niceFraction * Math.pow(10, exponent);\n}\n/*\r\n//   https://github.com/chartjs/Chart.js/blob/master/src/helpers/helpers.math.js  \r\nexport const log10 = Math.log10 || function(x) {\r\n\tvar exponent = Math.log(x) * Math.LOG10E; // Math.LOG10E = 1 / Math.LN10.\r\n\t// Check for whole powers of 10,\r\n\t// which due to floating point rounding error should be corrected.\r\n\tvar powerOf10 = Math.round(exponent);\r\n\tvar isPowerOf10 = x === Math.pow(10, powerOf10);\r\n\r\n\treturn isPowerOf10 ? powerOf10 : exponent;\r\n};\r\n*/\n\n//# sourceURL=webpack:///./src/helper/scale.calculate.js?");

/***/ }),

/***/ "./src/helper/size.calculate.js":
/*!**************************************!*\
  !*** ./src/helper/size.calculate.js ***!
  \**************************************/
/*! exports provided: ratioCalculator, computeSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ratioCalculator\", function() { return ratioCalculator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"computeSize\", function() { return computeSize; });\n/* harmony import */ var _options_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../options/values */ \"./src/options/values.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/helper/index.js\");\n\n\n\nfunction computeSize(ctx) {\n  if (_options_values__WEBPACK_IMPORTED_MODULE_0__[\"computedSize\"].options.layout.padding) {\n    _options_values__WEBPACK_IMPORTED_MODULE_0__[\"computedSize\"].options.layout.chartWidth = ctx.canvas.width - (_options_values__WEBPACK_IMPORTED_MODULE_0__[\"computedSize\"].options.layout.padding.left + _options_values__WEBPACK_IMPORTED_MODULE_0__[\"computedSize\"].options.layout.padding.right);\n    _options_values__WEBPACK_IMPORTED_MODULE_0__[\"computedSize\"].options.layout.chartHeight = ctx.canvas.height - (_options_values__WEBPACK_IMPORTED_MODULE_0__[\"computedSize\"].options.layout.padding.top + _options_values__WEBPACK_IMPORTED_MODULE_0__[\"computedSize\"].options.layout.padding.bottom);\n    _options_values__WEBPACK_IMPORTED_MODULE_0__[\"computedSize\"].options.layout.bottomLable = {\n      width: _options_values__WEBPACK_IMPORTED_MODULE_0__[\"computedSize\"].options.layout.chartWidth + _options_values__WEBPACK_IMPORTED_MODULE_0__[\"computedSize\"].options.layout.padding.left,\n      // + computedSize.options.layout.padding.right,\n      height: _options_values__WEBPACK_IMPORTED_MODULE_0__[\"computedSize\"].options.layout.padding.bottom + _options_values__WEBPACK_IMPORTED_MODULE_0__[\"computedSize\"].options.layout.chartHeight\n    };\n  } else {\n    console.error('computedSize.layout.padding is not defined');\n  }\n}\n\nfunction ratioCalculator(ctx)\n/* FIXME : 초기 구동 시 여러번 \r\nchangeRatio () 호출 시마다 계속적으로 계산함.. (소수점단위??) */\n{\n  var obj = {};\n  var diagonal = 0;\n  var parentNode = ctx.canvas.parentNode;\n  var parentWidth = parentNode.clientWidth;\n  var parentHeight = parentNode.clientHeight;\n  console.log(\"parent width=\".concat(parentWidth, \" height=\").concat(parentHeight));\n  var x = _options_values__WEBPACK_IMPORTED_MODULE_0__[\"computedSize\"].options.ratio.x;\n  var y = _options_values__WEBPACK_IMPORTED_MODULE_0__[\"computedSize\"].options.ratio.y;\n  Object(_index__WEBPACK_IMPORTED_MODULE_1__[\"debugConsole\"])(\"RATIO = \".concat(x, \":\").concat(y));\n  var w = parentWidth;\n  var h = parentHeight;\n  diagonal = Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2));\n  Object(_index__WEBPACK_IMPORTED_MODULE_1__[\"debugConsole\"])(\"diagonal=\".concat(diagonal));\n  obj.width = Math.floor(diagonal * x / Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)));\n  obj.height = Math.floor(diagonal * y / Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)));\n  console.log(\"ratio width=\".concat(obj.width, \",height=\").concat(obj.height));\n  ctx.canvas.width = obj.width;\n  ctx.canvas.height = obj.height;\n  return obj;\n}\n\n\n\n//# sourceURL=webpack:///./src/helper/size.calculate.js?");

/***/ }),

/***/ "./src/helper/utils.js":
/*!*****************************!*\
  !*** ./src/helper/utils.js ***!
  \*****************************/
/*! exports provided: isExist, contextValidator, drawingRect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isExist\", function() { return isExist; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contextValidator\", function() { return contextValidator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawingRect\", function() { return drawingRect; });\n/* harmony import */ var _options_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../options/values */ \"./src/options/values.js\");\n/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./merge */ \"./src/helper/merge.js\");\n\n\n\nfunction isExist(value) {\n  if (!value) return false;\n  return true;\n}\n\nfunction contextValidator(ctx, config) {\n  if (!this.isExist(ctx)) {\n    console.error('ctx undefined');\n    return -1;\n  }\n\n  if (!this.isExist(config)) {\n    console.error('config undefined');\n    return -1;\n  } // TODO validate config{}\n\n\n  Object(_merge__WEBPACK_IMPORTED_MODULE_1__[\"objIterator\"])(config);\n  return ctx;\n}\n\nfunction drawingRect(ctx) // for debug\n{\n  return {\n    canvasArea: function canvasArea() {\n      ctx.save();\n      ctx.strokeStyle = 'black';\n      ctx.lineWidth = 5;\n      ctx.strokeRect(0, 0, ctx.canvas.width, ctx.canvas.height);\n      ctx.restore();\n    },\n    chartArea: function chartArea() {\n      ctx.save();\n      ctx.strokeStyle = 'red';\n      ctx.lineWidth = 3;\n      ctx.strokeRect(_options_values__WEBPACK_IMPORTED_MODULE_0__[\"computedSize\"].layout.padding.left, _options_values__WEBPACK_IMPORTED_MODULE_0__[\"computedSize\"].layout.padding.top, _options_values__WEBPACK_IMPORTED_MODULE_0__[\"computedSize\"].layout.chartWidth, _options_values__WEBPACK_IMPORTED_MODULE_0__[\"computedSize\"].layout.chartHeight);\n      ctx.restore();\n    },\n    yTickLabel: function yTickLabel() {\n      ctx.save();\n      ctx.strokeStyle = 'green';\n      ctx.lineWidth = 3;\n      ctx.strokeRect(30, 30, 30, _options_values__WEBPACK_IMPORTED_MODULE_0__[\"computedSize\"].layout.chartHeight);\n      ctx.restore();\n    },\n    bottomLabel: function bottomLabel() {\n      ctx.save();\n      ctx.strokeStyle = 'blue';\n      ctx.lineWidth = 3;\n      ctx.strokeRect(0, _options_values__WEBPACK_IMPORTED_MODULE_0__[\"computedSize\"].layout.padding.top + _options_values__WEBPACK_IMPORTED_MODULE_0__[\"computedSize\"].layout.chartHeight, _options_values__WEBPACK_IMPORTED_MODULE_0__[\"computedSize\"].layout.bottomLable.width, _options_values__WEBPACK_IMPORTED_MODULE_0__[\"computedSize\"].layout.bottomLable.height);\n      ctx.restore();\n    }\n  };\n}\n\n\n\n//# sourceURL=webpack:///./src/helper/utils.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/engine */ \"./src/core/engine.js\");\n\n\nif (typeof window !== 'undefined') {\n  window.JChart = _core_engine__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n}\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/options/values.js":
/*!*******************************!*\
  !*** ./src/options/values.js ***!
  \*******************************/
/*! exports provided: computedSize, dataPoints, globalDefaults, defaultConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"computedSize\", function() { return computedSize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dataPoints\", function() { return dataPoints; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"globalDefaults\", function() { return globalDefaults; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defaultConfig\", function() { return defaultConfig; });\nvar dataPoints = [{\n  xPoint: [],\n  yPoint: []\n}]; // usage :  extend(target, obj1, obj2)\n\n/* 실제 반영 할 options ( layout-padding.., scales) */\n\nvar computedSize = {\n  _set: function _set(values) {\n    this.options = values;\n  }\n};\nvar globalDefaults = {\n  defaultColor: 'rgba(0,0,0,0.1)',\n  defaultFontColor: '#666',\n  defaultFontFamily: \"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif\",\n  defaultFontSize: 12,\n  defaultFontStyle: 'normal',\n  defaultLineHeight: 1.2,\n  titleFontStyle: 'bold',\n  titleSpacing: 2,\n  titleMarginBottom: 6,\n  titleFontColor: '#fff',\n  titleAlign: 'left',\n  gridLineColor: 'rgba(0,0,0,1)',\n  gridLineWidth: 0.5,\n  curveLineColor: 'green',\n  dataPointColor: 'blue'\n};\n/* JChart 생성시 config가 비어있을 경우 이 defaultConfig 값을 사용 */\n\nvar defaultConfig = {\n  options: {\n    responsive: true,\n    ratio: {\n      x: 21,\n      y: 9\n    },\n    layout: {\n      padding: {\n        top: 40.5,\n        right: 40,\n        bottom: 60.5,\n        left: 65.5\n      }\n    },\n    scales: {\n      yAxes: [{\n        display: true,\n        scaleLabel: {\n          display: true\n        },\n        gridLines: {\n          color: globalDefaults.gridlineColor,\n          lineWidth: globalDefaults.gridLineWidth\n        }\n      }],\n      xAxes: [{\n        display: true,\n        scaleLabel: {\n          display: true\n        },\n        gridLines: {\n          color: globalDefaults.gridlineColor,\n          lineWidth: globalDefaults.gridLineWidth\n        }\n      }]\n    }\n  }\n  /*  incomplete\r\n  elements:{},\r\n  events: [\r\n      'mousemove',\r\n      'mouseout',\r\n      'click',\r\n      'touchstart',\r\n      'touchmove'\r\n  ],\r\n  hover: { \r\n      onHover: null,\r\n      mode: 'nearest',\r\n      intersect: true,\r\n      animationDuration: 400\r\n  },\r\n  \r\n  onClick: null,\r\n  maintainAspectRatio: true,\r\n  responsiveAnimationDuration: 0\r\n  */\n\n};\nObject.freeze(defaultConfig);\n\n\n//# sourceURL=webpack:///./src/options/values.js?");

/***/ })

/******/ });