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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFuaXNzYXQvUmVwb3NpdG9yaWVzL25scGZyb250ZW5kL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFINEIiLCJmaWxlIjoiL1VzZXJzL2NoYW5pc3NhdC9SZXBvc2l0b3JpZXMvbmxwZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNzcyBmcm9tIFwiQGVtb3Rpb24vY3NzXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgSW5wdXQsIENhcmQsIENvbCwgUm93LCBTa2VsZXRvbiwgQXZhdGFyIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuaW1wb3J0IFwiYW50ZC9kaXN0L2FudGQuY3NzXCI7XG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IHsgU2VhcmNoIH0gPSBJbnB1dDtcblxuY29uc3QgeyBNZXRhIH0gPSBDYXJkO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUwZTBlO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZy1ib3R0b206IDRyZW07XG5gO1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogNHJlbSAwO1xuICBmb250LXNpemU6IDNyZW07XG5gO1xuXG5jb25zdCBDYXJkQ29udGFpbmVyID0gc3R5bGVkKFJvdylgXG4gIG1hcmdpbi10b3A6IDRyZW0gIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XG5gO1xuXG5jb25zdCBNb3ZpZUNhcmQgPSBzdHlsZWQoQ2FyZClgXG4gIHdpZHRoOiAyNjBweDtcbiAgaGVpZ2h0OiA0NDBweDtcbmA7XG5cbmNvbnN0IE1vdmllSW1hZ2UgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogJHsoeyB1cmwgfSkgPT4gYHVybCgnJHt1cmx9JylgfTtcbiAgaGVpZ2h0OiAxMDAlO1xuYDtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCBbbW92aWVzLCBzZXRNb3ZpZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3Qgc2tlbGV0b25MaXN0ID0gWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwODAvbW92aWVgKS50aGVuKCh7IGRhdGE6IHsgbW92aWVzIH0gfSkgPT4ge1xuICAgICAgc2V0TW92aWVzKG1vdmllcyk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jIChzZWFyY2gpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL21vdmllL3RleHQ/cXVlcnk9JHtzZWFyY2h9YCkudGhlbigoeyBkYXRhOiB7IG1vdmllcyB9IH0pID0+IHtcbiAgICAgIHNldE1vdmllcyhtb3ZpZXMpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGlkPVwicGFydGljbGVzLWpzXCI+XG4gICAgICA8c2NyaXB0IHNyYz1cInBhcnRpY2xlcy5qc1wiPjwvc2NyaXB0PlxuICAgICAgPGRpdj48L2Rpdj5cbiAgICAgIDxUaXRsZT7guKvguJnguLHguIfguIrguJnguLA8L1RpdGxlPlxuICAgICAgPFNlYXJjaFxuICAgICAgICBwbGFjZWhvbGRlcj1cIuC4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4hOC4s+C4luC4suC4oS4uLlwiXG4gICAgICAgIGVudGVyQnV0dG9uXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiA2MDAgfX1cbiAgICAgICAgb25TZWFyY2g9e2hhbmRsZVNlYXJjaH1cbiAgICAgIC8+XG4gICAgICA8Q2FyZENvbnRhaW5lciBndXR0ZXI9e1s0LCAyNF19PlxuICAgICAgICB7IWxvYWRpbmdcbiAgICAgICAgICA/IG1vdmllcy5tYXAoKG1vdmllLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxDb2xcbiAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgc3Bhbj17OH1cbiAgICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE1vdmllQ2FyZCB0aXRsZT17bW92aWUubmFtZX0gYm9yZGVyZWQ9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICAgIHttb3ZpZS5pbWFnZVVybCA/IChcbiAgICAgICAgICAgICAgICAgICAgPE1vdmllSW1hZ2UgdXJsPXttb3ZpZS5pbWFnZVVybH0gLz5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgUGljdHVyZVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9Nb3ZpZUNhcmQ+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICA6IHNrZWxldG9uTGlzdC5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgICAgPENvbFxuICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICBzcGFuPXs4fVxuICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TW92aWVDYXJkIGJvcmRlcmVkPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgICA8U2tlbGV0b25cbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlXG4gICAgICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRyZW07XG4gICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxNZXRhIHRpdGxlPVwiQ2FyZCB0aXRsZVwiIGRlc2NyaXB0aW9uPVwiVGhpcyBpcyB0aGUgZGVzY3JpcHRpb25cIiAvPlxuICAgICAgICAgICAgICAgICAgPC9Ta2VsZXRvbj5cbiAgICAgICAgICAgICAgICA8L01vdmllQ2FyZD5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICApKX1cbiAgICAgIDwvQ2FyZENvbnRhaW5lcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref2 = false ? undefined : {
  name: "l1j73q-App",
  styles: "display:flex;justify-content:center;;label:App;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFuaXNzYXQvUmVwb3NpdG9yaWVzL25scGZyb250ZW5kL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRHd0IiLCJmaWxlIjoiL1VzZXJzL2NoYW5pc3NhdC9SZXBvc2l0b3JpZXMvbmxwZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNzcyBmcm9tIFwiQGVtb3Rpb24vY3NzXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgSW5wdXQsIENhcmQsIENvbCwgUm93LCBTa2VsZXRvbiwgQXZhdGFyIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuaW1wb3J0IFwiYW50ZC9kaXN0L2FudGQuY3NzXCI7XG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IHsgU2VhcmNoIH0gPSBJbnB1dDtcblxuY29uc3QgeyBNZXRhIH0gPSBDYXJkO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUwZTBlO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZy1ib3R0b206IDRyZW07XG5gO1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogNHJlbSAwO1xuICBmb250LXNpemU6IDNyZW07XG5gO1xuXG5jb25zdCBDYXJkQ29udGFpbmVyID0gc3R5bGVkKFJvdylgXG4gIG1hcmdpbi10b3A6IDRyZW0gIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XG5gO1xuXG5jb25zdCBNb3ZpZUNhcmQgPSBzdHlsZWQoQ2FyZClgXG4gIHdpZHRoOiAyNjBweDtcbiAgaGVpZ2h0OiA0NDBweDtcbmA7XG5cbmNvbnN0IE1vdmllSW1hZ2UgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogJHsoeyB1cmwgfSkgPT4gYHVybCgnJHt1cmx9JylgfTtcbiAgaGVpZ2h0OiAxMDAlO1xuYDtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCBbbW92aWVzLCBzZXRNb3ZpZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3Qgc2tlbGV0b25MaXN0ID0gWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwODAvbW92aWVgKS50aGVuKCh7IGRhdGE6IHsgbW92aWVzIH0gfSkgPT4ge1xuICAgICAgc2V0TW92aWVzKG1vdmllcyk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jIChzZWFyY2gpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL21vdmllL3RleHQ/cXVlcnk9JHtzZWFyY2h9YCkudGhlbigoeyBkYXRhOiB7IG1vdmllcyB9IH0pID0+IHtcbiAgICAgIHNldE1vdmllcyhtb3ZpZXMpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGlkPVwicGFydGljbGVzLWpzXCI+XG4gICAgICA8c2NyaXB0IHNyYz1cInBhcnRpY2xlcy5qc1wiPjwvc2NyaXB0PlxuICAgICAgPGRpdj48L2Rpdj5cbiAgICAgIDxUaXRsZT7guKvguJnguLHguIfguIrguJnguLA8L1RpdGxlPlxuICAgICAgPFNlYXJjaFxuICAgICAgICBwbGFjZWhvbGRlcj1cIuC4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4hOC4s+C4luC4suC4oS4uLlwiXG4gICAgICAgIGVudGVyQnV0dG9uXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiA2MDAgfX1cbiAgICAgICAgb25TZWFyY2g9e2hhbmRsZVNlYXJjaH1cbiAgICAgIC8+XG4gICAgICA8Q2FyZENvbnRhaW5lciBndXR0ZXI9e1s0LCAyNF19PlxuICAgICAgICB7IWxvYWRpbmdcbiAgICAgICAgICA/IG1vdmllcy5tYXAoKG1vdmllLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxDb2xcbiAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgc3Bhbj17OH1cbiAgICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE1vdmllQ2FyZCB0aXRsZT17bW92aWUubmFtZX0gYm9yZGVyZWQ9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICAgIHttb3ZpZS5pbWFnZVVybCA/IChcbiAgICAgICAgICAgICAgICAgICAgPE1vdmllSW1hZ2UgdXJsPXttb3ZpZS5pbWFnZVVybH0gLz5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgUGljdHVyZVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9Nb3ZpZUNhcmQ+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICA6IHNrZWxldG9uTGlzdC5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgICAgPENvbFxuICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICBzcGFuPXs4fVxuICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TW92aWVDYXJkIGJvcmRlcmVkPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgICA8U2tlbGV0b25cbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlXG4gICAgICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRyZW07XG4gICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxNZXRhIHRpdGxlPVwiQ2FyZCB0aXRsZVwiIGRlc2NyaXB0aW9uPVwiVGhpcyBpcyB0aGUgZGVzY3JpcHRpb25cIiAvPlxuICAgICAgICAgICAgICAgICAgPC9Ta2VsZXRvbj5cbiAgICAgICAgICAgICAgICA8L01vdmllQ2FyZD5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICApKX1cbiAgICAgIDwvQ2FyZENvbnRhaW5lcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref3 = false ? undefined : {
  name: "l1j73q-App",
  styles: "display:flex;justify-content:center;;label:App;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFuaXNzYXQvUmVwb3NpdG9yaWVzL25scGZyb250ZW5kL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZGOEIiLCJmaWxlIjoiL1VzZXJzL2NoYW5pc3NhdC9SZXBvc2l0b3JpZXMvbmxwZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNzcyBmcm9tIFwiQGVtb3Rpb24vY3NzXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgSW5wdXQsIENhcmQsIENvbCwgUm93LCBTa2VsZXRvbiwgQXZhdGFyIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuaW1wb3J0IFwiYW50ZC9kaXN0L2FudGQuY3NzXCI7XG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IHsgU2VhcmNoIH0gPSBJbnB1dDtcblxuY29uc3QgeyBNZXRhIH0gPSBDYXJkO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUwZTBlO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZy1ib3R0b206IDRyZW07XG5gO1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogNHJlbSAwO1xuICBmb250LXNpemU6IDNyZW07XG5gO1xuXG5jb25zdCBDYXJkQ29udGFpbmVyID0gc3R5bGVkKFJvdylgXG4gIG1hcmdpbi10b3A6IDRyZW0gIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XG5gO1xuXG5jb25zdCBNb3ZpZUNhcmQgPSBzdHlsZWQoQ2FyZClgXG4gIHdpZHRoOiAyNjBweDtcbiAgaGVpZ2h0OiA0NDBweDtcbmA7XG5cbmNvbnN0IE1vdmllSW1hZ2UgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogJHsoeyB1cmwgfSkgPT4gYHVybCgnJHt1cmx9JylgfTtcbiAgaGVpZ2h0OiAxMDAlO1xuYDtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCBbbW92aWVzLCBzZXRNb3ZpZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3Qgc2tlbGV0b25MaXN0ID0gWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwODAvbW92aWVgKS50aGVuKCh7IGRhdGE6IHsgbW92aWVzIH0gfSkgPT4ge1xuICAgICAgc2V0TW92aWVzKG1vdmllcyk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jIChzZWFyY2gpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL21vdmllL3RleHQ/cXVlcnk9JHtzZWFyY2h9YCkudGhlbigoeyBkYXRhOiB7IG1vdmllcyB9IH0pID0+IHtcbiAgICAgIHNldE1vdmllcyhtb3ZpZXMpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGlkPVwicGFydGljbGVzLWpzXCI+XG4gICAgICA8c2NyaXB0IHNyYz1cInBhcnRpY2xlcy5qc1wiPjwvc2NyaXB0PlxuICAgICAgPGRpdj48L2Rpdj5cbiAgICAgIDxUaXRsZT7guKvguJnguLHguIfguIrguJnguLA8L1RpdGxlPlxuICAgICAgPFNlYXJjaFxuICAgICAgICBwbGFjZWhvbGRlcj1cIuC4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4hOC4s+C4luC4suC4oS4uLlwiXG4gICAgICAgIGVudGVyQnV0dG9uXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiA2MDAgfX1cbiAgICAgICAgb25TZWFyY2g9e2hhbmRsZVNlYXJjaH1cbiAgICAgIC8+XG4gICAgICA8Q2FyZENvbnRhaW5lciBndXR0ZXI9e1s0LCAyNF19PlxuICAgICAgICB7IWxvYWRpbmdcbiAgICAgICAgICA/IG1vdmllcy5tYXAoKG1vdmllLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxDb2xcbiAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgc3Bhbj17OH1cbiAgICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE1vdmllQ2FyZCB0aXRsZT17bW92aWUubmFtZX0gYm9yZGVyZWQ9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICAgIHttb3ZpZS5pbWFnZVVybCA/IChcbiAgICAgICAgICAgICAgICAgICAgPE1vdmllSW1hZ2UgdXJsPXttb3ZpZS5pbWFnZVVybH0gLz5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgUGljdHVyZVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9Nb3ZpZUNhcmQ+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICA6IHNrZWxldG9uTGlzdC5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgICAgPENvbFxuICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICBzcGFuPXs4fVxuICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TW92aWVDYXJkIGJvcmRlcmVkPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgICA8U2tlbGV0b25cbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlXG4gICAgICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRyZW07XG4gICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxNZXRhIHRpdGxlPVwiQ2FyZCB0aXRsZVwiIGRlc2NyaXB0aW9uPVwiVGhpcyBpcyB0aGUgZGVzY3JpcHRpb25cIiAvPlxuICAgICAgICAgICAgICAgICAgPC9Ta2VsZXRvbj5cbiAgICAgICAgICAgICAgICA8L01vdmllQ2FyZD5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICApKX1cbiAgICAgIDwvQ2FyZENvbnRhaW5lcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref4 = false ? undefined : {
  name: "l1j73q-App",
  styles: "display:flex;justify-content:center;;label:App;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFuaXNzYXQvUmVwb3NpdG9yaWVzL25scGZyb250ZW5kL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Gd0IiLCJmaWxlIjoiL1VzZXJzL2NoYW5pc3NhdC9SZXBvc2l0b3JpZXMvbmxwZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNzcyBmcm9tIFwiQGVtb3Rpb24vY3NzXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgSW5wdXQsIENhcmQsIENvbCwgUm93LCBTa2VsZXRvbiwgQXZhdGFyIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuaW1wb3J0IFwiYW50ZC9kaXN0L2FudGQuY3NzXCI7XG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IHsgU2VhcmNoIH0gPSBJbnB1dDtcblxuY29uc3QgeyBNZXRhIH0gPSBDYXJkO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUwZTBlO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZy1ib3R0b206IDRyZW07XG5gO1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogNHJlbSAwO1xuICBmb250LXNpemU6IDNyZW07XG5gO1xuXG5jb25zdCBDYXJkQ29udGFpbmVyID0gc3R5bGVkKFJvdylgXG4gIG1hcmdpbi10b3A6IDRyZW0gIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XG5gO1xuXG5jb25zdCBNb3ZpZUNhcmQgPSBzdHlsZWQoQ2FyZClgXG4gIHdpZHRoOiAyNjBweDtcbiAgaGVpZ2h0OiA0NDBweDtcbmA7XG5cbmNvbnN0IE1vdmllSW1hZ2UgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogJHsoeyB1cmwgfSkgPT4gYHVybCgnJHt1cmx9JylgfTtcbiAgaGVpZ2h0OiAxMDAlO1xuYDtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCBbbW92aWVzLCBzZXRNb3ZpZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3Qgc2tlbGV0b25MaXN0ID0gWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwODAvbW92aWVgKS50aGVuKCh7IGRhdGE6IHsgbW92aWVzIH0gfSkgPT4ge1xuICAgICAgc2V0TW92aWVzKG1vdmllcyk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jIChzZWFyY2gpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL21vdmllL3RleHQ/cXVlcnk9JHtzZWFyY2h9YCkudGhlbigoeyBkYXRhOiB7IG1vdmllcyB9IH0pID0+IHtcbiAgICAgIHNldE1vdmllcyhtb3ZpZXMpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGlkPVwicGFydGljbGVzLWpzXCI+XG4gICAgICA8c2NyaXB0IHNyYz1cInBhcnRpY2xlcy5qc1wiPjwvc2NyaXB0PlxuICAgICAgPGRpdj48L2Rpdj5cbiAgICAgIDxUaXRsZT7guKvguJnguLHguIfguIrguJnguLA8L1RpdGxlPlxuICAgICAgPFNlYXJjaFxuICAgICAgICBwbGFjZWhvbGRlcj1cIuC4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4hOC4s+C4luC4suC4oS4uLlwiXG4gICAgICAgIGVudGVyQnV0dG9uXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiA2MDAgfX1cbiAgICAgICAgb25TZWFyY2g9e2hhbmRsZVNlYXJjaH1cbiAgICAgIC8+XG4gICAgICA8Q2FyZENvbnRhaW5lciBndXR0ZXI9e1s0LCAyNF19PlxuICAgICAgICB7IWxvYWRpbmdcbiAgICAgICAgICA/IG1vdmllcy5tYXAoKG1vdmllLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxDb2xcbiAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgc3Bhbj17OH1cbiAgICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE1vdmllQ2FyZCB0aXRsZT17bW92aWUubmFtZX0gYm9yZGVyZWQ9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICAgIHttb3ZpZS5pbWFnZVVybCA/IChcbiAgICAgICAgICAgICAgICAgICAgPE1vdmllSW1hZ2UgdXJsPXttb3ZpZS5pbWFnZVVybH0gLz5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgUGljdHVyZVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9Nb3ZpZUNhcmQ+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICA6IHNrZWxldG9uTGlzdC5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgICAgPENvbFxuICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICBzcGFuPXs4fVxuICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TW92aWVDYXJkIGJvcmRlcmVkPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgICA8U2tlbGV0b25cbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlXG4gICAgICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRyZW07XG4gICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxNZXRhIHRpdGxlPVwiQ2FyZCB0aXRsZVwiIGRlc2NyaXB0aW9uPVwiVGhpcyBpcyB0aGUgZGVzY3JpcHRpb25cIiAvPlxuICAgICAgICAgICAgICAgICAgPC9Ta2VsZXRvbj5cbiAgICAgICAgICAgICAgICA8L01vdmllQ2FyZD5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICApKX1cbiAgICAgIDwvQ2FyZENvbnRhaW5lcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdfQ== */",
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

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(Container, {
    id: "particles-js",
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
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
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
      columnNumber: 7
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(CardContainer, {
    gutter: [4, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, !loading ? movies.map(function (movie, i) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_StyledCol, {
      key: i,
      span: 8,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 15
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(MovieCard, {
      title: movie.name,
      bordered: false,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }
    }, movie.imageUrl ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(MovieImage, {
      url: movie.imageUrl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 21
      }
    }) : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_StyledDiv, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 21
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
        columnNumber: 15
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(MovieCard, {
      bordered: false,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 17
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_StyledSkeleton, {
      loading: loading,
      active: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 19
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(Meta, {
      title: "Card title",
      description: "This is the description",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 21
      }
    }))));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.0111a6a39f72f1127ca7.hot-update.js.map