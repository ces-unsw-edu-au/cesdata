##R --vanilla
##
##https://lpdaac.usgs.gov/data_access/data_pool

## ver sensores_Modis_listaDownload.R ## junio 2016


##system("split -l300 enlaces enlz")
## grep h11v07 enlaces > enlaces.h11v7
## grep A2003 enlaces.h11v7 > enlaces.h11v7.2003

##ls hdfs/ > listos
## grep -vf listos enlaces.h11v8 > faltan.h11v8
## grep -vf listos enlaces.h11v7 > faltan.h11v7
## grep -vf listos enlaces.h12v7 > faltan.h12v7
## grep -vf listos enlaces.h10v7 > faltan.h10v7


for (yr in 2002:2009)
    system(sprintf("grep A%1$s enlaces.h10v8 > enlaces.h10v8.%1$s",yr))
system("mkdir ~/mapas/download/MOD13Q1/hdfs")
setwd("~/mapas/download/MOD13Q1/hdfs")

## bash for loop
##ls hdfs/ > listos
##for i in {2000..2015}
##do
##  grep -h A$i enlaces.* >enlaces.A$i
##  grep -vf listos enlaces.A$i > faltan.A$i
##done
##ls -lah faltan.A*
##grep -h A2005 enlaces.* >enlaces.A2005
##grep -h A2007 enlaces.* >enlaces.A2007
## 
## grep -vf listos enlaces.A2007 > faltan.A2007

##R --vanilla
setwd("~/mapas/download/MOD13Q1/hdfs")
setwd("/media/mapoteca/HD-E1/ModisSS/download/MOD13Q1/hdfs/")
setwd("/media/jferrer/HD-E1/ModisSS/download/MOD13Q1/hdfs/")

dir(pattern="hdf$")
mptc <- "~/mapas/Venezuela"



for (yr in c(2000:2015)) {
    for (mn in seq(1,365,by=8)) {
        for (variable in c("250m 16 days NDVI","250m 16 days EVI","250m 16 days VI Quality","250m 16 days red reflectance","250m 16 days NIR reflectance","250m 16 days blue reflectance","250m 16 days MIR reflectance","250m 16 days view zenith angle","250m 16 days sun zenith angle","250m 16 days relative azimuth angle","250m 16 days composite day of the year","250m 16 days pixel reliability")[1:3]) {
            if (!file.exists(sprintf("%s/%s/",mptc,gsub(" ","_",variable))))
                system(sprintf("mkdir %s/%s/",mptc,gsub(" ","_",variable)))
            arch <- sprintf("%1$s/%4$s/MOD13Q1.A%2$s%3$03d.Venezuela_%4$s.tif",mptc,yr,mn,gsub(" ","_",variable))
            if (!file.exists(arch)) {
                hs <- dir(pattern=sprintf("A%s%03d",yr,mn))
                hs <- grep("hdf$",hs,value=T)
                if (length(hs)>5) {
                    system(sprintf("gdalwarp -te -74 0 -58 13 -t_srs \"+proj=longlat +datum=WGS84\" %s %s",paste("HDF4_EOS:EOS_GRID:\"",hs,"\":MODIS_Grid_16DAY_250m_500m_VI:'",variable,"'",sep="",collapse=" "),arch))
                }
            }
        }
    }
}

##cd ~/mapas/download/MOD13Q1
##tar -cjf MOD13Q1.A2000.tar.bz2 hdfs/MOD13Q1.A2000*
##rm hdfs/MOD13Q1.A2000*

setwd("~/mapas")
system("tar -cjvf 20150705.Venezuela.PET_1km.tar.bz2 Venezuela/PET_1km/")
system("tar -cjvf 20150705.Venezuela.ET_1km.tar.bz2 Venezuela/ET_1km/")
system("tar -cjvf 20150705.Venezuela.PLE_1km.tar.bz2 Venezuela/PLE_1km/")
system("tar -cjvf 20150705.Venezuela.LE_1km.tar.bz2 Venezuela/LE_1km/")

require(raster)
r0=raster(sprintf("~/mapas/Venezuela/ET_1km/MOD16A2.A%sM%02d.Venezuela_ET_1km.tif",yr,mn))

source("~/Dropbox/Mapoteca/inc/inc00_funciones.R")
##chequear MOD16_global_evapotranspiration_description.pdf
tmp <- mSSt(values(r0), ll=-32767,ul=32700,cf=0.1,os=0,setNA=0)
values(r0) <- tmp
plot(r0)
