# Global HANPP 2000
> Haberl, H., K.-H. Erb, F. Krausmann, V. Gaube, A. Bondeau, C. Plutzar, S. Gingrich, W. Lucht and M. Fischer-Kowalski, (2007). Quantifying and mapping the global human appropriation of net primary production in Earth's terrestrial ecosystems. Proceedings of the National Acadademy of Sciences of the United States of America 104, 12942-12947.

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh

mkdir -p $GISDATA/antroposphere/global/HANPP-2000
cd $GISDATA/antroposphere/global/HANPP-2000

wget --continue https://boku.ac.at/fileadmin/data/H03000/H73000/H73700/Data_Download/Data/Global_HANPP_Download_as_package.zip
unzip -u Global_HANPP_Download_as_package.zip
unzip -u 3Download\ as\ package/2all\ ASCII\ grids/all_grids.zip

```
