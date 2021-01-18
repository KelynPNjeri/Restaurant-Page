(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Fraunces:wght@300&family=Roboto+Condensed&display=swap);"]),o.push([n.id,"body {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-family: 'Roboto Condensed', sans-serif;\r\n}\r\n#branding {\r\n  margin: 0;\r\n  display: flex;\r\n  flex-flow: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n#branding h2 {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n#restaurant-logo {\r\n  width: 250px;\r\n  \r\n}\r\n.category-title {\r\n  font-family: 'Fraunces', serif;\r\n  font-size: 24px;\r\n  border-bottom: #000 dotted 1px;\r\n  text-align: center;\r\n}\r\n\r\n.menu-title {\r\n  font-size: 32px;\r\n  font-weight: bold;\r\n  text-decoration: underline;\r\n  font-family: 'Fraunces', serif;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n  text-align: center;\r\n}\r\n\r\nli {\r\n  padding: 10px 15px;\r\n  font-size: 16px;\r\n}\r\n\r\n/* Style the tab */\r\n.tab {\r\n  overflow: hidden;\r\n  border: 1px solid #ccc;\r\n  background-color: #f1f1f1;\r\n  display: flex;\r\n  flex-flow: row;\r\n  justify-content: space-evenly;\r\n  margin: 10px 0;\r\n}\r\n\r\n/* Style the buttons that are used to open the tab content */\r\n.tab button {\r\n  background-color: inherit;\r\n  float: left;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  padding: 14px 16px;\r\n  transition: 0.3s;\r\n}\r\n\r\n/* Change background color of buttons on hover */\r\n.tab button:hover {\r\n  background-color: #ddd;\r\n}\r\n\r\n/* Create an active/current tablink class */\r\n.tab button.active {\r\n  background-color: #ccc;\r\n}\r\n\r\n/* Style the tab content */\r\n.tabcontent {\r\n  /* display: none; */\r\n  padding: 6px 12px;\r\n  border: 1px solid #ccc;\r\n  border-top: none;\r\n}\r\n\r\n.tabcontent.active {\r\n  display: block !important;\r\n}",""]);const i=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&o[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),e.push(l))}},e}},379:(n,e,t)=>{var r,o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function a(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},r=[],o=0;o<n.length;o++){var c=n[o],l=e.base?c[0]+e.base:c[0],s=t[l]||0,d="".concat(l," ").concat(s);t[l]=s+1;var u=a(d),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:d,updater:h(p,e),references:1}),r.push(d)}return r}function l(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var s,d=(s=[],function(n,e){return s[n]=e,s.filter(Boolean).join("\n")});function u(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=d(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var f=null,m=0;function h(n,e){var t,r,o;if(e.singleton){var i=m++;t=f||(f=l(e)),r=u.bind(null,t,i,!1),o=u.bind(null,t,i,!0)}else t=l(e),r=p.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var l=c(n,e),s=0;s<t.length;s++){var d=a(t[s]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}t=l}}}},157:(n,e,t)=>{n.exports=t.p+"497330968f6f7bbb8935.png"}},e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{var n=t(379),e=t.n(n),r=t(426);e()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;var o=t(157);const i=n=>{const e=document.createElement("ul"),t=document.createElement("h3");t.className="category-title",t.innerText=`${n}`;const r=document.createElement("li");r.innerText=`${n} One`;const o=document.createElement("li");o.innerText=`${n} Two`;const i=document.createElement("li");i.innerText=`${n} Three`;const a=document.createElement("li");return a.innerText=`${n} Four`,e.appendChild(t),e.appendChild(r),e.appendChild(o),e.appendChild(i),e.appendChild(a),e},a=document.getElementById("content");a.appendChild((()=>{const n=document.createElement("div");n.id="branding";const e=new Image;e.id="restaurant-logo",e.src=o;const t=document.createElement("h2");return t.innerText="Neopolis Restaurant",t.className="menu-title",n.appendChild(e),n.appendChild(t),n})()),a.appendChild((()=>{const n=document.createElement("div");return n.className="tab",n.innerHTML='\n    <button class="tablinks" id="menu" onClick="openMenu(this.id)"">Main Menu</button>\n    <button class="tablinks" id="contact-tab" onClick="openMenu(this.id);"">Contact Us</button>\n  ',n})());const c=n=>{switch(n){case"menu":a.appendChild((()=>{const n=document.createElement("div");return n.id="restaurant-menu",n.appendChild(i("Appetizer")),n.appendChild(i("Main Meal")),n.appendChild(i("Dessert")),n.appendChild(i("Snack")),n.appendChild(i("Drinks")),n})()).style.display="block",document.getElementById("contact").style.display="none";break;case"contact-tab":a.appendChild((()=>{const n=document.createElement("div");return n.id="contact",n.innerHTML="\n    <p>Neopolis Restaurant</p>\n    <span>Delivering excellence</span>\n    <p>Mykonos, Greece</p>\n  ",n})()).style.display="block",document.getElementById("restaurant-menu").style.display="none"}},l=document.getElementById("menu");l.addEventListener("click",(()=>{c(l.id)}));const s=document.getElementById("contact-tab");s.addEventListener("click",(()=>{c(s.id)}))})()})();