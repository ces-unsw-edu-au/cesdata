# Global Permafrost Zonation Index Map

http://www.geo.uzh.ch/microsite/cryodata/pf_global/

#### Citation
> Gruber, S. 2012: *Derivation and analysis of a high-resolution estimate of global permafrost zonation*, **The Cryosphere**, 6, 221-233. doi:[10.5194/tc-6-221-2012](http://www.the-cryosphere.net/6/221/)

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh
source ~/proyectos/UNSW/cesdata/env/katana-env.sh

mkdir -p $GISDATA/soil/global/permafrost
cd $GISDATA/soil/global/permafrost

wget --continue http://www.geo.uzh.ch/microsite/cryodata/pf_global/PF_global_ArcGIS.tar
wget --continue http://www.geo.uzh.ch/microsite/cryodata/pf_global/PZI.flt
wget --continue http://www.geo.uzh.ch/microsite/cryodata/pf_global/PZI.hdr
```


```sh
module add python/3.8.3 perl/5.28.0 geos gdal/3.2.1
gdalinfo PZI.flt
```


```{r}
require(raster)
r0 <- raster("/srv/scratch/cesdata/gisdata/soil/global/permafrost/PZI.flt")

```
