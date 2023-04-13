# Global Distribution of Mangroves USGS, version 1.3

> This dataset shows the global distribution of mangrove forests, derived from earth observation satellite imagery. The dataset was created using Global Land Survey (GLS) data and the Landsat archive. Approximately 1,000 Landsat scenes were interpreted using hybrid supervised and unsupervised digital image classification techniques. See Giri et al. (2011) for full details.


## Citation

> Giri C, Ochieng E, Tieszen LL, Zhu Z, Singh A, Loveland T, Masek J, Duke N (2011). *Status and distribution of mangrove forests of the world using earth observation satellite data* (version 1.3, updated by UNEP-WCMC). **Global Ecology and Biogeography** 20: 154-159. doi: [10.1111/j.1466-8238.2010.00584.x] .

> Giri, C., E. Ochieng, L.L.Tieszen, Z. Zhu, A. Singh, T. Loveland, J. Masek, and N. Duke. 2013. **Global Mangrove Forests Distribution, 2000**. Palisades, NY: NASA Socioeconomic Data and Applications Center (SEDAC). https://doi.org/10.7927/H4J67DW8. Accessed DAY MONTH YEAR


## Data access
Available at WCMC:
http://data.unep-wcmc.org/datasets/4

Available at SEDAC:
https://sedac.ciesin.columbia.edu/data/set/lulc-global-mangrove-forests-distribution-2000


## Data download and preparation

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh


mkdir -p $GISDATA/ecosystems/global/WCMC-mangroves-2000
cd $GISDATA/ecosystems/global/WCMC-mangroves-2000

wget --continue http://wcmc.io/WCMC_010 --output-document=WCMC-mangroves-2000.zip

```

Check download and use `makevalid` to avoid problems when intersecting this layer
```sh
unzip $GISDATA/ecosystems/global/WCMC-mangroves-2000/WCMC-mangroves-2000.zip

tree WCMC010_MangrovesUSGS2011_v1_4/

# qsub -I -l select=1:ncpus=12:mem=120gb,walltime=24:00:00

source ~/proyectos/UNSW/cesdata/env/project-env.sh

module add sqlite/3.31.1 spatialite/5.0.0b0 python/3.8.3 perl/5.28.0 gdal/3.2.1 geos/3.8.1

export WD=$GISDATA/ecosystems/global/WCMC-mangroves-2000/
export OUTPUT=$WD/USGS-valid-output
mkdir -p $OUTPUT
cd $OUTPUT
if [ $(ogrinfo --version | grep "GDAL 3.2" -c) -eq 1 ]
 then
    ogr2ogr -f "GPKG" MangroveUSGS2011_valid.gpkg $WD/WCMC010_MangrovesUSGS2011_v1_4/01_Data/14_001_WCMC010_MangroveUSGS2011_v1_4.shp 14_001_WCMC010_MangroveUSGS2011_v1_4 -nlt PROMOTE_TO_MULTI -makevalid
 else
    echo " ogr version does not support -makevalid flag"
    ##ogr2ogr -f "GPKG" GMW_${YEAR}_valid.gpkg $WD/01_Data/GMW_${YEAR}_v2.shp GMW_${YEAR}_v2 -nlt PROMOTE_TO_MULTI
 fi

```
