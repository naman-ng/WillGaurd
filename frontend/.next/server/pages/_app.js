/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./hooks/index.js":
/*!************************!*\
  !*** ./hooks/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useIsMounted\": () => (/* reexport safe */ _useIsMounted__WEBPACK_IMPORTED_MODULE_0__.useIsMounted)\n/* harmony export */ });\n/* harmony import */ var _useIsMounted__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useIsMounted */ \"./hooks/useIsMounted.js\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4QyIsInNvdXJjZXMiOlsid2VicGFjazovL0BjcmVhdGUtd2ViMy9mcm9udGVuZC8uL2hvb2tzL2luZGV4LmpzPzQ4MjkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgdXNlSXNNb3VudGVkIH0gZnJvbSBcIi4vdXNlSXNNb3VudGVkXCI7XHJcbiJdLCJuYW1lcyI6WyJ1c2VJc01vdW50ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/index.js\n");

/***/ }),

/***/ "./hooks/useIsMounted.js":
/*!*******************************!*\
  !*** ./hooks/useIsMounted.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useIsMounted\": () => (/* binding */ useIsMounted)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useIsMounted = ()=>{\n    const [mounted, setMounted] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);\n    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>setMounted(true)\n    , []);\n    return mounted;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VJc01vdW50ZWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRXhCLE1BQU1DLFlBQVksR0FBRyxJQUFNO0lBQ2hDLE1BQU0sQ0FBQ0MsT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBR0gsMkNBQWMsQ0FBQyxLQUFLLENBQUM7SUFFbkRBLDRDQUFlLENBQUMsSUFBTUcsVUFBVSxDQUFDLElBQUksQ0FBQztJQUFBLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFNUMsT0FBT0QsT0FBTyxDQUFDO0NBQ2hCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY3JlYXRlLXdlYjMvZnJvbnRlbmQvLi9ob29rcy91c2VJc01vdW50ZWQuanM/Y2E5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VJc01vdW50ZWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW21vdW50ZWQsIHNldE1vdW50ZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4gc2V0TW91bnRlZCh0cnVlKSwgW10pO1xyXG5cclxuICByZXR1cm4gbW91bnRlZDtcclxufTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlSXNNb3VudGVkIiwibW91bnRlZCIsInNldE1vdW50ZWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useIsMounted.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/providers/jsonRpc */ \"wagmi/providers/jsonRpc\");\n/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks */ \"./hooks/index.js\");\n/* harmony import */ var _wagmi_chains__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wagmi/chains */ \"@wagmi/chains\");\n/* harmony import */ var _wagmi_chains__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wagmi_chains__WEBPACK_IMPORTED_MODULE_9__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__]);\n_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n// Imports\n\n\n\n\n\n\n\nconst fireChain = {\n    id: 997,\n    name: \"5ireChain\",\n    network: \"5ireChain\",\n    nativeCurrency: {\n        decimals: 18,\n        name: \"5ire Coin\",\n        symbol: \"5IRE\"\n    },\n    rpcUrls: {\n        default: {\n            http: [\n                \"https://rpc-testnet.5ire.network\"\n            ]\n        }\n    },\n    blockExplorers: {\n        default: {\n            name: \"5ireChain Explorer\",\n            url: \"https://explorer.5ire.network/\"\n        }\n    },\n    testnet: true\n};\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.configureChains)([\n    _wagmi_chains__WEBPACK_IMPORTED_MODULE_9__.fantomTestnet\n], [\n    (0,wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_5__.jsonRpcProvider)({\n        rpc: ()=>({\n                http: \"https://rpc-testnet.5ire.network/\"\n            })\n    }),\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__.publicProvider)(), \n]);\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__.getDefaultWallets)({\n    appName: \"WillGuard\",\n    chains\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\nconst App = ({ Component , pageProps  })=>{\n    const isMounted = (0,_hooks__WEBPACK_IMPORTED_MODULE_8__.useIsMounted)();\n    if (!isMounted) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__.RainbowKitProvider, {\n            chains: chains,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"WillGaurd\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\WillGaurd\\\\app\\\\frontend\\\\pages\\\\_app.js\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\WillGaurd\\\\app\\\\frontend\\\\pages\\\\_app.js\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\WillGaurd\\\\app\\\\frontend\\\\pages\\\\_app.js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\WillGaurd\\\\app\\\\frontend\\\\pages\\\\_app.js\",\n            lineNumber: 66,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\WillGaurd\\\\app\\\\frontend\\\\pages\\\\_app.js\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQUNFO0FBQ0Y7QUFFL0IsVUFBVTtBQUNnRTtBQUNoQjtBQUNGO0FBRWI7QUFDb0M7QUFFdkM7QUFDTTtBQUU5QyxNQUFNWSxTQUFTLEdBQUc7SUFDaEJDLEVBQUUsRUFBRSxHQUFHO0lBQ1BDLElBQUksRUFBRSxXQUFXO0lBQ2pCQyxPQUFPLEVBQUUsV0FBVztJQUNwQkMsY0FBYyxFQUFFO1FBQ2RDLFFBQVEsRUFBRSxFQUFFO1FBQ1pILElBQUksRUFBRSxXQUFXO1FBQ2pCSSxNQUFNLEVBQUUsTUFBTTtLQUNmO0lBQ0RDLE9BQU8sRUFBRTtRQUNQQyxPQUFPLEVBQUU7WUFDUEMsSUFBSSxFQUFFO2dCQUFDLGtDQUFrQzthQUFDO1NBQzNDO0tBQ0Y7SUFDREMsY0FBYyxFQUFFO1FBQ2RGLE9BQU8sRUFBRTtZQUNQTixJQUFJLEVBQUUsb0JBQW9CO1lBQzFCUyxHQUFHLEVBQUUsZ0NBQWdDO1NBQ3RDO0tBQ0Y7SUFDREMsT0FBTyxFQUFFLElBQUk7Q0FDZDtBQUVELE1BQU0sRUFBRUMsTUFBTSxHQUFFQyxRQUFRLEdBQUUsR0FBR3JCLHNEQUFlLENBQzFDO0lBQUNNLHdEQUFhO0NBQUMsRUFDZjtJQUNFTCx3RUFBZSxDQUFDO1FBQ2RxQixHQUFHLEVBQUUsSUFBTSxDQUFDO2dCQUFFTixJQUFJLEVBQUUsbUNBQW1DO2FBQUUsQ0FBQztLQUMzRCxDQUFDO0lBQ0ZkLHNFQUFjLEVBQUU7Q0FDakIsQ0FDRjtBQUVELE1BQU0sRUFBRXFCLFVBQVUsR0FBRSxHQUFHcEIseUVBQWlCLENBQUM7SUFDdkNxQixPQUFPLEVBQUUsV0FBVztJQUNwQkosTUFBTTtDQUNQLENBQUM7QUFFRixNQUFNSyxXQUFXLEdBQUczQixtREFBWSxDQUFDO0lBQy9CNEIsV0FBVyxFQUFFLElBQUk7SUFDakJILFVBQVU7SUFDVkYsUUFBUTtDQUNULENBQUM7QUFFRixNQUFNTSxHQUFHLEdBQUcsQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxHQUFLO0lBQ3hDLE1BQU1DLFNBQVMsR0FBR3pCLG9EQUFZLEVBQUU7SUFFaEMsSUFBSSxDQUFDeUIsU0FBUyxFQUFFLE9BQU8sSUFBSSxDQUFDO0lBQzVCLHFCQUNFLDhEQUFDL0IsOENBQVc7UUFBQ2dDLE1BQU0sRUFBRU4sV0FBVztrQkFDOUIsNEVBQUNyQixzRUFBa0I7WUFBQ2dCLE1BQU0sRUFBRUEsTUFBTTs7OEJBQ2hDLDhEQUFDeEIsa0RBQVE7OEJBQ1AsNEVBQUNvQyxPQUFLO2tDQUFDLFdBQVM7Ozs7O2lDQUFROzs7Ozs2QkFDZjs4QkFDWCw4REFBQ0osU0FBUztvQkFBRSxHQUFHQyxTQUFTOzs7Ozs2QkFBSTs7Ozs7O3FCQUNUOzs7OztpQkFDVCxDQUNkO0NBQ0g7QUFFRCxpRUFBZUYsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGNyZWF0ZS13ZWIzL2Zyb250ZW5kLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5leHRIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuXHJcbi8vIEltcG9ydHNcclxuaW1wb3J0IHsgY2hhaW4sIGNyZWF0ZUNsaWVudCwgV2FnbWlDb25maWcsIGNvbmZpZ3VyZUNoYWlucyB9IGZyb20gJ3dhZ21pJztcclxuaW1wb3J0IHsganNvblJwY1Byb3ZpZGVyIH0gZnJvbSAnd2FnbWkvcHJvdmlkZXJzL2pzb25ScGMnO1xyXG5pbXBvcnQgeyBwdWJsaWNQcm92aWRlciB9IGZyb20gJ3dhZ21pL3Byb3ZpZGVycy9wdWJsaWMnO1xyXG5cclxuaW1wb3J0ICdAcmFpbmJvdy1tZS9yYWluYm93a2l0L3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgeyBnZXREZWZhdWx0V2FsbGV0cywgUmFpbmJvd0tpdFByb3ZpZGVyIH0gZnJvbSAnQHJhaW5ib3ctbWUvcmFpbmJvd2tpdCc7XHJcblxyXG5pbXBvcnQgeyB1c2VJc01vdW50ZWQgfSBmcm9tICcuLi9ob29rcyc7XHJcbmltcG9ydCB7IGZhbnRvbVRlc3RuZXQgfSBmcm9tICdAd2FnbWkvY2hhaW5zJztcclxuXHJcbmNvbnN0IGZpcmVDaGFpbiA9IHtcclxuICBpZDogOTk3LFxyXG4gIG5hbWU6IFwiNWlyZUNoYWluXCIsXHJcbiAgbmV0d29yazogXCI1aXJlQ2hhaW5cIixcclxuICBuYXRpdmVDdXJyZW5jeToge1xyXG4gICAgZGVjaW1hbHM6IDE4LFxyXG4gICAgbmFtZTogXCI1aXJlIENvaW5cIixcclxuICAgIHN5bWJvbDogXCI1SVJFXCIsXHJcbiAgfSxcclxuICBycGNVcmxzOiB7XHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIGh0dHA6IFtcImh0dHBzOi8vcnBjLXRlc3RuZXQuNWlyZS5uZXR3b3JrXCJdLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJsb2NrRXhwbG9yZXJzOiB7XHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIG5hbWU6IFwiNWlyZUNoYWluIEV4cGxvcmVyXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL2V4cGxvcmVyLjVpcmUubmV0d29yay9cIixcclxuICAgIH0sXHJcbiAgfSxcclxuICB0ZXN0bmV0OiB0cnVlLFxyXG59O1xyXG5cclxuY29uc3QgeyBjaGFpbnMsIHByb3ZpZGVyIH0gPSBjb25maWd1cmVDaGFpbnMoXHJcbiAgW2ZhbnRvbVRlc3RuZXRdLFxyXG4gIFtcclxuICAgIGpzb25ScGNQcm92aWRlcih7XHJcbiAgICAgIHJwYzogKCkgPT4gKHsgaHR0cDogXCJodHRwczovL3JwYy10ZXN0bmV0LjVpcmUubmV0d29yay9cIiB9KSxcclxuICAgIH0pLFxyXG4gICAgcHVibGljUHJvdmlkZXIoKSxcclxuICBdXHJcbik7XHJcblxyXG5jb25zdCB7IGNvbm5lY3RvcnMgfSA9IGdldERlZmF1bHRXYWxsZXRzKHtcclxuICBhcHBOYW1lOiAnV2lsbEd1YXJkJyxcclxuICBjaGFpbnMsXHJcbn0pO1xyXG5cclxuY29uc3Qgd2FnbWlDbGllbnQgPSBjcmVhdGVDbGllbnQoe1xyXG4gIGF1dG9Db25uZWN0OiB0cnVlLFxyXG4gIGNvbm5lY3RvcnMsXHJcbiAgcHJvdmlkZXIsXHJcbn0pO1xyXG5cclxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xyXG4gIGNvbnN0IGlzTW91bnRlZCA9IHVzZUlzTW91bnRlZCgpO1xyXG5cclxuICBpZiAoIWlzTW91bnRlZCkgcmV0dXJuIG51bGw7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXYWdtaUNvbmZpZyBjbGllbnQ9e3dhZ21pQ2xpZW50fT5cclxuICAgICAgPFJhaW5ib3dLaXRQcm92aWRlciBjaGFpbnM9e2NoYWluc30+XHJcbiAgICAgICAgPE5leHRIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPldpbGxHYXVyZDwvdGl0bGU+XHJcbiAgICAgICAgPC9OZXh0SGVhZD5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvUmFpbmJvd0tpdFByb3ZpZGVyPlxyXG4gICAgPC9XYWdtaUNvbmZpZz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJOZXh0SGVhZCIsImNoYWluIiwiY3JlYXRlQ2xpZW50IiwiV2FnbWlDb25maWciLCJjb25maWd1cmVDaGFpbnMiLCJqc29uUnBjUHJvdmlkZXIiLCJwdWJsaWNQcm92aWRlciIsImdldERlZmF1bHRXYWxsZXRzIiwiUmFpbmJvd0tpdFByb3ZpZGVyIiwidXNlSXNNb3VudGVkIiwiZmFudG9tVGVzdG5ldCIsImZpcmVDaGFpbiIsImlkIiwibmFtZSIsIm5ldHdvcmsiLCJuYXRpdmVDdXJyZW5jeSIsImRlY2ltYWxzIiwic3ltYm9sIiwicnBjVXJscyIsImRlZmF1bHQiLCJodHRwIiwiYmxvY2tFeHBsb3JlcnMiLCJ1cmwiLCJ0ZXN0bmV0IiwiY2hhaW5zIiwicHJvdmlkZXIiLCJycGMiLCJjb25uZWN0b3JzIiwiYXBwTmFtZSIsIndhZ21pQ2xpZW50IiwiYXV0b0Nvbm5lY3QiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJpc01vdW50ZWQiLCJjbGllbnQiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@wagmi/chains":
/*!********************************!*\
  !*** external "@wagmi/chains" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@wagmi/chains");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ }),

/***/ "wagmi/providers/jsonRpc":
/*!******************************************!*\
  !*** external "wagmi/providers/jsonRpc" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/jsonRpc");

/***/ }),

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/public");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();