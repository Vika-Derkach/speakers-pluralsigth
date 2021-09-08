(function() {
var exports = {};
exports.id = "pages/api/speakers/[id]";
exports.ids = ["pages/api/speakers/[id]"];
exports.modules = {

/***/ "./pages/api/speakers/[id].js":
/*!************************************!*\
  !*** ./pages/api/speakers/[id].js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ userHandler; }
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);



const {
  promisify
} = __webpack_require__(/*! util */ "util");

const writeFile = promisify((fs__WEBPACK_IMPORTED_MODULE_1___default().writeFile));
const readFile = promisify((fs__WEBPACK_IMPORTED_MODULE_1___default().readFile));

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function userHandler(req, res) {
  var _req$query;

  const id = parseInt(req === null || req === void 0 ? void 0 : (_req$query = req.query) === null || _req$query === void 0 ? void 0 : _req$query.id);
  const method = req === null || req === void 0 ? void 0 : req.method;
  const recordFromBody = req === null || req === void 0 ? void 0 : req.body;
  const jsonFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve('./', 'db.json');

  async function getSpeakersData() {
    const readFileData = await readFile(jsonFile);
    return JSON.parse(readFileData).speakers;
  }

  switch (method) {
    case 'GET':
      const speakers = await getSpeakersData();
      const speaker = speakers.find(rec => rec.id === id);

      if (speaker) {
        res.status(200).json(speaker);
      } else {
        res.status(404).send('speaker not found');
      } //speaker ? res.status(200).json(speaker) : res.status(404);
      // Get data from your database
      //res.status(200).json({ id, name: `User ${id}` });


      console.log(`GET /api/speakers/${id} status: 200`);
      break;

    case 'PUT':
      try {
        await delay(1000);
        const speakers = await getSpeakersData();
        const newSpeakersArray = speakers.map(function (rec) {
          return rec.id === id ? recordFromBody : rec;
        });
        writeFile(jsonFile, JSON.stringify({
          speakers: newSpeakersArray
        }, null, 2));
        res.status(200).json(recordFromBody);
        console.log(`PUT /api/speakers/${id} status: 200`);
      } catch (e) {
        console.log('/api/speakers PUT error:', e);
      }

      break;

    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/speakers/[id].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9wYWdlcy9hcGkvc3BlYWtlcnMvW2lkXS5qcyIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzLWNvdXJzZS1wbHVyYWxzaWdodC9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvZXh0ZXJuYWwgXCJ1dGlsXCIiXSwibmFtZXMiOlsicHJvbWlzaWZ5IiwicmVxdWlyZSIsIndyaXRlRmlsZSIsImZzIiwicmVhZEZpbGUiLCJkZWxheSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwidXNlckhhbmRsZXIiLCJyZXEiLCJyZXMiLCJpZCIsInBhcnNlSW50IiwicXVlcnkiLCJtZXRob2QiLCJyZWNvcmRGcm9tQm9keSIsImJvZHkiLCJqc29uRmlsZSIsInBhdGgiLCJnZXRTcGVha2Vyc0RhdGEiLCJyZWFkRmlsZURhdGEiLCJKU09OIiwicGFyc2UiLCJzcGVha2VycyIsInNwZWFrZXIiLCJmaW5kIiwicmVjIiwic3RhdHVzIiwianNvbiIsInNlbmQiLCJjb25zb2xlIiwibG9nIiwibmV3U3BlYWtlcnNBcnJheSIsIm1hcCIsInN0cmluZ2lmeSIsImUiLCJzZXRIZWFkZXIiLCJlbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsTUFBTTtBQUFFQTtBQUFGLElBQWdCQyxtQkFBTyxDQUFDLGtCQUFELENBQTdCOztBQUVBLE1BQU1DLFNBQVMsR0FBR0YsU0FBUyxDQUFDRyxxREFBRCxDQUEzQjtBQUNBLE1BQU1DLFFBQVEsR0FBR0osU0FBUyxDQUFDRyxvREFBRCxDQUExQjs7QUFDQSxNQUFNRSxLQUFLLEdBQUlDLEVBQUQsSUFBUSxJQUFJQyxPQUFKLENBQWFDLE9BQUQsSUFBYUMsVUFBVSxDQUFDRCxPQUFELEVBQVVGLEVBQVYsQ0FBbkMsQ0FBdEI7O0FBRWUsZUFBZUksV0FBZixDQUEyQkMsR0FBM0IsRUFBZ0NDLEdBQWhDLEVBQXFDO0FBQUE7O0FBQ2xELFFBQU1DLEVBQUUsR0FBR0MsUUFBUSxDQUFDSCxHQUFELGFBQUNBLEdBQUQscUNBQUNBLEdBQUcsQ0FBRUksS0FBTiwrQ0FBQyxXQUFZRixFQUFiLENBQW5CO0FBQ0EsUUFBTUcsTUFBTSxHQUFHTCxHQUFILGFBQUdBLEdBQUgsdUJBQUdBLEdBQUcsQ0FBRUssTUFBcEI7QUFDQSxRQUFNQyxjQUFjLEdBQUdOLEdBQUgsYUFBR0EsR0FBSCx1QkFBR0EsR0FBRyxDQUFFTyxJQUE1QjtBQUNBLFFBQU1DLFFBQVEsR0FBR0MsbURBQUEsQ0FBYSxJQUFiLEVBQW1CLFNBQW5CLENBQWpCOztBQUVBLGlCQUFlQyxlQUFmLEdBQWlDO0FBQy9CLFVBQU1DLFlBQVksR0FBRyxNQUFNbEIsUUFBUSxDQUFDZSxRQUFELENBQW5DO0FBQ0EsV0FBT0ksSUFBSSxDQUFDQyxLQUFMLENBQVdGLFlBQVgsRUFBeUJHLFFBQWhDO0FBQ0Q7O0FBRUQsVUFBUVQsTUFBUjtBQUNFLFNBQUssS0FBTDtBQUNFLFlBQU1TLFFBQVEsR0FBRyxNQUFNSixlQUFlLEVBQXRDO0FBQ0EsWUFBTUssT0FBTyxHQUFHRCxRQUFRLENBQUNFLElBQVQsQ0FBZUMsR0FBRCxJQUFTQSxHQUFHLENBQUNmLEVBQUosS0FBV0EsRUFBbEMsQ0FBaEI7O0FBQ0EsVUFBSWEsT0FBSixFQUFhO0FBQ1hkLFdBQUcsQ0FBQ2lCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkosT0FBckI7QUFDRCxPQUZELE1BRU87QUFDTGQsV0FBRyxDQUFDaUIsTUFBSixDQUFXLEdBQVgsRUFBZ0JFLElBQWhCLENBQXFCLG1CQUFyQjtBQUNELE9BUEgsQ0FRRTtBQUVBO0FBQ0E7OztBQUVBQyxhQUFPLENBQUNDLEdBQVIsQ0FBYSxxQkFBb0JwQixFQUFHLGNBQXBDO0FBRUE7O0FBQ0YsU0FBSyxLQUFMO0FBQ0UsVUFBSTtBQUNGLGNBQU1SLEtBQUssQ0FBQyxJQUFELENBQVg7QUFDQSxjQUFNb0IsUUFBUSxHQUFHLE1BQU1KLGVBQWUsRUFBdEM7QUFDQSxjQUFNYSxnQkFBZ0IsR0FBR1QsUUFBUSxDQUFDVSxHQUFULENBQWEsVUFBVVAsR0FBVixFQUFlO0FBQ25ELGlCQUFPQSxHQUFHLENBQUNmLEVBQUosS0FBV0EsRUFBWCxHQUFnQkksY0FBaEIsR0FBaUNXLEdBQXhDO0FBQ0QsU0FGd0IsQ0FBekI7QUFHQTFCLGlCQUFTLENBQ1BpQixRQURPLEVBRVBJLElBQUksQ0FBQ2EsU0FBTCxDQUNFO0FBQ0VYLGtCQUFRLEVBQUVTO0FBRFosU0FERixFQUlFLElBSkYsRUFLRSxDQUxGLENBRk8sQ0FBVDtBQVVBdEIsV0FBRyxDQUFDaUIsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCYixjQUFyQjtBQUNBZSxlQUFPLENBQUNDLEdBQVIsQ0FBYSxxQkFBb0JwQixFQUFHLGNBQXBDO0FBQ0QsT0FsQkQsQ0FrQkUsT0FBT3dCLENBQVAsRUFBVTtBQUNWTCxlQUFPLENBQUNDLEdBQVIsQ0FBWSwwQkFBWixFQUF3Q0ksQ0FBeEM7QUFDRDs7QUFDRDs7QUFFRjtBQUNFekIsU0FBRyxDQUFDMEIsU0FBSixDQUFjLE9BQWQsRUFBdUIsQ0FBQyxLQUFELEVBQVEsS0FBUixDQUF2QjtBQUNBMUIsU0FBRyxDQUFDaUIsTUFBSixDQUFXLEdBQVgsRUFBZ0JVLEdBQWhCLENBQXFCLFVBQVN2QixNQUFPLGNBQXJDO0FBM0NKO0FBNkNELEM7Ozs7Ozs7Ozs7O0FDaEVELGdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL2FwaS9zcGVha2Vycy9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCBmcyBmcm9tICdmcyc7XHJcbmNvbnN0IHsgcHJvbWlzaWZ5IH0gPSByZXF1aXJlKCd1dGlsJyk7XHJcblxyXG5jb25zdCB3cml0ZUZpbGUgPSBwcm9taXNpZnkoZnMud3JpdGVGaWxlKTtcclxuY29uc3QgcmVhZEZpbGUgPSBwcm9taXNpZnkoZnMucmVhZEZpbGUpO1xyXG5jb25zdCBkZWxheSA9IChtcykgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHVzZXJIYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgY29uc3QgaWQgPSBwYXJzZUludChyZXE/LnF1ZXJ5Py5pZCk7XHJcbiAgY29uc3QgbWV0aG9kID0gcmVxPy5tZXRob2Q7XHJcbiAgY29uc3QgcmVjb3JkRnJvbUJvZHkgPSByZXE/LmJvZHk7XHJcbiAgY29uc3QganNvbkZpbGUgPSBwYXRoLnJlc29sdmUoJy4vJywgJ2RiLmpzb24nKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0U3BlYWtlcnNEYXRhKCkge1xyXG4gICAgY29uc3QgcmVhZEZpbGVEYXRhID0gYXdhaXQgcmVhZEZpbGUoanNvbkZpbGUpO1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UocmVhZEZpbGVEYXRhKS5zcGVha2VycztcclxuICB9XHJcblxyXG4gIHN3aXRjaCAobWV0aG9kKSB7XHJcbiAgICBjYXNlICdHRVQnOlxyXG4gICAgICBjb25zdCBzcGVha2VycyA9IGF3YWl0IGdldFNwZWFrZXJzRGF0YSgpO1xyXG4gICAgICBjb25zdCBzcGVha2VyID0gc3BlYWtlcnMuZmluZCgocmVjKSA9PiByZWMuaWQgPT09IGlkKTtcclxuICAgICAgaWYgKHNwZWFrZXIpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihzcGVha2VyKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXMuc3RhdHVzKDQwNCkuc2VuZCgnc3BlYWtlciBub3QgZm91bmQnKTtcclxuICAgICAgfVxyXG4gICAgICAvL3NwZWFrZXIgPyByZXMuc3RhdHVzKDIwMCkuanNvbihzcGVha2VyKSA6IHJlcy5zdGF0dXMoNDA0KTtcclxuXHJcbiAgICAgIC8vIEdldCBkYXRhIGZyb20geW91ciBkYXRhYmFzZVxyXG4gICAgICAvL3Jlcy5zdGF0dXMoMjAwKS5qc29uKHsgaWQsIG5hbWU6IGBVc2VyICR7aWR9YCB9KTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKGBHRVQgL2FwaS9zcGVha2Vycy8ke2lkfSBzdGF0dXM6IDIwMGApO1xyXG5cclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICdQVVQnOlxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRlbGF5KDEwMDApO1xyXG4gICAgICAgIGNvbnN0IHNwZWFrZXJzID0gYXdhaXQgZ2V0U3BlYWtlcnNEYXRhKCk7XHJcbiAgICAgICAgY29uc3QgbmV3U3BlYWtlcnNBcnJheSA9IHNwZWFrZXJzLm1hcChmdW5jdGlvbiAocmVjKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVjLmlkID09PSBpZCA/IHJlY29yZEZyb21Cb2R5IDogcmVjO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHdyaXRlRmlsZShcclxuICAgICAgICAgIGpzb25GaWxlLFxyXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzcGVha2VyczogbmV3U3BlYWtlcnNBcnJheSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgMixcclxuICAgICAgICAgICksXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZWNvcmRGcm9tQm9keSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFBVVCAvYXBpL3NwZWFrZXJzLyR7aWR9IHN0YXR1czogMjAwYCk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnL2FwaS9zcGVha2VycyBQVVQgZXJyb3I6JywgZSk7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ0dFVCcsICdQVVQnXSk7XHJcbiAgICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoYE1ldGhvZCAke21ldGhvZH0gTm90IEFsbG93ZWRgKTtcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV0aWxcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=