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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/init.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var config = {\n  type: 'origin',\n  data: {\n    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],\n    datasets: [{\n      label: 'firstLable',\n      data: [-50, 1.5, -30]\n    }\n    /*,{\r\n    label: 'secondLable',\r\n    data:[-20]\r\n    }*/\n    ]\n  },\n  options: {\n    ratio: {},\n    layout: {\n      padding: {\n        top: 40.5,\n        right: 40,\n        bottom: 60.5,\n        left: 65.5\n      }\n    },\n    scales: {\n      xAxes: [{\n        display: true,\n        scaleLabel: {\n          display: true,\n          labelString: 'Month'\n        }\n      }],\n      yAxes: [{\n        display: true,\n        scaleLabel: {\n          display: true,\n          labelString: 'Value'\n        }\n      }]\n    }\n  }\n};\ndocument.addEventListener('DOMContentLoaded', function () {\n  Samples.utils.srand(Date.now());\n\n  var randomScalingFactor = function randomScalingFactor() {\n    return Math.round(Samples.utils.rand(-100, 100));\n  };\n\n  var posDiv = document.getElementById('pos');\n  var canvas = document.getElementById('myChart');\n  var drawWidth = document.getElementById('drawingWidth');\n  var ctx = canvas.getContext('2d');\n  /*\r\n  let guide = new Guide(ctx, canvas);\r\n  guide.setDrawWidthEl(drawWidth);\r\n  guide.setPosEl(posDiv);\r\n  */\n\n  var myChart = new JChart(ctx, config);\n  myChart.setLog(false);\n  var value = myChart.getCurrentOpt();\n  updateEl();\n  window.addEventListener('resize', function () {\n    value = myChart.getCurrentOpt();\n    updateEl();\n  }, false);\n\n  function updateEl() {\n    document.getElementById('chartWidth').innerHTML = 'chartWidth : ' + value.layout.chartWidth;\n    document.getElementById('chartHeight').innerHTML = 'chartHeight : ' + value.layout.chartHeight;\n    document.getElementById('topPadding').innerHTML = 'topPadding : ' + value.layout.padding.top;\n    document.getElementById('bottomPadding').innerHTML = 'bottomPadding : ' + value.layout.padding.bottom;\n    document.getElementById('leftPadding').innerHTML = 'leftPadding : ' + value.layout.padding.left;\n    document.getElementById('rightPadding').innerHTML = 'rightPadding : ' + value.layout.padding.right;\n    document.getElementById('responsive').innerHTML = 'responsive : ' + value.responsive;\n  }\n\n  ;\n  document.getElementById('chartUpdate').addEventListener('click', function () {\n    var dummy = [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()];\n    console.warn('dummy : ' + dummy);\n    config.data.datasets[0].data = dummy;\n    console.log(config);\n    myChart.update();\n  }, false);\n  document.getElementById('changeRatio').addEventListener('click', function () {\n    var ratioX = document.getElementById('ratioX').value || 21;\n    var ratioY = document.getElementById('ratioY').value || 9;\n    config.options.ratio.x = ratioX;\n    config.options.ratio.y = ratioY;\n    myChart.changeRatio();\n    document.getElementsByClassName('currentRatio')[0].innerHTML = ratioX + ' : ' + ratioY;\n  }, false);\n  document.getElementById('showBtn').addEventListener('click', function () {\n    var selected = document.getElementById('areaShow').selectedIndex;\n\n    switch (selected) {\n      case 0:\n        myChart.areaShow().canvasArea();\n        break;\n\n      case 1:\n        myChart.areaShow().chartArea();\n        break;\n\n      case 2:\n        myChart.areaShow().bottomLabel();\n        break;\n\n      case 3:\n        myChart.areaShow().yTickLabel();\n        break;\n    }\n  }, false);\n}, false);\n\n//# sourceURL=webpack:///./src/init.js?");

/***/ })

/******/ });