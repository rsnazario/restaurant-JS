!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n;(n={setSelectTabs:function(){!function(){const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("div"),i=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div");t.setAttribute("id","select-tabs"),n.setAttribute("id","home"),i.setAttribute("id","menu"),o.setAttribute("id","contact"),r.setAttribute("id","about"),t.classList.add("bg-fade","size-100"),n.classList.add("tabs","size-100","text-white"),i.classList.add("tabs","size-100","text-white"),o.classList.add("tabs","size-100","text-white"),r.classList.add("tabs","size-100","text-white"),n.innerHTML+="Home",i.innerHTML+="Menu",o.innerHTML+="Contact",r.innerHTML+="About",t.appendChild(n),t.appendChild(i),t.appendChild(o),t.appendChild(r),e.appendChild(t)}()},setHome:function(){createHomeElements()}},{init:function(){console.log("hello world"),console.log("webpack has worked"),n.setSelectTabs(),n.setHome()}}).init()}]);