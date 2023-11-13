"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4162],{1529:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>i,contentTitle:()=>l,default:()=>_,frontMatter:()=>t,metadata:()=>c,toc:()=>s});var n=a(5893),r=a(1151);const t={},l="Copernicus Global Land Service: Land Cover 100m",c={id:"landcover/global/LandCover-Copernicus-GLS",title:"Copernicus Global Land Service: Land Cover 100m",description:"Links to:",source:"@site/docs/landcover/global/LandCover-Copernicus-GLS.md",sourceDirName:"landcover/global",slug:"/landcover/global/LandCover-Copernicus-GLS",permalink:"/cesdata/docs/landcover/global/LandCover-Copernicus-GLS",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LC-CCI",permalink:"/cesdata/docs/landcover/global/LC-CCI"},next:{title:"Global mosaics of the standard MODIS land cover type data",permalink:"/cesdata/docs/landcover/global/Modis-MCD12Q1-v6-LandCover"}},i={},s=[{value:"Citation",id:"citation",level:4},{value:"Data access",id:"data-access",level:4},{value:"Documentation:",id:"documentation",level:4},{value:"Data download and preparation",id:"data-download-and-preparation",level:4}];function d(e){const o={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"copernicus-global-land-service-land-cover-100m",children:"Copernicus Global Land Service: Land Cover 100m"}),"\n",(0,n.jsxs)(o.p,{children:["Links to:\n/ ",(0,n.jsx)(o.a,{href:"https://lcviewer.vito.be/",children:"Map visualization"}),"\n/ ",(0,n.jsx)(o.a,{href:"https://land.copernicus.eu/global/documents/lc100/v2/pum",children:"Webpage"}),"\n/ ",(0,n.jsx)(o.a,{href:"https://blog.vito.be/remotesensing/towards-mapping-annual-land-cover-changes",children:"More info"})]}),"\n",(0,n.jsx)(o.h4,{id:"citation",children:"Citation"}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:"Buchhorn, M. ; Smets, B. ; Bertels, L. ; Lesiv, M. ; Tsendbazar, N. - E. ; Herold, M. ; Fritz, S. Copernicus Global Land Service: Land Cover 100m: epoch 2015: Globe. Dataset of the global component of the Copernicus Land Monitoring Service 2019. DOI 10.5281/zenodo.3243509"}),"\n"]}),"\n",(0,n.jsx)(o.h4,{id:"data-access",children:"Data access"}),"\n",(0,n.jsx)(o.p,{children:"Through Zenodo at DOI 10.5281/zenodo.3243509"}),"\n",(0,n.jsx)(o.h4,{id:"documentation",children:"Documentation:"}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsxs)(o.p,{children:["Marcel Buchhorn, Bruno Smets, Luc Bertels, Myroslava Lesiv, Nandin-Erdene Tsendbazar, & Linlin Li. (2019, November 10). Copernicus Global Land Service: Land Cover 100m: version 2 Globe 2015: Product User Manual (Version Dataset v2.0, doc issue 2.20). Zenodo. ",(0,n.jsx)(o.a,{href:"http://doi.org/10.5281/zenodo.3606408",children:"http://doi.org/10.5281/zenodo.3606408"})]}),"\n"]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsxs)(o.p,{children:["Marcel Buchhorn, Luc Bertels, Bruno Smets, Myroslava Lesiv, & Nandin-Erdene Tsendbazar. (2019, August 26). Copernicus Global Land Service: Land Cover 100m: version 2 Globe 2015: Algorithm Theoretical Basis Document (Version Dataset v2.0, doc issue 2.00). Zenodo. ",(0,n.jsx)(o.a,{href:"http://doi.org/10.5281/zenodo.3606446",children:"http://doi.org/10.5281/zenodo.3606446"})]}),"\n"]}),"\n",(0,n.jsx)(o.h4,{id:"data-download-and-preparation",children:"Data download and preparation"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-sh",children:"source ~/proyectos/CES/cesdata/env/project-env.sh\n\nmkdir -p $GISDATA/landcover/global/CGLS\ncd $GISDATA/landcover/global/CGLS\n\nfor arch in ProbaV_LC100_epoch2015_global_v2.0.2_snow-coverfraction-layer_EPSG-4326.tif LandCover_global_v2_discrete-and-FCC.png ProbaV_LC100_epoch2015_global_v2.0.2_bare-coverfraction-layer_EPSG-4326.tif ProbaV_LC100_epoch2015_global_v2.0.2_bare-coverfraction-StdDev_EPSG-4326.tif ProbaV_LC100_epoch2015_global_v2.0.2_crops-coverfraction-layer_EPSG-4326.tif ProbaV_LC100_epoch2015_global_v2.0.2_crops-coverfraction-StdDev_EPSG-4326.tif ProbaV_LC100_epoch2015_global_v2.0.2_DataDensityIndicator_EPSG-4326.tif ProbaV_LC100_epoch2015_global_v2.0.2_discrete-classification-proba_EPSG-4326.tif ProbaV_LC100_epoch2015_global_v2.0.2_discrete-classification_EPSG-4326.tif ProbaV_LC100_epoch2015_global_v2.0.2_forest-type-layer_EPSG-4326.tif ProbaV_LC100_epoch2015_global_v2.0.2_grass-coverfraction-layer_EPSG-4326.tif ProbaV_LC100_epoch2015_global_v2.0.2_grass-coverfraction-StdDev_EPSG-4326.tif ProbaV_LC100_epoch2015_global_v2.0.2_moss-coverfraction-layer_EPSG-4326.tif ProbaV_LC100_epoch2015_global_v2.0.2_moss-coverfraction-StdDev_EPSG-4326.tif ProbaV_LC100_epoch2015_global_v2.0.2_shrub-coverfraction-layer_EPSG-4326.tif ProbaV_LC100_epoch2015_global_v2.0.2_shrub-coverfraction-StdDev_EPSG-4326.tif ProbaV_LC100_epoch2015_global_v2.0.2_snow-coverfraction-layer_EPSG-4326.tif ProbaV_LC100_epoch2015_global_v2.0.2_tree-coverfraction-layer_EPSG-4326.tif ProbaV_LC100_epoch2015_global_v2.0.2_tree-coverfraction-StdDev_EPSG-4326.tif ProbaV_LC100_epoch2015_global_v2.0.2_urban-coverfraction-layer_EPSG-4326.tif ProbaV_LC100_epoch2015_global_v2.0.2_water-permanent-coverfraction-layer_EPSG-4326.tif ProbaV_LC100_epoch2015_global_v2.0.2_water-seasonal-coverfraction-layer_EPSG-4326.tif\ndo\n   wget --continue https://zenodo.org/record/3243509/files/${arch}'?download=1' --output-document=${arch}\ndone\n\ncd $GISDATA/landcover/global/CGLS/v3.0.1/\nwget -b --continue 'https://zenodo.org/record/3939050/files/PROBAV_LC100_global_v3.0.1_2019-nrt_Crops-CoverFraction-layer_EPSG-4326.tif?download=1' --output-document=PROBAV_LC100_global_v3.0.1_2019-nrt_Crops-CoverFraction-layer_EPSG-4326.tif\n\nwget -b --continue 'https://zenodo.org/record/3939050/files/PROBAV_LC100_global_v3.0.1_2019-nrt_Bare-CoverFraction-layer_EPSG-4326.tif?download=1' --output-document=PROBAV_LC100_global_v3.0.1_2019-nrt_Bare-CoverFraction-layer_EPSG-4326.tif\n"})}),"\n",(0,n.jsxs)(o.p,{children:["Download from R using the ",(0,n.jsx)(o.em,{children:"R"})," package ",(0,n.jsx)(o.strong,{children:(0,n.jsx)(o.a,{href:"https://github.com/eblondel/zen4R",children:"zen4R"})}),". We need to retrieve the Zenodo API token from a file in the home directory or from an environment variable."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-r",children:'# module add  R/4.0.2\n# module add libsodium\n\n##R --vanilla\nrequire(zen4R)\nlibrary(parallel)\n\n##output directory\ngisdata <- Sys.getenv("GISDATA")\ntargetDir <- sprintf("%s/landcover/global/CGLS/v3.0.1",gisdata)\nsystem(sprintf("mkdir -p %s",targetDir))\nsetwd(targetDir)\n\n#download files as parallel using a cluster approach (for both Unix/Win systems)\ndownload_zenodo("10.5281/zenodo.3939050",\nparallel = TRUE, parallel_handler = parLapply, cl = makeCluster(8))\n\n\n'})})]})}function _(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,o,a)=>{a.d(o,{Z:()=>c,a:()=>l});var n=a(7294);const r={},t=n.createContext(r);function l(e){const o=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(t.Provider,{value:o},e.children)}}}]);