# South African vegetation map

## Citation for this map
South African National Biodiversity Institute (2006-2018). The Vegetation Map of South Africa, Lesotho and Swaziland, Mucina, L., Rutherford, M.C. and Powrie, L.W. (Editors), Online, http://bgis.sanbi.org/Projects/Detail/186, Version 2018.


http://www.scielo.org.za/pdf/babc/v47n1/06.pdf

http://bgis.sanbi.org/SpatialDataset/Detail/670

```sh
source ~/proyectos/CES/cesdata/env/project-env.sh

mkdir -p $GISDATA/vegetation/regional/SouthAfrica
cd $GISDATA/vegetation/regional/SouthAfrica

mv ~/Downloads/VEGMAP2018_AEA_07012019_beta.zip $GISDATA/vegetation/SouthAfrica

unzip -u VEGMAP2018_AEA_07012019_beta.zip


VEGMAP2018_AEA_07012019_beta.gdb/
psql gisdata -c "CREATE SCHEMA sanbi"
ogrinfo -al -geom=NO VEGMAP2018_AEA_07012019_beta.gdb/ | less

## this requires GRANT ALL ON TABLE public.spatial_ref_sys TO jferrer :

ogr2ogr -f "PostgreSQL" PG:"host=localhost user=jferrer dbname=gisdata" -lco SCHEMA=sanbi -nlt MULTIPOLYGON VEGMAP2018_AEA_07012019_beta.gdb/
```

```{bash}
module add python/3.8.3 perl geos gdal/3.2.1
cd $GISDATA/vegetation/regional/SouthAfrica

ogr2ogr -spat 582082.7 -3154092 777883.3 -2931863 tst.gpkg VEGMAP2018_AEA_07012019_beta.gdb
```

```{r}
require(sf)
require(dplyr)
ZAmap <- read_sf(sprintf("%s/vegetation/regional/SouthAfrica/VEGMAP2018_AEA_07012019_beta.gdb",gis.data))

pol = st_sfc(st_buffer(st_point(c(31.951944,-28.219722)), 1))
Hluhluwe <- st_sf(a=1, geom=pol,crs=4326)
Hluhluwe.xy <- st_transform(Hluhluwe,st_crs(ZAmap))

Hluhluwe.cent <-
st_sf(a=1, geom=st_sfc(st_point(c(31.951944,-28.219722))),crs=4326) %>% st_transform(st_crs(ZAmap))
tst <- st_crop(ZAmap, Hluhluwe.xy)

st_crop(ZAmap, xmin= 582082.7 ymin= -3154092 xmax= 777883.3 ymax= -2931863)

tst <- read_sf(sprintf("%s/vegetation/regional/SouthAfrica/tst.gpkg",gis.data))

tst %>% filter(BIOME_18 %in% "Indian Ocean Coastal Belt") %>% st_drop_geometry %>% group_by(BIOME_18,BIOREGION_18,Name_18) %>% summarise(n=n()) %>% print.AsIs()
tst %>% filter(BIOME_18 %in% "Indian Ocean Coastal Belt") %>% st_drop_geometry %>% group_by(BIOME_18,BIOREGION_18,Name_18) %>% summarise(n=n()) %>% print.AsIs()

tst %>% filter(BIOME_18 %in% "Indian Ocean Coastal Belt") -> rgn1

tst %>% filter(BIOME_18 %in% "Grassland") -> rgn2
tst %>% filter(BIOME_18 %in% "Savanna") -> rgn3

plot(st_geometry(rgn1))
plot(Hluhluwe.cent,col=2,add=T)

plot(st_geometry(rgn3))
plot(Hluhluwe.cent,col=2,add=T)
plot(rgn3['Name_18'])

Hluhluwe.cent %>% st_intersects(rgn3)
rgn3 %>% slice(176) %>% st_drop_geometry() %>% print.AsIs()

```
