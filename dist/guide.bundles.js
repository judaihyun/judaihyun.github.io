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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/canvasGuideForDevelop.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/canvasGuideForDevelop.js":
/*!**************************************!*\
  !*** ./src/canvasGuideForDevelop.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var Guide = Guide || {};\n\nGuide = function Guide(ctx, canvas) {\n  var me = this;\n  var drawingSurfaceImageData, posEl, drawWidthEl;\n  ctx, canvas, mousePos = {}, dragging = false;\n\n  function saveDrawingSurface() {\n    drawingSurfaceImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);\n  }\n\n  function restoreDrawingSurface() {\n    ctx.putImageData(drawingSurfaceImageData, 0, 0);\n  }\n\n  function windowToCanvas(x, y) {\n    var bbox = canvas.getBoundingClientRect();\n    return {\n      x: Math.floor(x - bbox.left),\n      y: y - bbox.top * (canvas.height / bbox.height)\n    };\n  }\n\n  function setDrawWidthEl(drawWidth) {\n    me.drawWidthEl = drawWidth;\n  }\n\n  function setPosEl(pos) {\n    me.posEl = pos;\n  }\n\n  function drawVerticalLine(x) {\n    ctx.beginPath();\n    ctx.moveTo(x + 0.5, 0);\n    ctx.lineTo(x + 0.5, ctx.canvas.height);\n    ctx.stroke();\n  }\n\n  function drawHorizontalLine(y) {\n    ctx.beginPath();\n    ctx.moveTo(0, y + 0.5);\n    ctx.lineTo(ctx.canvas.width, y + 0.5);\n    ctx.stroke();\n  }\n\n  canvas.addEventListener('mousedown', function (e) {\n    var inLoc = windowToCanvas(e.clientX, e.clientY);\n    saveDrawingSurface();\n\n    if (e.ctrlKey) {\n      mousePos.x = inLoc.x;\n      mousePos.y = inLoc.y;\n      dragging = true;\n    }\n\n    ctx.strokeStyle = 'red';\n    drawVerticalLine(inLoc.x);\n    drawHorizontalLine(inLoc.y);\n    ctx.restore();\n    me.posEl.innerText = '[' + e.clientX + '] , [' + e.clientY + ']';\n  }, false);\n  canvas.addEventListener('mousemove', function (e) {\n    if (dragging) {\n      restoreDrawingSurface();\n      loc = windowToCanvas(e.clientX, e.clientY);\n      ctx.save();\n      ctx.strokeStyle = 'green';\n      ctx.lineWidth = 2;\n      ctx.beginPath();\n      ctx.moveTo(loc.x, loc.y);\n      ctx.lineTo(mousePos.x, mousePos.y);\n      ctx.stroke();\n      ctx.restore();\n      me.posEl.innerText = loc.x + ',' + loc.y;\n      var string = 'lineLength : ';\n      me.drawWidthEl.innerText = string + 'x(' + (loc.x - mousePos.x) + '), y(' + (loc.y - mousePos.y) + ')';\n    }\n  }, false);\n  canvas.addEventListener('mouseup', function (e) {\n    restoreDrawingSurface();\n    dragging = false;\n  }, false);\n  /*\r\n  return{\r\n      setDrawWidthEl, setPosEl\r\n  }\r\n  */\n};\n\n//# sourceURL=webpack:///./src/canvasGuideForDevelop.js?");

/***/ })

/******/ });