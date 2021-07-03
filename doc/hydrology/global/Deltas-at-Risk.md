# Deltas at Risk

Links to:
/ [Webpage](http://www.globaldeltarisk.net/)
/ [Download](http://www.globaldeltarisk.net/data.html)

#### Citation
> Z.D. Tessler, C.J. Vörösmarty, M. Grossberg, I. Gladkova, H. Aizenman, J.P.M. Syvitski, E. Foufoula-Georgiou. Profiling Risk and Sustainability in Coastal Deltas of the World. Science 349(6248), 638-643 (2015) doi:10.1126/science.aab3574.



#### Data download and preparation

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh

mkdir -p $GISDATA/hydrology/global/Deltas-at-Risk
 cd $GISDATA/hydrology/global/Deltas-at-Risk

wget --continue http://www.globaldeltarisk.net/data/maps/global_map_30sec.tiff.tar.gz
wget --continue https://www.globaldeltarisk.net/data/maps/global_map_shp.tar.gz

##cd $WORKDIR
tar -xzvf $GISDATA/hydrology/global/Deltas-at-Risk/global_map_30sec.tiff.tar.gz
tar -xzvf $GISDATA/hydrology/global/Deltas-at-Risk/global_map_shp.tar.gz
```
