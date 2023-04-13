# HydroLAKES Version 1.0

HydroLAKES database provide data on spatial distribution, shoreline length, average depth, water volume and residence time for global lakes with a surface area of at least 10 ha.

[Webpage](https://www.hydrosheds.org/page/hydrolakes) / [Documentation](https://www.hydrosheds.org/images/inpages/HydroLAKES_TechDoc_v10.pdf)

#### Citation
> Messager, M.L., Lehner, B., Grill, G., Nedeva, I., Schmitt, O. (2016): Estimating the volume and age of water stored in global lakes using a geo-statistical approach. Nature Communications: 13603. doi: 10.1038/ncomms13603 (open access)

#### Data access

Through the HydroSHED portal at: https://www.hydrosheds.org/page/hydrolakes

#### Data download and preparation

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh

mkdir -p $GISDATA/hydrology/global/HydroLAKES
cd $GISDATA/hydrology/global/HydroLAKES
wget --continue https://97dc600d3ccc765f840c-d5a4231de41cd7a15e06ac00b0bcc552.ssl.cf5.rackcdn.com/HydroLAKES_polys_v10.gdb.zip
wget --continue https://97dc600d3ccc765f840c-d5a4231de41cd7a15e06ac00b0bcc552.ssl.cf5.rackcdn.com/HydroLAKES_polys_v10_shp.zip

unzip -u HydroLAKES_polys_v10.gdb.zip

```

```sh
cd $WORKDIR

unzip $GISDATA/hydrology/global/HydroLAKES/HydroLAKES_polys_v10.gdb.zip

psql gisdata -c "CREATE SCHEMA HydroSHEDS"
ogr2ogr -overwrite -f "PostgreSQL" PG:"host=localhost user=jferrer dbname=gisdata" -lco SCHEMA=hydrosheds HydroLAKES_polys_v10.gdb -nln HydroLAKES

```

`psql gisdata`

```sql

select lake_type, count(*) as n from hydrosheds.hydrolakes group by lake_type;


```




#### Notes
* Linkage to Reservoir database (from the documentation document):
> HydroLAKES was also co-registered to the Global Reservoir and Dam (GRanD) database (Lehner et al., 2011) by identifying 6796 corresponding polygons and attributing them with the IDs of the GRanD database. These IDs can be used to join additional information from the GRanD database to HydroLAKES, if required.

* Linkage to river networks (from the documentation document):
> A spatial co-registration between HydroLAKES and the river network of the HydroSHEDS database (Lehner et al., 2008) was established by linking each lake to the most downstream river pixel that drains the lake. This pour point (or lake outlet) is typically near the lake’s shoreline but can also occur near the center of a lake polygon for terminal lakes in endorheic basins.
