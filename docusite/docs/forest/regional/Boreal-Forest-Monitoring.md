# Boreal forest monitoring

The estimation of biome-wide forest cover and forest cover loss is based on a probability-based sampling approach employing multi-resolution satellite data. Biome-wide change indicator maps were created using moderate spatial resolution imagery for 2000 to 2005 from the MODerate Resolution Imaging Spectroradiometer sensor (MODIS).

https://glad.umd.edu/dataset/gfm/boreal/boreal-forest-monitoring
https://glad.umd.edu/gfw/boreal/lmodis-derived-data-download

#### Citation

> Potapov P., Hansen M. C., Stehman S. V., Loveland T. R., Pittman K. (2008) Combining MODIS and Landsat imagery to estimate and map boreal forest cover loss. Remote Sensing of Environment, 112(9), 3708-3719.

> Hansen, M., DeFries R.S., Townshend J.R.G., Carroll M., Dimiceli C., Sohlberg R.A. (2003) Global Percent Tree Cover at a Spatial Resolution of 500 Meters: First Results of the MODIS Vegetation Continuous Fields Algorithm. Earth Interactions, Vol 7, No 10, pp 1-15.

#### Data download and preparation


Download the sampling frame boundary for the boreal biome. This consists of the WWF boreal biome, ecoregions of temperate coniferous and mixed forests characterized by similar seasonality and presence of winter snow cover, and forested areas of forest-steppe ecoregions within continental parts of North America and Asia, along with forest-tundra transitional ecoregions, but excluding Iceland and areas greater than 70° latitude in Siberia. Partitioned in square blocks 18.5 km per side.

```sh
source ~/proyectos/CES/cesdata/env/project-env.sh


mkdir -p $GISDATA/forest/regional/Boreal-Forest-Monitoring
cd $GISDATA/forest/regional/Boreal-Forest-Monitoring
wget --continue  https://glad.umd.edu/projects/gfm/boreal/borealbiome.zip

```

Download the calibrated data (combining modis and landsat):

```sh
for k in boreal_forest_20km.zip boreal_change_20km.zip boreal_fire_change_20km.zip
do
  wget --continue https://glad.umd.edu/projects/gfm/boreal/${k}
done
```
