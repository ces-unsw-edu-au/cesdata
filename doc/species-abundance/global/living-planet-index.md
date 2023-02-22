# Living Planet Index


## Citation
> McRae et al. (2017) The Diversity-Weighted Living Planet Index: Controlling for Taxonomic Bias in a Global Biodiversity Indicator. PLoS ONE 12(1): e0169156

## Code 
https://github.com/Zoological-Society-of-London/rlpi

```sh
library(devtools)
# Install from main ZSL repository online
install_github("Zoological-Society-of-London/rlpi", dependencies=TRUE)

```

## Data
McRae, Louise; Deinet, Stefanie; Freeman, Robin (2016): LPI_LPR2016data_public.csv. figshare. Dataset. https://doi.org/10.6084/m9.figshare.4300022.v1

```sh
require(readr)
LPIdata <- read_csv("https://figshare.com/ndownloader/files/7012670")
```

## Testing code


```sh
# Load library
library(rlpi)


```