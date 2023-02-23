## 1981-2012 AVHRR NDVI3g Time Series


## references
Pinzon, JE & Tucker, CJ (2014). A Non-Stationary 1981-2012 AVHRR NDVI3g Time Series. Remote Sensing, 6(8), 6929-6960. Available online at http://www.mdpi.com/2072-4292/6/8/6929/htm.

Pinzon, JE & Tucker, CJ (2016). A Non-Stationary 1981-2015 AVHRR NDVI3g.v1 Time Series: an update. In preparation for submission to Remote Sensing.

## data availability
Originally available at  http://ecocast.arc.nasa.gov/data/pub/gimms/3g.v0/ , currently unreachable.

More information in alternative locations: http://phenology.cr.usgs.gov/ndvi_avhrr.php , https://nex.nasa.gov/nex/projects/1349/ (has moved to https://www.nasa.gov/nex)

Some instructions and recommendations in http://gis.stackexchange.com/questions/104500/how-to-create-several-header-files-to-open-avhrr-ndvi3g-gimms-files and source code of package gimms for R: https://github.com/environmentalinformatics-marburg/gimms

## Data download and processing


```sh
mkdir -p $GISDATA/sensores/AVHRR/GIMMS
cd $GISDATA/sensores/AVHRR/GIMMS

export SERVER=http://ecocast.arc.nasa.gov/data/pub/gimms/3g.v0
wget $SERVER/00FILE-LIST.txt
wget -i 00FILE-LIST.txt --continue

mkdir -p $GISDATA/sensores/AVHRR/GIMMS/nasanex
cd $GISDATA/sensores/AVHRR/GIMMS/nasanex

export SERVER=https://nasanex.s3.amazonaws.com
wget $SERVER

for file in $(xpath -q -e "//Key/text()" index.html | grep AVHRR/GIMMS/3G)
do
   wget --continue $SERVER/$file
done

echo "ENVI
description = { R-language data }
samples = 2160
lines = 4320
bands = 1
data type = 2
header offset = 0
interleave = bsq
byte order = 1" > $GISDATA/sensores/AVHRR/GIMMS/nasanex/header
```

```sh

cd $WORKDIR

ls $GISDATA/sensores/AVHRR/GIMMS/nasanex/geo*
echo 'ENVI
description = { R-language data }
samples = 2160
lines = 4320
bands = 1
data type = 2
header offset = 0
interleave = bsq
coordinate system string =
GEOGCS["GCS_WGS_1984",
DATUM["D_WGS_1984",
SPHEROID["WGS_1984",6378137.0,298.257223563]],
PRIMEM["Greenwich",0.0],
UNIT["Degree",0.0174532925199433]]
geo points = {
1.0000, 1.0000, -180, 90,
1.0000, 4321.0000, -180, -90,
2161.0000, 1.0000, 180, 90,
2161.0000, 4321.0000, 180, -90}
byte order = 1' > $GISDATA/sensores/AVHRR/GIMMS/nasanex/geo88aug15b.n09-VI3g.hdr

gdalwarp -s_srs EPSG:4326 -te -74 0 -58 13 -co "COMPRESS=DEFLATE" -to "SRC_METHOD=NO_GEOTRANSFORM" /opt/gisdata/sensores/AVHRR/GIMMS/nasanex/geo88aug15b.n09-VI3g NDVI-88aug15b.tif


```

```r
#!R --vanilla
require(gimms)

e1 <- extent(c(-74,-58,0,13))

for (map in dir("/opt/gisdata/sensores/AVHRR/GIMMS/nasanex","VI3g",full.names=T)) {
   r1 <- rasterizeGimms(map,e1)
   nms <- gsub(".n14-VI3g","",strsplit(map,"/")[[1]][8])
   if (!exists("dts")) {
      dts <- data.frame(values(r1))
      colnames(dts) <- nms
   } else {
      names(r1) <- nms
      dts[,nms ] <- values(r1)
   }
}

wks <- substr(colnames(dts),6,11)
rsm <- matrix(nrow=nrow(dts),ncol=24)
colnames(rsm) <- unique(wks)
for (w in unique(wks)) {
   rsm[,w] <- apply(dts[,wks %in% w],1,median)
}
 oo <- colnames(rsm)[order(match(substr(colnames(rsm),1,3),tolower(month.abb)))]
 ss <- apply(is.na(rsm),1,sum)==0
boxplot(rsm[ss,oo])

require(cluster)
rslt <- data.frame()
for (kk in 2:20) {
	mi.fn <- clara(rsm[ss,oo],k=kk,metric="euclidean",sampsize=500)
	rslt <- rbind(rslt,data.frame(k=kk,swd=mi.fn$silinfo$avg.width))

	}
rslt

mi.fn <- clara(rsm[ss,oo],k=11,metric="euclidean",sampsize=1000)
r0 <- r1*NA
values(r0)[ss] <-  mi.fn$clustering
par(mar=c(0,0,0,0))
plot(r0,col=brewer.pal("Paired",n=12))

plot(r0==6)
```



```r
cat(file="~/sensores/AVHRR/GIMMS/header","ENVI
description = { R-language data }
samples = 2160
lines = 4320
bands = 1
data type = 2
header offset = 0
interleave = bsq
byte order = 1")

##R --vanilla
library(caTools)
require(raster)
e <- c(-74,-58,0,13)
mptc <- "/media/jferrer/Elements/gisdata"
out.dir <- "/home/jferrer/mapas/Venezuela"
flst <- dir(sprintf("%s/sensores/AVHRR/GIMMS/",mptc),"geo")
system(sprintf("mkdir -p %s/NDVI3g/",out.dir))
system(sprintf("mkdir -p %s/NDVIfW/",out.dir))

for (ff in flst) {
    yr <- as.numeric(substr(ff,4,5))
    nn <- sprintf("A%s%02d%s",
                  ifelse(yr<15,yr+2000,yr+1900),
                  match(substr(ff,6,8),c("jan", "feb", "mar", "apr", "may",
                                         "jun", "jul", "aug", "sep", "oct",
                                         "nov", "dec")),
                  ifelse(substr(ff,9,11)=="15a","01","15"))
    fl1 <- sprintf("%s/NDVI3g/AVHRRVI3g.%s.Venezuela_NDVI.tif",out.dir,nn)
    if (!file.exists(fl1)) {

        prb <- try(read.ENVI(sprintf("%s/sensores/AVHRR/GIMMS/%s",mptc,ff),
                             sprintf("%s/sensores/AVHRR/GIMMS/header",mptc)))
        if (all(class(prb)!="try-error")) {
            eprb <- raster(t(prb),xmn=-180, xmx=180, ymn=-90, ymx=90,
                           crs="+proj=longlat +datum=WGS84")
            ndvi3g <- crop(eprb,e)
            flagW = ndvi3g-floor(ndvi3g/10)*10 + 1;
            ndvi = floor(ndvi3g/10)/1000
            values(ndvi)[values(ndvi)<0] <- NA

            writeRaster(ndvi,filename=fl1)
            writeRaster(flagW,filename=sprintf("%s/NDVIfW/AVHRRVI3g.%s.Venezuela_flagW.tif",out.dir,nn))
        }
    }
}

ndvis <- stack(dir("~/mapas/Venezuela/NDVI3g/",full.names=T))

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
