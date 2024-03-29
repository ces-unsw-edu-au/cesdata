# Soil and Landscape Grid of Australia
##

## Available data

https://www.clw.csiro.au/aclep/soilandlandscapegrid/GetData-DAP.html

## Data download:


```sh
source ~/proyectos/CES/cesdata/env/project-env.sh


mkdir -p $GISDATA/soil/regional/soil-landscape-grid-australia
cd $GISDATA/soil/regional/soil-landscape-grid-australia

for VAR in AWC Bulk-Density Clay Depth_of_Regolith Depth_of_Soil ECEC SOC  Sand  Silt  Total_N Total_P pHc
do
  wget ftp://qld.auscover.org.au/tern-soils/Products/National_digital_soil_property_maps/${VAR}/ --output-document=${VAR}.list
  grep tif ${VAR}.list >> enlaces
done
wget --continue -i enlaces --force-html

```

File name conventions: https://www.clw.csiro.au/aclep/soilandlandscapegrid/MetaData/ASLG_File_Naming_Conventions.html


Can we compress these files?

```sh
source ~/proyectos/CES/cesdata/env/project-env.sh


mkdir -p $GISDATA/soil/regional/soil-landscape-grid-australia
cd $GISDATA/soil/regional/soil-landscape-grid-australia
gzip SOC_100_200_EV_N_P_AU_TRN_C_20140801.tif ## minimal compression because it is already using LZW


```
