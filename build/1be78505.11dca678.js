(window.webpackJsonp=window.webpackJsonp||[]).push([[6,36],{77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(24),l=a(93),c=a(3),i=a(82),s=a(83),u=a(120),d=a(7),m=a(94),b=a(4),f=a(1),h=a.n(f),p=a(85),v=a.n(p),k=a(87),E={active:h.a.bool,"aria-label":h.a.string,block:h.a.bool,color:h.a.string,disabled:h.a.bool,outline:h.a.bool,tag:k.g,innerRef:h.a.oneOfType([h.a.object,h.a.func,h.a.string]),onClick:h.a.func,size:h.a.string,children:h.a.node,className:h.a.string,cssModule:h.a.object,close:h.a.bool},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(m.a)(a)),a}Object(b.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],n=e.block,o=e.className,l=e.close,i=e.cssModule,s=e.color,u=e.outline,m=e.size,b=e.tag,f=e.innerRef,h=Object(d.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);l&&void 0===h.children&&(h.children=r.a.createElement("span",{"aria-hidden":!0},"\xd7"));var p="btn"+(u?"-outline":"")+"-"+s,E=Object(k.d)(v()(o,{close:l},l||"btn",l||p,!!m&&"btn-"+m,!!n&&"btn-block",{active:t,disabled:this.props.disabled}),i);h.href&&"button"===b&&(b="a");var g=l?"Close":null;return r.a.createElement(b,Object(c.a)({type:"button"===b&&h.onClick?"button":void 0},h,{className:E,ref:f,onClick:this.onClick,"aria-label":a||g}))},t}(r.a.Component);g.propTypes=E,g.defaultProps={color:"secondary",tag:"button"};var w=g,y=a(121);var N=function(e=!0){Object(n.useEffect)((()=>(document.body.style.overflow=e?"hidden":"visible",window.scrollTo(0,0),()=>{document.body.style.overflow="visible"})),[e])},C=a(50),j=a.n(C);const M=({item:e,onItemClick:t})=>"category"===e.type?e.items.length>0?r.a.createElement("div",null,r.a.createElement("h4",{className:"ml-2"},e.label),e.items.map((e=>r.a.createElement(M,{key:e.label,item:e,onItemClick:t})))):r.a.createElement(r.a.Fragment,null):"link"===e.type?r.a.createElement(u.a,null,r.a.createElement(i.a,Object(c.a)({key:e.label,className:"sidebar-item m-4 text-white",to:e.href},Object(s.a)(e.href)?{isNavLink:!0,activeClassName:"active",exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"}),e.label)):r.a.createElement(r.a.Fragment,null);var R=({sidebar:e})=>{const[t,a]=Object(n.useState)(!1),o=Object(n.useCallback)((()=>{a(!t)}),[t,a]);return N(t),r.a.createElement("div",{className:v()("bg-info",j.a.sidebar)},r.a.createElement("div",{className:v()("text-white",{[j.a.isOpen]:t})},r.a.createElement("div",{className:"d-flex w-100 justify-content-end mr-5"},r.a.createElement(w,{color:"secondary",onClick:o,className:v()("mr-2",j.a.sidebarFAB)},r.a.createElement("svg",{"aria-label":"Menu",xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"})))),r.a.createElement("div",{className:v()(j.a.sideMenu)},r.a.createElement(y.a,{vertical:!0,className:"list-unstyled p-3 mr-auto"},e.map((e=>r.a.createElement(M,{key:e.label,item:e,onItemClick:e=>{e.currentTarget.blur(),a(!1)}})))))))},O=a(90),P=a(86),x=a(81),L=a(89);function D({currentDocRoute:e,versionMetadata:t,children:a}){const{permalinkToSidebar:n,docsSidebars:o}=t,l=n[e.path],c=o[l];return r.a.createElement(P.a,{title:"Doc page",description:"My Doc page"},r.a.createElement("div",{className:"d-flex vh-100"},c&&r.a.createElement("div",{role:"complementary"},r.a.createElement(R,{key:l,sidebar:c})),r.a.createElement("main",{className:"w-100 align-items-center overflow-auto p-5"},r.a.createElement(x.a,{components:O.a},a))))}t.default=function(e){const{route:{routes:t},versionMetadata:a,location:n}=e,c=t.find((e=>Object(L.matchPath)(n.pathname,e)));return c?r.a.createElement(D,{currentDocRoute:c,versionMetadata:a},Object(o.a)(t)):r.a.createElement(l.default,e)}},89:function(e,t,a){"use strict";a.r(t);var n=a(9);a.d(t,"MemoryRouter",(function(){return n.d})),a.d(t,"Prompt",(function(){return n.f})),a.d(t,"Redirect",(function(){return n.g})),a.d(t,"Route",(function(){return n.h})),a.d(t,"Router",(function(){return n.i})),a.d(t,"StaticRouter",(function(){return n.j})),a.d(t,"Switch",(function(){return n.k})),a.d(t,"generatePath",(function(){return n.l})),a.d(t,"matchPath",(function(){return n.m})),a.d(t,"useHistory",(function(){return n.n})),a.d(t,"useLocation",(function(){return n.o})),a.d(t,"useParams",(function(){return n.p})),a.d(t,"useRouteMatch",(function(){return n.q})),a.d(t,"withRouter",(function(){return n.r})),a.d(t,"BrowserRouter",(function(){return n.a})),a.d(t,"HashRouter",(function(){return n.b})),a.d(t,"Link",(function(){return n.c})),a.d(t,"NavLink",(function(){return n.e}))},93:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(86);t.default=function(){return r.a.createElement(o.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container my-xl-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col-6 offset-3"},r.a.createElement("h1",null,"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);