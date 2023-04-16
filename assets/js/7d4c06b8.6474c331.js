"use strict";(self.webpackChunkdocusite=self.webpackChunkdocusite||[]).push([[1885],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),u=n,f=d["".concat(s,".").concat(u)]||d[u]||g[u]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2530:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={},i="Project Description",l={unversionedId:"veglayer/global/3D-forest-landscape",id:"veglayer/global/3D-forest-landscape",title:"Project Description",description:"This website presents the research projects of Dr. Marc Simard, Senior Scientist at the Jet Propulsion Laboratory. The overall objective is to combine radar and lidar remote sensing to characterize the forested landscapes in 3D. The science products generated by Simard and collaborators have four main components:",source:"@site/docs/veglayer/global/3D-forest-landscape.md",sourceDirName:"veglayer/global",slug:"/veglayer/global/3D-forest-landscape",permalink:"/docs/veglayer/global/3D-forest-landscape",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ausplots",permalink:"/docs/vegetation-plots/regional/ausplots"},next:{title:"AVHRR-GIMMS",permalink:"/docs/veglayer/global/AVHRR-GIMMS"}},s={},c=[{value:"Citation",id:"citation",level:2}],p={toc:c},d="wrapper";function g(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"project-description"},"Project Description"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This website presents the research projects of Dr. Marc Simard, Senior Scientist at the Jet Propulsion Laboratory. The overall objective is to combine radar and lidar remote sensing to characterize the forested landscapes in 3D. The science products generated by Simard and collaborators have four main components:")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"-Global scale mapping of canopy height and biomass at 1km spatial resolution.\n-Improving Shuttle Radar Topography Mission (SRTM) elevation dataset using ICESat's Geoscience Laser Altimeter System (GLAS).\n-High spatial resolution mapping of canopy height and biomass using polarimeteric synthetic aperture radar interferometry (polinSAR) and LiDAR.\n-Mapping of mangrove forests canopy height, biomass, productivity and assessment of vulnerability to anthropogenic activity and sea level change.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"These projects are funded through the NASA MEaSUREs (1,2), Terrestrial Ecology (3) and Land Cover Land Use Change (LCLUC) (4) programs.")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://landscape.jpl.nasa.gov/"},"https://landscape.jpl.nasa.gov/")),(0,n.kt)("h2",{id:"citation"},"Citation"),(0,n.kt)("p",null,'Simard, M., Pinto, N., Fisher, J., Baccini, A., (2011), "Mapping forest canopy height globally with spaceborne lidar", Journal of Geophysical Research, VOL. 116, G04021, 12 PP., 2011, doi:10.1029/2011JG001708'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir -p $GISDATA/vegetation/3d-forest-JPL/\ncd $GISDATA/vegetation/3d-forest-JPL/\n\nwget --continue https://landscape.jpl.nasa.gov/resources/Simard_Pinto_3DGlobalVeg_JGR.tif.gz\nwget --continue https://landscape.jpl.nasa.gov/images/legend_3DGlobalVeg.png\nwget --continue https://landscape.jpl.nasa.gov/resources/Global_l3c_error_map.tif.gz\ncd $WORKDIR\ngunzip $GISDATA/vegetation/3d-forest-JPL/Simard_Pinto_3DGlobalVeg_JGR.tif.gz\n\n")),(0,n.kt)("p",null,"In earthengine\n",(0,n.kt)("a",{parentName:"p",href:"https://developers.google.com/earth-engine/datasets/catalog/NASA_JPL_global_forest_canopy_height_2005"},"https://developers.google.com/earth-engine/datasets/catalog/NASA_JPL_global_forest_canopy_height_2005")))}g.isMDXComponent=!0}}]);