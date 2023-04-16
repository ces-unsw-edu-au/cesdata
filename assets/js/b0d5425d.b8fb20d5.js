"use strict";(self.webpackChunkdocusite=self.webpackChunkdocusite||[]).push([[5375],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},f=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(t),f=r,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return t?n.createElement(m,l(l({ref:a},p),{},{components:t})):n.createElement(m,l({ref:a},p))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=f;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5084:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=t(7462),r=(t(7294),t(3905));const i={},l="Soil and Landscape Grid of Australia",o={unversionedId:"soil/regional/Soil-australia",id:"soil/regional/Soil-australia",title:"Soil and Landscape Grid of Australia",description:"Available data",source:"@site/docs/soil/regional/Soil-australia.md",sourceDirName:"soil/regional",slug:"/soil/regional/Soil-australia",permalink:"/docs/soil/regional/Soil-australia",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Raster Circumpolar Arctic Permafrost and Ground Ice Conditions",permalink:"/docs/soil/regional/Circum-arctic-permafrost"},next:{title:"Living Planet Index",permalink:"/docs/species-abundance/global/living-planet-index"}},s={},c=[{value:"Available data",id:"available-data",level:2},{value:"Data download:",id:"data-download",level:2}],p={toc:c},d="wrapper";function u(e){let{components:a,...t}=e;return(0,r.kt)(d,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"soil-and-landscape-grid-of-australia"},"Soil and Landscape Grid of Australia"),(0,r.kt)("h2",{id:""}),(0,r.kt)("h2",{id:"available-data"},"Available data"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.clw.csiro.au/aclep/soilandlandscapegrid/GetData-DAP.html"},"https://www.clw.csiro.au/aclep/soilandlandscapegrid/GetData-DAP.html")),(0,r.kt)("h2",{id:"data-download"},"Data download:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"source ~/proyectos/UNSW/cesdata/env/project-env.sh\n\n\nmkdir -p $GISDATA/soil/regional/soil-landscape-grid-australia\ncd $GISDATA/soil/regional/soil-landscape-grid-australia\n\nfor VAR in AWC Bulk-Density Clay Depth_of_Regolith Depth_of_Soil ECEC SOC  Sand  Silt  Total_N Total_P pHc\ndo\n  wget ftp://qld.auscover.org.au/tern-soils/Products/National_digital_soil_property_maps/${VAR}/ --output-document=${VAR}.list\n  grep tif ${VAR}.list >> enlaces\ndone\nwget --continue -i enlaces --force-html\n\n")),(0,r.kt)("p",null,"File name conventions: ",(0,r.kt)("a",{parentName:"p",href:"https://www.clw.csiro.au/aclep/soilandlandscapegrid/MetaData/ASLG_File_Naming_Conventions.html"},"https://www.clw.csiro.au/aclep/soilandlandscapegrid/MetaData/ASLG_File_Naming_Conventions.html")),(0,r.kt)("p",null,"Can we compress these files?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"source ~/proyectos/UNSW/cesdata/env/project-env.sh\n\n\nmkdir -p $GISDATA/soil/regional/soil-landscape-grid-australia\ncd $GISDATA/soil/regional/soil-landscape-grid-australia\ngzip SOC_100_200_EV_N_P_AU_TRN_C_20140801.tif ## minimal compression because it is already using LZW\n\n\n")))}u.isMDXComponent=!0}}]);