(this["webpackJsonpvietnam-supplements"]=this["webpackJsonpvietnam-supplements"]||[]).push([[24],{345:function(e,t,i){"use strict";i.r(t);var a,n=i(4),s=i(10),c=i(0),l=i(38),o=i(9),r=i.n(o),j=i(393),d=i(92),u=i(75),b=i(11),m=i(65),O=i(129),h=i(174),v=i(396),p=i(395),x=i(8),g=i(59);!function(e){e.NOT_EXPIRE="NOT_EXPIRE",e.EXPIRE="EXPIRE"}(a||(a={}));var f=[{value:a.NOT_EXPIRE,label:"C\xf2n h\u1ea1n"},{value:a.EXPIRE,label:"\u0110\xe3 h\u1ebft h\u1ea1n"}],y=(i(484),i(1)),N=function(){var e,t,i=Object(l.b)(),o=Object(l.c)((function(e){return e.loadingReducer[m.a.GET_HISTORY_WHEEL]})),N=Object(l.c)((function(e){return e.wheelReducer.historyWheel})),E=(null===N||void 0===N?void 0:N.records)&&0===(null===N||void 0===N||null===(e=N.records)||void 0===e?void 0:e.length),R=Object(c.useState)({page:u.a,pageSize:u.b,type:h.b.NULL}),H=Object(s.a)(R,2),S=H[0],w=H[1],P=Object(c.useState)(a.NOT_EXPIRE),k=Object(s.a)(P,2),C=k[0],I=k[1],T=function(e){switch(!0){case Object(g.h)("",e.outOfDate):return{label:"\u0110\xe3 h\u1ebft h\u1ea1n",color:"error"};case e.status===h.a.RECEIVED:return{label:"\u0110\xe3 nh\u1eadn th\u01b0\u1edfng",color:"success"};case e.status===h.a.NOT_RECEIVED:return{label:"Ch\u01b0a nh\u1eadn th\u01b0\u1edfng",color:"warning"};default:return{label:"",color:""}}},z=Object(c.useCallback)((function(){i(b.y.request(S))}),[i,S]);return Object(c.useEffect)((function(){z()}),[z]),Object(y.jsxs)("div",{className:"HistoryRotation style-container",children:[Object(y.jsx)(j.a,{title:"L\u1ecbch s\u1eed v\xf2ng quay"}),Object(y.jsxs)("div",{className:"HistoryRotation-main",children:[Object(y.jsx)("div",{className:"HistoryRotation-tabs flex justify-between",children:f.map((function(e){return Object(y.jsx)("div",{className:"HistoryRotation-tabs-item",children:Object(y.jsx)(d.a,{size:"small",title:e.label,shadow:!1,type:C===e.value?"link":void 0,onClick:function(){return t=e.value,I(t),void w(Object(n.a)(Object(n.a)({},S),{},{type:t===a.NOT_EXPIRE?h.b.NULL:h.b.OUTDATE}));var t}})})}))}),Object(y.jsx)("div",{className:"HistoryRotation-main-list",children:o?Object(y.jsx)(O.a,{}):Object(y.jsx)(y.Fragment,{children:E?Object(y.jsx)(p.a,{title:"Kh\xf4ng c\xf3 d\u1eef li\u1ec7u l\u1ecbch s\u1eed quay th\u01b0\u1edfng",buttonProps:{title:"\u0110i t\u1edbi v\xf2ng quay",type:"primary",link:"".concat(x.b.Admin).concat(x.d.Wheels)}}):Object(y.jsx)(y.Fragment,{children:null===N||void 0===N||null===(t=N.records)||void 0===t?void 0:t.map((function(e){return Object(y.jsxs)("div",{className:"HistoryRotation-main-list-item flex justify-between",children:[Object(y.jsxs)("div",{className:"HistoryRotation-main-list-item-col",children:[Object(y.jsx)("div",{className:"HistoryRotation-main-list-item-text",children:Object(g.b)(e.createdAt)}),Object(y.jsx)("div",{className:"HistoryRotation-main-list-item-text bold",children:e.prize}),Object(y.jsx)("div",{className:"HistoryRotation-main-list-item-text",children:e.description})]}),Object(y.jsx)("div",{className:"HistoryRotation-main-list-item-col",children:Object(y.jsx)("div",{className:r()("HistoryRotation-main-list-item-text warning nowrap",T(e).color),children:T(e).label})})]})}))})})})]}),Object(y.jsx)("div",{className:"HistoryRotation-pagination flex justify-center",children:Object(y.jsx)(v.a,{page:S.page,pageSize:S.pageSize,total:null===N||void 0===N?void 0:N.total,onChange:function(e,t){w(Object(n.a)(Object(n.a)({},S),{},{page:e,pageSize:t||S.pageSize}))}})})]})};t.default=N},393:function(e,t,i){"use strict";i(0);var a=i(9),n=i.n(a),s=(i(394),i(1)),c=function(e){var t=e.className,i=e.center,a=e.title,c=e.onClick;return Object(s.jsx)("div",{className:n()("HeaderSkew flex",t,{"justify-center":i},{"cursor-pointer":c}),onClick:c,children:Object(s.jsxs)("div",{className:"HeaderSkew-item",children:[Object(s.jsx)("div",{className:"HeaderSkew-title",children:a}),Object(s.jsx)("div",{className:"HeaderSkew-subtitle",children:"VNSUPPLEMENTS"})]})})};t.a=c},394:function(e,t,i){},395:function(e,t,i){"use strict";var a=i(4),n=(i(0),i.p+"static/media/image-empty-meal-schedule.79e89b30.png"),s=i(92),c=(i(398),i(1)),l=function(e){var t=e.title,i=e.buttonProps;return Object(c.jsxs)("div",{className:"EmptyBox",children:[Object(c.jsx)("div",{className:"EmptyBox-image",children:Object(c.jsx)("img",{src:n,alt:""})}),Object(c.jsx)("div",{className:"EmptyBox-title",children:t}),i&&Object(c.jsx)("div",{className:"EmptyBox-btn",children:Object(c.jsx)(s.a,Object(a.a)(Object(a.a)({},i),{},{type:"primary"}))})]})};t.a=l},396:function(e,t,i){"use strict";i(0);var a=i(532),n=i(9),s=i.n(n),c=(i(397),i(1)),l=function(e){var t=e.page,i=e.pageSize,n=e.total,l=void 0===n?0:n,o=e.className,r=e.onChange;return Object(c.jsx)("div",{className:s()("Pagination",o),children:Object(c.jsx)(a.a,{current:t,pageSize:i,total:l,showQuickJumper:!1,showSizeChanger:!1,hideOnSinglePage:!0,showLessItems:!0,onChange:r})})};t.a=l},397:function(e,t,i){},398:function(e,t,i){},484:function(e,t,i){}}]);
//# sourceMappingURL=24.45675d62.chunk.js.map