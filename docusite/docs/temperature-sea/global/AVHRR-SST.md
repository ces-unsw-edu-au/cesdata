# AVHRR Pathfinder version 5.3 level 3 collated (L3C) global 4km sea surface temperature for 1981-Present

https://www.ncei.noaa.gov/access/metadata/landing-page/bin/iso?id=gov.noaa.nodc:AVHRR_Pathfinder-NCEI-L3C-v5.3

> The AVHRR Pathfinder Version 5.3 (PFV53) L3C Sea Surface Temperature data set is a collection of global, twice-daily (Day and Night) 4km sea surface temperature (SST) data produced by the NOAA National Centers for Environmental Information (NCEI). L3C is generated with measurements combined from a single instrument into a space-time grid. In this process multiple passes/scenes of data are combined. PFV53 was computed with data from the AVHRR instruments on board NOAA's polar orbiting satellite series using an entirely modernized system based on SeaDAS (version 6.4).

## Citation


> Saha, Korak; Zhao, Xuepeng; Zhang, Huai-min; Casey, Kenneth S.; Zhang, Dexin; Baker-Yeboah, Sheekela; Kilpatrick, Katherine A.; Evans, Robert H.; Ryan, Thomas; Relph, John M. (2018). AVHRR Pathfinder version 5.3 level 3 collated (L3C) global 4km sea surface temperature for 1981-Present. [indicate subset used]. NOAA National Centers for Environmental Information. Dataset. https://doi.org/10.7289/v52j68xx. Accessed [date].



```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh

mkdir -p $GISDATA/sea-surface-temperature/global/AVHRR-SST
cd  $GISDATA/sea-surface-temperature/global/AVHRR-SST

```

Snip of code for earthengine:
```js
var dataset = ee.ImageCollection('NOAA/CDR/SST_PATHFINDER/V53')
                  .filter(ee.Filter.date('2014-12-01', '2014-12-14'));
var seaSurfaceTemperature = dataset.select('sea_surface_temperature');
var visParams = {
  min: 0.0,
  max: 3500.0,
  palette: [
    '030d81', '0519ff', '05e8ff', '11ff01', 'fbff01', 'ff9901', 'ff0000',
    'ad0000'
  ],
};
Map.setCenter(-121.99, -2.11, 2);
Map.addLayer(seaSurfaceTemperature, visParams, 'Sea Surface Temperature');

```
