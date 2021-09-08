exports.id = "src_GlobalState_js";
exports.ids = ["src_GlobalState_js"];
exports.modules = {

/***/ "./pages/speakers.js":
/*!***************************!*\
  !*** ./pages/speakers.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InitialSpeakersDataContext": function() { return /* binding */ InitialSpeakersDataContext; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/App */ "./src/App.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\v.derkach\\Desktop\\pluralsight\\pluralsight-course-using-react-hooks\\06-Context-with-Reducer-Redux-like\\clip9-colorizing-refresh-problem-and-fix\\pages\\speakers.js";




const InitialSpeakersDataContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createContext(); // export async function getServerSideProps() {
//   // Fetch data from external API
//   // This code is running inside the same server that is running API Routes for REST calls, we
//   // need to go to the same file for data that the REST server goes to get it's data. If this were a
//   // real company app, The REST server would be external to our NextJS server and we would use calls like this
//   // to get the data:
//   //
//   //   const res = await fetch(`https://.../data`)
//   //   const data = await res.json()
//   //
//
//   const { promisify } = require('util');
//   const readFile = promisify(fs.readFile);
//   const jsonFile = path.resolve('./', 'db.json');
//   let initialSpeakersData;
//   try {
//     const readFileData = await readFile(jsonFile);
//     initialSpeakersData = JSON.parse(readFileData).speakers;
//   } catch (e) {
//     console.log('/api/speakers error:', e);
//   }
//
//   // Pass data to the page via props
//   return { props: { initialSpeakersData } };
// }

async function getStaticProps(context) {
  const {
    promisify
  } = __webpack_require__(/*! util */ "util");

  const readFile = promisify((fs__WEBPACK_IMPORTED_MODULE_3___default().readFile));
  const jsonFile = path__WEBPACK_IMPORTED_MODULE_2___default().resolve('./', 'db.json');
  let initialSpeakersData;

  try {
    const readFileData = await readFile(jsonFile);
    initialSpeakersData = JSON.parse(readFileData).speakers;
  } catch (e) {
    console.log('/api/speakers error:', e);
  }

  if (!initialSpeakersData) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      initialSpeakersData
    },
    // will be passed to the page component as props
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 3600 // In seconds

  };
}

function speakers({
  initialSpeakersData
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InitialSpeakersDataContext.Provider, {
    value: initialSpeakersData,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_App__WEBPACK_IMPORTED_MODULE_1__.default, {
      pageName: "Speakers"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (speakers);

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigContext": function() { return /* binding */ ConfigContext; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home */ "./src/Home.js");
/* harmony import */ var _Speakers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Speakers */ "./src/Speakers.js");
/* harmony import */ var _GlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GlobalState */ "./src/GlobalState.js");
/* harmony import */ var _FavoriteClickCountContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FavoriteClickCountContext */ "./src/FavoriteClickCountContext.js");

var _jsxFileName = "C:\\Users\\v.derkach\\Desktop\\pluralsight\\pluralsight-course-using-react-hooks\\06-Context-with-Reducer-Redux-like\\clip9-colorizing-refresh-problem-and-fix\\src\\App.js";





const ConfigContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext();

const pageToShow = pageName => {
  if (pageName === 'Home') return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Home__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 35
  }, undefined);
  if (pageName === 'Speakers') return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speakers__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 39
  }, undefined);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: "Not Found"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 10
  }, undefined);
};

const configValue = {
  showSignMeUp: true,
  showSpeakerSpeakingDays: true
};

const App = ({
  pageName
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ConfigContext.Provider, {
    value: configValue,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GlobalState__WEBPACK_IMPORTED_MODULE_4__.GlobalProvider, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FavoriteClickCountContext__WEBPACK_IMPORTED_MODULE_5__.FavoriteClickCountProvider, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: pageToShow(pageName)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/FavoriteClickCountContext.js":
/*!******************************************!*\
  !*** ./src/FavoriteClickCountContext.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoriteClickCountContext": function() { return /* binding */ FavoriteClickCountContext; },
/* harmony export */   "FavoriteClickCountProvider": function() { return /* binding */ FavoriteClickCountProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GlobalState */ "./src/GlobalState.js");

var _jsxFileName = "C:\\Users\\v.derkach\\Desktop\\pluralsight\\pluralsight-course-using-react-hooks\\06-Context-with-Reducer-Redux-like\\clip9-colorizing-refresh-problem-and-fix\\src\\FavoriteClickCountContext.js";


const FavoriteClickCountContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const FavoriteClickCountProvider = ({
  children
}) => {
  const {
    incrementFavoriteClickCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_GlobalState__WEBPACK_IMPORTED_MODULE_2__.GlobalContext); // const provider = {
  //   incrementFavoriteClickCount,
  // };

  const provider = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return {
      incrementFavoriteClickCount
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FavoriteClickCountContext.Provider, {
    value: provider,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/GlobalState.js":
/*!****************************!*\
  !*** ./src/GlobalState.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalContext": function() { return /* binding */ GlobalContext; },
/* harmony export */   "GlobalProvider": function() { return /* binding */ GlobalProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useSpeakerDataManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useSpeakerDataManager */ "./src/useSpeakerDataManager.js");

var _jsxFileName = "C:\\Users\\v.derkach\\Desktop\\pluralsight\\pluralsight-course-using-react-hooks\\06-Context-with-Reducer-Redux-like\\clip9-colorizing-refresh-problem-and-fix\\src\\GlobalState.js";


const GlobalContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext();
const GlobalProvider = ({
  children
}) => {
  const {
    isLoading,
    speakerList,
    favoriteClickCount,
    toggleSpeakerFavorite,
    incrementFavoriteClickCount,
    hasErrored,
    error,
    imageRerenderIdentifier,
    forceImageRerender
  } = (0,_useSpeakerDataManager__WEBPACK_IMPORTED_MODULE_2__.default)();
  const provider = {
    isLoading,
    speakerList,
    favoriteClickCount,
    toggleSpeakerFavorite,
    incrementFavoriteClickCount,
    hasErrored,
    error,
    imageRerenderIdentifier,
    forceImageRerender
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalContext.Provider, {
    value: provider,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/Header.js":
/*!***********************!*\
  !*** ./src/Header.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SignMeUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignMeUp */ "./src/SignMeUp.js");
/* harmony import */ var _GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GlobalState */ "./src/GlobalState.js");

var _jsxFileName = "C:\\Users\\v.derkach\\Desktop\\pluralsight\\pluralsight-course-using-react-hooks\\06-Context-with-Reducer-Redux-like\\clip9-colorizing-refresh-problem-and-fix\\src\\Header.js";



const Header = () => {
  const signupCallback = email => {
    return console.log(`sign up called with email ${email}`);
  };

  const {
    favoriteClickCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_GlobalState__WEBPACK_IMPORTED_MODULE_3__.GlobalContext);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "jumbotron jumbotronheight",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-12 col-sm-4 text-center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
          className: "text-uppercase",
          children: "October 19-20\xA0\xA02019"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
          className: "text-uppercase",
          children: "San Jose, California"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: ["Click Count ", favoriteClickCount]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-12 col-sm-8 text-lg-right",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/static/SVCClogo.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: "Silicon Valley Code Camp 2019"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row col-12 text-lg-right",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SignMeUp__WEBPACK_IMPORTED_MODULE_2__.default, {
            signupCallback: signupCallback
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/Header */ "./src/Header.js");
/* harmony import */ var _src_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/Menu */ "./src/Menu.js");

var _jsxFileName = "C:\\Users\\v.derkach\\Desktop\\pluralsight\\pluralsight-course-using-react-hooks\\06-Context-with-Reducer-Redux-like\\clip9-colorizing-refresh-problem-and-fix\\src\\Home.js";




function index() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Menu__WEBPACK_IMPORTED_MODULE_3__.Menu, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col margintopbottom",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
            className: "margintopbottom20",
            children: "Code Camp is a community event where developers learn from fellow developers. We also have developer related topics that include software branding, legal issues around software as well as other topics developers are interested in hearing about."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./src/ImageToggleOnScroll.js":
/*!************************************!*\
  !*** ./src/ImageToggleOnScroll.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GlobalState */ "./src/GlobalState.js");

var _jsxFileName = "C:\\Users\\v.derkach\\Desktop\\pluralsight\\pluralsight-course-using-react-hooks\\06-Context-with-Reducer-Redux-like\\clip9-colorizing-refresh-problem-and-fix\\src\\ImageToggleOnScroll.js";



const ImageToggleOnScroll = ({
  primaryImg,
  secondaryImg
}) => {
  const imageRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const {
    imageRerenderIdentifier
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_GlobalState__WEBPACK_IMPORTED_MODULE_2__.GlobalContext);
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  const {
    0: inView,
    1: setInView
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setIsLoading(false);
    setInView(isInView());
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = () => {
    setInView(isInView());
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
    src: isLoading ? 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==' // 1x1gif
    : inView ? secondaryImg : primaryImg,
    alt: "",
    ref: imageRef,
    width: "200",
    height: "200"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ImageToggleOnScroll);

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu": function() { return /* binding */ Menu; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\v.derkach\\Desktop\\pluralsight\\pluralsight-course-using-react-hooks\\06-Context-with-Reducer-Redux-like\\clip9-colorizing-refresh-problem-and-fix\\src\\Menu.js";


const Menu = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
    className: "navbar navbar-expand-sm bg-dark navbar-dark",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "navbar",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "navbar-nav",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "nav-item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "nav-link",
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "nav-item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/speakers",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "nav-link",
              children: "Speakers"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/SignMeUp.js":
/*!*************************!*\
  !*** ./src/SignMeUp.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");

var _jsxFileName = "C:\\Users\\v.derkach\\Desktop\\pluralsight\\pluralsight-course-using-react-hooks\\06-Context-with-Reducer-Redux-like\\clip9-colorizing-refresh-problem-and-fix\\src\\SignMeUp.js";



const SignMeUp = ({
  signupCallback
}) => {
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_App__WEBPACK_IMPORTED_MODULE_2__.ConfigContext);
  return context.showSignMeUp === false ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          placeholder: "Enter Email",
          type: "email",
          name: "email",
          value: email,
          onChange: e => {
            setEmail(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, undefined), "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          disabled: !email.includes('@'),
          onClick: () => {
            signupCallback(email);
            setEmail('');
            alert('signup confirmed');
          },
          className: "btn",
          type: "submit",
          children: "Get Updates"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SignMeUp);

/***/ }),

/***/ "./src/SpeakerDetail.js":
/*!******************************!*\
  !*** ./src/SpeakerDetail.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageToggleOnScroll */ "./src/ImageToggleOnScroll.js");
/* harmony import */ var _useSpeakerDataManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useSpeakerDataManager */ "./src/useSpeakerDataManager.js");
/* harmony import */ var _FavoriteClickCountContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FavoriteClickCountContext */ "./src/FavoriteClickCountContext.js");

var _jsxFileName = "C:\\Users\\v.derkach\\Desktop\\pluralsight\\pluralsight-course-using-react-hooks\\06-Context-with-Reducer-Redux-like\\clip9-colorizing-refresh-problem-and-fix\\src\\SpeakerDetail.js";




const SpeakerDetail = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(({
  speakerRec,
  onHeartFavoriteHandler
}) => {
  const {
    id,
    firstName,
    lastName,
    bio,
    favorite
  } = speakerRec;
  console.log(`SpeakerDetail:${id} ${firstName} ${lastName} ${favorite}`);
  const {
    incrementFavoriteClickCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_FavoriteClickCountContext__WEBPACK_IMPORTED_MODULE_4__.FavoriteClickCountContext);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "card col-4 cardmin",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__.default, {
      className: "card-img-top",
      primaryImg: `/static/speakers/bw/Speaker-${id}.jpg`,
      secondaryImg: `/static/speakers/Speaker-${id}.jpg`,
      alt: "{firstName} {lastName}"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card-body",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        className: "card-title",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: favorite ? 'heartredbutton' : 'heartdarkbutton',
          onClick: e => {
            onHeartFavoriteHandler(e, speakerRec);
            incrementFavoriteClickCount();
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [firstName, " ", lastName]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: bio
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
});
/* harmony default export */ __webpack_exports__["default"] = (SpeakerDetail);

/***/ }),

/***/ "./src/Speakers.js":
/*!*************************!*\
  !*** ./src/Speakers.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/Header.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu */ "./src/Menu.js");
/* harmony import */ var _SpeakerDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SpeakerDetail */ "./src/SpeakerDetail.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _GlobalState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GlobalState */ "./src/GlobalState.js");

var _jsxFileName = "C:\\Users\\v.derkach\\Desktop\\pluralsight\\pluralsight-course-using-react-hooks\\06-Context-with-Reducer-Redux-like\\clip9-colorizing-refresh-problem-and-fix\\src\\Speakers.js";







const Speakers = ({}) => {
  const {
    0: speakingSaturday,
    1: setSpeakingSaturday
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: speakingSunday,
    1: setSpeakingSunday
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_App__WEBPACK_IMPORTED_MODULE_5__.ConfigContext);
  const {
    isLoading,
    speakerList,
    toggleSpeakerFavorite,
    hasErrored,
    error,
    forceImageRerender
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_GlobalState__WEBPACK_IMPORTED_MODULE_6__.GlobalContext);

  const handleChangeSaturday = () => {
    forceImageRerender();
    setSpeakingSaturday(!speakingSaturday);
  };

  const handleChangeSunday = () => {
    forceImageRerender();
    setSpeakingSunday(!speakingSunday);
  };

  const heartFavoriteHandler = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e, speakerRec) => {
    e.preventDefault();
    toggleSpeakerFavorite(speakerRec);
  }, []);
  const newSpeakerList = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => speakerList.filter(({
    sat,
    sun
  }) => speakingSaturday && sat || speakingSunday && sun).sort(function (a, b) {
    if (a.firstName < b.firstName) {
      return -1;
    }

    if (a.firstName > b.firstName) {
      return 1;
    }

    return 0;
  }), [speakingSaturday, speakingSunday, speakerList]);
  const speakerListFiltered = isLoading ? [] : newSpeakerList;
  if (hasErrored === true) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: ["Error: ", error.message]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 35
  }, undefined);
  if (isLoading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 25
  }, undefined);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_3__.Menu, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "btn-toolbar  margintopbottom5 checkbox-bigger",
        children: context.showSpeakerSpeakingDays === false ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "hide",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-check-inline",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              className: "form-check-label",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "checkbox",
                className: "form-check-input",
                onChange: handleChangeSaturday,
                checked: speakingSaturday
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 19
              }, undefined), "Saturday Speakers"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-check-inline",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              className: "form-check-label",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "checkbox",
                className: "form-check-input",
                onChange: handleChangeSunday,
                checked: speakingSunday
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 19
              }, undefined), "Sunday Speakers"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card-deck",
          children: speakerListFiltered.map(speakerRec => {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerDetail__WEBPACK_IMPORTED_MODULE_4__.default, {
              speakerRec: speakerRec,
              onHeartFavoriteHandler: heartFavoriteHandler
            }, speakerRec.id, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 17
            }, undefined);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Speakers);

/***/ }),

/***/ "./src/speakersReducer.js":
/*!********************************!*\
  !*** ./src/speakersReducer.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const speakersReducer = (state, action) => {
  function updateFavorite(favoriteValue) {
    return state.speakerList.map((item, index) => {
      if (item.id === action.id) {
        return _objectSpread(_objectSpread({}, item), {}, {
          favorite: favoriteValue
        });
      }

      return item;
    });
  }

  switch (action.type) {
    case 'setSpeakerList':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          speakerList: action.data,
          isLoading: false,
          hasErrored: false
        });
      }

    case 'forceImageRerender':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          imageRerenderIdentifier: new Date().getTime()
        });
      }

    case 'favorite':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          speakerList: updateFavorite(true)
        });
      }

    case 'unfavorite':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          speakerList: updateFavorite(false)
        });
      }

    case 'incrementFavoriteClickCount':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          favoriteClickCount: state.favoriteClickCount + 1
        });
      }

    case 'errored':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          hasErrored: true,
          error: action.error
        });
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (speakersReducer);

/***/ }),

/***/ "./src/useSpeakerDataManager.js":
/*!**************************************!*\
  !*** ./src/useSpeakerDataManager.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _speakersReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speakersReducer */ "./src/speakersReducer.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_speakers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/speakers */ "./pages/speakers.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function useSpeakerDataManager() {
  const initialSpeakersData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_pages_speakers__WEBPACK_IMPORTED_MODULE_3__.InitialSpeakersDataContext);
  const {
    0: {
      isLoading,
      speakerList,
      favoriteClickCount,
      hasErrored,
      error,
      imageRerenderIdentifier
    },
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_speakersReducer__WEBPACK_IMPORTED_MODULE_0__.default, {
    isLoading: false,
    speakerList: initialSpeakersData,
    favoriteClickCount: 0,
    hasErrored: false,
    error: null,
    imageRerenderIdentifier: 0
  });

  function incrementFavoriteClickCount() {
    dispatch({
      type: 'incrementFavoriteClickCount'
    });
  }

  function forceImageRerender() {
    dispatch({
      type: 'forceImageRerender'
    });
  }

  function toggleSpeakerFavorite(speakerRec) {
    const updateData = async function () {
      await axios__WEBPACK_IMPORTED_MODULE_2___default().put(`/api/speakers/${speakerRec.id}`, _objectSpread(_objectSpread({}, speakerRec), {}, {
        favorite: !speakerRec.favorite
      }));
      speakerRec.favorite === true ? dispatch({
        type: 'unfavorite',
        id: speakerRec.id
      }) : dispatch({
        type: 'favorite',
        id: speakerRec.id
      });
    };

    updateData();
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const fetchData = async function () {
      try {
        let result = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('/api/speakers');
        dispatch({
          type: 'setSpeakerList',
          data: result.data
        });
      } catch (e) {
        dispatch({
          type: 'errored',
          error: e
        });
      }
    };

    fetchData();
    return () => {
      console.log('cleanup');
    };
  }, []);
  return {
    isLoading,
    speakerList,
    favoriteClickCount,
    incrementFavoriteClickCount,
    toggleSpeakerFavorite,
    hasErrored,
    error,
    forceImageRerender,
    imageRerenderIdentifier
  };
}

/* harmony default export */ __webpack_exports__["default"] = (useSpeakerDataManager);

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9wYWdlcy9zcGVha2Vycy5qcyIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9zcmMvQXBwLmpzIiwid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzLWNvdXJzZS1wbHVyYWxzaWdodC8uL3NyYy9GYXZvcml0ZUNsaWNrQ291bnRDb250ZXh0LmpzIiwid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzLWNvdXJzZS1wbHVyYWxzaWdodC8uL3NyYy9HbG9iYWxTdGF0ZS5qcyIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9zcmMvSGVhZGVyLmpzIiwid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzLWNvdXJzZS1wbHVyYWxzaWdodC8uL3NyYy9Ib21lLmpzIiwid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzLWNvdXJzZS1wbHVyYWxzaWdodC8uL3NyYy9JbWFnZVRvZ2dsZU9uU2Nyb2xsLmpzIiwid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzLWNvdXJzZS1wbHVyYWxzaWdodC8uL3NyYy9NZW51LmpzIiwid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzLWNvdXJzZS1wbHVyYWxzaWdodC8uL3NyYy9TaWduTWVVcC5qcyIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9zcmMvU3BlYWtlckRldGFpbC5qcyIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9zcmMvU3BlYWtlcnMuanMiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0Ly4vc3JjL3NwZWFrZXJzUmVkdWNlci5qcyIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9zcmMvdXNlU3BlYWtlckRhdGFNYW5hZ2VyLmpzIiwid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzLWNvdXJzZS1wbHVyYWxzaWdodC9pZ25vcmVkfEM6XFxVc2Vyc1xcdi5kZXJrYWNoXFxEZXNrdG9wXFxwbHVyYWxzaWdodFxccGx1cmFsc2lnaHQtY291cnNlLXVzaW5nLXJlYWN0LWhvb2tzXFwwNi1Db250ZXh0LXdpdGgtUmVkdWNlci1SZWR1eC1saWtlXFxjbGlwOS1jb2xvcml6aW5nLXJlZnJlc2gtcHJvYmxlbS1hbmQtZml4XFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiSW5pdGlhbFNwZWFrZXJzRGF0YUNvbnRleHQiLCJSZWFjdCIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInByb21pc2lmeSIsInJlcXVpcmUiLCJyZWFkRmlsZSIsImZzIiwianNvbkZpbGUiLCJwYXRoIiwiaW5pdGlhbFNwZWFrZXJzRGF0YSIsInJlYWRGaWxlRGF0YSIsIkpTT04iLCJwYXJzZSIsInNwZWFrZXJzIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJub3RGb3VuZCIsInByb3BzIiwicmV2YWxpZGF0ZSIsIkNvbmZpZ0NvbnRleHQiLCJwYWdlVG9TaG93IiwicGFnZU5hbWUiLCJjb25maWdWYWx1ZSIsInNob3dTaWduTWVVcCIsInNob3dTcGVha2VyU3BlYWtpbmdEYXlzIiwiQXBwIiwiRmF2b3JpdGVDbGlja0NvdW50Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJGYXZvcml0ZUNsaWNrQ291bnRQcm92aWRlciIsImNoaWxkcmVuIiwiaW5jcmVtZW50RmF2b3JpdGVDbGlja0NvdW50IiwidXNlQ29udGV4dCIsIkdsb2JhbENvbnRleHQiLCJwcm92aWRlciIsInVzZU1lbW8iLCJHbG9iYWxQcm92aWRlciIsImlzTG9hZGluZyIsInNwZWFrZXJMaXN0IiwiZmF2b3JpdGVDbGlja0NvdW50IiwidG9nZ2xlU3BlYWtlckZhdm9yaXRlIiwiaGFzRXJyb3JlZCIsImVycm9yIiwiaW1hZ2VSZXJlbmRlcklkZW50aWZpZXIiLCJmb3JjZUltYWdlUmVyZW5kZXIiLCJ1c2VTcGVha2VyRGF0YU1hbmFnZXIiLCJIZWFkZXIiLCJzaWdudXBDYWxsYmFjayIsImVtYWlsIiwiaW5kZXgiLCJJbWFnZVRvZ2dsZU9uU2Nyb2xsIiwicHJpbWFyeUltZyIsInNlY29uZGFyeUltZyIsImltYWdlUmVmIiwidXNlUmVmIiwic2V0SXNMb2FkaW5nIiwidXNlU3RhdGUiLCJpc0luVmlldyIsInJlY3QiLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiYm90dG9tIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJpblZpZXciLCJzZXRJblZpZXciLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJNZW51IiwiU2lnbk1lVXAiLCJzZXRFbWFpbCIsInRhcmdldCIsInZhbHVlIiwiaW5jbHVkZXMiLCJhbGVydCIsIlNwZWFrZXJEZXRhaWwiLCJzcGVha2VyUmVjIiwib25IZWFydEZhdm9yaXRlSGFuZGxlciIsImlkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJiaW8iLCJmYXZvcml0ZSIsIlNwZWFrZXJzIiwic3BlYWtpbmdTYXR1cmRheSIsInNldFNwZWFraW5nU2F0dXJkYXkiLCJzcGVha2luZ1N1bmRheSIsInNldFNwZWFraW5nU3VuZGF5IiwiaGFuZGxlQ2hhbmdlU2F0dXJkYXkiLCJoYW5kbGVDaGFuZ2VTdW5kYXkiLCJoZWFydEZhdm9yaXRlSGFuZGxlciIsInVzZUNhbGxiYWNrIiwicHJldmVudERlZmF1bHQiLCJuZXdTcGVha2VyTGlzdCIsImZpbHRlciIsInNhdCIsInN1biIsInNvcnQiLCJhIiwiYiIsInNwZWFrZXJMaXN0RmlsdGVyZWQiLCJtZXNzYWdlIiwibWFwIiwic3BlYWtlcnNSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ1cGRhdGVGYXZvcml0ZSIsImZhdm9yaXRlVmFsdWUiLCJpdGVtIiwidHlwZSIsImRhdGEiLCJEYXRlIiwiZ2V0VGltZSIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsInVwZGF0ZURhdGEiLCJheGlvcyIsImZldGNoRGF0YSIsInJlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFTyxNQUFNQSwwQkFBMEIsZ0JBQUdDLDBEQUFBLEVBQW5DLEMsQ0FFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxlQUFlQyxjQUFmLENBQThCQyxPQUE5QixFQUF1QztBQUM1QyxRQUFNO0FBQUVDO0FBQUYsTUFBZ0JDLG1CQUFPLENBQUMsa0JBQUQsQ0FBN0I7O0FBQ0EsUUFBTUMsUUFBUSxHQUFHRixTQUFTLENBQUNHLG9EQUFELENBQTFCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHQyxtREFBQSxDQUFhLElBQWIsRUFBbUIsU0FBbkIsQ0FBakI7QUFDQSxNQUFJQyxtQkFBSjs7QUFDQSxNQUFJO0FBQ0YsVUFBTUMsWUFBWSxHQUFHLE1BQU1MLFFBQVEsQ0FBQ0UsUUFBRCxDQUFuQztBQUNBRSx1QkFBbUIsR0FBR0UsSUFBSSxDQUFDQyxLQUFMLENBQVdGLFlBQVgsRUFBeUJHLFFBQS9DO0FBQ0QsR0FIRCxDQUdFLE9BQU9DLENBQVAsRUFBVTtBQUNWQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWixFQUFvQ0YsQ0FBcEM7QUFDRDs7QUFFRCxNQUFJLENBQUNMLG1CQUFMLEVBQTBCO0FBQ3hCLFdBQU87QUFDTFEsY0FBUSxFQUFFO0FBREwsS0FBUDtBQUdEOztBQUVELFNBQU87QUFDTEMsU0FBSyxFQUFFO0FBQUVUO0FBQUYsS0FERjtBQUMyQjtBQUNoQztBQUNBO0FBQ0E7QUFDQVUsY0FBVSxFQUFFLElBTFAsQ0FLYTs7QUFMYixHQUFQO0FBT0Q7O0FBRUQsU0FBU04sUUFBVCxDQUFrQjtBQUFFSjtBQUFGLENBQWxCLEVBQTJDO0FBQ3pDLHNCQUNFLDhEQUFDLDBCQUFELENBQTRCLFFBQTVCO0FBQXFDLFNBQUssRUFBRUEsbUJBQTVDO0FBQUEsMkJBQ0UsOERBQUMsNkNBQUQ7QUFBSyxjQUFRLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0FBRUQsK0RBQWVJLFFBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sTUFBTU8sYUFBYSxnQkFBR3BCLDBEQUFBLEVBQXRCOztBQUVQLE1BQU1xQixVQUFVLEdBQUlDLFFBQUQsSUFBYztBQUMvQixNQUFJQSxRQUFRLEtBQUssTUFBakIsRUFBeUIsb0JBQU8sOERBQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ3pCLE1BQUlBLFFBQVEsS0FBSyxVQUFqQixFQUE2QixvQkFBTyw4REFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDN0Isc0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELENBSkQ7O0FBTUEsTUFBTUMsV0FBVyxHQUFHO0FBQ2xCQyxjQUFZLEVBQUUsSUFESTtBQUVsQkMseUJBQXVCLEVBQUU7QUFGUCxDQUFwQjs7QUFLQSxNQUFNQyxHQUFHLEdBQUcsQ0FBQztBQUFFSjtBQUFGLENBQUQsS0FBa0I7QUFDNUIsc0JBQ0UsOERBQUMsYUFBRCxDQUFlLFFBQWY7QUFBd0IsU0FBSyxFQUFFQyxXQUEvQjtBQUFBLDJCQUNFLDhEQUFDLHdEQUFEO0FBQUEsNkJBQ0UsOERBQUMsa0ZBQUQ7QUFBQSwrQkFDRTtBQUFBLG9CQUFNRixVQUFVLENBQUNDLFFBQUQ7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBU0QsQ0FWRDs7QUFZQSwrREFBZUksR0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUVBO0FBRU8sTUFBTUMseUJBQXlCLGdCQUFHQyxvREFBYSxFQUEvQztBQUVBLE1BQU1DLDBCQUEwQixHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWtCO0FBQzFELFFBQU07QUFBRUM7QUFBRixNQUFrQ0MsaURBQVUsQ0FBQ0MsdURBQUQsQ0FBbEQsQ0FEMEQsQ0FHMUQ7QUFDQTtBQUNBOztBQUVBLFFBQU1DLFFBQVEsR0FBR0MsOENBQU8sQ0FBQyxNQUFNO0FBQzdCLFdBQU87QUFBRUo7QUFBRixLQUFQO0FBQ0QsR0FGdUIsRUFFckIsRUFGcUIsQ0FBeEI7QUFJQSxzQkFDRSw4REFBQyx5QkFBRCxDQUEyQixRQUEzQjtBQUFvQyxTQUFLLEVBQUVHLFFBQTNDO0FBQUEsY0FDR0o7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFLRCxDQWhCTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05QO0FBQ0E7QUFFTyxNQUFNRyxhQUFhLGdCQUFHakMsMERBQUEsRUFBdEI7QUFFQSxNQUFNb0MsY0FBYyxHQUFHLENBQUM7QUFBRU47QUFBRixDQUFELEtBQWtCO0FBQzlDLFFBQU07QUFDSk8sYUFESTtBQUVKQyxlQUZJO0FBR0pDLHNCQUhJO0FBSUpDLHlCQUpJO0FBS0pULCtCQUxJO0FBTUpVLGNBTkk7QUFPSkMsU0FQSTtBQVFKQywyQkFSSTtBQVNKQztBQVRJLE1BVUZDLCtEQUFxQixFQVZ6QjtBQVlBLFFBQU1YLFFBQVEsR0FBRztBQUNmRyxhQURlO0FBRWZDLGVBRmU7QUFHZkMsc0JBSGU7QUFJZkMseUJBSmU7QUFLZlQsK0JBTGU7QUFNZlUsY0FOZTtBQU9mQyxTQVBlO0FBUWZDLDJCQVJlO0FBU2ZDO0FBVGUsR0FBakI7QUFZQSxzQkFDRSw4REFBQyxhQUFELENBQWUsUUFBZjtBQUF3QixTQUFLLEVBQUVWLFFBQS9CO0FBQUEsY0FBMENKO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUdELENBNUJNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTFA7QUFDQTtBQUNBO0FBRU8sTUFBTWdCLE1BQU0sR0FBRyxNQUFNO0FBQzFCLFFBQU1DLGNBQWMsR0FBSUMsS0FBRCxJQUFXO0FBQ2hDLFdBQU9qQyxPQUFPLENBQUNDLEdBQVIsQ0FBYSw2QkFBNEJnQyxLQUFNLEVBQS9DLENBQVA7QUFDRCxHQUZEOztBQUlBLFFBQU07QUFBRVQ7QUFBRixNQUF5QlAsaURBQVUsQ0FBQ0MsdURBQUQsQ0FBekM7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBQywyQkFBZjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsNkJBQWY7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUMsZ0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFJLG1CQUFTLEVBQUMsZ0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGLGVBSUU7QUFBQSxxQ0FBaUJNLGtCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBT0U7QUFBSyxpQkFBUyxFQUFDLCtCQUFmO0FBQUEsZ0NBQ0U7QUFBQSxpQ0FDRTtBQUFLLGVBQUcsRUFBQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkYsZUFLRTtBQUFLLG1CQUFTLEVBQUMsMEJBQWY7QUFBQSxpQ0FDRSw4REFBQyw4Q0FBRDtBQUFVLDBCQUFjLEVBQUVRO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFxQkQsQ0EzQk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKUDtBQUNBO0FBQ0E7O0FBRUEsU0FBU0UsS0FBVCxHQUFpQjtBQUNmLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUsOERBQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBSUU7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLHFCQUFmO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFJLHFCQUFTLEVBQUMsbUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9CRDs7QUFFRCwrREFBZUEsS0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7O0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcsQ0FBQztBQUFFQyxZQUFGO0FBQWNDO0FBQWQsQ0FBRCxLQUFrQztBQUM1RCxRQUFNQyxRQUFRLEdBQUdDLDZDQUFNLENBQUMsSUFBRCxDQUF2QjtBQUVBLFFBQU07QUFBRVg7QUFBRixNQUE4QlgsaURBQVUsQ0FBQ0MsdURBQUQsQ0FBOUM7QUFFQSxRQUFNO0FBQUEsT0FBQ0ksU0FBRDtBQUFBLE9BQVlrQjtBQUFaLE1BQTRCQywrQ0FBUSxDQUFDLElBQUQsQ0FBMUM7O0FBRUEsUUFBTUMsUUFBUSxHQUFHLE1BQU07QUFDckIsVUFBTUMsSUFBSSxHQUFHTCxRQUFRLENBQUNNLE9BQVQsQ0FBaUJDLHFCQUFqQixFQUFiO0FBQ0EsV0FBT0YsSUFBSSxDQUFDRyxHQUFMLElBQVksQ0FBWixJQUFpQkgsSUFBSSxDQUFDSSxNQUFMLElBQWVDLE1BQU0sQ0FBQ0MsV0FBOUM7QUFDRCxHQUhEOztBQUtBLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQlYsK0NBQVEsQ0FBQyxLQUFELENBQXBDO0FBRUFXLGtEQUFTLENBQUMsTUFBTTtBQUNkWixnQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNBVyxhQUFTLENBQUNULFFBQVEsRUFBVCxDQUFUO0FBQ0FNLFVBQU0sQ0FBQ0ssZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NDLGFBQWxDO0FBQ0EsV0FBTyxNQUFNO0FBQ1hOLFlBQU0sQ0FBQ08sbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNELGFBQXJDO0FBQ0QsS0FGRDtBQUdELEdBUFEsRUFPTixFQVBNLENBQVQ7O0FBU0EsUUFBTUEsYUFBYSxHQUFHLE1BQU07QUFDMUJILGFBQVMsQ0FBQ1QsUUFBUSxFQUFULENBQVQ7QUFDRCxHQUZEOztBQUlBLHNCQUNFO0FBQ0UsT0FBRyxFQUNEcEIsU0FBUyxHQUNMLG9GQURLLENBQ2dGO0FBRGhGLE1BRUw0QixNQUFNLEdBQ05iLFlBRE0sR0FFTkQsVUFOUjtBQVFFLE9BQUcsRUFBQyxFQVJOO0FBU0UsT0FBRyxFQUFFRSxRQVRQO0FBVUUsU0FBSyxFQUFDLEtBVlI7QUFXRSxVQUFNLEVBQUM7QUFYVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFlRCxDQTFDRDs7QUE0Q0EsK0RBQWVILG1CQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQ0E7QUFFTyxNQUFNcUIsSUFBSSxHQUFHLE1BQU07QUFDeEIsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsNkNBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUEsNkJBQ0U7QUFBSSxpQkFBUyxFQUFDLFlBQWQ7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUMsVUFBZDtBQUFBLGlDQUNFLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUksRUFBQyxHQUFYO0FBQUEsbUNBQ0U7QUFBRyx1QkFBUyxFQUFDLFVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQU1FO0FBQUksbUJBQVMsRUFBQyxVQUFkO0FBQUEsaUNBQ0UsOERBQUMsa0RBQUQ7QUFBTSxnQkFBSSxFQUFDLFdBQVg7QUFBQSxtQ0FDRTtBQUFHLHVCQUFTLEVBQUMsVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFrQkQsQ0FuQk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hQO0FBQ0E7O0FBRUEsTUFBTUMsUUFBUSxHQUFHLENBQUM7QUFBRXpCO0FBQUYsQ0FBRCxLQUF3QjtBQUN2QyxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVF5QjtBQUFSLE1BQW9CakIsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQ0EsUUFBTXRELE9BQU8sR0FBRzhCLGlEQUFVLENBQUNaLCtDQUFELENBQTFCO0FBRUEsU0FBT2xCLE9BQU8sQ0FBQ3NCLFlBQVIsS0FBeUIsS0FBekIsR0FBaUMsSUFBakMsZ0JBQ0w7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDJCQUNFO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLFNBQWY7QUFBQSxnQ0FDRTtBQUNFLHFCQUFXLEVBQUMsYUFEZDtBQUVFLGNBQUksRUFBQyxPQUZQO0FBR0UsY0FBSSxFQUFDLE9BSFA7QUFJRSxlQUFLLEVBQUV3QixLQUpUO0FBS0Usa0JBQVEsRUFBR2xDLENBQUQsSUFBTztBQUNmMkQsb0JBQVEsQ0FBQzNELENBQUMsQ0FBQzRELE1BQUYsQ0FBU0MsS0FBVixDQUFSO0FBQ0Q7QUFQSDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLHVCQVdFO0FBQ0Usa0JBQVEsRUFBRSxDQUFDM0IsS0FBSyxDQUFDNEIsUUFBTixDQUFlLEdBQWYsQ0FEYjtBQUVFLGlCQUFPLEVBQUUsTUFBTTtBQUNiN0IsMEJBQWMsQ0FBQ0MsS0FBRCxDQUFkO0FBQ0F5QixvQkFBUSxDQUFDLEVBQUQsQ0FBUjtBQUNBSSxpQkFBSyxDQUFDLGtCQUFELENBQUw7QUFDRCxXQU5IO0FBT0UsbUJBQVMsRUFBQyxLQVBaO0FBUUUsY0FBSSxFQUFDLFFBUlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQThCRCxDQWxDRDs7QUFvQ0EsK0RBQWVMLFFBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTU0sYUFBYSxnQkFBRzlFLGlEQUFBLENBQVcsQ0FBQztBQUFFK0UsWUFBRjtBQUFjQztBQUFkLENBQUQsS0FBNEM7QUFDM0UsUUFBTTtBQUFFQyxNQUFGO0FBQU1DLGFBQU47QUFBaUJDLFlBQWpCO0FBQTJCQyxPQUEzQjtBQUFnQ0M7QUFBaEMsTUFBNkNOLFVBQW5EO0FBQ0FoRSxTQUFPLENBQUNDLEdBQVIsQ0FBYSxpQkFBZ0JpRSxFQUFHLElBQUdDLFNBQVUsSUFBR0MsUUFBUyxJQUFHRSxRQUFTLEVBQXJFO0FBRUEsUUFBTTtBQUFFdEQ7QUFBRixNQUFrQ0MsaURBQVUsQ0FBQ0wsaUZBQUQsQ0FBbEQ7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFBLDRCQUNFLDhEQUFDLHlEQUFEO0FBQ0UsZUFBUyxFQUFDLGNBRFo7QUFFRSxnQkFBVSxFQUFHLCtCQUE4QnNELEVBQUcsTUFGaEQ7QUFHRSxrQkFBWSxFQUFHLDRCQUEyQkEsRUFBRyxNQUgvQztBQUlFLFNBQUcsRUFBQztBQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFPRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLFlBQWQ7QUFBQSxnQ0FDRTtBQUNFLG1CQUFTLEVBQUVJLFFBQVEsR0FBRyxnQkFBSCxHQUFzQixpQkFEM0M7QUFFRSxpQkFBTyxFQUFHdkUsQ0FBRCxJQUFPO0FBQ2RrRSxrQ0FBc0IsQ0FBQ2xFLENBQUQsRUFBSWlFLFVBQUosQ0FBdEI7QUFDQWhELHVDQUEyQjtBQUM1QjtBQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFRRTtBQUFBLHFCQUNHbUQsU0FESCxPQUNlQyxRQURmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFjRTtBQUFBLGtCQUFPQztBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBMEJELENBaENxQixDQUF0QjtBQWtDQSwrREFBZU4sYUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTVEsUUFBUSxHQUFHLENBQUMsRUFBRCxLQUFRO0FBQ3ZCLFFBQU07QUFBQSxPQUFDQyxnQkFBRDtBQUFBLE9BQW1CQztBQUFuQixNQUEwQ2hDLCtDQUFRLENBQUMsSUFBRCxDQUF4RDtBQUNBLFFBQU07QUFBQSxPQUFDaUMsY0FBRDtBQUFBLE9BQWlCQztBQUFqQixNQUFzQ2xDLCtDQUFRLENBQUMsSUFBRCxDQUFwRDtBQUNBLFFBQU10RCxPQUFPLEdBQUc4QixpREFBVSxDQUFDWiwrQ0FBRCxDQUExQjtBQUVBLFFBQU07QUFDSmlCLGFBREk7QUFFSkMsZUFGSTtBQUdKRSx5QkFISTtBQUlKQyxjQUpJO0FBS0pDLFNBTEk7QUFNSkU7QUFOSSxNQU9GWixpREFBVSxDQUFDQyx1REFBRCxDQVBkOztBQVNBLFFBQU0wRCxvQkFBb0IsR0FBRyxNQUFNO0FBQ2pDL0Msc0JBQWtCO0FBQ2xCNEMsdUJBQW1CLENBQUMsQ0FBQ0QsZ0JBQUYsQ0FBbkI7QUFDRCxHQUhEOztBQUlBLFFBQU1LLGtCQUFrQixHQUFHLE1BQU07QUFDL0JoRCxzQkFBa0I7QUFDbEI4QyxxQkFBaUIsQ0FBQyxDQUFDRCxjQUFGLENBQWpCO0FBQ0QsR0FIRDs7QUFJQSxRQUFNSSxvQkFBb0IsR0FBR0Msa0RBQVcsQ0FBQyxDQUFDaEYsQ0FBRCxFQUFJaUUsVUFBSixLQUFtQjtBQUMxRGpFLEtBQUMsQ0FBQ2lGLGNBQUY7QUFDQXZELHlCQUFxQixDQUFDdUMsVUFBRCxDQUFyQjtBQUNELEdBSHVDLEVBR3JDLEVBSHFDLENBQXhDO0FBS0EsUUFBTWlCLGNBQWMsR0FBRzdELDhDQUFPLENBQzVCLE1BQ0VHLFdBQVcsQ0FDUjJELE1BREgsQ0FFSSxDQUFDO0FBQUVDLE9BQUY7QUFBT0M7QUFBUCxHQUFELEtBQ0daLGdCQUFnQixJQUFJVyxHQUFyQixJQUE4QlQsY0FBYyxJQUFJVSxHQUh0RCxFQUtHQyxJQUxILENBS1EsVUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0FBQ3BCLFFBQUlELENBQUMsQ0FBQ25CLFNBQUYsR0FBY29CLENBQUMsQ0FBQ3BCLFNBQXBCLEVBQStCO0FBQzdCLGFBQU8sQ0FBQyxDQUFSO0FBQ0Q7O0FBQ0QsUUFBSW1CLENBQUMsQ0FBQ25CLFNBQUYsR0FBY29CLENBQUMsQ0FBQ3BCLFNBQXBCLEVBQStCO0FBQzdCLGFBQU8sQ0FBUDtBQUNEOztBQUNELFdBQU8sQ0FBUDtBQUNELEdBYkgsQ0FGMEIsRUFnQjVCLENBQUNLLGdCQUFELEVBQW1CRSxjQUFuQixFQUFtQ25ELFdBQW5DLENBaEI0QixDQUE5QjtBQW1CQSxRQUFNaUUsbUJBQW1CLEdBQUdsRSxTQUFTLEdBQUcsRUFBSCxHQUFRMkQsY0FBN0M7QUFFQSxNQUFJdkQsVUFBVSxLQUFLLElBQW5CLEVBQXlCLG9CQUFPO0FBQUEsMEJBQWFDLEtBQUssQ0FBQzhELE9BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBRXpCLE1BQUluRSxTQUFKLEVBQWUsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUVmLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLDhEQUFDLHVDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLCtDQUFmO0FBQUEsa0JBQ0duQyxPQUFPLENBQUN1Qix1QkFBUixLQUFvQyxLQUFwQyxHQUE0QyxJQUE1QyxnQkFDQztBQUFLLG1CQUFTLEVBQUMsTUFBZjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyxtQkFBZjtBQUFBLG1DQUNFO0FBQU8sdUJBQVMsRUFBQyxrQkFBakI7QUFBQSxzQ0FDRTtBQUNFLG9CQUFJLEVBQUMsVUFEUDtBQUVFLHlCQUFTLEVBQUMsa0JBRlo7QUFHRSx3QkFBUSxFQUFFa0Usb0JBSFo7QUFJRSx1QkFBTyxFQUFFSjtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQVlFO0FBQUsscUJBQVMsRUFBQyxtQkFBZjtBQUFBLG1DQUNFO0FBQU8sdUJBQVMsRUFBQyxrQkFBakI7QUFBQSxzQ0FDRTtBQUNFLG9CQUFJLEVBQUMsVUFEUDtBQUVFLHlCQUFTLEVBQUMsa0JBRlo7QUFHRSx3QkFBUSxFQUFFSyxrQkFIWjtBQUlFLHVCQUFPLEVBQUVIO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUE2QkU7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLG9CQUNHYyxtQkFBbUIsQ0FBQ0UsR0FBcEIsQ0FBeUIxQixVQUFELElBQWdCO0FBQ3ZDLGdDQUNFLDhEQUFDLG1EQUFEO0FBRUUsd0JBQVUsRUFBRUEsVUFGZDtBQUdFLG9DQUFzQixFQUFFYztBQUgxQixlQUNPZCxVQUFVLENBQUNFLEVBRGxCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREY7QUFPRCxXQVJBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWlERCxDQXJHRDs7QUF1R0EsK0RBQWVLLFFBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0dBLE1BQU1vQixlQUFlLEdBQUcsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQ3pDLFdBQVNDLGNBQVQsQ0FBd0JDLGFBQXhCLEVBQXVDO0FBQ3JDLFdBQU9ILEtBQUssQ0FBQ3JFLFdBQU4sQ0FBa0JtRSxHQUFsQixDQUFzQixDQUFDTSxJQUFELEVBQU85RCxLQUFQLEtBQWlCO0FBQzVDLFVBQUk4RCxJQUFJLENBQUM5QixFQUFMLEtBQVkyQixNQUFNLENBQUMzQixFQUF2QixFQUEyQjtBQUN6QiwrQ0FBWThCLElBQVo7QUFBa0IxQixrQkFBUSxFQUFFeUI7QUFBNUI7QUFDRDs7QUFDRCxhQUFPQyxJQUFQO0FBQ0QsS0FMTSxDQUFQO0FBTUQ7O0FBQ0QsVUFBUUgsTUFBTSxDQUFDSSxJQUFmO0FBQ0UsU0FBSyxnQkFBTDtBQUF1QjtBQUNyQiwrQ0FDS0wsS0FETDtBQUVFckUscUJBQVcsRUFBRXNFLE1BQU0sQ0FBQ0ssSUFGdEI7QUFHRTVFLG1CQUFTLEVBQUUsS0FIYjtBQUlFSSxvQkFBVSxFQUFFO0FBSmQ7QUFNRDs7QUFDRCxTQUFLLG9CQUFMO0FBQTJCO0FBQ3pCLCtDQUFZa0UsS0FBWjtBQUFtQmhFLGlDQUF1QixFQUFFLElBQUl1RSxJQUFKLEdBQVdDLE9BQVg7QUFBNUM7QUFDRDs7QUFDRCxTQUFLLFVBQUw7QUFBaUI7QUFDZiwrQ0FBWVIsS0FBWjtBQUFtQnJFLHFCQUFXLEVBQUV1RSxjQUFjLENBQUMsSUFBRDtBQUE5QztBQUNEOztBQUNELFNBQUssWUFBTDtBQUFtQjtBQUNqQiwrQ0FBWUYsS0FBWjtBQUFtQnJFLHFCQUFXLEVBQUV1RSxjQUFjLENBQUMsS0FBRDtBQUE5QztBQUNEOztBQUNELFNBQUssNkJBQUw7QUFBb0M7QUFDbEMsK0NBQVlGLEtBQVo7QUFBbUJwRSw0QkFBa0IsRUFBRW9FLEtBQUssQ0FBQ3BFLGtCQUFOLEdBQTJCO0FBQWxFO0FBQ0Q7O0FBQ0QsU0FBSyxTQUFMO0FBQWdCO0FBQ2QsK0NBQVlvRSxLQUFaO0FBQW1CbEUsb0JBQVUsRUFBRSxJQUEvQjtBQUFxQ0MsZUFBSyxFQUFFa0UsTUFBTSxDQUFDbEU7QUFBbkQ7QUFDRDs7QUFDRDtBQUNFLGFBQU9pRSxLQUFQO0FBekJKO0FBMkJELENBcENEOztBQXFDQSwrREFBZUQsZUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsU0FBUzdELHFCQUFULEdBQWlDO0FBQy9CLFFBQU1wQyxtQkFBbUIsR0FBR3VCLGlEQUFVLENBQUNqQyx1RUFBRCxDQUF0QztBQUVBLFFBQU07QUFBQSxPQUNKO0FBQ0VzQyxlQURGO0FBRUVDLGlCQUZGO0FBR0VDLHdCQUhGO0FBSUVFLGdCQUpGO0FBS0VDLFdBTEY7QUFNRUM7QUFORixLQURJO0FBQUEsT0FTSnlFO0FBVEksTUFVRkMsaURBQVUsQ0FBQ1gscURBQUQsRUFBa0I7QUFDOUJyRSxhQUFTLEVBQUUsS0FEbUI7QUFFOUJDLGVBQVcsRUFBRTdCLG1CQUZpQjtBQUc5QjhCLHNCQUFrQixFQUFFLENBSFU7QUFJOUJFLGNBQVUsRUFBRSxLQUprQjtBQUs5QkMsU0FBSyxFQUFFLElBTHVCO0FBTTlCQywyQkFBdUIsRUFBRTtBQU5LLEdBQWxCLENBVmQ7O0FBbUJBLFdBQVNaLDJCQUFULEdBQXVDO0FBQ3JDcUYsWUFBUSxDQUFDO0FBQUVKLFVBQUksRUFBRTtBQUFSLEtBQUQsQ0FBUjtBQUNEOztBQUVELFdBQVNwRSxrQkFBVCxHQUE4QjtBQUM1QndFLFlBQVEsQ0FBQztBQUFFSixVQUFJLEVBQUU7QUFBUixLQUFELENBQVI7QUFDRDs7QUFFRCxXQUFTeEUscUJBQVQsQ0FBK0J1QyxVQUEvQixFQUEyQztBQUN6QyxVQUFNdUMsVUFBVSxHQUFHLGtCQUFrQjtBQUNuQyxZQUFNQyxnREFBQSxDQUFXLGlCQUFnQnhDLFVBQVUsQ0FBQ0UsRUFBRyxFQUF6QyxrQ0FDREYsVUFEQztBQUVKTSxnQkFBUSxFQUFFLENBQUNOLFVBQVUsQ0FBQ007QUFGbEIsU0FBTjtBQUlBTixnQkFBVSxDQUFDTSxRQUFYLEtBQXdCLElBQXhCLEdBQ0krQixRQUFRLENBQUM7QUFBRUosWUFBSSxFQUFFLFlBQVI7QUFBc0IvQixVQUFFLEVBQUVGLFVBQVUsQ0FBQ0U7QUFBckMsT0FBRCxDQURaLEdBRUltQyxRQUFRLENBQUM7QUFBRUosWUFBSSxFQUFFLFVBQVI7QUFBb0IvQixVQUFFLEVBQUVGLFVBQVUsQ0FBQ0U7QUFBbkMsT0FBRCxDQUZaO0FBR0QsS0FSRDs7QUFVQXFDLGNBQVU7QUFDWDs7QUFFRG5ELGtEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1xRCxTQUFTLEdBQUcsa0JBQWtCO0FBQ2xDLFVBQUk7QUFDRixZQUFJQyxNQUFNLEdBQUcsTUFBTUYsZ0RBQUEsQ0FBVSxlQUFWLENBQW5CO0FBQ0FILGdCQUFRLENBQUM7QUFBRUosY0FBSSxFQUFFLGdCQUFSO0FBQTBCQyxjQUFJLEVBQUVRLE1BQU0sQ0FBQ1I7QUFBdkMsU0FBRCxDQUFSO0FBQ0QsT0FIRCxDQUdFLE9BQU9uRyxDQUFQLEVBQVU7QUFDVnNHLGdCQUFRLENBQUM7QUFBRUosY0FBSSxFQUFFLFNBQVI7QUFBbUJ0RSxlQUFLLEVBQUU1QjtBQUExQixTQUFELENBQVI7QUFDRDtBQUNGLEtBUEQ7O0FBUUEwRyxhQUFTO0FBRVQsV0FBTyxNQUFNO0FBQ1h6RyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0QsS0FGRDtBQUdELEdBZFEsRUFjTixFQWRNLENBQVQ7QUFnQkEsU0FBTztBQUNMcUIsYUFESztBQUVMQyxlQUZLO0FBR0xDLHNCQUhLO0FBSUxSLCtCQUpLO0FBS0xTLHlCQUxLO0FBTUxDLGNBTks7QUFPTEMsU0FQSztBQVFMRSxzQkFSSztBQVNMRDtBQVRLLEdBQVA7QUFXRDs7QUFDRCwrREFBZUUscUJBQWYsRTs7Ozs7Ozs7OztBQzlFQSxlIiwiZmlsZSI6InNyY19HbG9iYWxTdGF0ZV9qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSAnLi4vc3JjL0FwcCc7XHJcblxyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBJbml0aWFsU3BlYWtlcnNEYXRhQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbi8vICAgLy8gRmV0Y2ggZGF0YSBmcm9tIGV4dGVybmFsIEFQSVxyXG4vLyAgIC8vIFRoaXMgY29kZSBpcyBydW5uaW5nIGluc2lkZSB0aGUgc2FtZSBzZXJ2ZXIgdGhhdCBpcyBydW5uaW5nIEFQSSBSb3V0ZXMgZm9yIFJFU1QgY2FsbHMsIHdlXHJcbi8vICAgLy8gbmVlZCB0byBnbyB0byB0aGUgc2FtZSBmaWxlIGZvciBkYXRhIHRoYXQgdGhlIFJFU1Qgc2VydmVyIGdvZXMgdG8gZ2V0IGl0J3MgZGF0YS4gSWYgdGhpcyB3ZXJlIGFcclxuLy8gICAvLyByZWFsIGNvbXBhbnkgYXBwLCBUaGUgUkVTVCBzZXJ2ZXIgd291bGQgYmUgZXh0ZXJuYWwgdG8gb3VyIE5leHRKUyBzZXJ2ZXIgYW5kIHdlIHdvdWxkIHVzZSBjYWxscyBsaWtlIHRoaXNcclxuLy8gICAvLyB0byBnZXQgdGhlIGRhdGE6XHJcbi8vICAgLy9cclxuLy8gICAvLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovLy4uLi9kYXRhYClcclxuLy8gICAvLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbi8vICAgLy9cclxuLy9cclxuLy8gICBjb25zdCB7IHByb21pc2lmeSB9ID0gcmVxdWlyZSgndXRpbCcpO1xyXG4vLyAgIGNvbnN0IHJlYWRGaWxlID0gcHJvbWlzaWZ5KGZzLnJlYWRGaWxlKTtcclxuLy8gICBjb25zdCBqc29uRmlsZSA9IHBhdGgucmVzb2x2ZSgnLi8nLCAnZGIuanNvbicpO1xyXG4vLyAgIGxldCBpbml0aWFsU3BlYWtlcnNEYXRhO1xyXG4vLyAgIHRyeSB7XHJcbi8vICAgICBjb25zdCByZWFkRmlsZURhdGEgPSBhd2FpdCByZWFkRmlsZShqc29uRmlsZSk7XHJcbi8vICAgICBpbml0aWFsU3BlYWtlcnNEYXRhID0gSlNPTi5wYXJzZShyZWFkRmlsZURhdGEpLnNwZWFrZXJzO1xyXG4vLyAgIH0gY2F0Y2ggKGUpIHtcclxuLy8gICAgIGNvbnNvbGUubG9nKCcvYXBpL3NwZWFrZXJzIGVycm9yOicsIGUpO1xyXG4vLyAgIH1cclxuLy9cclxuLy8gICAvLyBQYXNzIGRhdGEgdG8gdGhlIHBhZ2UgdmlhIHByb3BzXHJcbi8vICAgcmV0dXJuIHsgcHJvcHM6IHsgaW5pdGlhbFNwZWFrZXJzRGF0YSB9IH07XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgeyBwcm9taXNpZnkgfSA9IHJlcXVpcmUoJ3V0aWwnKTtcclxuICBjb25zdCByZWFkRmlsZSA9IHByb21pc2lmeShmcy5yZWFkRmlsZSk7XHJcbiAgY29uc3QganNvbkZpbGUgPSBwYXRoLnJlc29sdmUoJy4vJywgJ2RiLmpzb24nKTtcclxuICBsZXQgaW5pdGlhbFNwZWFrZXJzRGF0YTtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVhZEZpbGVEYXRhID0gYXdhaXQgcmVhZEZpbGUoanNvbkZpbGUpO1xyXG4gICAgaW5pdGlhbFNwZWFrZXJzRGF0YSA9IEpTT04ucGFyc2UocmVhZEZpbGVEYXRhKS5zcGVha2VycztcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZygnL2FwaS9zcGVha2VycyBlcnJvcjonLCBlKTtcclxuICB9XHJcblxyXG4gIGlmICghaW5pdGlhbFNwZWFrZXJzRGF0YSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbm90Rm91bmQ6IHRydWUsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IGluaXRpYWxTcGVha2Vyc0RhdGEgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXHJcbiAgICAvLyBOZXh0LmpzIHdpbGwgYXR0ZW1wdCB0byByZS1nZW5lcmF0ZSB0aGUgcGFnZTpcclxuICAgIC8vIC0gV2hlbiBhIHJlcXVlc3QgY29tZXMgaW5cclxuICAgIC8vIC0gQXQgbW9zdCBvbmNlIGV2ZXJ5IHNlY29uZFxyXG4gICAgcmV2YWxpZGF0ZTogMzYwMCwgLy8gSW4gc2Vjb25kc1xyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNwZWFrZXJzKHsgaW5pdGlhbFNwZWFrZXJzRGF0YSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxJbml0aWFsU3BlYWtlcnNEYXRhQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17aW5pdGlhbFNwZWFrZXJzRGF0YX0+XHJcbiAgICAgIDxBcHAgcGFnZU5hbWU9XCJTcGVha2Vyc1wiIC8+XHJcbiAgICA8L0luaXRpYWxTcGVha2Vyc0RhdGFDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNwZWFrZXJzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUnO1xyXG5pbXBvcnQgU3BlYWtlcnMgZnJvbSAnLi9TcGVha2Vycyc7XHJcbmltcG9ydCB7IEdsb2JhbFByb3ZpZGVyIH0gZnJvbSAnLi9HbG9iYWxTdGF0ZSc7XHJcbmltcG9ydCB7IEZhdm9yaXRlQ2xpY2tDb3VudFByb3ZpZGVyIH0gZnJvbSAnLi9GYXZvcml0ZUNsaWNrQ291bnRDb250ZXh0JztcclxuXHJcbmV4cG9ydCBjb25zdCBDb25maWdDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgcGFnZVRvU2hvdyA9IChwYWdlTmFtZSkgPT4ge1xyXG4gIGlmIChwYWdlTmFtZSA9PT0gJ0hvbWUnKSByZXR1cm4gPEhvbWUgLz47XHJcbiAgaWYgKHBhZ2VOYW1lID09PSAnU3BlYWtlcnMnKSByZXR1cm4gPFNwZWFrZXJzIC8+O1xyXG4gIHJldHVybiA8ZGl2Pk5vdCBGb3VuZDwvZGl2PjtcclxufTtcclxuXHJcbmNvbnN0IGNvbmZpZ1ZhbHVlID0ge1xyXG4gIHNob3dTaWduTWVVcDogdHJ1ZSxcclxuICBzaG93U3BlYWtlclNwZWFraW5nRGF5czogdHJ1ZSxcclxufTtcclxuXHJcbmNvbnN0IEFwcCA9ICh7IHBhZ2VOYW1lIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbmZpZ0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbmZpZ1ZhbHVlfT5cclxuICAgICAgPEdsb2JhbFByb3ZpZGVyPlxyXG4gICAgICAgIDxGYXZvcml0ZUNsaWNrQ291bnRQcm92aWRlcj5cclxuICAgICAgICAgIDxkaXY+e3BhZ2VUb1Nob3cocGFnZU5hbWUpfTwvZGl2PlxyXG4gICAgICAgIDwvRmF2b3JpdGVDbGlja0NvdW50UHJvdmlkZXI+XHJcbiAgICAgIDwvR2xvYmFsUHJvdmlkZXI+XHJcbiAgICA8L0NvbmZpZ0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi9HbG9iYWxTdGF0ZSc7XHJcblxyXG5leHBvcnQgY29uc3QgRmF2b3JpdGVDbGlja0NvdW50Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBGYXZvcml0ZUNsaWNrQ291bnRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCB7IGluY3JlbWVudEZhdm9yaXRlQ2xpY2tDb3VudCB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuXHJcbiAgLy8gY29uc3QgcHJvdmlkZXIgPSB7XHJcbiAgLy8gICBpbmNyZW1lbnRGYXZvcml0ZUNsaWNrQ291bnQsXHJcbiAgLy8gfTtcclxuXHJcbiAgY29uc3QgcHJvdmlkZXIgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIHJldHVybiB7IGluY3JlbWVudEZhdm9yaXRlQ2xpY2tDb3VudCB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGYXZvcml0ZUNsaWNrQ291bnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtwcm92aWRlcn0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvRmF2b3JpdGVDbGlja0NvdW50Q29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlU3BlYWtlckRhdGFNYW5hZ2VyIGZyb20gJy4vdXNlU3BlYWtlckRhdGFNYW5hZ2VyJztcclxuXHJcbmV4cG9ydCBjb25zdCBHbG9iYWxDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdsb2JhbFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGlzTG9hZGluZyxcclxuICAgIHNwZWFrZXJMaXN0LFxyXG4gICAgZmF2b3JpdGVDbGlja0NvdW50LFxyXG4gICAgdG9nZ2xlU3BlYWtlckZhdm9yaXRlLFxyXG4gICAgaW5jcmVtZW50RmF2b3JpdGVDbGlja0NvdW50LFxyXG4gICAgaGFzRXJyb3JlZCxcclxuICAgIGVycm9yLFxyXG4gICAgaW1hZ2VSZXJlbmRlcklkZW50aWZpZXIsXHJcbiAgICBmb3JjZUltYWdlUmVyZW5kZXIsXHJcbiAgfSA9IHVzZVNwZWFrZXJEYXRhTWFuYWdlcigpO1xyXG5cclxuICBjb25zdCBwcm92aWRlciA9IHtcclxuICAgIGlzTG9hZGluZyxcclxuICAgIHNwZWFrZXJMaXN0LFxyXG4gICAgZmF2b3JpdGVDbGlja0NvdW50LFxyXG4gICAgdG9nZ2xlU3BlYWtlckZhdm9yaXRlLFxyXG4gICAgaW5jcmVtZW50RmF2b3JpdGVDbGlja0NvdW50LFxyXG4gICAgaGFzRXJyb3JlZCxcclxuICAgIGVycm9yLFxyXG4gICAgaW1hZ2VSZXJlbmRlcklkZW50aWZpZXIsXHJcbiAgICBmb3JjZUltYWdlUmVyZW5kZXIsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHbG9iYWxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtwcm92aWRlcn0+e2NoaWxkcmVufTwvR2xvYmFsQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNpZ25NZVVwIGZyb20gJy4vU2lnbk1lVXAnO1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi9HbG9iYWxTdGF0ZSc7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNpZ251cENhbGxiYWNrID0gKGVtYWlsKSA9PiB7XHJcbiAgICByZXR1cm4gY29uc29sZS5sb2coYHNpZ24gdXAgY2FsbGVkIHdpdGggZW1haWwgJHtlbWFpbH1gKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB7IGZhdm9yaXRlQ2xpY2tDb3VudCB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJqdW1ib3Ryb24ganVtYm90cm9uaGVpZ2h0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LXVwcGVyY2FzZVwiPk9jdG9iZXIgMTktMjAmbmJzcDsmbmJzcDsyMDE5PC9oNj5cclxuICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LXVwcGVyY2FzZVwiPlNhbiBKb3NlLCBDYWxpZm9ybmlhPC9oNj5cclxuICAgICAgICAgIDxoNT48L2g1PlxyXG4gICAgICAgICAgPGgzPkNsaWNrIENvdW50IHtmYXZvcml0ZUNsaWNrQ291bnR9PC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tOCB0ZXh0LWxnLXJpZ2h0XCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvU1ZDQ2xvZ28ucG5nXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGgyPlNpbGljb24gVmFsbGV5IENvZGUgQ2FtcCAyMDE5PC9oMj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGNvbC0xMiB0ZXh0LWxnLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxTaWduTWVVcCBzaWdudXBDYWxsYmFjaz17c2lnbnVwQ2FsbGJhY2t9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi9zcmMvSGVhZGVyJztcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gJy4uL3NyYy9NZW51JztcclxuXHJcbmZ1bmN0aW9uIGluZGV4KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxNZW51IC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBtYXJnaW50b3Bib3R0b21cIj5cclxuICAgICAgICAgICAgPGgyPkhvbWU8L2gyPlxyXG4gICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibWFyZ2ludG9wYm90dG9tMjBcIj5cclxuICAgICAgICAgICAgICBDb2RlIENhbXAgaXMgYSBjb21tdW5pdHkgZXZlbnQgd2hlcmUgZGV2ZWxvcGVycyBsZWFybiBmcm9tIGZlbGxvd1xyXG4gICAgICAgICAgICAgIGRldmVsb3BlcnMuIFdlIGFsc28gaGF2ZSBkZXZlbG9wZXIgcmVsYXRlZCB0b3BpY3MgdGhhdCBpbmNsdWRlXHJcbiAgICAgICAgICAgICAgc29mdHdhcmUgYnJhbmRpbmcsIGxlZ2FsIGlzc3VlcyBhcm91bmQgc29mdHdhcmUgYXMgd2VsbCBhcyBvdGhlclxyXG4gICAgICAgICAgICAgIHRvcGljcyBkZXZlbG9wZXJzIGFyZSBpbnRlcmVzdGVkIGluIGhlYXJpbmcgYWJvdXQuXHJcbiAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gJy4vR2xvYmFsU3RhdGUnO1xyXG5cclxuY29uc3QgSW1hZ2VUb2dnbGVPblNjcm9sbCA9ICh7IHByaW1hcnlJbWcsIHNlY29uZGFyeUltZyB9KSA9PiB7XHJcbiAgY29uc3QgaW1hZ2VSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IHsgaW1hZ2VSZXJlbmRlcklkZW50aWZpZXIgfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc3QgaXNJblZpZXcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByZWN0ID0gaW1hZ2VSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHJldHVybiByZWN0LnRvcCA+PSAwICYmIHJlY3QuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICB9O1xyXG5cclxuICBjb25zdCBbaW5WaWV3LCBzZXRJblZpZXddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIHNldEluVmlldyhpc0luVmlldygpKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBzY3JvbGxIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0SW5WaWV3KGlzSW5WaWV3KCkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aW1nXHJcbiAgICAgIHNyYz17XHJcbiAgICAgICAgaXNMb2FkaW5nXHJcbiAgICAgICAgICA/ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFQLy8vd0FBQUNINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQ1JBRUFPdz09JyAvLyAxeDFnaWZcclxuICAgICAgICAgIDogaW5WaWV3XHJcbiAgICAgICAgICA/IHNlY29uZGFyeUltZ1xyXG4gICAgICAgICAgOiBwcmltYXJ5SW1nXHJcbiAgICAgIH1cclxuICAgICAgYWx0PVwiXCJcclxuICAgICAgcmVmPXtpbWFnZVJlZn1cclxuICAgICAgd2lkdGg9XCIyMDBcIlxyXG4gICAgICBoZWlnaHQ9XCIyMDBcIlxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VUb2dnbGVPblNjcm9sbDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmV4cG9ydCBjb25zdCBNZW51ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLXNtIGJnLWRhcmsgbmF2YmFyLWRhcmtcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5Ib21lPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc3BlYWtlcnNcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlNwZWFrZXJzPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb25maWdDb250ZXh0IH0gZnJvbSAnLi9BcHAnO1xyXG5cclxuY29uc3QgU2lnbk1lVXAgPSAoeyBzaWdudXBDYWxsYmFjayB9KSA9PiB7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dCk7XHJcblxyXG4gIHJldHVybiBjb250ZXh0LnNob3dTaWduTWVVcCA9PT0gZmFsc2UgPyBudWxsIDogKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEVtYWlsXCJcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXshZW1haWwuaW5jbHVkZXMoJ0AnKX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNpZ251cENhbGxiYWNrKGVtYWlsKTtcclxuICAgICAgICAgICAgICBzZXRFbWFpbCgnJyk7XHJcbiAgICAgICAgICAgICAgYWxlcnQoJ3NpZ251cCBjb25maXJtZWQnKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuXCJcclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEdldCBVcGRhdGVzXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbk1lVXA7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2VUb2dnbGVPblNjcm9sbCBmcm9tICcuL0ltYWdlVG9nZ2xlT25TY3JvbGwnO1xyXG5pbXBvcnQgdXNlU3BlYWtlckRhdGFNYW5hZ2VyIGZyb20gJy4vdXNlU3BlYWtlckRhdGFNYW5hZ2VyJztcclxuaW1wb3J0IHsgRmF2b3JpdGVDbGlja0NvdW50Q29udGV4dCB9IGZyb20gJy4vRmF2b3JpdGVDbGlja0NvdW50Q29udGV4dCc7XHJcblxyXG5jb25zdCBTcGVha2VyRGV0YWlsID0gUmVhY3QubWVtbygoeyBzcGVha2VyUmVjLCBvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyIH0pID0+IHtcclxuICBjb25zdCB7IGlkLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBiaW8sIGZhdm9yaXRlIH0gPSBzcGVha2VyUmVjO1xyXG4gIGNvbnNvbGUubG9nKGBTcGVha2VyRGV0YWlsOiR7aWR9ICR7Zmlyc3ROYW1lfSAke2xhc3ROYW1lfSAke2Zhdm9yaXRlfWApO1xyXG5cclxuICBjb25zdCB7IGluY3JlbWVudEZhdm9yaXRlQ2xpY2tDb3VudCB9ID0gdXNlQ29udGV4dChGYXZvcml0ZUNsaWNrQ291bnRDb250ZXh0KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjb2wtNCBjYXJkbWluXCI+XHJcbiAgICAgIDxJbWFnZVRvZ2dsZU9uU2Nyb2xsXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCJcclxuICAgICAgICBwcmltYXJ5SW1nPXtgL3N0YXRpYy9zcGVha2Vycy9idy9TcGVha2VyLSR7aWR9LmpwZ2B9XHJcbiAgICAgICAgc2Vjb25kYXJ5SW1nPXtgL3N0YXRpYy9zcGVha2Vycy9TcGVha2VyLSR7aWR9LmpwZ2B9XHJcbiAgICAgICAgYWx0PVwie2ZpcnN0TmFtZX0ge2xhc3ROYW1lfVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtmYXZvcml0ZSA/ICdoZWFydHJlZGJ1dHRvbicgOiAnaGVhcnRkYXJrYnV0dG9uJ31cclxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICBvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyKGUsIHNwZWFrZXJSZWMpO1xyXG4gICAgICAgICAgICAgIGluY3JlbWVudEZhdm9yaXRlQ2xpY2tDb3VudCgpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICB7Zmlyc3ROYW1lfSB7bGFzdE5hbWV9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9oND5cclxuXHJcbiAgICAgICAgPHNwYW4+e2Jpb308L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyRGV0YWlsO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi9IZWFkZXInO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnLi9NZW51JztcclxuaW1wb3J0IFNwZWFrZXJEZXRhaWwgZnJvbSAnLi9TcGVha2VyRGV0YWlsJztcclxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gJy4vQXBwJztcclxuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gJy4vR2xvYmFsU3RhdGUnO1xyXG5cclxuY29uc3QgU3BlYWtlcnMgPSAoe30pID0+IHtcclxuICBjb25zdCBbc3BlYWtpbmdTYXR1cmRheSwgc2V0U3BlYWtpbmdTYXR1cmRheV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbc3BlYWtpbmdTdW5kYXksIHNldFNwZWFraW5nU3VuZGF5XSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICBpc0xvYWRpbmcsXHJcbiAgICBzcGVha2VyTGlzdCxcclxuICAgIHRvZ2dsZVNwZWFrZXJGYXZvcml0ZSxcclxuICAgIGhhc0Vycm9yZWQsXHJcbiAgICBlcnJvcixcclxuICAgIGZvcmNlSW1hZ2VSZXJlbmRlcixcclxuICB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlU2F0dXJkYXkgPSAoKSA9PiB7XHJcbiAgICBmb3JjZUltYWdlUmVyZW5kZXIoKTtcclxuICAgIHNldFNwZWFraW5nU2F0dXJkYXkoIXNwZWFraW5nU2F0dXJkYXkpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlU3VuZGF5ID0gKCkgPT4ge1xyXG4gICAgZm9yY2VJbWFnZVJlcmVuZGVyKCk7XHJcbiAgICBzZXRTcGVha2luZ1N1bmRheSghc3BlYWtpbmdTdW5kYXkpO1xyXG4gIH07XHJcbiAgY29uc3QgaGVhcnRGYXZvcml0ZUhhbmRsZXIgPSB1c2VDYWxsYmFjaygoZSwgc3BlYWtlclJlYykgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdG9nZ2xlU3BlYWtlckZhdm9yaXRlKHNwZWFrZXJSZWMpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgbmV3U3BlYWtlckxpc3QgPSB1c2VNZW1vKFxyXG4gICAgKCkgPT5cclxuICAgICAgc3BlYWtlckxpc3RcclxuICAgICAgICAuZmlsdGVyKFxyXG4gICAgICAgICAgKHsgc2F0LCBzdW4gfSkgPT5cclxuICAgICAgICAgICAgKHNwZWFraW5nU2F0dXJkYXkgJiYgc2F0KSB8fCAoc3BlYWtpbmdTdW5kYXkgJiYgc3VuKSxcclxuICAgICAgICApXHJcbiAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgIGlmIChhLmZpcnN0TmFtZSA8IGIuZmlyc3ROYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChhLmZpcnN0TmFtZSA+IGIuZmlyc3ROYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSksXHJcbiAgICBbc3BlYWtpbmdTYXR1cmRheSwgc3BlYWtpbmdTdW5kYXksIHNwZWFrZXJMaXN0XSxcclxuICApO1xyXG5cclxuICBjb25zdCBzcGVha2VyTGlzdEZpbHRlcmVkID0gaXNMb2FkaW5nID8gW10gOiBuZXdTcGVha2VyTGlzdDtcclxuXHJcbiAgaWYgKGhhc0Vycm9yZWQgPT09IHRydWUpIHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj47XHJcblxyXG4gIGlmIChpc0xvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxNZW51IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tdG9vbGJhciAgbWFyZ2ludG9wYm90dG9tNSBjaGVja2JveC1iaWdnZXJcIj5cclxuICAgICAgICAgIHtjb250ZXh0LnNob3dTcGVha2VyU3BlYWtpbmdEYXlzID09PSBmYWxzZSA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVNhdHVyZGF5fVxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NwZWFraW5nU2F0dXJkYXl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIFNhdHVyZGF5IFNwZWFrZXJzXHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVN1bmRheX1cclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzcGVha2luZ1N1bmRheX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgU3VuZGF5IFNwZWFrZXJzXHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1kZWNrXCI+XHJcbiAgICAgICAgICAgIHtzcGVha2VyTGlzdEZpbHRlcmVkLm1hcCgoc3BlYWtlclJlYykgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8U3BlYWtlckRldGFpbFxyXG4gICAgICAgICAgICAgICAgICBrZXk9e3NwZWFrZXJSZWMuaWR9XHJcbiAgICAgICAgICAgICAgICAgIHNwZWFrZXJSZWM9e3NwZWFrZXJSZWN9XHJcbiAgICAgICAgICAgICAgICAgIG9uSGVhcnRGYXZvcml0ZUhhbmRsZXI9e2hlYXJ0RmF2b3JpdGVIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVha2VycztcclxuIiwiY29uc3Qgc3BlYWtlcnNSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBmdW5jdGlvbiB1cGRhdGVGYXZvcml0ZShmYXZvcml0ZVZhbHVlKSB7XHJcbiAgICByZXR1cm4gc3RhdGUuc3BlYWtlckxpc3QubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoaXRlbS5pZCA9PT0gYWN0aW9uLmlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uaXRlbSwgZmF2b3JpdGU6IGZhdm9yaXRlVmFsdWUgfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaXRlbTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdzZXRTcGVha2VyTGlzdCc6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzcGVha2VyTGlzdDogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBoYXNFcnJvcmVkOiBmYWxzZSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNhc2UgJ2ZvcmNlSW1hZ2VSZXJlbmRlcic6IHtcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGltYWdlUmVyZW5kZXJJZGVudGlmaWVyOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSAnZmF2b3JpdGUnOiB7XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzcGVha2VyTGlzdDogdXBkYXRlRmF2b3JpdGUodHJ1ZSkgfTtcclxuICAgIH1cclxuICAgIGNhc2UgJ3VuZmF2b3JpdGUnOiB7XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzcGVha2VyTGlzdDogdXBkYXRlRmF2b3JpdGUoZmFsc2UpIH07XHJcbiAgICB9XHJcbiAgICBjYXNlICdpbmNyZW1lbnRGYXZvcml0ZUNsaWNrQ291bnQnOiB7XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBmYXZvcml0ZUNsaWNrQ291bnQ6IHN0YXRlLmZhdm9yaXRlQ2xpY2tDb3VudCArIDEgfTtcclxuICAgIH1cclxuICAgIGNhc2UgJ2Vycm9yZWQnOiB7XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBoYXNFcnJvcmVkOiB0cnVlLCBlcnJvcjogYWN0aW9uLmVycm9yIH07XHJcbiAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBzcGVha2Vyc1JlZHVjZXI7XHJcbiIsImltcG9ydCBzcGVha2Vyc1JlZHVjZXIgZnJvbSAnLi9zcGVha2Vyc1JlZHVjZXInO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgeyBJbml0aWFsU3BlYWtlcnNEYXRhQ29udGV4dCB9IGZyb20gJy4uL3BhZ2VzL3NwZWFrZXJzJztcclxuXHJcbmZ1bmN0aW9uIHVzZVNwZWFrZXJEYXRhTWFuYWdlcigpIHtcclxuICBjb25zdCBpbml0aWFsU3BlYWtlcnNEYXRhID0gdXNlQ29udGV4dChJbml0aWFsU3BlYWtlcnNEYXRhQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IFtcclxuICAgIHtcclxuICAgICAgaXNMb2FkaW5nLFxyXG4gICAgICBzcGVha2VyTGlzdCxcclxuICAgICAgZmF2b3JpdGVDbGlja0NvdW50LFxyXG4gICAgICBoYXNFcnJvcmVkLFxyXG4gICAgICBlcnJvcixcclxuICAgICAgaW1hZ2VSZXJlbmRlcklkZW50aWZpZXIsXHJcbiAgICB9LFxyXG4gICAgZGlzcGF0Y2gsXHJcbiAgXSA9IHVzZVJlZHVjZXIoc3BlYWtlcnNSZWR1Y2VyLCB7XHJcbiAgICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgc3BlYWtlckxpc3Q6IGluaXRpYWxTcGVha2Vyc0RhdGEsXHJcbiAgICBmYXZvcml0ZUNsaWNrQ291bnQ6IDAsXHJcbiAgICBoYXNFcnJvcmVkOiBmYWxzZSxcclxuICAgIGVycm9yOiBudWxsLFxyXG4gICAgaW1hZ2VSZXJlbmRlcklkZW50aWZpZXI6IDAsXHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIGluY3JlbWVudEZhdm9yaXRlQ2xpY2tDb3VudCgpIHtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ2luY3JlbWVudEZhdm9yaXRlQ2xpY2tDb3VudCcgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBmb3JjZUltYWdlUmVyZW5kZXIoKSB7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdmb3JjZUltYWdlUmVyZW5kZXInIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdG9nZ2xlU3BlYWtlckZhdm9yaXRlKHNwZWFrZXJSZWMpIHtcclxuICAgIGNvbnN0IHVwZGF0ZURhdGEgPSBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLnB1dChgL2FwaS9zcGVha2Vycy8ke3NwZWFrZXJSZWMuaWR9YCwge1xyXG4gICAgICAgIC4uLnNwZWFrZXJSZWMsXHJcbiAgICAgICAgZmF2b3JpdGU6ICFzcGVha2VyUmVjLmZhdm9yaXRlLFxyXG4gICAgICB9KTtcclxuICAgICAgc3BlYWtlclJlYy5mYXZvcml0ZSA9PT0gdHJ1ZVxyXG4gICAgICAgID8gZGlzcGF0Y2goeyB0eXBlOiAndW5mYXZvcml0ZScsIGlkOiBzcGVha2VyUmVjLmlkIH0pXHJcbiAgICAgICAgOiBkaXNwYXRjaCh7IHR5cGU6ICdmYXZvcml0ZScsIGlkOiBzcGVha2VyUmVjLmlkIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB1cGRhdGVEYXRhKCk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvc3BlYWtlcnMnKTtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdzZXRTcGVha2VyTGlzdCcsIGRhdGE6IHJlc3VsdC5kYXRhIH0pO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnZXJyb3JlZCcsIGVycm9yOiBlIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hEYXRhKCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ2NsZWFudXAnKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaXNMb2FkaW5nLFxyXG4gICAgc3BlYWtlckxpc3QsXHJcbiAgICBmYXZvcml0ZUNsaWNrQ291bnQsXHJcbiAgICBpbmNyZW1lbnRGYXZvcml0ZUNsaWNrQ291bnQsXHJcbiAgICB0b2dnbGVTcGVha2VyRmF2b3JpdGUsXHJcbiAgICBoYXNFcnJvcmVkLFxyXG4gICAgZXJyb3IsXHJcbiAgICBmb3JjZUltYWdlUmVyZW5kZXIsXHJcbiAgICBpbWFnZVJlcmVuZGVySWRlbnRpZmllcixcclxuICB9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHVzZVNwZWFrZXJEYXRhTWFuYWdlcjtcclxuIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==