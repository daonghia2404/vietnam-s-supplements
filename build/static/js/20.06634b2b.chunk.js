(this["webpackJsonpvietnam-supplements"]=this["webpackJsonpvietnam-supplements"]||[]).push([[20],{340:function(e,t,n){"use strict";n.r(t);var i,c=n(10),a=n(0),s=n(38),l=n(393),r=n(17),o=n(92),d=n(1),j=function(){var e,t=Object(s.c)((function(e){return e.rankReducer.bonus})),n=null===t||void 0===t||null===(e=t.nextLevelBonus)||void 0===e?void 0:e.find((function(e){return e.rank===(null===t||void 0===t?void 0:t.rank)+1}));return Object(d.jsx)("div",{className:"RankReward",children:n&&Object(d.jsxs)("div",{className:"Rank-group",children:[Object(d.jsx)("div",{className:"Rank-subtitle",children:"Th\u01b0\u1edfng h\u1ea1ng ti\u1ebfp theo"}),Object(d.jsxs)("div",{className:"Rank-gift flex items-start",children:[Object(d.jsx)(r.c,{name:r.b.Gift,color:r.a.BUDDHA_GOLD}),n.message]})]})})},u=n(4),b=n(75),O=n(11),m=n(65),v=n(396),x=n(395),h=n(129),f=n(47),g=n(59),N=n(178),k=n(80),R=(n(479),function(){var e,t,n=Object(s.b)(),i=Object(a.useState)({page:b.a,pageSize:b.b}),l=Object(c.a)(i,2),r=l[0],o=l[1],j=Object(a.useState)({visible:!1,data:void 0}),R=Object(c.a)(j,2),p=R[0],E=R[1],P=Object(s.c)((function(e){return e.wheelReducer.wheelsUser})),S=!(null!==P&&void 0!==P&&P.records)||0===P.records.length,y=Object(s.c)((function(e){return e.loadingReducer[m.a.GET_WHEELS_USER]})),H=Object(s.c)((function(e){return e.loadingReducer[k.a.BUY_TURN_WHEEL]})),C=function(){E({visible:!1})},T=function(){Object(g.l)(f.d.SUCCESS,"\u0110\u1ed5i l\u01b0\u1ee3t quay th\xe0nh c\xf4ng"),C()},w=Object(a.useCallback)((function(){n(O.ab.request(r))}),[n,r]);return Object(a.useEffect)((function(){w()}),[w]),Object(d.jsxs)("div",{className:"RankExchangePoints",children:[y?Object(d.jsx)(h.a,{}):Object(d.jsx)(d.Fragment,{children:S?Object(d.jsx)(x.a,{title:"Kh\xf4ng c\xf3 v\xf2ng quay"}):Object(d.jsxs)(d.Fragment,{children:[P.records.map((function(e){return Object(d.jsxs)("div",{className:"RankExchangePoints-item flex",children:[Object(d.jsx)("div",{className:"RankExchangePoints-item-image",children:Object(d.jsx)("img",{src:e.image,onError:g.g,alt:""})}),Object(d.jsxs)("div",{className:"RankExchangePoints-item-info",children:[Object(d.jsx)("div",{className:"RankExchangePoints-item-info-title",children:e.title}),Object(d.jsxs)("div",{className:"RankExchangePoints-item-info-points",children:[e.point," \u0111i\u1ec3m"]}),Object(d.jsx)("div",{className:"RankExchangePoints-item-info-btn flex",children:Object(d.jsx)("div",{className:"RankExchangePoints-item-info-cta",onClick:function(){E({visible:!0,data:e})},children:"\u0110\u1ed5i 1 l\u01b0\u1ee3t quay"})})]}),Object(d.jsxs)("div",{className:"RankExchangePoints-item-turn",children:["\u0110\xe3 c\xf3: ",e.turnWheel," l\u01b0\u1ee3t quay"]})]},e.id)})),Object(d.jsx)("div",{className:"RankExchangePoints-pagination flex justify-center",children:Object(d.jsx)(v.a,{page:r.page,pageSize:r.pageSize,total:null===P||void 0===P?void 0:P.total,onChange:function(e,t){o(Object(u.a)(Object(u.a)({},r),{},{page:e,pageSize:t||r.pageSize}))}})})]})}),Object(d.jsxs)(N.a,Object(u.a)(Object(u.a)({},p),{},{confirmButton:{title:"\u0110\u1ed3ng \xfd",onClick:function(){p.data&&n(O.e.request(p.data.id,T))},loading:H},cancelButton:{title:"Hu\u1ef7 b\u1ecf",onClick:C,disabled:H},onClose:C,children:[Object(d.jsx)("div",{className:"Modal-body-title",style:{marginBottom:"1rem"},children:"\u0110\u1ed5i l\u01b0\u1ee3t quay"}),Object(d.jsxs)("div",{className:"Modal-body-subtitle",style:{marginBottom:".5rem"},children:["B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn d\xf9ng ",Object(d.jsxs)("strong",{children:[null===p||void 0===p||null===(e=p.data)||void 0===e?void 0:e.point," \u0111i\u1ec3m"]})," \u0111\u1ec3 \u0111\u1ed5i 1 l\u01b0\u1ee3t quay"," ",Object(d.jsx)("strong",{children:null===p||void 0===p||null===(t=p.data)||void 0===t?void 0:t.title})," kh\xf4ng?"]})]}))]})}),p=n(97),E=(n(480),function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.rankReducer.historyPoints})),n=Object(s.c)((function(e){return e.loadingReducer[p.a.GET_HISTORY_POINTS]})),i=!(null!==t&&void 0!==t&&t.records)||0===t.records.length,l=Object(a.useState)({page:b.a,pageSize:b.b}),r=Object(c.a)(l,2),o=r[0],j=r[1],m=Object(a.useCallback)((function(){e(O.z.request(o))}),[e,o]);return Object(a.useEffect)((function(){m()}),[m]),Object(d.jsx)("div",{className:"RankPointsHistory",children:n?Object(d.jsx)(h.a,{}):Object(d.jsxs)(d.Fragment,{children:[i?Object(d.jsx)(x.a,{title:"Ch\u01b0a c\xf3 l\u1ecbch s\u1eed \u0111\u1ed5i \u0111i\u1ec3m"}):Object(d.jsx)(d.Fragment,{children:t.records.map((function(e){return Object(d.jsxs)("div",{className:"RankPointsHistory-item flex items-end justify-between",children:[Object(d.jsxs)("div",{className:"RankPointsHistory-item-col",children:[Object(d.jsx)("div",{className:"RankPointsHistory-text bold",children:"\u0110\u1ed5i 1 l\u01b0\u1ee3t quay"}),Object(d.jsx)("div",{className:"RankPointsHistory-text error",children:"-1000 \u0111i\u1ec3m"})]}),Object(d.jsx)("div",{className:"RankPointsHistory-item-col",children:Object(d.jsx)("div",{className:"RankPointsHistory-text",children:Object(g.b)(e.createdAt)})})]},e.id)}))}),Object(d.jsx)("div",{className:"RankPointsHistory-pagination flex justify-center",children:Object(d.jsx)(v.a,{page:o.page,pageSize:o.pageSize,total:null===t||void 0===t?void 0:t.total,onChange:function(e,t){j(Object(u.a)(Object(u.a)({},o),{},{page:e,pageSize:t||o.pageSize}))}})})]})})});!function(e){e.REWARD="REWARD",e.EXCHANGE_POINTS="EXCHANGE_POINTS",e.HISTORY_POINT="HISTORY_POINT"}(i||(i={}));var P=[{value:i.REWARD,label:"Th\u01b0\u1edfng h\u1ea1ng"},{value:i.EXCHANGE_POINTS,label:"\u0110\u1ed5i \u0111i\u1ec3m"},{value:i.HISTORY_POINT,label:"L\u1ecbch s\u1eed \u0111i\u1ec3m"}],S=(n(481),function(){var e,t=Object(s.b)(),n=Object(a.useState)(i.REWARD),u=Object(c.a)(n,2),b=u[0],m=u[1],v=Object(s.c)((function(e){return e.rankReducer.bonus})),x=Object(s.c)((function(e){return e.loadingReducer[p.a.GET_BONUS]})),f=null===v||void 0===v||null===(e=v.nextLevelBonus)||void 0===e?void 0:e.find((function(e){return e.rank===(null===v||void 0===v?void 0:v.rank)+1})),g=Object(a.useCallback)((function(){t(O.t.request())}),[t]);return Object(a.useEffect)((function(){g()}),[g]),Object(d.jsx)("div",{className:"Rank style-container",children:x?Object(d.jsx)(h.a,{}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l.a,{title:"H\u1ea1ng c\u1ee7a b\u1ea1n"}),Object(d.jsxs)("div",{className:"Rank-main",children:[Object(d.jsxs)("div",{className:"Rank-card",children:[Object(d.jsxs)("div",{className:"Rank-card-header flex justify-between",children:[Object(d.jsxs)("div",{className:"Rank-card-header-item flex items-center",children:[Object(d.jsx)(r.c,{name:r.b.Medal,color:r.a.BUDDHA_GOLD}),"H\u1ea1ng ",null===v||void 0===v?void 0:v.rank]}),Object(d.jsxs)("div",{className:"Rank-card-header-item flex items-center",children:[null===v||void 0===v?void 0:v.currentPoint," ",Object(d.jsx)("span",{children:"\u0111i\u1ec3m"})]})]}),Object(d.jsxs)("div",{className:"Rank-card-description",children:["B\u1ea1n c\u1ea7n ",null===f||void 0===f?void 0:f.gradePoint," \u0111i\u1ec3m t\xedch lu\u1ef9 \u0111\u1ec3 nh\u1eadn th\xeam \u01b0u \u0111\xe3i t\u1eeb h\u1ea1ng ti\u1ebfp theo"]}),Object(d.jsxs)("div",{className:"Rank-card-footer flex justify-between flex-wrap",children:[Object(d.jsx)("div",{className:"Rank-card-footer-item",children:"Ti\u1ebfn \u0111\u1ed9"}),Object(d.jsxs)("div",{className:"Rank-card-footer-item",children:[null===v||void 0===v?void 0:v.currentPoint," / ",null===v||void 0===v?void 0:v.nextLevelPoint," \u0111i\u1ec3m"]}),Object(d.jsx)("div",{className:"Rank-card-footer-process",children:Object(d.jsx)("div",{className:"Rank-card-footer-process-bar",style:{width:null!==v&&void 0!==v&&v.currentPoint&&null!==v&&void 0!==v&&v.nextLevelPoint?"".concat((v.currentPoint/v.nextLevelPoint*100).toFixed(2),"%"):"0%"}})})]})]}),Object(d.jsx)("div",{className:"Rank-tabs flex justify-between",children:P.map((function(e){return Object(d.jsx)("div",{className:"Rank-tabs-item",children:Object(d.jsx)(o.a,{size:"small",title:e.label,shadow:!1,type:e.value===b?"link":void 0,onClick:function(){return t=e.value,void m(t);var t}})},e.value)}))}),function(){switch(b){case i.REWARD:return Object(d.jsx)(j,{});case i.EXCHANGE_POINTS:return Object(d.jsx)(R,{});case i.HISTORY_POINT:return Object(d.jsx)(E,{});default:return Object(d.jsx)(d.Fragment,{})}}()]})]})})});t.default=S},393:function(e,t,n){"use strict";n(0);var i=n(9),c=n.n(i),a=(n(394),n(1)),s=function(e){var t=e.className,n=e.center,i=e.title,s=e.onClick;return Object(a.jsx)("div",{className:c()("HeaderSkew flex",t,{"justify-center":n},{"cursor-pointer":s}),onClick:s,children:Object(a.jsxs)("div",{className:"HeaderSkew-item",children:[Object(a.jsx)("div",{className:"HeaderSkew-title",children:i}),Object(a.jsx)("div",{className:"HeaderSkew-subtitle",children:"VNSUPPLEMENTS"})]})})};t.a=s},394:function(e,t,n){},395:function(e,t,n){"use strict";var i=n(4),c=(n(0),n.p+"static/media/image-empty-meal-schedule.79e89b30.png"),a=n(92),s=(n(398),n(1)),l=function(e){var t=e.title,n=e.buttonProps;return Object(s.jsxs)("div",{className:"EmptyBox",children:[Object(s.jsx)("div",{className:"EmptyBox-image",children:Object(s.jsx)("img",{src:c,alt:""})}),Object(s.jsx)("div",{className:"EmptyBox-title",children:t}),n&&Object(s.jsx)("div",{className:"EmptyBox-btn",children:Object(s.jsx)(a.a,Object(i.a)(Object(i.a)({},n),{},{type:"primary"}))})]})};t.a=l},396:function(e,t,n){"use strict";n(0);var i=n(532),c=n(9),a=n.n(c),s=(n(397),n(1)),l=function(e){var t=e.page,n=e.pageSize,c=e.total,l=void 0===c?0:c,r=e.className,o=e.onChange;return Object(s.jsx)("div",{className:a()("Pagination",r),children:Object(s.jsx)(i.a,{current:t,pageSize:n,total:l,showQuickJumper:!1,showSizeChanger:!1,hideOnSinglePage:!0,showLessItems:!0,onChange:o})})};t.a=l},397:function(e,t,n){},398:function(e,t,n){},479:function(e,t,n){},480:function(e,t,n){},481:function(e,t,n){}}]);
//# sourceMappingURL=20.06634b2b.chunk.js.map