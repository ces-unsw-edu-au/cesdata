# HydroATLAS version 1.0


[Webpage](https://www.hydrosheds.org/page/hydroatlas) / [Documentation](https://www.hydrosheds.org/images/inpages/HydroATLAS_TechDoc_v10.pdf)

#### Citation
> Linke, S., Lehner, B., Ouellet Dallaire, C., Ariwi, J., Grill, G., Anand, M., Beames, P., Burchard-Levine, V., Maxwell, S., Moidu, H., Tan, F., Thieme, M. (2019). Global hydro-environmental sub-basin and river reach characteristics at high spatial resolution. Scientific Data 6: 283. doi: 10.1038/s41597-019-0300-6 (open access)

#### Data access

Figshare data repository at https://doi.org/10.6084/m9.figshare.9890531

#### Data download and preparation

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh
source ~/proyectos/UNSW/cesdata/env/katana-env.sh
mkdir -p $GISDATA/hydrology/global/HydroATLAS
cd $GISDATA/hydrology/global/HydroATLAS

wget -b --continue https://ndownloader.figshare.com/articles/9890531/versions/1 --output-document HydroATLAS.zip

unzip HydroATLAS.zip
unzip -n BasinATLAS_Data_v10_shp.zip

##rm HydroATLAS.zip


```
Unzip in this directory (files are too large for tmp folders / home folder in Katana)
```sh
unzip RiverATLAS_Data_v10.gdb.zip
psql gisdata -c "CREATE SCHEMA HydroSHEDS"
ogr2ogr -overwrite -f "PostgreSQL" PG:"host=localhost user=jferrer dbname=gisdata" -lco SCHEMA=hydrosheds RiverATLAS_v10.gdb -nln riveratlas
ogr2ogr -overwrite -f "PostgreSQL" PG:"host=localhost user=jferrer dbname=gisdata" -lco SCHEMA=hydrosheds BasinATLAS_v10.gdb

```
#### Catalogue of attributes

`BasinATLAS_Catalog_v10.pdf`
for xoo:
Spatial extent {x}: {s} in sub-basin | {u} in total watershed upstream of sub-basin pour point
Dimension {oo}: {yr} annual average | {mx} annual maximum | {01-12} monthly average


ID-H03: Inundation Extent: inu_pc_{xoo} where xoo is one of: smn | smx | slt | umn | umx | ult
ID-H10 Groundwater Table Depth gwt_cm_sav
ID-C07 Global Aridity Index  ari_ix_{xoo} where xoo is one of: sav | uav
ID-C08 Climate Moisture Index cmi_ix_{xoo} where xoo is one of: syr | s01-s12 | uyr
ID-C09 Snow Cover Extent snw_pc_{xoo} syr | smx | s01-s12 | uyr
ID-L12 Permafrost Extent prm_pc_{xoo} sse | use

ID-L10 Irrigated Area Extent (Equipped) ire_pc_{xoo} sse | use
#### Notes
*
