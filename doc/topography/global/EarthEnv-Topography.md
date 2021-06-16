# Global 1,5,10,100-km Topography - EarthEnv

## Reference

> Amatulli, G., Domisch, S., Tuanmu, M.-N., Parmentier, B., Ranipeta, A., Malczyk, J., and Jetz, W. (2018) A suite of global, cross-scale topographic variables for environmental and biodiversity modeling. Scientific Data volume 5, Article number: 180040. DOI: doi:10.1038/sdata.2018.40.


> Amatulli, Giuseppe; Domisch, Sami; Tuanmu, Mao-Ning; Parmentier, Benoit; Ranipeta, Ajay; Malczyk, Jeremy; Jetz, Walter (2018): A suite of global, cross-scale topographic variables for environmental and biodiversity modeling, links to files in GeoTIFF format. PANGAEA, https://doi.org/10.1594/PANGAEA.867115

http://www.earthenv.org//topography

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh


DPATH=topography/global
DNAME=EarthEnv-topography

mkdir -p $GISDATA/$DPATH/$DNAME/
cd $GISDATA/$DPATH/$DNAME/

wget 'https://doi.pangaea.de/10.1594/PANGAEA.867114?format=textfile' --output-document=list1
wget 'https://doi.pangaea.de/10.1594/PANGAEA.867113?format=textfile' --output-document=list2


tail -n +14 list1 | cut -f4 >> enlaces
tail -n +14 list2 | cut -f4 >> enlaces

wget -nH -x --cut-dirs=1 --continue -i enlaces

```
