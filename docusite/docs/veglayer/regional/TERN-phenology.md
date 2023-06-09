# Phenology - MODIS, derived from MYD13A1 EVI, Australia coverage

> The Australian Phenology Product is a continental data set that allows the quantitative analysis of Australia’s phenology derived from MODIS Enhanced Vegetation Index (EVI) data using an algorithm designed to accommodate Australian conditions. The product can be used to characterize phenological cycles of greening and browning and quantify the cycles’ inter and intra annual variability from 2003 to 2018 across Australia. Phenological cycles are defined as a period of EVI-measured greening and browning that may occur at any time of the year, extend across the end of a year, skip a year (not occur for one or multiple years) or occur more than once a year. Multiple phenological cycles within a year can occur in the form of double cropping in agricultural areas or be caused by a-seasonal rain events in water limited environments. Based on per-pixel greenness trajectories measured by MODIS EVI, phenological cycle curves were modelled and their key properties in the form of phenological curve metrics were derived including: the first and second minimum point, peak, start and end of cycle; length of cycle, and; the amplitude of the cycle. Integrated EVI under the curve between the start and end of the cycle time of each cycle is calculated as a proxy of productivity.

## Citation

> Huete, A. (2021): Phenology - MODIS, derived from MYD13A1 EVI, Australia coverage. Version 1.0.0. Terrestrial Ecosystem Research Network. (Dataset). https://portal.tern.org.au/phenology-modis-derived-australia-coverage/23034

## Data access

```{sh}
source ~/proyectos/CES/cesdata/env/project-env.sh
mkdir -p $GISDATA/veglayer/regional/TERN-phenology/
cd $GISDATA/veglayer/regional/TERN-phenology/
module add R/4.0.2
R --vanilla
install.packages("thredds")
```

The actual data can be found by browsing through a  *thredds* catalog in https://dap.tern.org.au/thredds/catalog/landscapes/remote_sensing/modis/phenology_myd13a1/catalog.html. This dataset has a simple structure with one catalog entry for eight datasets, so in this case the script is very simple:

```{r}
## this is an example of how to download from the NCI THREDDS Server
library(thredds)

top_uri <- 'https://dap.tern.org.au/thredds/catalog/landscapes/remote_sensing/modis/phenology_myd13a1/catalog.xml'
base_url <- 'https://dap.tern.org.au/thredds/fileServer/'

Top <- thredds::CatalogNode$new(top_uri)
for (ds in Top$get_datasets()) {
  srcurl <- sprintf("%s/%s",base_url,ds$url)
  dstname <- ds$name
  print(srcurl)
  if (!file.exists(dstname))
    download.file(srcurl,dstname)
}

```
