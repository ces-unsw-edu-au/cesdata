#  Forest Map for China
A Circa 2010 Thirty Meter Resolution Forest Map for China

## Refernce
> Li, C., J. Wang., L. Hu., L. Yu et al. 2014. "A Circa 2010 Thirty Meter Resolution Forest Map for China." Remote Sensing 6(6), 5325-5343; https://doi.org/10.3390/rs6065325

## Legend
Clas Codes: 211 evergreen broadleaf; 212 deciduous broadleaf; 214 bamboo; 221 evergreen needleleaf; 222 deciduous needleleaf; 230 mixed forest; 255 nonforest.



```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh


mkdir -p $GISDATA/forest/regional/China
cd $GISDATA/forest/regional/China
wget -b --continue  http://data.ess.tsinghua.edu.cn/data/China_forest_6type_clip.tif

```
