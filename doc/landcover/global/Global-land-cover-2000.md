
# Global Land Cover 2000 - GLC 2000

[GLC 2000](https://forobs.jrc.ec.europa.eu/products/glc2000/products.php)

## Citation
> E. Bartholomé Corresponding author & A. S. Belward (2005) GLC2000: a new approach to global land cover mapping from Earth observation data, International Journal of Remote Sensing, 26:9, 1959-1977, DOI: 10.1080/01431160412331291297

> The Global Land Cover Map for the Year 2000, 2003. GLC2000 database, European Commision Joint Research Centre. [GLC 2000](https://forobs.jrc.ec.europa.eu/products/glc2000/products.php).


```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh
source ~/proyectos/UNSW/cesdata/env/katana-env.sh

mkdir -p $GISDATA/landcover/global/GLC2000
cd $GISDATA/landcover/global/GLC2000

wget https://forobs.jrc.ec.europa.eu/products/glc2000/products.php
grep href products.php | grep Tiff.zip > enlaces
grep href products.php | grep Grid.zip >> enlaces
grep href products.php | grep grid.zip >> enlaces
grep href products.php | grep binary.zip >> enlaces
 wget --continue -i enlaces --force-html --continue
 wget --continue  https://forobs.jrc.ec.europa.eu/products/glc2000/legend/GLC2000_legend_summary.doc


```

The GLC2000 project uses the  hierarchical FAO Land Cover Classification System (LCCS).

Documentation:
https://forobs.jrc.ec.europa.eu/data/products/glc2000/final_report_v2.pdf

Class Land cover Class Land cover
10 Closed evergreen tropical forest 84 Permenent snow /ice
11 Open evergreen tropical forest 90 Urban
12 Bamboo dominated forest 110 Montane forests 500-1000m - dense evergreen
13 Closed semi-humid forest 111 Montane forests 500-1000m - open evergreen
14 Open semi-humid forest 112 Montane forests 500-1000m - bamboo
20 Closed deciduous forest 113 Montane forests 500-1000m - closed semi humid
21 Open deciduous forest 114 Montane forests 500-1000m - open semi humid
22 Closed semi deciduous forest 120 Montane forests 500-1000m - closed deciduous
23 Open semi deciduous forest 121 Montane forests 500-1000m - open deciduous
24 Semi deciduous transition forest 122 Montane forests 500-1000m - closed semi -deciduous
30 Mangroves 123 Montane forests 500-1000m - open semi- deciduous
31 Fresh water flooded forests 124 Montane forests 500-1000m - transition forest
33 Permanent swamp forests 130 Montane forests 500-1000m - flooded forest
40 Temperate closed evergreen broadleaf forest 131 Montane forests 500-1000m - flooded forest
42 Temperate mixed evergreen broadleaf forests 133 Montane forests 500-1000m - flooded forest
43 Temperate closed deciduous broadleaf forests 142 Montane forests 500-1000m - temperate mixed
44 Temperate open deciduous broadleaf forests 143 Montane forests 500-1000m - closed temperate deciduous
50 Agriculture - intensive 144 Montane forests 500-1000m - open temperate deciduous
51 Mosaic agriculture / degraded vegetation 160 Montane forests >1000m - dense evergreen
52 Mosaic agriculture / degraded forests 161 Montane forests >1000m - open evergreen
53 Forest plantations (Llanos of Venezuela) 162 Montane forests >1000m - bamboo dominated
60 Grass savannah 163 Montane forests > 1000m - closed semi humid
61 Shrub savannah 164 Montane forests > 1000m - open semi humid
63 Periodically flooded savannah 170 Montane forests >1000m - closed deciduous
64 Closed shrublands 171 Montane forests >1000m - open deciduous
65 Open shrublands 172 Montane forests >1000m - closed semi -deciduous
66 Periodically flooded shrublands 173 Montane forests >1000m - open semi- deciduous
67 Moorlands / heathlands 174 Montane forests >1000m - transition forest
68 Closed montane grasslands 180 Montane forests > 1000m flooded forest
69 Open montane grasslands 181 Montane forests > 1000m flooded forest
70 Closed steppe grasslands 182 Montane forests > 1000m flooded forest
71 Open steppe grasslands
183 Montane forests > 1000m flooded forest
75 Sparse desertic steppe shrub /grasslands
190 Montane forests >1000m -temperate closed broadleaf
80 Barren / bare soil
192 Montane forests >1000m - temperate mixed
81 Desert
193 Montane forests >1000m - closed temperate deciduous
82 Salt pans
194 Montane forests >1000m - open temperate deciduous
83 Water bodies
