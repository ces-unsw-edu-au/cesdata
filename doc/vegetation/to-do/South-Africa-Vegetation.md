# South African vegetation map

## Citation for this map
South African National Biodiversity Institute (2006-2018). The Vegetation Map of South Africa, Lesotho and Swaziland, Mucina, L., Rutherford, M.C. and Powrie, L.W. (Editors), Online, http://bgis.sanbi.org/Projects/Detail/186, Version 2018.


http://www.scielo.org.za/pdf/babc/v47n1/06.pdf

http://bgis.sanbi.org/SpatialDataset/Detail/670

```sh
mkdir -p $GISDATA/vegetation/SouthAfrica
cd $GISDATA/vegetation/SouthAfrica

mv ~/Downloads/VEGMAP2018_AEA_07012019_beta.zip $GISDATA/vegetation/SouthAfrica
cd $WORKDIR

unzip $GISDATA/vegetation/SouthAfrica/VEGMAP2018_AEA_07012019_beta.zip
VEGMAP2018_AEA_07012019_beta.gdb/
psql gisdata -c "CREATE SCHEMA sanbi"
ogrinfo -al -geom=NO VEGMAP2018_AEA_07012019_beta.gdb/ | less

## this requires GRANT ALL ON TABLE public.spatial_ref_sys TO jferrer :

ogr2ogr -f "PostgreSQL" PG:"host=localhost user=jferrer dbname=gisdata" -lco SCHEMA=sanbi -nlt MULTIPOLYGON VEGMAP2018_AEA_07012019_beta.gdb/
```
