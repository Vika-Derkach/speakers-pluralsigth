(function() {
var exports = {};
exports.id = "pages/api/speakers";
exports.ids = ["pages/api/speakers"];
exports.modules = {

/***/ "./pages/api/speakers/index.js":
/*!*************************************!*\
  !*** ./pages/api/speakers/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);



const {
  promisify
} = __webpack_require__(/*! util */ "util");

const readFile = promisify((fs__WEBPACK_IMPORTED_MODULE_1___default().readFile));

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function handler(req, res) {
  const jsonFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve('./', 'db.json');

  try {
    const readFileData = await readFile(jsonFile);
    await delay(1000);
    const speakers = JSON.parse(readFileData).speakers;
    if (!speakers) res.status(404).send('Error: Request failed with status code 404'); //res.status(200).json(speakers); keeps json minified but harder to read

    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(speakers, null, 2));
    console.log(`GET /api/speakers status: 200`);
  } catch (e) {
    console.log('/api/speakers error:', e);
  }
}

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("util");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/speakers/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9wYWdlcy9hcGkvc3BlYWtlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0L2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0L2V4dGVybmFsIFwidXRpbFwiIl0sIm5hbWVzIjpbInByb21pc2lmeSIsInJlcXVpcmUiLCJyZWFkRmlsZSIsImZzIiwiZGVsYXkiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJqc29uRmlsZSIsInBhdGgiLCJyZWFkRmlsZURhdGEiLCJzcGVha2VycyIsIkpTT04iLCJwYXJzZSIsInN0YXR1cyIsInNlbmQiLCJzZXRIZWFkZXIiLCJzdHJpbmdpZnkiLCJjb25zb2xlIiwibG9nIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNO0FBQUVBO0FBQUYsSUFBZ0JDLG1CQUFPLENBQUMsa0JBQUQsQ0FBN0I7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHRixTQUFTLENBQUNHLG9EQUFELENBQTFCOztBQUNBLE1BQU1DLEtBQUssR0FBSUMsRUFBRCxJQUFRLElBQUlDLE9BQUosQ0FBYUMsT0FBRCxJQUFhQyxVQUFVLENBQUNELE9BQUQsRUFBVUYsRUFBVixDQUFuQyxDQUF0Qjs7QUFFZSxlQUFlSSxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDOUMsUUFBTUMsUUFBUSxHQUFHQyxtREFBQSxDQUFhLElBQWIsRUFBbUIsU0FBbkIsQ0FBakI7O0FBQ0EsTUFBSTtBQUNGLFVBQU1DLFlBQVksR0FBRyxNQUFNWixRQUFRLENBQUNVLFFBQUQsQ0FBbkM7QUFDQSxVQUFNUixLQUFLLENBQUMsSUFBRCxDQUFYO0FBQ0EsVUFBTVcsUUFBUSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsWUFBWCxFQUF5QkMsUUFBMUM7QUFDQSxRQUFJLENBQUNBLFFBQUwsRUFDRUosR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIsNENBQXJCLEVBTEEsQ0FNRjs7QUFDQVIsT0FBRyxDQUFDUyxTQUFKLENBQWMsY0FBZCxFQUE4QixrQkFBOUI7QUFDQVQsT0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJILElBQUksQ0FBQ0ssU0FBTCxDQUFlTixRQUFmLEVBQXlCLElBQXpCLEVBQStCLENBQS9CLENBQXJCO0FBQ0FPLFdBQU8sQ0FBQ0MsR0FBUixDQUFhLCtCQUFiO0FBQ0QsR0FWRCxDQVVFLE9BQU9DLENBQVAsRUFBVTtBQUNWRixXQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWixFQUFvQ0MsQ0FBcEM7QUFDRDtBQUNGLEM7Ozs7Ozs7Ozs7O0FDdEJELGdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL2FwaS9zcGVha2Vycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xyXG5cclxuY29uc3QgeyBwcm9taXNpZnkgfSA9IHJlcXVpcmUoJ3V0aWwnKTtcclxuY29uc3QgcmVhZEZpbGUgPSBwcm9taXNpZnkoZnMucmVhZEZpbGUpO1xyXG5jb25zdCBkZWxheSA9IChtcykgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBjb25zdCBqc29uRmlsZSA9IHBhdGgucmVzb2x2ZSgnLi8nLCAnZGIuanNvbicpO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZWFkRmlsZURhdGEgPSBhd2FpdCByZWFkRmlsZShqc29uRmlsZSk7XHJcbiAgICBhd2FpdCBkZWxheSgxMDAwKTtcclxuICAgIGNvbnN0IHNwZWFrZXJzID0gSlNPTi5wYXJzZShyZWFkRmlsZURhdGEpLnNwZWFrZXJzO1xyXG4gICAgaWYgKCFzcGVha2VycylcclxuICAgICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoJ0Vycm9yOiBSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlIDQwNCcpO1xyXG4gICAgLy9yZXMuc3RhdHVzKDIwMCkuanNvbihzcGVha2Vycyk7IGtlZXBzIGpzb24gbWluaWZpZWQgYnV0IGhhcmRlciB0byByZWFkXHJcbiAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgcmVzLnN0YXR1cygyMDApLnNlbmQoSlNPTi5zdHJpbmdpZnkoc3BlYWtlcnMsIG51bGwsIDIpKTtcclxuICAgIGNvbnNvbGUubG9nKGBHRVQgL2FwaS9zcGVha2VycyBzdGF0dXM6IDIwMGApO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKCcvYXBpL3NwZWFrZXJzIGVycm9yOicsIGUpO1xyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXRpbFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==