(this["webpackJsonpvietnam-supplements"]=this["webpackJsonpvietnam-supplements"]||[]).push([[26],{341:function(e,t,n){"use strict";n.r(t);var i=n(4),c=n(10),a=n(0),l=n(30),r=n(38),s=n(393),o=n(92),u=n(178),d=n.p+"static/media/image-wheel-arrow.4a6a8a03.png",j=n(9),b=n.n(j),h=(n(454),n(1)),f=function(e){var t=e.skewY,n=e.rotate,i=e.label,c=e.index;return Object(h.jsx)("li",{style:{transform:"rotate(".concat(n*c,"deg) skewY(-").concat(t,"deg)")},children:Object(h.jsx)("p",{className:b()("WheelRotationItem-item-wheel",{"item-wheel-1":c%2===0},{"item-wheel-2":c%2!==0}),style:{transform:"skewY(".concat(t,"deg) rotate(").concat(n/2,"deg)")},children:Object(h.jsx)("b",{children:i})})})},O=(n(455),function(e){var t=e.random,n=e.triggerStart,l=e.dataGifts,r=e.dataGift,s=e.onFinish,o=Object(a.useState)(!1),u=Object(c.a)(o,2),j=u[0],b=u[1],O=Object(a.useState)(0),m=Object(c.a)(O,2),v=m[0],g=m[1],x=Object(a.useState)(0),p=Object(c.a)(x,2),N=p[0],S=p[1],y=360/l.length,k=90-y,w=function(e,t){g(e-t*y-y/2)},R=function(e){var t=0,n=[];return l.forEach((function(c,a){t+=c.percent,e<t&&n.push(Object(i.a)(Object(i.a)({},c),{},{index:a}))})),n[0]},E=function(){if(r){var e=l.map((function(e){return e.id})).indexOf(r.idPrize);return Object(i.a)(Object(i.a)({},r),{},{id:null===r||void 0===r?void 0:r.idPrize,label:null===r||void 0===r?void 0:r.namePrize,percent:null===r||void 0===r?void 0:r.percent,index:e})}},W=function(e){var t=setTimeout((function(){b(!1),null===s||void 0===s||s(e),clearTimeout(t)}),7e3)},C=function(){!j&&function(){var e,n;if(b(!0),t){var i=Math.random();n=R(i)}else n=E();var c=N+3600;S(c),w(c,(null===(e=n)||void 0===e?void 0:e.index)||0),n&&W(n)}()};return Object(a.useEffect)((function(){n&&C()}),[n]),Object(h.jsx)("div",{className:"WheelRotation",children:Object(h.jsx)("div",{className:"WheelRotation-line2",children:Object(h.jsx)("div",{className:"WheelRotation-line1",children:Object(h.jsxs)("span",{className:"WheelRotation-lucky-wheel",children:[Object(h.jsx)("span",{className:"WheelRotation-icon-arrow",children:Object(h.jsx)("img",{src:d,alt:"arrow"})}),Object(h.jsx)("ul",{className:"WheelRotation-wheel",style:{transform:"rotate(".concat(v,"deg)")},children:l.map((function(e,t){return Object(h.jsx)(f,{index:t,skewY:k,rotate:y,label:e.label},e.label)}))})]})})})})}),m=n(8),v=n(11),g=n(65),x=n(129),p=(n(456),n(59)),N=n(47),S=n(80),y=function(){var e,t,n=Object(l.g)().id,d=Object(r.b)(),j=Object(r.c)((function(e){var t;return null===(t=e.wheelReducer.wheel)||void 0===t?void 0:t.result})),b=Object(r.c)((function(e){return e.turnWheelReducer.turnNumber})),f=Object(r.c)((function(e){return e.wheelReducer.startWheel})),y=Object(r.c)((function(e){return e.loadingReducer[g.a.START_WHEEL]})),k=Object(r.c)((function(e){return e.loadingReducer[g.a.GET_WHEEL]})),w=Object(r.c)((function(e){return e.loadingReducer[S.a.GET_TURN_WHEEL_USER]})),R=Object(r.c)((function(e){return e.loadingReducer[S.a.BUY_TURN_WHEEL]})),E=Object(r.c)((function(e){return e.loadingReducer[S.a.SHARE_SOCIAL_TURN_WHEEL]})),W=Object(a.useState)({triggerStart:!1}),C=Object(c.a)(W,2),H=C[0],q=C[1],P=Object(a.useState)({visible:!1,gift:void 0}),T=Object(c.a)(P,2),U=T[0],_=T[1],L=y||H.triggerStart,z=(null===j||void 0===j||null===(e=j.listPrizes)||void 0===e?void 0:e.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{id:e.idPrize,label:e.namePrize,percent:e.percent/100})})))||[],D=function(e){_({visible:!0,gift:e})},G=function(){_({visible:!1})},Y=function(){Object(p.l)(N.d.SUCCESS,"\u0110\u1ed5i l\u01b0\u1ee3t quay th\xe0nh c\xf4ng"),M()},B=Object(a.useCallback)((function(){n&&d(v.Z.request(n))}),[n,d]),M=Object(a.useCallback)((function(){n&&d(v.U.request(n))}),[n,d]);return Object(a.useEffect)((function(){B()}),[B]),Object(a.useEffect)((function(){M()}),[M]),Object(h.jsx)("div",{className:"WheelDetail style-container",children:k?Object(h.jsx)(x.a,{}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(s.a,{title:"V\xf2ng Quay"}),Object(h.jsxs)("div",{className:"WheelDetail-main",children:[Object(h.jsx)("div",{className:"WheelDetail-main-rotation",children:Object(h.jsx)(O,{dataGifts:z,dataGift:null===f||void 0===f?void 0:f.prize,triggerStart:H.triggerStart,onFinish:function(e){q({triggerStart:!1}),D(e)}})}),Object(h.jsx)("div",{className:"WheelDetail-main-description",children:"\u0110i\u1ec3m t\xedch lu\u1ef9 c\xf3 th\u1ec3 d\xf9ng \u0111\u1ec3 quay v\xf2ng quay may m\u1eafn. S\u1eed d\u1ee5ng \u0111i\u1ec3m t\xedch lu\u1ef9 kh\xf4ng \u1ea3nh h\u01b0\u1edfng \u0111\u1ebfn ti\u1ebfn tr\xecnh l\xean h\u1ea1ng th\xe0nh vi\xean."}),Object(h.jsxs)("div",{className:"WheelDetail-main-group-btns",children:[Object(h.jsx)(o.a,{title:"S\u1eed d\u1ee5ng 1000 \u0111i\u1ec3m t\xedch lu\u1ef9",type:"ghost",onClick:function(){d(v.e.request(n,Y))},loading:R,disabled:L}),Object(h.jsx)(o.a,{title:"Quay s\u1ed1 (".concat(b," l\u01b0\u1ee3t quay)"),type:"primary",onClick:function(){d(v.kb.request(n,(function(e){q({triggerStart:!0}),d(v.U.success({turnNumber:e.turnOfUser,wheelId:n}))})))},loading:w,disabled:L||0===b}),Object(h.jsx)(o.a,{title:"Chia s\u1ebb m\u1ea1ng x\xe3 h\u1ed9i \u0111\u1ec3 nh\u1eadn th\xeam 1 l\u01b0\u1ee3t quay",type:"ghost",onClick:function(){d(v.jb.request(n,Y))},loading:E,disabled:L}),Object(h.jsx)(l.a,{to:"".concat(m.b.Profile).concat(m.d.HistoryRotation),className:"WheelDetail-main-link",children:"L\u1ecbch s\u1eed quay"})]})]}),Object(h.jsxs)(u.a,{visible:U.visible,cancelButton:{title:"Xem l\u1ecbch s\u1eed",onClick:function(){Object(l.e)("".concat(m.b.Profile).concat(m.d.HistoryRotation))}},confirmButton:{title:"Quay ti\u1ebfp",onClick:G},onClose:G,children:[Object(h.jsx)("div",{className:"Modal-body-description",style:{marginBottom:"0.6rem"},children:"Ph\u1ea7n th\u01b0\u1edfng b\u1ea1n nh\u1eadn \u0111\u01b0\u1ee3c:"}),Object(h.jsx)("div",{className:"Modal-body-title",children:null===(t=U.gift)||void 0===t?void 0:t.label})]})]})})};t.default=y},393:function(e,t,n){"use strict";n(0);var i=n(9),c=n.n(i),a=(n(394),n(1)),l=function(e){var t=e.className,n=e.center,i=e.title,l=e.onClick;return Object(a.jsx)("div",{className:c()("HeaderSkew flex",t,{"justify-center":n},{"cursor-pointer":l}),onClick:l,children:Object(a.jsxs)("div",{className:"HeaderSkew-item",children:[Object(a.jsx)("div",{className:"HeaderSkew-title",children:i}),Object(a.jsx)("div",{className:"HeaderSkew-subtitle",children:"VNSUPPLEMENTS"})]})})};t.a=l},394:function(e,t,n){},454:function(e,t,n){},455:function(e,t,n){},456:function(e,t,n){}}]);
//# sourceMappingURL=26.805dda9d.chunk.js.map