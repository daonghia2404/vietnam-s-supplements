(this["webpackJsonpvietnam-supplements"]=this["webpackJsonpvietnam-supplements"]||[]).push([[59],{376:function(e,t,i){"use strict";i.r(t);var n=i(4),a=i(14),c=i(10),o=i(0),s=i(38),d=i(393),l=i(442),r=i(396),b=i(445),u=i(11),j=i(75),p=i(94),O=i(129),g=i(395),v=i(8),f=(i(517),i(59)),m=i(434),h=i(1),x=function(){var e,t,i,x,k=Object(s.b)(),S=Object(o.useState)({page:j.a,pageSize:j.b}),H=Object(c.a)(S,2),N=H[0],z=H[1],w=Object(s.c)((function(e){return e.handbookReducer.handbooks})),C=Object(s.c)((function(e){var t;return null===(t=e.handbookReducer.handbooks)||void 0===t?void 0:t.total})),D=0===(null===w||void 0===w||null===(e=w.records)||void 0===e?void 0:e.length),E=null===(t=Object(a.a)((null===w||void 0===w?void 0:w.records)||[]))||void 0===t||null===(i=t.splice(0,3))||void 0===i?void 0:i.map((function(e){return{id:String(e.id),title:e.title,image:e.image,description:e.description,shareUrl:"".concat(v.d.HandbookDetail(String(e.id)))}})),K=Object(s.c)((function(e){return e.loadingReducer[p.a.GET_HANDBOOKS]})),R=Object(o.useCallback)((function(){k(u.x.request(N))}),[k,N]);return Object(o.useEffect)((function(){R()}),[R]),Object(o.useEffect)((function(){Object(f.j)()}),[]),Object(h.jsx)("div",{className:"Handbooks",children:K?Object(h.jsx)(O.a,{}):Object(h.jsxs)("div",{className:"Handbooks-wrapper",children:[Object(h.jsx)(d.a,{title:"C\u1ea9m nang"}),!D&&Object(h.jsx)(b.a,{type:m.a.HANDBOOKS,data:E}),Object(h.jsx)("div",{className:"Handbooks-title",children:"C\u1ea9m nang"}),D?Object(h.jsx)(g.a,{title:"Kh\xf4ng c\xf3 d\u1eef li\u1ec7u c\u1ea9m nang"}):Object(h.jsx)("div",{className:"Handbooks-list flex flex-wrap",children:null===w||void 0===w||null===(x=w.records)||void 0===x?void 0:x.map((function(e){return Object(h.jsx)("div",{className:"Handbooks-list-item",children:Object(h.jsx)(l.a,{image:e.image,title:e.title,description:e.description,url:v.d.HandbookDetail(String(e.id))})},e.id)}))}),Object(h.jsx)("div",{className:"Handbooks-pagination flex justify-center",children:Object(h.jsx)(r.a,{page:N.page,pageSize:N.pageSize,total:C,onChange:function(e,t){z(Object(n.a)(Object(n.a)({},N),{},{page:e,pageSize:t||N.pageSize}))}})})]})})};t.default=x},517:function(e,t,i){}}]);
//# sourceMappingURL=59.4aebcd29.chunk.js.map