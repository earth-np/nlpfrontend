webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/react-particles-js/cjs/particles.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-particles-js/cjs/particles.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){for(var r in t)e[r]=t[r]}(exports,function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=10)}([function(e,t){e.exports=__webpack_require__(/*! react */ "./node_modules/react/index.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/ShapeType */ "./node_modules/tsparticles/dist/Enums/ShapeType.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/PolygonMaskType */ "./node_modules/tsparticles/dist/Enums/PolygonMaskType.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/PolygonMaskInlineArrangement */ "./node_modules/tsparticles/dist/Enums/PolygonMaskInlineArrangement.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/PolygonMaskMoveType */ "./node_modules/tsparticles/dist/Enums/PolygonMaskMoveType.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/Modes/HoverMode */ "./node_modules/tsparticles/dist/Enums/Modes/HoverMode.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/Modes/ClickMode */ "./node_modules/tsparticles/dist/Enums/Modes/ClickMode.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/InteractivityDetect */ "./node_modules/tsparticles/dist/Enums/InteractivityDetect.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/OutMode */ "./node_modules/tsparticles/dist/Enums/OutMode.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/MoveDirection */ "./node_modules/tsparticles/dist/Enums/MoveDirection.js")},function(e,t,r){"use strict";function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=o(r(11));t.Particles=i.default,n(r(7)),n(r(9)),n(r(8)),n(r(3)),n(r(4)),n(r(2)),n(r(17)),n(r(18)),n(r(1)),n(r(6)),n(r(19)),n(r(5)),t.default=i.default},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return(i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function s(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?a(e):t}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},f=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var d=p(r(0)),y=r(0),v=f(r(12)),b=r(13),h=r(14),m=r(15),_=r(16),g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(y,e);var t,r,n,p,f=(t=y,function(){var e,r=c(t);if(u()){var n=c(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return s(this,e)});function y(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),(t=f.call(this,e)).state={canvas:void 0,library:void 0},t.loadCanvas=t.loadCanvas.bind(a(t)),t}return r=y,(n=[{key:"buildParticlesLibrary",value:function(e,t){try{if(void 0===window)return null}catch(e){return null}var r=new m.Options;r.load(h.defaultParams),r.load(t),_.tsParticles.dom();var n=new b.Container(e,r);return this.props.particlesRef&&(this.props.particlesRef.current=n),n}},{key:"refresh",value:function(e){var t=this,r=this.state.canvas;r&&(this.destroy(),this.setState({library:this.buildParticlesLibrary(e.id,e.params)},(function(){t.loadCanvas(r)})))}},{key:"destroy",value:function(){this.state.library&&this.state.library.destroy()}},{key:"loadCanvas",value:function(e){var t=this;e&&this.setState({canvas:e},(function(){var r=t.state.library;r&&(r.canvas.loadCanvas(e),r.start())}))}},{key:"shouldComponentUpdate",value:function(e){return!v.default(e,this.props)}},{key:"componentDidUpdate",value:function(){this.refresh(this.props)}},{key:"forceUpdate",value:function(){this.refresh(this.props),i(c(y.prototype),"forceUpdate",this).call(this)}},{key:"componentDidMount",value:function(){this.setState({library:this.buildParticlesLibrary(this.props.id,this.props.params)})}},{key:"componentWillUnmount",value:function(){this.destroy(),this.setState({library:void 0})}},{key:"render",value:function(){var e=this.props,t=e.width,r=e.height,n=e.className,o=e.canvasClassName,i=e.id;return d.createElement("div",{className:n,id:i},d.createElement("canvas",{ref:this.loadCanvas,className:o,style:Object.assign(Object.assign({},this.props.style),{width:t,height:r})}))}}])&&o(r.prototype,n),p&&o(r,p),y}(y.Component);t.default=g,g.defaultProps={width:"100%",height:"100%",params:h.defaultParams,style:{},id:"tsparticles"}},function(e,t){e.exports=__webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Classes/Container */ "./node_modules/tsparticles/dist/Classes/Container.js")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),o=r(2),i=r(3),s=r(4),a=r(5),u=r(6),c=r(7),l=r(8),p=r(9);t.defaultParams={particles:{number:{value:40,max:-1,density:{enable:!1,value_area:1200}},color:{value:"#FFF"},shape:{type:n.ShapeType.circle,stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!0,speed:1,opacity_min:.1,sync:!1}},size:{value:1,random:!1,anim:{enable:!1,speed:40,size_min:0,sync:!1}},line_linked:{enable:!0,distance:150,color:"#FFF",opacity:.6,width:1,shadow:{enable:!1,blur:5,color:"lime"}},move:{enable:!0,speed:3,direction:p.MoveDirection.none,random:!1,straight:!1,out_mode:l.OutMode.bounce,bounce:!0,attract:{enable:!1,rotateX:3e3,rotateY:3e3}}},interactivity:{detectsOn:c.InteractivityDetect.canvas,events:{onHover:{enable:!1,mode:a.HoverMode.grab},onClick:{enable:!1,mode:u.ClickMode.repulse},resize:!0},modes:{grab:{distance:180,line_linked:{opacity:.35}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:100,duration:5},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0,fps_limit:999,polygon:{enable:!1,scale:1,type:o.PolygonMaskType.inline,inline:{arrangement:i.PolygonMaskInlineArrangement.onePerPoint},draw:{enable:!1,stroke:{width:.5,color:"rgba(255, 255, 255, .1)"}},move:{radius:10,type:s.PolygonMaskMoveType.path},url:""}}},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Classes/Options/Options */ "./node_modules/tsparticles/dist/Classes/Options/Options.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/index */ "./node_modules/tsparticles/dist/index.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/ProcessBubbleType */ "./node_modules/tsparticles/dist/Enums/ProcessBubbleType.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/RotateDirection */ "./node_modules/tsparticles/dist/Enums/RotateDirection.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/Modes/DivMode */ "./node_modules/tsparticles/dist/Enums/Modes/DivMode.js")}]));

/***/ }),

/***/ "./node_modules/react-particles-js/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-particles-js/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const ReactParticles = __webpack_require__(/*! ./cjs/particles */ "./node_modules/react-particles-js/cjs/particles.js");
for (let key in ReactParticles) {
    ReactParticles.default[key] = ReactParticles[key];
}
module.exports = ReactParticles.default;

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Container.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Container.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Container_1 = __webpack_require__(/*! ../Core/Container */ "./node_modules/tsparticles/dist/Core/Container.js");
exports.Container = Container_1.Container;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Options.js":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Options.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Options_1 = __webpack_require__(/*! ../../Options/Classes/Options */ "./node_modules/tsparticles/dist/Options/Classes/Options.js");
exports.Options = Options_1.Options;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Canvas.js":
/*!******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Canvas.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = __webpack_require__(/*! ../Utils/Constants */ "./node_modules/tsparticles/dist/Utils/Constants.js");
var CanvasUtils_1 = __webpack_require__(/*! ../Utils/CanvasUtils */ "./node_modules/tsparticles/dist/Utils/CanvasUtils.js");
var ColorUtils_1 = __webpack_require__(/*! ../Utils/ColorUtils */ "./node_modules/tsparticles/dist/Utils/ColorUtils.js");
var Canvas = (function () {
    function Canvas(container) {
        this.container = container;
        this.size = {
            height: 0,
            width: 0,
        };
        this.context = null;
        this.generatedCanvas = false;
    }
    Canvas.prototype.init = function () {
        this.resize();
        var container = this.container;
        var options = container.options;
        var cover = options.backgroundMask.cover;
        var color = cover.color;
        var trail = options.particles.move.trail;
        this.coverColor = ColorUtils_1.ColorUtils.colorToRgb(color);
        this.trailFillColor = ColorUtils_1.ColorUtils.colorToRgb(trail.fillColor);
        this.paint();
    };
    Canvas.prototype.loadCanvas = function (canvas, generatedCanvas) {
        var _a;
        if (!canvas.className) {
            canvas.className = Constants_1.Constants.canvasClass;
        }
        if (this.generatedCanvas) {
            (_a = this.element) === null || _a === void 0 ? void 0 : _a.remove();
        }
        this.generatedCanvas = generatedCanvas !== null && generatedCanvas !== void 0 ? generatedCanvas : false;
        this.element = canvas;
        this.size.height = canvas.offsetHeight;
        this.size.width = canvas.offsetWidth;
        this.context = this.element.getContext("2d");
        this.container.retina.init();
        this.initBackground();
    };
    Canvas.prototype.destroy = function () {
        var _a;
        if (this.generatedCanvas) {
            (_a = this.element) === null || _a === void 0 ? void 0 : _a.remove();
        }
        if (this.context) {
            CanvasUtils_1.CanvasUtils.clear(this.context, this.size);
        }
    };
    Canvas.prototype.resize = function () {
        if (this.element) {
            this.element.width = this.size.width;
            this.element.height = this.size.height;
        }
    };
    Canvas.prototype.paint = function () {
        var container = this.container;
        var options = container.options;
        if (this.context) {
            if (options.backgroundMask.enable && options.backgroundMask.cover && this.coverColor) {
                this.paintBase(ColorUtils_1.ColorUtils.getStyleFromColor(this.coverColor));
            }
            else {
                this.paintBase();
            }
        }
    };
    Canvas.prototype.clear = function () {
        var container = this.container;
        var options = container.options;
        var trail = options.particles.move.trail;
        if (options.backgroundMask.enable) {
            this.paint();
        }
        else if (trail.enable && trail.length > 0 && this.trailFillColor) {
            this.paintBase(ColorUtils_1.ColorUtils.getStyleFromColor(this.trailFillColor, 1 / trail.length));
        }
        else if (this.context) {
            CanvasUtils_1.CanvasUtils.clear(this.context, this.size);
        }
    };
    Canvas.prototype.isPointInPath = function (path, point) {
        var _a, _b;
        return (_b = (_a = this.context) === null || _a === void 0 ? void 0 : _a.isPointInPath(path, point.x, point.y)) !== null && _b !== void 0 ? _b : false;
    };
    Canvas.prototype.drawLinkedLine = function (p1, link) {
        var _a;
        var container = this.container;
        var options = container.options;
        var p2 = link.destination;
        var opacity = link.opacity;
        var pos1 = p1.getPosition();
        var pos2 = p2.getPosition();
        var ctx = this.context;
        if (!ctx) {
            return;
        }
        var colorLine;
        var twinkle = p1.particlesOptions.twinkle.lines;
        if (twinkle.enable) {
            var twinkleFreq = twinkle.frequency;
            var twinkleColor = typeof twinkle.color === "string" ? { value: twinkle.color } : twinkle.color;
            var twinkleRgb = twinkleColor !== undefined ? ColorUtils_1.ColorUtils.colorToRgb(twinkleColor) : undefined;
            var twinkling = Math.random() < twinkleFreq;
            if (twinkling && twinkleRgb !== undefined) {
                colorLine = twinkleRgb;
                opacity = twinkle.opacity;
            }
        }
        if (!colorLine) {
            if (container.particles.lineLinkedColor === Constants_1.Constants.randomColorValue) {
                colorLine = ColorUtils_1.ColorUtils.getRandomRgbColor();
            }
            else if (container.particles.lineLinkedColor == "mid" && p1.color && p2.color) {
                var sourceColor = p1.color;
                var destColor = p2.color;
                colorLine = ColorUtils_1.ColorUtils.mix(sourceColor, destColor, p1.size.value, p2.size.value);
            }
            else {
                colorLine = container.particles.lineLinkedColor;
            }
        }
        var width = (_a = p1.lineLinkedWidth) !== null && _a !== void 0 ? _a : container.retina.lineLinkedWidth;
        CanvasUtils_1.CanvasUtils.drawLinkedLine(ctx, width, pos1, pos2, options.backgroundMask.enable, colorLine, opacity, p1.particlesOptions.lineLinked.shadow);
    };
    Canvas.prototype.drawConnectLine = function (p1, p2) {
        var _a;
        var lineStyle = this.lineStyle(p1, p2);
        if (!lineStyle) {
            return;
        }
        var ctx = this.context;
        if (!ctx) {
            return;
        }
        var pos1 = p1.getPosition();
        var pos2 = p2.getPosition();
        CanvasUtils_1.CanvasUtils.drawConnectLine(ctx, (_a = p1.lineLinkedWidth) !== null && _a !== void 0 ? _a : this.container.retina.lineLinkedWidth, lineStyle, pos1, pos2);
    };
    Canvas.prototype.drawGrabLine = function (particle, opacity, mousePos) {
        var _a;
        var container = this.container;
        var optColor = particle.particlesOptions.lineLinked.color;
        var lineColor = container.particles.grabLineColor ||
            (typeof optColor === "string" ? ColorUtils_1.ColorUtils.stringToRgb(optColor) : ColorUtils_1.ColorUtils.colorToRgb(optColor));
        if (lineColor == Constants_1.Constants.randomColorValue) {
            lineColor = ColorUtils_1.ColorUtils.getRandomRgbColor();
        }
        container.particles.grabLineColor = lineColor;
        var ctx = container.canvas.context;
        if (!ctx) {
            return;
        }
        var colorLine;
        if (container.particles.grabLineColor === Constants_1.Constants.randomColorValue) {
            colorLine = ColorUtils_1.ColorUtils.getRandomRgbColor();
        }
        else {
            colorLine = container.particles.grabLineColor;
        }
        if (colorLine === undefined) {
            return;
        }
        var beginPos = particle.getPosition();
        CanvasUtils_1.CanvasUtils.drawGrabLine(ctx, (_a = particle.lineLinkedWidth) !== null && _a !== void 0 ? _a : container.retina.lineLinkedWidth, beginPos, mousePos, colorLine, opacity);
    };
    Canvas.prototype.drawParticle = function (particle, delta) {
        var _a, _b, _c;
        var container = this.container;
        var options = container.options;
        var twinkle = particle.particlesOptions.twinkle.particles;
        var twinkleFreq = twinkle.frequency;
        var twinkleColor = typeof twinkle.color === "string" ? { value: twinkle.color } : twinkle.color;
        var twinkleRgb = twinkleColor !== undefined ? ColorUtils_1.ColorUtils.colorToRgb(twinkleColor) : undefined;
        var twinkling = twinkle.enable && Math.random() < twinkleFreq;
        var radius = (_a = particle.bubble.radius) !== null && _a !== void 0 ? _a : particle.size.value;
        var opacity = twinkling ? twinkle.opacity : (_b = particle.bubble.opacity) !== null && _b !== void 0 ? _b : particle.opacity.value;
        var infectionStage = particle.infectionStage;
        var infection = options.infection;
        var infectionStages = infection.stages;
        var infectionColor = infectionStage !== undefined ? infectionStages[infectionStage].color : undefined;
        var infectionRgb = infectionColor ? ColorUtils_1.ColorUtils.colorToRgb(infectionColor) : undefined;
        var color = twinkling && twinkleRgb !== undefined ?
            twinkleRgb : (_c = infectionRgb !== null && infectionRgb !== void 0 ? infectionRgb : particle.bubble.color) !== null && _c !== void 0 ? _c : particle.color;
        var colorValue = color !== undefined ? ColorUtils_1.ColorUtils.getStyleFromColor(color, opacity) : undefined;
        if (!this.context || !colorValue) {
            return;
        }
        this.context.save();
        for (var _i = 0, _d = particle.links; _i < _d.length; _i++) {
            var link = _d[_i];
            this.drawLinkedLine(particle, link);
        }
        this.context.restore();
        CanvasUtils_1.CanvasUtils.drawParticle(this.container, this.context, particle, delta, colorValue, options.backgroundMask.enable, radius, opacity, particle.particlesOptions.shadow);
    };
    Canvas.prototype.drawPlugin = function (plugin, delta) {
        if (!this.context) {
            return;
        }
        CanvasUtils_1.CanvasUtils.drawPlugin(this.context, plugin, delta);
    };
    Canvas.prototype.paintBase = function (baseColor) {
        if (this.context) {
            CanvasUtils_1.CanvasUtils.paintBase(this.context, this.size, baseColor);
        }
    };
    Canvas.prototype.lineStyle = function (p1, p2) {
        var container = this.container;
        var options = container.options;
        var connectOptions = options.interactivity.modes.connect;
        if (p1.color && p2.color) {
            if (this.context) {
                return CanvasUtils_1.CanvasUtils.gradient(this.context, p1, p2, connectOptions.lineLinked.opacity);
            }
        }
    };
    Canvas.prototype.initBackground = function () {
        var container = this.container;
        var options = container.options;
        var background = options.background;
        var element = this.element;
        if (!element) {
            return;
        }
        var elementStyle = element.style;
        if (background.color) {
            var color = ColorUtils_1.ColorUtils.colorToRgb(background.color);
            if (color) {
                elementStyle.backgroundColor = ColorUtils_1.ColorUtils.getStyleFromColor(color, background.opacity);
            }
        }
        if (background.image) {
            elementStyle.backgroundImage = background.image;
        }
        if (background.position) {
            elementStyle.backgroundPosition = background.position;
        }
        if (background.repeat) {
            elementStyle.backgroundRepeat = background.repeat;
        }
        if (background.size) {
            elementStyle.backgroundSize = background.size;
        }
    };
    return Canvas;
}());
exports.Canvas = Canvas;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Container.js":
/*!*********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Container.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var Canvas_1 = __webpack_require__(/*! ./Canvas */ "./node_modules/tsparticles/dist/Core/Canvas.js");
var EventListeners_1 = __webpack_require__(/*! ../Utils/EventListeners */ "./node_modules/tsparticles/dist/Utils/EventListeners.js");
var Particles_1 = __webpack_require__(/*! ./Particles */ "./node_modules/tsparticles/dist/Core/Particles.js");
var Retina_1 = __webpack_require__(/*! ./Retina */ "./node_modules/tsparticles/dist/Core/Retina.js");
var FrameManager_1 = __webpack_require__(/*! ./FrameManager */ "./node_modules/tsparticles/dist/Core/FrameManager.js");
var Options_1 = __webpack_require__(/*! ../Options/Classes/Options */ "./node_modules/tsparticles/dist/Options/Classes/Options.js");
var Plugins_1 = __webpack_require__(/*! ../Utils/Plugins */ "./node_modules/tsparticles/dist/Utils/Plugins.js");
var SimplexNoise_1 = __webpack_require__(/*! ../Utils/SimplexNoise */ "./node_modules/tsparticles/dist/Utils/SimplexNoise.js");
var Container = (function () {
    function Container(id, params) {
        var presets = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            presets[_i - 2] = arguments[_i];
        }
        this.started = false;
        this.destroyed = false;
        this.id = id;
        this.paused = true;
        this.sourceOptions = params;
        this.lastFrameTime = 0;
        this.pageHidden = false;
        this.retina = new Retina_1.Retina(this);
        this.canvas = new Canvas_1.Canvas(this);
        this.particles = new Particles_1.Particles(this);
        this.drawer = new FrameManager_1.FrameManager(this);
        this.interactivity = {
            mouse: {},
        };
        this.bubble = {};
        this.repulse = { particles: [] };
        this.plugins = {};
        this.drawers = {};
        this.density = 1;
        this.options = new Options_1.Options();
        for (var _a = 0, presets_1 = presets; _a < presets_1.length; _a++) {
            var preset = presets_1[_a];
            this.options.load(Plugins_1.Plugins.getPreset(preset));
        }
        for (var _b = 0, _c = Plugins_1.Plugins.getSupportedShapes(); _b < _c.length; _b++) {
            var type = _c[_b];
            this.drawers[type] = Plugins_1.Plugins.getShapeDrawer(type);
        }
        if (this.sourceOptions) {
            this.options.load(this.sourceOptions);
        }
        this.simplex = new SimplexNoise_1.SimplexNoise();
        this.eventListeners = new EventListeners_1.EventListeners(this);
    }
    Container.requestFrame = function (callback) {
        return window.customRequestAnimationFrame(callback);
    };
    Container.cancelAnimation = function (handle) {
        window.cancelAnimationFrame(handle);
    };
    Container.prototype.play = function (force) {
        var needsUpdate = this.paused || force;
        if (this.paused) {
            this.paused = false;
        }
        if (needsUpdate) {
            for (var id in this.plugins) {
                var plugin = this.plugins[id];
                if (plugin.play) {
                    plugin.play();
                }
            }
            this.lastFrameTime = performance.now();
        }
        this.draw();
    };
    Container.prototype.pause = function () {
        if (this.drawAnimationFrame !== undefined) {
            Container.cancelAnimation(this.drawAnimationFrame);
            delete this.drawAnimationFrame;
        }
        if (!this.paused) {
            for (var id in this.plugins) {
                var plugin = this.plugins[id];
                if (plugin.pause) {
                    plugin.pause();
                }
            }
            if (!this.pageHidden) {
                this.paused = true;
            }
        }
    };
    Container.prototype.draw = function () {
        var _this = this;
        this.drawAnimationFrame = Container.requestFrame(function (t) { return _this.drawer.nextFrame(t); });
    };
    Container.prototype.getAnimationStatus = function () {
        return !this.paused;
    };
    Container.prototype.densityAutoParticles = function () {
        this.initDensityFactor();
        var numberOptions = this.options.particles.number;
        var optParticlesNumber = numberOptions.value;
        var optParticlesLimit = numberOptions.limit > 0 ? numberOptions.limit : optParticlesNumber;
        var particlesNumber = Math.min(optParticlesNumber, optParticlesLimit) * this.density;
        var particlesCount = this.particles.count;
        if (particlesCount < particlesNumber) {
            this.particles.push(Math.abs(particlesNumber - particlesCount));
        }
        else if (particlesCount > particlesNumber) {
            this.particles.removeQuantity(particlesCount - particlesNumber);
        }
    };
    Container.prototype.initDensityFactor = function () {
        var densityOptions = this.options.particles.number.density;
        if (!this.canvas.element || !densityOptions.enable) {
            return;
        }
        var canvas = this.canvas.element;
        var pxRatio = this.retina.pixelRatio;
        this.density = (canvas.width * canvas.height) / (densityOptions.factor * pxRatio * densityOptions.area);
    };
    Container.prototype.destroy = function () {
        this.stop();
        this.retina.reset();
        this.canvas.destroy();
        delete this.interactivity;
        delete this.options;
        delete this.retina;
        delete this.canvas;
        delete this.particles;
        delete this.bubble;
        delete this.repulse;
        delete this.drawer;
        delete this.eventListeners;
        for (var type in this.drawers) {
            var drawer = this.drawers[type];
            if (drawer.destroy !== undefined) {
                drawer.destroy(this);
            }
        }
        this.drawers = {};
        this.destroyed = true;
    };
    Container.prototype.exportImg = function (callback) {
        this.exportImage(callback);
    };
    Container.prototype.exportImage = function (callback, type, quality) {
        var _a;
        return (_a = this.canvas.element) === null || _a === void 0 ? void 0 : _a.toBlob(callback, type !== null && type !== void 0 ? type : "image/png", quality);
    };
    Container.prototype.exportConfiguration = function () {
        return JSON.stringify(this.options, undefined, 2);
    };
    Container.prototype.refresh = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.stop();
                        return [4, this.start()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    Container.prototype.stop = function () {
        if (!this.started) {
            return;
        }
        this.started = false;
        this.eventListeners.removeListeners();
        this.pause();
        this.particles.clear();
        this.retina.reset();
        this.canvas.clear();
        for (var id in this.plugins) {
            var plugin = this.plugins[id];
            if (plugin.stop !== undefined) {
                plugin.stop();
            }
        }
        this.plugins = {};
        delete this.particles.lineLinkedColor;
    };
    Container.prototype.start = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var availablePlugins, id, _a, _b, _i, id, plugin, _c, _d, _e, type, drawer;
            return tslib_1.__generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        if (this.started) {
                            return [2];
                        }
                        availablePlugins = Plugins_1.Plugins.getAvailablePlugins(this);
                        for (id in availablePlugins) {
                            this.plugins[id] = availablePlugins[id];
                        }
                        this.started = true;
                        this.eventListeners.addListeners();
                        _a = [];
                        for (_b in this.plugins)
                            _a.push(_b);
                        _i = 0;
                        _f.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3, 5];
                        id = _a[_i];
                        plugin = this.plugins[id];
                        if (!(plugin.startAsync !== undefined)) return [3, 3];
                        return [4, plugin.startAsync()];
                    case 2:
                        _f.sent();
                        return [3, 4];
                    case 3:
                        if (plugin.start !== undefined) {
                            plugin.start();
                        }
                        _f.label = 4;
                    case 4:
                        _i++;
                        return [3, 1];
                    case 5:
                        _c = [];
                        for (_d in this.drawers)
                            _c.push(_d);
                        _e = 0;
                        _f.label = 6;
                    case 6:
                        if (!(_e < _c.length)) return [3, 9];
                        type = _c[_e];
                        drawer = this.drawers[type];
                        if (!(drawer.init !== undefined)) return [3, 8];
                        return [4, drawer.init(this)];
                    case 7:
                        _f.sent();
                        _f.label = 8;
                    case 8:
                        _e++;
                        return [3, 6];
                    case 9:
                        this.init();
                        this.play();
                        return [2];
                }
            });
        });
    };
    Container.prototype.init = function () {
        this.retina.init();
        this.canvas.init();
        this.particles.init();
        this.densityAutoParticles();
        for (var id in this.plugins) {
            var plugin = this.plugins[id];
            if (plugin.init !== undefined) {
                plugin.init();
            }
        }
    };
    return Container;
}());
exports.Container = Container;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/FrameManager.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/FrameManager.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FrameManager = (function () {
    function FrameManager(container) {
        this.container = container;
    }
    FrameManager.prototype.nextFrame = function (timestamp) {
        var container = this.container;
        var options = container.options;
        var fpsLimit = options.fpsLimit > 0 ? options.fpsLimit : 60;
        if (container.lastFrameTime !== undefined && timestamp < container.lastFrameTime + (1000 / fpsLimit)) {
            container.draw();
            return;
        }
        var delta = timestamp - container.lastFrameTime;
        container.lastFrameTime = timestamp;
        container.particles.draw(delta);
        if (options.particles.move.enable && container.getAnimationStatus()) {
            container.draw();
        }
    };
    return FrameManager;
}());
exports.FrameManager = FrameManager;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Loader.js":
/*!******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Loader.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var Container_1 = __webpack_require__(/*! ./Container */ "./node_modules/tsparticles/dist/Core/Container.js");
var Constants_1 = __webpack_require__(/*! ../Utils/Constants */ "./node_modules/tsparticles/dist/Utils/Constants.js");
var Utils_1 = __webpack_require__(/*! ../Utils/Utils */ "./node_modules/tsparticles/dist/Utils/Utils.js");
var tsParticlesDom = [];
var Loader = (function () {
    function Loader() {
    }
    Loader.dom = function () {
        if (!tsParticlesDom) {
            tsParticlesDom = [];
        }
        return tsParticlesDom;
    };
    Loader.domItem = function (index) {
        var dom = Loader.dom();
        var item = dom[index];
        if (item && !item.destroyed) {
            return item;
        }
        dom.splice(index, 1);
    };
    Loader.loadFromArray = function (tagId, params, index) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2, Loader.load(tagId, Utils_1.Utils.itemFromArray(params, index))];
            });
        });
    };
    Loader.setFromArray = function (id, domContainer, params, index) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2, Loader.set(id, domContainer, Utils_1.Utils.itemFromArray(params, index))];
            });
        });
    };
    Loader.load = function (tagId, params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var domContainer;
            return tslib_1.__generator(this, function (_a) {
                domContainer = document.getElementById(tagId);
                if (!domContainer) {
                    return [2];
                }
                return [2, this.set(tagId, domContainer, params)];
            });
        });
    };
    Loader.set = function (id, domContainer, params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var dom, oldIndex, old, canvasEl, generatedCanvas, existingCanvases, newItem;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dom = Loader.dom();
                        oldIndex = dom.findIndex(function (v) { return v.id === id; });
                        if (oldIndex >= 0) {
                            old = this.domItem(oldIndex);
                            if (old && !old.destroyed) {
                                old.destroy();
                                dom.splice(oldIndex, 1);
                            }
                        }
                        if (domContainer.tagName === "canvas") {
                            canvasEl = domContainer;
                            generatedCanvas = false;
                        }
                        else {
                            existingCanvases = domContainer.getElementsByTagName("canvas");
                            if (existingCanvases.length) {
                                canvasEl = existingCanvases[0];
                                if (!canvasEl.className) {
                                    canvasEl.className = Constants_1.Constants.canvasClass;
                                }
                                generatedCanvas = false;
                            }
                            else {
                                generatedCanvas = true;
                                canvasEl = document.createElement("canvas");
                                canvasEl.className = Constants_1.Constants.canvasClass;
                                canvasEl.style.width = "100%";
                                canvasEl.style.height = "100%";
                                domContainer.appendChild(canvasEl);
                            }
                        }
                        newItem = new Container_1.Container(id, params);
                        if (oldIndex >= 0) {
                            dom.splice(oldIndex, 0, newItem);
                        }
                        else {
                            dom.push(newItem);
                        }
                        newItem.canvas.loadCanvas(canvasEl, generatedCanvas);
                        return [4, newItem.start()];
                    case 1:
                        _a.sent();
                        return [2, newItem];
                }
            });
        });
    };
    Loader.loadJSON = function (tagId, jsonUrl) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response, params;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fetch(jsonUrl)];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) return [3, 3];
                        return [4, response.json()];
                    case 2:
                        params = _a.sent();
                        if (params instanceof Array) {
                            return [2, Loader.loadFromArray(tagId, params)];
                        }
                        else {
                            return [2, Loader.load(tagId, params)];
                        }
                        return [3, 4];
                    case 3:
                        console.error("Error tsParticles - fetch status: " + response.status);
                        console.error("Error tsParticles - File config not found");
                        _a.label = 4;
                    case 4: return [2];
                }
            });
        });
    };
    ;
    Loader.setJSON = function (id, domContainer, jsonUrl) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response, params;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fetch(jsonUrl)];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) return [3, 3];
                        return [4, response.json()];
                    case 2:
                        params = _a.sent();
                        if (params instanceof Array) {
                            return [2, Loader.setFromArray(id, domContainer, params)];
                        }
                        else {
                            return [2, Loader.set(id, domContainer, params)];
                        }
                        return [3, 4];
                    case 3:
                        console.error("Error tsParticles - fetch status: " + response.status);
                        console.error("Error tsParticles - File config not found");
                        _a.label = 4;
                    case 4: return [2];
                }
            });
        });
    };
    ;
    Loader.setOnClickHandler = function (callback) {
        var dom = Loader.dom();
        if (dom.length === 0) {
            throw new Error("Can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()");
        }
        for (var _i = 0, dom_1 = dom; _i < dom_1.length; _i++) {
            var domItem = dom_1[_i];
            var el = domItem.interactivity.element;
            if (el) {
                el.addEventListener("click", callback);
            }
        }
    };
    return Loader;
}());
exports.Loader = Loader;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle.js":
/*!********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ShapeType_1 = __webpack_require__(/*! ../Enums/ShapeType */ "./node_modules/tsparticles/dist/Enums/ShapeType.js");
var Updater_1 = __webpack_require__(/*! ./Particle/Updater */ "./node_modules/tsparticles/dist/Core/Particle/Updater.js");
var Utils_1 = __webpack_require__(/*! ../Utils/Utils */ "./node_modules/tsparticles/dist/Utils/Utils.js");
var PolygonMaskType_1 = __webpack_require__(/*! ../Enums/PolygonMaskType */ "./node_modules/tsparticles/dist/Enums/PolygonMaskType.js");
var RotateDirection_1 = __webpack_require__(/*! ../Enums/RotateDirection */ "./node_modules/tsparticles/dist/Enums/RotateDirection.js");
var ColorUtils_1 = __webpack_require__(/*! ../Utils/ColorUtils */ "./node_modules/tsparticles/dist/Utils/ColorUtils.js");
var Particles_1 = __webpack_require__(/*! ../Options/Classes/Particles/Particles */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Particles.js");
var SizeAnimationStatus_1 = __webpack_require__(/*! ../Enums/SizeAnimationStatus */ "./node_modules/tsparticles/dist/Enums/SizeAnimationStatus.js");
var OpacityAnimationStatus_1 = __webpack_require__(/*! ../Enums/OpacityAnimationStatus */ "./node_modules/tsparticles/dist/Enums/OpacityAnimationStatus.js");
var Shape_1 = __webpack_require__(/*! ../Options/Classes/Particles/Shape/Shape */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/Shape.js");
var StartValueType_1 = __webpack_require__(/*! ../Enums/StartValueType */ "./node_modules/tsparticles/dist/Enums/StartValueType.js");
var Plugins_1 = __webpack_require__(/*! ../Utils/Plugins */ "./node_modules/tsparticles/dist/Utils/Plugins.js");
var Particle = (function () {
    function Particle(container, position, overrideOptions) {
        var _this = this;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        this.container = container;
        this.fill = true;
        this.close = true;
        this.links = [];
        this.lastNoiseTime = 0;
        this.destroyed = false;
        var options = container.options;
        var particlesOptions = new Particles_1.Particles();
        particlesOptions.load(options.particles);
        if ((overrideOptions === null || overrideOptions === void 0 ? void 0 : overrideOptions.shape) !== undefined) {
            var shapeType = (_a = overrideOptions.shape.type) !== null && _a !== void 0 ? _a : particlesOptions.shape.type;
            this.shape = shapeType instanceof Array ? Utils_1.Utils.itemFromArray(shapeType) : shapeType;
            var shapeOptions = new Shape_1.Shape();
            shapeOptions.load(overrideOptions.shape);
            if (this.shape !== undefined) {
                var shapeData = shapeOptions.options[this.shape];
                if (shapeData !== undefined) {
                    this.shapeData = Utils_1.Utils.deepExtend({}, shapeData instanceof Array ?
                        Utils_1.Utils.itemFromArray(shapeData) :
                        shapeData);
                    this.fill = (_c = (_b = this.shapeData) === null || _b === void 0 ? void 0 : _b.fill) !== null && _c !== void 0 ? _c : this.fill;
                    this.close = (_e = (_d = this.shapeData) === null || _d === void 0 ? void 0 : _d.close) !== null && _e !== void 0 ? _e : this.close;
                }
            }
        }
        else {
            var shapeType = particlesOptions.shape.type;
            this.shape = shapeType instanceof Array ? Utils_1.Utils.itemFromArray(shapeType) : shapeType;
            var shapeData = particlesOptions.shape.options[this.shape];
            if (shapeData) {
                this.shapeData = Utils_1.Utils.deepExtend({}, shapeData instanceof Array ?
                    Utils_1.Utils.itemFromArray(shapeData) :
                    shapeData);
                this.fill = (_g = (_f = this.shapeData) === null || _f === void 0 ? void 0 : _f.fill) !== null && _g !== void 0 ? _g : this.fill;
                this.close = (_j = (_h = this.shapeData) === null || _h === void 0 ? void 0 : _h.close) !== null && _j !== void 0 ? _j : this.close;
            }
        }
        if (overrideOptions !== undefined) {
            particlesOptions.load(overrideOptions);
        }
        if (((_k = this.shapeData) === null || _k === void 0 ? void 0 : _k.particles) !== undefined) {
            particlesOptions.load((_l = this.shapeData) === null || _l === void 0 ? void 0 : _l.particles);
        }
        this.particlesOptions = particlesOptions;
        var noiseDelay = this.particlesOptions.move.noise.delay;
        this.noiseDelay = (noiseDelay.random.enable ?
            Utils_1.Utils.randomInRange(noiseDelay.random.minimumValue, noiseDelay.value) :
            noiseDelay.value) * 1000;
        container.retina.initParticle(this);
        var color = this.particlesOptions.color;
        var sizeValue = ((_m = this.sizeValue) !== null && _m !== void 0 ? _m : container.retina.sizeValue);
        var randomSize = typeof this.particlesOptions.size.random === "boolean" ?
            this.particlesOptions.size.random :
            this.particlesOptions.size.random.enable;
        this.size = {
            value: randomSize && this.randomMinimumSize !== undefined ?
                Utils_1.Utils.randomInRange(this.randomMinimumSize, sizeValue) :
                sizeValue
        };
        this.direction = this.particlesOptions.move.direction;
        this.bubble = {};
        this.angle = this.particlesOptions.rotate.random ? Math.random() * 360 : this.particlesOptions.rotate.value;
        if (this.particlesOptions.rotate.direction == RotateDirection_1.RotateDirection.random) {
            var index = Math.floor(Math.random() * 2);
            if (index > 0) {
                this.rotateDirection = RotateDirection_1.RotateDirection.counterClockwise;
            }
            else {
                this.rotateDirection = RotateDirection_1.RotateDirection.clockwise;
            }
        }
        else {
            this.rotateDirection = this.particlesOptions.rotate.direction;
        }
        if (this.particlesOptions.size.animation.enable) {
            switch (this.particlesOptions.size.animation.startValue) {
                case StartValueType_1.StartValueType.min:
                    if (!randomSize) {
                        var pxRatio = container.retina.pixelRatio;
                        this.size.value = this.particlesOptions.size.animation.minimumValue * pxRatio;
                    }
                    break;
            }
            this.size.status = SizeAnimationStatus_1.SizeAnimationStatus.increasing;
            this.size.velocity = ((_o = this.sizeAnimationSpeed) !== null && _o !== void 0 ? _o : container.retina.sizeAnimationSpeed) / 100;
            if (!this.particlesOptions.size.animation.sync) {
                this.size.velocity = this.size.velocity * Math.random();
            }
        }
        if (this.particlesOptions.rotate.animation.enable) {
            if (!this.particlesOptions.rotate.animation.sync) {
                this.angle = Math.random() * 360;
            }
        }
        this.position = this.calcPosition(this.container, position);
        if (options.polygon.enable && options.polygon.type === PolygonMaskType_1.PolygonMaskType.inline) {
            this.initialPosition = {
                x: this.position.x,
                y: this.position.y
            };
        }
        this.offset = {
            x: 0,
            y: 0
        };
        if (this.particlesOptions.collisions.enable) {
            this.checkOverlap(position);
        }
        if (color instanceof Array) {
            this.color = ColorUtils_1.ColorUtils.colorToRgb(Utils_1.Utils.itemFromArray(color));
        }
        else {
            this.color = ColorUtils_1.ColorUtils.colorToRgb(color);
        }
        var randomOpacity = this.particlesOptions.opacity.random;
        var opacityValue = this.particlesOptions.opacity.value;
        this.opacity = {
            value: randomOpacity.enable ? Utils_1.Utils.randomInRange(randomOpacity.minimumValue, opacityValue) : opacityValue
        };
        if (this.particlesOptions.opacity.animation.enable) {
            this.opacity.status = OpacityAnimationStatus_1.OpacityAnimationStatus.increasing;
            this.opacity.velocity = this.particlesOptions.opacity.animation.speed / 100;
            if (!this.particlesOptions.opacity.animation.sync) {
                this.opacity.velocity *= Math.random();
            }
        }
        this.initialVelocity = this.calculateVelocity();
        this.velocity = {
            horizontal: this.initialVelocity.horizontal,
            vertical: this.initialVelocity.vertical
        };
        var drawer = container.drawers[this.shape];
        if (!drawer) {
            drawer = Plugins_1.Plugins.getShapeDrawer(this.shape);
            container.drawers[this.shape] = drawer;
        }
        if (this.shape === ShapeType_1.ShapeType.image || this.shape === ShapeType_1.ShapeType.images) {
            var shape = this.particlesOptions.shape;
            var imageDrawer = drawer;
            var imagesOptions = shape.options[this.shape];
            var images = imageDrawer.getImages(container).images;
            var index = Utils_1.Utils.arrayRandomIndex(images);
            var image_1 = images[index];
            var optionsImage_1 = (imagesOptions instanceof Array ?
                imagesOptions.filter(function (t) { return t.src === image_1.source; })[0] :
                imagesOptions);
            if ((image_1 === null || image_1 === void 0 ? void 0 : image_1.svgData) !== undefined && optionsImage_1.replaceColor && this.color) {
                var svgColoredData = Utils_1.Utils.replaceColorSvg(image_1, this.color, this.opacity.value);
                var svg = new Blob([svgColoredData], { type: "image/svg+xml" });
                var domUrl_1 = window.URL || window.webkitURL || window;
                var url_1 = domUrl_1.createObjectURL(svg);
                var img_1 = new Image();
                this.image = {
                    data: image_1,
                    loaded: false,
                    ratio: optionsImage_1.width / optionsImage_1.height,
                    replaceColor: (_p = optionsImage_1.replaceColor) !== null && _p !== void 0 ? _p : optionsImage_1.replace_color,
                    source: optionsImage_1.src
                };
                img_1.addEventListener("load", function (e) {
                    if (_this.image) {
                        _this.image.loaded = true;
                        image_1.element = img_1;
                    }
                    domUrl_1.revokeObjectURL(url_1);
                });
                img_1.addEventListener("error", function (e) {
                    domUrl_1.revokeObjectURL(url_1);
                    Utils_1.Utils.loadImage(optionsImage_1.src).then(function (img2) {
                        if (_this.image) {
                            image_1.element = img2.element;
                            _this.image.loaded = true;
                        }
                    });
                });
                img_1.src = url_1;
            }
            else {
                this.image = {
                    data: image_1,
                    loaded: true,
                    ratio: optionsImage_1.width / optionsImage_1.height,
                    replaceColor: (_q = optionsImage_1.replaceColor) !== null && _q !== void 0 ? _q : optionsImage_1.replace_color,
                    source: optionsImage_1.src
                };
            }
            if (!this.image.ratio) {
                this.image.ratio = 1;
            }
            this.fill = (_r = optionsImage_1.fill) !== null && _r !== void 0 ? _r : this.fill;
            this.close = (_s = optionsImage_1.close) !== null && _s !== void 0 ? _s : this.close;
        }
        this.stroke = this.particlesOptions.stroke instanceof Array ?
            Utils_1.Utils.itemFromArray(this.particlesOptions.stroke) :
            this.particlesOptions.stroke;
        this.strokeColor = typeof this.stroke.color === "string" ?
            ColorUtils_1.ColorUtils.stringToRgb(this.stroke.color) :
            ColorUtils_1.ColorUtils.colorToRgb(this.stroke.color);
        this.shadowColor = typeof this.particlesOptions.shadow.color === "string" ?
            ColorUtils_1.ColorUtils.stringToRgb(this.particlesOptions.shadow.color) :
            ColorUtils_1.ColorUtils.colorToRgb(this.particlesOptions.shadow.color);
        this.updater = new Updater_1.Updater(this.container, this);
    }
    Particle.prototype.update = function (index, delta) {
        this.links = [];
        this.updater.update(delta);
    };
    Particle.prototype.draw = function (delta) {
        var _a;
        if (((_a = this.image) === null || _a === void 0 ? void 0 : _a.loaded) === false) {
            return;
        }
        this.container.canvas.drawParticle(this, delta);
    };
    Particle.prototype.isOverlapping = function () {
        var container = this.container;
        var p1 = this;
        var collisionFound = false;
        var iterations = 0;
        var pos1 = p1.getPosition();
        for (var _i = 0, _a = container.particles.array.filter(function (t) { return t != p1; }); _i < _a.length; _i++) {
            var p2 = _a[_i];
            iterations++;
            var pos2 = p2.getPosition();
            var dist = Utils_1.Utils.getDistance(pos1, pos2);
            if (dist <= p1.size.value + p2.size.value) {
                collisionFound = true;
                break;
            }
        }
        return {
            collisionFound: collisionFound,
            iterations: iterations
        };
    };
    Particle.prototype.checkOverlap = function (position) {
        var container = this.container;
        var p = this;
        var overlapResult = p.isOverlapping();
        if (overlapResult.iterations >= container.particles.count) {
            container.particles.remove(this);
        }
        else if (overlapResult.collisionFound) {
            p.position.x = position ? position.x : Math.random() * container.canvas.size.width;
            p.position.y = position ? position.y : Math.random() * container.canvas.size.height;
            p.checkOverlap();
        }
    };
    Particle.prototype.startInfection = function (stage) {
        var container = this.container;
        var options = container.options;
        var stages = options.infection.stages;
        var stagesCount = stages.length;
        if (stage > stagesCount || stage < 0) {
            return;
        }
        this.infectionDelay = 0;
        this.infectionDelayStage = stage;
    };
    Particle.prototype.updateInfectionStage = function (stage) {
        var container = this.container;
        var options = container.options;
        var stagesCount = options.infection.stages.length;
        if (stage > stagesCount || stage < 0 || (this.infectionStage !== undefined && this.infectionStage > stage)) {
            return;
        }
        if (this.infectionTimeout !== undefined) {
            window.clearTimeout(this.infectionTimeout);
        }
        this.infectionStage = stage;
        this.infectionTime = 0;
    };
    Particle.prototype.updateInfection = function (delta) {
        var container = this.container;
        var options = container.options;
        var infection = options.infection;
        var stages = options.infection.stages;
        var stagesCount = stages.length;
        if (this.infectionDelay !== undefined && this.infectionDelayStage !== undefined) {
            var stage = this.infectionDelayStage;
            if (stage > stagesCount || stage < 0) {
                return;
            }
            if (this.infectionDelay > infection.delay * 1000) {
                this.infectionStage = stage;
                this.infectionTime = 0;
                delete this.infectionDelay;
                delete this.infectionDelayStage;
            }
            else {
                this.infectionDelay += delta;
            }
        }
        else {
            delete this.infectionDelay;
            delete this.infectionDelayStage;
        }
        if (this.infectionStage !== undefined && this.infectionTime !== undefined) {
            var infectionStage = stages[this.infectionStage];
            if (infectionStage.duration !== undefined && infectionStage.duration >= 0) {
                if (this.infectionTime > infectionStage.duration * 1000) {
                    this.nextInfectionStage();
                }
                else {
                    this.infectionTime += delta;
                }
            }
            else {
                this.infectionTime += delta;
            }
        }
        else {
            delete this.infectionStage;
            delete this.infectionTime;
        }
    };
    Particle.prototype.getPosition = function () {
        return {
            x: this.position.x + this.offset.x,
            y: this.position.y + this.offset.y
        };
    };
    Particle.prototype.destroy = function () {
        this.destroyed = true;
    };
    Particle.prototype.nextInfectionStage = function () {
        var container = this.container;
        var options = container.options;
        var stagesCount = options.infection.stages.length;
        if (stagesCount <= 0 || this.infectionStage === undefined) {
            return;
        }
        this.infectionTime = 0;
        if (stagesCount <= ++this.infectionStage) {
            if (options.infection.cure) {
                delete this.infectionStage;
                delete this.infectionTime;
                return;
            }
            else {
                this.infectionStage = 0;
                this.infectionTime = 0;
            }
        }
    };
    Particle.prototype.calcPosition = function (container, position) {
        for (var id in container.plugins) {
            var plugin = container.plugins[id];
            var pluginPos = plugin.particlePosition !== undefined ? plugin.particlePosition(position) : undefined;
            if (pluginPos !== undefined) {
                return pluginPos;
            }
        }
        var pos = { x: 0, y: 0 };
        pos.x = position ? position.x : Math.random() * container.canvas.size.width;
        pos.y = position ? position.y : Math.random() * container.canvas.size.height;
        if (pos.x > container.canvas.size.width - this.size.value * 2) {
            pos.x -= this.size.value;
        }
        else if (pos.x < this.size.value * 2) {
            pos.x += this.size.value;
        }
        if (pos.y > container.canvas.size.height - this.size.value * 2) {
            pos.y -= this.size.value;
        }
        else if (pos.y < this.size.value * 2) {
            pos.y += this.size.value;
        }
        return pos;
    };
    Particle.prototype.calculateVelocity = function () {
        var baseVelocity = Utils_1.Utils.getParticleBaseVelocity(this);
        var res = {
            horizontal: 0,
            vertical: 0
        };
        if (this.particlesOptions.move.straight) {
            res.horizontal = baseVelocity.x;
            res.vertical = baseVelocity.y;
            if (this.particlesOptions.move.random) {
                res.horizontal *= Math.random();
                res.vertical *= Math.random();
            }
        }
        else {
            res.horizontal = baseVelocity.x + Math.random() - 0.5;
            res.vertical = baseVelocity.y + Math.random() - 0.5;
        }
        return res;
    };
    return Particle;
}());
exports.Particle = Particle;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Mouse/Bubbler.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/Interactions/Mouse/Bubbler.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ProcessBubbleType_1 = __webpack_require__(/*! ../../../../Enums/ProcessBubbleType */ "./node_modules/tsparticles/dist/Enums/ProcessBubbleType.js");
var Utils_1 = __webpack_require__(/*! ../../../../Utils/Utils */ "./node_modules/tsparticles/dist/Utils/Utils.js");
var HoverMode_1 = __webpack_require__(/*! ../../../../Enums/Modes/HoverMode */ "./node_modules/tsparticles/dist/Enums/Modes/HoverMode.js");
var ClickMode_1 = __webpack_require__(/*! ../../../../Enums/Modes/ClickMode */ "./node_modules/tsparticles/dist/Enums/Modes/ClickMode.js");
var Constants_1 = __webpack_require__(/*! ../../../../Utils/Constants */ "./node_modules/tsparticles/dist/Utils/Constants.js");
var ColorUtils_1 = __webpack_require__(/*! ../../../../Utils/ColorUtils */ "./node_modules/tsparticles/dist/Utils/ColorUtils.js");
var Circle_1 = __webpack_require__(/*! ../../../../Utils/Circle */ "./node_modules/tsparticles/dist/Utils/Circle.js");
var Bubbler = (function () {
    function Bubbler() {
    }
    Bubbler.reset = function (particle) {
        delete particle.bubble.opacity;
        delete particle.bubble.radius;
        delete particle.bubble.color;
    };
    Bubbler.bubble = function (container, _delta) {
        var options = container.options;
        var events = options.interactivity.events;
        var onHover = events.onHover;
        var onClick = events.onClick;
        var hoverEnabled = onHover.enable;
        var hoverMode = onHover.mode;
        var clickEnabled = onClick.enable;
        var clickMode = onClick.mode;
        if (hoverEnabled && Utils_1.Utils.isInArray(HoverMode_1.HoverMode.bubble, hoverMode)) {
            this.hoverBubble(container);
        }
        else if (clickEnabled && Utils_1.Utils.isInArray(ClickMode_1.ClickMode.bubble, clickMode)) {
            this.clickBubble(container);
        }
    };
    Bubbler.process = function (container, particle, distMouse, timeSpent, data) {
        var bubbleParam = data.bubbleObj.optValue;
        if (bubbleParam === undefined) {
            return;
        }
        var options = container.options;
        var bubbleDuration = options.interactivity.modes.bubble.duration;
        var bubbleDistance = container.retina.bubbleModeDistance;
        var particlesParam = data.particlesObj.optValue;
        var pObjBubble = data.bubbleObj.value;
        var pObj = data.particlesObj.value || 0;
        var type = data.type;
        if (bubbleParam !== particlesParam) {
            if (!container.bubble.durationEnd) {
                if (distMouse <= bubbleDistance) {
                    var obj = pObjBubble !== null && pObjBubble !== void 0 ? pObjBubble : pObj;
                    if (obj !== bubbleParam) {
                        var value = pObj - (timeSpent * (pObj - bubbleParam) / bubbleDuration);
                        if (type === ProcessBubbleType_1.ProcessBubbleType.size) {
                            particle.bubble.radius = value;
                        }
                        if (type === ProcessBubbleType_1.ProcessBubbleType.opacity) {
                            particle.bubble.opacity = value;
                        }
                    }
                }
                else {
                    if (type === ProcessBubbleType_1.ProcessBubbleType.size) {
                        delete particle.bubble.radius;
                    }
                    if (type === ProcessBubbleType_1.ProcessBubbleType.opacity) {
                        delete particle.bubble.opacity;
                    }
                }
            }
            else if (pObjBubble) {
                if (type === ProcessBubbleType_1.ProcessBubbleType.size) {
                    delete particle.bubble.radius;
                }
                if (type === ProcessBubbleType_1.ProcessBubbleType.opacity) {
                    delete particle.bubble.opacity;
                }
            }
        }
    };
    Bubbler.clickBubble = function (container) {
        var _a;
        var options = container.options;
        var mouseClickPos = container.interactivity.mouse.clickPosition;
        if (mouseClickPos === undefined) {
            return;
        }
        var distance = container.retina.bubbleModeDistance;
        var query = container.particles.quadTree.query(new Circle_1.Circle(mouseClickPos.x, mouseClickPos.y, distance));
        for (var _i = 0, query_1 = query; _i < query_1.length; _i++) {
            var particle = query_1[_i];
            var pos = particle.getPosition();
            var distMouse = Utils_1.Utils.getDistance(pos, mouseClickPos);
            var timeSpent = (new Date().getTime() - (container.interactivity.mouse.clickTime || 0)) / 1000;
            if (container.bubble.clicking) {
                if (timeSpent > options.interactivity.modes.bubble.duration) {
                    container.bubble.durationEnd = true;
                }
                if (timeSpent > options.interactivity.modes.bubble.duration * 2) {
                    container.bubble.clicking = false;
                    container.bubble.durationEnd = false;
                }
                var sizeData = {
                    bubbleObj: {
                        optValue: container.retina.bubbleModeSize,
                        value: particle.bubble.radius,
                    },
                    particlesObj: {
                        optValue: (_a = particle.sizeValue) !== null && _a !== void 0 ? _a : container.retina.sizeValue,
                        value: particle.size.value,
                    },
                    type: ProcessBubbleType_1.ProcessBubbleType.size,
                };
                this.process(container, particle, distMouse, timeSpent, sizeData);
                var opacityData = {
                    bubbleObj: {
                        optValue: options.interactivity.modes.bubble.opacity,
                        value: particle.bubble.opacity,
                    },
                    particlesObj: {
                        optValue: particle.particlesOptions.opacity.value,
                        value: particle.opacity.value,
                    },
                    type: ProcessBubbleType_1.ProcessBubbleType.opacity,
                };
                this.process(container, particle, distMouse, timeSpent, opacityData);
                if (!container.bubble.durationEnd) {
                    if (distMouse <= container.retina.bubbleModeDistance) {
                        this.hoverBubbleColor(container, particle);
                    }
                    else {
                        delete particle.bubble.color;
                    }
                }
                else {
                    delete particle.bubble.color;
                }
            }
        }
    };
    Bubbler.hoverBubble = function (container) {
        var mousePos = container.interactivity.mouse.position;
        if (mousePos === undefined) {
            return;
        }
        var distance = container.retina.bubbleModeDistance;
        var query = container.particles.quadTree.query(new Circle_1.Circle(mousePos.x, mousePos.y, distance));
        for (var _i = 0, query_2 = query; _i < query_2.length; _i++) {
            var particle = query_2[_i];
            var pos = particle.getPosition();
            var distance_1 = Utils_1.Utils.getDistance(pos, mousePos);
            var ratio = 1 - distance_1 / container.retina.bubbleModeDistance;
            if (distance_1 <= container.retina.bubbleModeDistance) {
                if (ratio >= 0 && container.interactivity.status === Constants_1.Constants.mouseMoveEvent) {
                    this.hoverBubbleSize(container, particle, ratio);
                    this.hoverBubbleOpacity(container, particle, ratio);
                    this.hoverBubbleColor(container, particle);
                }
            }
            else {
                this.reset(particle);
            }
            if (container.interactivity.status === Constants_1.Constants.mouseLeaveEvent) {
                this.reset(particle);
            }
        }
    };
    Bubbler.hoverBubbleSize = function (container, particle, ratio) {
        var _a;
        var modeSize = container.retina.bubbleModeSize;
        if (modeSize === undefined) {
            return;
        }
        var optSize = (_a = particle.sizeValue) !== null && _a !== void 0 ? _a : container.retina.sizeValue;
        var pSize = particle.size.value;
        var size = this.calculateBubbleValue(pSize, modeSize, optSize, ratio);
        if (size !== undefined) {
            particle.bubble.radius = size;
        }
    };
    Bubbler.hoverBubbleOpacity = function (container, particle, ratio) {
        var options = container.options;
        var modeOpacity = options.interactivity.modes.bubble.opacity;
        if (modeOpacity === undefined) {
            return;
        }
        var optOpacity = particle.particlesOptions.opacity.value;
        var pOpacity = particle.opacity.value;
        var opacity = this.calculateBubbleValue(pOpacity, modeOpacity, optOpacity, ratio);
        if (opacity !== undefined) {
            particle.bubble.opacity = opacity;
        }
    };
    Bubbler.calculateBubbleValue = function (particleValue, modeValue, optionsValue, ratio) {
        if (modeValue > optionsValue) {
            var size = particleValue + (modeValue - optionsValue) * ratio;
            return Utils_1.Utils.clamp(size, particleValue, modeValue);
        }
        else if (modeValue < optionsValue) {
            var size = particleValue - (optionsValue - modeValue) * ratio;
            return Utils_1.Utils.clamp(size, modeValue, particleValue);
        }
    };
    Bubbler.hoverBubbleColor = function (container, particle) {
        var options = container.options;
        if (particle.bubble.color === undefined) {
            var modeColor = options.interactivity.modes.bubble.color;
            if (modeColor === undefined) {
                return;
            }
            particle.bubble.color = ColorUtils_1.ColorUtils.colorToRgb(modeColor instanceof Array ?
                Utils_1.Utils.itemFromArray(modeColor) :
                modeColor);
        }
    };
    return Bubbler;
}());
exports.Bubbler = Bubbler;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Mouse/Connector.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/Interactions/Mouse/Connector.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = __webpack_require__(/*! ../../../../Utils/Circle */ "./node_modules/tsparticles/dist/Utils/Circle.js");
var Connector = (function () {
    function Connector() {
    }
    Connector.connect = function (container, _delta) {
        var options = container.options;
        if (options.interactivity.events.onHover.enable && container.interactivity.status == 'mousemove') {
            var mousePos = container.interactivity.mouse.position;
            if (!mousePos) {
                return;
            }
            var distance = Math.abs(container.retina.connectModeRadius);
            var query = container.particles.quadTree.query(new Circle_1.Circle(mousePos.x, mousePos.y, distance));
            var i = 0;
            for (var _i = 0, query_1 = query; _i < query_1.length; _i++) {
                var p1 = query_1[_i];
                var pos1 = p1.getPosition();
                for (var _a = 0, _b = query.slice(i + 1); _a < _b.length; _a++) {
                    var p2 = _b[_a];
                    var pos2 = p2.getPosition();
                    var distMax = Math.abs(container.retina.connectModeDistance);
                    var xDiff = Math.abs(pos1.x - pos2.x);
                    var yDiff = Math.abs(pos1.y - pos2.y);
                    if (xDiff < distMax && yDiff < distMax) {
                        container.canvas.drawConnectLine(p1, p2);
                    }
                }
                ++i;
            }
        }
    };
    return Connector;
}());
exports.Connector = Connector;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Mouse/Grabber.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/Interactions/Mouse/Grabber.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = __webpack_require__(/*! ../../../../Utils/Constants */ "./node_modules/tsparticles/dist/Utils/Constants.js");
var Utils_1 = __webpack_require__(/*! ../../../../Utils/Utils */ "./node_modules/tsparticles/dist/Utils/Utils.js");
var Circle_1 = __webpack_require__(/*! ../../../../Utils/Circle */ "./node_modules/tsparticles/dist/Utils/Circle.js");
var Grabber = (function () {
    function Grabber() {
    }
    Grabber.grab = function (container, _delta) {
        var options = container.options;
        var interactivity = options.interactivity;
        if (interactivity.events.onHover.enable && container.interactivity.status === Constants_1.Constants.mouseMoveEvent) {
            var mousePos = container.interactivity.mouse.position;
            if (mousePos === undefined) {
                return;
            }
            var distance = container.retina.grabModeDistance;
            var query = container.particles.quadTree.query(new Circle_1.Circle(mousePos.x, mousePos.y, distance));
            for (var _i = 0, query_1 = query; _i < query_1.length; _i++) {
                var particle = query_1[_i];
                var pos = particle.getPosition();
                var distance_1 = Utils_1.Utils.getDistance(pos, mousePos);
                if (distance_1 <= container.retina.grabModeDistance) {
                    var lineOpacity = interactivity.modes.grab.lineLinked.opacity;
                    var grabDistance = container.retina.grabModeDistance;
                    var opacityLine = lineOpacity - (distance_1 * lineOpacity) / grabDistance;
                    if (opacityLine > 0) {
                        container.canvas.drawGrabLine(particle, opacityLine, mousePos);
                    }
                }
            }
        }
    };
    return Grabber;
}());
exports.Grabber = Grabber;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Mouse/Repulser.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/Interactions/Mouse/Repulser.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ClickMode_1 = __webpack_require__(/*! ../../../../Enums/Modes/ClickMode */ "./node_modules/tsparticles/dist/Enums/Modes/ClickMode.js");
var HoverMode_1 = __webpack_require__(/*! ../../../../Enums/Modes/HoverMode */ "./node_modules/tsparticles/dist/Enums/Modes/HoverMode.js");
var OutMode_1 = __webpack_require__(/*! ../../../../Enums/OutMode */ "./node_modules/tsparticles/dist/Enums/OutMode.js");
var Utils_1 = __webpack_require__(/*! ../../../../Utils/Utils */ "./node_modules/tsparticles/dist/Utils/Utils.js");
var DivMode_1 = __webpack_require__(/*! ../../../../Enums/Modes/DivMode */ "./node_modules/tsparticles/dist/Enums/Modes/DivMode.js");
var Constants_1 = __webpack_require__(/*! ../../../../Utils/Constants */ "./node_modules/tsparticles/dist/Utils/Constants.js");
var Circle_1 = __webpack_require__(/*! ../../../../Utils/Circle */ "./node_modules/tsparticles/dist/Utils/Circle.js");
var Repulser = (function () {
    function Repulser() {
    }
    Repulser.repulse = function (container, _delta) {
        var options = container.options;
        var interactivity = options.interactivity;
        var hoverEnabled = interactivity.events.onHover.enable;
        var clickEnabled = interactivity.events.onClick.enable;
        var mouseMoveStatus = container.interactivity.status === Constants_1.Constants.mouseMoveEvent;
        var hoverMode = interactivity.events.onHover.mode;
        var clickMode = interactivity.events.onClick.mode;
        var divMode = interactivity.events.onDiv.mode;
        if (mouseMoveStatus && hoverEnabled && Utils_1.Utils.isInArray(HoverMode_1.HoverMode.repulse, hoverMode)) {
            this.hoverRepulse(container);
        }
        else if (clickEnabled && Utils_1.Utils.isInArray(ClickMode_1.ClickMode.repulse, clickMode)) {
            this.clickRepulse(container);
        }
        else if (interactivity.events.onDiv.enable && Utils_1.Utils.isInArray(DivMode_1.DivMode.repulse, divMode)) {
            this.divRepulse(container);
        }
    };
    Repulser.divRepulse = function (container) {
        var options = container.options;
        var elem = document.getElementById(options.interactivity.events.onDiv.elementId);
        if (!elem) {
            return;
        }
        var pos = {
            x: (elem.offsetLeft + elem.offsetWidth / 2),
            y: (elem.offsetTop + elem.offsetHeight / 2),
        };
        var divWidth = elem.offsetWidth / 2;
        if (container.retina.isRetina) {
            pos.x *= container.retina.pixelRatio;
            pos.y *= container.retina.pixelRatio;
            divWidth *= container.retina.pixelRatio;
        }
        var repulseRadius = divWidth;
        this.processRepulse(container, pos, repulseRadius);
    };
    Repulser.hoverRepulse = function (container) {
        var mousePos = container.interactivity.mouse.position;
        if (!mousePos) {
            return;
        }
        var repulseRadius = container.retina.repulseModeDistance;
        this.processRepulse(container, mousePos, repulseRadius);
    };
    Repulser.processRepulse = function (container, position, repulseRadius) {
        var query = container.particles.quadTree.query(new Circle_1.Circle(position.x, position.y, repulseRadius));
        for (var _i = 0, query_1 = query; _i < query_1.length; _i++) {
            var particle = query_1[_i];
            var dx = particle.position.x - position.x;
            var dy = particle.position.y - position.y;
            var dist = Math.sqrt(dx * dx + dy * dy);
            var normVec = {
                x: dx / dist,
                y: dy / dist,
            };
            var velocity = container.options.interactivity.modes.repulse.speed * 100;
            var repulseFactor = Utils_1.Utils.clamp((1 - Math.pow(dist / repulseRadius, 2)) * velocity, 0, 50);
            var outMode = particle.particlesOptions.move.outMode;
            var sizeValue = particle.size.value;
            var pos = {
                x: particle.position.x + normVec.x * repulseFactor,
                y: particle.position.y + normVec.y * repulseFactor,
            };
            if (outMode === OutMode_1.OutMode.bounce ||
                outMode === OutMode_1.OutMode.bounceVertical ||
                outMode === OutMode_1.OutMode.bounceHorizontal) {
                var isInside = {
                    horizontal: pos.x - sizeValue > 0 && pos.x + sizeValue < container.canvas.size.width,
                    vertical: pos.y - sizeValue > 0 && pos.y + sizeValue < container.canvas.size.height,
                };
                if (outMode === OutMode_1.OutMode.bounceVertical || isInside.horizontal) {
                    particle.position.x = pos.x;
                }
                if (outMode === OutMode_1.OutMode.bounceHorizontal || isInside.vertical) {
                    particle.position.y = pos.y;
                }
            }
            else {
                particle.position.x = pos.x;
                particle.position.y = pos.y;
            }
        }
    };
    Repulser.clickRepulse = function (container) {
        if (!container.repulse.finish) {
            if (!container.repulse.count) {
                container.repulse.count = 0;
            }
            container.repulse.count++;
            if (container.repulse.count === container.particles.count) {
                container.repulse.finish = true;
            }
        }
        if (container.repulse.clicking) {
            var repulseDistance = container.retina.repulseModeDistance;
            var repulseRadius = Math.pow(repulseDistance / 6, 3);
            var mouseClickPos = container.interactivity.mouse.clickPosition;
            if (mouseClickPos === undefined) {
                return;
            }
            var range = new Circle_1.Circle(mouseClickPos.x, mouseClickPos.y, repulseRadius);
            var query = container.particles.quadTree.query(range);
            for (var _i = 0, query_2 = query; _i < query_2.length; _i++) {
                var particle = query_2[_i];
                if ((particle === null || particle === void 0 ? void 0 : particle.position) === undefined) {
                    continue;
                }
                var dx = mouseClickPos.x - particle.position.x;
                var dy = mouseClickPos.y - particle.position.y;
                var d = dx * dx + dy * dy;
                var velocity = container.options.interactivity.modes.repulse.speed;
                var force = -repulseRadius * velocity / d;
                if (d <= repulseRadius) {
                    container.repulse.particles.push(particle);
                    this.processClickRepulse(container, particle, dx, dy, force);
                }
            }
        }
        else if (container.repulse.clicking === false) {
            for (var _a = 0, _b = container.repulse.particles; _a < _b.length; _a++) {
                var particle = _b[_a];
                particle.velocity.horizontal = particle.initialVelocity.horizontal;
                particle.velocity.vertical = particle.initialVelocity.vertical;
            }
            container.repulse.particles = [];
        }
    };
    Repulser.processClickRepulse = function (container, particle, dx, dy, force) {
        var options = container.options;
        var f = Math.atan2(dy, dx);
        particle.velocity.horizontal = force * Math.cos(f);
        particle.velocity.vertical = force * Math.sin(f);
        var outMode = options.particles.move.outMode;
        if (outMode === OutMode_1.OutMode.bounce || outMode === OutMode_1.OutMode.bounceHorizontal || outMode === OutMode_1.OutMode.bounceVertical) {
            var pos = {
                x: particle.position.x + particle.velocity.horizontal,
                y: particle.position.y + particle.velocity.vertical,
            };
            if (outMode !== OutMode_1.OutMode.bounceVertical) {
                if (pos.x + particle.size.value > container.canvas.size.width ||
                    pos.x - particle.size.value < 0) {
                    particle.velocity.horizontal = -particle.velocity.horizontal;
                }
            }
            if (outMode !== OutMode_1.OutMode.bounceHorizontal) {
                if (pos.y + particle.size.value > container.canvas.size.height ||
                    pos.y - particle.size.value < 0) {
                    particle.velocity.vertical = -particle.velocity.vertical;
                }
            }
        }
    };
    return Repulser;
}());
exports.Repulser = Repulser;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/Attractor.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/Attractor.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = __webpack_require__(/*! ../../../../Utils/Circle */ "./node_modules/tsparticles/dist/Utils/Circle.js");
var Attractor = (function () {
    function Attractor() {
    }
    Attractor.attract = function (p1, container, _delta) {
        var _a;
        var options = container.options;
        var distance = (_a = p1.lineLinkedDistance) !== null && _a !== void 0 ? _a : container.retina.lineLinkedDistance;
        var pos1 = p1.getPosition();
        var query = container.particles.quadTree.query(new Circle_1.Circle(pos1.x, pos1.y, distance));
        for (var _i = 0, query_1 = query; _i < query_1.length; _i++) {
            var p2 = query_1[_i];
            if (p1 === p2 || p2.particlesOptions.move.attract.enable) {
                continue;
            }
            var pos2 = p2.getPosition();
            var dx = pos1.x - pos2.x;
            var dy = pos1.y - pos2.y;
            var rotate = options.particles.move.attract.rotate;
            var ax = dx / (rotate.x * 1000);
            var ay = dy / (rotate.y * 1000);
            p1.velocity.horizontal -= ax;
            p1.velocity.vertical -= ay;
            p2.velocity.horizontal += ax;
            p2.velocity.vertical += ay;
        }
    };
    return Attractor;
}());
exports.Attractor = Attractor;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/Collider.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/Collider.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(/*! ../../../../Utils/Utils */ "./node_modules/tsparticles/dist/Utils/Utils.js");
var CollisionMode_1 = __webpack_require__(/*! ../../../../Enums/CollisionMode */ "./node_modules/tsparticles/dist/Enums/CollisionMode.js");
var Circle_1 = __webpack_require__(/*! ../../../../Utils/Circle */ "./node_modules/tsparticles/dist/Utils/Circle.js");
var Collider = (function () {
    function Collider() {
    }
    Collider.collide = function (p1, container, _delta) {
        var pos1 = p1.getPosition();
        var query = container.particles.quadTree.query(new Circle_1.Circle(pos1.x, pos1.y, p1.size.value * 2));
        for (var _i = 0, query_1 = query; _i < query_1.length; _i++) {
            var p2 = query_1[_i];
            if (p1 === p2 || !p2.particlesOptions.collisions.enable ||
                p1.particlesOptions.collisions.mode !== p2.particlesOptions.collisions.mode) {
                continue;
            }
            var pos2 = p2.getPosition();
            var dist = Utils_1.Utils.getDistance(pos1, pos2);
            var defaultSize = container.retina.sizeValue;
            var radius1 = this.getRadius(p1, defaultSize);
            var radius2 = this.getRadius(p2, defaultSize);
            var distP = radius1 + radius2;
            if (dist <= distP) {
                this.resolveCollision(p1, p2);
            }
        }
    };
    Collider.getRadius = function (particle, fallback) {
        return particle.bubble.radius || particle.size.value || fallback;
    };
    Collider.resolveCollision = function (p1, p2) {
        var pos1 = p1.getPosition();
        var pos2 = p2.getPosition();
        switch (p1.particlesOptions.collisions.mode) {
            case CollisionMode_1.CollisionMode.bounce:
                var xVelocityDiff = p1.velocity.horizontal - p2.velocity.horizontal;
                var yVelocityDiff = p1.velocity.vertical - p2.velocity.vertical;
                var xDist = pos2.x - pos1.x;
                var yDist = pos2.y - pos1.y;
                if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
                    var angle = -Math.atan2(pos2.y - pos1.y, pos2.x - pos1.x);
                    var m1 = p1.size.value;
                    var m2 = p2.size.value;
                    var u1 = this.rotate(p1.velocity, angle);
                    var u2 = this.rotate(p2.velocity, angle);
                    var v1 = {
                        horizontal: u1.horizontal * (m1 - m2) / (m1 + m2) + u2.horizontal * 2 * m2 / (m1 + m2),
                        vertical: u1.vertical,
                    };
                    var v2 = {
                        horizontal: u2.horizontal * (m1 - m2) / (m1 + m2) + u1.horizontal * 2 * m2 / (m1 + m2),
                        vertical: u2.vertical,
                    };
                    var vFinal1 = this.rotate(v1, -angle);
                    var vFinal2 = this.rotate(v2, -angle);
                    p1.velocity.horizontal = vFinal1.horizontal;
                    p1.velocity.vertical = vFinal1.vertical;
                    p2.velocity.horizontal = vFinal2.horizontal;
                    p2.velocity.vertical = vFinal2.vertical;
                }
        }
    };
    Collider.rotate = function (velocity, angle) {
        return {
            horizontal: velocity.horizontal * Math.cos(angle) - velocity.vertical * Math.sin(angle),
            vertical: velocity.horizontal * Math.sin(angle) + velocity.vertical * Math.cos(angle),
        };
    };
    return Collider;
}());
exports.Collider = Collider;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/Infecter.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/Infecter.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = __webpack_require__(/*! ../../../../Utils/Circle */ "./node_modules/tsparticles/dist/Utils/Circle.js");
var Infecter = (function () {
    function Infecter() {
    }
    Infecter.infect = function (p1, container, delta) {
        var _a, _b;
        p1.updateInfection(delta);
        if (p1.infectionStage === undefined) {
            return;
        }
        var options = container.options;
        var infectionOptions = options.infection;
        if (!infectionOptions.enable || infectionOptions.stages.length < 1) {
            return;
        }
        var infectionStage1 = infectionOptions.stages[p1.infectionStage];
        var pxRatio = container.retina.pixelRatio;
        var radius = p1.size.value * 2 + infectionStage1.radius * pxRatio;
        var pos = p1.getPosition();
        var infectedStage1 = (_a = infectionStage1.infectedStage) !== null && _a !== void 0 ? _a : p1.infectionStage;
        var query = container.particles.quadTree.query(new Circle_1.Circle(pos.x, pos.y, radius))
            .filter(function (t) { return t.infectionStage === undefined || t.infectionStage !== p1.infectionStage; });
        var infections = infectionStage1.rate;
        var neighbors = query.length;
        for (var _i = 0, query_1 = query; _i < query_1.length; _i++) {
            var p2 = query_1[_i];
            if (Math.random() < infections / neighbors) {
                if (p2.infectionStage === undefined) {
                    p2.startInfection(infectedStage1);
                }
                else if (p2.infectionStage < p1.infectionStage) {
                    p2.updateInfectionStage(infectedStage1);
                }
                else if (p2.infectionStage > p1.infectionStage) {
                    var infectionStage2 = infectionOptions.stages[p2.infectionStage];
                    var infectedStage2 = (_b = infectionStage2 === null || infectionStage2 === void 0 ? void 0 : infectionStage2.infectedStage) !== null && _b !== void 0 ? _b : p2.infectionStage;
                    p1.updateInfectionStage(infectedStage2);
                }
            }
        }
    };
    return Infecter;
}());
exports.Infecter = Infecter;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/InteractionManager.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/InteractionManager.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Linker_1 = __webpack_require__(/*! ./Linker */ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/Linker.js");
var Attractor_1 = __webpack_require__(/*! ./Attractor */ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/Attractor.js");
var Collider_1 = __webpack_require__(/*! ./Collider */ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/Collider.js");
var Infecter_1 = __webpack_require__(/*! ./Infecter */ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/Infecter.js");
var InteractionManager = (function () {
    function InteractionManager() {
    }
    InteractionManager.interact = function (p1, container, delta) {
        if (p1.particlesOptions.lineLinked.enable) {
            Linker_1.Linker.link(p1, container, delta);
        }
        if (p1.particlesOptions.move.attract.enable) {
            Attractor_1.Attractor.attract(p1, container, delta);
        }
        if (p1.particlesOptions.collisions.enable) {
            Collider_1.Collider.collide(p1, container, delta);
        }
        if (container.options.infection.enable) {
            Infecter_1.Infecter.infect(p1, container, delta);
        }
    };
    return InteractionManager;
}());
exports.InteractionManager = InteractionManager;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/Linker.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/Linker.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ColorUtils_1 = __webpack_require__(/*! ../../../../Utils/ColorUtils */ "./node_modules/tsparticles/dist/Utils/ColorUtils.js");
var Constants_1 = __webpack_require__(/*! ../../../../Utils/Constants */ "./node_modules/tsparticles/dist/Utils/Constants.js");
var Utils_1 = __webpack_require__(/*! ../../../../Utils/Utils */ "./node_modules/tsparticles/dist/Utils/Utils.js");
var Circle_1 = __webpack_require__(/*! ../../../../Utils/Circle */ "./node_modules/tsparticles/dist/Utils/Circle.js");
var Linker = (function () {
    function Linker() {
    }
    Linker.link = function (p1, container, _delta) {
        var _a;
        var optOpacity = p1.particlesOptions.lineLinked.opacity;
        var optDistance = (_a = p1.lineLinkedDistance) !== null && _a !== void 0 ? _a : container.retina.lineLinkedDistance;
        var pos1 = p1.getPosition();
        var query = container.particles.quadTree.query(new Circle_1.Circle(pos1.x, pos1.y, optDistance));
        for (var _i = 0, query_1 = query; _i < query_1.length; _i++) {
            var p2 = query_1[_i];
            if (p1 === p2 || !p2.particlesOptions.lineLinked.enable) {
                continue;
            }
            var pos2 = p2.getPosition();
            var distance = Utils_1.Utils.getDistance(pos1, pos2);
            var opacityLine = optOpacity - (distance * optOpacity) / optDistance;
            if (opacityLine > 0) {
                if (!container.particles.lineLinkedColor) {
                    var optColor = p1.particlesOptions.lineLinked.color;
                    var color = typeof optColor === "string" ? optColor : optColor.value;
                    if (color === Constants_1.Constants.randomColorValue) {
                        if (p1.particlesOptions.lineLinked.consent) {
                            container.particles.lineLinkedColor = ColorUtils_1.ColorUtils.colorToRgb({ value: color });
                        }
                        else if (p1.particlesOptions.lineLinked.blink) {
                            container.particles.lineLinkedColor = Constants_1.Constants.randomColorValue;
                        }
                        else {
                            container.particles.lineLinkedColor = Constants_1.Constants.midColorValue;
                        }
                    }
                    else {
                        container.particles.lineLinkedColor = ColorUtils_1.ColorUtils.colorToRgb({ value: color });
                    }
                }
                if (p2.links.map(function (t) { return t.destination; }).indexOf(p1) == -1 &&
                    p1.links.map(function (t) { return t.destination; }).indexOf(p2) == -1) {
                    p1.links.push({
                        destination: p2,
                        opacity: opacityLine,
                    });
                }
            }
        }
    };
    return Linker;
}());
exports.Linker = Linker;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/Mover.js":
/*!**************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/Mover.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(/*! ../../Utils/Utils */ "./node_modules/tsparticles/dist/Utils/Utils.js");
var HoverMode_1 = __webpack_require__(/*! ../../Enums/Modes/HoverMode */ "./node_modules/tsparticles/dist/Enums/Modes/HoverMode.js");
var Mover = (function () {
    function Mover(container, particle) {
        this.container = container;
        this.particle = particle;
    }
    Mover.calcNoiseValue = function (input, size, noiseValue) {
        return Math.floor(input / size) / noiseValue.value + noiseValue.offset;
    };
    Mover.prototype.move = function (delta) {
        var _a;
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        var particlesOptions = particle.particlesOptions;
        if (particlesOptions.move.enable) {
            var slowFactor = this.getProximitySpeedFactor();
            var deltaFactor = options.fpsLimit > 0 ? (60 * delta) / 1000 : 3.6;
            var baseSpeed = (_a = particle.moveSpeed) !== null && _a !== void 0 ? _a : container.retina.moveSpeed;
            var moveSpeed = baseSpeed / 2 * slowFactor * deltaFactor;
            var noiseOptions = particlesOptions.move.noise;
            var noiseEnabled = noiseOptions.enable;
            if (noiseEnabled) {
                if (particle.lastNoiseTime > particle.noiseDelay) {
                    var position = particle.position;
                    var noiseFactor = noiseOptions.factor;
                    var simplex = container.simplex;
                    var noise = {
                        angle: simplex.noise3D(Mover.calcNoiseValue(position.x, particle.size.value, noiseFactor.horizontal), Mover.calcNoiseValue(position.y, particle.size.value, noiseFactor.horizontal), container.particles.noiseZ),
                        length: simplex.noise3D(Mover.calcNoiseValue(position.x, particle.size.value, noiseFactor.vertical), Mover.calcNoiseValue(position.y, particle.size.value, noiseFactor.vertical), container.particles.noiseZ),
                    };
                    particle.velocity.horizontal += Math.cos(noise.angle) * noise.length;
                    particle.velocity.horizontal = Utils_1.Utils.clamp(particle.velocity.horizontal, -1, 1);
                    particle.velocity.vertical += Math.sin(noise.angle) * noise.length;
                    particle.velocity.vertical = Utils_1.Utils.clamp(particle.velocity.vertical, -1, 1);
                    particle.lastNoiseTime -= particle.noiseDelay;
                }
                else {
                    particle.lastNoiseTime += delta;
                }
            }
            particle.position.x += particle.velocity.horizontal * moveSpeed;
            particle.position.y += particle.velocity.vertical * moveSpeed;
            if (particlesOptions.move.vibrate) {
                particle.position.x += Math.sin(particle.position.x * Math.cos(particle.position.y));
                particle.position.y += Math.cos(particle.position.y * Math.sin(particle.position.x));
            }
        }
        this.moveParallax(delta);
    };
    Mover.prototype.moveParallax = function (_delta) {
        var container = this.container;
        var options = container.options;
        if (!options.interactivity.events.onHover.parallax.enable) {
            return;
        }
        var particle = this.particle;
        var parallaxForce = options.interactivity.events.onHover.parallax.force;
        var mousePos = container.interactivity.mouse.position;
        if (!mousePos) {
            return;
        }
        var windowDimension = {
            height: window.innerHeight / 2,
            width: window.innerWidth / 2,
        };
        var parallaxSmooth = options.interactivity.events.onHover.parallax.smooth;
        var tmp = {
            x: (mousePos.x - windowDimension.width) * (particle.size.value / parallaxForce),
            y: (mousePos.y - windowDimension.height) * (particle.size.value / parallaxForce),
        };
        particle.offset.x += (tmp.x - particle.offset.x) / parallaxSmooth;
        particle.offset.y += (tmp.y - particle.offset.y) / parallaxSmooth;
    };
    Mover.prototype.getProximitySpeedFactor = function () {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        var active = Utils_1.Utils.isInArray(HoverMode_1.HoverMode.slow, options.interactivity.events.onHover.mode);
        if (!active) {
            return 1;
        }
        var mousePos = this.container.interactivity.mouse.position;
        if (!mousePos) {
            return 1;
        }
        var particlePos = particle.getPosition();
        var dist = Utils_1.Utils.getDistance(mousePos, particlePos);
        var radius = container.retina.slowModeRadius;
        if (dist > radius) {
            return 1;
        }
        var proximityFactor = (dist / radius) || 0;
        var slowFactor = options.interactivity.modes.slow.factor;
        return proximityFactor / slowFactor;
    };
    return Mover;
}());
exports.Mover = Mover;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/ShapeDrawers/CircleDrawer.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/ShapeDrawers/CircleDrawer.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CircleDrawer = (function () {
    function CircleDrawer() {
    }
    CircleDrawer.prototype.draw = function (context, particle, radius, _opacity) {
        context.arc(0, 0, radius, 0, Math.PI * 2, false);
    };
    return CircleDrawer;
}());
exports.CircleDrawer = CircleDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/ShapeDrawers/ImageDrawer.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/ShapeDrawers/ImageDrawer.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var Utils_1 = __webpack_require__(/*! ../../../Utils/Utils */ "./node_modules/tsparticles/dist/Utils/Utils.js");
var ShapeType_1 = __webpack_require__(/*! ../../../Enums/ShapeType */ "./node_modules/tsparticles/dist/Enums/ShapeType.js");
var ImageDrawer = (function () {
    function ImageDrawer() {
        this.images = [];
    }
    ImageDrawer.prototype.getImages = function (container) {
        var containerImages = this.images.filter(function (t) { return t.id === container.id; });
        if (!containerImages.length) {
            this.images.push({
                id: container.id,
                images: []
            });
            return this.getImages(container);
        }
        else {
            return containerImages[0];
        }
    };
    ImageDrawer.prototype.addImage = function (container, image) {
        var containerImages = this.getImages(container);
        containerImages === null || containerImages === void 0 ? void 0 : containerImages.images.push(image);
    };
    ImageDrawer.prototype.init = function (container) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var options, shapeOptions, imageOptions, _i, imageOptions_1, optionsImage;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        options = container.options;
                        shapeOptions = options.particles.shape;
                        if (!Utils_1.Utils.isInArray(ShapeType_1.ShapeType.image, shapeOptions.type) &&
                            !Utils_1.Utils.isInArray(ShapeType_1.ShapeType.images, shapeOptions.type)) {
                            return [2];
                        }
                        imageOptions = (_a = shapeOptions.options[ShapeType_1.ShapeType.images]) !== null && _a !== void 0 ? _a : shapeOptions.options[ShapeType_1.ShapeType.image];
                        if (!(imageOptions instanceof Array)) return [3, 5];
                        _i = 0, imageOptions_1 = imageOptions;
                        _b.label = 1;
                    case 1:
                        if (!(_i < imageOptions_1.length)) return [3, 4];
                        optionsImage = imageOptions_1[_i];
                        return [4, this.loadImageShape(container, optionsImage)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3, 1];
                    case 4: return [3, 7];
                    case 5: return [4, this.loadImageShape(container, imageOptions)];
                    case 6:
                        _b.sent();
                        _b.label = 7;
                    case 7: return [2];
                }
            });
        });
    };
    ImageDrawer.prototype.destroy = function () {
        this.images = [];
    };
    ImageDrawer.prototype.loadImageShape = function (container, imageShape) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var image, _a, _b;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 5, , 6]);
                        if (!imageShape.replaceColor) return [3, 2];
                        return [4, Utils_1.Utils.downloadSvgImage(imageShape.src)];
                    case 1:
                        _a = _c.sent();
                        return [3, 4];
                    case 2: return [4, Utils_1.Utils.loadImage(imageShape.src)];
                    case 3:
                        _a = _c.sent();
                        _c.label = 4;
                    case 4:
                        image = _a;
                        this.addImage(container, image);
                        return [3, 6];
                    case 5:
                        _b = _c.sent();
                        console.log("tsParticles error - " + imageShape.src + " not found");
                        return [3, 6];
                    case 6: return [2];
                }
            });
        });
    };
    ImageDrawer.prototype.draw = function (context, particle, radius, opacity) {
        var _a, _b;
        if (!context) {
            return;
        }
        var image = particle.image;
        var element = (_a = image === null || image === void 0 ? void 0 : image.data) === null || _a === void 0 ? void 0 : _a.element;
        if (!element) {
            return;
        }
        var ratio = (_b = image === null || image === void 0 ? void 0 : image.ratio) !== null && _b !== void 0 ? _b : 1;
        var pos = {
            x: -radius,
            y: -radius
        };
        if (!(image === null || image === void 0 ? void 0 : image.data.svgData) || !(image === null || image === void 0 ? void 0 : image.replaceColor)) {
            context.globalAlpha = opacity;
        }
        context.drawImage(element, pos.x, pos.y, radius * 2, radius * 2 / ratio);
        if (!(image === null || image === void 0 ? void 0 : image.data.svgData) || !(image === null || image === void 0 ? void 0 : image.replaceColor)) {
            context.globalAlpha = 1;
        }
    };
    return ImageDrawer;
}());
exports.ImageDrawer = ImageDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/ShapeDrawers/LineDrawer.js":
/*!********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/ShapeDrawers/LineDrawer.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LineDrawer = (function () {
    function LineDrawer() {
    }
    LineDrawer.prototype.draw = function (context, particle, radius, _opacity) {
        context.moveTo(0, -radius / 2);
        context.lineTo(0, radius / 2);
    };
    return LineDrawer;
}());
exports.LineDrawer = LineDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/ShapeDrawers/PolygonDrawer.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/ShapeDrawers/PolygonDrawer.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var PolygonDrawerBase_1 = __webpack_require__(/*! ./PolygonDrawerBase */ "./node_modules/tsparticles/dist/Core/Particle/ShapeDrawers/PolygonDrawerBase.js");
var PolygonDrawer = (function (_super) {
    tslib_1.__extends(PolygonDrawer, _super);
    function PolygonDrawer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PolygonDrawer.prototype.getSidesData = function (particle, radius) {
        var _a, _b;
        var polygon = particle.shapeData;
        var sides = (_b = (_a = polygon === null || polygon === void 0 ? void 0 : polygon.sides) !== null && _a !== void 0 ? _a : polygon === null || polygon === void 0 ? void 0 : polygon.nb_sides) !== null && _b !== void 0 ? _b : 5;
        return {
            count: {
                denominator: 1,
                numerator: sides,
            },
            length: radius * 2.66 / (sides / 3),
        };
    };
    PolygonDrawer.prototype.getCenter = function (particle, radius) {
        var _a, _b;
        var polygon = particle.shapeData;
        var sides = (_b = (_a = polygon === null || polygon === void 0 ? void 0 : polygon.sides) !== null && _a !== void 0 ? _a : polygon === null || polygon === void 0 ? void 0 : polygon.nb_sides) !== null && _b !== void 0 ? _b : 5;
        return {
            x: -radius / (sides / 3.5),
            y: -radius / (2.66 / 3.5),
        };
    };
    return PolygonDrawer;
}(PolygonDrawerBase_1.PolygonDrawerBase));
exports.PolygonDrawer = PolygonDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/ShapeDrawers/PolygonDrawerBase.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/ShapeDrawers/PolygonDrawerBase.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PolygonDrawerBase = (function () {
    function PolygonDrawerBase() {
    }
    PolygonDrawerBase.prototype.draw = function (context, particle, radius, _opacity) {
        var start = this.getCenter(particle, radius);
        var side = this.getSidesData(particle, radius);
        var sideCount = side.count.numerator * side.count.denominator;
        var decimalSides = side.count.numerator / side.count.denominator;
        var interiorAngleDegrees = (180 * (decimalSides - 2)) / decimalSides;
        var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180;
        if (!context) {
            return;
        }
        context.beginPath();
        context.translate(start.x, start.y);
        context.moveTo(0, 0);
        for (var i = 0; i < sideCount; i++) {
            context.lineTo(side.length, 0);
            context.translate(side.length, 0);
            context.rotate(interiorAngle);
        }
    };
    return PolygonDrawerBase;
}());
exports.PolygonDrawerBase = PolygonDrawerBase;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/ShapeDrawers/SquareDrawer.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/ShapeDrawers/SquareDrawer.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SquareDrawer = (function () {
    function SquareDrawer() {
    }
    SquareDrawer.prototype.draw = function (context, particle, radius, _opacity) {
        context.rect(-radius, -radius, radius * 2, radius * 2);
    };
    return SquareDrawer;
}());
exports.SquareDrawer = SquareDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/ShapeDrawers/StarDrawer.js":
/*!********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/ShapeDrawers/StarDrawer.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var PolygonDrawerBase_1 = __webpack_require__(/*! ./PolygonDrawerBase */ "./node_modules/tsparticles/dist/Core/Particle/ShapeDrawers/PolygonDrawerBase.js");
var StarDrawer = (function (_super) {
    tslib_1.__extends(StarDrawer, _super);
    function StarDrawer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StarDrawer.prototype.getSidesData = function (particle, radius) {
        var _a;
        var polygon = particle.shapeData;
        var sides = (_a = polygon === null || polygon === void 0 ? void 0 : polygon.sides) !== null && _a !== void 0 ? _a : 5;
        return {
            count: {
                denominator: 2,
                numerator: sides,
            },
            length: radius * 2 * 2.66 / (sides / 3),
        };
    };
    StarDrawer.prototype.getCenter = function (particle, radius) {
        var _a;
        var polygon = particle.shapeData;
        var sides = (_a = polygon === null || polygon === void 0 ? void 0 : polygon.sides) !== null && _a !== void 0 ? _a : 5;
        return {
            x: -radius * 2 / (sides / 4),
            y: -radius / (2 * 2.66 / 3.5),
        };
    };
    return StarDrawer;
}(PolygonDrawerBase_1.PolygonDrawerBase));
exports.StarDrawer = StarDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/ShapeDrawers/TextDrawer.js":
/*!********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/ShapeDrawers/TextDrawer.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var Utils_1 = __webpack_require__(/*! ../../../Utils/Utils */ "./node_modules/tsparticles/dist/Utils/Utils.js");
var ShapeType_1 = __webpack_require__(/*! ../../../Enums/ShapeType */ "./node_modules/tsparticles/dist/Enums/ShapeType.js");
var TextDrawer = (function () {
    function TextDrawer() {
    }
    TextDrawer.prototype.init = function (container) {
        var _a, _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var options, shapeOptions, _i, shapeOptions_1, character, character;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        options = container.options;
                        if (!(Utils_1.Utils.isInArray(ShapeType_1.ShapeType.char, options.particles.shape.type) ||
                            Utils_1.Utils.isInArray(ShapeType_1.ShapeType.character, options.particles.shape.type))) return [3, 7];
                        shapeOptions = (_a = options.particles.shape.options[ShapeType_1.ShapeType.character]) !== null && _a !== void 0 ? _a : options.particles.shape.options[ShapeType_1.ShapeType.char];
                        if (!(shapeOptions instanceof Array)) return [3, 5];
                        _i = 0, shapeOptions_1 = shapeOptions;
                        _c.label = 1;
                    case 1:
                        if (!(_i < shapeOptions_1.length)) return [3, 4];
                        character = shapeOptions_1[_i];
                        return [4, Utils_1.Utils.loadFont(character)];
                    case 2:
                        _c.sent();
                        _c.label = 3;
                    case 3:
                        _i++;
                        return [3, 1];
                    case 4: return [3, 7];
                    case 5:
                        character = (_b = options.particles.shape.options[ShapeType_1.ShapeType.character]) !== null && _b !== void 0 ? _b : options.particles.shape.options[ShapeType_1.ShapeType.char];
                        if (!(character !== undefined)) return [3, 7];
                        return [4, Utils_1.Utils.loadFont(character)];
                    case 6:
                        _c.sent();
                        _c.label = 7;
                    case 7: return [2];
                }
            });
        });
    };
    TextDrawer.prototype.draw = function (context, particle, radius, _opacity) {
        var character = particle.shapeData;
        if (character === undefined) {
            return;
        }
        var textData = character.value;
        if (textData === undefined) {
            return;
        }
        var textParticle = particle;
        if (textParticle.text === undefined) {
            if (textData instanceof Array) {
                textParticle.text = Utils_1.Utils.itemFromArray(textData, particle.randomIndexData);
            }
            else {
                textParticle.text = textData;
            }
        }
        var text = textParticle.text;
        var style = character.style;
        var weight = character.weight;
        var size = Math.round(radius) * 2;
        var font = character.font;
        var fill = particle.fill;
        context.font = style + " " + weight + " " + size + "px \"" + font + "\"";
        var pos = {
            x: -radius / 2,
            y: radius / 2,
        };
        if (fill) {
            context.fillText(text, pos.x, pos.y);
        }
        else {
            context.strokeText(text, pos.x, pos.y);
        }
    };
    return TextDrawer;
}());
exports.TextDrawer = TextDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/ShapeDrawers/TriangleDrawer.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/ShapeDrawers/TriangleDrawer.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var PolygonDrawerBase_1 = __webpack_require__(/*! ./PolygonDrawerBase */ "./node_modules/tsparticles/dist/Core/Particle/ShapeDrawers/PolygonDrawerBase.js");
var TriangleDrawer = (function (_super) {
    tslib_1.__extends(TriangleDrawer, _super);
    function TriangleDrawer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TriangleDrawer.prototype.getSidesData = function (particle, radius) {
        return {
            count: {
                denominator: 2,
                numerator: 3,
            },
            length: radius * 2,
        };
    };
    TriangleDrawer.prototype.getCenter = function (particle, radius) {
        return {
            x: -radius,
            y: radius / 1.66,
        };
    };
    return TriangleDrawer;
}(PolygonDrawerBase_1.PolygonDrawerBase));
exports.TriangleDrawer = TriangleDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/Updater.js":
/*!****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/Updater.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OutMode_1 = __webpack_require__(/*! ../../Enums/OutMode */ "./node_modules/tsparticles/dist/Enums/OutMode.js");
var Utils_1 = __webpack_require__(/*! ../../Utils/Utils */ "./node_modules/tsparticles/dist/Utils/Utils.js");
var Mover_1 = __webpack_require__(/*! ./Mover */ "./node_modules/tsparticles/dist/Core/Particle/Mover.js");
var RotateDirection_1 = __webpack_require__(/*! ../../Enums/RotateDirection */ "./node_modules/tsparticles/dist/Enums/RotateDirection.js");
var SizeAnimationStatus_1 = __webpack_require__(/*! ../../Enums/SizeAnimationStatus */ "./node_modules/tsparticles/dist/Enums/SizeAnimationStatus.js");
var OpacityAnimationStatus_1 = __webpack_require__(/*! ../../Enums/OpacityAnimationStatus */ "./node_modules/tsparticles/dist/Enums/OpacityAnimationStatus.js");
var Updater = (function () {
    function Updater(container, particle) {
        this.container = container;
        this.particle = particle;
        this.mover = new Mover_1.Mover(container, particle);
    }
    Updater.checkBounds = function (coordinate, radius, size, velocity, outside) {
        if ((coordinate + radius > size && velocity > 0) ||
            (coordinate - radius < 0 && velocity < 0)) {
            outside();
        }
    };
    Updater.prototype.update = function (delta) {
        this.mover.move(delta);
        this.updateOpacity(delta);
        this.updateSize(delta);
        this.updateAngle(delta);
        this.fixOutOfCanvasPosition(delta);
        this.updateOutMode(delta);
    };
    Updater.prototype.updateOpacity = function (delta) {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        var deltaFactor = options.fpsLimit > 0 ? (60 * delta) / 1000 : 3.6;
        if (particle.particlesOptions.opacity.animation.enable) {
            switch (particle.opacity.status) {
                case OpacityAnimationStatus_1.OpacityAnimationStatus.increasing:
                    if (particle.opacity.value >= particle.particlesOptions.opacity.value) {
                        particle.opacity.status = OpacityAnimationStatus_1.OpacityAnimationStatus.decreasing;
                    }
                    else {
                        particle.opacity.value += (particle.opacity.velocity || 0) * deltaFactor;
                    }
                    break;
                case OpacityAnimationStatus_1.OpacityAnimationStatus.decreasing:
                    if (particle.opacity.value <= particle.particlesOptions.opacity.animation.minimumValue) {
                        particle.opacity.status = OpacityAnimationStatus_1.OpacityAnimationStatus.increasing;
                    }
                    else {
                        particle.opacity.value -= (particle.opacity.velocity || 0) * deltaFactor;
                    }
                    break;
            }
            if (particle.opacity.value < 0) {
                particle.opacity.value = 0;
            }
        }
    };
    Updater.prototype.updateSize = function (delta) {
        var _a;
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        var deltaFactor = options.fpsLimit > 0 ? (60 * delta) / 1000 : 3.6;
        if (particle.particlesOptions.size.animation.enable) {
            switch (particle.size.status) {
                case SizeAnimationStatus_1.SizeAnimationStatus.increasing:
                    if (particle.size.value >= ((_a = particle.sizeValue) !== null && _a !== void 0 ? _a : container.retina.sizeValue)) {
                        particle.size.status = SizeAnimationStatus_1.SizeAnimationStatus.decreasing;
                    }
                    else {
                        particle.size.value += (particle.size.velocity || 0) * deltaFactor;
                    }
                    break;
                case SizeAnimationStatus_1.SizeAnimationStatus.decreasing:
                    if (particle.size.value <= particle.particlesOptions.size.animation.minimumValue) {
                        particle.size.status = SizeAnimationStatus_1.SizeAnimationStatus.increasing;
                    }
                    else {
                        particle.size.value -= (particle.size.velocity || 0) * deltaFactor;
                    }
            }
            if (particle.size.value < 0) {
                particle.size.value = 0;
            }
        }
    };
    Updater.prototype.updateAngle = function (delta) {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        var deltaFactor = options.fpsLimit > 0 ? (60 * delta) / 1000 : 3.6;
        if (particle.particlesOptions.rotate.animation.enable) {
            switch (particle.rotateDirection) {
                case RotateDirection_1.RotateDirection.clockwise:
                    particle.angle += particle.particlesOptions.rotate.animation.speed * Math.PI / 18 * deltaFactor;
                    if (particle.angle > 360) {
                        particle.angle -= 360;
                    }
                    break;
                case RotateDirection_1.RotateDirection.counterClockwise:
                default:
                    particle.angle -= particle.particlesOptions.rotate.animation.speed * Math.PI / 18 * deltaFactor;
                    if (particle.angle < 0) {
                        particle.angle += 360;
                    }
                    break;
            }
        }
    };
    Updater.prototype.fixOutOfCanvasPosition = function (_delta) {
        var container = this.container;
        var particle = this.particle;
        var outMode = particle.particlesOptions.move.outMode;
        var canvasSize = container.canvas.size;
        var newPos;
        if (outMode === OutMode_1.OutMode.bounce) {
            newPos = {
                bottom: canvasSize.height,
                left: particle.size.value,
                right: canvasSize.width,
                top: particle.size.value,
            };
        }
        else if (outMode === OutMode_1.OutMode.bounceHorizontal) {
            newPos = {
                bottom: canvasSize.height + particle.size.value - particle.offset.y,
                left: particle.size.value,
                right: canvasSize.width,
                top: -particle.size.value - particle.offset.y,
            };
        }
        else if (outMode === OutMode_1.OutMode.bounceVertical) {
            newPos = {
                bottom: canvasSize.height,
                left: -particle.size.value - particle.offset.x,
                right: canvasSize.width + particle.size.value + particle.offset.x,
                top: particle.size.value,
            };
        }
        else {
            newPos = {
                bottom: canvasSize.height + particle.size.value - particle.offset.y,
                left: -particle.size.value - particle.offset.x,
                right: canvasSize.width + particle.size.value + particle.offset.x,
                top: -particle.size.value - particle.offset.y,
            };
        }
        if (outMode === OutMode_1.OutMode.destroy) {
            var sizeValue = particle.size.value;
            if (!Utils_1.Utils.isPointInside(particle.position, container.canvas.size, sizeValue)) {
                container.particles.remove(particle);
            }
        }
        else {
            var sizeValue = particle.size.value;
            var nextBounds = Utils_1.Utils.calculateBounds(particle.position, sizeValue);
            if (nextBounds.left > canvasSize.width - particle.offset.x) {
                particle.position.x = newPos.left;
                particle.position.y = Math.random() * canvasSize.height;
            }
            else if (nextBounds.right < -particle.offset.x) {
                particle.position.x = newPos.right;
                particle.position.y = Math.random() * canvasSize.height;
            }
            if (nextBounds.top > canvasSize.height - particle.offset.y) {
                particle.position.x = Math.random() * canvasSize.width;
                particle.position.y = newPos.top;
            }
            else if (nextBounds.bottom < -particle.offset.y) {
                particle.position.x = Math.random() * canvasSize.width;
                particle.position.y = newPos.bottom;
            }
        }
    };
    Updater.prototype.updateOutMode = function (delta) {
        var particle = this.particle;
        switch (particle.particlesOptions.move.outMode) {
            case OutMode_1.OutMode.bounce:
            case OutMode_1.OutMode.bounceVertical:
            case OutMode_1.OutMode.bounceHorizontal:
                this.updateBounce(delta);
                break;
        }
    };
    Updater.prototype.updateBounce = function (delta) {
        var container = this.container;
        var particle = this.particle;
        var handled = false;
        for (var id in container.plugins) {
            var plugin = container.plugins[id];
            if (plugin.particleBounce !== undefined) {
                handled = plugin.particleBounce(particle, delta);
            }
            if (handled) {
                break;
            }
        }
        if (!handled) {
            var outMode = particle.particlesOptions.move.outMode;
            var pos = particle.getPosition();
            if (outMode === OutMode_1.OutMode.bounce || outMode === OutMode_1.OutMode.bounceHorizontal) {
                var size = particle.size.value;
                var velocity = particle.velocity.horizontal;
                Updater.checkBounds(pos.x, size, container.canvas.size.width, velocity, function () {
                    particle.velocity.horizontal *= -1;
                });
            }
            if (outMode === OutMode_1.OutMode.bounce || outMode === OutMode_1.OutMode.bounceVertical) {
                var size = particle.size.value;
                var velocity = particle.velocity.vertical;
                Updater.checkBounds(pos.y, size, container.canvas.size.height, velocity, function () {
                    particle.velocity.vertical *= -1;
                });
            }
        }
    };
    return Updater;
}());
exports.Updater = Updater;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particles.js":
/*!*********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particles.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Particle_1 = __webpack_require__(/*! ./Particle */ "./node_modules/tsparticles/dist/Core/Particle.js");
var InteractionManager_1 = __webpack_require__(/*! ./Particle/Interactions/Particles/InteractionManager */ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/InteractionManager.js");
var Utils_1 = __webpack_require__(/*! ../Utils/Utils */ "./node_modules/tsparticles/dist/Utils/Utils.js");
var HoverMode_1 = __webpack_require__(/*! ../Enums/Modes/HoverMode */ "./node_modules/tsparticles/dist/Enums/Modes/HoverMode.js");
var Grabber_1 = __webpack_require__(/*! ./Particle/Interactions/Mouse/Grabber */ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Mouse/Grabber.js");
var ClickMode_1 = __webpack_require__(/*! ../Enums/Modes/ClickMode */ "./node_modules/tsparticles/dist/Enums/Modes/ClickMode.js");
var Repulser_1 = __webpack_require__(/*! ./Particle/Interactions/Mouse/Repulser */ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Mouse/Repulser.js");
var DivMode_1 = __webpack_require__(/*! ../Enums/Modes/DivMode */ "./node_modules/tsparticles/dist/Enums/Modes/DivMode.js");
var Bubbler_1 = __webpack_require__(/*! ./Particle/Interactions/Mouse/Bubbler */ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Mouse/Bubbler.js");
var Connector_1 = __webpack_require__(/*! ./Particle/Interactions/Mouse/Connector */ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Mouse/Connector.js");
var QuadTree_1 = __webpack_require__(/*! ../Utils/QuadTree */ "./node_modules/tsparticles/dist/Utils/QuadTree.js");
var DestroyType_1 = __webpack_require__(/*! ../Enums/DestroyType */ "./node_modules/tsparticles/dist/Enums/DestroyType.js");
var Point_1 = __webpack_require__(/*! ../Utils/Point */ "./node_modules/tsparticles/dist/Utils/Point.js");
var Rectangle_1 = __webpack_require__(/*! ../Utils/Rectangle */ "./node_modules/tsparticles/dist/Utils/Rectangle.js");
var Particles = (function () {
    function Particles(container) {
        this.container = container;
        this.array = [];
        this.interactionsEnabled = false;
        var canvasSize = this.container.canvas.size;
        this.noiseZ = 0;
        this.quadTree = new QuadTree_1.QuadTree(new Rectangle_1.Rectangle(0, 0, canvasSize.width, canvasSize.height), 4);
    }
    Object.defineProperty(Particles.prototype, "count", {
        get: function () {
            return this.array.length;
        },
        enumerable: true,
        configurable: true
    });
    Particles.prototype.init = function () {
        var container = this.container;
        var options = container.options;
        var handled = false;
        this.noiseZ = 0;
        for (var id in container.plugins) {
            var plugin = container.plugins[id];
            if (plugin.particlesInitialization !== undefined) {
                handled = plugin.particlesInitialization();
            }
            if (handled) {
                break;
            }
        }
        if (!handled) {
            for (var i = this.count; i < options.particles.number.value; i++) {
                this.addParticle(new Particle_1.Particle(container));
            }
        }
        this.interactionsEnabled = options.particles.lineLinked.enable ||
            options.particles.move.attract.enable ||
            options.particles.collisions.enable ||
            options.infection.enable;
        if (options.infection.enable) {
            for (var i = 0; i < options.infection.infections; i++) {
                var notInfected = this.array.filter(function (p) { return p.infectionStage === undefined; });
                var infected = Utils_1.Utils.itemFromArray(notInfected);
                infected.startInfection(0);
            }
        }
    };
    Particles.prototype.redraw = function () {
        this.clear();
        this.init();
        this.draw(0);
    };
    Particles.prototype.removeAt = function (index, quantity) {
        if (index >= 0 && index <= this.count) {
            for (var _i = 0, _a = this.array.splice(index, quantity !== null && quantity !== void 0 ? quantity : 1); _i < _a.length; _i++) {
                var particle = _a[_i];
                particle.destroy();
            }
        }
    };
    Particles.prototype.remove = function (particle) {
        this.removeAt(this.array.indexOf(particle));
    };
    Particles.prototype.update = function (delta) {
        var container = this.container;
        var options = container.options;
        var particlesToDelete = [];
        for (var i = 0; i < this.count; i++) {
            var particle = this.array[i];
            Bubbler_1.Bubbler.reset(particle);
            for (var id in container.plugins) {
                var plugin = container.plugins[id];
                if (particle.destroyed) {
                    break;
                }
                if (plugin.particleUpdate) {
                    plugin.particleUpdate(particle, delta);
                }
            }
            if (!particle.destroyed) {
                var sizeOpt = particle.particlesOptions.size;
                var sizeAnim = sizeOpt.animation;
                if (sizeAnim.enable) {
                    switch (sizeAnim.destroy) {
                        case DestroyType_1.DestroyType.max:
                            if (particle.size.value >= sizeOpt.value * container.retina.pixelRatio) {
                                particle.destroyed = true;
                            }
                            break;
                        case DestroyType_1.DestroyType.min:
                            if (particle.size.value <= sizeAnim.minimumValue * container.retina.pixelRatio) {
                                particle.destroyed = true;
                            }
                            break;
                    }
                }
            }
            if (particle.destroyed) {
                particlesToDelete.push(particle);
                continue;
            }
            particle.update(i, delta);
            var pos = particle.getPosition();
            container.particles.quadTree.insert(new Point_1.Point(pos.x, pos.y, particle));
        }
        for (var _i = 0, particlesToDelete_1 = particlesToDelete; _i < particlesToDelete_1.length; _i++) {
            var particle = particlesToDelete_1[_i];
            this.remove(particle);
        }
        if (container.options.interactivity.events.onDiv.enable ||
            (container.options.interactivity.events.onHover.enable && container.interactivity.mouse.position) ||
            (container.options.interactivity.events.onClick.enable && container.interactivity.mouse.clickPosition)) {
            var hoverMode = options.interactivity.events.onHover.mode;
            var clickMode = options.interactivity.events.onClick.mode;
            var divMode = options.interactivity.events.onDiv.mode;
            if (Utils_1.Utils.isInArray(HoverMode_1.HoverMode.grab, hoverMode)) {
                Grabber_1.Grabber.grab(container, delta);
            }
            if (Utils_1.Utils.isInArray(HoverMode_1.HoverMode.repulse, hoverMode) ||
                Utils_1.Utils.isInArray(ClickMode_1.ClickMode.repulse, clickMode) ||
                Utils_1.Utils.isInArray(DivMode_1.DivMode.repulse, divMode)) {
                Repulser_1.Repulser.repulse(container, delta);
            }
            if (Utils_1.Utils.isInArray(HoverMode_1.HoverMode.bubble, hoverMode) || Utils_1.Utils.isInArray(ClickMode_1.ClickMode.bubble, clickMode)) {
                Bubbler_1.Bubbler.bubble(container, delta);
            }
            if (Utils_1.Utils.isInArray(HoverMode_1.HoverMode.connect, hoverMode)) {
                Connector_1.Connector.connect(container, delta);
            }
        }
        for (var _a = 0, _b = this.array; _a < _b.length; _a++) {
            var particle = _b[_a];
            if (this.interactionsEnabled) {
                InteractionManager_1.InteractionManager.interact(particle, container, delta);
            }
        }
    };
    Particles.prototype.draw = function (delta) {
        var container = this.container;
        container.canvas.clear();
        var canvasSize = this.container.canvas.size;
        this.quadTree = new QuadTree_1.QuadTree(new Rectangle_1.Rectangle(0, 0, canvasSize.width, canvasSize.height), 4);
        this.update(delta);
        this.noiseZ += 0.0004;
        for (var id in container.plugins) {
            var plugin = container.plugins[id];
            container.canvas.drawPlugin(plugin, delta);
        }
        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
            var p = _a[_i];
            p.draw(delta);
        }
    };
    Particles.prototype.clear = function () {
        this.array = [];
    };
    Particles.prototype.push = function (nb, mousePosition) {
        var _a;
        var container = this.container;
        var options = container.options;
        var limit = options.particles.number.limit * container.density;
        this.pushing = true;
        if (limit > 0) {
            var countToRemove = this.count + nb - limit;
            if (countToRemove > 0) {
                this.removeQuantity(countToRemove);
            }
        }
        var pos;
        if (mousePosition) {
            pos = (_a = mousePosition.position) !== null && _a !== void 0 ? _a : { x: 0, y: 0 };
        }
        for (var i = 0; i < nb; i++) {
            this.addParticle(new Particle_1.Particle(container, pos));
        }
        if (!options.particles.move.enable) {
            this.container.play();
        }
        this.pushing = false;
    };
    Particles.prototype.addParticle = function (particle) {
        this.array.push(particle);
    };
    Particles.prototype.removeQuantity = function (quantity) {
        var container = this.container;
        var options = container.options;
        this.removeAt(0, quantity);
        if (!options.particles.move.enable) {
            this.container.play();
        }
    };
    return Particles;
}());
exports.Particles = Particles;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Retina.js":
/*!******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Retina.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Retina = (function () {
    function Retina(container) {
        this.container = container;
        this.isRetina = false;
        this.bubbleModeDistance = 0;
        this.bubbleModeSize = 0;
        this.connectModeDistance = 0;
        this.connectModeRadius = 0;
        this.grabModeDistance = 0;
        this.repulseModeDistance = 0;
        this.slowModeRadius = 0;
        this.lineLinkedDistance = 0;
        this.lineLinkedWidth = 0;
        this.moveSpeed = 0;
        this.sizeValue = 0;
        this.sizeAnimationSpeed = 0;
        this.polygonMaskMoveRadius = 0;
        this.pixelRatio = 1;
    }
    Retina.prototype.init = function () {
        var _a;
        var container = this.container;
        var options = container.options;
        if (options.detectRetina && window.devicePixelRatio > 1) {
            this.pixelRatio = window.devicePixelRatio;
            this.isRetina = true;
        }
        else {
            this.pixelRatio = 1;
            this.isRetina = false;
        }
        var ratio = this.pixelRatio;
        if (container.canvas.element) {
            var element = container.canvas.element;
            container.canvas.size.width = element.offsetWidth * ratio;
            container.canvas.size.height = element.offsetHeight * ratio;
        }
        var particles = options.particles;
        this.lineLinkedDistance = particles.lineLinked.distance * ratio;
        this.lineLinkedWidth = particles.lineLinked.width * ratio;
        this.moveSpeed = particles.move.speed * ratio;
        this.sizeValue = particles.size.value * ratio;
        this.sizeAnimationSpeed = particles.size.animation.speed * ratio;
        var interactivity = options.interactivity;
        this.connectModeDistance = interactivity.modes.connect.distance * ratio;
        this.connectModeRadius = interactivity.modes.connect.radius * ratio;
        this.grabModeDistance = interactivity.modes.grab.distance * ratio;
        this.repulseModeDistance = interactivity.modes.repulse.distance * ratio;
        this.slowModeRadius = interactivity.modes.slow.radius * ratio;
        this.bubbleModeDistance = interactivity.modes.bubble.distance * ratio;
        this.bubbleModeSize = (_a = interactivity.modes.bubble.size) !== null && _a !== void 0 ? _a : this.sizeValue * ratio;
        this.polygonMaskMoveRadius = options.polygon.move.radius * ratio;
    };
    Retina.prototype.initParticle = function (particle) {
        var particlesOptions = particle.particlesOptions;
        var ratio = this.pixelRatio;
        particle.lineLinkedDistance = particlesOptions.lineLinked.distance * ratio;
        particle.lineLinkedWidth = particlesOptions.lineLinked.width * ratio;
        particle.moveSpeed = particlesOptions.move.speed * ratio;
        particle.sizeValue = particlesOptions.size.value * ratio;
        if (typeof particlesOptions.size.random !== "boolean") {
            particle.randomMinimumSize = particlesOptions.size.random.minimumValue;
        }
        particle.sizeAnimationSpeed = particlesOptions.size.animation.speed * ratio;
    };
    Retina.prototype.reset = function () {
    };
    return Retina;
}());
exports.Retina = Retina;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/CollisionMode.js":
/*!**************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/CollisionMode.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CollisionMode;
(function (CollisionMode) {
    CollisionMode["bounce"] = "bounce";
})(CollisionMode = exports.CollisionMode || (exports.CollisionMode = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/DestroyType.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/DestroyType.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DestroyType;
(function (DestroyType) {
    DestroyType["none"] = "none";
    DestroyType["max"] = "max";
    DestroyType["min"] = "min";
})(DestroyType = exports.DestroyType || (exports.DestroyType = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/InteractivityDetect.js":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/InteractivityDetect.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InteractivityDetect;
(function (InteractivityDetect) {
    InteractivityDetect["canvas"] = "canvas";
    InteractivityDetect["parent"] = "parent";
    InteractivityDetect["window"] = "window";
})(InteractivityDetect = exports.InteractivityDetect || (exports.InteractivityDetect = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Modes/ClickMode.js":
/*!****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Modes/ClickMode.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ClickMode;
(function (ClickMode) {
    ClickMode["bubble"] = "bubble";
    ClickMode["push"] = "push";
    ClickMode["remove"] = "remove";
    ClickMode["repulse"] = "repulse";
    ClickMode["emitter"] = "emitter";
    ClickMode["absorber"] = "absorber";
})(ClickMode = exports.ClickMode || (exports.ClickMode = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Modes/DivMode.js":
/*!**************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Modes/DivMode.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DivMode;
(function (DivMode) {
    DivMode["repulse"] = "repulse";
})(DivMode = exports.DivMode || (exports.DivMode = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Modes/HoverMode.js":
/*!****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Modes/HoverMode.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HoverMode;
(function (HoverMode) {
    HoverMode["bubble"] = "bubble";
    HoverMode["connect"] = "connect";
    HoverMode["grab"] = "grab";
    HoverMode["repulse"] = "repulse";
    HoverMode["slow"] = "slow";
})(HoverMode = exports.HoverMode || (exports.HoverMode = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/MoveDirection.js":
/*!**************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/MoveDirection.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MoveDirection;
(function (MoveDirection) {
    MoveDirection["bottom"] = "bottom";
    MoveDirection["bottomLeft"] = "bottom-left";
    MoveDirection["bottomRight"] = "bottom-right";
    MoveDirection["left"] = "left";
    MoveDirection["none"] = "none";
    MoveDirection["right"] = "right";
    MoveDirection["top"] = "top";
    MoveDirection["topLeft"] = "top-left";
    MoveDirection["topRight"] = "top-right";
})(MoveDirection = exports.MoveDirection || (exports.MoveDirection = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/OpacityAnimationStatus.js":
/*!***********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/OpacityAnimationStatus.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OpacityAnimationStatus;
(function (OpacityAnimationStatus) {
    OpacityAnimationStatus[OpacityAnimationStatus["increasing"] = 0] = "increasing";
    OpacityAnimationStatus[OpacityAnimationStatus["decreasing"] = 1] = "decreasing";
})(OpacityAnimationStatus = exports.OpacityAnimationStatus || (exports.OpacityAnimationStatus = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/OutMode.js":
/*!********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/OutMode.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OutMode;
(function (OutMode) {
    OutMode["bounce"] = "bounce";
    OutMode["bounceHorizontal"] = "bounce-horizontal";
    OutMode["bounceVertical"] = "bounce-vertical";
    OutMode["out"] = "out";
    OutMode["destroy"] = "destroy";
})(OutMode = exports.OutMode || (exports.OutMode = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/PolygonMaskInlineArrangement.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/PolygonMaskInlineArrangement.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PolygonMaskInlineArrangement;
(function (PolygonMaskInlineArrangement) {
    PolygonMaskInlineArrangement["equidistant"] = "equidistant";
    PolygonMaskInlineArrangement["onePerPoint"] = "one-per-point";
    PolygonMaskInlineArrangement["perPoint"] = "per-point";
    PolygonMaskInlineArrangement["randomLength"] = "random-length";
    PolygonMaskInlineArrangement["randomPoint"] = "random-point";
})(PolygonMaskInlineArrangement = exports.PolygonMaskInlineArrangement || (exports.PolygonMaskInlineArrangement = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/PolygonMaskMoveType.js":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/PolygonMaskMoveType.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PolygonMaskMoveType;
(function (PolygonMaskMoveType) {
    PolygonMaskMoveType["path"] = "path";
    PolygonMaskMoveType["radius"] = "radius";
})(PolygonMaskMoveType = exports.PolygonMaskMoveType || (exports.PolygonMaskMoveType = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/PolygonMaskType.js":
/*!****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/PolygonMaskType.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PolygonMaskType;
(function (PolygonMaskType) {
    PolygonMaskType["inline"] = "inline";
    PolygonMaskType["inside"] = "inside";
    PolygonMaskType["outside"] = "outside";
    PolygonMaskType["none"] = "none";
})(PolygonMaskType = exports.PolygonMaskType || (exports.PolygonMaskType = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/ProcessBubbleType.js":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/ProcessBubbleType.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ProcessBubbleType;
(function (ProcessBubbleType) {
    ProcessBubbleType["color"] = "color";
    ProcessBubbleType["opacity"] = "opacity";
    ProcessBubbleType["size"] = "size";
})(ProcessBubbleType = exports.ProcessBubbleType || (exports.ProcessBubbleType = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/RotateDirection.js":
/*!****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/RotateDirection.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RotateDirection;
(function (RotateDirection) {
    RotateDirection["clockwise"] = "clockwise";
    RotateDirection["counterClockwise"] = "counter-clockwise";
    RotateDirection["random"] = "random";
})(RotateDirection = exports.RotateDirection || (exports.RotateDirection = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/ShapeType.js":
/*!**********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/ShapeType.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ShapeType;
(function (ShapeType) {
    ShapeType["char"] = "char";
    ShapeType["character"] = "character";
    ShapeType["circle"] = "circle";
    ShapeType["edge"] = "edge";
    ShapeType["image"] = "image";
    ShapeType["images"] = "images";
    ShapeType["line"] = "line";
    ShapeType["polygon"] = "polygon";
    ShapeType["square"] = "square";
    ShapeType["star"] = "star";
    ShapeType["triangle"] = "triangle";
})(ShapeType = exports.ShapeType || (exports.ShapeType = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/SizeAnimationStatus.js":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/SizeAnimationStatus.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SizeAnimationStatus;
(function (SizeAnimationStatus) {
    SizeAnimationStatus[SizeAnimationStatus["increasing"] = 0] = "increasing";
    SizeAnimationStatus[SizeAnimationStatus["decreasing"] = 1] = "decreasing";
})(SizeAnimationStatus = exports.SizeAnimationStatus || (exports.SizeAnimationStatus = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/SizeMode.js":
/*!*********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/SizeMode.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SizeMode;
(function (SizeMode) {
    SizeMode["precise"] = "precise";
    SizeMode["percent"] = "percent";
})(SizeMode = exports.SizeMode || (exports.SizeMode = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/StartValueType.js":
/*!***************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/StartValueType.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StartValueType;
(function (StartValueType) {
    StartValueType["max"] = "max";
    StartValueType["min"] = "min";
})(StartValueType = exports.StartValueType || (exports.StartValueType = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Absorbers/Absorber.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Absorbers/Absorber.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AbsorberSize_1 = __webpack_require__(/*! ./AbsorberSize */ "./node_modules/tsparticles/dist/Options/Classes/Absorbers/AbsorberSize.js");
var OptionsColor_1 = __webpack_require__(/*! ../Particles/OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/Particles/OptionsColor.js");
var Absorber = (function () {
    function Absorber() {
        this.color = new OptionsColor_1.OptionsColor();
        this.color.value = "#000000";
        this.opacity = 1;
        this.size = new AbsorberSize_1.AbsorberSize();
    }
    Absorber.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.color !== undefined) {
                this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
            if (data.position !== undefined) {
                this.position = {
                    x: data.position.x,
                    y: data.position.y,
                };
            }
            if (data.size !== undefined) {
                this.size.load(data.size);
            }
        }
    };
    return Absorber;
}());
exports.Absorber = Absorber;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Absorbers/AbsorberRandomSize.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Absorbers/AbsorberRandomSize.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AbsorberRandomSize = (function () {
    function AbsorberRandomSize() {
        this.enable = false;
        this.minimumValue = 1;
    }
    AbsorberRandomSize.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.minimumValue !== undefined) {
                this.minimumValue = data.minimumValue;
            }
        }
    };
    return AbsorberRandomSize;
}());
exports.AbsorberRandomSize = AbsorberRandomSize;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Absorbers/AbsorberSize.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Absorbers/AbsorberSize.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AbsorberRandomSize_1 = __webpack_require__(/*! ./AbsorberRandomSize */ "./node_modules/tsparticles/dist/Options/Classes/Absorbers/AbsorberRandomSize.js");
var AbsorberSize = (function () {
    function AbsorberSize() {
        this.density = 5;
        this.random = new AbsorberRandomSize_1.AbsorberRandomSize();
        this.value = 50;
    }
    AbsorberSize.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.density !== undefined) {
                this.density = data.density;
            }
            if (data.value !== undefined) {
                this.value = data.value;
            }
            if (data.random !== undefined) {
                if (typeof data.random === "boolean") {
                    this.random.load({ enable: data.random });
                }
                else {
                    this.random.load(data.random);
                }
            }
            if (data.limit !== undefined) {
                this.limit = data.limit;
            }
        }
    };
    return AbsorberSize;
}());
exports.AbsorberSize = AbsorberSize;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Background/Background.js":
/*!********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Background/Background.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OptionsColor_1 = __webpack_require__(/*! ../Particles/OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/Particles/OptionsColor.js");
var Background = (function () {
    function Background() {
    }
    Background.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.color !== undefined) {
                this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            }
            if (data.image !== undefined) {
                this.image = data.image;
            }
            if (data.position !== undefined) {
                this.position = data.position;
            }
            if (data.repeat !== undefined) {
                this.repeat = data.repeat;
            }
            if (data.size !== undefined) {
                this.size = data.size;
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
        }
    };
    return Background;
}());
exports.Background = Background;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/BackgroundMask/BackgroundMask.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/BackgroundMask/BackgroundMask.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BackgroundMaskCover_1 = __webpack_require__(/*! ./BackgroundMaskCover */ "./node_modules/tsparticles/dist/Options/Classes/BackgroundMask/BackgroundMaskCover.js");
var BackgroundMask = (function () {
    function BackgroundMask() {
        this.cover = new BackgroundMaskCover_1.BackgroundMaskCover();
        this.enable = false;
    }
    BackgroundMask.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.cover !== undefined) {
                var cover = data.cover;
                var color = (typeof data.cover === "string" ? { color: data.cover } : data.cover);
                this.cover.load(cover.color !== undefined ? cover : { color: color });
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
        }
    };
    return BackgroundMask;
}());
exports.BackgroundMask = BackgroundMask;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/BackgroundMask/BackgroundMaskCover.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/BackgroundMask/BackgroundMaskCover.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OptionsColor_1 = __webpack_require__(/*! ../Particles/OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/Particles/OptionsColor.js");
var BackgroundMaskCover = (function () {
    function BackgroundMaskCover() {
        this.color = new OptionsColor_1.OptionsColor();
        this.opacity = 1;
    }
    BackgroundMaskCover.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.color !== undefined) {
                this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
        }
    };
    return BackgroundMaskCover;
}());
exports.BackgroundMaskCover = BackgroundMaskCover;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Emitters/Emitter.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Emitters/Emitter.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MoveDirection_1 = __webpack_require__(/*! ../../../Enums/MoveDirection */ "./node_modules/tsparticles/dist/Enums/MoveDirection.js");
var EmitterRate_1 = __webpack_require__(/*! ./EmitterRate */ "./node_modules/tsparticles/dist/Options/Classes/Emitters/EmitterRate.js");
var EmitterLife_1 = __webpack_require__(/*! ./EmitterLife */ "./node_modules/tsparticles/dist/Options/Classes/Emitters/EmitterLife.js");
var Utils_1 = __webpack_require__(/*! ../../../Utils/Utils */ "./node_modules/tsparticles/dist/Utils/Utils.js");
var EmitterSize_1 = __webpack_require__(/*! ./EmitterSize */ "./node_modules/tsparticles/dist/Options/Classes/Emitters/EmitterSize.js");
var Emitter = (function () {
    function Emitter() {
        this.direction = MoveDirection_1.MoveDirection.none;
        this.life = new EmitterLife_1.EmitterLife();
        this.rate = new EmitterRate_1.EmitterRate();
    }
    Emitter.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.size !== undefined) {
                if (this.size === undefined) {
                    this.size = new EmitterSize_1.EmitterSize();
                }
                this.size.load(data.size);
            }
            if (data.direction !== undefined) {
                this.direction = data.direction;
            }
            this.life.load(data.life);
            if (data.particles !== undefined) {
                this.particles = Utils_1.Utils.deepExtend({}, data.particles);
            }
            this.rate.load(data.rate);
            if (data.position !== undefined) {
                this.position = {
                    x: data.position.x,
                    y: data.position.y,
                };
            }
        }
    };
    return Emitter;
}());
exports.Emitter = Emitter;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Emitters/EmitterLife.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Emitters/EmitterLife.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EmitterLife = (function () {
    function EmitterLife() {
    }
    EmitterLife.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.count !== undefined) {
                this.count = data.count;
            }
            if (data.delay !== undefined) {
                this.delay = data.delay;
            }
            if (data.duration !== undefined) {
                this.duration = data.duration;
            }
        }
    };
    return EmitterLife;
}());
exports.EmitterLife = EmitterLife;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Emitters/EmitterRate.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Emitters/EmitterRate.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EmitterRate = (function () {
    function EmitterRate() {
        this.quantity = 1;
        this.delay = 0.1;
    }
    EmitterRate.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.quantity !== undefined) {
                this.quantity = data.quantity;
            }
            if (data.delay !== undefined) {
                this.delay = data.delay;
            }
        }
    };
    return EmitterRate;
}());
exports.EmitterRate = EmitterRate;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Emitters/EmitterSize.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Emitters/EmitterSize.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SizeMode_1 = __webpack_require__(/*! ../../../Enums/SizeMode */ "./node_modules/tsparticles/dist/Enums/SizeMode.js");
var EmitterSize = (function () {
    function EmitterSize() {
        this.mode = SizeMode_1.SizeMode.percent;
        this.height = 0;
        this.width = 0;
    }
    EmitterSize.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.mode !== undefined) {
                this.mode = data.mode;
            }
            if (data.height !== undefined) {
                this.height = data.height;
            }
            if (data.width !== undefined) {
                this.width = data.width;
            }
        }
    };
    return EmitterSize;
}());
exports.EmitterSize = EmitterSize;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Infection/Infection.js":
/*!******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Infection/Infection.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InfectionStage_1 = __webpack_require__(/*! ./InfectionStage */ "./node_modules/tsparticles/dist/Options/Classes/Infection/InfectionStage.js");
var Infection = (function () {
    function Infection() {
        this.cure = false;
        this.delay = 0;
        this.enable = false;
        this.infections = 0;
        this.stages = [];
    }
    Infection.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.cure !== undefined) {
                this.cure = data.cure;
            }
            if (data.delay !== undefined) {
                this.delay = data.delay;
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.infections !== undefined) {
                this.infections = data.infections;
            }
            if (data.stages !== undefined) {
                this.stages = data.stages.map(function (t) {
                    var s = new InfectionStage_1.InfectionStage();
                    s.load(t);
                    return s;
                });
            }
        }
    };
    return Infection;
}());
exports.Infection = Infection;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Infection/InfectionStage.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Infection/InfectionStage.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OptionsColor_1 = __webpack_require__(/*! ../Particles/OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/Particles/OptionsColor.js");
var InfectionStage = (function () {
    function InfectionStage() {
        this.color = new OptionsColor_1.OptionsColor();
        this.color.value = "#ff0000";
        this.radius = 0;
        this.rate = 1;
    }
    InfectionStage.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.color !== undefined) {
                this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            }
            this.duration = data.duration;
            this.infectedStage = data.infectedStage;
            if (data.radius !== undefined) {
                this.radius = data.radius;
            }
            if (data.rate !== undefined) {
                this.rate = data.rate;
            }
        }
    };
    return InfectionStage;
}());
exports.InfectionStage = InfectionStage;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/ClickEvent.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/ClickEvent.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ClickEvent = (function () {
    function ClickEvent() {
        this.enable = false;
        this.mode = [];
    }
    ClickEvent.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.mode !== undefined) {
                this.mode = data.mode;
            }
        }
    };
    return ClickEvent;
}());
exports.ClickEvent = ClickEvent;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/DivEvent.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/DivEvent.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DivEvent = (function () {
    function DivEvent() {
        this.elementId = "";
        this.enable = false;
        this.mode = [];
    }
    Object.defineProperty(DivEvent.prototype, "el", {
        get: function () {
            return this.elementId;
        },
        set: function (value) {
            this.elementId = value;
        },
        enumerable: true,
        configurable: true
    });
    DivEvent.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            var elementId = (_a = data.elementId) !== null && _a !== void 0 ? _a : data.el;
            if (elementId !== undefined) {
                this.elementId = elementId;
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.mode !== undefined) {
                this.mode = data.mode;
            }
        }
    };
    return DivEvent;
}());
exports.DivEvent = DivEvent;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/Events.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/Events.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ClickEvent_1 = __webpack_require__(/*! ./ClickEvent */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/ClickEvent.js");
var DivEvent_1 = __webpack_require__(/*! ./DivEvent */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/DivEvent.js");
var HoverEvent_1 = __webpack_require__(/*! ./HoverEvent */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/HoverEvent.js");
var Events = (function () {
    function Events() {
        this.onClick = new ClickEvent_1.ClickEvent();
        this.onDiv = new DivEvent_1.DivEvent();
        this.onHover = new HoverEvent_1.HoverEvent();
        this.resize = true;
    }
    Object.defineProperty(Events.prototype, "onclick", {
        get: function () {
            return this.onClick;
        },
        set: function (value) {
            this.onClick = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Events.prototype, "ondiv", {
        get: function () {
            return this.onDiv;
        },
        set: function (value) {
            this.onDiv = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Events.prototype, "onhover", {
        get: function () {
            return this.onHover;
        },
        set: function (value) {
            this.onHover = value;
        },
        enumerable: true,
        configurable: true
    });
    Events.prototype.load = function (data) {
        var _a, _b, _c;
        if (data !== undefined) {
            this.onClick.load((_a = data.onClick) !== null && _a !== void 0 ? _a : data.onclick);
            this.onDiv.load((_b = data.onDiv) !== null && _b !== void 0 ? _b : data.ondiv);
            this.onHover.load((_c = data.onHover) !== null && _c !== void 0 ? _c : data.onhover);
            if (data.resize !== undefined) {
                this.resize = data.resize;
            }
        }
    };
    return Events;
}());
exports.Events = Events;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/HoverEvent.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/HoverEvent.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Parallax_1 = __webpack_require__(/*! ./Parallax */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/Parallax.js");
var HoverEvent = (function () {
    function HoverEvent() {
        this.enable = false;
        this.mode = [];
        this.parallax = new Parallax_1.Parallax();
    }
    HoverEvent.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.mode !== undefined) {
                this.mode = data.mode;
            }
            this.parallax.load(data.parallax);
        }
    };
    return HoverEvent;
}());
exports.HoverEvent = HoverEvent;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/Parallax.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/Parallax.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Parallax = (function () {
    function Parallax() {
        this.enable = false;
        this.force = 2;
        this.smooth = 10;
    }
    Parallax.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.force !== undefined) {
                this.force = data.force;
            }
            if (data.smooth !== undefined) {
                this.smooth = data.smooth;
            }
        }
    };
    return Parallax;
}());
exports.Parallax = Parallax;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Interactivity.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Interactivity.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InteractivityDetect_1 = __webpack_require__(/*! ../../../Enums/InteractivityDetect */ "./node_modules/tsparticles/dist/Enums/InteractivityDetect.js");
var Events_1 = __webpack_require__(/*! ./Events/Events */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/Events.js");
var Modes_1 = __webpack_require__(/*! ./Modes/Modes */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Modes.js");
var HoverMode_1 = __webpack_require__(/*! ../../../Enums/Modes/HoverMode */ "./node_modules/tsparticles/dist/Enums/Modes/HoverMode.js");
var Interactivity = (function () {
    function Interactivity() {
        this.detectsOn = InteractivityDetect_1.InteractivityDetect.canvas;
        this.events = new Events_1.Events();
        this.modes = new Modes_1.Modes();
    }
    Object.defineProperty(Interactivity.prototype, "detect_on", {
        get: function () {
            return this.detectsOn;
        },
        set: function (value) {
            this.detectsOn = value;
        },
        enumerable: true,
        configurable: true
    });
    Interactivity.prototype.load = function (data) {
        var _a, _b, _c;
        if (data !== undefined) {
            var detectsOn = (_a = data.detectsOn) !== null && _a !== void 0 ? _a : data.detect_on;
            if (detectsOn !== undefined) {
                this.detectsOn = detectsOn;
            }
            this.events.load(data.events);
            this.modes.load(data.modes);
            if (((_c = (_b = data.modes) === null || _b === void 0 ? void 0 : _b.slow) === null || _c === void 0 ? void 0 : _c.active) === true) {
                if (this.events.onHover.mode instanceof Array) {
                    if (this.events.onHover.mode.indexOf(HoverMode_1.HoverMode.slow) < 0) {
                        this.events.onHover.mode.push(HoverMode_1.HoverMode.slow);
                    }
                }
                else if (this.events.onHover.mode !== HoverMode_1.HoverMode.slow) {
                    this.events.onHover.mode = [this.events.onHover.mode, HoverMode_1.HoverMode.slow];
                }
            }
        }
    };
    return Interactivity;
}());
exports.Interactivity = Interactivity;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Bubble.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Bubble.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OptionsColor_1 = __webpack_require__(/*! ../../Particles/OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/Particles/OptionsColor.js");
var Bubble = (function () {
    function Bubble() {
        this.distance = 200;
        this.duration = 0.4;
    }
    Bubble.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.distance !== undefined) {
                this.distance = data.distance;
            }
            if (data.duration !== undefined) {
                this.duration = data.duration;
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
            if (data.color !== undefined) {
                if (data.color instanceof Array) {
                    this.color = data.color.map(function (s) { return OptionsColor_1.OptionsColor.create(undefined, s); });
                }
                else {
                    if (this.color instanceof Array) {
                        this.color = new OptionsColor_1.OptionsColor();
                    }
                    this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
                }
            }
            if (data.size !== undefined) {
                this.size = data.size;
            }
        }
    };
    return Bubble;
}());
exports.Bubble = Bubble;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Connect.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Connect.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ConnectLineLinked_1 = __webpack_require__(/*! ./ConnectLineLinked */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/ConnectLineLinked.js");
var Connect = (function () {
    function Connect() {
        this.distance = 80;
        this.lineLinked = new ConnectLineLinked_1.ConnectLineLinked();
        this.radius = 60;
    }
    Object.defineProperty(Connect.prototype, "line_linked", {
        get: function () {
            return this.lineLinked;
        },
        set: function (value) {
            this.lineLinked = value;
        },
        enumerable: true,
        configurable: true
    });
    Connect.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            if (data.distance !== undefined) {
                this.distance = data.distance;
            }
            this.lineLinked.load((_a = data.lineLinked) !== null && _a !== void 0 ? _a : data.line_linked);
            if (data.radius !== undefined) {
                this.radius = data.radius;
            }
        }
    };
    return Connect;
}());
exports.Connect = Connect;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/ConnectLineLinked.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/ConnectLineLinked.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ConnectLineLinked = (function () {
    function ConnectLineLinked() {
        this.opacity = 0.5;
    }
    ConnectLineLinked.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
        }
    };
    return ConnectLineLinked;
}());
exports.ConnectLineLinked = ConnectLineLinked;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Grab.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Grab.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GrabLineLinked_1 = __webpack_require__(/*! ./GrabLineLinked */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/GrabLineLinked.js");
var Grab = (function () {
    function Grab() {
        this.distance = 100;
        this.lineLinked = new GrabLineLinked_1.GrabLineLinked();
    }
    Object.defineProperty(Grab.prototype, "line_linked", {
        get: function () {
            return this.lineLinked;
        },
        set: function (value) {
            this.lineLinked = value;
        },
        enumerable: true,
        configurable: true
    });
    Grab.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            if (data.distance !== undefined) {
                this.distance = data.distance;
            }
            this.lineLinked.load((_a = data.lineLinked) !== null && _a !== void 0 ? _a : data.line_linked);
        }
    };
    return Grab;
}());
exports.Grab = Grab;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/GrabLineLinked.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/GrabLineLinked.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GrabLineLinked = (function () {
    function GrabLineLinked() {
        this.opacity = 1;
    }
    GrabLineLinked.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
        }
    };
    return GrabLineLinked;
}());
exports.GrabLineLinked = GrabLineLinked;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Modes.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Modes.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Bubble_1 = __webpack_require__(/*! ./Bubble */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Bubble.js");
var Connect_1 = __webpack_require__(/*! ./Connect */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Connect.js");
var Grab_1 = __webpack_require__(/*! ./Grab */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Grab.js");
var Remove_1 = __webpack_require__(/*! ./Remove */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Remove.js");
var Push_1 = __webpack_require__(/*! ./Push */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Push.js");
var Repulse_1 = __webpack_require__(/*! ./Repulse */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Repulse.js");
var Slow_1 = __webpack_require__(/*! ./Slow */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Slow.js");
var Emitter_1 = __webpack_require__(/*! ../../Emitters/Emitter */ "./node_modules/tsparticles/dist/Options/Classes/Emitters/Emitter.js");
var Absorber_1 = __webpack_require__(/*! ../../Absorbers/Absorber */ "./node_modules/tsparticles/dist/Options/Classes/Absorbers/Absorber.js");
var Modes = (function () {
    function Modes() {
        this.absorbers = [];
        this.bubble = new Bubble_1.Bubble();
        this.connect = new Connect_1.Connect();
        this.emitters = [];
        this.grab = new Grab_1.Grab();
        this.push = new Push_1.Push();
        this.remove = new Remove_1.Remove();
        this.repulse = new Repulse_1.Repulse();
        this.slow = new Slow_1.Slow();
    }
    Modes.prototype.load = function (data) {
        if (data !== undefined) {
            this.bubble.load(data.bubble);
            this.connect.load(data.connect);
            this.grab.load(data.grab);
            this.push.load(data.push);
            this.remove.load(data.remove);
            this.repulse.load(data.repulse);
            this.slow.load(data.slow);
            if (data.emitters !== undefined) {
                if (data.emitters instanceof Array) {
                    this.emitters = data.emitters.map(function (s) {
                        var tmp = new Emitter_1.Emitter();
                        tmp.load(s);
                        return tmp;
                    });
                }
                else {
                    if (this.emitters instanceof Array) {
                        this.emitters = new Emitter_1.Emitter();
                    }
                    this.emitters.load(data.emitters);
                }
            }
            if (data.absorbers !== undefined) {
                if (data.absorbers instanceof Array) {
                    this.absorbers = data.absorbers.map(function (s) {
                        var tmp = new Absorber_1.Absorber();
                        tmp.load(s);
                        return tmp;
                    });
                }
                else {
                    if (this.absorbers instanceof Array) {
                        this.absorbers = new Absorber_1.Absorber();
                    }
                    this.absorbers.load(data.absorbers);
                }
            }
        }
    };
    return Modes;
}());
exports.Modes = Modes;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Push.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Push.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Push = (function () {
    function Push() {
        this.quantity = 4;
    }
    Object.defineProperty(Push.prototype, "particles_nb", {
        get: function () {
            return this.quantity;
        },
        set: function (value) {
            this.quantity = value;
        },
        enumerable: true,
        configurable: true
    });
    Push.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            var quantity = (_a = data.quantity) !== null && _a !== void 0 ? _a : data.particles_nb;
            if (quantity !== undefined) {
                this.quantity = quantity;
            }
        }
    };
    return Push;
}());
exports.Push = Push;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Remove.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Remove.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Remove = (function () {
    function Remove() {
        this.quantity = 2;
    }
    Object.defineProperty(Remove.prototype, "particles_nb", {
        get: function () {
            return this.quantity;
        },
        set: function (value) {
            this.quantity = value;
        },
        enumerable: true,
        configurable: true
    });
    Remove.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            var quantity = (_a = data.quantity) !== null && _a !== void 0 ? _a : data.particles_nb;
            if (quantity !== undefined) {
                this.quantity = quantity;
            }
        }
    };
    return Remove;
}());
exports.Remove = Remove;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Repulse.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Repulse.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Repulse = (function () {
    function Repulse() {
        this.distance = 200;
        this.duration = 0.4;
        this.speed = 1;
    }
    Repulse.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.distance !== undefined) {
                this.distance = data.distance;
            }
            if (data.duration !== undefined) {
                this.duration = data.duration;
            }
            if (data.speed !== undefined) {
                this.speed = data.speed;
            }
        }
    };
    return Repulse;
}());
exports.Repulse = Repulse;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Slow.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Slow.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Slow = (function () {
    function Slow() {
        this.factor = 3;
        this.radius = 200;
    }
    Object.defineProperty(Slow.prototype, "active", {
        get: function () {
            return false;
        },
        set: function (_value) {
        },
        enumerable: true,
        configurable: true
    });
    Slow.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.factor !== undefined) {
                this.factor = data.factor;
            }
            if (data.radius !== undefined) {
                this.radius = data.radius;
            }
        }
    };
    return Slow;
}());
exports.Slow = Slow;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Options.js":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Options.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Interactivity_1 = __webpack_require__(/*! ./Interactivity/Interactivity */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Interactivity.js");
var Particles_1 = __webpack_require__(/*! ./Particles/Particles */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Particles.js");
var PolygonMask_1 = __webpack_require__(/*! ./PolygonMask/PolygonMask */ "./node_modules/tsparticles/dist/Options/Classes/PolygonMask/PolygonMask.js");
var BackgroundMask_1 = __webpack_require__(/*! ./BackgroundMask/BackgroundMask */ "./node_modules/tsparticles/dist/Options/Classes/BackgroundMask/BackgroundMask.js");
var Background_1 = __webpack_require__(/*! ./Background/Background */ "./node_modules/tsparticles/dist/Options/Classes/Background/Background.js");
var Emitter_1 = __webpack_require__(/*! ./Emitters/Emitter */ "./node_modules/tsparticles/dist/Options/Classes/Emitters/Emitter.js");
var Absorber_1 = __webpack_require__(/*! ./Absorbers/Absorber */ "./node_modules/tsparticles/dist/Options/Classes/Absorbers/Absorber.js");
var Infection_1 = __webpack_require__(/*! ./Infection/Infection */ "./node_modules/tsparticles/dist/Options/Classes/Infection/Infection.js");
var Plugins_1 = __webpack_require__(/*! ../../Utils/Plugins */ "./node_modules/tsparticles/dist/Utils/Plugins.js");
var Options = (function () {
    function Options() {
        this.absorbers = [];
        this.background = new Background_1.Background();
        this.backgroundMask = new BackgroundMask_1.BackgroundMask();
        this.detectRetina = false;
        this.emitters = [];
        this.fpsLimit = 30;
        this.infection = new Infection_1.Infection();
        this.interactivity = new Interactivity_1.Interactivity();
        this.particles = new Particles_1.Particles();
        this.pauseOnBlur = true;
        this.polygon = new PolygonMask_1.PolygonMask();
    }
    Object.defineProperty(Options.prototype, "fps_limit", {
        get: function () {
            return this.fpsLimit;
        },
        set: function (value) {
            this.fpsLimit = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Options.prototype, "retina_detect", {
        get: function () {
            return this.detectRetina;
        },
        set: function (value) {
            this.detectRetina = value;
        },
        enumerable: true,
        configurable: true
    });
    Options.prototype.load = function (data) {
        var _a, _b;
        if (data !== undefined) {
            if (data.preset !== undefined) {
                if (data.preset instanceof Array) {
                    for (var _i = 0, _c = data.preset; _i < _c.length; _i++) {
                        var preset = _c[_i];
                        this.importPreset(preset);
                    }
                }
                else {
                    this.importPreset(data.preset);
                }
            }
            if (data.background !== undefined) {
                this.background.load(data.background);
            }
            var detectRetina = (_a = data.detectRetina) !== null && _a !== void 0 ? _a : data.retina_detect;
            if (detectRetina !== undefined) {
                this.detectRetina = detectRetina;
            }
            var fpsLimit = (_b = data.fpsLimit) !== null && _b !== void 0 ? _b : data.fps_limit;
            if (fpsLimit !== undefined) {
                this.fpsLimit = fpsLimit;
            }
            if (data.pauseOnBlur !== undefined) {
                this.pauseOnBlur = data.pauseOnBlur;
            }
            this.particles.load(data.particles);
            this.infection.load(data.infection);
            this.interactivity.load(data.interactivity);
            this.polygon.load(data.polygon);
            this.backgroundMask.load(data.backgroundMask);
            if (data.emitters !== undefined) {
                if (data.emitters instanceof Array) {
                    this.emitters = data.emitters.map(function (s) {
                        var tmp = new Emitter_1.Emitter();
                        tmp.load(s);
                        return tmp;
                    });
                }
                else {
                    if (this.emitters instanceof Array) {
                        this.emitters = new Emitter_1.Emitter();
                    }
                    this.emitters.load(data.emitters);
                }
            }
            if (data.absorbers !== undefined) {
                if (data.absorbers instanceof Array) {
                    this.absorbers = data.absorbers.map(function (s) {
                        var tmp = new Absorber_1.Absorber();
                        tmp.load(s);
                        return tmp;
                    });
                }
                else {
                    if (this.absorbers instanceof Array) {
                        this.absorbers = new Absorber_1.Absorber();
                    }
                    this.absorbers.load(data.absorbers);
                }
            }
        }
    };
    Options.prototype.importPreset = function (preset) {
        var presetOptions = Plugins_1.Plugins.getPreset(preset);
        if (presetOptions !== undefined) {
            this.load(presetOptions);
        }
    };
    return Options;
}());
exports.Options = Options;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Attract.js":
/*!****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Attract.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Attract = (function () {
    function Attract() {
        this.enable = false;
        this.rotate = {
            x: 3000,
            y: 3000,
        };
    }
    Object.defineProperty(Attract.prototype, "rotateX", {
        get: function () {
            return this.rotate.x;
        },
        set: function (value) {
            this.rotate.x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attract.prototype, "rotateY", {
        get: function () {
            return this.rotate.y;
        },
        set: function (value) {
            this.rotate.y = value;
        },
        enumerable: true,
        configurable: true
    });
    Attract.prototype.load = function (data) {
        var _a, _b, _c, _d;
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            var rotateX = (_b = (_a = data.rotate) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : data.rotateX;
            if (rotateX !== undefined) {
                this.rotate.x = rotateX;
            }
            var rotateY = (_d = (_c = data.rotate) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : data.rotateY;
            if (rotateY !== undefined) {
                this.rotate.y = rotateY;
            }
        }
    };
    return Attract;
}());
exports.Attract = Attract;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Collisions.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Collisions.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CollisionMode_1 = __webpack_require__(/*! ../../../Enums/CollisionMode */ "./node_modules/tsparticles/dist/Enums/CollisionMode.js");
var Collisions = (function () {
    function Collisions() {
        this.enable = false;
        this.mode = CollisionMode_1.CollisionMode.bounce;
    }
    Collisions.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.mode !== undefined) {
                this.mode = data.mode;
            }
        }
    };
    return Collisions;
}());
exports.Collisions = Collisions;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Density.js":
/*!****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Density.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Density = (function () {
    function Density() {
        this.enable = false;
        this.area = 800;
        this.factor = 1000;
    }
    Object.defineProperty(Density.prototype, "value_area", {
        get: function () {
            return this.area;
        },
        set: function (value) {
            this.area = value;
        },
        enumerable: true,
        configurable: true
    });
    Density.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            var area = (_a = data.area) !== null && _a !== void 0 ? _a : data.value_area;
            if (area !== undefined) {
                this.area = area;
            }
            if (data.factor !== undefined) {
                this.factor = data.factor;
            }
        }
    };
    return Density;
}());
exports.Density = Density;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/LineLinked/LineLinked.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/LineLinked/LineLinked.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LineLinkedShadow_1 = __webpack_require__(/*! ./LineLinkedShadow */ "./node_modules/tsparticles/dist/Options/Classes/Particles/LineLinked/LineLinkedShadow.js");
var OptionsColor_1 = __webpack_require__(/*! ../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/Particles/OptionsColor.js");
var LineLinked = (function () {
    function LineLinked() {
        this.blink = false;
        this.color = new OptionsColor_1.OptionsColor();
        this.consent = false;
        this.distance = 100;
        this.enable = false;
        this.opacity = 1;
        this.shadow = new LineLinkedShadow_1.LineLinkedShadow();
        this.width = 1;
    }
    LineLinked.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.blink !== undefined) {
                this.blink = data.blink;
            }
            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            if (data.consent !== undefined) {
                this.consent = data.consent;
            }
            if (data.distance !== undefined) {
                this.distance = data.distance;
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
            this.shadow.load(data.shadow);
            if (data.width !== undefined) {
                this.width = data.width;
            }
        }
    };
    return LineLinked;
}());
exports.LineLinked = LineLinked;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/LineLinked/LineLinkedShadow.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/LineLinked/LineLinkedShadow.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OptionsColor_1 = __webpack_require__(/*! ../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/Particles/OptionsColor.js");
var LineLinkedShadow = (function () {
    function LineLinkedShadow() {
        this.blur = 5;
        this.color = new OptionsColor_1.OptionsColor();
        this.enable = false;
        this.color.value = "lime";
    }
    LineLinkedShadow.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.blur !== undefined) {
                this.blur = data.blur;
            }
            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
        }
    };
    return LineLinkedShadow;
}());
exports.LineLinkedShadow = LineLinkedShadow;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Move.js":
/*!*************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Move.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Attract_1 = __webpack_require__(/*! ./Attract */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Attract.js");
var MoveDirection_1 = __webpack_require__(/*! ../../../Enums/MoveDirection */ "./node_modules/tsparticles/dist/Enums/MoveDirection.js");
var OutMode_1 = __webpack_require__(/*! ../../../Enums/OutMode */ "./node_modules/tsparticles/dist/Enums/OutMode.js");
var Trail_1 = __webpack_require__(/*! ./Trail */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Trail.js");
var Noise_1 = __webpack_require__(/*! ./Noise/Noise */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Noise/Noise.js");
var Move = (function () {
    function Move() {
        this.attract = new Attract_1.Attract();
        this.direction = MoveDirection_1.MoveDirection.none;
        this.enable = false;
        this.noise = new Noise_1.Noise();
        this.outMode = OutMode_1.OutMode.out;
        this.random = false;
        this.speed = 2;
        this.straight = false;
        this.trail = new Trail_1.Trail();
        this.vibrate = false;
    }
    Object.defineProperty(Move.prototype, "collisions", {
        get: function () {
            return false;
        },
        set: function (value) {
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Move.prototype, "bounce", {
        get: function () {
            return this.collisions;
        },
        set: function (value) {
            this.collisions = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Move.prototype, "out_mode", {
        get: function () {
            return this.outMode;
        },
        set: function (value) {
            this.outMode = value;
        },
        enumerable: true,
        configurable: true
    });
    Move.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            this.attract.load(data.attract);
            if (data.direction !== undefined) {
                this.direction = data.direction;
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            this.noise.load(data.noise);
            var outMode = (_a = data.outMode) !== null && _a !== void 0 ? _a : data.out_mode;
            if (outMode !== undefined) {
                this.outMode = outMode;
            }
            if (data.random !== undefined) {
                this.random = data.random;
            }
            if (data.speed !== undefined) {
                this.speed = data.speed;
            }
            if (data.straight !== undefined) {
                this.straight = data.straight;
            }
            this.trail.load(data.trail);
            if (data.vibrate !== undefined) {
                this.vibrate = data.vibrate;
            }
        }
    };
    return Move;
}());
exports.Move = Move;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Noise/Noise.js":
/*!********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Noise/Noise.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NoiseDelay_1 = __webpack_require__(/*! ./NoiseDelay */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Noise/NoiseDelay.js");
var NoiseFactor_1 = __webpack_require__(/*! ./NoiseFactor */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Noise/NoiseFactor.js");
var Noise = (function () {
    function Noise() {
        this.delay = new NoiseDelay_1.NoiseDelay();
        this.enable = false;
        this.factor = new NoiseFactor_1.NoiseFactor();
    }
    Noise.prototype.load = function (data) {
        if (data !== undefined) {
            this.delay.load(data.delay);
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            this.factor.load(data.factor);
        }
    };
    return Noise;
}());
exports.Noise = Noise;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Noise/NoiseDelay.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Noise/NoiseDelay.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NoiseRandom_1 = __webpack_require__(/*! ./NoiseRandom */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Noise/NoiseRandom.js");
var NoiseDelay = (function () {
    function NoiseDelay() {
        this.random = new NoiseRandom_1.NoiseRandom();
        this.value = 0;
    }
    NoiseDelay.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            (_a = this.random) === null || _a === void 0 ? void 0 : _a.load(data.random);
            if (data.value !== undefined) {
                this.value = data.value;
            }
        }
    };
    return NoiseDelay;
}());
exports.NoiseDelay = NoiseDelay;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Noise/NoiseFactor.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Noise/NoiseFactor.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NoiseValue_1 = __webpack_require__(/*! ./NoiseValue */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Noise/NoiseValue.js");
var NoiseFactor = (function () {
    function NoiseFactor() {
        this.horizontal = new NoiseValue_1.NoiseValue();
        this.horizontal.value = 50;
        this.horizontal.offset = 0;
        this.vertical = new NoiseValue_1.NoiseValue();
        this.vertical.value = 10;
        this.vertical.offset = 40000;
    }
    NoiseFactor.prototype.load = function (data) {
        if (data !== undefined) {
            this.horizontal.load(data.horizontal);
            this.vertical.load(data.vertical);
        }
    };
    return NoiseFactor;
}());
exports.NoiseFactor = NoiseFactor;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Noise/NoiseRandom.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Noise/NoiseRandom.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NoiseRandom = (function () {
    function NoiseRandom() {
        this.enable = false;
        this.minimumValue = 0;
    }
    NoiseRandom.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.minimumValue !== undefined) {
                this.minimumValue = data.minimumValue;
            }
        }
    };
    return NoiseRandom;
}());
exports.NoiseRandom = NoiseRandom;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Noise/NoiseValue.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Noise/NoiseValue.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NoiseValue = (function () {
    function NoiseValue() {
        this.value = 1;
        this.offset = 0;
    }
    NoiseValue.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.value !== undefined) {
                this.value = data.value === 0 ? this.value : data.value;
            }
            if (data.offset !== undefined) {
                this.offset = data.offset;
            }
        }
    };
    return NoiseValue;
}());
exports.NoiseValue = NoiseValue;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Opacity/Opacity.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Opacity/Opacity.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OpacityAnimation_1 = __webpack_require__(/*! ./OpacityAnimation */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Opacity/OpacityAnimation.js");
var OpacityRandom_1 = __webpack_require__(/*! ./OpacityRandom */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Opacity/OpacityRandom.js");
var Opacity = (function () {
    function Opacity() {
        this.animation = new OpacityAnimation_1.OpacityAnimation();
        this.random = new OpacityRandom_1.OpacityRandom();
        this.value = 1;
    }
    Object.defineProperty(Opacity.prototype, "anim", {
        get: function () {
            return this.animation;
        },
        set: function (value) {
            this.animation = value;
        },
        enumerable: true,
        configurable: true
    });
    Opacity.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            this.animation.load((_a = data.animation) !== null && _a !== void 0 ? _a : data.anim);
            if (data.random !== undefined) {
                if (typeof data.random === "boolean") {
                    this.random.enable = data.random;
                }
                else {
                    this.random.load(data.random);
                }
            }
            if (data.value !== undefined) {
                this.value = data.value;
            }
        }
    };
    return Opacity;
}());
exports.Opacity = Opacity;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Opacity/OpacityAnimation.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Opacity/OpacityAnimation.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OpacityAnimation = (function () {
    function OpacityAnimation() {
        this.enable = false;
        this.minimumValue = 0;
        this.speed = 2;
        this.sync = false;
    }
    Object.defineProperty(OpacityAnimation.prototype, "opacity_min", {
        get: function () {
            return this.minimumValue;
        },
        set: function (value) {
            this.minimumValue = value;
        },
        enumerable: true,
        configurable: true
    });
    OpacityAnimation.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            var minimumValue = (_a = data.minimumValue) !== null && _a !== void 0 ? _a : data.opacity_min;
            if (minimumValue !== undefined) {
                this.minimumValue = minimumValue;
            }
            if (data.speed !== undefined) {
                this.speed = data.speed;
            }
            if (data.sync !== undefined) {
                this.sync = data.sync;
            }
        }
    };
    return OpacityAnimation;
}());
exports.OpacityAnimation = OpacityAnimation;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Opacity/OpacityRandom.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Opacity/OpacityRandom.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OpacityRandom = (function () {
    function OpacityRandom() {
        this.enable = false;
        this.minimumValue = 1;
    }
    OpacityRandom.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.minimumValue !== undefined) {
                this.minimumValue = data.minimumValue;
            }
        }
    };
    return OpacityRandom;
}());
exports.OpacityRandom = OpacityRandom;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/OptionsColor.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/OptionsColor.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OptionsColor = (function () {
    function OptionsColor() {
        this.value = "#fff";
    }
    OptionsColor.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.value !== undefined) {
                this.value = data.value;
            }
        }
    };
    OptionsColor.create = function (source, data) {
        var color = source !== null && source !== void 0 ? source : new OptionsColor();
        if (data !== undefined) {
            color.load(typeof data === "string" ? { value: data } : data);
        }
        return color;
    };
    return OptionsColor;
}());
exports.OptionsColor = OptionsColor;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Particles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Particles.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OptionsColor_1 = __webpack_require__(/*! ./OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/Particles/OptionsColor.js");
var LineLinked_1 = __webpack_require__(/*! ./LineLinked/LineLinked */ "./node_modules/tsparticles/dist/Options/Classes/Particles/LineLinked/LineLinked.js");
var Move_1 = __webpack_require__(/*! ./Move */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Move.js");
var ParticlesNumber_1 = __webpack_require__(/*! ./ParticlesNumber */ "./node_modules/tsparticles/dist/Options/Classes/Particles/ParticlesNumber.js");
var Opacity_1 = __webpack_require__(/*! ./Opacity/Opacity */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Opacity/Opacity.js");
var Shape_1 = __webpack_require__(/*! ./Shape/Shape */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/Shape.js");
var Size_1 = __webpack_require__(/*! ./Size/Size */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Size/Size.js");
var Rotate_1 = __webpack_require__(/*! ./Rotate/Rotate */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Rotate/Rotate.js");
var Shadow_1 = __webpack_require__(/*! ./Shadow */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Shadow.js");
var Stroke_1 = __webpack_require__(/*! ./Stroke */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Stroke.js");
var Collisions_1 = __webpack_require__(/*! ./Collisions */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Collisions.js");
var Twinkle_1 = __webpack_require__(/*! ./Twinkle/Twinkle */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Twinkle/Twinkle.js");
var Particles = (function () {
    function Particles() {
        this.collisions = new Collisions_1.Collisions();
        this.color = new OptionsColor_1.OptionsColor();
        this.lineLinked = new LineLinked_1.LineLinked();
        this.move = new Move_1.Move();
        this.number = new ParticlesNumber_1.ParticlesNumber();
        this.opacity = new Opacity_1.Opacity();
        this.rotate = new Rotate_1.Rotate();
        this.shadow = new Shadow_1.Shadow();
        this.shape = new Shape_1.Shape();
        this.size = new Size_1.Size();
        this.stroke = new Stroke_1.Stroke();
        this.twinkle = new Twinkle_1.Twinkle();
    }
    Object.defineProperty(Particles.prototype, "line_linked", {
        get: function () {
            return this.lineLinked;
        },
        set: function (value) {
            this.lineLinked = value;
        },
        enumerable: true,
        configurable: true
    });
    Particles.prototype.load = function (data) {
        var _a, _b, _c, _d, _e, _f;
        if (data !== undefined) {
            if (data.color !== undefined) {
                if (data.color instanceof Array) {
                    this.color = data.color.map(function (s) { return OptionsColor_1.OptionsColor.create(undefined, s); });
                }
                else {
                    if (this.color instanceof Array) {
                        this.color = new OptionsColor_1.OptionsColor();
                    }
                    this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
                }
            }
            var lineLinked = (_a = data.lineLinked) !== null && _a !== void 0 ? _a : data.line_linked;
            if (lineLinked !== undefined) {
                this.lineLinked.load(lineLinked);
            }
            this.move.load(data.move);
            this.number.load(data.number);
            this.opacity.load(data.opacity);
            this.rotate.load(data.rotate);
            this.shape.load(data.shape);
            this.size.load(data.size);
            this.shadow.load(data.shadow);
            this.twinkle.load(data.twinkle);
            var collisions = (_c = (_b = data.move) === null || _b === void 0 ? void 0 : _b.collisions) !== null && _c !== void 0 ? _c : (_d = data.move) === null || _d === void 0 ? void 0 : _d.bounce;
            if (collisions !== undefined) {
                this.collisions.enable = collisions;
            }
            this.collisions.load(data.collisions);
            var strokeToLoad = (_e = data.stroke) !== null && _e !== void 0 ? _e : (_f = data.shape) === null || _f === void 0 ? void 0 : _f.stroke;
            if (strokeToLoad !== undefined) {
                if (strokeToLoad instanceof Array) {
                    this.stroke = strokeToLoad.map(function (s) {
                        var tmp = new Stroke_1.Stroke();
                        tmp.load(s);
                        return tmp;
                    });
                }
                else {
                    if (this.stroke instanceof Array) {
                        this.stroke = new Stroke_1.Stroke();
                    }
                    this.stroke.load(strokeToLoad);
                }
            }
        }
    };
    return Particles;
}());
exports.Particles = Particles;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/ParticlesNumber.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/ParticlesNumber.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Density_1 = __webpack_require__(/*! ./Density */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Density.js");
var ParticlesNumber = (function () {
    function ParticlesNumber() {
        this.density = new Density_1.Density();
        this.limit = 0;
        this.value = 100;
    }
    Object.defineProperty(ParticlesNumber.prototype, "max", {
        get: function () {
            return this.limit;
        },
        set: function (value) {
            this.limit = value;
        },
        enumerable: true,
        configurable: true
    });
    ParticlesNumber.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            this.density.load(data.density);
            var limit = (_a = data.limit) !== null && _a !== void 0 ? _a : data.max;
            if (limit !== undefined) {
                this.limit = limit;
            }
            if (data.value !== undefined) {
                this.value = data.value;
            }
        }
    };
    return ParticlesNumber;
}());
exports.ParticlesNumber = ParticlesNumber;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Rotate/Rotate.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Rotate/Rotate.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RotateAnimation_1 = __webpack_require__(/*! ./RotateAnimation */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Rotate/RotateAnimation.js");
var RotateDirection_1 = __webpack_require__(/*! ../../../../Enums/RotateDirection */ "./node_modules/tsparticles/dist/Enums/RotateDirection.js");
var Rotate = (function () {
    function Rotate() {
        this.animation = new RotateAnimation_1.RotateAnimation();
        this.direction = RotateDirection_1.RotateDirection.clockwise;
        this.random = false;
        this.value = 0;
    }
    Rotate.prototype.load = function (data) {
        if (data !== undefined) {
            this.animation.load(data.animation);
            if (data.random !== undefined) {
                this.random = data.random;
            }
            if (data.direction !== undefined) {
                this.direction = data.direction;
            }
            if (data.value !== undefined) {
                this.value = data.value;
            }
        }
    };
    return Rotate;
}());
exports.Rotate = Rotate;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Rotate/RotateAnimation.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Rotate/RotateAnimation.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RotateAnimation = (function () {
    function RotateAnimation() {
        this.enable = false;
        this.speed = 0;
        this.sync = false;
    }
    RotateAnimation.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.speed !== undefined) {
                this.speed = data.speed;
            }
            if (data.sync !== undefined) {
                this.sync = data.sync;
            }
        }
    };
    return RotateAnimation;
}());
exports.RotateAnimation = RotateAnimation;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Shadow.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Shadow.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OptionsColor_1 = __webpack_require__(/*! ./OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/Particles/OptionsColor.js");
var Shadow = (function () {
    function Shadow() {
        this.blur = 0;
        this.color = new OptionsColor_1.OptionsColor();
        this.enable = false;
        this.offset = {
            x: 0,
            y: 0,
        };
        this.color.value = "#000000";
    }
    Shadow.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.blur !== undefined) {
                this.blur = data.blur;
            }
            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.offset !== undefined) {
                if (data.offset.x !== undefined) {
                    this.offset.x = data.offset.x;
                }
                if (data.offset.y !== undefined) {
                    this.offset.y = data.offset.y;
                }
            }
        }
    };
    return Shadow;
}());
exports.Shadow = Shadow;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/CharacterShape.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/CharacterShape.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var ShapeBase_1 = __webpack_require__(/*! ./ShapeBase */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/ShapeBase.js");
var CharacterShape = (function (_super) {
    tslib_1.__extends(CharacterShape, _super);
    function CharacterShape() {
        var _this = _super.call(this) || this;
        _this.font = "Verdana";
        _this.style = "";
        _this.value = "*";
        _this.weight = "400";
        return _this;
    }
    CharacterShape.prototype.load = function (data) {
        _super.prototype.load.call(this, data);
        if (data !== undefined) {
            if (data.font !== undefined) {
                this.font = data.font;
            }
            if (data.style !== undefined) {
                this.style = data.style;
            }
            if (data.value !== undefined) {
                this.value = data.value;
            }
            if (data.weight !== undefined) {
                this.weight = data.weight;
            }
        }
    };
    return CharacterShape;
}(ShapeBase_1.ShapeBase));
exports.CharacterShape = CharacterShape;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/ImageShape.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/ImageShape.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var ShapeBase_1 = __webpack_require__(/*! ./ShapeBase */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/ShapeBase.js");
var ImageShape = (function (_super) {
    tslib_1.__extends(ImageShape, _super);
    function ImageShape() {
        var _this = _super.call(this) || this;
        _this.height = 100;
        _this.replaceColor = false;
        _this.src = "";
        _this.width = 100;
        return _this;
    }
    Object.defineProperty(ImageShape.prototype, "replace_color", {
        get: function () {
            return this.replaceColor;
        },
        set: function (value) {
            this.replaceColor = value;
        },
        enumerable: true,
        configurable: true
    });
    ImageShape.prototype.load = function (data) {
        var _a;
        _super.prototype.load.call(this, data);
        if (data !== undefined) {
            if (data.height !== undefined) {
                this.height = data.height;
            }
            var replaceColor = (_a = data.replaceColor) !== null && _a !== void 0 ? _a : data.replace_color;
            if (replaceColor !== undefined) {
                this.replaceColor = replaceColor;
            }
            if (data.src !== undefined) {
                this.src = data.src;
            }
            if (data.width !== undefined) {
                this.width = data.width;
            }
        }
    };
    return ImageShape;
}(ShapeBase_1.ShapeBase));
exports.ImageShape = ImageShape;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/PolygonShape.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/PolygonShape.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var ShapeBase_1 = __webpack_require__(/*! ./ShapeBase */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/ShapeBase.js");
var PolygonShape = (function (_super) {
    tslib_1.__extends(PolygonShape, _super);
    function PolygonShape() {
        var _this = _super.call(this) || this;
        _this.sides = 5;
        return _this;
    }
    Object.defineProperty(PolygonShape.prototype, "nb_sides", {
        get: function () {
            return this.sides;
        },
        set: function (value) {
            this.sides = value;
        },
        enumerable: true,
        configurable: true
    });
    PolygonShape.prototype.load = function (data) {
        var _a;
        _super.prototype.load.call(this, data);
        if (data !== undefined) {
            var sides = (_a = data.sides) !== null && _a !== void 0 ? _a : data.nb_sides;
            if (sides !== undefined) {
                this.sides = sides;
            }
        }
    };
    return PolygonShape;
}(ShapeBase_1.ShapeBase));
exports.PolygonShape = PolygonShape;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/Shape.js":
/*!********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/Shape.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ShapeType_1 = __webpack_require__(/*! ../../../../Enums/ShapeType */ "./node_modules/tsparticles/dist/Enums/ShapeType.js");
var ImageShape_1 = __webpack_require__(/*! ./ImageShape */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/ImageShape.js");
var PolygonShape_1 = __webpack_require__(/*! ./PolygonShape */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/PolygonShape.js");
var CharacterShape_1 = __webpack_require__(/*! ./CharacterShape */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/CharacterShape.js");
var Utils_1 = __webpack_require__(/*! ../../../../Utils/Utils */ "./node_modules/tsparticles/dist/Utils/Utils.js");
var Shape = (function () {
    function Shape() {
        this.options = {};
        this.character = new CharacterShape_1.CharacterShape();
        this.image = new ImageShape_1.ImageShape();
        this.polygon = new PolygonShape_1.PolygonShape();
        this.type = ShapeType_1.ShapeType.circle;
    }
    Object.defineProperty(Shape.prototype, "image", {
        get: function () {
            var _a;
            return ((_a = this.options[ShapeType_1.ShapeType.image]) !== null && _a !== void 0 ? _a : this.options[ShapeType_1.ShapeType.images]);
        },
        set: function (value) {
            this.options[ShapeType_1.ShapeType.image] = value;
            this.options[ShapeType_1.ShapeType.images] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "custom", {
        get: function () {
            return this.options;
        },
        set: function (value) {
            this.options = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "images", {
        get: function () {
            return this.image instanceof Array ? this.image : [this.image];
        },
        set: function (value) {
            this.image = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "stroke", {
        get: function () {
            return [];
        },
        set: function (_value) {
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "character", {
        get: function () {
            var _a;
            return ((_a = this.options[ShapeType_1.ShapeType.character]) !== null && _a !== void 0 ? _a : this.options[ShapeType_1.ShapeType.char]);
        },
        set: function (value) {
            this.options[ShapeType_1.ShapeType.character] = value;
            this.options[ShapeType_1.ShapeType.char] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "polygon", {
        get: function () {
            var _a;
            return ((_a = this.options[ShapeType_1.ShapeType.polygon]) !== null && _a !== void 0 ? _a : this.options[ShapeType_1.ShapeType.star]);
        },
        set: function (value) {
            this.options[ShapeType_1.ShapeType.polygon] = value;
            this.options[ShapeType_1.ShapeType.star] = value;
        },
        enumerable: true,
        configurable: true
    });
    Shape.prototype.load = function (data) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        if (data !== undefined) {
            var options = (_a = data.options) !== null && _a !== void 0 ? _a : data.custom;
            if (options !== undefined) {
                for (var shape in options) {
                    var item = options[shape];
                    if (item !== undefined) {
                        this.options[shape] = Utils_1.Utils.deepExtend((_b = this.options[shape]) !== null && _b !== void 0 ? _b : {}, item);
                    }
                }
            }
            if (data.character !== undefined) {
                var item = data.character;
                if (item !== undefined) {
                    if (item instanceof Array) {
                        if (this.options[ShapeType_1.ShapeType.character] instanceof Array) {
                            this.options[ShapeType_1.ShapeType.character] = Utils_1.Utils.deepExtend((_c = this.options[ShapeType_1.ShapeType.character]) !== null && _c !== void 0 ? _c : [], item);
                            this.options[ShapeType_1.ShapeType.char] = Utils_1.Utils.deepExtend((_d = this.options[ShapeType_1.ShapeType.char]) !== null && _d !== void 0 ? _d : [], item);
                        }
                        else {
                            this.options[ShapeType_1.ShapeType.character] = Utils_1.Utils.deepExtend([], item);
                            this.options[ShapeType_1.ShapeType.char] = Utils_1.Utils.deepExtend([], item);
                        }
                    }
                    else {
                        if (this.options[ShapeType_1.ShapeType.character] instanceof Array) {
                            this.options[ShapeType_1.ShapeType.character] = Utils_1.Utils.deepExtend({}, item);
                            this.options[ShapeType_1.ShapeType.char] = Utils_1.Utils.deepExtend({}, item);
                        }
                        else {
                            this.options[ShapeType_1.ShapeType.character] = Utils_1.Utils.deepExtend((_e = this.options[ShapeType_1.ShapeType.character]) !== null && _e !== void 0 ? _e : [], item);
                            this.options[ShapeType_1.ShapeType.char] = Utils_1.Utils.deepExtend((_f = this.options[ShapeType_1.ShapeType.char]) !== null && _f !== void 0 ? _f : [], item);
                        }
                    }
                }
            }
            if (data.polygon !== undefined) {
                var item = data.polygon;
                if (item !== undefined) {
                    if (item instanceof Array) {
                        if (this.options[ShapeType_1.ShapeType.polygon] instanceof Array) {
                            this.options[ShapeType_1.ShapeType.polygon] = Utils_1.Utils.deepExtend((_g = this.options[ShapeType_1.ShapeType.polygon]) !== null && _g !== void 0 ? _g : [], item);
                            this.options[ShapeType_1.ShapeType.star] = Utils_1.Utils.deepExtend((_h = this.options[ShapeType_1.ShapeType.star]) !== null && _h !== void 0 ? _h : [], item);
                        }
                        else {
                            this.options[ShapeType_1.ShapeType.polygon] = Utils_1.Utils.deepExtend([], item);
                            this.options[ShapeType_1.ShapeType.star] = Utils_1.Utils.deepExtend([], item);
                        }
                    }
                    else {
                        if (this.options[ShapeType_1.ShapeType.polygon] instanceof Array) {
                            this.options[ShapeType_1.ShapeType.polygon] = Utils_1.Utils.deepExtend({}, item);
                            this.options[ShapeType_1.ShapeType.star] = Utils_1.Utils.deepExtend({}, item);
                        }
                        else {
                            this.options[ShapeType_1.ShapeType.polygon] = Utils_1.Utils.deepExtend((_j = this.options[ShapeType_1.ShapeType.polygon]) !== null && _j !== void 0 ? _j : [], item);
                            this.options[ShapeType_1.ShapeType.star] = Utils_1.Utils.deepExtend((_k = this.options[ShapeType_1.ShapeType.star]) !== null && _k !== void 0 ? _k : [], item);
                        }
                    }
                }
            }
            if (data.image !== undefined) {
                var item = data.image;
                if (item !== undefined) {
                    if (item instanceof Array) {
                        if (this.options[ShapeType_1.ShapeType.image] instanceof Array) {
                            this.options[ShapeType_1.ShapeType.image] = Utils_1.Utils.deepExtend((_l = this.options[ShapeType_1.ShapeType.image]) !== null && _l !== void 0 ? _l : [], item);
                            this.options[ShapeType_1.ShapeType.images] = Utils_1.Utils.deepExtend((_m = this.options[ShapeType_1.ShapeType.images]) !== null && _m !== void 0 ? _m : [], item);
                        }
                        else {
                            this.options[ShapeType_1.ShapeType.image] = Utils_1.Utils.deepExtend([], item);
                            this.options[ShapeType_1.ShapeType.images] = Utils_1.Utils.deepExtend([], item);
                        }
                    }
                    else {
                        if (this.options[ShapeType_1.ShapeType.image] instanceof Array) {
                            this.options[ShapeType_1.ShapeType.image] = Utils_1.Utils.deepExtend({}, item);
                            this.options[ShapeType_1.ShapeType.images] = Utils_1.Utils.deepExtend({}, item);
                        }
                        else {
                            this.options[ShapeType_1.ShapeType.image] = Utils_1.Utils.deepExtend((_o = this.options[ShapeType_1.ShapeType.image]) !== null && _o !== void 0 ? _o : [], item);
                            this.options[ShapeType_1.ShapeType.images] = Utils_1.Utils.deepExtend((_p = this.options[ShapeType_1.ShapeType.images]) !== null && _p !== void 0 ? _p : [], item);
                        }
                    }
                }
            }
            if (data.type !== undefined) {
                this.type = data.type;
            }
        }
    };
    return Shape;
}());
exports.Shape = Shape;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/ShapeBase.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/ShapeBase.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ShapeBase = (function () {
    function ShapeBase() {
        this.fill = true;
        this.close = true;
    }
    ShapeBase.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.fill !== undefined) {
                this.fill = data.fill;
            }
            if (data.particles !== undefined) {
                this.particles = data.particles;
            }
        }
    };
    return ShapeBase;
}());
exports.ShapeBase = ShapeBase;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Size/Size.js":
/*!******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Size/Size.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SizeAnimation_1 = __webpack_require__(/*! ./SizeAnimation */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Size/SizeAnimation.js");
var SizeRandom_1 = __webpack_require__(/*! ./SizeRandom */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Size/SizeRandom.js");
var Size = (function () {
    function Size() {
        this.animation = new SizeAnimation_1.SizeAnimation();
        this.random = new SizeRandom_1.SizeRandom();
        this.value = 3;
    }
    Object.defineProperty(Size.prototype, "anim", {
        get: function () {
            return this.animation;
        },
        set: function (value) {
            this.animation = value;
        },
        enumerable: true,
        configurable: true
    });
    Size.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            var animation = (_a = data.animation) !== null && _a !== void 0 ? _a : data.anim;
            if (animation !== undefined) {
                this.animation.load(animation);
            }
            if (data.random !== undefined) {
                if (typeof data.random === "boolean") {
                    this.random.enable = data.random;
                }
                else {
                    this.random.load(data.random);
                }
            }
            if (data.value !== undefined) {
                this.value = data.value;
            }
        }
    };
    return Size;
}());
exports.Size = Size;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Size/SizeAnimation.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Size/SizeAnimation.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StartValueType_1 = __webpack_require__(/*! ../../../../Enums/StartValueType */ "./node_modules/tsparticles/dist/Enums/StartValueType.js");
var DestroyType_1 = __webpack_require__(/*! ../../../../Enums/DestroyType */ "./node_modules/tsparticles/dist/Enums/DestroyType.js");
var SizeAnimation = (function () {
    function SizeAnimation() {
        this.destroy = DestroyType_1.DestroyType.none;
        this.enable = false;
        this.minimumValue = 0;
        this.speed = 5;
        this.startValue = StartValueType_1.StartValueType.max;
        this.sync = false;
    }
    Object.defineProperty(SizeAnimation.prototype, "size_min", {
        get: function () {
            return this.minimumValue;
        },
        set: function (value) {
            this.minimumValue = value;
        },
        enumerable: true,
        configurable: true
    });
    SizeAnimation.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            if (data.destroy !== undefined) {
                this.destroy = data.destroy;
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            var minimumValue = (_a = data.minimumValue) !== null && _a !== void 0 ? _a : data.size_min;
            if (minimumValue !== undefined) {
                this.minimumValue = minimumValue;
            }
            if (data.speed !== undefined) {
                this.speed = data.speed;
            }
            if (data.startValue !== undefined) {
                this.startValue = data.startValue;
            }
            if (data.sync !== undefined) {
                this.sync = data.sync;
            }
        }
    };
    return SizeAnimation;
}());
exports.SizeAnimation = SizeAnimation;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Size/SizeRandom.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Size/SizeRandom.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SizeRandom = (function () {
    function SizeRandom() {
        this.enable = false;
        this.minimumValue = 1;
    }
    SizeRandom.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.minimumValue !== undefined) {
                this.minimumValue = data.minimumValue;
            }
        }
    };
    return SizeRandom;
}());
exports.SizeRandom = SizeRandom;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Stroke.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Stroke.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OptionsColor_1 = __webpack_require__(/*! ./OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/Particles/OptionsColor.js");
var Stroke = (function () {
    function Stroke() {
        this.color = new OptionsColor_1.OptionsColor();
        this.width = 0;
        this.opacity = 1;
        this.color.value = "#ff0000";
    }
    Stroke.prototype.load = function (data) {
        if (data !== undefined) {
            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            if (data.width !== undefined) {
                this.width = data.width;
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
        }
    };
    return Stroke;
}());
exports.Stroke = Stroke;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Trail.js":
/*!**************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Trail.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OptionsColor_1 = __webpack_require__(/*! ./OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/Particles/OptionsColor.js");
var Trail = (function () {
    function Trail() {
        this.enable = false;
        this.length = 10;
        this.fillColor = new OptionsColor_1.OptionsColor();
        this.fillColor.value = "#000000";
    }
    Trail.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            this.fillColor = OptionsColor_1.OptionsColor.create(this.fillColor, data.fillColor);
            if (data.length !== undefined) {
                this.length = data.length;
            }
        }
    };
    return Trail;
}());
exports.Trail = Trail;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Twinkle/Twinkle.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Twinkle/Twinkle.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TwinkleValues_1 = __webpack_require__(/*! ./TwinkleValues */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Twinkle/TwinkleValues.js");
var Twinkle = (function () {
    function Twinkle() {
        this.lines = new TwinkleValues_1.TwinkleValues();
        this.particles = new TwinkleValues_1.TwinkleValues();
    }
    Twinkle.prototype.load = function (data) {
        if (data !== undefined) {
            this.lines.load(data.lines);
            this.particles.load(data.particles);
        }
    };
    return Twinkle;
}());
exports.Twinkle = Twinkle;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Twinkle/TwinkleValues.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Twinkle/TwinkleValues.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OptionsColor_1 = __webpack_require__(/*! ../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/Particles/OptionsColor.js");
var TwinkleValues = (function () {
    function TwinkleValues() {
        this.enable = false;
        this.frequency = 0.05;
        this.opacity = 1;
    }
    TwinkleValues.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.color !== undefined) {
                this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.frequency !== undefined) {
                this.frequency = data.frequency;
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
        }
    };
    return TwinkleValues;
}());
exports.TwinkleValues = TwinkleValues;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/PolygonMask/Draw.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/PolygonMask/Draw.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PolygonMaskDrawStroke_1 = __webpack_require__(/*! ./PolygonMaskDrawStroke */ "./node_modules/tsparticles/dist/Options/Classes/PolygonMask/PolygonMaskDrawStroke.js");
var OptionsColor_1 = __webpack_require__(/*! ../Particles/OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/Particles/OptionsColor.js");
var Draw = (function () {
    function Draw() {
        this.enable = false;
        this.stroke = new PolygonMaskDrawStroke_1.PolygonMaskDrawStroke();
    }
    Object.defineProperty(Draw.prototype, "lineWidth", {
        get: function () {
            return this.stroke.width;
        },
        set: function (value) {
            this.stroke.width = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Draw.prototype, "lineColor", {
        get: function () {
            return this.stroke.color;
        },
        set: function (value) {
            this.stroke.color = OptionsColor_1.OptionsColor.create(this.stroke.color, value);
        },
        enumerable: true,
        configurable: true
    });
    Draw.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            var stroke = (_a = data.stroke) !== null && _a !== void 0 ? _a : {
                color: data.lineColor,
                width: data.lineWidth,
            };
            this.stroke.load(stroke);
        }
    };
    return Draw;
}());
exports.Draw = Draw;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/PolygonMask/Move.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/PolygonMask/Move.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PolygonMaskMoveType_1 = __webpack_require__(/*! ../../../Enums/PolygonMaskMoveType */ "./node_modules/tsparticles/dist/Enums/PolygonMaskMoveType.js");
var Move = (function () {
    function Move() {
        this.radius = 10;
        this.type = PolygonMaskMoveType_1.PolygonMaskMoveType.path;
    }
    Move.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.radius !== undefined) {
                this.radius = data.radius;
            }
            if (data.type !== undefined) {
                this.type = data.type;
            }
        }
    };
    return Move;
}());
exports.Move = Move;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/PolygonMask/PolygonInline.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/PolygonMask/PolygonInline.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PolygonMaskInlineArrangement_1 = __webpack_require__(/*! ../../../Enums/PolygonMaskInlineArrangement */ "./node_modules/tsparticles/dist/Enums/PolygonMaskInlineArrangement.js");
var PolygonInline = (function () {
    function PolygonInline() {
        this.arrangement = PolygonMaskInlineArrangement_1.PolygonMaskInlineArrangement.onePerPoint;
    }
    PolygonInline.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.arrangement !== undefined) {
                this.arrangement = data.arrangement;
            }
        }
    };
    return PolygonInline;
}());
exports.PolygonInline = PolygonInline;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/PolygonMask/PolygonMask.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/PolygonMask/PolygonMask.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PolygonMaskType_1 = __webpack_require__(/*! ../../../Enums/PolygonMaskType */ "./node_modules/tsparticles/dist/Enums/PolygonMaskType.js");
var Draw_1 = __webpack_require__(/*! ./Draw */ "./node_modules/tsparticles/dist/Options/Classes/PolygonMask/Draw.js");
var Move_1 = __webpack_require__(/*! ./Move */ "./node_modules/tsparticles/dist/Options/Classes/PolygonMask/Move.js");
var PolygonInline_1 = __webpack_require__(/*! ./PolygonInline */ "./node_modules/tsparticles/dist/Options/Classes/PolygonMask/PolygonInline.js");
var PolygonMask = (function () {
    function PolygonMask() {
        this.draw = new Draw_1.Draw();
        this.enable = false;
        this.inline = new PolygonInline_1.PolygonInline();
        this.move = new Move_1.Move();
        this.scale = 1;
        this.type = PolygonMaskType_1.PolygonMaskType.none;
        this.url = "";
    }
    Object.defineProperty(PolygonMask.prototype, "inlineArrangement", {
        get: function () {
            return this.inline.arrangement;
        },
        set: function (value) {
            this.inline.arrangement = value;
        },
        enumerable: true,
        configurable: true
    });
    PolygonMask.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            this.draw.load(data.draw);
            var inline = (_a = data.inline) !== null && _a !== void 0 ? _a : {
                arrangement: data.inlineArrangement,
            };
            if (inline !== undefined) {
                this.inline.load(inline);
            }
            this.move.load(data.move);
            if (data.scale !== undefined) {
                this.scale = data.scale;
            }
            if (data.type !== undefined) {
                this.type = data.type;
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            else {
                this.enable = this.type !== PolygonMaskType_1.PolygonMaskType.none;
            }
            if (data.url !== undefined) {
                this.url = data.url;
            }
            if (data.position !== undefined) {
                this.position = {
                    x: data.position.x,
                    y: data.position.y,
                };
            }
        }
    };
    return PolygonMask;
}());
exports.PolygonMask = PolygonMask;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/PolygonMask/PolygonMaskDrawStroke.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/PolygonMask/PolygonMaskDrawStroke.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OptionsColor_1 = __webpack_require__(/*! ../Particles/OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/Particles/OptionsColor.js");
var ColorUtils_1 = __webpack_require__(/*! ../../../Utils/ColorUtils */ "./node_modules/tsparticles/dist/Utils/ColorUtils.js");
var PolygonMaskDrawStroke = (function () {
    function PolygonMaskDrawStroke() {
        this.color = new OptionsColor_1.OptionsColor();
        this.width = 0.5;
        this.opacity = 1;
    }
    PolygonMaskDrawStroke.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            if (typeof this.color.value === "string") {
                this.opacity = (_a = ColorUtils_1.ColorUtils.stringToAlpha(this.color.value)) !== null && _a !== void 0 ? _a : this.opacity;
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
            if (data.width !== undefined) {
                this.width = data.width;
            }
        }
    };
    return PolygonMaskDrawStroke;
}());
exports.PolygonMaskDrawStroke = PolygonMaskDrawStroke;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Absorbers/Absorber.js":
/*!*********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Absorbers/Absorber.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ColorUtils_1 = __webpack_require__(/*! ../../Utils/ColorUtils */ "./node_modules/tsparticles/dist/Utils/ColorUtils.js");
var Utils_1 = __webpack_require__(/*! ../../Utils/Utils */ "./node_modules/tsparticles/dist/Utils/Utils.js");
var Absorber = (function () {
    function Absorber(absorbers, options, position) {
        var _a, _b;
        this.absorbers = absorbers;
        this.container = absorbers.container;
        this.initialPosition = position;
        this.options = options;
        var container = this.container;
        var size = options.size.value * container.retina.pixelRatio;
        var random = typeof options.size.random === "boolean" ? options.size.random : options.size.random.enable;
        var minSize = typeof options.size.random === "boolean" ? 1 : options.size.random.minimumValue;
        if (random) {
            size = Utils_1.Utils.randomInRange(minSize, size);
        }
        this.opacity = this.options.opacity;
        this.size = size * container.retina.pixelRatio;
        this.mass = this.size * options.size.density;
        var limit = options.size.limit;
        this.limit = limit !== undefined ? limit * container.retina.pixelRatio : limit;
        var color = typeof options.color === "string" ? { value: options.color } : options.color;
        this.color = (_a = ColorUtils_1.ColorUtils.colorToRgb(color)) !== null && _a !== void 0 ? _a : {
            b: 0,
            g: 0,
            r: 0,
        };
        this.position = (_b = this.initialPosition) !== null && _b !== void 0 ? _b : this.calcPosition();
    }
    Absorber.prototype.attract = function (particle, _delta) {
        var pos = particle.getPosition();
        var dx = this.position.x - pos.x;
        var dy = this.position.y - pos.y;
        var distance = Math.sqrt(Math.abs(dx * dx + dy * dy));
        var angle = Math.atan2(dx, dy) * (180 / Math.PI);
        var acceleration = this.mass / Math.pow(distance, 2);
        if (distance < this.size + particle.size.value) {
            var sizeFactor = particle.size.value * 0.033;
            if (this.size > particle.size.value && distance < this.size - particle.size.value) {
                particle.destroyed = true;
            }
            else {
                particle.size.value -= sizeFactor;
                particle.velocity.horizontal += Math.sin(angle * (Math.PI / 180)) * acceleration;
                particle.velocity.vertical += Math.cos(angle * (Math.PI / 180)) * acceleration;
            }
            if (this.limit === undefined || this.size < this.limit) {
                this.size += sizeFactor;
            }
            this.mass += sizeFactor * this.options.size.density;
        }
        else {
            particle.velocity.horizontal += Math.sin(angle * (Math.PI / 180)) * acceleration;
            particle.velocity.vertical += Math.cos(angle * (Math.PI / 180)) * acceleration;
        }
    };
    Absorber.prototype.resize = function () {
        var initialPosition = this.initialPosition;
        this.position = initialPosition && Utils_1.Utils.isPointInside(initialPosition, this.container.canvas.size) ?
            initialPosition :
            this.calcPosition();
    };
    Absorber.prototype.draw = function (context) {
        context.translate(this.position.x, this.position.y);
        context.beginPath();
        context.arc(0, 0, this.size, 0, Math.PI * 2, false);
        context.closePath();
        context.fillStyle = ColorUtils_1.ColorUtils.getStyleFromColor(this.color, this.opacity);
        context.fill();
    };
    Absorber.prototype.calcPosition = function () {
        var _a;
        var container = this.container;
        var percentPosition = (_a = this.options.position) !== null && _a !== void 0 ? _a : {
            x: Math.random() * 100,
            y: Math.random() * 100,
        };
        return {
            x: percentPosition.x / 100 * container.canvas.size.width,
            y: percentPosition.y / 100 * container.canvas.size.height,
        };
    };
    return Absorber;
}());
exports.Absorber = Absorber;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Absorbers/Absorbers.js":
/*!**********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Absorbers/Absorbers.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Absorber_1 = __webpack_require__(/*! ./Absorber */ "./node_modules/tsparticles/dist/Plugins/Absorbers/Absorber.js");
var ClickMode_1 = __webpack_require__(/*! ../../Enums/Modes/ClickMode */ "./node_modules/tsparticles/dist/Enums/Modes/ClickMode.js");
var Utils_1 = __webpack_require__(/*! ../../Utils/Utils */ "./node_modules/tsparticles/dist/Utils/Utils.js");
var Absorbers = (function () {
    function Absorbers(container) {
        this.container = container;
        this.array = [];
    }
    Absorbers.prototype.init = function () {
        var container = this.container;
        var options = container.options;
        if (options.absorbers instanceof Array) {
            for (var _i = 0, _a = options.absorbers; _i < _a.length; _i++) {
                var absorberOptions = _a[_i];
                var absorber = new Absorber_1.Absorber(this, absorberOptions);
                this.addAbsorber(absorber);
            }
        }
        else {
            var absorberOptions = options.absorbers;
            var absorber = new Absorber_1.Absorber(this, absorberOptions);
            this.addAbsorber(absorber);
        }
    };
    Absorbers.prototype.particleUpdate = function (particle, delta) {
        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
            var absorber = _a[_i];
            absorber.attract(particle, delta);
            if (particle.destroyed) {
                break;
            }
        }
    };
    Absorbers.prototype.draw = function (context) {
        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
            var absorber = _a[_i];
            context.save();
            absorber.draw(context);
            context.restore();
        }
    };
    Absorbers.prototype.stop = function () {
        this.array = [];
    };
    Absorbers.prototype.resize = function () {
        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
            var absorber = _a[_i];
            absorber.resize();
        }
    };
    Absorbers.prototype.handleClickMode = function (mode) {
        var container = this.container;
        var options = container.options;
        if (mode === ClickMode_1.ClickMode.absorber) {
            var absorbersModeOptions = void 0;
            var modeAbsorbers = options.interactivity.modes.absorbers;
            if (modeAbsorbers instanceof Array) {
                if (modeAbsorbers.length > 0) {
                    absorbersModeOptions = Utils_1.Utils.itemFromArray(modeAbsorbers);
                }
            }
            else {
                absorbersModeOptions = modeAbsorbers;
            }
            var absorbersOptions = absorbersModeOptions !== null && absorbersModeOptions !== void 0 ? absorbersModeOptions : (options.absorbers instanceof Array ?
                Utils_1.Utils.itemFromArray(options.absorbers) :
                options.absorbers);
            var aPosition = container.interactivity.mouse.clickPosition;
            var absorber = new Absorber_1.Absorber(this, absorbersOptions, aPosition);
            this.addAbsorber(absorber);
        }
    };
    Absorbers.prototype.addAbsorber = function (absorber) {
        this.array.push(absorber);
    };
    Absorbers.prototype.removeAbsorber = function (absorber) {
        var index = this.array.indexOf(absorber);
        if (index >= 0) {
            this.array.splice(index, 1);
        }
    };
    return Absorbers;
}());
exports.Absorbers = Absorbers;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Absorbers/AbsorbersPlugin.js":
/*!****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Absorbers/AbsorbersPlugin.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Absorbers_1 = __webpack_require__(/*! ./Absorbers */ "./node_modules/tsparticles/dist/Plugins/Absorbers/Absorbers.js");
var Utils_1 = __webpack_require__(/*! ../../Utils/Utils */ "./node_modules/tsparticles/dist/Utils/Utils.js");
var ClickMode_1 = __webpack_require__(/*! ../../Enums/Modes/ClickMode */ "./node_modules/tsparticles/dist/Enums/Modes/ClickMode.js");
var AbsorbersPlugin = (function () {
    function AbsorbersPlugin() {
        this.id = "absorbers";
    }
    AbsorbersPlugin.prototype.getPlugin = function (container) {
        return new Absorbers_1.Absorbers(container);
    };
    AbsorbersPlugin.prototype.needsPlugin = function (container) {
        var options = container.options;
        var absorbers = options.absorbers;
        var loadAbsorbers = false;
        if (absorbers instanceof Array) {
            if (absorbers.length) {
                loadAbsorbers = true;
            }
        }
        else if (absorbers !== undefined) {
            loadAbsorbers = true;
        }
        else if (Utils_1.Utils.isInArray(ClickMode_1.ClickMode.absorber, options.interactivity.events.onClick.mode)) {
            loadAbsorbers = true;
        }
        return loadAbsorbers;
    };
    return AbsorbersPlugin;
}());
exports.AbsorbersPlugin = AbsorbersPlugin;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Emitters/Emitter.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Emitters/Emitter.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Particle_1 = __webpack_require__(/*! ../../Core/Particle */ "./node_modules/tsparticles/dist/Core/Particle.js");
var Utils_1 = __webpack_require__(/*! ../../Utils/Utils */ "./node_modules/tsparticles/dist/Utils/Utils.js");
var SizeMode_1 = __webpack_require__(/*! ../../Enums/SizeMode */ "./node_modules/tsparticles/dist/Enums/SizeMode.js");
var EmitterSize_1 = __webpack_require__(/*! ../../Options/Classes/Emitters/EmitterSize */ "./node_modules/tsparticles/dist/Options/Classes/Emitters/EmitterSize.js");
var Emitter = (function () {
    function Emitter(emitters, emitterOptions, position) {
        var _a, _b, _c;
        this.emitters = emitters;
        this.container = emitters.container;
        this.initialPosition = position;
        this.emitterOptions = Utils_1.Utils.deepExtend({}, emitterOptions);
        this.position = (_a = this.initialPosition) !== null && _a !== void 0 ? _a : this.calcPosition();
        var particlesOptions = Utils_1.Utils.deepExtend({}, this.emitterOptions.particles);
        if (particlesOptions === undefined) {
            particlesOptions = {};
        }
        if (particlesOptions.move === undefined) {
            particlesOptions.move = {};
        }
        if (particlesOptions.move.direction === undefined) {
            particlesOptions.move.direction = this.emitterOptions.direction;
        }
        this.particlesOptions = particlesOptions;
        this.size = (_b = this.emitterOptions.size) !== null && _b !== void 0 ? _b : (function () {
            var size = new EmitterSize_1.EmitterSize();
            size.load({
                height: 0,
                width: 0,
                mode: SizeMode_1.SizeMode.percent,
            });
            return size;
        })();
        this.lifeCount = (_c = this.emitterOptions.life.count) !== null && _c !== void 0 ? _c : -1;
        this.play();
    }
    Emitter.prototype.play = function () {
        var _this = this;
        if (this.lifeCount > 0 || !this.emitterOptions.life.count) {
            if (this.startInterval === undefined) {
                this.startInterval = window.setInterval(function () {
                    _this.emit();
                }, 1000 * this.emitterOptions.rate.delay);
            }
            if (this.lifeCount > 0) {
                this.prepareToDie();
            }
        }
    };
    Emitter.prototype.pause = function () {
        var interval = this.startInterval;
        if (interval !== undefined) {
            clearInterval(interval);
            delete this.startInterval;
        }
    };
    Emitter.prototype.resize = function () {
        var initialPosition = this.initialPosition;
        this.position = initialPosition && Utils_1.Utils.isPointInside(initialPosition, this.container.canvas.size) ?
            initialPosition :
            this.calcPosition();
    };
    Emitter.prototype.prepareToDie = function () {
        var _this = this;
        var _a;
        if (this.lifeCount > 0 && ((_a = this.emitterOptions.life) === null || _a === void 0 ? void 0 : _a.duration) !== undefined) {
            window.setTimeout(function () {
                var _a;
                _this.pause();
                _this.lifeCount--;
                if (_this.lifeCount > 0) {
                    _this.position = _this.calcPosition();
                    window.setTimeout(function () {
                        _this.play();
                    }, (_a = _this.emitterOptions.life.delay) !== null && _a !== void 0 ? _a : 0);
                }
                else {
                    _this.destroy();
                }
            }, this.emitterOptions.life.duration * 1000);
        }
    };
    Emitter.prototype.destroy = function () {
        this.emitters.removeEmitter(this);
    };
    Emitter.prototype.calcPosition = function () {
        var _a;
        var container = this.container;
        var percentPosition = (_a = this.emitterOptions.position) !== null && _a !== void 0 ? _a : {
            x: Math.random() * 100,
            y: Math.random() * 100,
        };
        return {
            x: percentPosition.x / 100 * container.canvas.size.width,
            y: percentPosition.y / 100 * container.canvas.size.height,
        };
    };
    Emitter.prototype.emit = function () {
        var container = this.container;
        var position = this.position;
        var offset = {
            x: this.size.mode === SizeMode_1.SizeMode.percent ?
                container.canvas.size.width * this.size.width / 100 :
                this.size.width,
            y: this.size.mode === SizeMode_1.SizeMode.percent ?
                container.canvas.size.height * this.size.height / 100 :
                this.size.height,
        };
        for (var i = 0; i < this.emitterOptions.rate.quantity; i++) {
            var particle = new Particle_1.Particle(container, {
                x: position.x + offset.x * (Math.random() - 0.5),
                y: position.y + offset.y * (Math.random() - 0.5),
            }, this.particlesOptions);
            container.particles.addParticle(particle);
        }
    };
    return Emitter;
}());
exports.Emitter = Emitter;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Emitters/Emitters.js":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Emitters/Emitters.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Emitter_1 = __webpack_require__(/*! ./Emitter */ "./node_modules/tsparticles/dist/Plugins/Emitters/Emitter.js");
var ClickMode_1 = __webpack_require__(/*! ../../Enums/Modes/ClickMode */ "./node_modules/tsparticles/dist/Enums/Modes/ClickMode.js");
var Utils_1 = __webpack_require__(/*! ../../Utils/Utils */ "./node_modules/tsparticles/dist/Utils/Utils.js");
var Emitters = (function () {
    function Emitters(container) {
        this.container = container;
        this.array = [];
    }
    Emitters.prototype.init = function () {
        var container = this.container;
        var options = container.options;
        if (options.emitters instanceof Array) {
            for (var _i = 0, _a = options.emitters; _i < _a.length; _i++) {
                var emitterOptions = _a[_i];
                var emitter = new Emitter_1.Emitter(this, emitterOptions);
                this.addEmitter(emitter);
            }
        }
        else {
            var emitterOptions = options.emitters;
            var emitter = new Emitter_1.Emitter(this, emitterOptions);
            this.addEmitter(emitter);
        }
    };
    Emitters.prototype.play = function () {
        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
            var emitter = _a[_i];
            emitter.play();
        }
    };
    Emitters.prototype.pause = function () {
        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
            var emitter = _a[_i];
            emitter.pause();
        }
    };
    Emitters.prototype.stop = function () {
        this.array = [];
    };
    Emitters.prototype.handleClickMode = function (mode) {
        var container = this.container;
        var options = container.options;
        if (mode === ClickMode_1.ClickMode.emitter) {
            var emitterModeOptions = void 0;
            var modeEmitters = options.interactivity.modes.emitters;
            if (modeEmitters instanceof Array) {
                if (modeEmitters.length > 0) {
                    emitterModeOptions = Utils_1.Utils.itemFromArray(modeEmitters);
                }
            }
            else {
                emitterModeOptions = modeEmitters;
            }
            var emitterOptions = emitterModeOptions !== null && emitterModeOptions !== void 0 ? emitterModeOptions : (options.emitters instanceof Array ?
                Utils_1.Utils.itemFromArray(options.emitters) :
                options.emitters);
            var ePosition = container.interactivity.mouse.clickPosition;
            var emitter = new Emitter_1.Emitter(this, Utils_1.Utils.deepExtend({}, emitterOptions), ePosition);
            this.addEmitter(emitter);
        }
    };
    Emitters.prototype.resize = function () {
        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
            var emitter = _a[_i];
            emitter.resize();
        }
    };
    Emitters.prototype.addEmitter = function (emitter) {
        this.array.push(emitter);
    };
    Emitters.prototype.removeEmitter = function (emitter) {
        var index = this.array.indexOf(emitter);
        if (index >= 0) {
            this.array.splice(index, 1);
        }
    };
    return Emitters;
}());
exports.Emitters = Emitters;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Emitters/EmittersPlugin.js":
/*!**************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Emitters/EmittersPlugin.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(/*! ../../Utils/Utils */ "./node_modules/tsparticles/dist/Utils/Utils.js");
var ClickMode_1 = __webpack_require__(/*! ../../Enums/Modes/ClickMode */ "./node_modules/tsparticles/dist/Enums/Modes/ClickMode.js");
var Emitters_1 = __webpack_require__(/*! ./Emitters */ "./node_modules/tsparticles/dist/Plugins/Emitters/Emitters.js");
var EmittersPlugin = (function () {
    function EmittersPlugin() {
        this.id = "emitters";
    }
    EmittersPlugin.prototype.getPlugin = function (container) {
        return new Emitters_1.Emitters(container);
    };
    EmittersPlugin.prototype.needsPlugin = function (container) {
        var options = container.options;
        var emitters = options.emitters;
        var loadEmitters = false;
        if (emitters instanceof Array) {
            if (emitters.length) {
                loadEmitters = true;
            }
        }
        else if (emitters !== undefined) {
            loadEmitters = true;
        }
        else if (Utils_1.Utils.isInArray(ClickMode_1.ClickMode.absorber, options.interactivity.events.onClick.mode)) {
            loadEmitters = true;
        }
        return loadEmitters;
    };
    return EmittersPlugin;
}());
exports.EmittersPlugin = EmittersPlugin;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/PolygonMask/PolygonMask.js":
/*!**************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/PolygonMask.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var PolygonMaskType_1 = __webpack_require__(/*! ../../Enums/PolygonMaskType */ "./node_modules/tsparticles/dist/Enums/PolygonMaskType.js");
var Particle_1 = __webpack_require__(/*! ../../Core/Particle */ "./node_modules/tsparticles/dist/Core/Particle.js");
var PolygonMaskInlineArrangement_1 = __webpack_require__(/*! ../../Enums/PolygonMaskInlineArrangement */ "./node_modules/tsparticles/dist/Enums/PolygonMaskInlineArrangement.js");
var Utils_1 = __webpack_require__(/*! ../../Utils/Utils */ "./node_modules/tsparticles/dist/Utils/Utils.js");
var Constants_1 = __webpack_require__(/*! ../../Utils/Constants */ "./node_modules/tsparticles/dist/Utils/Constants.js");
var ColorUtils_1 = __webpack_require__(/*! ../../Utils/ColorUtils */ "./node_modules/tsparticles/dist/Utils/ColorUtils.js");
var PolygonMask = (function () {
    function PolygonMask(container) {
        this.container = container;
        this.dimension = {
            height: 0,
            width: 0,
        };
        this.paths = [];
        this.path2DSupported = window.hasOwnProperty("Path2D");
    }
    PolygonMask.polygonBounce = function (particle) {
        particle.velocity.horizontal = -particle.velocity.horizontal + (particle.velocity.vertical / 2);
        particle.velocity.vertical = -particle.velocity.vertical + (particle.velocity.horizontal / 2);
    };
    PolygonMask.drawPolygonMask = function (context, rawData, stroke) {
        var color = typeof stroke.color === "string" ?
            ColorUtils_1.ColorUtils.stringToRgb(stroke.color) :
            ColorUtils_1.ColorUtils.colorToRgb(stroke.color);
        if (color) {
            context.beginPath();
            context.moveTo(rawData[0].x, rawData[0].y);
            for (var i = 1; i < rawData.length; i++) {
                context.lineTo(rawData[i].x, rawData[i].y);
            }
            context.closePath();
            context.strokeStyle = ColorUtils_1.ColorUtils.getStyleFromColor(color);
            context.lineWidth = stroke.width;
            context.stroke();
        }
    };
    PolygonMask.drawPolygonMaskPath = function (context, path, stroke, position) {
        context.translate(position.x, position.y);
        var color = typeof stroke.color === "string" ?
            ColorUtils_1.ColorUtils.stringToRgb(stroke.color) :
            ColorUtils_1.ColorUtils.colorToRgb(stroke.color);
        if (color) {
            context.strokeStyle = ColorUtils_1.ColorUtils.getStyleFromColor(color, stroke.opacity);
            context.lineWidth = stroke.width;
            context.stroke(path);
        }
    };
    PolygonMask.prototype.checkInsidePolygon = function (position) {
        var container = this.container;
        var options = container.options;
        if (!options.polygon.enable ||
            options.polygon.type === PolygonMaskType_1.PolygonMaskType.none ||
            options.polygon.type === PolygonMaskType_1.PolygonMaskType.inline) {
            return true;
        }
        if (!this.raw) {
            throw new Error(Constants_1.Constants.noPolygonFound);
        }
        var x = position ? position.x : Math.random() * container.canvas.size.width;
        var y = position ? position.y : Math.random() * container.canvas.size.height;
        var inside = false;
        for (var i = 0, j = this.raw.length - 1; i < this.raw.length; j = i++) {
            var xi = this.raw[i].x;
            var yi = this.raw[i].y;
            var xj = this.raw[j].x;
            var yj = this.raw[j].y;
            var intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
            if (intersect) {
                inside = !inside;
            }
        }
        if (options.polygon.type === PolygonMaskType_1.PolygonMaskType.inside) {
            return inside;
        }
        else if (options.polygon.type === PolygonMaskType_1.PolygonMaskType.outside) {
            return !inside;
        }
        return false;
    };
    PolygonMask.prototype.resize = function () {
        var _this = this;
        var container = this.container;
        var options = container.options;
        if (options.polygon.enable && options.polygon.type !== PolygonMaskType_1.PolygonMaskType.none) {
            if (this.redrawTimeout) {
                clearTimeout(this.redrawTimeout);
            }
            this.redrawTimeout = window.setTimeout(function () {
                _this.parseSvgPathToPolygon().then(function (data) {
                    _this.raw = data;
                    _this.createPath2D();
                    container.particles.redraw();
                });
            }, 250);
        }
    };
    PolygonMask.prototype.startAsync = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var container, options, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        container = this.container;
                        options = container.options;
                        if (!(options.polygon.enable && options.polygon.url)) return [3, 2];
                        _a = this;
                        return [4, this.parseSvgPathToPolygon(options.polygon.url)];
                    case 1:
                        _a.raw = _b.sent();
                        this.createPath2D();
                        _b.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    PolygonMask.prototype.stop = function () {
        delete this.raw;
        this.paths = [];
        delete this.svg;
    };
    PolygonMask.prototype.randomPointInPolygon = function () {
        var container = this.container;
        var options = container.options;
        var position;
        if (options.polygon.type === PolygonMaskType_1.PolygonMaskType.inline) {
            switch (options.polygon.inline.arrangement) {
                case PolygonMaskInlineArrangement_1.PolygonMaskInlineArrangement.randomPoint:
                    position = this.getRandomPointOnPolygonPath();
                    break;
                case PolygonMaskInlineArrangement_1.PolygonMaskInlineArrangement.randomLength:
                    position = this.getRandomPointOnPolygonPathByLength();
                    break;
                case PolygonMaskInlineArrangement_1.PolygonMaskInlineArrangement.equidistant:
                    position = this.getEquidistantPointOnPolygonPathByIndex(container.particles.count);
                    break;
                case PolygonMaskInlineArrangement_1.PolygonMaskInlineArrangement.onePerPoint:
                case PolygonMaskInlineArrangement_1.PolygonMaskInlineArrangement.perPoint:
                default:
                    position = this.getPointOnPolygonPathByIndex(container.particles.count);
            }
        }
        else {
            position = {
                x: Math.random() * container.canvas.size.width,
                y: Math.random() * container.canvas.size.height,
            };
        }
        if (this.checkInsidePolygon(position)) {
            return position;
        }
        else {
            return this.randomPointInPolygon();
        }
    };
    PolygonMask.prototype.particlesInitialization = function () {
        var container = this.container;
        var options = container.options;
        if (options.polygon.enable && options.polygon.type === PolygonMaskType_1.PolygonMaskType.inline &&
            (options.polygon.inline.arrangement === PolygonMaskInlineArrangement_1.PolygonMaskInlineArrangement.onePerPoint ||
                options.polygon.inline.arrangement === PolygonMaskInlineArrangement_1.PolygonMaskInlineArrangement.perPoint)) {
            this.drawPointsOnPolygonPath();
            return true;
        }
        return false;
    };
    PolygonMask.prototype.particlePosition = function (position) {
        var _a, _b;
        var container = this.container;
        var options = container.options;
        if (options.polygon.enable && ((_b = (_a = this.raw) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) > 0) {
            var pos = { x: 0, y: 0 };
            if (position) {
                pos.x = position.x;
                pos.y = position.y;
            }
            else {
                var randomPoint = this.randomPointInPolygon();
                pos.x = randomPoint.x;
                pos.y = randomPoint.y;
            }
            return pos;
        }
    };
    PolygonMask.prototype.particleBounce = function (particle, _delta) {
        var container = this.container;
        var options = container.options;
        if (options.polygon.enable && options.polygon.type !== PolygonMaskType_1.PolygonMaskType.none &&
            options.polygon.type !== PolygonMaskType_1.PolygonMaskType.inline) {
            if (!this.checkInsidePolygon(particle.position)) {
                PolygonMask.polygonBounce(particle);
                return true;
            }
        }
        else if (options.polygon.enable && options.polygon.type === PolygonMaskType_1.PolygonMaskType.inline) {
            if (particle.initialPosition) {
                var dist = Utils_1.Utils.getDistance(particle.initialPosition, particle.position);
                if (dist > container.retina.polygonMaskMoveRadius) {
                    PolygonMask.polygonBounce(particle);
                    return true;
                }
            }
        }
        return false;
    };
    PolygonMask.prototype.clickPositionValid = function (position) {
        var container = this.container;
        var options = container.options;
        if (options.polygon.enable && options.polygon.type !== PolygonMaskType_1.PolygonMaskType.none &&
            options.polygon.type !== PolygonMaskType_1.PolygonMaskType.inline) {
            if (this.checkInsidePolygon(position)) {
                return true;
            }
        }
        return false;
    };
    PolygonMask.prototype.parseSvgPathToPolygon = function (svgUrl) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var container, options, url, req, xml, parser, doc, svgPaths, i, path, pxRatio, scale, position, polygonRaw, _i, _b, path, len, p, i, segment, absSeg, relSeg;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        container = this.container;
                        options = container.options;
                        url = svgUrl || options.polygon.url;
                        if (!(!this.paths.length || !this.svg)) return [3, 4];
                        return [4, fetch(url)];
                    case 1:
                        req = _c.sent();
                        if (!req.ok) return [3, 3];
                        return [4, req.text()];
                    case 2:
                        xml = _c.sent();
                        parser = new DOMParser();
                        doc = parser.parseFromString(xml, "image/svg+xml");
                        this.svg = doc.getElementsByTagName("svg")[0];
                        svgPaths = doc.getElementsByTagName("path");
                        for (i = 0; i < svgPaths.length; i++) {
                            path = svgPaths.item(i);
                            if (path) {
                                this.paths.push({
                                    element: path,
                                    length: path.getTotalLength(),
                                });
                            }
                        }
                        return [3, 4];
                    case 3: throw new Error("tsParticles Error - Error occurred during polygon mask download");
                    case 4:
                        pxRatio = container.retina.pixelRatio;
                        scale = options.polygon.scale / pxRatio;
                        this.dimension.width = parseFloat(this.svg.getAttribute("width") || "0") * scale;
                        this.dimension.height = parseFloat(this.svg.getAttribute("height") || "0") * scale;
                        position = (_a = options.polygon.position) !== null && _a !== void 0 ? _a : {
                            x: 50,
                            y: 50,
                        };
                        this.offset = {
                            x: container.canvas.size.width * position.x / (100 * pxRatio) - this.dimension.width / 2,
                            y: container.canvas.size.height * position.y / (100 * pxRatio) - this.dimension.height / 2,
                        };
                        polygonRaw = [];
                        for (_i = 0, _b = this.paths; _i < _b.length; _i++) {
                            path = _b[_i];
                            len = path.element.pathSegList.numberOfItems;
                            p = {
                                x: 0,
                                y: 0,
                            };
                            for (i = 0; i < len; i++) {
                                segment = path.element.pathSegList.getItem(i);
                                switch (segment.pathSegType) {
                                    case window.SVGPathSeg.PATHSEG_MOVETO_ABS:
                                    case window.SVGPathSeg.PATHSEG_LINETO_ABS:
                                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                                    case window.SVGPathSeg.PATHSEG_ARC_ABS:
                                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                                        absSeg = segment;
                                        p.x = absSeg.x;
                                        p.y = absSeg.y;
                                        break;
                                    case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                                        p.x = segment.x;
                                        break;
                                    case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                                        p.y = segment.y;
                                        break;
                                    case window.SVGPathSeg.PATHSEG_LINETO_REL:
                                    case window.SVGPathSeg.PATHSEG_MOVETO_REL:
                                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                                    case window.SVGPathSeg.PATHSEG_ARC_REL:
                                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                                        relSeg = segment;
                                        p.x += relSeg.x;
                                        p.y += relSeg.y;
                                        break;
                                    case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                                        p.x += segment.x;
                                        break;
                                    case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                                        p.y += segment.y;
                                        break;
                                    case window.SVGPathSeg.PATHSEG_UNKNOWN:
                                    case window.SVGPathSeg.PATHSEG_CLOSEPATH:
                                        continue;
                                }
                                polygonRaw.push({
                                    x: p.x * scale + this.offset.x,
                                    y: p.y * scale + this.offset.y,
                                });
                            }
                        }
                        return [2, polygonRaw];
                }
            });
        });
    };
    PolygonMask.prototype.draw = function (context) {
        var container = this.container;
        var options = container.options;
        if (options.polygon.enable && options.polygon.draw.enable) {
            var container_1 = this.container;
            var options_1 = container_1.options;
            var polygonDraw = options_1.polygon.draw;
            var rawData = this.raw;
            for (var _i = 0, _a = this.paths; _i < _a.length; _i++) {
                var path = _a[_i];
                var path2d = path.path2d;
                var path2dSupported = this.path2DSupported;
                if (context) {
                    if (path2dSupported && path2d && this.offset) {
                        PolygonMask.drawPolygonMaskPath(context, path2d, polygonDraw.stroke, this.offset);
                    }
                    else if (rawData) {
                        PolygonMask.drawPolygonMask(context, rawData, polygonDraw.stroke);
                    }
                }
            }
        }
    };
    PolygonMask.prototype.drawPointsOnPolygonPath = function () {
        var container = this.container;
        if (this.raw) {
            for (var _i = 0, _a = this.raw; _i < _a.length; _i++) {
                var item = _a[_i];
                var position = {
                    x: item.x,
                    y: item.y,
                };
                container.particles.addParticle(new Particle_1.Particle(container, position));
            }
        }
    };
    PolygonMask.prototype.getRandomPointOnPolygonPath = function () {
        if (!this.raw || !this.raw.length)
            throw new Error(Constants_1.Constants.noPolygonDataLoaded);
        var coords = Utils_1.Utils.itemFromArray(this.raw);
        return {
            x: coords.x,
            y: coords.y,
        };
    };
    PolygonMask.prototype.getRandomPointOnPolygonPathByLength = function () {
        var _a, _b;
        var container = this.container;
        var options = container.options;
        if (!this.raw || !this.raw.length || !this.paths.length)
            throw new Error(Constants_1.Constants.noPolygonDataLoaded);
        var path = Utils_1.Utils.itemFromArray(this.paths);
        var distance = Math.floor(Math.random() * path.length) + 1;
        var point = path.element.getPointAtLength(distance);
        return {
            x: point.x * options.polygon.scale + (((_a = this.offset) === null || _a === void 0 ? void 0 : _a.x) || 0),
            y: point.y * options.polygon.scale + (((_b = this.offset) === null || _b === void 0 ? void 0 : _b.y) || 0),
        };
    };
    PolygonMask.prototype.getEquidistantPointOnPolygonPathByIndex = function (index) {
        var _a, _b, _c, _d, _e, _f;
        var container = this.container;
        var options = container.options;
        if (!this.raw || !this.raw.length || !this.paths.length)
            throw new Error(Constants_1.Constants.noPolygonDataLoaded);
        var offset = 0;
        var point;
        var totalLength = this.paths.reduce(function (tot, path) { return tot + path.length; }, 0);
        var distance = totalLength / options.particles.number.value;
        for (var _i = 0, _g = this.paths; _i < _g.length; _i++) {
            var path = _g[_i];
            var pathDistance = distance * index - offset;
            if (pathDistance <= path.length) {
                point = path.element.getPointAtLength(pathDistance);
                break;
            }
            else {
                offset += path.length;
            }
        }
        return {
            x: ((_a = point === null || point === void 0 ? void 0 : point.x) !== null && _a !== void 0 ? _a : 0) * options.polygon.scale + ((_c = (_b = this.offset) === null || _b === void 0 ? void 0 : _b.x) !== null && _c !== void 0 ? _c : 0),
            y: ((_d = point === null || point === void 0 ? void 0 : point.y) !== null && _d !== void 0 ? _d : 0) * options.polygon.scale + ((_f = (_e = this.offset) === null || _e === void 0 ? void 0 : _e.y) !== null && _f !== void 0 ? _f : 0),
        };
    };
    PolygonMask.prototype.getPointOnPolygonPathByIndex = function (index) {
        if (!this.raw || !this.raw.length)
            throw new Error(Constants_1.Constants.noPolygonDataLoaded);
        var coords = this.raw[index % this.raw.length];
        return {
            x: coords.x,
            y: coords.y,
        };
    };
    PolygonMask.prototype.createPath2D = function () {
        var _a;
        if (!this.path2DSupported) {
            return;
        }
        var _loop_1 = function (path) {
            var pathData = (_a = path.element) === null || _a === void 0 ? void 0 : _a.getAttribute("d");
            if (pathData) {
                var path2d = new Path2D(pathData);
                var matrix = document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix();
                var finalPath = new Path2D();
                var transform = matrix.scale(this_1.container.options.polygon.scale);
                if (finalPath.addPath) {
                    finalPath.addPath(path2d, transform);
                    path.path2d = finalPath;
                }
                else {
                    delete path.path2d;
                }
            }
            else {
                delete path.path2d;
            }
            if (!path.path2d && this_1.raw) {
                path.path2d = new Path2D();
                path.path2d.moveTo(this_1.raw[0].x, this_1.raw[0].y);
                this_1.raw.forEach(function (pos, i) {
                    var _a;
                    if (i > 0) {
                        (_a = path.path2d) === null || _a === void 0 ? void 0 : _a.lineTo(pos.x, pos.y);
                    }
                });
                path.path2d.closePath();
            }
        };
        var this_1 = this;
        for (var _i = 0, _b = this.paths; _i < _b.length; _i++) {
            var path = _b[_i];
            _loop_1(path);
        }
    };
    return PolygonMask;
}());
exports.PolygonMask = PolygonMask;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/PolygonMask/PolygonMaskPlugin.js":
/*!********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/PolygonMaskPlugin.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PolygonMask_1 = __webpack_require__(/*! ./PolygonMask */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/PolygonMask.js");
var PolygonMaskPlugin = (function () {
    function PolygonMaskPlugin() {
        this.id = "polygonMask";
    }
    PolygonMaskPlugin.prototype.getPlugin = function (container) {
        return new PolygonMask_1.PolygonMask(container);
    };
    PolygonMaskPlugin.prototype.needsPlugin = function (container) {
        var options = container.options;
        return options.polygon.enable;
    };
    return PolygonMaskPlugin;
}());
exports.PolygonMaskPlugin = PolygonMaskPlugin;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/CanvasUtils.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/CanvasUtils.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ColorUtils_1 = __webpack_require__(/*! ./ColorUtils */ "./node_modules/tsparticles/dist/Utils/ColorUtils.js");
var CanvasUtils = (function () {
    function CanvasUtils() {
    }
    CanvasUtils.paintBase = function (context, dimension, baseColor) {
        context.save();
        context.fillStyle = baseColor !== null && baseColor !== void 0 ? baseColor : "rgba(0,0,0,0)";
        context.fillRect(0, 0, dimension.width, dimension.height);
        context.restore();
    };
    CanvasUtils.clear = function (context, dimension) {
        context.clearRect(0, 0, dimension.width, dimension.height);
    };
    CanvasUtils.drawLinkedLine = function (context, width, begin, end, backgroundMask, colorLine, opacity, shadow) {
        context.beginPath();
        context.moveTo(begin.x, begin.y);
        context.lineTo(end.x, end.y);
        context.closePath();
        context.lineWidth = width;
        if (backgroundMask) {
            context.globalCompositeOperation = 'destination-out';
        }
        context.strokeStyle = ColorUtils_1.ColorUtils.getStyleFromColor(colorLine, opacity);
        if (shadow.enable) {
            var shadowColor = typeof shadow.color === "string" ?
                ColorUtils_1.ColorUtils.stringToRgb(shadow.color) :
                ColorUtils_1.ColorUtils.colorToRgb(shadow.color);
            if (shadowColor) {
                context.shadowBlur = shadow.blur;
                context.shadowColor = ColorUtils_1.ColorUtils.getStyleFromColor(shadowColor);
            }
        }
        context.stroke();
    };
    CanvasUtils.drawConnectLine = function (context, width, lineStyle, begin, end) {
        context.save();
        context.beginPath();
        context.moveTo(begin.x, begin.y);
        context.lineTo(end.x, end.y);
        context.closePath();
        context.lineWidth = width;
        context.strokeStyle = lineStyle;
        context.stroke();
        context.restore();
    };
    CanvasUtils.gradient = function (context, p1, p2, opacity) {
        var gradStop = Math.floor(p2.size.value / p1.size.value);
        if (!p1.color || !p2.color) {
            return;
        }
        var sourcePos = p1.getPosition();
        var destPos = p2.getPosition();
        var midRgb = ColorUtils_1.ColorUtils.mix(p1.color, p2.color, p1.size.value, p2.size.value);
        var grad = context.createLinearGradient(sourcePos.x, sourcePos.y, destPos.x, destPos.y);
        grad.addColorStop(0, ColorUtils_1.ColorUtils.getStyleFromColor(p1.color, opacity));
        grad.addColorStop(gradStop > 1 ? 1 : gradStop, ColorUtils_1.ColorUtils.getStyleFromColor(midRgb, opacity));
        grad.addColorStop(1, ColorUtils_1.ColorUtils.getStyleFromColor(p2.color, opacity));
        return grad;
    };
    CanvasUtils.drawGrabLine = function (context, width, begin, end, colorLine, opacity) {
        context.save();
        context.beginPath();
        context.moveTo(begin.x, begin.y);
        context.lineTo(end.x, end.y);
        context.closePath();
        context.strokeStyle = ColorUtils_1.ColorUtils.getStyleFromColor(colorLine, opacity);
        context.lineWidth = width;
        context.stroke();
        context.restore();
    };
    CanvasUtils.drawParticle = function (container, context, particle, delta, colorValue, backgroundMask, radius, opacity, shadow) {
        var pos = particle.getPosition();
        context.save();
        context.translate(pos.x, pos.y);
        context.beginPath();
        if (particle.angle !== 0) {
            context.rotate(particle.angle * Math.PI / 180);
        }
        if (backgroundMask) {
            context.globalCompositeOperation = "destination-out";
        }
        var shadowColor = particle.shadowColor;
        if (shadow.enable && shadowColor) {
            context.shadowBlur = shadow.blur;
            context.shadowColor = ColorUtils_1.ColorUtils.getStyleFromColor(shadowColor);
            context.shadowOffsetX = shadow.offset.x;
            context.shadowOffsetY = shadow.offset.y;
        }
        context.fillStyle = colorValue;
        var stroke = particle.stroke;
        if (stroke.width > 0 && particle.strokeColor) {
            context.strokeStyle = ColorUtils_1.ColorUtils.getStyleFromColor(particle.strokeColor, particle.stroke.opacity);
            context.lineWidth = stroke.width;
        }
        this.drawShape(container, context, particle, radius, opacity, delta);
        if (particle.close) {
            context.closePath();
        }
        if (stroke.width > 0 && particle.strokeColor) {
            context.stroke();
        }
        if (particle.fill) {
            context.fill();
        }
        context.restore();
        context.save();
        context.translate(pos.x, pos.y);
        if (particle.angle !== 0) {
            context.rotate(particle.angle * Math.PI / 180);
        }
        if (backgroundMask) {
            context.globalCompositeOperation = "destination-out";
        }
        this.drawShapeAfterEffect(container, context, particle, radius, opacity, delta);
        context.restore();
    };
    CanvasUtils.drawShape = function (container, context, particle, radius, opacity, delta) {
        if (!particle.shape) {
            return;
        }
        var drawer = container.drawers[particle.shape];
        if (!drawer) {
            return;
        }
        drawer.draw(context, particle, radius, opacity, delta);
    };
    CanvasUtils.drawShapeAfterEffect = function (container, context, particle, radius, opacity, delta) {
        if (!particle.shape) {
            return;
        }
        var drawer = container.drawers[particle.shape];
        if (!drawer) {
            return;
        }
        if (drawer.afterEffect !== undefined) {
            drawer.afterEffect(context, particle, radius, opacity, delta);
        }
    };
    CanvasUtils.drawPlugin = function (context, plugin, delta) {
        context.save();
        if (plugin.draw !== undefined) {
            plugin.draw(context, delta);
        }
        context.restore();
    };
    return CanvasUtils;
}());
exports.CanvasUtils = CanvasUtils;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/Circle.js":
/*!*******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/Circle.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var Range_1 = __webpack_require__(/*! ./Range */ "./node_modules/tsparticles/dist/Utils/Range.js");
var Circle = (function (_super) {
    tslib_1.__extends(Circle, _super);
    function Circle(x, y, radius) {
        var _this = _super.call(this, x, y) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.contains = function (point) {
        var d = Math.pow((point.x - this.position.x), 2) + Math.pow((point.y - this.position.y), 2);
        return d <= this.radius * this.radius;
    };
    Circle.prototype.intersects = function (range) {
        var rect = range;
        var circle = range;
        var pos1 = this.position;
        var pos2 = range.position;
        var xDist = Math.abs(pos2.x - pos1.x);
        var yDist = Math.abs(pos2.y - pos1.y);
        var r = this.radius;
        if (circle.radius !== undefined) {
            var r2 = circle.radius;
            var rSum = r + r2;
            var dist = Math.sqrt(xDist * xDist + yDist + yDist);
            return rSum > dist;
        }
        else if (rect.size !== undefined) {
            var w = rect.size.width;
            var h = rect.size.height;
            var edges = Math.pow((xDist - w), 2) + Math.pow((yDist - h), 2);
            if (xDist > (r + w) || yDist > (r + h)) {
                return false;
            }
            if (xDist <= w || yDist <= h) {
                return true;
            }
            return edges <= r * r;
        }
        return false;
    };
    return Circle;
}(Range_1.Range));
exports.Circle = Circle;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/ColorUtils.js":
/*!***********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/ColorUtils.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(/*! ./Utils */ "./node_modules/tsparticles/dist/Utils/Utils.js");
var Constants_1 = __webpack_require__(/*! ./Constants */ "./node_modules/tsparticles/dist/Utils/Constants.js");
var ColorUtils = (function () {
    function ColorUtils() {
    }
    ColorUtils.colorToRgb = function (color) {
        var _a, _b;
        var res;
        if (typeof (color.value) === "string") {
            if (color.value === Constants_1.Constants.randomColorValue) {
                res = {
                    b: Math.floor(Math.random() * 256),
                    g: Math.floor(Math.random() * 256),
                    r: Math.floor(Math.random() * 256),
                };
            }
            else {
                res = ColorUtils.stringToRgb(color.value);
            }
        }
        else {
            if (color.value instanceof Array) {
                var colorSelected = Utils_1.Utils.itemFromArray(color.value);
                res = ColorUtils.stringToRgb(colorSelected);
            }
            else {
                var colorValue = color.value;
                var rgbColor = (_a = colorValue.rgb) !== null && _a !== void 0 ? _a : color.value;
                if (rgbColor.r !== undefined) {
                    res = rgbColor;
                }
                else {
                    var hslColor = (_b = colorValue.hsl) !== null && _b !== void 0 ? _b : color.value;
                    if (hslColor.h !== undefined) {
                        res = ColorUtils.hslToRgb(hslColor);
                    }
                }
            }
        }
        return res;
    };
    ColorUtils.stringToAlpha = function (input) {
        var _a;
        return (_a = ColorUtils.stringToRgba(input)) === null || _a === void 0 ? void 0 : _a.a;
    };
    ColorUtils.stringToRgb = function (input) {
        return ColorUtils.stringToRgba(input);
    };
    ColorUtils.hslToRgb = function (hsl) {
        var result = { b: 0, g: 0, r: 0 };
        var hslPercent = {
            h: hsl.h > 1 ? hsl.h / 360 : hsl.h,
            l: hsl.l > 1 ? hsl.l / 100 : hsl.l,
            s: hsl.s > 1 ? hsl.s / 100 : hsl.s,
        };
        if (hslPercent.s === 0) {
            result.b = hslPercent.l;
            result.g = hslPercent.l;
            result.r = hslPercent.l;
        }
        else {
            var q = hslPercent.l < 0.5 ?
                hslPercent.l * (1 + hslPercent.s) :
                hslPercent.l + hslPercent.s - hslPercent.l * hslPercent.s;
            var p = 2 * hslPercent.l - q;
            result.r = ColorUtils.hue2rgb(p, q, hslPercent.h + 1 / 3);
            result.g = ColorUtils.hue2rgb(p, q, hslPercent.h);
            result.b = ColorUtils.hue2rgb(p, q, hslPercent.h - 1 / 3);
        }
        result.r = Math.floor(result.r * 255);
        result.g = Math.floor(result.g * 255);
        result.b = Math.floor(result.b * 255);
        return result;
    };
    ColorUtils.hslaToRgba = function (hsla) {
        var rgbResult = ColorUtils.hslToRgb(hsla);
        return {
            a: hsla.a,
            b: rgbResult.b,
            g: rgbResult.g,
            r: rgbResult.r,
        };
    };
    ColorUtils.getRandomRgbColor = function (min) {
        var _a;
        var fixedMin = min || 0;
        var minColor = fixedMin + (fixedMin * Math.pow(16, 2)) + (fixedMin * Math.pow(16, 4));
        var factor = minColor ^ 0xFFFFFF;
        var randomColor = Math.floor(((Math.random() * factor) | minColor)).toString(16);
        return (_a = this.stringToRgb("#" + randomColor)) !== null && _a !== void 0 ? _a : {
            b: 0,
            g: 0,
            r: 0,
        };
    };
    ColorUtils.getStyleFromColor = function (color, opacity) {
        var opacityValue = opacity !== null && opacity !== void 0 ? opacity : 1;
        return "rgba(" + color.r + ", " + color.g + ", " + color.b + ", " + opacityValue + ")";
    };
    ColorUtils.mix = function (color1, color2, size1, size2) {
        return {
            b: Utils_1.Utils.mix(color1.b, color2.b, size1, size2),
            g: Utils_1.Utils.mix(color1.g, color2.g, size1, size2),
            r: Utils_1.Utils.mix(color1.r, color2.r, size1, size2),
        };
    };
    ColorUtils.hue2rgb = function (p, q, t) {
        var tCalc = t;
        if (tCalc < 0) {
            tCalc += 1;
        }
        if (tCalc > 1) {
            tCalc -= 1;
        }
        if (tCalc < 1 / 6) {
            return p + (q - p) * 6 * tCalc;
        }
        if (tCalc < 1 / 2) {
            return q;
        }
        if (tCalc < 2 / 3) {
            return p + (q - p) * (2 / 3 - tCalc) * 6;
        }
        return p;
    };
    ColorUtils.stringToRgba = function (input) {
        if (input.startsWith('rgb')) {
            var regex = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.]+)\s*)?\)/i;
            var result = regex.exec(input);
            return result ? {
                a: result.length > 4 ? parseFloat(result[5]) : 1,
                b: parseInt(result[3], 10),
                g: parseInt(result[2], 10),
                r: parseInt(result[1], 10),
            } : undefined;
        }
        else if (input.startsWith('hsl')) {
            var regex = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i;
            var result = regex.exec(input);
            return result ? ColorUtils.hslaToRgba({
                a: result.length > 4 ? parseFloat(result[5]) : 1,
                h: parseInt(result[1], 10),
                l: parseInt(result[3], 10),
                s: parseInt(result[2], 10),
            }) : undefined;
        }
        else {
            var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i;
            var hexFixed = input.replace(shorthandRegex, function (_m, r, g, b, a) {
                return r + r + g + g + b + b + (a !== undefined ? a + a : "");
            });
            var regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;
            var result = regex.exec(hexFixed);
            return result ? {
                a: result[4] !== undefined ? parseInt(result[4], 16) / 0xFF : 1,
                b: parseInt(result[3], 16),
                g: parseInt(result[2], 16),
                r: parseInt(result[1], 16),
            } : undefined;
        }
    };
    return ColorUtils;
}());
exports.ColorUtils = ColorUtils;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/Constants.js":
/*!**********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/Constants.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Constants = (function () {
    function Constants() {
    }
    Constants.canvasClass = "tsparticles-canvas-el";
    Constants.randomColorValue = "random";
    Constants.midColorValue = "mid";
    Constants.touchEndEvent = "touchend";
    Constants.mouseUpEvent = "mouseup";
    Constants.mouseMoveEvent = "mousemove";
    Constants.touchStartEvent = "touchstart";
    Constants.touchMoveEvent = "touchmove";
    Constants.mouseLeaveEvent = "mouseleave";
    Constants.touchCancelEvent = "touchcancel";
    Constants.resizeEvent = "resize";
    Constants.visibilityChangeEvent = "visibilitychange";
    Constants.noPolygonDataLoaded = "No polygon data loaded.";
    Constants.noPolygonFound = "No polygon found, you need to specify SVG url in config.";
    return Constants;
}());
exports.Constants = Constants;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/EventListeners.js":
/*!***************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/EventListeners.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ClickMode_1 = __webpack_require__(/*! ../Enums/Modes/ClickMode */ "./node_modules/tsparticles/dist/Enums/Modes/ClickMode.js");
var InteractivityDetect_1 = __webpack_require__(/*! ../Enums/InteractivityDetect */ "./node_modules/tsparticles/dist/Enums/InteractivityDetect.js");
var Constants_1 = __webpack_require__(/*! ./Constants */ "./node_modules/tsparticles/dist/Utils/Constants.js");
var EventListeners = (function () {
    function EventListeners(container) {
        var _this = this;
        this.container = container;
        this.canPush = true;
        this.mouseMoveHandler = function (e) { return _this.mouseTouchMove(e); };
        this.touchStartHandler = function (e) { return _this.mouseTouchMove(e); };
        this.touchMoveHandler = function (e) { return _this.mouseTouchMove(e); };
        this.touchEndHandler = function () { return _this.mouseTouchFinish(); };
        this.mouseLeaveHandler = function () { return _this.mouseTouchFinish(); };
        this.touchCancelHandler = function () { return _this.mouseTouchFinish(); };
        this.touchEndClickHandler = function (e) { return _this.mouseTouchClick(e); };
        this.mouseUpHandler = function (e) { return _this.mouseTouchClick(e); };
        this.visibilityChangeHandler = function () { return _this.handleVisibilityChange(); };
        this.resizeHandler = function () { return _this.handleWindowResize(); };
    }
    EventListeners.manageListener = function (element, event, handler, add, options) {
        if (add) {
            var addOptions = { passive: true };
            if (typeof options === "boolean") {
                addOptions.capture = options;
            }
            else if (options !== undefined) {
                addOptions = options;
            }
            EventListeners.addListener(element, event, handler, addOptions);
        }
        else {
            EventListeners.removeListener(element, event, handler, options);
        }
    };
    EventListeners.addListener = function (element, event, handler, options) {
        element.addEventListener(event, handler, options);
    };
    EventListeners.removeListener = function (element, event, handler, options) {
        element.removeEventListener(event, handler, options);
    };
    EventListeners.prototype.addListeners = function () {
        this.manageListeners(true);
    };
    EventListeners.prototype.removeListeners = function () {
        this.manageListeners(false);
    };
    EventListeners.prototype.manageListeners = function (add) {
        var container = this.container;
        var options = container.options;
        if (options.interactivity.detectsOn === InteractivityDetect_1.InteractivityDetect.window) {
            container.interactivity.element = window;
        }
        else if (options.interactivity.detectsOn === InteractivityDetect_1.InteractivityDetect.parent && container.canvas.element) {
            container.interactivity.element = container.canvas.element.parentNode;
        }
        else {
            container.interactivity.element = container.canvas.element;
        }
        var interactivityEl = container.interactivity.element;
        if (interactivityEl && (options.interactivity.events.onHover.enable ||
            options.interactivity.events.onClick.enable)) {
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.mouseMoveEvent, this.mouseMoveHandler, add);
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.touchStartEvent, this.touchStartHandler, add);
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.touchMoveEvent, this.touchMoveHandler, add);
            if (!options.interactivity.events.onClick.enable) {
                EventListeners.manageListener(interactivityEl, Constants_1.Constants.touchEndEvent, this.touchEndHandler, add);
            }
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.mouseLeaveEvent, this.mouseLeaveHandler, add);
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.touchCancelEvent, this.touchCancelHandler, add);
        }
        if (options.interactivity.events.onClick.enable && interactivityEl) {
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.touchEndEvent, this.touchEndClickHandler, add);
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.mouseUpEvent, this.mouseUpHandler, add);
        }
        if (options.interactivity.events.resize) {
            EventListeners.manageListener(window, Constants_1.Constants.resizeEvent, this.resizeHandler, add);
        }
        if (document) {
            EventListeners.manageListener(document, Constants_1.Constants.visibilityChangeEvent, this.visibilityChangeHandler, add, false);
        }
    };
    EventListeners.prototype.handleWindowResize = function () {
        var container = this.container;
        var options = container.options;
        if (!container.canvas.element) {
            return;
        }
        container.canvas.size.width = container.canvas.element.offsetWidth;
        container.canvas.size.height = container.canvas.element.offsetHeight;
        if (container.retina.isRetina) {
            container.canvas.size.width *= container.retina.pixelRatio;
            container.canvas.size.height *= container.retina.pixelRatio;
        }
        container.canvas.element.width = container.canvas.size.width;
        container.canvas.element.height = container.canvas.size.height;
        if (!options.particles.move.enable) {
            container.particles.redraw();
        }
        container.densityAutoParticles();
        for (var id in container.plugins) {
            var plugin = container.plugins[id];
            if (plugin.resize !== undefined) {
                plugin.resize();
            }
        }
    };
    EventListeners.prototype.handleVisibilityChange = function () {
        var container = this.container;
        var options = container.options;
        if (!options.pauseOnBlur) {
            return;
        }
        if (document === null || document === void 0 ? void 0 : document.hidden) {
            container.pageHidden = true;
            container.pause();
        }
        else {
            container.pageHidden = false;
            if (container.getAnimationStatus()) {
                container.play(true);
            }
            else {
                container.draw();
            }
        }
    };
    EventListeners.prototype.mouseTouchMove = function (e) {
        var _a, _b, _c, _d;
        var container = this.container;
        var options = container.options;
        var pos;
        if (e.type.startsWith("mouse")) {
            this.canPush = true;
            var mouseEvent = e;
            if (((_a = container.interactivity) === null || _a === void 0 ? void 0 : _a.element) === undefined) {
                return;
            }
            if (container.interactivity.element === window) {
                if (container.canvas.element) {
                    var clientRect = container.canvas.element.getBoundingClientRect();
                    pos = {
                        x: mouseEvent.clientX - clientRect.left,
                        y: mouseEvent.clientY - clientRect.top,
                    };
                }
            }
            else if (options.interactivity.detectsOn === InteractivityDetect_1.InteractivityDetect.parent) {
                var source = mouseEvent.target;
                var target = mouseEvent.currentTarget;
                if (source && target) {
                    var sourceRect = source.getBoundingClientRect();
                    var targetRect = target.getBoundingClientRect();
                    pos = {
                        x: mouseEvent.offsetX + sourceRect.left - targetRect.left,
                        y: mouseEvent.offsetY + sourceRect.top - targetRect.top,
                    };
                }
                else {
                    pos = {
                        x: mouseEvent.offsetX || mouseEvent.clientX,
                        y: mouseEvent.offsetY || mouseEvent.clientY,
                    };
                }
            }
            else {
                if (mouseEvent.target === container.canvas.element) {
                    pos = {
                        x: mouseEvent.offsetX || mouseEvent.clientX,
                        y: mouseEvent.offsetY || mouseEvent.clientY,
                    };
                }
            }
        }
        else {
            this.canPush = e.type !== "touchmove";
            var touchEvent = e;
            var lastTouch = touchEvent.touches[touchEvent.touches.length - 1];
            var canvasRect = (_b = container.canvas.element) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect();
            pos = {
                x: lastTouch.clientX - ((_c = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.left) !== null && _c !== void 0 ? _c : 0),
                y: lastTouch.clientY - ((_d = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.top) !== null && _d !== void 0 ? _d : 0),
            };
        }
        container.interactivity.mouse.position = pos;
        if (container.retina.isRetina && container.interactivity.mouse.position) {
            container.interactivity.mouse.position.x *= container.retina.pixelRatio;
            container.interactivity.mouse.position.y *= container.retina.pixelRatio;
        }
        container.interactivity.status = Constants_1.Constants.mouseMoveEvent;
    };
    EventListeners.prototype.mouseTouchFinish = function () {
        var container = this.container;
        delete container.interactivity.mouse.position;
        container.interactivity.status = Constants_1.Constants.mouseLeaveEvent;
    };
    EventListeners.prototype.mouseTouchClick = function (e) {
        var container = this.container;
        var options = container.options;
        var handled = false;
        var mousePosition = container.interactivity.mouse.position;
        if (mousePosition === undefined || !options.interactivity.events.onClick.enable) {
            return;
        }
        for (var id in container.plugins) {
            var plugin = container.plugins[id];
            if (plugin.clickPositionValid !== undefined) {
                handled = plugin.clickPositionValid(mousePosition);
                if (handled) {
                    break;
                }
            }
        }
        if (!handled) {
            this.doMouseTouchClick(e);
        }
    };
    EventListeners.prototype.doMouseTouchClick = function (e) {
        var _this = this;
        var container = this.container;
        var options = container.options;
        if (this.canPush) {
            if (container.interactivity.mouse.position) {
                container.interactivity.mouse.clickPosition = {
                    x: container.interactivity.mouse.position.x,
                    y: container.interactivity.mouse.position.y,
                };
            }
            else {
                return;
            }
            container.interactivity.mouse.clickTime = new Date().getTime();
            if (options.interactivity.events.onClick.mode instanceof Array) {
                for (var _i = 0, _a = options.interactivity.events.onClick.mode; _i < _a.length; _i++) {
                    var mode = _a[_i];
                    this.handleClickMode(mode);
                }
            }
            else {
                var mode = options.interactivity.events.onClick.mode;
                this.handleClickMode(mode);
            }
        }
        if (e.type === "touchend") {
            setTimeout(function () { return _this.mouseTouchFinish(); }, 500);
        }
    };
    EventListeners.prototype.handleClickMode = function (mode) {
        var container = this.container;
        var options = container.options;
        var pushNb = options.interactivity.modes.push.quantity;
        var removeNb = options.interactivity.modes.remove.quantity;
        switch (mode) {
            case ClickMode_1.ClickMode.push:
                if (options.particles.move.enable) {
                    container.particles.push(pushNb, container.interactivity.mouse);
                }
                else {
                    if (options.interactivity.modes.push.quantity === 1) {
                        container.particles.push(pushNb, container.interactivity.mouse);
                    }
                    else if (options.interactivity.modes.push.quantity > 1) {
                        container.particles.push(pushNb);
                    }
                }
                break;
            case ClickMode_1.ClickMode.remove:
                container.particles.removeQuantity(removeNb);
                break;
            case ClickMode_1.ClickMode.bubble:
                container.bubble.clicking = true;
                break;
            case ClickMode_1.ClickMode.repulse:
                container.repulse.clicking = true;
                container.repulse.count = 0;
                for (var _i = 0, _a = container.repulse.particles; _i < _a.length; _i++) {
                    var particle = _a[_i];
                    particle.velocity.horizontal = particle.initialVelocity.horizontal;
                    particle.velocity.vertical = particle.initialVelocity.vertical;
                }
                container.repulse.particles = [];
                container.repulse.finish = false;
                setTimeout(function () {
                    if (!container.destroyed) {
                        container.repulse.clicking = false;
                    }
                }, options.interactivity.modes.repulse.duration * 1000);
                break;
        }
        for (var id in container.plugins) {
            var plugin = container.plugins[id];
            if (plugin.handleClickMode) {
                plugin.handleClickMode(mode);
            }
        }
    };
    return EventListeners;
}());
exports.EventListeners = EventListeners;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/Plugins.js":
/*!********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/Plugins.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Plugins = (function () {
    function Plugins() {
    }
    Plugins.getPlugin = function (plugin) {
        return this.plugins.filter(function (t) { return t.id === plugin; })[0];
    };
    Plugins.addPlugin = function (plugin) {
        if (!this.getPlugin(plugin.id)) {
            this.plugins.push(plugin);
        }
    };
    Plugins.getAvailablePlugins = function (container) {
        var res = {};
        var availablePlugins = this.plugins.filter(function (t) { return t.needsPlugin(container); });
        for (var _i = 0, availablePlugins_1 = availablePlugins; _i < availablePlugins_1.length; _i++) {
            var plugin = availablePlugins_1[_i];
            res[plugin.id] = plugin.getPlugin(container);
        }
        return res;
    };
    Plugins.getPreset = function (preset) {
        return this.presets[preset];
    };
    Plugins.addPreset = function (presetKey, options) {
        if (!this.getPreset(presetKey)) {
            this.presets[presetKey] = options;
        }
    };
    Plugins.addShapeDrawer = function (type, drawer) {
        if (!this.drawers[type]) {
            this.drawers[type] = drawer;
        }
    };
    Plugins.getShapeDrawer = function (type) {
        return this.drawers[type];
    };
    Plugins.getSupportedShapes = function () {
        return Object.keys(this.drawers);
    };
    Plugins.plugins = [];
    Plugins.presets = {};
    Plugins.drawers = {};
    return Plugins;
}());
exports.Plugins = Plugins;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/Point.js":
/*!******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/Point.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Point = (function () {
    function Point(x, y, particle) {
        this.position = {
            x: x,
            y: y,
        };
        this.particle = particle;
    }
    return Point;
}());
exports.Point = Point;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/QuadTree.js":
/*!*********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/QuadTree.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Rectangle_1 = __webpack_require__(/*! ./Rectangle */ "./node_modules/tsparticles/dist/Utils/Rectangle.js");
var QuadTree = (function () {
    function QuadTree(rectangle, capacity) {
        this.rectangle = rectangle;
        this.capacity = capacity;
        this.points = [];
        this.divided = false;
    }
    QuadTree.prototype.subdivide = function () {
        var x = this.rectangle.position.x;
        var y = this.rectangle.position.y;
        var w = this.rectangle.size.width;
        var h = this.rectangle.size.height;
        this.northEast = new QuadTree(new Rectangle_1.Rectangle(x, y, w / 2, h / 2), this.capacity);
        this.northWest = new QuadTree(new Rectangle_1.Rectangle(x + w / 2, y, w / 2, h / 2), this.capacity);
        this.southEast = new QuadTree(new Rectangle_1.Rectangle(x, y + h / 2, w / 2, h / 2), this.capacity);
        this.southWest = new QuadTree(new Rectangle_1.Rectangle(x + w / 2, y + h / 2, w / 2, h / 2), this.capacity);
        this.divided = true;
    };
    QuadTree.prototype.insert = function (point) {
        var _a, _b, _c, _d;
        if (!this.rectangle.contains(point.position)) {
            return false;
        }
        if (this.points.length < this.capacity) {
            this.points.push(point);
            return true;
        }
        else {
            if (!this.divided) {
                this.subdivide();
            }
        }
        if ((_a = this.northEast) === null || _a === void 0 ? void 0 : _a.insert(point)) {
            return true;
        }
        else if ((_b = this.northWest) === null || _b === void 0 ? void 0 : _b.insert(point)) {
            return true;
        }
        else if ((_c = this.southEast) === null || _c === void 0 ? void 0 : _c.insert(point)) {
            return true;
        }
        else if ((_d = this.southWest) === null || _d === void 0 ? void 0 : _d.insert(point)) {
            return true;
        }
        return false;
    };
    QuadTree.prototype.query = function (range, found) {
        var _a, _b, _c, _d;
        var res = found !== null && found !== void 0 ? found : [];
        if (!range.intersects(this.rectangle)) {
            return [];
        }
        else {
            for (var _i = 0, _e = this.points; _i < _e.length; _i++) {
                var p = _e[_i];
                if (range.contains(p.position)) {
                    res.push(p.particle);
                }
            }
            if (this.divided) {
                (_a = this.northEast) === null || _a === void 0 ? void 0 : _a.query(range, res);
                (_b = this.northWest) === null || _b === void 0 ? void 0 : _b.query(range, res);
                (_c = this.southEast) === null || _c === void 0 ? void 0 : _c.query(range, res);
                (_d = this.southWest) === null || _d === void 0 ? void 0 : _d.query(range, res);
            }
        }
        return res;
    };
    return QuadTree;
}());
exports.QuadTree = QuadTree;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/Range.js":
/*!******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/Range.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Range = (function () {
    function Range(x, y) {
        this.position = {
            x: x,
            y: y,
        };
    }
    return Range;
}());
exports.Range = Range;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/Rectangle.js":
/*!**********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/Rectangle.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var Range_1 = __webpack_require__(/*! ./Range */ "./node_modules/tsparticles/dist/Utils/Range.js");
var Rectangle = (function (_super) {
    tslib_1.__extends(Rectangle, _super);
    function Rectangle(x, y, width, height) {
        var _this = _super.call(this, x, y) || this;
        _this.size = {
            height: height,
            width: width,
        };
        return _this;
    }
    Rectangle.prototype.contains = function (point) {
        return (point.x >= this.position.x - this.size.width &&
            point.x < this.position.x + this.size.width &&
            point.y >= this.position.y - this.size.height &&
            point.y < this.position.y + this.size.height);
    };
    Rectangle.prototype.intersects = function (range) {
        var rect = range;
        var circle = range;
        var w = this.size.width;
        var h = this.size.height;
        var pos1 = this.position;
        var pos2 = range.position;
        if (circle.radius !== undefined) {
            return circle.intersects(this);
        }
        else if (rect.size !== undefined) {
            var size2 = rect.size;
            var w2 = size2.width;
            var h2 = size2.height;
            return pos2.x - w2 < pos1.x + w &&
                pos2.x + w2 > pos1.x - w &&
                pos2.y - h2 < pos1.y + h &&
                pos2.y + h2 > pos1.y - h;
        }
        return false;
    };
    return Rectangle;
}(Range_1.Range));
exports.Rectangle = Rectangle;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/SimplexNoise.js":
/*!*************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/SimplexNoise.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var F3 = 1.0 / 3.0;
var G3 = 1.0 / 6.0;
var grad3 = new Float32Array([
    1, 1, 0,
    -1, 1, 0,
    1, -1, 0,
    -1, -1, 0,
    1, 0, 1,
    -1, 0, 1,
    1, 0, -1,
    -1, 0, -1,
    0, 1, 1,
    0, -1, 1,
    0, 1, -1,
    0, -1, -1,
]);
var buildPermutationTable = function (random) {
    var p = new Uint8Array(256);
    for (var i = 0; i < 256; i++) {
        p[i] = i;
    }
    for (var i = 0; i < 255; i++) {
        var r = i + ~~(random() * (256 - i));
        var aux = p[i];
        p[i] = p[r];
        p[r] = aux;
    }
    return p;
};
var SimplexNoise = (function () {
    function SimplexNoise(random) {
        var randomFunc = random !== null && random !== void 0 ? random : Math.random;
        this.p = buildPermutationTable(randomFunc);
        this.perm = new Uint8Array(512);
        this.permMod12 = new Uint8Array(512);
        for (var i = 0; i < 512; i++) {
            this.perm[i] = this.p[i & 255];
            this.permMod12[i] = this.perm[i] % 12;
        }
    }
    SimplexNoise.prototype.noise3D = function (xin, yin, zin) {
        var permMod12 = this.permMod12;
        var perm = this.perm;
        var n0, n1, n2, n3;
        var s = (xin + yin + zin) * F3;
        var i = Math.floor(xin + s);
        var j = Math.floor(yin + s);
        var k = Math.floor(zin + s);
        var t = (i + j + k) * G3;
        var X0 = i - t;
        var Y0 = j - t;
        var Z0 = k - t;
        var x0 = xin - X0;
        var y0 = yin - Y0;
        var z0 = zin - Z0;
        var i1, j1, k1;
        var i2, j2, k2;
        if (x0 >= y0) {
            if (y0 >= z0) {
                i1 = 1;
                j1 = 0;
                k1 = 0;
                i2 = 1;
                j2 = 1;
                k2 = 0;
            }
            else if (x0 >= z0) {
                i1 = 1;
                j1 = 0;
                k1 = 0;
                i2 = 1;
                j2 = 0;
                k2 = 1;
            }
            else {
                i1 = 0;
                j1 = 0;
                k1 = 1;
                i2 = 1;
                j2 = 0;
                k2 = 1;
            }
        }
        else {
            if (y0 < z0) {
                i1 = 0;
                j1 = 0;
                k1 = 1;
                i2 = 0;
                j2 = 1;
                k2 = 1;
            }
            else if (x0 < z0) {
                i1 = 0;
                j1 = 1;
                k1 = 0;
                i2 = 0;
                j2 = 1;
                k2 = 1;
            }
            else {
                i1 = 0;
                j1 = 1;
                k1 = 0;
                i2 = 1;
                j2 = 1;
                k2 = 0;
            }
        }
        var x1 = x0 - i1 + G3;
        var y1 = y0 - j1 + G3;
        var z1 = z0 - k1 + G3;
        var x2 = x0 - i2 + 2.0 * G3;
        var y2 = y0 - j2 + 2.0 * G3;
        var z2 = z0 - k2 + 2.0 * G3;
        var x3 = x0 - 1.0 + 3.0 * G3;
        var y3 = y0 - 1.0 + 3.0 * G3;
        var z3 = z0 - 1.0 + 3.0 * G3;
        var ii = i & 255;
        var jj = j & 255;
        var kk = k & 255;
        var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
        if (t0 < 0) {
            n0 = 0.0;
        }
        else {
            var gi0 = permMod12[ii + perm[jj + perm[kk]]] * 3;
            t0 *= t0;
            n0 = t0 * t0 * (grad3[gi0] * x0 + grad3[gi0 + 1] * y0 + grad3[gi0 + 2] * z0);
        }
        var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
        if (t1 < 0) {
            n1 = 0.0;
        }
        else {
            var gi1 = permMod12[ii + i1 + perm[jj + j1 + perm[kk + k1]]] * 3;
            t1 *= t1;
            n1 = t1 * t1 * (grad3[gi1] * x1 + grad3[gi1 + 1] * y1 + grad3[gi1 + 2] * z1);
        }
        var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
        if (t2 < 0) {
            n2 = 0.0;
        }
        else {
            var gi2 = permMod12[ii + i2 + perm[jj + j2 + perm[kk + k2]]] * 3;
            t2 *= t2;
            n2 = t2 * t2 * (grad3[gi2] * x2 + grad3[gi2 + 1] * y2 + grad3[gi2 + 2] * z2);
        }
        var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
        if (t3 < 0) {
            n3 = 0.0;
        }
        else {
            var gi3 = permMod12[ii + 1 + perm[jj + 1 + perm[kk + 1]]] * 3;
            t3 *= t3;
            n3 = t3 * t3 * (grad3[gi3] * x3 + grad3[gi3 + 1] * y3 + grad3[gi3 + 2] * z3);
        }
        return 32.0 * (n0 + n1 + n2 + n3);
    };
    return SimplexNoise;
}());
exports.SimplexNoise = SimplexNoise;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/Utils.js":
/*!******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/Utils.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var MoveDirection_1 = __webpack_require__(/*! ../Enums/MoveDirection */ "./node_modules/tsparticles/dist/Enums/MoveDirection.js");
var ColorUtils_1 = __webpack_require__(/*! ./ColorUtils */ "./node_modules/tsparticles/dist/Utils/ColorUtils.js");
var Utils = (function () {
    function Utils() {
    }
    Utils.replaceColorSvg = function (image, color, opacity) {
        if (!image.svgData) {
            return "";
        }
        var svgXml = image.svgData;
        var rgbHex = /#([0-9A-F]{3,6})/gi;
        return svgXml.replace(rgbHex, function () { return ColorUtils_1.ColorUtils.getStyleFromColor(color, opacity); });
    };
    Utils.clamp = function (num, min, max) {
        return Math.min(Math.max(num, min), max);
    };
    Utils.isInArray = function (value, array) {
        return value === array || (array instanceof Array && array.indexOf(value) > -1);
    };
    Utils.mix = function (comp1, comp2, weight1, weight2) {
        return Math.floor((comp1 * weight1 + comp2 * weight2) / (weight1 + weight2));
    };
    Utils.getParticleBaseVelocity = function (particle) {
        var velocityBase;
        switch (particle.direction) {
            case MoveDirection_1.MoveDirection.top:
                velocityBase = { x: 0, y: -1 };
                break;
            case MoveDirection_1.MoveDirection.topRight:
                velocityBase = { x: 0.5, y: -0.5 };
                break;
            case MoveDirection_1.MoveDirection.right:
                velocityBase = { x: 1, y: -0 };
                break;
            case MoveDirection_1.MoveDirection.bottomRight:
                velocityBase = { x: 0.5, y: 0.5 };
                break;
            case MoveDirection_1.MoveDirection.bottom:
                velocityBase = { x: 0, y: 1 };
                break;
            case MoveDirection_1.MoveDirection.bottomLeft:
                velocityBase = { x: -0.5, y: 1 };
                break;
            case MoveDirection_1.MoveDirection.left:
                velocityBase = { x: -1, y: 0 };
                break;
            case MoveDirection_1.MoveDirection.topLeft:
                velocityBase = { x: -0.5, y: -0.5 };
                break;
            default:
                velocityBase = { x: 0, y: 0 };
                break;
        }
        return velocityBase;
    };
    Utils.getDistance = function (pointA, pointB) {
        var dx = pointA.x - pointB.x;
        var dy = pointA.y - pointB.y;
        return Math.sqrt(dx * dx + dy * dy);
    };
    Utils.loadFont = function (character) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4, document.fonts.load(character.weight + " 36px '" + character.font + "'")];
                    case 1:
                        _b.sent();
                        return [3, 3];
                    case 2:
                        _a = _b.sent();
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    Utils.arrayRandomIndex = function (array) {
        return Math.floor(Math.random() * array.length);
    };
    Utils.itemFromArray = function (array, index) {
        return array[index !== undefined ? index : this.arrayRandomIndex(array)];
    };
    Utils.randomInRange = function (min, max) {
        return (Math.random() * (max - min)) + min;
    };
    Utils.isPointInside = function (point, size, radius) {
        return this.areBoundsInside(this.calculateBounds(point, radius !== null && radius !== void 0 ? radius : 0), size);
    };
    Utils.areBoundsInside = function (bounds, size) {
        return bounds.left < size.width && bounds.right > 0
            && bounds.top < size.height && bounds.bottom > 0;
    };
    Utils.calculateBounds = function (point, radius) {
        return {
            bottom: point.y + radius,
            left: point.x - radius,
            right: point.x + radius,
            top: point.y - radius
        };
    };
    Utils.loadImage = function (source) {
        return new Promise(function (resolve, reject) {
            if (source) {
                var image_1 = {
                    source: source,
                    type: source.substr(source.length - 3)
                };
                var img_1 = new Image();
                img_1.addEventListener("load", function () {
                    image_1.element = img_1;
                    resolve(image_1);
                });
                img_1.addEventListener("error", function () {
                    reject("Error tsParticles - loading image: " + source);
                });
                img_1.src = source;
            }
            else {
                reject("Error tsParticles - No image.src");
            }
        });
    };
    Utils.downloadSvgImage = function (source) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var image, response, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!source) return [3, 5];
                        image = {
                            source: source,
                            type: source.substr(source.length - 3)
                        };
                        if (image.type !== "svg") {
                            return [2, this.loadImage(source)];
                        }
                        return [4, fetch(image.source)];
                    case 1:
                        response = _b.sent();
                        if (!response.ok) return [3, 3];
                        _a = image;
                        return [4, response.text()];
                    case 2:
                        _a.svgData = _b.sent();
                        return [2, image];
                    case 3: throw new Error("Error tsParticles - Image not found");
                    case 4: return [3, 6];
                    case 5: throw new Error("Error tsParticles - No image.src");
                    case 6: return [2];
                }
            });
        });
    };
    Utils.deepExtend = function (destination, source) {
        var _a;
        destination = destination !== null && destination !== void 0 ? destination : {};
        for (var property in source) {
            if (source[property] && source[property].constructor && source[property].constructor === Object) {
                destination[property] = (_a = destination[property]) !== null && _a !== void 0 ? _a : {};
                Utils.deepExtend(destination[property], source[property]);
            }
            else {
                destination[property] = source[property];
            }
        }
        return destination;
    };
    return Utils;
}());
exports.Utils = Utils;


/***/ }),

/***/ "./node_modules/tsparticles/dist/index.js":
/*!************************************************!*\
  !*** ./node_modules/tsparticles/dist/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AbsorbersPlugin_1 = __webpack_require__(/*! ./Plugins/Absorbers/AbsorbersPlugin */ "./node_modules/tsparticles/dist/Plugins/Absorbers/AbsorbersPlugin.js");
var EmittersPlugin_1 = __webpack_require__(/*! ./Plugins/Emitters/EmittersPlugin */ "./node_modules/tsparticles/dist/Plugins/Emitters/EmittersPlugin.js");
var PolygonMaskPlugin_1 = __webpack_require__(/*! ./Plugins/PolygonMask/PolygonMaskPlugin */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/PolygonMaskPlugin.js");
var index_slim_1 = __webpack_require__(/*! ./index.slim */ "./node_modules/tsparticles/dist/index.slim.js");
exports.particlesJS = index_slim_1.particlesJS;
exports.pJSDom = index_slim_1.pJSDom;
exports.tsParticles = index_slim_1.tsParticles;
index_slim_1.tsParticles.addPlugin(new AbsorbersPlugin_1.AbsorbersPlugin());
index_slim_1.tsParticles.addPlugin(new EmittersPlugin_1.EmittersPlugin());
index_slim_1.tsParticles.addPlugin(new PolygonMaskPlugin_1.PolygonMaskPlugin());


/***/ }),

/***/ "./node_modules/tsparticles/dist/index.slim.js":
/*!*****************************************************!*\
  !*** ./node_modules/tsparticles/dist/index.slim.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var Loader_1 = __webpack_require__(/*! ./Core/Loader */ "./node_modules/tsparticles/dist/Core/Loader.js");
var ShapeType_1 = __webpack_require__(/*! ./Enums/ShapeType */ "./node_modules/tsparticles/dist/Enums/ShapeType.js");
var LineDrawer_1 = __webpack_require__(/*! ./Core/Particle/ShapeDrawers/LineDrawer */ "./node_modules/tsparticles/dist/Core/Particle/ShapeDrawers/LineDrawer.js");
var CircleDrawer_1 = __webpack_require__(/*! ./Core/Particle/ShapeDrawers/CircleDrawer */ "./node_modules/tsparticles/dist/Core/Particle/ShapeDrawers/CircleDrawer.js");
var SquareDrawer_1 = __webpack_require__(/*! ./Core/Particle/ShapeDrawers/SquareDrawer */ "./node_modules/tsparticles/dist/Core/Particle/ShapeDrawers/SquareDrawer.js");
var TriangleDrawer_1 = __webpack_require__(/*! ./Core/Particle/ShapeDrawers/TriangleDrawer */ "./node_modules/tsparticles/dist/Core/Particle/ShapeDrawers/TriangleDrawer.js");
var StarDrawer_1 = __webpack_require__(/*! ./Core/Particle/ShapeDrawers/StarDrawer */ "./node_modules/tsparticles/dist/Core/Particle/ShapeDrawers/StarDrawer.js");
var PolygonDrawer_1 = __webpack_require__(/*! ./Core/Particle/ShapeDrawers/PolygonDrawer */ "./node_modules/tsparticles/dist/Core/Particle/ShapeDrawers/PolygonDrawer.js");
var TextDrawer_1 = __webpack_require__(/*! ./Core/Particle/ShapeDrawers/TextDrawer */ "./node_modules/tsparticles/dist/Core/Particle/ShapeDrawers/TextDrawer.js");
var ImageDrawer_1 = __webpack_require__(/*! ./Core/Particle/ShapeDrawers/ImageDrawer */ "./node_modules/tsparticles/dist/Core/Particle/ShapeDrawers/ImageDrawer.js");
var Plugins_1 = __webpack_require__(/*! ./Utils/Plugins */ "./node_modules/tsparticles/dist/Utils/Plugins.js");
var Main = (function () {
    function Main() {
        this.initialized = false;
        if (typeof window !== "undefined" && window) {
            window.customRequestAnimationFrame = (function () {
                return window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    (function (callback) { return window.setTimeout(callback, 1000 / 60); });
            })();
            window.customCancelRequestAnimationFrame = (function () {
                return window.cancelAnimationFrame ||
                    window.webkitCancelRequestAnimationFrame ||
                    window.mozCancelRequestAnimationFrame ||
                    window.oCancelRequestAnimationFrame ||
                    window.msCancelRequestAnimationFrame ||
                    clearTimeout;
            })();
        }
        var squareDrawer = new SquareDrawer_1.SquareDrawer();
        var textDrawer = new TextDrawer_1.TextDrawer();
        var imageDrawer = new ImageDrawer_1.ImageDrawer();
        Plugins_1.Plugins.addShapeDrawer(ShapeType_1.ShapeType.line, new LineDrawer_1.LineDrawer());
        Plugins_1.Plugins.addShapeDrawer(ShapeType_1.ShapeType.circle, new CircleDrawer_1.CircleDrawer());
        Plugins_1.Plugins.addShapeDrawer(ShapeType_1.ShapeType.edge, squareDrawer);
        Plugins_1.Plugins.addShapeDrawer(ShapeType_1.ShapeType.square, squareDrawer);
        Plugins_1.Plugins.addShapeDrawer(ShapeType_1.ShapeType.triangle, new TriangleDrawer_1.TriangleDrawer());
        Plugins_1.Plugins.addShapeDrawer(ShapeType_1.ShapeType.star, new StarDrawer_1.StarDrawer());
        Plugins_1.Plugins.addShapeDrawer(ShapeType_1.ShapeType.polygon, new PolygonDrawer_1.PolygonDrawer());
        Plugins_1.Plugins.addShapeDrawer(ShapeType_1.ShapeType.char, textDrawer);
        Plugins_1.Plugins.addShapeDrawer(ShapeType_1.ShapeType.character, textDrawer);
        Plugins_1.Plugins.addShapeDrawer(ShapeType_1.ShapeType.image, imageDrawer);
        Plugins_1.Plugins.addShapeDrawer(ShapeType_1.ShapeType.images, imageDrawer);
    }
    Main.prototype.init = function () {
        if (!this.initialized) {
            this.initialized = true;
        }
    };
    Main.prototype.loadFromArray = function (tagId, params, index) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2, Loader_1.Loader.loadFromArray(tagId, params, index)];
            });
        });
    };
    Main.prototype.load = function (tagId, params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2, Loader_1.Loader.load(tagId, params)];
            });
        });
    };
    Main.prototype.loadJSON = function (tagId, pathConfigJson) {
        return Loader_1.Loader.loadJSON(tagId, pathConfigJson);
    };
    Main.prototype.setOnClickHandler = function (callback) {
        Loader_1.Loader.setOnClickHandler(callback);
    };
    Main.prototype.dom = function () {
        return Loader_1.Loader.dom();
    };
    Main.prototype.domItem = function (index) {
        return Loader_1.Loader.domItem(index);
    };
    Main.prototype.addShape = function (shape, drawer, init, afterEffect, destroy) {
        var customDrawer;
        if (typeof drawer === "function") {
            customDrawer = {
                afterEffect: afterEffect,
                draw: drawer,
                destroy: destroy,
                init: init,
            };
        }
        else {
            customDrawer = drawer;
        }
        Plugins_1.Plugins.addShapeDrawer(shape, customDrawer);
    };
    Main.prototype.addPreset = function (preset, options) {
        Plugins_1.Plugins.addPreset(preset, options);
    };
    Main.prototype.addPlugin = function (plugin) {
        Plugins_1.Plugins.addPlugin(plugin);
    };
    return Main;
}());
var tsParticles = new Main();
exports.tsParticles = tsParticles;
var particlesJS = function (tagId, params) {
    return tsParticles.load(tagId, params);
};
exports.particlesJS = particlesJS;
particlesJS.load = function (tagId, pathConfigJson, callback) {
    tsParticles.loadJSON(tagId, pathConfigJson).then(function (container) {
        if (container) {
            callback(container);
        }
    });
};
particlesJS.setOnClickHandler = function (callback) {
    tsParticles.setOnClickHandler(callback);
};
var pJSDom = tsParticles.dom();
exports.pJSDom = pJSDom;


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-particles-js */ "./node_modules/react-particles-js/index.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.css */ "./pages/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");







var _this = undefined,
    _jsxFileName = "/Users/chanissat/Repositories/nlpfrontend/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }









var Search = antd__WEBPACK_IMPORTED_MODULE_4__["Input"].Search;
var Meta = antd__WEBPACK_IMPORTED_MODULE_4__["Card"].Meta;
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__Container",
  componentId: "r4ti5q-0"
})(["display:flex;flex-direction:column;align-items:center;background-color:#0e0e0e;color:#ffffff;padding-bottom:4rem;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__Title",
  componentId: "r4ti5q-1"
})(["margin:4rem 0;font-size:3rem;"]);
var CardContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(antd__WEBPACK_IMPORTED_MODULE_4__["Row"]).withConfig({
  displayName: "pages__CardContainer",
  componentId: "r4ti5q-2"
})(["margin-top:4rem !important;max-width:1440px;"]);
var MovieCard = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(antd__WEBPACK_IMPORTED_MODULE_4__["Card"]).withConfig({
  displayName: "pages__MovieCard",
  componentId: "r4ti5q-3"
})(["width:260px;height:440px;"]);
var MovieImage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__MovieImage",
  componentId: "r4ti5q-4"
})(["background-size:contain;background-repeat:no-repeat;background-position:center;background-image:", ";height:100%;"], function (_ref5) {
  var url = _ref5.url;
  return "url('".concat(url, "')");
});

var _StyledCol = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"]).withConfig({
  displayName: "pages___StyledCol",
  componentId: "r4ti5q-5"
})(["display:flex;justify-content:center;"]);

var _StyledDiv = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])("div").withConfig({
  displayName: "pages___StyledDiv",
  componentId: "r4ti5q-6"
})(["display:flex;justify-content:center;"]);

var _StyledCol2 = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"]).withConfig({
  displayName: "pages___StyledCol2",
  componentId: "r4ti5q-7"
})(["display:flex;justify-content:center;"]);

var _StyledSkeleton = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(antd__WEBPACK_IMPORTED_MODULE_4__["Skeleton"]).withConfig({
  displayName: "pages___StyledSkeleton",
  componentId: "r4ti5q-8"
})(["padding:4rem;"]);

var _ref = false ? undefined : {
  name: "69mb74-App",
  styles: "padding:4rem;;label:App;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFuaXNzYXQvUmVwb3NpdG9yaWVzL25scGZyb250ZW5kL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9INEIiLCJmaWxlIjoiL1VzZXJzL2NoYW5pc3NhdC9SZXBvc2l0b3JpZXMvbmxwZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNzcyBmcm9tIFwiQGVtb3Rpb24vY3NzXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgSW5wdXQsIENhcmQsIENvbCwgUm93LCBTa2VsZXRvbiwgQXZhdGFyIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBQYXJ0aWNsZXMgZnJvbSBcInJlYWN0LXBhcnRpY2xlcy1qc1wiO1xuaW1wb3J0IFwiYW50ZC9kaXN0L2FudGQuY3NzXCI7XG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IHsgU2VhcmNoIH0gPSBJbnB1dDtcblxuY29uc3QgeyBNZXRhIH0gPSBDYXJkO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUwZTBlO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZy1ib3R0b206IDRyZW07XG5gO1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogNHJlbSAwO1xuICBmb250LXNpemU6IDNyZW07XG5gO1xuXG5jb25zdCBDYXJkQ29udGFpbmVyID0gc3R5bGVkKFJvdylgXG4gIG1hcmdpbi10b3A6IDRyZW0gIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XG5gO1xuXG5jb25zdCBNb3ZpZUNhcmQgPSBzdHlsZWQoQ2FyZClgXG4gIHdpZHRoOiAyNjBweDtcbiAgaGVpZ2h0OiA0NDBweDtcbmA7XG5cbmNvbnN0IE1vdmllSW1hZ2UgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogJHsoeyB1cmwgfSkgPT4gYHVybCgnJHt1cmx9JylgfTtcbiAgaGVpZ2h0OiAxMDAlO1xuYDtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCBbbW92aWVzLCBzZXRNb3ZpZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3Qgc2tlbGV0b25MaXN0ID0gWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwODAvbW92aWVgKS50aGVuKCh7IGRhdGE6IHsgbW92aWVzIH0gfSkgPT4ge1xuICAgICAgc2V0TW92aWVzKG1vdmllcyk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jIChzZWFyY2gpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL21vdmllL3RleHQ/cXVlcnk9JHtzZWFyY2h9YCkudGhlbigoeyBkYXRhOiB7IG1vdmllcyB9IH0pID0+IHtcbiAgICAgIHNldE1vdmllcyhtb3ZpZXMpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFBhcnRpY2xlcyAvPlxuICAgICAgPFRpdGxlPuC4q+C4meC4seC4h+C4iuC4meC4sDwvVGl0bGU+XG4gICAgICA8U2VhcmNoXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiE4Liz4LiW4Liy4LihLi4uXCJcbiAgICAgICAgZW50ZXJCdXR0b25cbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDYwMCB9fVxuICAgICAgICBvblNlYXJjaD17aGFuZGxlU2VhcmNofVxuICAgICAgLz5cbiAgICAgIDxDYXJkQ29udGFpbmVyIGd1dHRlcj17WzQsIDI0XX0+XG4gICAgICAgIHshbG9hZGluZ1xuICAgICAgICAgID8gbW92aWVzLm1hcCgobW92aWUsIGkpID0+IChcbiAgICAgICAgICAgICAgPENvbFxuICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICBzcGFuPXs4fVxuICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TW92aWVDYXJkIHRpdGxlPXttb3ZpZS5uYW1lfSBib3JkZXJlZD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAge21vdmllLmltYWdlVXJsID8gKFxuICAgICAgICAgICAgICAgICAgICA8TW92aWVJbWFnZSB1cmw9e21vdmllLmltYWdlVXJsfSAvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBQaWN0dXJlXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L01vdmllQ2FyZD5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIDogc2tlbGV0b25MaXN0Lm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8Q29sXG4gICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgIHNwYW49ezh9XG4gICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxNb3ZpZUNhcmQgYm9yZGVyZWQ9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICAgIDxTa2VsZXRvblxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNHJlbTtcbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPE1ldGEgdGl0bGU9XCJDYXJkIHRpdGxlXCIgZGVzY3JpcHRpb249XCJUaGlzIGlzIHRoZSBkZXNjcmlwdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICA8L1NrZWxldG9uPlxuICAgICAgICAgICAgICAgIDwvTW92aWVDYXJkPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICkpfVxuICAgICAgPC9DYXJkQ29udGFpbmVyPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref2 = false ? undefined : {
  name: "l1j73q-App",
  styles: "display:flex;justify-content:center;;label:App;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFuaXNzYXQvUmVwb3NpdG9yaWVzL25scGZyb250ZW5kL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJHd0IiLCJmaWxlIjoiL1VzZXJzL2NoYW5pc3NhdC9SZXBvc2l0b3JpZXMvbmxwZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNzcyBmcm9tIFwiQGVtb3Rpb24vY3NzXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgSW5wdXQsIENhcmQsIENvbCwgUm93LCBTa2VsZXRvbiwgQXZhdGFyIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBQYXJ0aWNsZXMgZnJvbSBcInJlYWN0LXBhcnRpY2xlcy1qc1wiO1xuaW1wb3J0IFwiYW50ZC9kaXN0L2FudGQuY3NzXCI7XG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IHsgU2VhcmNoIH0gPSBJbnB1dDtcblxuY29uc3QgeyBNZXRhIH0gPSBDYXJkO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUwZTBlO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZy1ib3R0b206IDRyZW07XG5gO1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogNHJlbSAwO1xuICBmb250LXNpemU6IDNyZW07XG5gO1xuXG5jb25zdCBDYXJkQ29udGFpbmVyID0gc3R5bGVkKFJvdylgXG4gIG1hcmdpbi10b3A6IDRyZW0gIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XG5gO1xuXG5jb25zdCBNb3ZpZUNhcmQgPSBzdHlsZWQoQ2FyZClgXG4gIHdpZHRoOiAyNjBweDtcbiAgaGVpZ2h0OiA0NDBweDtcbmA7XG5cbmNvbnN0IE1vdmllSW1hZ2UgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogJHsoeyB1cmwgfSkgPT4gYHVybCgnJHt1cmx9JylgfTtcbiAgaGVpZ2h0OiAxMDAlO1xuYDtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCBbbW92aWVzLCBzZXRNb3ZpZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3Qgc2tlbGV0b25MaXN0ID0gWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwODAvbW92aWVgKS50aGVuKCh7IGRhdGE6IHsgbW92aWVzIH0gfSkgPT4ge1xuICAgICAgc2V0TW92aWVzKG1vdmllcyk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jIChzZWFyY2gpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL21vdmllL3RleHQ/cXVlcnk9JHtzZWFyY2h9YCkudGhlbigoeyBkYXRhOiB7IG1vdmllcyB9IH0pID0+IHtcbiAgICAgIHNldE1vdmllcyhtb3ZpZXMpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFBhcnRpY2xlcyAvPlxuICAgICAgPFRpdGxlPuC4q+C4meC4seC4h+C4iuC4meC4sDwvVGl0bGU+XG4gICAgICA8U2VhcmNoXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiE4Liz4LiW4Liy4LihLi4uXCJcbiAgICAgICAgZW50ZXJCdXR0b25cbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDYwMCB9fVxuICAgICAgICBvblNlYXJjaD17aGFuZGxlU2VhcmNofVxuICAgICAgLz5cbiAgICAgIDxDYXJkQ29udGFpbmVyIGd1dHRlcj17WzQsIDI0XX0+XG4gICAgICAgIHshbG9hZGluZ1xuICAgICAgICAgID8gbW92aWVzLm1hcCgobW92aWUsIGkpID0+IChcbiAgICAgICAgICAgICAgPENvbFxuICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICBzcGFuPXs4fVxuICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TW92aWVDYXJkIHRpdGxlPXttb3ZpZS5uYW1lfSBib3JkZXJlZD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAge21vdmllLmltYWdlVXJsID8gKFxuICAgICAgICAgICAgICAgICAgICA8TW92aWVJbWFnZSB1cmw9e21vdmllLmltYWdlVXJsfSAvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBQaWN0dXJlXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L01vdmllQ2FyZD5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIDogc2tlbGV0b25MaXN0Lm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8Q29sXG4gICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgIHNwYW49ezh9XG4gICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxNb3ZpZUNhcmQgYm9yZGVyZWQ9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICAgIDxTa2VsZXRvblxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNHJlbTtcbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPE1ldGEgdGl0bGU9XCJDYXJkIHRpdGxlXCIgZGVzY3JpcHRpb249XCJUaGlzIGlzIHRoZSBkZXNjcmlwdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICA8L1NrZWxldG9uPlxuICAgICAgICAgICAgICAgIDwvTW92aWVDYXJkPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICkpfVxuICAgICAgPC9DYXJkQ29udGFpbmVyPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref3 = false ? undefined : {
  name: "l1j73q-App",
  styles: "display:flex;justify-content:center;;label:App;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFuaXNzYXQvUmVwb3NpdG9yaWVzL25scGZyb250ZW5kL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRGOEIiLCJmaWxlIjoiL1VzZXJzL2NoYW5pc3NhdC9SZXBvc2l0b3JpZXMvbmxwZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNzcyBmcm9tIFwiQGVtb3Rpb24vY3NzXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgSW5wdXQsIENhcmQsIENvbCwgUm93LCBTa2VsZXRvbiwgQXZhdGFyIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBQYXJ0aWNsZXMgZnJvbSBcInJlYWN0LXBhcnRpY2xlcy1qc1wiO1xuaW1wb3J0IFwiYW50ZC9kaXN0L2FudGQuY3NzXCI7XG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IHsgU2VhcmNoIH0gPSBJbnB1dDtcblxuY29uc3QgeyBNZXRhIH0gPSBDYXJkO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUwZTBlO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZy1ib3R0b206IDRyZW07XG5gO1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogNHJlbSAwO1xuICBmb250LXNpemU6IDNyZW07XG5gO1xuXG5jb25zdCBDYXJkQ29udGFpbmVyID0gc3R5bGVkKFJvdylgXG4gIG1hcmdpbi10b3A6IDRyZW0gIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XG5gO1xuXG5jb25zdCBNb3ZpZUNhcmQgPSBzdHlsZWQoQ2FyZClgXG4gIHdpZHRoOiAyNjBweDtcbiAgaGVpZ2h0OiA0NDBweDtcbmA7XG5cbmNvbnN0IE1vdmllSW1hZ2UgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogJHsoeyB1cmwgfSkgPT4gYHVybCgnJHt1cmx9JylgfTtcbiAgaGVpZ2h0OiAxMDAlO1xuYDtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCBbbW92aWVzLCBzZXRNb3ZpZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3Qgc2tlbGV0b25MaXN0ID0gWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwODAvbW92aWVgKS50aGVuKCh7IGRhdGE6IHsgbW92aWVzIH0gfSkgPT4ge1xuICAgICAgc2V0TW92aWVzKG1vdmllcyk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jIChzZWFyY2gpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL21vdmllL3RleHQ/cXVlcnk9JHtzZWFyY2h9YCkudGhlbigoeyBkYXRhOiB7IG1vdmllcyB9IH0pID0+IHtcbiAgICAgIHNldE1vdmllcyhtb3ZpZXMpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFBhcnRpY2xlcyAvPlxuICAgICAgPFRpdGxlPuC4q+C4meC4seC4h+C4iuC4meC4sDwvVGl0bGU+XG4gICAgICA8U2VhcmNoXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiE4Liz4LiW4Liy4LihLi4uXCJcbiAgICAgICAgZW50ZXJCdXR0b25cbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDYwMCB9fVxuICAgICAgICBvblNlYXJjaD17aGFuZGxlU2VhcmNofVxuICAgICAgLz5cbiAgICAgIDxDYXJkQ29udGFpbmVyIGd1dHRlcj17WzQsIDI0XX0+XG4gICAgICAgIHshbG9hZGluZ1xuICAgICAgICAgID8gbW92aWVzLm1hcCgobW92aWUsIGkpID0+IChcbiAgICAgICAgICAgICAgPENvbFxuICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICBzcGFuPXs4fVxuICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TW92aWVDYXJkIHRpdGxlPXttb3ZpZS5uYW1lfSBib3JkZXJlZD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAge21vdmllLmltYWdlVXJsID8gKFxuICAgICAgICAgICAgICAgICAgICA8TW92aWVJbWFnZSB1cmw9e21vdmllLmltYWdlVXJsfSAvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBQaWN0dXJlXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L01vdmllQ2FyZD5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIDogc2tlbGV0b25MaXN0Lm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8Q29sXG4gICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgIHNwYW49ezh9XG4gICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxNb3ZpZUNhcmQgYm9yZGVyZWQ9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICAgIDxTa2VsZXRvblxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNHJlbTtcbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPE1ldGEgdGl0bGU9XCJDYXJkIHRpdGxlXCIgZGVzY3JpcHRpb249XCJUaGlzIGlzIHRoZSBkZXNjcmlwdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICA8L1NrZWxldG9uPlxuICAgICAgICAgICAgICAgIDwvTW92aWVDYXJkPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICkpfVxuICAgICAgPC9DYXJkQ29udGFpbmVyPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref4 = false ? undefined : {
  name: "l1j73q-App",
  styles: "display:flex;justify-content:center;;label:App;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFuaXNzYXQvUmVwb3NpdG9yaWVzL25scGZyb250ZW5kL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtGd0IiLCJmaWxlIjoiL1VzZXJzL2NoYW5pc3NhdC9SZXBvc2l0b3JpZXMvbmxwZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNzcyBmcm9tIFwiQGVtb3Rpb24vY3NzXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgSW5wdXQsIENhcmQsIENvbCwgUm93LCBTa2VsZXRvbiwgQXZhdGFyIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBQYXJ0aWNsZXMgZnJvbSBcInJlYWN0LXBhcnRpY2xlcy1qc1wiO1xuaW1wb3J0IFwiYW50ZC9kaXN0L2FudGQuY3NzXCI7XG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IHsgU2VhcmNoIH0gPSBJbnB1dDtcblxuY29uc3QgeyBNZXRhIH0gPSBDYXJkO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUwZTBlO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZy1ib3R0b206IDRyZW07XG5gO1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogNHJlbSAwO1xuICBmb250LXNpemU6IDNyZW07XG5gO1xuXG5jb25zdCBDYXJkQ29udGFpbmVyID0gc3R5bGVkKFJvdylgXG4gIG1hcmdpbi10b3A6IDRyZW0gIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XG5gO1xuXG5jb25zdCBNb3ZpZUNhcmQgPSBzdHlsZWQoQ2FyZClgXG4gIHdpZHRoOiAyNjBweDtcbiAgaGVpZ2h0OiA0NDBweDtcbmA7XG5cbmNvbnN0IE1vdmllSW1hZ2UgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogJHsoeyB1cmwgfSkgPT4gYHVybCgnJHt1cmx9JylgfTtcbiAgaGVpZ2h0OiAxMDAlO1xuYDtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCBbbW92aWVzLCBzZXRNb3ZpZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3Qgc2tlbGV0b25MaXN0ID0gWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwODAvbW92aWVgKS50aGVuKCh7IGRhdGE6IHsgbW92aWVzIH0gfSkgPT4ge1xuICAgICAgc2V0TW92aWVzKG1vdmllcyk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jIChzZWFyY2gpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL21vdmllL3RleHQ/cXVlcnk9JHtzZWFyY2h9YCkudGhlbigoeyBkYXRhOiB7IG1vdmllcyB9IH0pID0+IHtcbiAgICAgIHNldE1vdmllcyhtb3ZpZXMpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFBhcnRpY2xlcyAvPlxuICAgICAgPFRpdGxlPuC4q+C4meC4seC4h+C4iuC4meC4sDwvVGl0bGU+XG4gICAgICA8U2VhcmNoXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiE4Liz4LiW4Liy4LihLi4uXCJcbiAgICAgICAgZW50ZXJCdXR0b25cbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDYwMCB9fVxuICAgICAgICBvblNlYXJjaD17aGFuZGxlU2VhcmNofVxuICAgICAgLz5cbiAgICAgIDxDYXJkQ29udGFpbmVyIGd1dHRlcj17WzQsIDI0XX0+XG4gICAgICAgIHshbG9hZGluZ1xuICAgICAgICAgID8gbW92aWVzLm1hcCgobW92aWUsIGkpID0+IChcbiAgICAgICAgICAgICAgPENvbFxuICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICBzcGFuPXs4fVxuICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TW92aWVDYXJkIHRpdGxlPXttb3ZpZS5uYW1lfSBib3JkZXJlZD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAge21vdmllLmltYWdlVXJsID8gKFxuICAgICAgICAgICAgICAgICAgICA8TW92aWVJbWFnZSB1cmw9e21vdmllLmltYWdlVXJsfSAvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBQaWN0dXJlXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L01vdmllQ2FyZD5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIDogc2tlbGV0b25MaXN0Lm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8Q29sXG4gICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgIHNwYW49ezh9XG4gICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxNb3ZpZUNhcmQgYm9yZGVyZWQ9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICAgIDxTa2VsZXRvblxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNHJlbTtcbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPE1ldGEgdGl0bGU9XCJDYXJkIHRpdGxlXCIgZGVzY3JpcHRpb249XCJUaGlzIGlzIHRoZSBkZXNjcmlwdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICA8L1NrZWxldG9uPlxuICAgICAgICAgICAgICAgIDwvTW92aWVDYXJkPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICkpfVxuICAgICAgPC9DYXJkQ29udGFpbmVyPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var App = function App() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      movies = _useState[0],
      setMovies = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var skeletonList = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("http://localhost:8080/movie").then(function (_ref6) {
      var movies = _ref6.data.movies;
      setMovies(movies);
      setLoading(false);
    });
  }, []);

  var handleSearch = function handleSearch(search) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleSearch$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setLoading(true);
            axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("http://localhost:8080/movie/text?query=".concat(search)).then(function (_ref7) {
              var movies = _ref7.data.movies;
              setMovies(movies);
              setLoading(false);
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(react_particles_js__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, "\u0E2B\u0E19\u0E31\u0E07\u0E0A\u0E19\u0E30"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(Search, {
    placeholder: "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E04\u0E33\u0E16\u0E32\u0E21...",
    enterButton: true,
    style: {
      width: 600
    },
    onSearch: handleSearch,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(CardContainer, {
    gutter: [4, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, !loading ? movies.map(function (movie, i) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_StyledCol, {
      key: i,
      span: 8,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 15
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(MovieCard, {
      title: movie.name,
      bordered: false,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }
    }, movie.imageUrl ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(MovieImage, {
      url: movie.imageUrl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 21
      }
    }) : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_StyledDiv, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 21
      }
    }, "Picture")));
  }) : skeletonList.map(function (item, i) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_StyledCol2, {
      key: i,
      span: 8,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 15
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(MovieCard, {
      bordered: false,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_StyledSkeleton, {
      loading: loading,
      active: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 19
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(Meta, {
      title: "Card title",
      description: "This is the description",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 21
      }
    }))));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.f8f4d6f2228b7107671f.hot-update.js.map