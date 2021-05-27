# MODIS/Terra Land Surface Temperature/Emissivity 8-Day L3 Global 1 km SIN Grid

Version 6:
https://lpdaac.usgs.gov/products/mod11a2v006/ - 1km SIN grid
https://lpdaac.usgs.gov/products/mod11c2v006/ - 0.05 degree LL

> The MOD11A2 Version 6 product provides an average 8-day per-pixel Land Surface Temperature and Emissivity (LST&E) with a 1 kilometer (km) spatial resolution in a 1,200 by 1,200 km grid. Each pixel value in the MOD11A2 is a simple average of all the corresponding MOD11A1 LST pixels collected within that 8-day period. The 8-day compositing period was chosen because twice that period is the exact ground track repeat period of the Terra and Aqua platforms. Provided along with the daytime and nighttime surface temperature bands are associated quality control assessments, observation times, view zenith angles, and clear-sky coverages along with bands 31 and 32 emissivities from land cover types.

## Citation


> Wan, Z., Hook, S., Hulley, G. (2015). MOD11A2 MODIS/Terra Land Surface Temperature/Emissivity 8-Day L3 Global 1km SIN Grid V006 [Data set]. NASA EOSDIS Land Processes DAAC. Accessed 2021-03-30 from https://doi.org/10.5067/MODIS/MOD11A2.006


Authentication via ~/.netrc file

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh
source ~/proyectos/UNSW/cesdata/env/katana-env.sh

export MFTP=https://e4ftl01.cr.usgs.gov/
export VAR=MOD11A2
export VRS=006
export REPO=MOLT

mkdir -p $GISDATA/land-surface-temperature/global/Modis-${VAR}.${VRS}
cd  $GISDATA/land-surface-temperature/global/Modis-${VAR}.${VRS}

 wget --continue ${MFTP}${REPO}/${VAR}.${VRS}/
  sed -n 's/.*href="\([^"]*\).*/\1/p' index.html | grep ^[0-9] > links
for FECHA in $(cat links)
do
  mkdir -p $GISDATA/land-surface-temperature/global/Modis-${VAR}.${VRS}/$FECHA
  cd $GISDATA/land-surface-temperature/global/Modis-${VAR}.${VRS}/$FECHA
  wget --continue ${MFTP}${REPO}/${VAR}.${VRS}/${FECHA}
  grep hdf index.html | sed -n 's/.*href="\([^"]*\).*/\1/p' > links
  wget -b --continue -i links --base=${MFTP}${REPO}/${VAR}.${VRS}/${FECHA}
  sleep 300
done

#check:
 cd  $GISDATA/land-surface-temperature/global/Modis-${VAR}.${VRS}
grep FINISHED */wget-log*
# or check last three lines if not finished yet:
tail -n 3 */wget-log*

```

## Virtual raster datasets

```sh
ssh $zID@katana.restech.unsw.edu.au
qsub -I -l select=1:ncpus=1:mem=120gb,walltime=12:00:00

module add python/3.8.3 perl/5.28.0 gdal/3.2.1 geos/3.8.1

source ~/proyectos/UNSW/cesdata/env/project-env.sh
source ~/proyectos/UNSW/cesdata/env/katana-env.sh
cd $GISDATA/land-surface-temperature/global/Modis-MOD11A2.006/
export VAR=MOD11A2
export VRS=006

# gdalinfo 2019.01.01/MOD11A2.A2019001.h01v08.006.2019010204437.hdf

# gdalinfo HDF4_EOS:EOS_GRID:"2019.01.01/MCD12Q1.A2019001.h01v08.006.2020212125329.hdf":MODIS_Grid_8Day_1km_LST:LST_Day_1km

#This will include two variables (LST_Day_1km and LST_Night_1km)
SVAR=LST_Day_1km ## number 1
SVAR=QC_Day ## number 2
Day_view_time ## number 3
SVAR=LST_Night_1km ## number 5
SVAR=QC_Night ## number 6

for YEAR in $(seq 2000 2021)
do
   mkdir -p $GISDATA/land-surface-temperature/global/Modis-${VAR}.${VRS}/index/${YEAR}
   cd $GISDATA/land-surface-temperature/global/Modis-${VAR}.${VRS}/index/${YEAR}
   for FECHA in $(grep $YEAR $GISDATA/land-surface-temperature/global/Modis-${VAR}.${VRS}/links | sed -e s:/::g)
   do
      echo $FECHA
      [ -e index_${VAR}_${VRS}_${FECHA}_LST_Day_1km.vrt ] && echo "listo" || gdalbuildvrt index_${VAR}_${VRS}_${FECHA}_LST_Day_1km.vrt -sd 1 $GISDATA/land-surface-temperature/global/Modis-${VAR}.${VRS}/$FECHA/*hdf
      [ -e index_${VAR}_${VRS}_${FECHA}_QC_Day.vrt ] && echo "listo" || gdalbuildvrt index_${VAR}_${VRS}_${FECHA}_QC_Day.vrt -sd 2 $GISDATA/land-surface-temperature/global/Modis-${VAR}.${VRS}/$FECHA/*hdf
      [ -e index_${VAR}_${VRS}_${FECHA}_LST_Night_1km.vrt ] && echo "listo" || gdalbuildvrt index_${VAR}_${VRS}_${FECHA}_LST_Night_1km.vrt -sd 5 $GISDATA/land-surface-temperature/global/Modis-${VAR}.${VRS}/$FECHA/*hdf
      [ -e index_${VAR}_${VRS}_${FECHA}_QC_Night.vrt ] && echo "listo" || gdalbuildvrt index_${VAR}_${VRS}_${FECHA}_QC_Night.vrt -sd 6 $GISDATA/land-surface-temperature/global/Modis-${VAR}.${VRS}/$FECHA/*hdf
   done

done

export VAR=MOD11A2
export VRS=006

cd $GISDATA/land-surface-temperature/global/Modis-${VAR}.${VRS}/index/


```
