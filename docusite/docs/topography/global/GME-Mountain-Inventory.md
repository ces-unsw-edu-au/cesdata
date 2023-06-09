# GMBA Mountain Inventory

> This Global Mountain Explorer (GME) was developed for web-based browsing and visual comparisons of the K1, K2, and K3 characterizations of global mountain extents. In addition to browsing and comparing K1, K2, and K3, the GIS datalayers are available for download.

Links to:

/ [Map visualization](https://rmgsc.cr.usgs.gov/gme/)
/ [Datasets](
https://rmgsc.cr.usgs.gov/outgoing/ecosystems/Global/)


## Citation
>

## Data access

Direct download from https://rmgsc.cr.usgs.gov/outgoing/ecosystems/Global

## Data download and preparation


```sh
source ~/proyectos/CES/cesdata/env/project-env.sh


DPATH=topography/global
DNAME=GME-Mountain-Inventory

mkdir -p $GISDATA/$DPATH/$DNAME/
cd $GISDATA/$DPATH/$DNAME/

for ZIPFILE in GlobalMountainsK3Binary.zip GlobalMountainsK3Classes.zip K1_2002_1km_classes_WCMC.mpk K2_Original200mThresholdBinary_1km_GMBA.zip
do
  wget https://rmgsc.cr.usgs.gov/outgoing/ecosystems/Global/${ZIPFILE}
done
```
