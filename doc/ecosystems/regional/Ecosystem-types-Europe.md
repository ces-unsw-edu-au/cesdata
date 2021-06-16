# Ecosystem types of Europe

> The dataset combines the Copernicus land service portfolio and marine bathymetry and seabed information with the non-spatial EUNIS habitat classification for a better biological characterization of ecosystems across Europe. As such it represents probabilities of EUNIS habitat presence for each MAES ecosystem type.

> European Commision Technical report – 2016 – 095;
Mapping and Assessment of Ecosystems and their Services — Mapping and assessing the
condition of Europe's ecosystems: progress and challenges — 3rd Report – Final, March 2016
https://www.eea.europa.eu/data-and-maps/data/ecosystem-types-of-europe-1

http://cmshare.eea.europa.eu/s/KscZR3EcKrGmPbK/download


```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh


mkdir -p $GISDATA/ecosystems/regional/MAES
cd $GISDATA/ecosystems/regional/MAES

## scp from terra.ad.unsw.edu.au:
##scp /opt/gisdata/ecosystems/MAES/Ecosystem\ types\ of\ Europe\ -\ version\ 3.1\ Full\ map.zip $zID@kdm.restech.unsw.edu.au:/srv/scratch/cesdata/gisdata/ecosystems/regional/MAES

```



```sh

cd $WORKDIR
unzip $GISDATA/ecosystems/regional/MAES/Ecosystem\ types\ of\ Europe\ -\ version\ 3.1\ Full\ map.zip
dbfdump Ecosystem\ types\ of\ Europe\ -\ version\ 3.1\ Full\ map/eea_r_3035_100_m_etm-full_2012_v3-1_r00.tif.vat.dbf


```
F - Heathland, scrub and tundra                   
30 7810607.00000000000 F1         Tundra     
31 8550877.00000000000 F2         Arctic, alpine and subalpine scrub         
 32 5448621.00000000000 F3         Temperate and mediterranean-montane scrub
 33  411768.00000000000 F4         Temperate shrub heathland         
  34 4996471.00000000000 F5         Maquis, arborescent matorral and thermo-Mediterranean brushes
  35 1070059.00000000000 F6         Garrigue  
   36 1791083.00000000000 F7         Spiny Mediterranean heaths (phrygana, hedgehog-heaths and related coastal cliff vegetation)
   37   95399.00000000000 F8         Thermo-Atlantic xerophytic scrub
   38   10687.00000000000 F9         Riverine and fen scrubs    
   40 6371004.00000000000 FB         Shrub plantations    
