# Global Biodiversity Information Facility

## About


### Reference

>

### Documentation


### Data download and preparation

The containing folder for all gbif data is this:
```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh
mkdir -p $GISDATA/species-dist/global/GBIF
```

We download data for each project directly from data.gbif.org or using R packages like `spocc`. We save each one in a folder (using this naming convention PROJECTNAME/DOWNLOADFORMAT/DATE) and use rsync to syncronise with repository.

```sh
export srcdir=$GISDATA/species-dist/global/GBIF/
export dstdir=$zID@kdm.restech.unsw.edu.au:/srv/scratch/cesdata/gisdata/species-dist/global/GBIF

rsync -gloptrunv $srcdir/* $dstdir
```
