# Global Lake and River Ice Phenology Database

The data set was prepared by the North Temperate Lakes Long-Term Ecological Research program at the Center for Limnology at the University of Wisconsin-Madison from data submitted by participants in the Lake Ice Analysis Group ([LIAG](https://lter.limnology.wisc.edu/project/lake-ice-international-collaborations)).

#### Citation

> Benson, B., J. Magnuson, and S. Sharma. 2000, updated 2013. Global Lake and River Ice Phenology Database, Version 1. [Indicate subset used]. Boulder, Colorado USA. NSIDC: National Snow and Ice Data Center. doi: https://doi.org/10.7265/N5W66HP8. [Date Accessed].

#### Data access

There are at least two alternative pages for data access
* http://nsidc.org/data/lake_river_ice/freezethaw.html
* https://nsidc.org/data/g01377

#### Data download and preparation

```sh
mkdir -p $GISDATA/monitoring/LIAG_Ice
cd $GISDATA/monitoring/LIAG_Ice

## download complete table:
wget ftp://sidads.colorado.edu/pub/DATASETS/NOAA/G01377/liag_freeze_thaw_table.csv
wget ftp://sidads.colorado.edu/pub/DATASETS/NOAA/G01377/liag_physical_character_table.csv

## or, if downloaded using the form at
##  http://nsidc.org/data/lake_river_ice/freezethaw.html
## mv ~/Downloads/liag_ice.csv.gz .
## mv ~/Downloads/liag_info.csv.gz .
## cd $WORKDIR
## cp $GISDATA/monitoring/LIAG_Ice/liag_ice.csv.gz .
## gunzip liag_ice.csv.gz
```

#### Notes
* Only data contributed by members of LIAG, thus no data from southern hemisphere, Alaska, etc.
* Apparently last updated in 2013
