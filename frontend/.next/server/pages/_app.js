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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/providers/jsonRpc */ \"wagmi/providers/jsonRpc\");\n/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks */ \"./hooks/index.js\");\n/* harmony import */ var _wagmi_chains__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wagmi/chains */ \"@wagmi/chains\");\n/* harmony import */ var _wagmi_chains__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wagmi_chains__WEBPACK_IMPORTED_MODULE_9__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__]);\n_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n// Imports\n\n\n\n\n\n\n\nconst fireChain = {\n    id: 997,\n    name: \"5ireChain\",\n    network: \"5ireChain\",\n    nativeCurrency: {\n        decimals: 18,\n        name: \"5ire Coin\",\n        symbol: \"5IRE\"\n    },\n    rpcUrls: {\n        default: {\n            http: [\n                \"https://rpc-testnet.5ire.network\"\n            ]\n        }\n    },\n    blockExplorers: {\n        default: {\n            name: \"5ireChain Explorer\",\n            url: \"https://explorer.5ire.network/\"\n        }\n    },\n    testnet: true\n};\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.configureChains)([\n    fireChain\n], [\n    (0,wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_5__.jsonRpcProvider)({\n        rpc: ()=>({\n                http: \"https://rpc-testnet.5ire.network/\"\n            })\n    }),\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__.publicProvider)(), \n]);\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__.getDefaultWallets)({\n    appName: \"WillGuard\",\n    chains\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\nconst App = ({ Component , pageProps  })=>{\n    const isMounted = (0,_hooks__WEBPACK_IMPORTED_MODULE_8__.useIsMounted)();\n    if (!isMounted) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__.RainbowKitProvider, {\n            chains: chains,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"WillGaurd\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\WillGaurd\\\\app\\\\frontend\\\\pages\\\\_app.js\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\WillGaurd\\\\app\\\\frontend\\\\pages\\\\_app.js\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\WillGaurd\\\\app\\\\frontend\\\\pages\\\\_app.js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\WillGaurd\\\\app\\\\frontend\\\\pages\\\\_app.js\",\n            lineNumber: 66,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\WillGaurd\\\\app\\\\frontend\\\\pages\\\\_app.js\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQUNFO0FBQ0Y7QUFFL0IsVUFBVTtBQUNnRTtBQUNoQjtBQUNGO0FBRWI7QUFDb0M7QUFFdkM7QUFDTTtBQUU5QyxNQUFNWSxTQUFTLEdBQUc7SUFDaEJDLEVBQUUsRUFBRSxHQUFHO0lBQ1BDLElBQUksRUFBRSxXQUFXO0lBQ2pCQyxPQUFPLEVBQUUsV0FBVztJQUNwQkMsY0FBYyxFQUFFO1FBQ2RDLFFBQVEsRUFBRSxFQUFFO1FBQ1pILElBQUksRUFBRSxXQUFXO1FBQ2pCSSxNQUFNLEVBQUUsTUFBTTtLQUNmO0lBQ0RDLE9BQU8sRUFBRTtRQUNQQyxPQUFPLEVBQUU7WUFDUEMsSUFBSSxFQUFFO2dCQUFDLGtDQUFrQzthQUFDO1NBQzNDO0tBQ0Y7SUFDREMsY0FBYyxFQUFFO1FBQ2RGLE9BQU8sRUFBRTtZQUNQTixJQUFJLEVBQUUsb0JBQW9CO1lBQzFCUyxHQUFHLEVBQUUsZ0NBQWdDO1NBQ3RDO0tBQ0Y7SUFDREMsT0FBTyxFQUFFLElBQUk7Q0FDZDtBQUVELE1BQU0sRUFBRUMsTUFBTSxHQUFFQyxRQUFRLEdBQUUsR0FBR3JCLHNEQUFlLENBQzFDO0lBQUNPLFNBQVM7Q0FBQyxFQUNYO0lBQ0VOLHdFQUFlLENBQUM7UUFDZHFCLEdBQUcsRUFBRSxJQUFNLENBQUM7Z0JBQUVOLElBQUksRUFBRSxtQ0FBbUM7YUFBRSxDQUFDO0tBQzNELENBQUM7SUFDRmQsc0VBQWMsRUFBRTtDQUNqQixDQUNGO0FBRUQsTUFBTSxFQUFFcUIsVUFBVSxHQUFFLEdBQUdwQix5RUFBaUIsQ0FBQztJQUN2Q3FCLE9BQU8sRUFBRSxXQUFXO0lBQ3BCSixNQUFNO0NBQ1AsQ0FBQztBQUVGLE1BQU1LLFdBQVcsR0FBRzNCLG1EQUFZLENBQUM7SUFDL0I0QixXQUFXLEVBQUUsSUFBSTtJQUNqQkgsVUFBVTtJQUNWRixRQUFRO0NBQ1QsQ0FBQztBQUVGLE1BQU1NLEdBQUcsR0FBRyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEdBQUs7SUFDeEMsTUFBTUMsU0FBUyxHQUFHekIsb0RBQVksRUFBRTtJQUVoQyxJQUFJLENBQUN5QixTQUFTLEVBQUUsT0FBTyxJQUFJLENBQUM7SUFDNUIscUJBQ0UsOERBQUMvQiw4Q0FBVztRQUFDZ0MsTUFBTSxFQUFFTixXQUFXO2tCQUM5Qiw0RUFBQ3JCLHNFQUFrQjtZQUFDZ0IsTUFBTSxFQUFFQSxNQUFNOzs4QkFDaEMsOERBQUN4QixrREFBUTs4QkFDUCw0RUFBQ29DLE9BQUs7a0NBQUMsV0FBUzs7Ozs7aUNBQVE7Ozs7OzZCQUNmOzhCQUNYLDhEQUFDSixTQUFTO29CQUFFLEdBQUdDLFNBQVM7Ozs7OzZCQUFJOzs7Ozs7cUJBQ1Q7Ozs7O2lCQUNULENBQ2Q7Q0FDSDtBQUVELGlFQUFlRixHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY3JlYXRlLXdlYjMvZnJvbnRlbmQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTmV4dEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xyXG5cclxuLy8gSW1wb3J0c1xyXG5pbXBvcnQgeyBjaGFpbiwgY3JlYXRlQ2xpZW50LCBXYWdtaUNvbmZpZywgY29uZmlndXJlQ2hhaW5zIH0gZnJvbSAnd2FnbWknO1xyXG5pbXBvcnQgeyBqc29uUnBjUHJvdmlkZXIgfSBmcm9tICd3YWdtaS9wcm92aWRlcnMvanNvblJwYyc7XHJcbmltcG9ydCB7IHB1YmxpY1Byb3ZpZGVyIH0gZnJvbSAnd2FnbWkvcHJvdmlkZXJzL3B1YmxpYyc7XHJcblxyXG5pbXBvcnQgJ0ByYWluYm93LW1lL3JhaW5ib3draXQvc3R5bGVzLmNzcyc7XHJcbmltcG9ydCB7IGdldERlZmF1bHRXYWxsZXRzLCBSYWluYm93S2l0UHJvdmlkZXIgfSBmcm9tICdAcmFpbmJvdy1tZS9yYWluYm93a2l0JztcclxuXHJcbmltcG9ydCB7IHVzZUlzTW91bnRlZCB9IGZyb20gJy4uL2hvb2tzJztcclxuaW1wb3J0IHsgZmFudG9tVGVzdG5ldCB9IGZyb20gJ0B3YWdtaS9jaGFpbnMnO1xyXG5cclxuY29uc3QgZmlyZUNoYWluID0ge1xyXG4gIGlkOiA5OTcsXHJcbiAgbmFtZTogXCI1aXJlQ2hhaW5cIixcclxuICBuZXR3b3JrOiBcIjVpcmVDaGFpblwiLFxyXG4gIG5hdGl2ZUN1cnJlbmN5OiB7XHJcbiAgICBkZWNpbWFsczogMTgsXHJcbiAgICBuYW1lOiBcIjVpcmUgQ29pblwiLFxyXG4gICAgc3ltYm9sOiBcIjVJUkVcIixcclxuICB9LFxyXG4gIHJwY1VybHM6IHtcclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgaHR0cDogW1wiaHR0cHM6Ly9ycGMtdGVzdG5ldC41aXJlLm5ldHdvcmtcIl0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYmxvY2tFeHBsb3JlcnM6IHtcclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgbmFtZTogXCI1aXJlQ2hhaW4gRXhwbG9yZXJcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vZXhwbG9yZXIuNWlyZS5uZXR3b3JrL1wiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRlc3RuZXQ6IHRydWUsXHJcbn07XHJcblxyXG5jb25zdCB7IGNoYWlucywgcHJvdmlkZXIgfSA9IGNvbmZpZ3VyZUNoYWlucyhcclxuICBbZmlyZUNoYWluXSxcclxuICBbXHJcbiAgICBqc29uUnBjUHJvdmlkZXIoe1xyXG4gICAgICBycGM6ICgpID0+ICh7IGh0dHA6IFwiaHR0cHM6Ly9ycGMtdGVzdG5ldC41aXJlLm5ldHdvcmsvXCIgfSksXHJcbiAgICB9KSxcclxuICAgIHB1YmxpY1Byb3ZpZGVyKCksXHJcbiAgXVxyXG4pO1xyXG5cclxuY29uc3QgeyBjb25uZWN0b3JzIH0gPSBnZXREZWZhdWx0V2FsbGV0cyh7XHJcbiAgYXBwTmFtZTogJ1dpbGxHdWFyZCcsXHJcbiAgY2hhaW5zLFxyXG59KTtcclxuXHJcbmNvbnN0IHdhZ21pQ2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcclxuICBhdXRvQ29ubmVjdDogdHJ1ZSxcclxuICBjb25uZWN0b3JzLFxyXG4gIHByb3ZpZGVyLFxyXG59KTtcclxuXHJcbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcclxuICBjb25zdCBpc01vdW50ZWQgPSB1c2VJc01vdW50ZWQoKTtcclxuXHJcbiAgaWYgKCFpc01vdW50ZWQpIHJldHVybiBudWxsO1xyXG4gIHJldHVybiAoXHJcbiAgICA8V2FnbWlDb25maWcgY2xpZW50PXt3YWdtaUNsaWVudH0+XHJcbiAgICAgIDxSYWluYm93S2l0UHJvdmlkZXIgY2hhaW5zPXtjaGFpbnN9PlxyXG4gICAgICAgIDxOZXh0SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5XaWxsR2F1cmQ8L3RpdGxlPlxyXG4gICAgICAgIDwvTmV4dEhlYWQ+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L1JhaW5ib3dLaXRQcm92aWRlcj5cclxuICAgIDwvV2FnbWlDb25maWc+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTmV4dEhlYWQiLCJjaGFpbiIsImNyZWF0ZUNsaWVudCIsIldhZ21pQ29uZmlnIiwiY29uZmlndXJlQ2hhaW5zIiwianNvblJwY1Byb3ZpZGVyIiwicHVibGljUHJvdmlkZXIiLCJnZXREZWZhdWx0V2FsbGV0cyIsIlJhaW5ib3dLaXRQcm92aWRlciIsInVzZUlzTW91bnRlZCIsImZhbnRvbVRlc3RuZXQiLCJmaXJlQ2hhaW4iLCJpZCIsIm5hbWUiLCJuZXR3b3JrIiwibmF0aXZlQ3VycmVuY3kiLCJkZWNpbWFscyIsInN5bWJvbCIsInJwY1VybHMiLCJkZWZhdWx0IiwiaHR0cCIsImJsb2NrRXhwbG9yZXJzIiwidXJsIiwidGVzdG5ldCIsImNoYWlucyIsInByb3ZpZGVyIiwicnBjIiwiY29ubmVjdG9ycyIsImFwcE5hbWUiLCJ3YWdtaUNsaWVudCIsImF1dG9Db25uZWN0IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiaXNNb3VudGVkIiwiY2xpZW50IiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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