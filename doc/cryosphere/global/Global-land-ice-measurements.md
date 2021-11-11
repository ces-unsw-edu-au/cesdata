# GLIMS Glacier database
Global Land Ice Measurements from Space initiative (GLIMS)

[Webpage](http://glims.colorado.edu/glacierdata/)

#### Citation

> GLIMS and NSIDC (2005, updated 2018): Global Land Ice Measurements
from Space glacier database.  Compiled and made available by the
international GLIMS community and the National Snow and Ice Data Center,
Boulder CO, U.S.A.  DOI:10.7265/N5V98602

> Raup, B.H.; A. Racoviteanu; S.J.S. Khalsa; C. Helm; R. Armstrong; Y.
   Arnaud (2007).  "The GLIMS Geospatial Glacier Database: a New Tool for
   Studying Glacier Change".  Global and Planetary Change 56:101--110.
   (doi:10.1016/j.gloplacha.2006.07.018)

#### Data access

http://www.glims.org/download/

#### Data download and preparation

```sh
DPATH=cryosphere/global
DNAME=GLIMS_2019

mkdir -p $GISDATA/$DPATH/$DNAME/
cd $GISDATA/$DPATH/$DNAME/

wget --continue http://www.glims.org/download/glims_db_20191217.zip
```


We import this dataset in postgis for further data preparation and selection

```sh
mkdir -p $WORKDIR/GLIMS
cd $WORKDIR/GLIMS
unzip $GISDATA/$DPATH/$DNAME/glims_db_20191217.zip
 cd $WORKDIR/GLIMS/glims_download*

psql gisdata jferrer -c "CREATE SCHEMA glims"
for SHPFILE in images lines polygons points
do
   ogr2ogr -f "PostgreSQL" PG:"host=localhost user=jferrer dbname=gisdata" -lco SCHEMA=glims -nlt PROMOTE_TO_MULTI  glims_$SHPFILE.shp glims_$SHPFILE -nln $SHPFILE
 done
cd $WORKDIR
rm -r $WORKDIR/GLIMS

```

Or we can filter them using ogr2ogr
Then we create a table with the most recent glacier outlines filtering by record status ("okay") and glacier status ("exists") :

```sh
cd glims_download*

module add python/3.8.3 perl/5.28.0 geos/3.8.1 gdal/3.2.1

ogr2ogr -f "GPKG" -sql "SELECT glac_id, glac_name, anlys_time FROM glims_polygons  WHERE rec_status = 'okay' AND glac_stat = 'exists' AND line_type = 'glac_bound'" valid_glaciers.gpkg glims_polygons.shp -nlt PROMOTE_TO_MULTI -nln valid_glaciers -makevalid

```

This way we can summarize information according to documented variables, for example, just `psql gisdata` and:

```sql
 select line_type,count(*) from glims.polygons group by line_type;
select count(distinct glac_id),count(*) from glims.polygons;

select glac_stat,rec_status, count(distinct glac_id) from glims.polygons group by glac_stat,rec_status;


```

We now extract some features to a new table (in `psql gisdata`). This will create a list with the most recent glacier outlines

```sql

-- order by anlys_time
-- filter by rec_status = "okay" & glac_stat = "exists"
CREATE table glims.valid_glaciers AS(
WITH summary AS (
   SELECT p.glac_id,
          p.glac_name,
          p.wkb_geometry,
          ROW_NUMBER() OVER(PARTITION BY p.glac_id
                                ORDER BY p.anlys_time DESC) AS rk
     FROM glims.polygons p
     WHERE rec_status = 'okay' AND glac_stat = 'exists' AND line_type = 'glac_bound'
     )
SELECT s.*
 FROM summary s
WHERE s.rk = 1);
-- 319732 records
```

This will create a list of points with the centroid of the features labeled as "internal rock"

```sql

CREATE table glims.valid_nunataks AS(
   SELECT p.glac_id,
          p.glac_name,
          st_centroid(p.wkb_geometry) AS wkb_geometry
     FROM glims.polygons p
     WHERE rec_status = 'okay' AND glac_stat = 'exists' AND line_type = 'intrnl_rock'
     );
-- 447 records
```


In R we can retrieve the data for any area of interest using following script (`R --vanilla`):

```{r}
require(sf)
require(dplyr)

glims <- read_sf("dist-records/glims_download_56134/glims_points.shp")
glims_pols <- read_sf("dist-records/glims_download_56134/glims_polygons.shp")

glims_pols %>% st_drop_geometry() %>% group_by(rec_status,glac_stat,line_type) %>% summarise(n=n(),n_ids=n_distinct(glac_id))

glims_pols %>% st_drop_geometry() %>% group_by(glac_id) %>% summarise(n=n()) %>% arrange(desc(n))

slc <- glims_pols %>% filter(glac_id=='G302228E64270S')

require("RPostgreSQL")

work.dir <- Sys.getenv("WORKDIR")
setwd(work.dir)

drv <- dbDriver("PostgreSQL") ## remember to update .pgpass file
con <- dbConnect(drv, dbname = "gisdata",
                 host = ifelse( system("hostname -s",intern=T)=="terra","localhost","terra.ad.unsw.edu.au"),
                 port = 5432,
                 user = "jferrer")

# Area of interest POLYGON((-80 -10,-69 -10,-69 12,-80 12,-80 -10)
T6.2.ss <- st_read(con, query="SELECT * FROM glims.valid_nunataks WHERE ST_Intersects(wkb_geometry,'SRID=4326;POLYGON((-80 -10,-69 -10,-69 12,-80 12,-80 -10))') ")

T6.1.ss <- st_read(con, query="SELECT * FROM glims.valid_glaciers WHERE ST_Intersects(wkb_geometry,'SRID=4326;POLYGON((-80 -10,-69 -10,-69 12,-80 12,-80 -10))')")

# all centroids in 'lower' latitudes
T6.2 <- st_read(con, query="SELECT glac_id,wkb_geometry  FROM glims.valid_nunataks WHERE ST_Intersects(wkb_geometry,'SRID=4326;POLYGON((-180 -60,-180 60,180 60,180 -60,-180 -60))')")

T6.1 <- st_read(con, query="SELECT glac_id,ST_Centroid(wkb_geometry) as cents FROM glims.valid_glaciers WHERE ST_Intersects(wkb_geometry,'SRID=4326;POLYGON((-180 -60,-180 60,180 60,180 -60,-180 -60))')")

dbDisconnect(con)
save(file='Glaciers-Northern-South-America.rda',T6.1,T6.2,T6.1.ss,T6.2.ss)

```
