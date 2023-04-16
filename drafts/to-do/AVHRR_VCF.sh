##http://glcf.umd.edu/data/treecover/data.shtml
##Full Example Citation DeFries, R., M. Hansen, J.R.G. Townshend, A.C. Janetos, and T.R. Loveland (2000), 1 Kilometer Tree Cover Continuous Fields, 1.0, Department of Geography, University of Maryland, College Park, Maryland, 1992-1993.
##Associated Peer-Reviewed Publication:DeFries, R., M. Hansen, J.R.G. Townshend, A.C. Janetos, and T.R. Loveland (2000) A new global 1km data set of percent tree cover derived from remote sensing. Global Change Biology. 6: 247-254. 

wget "ftp://ftp.glcf.umd.edu/glcf/Continuous_Fields_Tree_Cover/South_America/sa-latlong-treecover/sa-latlong-treecover.grd.gz"

##para Carla
gdalwarp -te -109 0 -60 32.5  -s_srs  "+proj=longlat +a=6378137 +rf=298.257223563 +no_defs+towgs84=0.000,0.000,0.000 " -ot Int16 -srcnodata "0" -dstnodata "-9999" -of EHdr na-latlong-treecover.grd sa-latlong-treecover.grd treecoverGLCF_Caribe.bil
echo 'NODATA        -9999' >> treecoverGLCF_Caribe.hdr

## 0 es NA, 254 es 0 (sin vegetacion) y 255 es menor a 10%
gdalwarp -te -74 0 -57 12.5  -s_srs  "+proj=longlat +a=6378137 +rf=298.257223563 +no_defs+towgs84=0.000,0.000,0.000 " -ot Int16 -srcnodata "0" -dstnodata "-9999"  -of EHdr sa-latlong-treecover.grd treecoverGLCF_vzla.bil
echo 'NODATA        -9999' >> treecoverGLCF_vzla.hdr

##R --vanilla

require(raster)
##r0=raster("treecoverGLCF_vzla.bil")
r0=raster("treecoverGLCF_Caribe.bil")
plot(r0)
values(r0)[values(r0)==254] <- 0
values(r0)[values(r0)==255] <- 5

writeRaster(r0, filename="arboreo_Caribe.bil",
            format='BIL', overwrite=TRUE,NAflag=-9999)

outdir <- "paraMaxEnt"
ff <- "arboreo_Caribe.bil"
system(sprintf("mkdir %s",outdir))
  system(sprintf("gdalwarp -s_srs  \"+proj=longlat +a=6378137 +rf=298.257223563 +no_defs+towgs84=0.000,0.000,0.000 \" -ot Int16 -srcnodata \"-9999\" -dstnodata \"-9999\" -of EHdr %s %s/%s",ff,outdir,ff))
  system(sprintf("echo 'NODATA        -9999' >> %s/%s", outdir, sub(".bil",".hdr",ff)))

r1=raster(sprintf("%s/%s",outdir,ff))
