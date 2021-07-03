module add python/3.8.3 perl/5.28.0 gdal/3.2.1 geos/3.8.1
module add hdf5/1.10.3 proj/7.2.0 sqlite/3.31.1 spatialite/5.0.0b0

# which python3
mkdir -p $HOME/.venvs/

python3 -m venv $HOME/.venvs/GIS-python --system-site-packages
source $HOME/.venvs/GIS-python/bin/activate
# which python3

pip3 list
pip install --upgrade pip
pip install geopandas fiona
##osgeo already installed
deactivate
