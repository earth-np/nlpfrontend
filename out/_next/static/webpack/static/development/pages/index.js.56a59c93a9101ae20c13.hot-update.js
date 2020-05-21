webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ "./pages/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");







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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFuaXNzYXQvUmVwb3NpdG9yaWVzL25scGZyb250ZW5kL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFIOEIiLCJmaWxlIjoiL1VzZXJzL2NoYW5pc3NhdC9SZXBvc2l0b3JpZXMvbmxwZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjc3MgZnJvbSBcIkBlbW90aW9uL2Nzc1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IElucHV0LCBDYXJkLCBDb2wsIFJvdywgU2tlbGV0b24sIEF2YXRhciB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCBcImFudGQvZGlzdC9hbnRkLmNzc1wiO1xuXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCB7IFNlYXJjaCB9ID0gSW5wdXQ7XG5cbmNvbnN0IHsgTWV0YSB9ID0gQ2FyZDtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlMGUwZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmctYm90dG9tOiA0cmVtO1xuYDtcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDRyZW0gMDtcbiAgZm9udC1zaXplOiAzcmVtO1xuYDtcblxuY29uc3QgQ2FyZENvbnRhaW5lciA9IHN0eWxlZChSb3cpYFxuICBtYXJnaW4tdG9wOiA0cmVtICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMTQ0MHB4O1xuYDtcblxuY29uc3QgTW92aWVDYXJkID0gc3R5bGVkKENhcmQpYFxuICB3aWR0aDogMjYwcHg7XG4gIGhlaWdodDogNDQwcHg7XG5gO1xuXG5jb25zdCBNb3ZpZUltYWdlID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6ICR7KHsgdXJsIH0pID0+IGB1cmwoJyR7dXJsfScpYH07XG4gIGhlaWdodDogMTAwJTtcbmA7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3QgW21vdmllcywgc2V0TW92aWVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHNrZWxldG9uTGlzdCA9IFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL21vdmllYCkudGhlbigoeyBkYXRhOiB7IG1vdmllcyB9IH0pID0+IHtcbiAgICAgIHNldE1vdmllcyhtb3ZpZXMpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSBhc3luYyAoc2VhcmNoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9tb3ZpZS90ZXh0P3F1ZXJ5PSR7c2VhcmNofWApLnRoZW4oKHsgZGF0YTogeyBtb3ZpZXMgfSB9KSA9PiB7XG4gICAgICBzZXRNb3ZpZXMobW92aWVzKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPHNjcmlwdCBzcmM9XCJwYXJ0aWNsZXMuanNcIj48L3NjcmlwdD5cbiAgICAgIDxDb250YWluZXIgaWQ9XCJwYXJ0aWNsZXMtanNcIj5cbiAgICAgICAgPFRpdGxlPuC4q+C4meC4seC4h+C4iuC4meC4sDwvVGl0bGU+XG4gICAgICAgIDxTZWFyY2hcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4hOC4s+C4luC4suC4oS4uLlwiXG4gICAgICAgICAgZW50ZXJCdXR0b25cbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogNjAwIH19XG4gICAgICAgICAgb25TZWFyY2g9e2hhbmRsZVNlYXJjaH1cbiAgICAgICAgLz5cbiAgICAgICAgPENhcmRDb250YWluZXIgZ3V0dGVyPXtbNCwgMjRdfT5cbiAgICAgICAgICB7IWxvYWRpbmdcbiAgICAgICAgICAgID8gbW92aWVzLm1hcCgobW92aWUsIGkpID0+IChcbiAgICAgICAgICAgICAgICA8Q29sXG4gICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICBzcGFuPXs4fVxuICAgICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8TW92aWVDYXJkIHRpdGxlPXttb3ZpZS5uYW1lfSBib3JkZXJlZD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAgICB7bW92aWUuaW1hZ2VVcmwgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPE1vdmllSW1hZ2UgdXJsPXttb3ZpZS5pbWFnZVVybH0gLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBpY3R1cmVcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvTW92aWVDYXJkPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgOiBza2VsZXRvbkxpc3QubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPENvbFxuICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgc3Bhbj17OH1cbiAgICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPE1vdmllQ2FyZCBib3JkZXJlZD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAgICA8U2tlbGV0b25cbiAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNHJlbTtcbiAgICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPE1ldGEgdGl0bGU9XCJDYXJkIHRpdGxlXCIgZGVzY3JpcHRpb249XCJUaGlzIGlzIHRoZSBkZXNjcmlwdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvU2tlbGV0b24+XG4gICAgICAgICAgICAgICAgICA8L01vdmllQ2FyZD5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvQ2FyZENvbnRhaW5lcj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref2 = false ? undefined : {
  name: "l1j73q-App",
  styles: "display:flex;justify-content:center;;label:App;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFuaXNzYXQvUmVwb3NpdG9yaWVzL25scGZyb250ZW5kL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRHMEIiLCJmaWxlIjoiL1VzZXJzL2NoYW5pc3NhdC9SZXBvc2l0b3JpZXMvbmxwZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjc3MgZnJvbSBcIkBlbW90aW9uL2Nzc1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IElucHV0LCBDYXJkLCBDb2wsIFJvdywgU2tlbGV0b24sIEF2YXRhciB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCBcImFudGQvZGlzdC9hbnRkLmNzc1wiO1xuXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCB7IFNlYXJjaCB9ID0gSW5wdXQ7XG5cbmNvbnN0IHsgTWV0YSB9ID0gQ2FyZDtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlMGUwZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmctYm90dG9tOiA0cmVtO1xuYDtcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDRyZW0gMDtcbiAgZm9udC1zaXplOiAzcmVtO1xuYDtcblxuY29uc3QgQ2FyZENvbnRhaW5lciA9IHN0eWxlZChSb3cpYFxuICBtYXJnaW4tdG9wOiA0cmVtICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMTQ0MHB4O1xuYDtcblxuY29uc3QgTW92aWVDYXJkID0gc3R5bGVkKENhcmQpYFxuICB3aWR0aDogMjYwcHg7XG4gIGhlaWdodDogNDQwcHg7XG5gO1xuXG5jb25zdCBNb3ZpZUltYWdlID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6ICR7KHsgdXJsIH0pID0+IGB1cmwoJyR7dXJsfScpYH07XG4gIGhlaWdodDogMTAwJTtcbmA7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3QgW21vdmllcywgc2V0TW92aWVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHNrZWxldG9uTGlzdCA9IFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL21vdmllYCkudGhlbigoeyBkYXRhOiB7IG1vdmllcyB9IH0pID0+IHtcbiAgICAgIHNldE1vdmllcyhtb3ZpZXMpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSBhc3luYyAoc2VhcmNoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9tb3ZpZS90ZXh0P3F1ZXJ5PSR7c2VhcmNofWApLnRoZW4oKHsgZGF0YTogeyBtb3ZpZXMgfSB9KSA9PiB7XG4gICAgICBzZXRNb3ZpZXMobW92aWVzKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPHNjcmlwdCBzcmM9XCJwYXJ0aWNsZXMuanNcIj48L3NjcmlwdD5cbiAgICAgIDxDb250YWluZXIgaWQ9XCJwYXJ0aWNsZXMtanNcIj5cbiAgICAgICAgPFRpdGxlPuC4q+C4meC4seC4h+C4iuC4meC4sDwvVGl0bGU+XG4gICAgICAgIDxTZWFyY2hcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4hOC4s+C4luC4suC4oS4uLlwiXG4gICAgICAgICAgZW50ZXJCdXR0b25cbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogNjAwIH19XG4gICAgICAgICAgb25TZWFyY2g9e2hhbmRsZVNlYXJjaH1cbiAgICAgICAgLz5cbiAgICAgICAgPENhcmRDb250YWluZXIgZ3V0dGVyPXtbNCwgMjRdfT5cbiAgICAgICAgICB7IWxvYWRpbmdcbiAgICAgICAgICAgID8gbW92aWVzLm1hcCgobW92aWUsIGkpID0+IChcbiAgICAgICAgICAgICAgICA8Q29sXG4gICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICBzcGFuPXs4fVxuICAgICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8TW92aWVDYXJkIHRpdGxlPXttb3ZpZS5uYW1lfSBib3JkZXJlZD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAgICB7bW92aWUuaW1hZ2VVcmwgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPE1vdmllSW1hZ2UgdXJsPXttb3ZpZS5pbWFnZVVybH0gLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBpY3R1cmVcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvTW92aWVDYXJkPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgOiBza2VsZXRvbkxpc3QubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPENvbFxuICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgc3Bhbj17OH1cbiAgICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPE1vdmllQ2FyZCBib3JkZXJlZD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAgICA8U2tlbGV0b25cbiAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNHJlbTtcbiAgICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPE1ldGEgdGl0bGU9XCJDYXJkIHRpdGxlXCIgZGVzY3JpcHRpb249XCJUaGlzIGlzIHRoZSBkZXNjcmlwdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvU2tlbGV0b24+XG4gICAgICAgICAgICAgICAgICA8L01vdmllQ2FyZD5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvQ2FyZENvbnRhaW5lcj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref3 = false ? undefined : {
  name: "l1j73q-App",
  styles: "display:flex;justify-content:center;;label:App;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFuaXNzYXQvUmVwb3NpdG9yaWVzL25scGZyb250ZW5kL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZGZ0MiLCJmaWxlIjoiL1VzZXJzL2NoYW5pc3NhdC9SZXBvc2l0b3JpZXMvbmxwZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjc3MgZnJvbSBcIkBlbW90aW9uL2Nzc1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IElucHV0LCBDYXJkLCBDb2wsIFJvdywgU2tlbGV0b24sIEF2YXRhciB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCBcImFudGQvZGlzdC9hbnRkLmNzc1wiO1xuXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCB7IFNlYXJjaCB9ID0gSW5wdXQ7XG5cbmNvbnN0IHsgTWV0YSB9ID0gQ2FyZDtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlMGUwZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmctYm90dG9tOiA0cmVtO1xuYDtcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDRyZW0gMDtcbiAgZm9udC1zaXplOiAzcmVtO1xuYDtcblxuY29uc3QgQ2FyZENvbnRhaW5lciA9IHN0eWxlZChSb3cpYFxuICBtYXJnaW4tdG9wOiA0cmVtICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMTQ0MHB4O1xuYDtcblxuY29uc3QgTW92aWVDYXJkID0gc3R5bGVkKENhcmQpYFxuICB3aWR0aDogMjYwcHg7XG4gIGhlaWdodDogNDQwcHg7XG5gO1xuXG5jb25zdCBNb3ZpZUltYWdlID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6ICR7KHsgdXJsIH0pID0+IGB1cmwoJyR7dXJsfScpYH07XG4gIGhlaWdodDogMTAwJTtcbmA7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3QgW21vdmllcywgc2V0TW92aWVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHNrZWxldG9uTGlzdCA9IFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL21vdmllYCkudGhlbigoeyBkYXRhOiB7IG1vdmllcyB9IH0pID0+IHtcbiAgICAgIHNldE1vdmllcyhtb3ZpZXMpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSBhc3luYyAoc2VhcmNoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9tb3ZpZS90ZXh0P3F1ZXJ5PSR7c2VhcmNofWApLnRoZW4oKHsgZGF0YTogeyBtb3ZpZXMgfSB9KSA9PiB7XG4gICAgICBzZXRNb3ZpZXMobW92aWVzKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPHNjcmlwdCBzcmM9XCJwYXJ0aWNsZXMuanNcIj48L3NjcmlwdD5cbiAgICAgIDxDb250YWluZXIgaWQ9XCJwYXJ0aWNsZXMtanNcIj5cbiAgICAgICAgPFRpdGxlPuC4q+C4meC4seC4h+C4iuC4meC4sDwvVGl0bGU+XG4gICAgICAgIDxTZWFyY2hcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4hOC4s+C4luC4suC4oS4uLlwiXG4gICAgICAgICAgZW50ZXJCdXR0b25cbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogNjAwIH19XG4gICAgICAgICAgb25TZWFyY2g9e2hhbmRsZVNlYXJjaH1cbiAgICAgICAgLz5cbiAgICAgICAgPENhcmRDb250YWluZXIgZ3V0dGVyPXtbNCwgMjRdfT5cbiAgICAgICAgICB7IWxvYWRpbmdcbiAgICAgICAgICAgID8gbW92aWVzLm1hcCgobW92aWUsIGkpID0+IChcbiAgICAgICAgICAgICAgICA8Q29sXG4gICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICBzcGFuPXs4fVxuICAgICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8TW92aWVDYXJkIHRpdGxlPXttb3ZpZS5uYW1lfSBib3JkZXJlZD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAgICB7bW92aWUuaW1hZ2VVcmwgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPE1vdmllSW1hZ2UgdXJsPXttb3ZpZS5pbWFnZVVybH0gLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBpY3R1cmVcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvTW92aWVDYXJkPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgOiBza2VsZXRvbkxpc3QubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPENvbFxuICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgc3Bhbj17OH1cbiAgICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPE1vdmllQ2FyZCBib3JkZXJlZD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAgICA8U2tlbGV0b25cbiAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNHJlbTtcbiAgICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPE1ldGEgdGl0bGU9XCJDYXJkIHRpdGxlXCIgZGVzY3JpcHRpb249XCJUaGlzIGlzIHRoZSBkZXNjcmlwdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvU2tlbGV0b24+XG4gICAgICAgICAgICAgICAgICA8L01vdmllQ2FyZD5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvQ2FyZENvbnRhaW5lcj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref4 = false ? undefined : {
  name: "l1j73q-App",
  styles: "display:flex;justify-content:center;;label:App;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFuaXNzYXQvUmVwb3NpdG9yaWVzL25scGZyb250ZW5kL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1GMEIiLCJmaWxlIjoiL1VzZXJzL2NoYW5pc3NhdC9SZXBvc2l0b3JpZXMvbmxwZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjc3MgZnJvbSBcIkBlbW90aW9uL2Nzc1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IElucHV0LCBDYXJkLCBDb2wsIFJvdywgU2tlbGV0b24sIEF2YXRhciB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCBcImFudGQvZGlzdC9hbnRkLmNzc1wiO1xuXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCB7IFNlYXJjaCB9ID0gSW5wdXQ7XG5cbmNvbnN0IHsgTWV0YSB9ID0gQ2FyZDtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlMGUwZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmctYm90dG9tOiA0cmVtO1xuYDtcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDRyZW0gMDtcbiAgZm9udC1zaXplOiAzcmVtO1xuYDtcblxuY29uc3QgQ2FyZENvbnRhaW5lciA9IHN0eWxlZChSb3cpYFxuICBtYXJnaW4tdG9wOiA0cmVtICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMTQ0MHB4O1xuYDtcblxuY29uc3QgTW92aWVDYXJkID0gc3R5bGVkKENhcmQpYFxuICB3aWR0aDogMjYwcHg7XG4gIGhlaWdodDogNDQwcHg7XG5gO1xuXG5jb25zdCBNb3ZpZUltYWdlID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6ICR7KHsgdXJsIH0pID0+IGB1cmwoJyR7dXJsfScpYH07XG4gIGhlaWdodDogMTAwJTtcbmA7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3QgW21vdmllcywgc2V0TW92aWVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHNrZWxldG9uTGlzdCA9IFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL21vdmllYCkudGhlbigoeyBkYXRhOiB7IG1vdmllcyB9IH0pID0+IHtcbiAgICAgIHNldE1vdmllcyhtb3ZpZXMpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSBhc3luYyAoc2VhcmNoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9tb3ZpZS90ZXh0P3F1ZXJ5PSR7c2VhcmNofWApLnRoZW4oKHsgZGF0YTogeyBtb3ZpZXMgfSB9KSA9PiB7XG4gICAgICBzZXRNb3ZpZXMobW92aWVzKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPHNjcmlwdCBzcmM9XCJwYXJ0aWNsZXMuanNcIj48L3NjcmlwdD5cbiAgICAgIDxDb250YWluZXIgaWQ9XCJwYXJ0aWNsZXMtanNcIj5cbiAgICAgICAgPFRpdGxlPuC4q+C4meC4seC4h+C4iuC4meC4sDwvVGl0bGU+XG4gICAgICAgIDxTZWFyY2hcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4hOC4s+C4luC4suC4oS4uLlwiXG4gICAgICAgICAgZW50ZXJCdXR0b25cbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogNjAwIH19XG4gICAgICAgICAgb25TZWFyY2g9e2hhbmRsZVNlYXJjaH1cbiAgICAgICAgLz5cbiAgICAgICAgPENhcmRDb250YWluZXIgZ3V0dGVyPXtbNCwgMjRdfT5cbiAgICAgICAgICB7IWxvYWRpbmdcbiAgICAgICAgICAgID8gbW92aWVzLm1hcCgobW92aWUsIGkpID0+IChcbiAgICAgICAgICAgICAgICA8Q29sXG4gICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICBzcGFuPXs4fVxuICAgICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8TW92aWVDYXJkIHRpdGxlPXttb3ZpZS5uYW1lfSBib3JkZXJlZD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAgICB7bW92aWUuaW1hZ2VVcmwgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPE1vdmllSW1hZ2UgdXJsPXttb3ZpZS5pbWFnZVVybH0gLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBpY3R1cmVcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvTW92aWVDYXJkPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgOiBza2VsZXRvbkxpc3QubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPENvbFxuICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgc3Bhbj17OH1cbiAgICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPE1vdmllQ2FyZCBib3JkZXJlZD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAgICA8U2tlbGV0b25cbiAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNHJlbTtcbiAgICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPE1ldGEgdGl0bGU9XCJDYXJkIHRpdGxlXCIgZGVzY3JpcHRpb249XCJUaGlzIGlzIHRoZSBkZXNjcmlwdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvU2tlbGV0b24+XG4gICAgICAgICAgICAgICAgICA8L01vdmllQ2FyZD5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvQ2FyZENvbnRhaW5lcj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXX0= */",
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

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("script", {
    src: "particles.js",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(Container, {
    id: "particles-js",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, "\u0E2B\u0E19\u0E31\u0E07\u0E0A\u0E19\u0E30"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(Search, {
    placeholder: "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E04\u0E33\u0E16\u0E32\u0E21...",
    enterButton: true,
    style: {
      width: 600
    },
    onSearch: handleSearch,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(CardContainer, {
    gutter: [4, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, !loading ? movies.map(function (movie, i) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_StyledCol, {
      key: i,
      span: 8,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(MovieCard, {
      title: movie.name,
      bordered: false,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 19
      }
    }, movie.imageUrl ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(MovieImage, {
      url: movie.imageUrl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 23
      }
    }) : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_StyledDiv, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 23
      }
    }, "Picture")));
  }) : skeletonList.map(function (item, i) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_StyledCol2, {
      key: i,
      span: 8,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(MovieCard, {
      bordered: false,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 19
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_StyledSkeleton, {
      loading: loading,
      active: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 21
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(Meta, {
      title: "Card title",
      description: "This is the description",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 23
      }
    }))));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.56a59c93a9101ae20c13.hot-update.js.map