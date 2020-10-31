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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question */ "./src/question.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Game = /*#__PURE__*/function () {
  function Game(questionList) {
    _classCallCheck(this, Game);

    this.questionList = questionList;
    this.questions = [];
    this.generateQuestions();
    this.round = 0;
    this.score = 0;
    this.multiplier = 1;
    this.currentQuestion = this.questions[this.round];
  } // generate 10 instances of the Question class with a random question for each


  _createClass(Game, [{
    key: "generateQuestions",
    value: function generateQuestions() {
      var randoms = this.randomQuestions();

      for (var i = 0; i < randoms.length; i++) {
        var question = new _question__WEBPACK_IMPORTED_MODULE_0__["default"](randoms[i]);
        this.questions.push(question);
      }
    }
  }, {
    key: "randomQuestions",
    // return an array of 10 random questions
    value: function randomQuestions() {
      var questions = [];

      while (questions.length < 10) {
        var idx = Math.floor(Math.random() * this.questionList.length);
        var question = this.questionList[idx];

        if (!questions.includes(question)) {
          questions.push(question);
        }
      }

      return questions;
    }
  }, {
    key: "renderScore",
    // display the user's score
    value: function renderScore() {
      var score = document.getElementById('score');
      score.innerHTML = "".concat(this.score);
    } // game is over once all 10 questions have been answered

  }, {
    key: "gameOver",
    value: function gameOver() {
      return this.round >= 10;
    }
  }]);

  return Game;
}();

/* harmony default export */ __webpack_exports__["default"] = (Game); // define win when index is greater than 10

/***/ }),

/***/ "./src/question.js":
/*!*************************!*\
  !*** ./src/question.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Question = /*#__PURE__*/function () {
  function Question(props) {
    _classCallCheck(this, Question);

    this.question = props.question;
    this.incorrect = props.incorrect;
    this.correct = props.correct;
  } // Find the h1 tag with the id question and update the text to the current question


  _createClass(Question, [{
    key: "renderQuestion",
    value: function renderQuestion() {
      document.getElementById('question').innerText = this.question;
    } // Grab the 4 choice divs and attach a random choice for the user to choose from

  }, {
    key: "renderChoices",
    value: function renderChoices() {
      var divs = document.querySelectorAll('.choice');
      var choices = this.shuffleChoices();

      for (var i = 0; i < divs.length; i++) {
        var div = divs[i];
        var choice = choices[i];
        div.innerHTML = choice;
      }
    } // combine the incorrect choices and the correct choice and return with a 
    // shuffled order

  }, {
    key: "shuffleChoices",
    value: function shuffleChoices() {
      var choices = [].concat(_toConsumableArray(this.incorrect), [this.correct]);

      for (var i = choices.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * i);
        var temp = choices[i];
        choices[i] = choices[j];
        choices[j] = temp;
      }

      return choices;
    } // call this function to render the question and choices together

  }, {
    key: "render",
    value: function render() {
      this.renderQuestion();
      this.renderChoices();
    } // Find the h1 tag with the id question and replace the current question 
    // with default text

  }, {
    key: "clearQuestion",
    value: function clearQuestion() {
      document.getElementById('question').innerText = 'Are you ready?';
    } // Find all the choices divs and replace the current choice with an 
    // empty string

  }, {
    key: "clearChoices",
    value: function clearChoices() {
      var choices = document.querySelectorAll('.choice');

      for (var i = 0; i < choices.length; i++) {
        var choice = choices[i];
        choice.innerHTML = '';
      }
    } // call this function to remove the question and choices together from the game

  }, {
    key: "clear",
    value: function clear() {
      this.clearQuestion();
      this.clearChoices();
    }
  }]);

  return Question;
}();

/* harmony default export */ __webpack_exports__["default"] = (Question);

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
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/game.js");


document.addEventListener("DOMContentLoaded", function () {
  // ! Testing 
  window.game = new _game__WEBPACK_IMPORTED_MODULE_1__["default"](_Apprentice_TandemFor400_Data_json__WEBPACK_IMPORTED_MODULE_0__);
  window.questionList = _Apprentice_TandemFor400_Data_json__WEBPACK_IMPORTED_MODULE_0__;
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map