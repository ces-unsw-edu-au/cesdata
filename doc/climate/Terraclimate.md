# Terraclimate


## Citation

>

## Data access

Data is available at:
>
Documentation:

Metadata:


## Data download and preparation


```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh
source ~/proyectos/UNSW/cesdata/env/katana-env.sh

mkdir -p $GISDATA/climate/Terraclimate
cd $GISDATA/climate/Terraclimate

wget http://thredds.northwestknowledge.net:8080/thredds/catalog/TERRACLIMATE_ALL/summaries/catalog.html

#xpath -q -e "//a/@href/data()" catalog.html

sed -n "s/.*href='\([^']*\).*/\1/p" catalog.html > enlaces

mkdir -p $GISDATA/climate/Terraclimate/summaries
cd $GISDATA/climate/Terraclimate/summaries
for GRP in TerraClimate4C TerraClimate2C TerraClimate19812010 TerraClimate19611990
do
  for VAR in ws vpd vap tmin tmax swe srad soil q ppt pet def aet
  do
    wget --continue http://thredds.northwestknowledge.net:8080/thredds/fileServer/TERRACLIMATE_ALL/summaries/${GRP}_${VAR}.nc
  done
done
```






```sh

cd $WORKDIR
gdalinfo $GISDATA/climate/Terraclimate/TerraClimate19812010_ppt.nc

for VAR in ws vpd vap tmin tmax swe srad soil q ppt pet def aet
do
 gdalwarp NETCDF:$GISDATA/climate/Terraclimate/TerraClimate19812010_${VAR}.nc:${VAR} -t_srs EPSG:4326 -te -74 0 -58 13 -of 'GTiff' TerraClimate_${VAR}.tif
done
```

```r
require(RColorBrewer)
require(cluster)
require(raster)

##r0 <- stack("TerraClimate_vap.tif")
##r0 <- stack("TerraClimate_soil.tif")
r0 <- stack("TerraClimate_def.tif")
r1 <- stack("TerraClimate_ppt.tif")
r2 <- stack("TerraClimate_tmin.tif")
r3 <- stack("TerraClimate_tmax.tif")
 dts <- cbind(values(r0),values(r1),values(r2),values(r3))
 ss <- apply(is.na(dts),1,sum)==0
boxplot(dts[ss,])

rslt <- data.frame()
for (kk in 2:20) {
	mi.fn <- clara(dts[ss,],k=kk,metric="euclidean",sampsize=500)
	rslt <- rbind(rslt,data.frame(k=kk,swd=mi.fn$silinfo$avg.width))

	}
rslt

mi.fn <- clara(dts[ss,],k=19,metric="euclidean",sampsize=1000)
rP <- raster(r1,1)*NA
values(rP)[ss] <-  mi.fn$clustering
par(mar=c(0,0,0,0))
plot(rP,col=brewer.pal("Paired",n=12))
writeRaster(rP,"clusterTerraClimate.tif")

plot(r0==6)

```
