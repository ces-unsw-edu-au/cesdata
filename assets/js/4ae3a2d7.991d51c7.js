"use strict";(self.webpackChunkdocusite=self.webpackChunkdocusite||[]).push([[6776],{3905:(e,r,t)=>{t.d(r,{Zo:()=>f,kt:()=>b});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),u=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},f=function(e){var r=u(e.components);return a.createElement(l.Provider,{value:r},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),c=u(t),d=n,b=c["".concat(l,".").concat(d)]||c[d]||p[d]||s;return t?a.createElement(b,i(i({ref:r},f),{},{components:t})):a.createElement(b,i({ref:r},f))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,i=new Array(s);i[0]=d;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<s;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2554:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=t(7462),n=(t(7294),t(3905));const s={},i="Fires in Australia's forests",o={unversionedId:"fire/regional/Fire-Australia-Forest",id:"fire/regional/Fire-Australia-Forest",title:"Fires in Australia's forests",description:"2019-2020",source:"@site/docs/fire/regional/Fire-Australia-Forest.md",sourceDirName:"fire/regional",slug:"/fire/regional/Fire-Australia-Forest",permalink:"/docs/fire/regional/Fire-Australia-Forest",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Modis-burned-area",permalink:"/docs/fire/global/Modis-burned-area"},next:{title:"3D-forest-landscape",permalink:"/docs/forest/global/3D-forest-landscape"}},l={},u=[{value:"2019-2020",id:"2019-2020",level:2},{value:"2011\u201316 (2018)",id:"201116-2018",level:2}],f={toc:u},c="wrapper";function p(e){let{components:r,...t}=e;return(0,n.kt)(c,(0,a.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"fires-in-australias-forests"},"Fires in Australia's forests"),(0,n.kt)("h2",{id:"2019-2020"},"2019-2020"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.awe.gov.au/abares/forestsaustralia/forest-data-maps-and-tools/fire-data#fire-area-and-area-of-forest-in-fire-area-by-jurisdiction"},"https://www.awe.gov.au/abares/forestsaustralia/forest-data-maps-and-tools/fire-data#fire-area-and-area-of-forest-in-fire-area-by-jurisdiction")),(0,n.kt)("h2",{id:"201116-2018"},"2011\u201316 (2018)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://data.gov.au/data/dataset/fires-in-australia-s-forests-2011-16-2018"},"https://data.gov.au/data/dataset/fires-in-australia-s-forests-2011-16-2018")),(0,n.kt)("p",null,"Continental spatial dataset of the extent and frequency of planned and unplanned fires occurring in forest in the five financial years between July 2011 and June 2016, assembled for Australia's State of the Forests Report 2018."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.agriculture.gov.au/abares/forestsaustralia/sofr/sofr-2018"},"https://www.agriculture.gov.au/abares/forestsaustralia/sofr/sofr-2018")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"source ~/proyectos/UNSW/cesdata/env/project-env.sh\n\n\n\n\nmkdir -p $GISDATA/fire/regional/australia-forest-fire-2011-16\ncd $GISDATA/fire/regional/australia-forest-fire-2011-16\nwget --continue https://data.gov.au/dataset/c0cd6f5a-6b0f-4cd0-8980-1ca5b2c31006/resource/e99002e3-05b5-4a4f-8c1c-823d1b3e9713/download/fire_publish.zip\n\nwget --continue https://www.awe.gov.au/sites/default/files/abares/forestsaustralia/documents/datasets/sofr2018/fire_publish.zip\n\nunzip fire_publish.zip\n\n")))}p.isMDXComponent=!0}}]);