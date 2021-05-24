# Terraclimate

TerraClimate is a dataset of monthly climate and climatic water balance for global terrestrial surfaces from 1958-2019. All data have monthly temporal resolution and a ~4-km (1/24th degree) spatial resolution.

## Citation

>Abatzoglou, J.T., S.Z. Dobrowski, S.A. Parks, K.C. Hegewisch, 2018, Terraclimate, a high-resolution global dataset of monthly climate and climatic water balance from 1958-2015, Scientific Data, 5, 170191 . DOI:10.1038/sdata.2017.191

## Data access

Data and documentation is available at:
>	http://www.climatologylab.org/terraclimate.html


## Data download and preparation

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh
source ~/proyectos/UNSW/cesdata/env/katana-env.sh

mkdir -p $GISDATA/climate/global/Terraclimate
cd $GISDATA/climate/global/Terraclimate
```

### Climatologies (1961-1990 and 1981-2010; and +2C and +4C future scenarios)​

Using the data catalogs to extract all links:

```sh
mkdir -p $GISDATA/climate/global/Terraclimate/summaries
cd $GISDATA/climate/global/Terraclimate/summaries

wget http://thredds.northwestknowledge.net:8080/thredds/catalog/TERRACLIMATE_ALL/summaries/catalog.html

#xpath -q -e "//a/@href/data()" catalog.html

sed -n "s/.*href='\([^']*\).*/\1/p" catalog.html > enlaces

for GRP in TerraClimate4C TerraClimate2C TerraClimate19812010 TerraClimate19611990
do
  for VAR in ws vpd vap tmin tmax swe srad soil q ppt pet def aet
  do
    wget --continue http://thredds.northwestknowledge.net:8080/thredds/fileServer/TERRACLIMATE_ALL/summaries/${GRP}_${VAR}.nc
  done
done
```


### Variables per year

Use [wget script](http://www.climatologylab.org/wget-terraclimate.html) to download individual netCDF files for individual variables and years :

```sh
mkdir -p $GISDATA/climate/global/Terraclimate/per-year
cd $GISDATA/climate/global/Terraclimate/per-year

for VAR in PDSI ws vpd vap tmin tmax swe srad soil q ppt pet def aet
do
   mkdir -p $GISDATA/climate/Terraclimate/per-year/$VAR
   cd $GISDATA/climate/Terraclimate/per-year/$VAR
   for YEAR in $(seq 1958 2018)
   do
    wget -nc -c -nd https://climate.northwestknowledge.net/TERRACLIMATE-DATA/TerraClimate_${VAR}_${YEAR}.nc
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
