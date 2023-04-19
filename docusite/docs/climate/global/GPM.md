---
title: "GPM"
description: "Monthly Global Precipitation Measurement (GPM) v6"
tags: [Adaptative monitoring,ramsar-monitoring.org,Earth engine]
---

## Description

> IMERG-Final version "06" stopped being produced in September, 2021. Version "07" is expected to be released in September 2022

> Global Precipitation Measurement (GPM) is an international satellite mission to provide next-generation observations of rain and snow worldwide every three hours. The Integrated Multi-satellitE Retrievals for GPM (IMERG) is the unified algorithm that provides rainfall estimates combining data from all passive-microwave instruments in the GPM Constellation.

> This algorithm is intended to intercalibrate, merge, and interpolate all satellite microwave precipitation estimates, together with microwave-calibrated infrared (IR) satellite estimates, precipitation gauge analyses, and potentially other precipitation estimators at fine time and space scales for the TRMM and GPM eras over the entire globe. The system is run several times for each observation time, first giving a quick estimate and successively providing better estimates as more data arrive. The final step uses monthly gauge data to create research-level products. See IMERG Technical Documentation for more details on the algorithm.

## Citations

> Huffman, G.J., E.F. Stocker, D.T. Bolvin, E.J. Nelkin, Jackson Tan (2019), GPM IMERG Final Precipitation L3 1 month 0.1 degree x 0.1 degree V06, Greenbelt, MD, Goddard Earth Sciences Data and Information Services Center (GES DISC), Accessed: [Data Access Date], 10.5067/GPM/IMERG/3B-MONTH/06

## Links

- https://disc.gsfc.nasa.gov/datasets/GPM_3IMERGM_06/summary


## Earth Engine 
```js
var dataset = ee.ImageCollection('NASA/GPM_L3/IMERG_MONTHLY_V06')
    .filterDate('2019-01-01', '2020-01-01');

// Select the max precipitation and mask out low precipitation values.
var precipitation = dataset.select('precipitation').max();
var mask = precipitation.gt(0.25);
var precipitation = precipitation.updateMask(mask);

var palette = [ 
  '000096','0064ff', '00b4ff', '33db80', '9beb4a',
  'ffeb00', 'ffb300', 'ff6400', 'eb1e00', 'af0000'
];
var precipitationVis = {min: 0.0, max: 1.5, palette: palette};
Map.addLayer(precipitation, precipitationVis, 'Precipitation');
Map.setCenter(-76, 33, 3);
```