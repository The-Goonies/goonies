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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/source/components/container/AppContainer.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/source/components/container/AppContainer.jsx":
/*!*************************************************************!*\
  !*** ./client/source/components/container/AppContainer.jsx ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/sarahwilson/Desktop/HRbootcamp/goonies/backpacking-app/goonies/client/source/components/container/AppContainer.jsx: Unexpected token (4:1)\\n\\n\\u001b[0m \\u001b[90m 2 | \\u001b[39m\\u001b[36mimport\\u001b[39m \\u001b[33mReactDOM\\u001b[39m from \\u001b[32m'react-dom'\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 3 | \\u001b[39m\\u001b[36mimport\\u001b[39m { \\u001b[33mLink\\u001b[39m\\u001b[33m,\\u001b[39m \\u001b[33mRouter\\u001b[39m } from \\u001b[32m'@reach/router'\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 4 | \\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<\\u001b[39m \\u001b[33mHEAD\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m   | \\u001b[39m \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 5 | \\u001b[39m\\u001b[36mimport\\u001b[39m \\u001b[33mMapYourRoute\\u001b[39m from \\u001b[32m'../presentational/MapYourRoute'\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 6 | \\u001b[39m\\u001b[36mimport\\u001b[39m \\u001b[33mSignUp\\u001b[39m from \\u001b[32m'../presentational/SignUp'\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 7 | \\u001b[39m\\u001b[36mimport\\u001b[39m \\u001b[33mLogin\\u001b[39m from \\u001b[32m'../presentational/Login'\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n    at _class.raise (/Users/sarahwilson/Desktop/HRbootcamp/goonies/backpacking-app/goonies/node_modules/@babel/parser/lib/index.js:3938:15)\\n    at _class.unexpected (/Users/sarahwilson/Desktop/HRbootcamp/goonies/backpacking-app/goonies/node_modules/@babel/parser/lib/index.js:5247:16)\\n    at _class.jsxParseIdentifier (/Users/sarahwilson/Desktop/HRbootcamp/goonies/backpacking-app/goonies/node_modules/@babel/parser/lib/index.js:3417:14)\\n    at _class.jsxParseNamespacedName (/Users/sarahwilson/Desktop/HRbootcamp/goonies/backpacking-app/goonies/node_modules/@babel/parser/lib/index.js:3427:23)\\n    at _class.jsxParseElementName (/Users/sarahwilson/Desktop/HRbootcamp/goonies/backpacking-app/goonies/node_modules/@babel/parser/lib/index.js:3438:23)\\n    at _class.jsxParseOpeningElementAt (/Users/sarahwilson/Desktop/HRbootcamp/goonies/backpacking-app/goonies/node_modules/@babel/parser/lib/index.js:3523:24)\\n    at _class.jsxParseElementAt (/Users/sarahwilson/Desktop/HRbootcamp/goonies/backpacking-app/goonies/node_modules/@babel/parser/lib/index.js:3556:33)\\n    at _class.jsxParseElement (/Users/sarahwilson/Desktop/HRbootcamp/goonies/backpacking-app/goonies/node_modules/@babel/parser/lib/index.js:3625:19)\\n    at _class.parseExprAtom (/Users/sarahwilson/Desktop/HRbootcamp/goonies/backpacking-app/goonies/node_modules/@babel/parser/lib/index.js:3632:21)\\n    at _class.parseExprSubscripts (/Users/sarahwilson/Desktop/HRbootcamp/goonies/backpacking-app/goonies/node_modules/@babel/parser/lib/index.js:5923:21)\\n    at _class.parseMaybeUnary (/Users/sarahwilson/Desktop/HRbootcamp/goonies/backpacking-app/goonies/node_modules/@babel/parser/lib/index.js:5902:21)\\n    at _class.parseExprOps (/Users/sarahwilson/Desktop/HRbootcamp/goonies/backpacking-app/goonies/node_modules/@babel/parser/lib/index.js:5811:21)\\n    at _class.parseMaybeConditional (/Users/sarahwilson/Desktop/HRbootcamp/goonies/backpacking-app/goonies/node_modules/@babel/parser/lib/index.js:5783:21)\\n    at _class.parseMaybeAssign (/Users/sarahwilson/Desktop/HRbootcamp/goonies/backpacking-app/goonies/node_modules/@babel/parser/lib/index.js:5730:21)\\n    at _class.parseExpression (/Users/sarahwilson/Desktop/HRbootcamp/goonies/backpacking-app/goonies/node_modules/@babel/parser/lib/index.js:5683:21)\\n    at _class.parseStatementContent (/Users/sarahwilson/Desktop/HRbootcamp/goonies/backpacking-app/goonies/node_modules/@babel/parser/lib/index.js:7258:21)\\n    at _class.parseStatement (/Users/sarahwilson/Desktop/HRbootcamp/goonies/backpacking-app/goonies/node_modules/@babel/parser/lib/index.js:7144:17)\\n    at _class.parseBlockOrModuleBlockBody (/Users/sarahwilson/Desktop/HRbootcamp/goonies/backpacking-app/goonies/node_modules/@babel/parser/lib/index.js:7695:23)\\n    at _class.parseBlockBody (/Users/sarahwilson/Desktop/HRbootcamp/goonies/backpacking-app/goonies/node_modules/@babel/parser/lib/index.js:7682:10)\\n    at _class.parseTopLevel (/Users/sarahwilson/Desktop/HRbootcamp/goonies/backpacking-app/goonies/node_modules/@babel/parser/lib/index.js:7109:10)\\n    at _class.parse (/Users/sarahwilson/Desktop/HRbootcamp/goonies/backpacking-app/goonies/node_modules/@babel/parser/lib/index.js:8495:17)\\n    at parse (/Users/sarahwilson/Desktop/HRbootcamp/goonies/backpacking-app/goonies/node_modules/@babel/parser/lib/index.js:10448:38)\\n    at parser (/Users/sarahwilson/Desktop/HRbootcamp/goonies/backpacking-app/goonies/node_modules/@babel/core/lib/transformation/normalize-file.js:170:34)\\n    at normalizeFile (/Users/sarahwilson/Desktop/HRbootcamp/goonies/backpacking-app/goonies/node_modules/@babel/core/lib/transformation/normalize-file.js:138:11)\\n    at runSync (/Users/sarahwilson/Desktop/HRbootcamp/goonies/backpacking-app/goonies/node_modules/@babel/core/lib/transformation/index.js:44:43)\\n    at runAsync (/Users/sarahwilson/Desktop/HRbootcamp/goonies/backpacking-app/goonies/node_modules/@babel/core/lib/transformation/index.js:35:14)\\n    at process.nextTick (/Users/sarahwilson/Desktop/HRbootcamp/goonies/backpacking-app/goonies/node_modules/@babel/core/lib/transform.js:34:34)\\n    at _combinedTickCallback (internal/process/next_tick.js:131:7)\\n    at process._tickCallback (internal/process/next_tick.js:180:9)\");\n\n//# sourceURL=webpack:///./client/source/components/container/AppContainer.jsx?");

/***/ })

/******/ });