# GIMMS AVHRR Global NDVI 1/12-degree Geographic Lat/Lon

Some resources:
http://phenology.cr.usgs.gov/ndvi_avhrr.php
http://ecocast.arc.nasa.gov/data/pub/gimms/3g.v0/
https://nex.nasa.gov/nex/projects/1349/
http://ecocast.arc.nasa.gov/data/pub/gimms/

## Download the data

```sh
mkdir -p $GISDATA/sensores/AVHRR/GIMMS
cd $GISDATA/sensores/AVHRR/GIMMS

wget http://ecocast.arc.nasa.gov/data/pub/gimms/3g.v0/00FILE-LIST.txt
wget -i 00FILE-LIST.txt --continue
```

## Process data in R

Solution in http://gis.stackexchange.com/questions/104500/how-to-create-several-header-files-to-open-avhrr-ndvi3g-gimms-files

```r
##R --vanilla
library(caTools)
require(raster)
e <- c(-74,-58,0,13)
work.dir <- Sys.getenv("WORKDIR")
gis.data <- Sys.getenv("GISDATA")

flst <- dir("~/sensores/AVHRR/GIMMS/","geo")
system("mkdir -p ~/mapas/Venezuela/NDVI3g/")
system("mkdir -p ~/mapas/Venezuela/NDVIfW/")

cat(file="~/sensores/AVHRR/GIMMS/header","ENVI
description = { R-language data }
samples = 2160
lines = 4320
bands = 1
data type = 2
header offset = 0
interleave = bsq
byte order = 1")

for (ff in flst) {
    yr <- as.numeric(substr(ff,4,5))
    nn <- sprintf("A%s%02d%s",
                  ifelse(yr<15,yr+2000,yr+1900),
                  match(substr(ff,6,8),c("jan", "feb", "mar", "apr", "may",
                                         "jun", "jul", "aug", "sep", "oct",
                                         "nov", "dec")),
                  ifelse(substr(ff,9,11)=="15a","01","15"))
    fl1 <- sprintf("~/mapas/Venezuela/NDVI3g/AVHRRVI3g.%s.Venezuela_NDVI.tif",nn)
    if (!file.exists(fl1)) {

        prb <- try(read.ENVI(sprintf("~/sensores/AVHRR/GIMMS/%s",ff),
                             "~/sensores/AVHRR/GIMMS/header"))
        if (all(class(prb)!="try-error")) {
            eprb <- raster(t(prb),xmn=-180, xmx=180, ymn=-90, ymx=90,
                           crs="+proj=longlat +datum=WGS84")
            ndvi3g <- crop(eprb,e)
            flagW = ndvi3g-floor(ndvi3g/10)*10 + 1;
            ndvi = floor(ndvi3g/10)/1000
            values(ndvi)[values(ndvi)<0] <- NA

            writeRaster(ndvi,filename=fl1)
            writeRaster(flagW,filename=sprintf("~/mapas/Venezuela/NDVIfW/AVHRRVI3g.%s.Venezuela_flagW.tif",nn))
        }
    }
}
```

```r
##R --vanilla
library(caTools)
require(raster)
e <- c(-74,-58,0,13)
work.dir <- Sys.getenv("WORKDIR")
gis.data <- Sys.getenv("GISOUT")

ndvis <- stack(dir(sprintf("%s/mapas/Venezuela/NDVI3g/",gis.data),full.names=T))

tt <- as.numeric(substr(names(ndvis),12,15)) + (cumsum(c(0,31,28,31,30,31,30,31,31,30,31,30,31))[as.numeric(substr(names(ndvis),16,17))] + as.numeric(substr(names(ndvis),18,19)))/365

qry <- t(extract(ndvis,data.frame(-68.95206,10.79257)))

##ndvi80 <- stack(dir("~/mapas/Venezuela/NDVI3g/","198",full.names=T))
##plot(ndvi80)
##qry <- t(extract(ndvi80,data.frame(-68.95206,10.79257)))

plot(tt,qry,type="l",
     xlab="Año",ylab="Indice de vegetación de diferencias normalizadas")

qry <- t(extract(ndvis,data.frame(-60.81398,5.851432)))

tt <- ts(qry,start=c(1981,13),frequency=24)
plot(tt,ylim=c(0,1))
dlt <- decompose(tt)

plot(tt,ylim=c(0,1),col="grey47",lty=3)
lines(dlt$trend+dlt$seasonal,lwd=1,col=4)
lines(dlt$trend,lwd=2,col=2)


qr2 <- t(extract(ndvis,data.frame(-60.91389,5.28917)))

t2 <- ts(qr2,start=c(1981,13),frequency=24)
dl2 <- decompose(t2)

plot(t2,ylim=c(0,1),col="grey47",lty=3)
lines(dl2$trend+dl2$seasonal,lwd=1,col=4)
lines(dl2$trend,lwd=2,col=2)

##cd ~/dev/
##svn checkout svn://r-forge.r-project.org/svnroot/greenbrown/
##cd ~/dev/greenbrown/pkg/
##sudo R CMD INSTALL --html greenbrown --resave-data

require(greenbrown)
trd <- TrendSTM(t2,h=48/length(t2))
plot(trd)
trd <- TrendSTM(tt)
plot(trd)

STMmap <- TrendRaster(ndvis, start=c(1981, 13), freq=24, method="STM", breaks=0)
plot(STMmap,2,col=brgr.colors(9))
STMmap.cl <- TrendClassification(STMmap, min.length=(8*12))
plot(STMmap.cl, col=brgr.colors(3), main="Method STM")
plot(STMmap<0.05,3)
plot(STMmap.cl*(raster(STMmap,3)<0.05), col=brgr.colors(3), main="Method STM")
```
