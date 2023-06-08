"use strict";(self.webpackChunkdocusite=self.webpackChunkdocusite||[]).push([[3762],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return a?r.createElement(f,l(l({ref:t},p),{},{components:a})):r.createElement(f,l({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[d]="string"==typeof e?e:n,l[1]=c;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4100:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const i={title:"CHIRPS",description:"Climate Hazards Group InfraRed Precipitation with Station",tags:["wget","gdal","netcdf"]},l=void 0,c={unversionedId:"climate/global/CHIRPS",id:"climate/global/CHIRPS",title:"CHIRPS",description:"Climate Hazards Group InfraRed Precipitation with Station",source:"@site/docs/climate/global/CHIRPS.md",sourceDirName:"climate/global",slug:"/climate/global/CHIRPS",permalink:"/cesdata/docs/climate/global/CHIRPS",draft:!1,tags:[{label:"wget",permalink:"/cesdata/docs/tags/wget"},{label:"gdal",permalink:"/cesdata/docs/tags/gdal"},{label:"netcdf",permalink:"/cesdata/docs/tags/netcdf"}],version:"current",frontMatter:{title:"CHIRPS",description:"Climate Hazards Group InfraRed Precipitation with Station",tags:["wget","gdal","netcdf"]},sidebar:"tutorialSidebar",previous:{title:"CHELSA",permalink:"/cesdata/docs/climate/global/CHELSA-climatologies"},next:{title:"CMCC-BioClimInd",permalink:"/cesdata/docs/climate/global/CMCC-BioClimInd"}},o={},s=[{value:"Description",id:"description",level:2},{value:"Links",id:"links",level:2},{value:"Data access and preparation",id:"data-access-and-preparation",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"Quasi-global distribution (50S-50N), gridded 0.05 degree resolution, 1981 to near-real time precipitation time series."),(0,n.kt)("h2",{id:"links"},"Links"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://chg.geog.ucsb.edu/data/chirps"},"The Climate Hazards Group InfraRed Precipitation with Station")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.chc.ucsb.edu/data/chirps"},"https://www.chc.ucsb.edu/data/chirps")),(0,n.kt)("p",null,"Old links:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"ftp://ftp.chg.ucsb.edu/pub/org/chg/products/CHIRPS-2.0/README-CHIRPS.txt"},"README")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://chg-wiki.geog.ucsb.edu/wiki/CHIRPS_FAQ"},"FAQ")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://pubs.usgs.gov/ds/832/"},"Publication"))),(0,n.kt)("p",null,"Publication: ",(0,n.kt)("a",{parentName:"p",href:"https://www.nature.com/articles/sdata201566"},"https://www.nature.com/articles/sdata201566")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://data.chc.ucsb.edu/products/CHIRPS-2.0/"},"https://data.chc.ucsb.edu/products/CHIRPS-2.0/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://data.chc.ucsb.edu/products/CHIRPS-2.0/"},"https://data.chc.ucsb.edu/products/CHIRPS-2.0/")),(0,n.kt)("li",{parentName:"ul"},"README-CHIRPS.txt")),(0,n.kt)("h2",{id:"data-access-and-preparation"},"Data access and preparation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"source proyectos/UNSW/cesdata/env/project-env.sh\nmkdir -p $GISDATA/climate/global/CHIRPS\ncd $GISDATA/climate/global/CHIRPS\n\n# all in one file:\nwget --continue https://data.chc.ucsb.edu/products/CHIRPS-2.0/global_monthly/netcdf/chirps-v2.0.monthly.nc\n\n\n")),(0,n.kt)("p",null,"Time steps are months (days since 1980-1-1 0:0:0), and they are stored as bands:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"module add python/3.8.3 perl/5.28.0 gdal/3.2.1 geos/3.8.1\ngdalinfo chirps-v2.0.monthly.nc\n\n\ngdalwarp NETCDF:$GISDATA/climate/global/CHIRPS/chirps-v2.0.monthly.nc:precip -t_srs EPSG:4326 -te -74 0 -58 13 -of 'GTiff' Test1.tif\n")))}u.isMDXComponent=!0}}]);