(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{116:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return m}));var n=t(0),i=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),l=function(e){var r=i.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},p=function(e){var r=l(e.components);return i.a.createElement(s.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},d=i.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(t),d=n,m=p["".concat(a,".").concat(d)]||p[d]||f[d]||o;return t?i.a.createElement(m,u(u({ref:r},s),{},{components:t})):i.a.createElement(m,u({ref:r},s))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,a=new Array(o);a[0]=d;var u={};for(var c in r)hasOwnProperty.call(r,c)&&(u[c]=r[c]);u.originalType=e,u.mdxType="string"==typeof e?e:n,a[1]=u;for(var s=2;s<o;s++)a[s]=t[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},59:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return u})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return l}));var n=t(2),i=t(6),o=(t(0),t(116)),a={title:"What is AML?"},u={unversionedId:"userguide/overview",id:"userguide/overview",isDocsHomePage:!1,title:"What is AML?",description:"Q: What is Azure Machine Learning (AML)?",source:"@site/docs/userguide/overview.md",slug:"/userguide/overview",permalink:"/azureml-examples/docs/userguide/overview",editUrl:"https://github.com/Azure/azureml-examples/tree/main/website/docs/userguide/overview.md",version:"current",sidebar:"userguide",previous:{title:"README",permalink:"/azureml-examples/docs/userguide/"},next:{title:"What is the AML studio?",permalink:"/azureml-examples/docs/userguide/studio"}},c=[],s={rightToc:c};function l(e){var r=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Q: What is Azure Machine Learning (AML)?"),Object(o.b)("p",null,"A: An Azure service for managing the Machine Learning (ML) lifecycle."))}l.isMDXComponent=!0}}]);