(this["webpackJsonpvietnam-supplements"]=this["webpackJsonpvietnam-supplements"]||[]).push([[35],{383:function(e,t,i){"use strict";i.r(t);var c=i(10),n=i(0),r=i(38),s=i(30),a=i(9),d=i.n(a),l=i(388),o=i(393),u=i(414),j=i(92),m=i(17),v=i(55),b=i(395),h=i(8),O=i(59),f=i(47),p=i(11),x=i(440),C=i(426),N=i(121),g=i(130),y=i(400),w=i(423),E=(i(436),i(409)),T=i(52),R=i(53),S=(i(527),i(1)),k=function(){var e=Object(r.b)(),t=l.a.useForm(),i=Object(c.a)(t,1)[0],a=Object(n.useState)([]),k=Object(c.a)(a,2),I=k[0],q=k[1],P=Object(n.useState)(),A=Object(c.a)(P,2),z=A[0],H=A[1],M=Object(r.c)((function(e){return e.addressReducer})),_=Object(n.useState)({districtCode:null,cityCode:null}),U=Object(c.a)(_,2),D=U[0],F=U[1],G=0===M.city.length,L=0===M.district.length,B=0===M.commune.length,J=Object(r.c)((function(e){return e.uiReducer.cartsStorage}))||[],V=J,X=Object(r.c)((function(e){return e.loadingReducer[v.a.CREATE_CART]})),K=Object(r.c)((function(e){return e.loadingReducer[T.a.CREATE_PAYMENT_ORDER]})),Q=Object(r.c)((function(e){return e.loadingReducer[R.a.CHECKOUT_ORDER]})),W=X||K||Q,Y=0===(null===V||void 0===V?void 0:V.length),Z=function(e,t){e&&!t&&i.setFieldsValue({district:null}),F({cityCode:e||null,districtCode:t||null})},$=Object(n.useCallback)((function(){e(p.r.request(D))}),[e,D]),ee=function(e){H(e)},te=function(e){window.open(e.paymentUrl,"_blank")},ie=function(){Object(O.l)(f.d.SUCCESS,"T\u1ea1o \u0111\u01a1n h\xe0ng th\xe0nh c\xf4ng"),e(p.lb.setCartsStorage([])),Object(s.e)(h.d.Home)};return Object(n.useEffect)((function(){$()}),[$]),Object(n.useEffect)((function(){D.cityCode&&e(p.r.request({cityCode:D.cityCode,districtCode:null}))}),[D.cityCode]),Object(n.useEffect)((function(){D.cityCode&&D.districtCode&&e(p.r.request({cityCode:D.cityCode,districtCode:D.districtCode}))}),[D]),Object(n.useEffect)((function(){q(V||[])}),[V]),Object(n.useEffect)((function(){Object(O.j)()}),[]),Object(n.useEffect)((function(){i.setFieldsValue({typePayment:null===C.a||void 0===C.a?void 0:C.a[0]})}),[i]),Object(S.jsxs)("div",{className:"Carts",children:[Object(S.jsx)(o.a,{title:"Gi\u1ecf h\xe0ng"}),Y?Object(S.jsx)(b.a,{title:"Ch\u01b0a c\xf3 s\u1ea3n ph\u1ea9m n\xe0o trong gi\u1ecf h\xe0ng c\u1ee7a b\u1ea1n",buttonProps:{title:"Ti\u1ebfp t\u1ee5c mua s\u1eafm",onClick:function(){Object(s.e)(h.d.Categorys)}}}):Object(S.jsx)(l.a,{form:i,onFinish:function(t){if(z){var i,c,n,r,s,a,d,l=null===(i=t.typePayment)||void 0===i?void 0:i.value,o={cartId:null===z||void 0===z?void 0:z.id,typePayment:l,address:null===t||void 0===t?void 0:t.address,addressReceiver:null===t||void 0===t?void 0:t.address,referCode:(null===t||void 0===t?void 0:t.referCode)||"",district:null===t||void 0===t||null===(c=t.district)||void 0===c?void 0:c.value,districtReceiver:null===t||void 0===t||null===(n=t.district)||void 0===n?void 0:n.label,city:null===t||void 0===t||null===(r=t.city)||void 0===r?void 0:r.value,cityReceiver:null===t||void 0===t||null===(s=t.city)||void 0===s?void 0:s.label,commune:null===t||void 0===t||null===(a=t.commune)||void 0===a?void 0:a.value,communeReceiver:null===t||void 0===t||null===(d=t.commune)||void 0===d?void 0:d.label,phone:null===t||void 0===t?void 0:t.phone,phoneReceiver:null===t||void 0===t?void 0:t.phone,nameUser:null===t||void 0===t?void 0:t.name,nameReceiver:null===t||void 0===t?void 0:t.name,email:(null===t||void 0===t?void 0:t.email)||"",note:null===t||void 0===t?void 0:t.note};e(p.h.request(o,(function(t){if(l===E.a.SHIP_COD&&ie(),l===E.a.WALLET){var i={orderId:t.id,amount:String(z.totalprice),bankCode:void 0,extraData:void 0,paymentMethod:void 0};e(p.m.request(i,te))}})))}else{var u={cart:V.map((function(e){return{product:e.product,amount:e.amount}}))};e(p.j.request(u,ee))}},children:Object(S.jsxs)("div",{className:"Carts-wrapper flex justify-between flex-wrap",children:[Object(S.jsx)("div",{className:"Carts-wrapper-item",children:z?Object(S.jsxs)("div",{className:"Carts-checkout",children:[Object(S.jsx)("div",{className:"Checkout-description",children:"Xin vui l\xf2ng \u0111i\u1ec1n \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin d\u01b0\u1edbi \u0111\xe2y \u0111\u1ec3 ho\xe0n t\u1ea5t \u0111\u01a1n h\xe0ng"}),Object(S.jsx)("div",{className:"Checkout-subtitle",children:"TH\xd4NG TIN THANH TO\xc1N"}),Object(S.jsxs)("div",{className:"Checkout-form-row flex justify-between flex-wrap",children:[Object(S.jsx)(l.a.Item,{name:"name",rules:[O.m.required()],children:Object(S.jsx)(g.a,{placeholder:"Nh\u1eadp h\u1ecd t\xean",size:"large"})}),Object(S.jsx)(l.a.Item,{name:"phone",rules:[O.m.required(),O.m.onlyNumeric()],children:Object(S.jsx)(g.a,{placeholder:"Nh\u1eadp s\u1ed1 \u0111i\u1ec7n tho\u1ea1i",size:"large"})})]}),Object(S.jsx)("div",{className:"Checkout-form-row",children:Object(S.jsx)(l.a.Item,{name:"email",rules:[O.m.email()],children:Object(S.jsx)(g.a,{placeholder:"Nh\u1eadp email",size:"large"})})}),Object(S.jsxs)("div",{className:"Checkout-form-row flex justify-between flex-wrap",children:[Object(S.jsx)(l.a.Item,{name:"city",rules:[O.m.required()],children:Object(S.jsx)(y.a,{placeholder:"T\u1ec9nh / th\xe0nh ph\u1ed1",options:M.city,disabled:G,onChange:function(e){return Z(null===e||void 0===e?void 0:e.value)}})}),Object(S.jsx)(l.a.Item,{name:"district",rules:[O.m.required()],children:Object(S.jsx)(y.a,{placeholder:"Qu\u1eadn / huy\u1ec7n",options:M.district,disabled:L,onChange:function(e){return Z(D.cityCode,null===e||void 0===e?void 0:e.value)}})})]}),Object(S.jsx)("div",{className:"Checkout-form-row",children:Object(S.jsx)(l.a.Item,{name:"commune",rules:[O.m.required()],children:Object(S.jsx)(y.a,{placeholder:"X\xe3 / ph\u01b0\u1eddng",options:M.commune,disabled:B})})}),Object(S.jsx)("div",{className:"Checkout-form-row",children:Object(S.jsx)(l.a.Item,{name:"address",rules:[O.m.required()],children:Object(S.jsx)(w.a,{placeholder:"Nh\u1eadp \u0111\u1ecba ch\u1ec9 c\u1ee5 th\u1ec3"})})}),Object(S.jsx)("div",{className:"Checkout-subtitle",children:"L\u01afU \xdd \u0110\u1eb6C BI\u1ec6T"}),Object(S.jsx)("div",{className:"Checkout-form-row",children:Object(S.jsx)(l.a.Item,{name:"note",children:Object(S.jsx)(w.a,{placeholder:"Ghi ch\xfa (c\xf3 th\u1ec3 b\u1ecf tr\u1ed1ng)"})})})]}):Object(S.jsx)("div",{className:"Carts-orders",children:null===V||void 0===V?void 0:V.map((function(t){var i,c,n,r,s,a=(null===t||void 0===t||null===(i=t.product)||void 0===i?void 0:i.costPrice)===(null===t||void 0===t||null===(c=t.product)||void 0===c?void 0:c.price);return Object(S.jsxs)("div",{className:"Carts-orders-item flex items-start justify-between",children:[Object(S.jsx)("div",{className:d()("Carts-orders-item-remove"),onClick:function(){return function(t){var i=Object(N.d)(J,t.id);e(p.lb.setCartsStorage(i))}(t)},children:Object(S.jsx)(m.c,{name:m.b.Close})}),Object(S.jsx)("div",{className:"Carts-orders-item-image",children:Object(S.jsx)("img",{src:null===t||void 0===t||null===(n=t.product)||void 0===n?void 0:n.image,onError:O.g,alt:""})}),Object(S.jsxs)("div",{className:"Carts-orders-item-info",children:[Object(S.jsx)("div",{className:"Carts-orders-item-title",children:t.product.name}),t.dateStartEat&&t.dateEndEat&&Object(S.jsxs)("div",{className:"Carts-orders-item-date",children:["T\u1eeb ",Object(O.b)(t.dateStartEat,f.a.COMMON)," - \u0111\u1ebfn"," ",Object(O.b)(t.dateEndEat,f.a.COMMON)]}),Object(S.jsxs)("div",{className:"Carts-orders-item-price",children:[Object(O.d)({amount:t.product.price,showSuffix:!0})," ",Boolean(null===t||void 0===t||null===(r=t.product)||void 0===r?void 0:r.costPrice)&&!a&&Object(S.jsx)("del",{children:Object(O.d)({amount:(null===t||void 0===t||null===(s=t.product)||void 0===s?void 0:s.costPrice)||0,showSuffix:!0})})]}),Object(S.jsxs)("div",{className:"Carts-orders-item-amount flex justify-between",children:["S\u1ed1 l\u01b0\u1ee3ng:",Object(S.jsx)(u.a,{value:t.amount,onChange:function(i){return function(t,i){var c=Object(N.c)(J,i.id,t);e(p.lb.setCartsStorage(c))}(i,t)}})]})]})]},t.id)}))})}),Object(S.jsx)("div",{className:"Carts-wrapper-item",children:Object(S.jsxs)("div",{className:"Carts-card",children:[Object(S.jsx)("div",{className:"Carts-card-title",children:"Ph\u01b0\u01a1ng th\u1ee9c thanh to\xe1n"}),Object(S.jsx)(l.a.Item,{name:"typePayment",rules:[O.m.required()],children:Object(S.jsx)(x.a,{options:C.a})}),Object(S.jsx)(l.a.Item,{name:"referCode",children:Object(S.jsx)(g.a,{placeholder:"Nh\u1eadp m\xe3 gi\u1edbi thi\u1ec7u"})}),Object(S.jsxs)("div",{className:"Carts-row-summary",children:[Object(S.jsxs)("div",{className:"Carts-row flex justify-between",children:[Object(S.jsx)("div",{className:"Carts-row-text",children:"T\u1ed5ng gi\xe1 ti\u1ec1n"}),Object(S.jsx)("div",{className:"Carts-row-text",children:Object(S.jsx)("strong",{children:Object(O.d)({amount:I.reduce((function(e,t){var i,c;return e+Number((null===(i=t.product)||void 0===i?void 0:i.price)||(null===(c=t.product)||void 0===c?void 0:c.costPrice))*t.amount}),0),showSuffix:!0})})})]}),Object(S.jsx)("div",{className:"Carts-row-submit",children:Object(S.jsx)(j.a,{type:"primary",title:z?"\u0110\u1eb7t h\xe0ng":"Ti\u1ebfp t\u1ee5c",size:"large",htmlType:"submit",loading:W})})]})]})})]})})]})};t.default=k},421:function(e,t,i){},423:function(e,t,i){"use strict";i(0);var c=i(9),n=i.n(c),r=i(389),s=(i(421),i(1)),a=r.a.TextArea,d=function(e){var t=e.className,i=e.size,c=e.placeholder,r=e.onChange,d=e.value;return Object(s.jsx)("div",{className:n()("TextArea",t),children:Object(s.jsx)(a,{size:i,placeholder:c,value:d,onChange:r})})};t.a=d},436:function(e,t,i){},527:function(e,t,i){}}]);
//# sourceMappingURL=35.f03e50d4.chunk.js.map