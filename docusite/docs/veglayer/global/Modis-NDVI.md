---
title: "MODIS Vegetation Index Products"
description: "MODIS Vegetation Index Products (NDVI and EVI)"
tags: [deforestation, Venezuela, Gran Sabana]
---

> MODIS vegetation indices, produced on 16-day intervals and at multiple spatial resolutions, provide consistent spatial and temporal comparisons of vegetation canopy greenness, a composite property of leaf area, chlorophyll and canopy structure.

## Versions

- MOD13Q1 v061 (Version 6.1) is the current version.
- MOD13Q1 Version 6 (2015, decommissioned on July 31, 2023). 

## Citation

> Huete, A., Didan, K., Miura, T., Rodriguez, E. P., Gao, X., & Ferreira, L. G. (2002). Overview of the radiometric and biophysical performance of the MODIS vegetation indices. In Remote Sensing of Environment (Vol. 83, Issues 1–2, pp. 195–213). Elsevier BV. https://doi.org/10.1016/s0034-4257(02)00096-2 

### MODIS SubSets

 ## Links 
 - Vegetation Index & Phenology Lab
    - https://hodari.ece.arizona.edu/
 - Quality of NDVI measurement
    - https://gis.stackexchange.com/questions/163457/handling-mod13q1-ndvi-product-quality-assessment-qa-flags
    - https://vip.arizona.edu/documents/MODIS/MODIS_VI_UsersGuide_June_2015_C6.pdf

```r

mSSt <- function(x,ll=-2000,ul=10000,cf=0.0001,os=0,setNA=0) {
    if (!is.na(ll))
        x[x<ll] <- NA
    if (!is.na(ul))
        x[x>ul] <- NA

    x<- (x*cf) + os
    if (!is.na(setNA))
        x[x==setNA] <- NA
    return(x)
}

archs <- dir(sprintf("%s/mapas/Venezuela/250m_16_days_NDVI.006",gis.dir),"tif$",full.names=T)
qrchs <- dir(sprintf("%s/mapas/Venezuela/250m_16_days_VI_Quality.006",gis.dir),"tif$",full.names=T)

qry <- matrix(nrow=nrow(camaras),ncol=length(archs),
                      dimnames=list(c(apply(unique(camaras[,1:3]),1,paste,collapse=":")),
                          sapply(archs,function(x) strsplit(x,"\\.")[[1]][3])))

for (aa in archs) {
    qa <- strsplit(aa,"\\.")[[1]][3]
    qry[,qa] <-
        as.numeric(system(sprintf("echo '%s'| gdallocationinfo -valonly -wgs84 %s ",paste(sprintf("%s %s",camaras$lon,camaras$lat),collapse="\n
"),aa),intern=T))
}
 ndvi.camara <- mSSt(qry)


 qry <- matrix(nrow=nrow(camaras),ncol=length(qrchs),
                       dimnames=list(c(apply(unique(camaras[,1:3]),1,paste,collapse=":")),
                           sapply(archs,function(x) strsplit(x,"\\.")[[1]][3])))

 for (aa in qrchs) {
     qa <- strsplit(aa,"\\.")[[1]][3]
     qry[,qa] <-
         as.numeric(system(sprintf("echo '%s'| gdallocationinfo -valonly -wgs84 %s ",paste(sprintf("%s %s",camaras$lon,camaras$lat),collapse="\n"),aa),intern=T))
 }
  viq.camara <- R.utils::intToBin(qry)

 ## VI quality (pixels 0 and 1) 00 produced good quality, 01 produced check QA, 10 produced but cloudy...
 ## usefulness (pixels 2-5) 0000 highest -- 1100 lowest -- 1111 not useful

 obj.list <- unique(c(obj.list,"ndvi.camara","viq.camara"))
  save(file=GIS.data,list=obj.list)


```

```r

system("mkdir ~/mapas/download/MOD13Q1")
setwd("~/mapas/download/MOD13Q1")

if (!file.exists("fechas")) {
    system(sprintf("wget --continue http://e4ftl01.cr.usgs.gov/MOLT/MOD13Q1.005/ --output-document index.html"))
    system("html2text index.html |cut -d\" \" -f2 > fechas")
}
fchs <- read.csv("fechas",skip=13)
fchs <- sub("/","",fchs[1:nrow(fchs)-1,])

listos <- c() 
if (file.exists("enlaces")) {
    enlaces <- read.csv("enlaces",header=F,as.is=T)
    listos <- unique(sapply(enlaces$V1,function(x) strsplit(x,"/")[[1]][6]))

}
    system("rm ii.html")
    system("rm archs")

for (ff in fchs[!fchs %in% listos]) {
    system(sprintf("wget --continue http://e4ftl01.cr.usgs.gov/MOLT/MOD13Q1.005/%s --output-document ii.html",ff))
    system("html2text ii.html |cut -d\" \" -f5 | grep hdf > archs")
    archs <- read.csv("archs",as.is=T,header=F)
    for (hh in 10:12) {
        for (vv in 7:8) {
            lista <- sprintf("http://e4ftl01.cr.usgs.gov/MOLT/MOD13Q1.005/%s/%s",ff,grep(sprintf("h%02dv%02d",hh,vv),archs$V1,value=T))
             cat(sprintf("%s\n",lista),
                 file=sprintf("enlaces.h%sv%s",hh,vv),append=T)

        }
    }
    system("rm ii.html")
    system("rm archs")
}

```