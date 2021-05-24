# Soil and Landscape Grid of Australia
##

## Available data

https://www.clw.csiro.au/aclep/soilandlandscapegrid/GetData-DAP.html

## Data download:


```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh
source ~/proyectos/UNSW/cesdata/env/katana-env.sh

mkdir -p $GISDATA/soil/regional/soil-landscape-grid-australia
cd $GISDATA/soil/regional/soil-landscape-grid-australia

for VAR in AWC Bulk-Density Clay Depth_of_Regolith Depth_of_Soil ECEC SOC  Sand  Silt  Total_N Total_P pHc
do
  wget ftp://qld.auscover.org.au/tern-soils/Products/National_digital_soil_property_maps/${VAR}/ --output-document=${VAR}.list
  grep tif ${VAR}.list >> enlaces
done
wget --continue -i enlaces --force-html

```
