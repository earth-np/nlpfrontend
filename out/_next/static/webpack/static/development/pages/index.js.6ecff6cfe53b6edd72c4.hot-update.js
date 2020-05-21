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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFuaXNzYXQvUmVwb3NpdG9yaWVzL25scGZyb250ZW5kL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9INEIiLCJmaWxlIjoiL1VzZXJzL2NoYW5pc3NhdC9SZXBvc2l0b3JpZXMvbmxwZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNzcyBmcm9tIFwiQGVtb3Rpb24vY3NzXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgSW5wdXQsIENhcmQsIENvbCwgUm93LCBTa2VsZXRvbiwgQXZhdGFyIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuaW1wb3J0IFwiYW50ZC9kaXN0L2FudGQuY3NzXCI7XG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IHsgU2VhcmNoIH0gPSBJbnB1dDtcblxuY29uc3QgeyBNZXRhIH0gPSBDYXJkO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUwZTBlO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZy1ib3R0b206IDRyZW07XG5gO1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogNHJlbSAwO1xuICBmb250LXNpemU6IDNyZW07XG5gO1xuXG5jb25zdCBDYXJkQ29udGFpbmVyID0gc3R5bGVkKFJvdylgXG4gIG1hcmdpbi10b3A6IDRyZW0gIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XG5gO1xuXG5jb25zdCBNb3ZpZUNhcmQgPSBzdHlsZWQoQ2FyZClgXG4gIHdpZHRoOiAyNjBweDtcbiAgaGVpZ2h0OiA0NDBweDtcbmA7XG5cbmNvbnN0IE1vdmllSW1hZ2UgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogJHsoeyB1cmwgfSkgPT4gYHVybCgnJHt1cmx9JylgfTtcbiAgaGVpZ2h0OiAxMDAlO1xuYDtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCBbbW92aWVzLCBzZXRNb3ZpZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3Qgc2tlbGV0b25MaXN0ID0gWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwODAvbW92aWVgKS50aGVuKCh7IGRhdGE6IHsgbW92aWVzIH0gfSkgPT4ge1xuICAgICAgc2V0TW92aWVzKG1vdmllcyk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jIChzZWFyY2gpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL21vdmllL3RleHQ/cXVlcnk9JHtzZWFyY2h9YCkudGhlbigoeyBkYXRhOiB7IG1vdmllcyB9IH0pID0+IHtcbiAgICAgIHNldE1vdmllcyhtb3ZpZXMpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGlkPVwicGFydGljbGVzLWpzXCI+XG4gICAgICA8c2NyaXB0IHNyYz1cInBhcnRpY2xlcy5qc1wiPjwvc2NyaXB0PlxuICAgICAgPFRpdGxlPuC4q+C4meC4seC4h+C4iuC4meC4sDwvVGl0bGU+XG4gICAgICA8U2VhcmNoXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiE4Liz4LiW4Liy4LihLi4uXCJcbiAgICAgICAgZW50ZXJCdXR0b25cbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDYwMCB9fVxuICAgICAgICBvblNlYXJjaD17aGFuZGxlU2VhcmNofVxuICAgICAgLz5cbiAgICAgIDxDYXJkQ29udGFpbmVyIGd1dHRlcj17WzQsIDI0XX0+XG4gICAgICAgIHshbG9hZGluZ1xuICAgICAgICAgID8gbW92aWVzLm1hcCgobW92aWUsIGkpID0+IChcbiAgICAgICAgICAgICAgPENvbFxuICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICBzcGFuPXs4fVxuICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TW92aWVDYXJkIHRpdGxlPXttb3ZpZS5uYW1lfSBib3JkZXJlZD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAge21vdmllLmltYWdlVXJsID8gKFxuICAgICAgICAgICAgICAgICAgICA8TW92aWVJbWFnZSB1cmw9e21vdmllLmltYWdlVXJsfSAvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBQaWN0dXJlXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L01vdmllQ2FyZD5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIDogc2tlbGV0b25MaXN0Lm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8Q29sXG4gICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgIHNwYW49ezh9XG4gICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxNb3ZpZUNhcmQgYm9yZGVyZWQ9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICAgIDxTa2VsZXRvblxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNHJlbTtcbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPE1ldGEgdGl0bGU9XCJDYXJkIHRpdGxlXCIgZGVzY3JpcHRpb249XCJUaGlzIGlzIHRoZSBkZXNjcmlwdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICA8L1NrZWxldG9uPlxuICAgICAgICAgICAgICAgIDwvTW92aWVDYXJkPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICkpfVxuICAgICAgPC9DYXJkQ29udGFpbmVyPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref2 = false ? undefined : {
  name: "l1j73q-App",
  styles: "display:flex;justify-content:center;;label:App;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFuaXNzYXQvUmVwb3NpdG9yaWVzL25scGZyb250ZW5kL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJHd0IiLCJmaWxlIjoiL1VzZXJzL2NoYW5pc3NhdC9SZXBvc2l0b3JpZXMvbmxwZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNzcyBmcm9tIFwiQGVtb3Rpb24vY3NzXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgSW5wdXQsIENhcmQsIENvbCwgUm93LCBTa2VsZXRvbiwgQXZhdGFyIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuaW1wb3J0IFwiYW50ZC9kaXN0L2FudGQuY3NzXCI7XG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IHsgU2VhcmNoIH0gPSBJbnB1dDtcblxuY29uc3QgeyBNZXRhIH0gPSBDYXJkO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUwZTBlO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZy1ib3R0b206IDRyZW07XG5gO1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogNHJlbSAwO1xuICBmb250LXNpemU6IDNyZW07XG5gO1xuXG5jb25zdCBDYXJkQ29udGFpbmVyID0gc3R5bGVkKFJvdylgXG4gIG1hcmdpbi10b3A6IDRyZW0gIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XG5gO1xuXG5jb25zdCBNb3ZpZUNhcmQgPSBzdHlsZWQoQ2FyZClgXG4gIHdpZHRoOiAyNjBweDtcbiAgaGVpZ2h0OiA0NDBweDtcbmA7XG5cbmNvbnN0IE1vdmllSW1hZ2UgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogJHsoeyB1cmwgfSkgPT4gYHVybCgnJHt1cmx9JylgfTtcbiAgaGVpZ2h0OiAxMDAlO1xuYDtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCBbbW92aWVzLCBzZXRNb3ZpZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3Qgc2tlbGV0b25MaXN0ID0gWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwODAvbW92aWVgKS50aGVuKCh7IGRhdGE6IHsgbW92aWVzIH0gfSkgPT4ge1xuICAgICAgc2V0TW92aWVzKG1vdmllcyk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jIChzZWFyY2gpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL21vdmllL3RleHQ/cXVlcnk9JHtzZWFyY2h9YCkudGhlbigoeyBkYXRhOiB7IG1vdmllcyB9IH0pID0+IHtcbiAgICAgIHNldE1vdmllcyhtb3ZpZXMpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGlkPVwicGFydGljbGVzLWpzXCI+XG4gICAgICA8c2NyaXB0IHNyYz1cInBhcnRpY2xlcy5qc1wiPjwvc2NyaXB0PlxuICAgICAgPFRpdGxlPuC4q+C4meC4seC4h+C4iuC4meC4sDwvVGl0bGU+XG4gICAgICA8U2VhcmNoXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiE4Liz4LiW4Liy4LihLi4uXCJcbiAgICAgICAgZW50ZXJCdXR0b25cbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDYwMCB9fVxuICAgICAgICBvblNlYXJjaD17aGFuZGxlU2VhcmNofVxuICAgICAgLz5cbiAgICAgIDxDYXJkQ29udGFpbmVyIGd1dHRlcj17WzQsIDI0XX0+XG4gICAgICAgIHshbG9hZGluZ1xuICAgICAgICAgID8gbW92aWVzLm1hcCgobW92aWUsIGkpID0+IChcbiAgICAgICAgICAgICAgPENvbFxuICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICBzcGFuPXs4fVxuICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TW92aWVDYXJkIHRpdGxlPXttb3ZpZS5uYW1lfSBib3JkZXJlZD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAge21vdmllLmltYWdlVXJsID8gKFxuICAgICAgICAgICAgICAgICAgICA8TW92aWVJbWFnZSB1cmw9e21vdmllLmltYWdlVXJsfSAvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBQaWN0dXJlXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L01vdmllQ2FyZD5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIDogc2tlbGV0b25MaXN0Lm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8Q29sXG4gICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgIHNwYW49ezh9XG4gICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxNb3ZpZUNhcmQgYm9yZGVyZWQ9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICAgIDxTa2VsZXRvblxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNHJlbTtcbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPE1ldGEgdGl0bGU9XCJDYXJkIHRpdGxlXCIgZGVzY3JpcHRpb249XCJUaGlzIGlzIHRoZSBkZXNjcmlwdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICA8L1NrZWxldG9uPlxuICAgICAgICAgICAgICAgIDwvTW92aWVDYXJkPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICkpfVxuICAgICAgPC9DYXJkQ29udGFpbmVyPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref3 = false ? undefined : {
  name: "l1j73q-App",
  styles: "display:flex;justify-content:center;;label:App;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFuaXNzYXQvUmVwb3NpdG9yaWVzL25scGZyb250ZW5kL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRGOEIiLCJmaWxlIjoiL1VzZXJzL2NoYW5pc3NhdC9SZXBvc2l0b3JpZXMvbmxwZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNzcyBmcm9tIFwiQGVtb3Rpb24vY3NzXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgSW5wdXQsIENhcmQsIENvbCwgUm93LCBTa2VsZXRvbiwgQXZhdGFyIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuaW1wb3J0IFwiYW50ZC9kaXN0L2FudGQuY3NzXCI7XG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IHsgU2VhcmNoIH0gPSBJbnB1dDtcblxuY29uc3QgeyBNZXRhIH0gPSBDYXJkO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUwZTBlO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZy1ib3R0b206IDRyZW07XG5gO1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogNHJlbSAwO1xuICBmb250LXNpemU6IDNyZW07XG5gO1xuXG5jb25zdCBDYXJkQ29udGFpbmVyID0gc3R5bGVkKFJvdylgXG4gIG1hcmdpbi10b3A6IDRyZW0gIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XG5gO1xuXG5jb25zdCBNb3ZpZUNhcmQgPSBzdHlsZWQoQ2FyZClgXG4gIHdpZHRoOiAyNjBweDtcbiAgaGVpZ2h0OiA0NDBweDtcbmA7XG5cbmNvbnN0IE1vdmllSW1hZ2UgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogJHsoeyB1cmwgfSkgPT4gYHVybCgnJHt1cmx9JylgfTtcbiAgaGVpZ2h0OiAxMDAlO1xuYDtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCBbbW92aWVzLCBzZXRNb3ZpZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3Qgc2tlbGV0b25MaXN0ID0gWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwODAvbW92aWVgKS50aGVuKCh7IGRhdGE6IHsgbW92aWVzIH0gfSkgPT4ge1xuICAgICAgc2V0TW92aWVzKG1vdmllcyk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jIChzZWFyY2gpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL21vdmllL3RleHQ/cXVlcnk9JHtzZWFyY2h9YCkudGhlbigoeyBkYXRhOiB7IG1vdmllcyB9IH0pID0+IHtcbiAgICAgIHNldE1vdmllcyhtb3ZpZXMpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGlkPVwicGFydGljbGVzLWpzXCI+XG4gICAgICA8c2NyaXB0IHNyYz1cInBhcnRpY2xlcy5qc1wiPjwvc2NyaXB0PlxuICAgICAgPFRpdGxlPuC4q+C4meC4seC4h+C4iuC4meC4sDwvVGl0bGU+XG4gICAgICA8U2VhcmNoXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiE4Liz4LiW4Liy4LihLi4uXCJcbiAgICAgICAgZW50ZXJCdXR0b25cbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDYwMCB9fVxuICAgICAgICBvblNlYXJjaD17aGFuZGxlU2VhcmNofVxuICAgICAgLz5cbiAgICAgIDxDYXJkQ29udGFpbmVyIGd1dHRlcj17WzQsIDI0XX0+XG4gICAgICAgIHshbG9hZGluZ1xuICAgICAgICAgID8gbW92aWVzLm1hcCgobW92aWUsIGkpID0+IChcbiAgICAgICAgICAgICAgPENvbFxuICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICBzcGFuPXs4fVxuICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TW92aWVDYXJkIHRpdGxlPXttb3ZpZS5uYW1lfSBib3JkZXJlZD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAge21vdmllLmltYWdlVXJsID8gKFxuICAgICAgICAgICAgICAgICAgICA8TW92aWVJbWFnZSB1cmw9e21vdmllLmltYWdlVXJsfSAvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBQaWN0dXJlXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L01vdmllQ2FyZD5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIDogc2tlbGV0b25MaXN0Lm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8Q29sXG4gICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgIHNwYW49ezh9XG4gICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxNb3ZpZUNhcmQgYm9yZGVyZWQ9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICAgIDxTa2VsZXRvblxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNHJlbTtcbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPE1ldGEgdGl0bGU9XCJDYXJkIHRpdGxlXCIgZGVzY3JpcHRpb249XCJUaGlzIGlzIHRoZSBkZXNjcmlwdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICA8L1NrZWxldG9uPlxuICAgICAgICAgICAgICAgIDwvTW92aWVDYXJkPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICkpfVxuICAgICAgPC9DYXJkQ29udGFpbmVyPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref4 = false ? undefined : {
  name: "l1j73q-App",
  styles: "display:flex;justify-content:center;;label:App;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFuaXNzYXQvUmVwb3NpdG9yaWVzL25scGZyb250ZW5kL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtGd0IiLCJmaWxlIjoiL1VzZXJzL2NoYW5pc3NhdC9SZXBvc2l0b3JpZXMvbmxwZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNzcyBmcm9tIFwiQGVtb3Rpb24vY3NzXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgSW5wdXQsIENhcmQsIENvbCwgUm93LCBTa2VsZXRvbiwgQXZhdGFyIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuaW1wb3J0IFwiYW50ZC9kaXN0L2FudGQuY3NzXCI7XG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IHsgU2VhcmNoIH0gPSBJbnB1dDtcblxuY29uc3QgeyBNZXRhIH0gPSBDYXJkO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUwZTBlO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZy1ib3R0b206IDRyZW07XG5gO1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogNHJlbSAwO1xuICBmb250LXNpemU6IDNyZW07XG5gO1xuXG5jb25zdCBDYXJkQ29udGFpbmVyID0gc3R5bGVkKFJvdylgXG4gIG1hcmdpbi10b3A6IDRyZW0gIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XG5gO1xuXG5jb25zdCBNb3ZpZUNhcmQgPSBzdHlsZWQoQ2FyZClgXG4gIHdpZHRoOiAyNjBweDtcbiAgaGVpZ2h0OiA0NDBweDtcbmA7XG5cbmNvbnN0IE1vdmllSW1hZ2UgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogJHsoeyB1cmwgfSkgPT4gYHVybCgnJHt1cmx9JylgfTtcbiAgaGVpZ2h0OiAxMDAlO1xuYDtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCBbbW92aWVzLCBzZXRNb3ZpZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3Qgc2tlbGV0b25MaXN0ID0gWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwODAvbW92aWVgKS50aGVuKCh7IGRhdGE6IHsgbW92aWVzIH0gfSkgPT4ge1xuICAgICAgc2V0TW92aWVzKG1vdmllcyk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jIChzZWFyY2gpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL21vdmllL3RleHQ/cXVlcnk9JHtzZWFyY2h9YCkudGhlbigoeyBkYXRhOiB7IG1vdmllcyB9IH0pID0+IHtcbiAgICAgIHNldE1vdmllcyhtb3ZpZXMpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGlkPVwicGFydGljbGVzLWpzXCI+XG4gICAgICA8c2NyaXB0IHNyYz1cInBhcnRpY2xlcy5qc1wiPjwvc2NyaXB0PlxuICAgICAgPFRpdGxlPuC4q+C4meC4seC4h+C4iuC4meC4sDwvVGl0bGU+XG4gICAgICA8U2VhcmNoXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiE4Liz4LiW4Liy4LihLi4uXCJcbiAgICAgICAgZW50ZXJCdXR0b25cbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDYwMCB9fVxuICAgICAgICBvblNlYXJjaD17aGFuZGxlU2VhcmNofVxuICAgICAgLz5cbiAgICAgIDxDYXJkQ29udGFpbmVyIGd1dHRlcj17WzQsIDI0XX0+XG4gICAgICAgIHshbG9hZGluZ1xuICAgICAgICAgID8gbW92aWVzLm1hcCgobW92aWUsIGkpID0+IChcbiAgICAgICAgICAgICAgPENvbFxuICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICBzcGFuPXs4fVxuICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TW92aWVDYXJkIHRpdGxlPXttb3ZpZS5uYW1lfSBib3JkZXJlZD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAge21vdmllLmltYWdlVXJsID8gKFxuICAgICAgICAgICAgICAgICAgICA8TW92aWVJbWFnZSB1cmw9e21vdmllLmltYWdlVXJsfSAvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBQaWN0dXJlXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L01vdmllQ2FyZD5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIDogc2tlbGV0b25MaXN0Lm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8Q29sXG4gICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgIHNwYW49ezh9XG4gICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxNb3ZpZUNhcmQgYm9yZGVyZWQ9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICAgIDxTa2VsZXRvblxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNHJlbTtcbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPE1ldGEgdGl0bGU9XCJDYXJkIHRpdGxlXCIgZGVzY3JpcHRpb249XCJUaGlzIGlzIHRoZSBkZXNjcmlwdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICA8L1NrZWxldG9uPlxuICAgICAgICAgICAgICAgIDwvTW92aWVDYXJkPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICkpfVxuICAgICAgPC9DYXJkQ29udGFpbmVyPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl19 */",
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
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
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
      lineNumber: 71,
      columnNumber: 7
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(CardContainer, {
    gutter: [4, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, !loading ? movies.map(function (movie, i) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_StyledCol, {
      key: i,
      span: 8,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 15
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(MovieCard, {
      title: movie.name,
      bordered: false,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }
    }, movie.imageUrl ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(MovieImage, {
      url: movie.imageUrl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 21
      }
    }) : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_StyledDiv, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
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
        lineNumber: 105,
        columnNumber: 15
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(MovieCard, {
      bordered: false,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_StyledSkeleton, {
      loading: loading,
      active: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 19
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(Meta, {
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
//# sourceMappingURL=index.js.6ecff6cfe53b6edd72c4.hot-update.js.map