# Modis Sea Ice extent and temperature

There are multiple Modis products. An overview is available [here](https://nsidc.org/data/modis/data_summaries).

## MODIS/Terra Sea Ice Extent Daily L3 Global 1km EASE-Grid Day, Version 6

Product ID **MOD29P1D**: daily 1 km resolution sea ice extent, ice surface temperature, and quality assessment data gridded to the Equal Area Scalable Earth Grid (EASE-Grid).


#### Citation
> Hall, D. K. and G. A. Riggs. 2015. MODIS/Terra Sea Ice Extent Daily L3 Global 1km EASE-Grid Day, Version 6. [Indicate subset used]. Boulder, Colorado USA. NASA National Snow and Ice Data Center Distributed Active Archive Center. doi: https://doi.org/10.5067/MODIS/MOD29P1D.006. [Date Accessed]

#### Data access

Data is available at https://nsidc.org/data/MOD29P1D/versions/6

Use Earth-data login details.

There is an option for a using a download script in python.

#### Data download and preparation

```sh
mkdir -p $GISDATA/sensores/Modis_SeaIce
cd $GISDATA/sensores/Modis_SeaIce
mv ~/Downloads/nsidc-download_MOD29P1D.006_2020-02-22.py $GISDATA/sensores/Modis_SeaIce

```
