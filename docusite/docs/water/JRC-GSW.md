---
title: "JRC GSW"
description: "JRC Global Surface Water"
tags: [Adaptative monitoring,ramsar-monitoring.org,Earth engine]
---

## Description

> This dataset contains maps of the location and temporal distribution of surface water from 1984 to 2021 and provides statistics on the extent and change of those water surfaces. For more information see the associated journal article: High-resolution mapping of global surface water and its long-term changes (Nature, 2016) and the online Data Users Guide.

> These data were generated using 4,716,475 scenes from Landsat 5, 7, and 8 acquired between 16 March 1984 and 31 December 2021. Each pixel was individually classified into water / non-water using an expert system and the results were collated into a monthly history for the entire time period and two epochs (1984-1999, 2000-2021) for change detection.

> This Monthly History collection holds the entire history of water detection on a month-by-month basis. The collection contains 454 images, one for each month between March 1984 and December 2021.

## Links

- [Data User's guide](https://storage.googleapis.com/global-surface-water/downloads_ancillary/DataUsersGuidev2021.pdf)
## Citation

> Jean-Francois Pekel, Andrew Cottam, Noel Gorelick, Alan S. Belward, High-resolution mapping of global surface water and its long-term changes. Nature 540, 418-422 (2016). (doi:10.1038/nature20584)

## Earth Engine

```{js}
var dataset = ee.Image('JRC/GSW1_4/MonthlyHistory/2020_06');

var visualization = {
  bands: ['water'],
  min: 0.0,
  max: 2.0,
  palette: ['ffffff', 'fffcb8', '0905ff']
};

Map.setCenter(-121.234, 38.109, 7);

Map.addLayer(dataset, visualization, 'Water');
```