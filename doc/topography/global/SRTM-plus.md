# SRTM30_PLUS
 SRTM30, COASTAL & RIDGE MULTIBEAM, ESTIMATED TOPOGRAPHY

##Reference,

sounding data:
> Becker, J. J., D. T. Sandwell, W. H. F. Smith, J. Braud, B. Binder, J. Depner, D. Fabre, J. Factor, S. Ingalls, S-H. Kim, R. Ladner, K. Marks, S. Nelson, A. Pharaoh, R. Trimmer, J. Von Rosenberg, G. Wallace, P. Weatherall., Global Bathymetry and Elevation Data at 30 Arc Seconds Resolution: SRTM30_PLUS, Marine Geodesy, 32:4, 355-371, 2009.

URL: https://topex.ucsd.edu/WWW_html/srtm30_plus.html

Data in: ftp://topex.ucsd.edu/pub/srtm30_plus/

 topo30 format:  The  subdirectory called topo30 has the data stored in a single large file of 2-byte integers in MSB format (i.e. big-endian).  The grid spans 0 to 360 in longitude and -90 to 90 in latitude. The upper left corner of the upper left grid cell has latitude 90 and longitude 0.  There are 43200 columns and 21600 rows. A matching source identification file (SID) called topo30_sid is also included.  The sid numbers are stored as unsigned  2-byte integers.

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh
source ~/proyectos/UNSW/cesdata/env/katana-env.sh

DPATH=topography/global
DNAME=SRTM30-plus

mkdir -p $GISDATA/$DPATH/$DNAME/
cd $GISDATA/$DPATH/$DNAME/


wget ftp://topex.ucsd.edu/pub/srtm30_plus/topo30/topo30.grd

```
