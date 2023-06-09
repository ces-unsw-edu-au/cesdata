# Fresh water ecoregions of the world (FEOW)

Direct download

https://www.feow.org/

https://geospatial.tnc.org/datasets/38da4656e8074e1c820c42cc21cd76cd_0

## Citation
> Abell R, Thieme ML, Revenga C, Bryer M, Kottelat M, Bogutskaya N, Coad B, Mandrak N, Contreras Balderas S, Bussing W, Stiassny MLJ, Skelton P, Allen GR, Unmack P, Naseka A, Ng R, Sindorf N, Robertson J, Armijo E, Higgins JV, Heibel TJ, Wikramanayake E, Olson D, López HL, Reis RE, Lundberg JG, Sabaj Pérez MH, Petry P (2008) Freshwater ecoregions of the world: A new map of biogeographic units for freshwater biodiversity conservation, BioScience 58: 403–414. DOI:10.1641/B580507


## Data download and preparation

```sh
source ~/proyectos/CES/cesdata/env/project-env.sh

mkdir -p $GISDATA/ecoregions/global/FEOW/
cd $GISDATA/ecoregions/global/FEOW/

# version from FEOW.org
wget --continue https://www.feow.org/files/downloads/GIS_hs_snapped.zip

# version from TNC: no direct download? copy from local version
#export LOCALUSER=...
#export LOCALHOST=...
#export LOCALPATH=...
# scp ${LOCALUSER}@${LOCALHOST}:$LOCALPATH/'Freshwater_Ecoregions_Of_the_World_(FEOW)-fgdb.zip' $GISDATA/ecoregions/global/FEOW/

```

Create a new geopackage file with valid topology and assign the (implied) projection information:
```sh
module add python/3.8.3 perl/5.28.0 gdal/3.2.1 geos/3.8.1
unzip -u GIS_hs_snapped.zip
unzip -u Freshwater_Ecoregions_Of_the_World_\(FEOW\)-fgdb.zip

ogrinfo c4be086f842b4fbbab544a047bc90dcb.gdb Freshwater_Ecoregions |less


if [ $(ogrinfo --version | grep "GDAL 3.2" -c) -eq 1 ]
then
     ## ogr2ogr -f "GPKG" feow_hs_valid.gpkg GIS_hs_snapped feow_hydrosheds -nlt PROMOTE_TO_MULTI -a_srs "+proj=longlat +datum=WGS84" -makevalid

     ogr2ogr -f "GPKG" feow_all_valid.gpkg c4be086f842b4fbbab544a047bc90dcb.gdb Freshwater_Ecoregions -nlt PROMOTE_TO_MULTI -t_srs "+proj=longlat +datum=WGS84" -makevalid

fi

```


```sh


psql gisdata -c "CREATE SCHEMA FEOW"
ogr2ogr -overwrite -f "PostgreSQL" PG:"host=localhost user=jferrer dbname=gisdata" -lco SCHEMA=feow GIS_hs_snapped feow_hydrosheds -nlt PROMOTE_TO_MULTI

## this one is in pseudomercator...
ogr2ogr -overwrite -f "PostgreSQL" PG:"host=localhost user=jferrer dbname=gisdata" -lco SCHEMA=feow c4be086f842b4fbbab544a047bc90dcb.gdb/ -nln fw_ecoregions -nlt PROMOTE_TO_MULTI
```
