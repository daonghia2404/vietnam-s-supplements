(this["webpackJsonpvietnam-supplements"]=this["webpackJsonpvietnam-supplements"]||[]).push([[36],{348:function(e,t,n){"use strict";n.r(t);var a=n(10),c=n(0),r=n(30),o=n(388),s=n(38),i=n(401),l=n(130),u=n(17),d=n(92),b=n(407),m=n(59),f=n(8),h=n(50),p=n(11),v=n(47),j=n(36),O=n(1),x=function(){var e=o.a.useForm(),t=Object(a.a)(e,1)[0],n=Object(s.b)(),x=Object(s.c)((function(e){return e.loadingReducer[j.a.LOGIN]})),y=function(){Object(m.l)(v.d.SUCCESS,"\u0110\u0103ng nh\u1eadp th\xe0nh c\xf4ng"),n(p.A.request()),Object(r.e)(f.b.Profile)};return Object(c.useEffect)((function(){var e=h.a.getRememberAccountPhone(),n=h.a.getRememberAccountPassword();e&&n&&t.setFieldsValue({phone:e,password:n,remember:!0})}),[t]),Object(c.useEffect)((function(){Object(m.j)()}),[]),Object(O.jsx)("div",{children:Object(O.jsxs)(i.a,{children:[Object(O.jsxs)("div",{className:"AuthForm-item-navs flex",children:[Object(O.jsx)("div",{className:"AuthForm-item-navs-item flex items-center active",children:Object(O.jsx)(r.a,{to:"".concat(f.b.Auth).concat(f.d.Login),children:"\u0110\u0103ng Nh\u1eadp"})}),Object(O.jsx)("div",{className:"AuthForm-item-navs-item flex items-center",children:Object(O.jsx)(r.a,{to:"".concat(f.b.Auth).concat(f.d.Register),children:"\u0110\u0103ng K\xfd"})})]}),Object(O.jsxs)("div",{className:"AuthForm-main flex flex-col",children:[Object(O.jsxs)(o.a,{className:"AuthForm-main-form",form:t,onFinish:function(e){e.remember?(h.a.storeRememberAccountPhone(e.phone),h.a.storeRememberAccountPassword(e.password)):h.a.clearRememberAccount();var t={phone:e.phone,password:e.password};n(p.db.request(t,y))},children:[Object(O.jsx)(o.a.Item,{name:"phone",rules:[m.m.required(),m.m.onlyNumeric()],children:Object(O.jsx)(l.a,{placeholder:"S\u1ed1 \u0110i\u1ec7n Tho\u1ea1i",prefix:Object(O.jsx)(u.c,{name:u.b.Phone})})}),Object(O.jsx)(o.a.Item,{name:"password",rules:[m.m.required()],children:Object(O.jsx)(l.a,{type:"password",placeholder:"M\u1eadt Kh\u1ea9u",prefix:Object(O.jsx)(u.c,{name:u.b.Lock})})}),Object(O.jsxs)("div",{className:"AuthForm-main-form-item flex items-center justify-between",children:[Object(O.jsx)(o.a.Item,{name:"remember",children:Object(O.jsx)(b.a,{label:"L\u01b0u t\xe0i kho\u1ea3n"})}),Object(O.jsx)(r.a,{className:"AuthForm-main-form-item-forgot-password",to:"".concat(f.b.Auth).concat(f.d.ForgotPassword),children:"Qu\xean m\u1eadt kh\u1ea9u"})]}),Object(O.jsx)(o.a.Item,{children:Object(O.jsx)(d.a,{title:"\u0110\u0103ng Nh\u1eadp",type:"primary",htmlType:"submit",loading:x})})]}),Object(O.jsxs)("div",{className:"AuthForm-main-register",children:["Ch\u01b0a c\xf3 t\xe0i kho\u1ea3n? ",Object(O.jsx)(r.a,{to:"".concat(f.b.Auth).concat(f.d.Register),children:"\u0110\u0103ng k\xfd"})]})]})]})})};t.default=x},399:function(e,t,n){},401:function(e,t,n){"use strict";n(0);var a=n.p+"static/media/image-auth-banner.5bdeb1fe.png",c=(n(399),n(1)),r=function(e){var t=e.children;return Object(c.jsx)("div",{className:"AuthForm",children:Object(c.jsxs)("div",{className:"AuthForm-card flex flex-wrap",children:[Object(c.jsx)("div",{className:"AuthForm-item",children:Object(c.jsx)("div",{className:"AuthForm-item-image",children:Object(c.jsx)("img",{src:a,alt:""})})}),Object(c.jsx)("div",{className:"AuthForm-item",children:t})]})})};t.a=r},404:function(e,t,n){"use strict";var a=n(6),c=n(7),r=n(19),o=n(4),s=n(16),i=n(15),l=n(26),u=n(25),d=n(0),b=n.n(d),m=n(9),f=n.n(m),h=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;Object(s.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=a.props,n=t.disabled,c=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),c&&c({target:Object(o.a)(Object(o.a)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var c="checked"in e?e.checked:e.defaultChecked;return a.state={checked:c},a}return Object(i.a)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,o=t.className,s=t.style,i=t.name,l=t.id,u=t.type,d=t.disabled,m=t.readOnly,h=t.tabIndex,p=t.onClick,v=t.onFocus,j=t.onBlur,O=t.onKeyDown,x=t.onKeyPress,y=t.onKeyUp,g=t.autoFocus,k=t.value,C=t.required,N=Object(r.a)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),w=Object.keys(N).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=N[t]),e}),{}),F=this.state.checked,A=f()(n,o,(e={},Object(c.a)(e,"".concat(n,"-checked"),F),Object(c.a)(e,"".concat(n,"-disabled"),d),e));return b.a.createElement("span",{className:A,style:s},b.a.createElement("input",Object(a.a)({name:i,id:l,type:u,required:C,readOnly:m,disabled:d,tabIndex:h,className:"".concat(n,"-input"),checked:!!F,onClick:p,onFocus:v,onBlur:j,onKeyUp:y,onKeyDown:O,onKeyPress:x,onChange:this.handleChange,autoFocus:g,ref:this.saveInput,value:k},w)),b.a.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?Object(o.a)(Object(o.a)({},t),{},{checked:e.checked}):null}}]),n}(d.Component);h.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}},t.a=h},407:function(e,t,n){"use strict";var a=n(0),c=n(9),r=n.n(c),o=n(7),s=n(6),i=n(404),l=n(14),u=n(10),d=n(37),b=n(118),m=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n},f=a.createContext(null),h=function(e,t){var n=e.defaultValue,c=e.children,i=e.options,h=void 0===i?[]:i,p=e.prefixCls,v=e.className,j=e.style,O=e.onChange,x=m(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),y=a.useContext(b.b),k=y.getPrefixCls,C=y.direction,N=a.useState(x.value||n||[]),w=Object(u.a)(N,2),F=w[0],A=w[1],P=a.useState([]),E=Object(u.a)(P,2),K=E[0],I=E[1];a.useEffect((function(){"value"in x&&A(x.value||[])}),[x.value]);var S=function(){return h.map((function(e){return"string"===typeof e||"number"===typeof e?{label:e,value:e}:e}))},R=k("checkbox",p),V="".concat(R,"-group"),q=Object(d.a)(x,["value","disabled"]);h&&h.length>0&&(c=S().map((function(e){return a.createElement(g,{prefixCls:R,key:e.value.toString(),disabled:"disabled"in e?e.disabled:x.disabled,value:e.value,checked:-1!==F.indexOf(e.value),onChange:e.onChange,className:"".concat(V,"-item"),style:e.style},e.label)})));var D={toggleOption:function(e){var t=F.indexOf(e.value),n=Object(l.a)(F);-1===t?n.push(e.value):n.splice(t,1),"value"in x||A(n);var a=S();null===O||void 0===O||O(n.filter((function(e){return-1!==K.indexOf(e)})).sort((function(e,t){return a.findIndex((function(t){return t.value===e}))-a.findIndex((function(e){return e.value===t}))})))},value:F,disabled:x.disabled,name:x.name,registerValue:function(e){I((function(t){return[].concat(Object(l.a)(t),[e])}))},cancelValue:function(e){I((function(t){return t.filter((function(t){return t!==e}))}))}},L=r()(V,Object(o.a)({},"".concat(V,"-rtl"),"rtl"===C),v);return a.createElement("div",Object(s.a)({className:L,style:j},q,{ref:t}),a.createElement(f.Provider,{value:D},c))},p=a.forwardRef(h),v=a.memo(p),j=n(27),O=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n},x=function(e,t){var n,c=e.prefixCls,l=e.className,u=e.children,d=e.indeterminate,m=void 0!==d&&d,h=e.style,p=e.onMouseEnter,v=e.onMouseLeave,x=e.skipGroup,y=void 0!==x&&x,g=O(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup"]),k=a.useContext(b.b),C=k.getPrefixCls,N=k.direction,w=a.useContext(f),F=a.useRef(g.value);a.useEffect((function(){null===w||void 0===w||w.registerValue(g.value),Object(j.a)("checked"in g||!!w||!("value"in g),"Checkbox","`value` is not a valid prop, do you mean `checked`?")}),[]),a.useEffect((function(){if(!y)return g.value!==F.current&&(null===w||void 0===w||w.cancelValue(F.current),null===w||void 0===w||w.registerValue(g.value),F.current=g.value),function(){return null===w||void 0===w?void 0:w.cancelValue(g.value)}}),[g.value]);var A=C("checkbox",c),P=Object(s.a)({},g);w&&!y&&(P.onChange=function(){g.onChange&&g.onChange.apply(g,arguments),w.toggleOption&&w.toggleOption({label:u,value:g.value})},P.name=w.name,P.checked=-1!==w.value.indexOf(g.value),P.disabled=g.disabled||w.disabled);var E=r()((n={},Object(o.a)(n,"".concat(A,"-wrapper"),!0),Object(o.a)(n,"".concat(A,"-rtl"),"rtl"===N),Object(o.a)(n,"".concat(A,"-wrapper-checked"),P.checked),Object(o.a)(n,"".concat(A,"-wrapper-disabled"),P.disabled),n),l),K=r()(Object(o.a)({},"".concat(A,"-indeterminate"),m));return a.createElement("label",{className:E,style:h,onMouseEnter:p,onMouseLeave:v},a.createElement(i.a,Object(s.a)({},P,{prefixCls:A,className:K,ref:t})),void 0!==u&&a.createElement("span",null,u))},y=a.forwardRef(x);y.displayName="Checkbox";var g=y,k=g;k.Group=v,k.__ANT_CHECKBOX=!0;var C=k,N=(n(408),n(1)),w=function(e){var t=e.className,n=e.label,a=e.onChange,c=e.value;return Object(N.jsx)("div",{className:r()("Checkbox",t),children:Object(N.jsx)(C,{checked:c,onChange:function(e){var t=e.target.checked;null===a||void 0===a||a(t)},children:n})})};t.a=w},408:function(e,t,n){}}]);
//# sourceMappingURL=36.511afca0.chunk.js.map