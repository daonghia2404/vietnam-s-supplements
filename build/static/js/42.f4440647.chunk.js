(this["webpackJsonpvietnam-supplements"]=this["webpackJsonpvietnam-supplements"]||[]).push([[42],{379:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(437),u=n(422),i=n(59),s=(n(520),n(1)),r=function(){return Object(c.useEffect)((function(){Object(i.j)()}),[]),Object(s.jsx)("div",{className:"NewDetail",children:Object(s.jsx)(a.a,{type:u.a.NEW})})};t.default=r},422:function(e,t,n){"use strict";var c;n.d(t,"a",(function(){return c})),function(e){e.HANDBOOK="HANDBOOK",e.NEW="NEW"}(c||(c={}))},435:function(e,t,n){},437:function(e,t,n){"use strict";var c=n(0),a=n(38),u=n(30),i=n(94),s=n(95),r=n(129),o=n(11),l=n(422),O=(n(435),n(1)),b=function(e){var t=e.type,n=Object(a.b)(),b=t===l.a.HANDBOOK,j=Object(u.g)().id,f=Object(a.c)((function(e){return e.loadingReducer[i.a.GET_HANDBOOK]})),d=Object(a.c)((function(e){return e.loadingReducer[s.a.GET_NEW]})),N=Object(a.c)((function(e){return e.handbookReducer.handbook})),p=Object(a.c)((function(e){return e.newReducer.new})),v=f||d,h=b?N:p,m=Object(c.useCallback)((function(){j&&n(o.w.request(j))}),[n,j]),B=Object(c.useCallback)((function(){j&&n(o.B.request(j))}),[n,j]);return Object(c.useEffect)((function(){switch(t){case l.a.HANDBOOK:m();break;case l.a.NEW:B()}}),[t,m,B]),Object(O.jsx)("div",{className:"BlogDetail",children:v?Object(O.jsx)(r.a,{}):Object(O.jsx)("div",{className:"BlogDetail-wrapper",children:Object(O.jsx)("div",{className:"BlogDetail-content style-content",dangerouslySetInnerHTML:{__html:(null===h||void 0===h?void 0:h.content)||""}})})})};t.a=b},520:function(e,t,n){}}]);
//# sourceMappingURL=42.f4440647.chunk.js.map