# MOD44B Version 6 Vegetation Continuous Fields (VCF)

https://lpdaac.usgs.gov/products/mod44bv006/

### Reference
> DiMiceli, C.M., M.L. Carroll, R.A. Sohlberg, C. Huang, M.C. Hansen, and J.R.G. Townshend (2011), Annual Global Automated MODIS Vegetation Continuous Fields (MOD44B) at 250 m Spatial Resolution for Data Years Beginning Day 65, 2000 - 2010, Collection 5 Percent Tree Cover, University of Maryland, College Park, MD, USA.
> Dimiceli, C., Carroll, M., Sohlberg, R., Kim, D.H., Kelly, M., Townshend, J.R.G. (2015). MOD44B MODIS/Terra Vegetation Continuous Fields Yearly L3 Global 250m SIN Grid V006 [Data set]. NASA EOSDIS Land Processes DAAC. Accessed 2020-09-22 from https://doi.org/10.5067/MODIS/MOD44B.006


```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh



export MFTP=https://e4ftl01.cr.usgs.gov/
export VAR=MOD44B
export VRS=006
export REPO=MOLT
mkdir -p $GISDATA/vegcover/global/Modis-${VAR}.${VRS}
cd  $GISDATA/vegcover/global/Modis-${VAR}.${VRS}

wget --continue ${MFTP}/${REPO}/${VAR}.${VRS} --output-document=fechas
grep 20 fechas | sed -n 's/.*href="\([^"]*\).*/\1/p' > links

for FECHA in $(cat links)
do
  mkdir -p $GISDATA/vegcover/global/Modis-${VAR}.${VRS}/$FECHA
  cd $GISDATA/vegcover/global/Modis-${VAR}.${VRS}/$FECHA
  wget --continue ${MFTP}/${REPO}/${VAR}.${VRS}/${FECHA}
  grep hdf index.html | sed -n 's/.*href="\([^"]*\).*/\1/p' > links
  wget -b --user=$EARTHDATAUSR --password=$EARTHDATAPWD --continue -i links --base=${MFTP}${REPO}/${VAR}.${VRS}/${FECHA}/

done
```


If we want a subset, for example, for Venezuela we need tiles: h10 h11 h12 v07 v08

```sh
cd $GISDATA/sensores/Modis/$VAR/$VRS

for FECHA in $(cat links)
do
  cd $GISDATA/sensores/$VAR/$VRS/$FECHA
  rm qry
  touch qry
  for h in h10 h11 h12; do for v in v07 v08;   do grep $h$v links >> qry; done ;done ;
  sort qry | uniq  > qry2
  wget -b --user=$EARTHDATAUSR --password=$EARTHDATAPWD --continue -i qry2 --base=${MFTP}${REPO}/${VAR}.${VRS}/${FECHA}/
done

```
