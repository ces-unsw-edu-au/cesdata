# GLOBES – 1-KM RESOLUTION GLOBAL ECOSYSTEM DATA CUBE

Dataset Creator: Ruben Remelgado

Publication Year: 2020

Global data cube on the yearly extent of ecosystems following the habitat classification scheme of the IUCN Red List, used in the assessment of over 100,000 species. This data cube is composed by 65 ecosystem types and covers the period between 1992 and 2018, where each layer depicts per-pixel areas of a given ecosystem within a given year.

https://portal.geobon.org/ebv-detail?id=8

https://www.idiv.de/en/groups-and-people/core-groups/macroecosocial.html

## Data access and download

### Preliminary version

Previous version, via personal communication from Carsten Meyer

```sh
mkdir -p $GISDATA/ecosystems/GLOBES-1km
cd $GISDATA/ecosystems/GLOBES-1km
wget --continue https://gigamove.rz.rwth-aachen.de/d/id/AWkrfaeTCyG3CX/dd/100 --output-document=GLOBES-10km-prelim.zip

```
```sh
cd $WORKDIR

unzip $GISDATA/ecosystems/GLOBES-1km/GLOBES-10km-prelim.zip
```

### From Geobon portal

Note that dataset link in GeoBON was initially `id=10`` and now is `id=8`, this id might not be permanent.

```sh
mkdir -p $GISDATA/ecosystems/GLOBES-1km
cd $GISDATA/ecosystems/GLOBES-1km

nohup wget --continue https://portal.geobon.org/data/upload/8/public/remelgado_comcom_id8_20220215_v1.nc &
wget --continue https://portal.geobon.org/data/upload/8/public/metadata_v1.xml
```

