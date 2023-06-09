# Global Georeferenced Database of Dams

http://globaldamwatch.org/goodd/

#### Citation
> Mulligan, M., van Soesbergen, A. and Saenz, L. 2020. GOODD, a global dataset of more than 38,000 georeferenced dams. Scientific Data 7 (31).

#### Data access

Figshare collection at: https://springernature.figshare.com/collections/GOODD_a_global_dataset_of_more_than_38_000_georeferenced_dams/4648214
#### Data download and preparation


```sh
source $HOME/proyectos/CES/cesdata/env/project-env.sh

mkdir -p $GISDATA/hydrology/global/GOODD-2020
cd $GISDATA/hydrology/global/GOODD-2020
wget --continue https://springernature.figshare.com/ndownloader/files/17462066 --output-document=GOODD_data.zip
unzip GOODD_data.zip

```
