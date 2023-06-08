"use strict";(self.webpackChunkdocusite=self.webpackChunkdocusite||[]).push([[1885],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),g=r,f=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},2530:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={},l=void 0,i={unversionedId:"veglayer/global/3D-forest-landscape",id:"veglayer/global/3D-forest-landscape",title:"3D-forest-landscape",description:"Description",source:"@site/docs/veglayer/global/3D-forest-landscape.md",sourceDirName:"veglayer/global",slug:"/veglayer/global/3D-forest-landscape",permalink:"/cesdata/docs/veglayer/global/3D-forest-landscape",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"veglayer/global",permalink:"/cesdata/docs/category/veglayerglobal"},next:{title:"AVHRR-GIMMS",permalink:"/cesdata/docs/veglayer/global/AVHRR-GIMMS"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Links",id:"links",level:2},{value:"Citation",id:"citation",level:2},{value:"Data access and preparation",id:"data-access-and-preparation",level:2},{value:"Earthengine",id:"earthengine",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This website presents the research projects of Dr. Marc Simard, Senior Scientist at the Jet Propulsion Laboratory. The overall objective is to combine radar and lidar remote sensing to characterize the forested landscapes in 3D. The science products generated by Simard and collaborators have four main components:")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"-Global scale mapping of canopy height and biomass at 1km spatial resolution.\n-Improving Shuttle Radar Topography Mission (SRTM) elevation dataset using ICESat's Geoscience Laser Altimeter System (GLAS).\n-High spatial resolution mapping of canopy height and biomass using polarimeteric synthetic aperture radar interferometry (polinSAR) and LiDAR.\n-Mapping of mangrove forests canopy height, biomass, productivity and assessment of vulnerability to anthropogenic activity and sea level change.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"These projects are funded through the NASA MEaSUREs (1,2), Terrestrial Ecology (3) and Land Cover Land Use Change (LCLUC) (4) programs.")),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://landscape.jpl.nasa.gov/"},"https://landscape.jpl.nasa.gov/"))),(0,r.kt)("h2",{id:"citation"},"Citation"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Simard, M., Pinto, N., Fisher, J., Baccini, A., (2011), "Mapping forest canopy height globally with spaceborne lidar", Journal of Geophysical Research, VOL. 116, G04021, 12 PP., 2011, doi:10.1029/2011JG001708')),(0,r.kt)("h2",{id:"data-access-and-preparation"},"Data access and preparation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir -p $GISDATA/vegetation/3d-forest-JPL/\ncd $GISDATA/vegetation/3d-forest-JPL/\n\nwget --continue https://landscape.jpl.nasa.gov/resources/Simard_Pinto_3DGlobalVeg_JGR.tif.gz\nwget --continue https://landscape.jpl.nasa.gov/images/legend_3DGlobalVeg.png\nwget --continue https://landscape.jpl.nasa.gov/resources/Global_l3c_error_map.tif.gz\ncd $WORKDIR\ngunzip $GISDATA/vegetation/3d-forest-JPL/Simard_Pinto_3DGlobalVeg_JGR.tif.gz\n\n")),(0,r.kt)("h3",{id:"earthengine"},"Earthengine"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/earth-engine/datasets/catalog/NASA_JPL_global_forest_canopy_height_2005"},"https://developers.google.com/earth-engine/datasets/catalog/NASA_JPL_global_forest_canopy_height_2005"))))}u.isMDXComponent=!0}}]);