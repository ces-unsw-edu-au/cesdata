# 500‐m Resolution Daily Global Surface Water Change Database (2001–2016)


#### Citation

> Luyan Ji, Peng Gong, Jie Wang, Jiancheng Shi, Zhiliang Zhu (2018) *Construction of the 500-m Resolution Daily Global Surface Water Change Database (2001-2016)*. **Water Resources Research** DOI [10.1029/2018wr023060](http://dx.doi.org/10.1029/2018wr023060)

#### Data access

Data is available at:
> http://data.ess.tsinghua.edu.cn/modis_500_2001_2016_waterbody.html

But no documentation or metadata is provided.

#### Data download and preparation

This dataset is **HUGE**, each *compressed* file is 16G. Download and uncompressing is slow.

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh
source ~/proyectos/UNSW/cesdata/env/katana-env.sh
mkdir -p $GISDATA/water/ModisDailyWater/
cd $GISDATA/water/ModisDailyWater/

for YEAR in $(seq 2001 2016)
do
 wget -b -o wget-log-$YEAR --continue  http://data.ess.tsinghua.edu.cn/data/water/MODISWater-500-2001-2015/${YEAR}.rar
done

# alternative:
# curl -C - -O http://data.ess.tsinghua.edu.cn/data/water/MODISWater-500-2001-2015/[2001-2016].rar

# unrar -x 2001.rar # and wait for hours...

```

#### Notes
* Here some code for exploring in grass

```sh
cd $WORKDIR
conda deactivate
grass74 -c $GISDATA/sensores/ModisDailyWater/2001/h00v08/2001h00v08073_water.tiff $GISDB/raw/ModisDailyWater

r.in.gdal input=$GISDATA/sensores/ModisDailyWater/2001/h00v08/2001h00v08073_water.tiff output=water73

r.in.gdal input=$GISDATA/sensores/ModisDailyWater/2001/h00v08/2001h00v08216_water.tiff output=water216
r.in.gdal input=$GISDATA/sensores/ModisDailyWater/2001/h00v08/2001h00v08216_flag.tiff output=flag216

r.null water73 set=255
r.null water216 set=255
r.stats -ac flag216,water216

r.colors water216 color=wave

echo "0 yellow
61 blue
62 purple
end
" |
 r.colors water216 rules=-

r.stats -ac water73,water216
r.to.vect input=water216@PERMANENT output=water216v type=point
##v.out.ogr input=water216v type=point output="PG:host=localhost dbname=gisdata user=jferrer" output_layer=MDSW.water216v format=PostgreSQL
```
