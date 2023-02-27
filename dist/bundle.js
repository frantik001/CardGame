(()=>{var t={174:(t,a,e)=>{"use strict";e.d(a,{Z:()=>d});var c=e(537),n=e.n(c),r=e(645),i=e.n(r),A=e(667),s=e.n(A),g=new URL(e(501),e.b),o=i()(n()),_=s()(g);o.push([t.id,'@font-face {\n  font-family: "StratosSkyeng";\n  font-style: normal;\n  font-weight: normal;\n  src: url('+_+');\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody,\n.app {\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n  background-color: #004980;\n  font-family: "StratosSkyeng", sans-serif;\n  flex-direction: column;\n}\n\n.startForm {\n  width: 480px;\n  height: 459px;\n  background: #c2f5ff;\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.startForm__title {\n  width: 208px;\n  height: 96px;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 40px;\n  line-height: 48px;\n  color: #004980;\n  margin-top: 52px;\n  text-align: center;\n}\n.startForm__div {\n  margin-top: 48px;\n  display: flex;\n  gap: 24px;\n}\n.startForm__div_label {\n  width: 98px;\n  height: 98px;\n  background: #ffffff;\n  border-radius: 12px;\n  border: none;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 64px;\n  line-height: 72px;\n  color: #0080c1;\n  transition: 0.3s;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.startForm__div_label:hover {\n  background: #b9b9b9;\n}\n.startForm__div_btn {\n  display: none;\n}\n.startForm__div_btn:checked + .startForm__div_label {\n  background: #0080c1;\n  color: #ffffff;\n}\n.startForm__button {\n  margin-top: 67px;\n  width: 246px;\n  height: 50px;\n  background: #7ac100;\n  border-radius: 12px;\n  border: none;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 32px;\n  color: #ffffff;\n  transition: 0.3s;\n}\n.startForm__button:hover {\n  background: #558701;\n}\n\n.topDiv {\n  width: 50vw;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.topDiv__timerDiv {\n  width: 155px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n.topDiv__timerDiv__mins {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 32px;\n  color: #ffffff;\n  width: 45px;\n}\n.topDiv__timerDiv__secs {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 32px;\n  color: #ffffff;\n  width: 45px;\n}\n.topDiv__timerDiv__timer {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 64px;\n  line-height: 72px;\n  color: #ffffff;\n}\n.topDiv__restartButton {\n  width: 246px;\n  height: 50px;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 32px;\n  background: #7ac100;\n  border-radius: 12px;\n  color: #ffffff;\n  border: none;\n  transition: 0.5s;\n}\n.topDiv__restartButton:hover {\n  background: #558701;\n}\n\n.game {\n  width: 50vw;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  justify-content: center;\n  perspective: 600px;\n}\n.game__card {\n  width: 95px;\n  height: 133px;\n  position: relative;\n  transition: transform 1s;\n  transform-style: preserve-3d;\n}\n.game__card_face {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.game__card_face--back {\n  transform: rotateY(180deg);\n}\n.game__card.is-flipped {\n  transform: rotateY(180deg);\n}\n\n.endGame {\n  background: rgba(0, 73, 128, 0.9);\n  bottom: 0;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 1s;\n}\n.endGame__div {\n  background-color: #c2f5ff;\n  border-radius: 12px;\n  height: 480px;\n  padding-top: 32px;\n  width: 459px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.endGame__div_title {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 40px;\n  line-height: 48px;\n  color: #004980;\n  margin-top: 5px;\n  margin-bottom: 28px;\n}\n.endGame__div_timeText {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 32px;\n}\n.endGame__div_time {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 64px;\n  line-height: 72px;\n  margin-top: 10px;\n  margin-bottom: 40px;\n}\n.endGame__div_btn {\n  width: 246px;\n  height: 50px;\n  background: #7ac100;\n  border-radius: 12px;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 32px;\n  color: #ffffff;\n  border: none;\n  transition: 0.5s;\n}\n.endGame__div_btn:hover {\n  background-color: #558701;\n}/*# sourceMappingURL=style.css.map */',"",{version:3,sources:["webpack://./css/style.scss","webpack://./css/style.css"],names:[],mappings:"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",sourceRoot:""}]);const d=o},645:t=>{"use strict";t.exports=function(t){var a=[];return a.toString=function(){return this.map((function(a){var e="",c=void 0!==a[5];return a[4]&&(e+="@supports (".concat(a[4],") {")),a[2]&&(e+="@media ".concat(a[2]," {")),c&&(e+="@layer".concat(a[5].length>0?" ".concat(a[5]):""," {")),e+=t(a),c&&(e+="}"),a[2]&&(e+="}"),a[4]&&(e+="}"),e})).join("")},a.i=function(t,e,c,n,r){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(c)for(var A=0;A<this.length;A++){var s=this[A][0];null!=s&&(i[s]=!0)}for(var g=0;g<t.length;g++){var o=[].concat(t[g]);c&&i[o[0]]||(void 0!==r&&(void 0===o[5]||(o[1]="@layer".concat(o[5].length>0?" ".concat(o[5]):""," {").concat(o[1],"}")),o[5]=r),e&&(o[2]?(o[1]="@media ".concat(o[2]," {").concat(o[1],"}"),o[2]=e):o[2]=e),n&&(o[4]?(o[1]="@supports (".concat(o[4],") {").concat(o[1],"}"),o[4]=n):o[4]="".concat(n)),a.push(o))}},a}},667:t=>{"use strict";t.exports=function(t,a){return a||(a={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),a.hash&&(t+=a.hash),/["'() \t\n]|(%20)/.test(t)||a.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},537:t=>{"use strict";t.exports=function(t){var a=t[1],e=t[3];if(!e)return a;if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),r="/*# ".concat(n," */");return[a].concat([r]).join("\n")}return[a].join("\n")}},379:t=>{"use strict";var a=[];function e(t){for(var e=-1,c=0;c<a.length;c++)if(a[c].identifier===t){e=c;break}return e}function c(t,c){for(var r={},i=[],A=0;A<t.length;A++){var s=t[A],g=c.base?s[0]+c.base:s[0],o=r[g]||0,_="".concat(g," ").concat(o);r[g]=o+1;var d=e(_),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)a[d].references++,a[d].updater(m);else{var f=n(m,c);c.byIndex=A,a.splice(A,0,{identifier:_,updater:f,references:1})}i.push(_)}return i}function n(t,a){var e=a.domAPI(a);return e.update(t),function(a){if(a){if(a.css===t.css&&a.media===t.media&&a.sourceMap===t.sourceMap&&a.supports===t.supports&&a.layer===t.layer)return;e.update(t=a)}else e.remove()}}t.exports=function(t,n){var r=c(t=t||[],n=n||{});return function(t){t=t||[];for(var i=0;i<r.length;i++){var A=e(r[i]);a[A].references--}for(var s=c(t,n),g=0;g<r.length;g++){var o=e(r[g]);0===a[o].references&&(a[o].updater(),a.splice(o,1))}r=s}}},569:t=>{"use strict";var a={};t.exports=function(t,e){var c=function(t){if(void 0===a[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}a[t]=e}return a[t]}(t);if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(e)}},216:t=>{"use strict";t.exports=function(t){var a=document.createElement("style");return t.setAttributes(a,t.attributes),t.insert(a,t.options),a}},565:(t,a,e)=>{"use strict";t.exports=function(t){var a=e.nc;a&&t.setAttribute("nonce",a)}},795:t=>{"use strict";t.exports=function(t){var a=t.insertStyleElement(t);return{update:function(e){!function(t,a,e){var c="";e.supports&&(c+="@supports (".concat(e.supports,") {")),e.media&&(c+="@media ".concat(e.media," {"));var n=void 0!==e.layer;n&&(c+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),c+=e.css,n&&(c+="}"),e.media&&(c+="}"),e.supports&&(c+="}");var r=e.sourceMap;r&&"undefined"!=typeof btoa&&(c+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),a.styleTagTransform(c,t,a.options)}(a,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(a)}}}},589:t=>{"use strict";t.exports=function(t,a){if(a.styleSheet)a.styleSheet.cssText=t;else{for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(document.createTextNode(t))}}},689:t=>{t.exports={startTemplate:{tag:"form",cls:"startForm",content:[{tag:"div",cls:"startForm__title",content:"Выбери сложность"},{tag:"div",cls:"startForm__div",content:[{tag:"input",cls:"startForm__div_btn",attrs:{id:"easy",type:"radio",name:"difficult",value:6}},{tag:"label",cls:"startForm__div_label",attrs:{for:"easy"},content:"1"},{tag:"input",cls:"startForm__div_btn",attrs:{id:"medium",type:"radio",name:"difficult",value:12}},{tag:"label",cls:"startForm__div_label",attrs:{for:"medium"},content:"2"},{tag:"input",cls:"startForm__div_btn",attrs:{id:"hard",type:"radio",name:"difficult",value:18}},{tag:"label",cls:"startForm__div_label",attrs:{for:"hard"},content:"3"}]},{tag:"button",cls:"startForm__button",content:"Старт"}]},topDiv:{tag:"div",cls:"topDiv",content:[{tag:"div",cls:"topDiv__timerDiv",content:[{tag:"p",cls:"topDiv__timerDiv__mins",content:"min"},{tag:"p",cls:"topDiv__timerDiv__secs",content:"sec"},{tag:"div",cls:"topDiv__timerDiv__timer",content:[0,":",0]}]},{tag:"button",cls:"topDiv__restartButton",content:"Начать заново"}]},easyCardsTemplate:{tag:"section",cls:"game",content:[{tag:"div",cls:["game__card","is-flipped"],attrs:{id:"aceOfClubs"},content:[{tag:"img",cls:["game__card_face","game__card_face--front"],attrs:{src:"static/img/cover.png"}},{tag:"img",cls:["game__card_face","game__card_face--back"],attrs:{src:"static/img/aceOfClubs.png"}}]},{tag:"div",cls:["game__card","is-flipped"],attrs:{id:"aceOfClubs"},content:[{tag:"img",cls:["game__card_face","game__card_face--front"],attrs:{src:"static/img/cover.png"}},{tag:"img",cls:["game__card_face","game__card_face--back"],attrs:{src:"static/img/aceOfClubs.png"}}]},{tag:"div",cls:["game__card","is-flipped"],attrs:{id:"aceOfDiamonds"},content:[{tag:"img",cls:["game__card_face","game__card_face--front"],attrs:{src:"static/img/cover.png"}},{tag:"img",cls:["game__card_face","game__card_face--back"],attrs:{src:"static/img/aceOfDiamonds.png"}}]},{tag:"div",cls:["game__card","is-flipped"],attrs:{id:"aceOfDiamonds"},content:[{tag:"img",cls:["game__card_face","game__card_face--front"],attrs:{src:"static/img/cover.png"}},{tag:"img",cls:["game__card_face","game__card_face--back"],attrs:{src:"static/img/aceOfDiamonds.png"}}]},{tag:"div",cls:["game__card","is-flipped"],attrs:{id:"aceOfHearts"},content:[{tag:"img",cls:["game__card_face","game__card_face--front"],attrs:{src:"static/img/cover.png"}},{tag:"img",cls:["game__card_face","game__card_face--back"],attrs:{src:"static/img/aceOfHearts.png"}}]},{tag:"div",cls:["game__card","is-flipped"],attrs:{id:"aceOfHearts"},content:[{tag:"img",cls:["game__card_face","game__card_face--front"],attrs:{src:"static/img/cover.png"}},{tag:"img",cls:["game__card_face","game__card_face--back"],attrs:{src:"static/img/aceOfHearts.png"}}]}]},mediumCardsTemplate:{tag:"div",cls:"game",content:[{tag:"div",cls:["game__card","is-flipped"],attrs:{id:"aceOfClubs"},content:[{tag:"img",cls:["game__card_face","game__card_face--front"],attrs:{src:"static/img/cover.png"}},{tag:"img",cls:["game__card_face","game__card_face--back"],attrs:{src:"static/img/aceOfClubs.png"}}]},{tag:"div",cls:["game__card","is-flipped"],attrs:{id:"aceOfClubs"},content:[{tag:"img",cls:["game__card_face","game__card_face--front"],attrs:{src:"static/img/cover.png"}},{tag:"img",cls:["game__card_face","game__card_face--back"],attrs:{src:"static/img/aceOfClubs.png"}}]},{tag:"div",cls:["game__card","is-flipped"],attrs:{id:"aceOfDiamonds"},content:[{tag:"img",cls:["game__card_face","game__card_face--front"],attrs:{src:"static/img/cover.png"}},{tag:"img",cls:["game__card_face","game__card_face--back"],attrs:{src:"static/img/aceOfDiamonds.png"}}]},{tag:"div",cls:["game__card","is-flipped"],attrs:{id:"aceOfDiamonds"},content:[{tag:"img",cls:["game__card_face","game__card_face--front"],attrs:{src:"static/img/cover.png"}},{tag:"img",cls:["game__card_face","game__card_face--back"],attrs:{src:"static/img/aceOfDiamonds.png"}}]},{tag:"div",cls:["game__card","is-flipped"],attrs:{id:"aceOfHearts"},content:[{tag:"img",cls:["game__card_face","game__card_face--front"],attrs:{src:"static/img/cover.png"}},{tag:"img",cls:["game__card_face","game__card_face--back"],attrs:{src:"static/img/aceOfHearts.png"}}]},{tag:"div",cls:["game__card","is-flipped"],attrs:{id:"aceOfHearts"},content:[{tag:"img",cls:["game__card_face","game__card_face--front"],attrs:{src:"static/img/cover.png"}},{tag:"img",cls:["game__card_face","game__card_face--back"],attrs:{src:"static/img/aceOfHearts.png"}}]},{tag:"div",cls:["game__card","is-flipped"],attrs:{id:"aceOfSpades"},content:[{tag:"img",cls:["game__card_face","game__card_face--front"],attrs:{src:"static/img/cover.png"}},{tag:"img",cls:["game__card_face","game__card_face--back"],attrs:{src:"static/img/aceOfSpades.png"}}]},{tag:"div",cls:["game__card","is-flipped"],attrs:{id:"aceOfSpades"},content:[{tag:"img",cls:["game__card_face","game__card_face--front"],attrs:{src:"static/img/cover.png"}},{tag:"img",cls:["game__card_face","game__card_face--back"],attrs:{src:"static/img/aceOfSpades.png"}}]},{tag:"div",cls:["game__card","is-flipped"],attrs:{id:"kingOfClubs"},content:[{tag:"img",cls:["game__card_face","game__card_face--front"],attrs:{src:"static/img/cover.png"}},{tag:"img",cls:["game__card_face","game__card_face--back"],attrs:{src:"static/img/kingOfClubs.png"}}]},{tag:"div",cls:["game__card","is-flipped"],attrs:{id:"kingOfClubs"},content:[{tag:"img",cls:["game__card_face","game__card_face--front"],attrs:{src:"static/img/cover.png"}},{tag:"img",cls:["game__card_face","game__card_face--back"],attrs:{src:"static/img/kingOfClubs.png"}}]},{tag:"div",cls:["game__card","is-flipped"],attrs:{id:"kingOfDiamonds"},content:[{tag:"img",cls:["game__card_face","game__card_face--front"],attrs:{src:"static/img/cover.png"}},{tag:"img",cls:["game__card_face","game__card_face--back"],attrs:{src:"static/img/kingOfDiamonds.png"}}]},{tag:"div",cls:["game__card","is-flipped"],attrs:{id:"kingOfDiamonds"},content:[{tag:"img",cls:["game__card_face","game__card_face--front"],attrs:{src:"static/img/cover.png"}},{tag:"img",cls:["game__card_face","game__card_face--back"],attrs:{src:"static/img/kingOfDiamonds.png"}}]}]},hardCardsTemplate:{tag:"div",cls:"game",content:[{tag:"div",cls:["game__card","is-flipped"],attrs:{id:"aceOfClubs"},content:[{tag:"img",cls:["game__card_face","game__card_face--front"],attrs:{src:"static/img/cover.png"}},{tag:"img",cls:["game__card_face","game__card_face--back"],attrs:{src:"static/img/aceOfClubs.png"}}]},{tag:"div",cls:["game__card","is-flipped"],attrs:{id:"aceOfClubs"},content:[{tag:"img",cls:["game__card_face","game__card_face--front"],attrs:{src:"static/img/cover.png"}},{tag:"img",cls:["game__card_face","game__card_face--back"],attrs:{src:"static/img/aceOfClubs.png"}}]},{tag:"div",cls:["game__card","is-flipped"],attrs:{id:"aceOfDiamonds"},content:[{tag:"img",cls:["game__card_face","game__card_face--front"],attrs:{src:"static/img/cover.png"}},{tag:"img",cls:["game__card_face","game__card_face--back"],attrs:{src:"static/img/aceOfDiamonds.png"}}]},{tag:"div",cls:["game__card","is-flipped"],attrs:{id:"aceOfDiamonds"},content:[{tag:"img",cls:["game__card_face","game__card_face--front"],attrs:{src:"static/img/cover.png"}},{tag:"img",cls:["game__card_face","game__card_face--back"],attrs:{src:"static/img/aceOfDiamonds.png"}}]},{tag:"div",cls:["game__card","is-flipped"],attrs:{id:"aceOfHearts"},content:[{tag:"img",cls:["game__card_face","game__card_face--front"],attrs:{src:"static/img/cover.png"}},{tag:"img",cls:["game__card_face","game__card_face--back"],attrs:{src:"static/img/aceOfHearts.png"}}]},{tag:"div",cls:["game__card","is-flipped"],attrs:{id:"aceOfHearts"},content:[{tag:"img",cls:["game__card_face","game__card_face--front"],attrs:{src:"static/img/cover.png"}},{tag:"img",cls:["game__card_face","game__card_face--back"],attrs:{src:"static/img/aceOfHearts.png"}}]},{tag:"div",cls:["game__card","is-flipped"],attrs:{id:"aceOfSpades"},content:[{tag:"img",cls:["game__card_face","game__card_face--front"],attrs:{src:"static/img/cover.png"}},{tag:"img",cls:["game__card_face","game__card_face--back"],attrs:{src:"static/img/aceOfSpades.png"}}]},{tag:"div",cls:["game__card","is-flipped"],attrs:{id:"aceOfSpades"},content:[{tag:"img",cls:["game__card_face","game__card_face--front"],attrs:{src:"static/img/cover.png"}},{tag:"img",cls:["game__card_face","game__card_face--back"],attrs:{src:"static/img/aceOfSpades.png"}}]},{tag:"div",cls:["game__card","is-flipped"],attrs:{id:"kingOfClubs"},content:[{tag:"img",cls:["game__card_face","game__card_face--front"],attrs:{src:"static/img/cover.png"}},{tag:"img",cls:["game__card_face","game__card_face--back"],attrs:{src:"static/img/kingOfClubs.png"}}]},{tag:"div",cls:["game__card","is-flipped"],attrs:{id:"kingOfClubs"},content:[{tag:"img",cls:["game__card_face","game__card_face--front"],attrs:{src:"static/img/cover.png"}},{tag:"img",cls:["game__card_face","game__card_face--back"],attrs:{src:"static/img/kingOfClubs.png"}}]},{tag:"div",cls:["game__card","is-flipped"],attrs:{id:"kingOfDiamonds"},content:[{tag:"img",cls:["game__card_face","game__card_face--front"],attrs:{src:"static/img/cover.png"}},{tag:"img",cls:["game__card_face","game__card_face--back"],attrs:{src:"static/img/kingOfDiamonds.png"}}]},{tag:"div",cls:["game__card","is-flipped"],attrs:{id:"kingOfDiamonds"},content:[{tag:"img",cls:["game__card_face","game__card_face--front"],attrs:{src:"static/img/cover.png"}},{tag:"img",cls:["game__card_face","game__card_face--back"],attrs:{src:"static/img/kingOfDiamonds.png"}}]},{tag:"div",cls:["game__card","is-flipped"],attrs:{id:"kingOfHearts"},content:[{tag:"img",cls:["game__card_face","game__card_face--front"],attrs:{src:"static/img/cover.png"}},{tag:"img",cls:["game__card_face","game__card_face--back"],attrs:{src:"static/img/kingOfHearts.png"}}]},{tag:"div",cls:["game__card","is-flipped"],attrs:{id:"kingOfHearts"},content:[{tag:"img",cls:["game__card_face","game__card_face--front"],attrs:{src:"static/img/cover.png"}},{tag:"img",cls:["game__card_face","game__card_face--back"],attrs:{src:"static/img/kingOfHearts.png"}}]},{tag:"div",cls:["game__card","is-flipped"],attrs:{id:"kingOfSpades"},content:[{tag:"img",cls:["game__card_face","game__card_face--front"],attrs:{src:"static/img/cover.png"}},{tag:"img",cls:["game__card_face","game__card_face--back"],attrs:{src:"static/img/kingOfSpades.png"}}]},{tag:"div",cls:["game__card","is-flipped"],attrs:{id:"kingOfSpades"},content:[{tag:"img",cls:["game__card_face","game__card_face--front"],attrs:{src:"static/img/cover.png"}},{tag:"img",cls:["game__card_face","game__card_face--back"],attrs:{src:"static/img/kingOfSpades.png"}}]},{tag:"div",cls:["game__card","is-flipped"],attrs:{id:"ladyOfSpades"},content:[{tag:"img",cls:["game__card_face","game__card_face--front"],attrs:{src:"static/img/cover.png"}},{tag:"img",cls:["game__card_face","game__card_face--back"],attrs:{src:"static/img/ladyOfSpades.png"}}]},{tag:"div",cls:["game__card","is-flipped"],attrs:{id:"ladyOfSpades"},content:[{tag:"img",cls:["game__card_face","game__card_face--front"],attrs:{src:"static/img/cover.png"}},{tag:"img",cls:["game__card_face","game__card_face--back"],attrs:{src:"static/img/ladyOfSpades.png"}}]}]},endGame:{tag:"div",cls:"endGame",content:{tag:"div",cls:"endGame__div",content:[{tag:"img",cls:"endGame__div_img",attrs:{src:"static/img/win.png"}},{tag:"h1",cls:"endGame__div_title",content:"Вы выиграли!"},{tag:"h1",cls:"endGame__div_timeText",content:"Затраченное время:"},{tag:"p",cls:"endGame__div_time"},{tag:"button",cls:"endGame__div_btn",content:"Играть снова"}]}}}},501:(t,a,e)=>{"use strict";t.exports=e.p+"8765b4fa6f0337532589.otf"}},a={};function e(c){var n=a[c];if(void 0!==n)return n.exports;var r=a[c]={id:c,exports:{}};return t[c](r,r.exports,e),r.exports}e.m=t,e.n=t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return e.d(a,{a}),a},e.d=(t,a)=>{for(var c in a)e.o(a,c)&&!e.o(t,c)&&Object.defineProperty(t,c,{enumerable:!0,get:a[c]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,a)=>Object.prototype.hasOwnProperty.call(t,a),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var a=e.g.document;if(!t&&a&&(a.currentScript&&(t=a.currentScript.src),!t)){var c=a.getElementsByTagName("script");c.length&&(t=c[c.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{"use strict";var t=e(379),a=e.n(t),c=e(795),n=e.n(c),r=e(569),i=e.n(r),A=e(565),s=e.n(A),g=e(216),o=e.n(g),_=e(589),d=e.n(_),m=e(174),f={};function l(t){if(null==t||!1===t)return document.createTextNode("");if("string"==typeof t||"number"==typeof t||!0===t)return document.createTextNode(t);if(Array.isArray(t)){const a=document.createDocumentFragment();return t.forEach((t=>{const e=l(t);a.appendChild(e)})),a}const a=document.createElement(t.tag);t.cls&&a.classList.add(...[].concat(t.cls).filter(Boolean)),t.attrs&&Object.keys(t.attrs).forEach((e=>{a.setAttribute(e,t.attrs[e])}));const e=l(t.content);return a.appendChild(e),a}f.styleTagTransform=d(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=n(),f.insertStyleElement=o(),a()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var p=e(689),u=function(t,a,e){if(e||2===arguments.length)for(var c,n=0,r=a.length;n<r;n++)!c&&n in a||(c||(c=Array.prototype.slice.call(a,0,n)),c[n]=a[n]);return t.concat(c||Array.prototype.slice.call(a))};window.application={blocks:{},screens:{},renderScreen:function(t){t in window.application.screens?window.application.screens["".concat(t)]():console.log("Такого экрана cуществует")},renderBlock:function(t,a){for(var e,c=[],n=2;n<arguments.length;n++)c[n-2]=arguments[n];t in window.application.blocks?(e=window.application.blocks)[t].apply(e,u([a],c,!1)):console.log("Такого блока не cуществует")}};var C,v=document.querySelector(".app");function E(){v.textContent="",window.application.renderBlock("startBlock",v)}function b(){v.textContent="",window.application.renderBlock("gameBlock",v)}window.addEventListener("DOMContentLoaded",(function(){window.application.renderScreen("startScreen")})),window.application.blocks.startBlock=function(t){t.appendChild(l(p.startTemplate)),document.querySelector(".startForm").addEventListener("submit",(function(t){t.preventDefault(),0!==(C=Number(document.querySelector(".startForm__div_btn:checked").value))&&window.application.renderScreen("gameScreen")}))},window.application.screens.startScreen=E,window.application.blocks.gameBlock=function(t){t.appendChild(l(p.topDiv)),document.querySelector(".topDiv__restartButton").addEventListener("click",(function(t){t.preventDefault(),b()})),6===C&&t.appendChild(l(p.easyCardsTemplate)),12===C&&t.appendChild(l(p.mediumCardsTemplate)),18===C&&t.appendChild(l(p.hardCardsTemplate));var a,e=document.querySelectorAll(".game__card"),c=document.querySelector(".topDiv__timerDiv__timer"),n=0,r=0;e.forEach((function(t){var a=Math.floor(Math.random()*C);t.style.order=String(a)})),setTimeout((function(){e.forEach((function(t){t.classList.remove("is-flipped"),t.addEventListener("click",o)})),a=setInterval((function(){59==++r?(n++,c.childNodes[0].textContent=n.toString(),c.childNodes[2].textContent="0",r=0):c.childNodes[2].textContent=r.toString()}),1e3)}),5e3);var i=!1,A=!1,s=null,g=null;function o(){if(!A&&this!==s){if(this.classList.add("is-flipped"),!i)return i=!0,void(s=this);g=this,s.id===g.id?(s.removeEventListener("click",o),g.removeEventListener("click",o),_()):(A=!0,setTimeout((function(){s.classList.remove("is-flipped"),g.classList.remove("is-flipped"),_()}),1500)),document.querySelectorAll(".is-flipped").length===C&&(clearInterval(a),setTimeout((function(){t.appendChild(l(p.endGame)),document.querySelector(".endGame__div_time").textContent=c.textContent,document.querySelector(".endGame__div_btn").addEventListener("click",(function(t){t.preventDefault(),E()}))}),500))}}function _(){var t,a;i=(t=[!1,!1])[0],A=t[1],s=(a=[null,null])[0],g=a[1]}},window.application.screens.gameScreen=b})()})();