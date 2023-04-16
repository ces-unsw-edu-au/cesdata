> The NASA Making Earth System Data Records for Use in Research Environments (MEaSUREs) Vegetation Index and Phenology (VIP) global datasets were created using surface reflectance data from the Advanced Very High Resolution Radiometer (AVHRR) N07, N09, N11, and N14 datasets (1981 – 1999) and Moderate Resolution Imaging Spectroradiometer (MODIS)/Terra MOD09 surface reflectance data (2000 - 2014). The VIP Vegetation Index (VI) product was developed to provide consistent measurements of the Normalized Difference Vegetation Index (NDVI) and modified Enhanced Vegetation Index (EVI2) spanning more than 30 years of data from multiple sensors. The EVI2 is a backward extension of AVHRR. Vegetation indices such as NDVI and EVI2 are useful for assessing the biophysical properties of the land surface, and are used to characterize vegetation phenology. Phenology tracks the seasonal life cycle of vegetation, and provides information on the biotic response to environmental changes. The VIPPHEN data product is provided globally at 0.05 degree (5600 meter) spatial resolution in geographic (Lat/Lon) grid format. The data are stored in Hierarchical Data Format-Earth Observing System (HDF-EOS) file format. The VIPPHEN phenology product contains 26 Science Datasets (SDS) which include phenological metrics such as the start, peak, and end of season as well as the rate of greening and senescence. The product also provides the maximum, average, and background calculated VIs. The VIPPHEN SDS are based on the daily VIP product series and are calculated using a 3-year moving window average to smooth out noise in the data. A reliability SDS is included to provide context on the quality of the input data.

## URLs
https://lpdaac.usgs.gov/products/vipphen_ndviv004/
https://cmr.earthdata.nasa.gov/search/concepts/C1328419564-LPDAAC_ECS.html

See also graphical description in: https://lpdaac.usgs.gov/documents/637/VNP22_User_Guide_V1.pdf (although this is related to a different dataset)

## References

For North America:
> White MA, BEURS D, Kirsten M, DIDAN K, INOUYE DW, RICHARDSON AD, JENSEN OP, O'KEEFE JO, ZHANG G, NEMANI RR, LEEUWEN V. Intercomparison, interpretation, and assessment of spring phenology in North America estimated from remote sensing for 1982–2006. Global Change Biology. 2009 Oct 1;15(10):2335-59.



```sh
mkdir -p $GISDATA/sensores/VIPPHEN-NDVI
cd $GISDATA/sensores/VIPPHEN-NDVI
mv ~/Downloads/4656797354-download.sh  $GISDATA/sensores/VIPPHEN-NDVI
chmod 777 $GISDATA/sensores/VIPPHEN-NDVI/4656797354-download.sh
./4656797354-download.sh



for k in "Start of Season 1" "End of Season 1" "Length of Season 1" "Day of Peak Season 1" "Rate of Greening Season 1" "Rate of Senescence Season 1" "Max VI Season 1" "Start of Season 2" "End of Season 2" "Length of Season 2" "Day of Peak Season 2" "Rate of Greening Season 2" "Rate of Senescence Season 2" "Max VI Season 2" "Start of Season 3" "End of Season 3" "Length of Season 3" "Day of Peak Season 3" "Rate of Greening Season 3" "Rate of Senescence Season 3" "Max VI Season 3" "Cumulative VI" "Average VI" "Background VI" "Number of Seasons" "Reliability"
do
   gdallocationinfo -xml -geoloc  HDF4_EOS:EOS_GRID:"${GISDATA}/sensores/VIPPHEN-NDVI/VIPPHEN_NDVI.A2014.004.2016180135355.hdf:VIP_CMG_GRID:${k}" -49.302800 -11.31810000
done


for j in $(ls ${GISDATA}/sensores/VIPPHEN-NDVI/*hdf)
do
   gdallocationinfo -xml -geoloc  HDF4_EOS:EOS_GRID:"${j}:VIP_CMG_GRID:${k}" -49.302800 -11.31810000
done

```

Transform to geotiff

```sh
cd $WORKDIR
for k in "Start of Season 1" "End of Season 1" "Length of Season 1" "Day of Peak Season 1" "Rate of Greening Season 1" "Rate of Senescence Season 1" "Max VI Season 1" "Start of Season 2" "End of Season 2" "Length of Season 2" "Day of Peak Season 2" "Rate of Greening Season 2" "Rate of Senescence Season 2" "Max VI Season 2" "Start of Season 3" "End of Season 3" "Length of Season 3" "Day of Peak Season 3" "Rate of Greening Season 3" "Rate of Senescence Season 3" "Max VI Season 3" "Cumulative VI" "Average VI" "Background VI" "Number of Seasons" "Reliability"
do
   g=$(echo $k|sed -e "s/ /-/g")
   gdal_translate HDF4_EOS:EOS_GRID:"${GISDATA}/sensores/VIPPHEN-NDVI/VIPPHEN_NDVI.A2014.004.2016180135355.hdf:VIP_CMG_GRID:${k}" VIPPHEN_NDVI.A2014.${g}.tif
done
```

```r
require(raster)
r0 <- raster("VIPPHEN_NDVI.A2014.Average-VI.tif")
plot(r0)
plot(r0>5000)

r1 <- raster("VIPPHEN_NDVI.A2014.Cumulative-VI.tif")
values(r1)[values(r1)<0] <- NA

r2 <- raster("VIPPHEN_NDVI.A2014.Max-VI-Season-1.tif")
 values(r2)[values(r2)<0] <- NA

plot(r1)
plot(r2)
 r1 <- raster("VIPPHEN_NDVI.A2014.Start-of-Season-1.tif")
plot(r1)
```
