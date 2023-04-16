"use strict";(self.webpackChunkdocusite=self.webpackChunkdocusite||[]).push([[2965],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),l=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return a.createElement(c.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},f=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),f=n,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return t?a.createElement(m,i(i({ref:r},p),{},{components:t})):a.createElement(m,i({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7820:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(7462),n=(t(7294),t(3905));const o={},i="Raster Circumpolar Arctic Permafrost and Ground Ice Conditions",s={unversionedId:"soil/regional/Circum-arctic-permafrost",id:"soil/regional/Circum-arctic-permafrost",title:"Raster Circumpolar Arctic Permafrost and Ground Ice Conditions",description:"Citation",source:"@site/docs/soil/regional/Circum-arctic-permafrost.md",sourceDirName:"soil/regional",slug:"/soil/regional/Circum-arctic-permafrost",permalink:"/docs/soil/regional/Circum-arctic-permafrost",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ISRIC SoilGrids",permalink:"/docs/soil/global/isric-soil-grids"},next:{title:"Soil and Landscape Grid of Australia",permalink:"/docs/soil/regional/Soil-australia"}},c={},l=[{value:"Citation",id:"citation",level:4},{value:"Data access",id:"data-access",level:4},{value:"Data download and preparation",id:"data-download-and-preparation",level:4}],p={toc:l},d="wrapper";function u(e){let{components:r,...t}=e;return(0,n.kt)(d,(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"raster-circumpolar-arctic-permafrost-and-ground-ice-conditions"},"Raster Circumpolar Arctic Permafrost and Ground Ice Conditions"),(0,n.kt)("h4",{id:"citation"},"Citation"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Brown, J., O. Ferrians, J. A. Heginbottom, and E. Melnikov. 2002. Circum-Arctic Map of Permafrost and Ground-Ice Conditions, Version 2. ","[Indicate subset used]",". Boulder, Colorado USA. NSIDC: National Snow and Ice Data Center. doi: ",(0,n.kt)("a",{parentName:"p",href:"https://doi.org/"},"https://doi.org/"),". ","[Date Accessed]",".")),(0,n.kt)("h4",{id:"data-access"},"Data access"),(0,n.kt)("p",null,"Circum-Arctic Map of Permafrost and Ground-Ice Conditions, Version 2\nData Set ID: GGD318\n",(0,n.kt)("a",{parentName:"p",href:"https://nsidc.org/data/GGD318/versions/2"},"https://nsidc.org/data/GGD318/versions/2")),(0,n.kt)("p",null,"FTP: ftp://sidads.colorado.edu/pub/DATASETS/fgdc/ggd318_map_circumarctic/"),(0,n.kt)("h4",{id:"data-download-and-preparation"},"Data download and preparation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"source ~/proyectos/UNSW/cesdata/env/project-env.sh\n\n\nmkdir -p $GISDATA/soil/regional/circumpolar_permafrost\ncd $GISDATA/soil/regional/circumpolar_permafrost\nwget ftp://sidads.colorado.edu/pub/DATASETS/fgdc/ggd318_map_circumarctic/ -O index\nwget -b --continue -i index --force-html\n\n")),(0,n.kt)("p",null,"Raster file projection is different as the vector files projection. This approach allow to import all files in the same projection, but it gives some errors, and results are hopelessly wrong when transformed to ",(0,n.kt)("em",{parentName:"p"},"Plate Carr\xe9e"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'ogrinfo -al -so  permaice.shp\n\n## This one has better resolution:\ngdalwarp nhipa.byte -s_srs "+proj=laea +lat_0=90 +lon_0=0 +x_0=0 +y_0=0 +a=6371228.00000 +b=6371228.000 +units=m +no_defs" -t_srs treeline.prj nhipa.tif\n##gdalwarp nhipa.byte -s_srs treeline.prj nhipa.tif\n\n##gdalwarp nlipa.byte -s_srs "+proj=laea +lat_0=90 +lon_0=0 +x_0=0 +y_0=0 +a=6371228.00000 +b=6371228.000 +units=m +no_defs" -t_srs treeline.prj nlipa.tif\n\n## This is coarse scale, geographical coordinates?\n##gdalwarp llipa.byte -s_srs "+proj=laea +lat_0=90 +lon_0=0 +x_0=0 +y_0=0 +a=6371228.00000 +b=6371228.000 +units=m +no_defs" -t_srs treeline.prj llipa.tif\n\ngdalinfo nhipa.tif\n\n')))}u.isMDXComponent=!0}}]);