parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"kLNy":[function(require,module,exports) {
const e=(e=0)=>new Promise(o=>setTimeout(o,e));module.exports=e;
},{}],"OSYV":[function(require,module,exports) {
module.exports="/foto2.cc64a626.jpg";
},{}],"Iulu":[function(require,module,exports) {
module.exports="/foto3.a9013abe.jpg";
},{}],"S5xX":[function(require,module,exports) {
module.exports="/foto1.93652356.jpg";
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=t(require("waait"));function t(e){return e&&e.__esModule?e:{default:e}}var o=5e3;const a=document.querySelector(".menu"),i=["foto1","foto2","foto3","foto4"],r=a.offsetTop;async function s(){const t=document.querySelector(".img-razones");await(0,e.default)(),t.src=require("./img/foto2.jpg"),await(0,e.default)(5e3),t.src=require("./img/foto3.jpg"),await(0,e.default)(5e3),t.src=require("./img/foto1.jpg"),await(0,e.default)(5e3),s()}function u(){window.pageYOffset>=r?a.classList.add("sticky"):a.classList.remove("sticky")}window.addEventListener("scroll",u),s();
},{"waait":"kLNy","./img/foto2.jpg":"OSYV","./img/foto3.jpg":"Iulu","./img/foto1.jpg":"S5xX"}]},{},["Focm"], null)
//# sourceMappingURL=/consultoralogistica.383a152b.js.map