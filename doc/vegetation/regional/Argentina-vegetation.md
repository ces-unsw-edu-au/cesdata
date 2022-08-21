# Unidades de vegetación de la Argentina

Found at:
http://geoportal.idesa.gob.ar/layers/geonode%3Aunidades_vegetacion
http://ojs.ecologiaaustral.com.ar/index.php/Ecologia_Austral/article/view/399

https://doi.org/10.25260/EA.18.28.1.0.399

Author: Oyarzabal, M; Clavijo, J; Oakley, L; Bignazoli, F; Tognetti, P; Barberis, I; Maturo, H; Aragón, R; Campanello, P; Prado, D; Oesterheld; M; León, R....

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh

mkdir -p $GISDATA/vegetation/regional/Argentina-vegetacion
cd  $GISDATA/vegetation/regional/Argentina-vegetacion

wget --continue 'http://geoportal.idesa.gob.ar/geoserver/wfs?format_options=charset%3AUTF-8&typename=geonode%3Aunidades_vegetacion&outputFormat=SHAPE-ZIP&version=1.0.0&service=WFS&request=GetFeature' --output-document=Unidades-vegetacion-Argentina.zip
```
