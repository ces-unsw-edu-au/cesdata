# GloBI

> Data indexed by GloBI is generously provided by researchers and collections openly sharing their datasets. When using this data, please make sure to attribute the original data contributors, including citing the specific datasets in derivative work. Each record indexed by GloBI contains a reference and dataset citation. Also, please consider to contribute to improve access to existing species interaction data.

> Species interaction datasets indexed by GloBI can be accessed in various ways. For most, this website and its pages may be helpful to poke around the data. Other projects like GoMexSI, Encyclopedia of Life, and Ecosystem Explorer present GloBI data in a human readable format.

```sh

source ~/proyectos/UNSW/cesdata/env/project-env.sh
mkdir -p $GISDATA/biotic-interactions/global/GloBI
cd $GISDATA/biotic-interactions/global/GloBI

wget --continue https://zenodo.org/record/6604060/files/interactions.tsv.gz

wget --continue https://zenodo.org/record/6604060/files/neo4j-graphdb.zip
```
