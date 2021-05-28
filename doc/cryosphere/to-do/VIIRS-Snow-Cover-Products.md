# VIIRS snow products

[User guide](https://nsidc.org/sites/nsidc.org/files/technical-references/VIIRS_snow_products_user_guide_version_8.pdf)

We select the *cloud-gap-filled (CGF) snow cover product*

## VIIRS/NPP CGF Snow Cover Daily L3 Global 375m SIN Grid, Version 1
> This data set contains daily 'cloud-free' snow cover produced from the VIIRS/NPP Snow Cover Daily L3 Global 375m SIN Grid, Version 1 snow cover product. A cloud-gap-filled algorithm is utilized to replace ‘cloud-covered’ pixels with ‘cloud-free pixels’ for the purpose of estimating the snow cover that may exist under current cloud cover. The data are provided daily and mapped to a 375 m sinusoidal grid.


https://nsidc.org/data/VNP10A1F/versions/1

### Citation
our Use and Copyright Web page.

> Riggs, G., D. K. Hall, and M. O. Román. 2019. VIIRS/NPP CGF Snow Cover Daily L3 Global 375m SIN Grid, Version 1. [Indicate subset used]. Boulder, Colorado USA. NASA National Snow and Ice Data Center Distributed Active Archive Center. doi: https://doi.org/10.5067/VIIRS/VNP10A1F.001. [Date Accessed].

### Data download
Use the "download script" button to get the python script and place it in the target folder. Add login details for earthdata in ~/.netrc as follow: `machine urs.earthdata.nasa.gov login ***** password *****`

Running the original script `python nsidc-download_VNP10A1.001_2019-11-26.py` returns 929791 matches nearly 3TB of data ! for all tiles, but if we select a bounding box: bounding_box = '92,25,99,29', only  2859 matches and 5718 files.... ca. 30 GB

So we do a manual edit to add bounding box, start and end dates, filename match, etc...

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh
source ~/proyectos/UNSW/cesdata/env/katana-env.sh

mkdir -p $GISDATA/cryosphere/global/VIIRS-VNP10A1F/
cd $GISDATA/cryosphere/global/VIIRS-VNP10A1F/
## scp nsidc-download_VNP10A1F.001_2021-05-28.py $zID@kdm.restech.unsw.edu.au:/srv/scratch/cesdata/gisdata/cryosphere/global/VIIRS-VNP10A1F

 sed -e "s/bounding_box = ''/bounding_box = 'MI_BBOX'/" -e "s/filename_filter = ''/filename_filter = 'MI_WEEK'/" -i nsidc-download_VNP10A1F.001_2021-05-28.py

```



```sh
## example for Myanmar # projection not yet working fine, these are daily products, thus more cumbersome to summarize
mkdir -p ~/tmp/alpine/Myanmar/VNP10A1
cd ~/tmp/alpine/Myanmar/VNP10A1

for k in $(ls $GISDATA/sensores/VIIRS/VNP10A1/*h26v06*h5)
do
   ##take a look at gdalinfo $k
   ## GRingLatitude=19.936034 30.043859 29.999359 19.893507
   ## GRingLongitude=84.829601 92.054376 103.93619 95.76852
   for BAND in NDSI_Snow_Cover Basic_QA
   do
      export j=$(basename $k | sed -e s/.h5$/.tif/ -e s/VNP10A1/${BAND}/)

      gdal_translate -ot Byte -of Gtiff -gcp 0 0 84.829601 19.936034 -gcp 0 3000 92.054376 30.043859 -gcp 3000 3000 103.93619 29.999359 -gcp 3000 0 95.76852 19.893507  HDF5:"${k}"://HDFEOS/GRIDS/NPP_Grid_IMG_2D/Data_Fields/${BAND} test.tif
      gdalwarp -of Gtiff -co COMPRESS=LZW -co TILED=YES -ot Byte -te 96 25 99 29   -t_srs EPSG:4326 test.tif ${j}
      rm test.tif
      done
done

##gdalwarp -of Gtiff -co COMPRESS=LZW -co TILED=YES -ot Byte -te 96 25 99 29  -s_srs "+proj=sinu +lon_0=0 +x_0=0 +y_0=0 +ellps=WGS84 +datum=WGS84 +units=m +no_defs" -t_srs EPSG:4326 HDF5:"${k}"://HDFEOS/GRIDS/NPP_Grid_IMG_2D/Data_Fields/${BAND} ${j}
```
