"use strict";(self.webpackChunkdocusite=self.webpackChunkdocusite||[]).push([[6037],{3905:(e,r,o)=>{o.d(r,{Zo:()=>i,kt:()=>b});var n=o(7294);function t(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function a(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?a(Object(o),!0).forEach((function(r){t(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function s(e,r){if(null==e)return{};var o,n,t=function(e,r){if(null==e)return{};var o,n,t={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],r.indexOf(o)>=0||(t[o]=e[o]);return t}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var d=n.createContext({}),c=function(e){var r=n.useContext(d),o=r;return e&&(o="function"==typeof e?e(r):l(l({},r),e)),o},i=function(e){var r=c(e.components);return n.createElement(d.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var o=e.components,t=e.mdxType,a=e.originalType,d=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=c(o),v=t,b=u["".concat(d,".").concat(v)]||u[v]||p[v]||a;return o?n.createElement(b,l(l({ref:r},i),{},{components:o})):n.createElement(b,l({ref:r},i))}));function b(e,r){var o=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=o.length,l=new Array(a);l[0]=v;var s={};for(var d in r)hasOwnProperty.call(r,d)&&(s[d]=r[d]);s.originalType=e,s[u]="string"==typeof e?e:t,l[1]=s;for(var c=2;c<a;c++)l[c]=o[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}v.displayName="MDXCreateElement"},6059:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=o(7462),t=(o(7294),o(3905));const a={},l=void 0,s={unversionedId:"landcover/global/Globcover-2009",id:"landcover/global/Globcover-2009",title:"Globcover-2009",description:"Download global landcover datasets",source:"@site/docs/landcover/global/Globcover-2009.md",sourceDirName:"landcover/global",slug:"/landcover/global/Globcover-2009",permalink:"/docs/landcover/global/Globcover-2009",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Global Land Cover 2000 - GLC 2000",permalink:"/docs/landcover/global/Global-land-cover-2000"},next:{title:"LC-CCI",permalink:"/docs/landcover/global/LC-CCI"}},d={},c=[{value:"Download global landcover datasets",id:"download-global-landcover-datasets",level:2},{value:"GLOBCOVER 2009",id:"globcover-2009",level:3}],i={toc:c},u="wrapper";function p(e){let{components:r,...o}=e;return(0,t.kt)(u,(0,n.Z)({},i,o,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"download-global-landcover-datasets"},"Download global landcover datasets"),(0,t.kt)("h3",{id:"globcover-2009"},(0,t.kt)("a",{parentName:"h3",href:"http://due.esrin.esa.int/page_globcover.php"},"GLOBCOVER 2009")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir -p $GISDATA/landcover/global/GlobCover\ncd $GISDATA/landcover/global/GlobCover\nwget --continue http://due.esrin.esa.int/files/Globcover2009_V2.3_Global_.zip\n\n")),(0,t.kt)("p",null,"For T7:"),(0,t.kt)("p",null,"For T5:\nFocus on class for barren/sparse vegetation"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sh"},'cd $WORKDIR\nunzip $GISDATA/landcover/GlobCover/Globcover2009_V2.3_Global_.zip\n\ngdal_calc.py -A GLOBCOVER_L4_200901_200912_V2.3.tif --outfile=result.tif --calc="(A==50)"\n\ngdal_calc.py -A GLOBCOVER_L4_200901_200912_V2.3.tif --outfile=result.tif --calc="logical_and(A==50,A==100)"\n')),(0,t.kt)("p",null,"11\tPost-flooding or irrigated croplands (or aquatic)\n14\tRainfed croplands\n20\tMosaic cropland (50-70%) / vegetation (grassland/shrubland/forest) (20-50%)\n30\tMosaic vegetation (grassland/shrubland/forest) (50-70%) / cropland (20-50%)\n40\tClosed to open (>15%) broadleaved evergreen or semi-deciduous forest (>5m)\n50\tClosed (>40%) broadleaved deciduous forest (>5m)\n60\tOpen (15-40%) broadleaved deciduous forest/woodland (>5m)\n70\tClosed (>40%) needleleaved evergreen forest (>5m)\n90\tOpen (15-40%) needleleaved deciduous or evergreen forest (>5m)\n100\tClosed to open (>15%) mixed broadleaved and needleleaved forest (>5m)\n110\tMosaic forest or shrubland (50-70%) / grassland (20-50%)\n120\tMosaic grassland (50-70%) / forest or shrubland (20-50%)\n130\tClosed to open (>15%) (broadleaved or needleleaved, evergreen or deciduous) shrubland (<5m)\n140\tClosed to open (>15%) herbaceous vegetation (grassland, savannas or lichens/mosses)\n150\tSparse (<15%) vegetation\n160\tClosed to open (>15%) broadleaved forest regularly flooded (semi-permanently or temporarily) - Fresh or brackish water\n170\tClosed (>40%) broadleaved forest or shrubland permanently flooded - Saline or brackish water\n180\tClosed to open (>15%) grassland or woody vegetation on regularly flooded or waterlogged soil - Fresh, brackish or saline water\n190\tArtificial surfaces and associated areas (Urban areas >50%)\n200\tBare areas\n210\tWater bodies\n220\tPermanent snow and ice\n230\tNo data (burnt areas, clouds,\u2026)"))}p.isMDXComponent=!0}}]);