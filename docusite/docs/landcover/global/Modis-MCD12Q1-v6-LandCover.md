# Global mosaics of the standard MODIS land cover type data

http://glcf.umd.edu/data/lc/

Version 6:
https://lpdaac.usgs.gov/products/mcd12q1v006/

## Citation

Data set development attribution:

> Channan, S., K. Collins, and W. R. Emanuel. 2014. Global mosaics of the standard MODIS land cover type data. University of Maryland and the Pacific Northwest National Laboratory, College Park, Maryland, USA.

MODIS standard data product attribution:
> Friedl, M.A., D. Sulla-Menashe, B. Tan, A. Schneider, N. Ramankutty, A. Sibley and X. Huang (2010), MODIS Collection 5 global land cover: Algorithm refinements and characterization of new datasets, 2001-2012, Collection 5.1 IGBP Land Cover, Boston University, Boston, MA, USA

For version 6:
> Friedl, M., Sulla-Menashe, D. (2019). MCD12Q1 MODIS/Terra+Aqua Land Cover Type Yearly L3 Global 500m SIN Grid V006 [Data set]. NASA EOSDIS Land Processes DAAC. Accessed 2020-09-05 from https://doi.org/10.5067/MODIS/MCD12Q1.006


```sh
source ~/proyectos/CES/cesdata/env/project-env.sh


mkdir -p $GISDATA/landcover/global/Modis/MCD12Q1.006
cd  $GISDATA/landcover/global/Modis/MCD12Q1.006
export MFTP=https://e4ftl01.cr.usgs.gov/
export VAR=MCD12Q1
export VRS=006
export REPO=MOTA

for YEAR in $(seq 2001 2019)
do
  export FECHA=${YEAR}.01.01
  mkdir -p $GISDATA/landcover/global/Modis/MCD12Q1.006/$FECHA
  cd $GISDATA/landcover/global/Modis/MCD12Q1.006/$FECHA
  wget --user=$EARTHDATAUSR --password=$EARTHDATAPWD --continue ${MFTP}${REPO}/${VAR}.${VRS}/${FECHA}
  grep hdf $FECHA | sed -n 's/.*href="\([^"]*\).*/\1/p' > links
  wget -b --user=$EARTHDATAUSR --password=$EARTHDATAPWD --continue -i links --base=${MFTP}${REPO}/${VAR}.${VRS}/${FECHA}/
done

#check:
 cd  $GISDATA/landcover/global/Modis/MCD12Q1.006
grep FINISHED */wget-log
# or check last three lines if not finished yet:
tail -n 3 */wget-log

```

## Virtual raster datasets

For Subdataset 1: LC type 1 (IGBP)

```sh

module add python/3.8.3 perl/5.28.0 gdal/3.2.1 geos/3.8.1

source ~/proyectos/CES/cesdata/env/project-env.sh

cd  $GISDATA/landcover/global/Modis/MCD12Q1.006
export VAR=MCD12Q1
export VRS=006

gdalinfo 2019.01.01/MCD12Q1.A2019001.h01v08.006.2020212125329.hdf

gdalinfo HDF4_EOS:EOS_GRID:"2019.01.01/MCD12Q1.A2019001.h01v08.006.2020212125329.hdf":MCD12Q1:LC_Type1

## all subdatasets in one vrt?
 export FECHA=${YEAR}.01.01
  gdalbuildvrt index_${VAR}_${VRS}_${FECHA}.vrt $GISDATA/landcover/global/Modis/MCD12Q1.006/$FECHA/*hdf

for YEAR in $(seq 2001 2019)
do
  export FECHA=${YEAR}.01.01
  gdalbuildvrt index_${VAR}_${VRS}_${FECHA}.vrt $GISDATA/landcover/global/Modis/MCD12Q1.006/$FECHA/*hdf

done

# if we want to separate them, then need to match names with number:
# for VAR in LC_Type1 LC_Type2 LC_Type3 LC_Type4 LC_Type5 LC_Prop1_Assessment LC_Prop2_Assessment LC_Prop3_Assessment LC_Prop1 LC_Prop2 LC_Prop3 QC LW
# gdalbuildvrt index_${VAR}_${VRS}_${FECHA}_${VAR}.vrt $GISDATA/sensores/Modis/MCD12Q1.006/$FECHA/*hdf -sd 1


```

### Legend

```sh
| Value | Label | Description |
|---|---|---|
| 1	| Evergreen Needleleaf forest | Dominated by evergreen conifer trees (canopy>2m). Tree cover >60%. |
| 2 |	Evergreen Broadleaf forest | Dominated by evergreen broadleaf and palmate trees (canopy >2m). Tree cover >60%. |
| 3 |	Deciduous Needleleaf forest | Dominated by deciduous needleleaf (larch) trees (canopy >2m). Tree cover >60%. |
| 4 |	Deciduous Broadleaf forest | Dominated by deciduous broadleaf trees (canopy >2m). Tree cover >60%. |
| 5 |	Mixed forest | Dominated by neither deciduous nor evergreen (40-60% of each) tree type (canopy >2m). Tree cover >60%. |
| 6 |	Closed shrublands | Dominated by woody perennials (1-2m height) >60% cover. |
| 7 |	Open shrublands | Dominated by woody perennials (1-2m height) 10-60% cover. |
| 8 |	Woody savannas | Tree cover 30-60% (canopy >2m). |
| 9 |	Savannas | Tree cover 10-30% (canopy >2m). |
| 10 |	Grasslands | Dominated by herbaceous annuals (<2m). |
| 11 |	Permanent wetlands | Permanently inundated lands with 30-60% water cover and >10% vegetated cover. |
| 12 |	Croplands | At least 60% of area is cultivated cropland. |
| 13 |	Urban and built-up |  At least 30% impervious surface area including building materials, asphalt, and vehicles.
| 14 |	Cropland/Natural vegetation mosaic | Mosaics of small-scale cultivation 40-60% with natural tree, shrub, or herbaceous vegetation. |
| 15 |	Snow and ice |  At least 60% of area is covered by snow and ice for at least 10 months of the year. |
| 16 |	Barren or sparsely vegetated | At least 60% of area is non-vegetated barren (sand, rock, soil) areas with less than 10% vegetation. |
| 17 |	Water bodies | At least 60% of area is covered by permanent water bodies. |
| 255 |	Unclassified | Has not received a map label because of missing inputs |
```