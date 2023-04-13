# Global River Widths from Landsat (GRWL) Database


#### Citation

> Allen and Pavelsky (2018) Global Extent of Rivers and Streams. Science. https://doi.org/10.1126/science.aat0636


#### Data access

> Allen, George H., & Pavelsky, Tamlin M. (2018). Global River Widths from Landsat (GRWL) Database (Version V01.01) [Data set]. Zenodo. http://doi.org/10.5281/zenodo.1297434

#### Data download and preparation

```sh
mkdir -p $GISDATA/topo/GRWL
cd $GISDATA/topo/GRWL

for arch in GRWL_summaryStats_V01.01.zip GRWL_mask_V01.01.zip GRWL_vector_V01.01.zip
do
   wget --continue https://zenodo.org/record/1297434/files/${arch}'?download=1' --output-document=${arch}
done


```

#### Notes
*
