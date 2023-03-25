"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./components/legacyData.js":
/*!**********************************!*\
  !*** ./components/legacyData.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/constants */ \"./utils/constants.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar legacyData = function(props) {\n    var ref9, ref1, ref2, ref3;\n    _s();\n    var nftId = props.nftId, position = props.position;\n    var ref4 = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount)(), address = ref4.address, isConnected = ref4.isConnected;\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), legacy = ref5[0], setLegacy = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), tokenType = ref6[0], setTokenType = ref6[1];\n    // Check If any Beneficiaries\n    var data = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useContractRead)(_objectSpread({}, _utils_constants__WEBPACK_IMPORTED_MODULE_2__.contractConfig, {\n        functionName: \"legacyNFTs\",\n        args: [\n            nftId\n        ]\n    })).data;\n    var ref7 = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useContractWrite)(_objectSpread({}, _utils_constants__WEBPACK_IMPORTED_MODULE_2__.contractRecklessWriteConfig, {\n        functionName: \"removeLegacy\",\n        args: [\n            position, \n        ]\n    })), removeLegacyData = ref7.data, removeLegacy = ref7.write, isRemoveLoading = ref7.isLoading, isRemoveStarted = ref7.isSuccess, removeLegacyError = ref7.error;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var ref, ref8;\n        // console.log(`LegacyNFTs[${nftId}]: ${data?.toString()}`)\n        setLegacy(data);\n        var amount = data === null || data === void 0 ? void 0 : (ref = data.amount) === null || ref === void 0 ? void 0 : ref.toString();\n        var tokenId = data === null || data === void 0 ? void 0 : (ref8 = data.tokenId) === null || ref8 === void 0 ? void 0 : ref8.toNumber();\n        if (tokenId == 0) setTokenType(\"ERC20\");\n        else {\n            if (amount == 0) setTokenType(\"ERC721\");\n            else setTokenType(\"ERC1155\");\n        }\n    }, [\n        data\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-6 grid-row-flow gap-4 w-full mx-auto mt-5 ml-5\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"truncate text-white\",\n                    children: legacy === null || legacy === void 0 ? void 0 : (ref9 = legacy.token) === null || ref9 === void 0 ? void 0 : ref9.toString()\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\WillGaurd\\\\app\\\\frontend\\\\components\\\\legacyData.js\",\n                    lineNumber: 49,\n                    columnNumber: 21\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"truncate text-white\",\n                    children: legacy === null || legacy === void 0 ? void 0 : (ref1 = legacy.beneficiary) === null || ref1 === void 0 ? void 0 : ref1.toString()\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\WillGaurd\\\\app\\\\frontend\\\\components\\\\legacyData.js\",\n                    lineNumber: 50,\n                    columnNumber: 21\n                }, _this),\n                tokenType == \"ERC20\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"justify-self-center truncate text-white\",\n                    children: ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.formatEther(legacy === null || legacy === void 0 ? void 0 : legacy.amount).toString()\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\WillGaurd\\\\app\\\\frontend\\\\components\\\\legacyData.js\",\n                    lineNumber: 52,\n                    columnNumber: 25\n                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"justify-self-center text-white\",\n                    children: legacy === null || legacy === void 0 ? void 0 : (ref2 = legacy.amount) === null || ref2 === void 0 ? void 0 : ref2.toString()\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\WillGaurd\\\\app\\\\frontend\\\\components\\\\legacyData.js\",\n                    lineNumber: 54,\n                    columnNumber: 25\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"justify-self-center text-white\",\n                    children: legacy === null || legacy === void 0 ? void 0 : (ref3 = legacy.tokenId) === null || ref3 === void 0 ? void 0 : ref3.toString()\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\WillGaurd\\\\app\\\\frontend\\\\components\\\\legacyData.js\",\n                    lineNumber: 56,\n                    columnNumber: 21\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"justify-self-center text-white\",\n                    children: tokenType\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\WillGaurd\\\\app\\\\frontend\\\\components\\\\legacyData.js\",\n                    lineNumber: 57,\n                    columnNumber: 21\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"justify-self-center text-white bg-purple-600 hover:bg-red-500 text-bold rounded-full px-6 sm:w-auto\",\n                    onClick: function() {\n                        return removeLegacy();\n                    },\n                    children: \"X\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\WillGaurd\\\\app\\\\frontend\\\\components\\\\legacyData.js\",\n                    lineNumber: 58,\n                    columnNumber: 21\n                }, _this),\n                isRemoveLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"fixed top-0 left-0 bottom-0 right-0 bg-black/[0.5] flex justify-center text-center z-1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-fblack pt-2 pb-8 px-10 rounded-3xl h-fit text-white self-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \" text-xl font-bold p-5\",\n                            children: \"Removing Legacy...\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\WillGaurd\\\\app\\\\frontend\\\\components\\\\legacyData.js\",\n                            lineNumber: 65,\n                            columnNumber: 33\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\WillGaurd\\\\app\\\\frontend\\\\components\\\\legacyData.js\",\n                        lineNumber: 64,\n                        columnNumber: 29\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\WillGaurd\\\\app\\\\frontend\\\\components\\\\legacyData.js\",\n                    lineNumber: 63,\n                    columnNumber: 25\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\WillGaurd\\\\app\\\\frontend\\\\components\\\\legacyData.js\",\n            lineNumber: 48,\n            columnNumber: 17\n        }, _this)\n    }, void 0, false);\n};\n_s(legacyData, \"HShPaI6jE5FUc9sRMjG5jQN4b+8=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount,\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useContractRead,\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useContractWrite\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (legacyData);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzhCQUFFbkIsU0FBUzs7Ozs7eUJBQU07OEJBQy9ELDhEQUFDeUIsUUFBTTtvQkFBQ04sU0FBUyxFQUFDLHFHQUFxRztvQkFDbkhPLE9BQU8sRUFBRTsrQkFBTW5CLFlBQVksRUFBRTtxQkFBQTs4QkFBRSxHQUVuQzs7Ozs7eUJBQVM7Z0JBQ1JFLGVBQWUsa0JBQ1osOERBQUNTLEtBQUc7b0JBQUNDLFNBQVMsRUFBQyx3RkFBd0Y7OEJBQ25HLDRFQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsb0VBQW9FO2tDQUMvRSw0RUFBQ1EsSUFBRTs0QkFBQ1IsU0FBUyxFQUFDLHdCQUF3QjtzQ0FBQyxvQkFBa0I7Ozs7O2lDQUFLOzs7Ozs2QkFDNUQ7Ozs7O3lCQUNKOzs7Ozs7aUJBRVI7cUJBRVgsQ0FDTjtDQUNKO0dBbkVLM0IsVUFBVTs7UUFFcUJOLDZDQUFVO1FBSzFCQyxrREFBZTtRQVk1QkMsbURBQWdCOzs7QUFrRHhCLCtEQUFlSSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sZWdhY3lEYXRhLmpzPzY3OTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlQWNjb3VudCwgdXNlQ29udHJhY3RSZWFkLCB1c2VDb250cmFjdFdyaXRlIH0gZnJvbSBcIndhZ21pXCI7XHJcbmltcG9ydCB7IGNvbnRyYWN0Q29uZmlnLCBjb250cmFjdFJlY2tsZXNzV3JpdGVDb25maWcgfSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcclxuXHJcbmNvbnN0IGxlZ2FjeURhdGEgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgbmZ0SWQsIHBvc2l0aW9uIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHsgYWRkcmVzcywgaXNDb25uZWN0ZWQgfSA9IHVzZUFjY291bnQoKTtcclxuICAgIGNvbnN0IFtsZWdhY3ksIHNldExlZ2FjeV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbdG9rZW5UeXBlLCBzZXRUb2tlblR5cGVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIC8vIENoZWNrIElmIGFueSBCZW5lZmljaWFyaWVzXHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHVzZUNvbnRyYWN0UmVhZCh7XHJcbiAgICAgICAgLi4uY29udHJhY3RDb25maWcsXHJcbiAgICAgICAgZnVuY3Rpb25OYW1lOiBcImxlZ2FjeU5GVHNcIixcclxuICAgICAgICBhcmdzOiBbbmZ0SWRdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGRhdGE6IHJlbW92ZUxlZ2FjeURhdGEsXHJcbiAgICAgICAgd3JpdGU6IHJlbW92ZUxlZ2FjeSxcclxuICAgICAgICBpc0xvYWRpbmc6IGlzUmVtb3ZlTG9hZGluZyxcclxuICAgICAgICBpc1N1Y2Nlc3M6IGlzUmVtb3ZlU3RhcnRlZCxcclxuICAgICAgICBlcnJvcjogcmVtb3ZlTGVnYWN5RXJyb3IsXHJcbiAgICB9ID0gdXNlQ29udHJhY3RXcml0ZSh7XHJcbiAgICAgICAgLi4uY29udHJhY3RSZWNrbGVzc1dyaXRlQ29uZmlnLFxyXG4gICAgICAgIGZ1bmN0aW9uTmFtZTogXCJyZW1vdmVMZWdhY3lcIixcclxuICAgICAgICBhcmdzOiBbXHJcbiAgICAgICAgICAgIHBvc2l0aW9uLFxyXG4gICAgICAgIF0sXHJcbiAgICB9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBMZWdhY3lORlRzWyR7bmZ0SWR9XTogJHtkYXRhPy50b1N0cmluZygpfWApXHJcbiAgICAgICAgc2V0TGVnYWN5KGRhdGEpO1xyXG4gICAgICAgIGNvbnN0IGFtb3VudCA9IGRhdGE/LmFtb3VudD8udG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zdCB0b2tlbklkID0gZGF0YT8udG9rZW5JZD8udG9OdW1iZXIoKTtcclxuICAgICAgICBpZiAodG9rZW5JZCA9PSAwKSBzZXRUb2tlblR5cGUoJ0VSQzIwJylcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGFtb3VudCA9PSAwKSBzZXRUb2tlblR5cGUoJ0VSQzcyMScpXHJcbiAgICAgICAgICAgIGVsc2Ugc2V0VG9rZW5UeXBlKCdFUkMxMTU1JylcclxuICAgICAgICB9XHJcbiAgICB9LCBbZGF0YV0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7ZGF0YSAmJlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy02IGdyaWQtcm93LWZsb3cgZ2FwLTQgdy1mdWxsIG14LWF1dG8gbXQtNSBtbC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRydW5jYXRlIHRleHQtd2hpdGVcIj57bGVnYWN5Py50b2tlbj8udG9TdHJpbmcoKX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0cnVuY2F0ZSB0ZXh0LXdoaXRlXCI+e2xlZ2FjeT8uYmVuZWZpY2lhcnk/LnRvU3RyaW5nKCl9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICB7dG9rZW5UeXBlID09ICdFUkMyMCcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwianVzdGlmeS1zZWxmLWNlbnRlciB0cnVuY2F0ZSB0ZXh0LXdoaXRlXCI+e2V0aGVycy51dGlscy5mb3JtYXRFdGhlcihsZWdhY3k/LmFtb3VudCkudG9TdHJpbmcoKX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJqdXN0aWZ5LXNlbGYtY2VudGVyIHRleHQtd2hpdGVcIj57bGVnYWN5Py5hbW91bnQ/LnRvU3RyaW5nKCl9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImp1c3RpZnktc2VsZi1jZW50ZXIgdGV4dC13aGl0ZVwiPntsZWdhY3k/LnRva2VuSWQ/LnRvU3RyaW5nKCl9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwianVzdGlmeS1zZWxmLWNlbnRlciB0ZXh0LXdoaXRlXCI+e3Rva2VuVHlwZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwianVzdGlmeS1zZWxmLWNlbnRlciB0ZXh0LXdoaXRlIGJnLXB1cnBsZS02MDAgaG92ZXI6YmctcmVkLTUwMCB0ZXh0LWJvbGQgcm91bmRlZC1mdWxsIHB4LTYgc206dy1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlTGVnYWN5KCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBYXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAge2lzUmVtb3ZlTG9hZGluZyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGxlZnQtMCBib3R0b20tMCByaWdodC0wIGJnLWJsYWNrL1swLjVdIGZsZXgganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXIgei0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWZibGFjayBwdC0yIHBiLTggcHgtMTAgcm91bmRlZC0zeGwgaC1maXQgdGV4dC13aGl0ZSBzZWxmLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCIgdGV4dC14bCBmb250LWJvbGQgcC01XCI+UmVtb3ZpbmcgTGVnYWN5Li4uPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsZWdhY3lEYXRhOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQWNjb3VudCIsInVzZUNvbnRyYWN0UmVhZCIsInVzZUNvbnRyYWN0V3JpdGUiLCJjb250cmFjdENvbmZpZyIsImNvbnRyYWN0UmVja2xlc3NXcml0ZUNvbmZpZyIsImV0aGVycyIsImxlZ2FjeURhdGEiLCJwcm9wcyIsImxlZ2FjeSIsIm5mdElkIiwicG9zaXRpb24iLCJhZGRyZXNzIiwiaXNDb25uZWN0ZWQiLCJzZXRMZWdhY3kiLCJ0b2tlblR5cGUiLCJzZXRUb2tlblR5cGUiLCJkYXRhIiwiZnVuY3Rpb25OYW1lIiwiYXJncyIsInJlbW92ZUxlZ2FjeURhdGEiLCJ3cml0ZSIsInJlbW92ZUxlZ2FjeSIsImlzTG9hZGluZyIsImlzUmVtb3ZlTG9hZGluZyIsImlzU3VjY2VzcyIsImlzUmVtb3ZlU3RhcnRlZCIsImVycm9yIiwicmVtb3ZlTGVnYWN5RXJyb3IiLCJhbW91bnQiLCJ0b1N0cmluZyIsInRva2VuSWQiLCJ0b051bWJlciIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwidG9rZW4iLCJiZW5lZmljaWFyeSIsInV0aWxzIiwiZm9ybWF0RXRoZXIiLCJidXR0b24iLCJvbkNsaWNrIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/legacyData.js\n");

/***/ })

});