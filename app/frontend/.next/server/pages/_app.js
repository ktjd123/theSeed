"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Index)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ../../.yarn/__virtual__/next-virtual-f2f4e5532b/0/cache/next-npm-12.1.1-canary.1-30bf3aaab8-c4a5777301.zip/node_modules/next/app.js
var app = __webpack_require__(9);
// EXTERNAL MODULE: external "mobx"
var external_mobx_ = __webpack_require__(211);
// EXTERNAL MODULE: external "mobx-react"
var external_mobx_react_ = __webpack_require__(62);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/PageHead/index.tsx

var _class;




let PageHead_Index = _class = (0,external_mobx_react_.observer)((_class = class Index extends external_react_.Component {
    render() {
        const { title ="Dekina" , description ="Dekina" , iconImg ="" , image ="" , url ="https://dekina.com" ,  } = this.props;
        return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: iconImg
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:site_name",
                        content: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: `${title}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: url + image
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image:width",
                        content: "1000"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image:height",
                        content: "1000"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:url",
                        content: url
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: description
                    })
                ]
            })
        }));
    }
}) || _class) || _class;


;// CONCATENATED MODULE: ./components/index.ts


;// CONCATENATED MODULE: ./pages/_app.tsx

var _app_class;





let Index = _app_class = (0,external_mobx_react_.observer)((_app_class = class Index extends app["default"] {
    render() {
        const { Component , pageProps  } = this.props;
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_mobx_react_.Provider, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(PageHead_Index, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            ]
        }));
    }
}) || _app_class) || _app_class;



/***/ }),

/***/ 211:
/***/ ((module) => {

module.exports = require("mobx");

/***/ }),

/***/ 62:
/***/ ((module) => {

module.exports = require("mobx-react");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9], () => (__webpack_exec__(281)));
module.exports = __webpack_exports__;

})();