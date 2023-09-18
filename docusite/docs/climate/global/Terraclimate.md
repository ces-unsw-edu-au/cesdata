---
title: "Terraclimate"
description: "Monthly climate and climatic water balance (1958-2019)"
tags: [tropical alpine,deforestation,Venezuela,wget,Adaptative monitoring,ramsar-monitoring.org,Earth engine]
---

> TerraClimate is a dataset of monthly climate and climatic water balance for global terrestrial surfaces from 1958-2019. All data have monthly temporal resolution and a ~4-km (1/24th degree) spatial resolution.

## Citation

>Abatzoglou, J.T., S.Z. Dobrowski, S.A. Parks, K.C. Hegewisch, 2018, Terraclimate, a high-resolution global dataset of monthly climate and climatic water balance from 1958-2015, Scientific Data, 5, 170191 . DOI:10.1038/sdata.2017.191

## Data access

Data and documentation is available at:
>	http://www.climatologylab.org/terraclimate.html


## Data download and preparation

```sh
source ~/proyectos/CES/cesdata/env/project-env.sh
mkdir -p $GISDATA/climate/global/Terraclimate
cd $GISDATA/climate/global/Terraclimate
```

### Climatologies (1961-1990 and 1981-2010; and +2C and +4C future scenarios)​

Using the data catalogs to extract all links:

```sh
mkdir -p $GISDATA/climate/global/Terraclimate/summaries
cd $GISDATA/climate/global/Terraclimate/summaries

wget http://thredds.northwestknowledge.net:8080/thredds/catalog/TERRACLIMATE_ALL/summaries/catalog.html

#xpath -q -e "//a/@href/data()" catalog.html

sed -n "s/.*href='\([^']*\).*/\1/p" catalog.html > enlaces

for GRP in TerraClimate19611990 TerraClimate4C TerraClimate2C TerraClimate19812010
do
  for VAR in ppt pet # ws vpd vap tmin tmax swe srad soil q ppt pet def aet
  do
    wget --continue http://thredds.northwestknowledge.net:8080/thredds/fileServer/TERRACLIMATE_ALL/summaries/${GRP}_${VAR}.nc
  done
done
```


### Variables per year

Use [wget script](http://www.climatologylab.org/wget-terraclimate.html) to download individual netCDF files for individual variables and years :

```sh
for VAR in ppt pet #PDSI ws vpd vap tmin tmax swe srad soil q ppt pet def aet
do
   mkdir -p $GISDATA/climate/global/Terraclimate/per-year/$VAR
   cd $GISDATA/climate/global/Terraclimate/per-year/$VAR
   for YEAR in $(seq 2000 2021)
   do
    wget -c -nd https://climate.northwestknowledge.net/TERRACLIMATE-DATA/TerraClimate_${VAR}_${YEAR}.nc
  done
done
```

### Earth Engine Data Catalog

https://developers.google.com/earth-engine/datasets/catalog/IDAHO_EPSCOR_TERRACLIMATE

```{js}
var dataset = ee.ImageCollection('IDAHO_EPSCOR/TERRACLIMATE')
                  .filter(ee.Filter.date('2017-07-01', '2017-08-01'));
var maximumTemperature = dataset.select('tmmx');
var maximumTemperatureVis = {
  min: -300.0,
  max: 300.0,
  palette: [
    '1a3678', '2955bc', '5699ff', '8dbae9', 'acd1ff', 'caebff', 'e5f9ff',
    'fdffb4', 'ffe6a2', 'ffc969', 'ffa12d', 'ff7c1f', 'ca531a', 'ff0000',
    'ab0000'
  ],
};
Map.setCenter(71.72, 52.48, 3);
Map.addLayer(maximumTemperature, maximumTemperatureVis, 'Maximum Temperature');
```

## This dataset is used for...

### Deforestation analysis in Venezuela 

[GitHub repo](https://github.com/NeoMapas/datos-deforestacion-venezuela)


### Global suitability map of tropical alpine ecosystems
- [OSF project component](https://osf.io/vaund/)