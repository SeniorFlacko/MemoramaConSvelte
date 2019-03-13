var app=function(){"use strict";function t(){}function e(t,e){for(var r in e)t[r]=e[r];return t}function r(t,e){for(var r in e)t[r]=1;return t}function a(t){t()}function n(t,e){t.appendChild(e)}function o(t,e,r){t.insertBefore(e,r)}function s(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function c(t){return document.createTextNode(t)}function d(){return document.createComment("")}function h(t,e,r,a){t.addEventListener(e,r,a)}function u(t,e,r,a){t.removeEventListener(e,r,a)}function l(){return Object.create(null)}function f(t){t._lock=!0,_(t._beforecreate),_(t._oncreate),_(t._aftercreate),t._lock=!1}function m(t,e){t._handlers=l(),t._slots=l(),t._bind=e._bind,t._staged={},t.options=e,t.root=e.root||t,t.store=e.store||t.root.store,e.root||(t._beforecreate=[],t._oncreate=[],t._aftercreate=[])}function _(t){for(;t&&t.length;)t.shift()()}var g={destroy:function(e){this.destroy=t,this.fire("destroy"),this.set=t,this._fragment.d(!1!==e),this._fragment=null,this._state={}},get:function(){return this._state},fire:function(t,e){var r=t in this._handlers&&this._handlers[t].slice();if(r)for(var a=0;a<r.length;a+=1){var n=r[a];if(!n.__calling)try{n.__calling=!0,n.call(this,e)}finally{n.__calling=!1}}},on:function(t,e){var r=this._handlers[t]||(this._handlers[t]=[]);return r.push(e),{cancel:function(){var t=r.indexOf(e);~t&&r.splice(t,1)}}},set:function(t){this._set(e({},t)),this.root._lock||f(this.root)},_recompute:t,_set:function(t){var r=this._state,a={},n=!1;for(var o in t=e(this._staged,t),this._staged={},t)this._differs(t[o],r[o])&&(a[o]=n=!0);n&&(this._state=e(e({},r),t),this._recompute(a,this._state),this._bind&&this._bind(a,this._state),this._fragment&&(this.fire("state",{changed:a,current:this._state,previous:r}),this._fragment.p(a,this._state),this.fire("update",{changed:a,current:this._state,previous:r})))},_stage:function(t){e(this._staged,t)},_mount:function(t,e){this._fragment[this._fragment.i?"i":"m"](t,e||null)},_differs:function(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}};function p(t,e){var r;function a(r){t.fire("seleccionado",{estado:e.estado})}return{c(){(r=i("div")).innerHTML='<img class="card-img-top" src="https://loremflickr.com/300/300/orange" alt="Card image cap">',h(r,"click",a),r.className="card card-width inline-flex pointer svelte-1o5madn"},m(t,e){o(t,r,e)},p(t,r){e=r},d(t){t&&s(r),u(r,"click",a)}}}function v(t,e){var r,a,c;return{c(){r=i("div"),(a=i("img")).className="card-img-top",a.src=c="https://loremflickr.com/300/300/"+e.card.nombre,a.alt="Card image cap",r.className="card card-width inline-flex no-drop blackwhite svelte-1o5madn"},m(t,e){o(t,r,e),n(r,a)},p(t,e){t.card&&c!==(c="https://loremflickr.com/300/300/"+e.card.nombre)&&(a.src=c)},d(t){t&&s(r)}}}function b(t,e){var r,a,c;function d(r){t.fire("seleccionado",{estado:e.estado})}return{c(){r=i("div"),(a=i("img")).className="card-img-top",a.src=c="https://loremflickr.com/300/300/"+e.card.nombre,a.alt="Card image cap",h(r,"click",d),r.className="card card-width inline-flex pointer svelte-1o5madn"},m(t,e){o(t,r,e),n(r,a)},p(t,r){e=r,t.card&&c!==(c="https://loremflickr.com/300/300/"+e.card.nombre)&&(a.src=c)},d(t){t&&s(r),u(r,"click",d)}}}function y(t){m(this,t),this._state=e({card:{nombre:"",estado:""}},t.data),this._recompute({card:1},this._state),this._intro=!!t.intro,this._fragment=function(t,e){var r,n;function i(t){return!0===t.estado?b:"INAMOVIBLE"===t.estado?v:p}var c=i(e),h=c(t,e);return{c(){h.c(),r=d()},m(t,e){h.m(t,e),o(t,r,e),n=!0},p(e,a){c===(c=i(a))&&h?h.p(e,a):(h.d(1),(h=c(t,a)).c(),h.m(r.parentNode,r))},i(t,e){n||this.m(t,e)},o:a,d(t){h.d(t),t&&s(r)}}}(this,this._state),this.root._oncreate.push(()=>{(function(){}).call(this),this.fire("update",{changed:r({},this._state),current:this._state})}),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),f(this)),this._intro=!0}e(y.prototype,g),e(y.prototype,{}),y.prototype._recompute=function(t,e){t.card&&this._differs(e.estado,e.estado=function({card:t}){return t.estado}(e))&&(t.estado=!0)};var N={toggleEstado(t,e,r){const{cards:a}=this.get();a[e].estado=!t.estado,this.set({cards:a});const{counter:n,actual:o,aciertos:s}=this.get();if(o)if(o===r){const t=a.map(t=>t.nombre===r?{...t,estado:"INAMOVIBLE"}:{...t});this.set({cards:t,actual:"",aciertos:s+1})}else{const t=a.map(t=>!0===t.estado?{...t,estado:!1}:{...t});setTimeout(()=>{this.set({cards:t,actual:""})},2e3)}else this.set({actual:r})},shuffle:t=>[...t.sort(()=>Math.random()-.5)]};function k({changed:t,current:e,previous:r}){}function x(t,e,r){const a=Object.create(t);return a.card=e[r],a.each_value=e,a.index=r,a}function C(t,e){var r;return{c(){r=c("No hay Cartas!")},m(t,e){o(t,r,e)},d(t){t&&s(r)}}}function w(t,e){var r,a={},n={};void 0!==e.card&&(n.card=e.card,a.card=!0);var o=new y({root:t.root,store:t.store,data:n,_bind(r,n){var o={};!a.card&&r.card&&(e.each_value[e.index]=n.card=n.card,o.cards=e.cards),t._set(o),a={}}});return t.root._beforecreate.push(()=>{o._bind({card:1},o.get())}),o.on("seleccionado",function(r){t.toggleEstado(r,e.index,e.card.nombre)}),{c(){o._fragment.c()},m(t,e){o._mount(t,e),r=!0},p(t,r){e=r;var n={};!a.card&&t.cards&&(n.card=e.card,a.card=void 0!==e.card),o._set(n),a={}},i(t,e){r||this.m(t,e)},o(t){r&&(o&&o._fragment.o(t),r=!1)},d(t){o.destroy(t)}}}function B(t,e){var r,a,n,d={},h={};void 0!==e.card&&(h.card=e.card,d.card=!0);var u=new y({root:t.root,store:t.store,data:h,_bind(r,a){var n={};!d.card&&r.card&&(e.each_value[e.index]=a.card=a.card,n.cards=e.cards),t._set(n),d={}}});return t.root._beforecreate.push(()=>{u._bind({card:1},u.get())}),u.on("seleccionado",function(r){t.toggleEstado(r,e.index,e.card.nombre)}),{c(){u._fragment.c(),r=c("\r\n\t\t\t\t"),a=i("br")},m(t,e){u._mount(t,e),o(t,r,e),o(t,a,e),n=!0},p(t,r){e=r;var a={};!d.card&&t.cards&&(a.card=e.card,d.card=void 0!==e.card),u._set(a),d={}},i(t,e){n||this.m(t,e)},o(t){n&&(u&&u._fragment.o(t),n=!1)},d(t){u.destroy(t),t&&(s(r),s(a))}}}function E(t,e){var r,a,n,i,c=[B,w],h=[];function u(t){return(t.index+1)%4==0?0:1}return r=u(e),a=h[r]=c[r](t,e),{c(){a.c(),n=d()},m(t,e){h[r].m(t,e),o(t,n,e),i=!0},p(e,o){var s=r;(r=u(o))===s?h[r].p(e,o):(a.o(function(){h[s].d(1),h[s]=null}),(a=h[r])||(a=h[r]=c[r](t,o)).c(),a.m(n.parentNode,n))},i(t,e){i||this.m(t,e)},o(t){i&&(a?a.o(t):t(),i=!1)},d(t){h[r].d(t),t&&s(n)}}}function L(t){m(this,t),this._state=e({cards:[{nombre:"Dog",estado:!1},{nombre:"Cat",estado:!1},{nombre:"Cat",estado:!1},{nombre:"Dog",estado:!1},{nombre:"Dolphin",estado:!1},{nombre:"Dolphin",estado:!1},{nombre:"Whale",estado:!1},{nombre:"Whale",estado:!1},{nombre:"Tiger",estado:!1},{nombre:"Tiger",estado:!1},{nombre:"Bird",estado:!1},{nombre:"Bird",estado:!1},{nombre:"Horse",estado:!1},{nombre:"Horse",estado:!1},{nombre:"Bear",estado:!1},{nombre:"Bear",estado:!1}],actual:"",aciertos:0},t.data),this._recompute({cards:1},this._state),this._intro=!!t.intro,this._handlers.state=[k],k.call(this,{changed:r({},this._state),current:this._state}),this._fragment=function(t,e){for(var r,a,d,h,u,l,f,m=e.cards,_=[],g=0;g<m.length;g+=1)_[g]=E(t,x(e,m,g));function p(t,e,r){_[t]&&_[t].o(()=>{e&&(_[t].d(e),_[t]=null),r&&r()})}var v=null;return m.length||(v=C()).c(),{c(){r=i("div"),a=i("div");for(var t=0;t<_.length;t+=1)_[t].c();d=c("\r\n\r\n\t"),h=i("h1"),u=c("Aciertos: "),l=c(e.aciertos),a.className="all-cards",h.className="svelte-1sdiu92",r.className="parent-flex svelte-1sdiu92"},m(t,e){o(t,r,e),n(r,a);for(var s=0;s<_.length;s+=1)_[s].i(a,null);v&&v.m(a,null),n(r,d),n(r,h),n(h,u),n(h,l),f=!0},p(e,r){if(e.cards){m=r.cards;for(var n=0;n<m.length;n+=1){const o=x(r,m,n);_[n]?_[n].p(e,o):(_[n]=E(t,o),_[n].c()),_[n].i(a,null)}for(;n<_.length;n+=1)p(n,1)}var o,s;m.length?v&&(v.d(1),v=null):v||((v=C()).c(),v.m(a,null)),f&&!e.aciertos||(o=l,s=r.aciertos,o.data=""+s)},i(t,e){f||this.m(t,e)},o(t){if(!f)return;_=_.filter(Boolean);const e=(r=t,0===(a=_.length)&&r(),()=>{--a||r()});var r,a;for(let t=0;t<_.length;t+=1)p(t,0,e);f=!1},d(t){t&&s(r),function(t,e){for(var r=0;r<t.length;r+=1)t[r]&&t[r].d(e)}(_,t),v&&v.d()}}}(this,this._state),this.root._oncreate.push(()=>{(function(){let{cards:t}=this.get(),e=this.shuffle(t);this.set({cards:e})}).call(this),this.fire("update",{changed:r({},this._state),current:this._state})}),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),f(this)),this._intro=!0}return e(L.prototype,g),e(L.prototype,N),L.prototype._recompute=function(t,e){t.cards&&(this._differs(e.counter,e.counter=function({cards:t}){return t.filter(t=>t.estado).length}(e))&&(t.counter=!0),this._differs(e.selected,e.selected=function({cards:t}){return t.filter(t=>!0===t.estado)}(e))&&(t.selected=!0))},new L({target:document.body,data:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
