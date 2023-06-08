"use strict";(self.webpackChunkdocusite=self.webpackChunkdocusite||[]).push([[7610],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(a),g=o,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||n;return a?r.createElement(m,p(p({ref:t},c),{},{components:a})):r.createElement(m,p({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,p=new Array(n);p[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,p[1]=i;for(var l=2;l<n;l++)p[l]=a[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},7105:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var r=a(7462),o=(a(7294),a(3905));const n={title:"NSW-spatial",description:"NSW Topographic Maps and Elevation Data Service",tags:["New South Wales","Adaptative monitoring"]},p=void 0,i={unversionedId:"topography/regional/NSW-spatial",id:"topography/regional/NSW-spatial",title:"NSW-spatial",description:"NSW Topographic Maps and Elevation Data Service",source:"@site/docs/topography/regional/NSW-spatial.md",sourceDirName:"topography/regional",slug:"/topography/regional/NSW-spatial",permalink:"/cesdata/docs/topography/regional/NSW-spatial",draft:!1,tags:[{label:"New South Wales",permalink:"/cesdata/docs/tags/new-south-wales"},{label:"Adaptative monitoring",permalink:"/cesdata/docs/tags/adaptative-monitoring"}],version:"current",frontMatter:{title:"NSW-spatial",description:"NSW Topographic Maps and Elevation Data Service",tags:["New South Wales","Adaptative monitoring"]},sidebar:"tutorialSidebar",previous:{title:"Geomorfologia Peru",permalink:"/cesdata/docs/topography/regional/Geomorfologia-Peru"},next:{title:"vegcover",permalink:"/cesdata/docs/category/vegcover"}},s={},l=[{value:"Links",id:"links",level:2},{value:"Data access and download",id:"data-access-and-download",level:2}],c={toc:l},d="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"NSW Topographic maps and elevation data from spatial.nsw.gov.au"),(0,o.kt)("h2",{id:"links"},"Links"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.spatial.nsw.gov.au/products_and_services/topographic_maps"},"https://www.spatial.nsw.gov.au/products_and_services/topographic_maps"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://portal.spatial.nsw.gov.au/portal/apps/sites/#/homepage/pages/map-viewers"},"https://portal.spatial.nsw.gov.au/portal/apps/sites/#/homepage/pages/map-viewers")),(0,o.kt)("h2",{id:"data-access-and-download"},"Data access and download"),(0,o.kt)("p",null,"Explore map viewer and select regions to download"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{bash}"},"wget --continue https://portal.spatial.nsw.gov.au/download/NSWTopographicMaps/DTDB_GeoReferenced_Raster_CollarOff_161080/2022/50k/7627-S+SWAN+HILL.tif\nwget --continue https://portal.spatial.nsw.gov.au/download/NSWTopographicMaps/DTDB_GeoReferenced_Raster_CollarOff_161080/2022/50k/7628-S+PEREKERTEN.tif\n\n\nwget --continue https://portal.spatial.nsw.gov.au/download/dem/54/SwanHill-DEM-AHD_54_5m.zip\nwget --continue https://portal.spatial.nsw.gov.au/download/dem/55/Oxley-DEM-AHD_55_5m.zip\n\n")))}u.isMDXComponent=!0}}]);