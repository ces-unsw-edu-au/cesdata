# Sea Ice Trends and Climatologies from SMMR and SSM/I-SSMIS, Version 3

[Webpage](https://nsidc.org/data/NSIDC-0192/versions/3)

Ice cover or sea ice concentration is measured as the percentage of the ocean surface covered by ice. Ice persistence is the percentage of months over the data set time period that ice existed at a location (sea ice concentration > 15 %).

Along with one historical data file from the Electrically Scanning Microwave Radiometer (ESMR), these data are derived from the Scanning Multichannel Microwave Radiometer (SMMR), the Special Sensor Microwave/Imager (SSM/I), and the Special Sensor Microwave Imager/Sounder (SSMIS).

#### Citation
> Stroeve, J. and W. N. Meier. 2018. *Sea Ice Trends and Climatologies from SMMR and SSM/I-SSMIS, Version 3*. [Indicate subset used]. Boulder, Colorado USA. **NASA National Snow and Ice Data Center Distributed Active Archive Center**. doi: [10.5067/IJ0T7HFHB9Y6](https://doi.org/10.5067/IJ0T7HFHB9Y6). [Date Accessed].

#### Data access

Data is available at https://daacdata.apps.nsidc.org/pub/DATASETS/nsidc0192_seaice_trends_climo_v3/
Use Earth-data login details


#### Data download and preparation

```sh
source ~/proyectos/CES/cesdata/env/project-env.sh


mkdir -p $GISDATA/cryosphere/global/SMMR_SeaIceTrends
cd $GISDATA/cryosphere/global/SMMR_SeaIceTrends



## Update ~/.netrc with login and password and use --auth-no-challenge=on  

for HEMISPHERE in n s
do
   for MONTH in jan feb mar apr may jun jul aug sep oct nov dec
   do
   ## Another option, update ~/.netrc with login and password
      wget --auth-no-challenge=on  --continue https://daacdata.apps.nsidc.org/pub/DATASETS/nsidc0192_seaice_trends_climo_v3/monthly-climatology/mean.${MONTH}.1979-2019.${HEMISPHERE}
   wget --auth-no-challenge=on  --continue  https://daacdata.apps.nsidc.org/pub/DATASETS/nsidc0192_seaice_trends_climo_v3/ice-persistence/persistence.${MONTH}.1979-2019.${HEMISPHERE}
   done
done


```

See [this advice](https://nsidc.org/support/22256950-How-do-I-import-the-sea-ice-trends-data-into-ArcGIS-) on data format.

For the northern hemisphere


```sh

for VAR in persistence mean
do
   for MONTH in jan feb mar apr may jun jul aug sep oct nov dec
   do
      mv $VAR.$MONTH.1979-2018.n $VAR.$MONTH.1979-2018.n.bil
      echo "nrows 448
      ncols 304
      nbands 1
      nbits 8
      layout bil
      byteorder I
      ulxmap -3837500
      ulymap 5837500
      xdim 25000
      ydim 25000" > $VAR.$MONTH.1979-2018.n.hdr
      ## EPSG:3411
      gdalwarp $VAR.$MONTH.1979-2018.n.bil -s_srs "+proj=stere +lat_0=90 +lat_ts=70 +lon_0=-45 +k=1 +x_0=0 +y_0=0 +a=6378273 +b=6356889.449 +units=m +no_defs" $VAR.$MONTH.1979-2018.n.tif
   done
done
```

For the southern hemisphere

```sh
for VAR in persistence mean
do
   for MONTH in jan feb mar apr may jun jul aug sep oct nov dec
   do
      mv $VAR.$MONTH.1979-2018.s $VAR.$MONTH.1979-2018.s.bil
      echo "nrows 332
      ncols 316
      nbands 1
      nbits 8
      layout bil
      byteorder I
      ulxmap -3937500
      ulymap 4337500
      xdim 25000
      ydim 25000" > $VAR.$MONTH.1979-2018.s.hdr
      # EPSG:3412
      gdalwarp $VAR.$MONTH.1979-2018.s.bil -s_srs "+proj=stere +lat_0=-90 +lat_ts=-70 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=6378273 +b=6356889.449 +units=m +no_defs" $VAR.$MONTH.1979-2018.s.tif
   done
done

```

Combining both

```sh
for VAR in persistence mean
do
   for MONTH in jan feb mar apr may jun jul aug sep oct nov dec
   do
      gdalwarp $VAR.$MONTH.1979-2018.n.tif $VAR.$MONTH.1979-2018.s.tif  -t_srs "+proj=latlong +datum=WGS84" -te -180 -90 180 90 $VAR.$MONTH.1979-2018.tif
   done
done

```

#### Notes
* Pole hole: area not measured due to orbit inclination. For calculations it is considered to have > 15 % ice concentration. For total ice-covered area, the pixels under the pole hole are not used. In the Southern Hemisphere this does not affect sea ice data set.
* For SMMR, the hole is 611 km in radius and is located poleward of 84.5 degrees North. For SSM/I and SSMIS, the hole is 311 km in radius and is located poleward of 87.2 degrees North. This means there is a discontinuity in the Northern Hemisphere ice-covered area time series across the instrument transitions.
* The temporal coverage for this data set is 26 October 1978 to 31 December 2018.
* Spatial resolution is 25 km x 25 km
