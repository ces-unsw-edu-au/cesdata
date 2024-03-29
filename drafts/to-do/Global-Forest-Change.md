# Global Forest Change

## Reference
> Hansen, M. C., P. V. Potapov, R. Moore, M. Hancher, S. A. Turubanova, A. Tyukavina, D. Thau, S. V. Stehman, S. J. Goetz, T. R. Loveland, A. Kommareddy, A. Egorov, L. Chini, C. O. Justice, and J. R. G. Townshend. 2013. *High-Resolution Global Maps of 21st-Century Forest Cover Change.* **Science** 342 (15 November): 850–53. [Data available on-line](http://earthenginepartners.appspot.com/science-2013-global-forest).


## Available data

http://www.earthenginepartners.appspot.com/science-2013-global-forest/download.html

```sh
export GISDATA=/opt/gisdb/extra-gisdata/
export SRC="https://storage.googleapis.com/earthenginepartners-hansen"
```

## Data download:

For all versions from  v1.0 (2013) to v1.7 we can use a simple bash script:

```sh

for VRS in GFC-2019-v1.7 ## GFC-2018-v1.6 GFC-2017-v1.5 GFC-2016-v1.4 GFC-2015-v1.3 GFC2015 GFC2014 GFC2013
do
    mkdir -p $GISDATA/sensores/Landsat/$VRS
    cd $GISDATA/sensores/Landsat/$VRS
    for VAR in gain lossyear treecover2000
    do
	     ##Venezuela
       ## curl -O -C - $SRC/$VRS/Hansen_${VRS}_${VAR}_[1-2]0N_0[6-8]0W.tif
       ## Americas
       curl -O -C - $SRC/$VRS/Hansen_${VRS}_${VAR}_[0-5]0[NS]_0[4-9]0W.tif
       ##NorteAmerica
       curl -O -C - $SRC/$VRS/Hansen_${VRS}_${VAR}_[0-6]0[N]_[06-16]0W.tif
    done
done
```

Or download whole set with wget:

```sh
export VRS=GFC-2019-v1.7
mkdir -p $GISDATA/sensores/Landsat/$VRS
cd $GISDATA/sensores/Landsat/$VRS
for VAR in gain lossyear treecover2000
do
  wget $SRC/$VRS/$VAR.txt
  wget -b --continue -i $VAR.txt
done

```

Builds VRT (Virtual Dataset) as a mosaic of the list of input files
```sh
export VRS=GFC-2019-v1.7
export VAR=treecover2000

cd $GISDATA/sensores/Landsat/
for VRS in GFC-2019-v1.7
do
  for VAR in gain lossyear treecover2000
  do
    gdalbuildvrt index_${VRS}_${VAR}.vrt $GISDATA/sensores/Landsat/$VRS/Hansen_${VRS}_${VAR}_*.tif
  done
done
```

## Subsets

Example for Gran Sabana in Venezuela (bbox/: -63.1 4.6 -60.5 6.6) within `10N_070W` tile, and for Suriname, last version of data:

```sh
export VRS=GFC-2019-v1.7
cd $WORKDIR
mkdir -p $WORKDIR/$VRS
for VAR in gain lossyear treecover2000 # datamask first last
do
  ## use -co "COMPRESS=LZW" for highest compression lossless ration
  gdalwarp -te -63.1 4.6 -60.5 6.6 -co "COMPRESS=LZW" $GISDATA/sensores/Landsat/index_${VRS}_${VAR}.vrt $WORKDIR/$VRS/${VRS}.GS.${VAR}.tif
  gdalwarp -te -59 1 -53 7 -co "COMPRESS=LZW" $GISDATA/sensores/Landsat/$VRS/Hansen_${VRS}_${VAR}_10N_060W.tif $WORKDIR/$VRS/${VRS}.Suriname.${VAR}.tif
done

```

For large areas spanning several tiles we can merge the files, keeping the original resolution. Examples for Venezuela, North and Central America (NAC) and South America (SAM):

```sh
export VRS=GFC-2019-v1.7
export VAR=treecover2000

cd $WORKDIR
mkdir -p $WORKDIR/$VRS

cd $GISDATA/sensores/Landsat/
gdalbuildvrt index_$(VRS)_${VAR}.vrt $GISDATA/sensores/Landsat/$VRS/Hansen_${VRS}_${VAR}_*.tif
## RROR 3: Free disk space available is 570111430656 bytes, whereas 806400000000 are at least necessary. You can disable this check by defining the CHECK_DISK_FREE_SPACE configuration option to FALSE.
## Creation failed, terminating gdal_merge.
# nohup gdal_merge.py -co "BIGTIFF=YES"  -o $WORKDIR/$VRS/${VRS}.world.${VAR}.tif $GISDATA/sensores/Landsat/$VRS/Hansen_${VRS}_${VAR}_*.tif &


gdal_merge.py -ul_lr -74 13 -59 0 -co "COMPRESS=LZW"-o ${VRS}.Venezuela.${VAR}.tif $GISDATA/sensores/Landsat/$VRS/Hansen_${VRS}_${VAR}_*N*W.tif
gdal_merge.py -ul_lr -62.70 -19.25 -54.20 -27.65 -co "COMPRESS=LZW" -o ${VRS}.Paraguay.${VAR}.tif $GISDATA/sensores/Landsat/$VRS/Hansen_${VRS}_${VAR}_*S*W.tif

gdal_merge.py -ul_lr -138 60 -40 3 -co "COMPRESS=LZW" -o ${VRS}.NAC.${VAR}.tif $GISDATA/sensores/Landsat/$VRS/Hansen_${VRS}_${VAR}_*N*W.tif

gdal_merge.py -ul_lr -90 15 -25 -60 -co "COMPRESS=LZW" -o ${VRS}.SAM.${VAR}.tif $GISDATA/sensores/Landsat/$VRS/Hansen_${VRS}_${VAR}_*W.tif
```

Or we can change the resolution
```sh
gdalwarp -te -90 -60 -25 15 -tr 0.001475 0.001475 -srcnodata "0" -dstnodata "0" -tap -r average $GISDATA/sensores/Landsat/$VRS/Hansen_${VRS}_${VAR}_*W.tif ${VRS}.SAM.${VAR}_500m.tif

gdalwarp -te -138 3 -40 60 -tr 0.001475 0.001475 -srcnodata "0" -dstnodata "0" -tap -r average $GISDATA/sensores/Landsat/$VRS/Hansen_${VRS}_${VAR}_*W.tif ${VRS}.NAC.${VAR}_500m.tif

export GISDATA=/opt/gisdb/extra-gisdata/
export VRS=GFC-2019-v1.7
export VAR=treecover2000


gdalwarp -tr 0.001475 0.001475 -srcnodata "0" -dstnodata "0" -tap -r average $GISDATA/sensores/Landsat/index_${VRS}_${VAR}.vrt  ${VRS}.world.${VAR}_500m.tif

```
