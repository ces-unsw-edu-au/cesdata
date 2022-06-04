# MODIS GPP/NPP Project (MOD17)



https://lpdaac.usgs.gov/products/mod17a3hgfv061/
Product ID: MOD17A3HGF v061

The MOD17A3HGF Version 6.1 product provides information about annual Gross and Net Primary Production (GPP and NPP) at 500 meter (m) pixel resolution. Annual Terra Moderate Resolution Imaging Spectroradiometer (MODIS) GPP and NPP is derived from the sum of all 8-day GPP Net Photosynthesis (PSN) products (MOD17A2H) from the given year. The PSN value is the difference of the GPP and the Maintenance Respiration (MR).

The MOD17A3HGF will be generated at the end of each year when the entire yearly 8-day MOD15A2H is available. Hence, the gap-filled MOD17A3HGF is the improved MOD17, which has cleaned the poor-quality inputs from 8-day Leaf Area Index and Fraction of Photosynthetically Active Radiation (LAI/FPAR) based on the Quality Control (QC) label for every pixel. If any LAI/FPAR pixel did not meet the quality screening criteria, its value is determined through linear interpolation. However, users cannot get MOD17A3HGF in near-real time because it will be generated only at the end of a given year.
## Citation
> Running, S., Zhao, M. (2021). MODIS/Terra Net Primary Production Gap-Filled Yearly L4 Global 500m SIN Grid V061 [Data set]. NASA EOSDIS Land Processes DAAC. Accessed 2022-06-04 from https://doi.org/10.5067/MODIS/MOD17A3HGF.061

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh

export MFTP=https://e4ftl01.cr.usgs.gov/
export VAR=MOD17A3HGF
export VRS=061
export REPO=MOLT



mkdir -p $GISDATA/veglayer/global/GPP/Modis/${VAR}/${VRS}
cd $GISDATA/veglayer/global/GPP/Modis/${VAR}/${VRS}

for YEAR in $(seq 2001 2005)
do
  export FECHA=${YEAR}.01.01
  mkdir -p $GISDATA/veglayer/global/GPP/Modis/${VAR}/${VRS}/$FECHA
  cd $GISDATA/veglayer/global/GPP/Modis/${VAR}/${VRS}/$FECHA
  wget --user=$EARTHDATAUSR --password=$EARTHDATAPWD --continue ${MFTP}${REPO}/${VAR}.${VRS}/${FECHA}
  grep hdf $FECHA | sed -n 's/.*href="\([^"]*\).*/\1/p' > links
  wget -b --user=$EARTHDATAUSR --password=$EARTHDATAPWD --continue -i links --base=${MFTP}${REPO}/${VAR}.${VRS}/${FECHA}/
done

#check:
 cd  $GISDATA/veglayer/global/GPP/Modis/${VAR}/${VRS}
grep FINISHED */wget-log
# or check last three lines if not finished yet:
tail -n 3 */wget-log



```



## Virtual raster datasets

For Subdataset 1: LC type 1 (IGBP)

```sh

module add python/3.8.3 perl/5.28.0 gdal/3.2.1 geos/3.8.1

source ~/proyectos/UNSW/cesdata/env/project-env.sh

export MFTP=https://e4ftl01.cr.usgs.gov/
export VAR=MOD17A3HGF
export VRS=061
export REPO=MOLT
cd  $GISDATA/veglayer/global/GPP/Modis/${VAR}/${VRS}



gdalinfo 2021.01.01/MOD17A3HGF.A2021001.h10v02.061.2022020140837.hdf

gdalinfo HDF4_EOS:EOS_GRID:"2021.01.01/MOD17A3HGF.A2021001.h10v02.061.2022020140837.hdf":MOD_Grid_MOD17A3H:Npp_500m

## all subdatasets in one vrt?
 export FECHA=${YEAR}.01.01
  gdalbuildvrt index_${VAR}_${VRS}_${FECHA}.vrt $GISDATA/landcover/global/Modis/MCD12Q1.006/$FECHA/*hdf

for YEAR in $(seq 2001 2021)
do
  export FECHA=${YEAR}.01.01
  gdalbuildvrt index_${VAR}_${VRS}_${FECHA}.vrt $GISDATA/veglayer/global/GPP/Modis/${VAR}/${VRS}/$FECHA/*hdf
done

# if we want to separate them, then need to match names with number:
# for VAR in LC_Type1 LC_Type2 LC_Type3 LC_Type4 LC_Type5 LC_Prop1_Assessment LC_Prop2_Assessment LC_Prop3_Assessment LC_Prop1 LC_Prop2 LC_Prop3 QC LW
# gdalbuildvrt index_${VAR}_${VRS}_${FECHA}_${VAR}.vrt $GISDATA/sensores/Modis/MCD12Q1.006/$FECHA/*hdf -sd 1


```

## Additional links

https://www.ntsg.umt.edu/project/modis/mod17.php

https://www.ntsg.umt.edu/project/modis/user-guides/mod17c61usersguidev11mar112021.pdf
