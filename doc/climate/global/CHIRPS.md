# The Climate Hazards Group InfraRed Precipitation with Station ([CHIRPS](http:/
/chg.geog.ucsb.edu/data/chirps))

Quasi-global distribution (50S-50N), gridded 0.05 degree resolution, 1981 to near-real time precipitation time series.

https://www.chc.ucsb.edu/data/chirps

old links:
[README](ftp://ftp.chg.ucsb.edu/pub/org/chg/products/CHIRPS-2.0/README-CHIRPS.txt), [FAQ](http://chg-wiki.geog.ucsb.edu/wiki/CHIRPS_FAQ), [Publication](http://pubs.usgs.gov/ds/832/)

Publication: https://www.nature.com/articles/sdata201566

https://data.chc.ucsb.edu/products/CHIRPS-2.0/
https://data.chc.ucsb.edu/products/CHIRPS-2.0/README-CHIRPS.txt

```sh
source proyectos/UNSW/cesdata/env/project-env.sh
mkdir -p $GISDATA/climate/global/CHIRPS
cd $GISDATA/climate/global/CHIRPS

# all in one file:
wget --continue https://data.chc.ucsb.edu/products/CHIRPS-2.0/global_monthly/netcdf/chirps-v2.0.monthly.nc


```
