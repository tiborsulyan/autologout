module.exports=function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=8)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["common/components/Button"]},function(t,e){t.exports=flarum.core.compat["common/models/User"]},function(t,e){t.exports=flarum.core.compat["components/Page"]},function(t,e){t.exports=flarum.core.compat["components/Modal"]},,,function(t,e,o){"use strict";o.r(e);var n=o(0),i=o.n(n),r=o(3),a=o.n(r),s=o(4),u=o.n(s),l=o(1);function c(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var f=o(5),d=o.n(f),g=o(2),h=o.n(g),v=function(t){var e,o;function n(){for(var e,o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return c(p(e=t.call.apply(t,[this].concat(n))||this),"remainingSeconds",void 0),c(p(e),"remainingTimeString",void 0),c(p(e),"updateInterval",void 0),e}o=t,(e=n).prototype=Object.create(o.prototype),e.prototype.constructor=e,e.__proto__=o;var i=n.prototype;return i.oninit=function(e){t.prototype.oninit.call(this,e),this.remainingSeconds=this.attrs.remainingTimeMillis/1e3,this.recalculateRemainingTime(),this.updateInterval=setInterval(this.updateRemainingTime.bind(this),1e3)},i.recalculateRemainingTime=function(){var t=Math.floor(this.remainingSeconds/60),e=this.remainingSeconds-60*t;this.remainingTimeString=t+":"+e.toString().padStart(2,"0")},i.updateRemainingTime=function(){this.remainingSeconds--,this.remainingSeconds<0?this.removeTimeUpdater():(this.recalculateRemainingTime(),m.redraw())},i.removeTimeUpdater=function(){this.updateInterval&&(clearInterval(this.updateInterval),this.updateInterval=null)},i.className=function(){return"ExpirationWarningModal Modal--small"},i.title=function(){return app.translator.trans("tiborsulyan-autologout.forum.warning-modal.title")},i.content=function(){return m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("div",{className:"Modal-header"},m("h3",null,app.translator.trans("tiborsulyan-autologout.forum.warning-modal.message")),m("p",null,app.translator.trans("tiborsulyan-autologout.forum.warning-modal.remaining")," ",this.remainingTimeString)),m("div",{className:"Form-group"},h.a.component({className:"Button Button--primary Button--block",type:"submit",loading:this.loading,onclick:this.stay.bind(this)},app.translator.trans("tiborsulyan-autologout.forum.warning-modal.stay")),",",h.a.component({className:"Button Button--primary Button--block",type:"submit",loading:this.loading,onclick:this.leave.bind(this)},app.translator.trans("tiborsulyan-autologout.forum.warning-modal.leave")))))},i.onremove=function(){console.log("Removing modal update interval"),this.removeTimeUpdater()},i.onsubmit=function(t){t.preventDefault()},i.stay=function(){app.request({method:"POST",url:app.forum.attribute("baseUrl")+"/api/keepalive"}),this.hide()},i.leave=function(){this.removeTimeUpdater(),app.session.logout()},n}(d.a),b=function(){function t(){c(this,"options",void 0),c(this,"warnTimer",void 0),c(this,"timeoutTimer",void 0)}var e=t.prototype;return e.warn=function(){app.modal.show(v,{remainingTimeMillis:this.options.logoutAfter-this.options.warnAfter})},e.timeout=function(){app.session.user&&app.session.logout()},e.stop=function(){this.warnTimer&&(clearTimeout(this.warnTimer),this.warnTimer=null),this.timeoutTimer&&(clearTimeout(this.timeoutTimer),this.timeoutTimer=null)},e.start=function(t){this.options=t,this.options.warnAfter&&(this.warnTimer=setTimeout(this.warn.bind(this),this.options.warnAfter)),this.timeoutTimer=setTimeout(this.timeout.bind(this),this.options.logoutAfter)},e.restart=function(t){this.stop(),this.start(t)},t}();function y(){var t=i.a.forum.attribute("tiborsulyan-autologout.logoutAfter")||120,e=i.a.forum.attribute("tiborsulyan-autologout.warnAfter");return e?{logoutAfter:6e4*t-1e4,warnAfter:6e4*e-1e4}:{logoutAfter:6e4*t}}i.a.initializers.add("tiborsulyan/autologout",(function(){a.a.prototype.autoLogoutTimer=null,Object(l.extend)(u.a.prototype,"oninit",(function(){i.a.session.user&&(i.a.session.user.autoLogoutTimer?i.a.session.user.autoLogoutTimer.restart(y()):(i.a.session.user.autoLogoutTimer=new b,i.a.session.user.autoLogoutTimer.start(y())))})),Object(l.extend)(XMLHttpRequest.prototype,"open",(function(){this.addEventListener("load",(function(){i.a.session.user&&i.a.session.user.autoLogoutTimer&&i.a.session.user.autoLogoutTimer.restart(y())}))}))}))}]);
//# sourceMappingURL=forum.js.map