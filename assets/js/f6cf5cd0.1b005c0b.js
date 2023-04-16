"use strict";(self.webpackChunkdocusite=self.webpackChunkdocusite||[]).push([[382],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,g=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(g,s(s({ref:t},p),{},{components:r})):n.createElement(g,s({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6178:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},s=void 0,i={unversionedId:"forest/global/3D-forest-landscape",id:"forest/global/3D-forest-landscape",title:"3D-forest-landscape",description:"Project Description",source:"@site/docs/forest/global/3D-forest-landscape.md",sourceDirName:"forest/global",slug:"/forest/global/3D-forest-landscape",permalink:"/docs/forest/global/3D-forest-landscape",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Fires in Australia's forests",permalink:"/docs/fire/regional/Fire-Australia-Forest"},next:{title:"Forest Landscape Integrity Index",permalink:"/docs/forest/global/Forest-Landscape-Integrity-Index"}},l={},c=[],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Project Description\nThis website presents the research projects of Dr. Marc Simard, Senior Scientist at the Jet Propulsion Laboratory. The overall objective is to combine radar and lidar remote sensing to characterize the forested landscapes in 3D. The science products generated by Simard and collaborators have four main components:"),(0,a.kt)("p",null,"Global scale mapping of canopy height and biomass at 1km spatial resolution.\nImproving Shuttle Radar Topography Mission (SRTM) elevation dataset using ICESat's Geoscience Laser Altimeter System (GLAS).\nHigh spatial resolution mapping of canopy height and biomass using polarimeteric synthetic aperture radar interferometry (polinSAR) and LiDAR.\nMapping of mangrove forests canopy height, biomass, productivity and assessment of vulnerability to anthropogenic activity and sea level change."),(0,a.kt)("p",null,"These projects are funded through the NASA MEaSUREs (1,2), Terrestrial Ecology (3) and Land Cover Land Use Change (LCLUC) (4) programs."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://landscape.jpl.nasa.gov/"},"https://landscape.jpl.nasa.gov/")),(0,a.kt)("p",null,'Citation:\nSimard, M., Pinto, N., Fisher, J., Baccini, A., (2011), "Mapping forest canopy height globally with spaceborne lidar", Journal of Geophysical Research, VOL. 116, G04021, 12 PP., 2011, doi:10.1029/2011JG001708'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"\nsource ~/proyectos/UNSW/cesdata/env/project-env.sh\n\n\nmkdir -p $GISDATA/forest/global/3d-forest-JPL/\ncd $GISDATA/forest/global/3d-forest-JPL/\n\nwget --continue https://landscape.jpl.nasa.gov/resources/Simard_Pinto_3DGlobalVeg_JGR.tif.gz\nwget --continue https://landscape.jpl.nasa.gov/images/legend_3DGlobalVeg.png\nwget --continue https://landscape.jpl.nasa.gov/resources/Global_l3c_error_map.tif.gz\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"\ncd $WORKDIR\ngunzip $GISDATA/vegetation/3d-forest-JPL/Simard_Pinto_3DGlobalVeg_JGR.tif.gz\n\n")))}u.isMDXComponent=!0}}]);