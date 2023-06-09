# Global Lakes and Wetlands Database

https://www.worldwildlife.org/pages/global-lakes-and-wetlands-database

#### Citation
> Lehner, B. and Döll, P. (2004): Development and validation of a global database of lakes, reservoirs and wetlands. Journal of Hydrology 296/1-4: 1-22.

#### Data access

* Level 1 ([GLWD-1](https://www.worldwildlife.org/publications/global-lakes-and-wetlands-database-large-lake-polygons-level-1)) comprises the 3067 largest lakes (area ≥ 50 km2) and 654 largest reservoirs (storage capacity ≥ 0.5 km3) worldwide,
* Level 2 ([GLWD-2](https://www.worldwildlife.org/publications/global-lakes-and-wetlands-database-small-lake-polygons-level-2)) comprises permanent open water bodies with a surface area ≥ 0.1 km2 excluding the water bodies contained in GLWD-1,
* Level 3 ([GLWD-3](https://www.worldwildlife.org/publications/global-lakes-and-wetlands-database-lakes-and-wetlands-grid-level-3)) comprises lakes, reservoirs, rivers and different wetland types in the form of a global raster map at 30-second resolution

#### Data download and preparation


```sh
source $HOME/proyectos/CES/cesdata/env/project-env.sh

mkdir -p $GISDATA/hydrology/global/GLWD
cd $GISDATA/hydrology/global/GLWD
wget --continue 'https://c402277.ssl.cf1.rackcdn.com/publications/16/files/original/GLWD-level1.zip?1343838522' --output-document='GLWD-level1.zip'
wget --continue 'https://c402277.ssl.cf1.rackcdn.com/publications/17/files/original/GLWD-level2.zip?1343838637'  --output-document='GLWD-level2.zip'
wget --continue 'https://c402277.ssl.cf1.rackcdn.com/publications/18/files/original/GLWD-level3.zip?1343838716' --output-document='GLWD-level3.zip'

##mv ~/Downloads/GLWD-level* .

for k in $(ls *zip)
do
  unzip -u $k
done
```

#### Legend

|map nr.|class|matching EFG|
|---|---|---|
|1|Lake|F2.1,F2.2,F2.4,F2.6|
|2|Reservoir||
|3|River|F1.?|
|4|Freshwater Marsh, Floodplain|TF1.3|
|5|Swamp forest, flooded forest|TF1.1,TF1.2|
|6|Coastal Wetland||
|7|Pan, brackish/Saline Wetland||
|8|Bog, Fen, Mire|TF1.6,TF1.7|
|9|Intermitent Wetland, Lake|TF1.5,F2.3,F2.7|
|10|50-100% Wetland||
|11|25-50% Wetland||
|12|0-25% Wetland complex||



#### Notes
* Class ‘lake’ in both GLWD-2 and GLWD-3 also includes man-made reservoirs, as only the largest reservoirs have been distinguished from natural lakes.
* All these include global land area but exclude Antarctica and glaciated Greenland
