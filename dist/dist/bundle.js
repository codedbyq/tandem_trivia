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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/tandem_trivia.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Apprentice_TandemFor400_Data.json":
/*!*******************************************!*\
  !*** ./Apprentice_TandemFor400_Data.json ***!
  \*******************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"question\":\"What was Tandem previous name?\",\"incorrect\":[\"Tandem\",\"Burger Shack\",\"Extraordinary Humans\"],\"correct\":\"Devmynd\"},{\"question\":\"In Shakespeare's play Julius Caesar, Caesar's last words were...\",\"incorrect\":[\"Iacta alea est!\",\"Vidi, vini, vici\",\"Aegri somnia vana\"],\"correct\":\"Et tu, Brute?\"},{\"question\":\"A group of tigers are referred to as:\",\"incorrect\":[\"Chowder\",\"Pride\",\"Destruction\"],\"correct\":\"Ambush\"},{\"question\":\"What is the top speed an average cat can travel?\",\"incorrect\":[\"42 mph\",\"13 mph\",\"9 mph\"],\"correct\":\"31 mph\"},{\"question\":\"A cat can jump to _____ times its own height:\",\"incorrect\":[\"3\",\"9\",\"7\"],\"correct\":\"5\"},{\"question\":\"What is the only letter that doesn't appear in a US state name?\",\"incorrect\":[\"M\",\"Z\",\"X\"],\"correct\":\"Q\"},{\"question\":\"What is the name for a cow-bison hybrid?\",\"incorrect\":[\"Cowson\",\"Bicow\",\"Mooson\"],\"correct\":\"Beefalo\"},{\"question\":\"What is the largest freshwater lake in the world?\",\"incorrect\":[\"Lake Baikal\",\"Lake Michigan\",\"Lake Victoria\"],\"correct\":\"Lake Superior\"},{\"question\":\"In a website address bar, what does WWW stand for?\",\"incorrect\":[\"Wild Wild West\",\"War World Web\"],\"correct\":\"World Wide Web\"},{\"question\":\"In a game of bingo, what number is represented by the name two little ducks?\",\"incorrect\":[\"20\",\"55\",\"77\"],\"correct\":\"22\"},{\"question\":\"According to Greek mythology, who was the first woman on Earth?\",\"incorrect\":[\"Lilith\",\"Eve\",\"Hera\"],\"correct\":\"Pandora\"},{\"question\":\"In which European city would you find Orly airport?\",\"incorrect\":[\"London\",\"Belgium\",\"Munich\"],\"correct\":\"Paris\"},{\"question\":\"Where would you find the Sea of Tranquility?\",\"incorrect\":[\"California\",\"Siberia\",\"China\"],\"correct\":\"The Moon\"},{\"question\":\"Which artist painted 'Girl with a Pearl Earrin'?\",\"incorrect\":[\"Van Gogh\",\"Picasso\",\"Da Vinci\"],\"correct\":\"Vermeer\"},{\"question\":\"What is the official name for the 'hashtag' symbol?\",\"incorrect\":[\"Number sign\",\"Hash Sign\",\"Pound\"],\"correct\":\"Octothorpe\"},{\"question\":\"Not American at all, where is apple pie from?\",\"incorrect\":[\"Japan\",\"Ethiopia\",\"Canada\"],\"correct\":\"England\"},{\"question\":\"What is the national animal of Scotland?\",\"incorrect\":[\"Bear\",\"Rabbit\",\"Seal\"],\"correct\":\"Unicorn\"},{\"question\":\"Where in the world is the only place where Canada is *due south*\",\"incorrect\":[\"Alaska\",\"Russia\",\"Washington\"],\"correct\":\"Detroit\"},{\"question\":\"Approximately how many grapes go into a bottle of wine?\",\"incorrect\":[\"500\",\"200\",\"1000\"],\"correct\":\"700\"},{\"question\":\"How much does a US One Dollar Bill cost to make?\",\"incorrect\":[\"$0.25\",\"$1\",\"$5\"],\"correct\":\"$0.05\"},{\"question\":\"The Vatican bank has the only ATM in the world that allows users to do what?\",\"incorrect\":[\"Receive withdrawls in rosary beads\",\"Vote for the Pope\",\"Purchase indulgences\"],\"correct\":\"Perform transactions in Latin\"}]");

/***/ }),

/***/ "./src/tandem_trivia.js":
/*!******************************!*\
  !*** ./src/tandem_trivia.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Apprentice_TandemFor400_Data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Apprentice_TandemFor400_Data.json */ "./Apprentice_TandemFor400_Data.json");
var _Apprentice_TandemFor400_Data_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../Apprentice_TandemFor400_Data.json */ "./Apprentice_TandemFor400_Data.json", 1);

document.addEventListener("DOMContentLoaded", function () {
  console.log('webpack is running');
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map