"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8755],{8549:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=s(5893),t=s(1151);const i={title:"MODIS Vegetation Index Products",description:"MODIS Vegetation Index Products (NDVI and EVI)",tags:["deforestation","Venezuela","Gran Sabana"]},r=void 0,l={id:"veglayer/global/Modis-NDVI",title:"MODIS Vegetation Index Products",description:"MODIS Vegetation Index Products (NDVI and EVI)",source:"@site/docs/veglayer/global/Modis-NDVI.md",sourceDirName:"veglayer/global",slug:"/veglayer/global/Modis-NDVI",permalink:"/cesdata/docs/veglayer/global/Modis-NDVI",draft:!1,unlisted:!1,tags:[{label:"deforestation",permalink:"/cesdata/docs/tags/deforestation"},{label:"Venezuela",permalink:"/cesdata/docs/tags/venezuela"},{label:"Gran Sabana",permalink:"/cesdata/docs/tags/gran-sabana"}],version:"current",frontMatter:{title:"MODIS Vegetation Index Products",description:"MODIS Vegetation Index Products (NDVI and EVI)",tags:["deforestation","Venezuela","Gran Sabana"]},sidebar:"tutorialSidebar",previous:{title:"MODIS GPP/NPP Project (MOD17)",permalink:"/cesdata/docs/veglayer/global/Modis-GPP-NPP"},next:{title:"WHRC-vegetation-height",permalink:"/cesdata/docs/veglayer/global/WHRC-vegetation-height"}},o={},c=[{value:"Versions",id:"versions",level:2},{value:"Citation",id:"citation",level:2},{value:"MODIS SubSets",id:"modis-subsets",level:3},{value:"Links",id:"links",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsx)(e.p,{children:"MODIS vegetation indices, produced on 16-day intervals and at multiple spatial resolutions, provide consistent spatial and temporal comparisons of vegetation canopy greenness, a composite property of leaf area, chlorophyll and canopy structure."}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"versions",children:"Versions"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"MOD13Q1 v061 (Version 6.1) is the current version."}),"\n",(0,a.jsx)(e.li,{children:"MOD13Q1 Version 6 (2015, decommissioned on July 31, 2023)."}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"citation",children:"Citation"}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsxs)(e.p,{children:["Huete, A., Didan, K., Miura, T., Rodriguez, E. P., Gao, X., & Ferreira, L. G. (2002). Overview of the radiometric and biophysical performance of the MODIS vegetation indices. In Remote Sensing of Environment (Vol. 83, Issues 1\u20132, pp. 195\u2013213). Elsevier BV. ",(0,a.jsx)(e.a,{href:"https://doi.org/10.1016/s0034-4257(02)00096-2",children:"https://doi.org/10.1016/s0034-4257(02)00096-2"})]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"modis-subsets",children:"MODIS SubSets"}),"\n",(0,a.jsx)(e.h2,{id:"links",children:"Links"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["Vegetation Index & Phenology Lab","\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.a,{href:"https://hodari.ece.arizona.edu/",children:"https://hodari.ece.arizona.edu/"})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["Quality of NDVI measurement","\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.a,{href:"https://gis.stackexchange.com/questions/163457/handling-mod13q1-ndvi-product-quality-assessment-qa-flags",children:"https://gis.stackexchange.com/questions/163457/handling-mod13q1-ndvi-product-quality-assessment-qa-flags"})}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.a,{href:"https://vip.arizona.edu/documents/MODIS/MODIS_VI_UsersGuide_June_2015_C6.pdf",children:"https://vip.arizona.edu/documents/MODIS/MODIS_VI_UsersGuide_June_2015_C6.pdf"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-r",children:'\nmSSt <- function(x,ll=-2000,ul=10000,cf=0.0001,os=0,setNA=0) {\n    if (!is.na(ll))\n        x[x<ll] <- NA\n    if (!is.na(ul))\n        x[x>ul] <- NA\n\n    x<- (x*cf) + os\n    if (!is.na(setNA))\n        x[x==setNA] <- NA\n    return(x)\n}\n\narchs <- dir(sprintf("%s/mapas/Venezuela/250m_16_days_NDVI.006",gis.dir),"tif$",full.names=T)\nqrchs <- dir(sprintf("%s/mapas/Venezuela/250m_16_days_VI_Quality.006",gis.dir),"tif$",full.names=T)\n\nqry <- matrix(nrow=nrow(camaras),ncol=length(archs),\n                      dimnames=list(c(apply(unique(camaras[,1:3]),1,paste,collapse=":")),\n                          sapply(archs,function(x) strsplit(x,"\\\\.")[[1]][3])))\n\nfor (aa in archs) {\n    qa <- strsplit(aa,"\\\\.")[[1]][3]\n    qry[,qa] <-\n        as.numeric(system(sprintf("echo \'%s\'| gdallocationinfo -valonly -wgs84 %s ",paste(sprintf("%s %s",camaras$lon,camaras$lat),collapse="\\n\n"),aa),intern=T))\n}\n ndvi.camara <- mSSt(qry)\n\n\n qry <- matrix(nrow=nrow(camaras),ncol=length(qrchs),\n                       dimnames=list(c(apply(unique(camaras[,1:3]),1,paste,collapse=":")),\n                           sapply(archs,function(x) strsplit(x,"\\\\.")[[1]][3])))\n\n for (aa in qrchs) {\n     qa <- strsplit(aa,"\\\\.")[[1]][3]\n     qry[,qa] <-\n         as.numeric(system(sprintf("echo \'%s\'| gdallocationinfo -valonly -wgs84 %s ",paste(sprintf("%s %s",camaras$lon,camaras$lat),collapse="\\n"),aa),intern=T))\n }\n  viq.camara <- R.utils::intToBin(qry)\n\n ## VI quality (pixels 0 and 1) 00 produced good quality, 01 produced check QA, 10 produced but cloudy...\n ## usefulness (pixels 2-5) 0000 highest -- 1100 lowest -- 1111 not useful\n\n obj.list <- unique(c(obj.list,"ndvi.camara","viq.camara"))\n  save(file=GIS.data,list=obj.list)\n\n\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-r",children:'\nsystem("mkdir ~/mapas/download/MOD13Q1")\nsetwd("~/mapas/download/MOD13Q1")\n\nif (!file.exists("fechas")) {\n    system(sprintf("wget --continue http://e4ftl01.cr.usgs.gov/MOLT/MOD13Q1.005/ --output-document index.html"))\n    system("html2text index.html |cut -d\\" \\" -f2 > fechas")\n}\nfchs <- read.csv("fechas",skip=13)\nfchs <- sub("/","",fchs[1:nrow(fchs)-1,])\n\nlistos <- c() \nif (file.exists("enlaces")) {\n    enlaces <- read.csv("enlaces",header=F,as.is=T)\n    listos <- unique(sapply(enlaces$V1,function(x) strsplit(x,"/")[[1]][6]))\n\n}\n    system("rm ii.html")\n    system("rm archs")\n\nfor (ff in fchs[!fchs %in% listos]) {\n    system(sprintf("wget --continue http://e4ftl01.cr.usgs.gov/MOLT/MOD13Q1.005/%s --output-document ii.html",ff))\n    system("html2text ii.html |cut -d\\" \\" -f5 | grep hdf > archs")\n    archs <- read.csv("archs",as.is=T,header=F)\n    for (hh in 10:12) {\n        for (vv in 7:8) {\n            lista <- sprintf("http://e4ftl01.cr.usgs.gov/MOLT/MOD13Q1.005/%s/%s",ff,grep(sprintf("h%02dv%02d",hh,vv),archs$V1,value=T))\n             cat(sprintf("%s\\n",lista),\n                 file=sprintf("enlaces.h%sv%s",hh,vv),append=T)\n\n        }\n    }\n    system("rm ii.html")\n    system("rm archs")\n}\n\n'})})]})}function u(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},1151:(n,e,s)=>{s.d(e,{Z:()=>l,a:()=>r});var a=s(7294);const t={},i=a.createContext(t);function r(n){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),a.createElement(i.Provider,{value:e},n.children)}}}]);