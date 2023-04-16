Reference for publication
Moreno-Martínez, Á., Camps-Valls, G., Kattge, J., Robinson, N., Reichstein, M., Bodegom, P. V., Kramer, K., Cornelissen, J. H. C., Reich, P. B., Bahn, M., Niinemets, Ü., Peñuelas, J., Craine, J., Cerabolini, B., Minden, V., Laughlin, D. C., Sack, L., Allred, B., Baraloto, C., Byun, C., Soudzilovskaia, N. A., Running, S. W. (2018). A methodology to derive global maps of leaf traits using remote sensing and climate data. Remote Sensing of Environment, 218, 69-88. https://doi.org/10.1016/j.rse.2018.09.006

Reference to data package:	Moreno-Martínez, Á., Camps-Valls, G., Kattge, J., Robinson, N., Reichstein, M., Bodegom, P. V., Running, S. W. (2020) Global maps of leaf traits at 3km resolution. TRY File Archive https://www.try-db.org/TryWeb/Data.php#59
DOI:	10.17871/TRY.59

Reference to data package:	Moreno-Martínez, Á., Camps-Valls, G., Kattge, J., Robinson, N., Reichstein, M., Bodegom, P. V., Running, S. W. (2020) Global maps of leaf traits at 1km resolution. TRY File Archive https://www.try-db.org/TryWeb/Data.php#60
DOI:	10.17871/TRY.60

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh


mkdir -p $GISDATA/plant-traits/global/TRY-leaf-trait-maps/
cd $GISDATA/plant-traits/global/TRY-leaf-trait-maps/

## need to update request to get correct link
wget -b --continue https://www.try-db.org/tmpdnld/Try2021343953Global_trait_maps_vs2_3km_res.zip

wget --continue https://www.try-db.org/tmpdnld/Try20213431213Global_trait_maps_vs2_1km_res.zip

```

```sh
cd $WORKDIR
unzip $GISDATA/species-traits/TRY-leaf-trait-maps/Try2021343953Global_trait_maps_vs2_3km_res.zip
ls Global_trait_maps_Moreno_Martinez_2018_Version2_3km_resolution/
unzip Global_trait_maps_Moreno_Martinez_2018_Version2_3km_resolution/SLA_3km_v1.zip

```

```r
 require(raster)

r0 <- raster("SLA_3km_v1.tif")
values(r0)[values(r0)<0] <- NA
plot(r0)

```
