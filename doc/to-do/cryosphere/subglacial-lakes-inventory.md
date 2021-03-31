# Inventory of Subglacial lakes

Point location of known subglacial lakes in both hemispheres.

#### Citation

This was assembled by D. Keith from following sources.

> Wright, A., & Siegert, M. (2012). *A fourth inventory of Antarctic subglacial lakes*. **Antarctic Science**, 24(6), 659-664. doi:[10.1017/S095410201200048X](http://dx.doi.org/10.1017/S095410201200048X)

> Siegert Martin J., Ross Neil and Le Brocq Anne M. Recent advances in understanding Antarctic subglacial lakes and hydrology374Philosophical Transactions of the Royal Society A: Mathematical, Physical and Engineering Sciences https://doi.org/10.1098/rsta.2014.0306

> Palmer, S. J., Dowdeswell, J. A., Christoffersen, P., Young, D. A., Blankenship, D. D., Greenbaum, J. S., Benham, T., Bamber, J., and Siegert, M. J. ( 2013), Greenland subglacial lakes detected by radar, Geophys. Res. Lett., 40, 6154– 6159, doi:10.1002/2013GL058383.

> Thór Marteinsson, V., Rúnarsson, Á., Stefánsson, A. et al. Microbial communities in the subglacial waters of the Vatnajökull ice cap, Iceland. ISME J 7, 427–437 (2013). https://doi.org/10.1038/ismej.2012.97

> Livingstone, S., Utting, D., Ruffell, A. et al. Discovery of relict subglacial lakes and their geometry and mechanism of drainage. Nat Commun 7, ncomms11767 (2016). https://doi.org/10.1038/ncomms11767

> Bowling, J.S., Livingstone, S.J., Sole, A.J. et al. Distribution and dynamics of Greenland subglacial lakes. Nat Commun 10, 2810 (2019). https://doi.org/10.1038/s41467-019-10821-w

#### Data access

A spreadsheet with the original data from the *A fourth inventory of Antarctic subglacial lakes* is available at:
* https://www.cambridge.org/core/journals/antarctic-science/article/fourth-inventory-of-antarctic-subglacial-lakes/81B35C31B0DFCE1B3A0705B779D3AF58#fndtn-supplementary-materials

The zipfiles were provided directly by D. Keith (pers. comm.).

#### Data download and preparation


```sh
mkdir -p $GISDATA/inventories/subglacial_lakes
cd $GISDATA/inventories/subglacial_lakes
 mv ~/Downloads/S095410201200048Xsup001.xls  .
 mv ~/Downloads/SubGlacial_Lakes_NS.zip .

cd $WORKDIR
unzip $GISDATA/inventories/subglacial_lakes/SubGlacial_Lakes_NS.zip

```

#### Notes
