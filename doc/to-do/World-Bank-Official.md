# World Bank Official Boundaries

https://datacatalog.worldbank.org/dataset/world-bank-official-boundaries




```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh
source ~/proyectos/UNSW/cesdata/env/katana-env.sh


mkdir -p $GISDATA/admin/global/World-Bank/
cd $GISDATA/admin/global/World-Bank/

for ARCH in wb_countries_admin0_10m.zip wb_disputed_areas_admin0_10m.zip wb_disputed_areas_admin0_10m.zip wb_adm0_boundary_lines_10m.zip wb_adm0_boundary_lines_disputed_areas_10m.zip wb_coastlines_10m.zip wb_land_10m.zip wb_boundaries.gdb.zip wb_boundaries_geojson_highres.zip wb_boundaries_geojson_lowres.zip wb_boundaries_topojson.zip wb_boundaries_wgs84.zip
do
   wget --continue https://development-data-hub-s3-public.s3.amazonaws.com/ddhfiles/779551/${ARCH}
done

```
