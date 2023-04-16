"use strict";(self.webpackChunkdocusite=self.webpackChunkdocusite||[]).push([[3304],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),i=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=i(a),f=o,g=d["".concat(l,".").concat(f)]||d[f]||u[f]||r;return a?n.createElement(g,c(c({ref:t},p),{},{components:a})):n.createElement(g,c({ref:t},p))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,c=new Array(r);c[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,c[1]=s;for(var i=2;i<r;i++)c[i]=a[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},9946:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>i});var n=a(7462),o=(a(7294),a(3905));const r={},c=void 0,s={unversionedId:"ocean/global/OceanColorData",id:"ocean/global/OceanColorData",title:"OceanColorData",description:"Let's try these",source:"@site/docs/ocean/global/OceanColorData.md",sourceDirName:"ocean/global",slug:"/ocean/global/OceanColorData",permalink:"/docs/ocean/global/OceanColorData",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Global mosaics of the standard MODIS land cover type data",permalink:"/docs/landcover/global/Modis-MCD12Q1-v6-LandCover"},next:{title:"TRY-database",permalink:"/docs/plant-traits/global/TRY-database"}},l={},i=[],p={toc:i},d="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Let's try these\n",(0,o.kt)("a",{parentName:"p",href:"https://oceandata.sci.gsfc.nasa.gov/directdataaccess/Level-3%20Mapped/Terra-MODIS/1999/355/"},"https://oceandata.sci.gsfc.nasa.gov/directdataaccess/Level-3%20Mapped/Terra-MODIS/1999/355/")),(0,o.kt)("p",null,"Download instructions here: ",(0,o.kt)("a",{parentName:"p",href:"https://oceancolor.gsfc.nasa.gov/data/download_methods/"},"https://oceancolor.gsfc.nasa.gov/data/download_methods/")),(0,o.kt)("p",null,"Login details for earthdata in ~/.netrc as follow:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'echo "machine urs.earthdata.nasa.gov login USERNAME password PASSWD" > ~/.netrc ; > ~/.urs_cookies\nchmod  0600 ~/.netrc\n')),(0,o.kt)("p",null,"where USERNAME and PASSWD are your Earthdata Login credentials."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"source ~/proyectos/UNSW/cesdata/env/project-env.sh\nmkdir -p $GISDATA/ocean/global/OceanColorData\ncd $GISDATA/ocean/global/OceanColorData\n\nwget --load-cookies ~/.urs_cookies --save-cookies ~/.urs_cookies --auth-no-challenge=on --content-disposition https://oceandata.sci.gsfc.nasa.gov/ob/getfile/TERRA_MODIS.19991221_20000320.L3m.SNWI.SST4.sst4.9km.nc\nwget --load-cookies ~/.urs_cookies --save-cookies ~/.urs_cookies --auth-no-challenge=on --content-disposition  https://oceandata.sci.gsfc.nasa.gov/ob/getfile/AQUA_MODIS.20020101_20021231.L3m.YR.SST4.sst4.9km.nc\n\n")))}u.isMDXComponent=!0}}]);