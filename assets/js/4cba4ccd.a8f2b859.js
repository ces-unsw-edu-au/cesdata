"use strict";(self.webpackChunkdocusite=self.webpackChunkdocusite||[]).push([[4102],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=r.createContext({}),d=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(a),g=o,f=p["".concat(i,".").concat(g)]||p[g]||u[g]||n;return a?r.createElement(f,l(l({ref:t},s),{},{components:a})):r.createElement(f,l({ref:t},s))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=g;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:o,l[1]=c;for(var d=2;d<n;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},1721:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var r=a(7462),o=(a(7294),a(3905));const n={},l="Global Georeferenced Database of Dams",c={unversionedId:"hydrology/global/GOODD-2020",id:"hydrology/global/GOODD-2020",title:"Global Georeferenced Database of Dams",description:"http://globaldamwatch.org/goodd/",source:"@site/docs/hydrology/global/GOODD-2020.md",sourceDirName:"hydrology/global",slug:"/hydrology/global/GOODD-2020",permalink:"/docs/hydrology/global/GOODD-2020",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Global prevalence of non-perennial rivers and streams",permalink:"/docs/hydrology/global/GIRES-v10"},next:{title:"Global Lakes and Wetlands Database",permalink:"/docs/hydrology/global/Global-Lakes-Wetlands-Database"}},i={},d=[{value:"Citation",id:"citation",level:4},{value:"Data access",id:"data-access",level:4},{value:"Data download and preparation",id:"data-download-and-preparation",level:4}],s={toc:d},p="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"global-georeferenced-database-of-dams"},"Global Georeferenced Database of Dams"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://globaldamwatch.org/goodd/"},"http://globaldamwatch.org/goodd/")),(0,o.kt)("h4",{id:"citation"},"Citation"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Mulligan, M., van Soesbergen, A. and Saenz, L. 2020. GOODD, a global dataset of more than 38,000 georeferenced dams. Scientific Data 7 (31).")),(0,o.kt)("h4",{id:"data-access"},"Data access"),(0,o.kt)("p",null,"Figshare collection at: ",(0,o.kt)("a",{parentName:"p",href:"https://springernature.figshare.com/collections/GOODD_a_global_dataset_of_more_than_38_000_georeferenced_dams/4648214"},"https://springernature.figshare.com/collections/GOODD_a_global_dataset_of_more_than_38_000_georeferenced_dams/4648214")),(0,o.kt)("h4",{id:"data-download-and-preparation"},"Data download and preparation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"source $HOME/proyectos/UNSW/cesdata/env/project-env.sh\n\nmkdir -p $GISDATA/hydrology/global/GOODD-2020\ncd $GISDATA/hydrology/global/GOODD-2020\nwget --continue https://springernature.figshare.com/ndownloader/files/17462066 --output-document=GOODD_data.zip\nunzip GOODD_data.zip\n\n")))}u.isMDXComponent=!0}}]);