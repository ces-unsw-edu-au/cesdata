# 500‐m Resolution Daily Global Surface Water Change Database (2001–2016)


#### Citation

> Luyan Ji, Peng Gong, Jie Wang, Jiancheng Shi, Zhiliang Zhu (2018) *Construction of the 500-m Resolution Daily Global Surface Water Change Database (2001-2016)*. **Water Resources Research** DOI [10.1029/2018wr023060](http://dx.doi.org/10.1029/2018wr023060)

#### Data access

Data is available at:
> http://data.ess.tsinghua.edu.cn/modis_500_2001_2016_waterbody.html

But no documentation or metadata is provided.

#### Data download and preparation

This dataset is **HUGE**, each *compressed* file is 16G.

```sh
source ~/proyectos/CES/cesdata/env/project-env.sh

mkdir -p $GISDATA/water/global/ModisDailyWater/
cd $GISDATA/water/global/ModisDailyWater/

for YEAR in $(seq 2001 2016)
do
 wget -b -o wget-log-$YEAR --continue  http://data.ess.tsinghua.edu.cn/data/water/MODISWater-500-2001-2015/${YEAR}.rar
done

# Check that all finished without problem:
 tail wget-log*

# alternative:
# curl -C - -O http://data.ess.tsinghua.edu.cn/data/water/MODISWater-500-2001-2015/[2001-2016].rar

```

Extract data (using a PBS job: `qsub -I -l select=1:ncpus=1:mem=120gb,walltime=12:00:00`)

```sh
source ~/proyectos/CES/cesdata/env/project-env.sh

cd $GISDATA/water/ModisDailyWater/

lsar -l 2016.rar ## 242623 directories/files
unar 2016.rar ## ca. 2 hours to finish - successful extraction
tree -a 2016-v3/ ## 331 directories, 242292 files
du -sch 2016-v3/ ## 39G
```

Now repeat this for all the others, using a longer PBS job...

```sh
for YEAR in $(seq 2001 2005)
do
   unar ${YEAR}.rar
done
```

... or an array of jobs to finish earlier:

```sh
qsub -J 2006-2015 $SCRIPTDIR/inc/pbs/extract-water-Global-daily-surface-water.pbs
```

#### VRT datasets

Builds VRT (Virtual Dataset) as a mosaic of the list of input files
```sh
ssh -Y $zID@katana.restech.unsw.edu.au
qsub -I -X -l select=1:ncpus=1:mem=120gb,walltime=12:00:00
##module avail geos
module add python/2.7.15 perl/5.28.0 gdal/3.2.1 geos/3.8.1
module add grass/7.6.1
module add R/4.0.2  proj4/5.1.0
source ~/proyectos/CES/cesdata/env/project-env.sh

mkdir -p $GISDATA/water/global/ModisDailyWater/index
cd $GISDATA/water/global/ModisDailyWater/index

for YEAR in $(seq 2001 2016)
do
   mkdir -p $GISDATA/water/global/ModisDailyWater/index/${YEAR}
   cd $GISDATA/water/global/ModisDailyWater/index/${YEAR}
   for VAR in water flag
   do
      for DOY in {001..366}
      do
         ##ls $GISDATA/water/global/ModisDailyWater/${YEAR}/*/${YEAR}*${DOY}_${VAR}.tiff
         if [ -e index_${VAR}_${YEAR}_${DOY}.vrt ]
         then
            echo "listo"
         else
            gdalbuildvrt index_${VAR}_${YEAR}_${DOY}.vrt $GISDATA/water/global/ModisDailyWater/${YEAR}*/*/${YEAR}*${DOY}_${VAR}.tiff
         fi
      done
   done
done


cd $GISDATA/water/global/ModisDailyWater/index

for i in $(seq 2001 2016);
do
  echo $i
   ls $i/* | wc
done


```

There are four discrete values as 0-Land, 61-Water (unfrozen), 62-Water (frozen), and 255-Fill (areas of no value).


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
