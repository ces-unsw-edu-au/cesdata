# Global river ice


#### Citation

> Yang, X., Pavelsky, T.M. & Allen, G.H. *The past and future of global river ice*. **Nature** 577, 69–73 (2020). https://doi.org/10.1038/s41586-019-1848-1

#### Data access

The following data and code are available
* The [global river ice dataset](https://doi.org/10.5281/zenodo.3372709)
* *in situ* [river ice records](https://doi.org/10.5281/zenodo.3372754).
* [Google Eath Engine code](https://github.com/seanyx/global-river-ice-dataset-from-Landsat).

#### Data download and preparation

```sh
mkdir -p $GISDATA/cryosphere/global/Global-River-Ice
cd $GISDATA/cryosphere/global/Global-River-Ice
wget --continue 'https://zenodo.org/record/3372754/files/landsat_river_ice_validation.csv?download=1' --output-document=landsat_river_ice_validation.csv
wget --continue 'https://zenodo.org/record/3372709/files/global_river_ice_dataset.csv?download=1' --output-document=global_river_ice_dataset.csv

```

Since these are based on landsat products, we will need the WRS-2 shapefiles which can be found on the USGS Landsat website. This is the descending orbit (daytime) data for Landsat 4-8, but ascending data and data for Landsat 1-3 are also available: https://www.usgs.gov/land-resources/nli/landsat/landsat-path-row-shapefiles-and-kml-files

```sh
wget --continue https://prd-wret.s3-us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/atoms/files/WRS2_descending_0.zip
unzip -u WRS2_descending_0.zip

wget --continue https://prd-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/atoms/files/WRS2_ascending_0.zip
unzip -u WRS2_ascending_0.zip


```

#### Notes
*
