"use strict";(self.webpackChunkdocusite=self.webpackChunkdocusite||[]).push([[8755],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=s,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:s,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3060:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(7462),s=(n(7294),n(3905));const r={title:"MODIS Vegetation Index Products",description:"MODIS Vegetation Index Products (NDVI and EVI)",tags:["deforestation","Venezuela","Gran Sabana"]},i=void 0,o={unversionedId:"veglayer/global/Modis-NDVI",id:"veglayer/global/Modis-NDVI",title:"MODIS Vegetation Index Products",description:"MODIS Vegetation Index Products (NDVI and EVI)",source:"@site/docs/veglayer/global/Modis-NDVI.md",sourceDirName:"veglayer/global",slug:"/veglayer/global/Modis-NDVI",permalink:"/cesdata/docs/veglayer/global/Modis-NDVI",draft:!1,tags:[{label:"deforestation",permalink:"/cesdata/docs/tags/deforestation"},{label:"Venezuela",permalink:"/cesdata/docs/tags/venezuela"},{label:"Gran Sabana",permalink:"/cesdata/docs/tags/gran-sabana"}],version:"current",frontMatter:{title:"MODIS Vegetation Index Products",description:"MODIS Vegetation Index Products (NDVI and EVI)",tags:["deforestation","Venezuela","Gran Sabana"]},sidebar:"tutorialSidebar",previous:{title:"MODIS GPP/NPP Project (MOD17)",permalink:"/cesdata/docs/veglayer/global/Modis-GPP-NPP"},next:{title:"WHRC-vegetation-height",permalink:"/cesdata/docs/veglayer/global/WHRC-vegetation-height"}},l={},c=[{value:"Versions",id:"versions",level:2},{value:"Citation",id:"citation",level:2},{value:"MODIS SubSets",id:"modis-subsets",level:3},{value:"Links",id:"links",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"MODIS vegetation indices, produced on 16-day intervals and at multiple spatial resolutions, provide consistent spatial and temporal comparisons of vegetation canopy greenness, a composite property of leaf area, chlorophyll and canopy structure.")),(0,s.kt)("h2",{id:"versions"},"Versions"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"MOD13Q1 v061 (Version 6.1) is the current version."),(0,s.kt)("li",{parentName:"ul"},"MOD13Q1 Version 6 (2015, decommissioned on July 31, 2023). ")),(0,s.kt)("h2",{id:"citation"},"Citation"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Huete, A., Didan, K., Miura, T., Rodriguez, E. P., Gao, X., & Ferreira, L. G. (2002). Overview of the radiometric and biophysical performance of the MODIS vegetation indices. In Remote Sensing of Environment (Vol. 83, Issues 1\u20132, pp. 195\u2013213). Elsevier BV. ",(0,s.kt)("a",{parentName:"p",href:"https://doi.org/10.1016/s0034-4257(02)00096-2"},"https://doi.org/10.1016/s0034-4257(02)00096-2")," ")),(0,s.kt)("h3",{id:"modis-subsets"},"MODIS SubSets"),(0,s.kt)("h2",{id:"links"},"Links"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Vegetation Index & Phenology Lab",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://hodari.ece.arizona.edu/"},"https://hodari.ece.arizona.edu/")))),(0,s.kt)("li",{parentName:"ul"},"Quality of NDVI measurement",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://gis.stackexchange.com/questions/163457/handling-mod13q1-ndvi-product-quality-assessment-qa-flags"},"https://gis.stackexchange.com/questions/163457/handling-mod13q1-ndvi-product-quality-assessment-qa-flags")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://vip.arizona.edu/documents/MODIS/MODIS_VI_UsersGuide_June_2015_C6.pdf"},"https://vip.arizona.edu/documents/MODIS/MODIS_VI_UsersGuide_June_2015_C6.pdf"))))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-r"},'\nmSSt <- function(x,ll=-2000,ul=10000,cf=0.0001,os=0,setNA=0) {\n    if (!is.na(ll))\n        x[x<ll] <- NA\n    if (!is.na(ul))\n        x[x>ul] <- NA\n\n    x<- (x*cf) + os\n    if (!is.na(setNA))\n        x[x==setNA] <- NA\n    return(x)\n}\n\narchs <- dir(sprintf("%s/mapas/Venezuela/250m_16_days_NDVI.006",gis.dir),"tif$",full.names=T)\nqrchs <- dir(sprintf("%s/mapas/Venezuela/250m_16_days_VI_Quality.006",gis.dir),"tif$",full.names=T)\n\nqry <- matrix(nrow=nrow(camaras),ncol=length(archs),\n                      dimnames=list(c(apply(unique(camaras[,1:3]),1,paste,collapse=":")),\n                          sapply(archs,function(x) strsplit(x,"\\\\.")[[1]][3])))\n\nfor (aa in archs) {\n    qa <- strsplit(aa,"\\\\.")[[1]][3]\n    qry[,qa] <-\n        as.numeric(system(sprintf("echo \'%s\'| gdallocationinfo -valonly -wgs84 %s ",paste(sprintf("%s %s",camaras$lon,camaras$lat),collapse="\\n\n"),aa),intern=T))\n}\n ndvi.camara <- mSSt(qry)\n\n\n qry <- matrix(nrow=nrow(camaras),ncol=length(qrchs),\n                       dimnames=list(c(apply(unique(camaras[,1:3]),1,paste,collapse=":")),\n                           sapply(archs,function(x) strsplit(x,"\\\\.")[[1]][3])))\n\n for (aa in qrchs) {\n     qa <- strsplit(aa,"\\\\.")[[1]][3]\n     qry[,qa] <-\n         as.numeric(system(sprintf("echo \'%s\'| gdallocationinfo -valonly -wgs84 %s ",paste(sprintf("%s %s",camaras$lon,camaras$lat),collapse="\\n"),aa),intern=T))\n }\n  viq.camara <- R.utils::intToBin(qry)\n\n ## VI quality (pixels 0 and 1) 00 produced good quality, 01 produced check QA, 10 produced but cloudy...\n ## usefulness (pixels 2-5) 0000 highest -- 1100 lowest -- 1111 not useful\n\n obj.list <- unique(c(obj.list,"ndvi.camara","viq.camara"))\n  save(file=GIS.data,list=obj.list)\n\n\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-r"},'\nsystem("mkdir ~/mapas/download/MOD13Q1")\nsetwd("~/mapas/download/MOD13Q1")\n\nif (!file.exists("fechas")) {\n    system(sprintf("wget --continue http://e4ftl01.cr.usgs.gov/MOLT/MOD13Q1.005/ --output-document index.html"))\n    system("html2text index.html |cut -d\\" \\" -f2 > fechas")\n}\nfchs <- read.csv("fechas",skip=13)\nfchs <- sub("/","",fchs[1:nrow(fchs)-1,])\n\nlistos <- c() \nif (file.exists("enlaces")) {\n    enlaces <- read.csv("enlaces",header=F,as.is=T)\n    listos <- unique(sapply(enlaces$V1,function(x) strsplit(x,"/")[[1]][6]))\n\n}\n    system("rm ii.html")\n    system("rm archs")\n\nfor (ff in fchs[!fchs %in% listos]) {\n    system(sprintf("wget --continue http://e4ftl01.cr.usgs.gov/MOLT/MOD13Q1.005/%s --output-document ii.html",ff))\n    system("html2text ii.html |cut -d\\" \\" -f5 | grep hdf > archs")\n    archs <- read.csv("archs",as.is=T,header=F)\n    for (hh in 10:12) {\n        for (vv in 7:8) {\n            lista <- sprintf("http://e4ftl01.cr.usgs.gov/MOLT/MOD13Q1.005/%s/%s",ff,grep(sprintf("h%02dv%02d",hh,vv),archs$V1,value=T))\n             cat(sprintf("%s\\n",lista),\n                 file=sprintf("enlaces.h%sv%s",hh,vv),append=T)\n\n        }\n    }\n    system("rm ii.html")\n    system("rm archs")\n}\n\n')))}d.isMDXComponent=!0}}]);