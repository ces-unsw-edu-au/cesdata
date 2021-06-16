# Global Distribution of Mangroves USGS, version 1.3

> This dataset shows the global distribution of mangrove forests, derived from earth observation satellite imagery. The dataset was created using Global Land Survey (GLS) data and the Landsat archive. Approximately 1,000 Landsat scenes were interpreted using hybrid supervised and unsupervised digital image classification techniques. See Giri et al. (2011) for full details.


## Citation

> Giri C, Ochieng E, Tieszen LL, Zhu Z, Singh A, Loveland T, Masek J, Duke N (2011). *Status and distribution of mangrove forests of the world using earth observation satellite data* (version 1.3, updated by UNEP-WCMC). **Global Ecology and Biogeography** 20: 154-159. doi: [10.1111/j.1466-8238.2010.00584.x] .

> Giri, C., E. Ochieng, L.L.Tieszen, Z. Zhu, A. Singh, T. Loveland, J. Masek, and N. Duke. 2013. **Global Mangrove Forests Distribution, 2000**. Palisades, NY: NASA Socioeconomic Data and Applications Center (SEDAC). https://doi.org/10.7927/H4J67DW8. Accessed DAY MONTH YEAR


## Data access
Available at WCMC:
http://data.unep-wcmc.org/datasets/4

Available at SEDAC:
https://sedac.ciesin.columbia.edu/data/set/lulc-global-mangrove-forests-distribution-2000


## Data download and preparation

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh
source ~/proyectos/UNSW/cesdata/env/katana-env.sh

mkdir -p $GISDATA/ecosystems/global/WCMC-mangroves-2000
cd $GISDATA/ecosystems/global/WCMC-mangroves-2000

wget --continue http://wcmc.io/WCMC_010 --output-document=WCMC-mangroves-2000.zip

```

Check download
```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh
source ~/proyectos/UNSW/cesdata/env/katana-env.sh

cd $WORKDIR

unzip $GISDATA/ecosystems/global/WCMC-mangroves-2000/WCMC-mangroves-2000.zip
tree 01_Data


```
