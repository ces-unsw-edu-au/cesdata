# Global intertidal change

https://www.globalintertidalchange.org/data-viewer/tidal-wetland-change

## Citation

Murray, N. J., T. A. Worthington, P. Bunting, S. Duce, V. Hagger, C. E. Lovelock, R. Lucas, M. I. Saunders, M. Sheaves, M. Spalding, N. J. Waltham & M. B. Lyons (2022). "High-resolution mapping of losses and gains of Earth's tidal wetlands." Science. 376, 744-749. doi:10.1126/science.abm9583

## Data description

The principal data products from the global intertidal change analysis of the Landsat archive is a set of change maps, comprising:

"loss", 0-1 - integer representing loss, where 1 (loss) and 0 (no loss).

"lossYear", 01:19, 3 - integer representing the end year of the time-step of analysis (e.g., 19 = 2017-2019).

"lossType", 2,3,5 - integer representing intertidal ecosystem type: Tidal flat (2), Mangrove (3), Tidal marsh (5)).

"gain", 0-1 - integer representing gain, where  1 (gain) and 0 (no gain).

"gainYear",  01:19, 3  - integer representing the end year of the time-step of analysis (e.g., 19 = 2017-2019).

"gainType", 2,3,5 - integer representing intertidal ecosystem type: Tidal flat (2), Mangrove (3), Tidal marsh (5)).

In addition, we provide two tidal wetland extent data layers:

"twprobability_start", 0-100 - integer which represents the agreement of random forest decision trees for the tidal wetland class in t1 of the analysis, 1999-2001

"twprobability_end", 0-100 - integer which represents the agreement of random forest decision trees for the tidal wetland class in t7 of the analysis, 2017-2019

## Data access

For analysis, the dataset is made directly available in Google Earth Engine via the Earth Engine data catalogue (dataset link):

```{js}
ee.ImageCollection("JCU/Murray/GIC/global_tidal_wetland_change/2019")


The dataset is also available as shards on GCP Cloud Storage and can be downloaded using the `gsutil` command  `gsutil -m cp "gs://gic-archive/gic-2019-v1-0/v1-0-1/*.tif" "PATH-TO-LOCAL-FOLDER"`

The datasets generated for this study are available for viewing at the Global Intertidal Change website.
