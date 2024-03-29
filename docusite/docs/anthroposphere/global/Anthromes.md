---
title: "Anthromes"
description: "Anthromes maps and datasets"
tags: [IUCN-GET,wget,gdal,grass GIS]
---


## Citation

> Ellis, E. C., K. Klein Goldewijk, S. Siebert, D. Lightman, and N. Ramankutty. 2010. Anthropogenic transformation of the biomes, 1700 to 2000. Global Ecology and Biogeography 19(5):589-606. [download]

> Klein Goldewijk, K. & van Drecht, G. (2006) HYDE 3: current and historical population and land cover. Integrated modelling of global environmental change. An overview of IMAGE 2.4 (ed. by A.F. Bouwman, T. Kram and K. Klein Goldewijk), pp. 93–111. Netherlands Environmental Assessment Agency (MNP), Bilthoven, The Netherlands.

> Monfreda, C., Ramankutty, N. & Foley, J.A. (2008) Farming the planet: 2. Geographic distribution of crop areas, yields, physi- ological types, and net primary production in the year 2000. Global Biogeochemical Cycles, 22, GB1022.

## Data description

Data in 5 arc minute global geographic raster grids in .zip files with accompanying metadata.

Description of source dataset from Ellis et al. (2010) "Global data for human population density and percentage cover by urban, crop and pasture lands at 5′ resolution were obtained using the updated version of the HYDE 3.1 data model (http://www.pbl.nl/hyde), based on Klein Goldewijk & van Drecht (2006). Global 5′ data for rice cover in 2000 were obtained from Monfreda et al. (2008)."

## Links

- http://ecotope.org/anthromes/v2/data/

## Data download

Data can be downloaded directly from the website, I use `wget` to download from the commandline. 

```sh
mkdir -p $GISDATA/biomas/Anthromes
cd $GISDATA/biomas/Anthromes
wget --continue http://ecotope.org/files/anthromes/v2/data/input_data/anthromes_2_input_data_ESRI_GRID.zip
```

## Data preparation

### Gdal

I use `gdalwarp` to fix geographic limits to 90 (NS) and 180 (EW)

```sh
cd $WORKDIR
unzip $GISDATA/biomas/Anthromes/anthromes_2_input_data_ESRI_GRID.zip
for k in cult irrig past rice urban
do
    gdalwarp -te -180 -90 180 90 $WORKDIR/2000/p_${k}/ Anthromes_p_${k}.tif
done
 # alternatively use year in 1700  1800  1900  2000

```

### Grass GIS

We can create a Grass GIS location from the commandline

```sh
grass --text -c Anthromes_p_${k}.tif $GISDB/raw/Anthromes

for k in cult irrig past rice urban
do
    r.in.gdal input=Anthromes_p_${k}.tif output=p_${k}
done

# once imported in grass, we can clean up the downloaded files:
rm -r 1700  1800  1900  2000	methods_smaller.jpg  Readme.txt
rm Anthromes*tif

exit
```
