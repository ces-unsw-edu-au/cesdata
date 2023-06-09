# sPlotOpen

> sPlotOpen is a large, open-access dataset of vegetation plots. It contains data on 95,104 vegetation plots, organized in three partially overlapping, environmentally-balanced datasets (~50,000 plots each), to be used as replicates in global analyses. Besides geographic location, date, plot size, biome, elevation, slope, aspect, vegetation type, naturalness, coverage of various vegetation layers and source dataset, plot-level data also include community-weighted means and variances of 18 plant functional traits from the ‘TRY’ database. sPlotOpen has a global spatial extent; the spatial grain is 0.01-40,000 m². Plots were recorded between 1888 and 2015. sPlotOpen contains data on 42,677 vascular plant species.

## Citation
> Sabatini, FM, Lenoir, J, Hattab, T, et al. sPlotOpen – An environmentally balanced, open-access, global dataset of vegetation plots. Global Ecol Biogeogr. 2021; 30: 1740– 1764. https://doi.org/10.1111/geb.13346

## Data availability

https://doi.org/10.25829/idiv.3474-40-3292

## Data download

```sh
source ~/proyectos/CES/cesdata/env/project-env.sh


mkdir -p $GISDATA/vegetation-plots/global/sPlotOpen/
cd $GISDATA/vegetation-plots/global/sPlotOpen/

wget --continue --no-check-certificate "https://idata.idiv.de/ddm/Data/DownloadZip/3474?version=5047" --output-document=sPlotOpen.zip
unzip -u sPlotOpen.zip
```
