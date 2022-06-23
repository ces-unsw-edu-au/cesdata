# ERA5-Land Hourly - ECMWF Climate Reanalysis

https://cds.climate.copernicus.eu/cdsapp

## Citation
> Muñoz Sabater, J., (2019): ERA5-Land hourly data from 1981 to present. Copernicus Climate Change Service (C3S) Climate Data Store (CDS). (<date of access>), doi:10.24381/cds.e2161bac

In google earth engine:

```js
ee.ImageCollection("ECMWF/ERA5_LAND/HOURLY") open_in_new
```

example with snow cover:

```js
var dataset = ee.ImageCollection("ECMWF/ERA5_LAND/HOURLY")
                .filter(ee.Filter.date('2020-12-01', '2020-12-02'));

var visualization = {
  bands: ['snow_cover'],
  min: 0.0,
  max: 100.0,
  palette: [
    "#000080","#0000D9","#4000FF","#8000FF","#0080FF","#00FFFF",
    "#00FF80","#80FF00","#DAFF00","#FFFF00","#FFF500","#FFDA00",
    "#FFB000","#FFA400","#FF4F00","#FF2500","#FF0A00","#FF00FF",
  ]
};


Map.setCenter(-69, 11.2, 2);

Map.addLayer(dataset, visualization, "Air temperature [K] at 2m height");

```
