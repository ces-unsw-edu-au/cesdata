# MAP OF THE ECOSYSTEMS OF CENTRAL AMERICA

Full map and GIS title and authors:

World Bank and CCAD. 2000. "Ecosystems of Central America (GIS map files at 1:250,000)." World Bank, Comisión Centroamerica de Ambiente y Desarrollo (CCAD), World Institute for Conservation and Environment (WICE), and the Centro Agronómico Tropical de Investigación y Enseñanza (CIAT), Washington, D.C. (http://www.worldbank.org/ca-env).

Full final document title and authors:

Vreugdenhil, D., J. Meerman, A. Meyrat, L. Diego Gómez, and D. J. Graham. 2002. Map of the Ecosystems of Central America: Final Report. World Bank, Washington, D.C.


https://www.birdlist.org/cam/themes/ecosystems_map.htm

CAM ECOSYSTEMS MAP
DOWNLOAD PAGE
https://www.birdlist.org/cam/themes/map_download_page.htm


http://www.projectmosquitia.com/files/Manual_Mapa_Ecosistemas.pdf

http://www.bio-nica.info/Biblioteca/Vreugdenhil2002MapEcosystems.pdf

http://documents.worldbank.org/curated/en/386971468223450848/Descripcion-de-los-ecosistemas


```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh
source ~/proyectos/UNSW/cesdata/env/katana-env.sh

mkdir -p $GISDATA/ecosystems/regional/worldbank-Central-America/
cd $GISDATA/ecosystems/regional/worldbank-Central-America/

wget --continue https://www.birdlist.org/cam/themes/map_download_page.htm
grep href map_download_page.htm | grep zip > enlaces1
wget -b --continue --force-html --base=https://www.birdlist.org/cam/themes/ -i enlaces1
grep href map_download_page.htm | grep pdf > enlaces2
wget --continue --force-html --base=https://www.birdlist.org/cam/themes/ -i enlaces2


ls *utm*
 ls *lam*

```
