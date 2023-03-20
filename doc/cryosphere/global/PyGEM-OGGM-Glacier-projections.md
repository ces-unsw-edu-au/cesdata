# Global PyGEM-OGGM Glacier Projections with RCP and SSP Scenarios, Version 1 (HMA2_GGP)

https://nsidc.org/data/hma2_ggp/versions/1

> This data set comprises results from a hybrid glacier evolution model that uses the mass balance module of the Python Glacier Evolution Model (PyGEM) and the glacier dynamics module of the Open Global Glacier Model (OGGM). Output parameters include projections of glacier mass change, fixed runoff, and various mass balance components at regionally aggregated and glacier scales.



## Citation

> Rounce, D., R. Hock, and F. Maussion. (2022). Global PyGEM-OGGM Glacier Projections with RCP and SSP Scenarios, Version 1 [Data Set]. Boulder, Colorado USA. NASA National Snow and Ice Data Center Distributed Active Archive Center. https://doi.org/10.5067/P8BN9VO9N5C7. Date Accessed 03-19-2023.


## User Guide

https://nsidc.org/sites/default/files/documents/user-guide/hma2_ggp-v001-userguide_0.pdf

## Data access

Instructions for Programmatic Data Access are here: https://nsidc.org/data/user-resources/help-center/programmatic-data-access-guide

````sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh
mkdir -p $GISDATA/cryosphere/global/PyGEM-OGGM
cd $GISDATA/cryosphere/global/PyGEM-OGGM


for VAR in mass_annual_mad_50sets_2000_2100 mass_annual_50sets_2000_2100
do 
    for SCN in ssp119 ssp126 ssp245 ssp370 ssp585 
    do
        wget --load-cookies ~/.urs_cookies --save-cookies ~/.urs_cookies --keep-session-cookies --no-check-certificate --auth-no-challenge=on -r --reject "index.html*" -np -e robots=off -nd --continue https://n5eil01u.ecs.nsidc.org/HMA/HMA2_GGP.001/2000.01.01/R16_glac_${VAR}-${SCN}.nc        
    done
done 

gdalwarp NETCDF:$GISDATA/climate/global/CHIRPS/chirps-v2.0.monthly.nc:precip -t_srs EPSG:4326 -te -74 0 -58 13 -of 'GTiff' Test1.tif

```
