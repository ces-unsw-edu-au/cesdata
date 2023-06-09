# Sea Ice Index, Version 3

[Webpage](https://nsidc.org/data/G02135/versions/3)


#### Citation
> Fetterer, F., K. Knowles, W. N. Meier, M. Savoie, and A. K. Windnagel. 2017, updated daily. Sea Ice Index, Version 3. [Indicate subset used]. Boulder, Colorado USA. NSIDC: National Snow and Ice Data Center. doi: https://doi.org/10.7265/N5K072F8. [Date Accessed].

#### Data access

Data is available at ftp://sidads.colorado.edu/DATASETS/NOAA/G02135/
Use Earth-data login details


#### Data download and preparation

```sh
source ~/proyectos/CES/cesdata/env/project-env.sh


mkdir -p $GISDATA/cryosphere/global/SeaIceIndex
cd $GISDATA/cryosphere/global/SeaIceIndex

wget -b --continue -np -nH --recursive --cut-dirs=3  ftp://sidads.colorado.edu/DATASETS/NOAA/G02135/north/monthly/geotiff/

wget -b --continue -np -nH --recursive --cut-dirs=3  ftp://sidads.colorado.edu/DATASETS/NOAA/G02135/south/monthly/geotiff/

```
