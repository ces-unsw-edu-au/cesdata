# GLASS LAI

Global gridded monthly mean Leaf Area Index (LAI) for five Plant Functional Types (PFTs) derived from the Global LAnd Surface Satellite (GLASS) products for the period 2000-2014

> This data set is derived from an improved version of long time series of LAI - http://www.glass.umd.edu/LAI/MODIS/0.05D/ - from the original Global LAnd Surface Satellite (GLASS) products. The GLASS LAI product spans the period 1981 to 2014 and has a temporal resolution of 8 days. The data is based on Advanced Very High Resolution Radiometer (AVHRR) reflectance data during the period 1981-1999 at a spatial resolution of 0.05◦ on a geographic latitude/longitude projection. Moderate Resolution Imaging Spectroradiometer (MODIS) surface reflectance data provided in a sinusoidal projection at a spatial resolution of 1km is used to derive the GLASS LAI product during 2000-2014.  Even though the GLASS product has been validated thoroughly over the entire 1981-2014 period, due to issues of instrumental homogeneity, only data from MODIS is used here. Hence, this LAI ancillary product is a climatology of 15 years covering 2000-2014.

https://data.gov.uk/dataset/ef527347-86f3-4789-8678-54e4381ea7fd/global-gridded-monthly-mean-leaf-area-index-lai-for-five-plant-functional-types-pfts-derived-from-the-global-land-surface-satellite-glass-products-for-the-period-2000-2014
https://catalogue.ceh.ac.uk/documents/6d07d60a-4cb9-44e4-be39-89ea40365236


> Semeena, V.S.; Taylor, C.M.; Folwell, S.S.; Hartley, A. (2021). Global gridded monthly mean Leaf Area Index (LAI) for five Plant Functional Types (PFTs) derived from the Global LAnd Surface Satellite (GLASS) products for the period 2000-2014. NERC Environmental Information Data Centre. https://doi.org/10.5285/6d07d60a-4cb9-44e4-be39-89ea40365236



```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh

mkdir -p $GISDATA/veglayer/global/GLASS-LAI
cd $GISDATA/veglayer/global/GLASS-LAI
# Register to website and download, then copy to target directory
# scp 6d07d60a-4cb9-44e4-be39-89ea40365236.zip $zID@kdm.restech.unsw.edu.au:/srv/scratch/cesdata/gisdata/veglayer/global/GLASS-LAI
 unzip -u 6d07d60a-4cb9-44e4-be39-89ea40365236.zip 

```
