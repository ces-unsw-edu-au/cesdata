# Ecological Marine Units

Webpage at https://www.esri.com/en-us/about/science/ecological-marine-units/overview

#### Citation
> Sayre, R.G., D.J. Wright, S.P. Breyer, K.A. Butler, K. Van Graafeiland, M.J. Costello, P.T. Harris, K.L. Goodin, J.M. Guinotte, Z. Basher, M.T. Kavanaugh, P.N. Halpin, M.E. Monaco, N. Cressie, P. Aniello, C.E. Frye, and D. Stephens. 2017. A three-​dimensional mapping of the ocean based on environmental data. Oceanography 30(1):90–103, https://doi.org/10.5670/oceanog.2017.116

#### Data access

Data is available at https://rmgsc.cr.usgs.gov/outgoing/ecosystems/Global/ and https://esri.maps.arcgis.com/home/item.html?id=20a0247deee0432aa2f4790b89615ae9

#### Data download and preparation

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh
source ~/proyectos/UNSW/cesdata/env/katana-env.sh
mkdir -p $GISDATA/ecological/global/EcologicalMarineUnits
cd  $GISDATA/ecological/global/EcologicalMarineUnits

wget --continue https://rmgsc.cr.usgs.gov/outgoing/ecosystems/Global/EMUGlobalOcean.mpk

cd $WORKDIR
7z x $GISDATA/stratification/EcologicalMarineUnits/EMUGlobalOcean.mpk

ogrinfo v104/emuglobal.gdb
ogrinfo -geom=NO v104/emuglobal.gdb EMUMaster | head
ogrinfo -geom=NO v104/emuglobal.gdb EMUoptimized | head

psql gisdata -c "CREATE SCHEMA emu"
## not sure what is the difference between both, will use 'optimized' for now
ogr2ogr -overwrite -f "PostgreSQL" PG:"host=localhost user=jferrer dbname=gisdata" -lco SCHEMA=emu v104/emuglobal.gdb emuoptimized
##ogr2ogr -overwrite -f "PostgreSQL" PG:"host=localhost user=jferrer dbname=gisdata" -lco SCHEMA=emu v104/emuglobal.gdb emumaster

```

Explore in PostGIS `psql -d gisdata`

```sql
\dt emu.
-- several fields to explore
\x
select * from emu.emuoptimized limit 1;
\x
select depth_lvl,count(*) from emu.emuoptimized group by depth_lvl ;
select cluster37, nameemu,count(*) from emu.emuoptimized group by cluster37,nameemu order by nameemu;
\x
select * from emu.emuoptimized where depth_lvl=24 limit 1;
-- points are 3D but I am not sure how to interpret the third coordinate
select st_astext(wkb_geometry) from emu.emuoptimized where depth_lvl=94 limit 5;
select st_astext(wkb_geometry) from emu.emuoptimized where cluster37=36 limit 5;

select st_z(wkb_geometry) as z, count(*) from emu.emuoptimized group by z;

```

#### Notes
* [how-to in ArcGIS](https://community.esri.com/groups/ecological-marine-units/blog/2017/01/03/getting-started-with-ecological-marne-units-emu-s-using-arcgis-desktop)
