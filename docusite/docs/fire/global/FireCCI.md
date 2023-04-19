---
title: "FireCCI51"
description: "MODIS Fire_cci Burned Area Pixel Product, Version 5.1"
tags: [Adaptative monitoring,ramsar-monitoring.org,Earth engine]
---

## Description

    The MODIS Fire_cci Burned Area pixel product version 5.1 (FireCCI51) is a monthly global ~250m spatial resolution dataset containing information on burned area as well as ancillary data. It is based on surface reflectance in the Near Infrared (NIR) band from the MODIS instrument onboard the Terra satellite, as well as active fire information from the same sensor of the Terra and Aqua satellites.

    The burned area algorithm uses a two-phase hybrid approach. In a first step pixels with a high probability of being burned (called "seeds") are detected based on the active fires. In a second one, a contextual growing is applied to completely detect the fire patch. This growing phase is controlled by an adaptive thresholding, where thresholds are computed based on the specific characteristics of the area surrounding each seed. The variable used to guide the whole detection process is the NIR drop between pre- and post-fire images.

    The dataset includes for each pixel the estimated day of the first detection of the fire, the confidence level of that detection, and the land cover that has been burned (extracted from the ESA CCI Land Cover dataset v2.0.7). In addition, an observation flag is provided to identify the pixels that were not processed due to the lack of valid observations or because they belong to a non-burnable land cover.

    FireCCI51 was developed as part of the ESA Climate Change Initiative (CCI) Programme, and it is also part of the Copernicus Climate Change Service (C3S).


## Citations

> Padilla Parellada, M. (2018): ESA Fire Climate Change Initiative (Fire_cci): MODIS Fire_cci Burned Area Pixel product, version 5.1. Centre for Environmental Data Analysis, 01 November 2018. https://doi.org/10.5285/58f00d8814064b79a0c49662ad3af537.

> Lizundia-Loiola, J., Otón, G., Ramo, R., Chuvieco, E. (2020): A spatio-temporal active-fire clustering approach for global burned area mapping at 250m from MODIS data. Remote Sensing of Environment, 236, 111493. https://doi.org/10.1016/j.rse.2019.111493

## Earth Engine

```js
// Visualize FireCCI51 for one year
var dataset = ee.ImageCollection('ESA/CCI/FireCCI/5_1')
                  .filterDate('2020-01-01', '2020-12-31');
var burnedArea = dataset.select('BurnDate');

// Use a circular palette to assign colors to date of first detection
var baVis = {
  min: 1,
  max: 366,
  palette: [
    'ff0000', 'fd4100', 'fb8200', 'f9c400', 'f2ff00', 'b6ff05',
    '7aff0a', '3eff0f', '02ff15', '00ff55', '00ff99', '00ffdd',
    '00ddff', '0098ff', '0052ff', '0210ff', '3a0dfb', '7209f6',
    'a905f1', 'e102ed', 'ff00cc', 'ff0089', 'ff0047', 'ff0004'
  ]
};
var maxBA = burnedArea.max();

Map.setCenter(0, 18, 2.1);
Map.addLayer(maxBA, baVis, 'Burned Area');
```