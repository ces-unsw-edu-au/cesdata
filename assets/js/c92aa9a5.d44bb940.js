"use strict";(self.webpackChunkdocusite=self.webpackChunkdocusite||[]).push([[436],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||n;return r?a.createElement(f,s(s({ref:t},p),{},{components:r})):a.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<n;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9451:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var a=r(7462),o=(r(7294),r(3905));const n={},s="European Red List of habitats data deliverables",i={unversionedId:"ecosystems/regional/EU-RLH",id:"ecosystems/regional/EU-RLH",title:"European Red List of habitats data deliverables",description:"https://forum.eionet.europa.eu/european-red-list-habitats/library/project-deliverables-data",source:"@site/docs/ecosystems/regional/EU-RLH.md",sourceDirName:"ecosystems/regional",slug:"/ecosystems/regional/EU-RLH",permalink:"/cesdata/docs/ecosystems/regional/EU-RLH",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Colombia",permalink:"/cesdata/docs/ecosystems/regional/Colombia-Terr-Eco-2015"},next:{title:"Ecosystem types of Europe",permalink:"/cesdata/docs/ecosystems/regional/Ecosystem-types-Europe"}},c={},l=[],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"european-red-list-of-habitats-data-deliverables"},"European Red List of habitats data deliverables"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://forum.eionet.europa.eu/european-red-list-habitats/library/project-deliverables-data"},"https://forum.eionet.europa.eu/european-red-list-habitats/library/project-deliverables-data")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"source ~/proyectos/UNSW/cesdata/env/project-env.sh\nmkdir -p $GISDATA/ecosystems/regional/EU-RLH\ncd $GISDATA/ecosystems/regional/EU-RLH\n\nwget --continue https://forum.eionet.europa.eu/european-red-list-habitats/library/project-deliverables-data/geodatabases/zip_export/do_export --output-document=geodatabases.zip\n\nunzip -u geodatabases.zip\n# for some obscure reason this is read-protected\nchmod 740 Geodatabases/*\nchmod 640 Geodatabases/*/*.*\n")))}d.isMDXComponent=!0}}]);