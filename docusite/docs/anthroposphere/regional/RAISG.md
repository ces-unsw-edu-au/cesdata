
Registrarse y descargar datos:

```sh
scp -r ~/Download/RAISG/ terra.ad.unsw.edu.au:~/workdir/sandbox/deforestacion-vzla
```

```sh
cd $WORKDIR/RAISG
unzip MineriaIlegal2020.zip 
unzip mineria2020.zip 
ogr2ogr $WORKDIR/RAISG/mineria.gpkg $WORKDIR/RAISG/mineria.shp -clipsrc $vzlabbx -nlt MULTIPOLYGON
ogr2ogr $WORKDIR/RAISG/mineria-ln.gpkg $WORKDIR/RAISG/MineriaIlegal_ln.shp -clipsrc $vzlabbx 
ogr2ogr $WORKDIR/RAISG/mineria-pt.gpkg $WORKDIR/RAISG/MineriaIlegal_pt.shp -clipsrc $vzlabbx 
ogr2ogr $WORKDIR/RAISG/mineria-pol.gpkg $WORKDIR/RAISG/MineriaIlegal_pol.shp -clipsrc $vzlabbx -makevalid -nlt MULTIPOLYGON

```
