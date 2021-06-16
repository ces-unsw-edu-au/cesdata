# Large Marine Ecosystems of the World

https://ioc.unesco.org/topics/large-marine-ecosystems
https://celebrating200years.noaa.gov/breakthroughs/ecosystems/lme_map.jpg
https://www.lmehub.net/#patagonian-shelf
https://iwlearn.net/marine/lmes/list
https://www.marineregions.org/sources.php#ecosystems


## Citation
> Pope, Addy. (2017). Large Marine Ecosystems of the World, [Dataset]. University of Edinburgh. https://doi.org/10.7488/ds/1902.


## Data download and preparation

https://datashare.ed.ac.uk/handle/10283/2552


```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh


mkdir -p $GISDATA/ecoregions/global/LME/
cd $GISDATA/ecoregions/global/LME/

wget --continue 'https://datashare.ed.ac.uk/bitstream/handle/10283/2552/lmes_64.zip?sequence=1&isAllowed=y' --output-document=lmes_64.zip


```
