# Global Self-consistent Hierarchical High-resolution Geography, GSHHG


https://shoreline.noaa.gov/data/datasheets/wvs.html
https://www.ngdc.noaa.gov/mgg/shorelines/data/gshhg/latest/
https://www.ngdc.noaa.gov/mgg/shorelines/

> Wessel, P., and W. H. F. Smith (1996), A global, self-consistent, hierarchical, high-resolution shoreline database, J. Geophys. Res., 101(B4), 8741–8743, doi:10.1029/96JB00104.

```sh
source ~/proyectos/CES/cesdata/env/project-env.sh

mkdir -p $GISDATA/topography/global/GSHHG
cd $GISDATA/topography/global/GSHHG

wget --continue https://www.ngdc.noaa.gov/mgg/shorelines/data/gshhg/latest/gshhg-shp-2.3.7.zip
#cd $WORKDIR
unzip gshhg-shp-2.3.7.zip
```
