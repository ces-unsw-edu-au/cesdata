"use strict";(self.webpackChunkdocusite=self.webpackChunkdocusite||[]).push([[5624],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,m=d["".concat(l,".").concat(u)]||d[u]||f[u]||o;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5659:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={},s="Global PALSAR-2/PALSAR/JERS-1 Mosaics and Forest/Non-Forest Maps",i={unversionedId:"forest/global/PALSAR-forest-non-forest",id:"forest/global/PALSAR-forest-non-forest",title:"Global PALSAR-2/PALSAR/JERS-1 Mosaics and Forest/Non-Forest Maps",description:"https://www.eorc.jaxa.jp/ALOS/en/dataset/fnf_e.htm",source:"@site/docs/forest/global/PALSAR-forest-non-forest.md",sourceDirName:"forest/global",slug:"/forest/global/PALSAR-forest-non-forest",permalink:"/docs/forest/global/PALSAR-forest-non-forest",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GFC",permalink:"/docs/forest/global/GFC"},next:{title:"FML",permalink:"/docs/forest/global/global-forest-management"}},l={},c=[{value:"Citation",id:"citation",level:2},{value:"Data access and download",id:"data-access-and-download",level:2}],p={toc:c},d="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"global-palsar-2palsarjers-1-mosaics-and-forestnon-forest-maps"},"Global PALSAR-2/PALSAR/JERS-1 Mosaics and Forest/Non-Forest Maps"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.eorc.jaxa.jp/ALOS/en/dataset/fnf_e.htm"},"https://www.eorc.jaxa.jp/ALOS/en/dataset/fnf_e.htm")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"To improve understanding of and responses to the impacts of global environmental changes, timely and consistent monitoring of the global land cover is essential. Global monitoring with satellite remote sensing is one of the most effective approaches to detect land surface changes, such as deforestation and forest degradation, as satellites can provide wall-to-wall observations covering wide areas periodically. The long wavelength (L-band) Synthetic Aperture Radars (SAR) on ALOS and ALOS-2 are particularly sensitive to vegetation structure and can observe the land surface even under clouds, and as such, are particularly useful to provide information about forest changes in the tropical regions.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'The global forest/non-forest maps (FNF) were generated by a Random Forest machine learning-based classification method, with the re-processed global 25m resolution PALSAR-2 mosaic dataset (Ver. 2.0.0) as input. Here, the "forest" is defined as the tree covered land with an area larger than 0.5 ha and a canopy cover of over 10 %, in accordance with the FAO definition of forest. The classification results are presented in four categories, with two categories of forest areas: forests with a canopy cover of 90 % or more and forests with a canopy cover of 10 % to 90 %, depending on the density of the forest area.')),(0,r.kt)("p",null,"Global 25m Resolution PALSAR-2 Global Forest/Non-forest Map (Ver.2.0.0) Dataset Description: ",(0,r.kt)("a",{parentName:"p",href:"https://www.eorc.jaxa.jp/ALOS/en/dataset/pdf/DatasetDescription_PALSAR2_FNF_V200.pdf"},"https://www.eorc.jaxa.jp/ALOS/en/dataset/pdf/DatasetDescription_PALSAR2_FNF_V200.pdf")),(0,r.kt)("h2",{id:"citation"},"Citation"),(0,r.kt)("blockquote",null),(0,r.kt)("h2",{id:"data-access-and-download"},"Data access and download"),(0,r.kt)("p",null,"Register with e-mail here: ",(0,r.kt)("a",{parentName:"p",href:"https://www.eorc.jaxa.jp/ALOS/en/palsar_fnf/registration.htm"},"https://www.eorc.jaxa.jp/ALOS/en/palsar_fnf/registration.htm")),(0,r.kt)("p",null,"The dataset download site is:\n",(0,r.kt)("a",{parentName:"p",href:"https://www.eorc.jaxa.jp/ALOS/en/palsar_fnf/data/index.htm"},"https://www.eorc.jaxa.jp/ALOS/en/palsar_fnf/data/index.htm")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"source ~/proyectos/UNSW/cesdata/env/project-env.sh\n\nmkdir -p $GISDATA/forest/global/PALSAR-forest-non-forest\ncd $GISDATA/forest/global/PALSAR-forest-non-forest\n\nmkdir FNF2019\nmkdir FNF2020\n\n# For Central Africa\nfor ns in N00 N05 S05 S10 S15 N10 N15 N20\ndo\n  for ew in E025 E030 E035 E020 E000 E005 E010 E015\n  do\n    for year in 19 20\n      do\n        wget --user=$PALSARUSR --password=$PALSARPWD --continue https://www.eorc.jaxa.jp/ALOS/en/palsar_fnf/data/20${year}/dir_zip/20${year}/${ns}${ew}_${year}_FNF_F02DAR.zip --output-document=FNF20${year}/${ns}${ew}_${year}_FNF_F02DAR.zip\n      done\n  done\ndone\n\n# For South America\nfor year in 19 20\ndo\n  for ew in W075 W070 W065 W060 W080\n  do\n    for ns in N00 N05 S05 S10 S15 N10 N15 N20\n      do\n        wget --user=$PALSARUSR --password=$PALSARPWD --continue https://www.eorc.jaxa.jp/ALOS/en/palsar_fnf/data/20${year}/dir_zip/20${year}/${ns}${ew}_${year}_FNF_F02DAR.zip --output-document=FNF20${year}/${ns}${ew}_${year}_FNF_F02DAR.zip\n      done\n  done\ndone\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"module add sqlite/3.31.1 spatialite/5.0.0b0 python/3.8.3 perl/5.28.0 gdal/3.2.1 geos/3.8.1\nmodule add proj/7.2.0 udunits/2.2.26\ncd $GISDATA/forest/global/PALSAR-forest-non-forest/FNF2020\nfor i in $(ls *zip); do unzip -u $i; done\ncd $GISDATA/forest/global/PALSAR-forest-non-forest/\ngdalbuildvrt FNF2020.vrt FNF2020/*.tif\n\n")))}f.isMDXComponent=!0}}]);