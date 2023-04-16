"use strict";(self.webpackChunkdocusite=self.webpackChunkdocusite||[]).push([[894],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>g});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(o),u=n,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return o?r.createElement(g,i(i({ref:t},p),{},{components:o})):r.createElement(g,i({ref:t},p))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},9120:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));const a={},i="ISRIC SoilGrids",s={unversionedId:"soil/global/isric-soil-grids",id:"soil/global/isric-soil-grids",title:"ISRIC SoilGrids",description:"SoilGrids \u2014 global gridded soil information",source:"@site/docs/soil/global/isric-soil-grids.md",sourceDirName:"soil/global",slug:"/soil/global/isric-soil-grids",permalink:"/docs/soil/global/isric-soil-grids",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HWSD-v1.2",permalink:"/docs/soil/global/HWSD-v1.2"},next:{title:"Raster Circumpolar Arctic Permafrost and Ground Ice Conditions",permalink:"/docs/soil/regional/Circum-arctic-permafrost"}},l={},c=[{value:"Citation",id:"citation",level:2},{value:"Data access and preparation",id:"data-access-and-preparation",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"isric-soilgrids"},"ISRIC SoilGrids"),(0,n.kt)("p",null,"SoilGrids \u2014 global gridded soil information\nA system for digital soil mapping based on global compilation of soil profile data and environmental layers"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"SoilGridsTM (hereafter SoilGrids) is a system for global digital soil mapping that uses state-of-the-art machine learning methods to map the spatial distribution of soil properties across the globe. SoilGrids prediction models are fitted using over 230 000 soil profile observations from the WoSIS database and a series of environmental covariates. Covariates were selected from a pool of over 400 environmental layers from Earth observation derived products and other environmental information including climate, land cover and terrain morphology. The outputs of SoilGrids are global soil property maps at six standard depth intervals (according to the GlobalSoilMap IUSS working group and its specifications) at a spatial resolution of 250 meters. Prediction uncertainty is quantified by the lower and upper limits of a 90% prediction interval. The additional uncertainty layer displayed at soilgrids.org is the ratio between the inter-quantile range and the median. The SoilGrids maps are publicly available under the CC-BY 4.0 License.")),(0,n.kt)("p",null,"Maps of the following soil properties are available: pH, soil organic carbon content, bulk density, coarse fragments content, sand content, silt content, clay content, cation exchange capacity (CEC), total nitrogen as well as soil organic carbon density and soil organic carbon stock."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://www.globalsoilmap.net"},"www.globalsoilmap.net"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://www.isric.org/projects/globalsoilmapnet"},"https://www.isric.org/projects/globalsoilmapnet"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://www.isric.org/explore/soilgrids"},"https://www.isric.org/explore/soilgrids")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://git.wur.nl/isric/soilgrids/soilgrids.notebooks/activity"},"https://git.wur.nl/isric/soilgrids/soilgrids.notebooks/activity")),(0,n.kt)("h2",{id:"citation"},"Citation"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Poggio, L., de Sousa, L. M., Batjes, N. H., Heuvelink, G. B. M., Kempen, B., Ribeiro, E., and Rossiter, D.: SoilGrids 2.0: producing soil information for the globe with quantified spatial uncertainty, SOIL, 7, 217\u2013240, 2021. DOI")),(0,n.kt)("h2",{id:"data-access-and-preparation"},"Data access and preparation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'source ~/proyectos/UNSW/cesdata/env/project-env.sh\nmkdir -p $GISDATA/soil/global/ISRIC-SoilGrids\ncd $GISDATA/soil/global/ISRIC-SoilGrids\n\nmodule add python/3.9.9 perl geos gdal/3.2.1\n\nIGH="+proj=igh +lat_0=0 +lon_0=0 +datum=WGS84 +units=m +no_defs" # proj string for Homolosine projection\nSG_URL="/vsicurl?max_retry=3&retry_delay=1&list_dir=no&url=https://files.isric.org/soilgrids/latest/data"\nCELL_SIZE="250 250"\n\n')),(0,n.kt)("p",null,"Detailed instructions here:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://git.wur.nl/isric/soilgrids/soilgrids.notebooks/-/blob/master/markdown/webdav_from_bash.md"},"https://git.wur.nl/isric/soilgrids/soilgrids.notebooks/-/blob/master/markdown/webdav_from_bash.md")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"To local VRT in homolosine (directly from the webdav connection)\nThe first step is to obtain a VRT for the area of interest in the Homolosine projection. We suggest to use VRT for the intermediate steps to save space and computation times."),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-{bash}"},'gdal_translate -of VRT -tr $CELL_SIZE -co "TILED=YES" -co "COMPRESS=DEFLATE" -co "PREDICTOR=2" -co "BIGTIFF=YES" \\\n    $SG_URL"/ocs/ocs_0-30cm_mean.vrt" "ocs_0-5cm_mean.vrt"\n'))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"To a VRT in, for example, LatLong\nThe following command will generate a VRT in the projection of your choice:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-{bash}"},'gdalwarp -overwrite -t_srs EPSG:4326 -of VRT "ocs_0-5cm_mean.vrt" "ocs_0-5cm_mean_4326.vrt"\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"To a final Geotiff\nThe following command will generate a Geotiff\xa0in the projection of your choice for the area of interest defined above")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-{bash}"},'gdal_translate ocs_0-5cm_mean_4326.vrt ocs_0-5cm_mean_4326.tif \\\n    -co "TILED=YES" -co "COMPRESS=DEFLATE" -co "PREDICTOR=2" -co "BIGTIFF=YES"\n')),(0,n.kt)("p",null,"List of variables: bdod cec cfvo clay nitrogen ocd ocs phh2o sand silt soc wrb # landmask\nDepths: 0-5cm 5-15cm 15-30cm  30-60cm 60-100cm 100-200cm\nstats: mean uncertainty Q0.05 Q0.5 Q0.95"),(0,n.kt)("p",null,"We prepared a PBS script to download and reproject several layers:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-{bash}"},'source ~/proyectos/UNSW/cesdata/env/project-env.sh\ncd $WORKDIR\necho "bdod\ncec\ncfvo\nclay\nnitrogen\nocd\nocs\nphh2o\nsand\nsilt\nsoc\nwrb" > $GISDATA/soil/global/ISRIC-SoilGrids/varlist\n\nqsub -l select=1:ncpus=2:mem=60gb,walltime=20:00:00 -J 1-3 $SCRIPTDIR/inc/pbs/download-soilgrids-from-vrt.pbs\nqsub -l select=1:ncpus=2:mem=80gb,walltime=20:00:00 -J 4-7 $SCRIPTDIR/inc/pbs/download-soilgrids-from-vrt.pbs\nqsub -l select=1:ncpus=2:mem=100gb,walltime=20:00:00 -J 8-12 $SCRIPTDIR/inc/pbs/download-soilgrids-from-vrt.pbs\n\n')),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://git.wur.nl/isric/soilgrids/soilgrids.notebooks/-/blob/master/markdown/webdav_from_R.md"},"https://git.wur.nl/isric/soilgrids/soilgrids.notebooks/-/blob/master/markdown/webdav_from_R.md")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-{r}"},"library(rgdal)\nlibrary(gdalUtils)\nigh='+proj=igh +lat_0=0 +lon_0=0 +datum=WGS84 +units=m +no_defs' # proj string for Homolosine projection\n\nsg_url=\"/vsicurl?max_retry=3&retry_delay=1&list_dir=no&url=https://files.isric.org/soilgrids/latest/data/\"\ngdal_translate(paste0(sg_url,'ocs/ocs_0-30cm_mean.vrt'),\n    \"./crop_roi_igh_r.tif\",\n    verbose=TRUE)\n\n")))}m.isMDXComponent=!0}}]);