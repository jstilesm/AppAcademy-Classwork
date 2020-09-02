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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\n\nconst DEFAULT = {\n    COLOR: \"brown\",\n    RADIUS: 20,\n    SPEED: 5\n}\nfunction Asteroid(args) {\n    args.pos = args[\"pos\"];\n    args.vel = Util.randomVec(DEFAULT.SPEED);\n    args.radius = DEFAULT.RADIUS;\n    args.color = DEFAULT.COLOR;\n    MovingObject.call(this, args);\n}\n\nnew Asteroid({ pos: [30, 30] });\n\nUtil.inherits(Asteroid, MovingObject)\nmodule.exports = Asteroid;\n\n// let x = Asteroid({ pos: [30, 30] });\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\nGame.BG_COLOR = \"white\";\nGame.DIM_X = 500;\nGame.DIM_Y = 500;\nGame.FPS = 32;\nGame.NUM_ASTEROIDS = 10;\n\nfunction Game() {\n    this.asteroids = [];\n    this.addAsteroids();\n    this.ship = [new Ship( {pos: this.randomPosition(), game: this})];\n    this.everyObject = this.allObjects();\n    this.draw(ctx);\n  }\n\n\nGame.prototype.addAsteroids = function(){\n    // let numAster = 10;\n    for(let i = 0; i < Game.NUM_ASTEROIDS; i++){\n        this.asteroids.push(new Asteroid({ pos: this.randomPosition(), game: this }));\n    }\n}\n\nGame.prototype.allObjects = function(){\n   return [].concat(this.ship, this.asteroids);\n}\n\nGame.prototype.move = function(ctx) {\n    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    ctx.fillStyle = Game.BG_COLOR;\n    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    for(let i = 0; i < this.everyObject.length; i++){\n        this.everyObject[i].move(ctx);\n    }\n}\n\nGame.prototype.step = function(){\n    this.move(ctx);\n    this.checkCollisions();\n}\n\n\nGame.prototype.draw = function(ctx) {\n    for(let i = 0; i < this.everyObject.length; i++){\n        this.everyObject[i].draw(ctx);\n    }\n}\n\nGame.prototype.randomPosition = function(){\n     return [Game.DIM_X * Math.random(),Game.DIM_Y * Math.random()]\n}\n\nGame.prototype.checkCollisions = function(){\n    for(let i = 0; i < this.everyObject.length; i++){\n        for(let j = 0; j < this.everyObject.length; j++){\n            if(this.everyObject[i].isCollide(this.everyObject[j]) && i !== j){\n                this.remove(this.everyObject[i]);\n                this.remove(this.everyObject[j]);\n            }\n        }\n    }\n}\nGame.prototype.remove = function remove(object){\n    if (object instanceof Asteroid){\n        this.everyObject.splice(this.everyObject.indexOf(object), 1);\n    }else if(object instanceof Ship){\n        console.log(object)\n        object.relocate();\n    }\n\n}\nGame.prototype.wrap = function(pos) {\n    if (pos[0] > 500){\n        pos[0] = 0;\n    } else if (pos[0] < 0) {\n        pos[0] = Game.DIM_X\n    } else if (pos[1] > 500) {\n        pos[1] = 0;\n    } else if (pos[1] < 0) {\n        pos[1] = Game.DIM_Y\n    }\n    return pos;\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nfunction Gameview (game, ctx) {\n    this.game = game;\n    this.ctx = ctx;\n}\nGameview.prototype.animate = function() {\n    this.game.step();\n}\n\nGameview.prototype.start = function start() {\n    setInterval(this.animate.bind(this), 50);\n    \n}\n// setInterval(function(){ alert(\"Hello\"); }, 3000)\nmodule.exports = Gameview;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst Gameview = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\")\n\nconsole.log(\"Webpack is working!\")\nwindow.addEventListener('DOMContentLoaded', (event) => {\n    const canvEle = document.getElementById(\"game-canvas\");\n    canvEle.width = 500;\n    canvEle.height= 500;\n    const ctx = canvEle.getContext(\"2d\");\n    window.ctx = ctx;\n    const gameOne = new Game();\n    const Gamer = new Gameview(gameOne, ctx);\n    Gamer.start();\n    console.log('DOM fully loaded and parsed');\n});\n\n\nwindow.MovingObject = MovingObject;\nwindow.Asteroid = Asteroid;\nwindow.Game = Game;\nwindow.Gameview = Gameview;\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nfunction MovingObject(args) {\n    this.pos = args[\"pos\"];\n    this.vel = args[\"vel\"];\n    this.rad = args[\"radius\"];\n    this.color = args[\"color\"];\n    this.game = args[\"game\"];\n  }\n\n  \n  \n// const mo = new MovingObject({\n//     pos: [30, 30],\n//     vel: [10, 10],\n//     radius: 5,\n//     color: \"#00FF00\"\n//   });\n\n  //   const canvEle = document.getElementById(\"canvas\");\n//   const ctx = canvEle.getContext(\"2d\"); for the game func\n\nMovingObject.prototype.draw = function(ctx){\n    ctx.beginPath();\n    ctx.strokeStyle = this.color.toString();\n    ctx.arc(this.pos[0],this.pos[1], this.rad,0,2 * Math.PI);\n    ctx.stroke();\n    ctx.fillStyle = this.color.toString();\n    ctx.fill();\n}\n\nMovingObject.prototype.move = function(ctx) {\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n    this.pos = this.game.wrap(this.pos);\n    this.draw(ctx);\n}\nMovingObject.prototype.isCollide = function(otherObject){\n  const rad1 = this.rad;\n  const rad2 = otherObject.rad;\n  const distance = Math.sqrt(((this.pos[0] - otherObject.pos[0]) ** 2) + ((this.pos[1] - otherObject.pos[1]) ** 2))\n  if(distance < (rad1 + rad2)){\n    // console.log(\"COLLISON\")\n    return true;\n  }\n  return false;\n}\n\nmodule.exports = MovingObject;\n\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\n\nconst DEFAULT = {\n    COLOR: \"silver\",\n    RADIUS: 15,\n    SPEED: 5\n}\nfunction Ship(args) {\n    args.pos = args[\"pos\"];\n    args.vel = Util.randomVec(DEFAULT.SPEED);\n    args.radius = DEFAULT.RADIUS;\n    args.color = DEFAULT.COLOR;\n    MovingObject.call(this, args);\n};\nShip.prototype.relocate = function() {\n    this.pos = this.game.randomPosition();\n    this.vel = [0, 0];\n};\n\nnew Ship({ pos: [30, 30] });\n\nUtil.inherits(Ship, MovingObject)\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Function.prototype.inherits = function (ParentClass) {\n//     function Surrogate() { }\n//     Surrogate.prototype = ParentClass.prototype\n//     this.prototype = new Surrogate()\n//     this.prototype.constructor = this;\n// }\nconst Util = {\n    inherits: function inherits(childClass, parentClass) {\n        function Surrogate() {}\n        Surrogate.prototype = parentClass.prototype\n        childClass.prototype = new Surrogate()\n        childClass.prototype.constructor = childClass;\n    },\n\n    randomVec(length) {\n      const deg = 2 * Math.PI * Math.random();\n      return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n      return [vec[0] * m, vec[1] * m];\n    },\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });