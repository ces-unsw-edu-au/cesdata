# Global prevalence of non-perennial rivers and streams


## Citation
> Messager, M. L., Lehner, B., Cockburn, C., Lamouroux, N., Pella, H., Snelder, T., Tockner, K., Trautmann, T., Watt, C. & Datry, T. (2021). Global prevalence of non-perennial rivers and streams. Nature. https://doi.org/10.1038/s41586-021-03565-5

## Data access

Figshare data repository at https://doi.org/10.6084/m9.figshare.14633022.v1

These datasets have been generated with source code located at http://messamat.github.io/globalirmap/ .


## Data download and preparation

```sh
source ~/proyectos/CES/cesdata/env/project-env.sh

mkdir -p $GISDATA/hydrology/global/GIRES
cd $GISDATA/hydrology/global/GIRES

wget -b --continue https://ndownloader.figshare.com/articles/14633022/versions/1 --output-document GIRESv10.zip

unzip -u GIRESv10.zip
unzip -u GIRES_v10_gdb.zip
# rm GIRESv10.zip

module add python/2.7.15 perl/5.28.0 gdal/3.2.1 geos/3.8.1
ogrinfo GIRES_v10.gdb/

```

## Catalogue of attributes

`README_Technical_documentation_GIRES_v10.pdf`
