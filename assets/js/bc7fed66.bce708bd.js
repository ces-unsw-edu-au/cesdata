"use strict";(self.webpackChunkdocusite=self.webpackChunkdocusite||[]).push([[1468],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>I});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),p=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=p(e.components);return r.createElement(s.Provider,{value:a},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),u=n,I=c["".concat(s,".").concat(u)]||c[u]||g[u]||o;return t?r.createElement(I,i(i({ref:a},d),{},{components:t})):r.createElement(I,i({ref:a},d))}));function I(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4178:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(7462),n=(t(7294),t(3905));const o={title:"Censo Agricola Venezuela",description:"Data from SIGMAT, Venezuela",tags:["Venezuela","deforestation","Tropical Alpine"]},i=void 0,l={unversionedId:"anthroposphere/regional/SIGMAT",id:"anthroposphere/regional/SIGMAT",title:"Censo Agricola Venezuela",description:"Data from SIGMAT, Venezuela",source:"@site/docs/anthroposphere/regional/SIGMAT.md",sourceDirName:"anthroposphere/regional",slug:"/anthroposphere/regional/SIGMAT",permalink:"/cesdata/docs/anthroposphere/regional/SIGMAT",draft:!1,tags:[{label:"Venezuela",permalink:"/cesdata/docs/tags/venezuela"},{label:"deforestation",permalink:"/cesdata/docs/tags/deforestation"},{label:"Tropical Alpine",permalink:"/cesdata/docs/tags/tropical-alpine"}],version:"current",frontMatter:{title:"Censo Agricola Venezuela",description:"Data from SIGMAT, Venezuela",tags:["Venezuela","deforestation","Tropical Alpine"]},sidebar:"tutorialSidebar",previous:{title:"RAISG",permalink:"/cesdata/docs/anthroposphere/regional/RAISG"},next:{title:"biotic-interactions",permalink:"/cesdata/docs/category/biotic-interactions"}},s={},p=[{value:"Citation",id:"citation",level:2},{value:"Data description",id:"data-description",level:2},{value:"Links",id:"links",level:2},{value:"Data download",id:"data-download",level:2},{value:"Data preparation",id:"data-preparation",level:2},{value:"with GDAL and OGR",id:"with-gdal-and-ogr",level:3}],d={toc:p},c="wrapper";function g(e){let{components:a,...t}=e;return(0,n.kt)(c,(0,r.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"citation"},"Citation"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Gustavo Aguerrevere & Maria M. Primera (2008) HERRAMIENTAS DE GEOM\xc1TICA DESARROLLADAS Y EMPLEADAS EN EL CPDI PARA EL APOYO A LA GESTI\xd3N AGR\xcdCOLA.\nEn agradecimientos mencionar al SIGMAT del Ministerio de Agricultura y Tierras")),(0,n.kt)("h2",{id:"data-description"},"Data description"),(0,n.kt)("h2",{id:"links"},"Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.cepal.org/pt-br/node/35156"},"https://www.cepal.org/pt-br/node/35156")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://censo.mat.gob.ve/"},"http://censo.mat.gob.ve/")," (broken link)")),(0,n.kt)("h2",{id:"data-download"},"Data download"),(0,n.kt)("p",null,"Data provided by Grisel Velasquez, from UniSIG, Centro de Ecologia, IVIC. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"source ~/proyectos/CES/cesdata/env/project-env.sh\nmkdir -p $GISDATA/antroposphere/regional/SIGMAT\ncd $GISDATA/antroposphere/regional/SIGMAT\n\n")),(0,n.kt)("h2",{id:"data-preparation"},"Data preparation"),(0,n.kt)("h3",{id:"with-gdal-and-ogr"},"with GDAL and OGR"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"\ncd $WORKDIR\nunzip -u $GISDATA/antroposphere/regional/SIGMAT/DatosautorizadosdelSIGMATparaIVIC2014.zip -d $WORKDIR\n\nogrinfo DatosautorizadosdelSIGMATparaIVIC2014/vene_segm_zulia.shp vene_segm_zulia -geom=no\nogrmerge.py -o tmp.gpkg DatosautorizadosdelSIGMATparaIVIC2014/vene_segm_zulia.shp\\\n    DatosautorizadosdelSIGMATparaIVIC2014/vene_segm_tachira.shp\\\n    DatosautorizadosdelSIGMATparaIVIC2014/vene_segm_merida.shp\\\n    DatosautorizadosdelSIGMATparaIVIC2014/vene_segm_trujillo.shp\\\n    DatosautorizadosdelSIGMATparaIVIC2014/vene_segm_lara.shp\\\n    -f GPKG -single -nln sigmat_segm \n\nogr2ogr SIGMAT-segm.gpkg tmp.gpkg -nlt MULTIPOLYGON -dialect SQLite \\\n    -nln sigmat_segm\\\n    -sql \"SELECT *, CASE WHEN GRID_CODE = 1 THEN '\xc1rea Agr\xedcola' WHEN GRID_CODE = 2 THEN 'Pastizal' WHEN GRID_CODE = 30 THEN 'Bosque' WHEN GRID_CODE = 31 THEN 'Plantaci\xf3n Forestal' WHEN GRID_CODE = 32 THEN 'Matorral' WHEN GRID_CODE = 40 THEN 'Eriales' WHEN GRID_CODE = 41 THEN '\xc1rea Inundable' WHEN GRID_CODE = 42 THEN 'Cuerpos de Agua' WHEN GRID_CODE = 5 THEN '\xc1rea Urbana'  ELSE '' END Clase FROM sigmat_segm;\" \n\nzip SIGMAT-segm.zip SIGMAT-segm.gpkg \nbzip2 SIGMAT-segm.gpkg \nxz --format=lzma SIGMAT-segm.gpkg\nls -lah SIGMAT-segm.*\n\nrm tmp.gpkg\nogrmerge.py -o tmp.gpkg DatosautorizadosdelSIGMATparaIVIC2014/CEREALES.shp\\\n    DatosautorizadosdelSIGMATparaIVIC2014/CULTIVOS_TROPICALES.shp\\\n    DatosautorizadosdelSIGMATparaIVIC2014/FRUTAS_TROPICALES.shp\\\n    DatosautorizadosdelSIGMATparaIVIC2014/GRANOS_Y_LEGUMINOSAS.shp\\\n    DatosautorizadosdelSIGMATparaIVIC2014/HORTALIZAS.shp\\\n    DatosautorizadosdelSIGMATparaIVIC2014/RAICES_Y_TUBERCULOS.shp\\\n    DatosautorizadosdelSIGMATparaIVIC2014/TEXTILES_Y_OLEAGINOSAS.shp\\\n    -f GPKG -single -nln rubros\nogr2ogr SIGMAT-censo-agricola.gpkg tmp.gpkg -spat -73.377670 7.364236 -68.887879 11.854234\nogr2ogr SIGMAT-censo-pecuario.gpkg DatosautorizadosdelSIGMATparaIVIC2014/PECUARIO.shp -f GPKG -nln pecuario -spat -73.377670 7.364236 -68.887879 11.854234\n\ntar -cjvf SIGMAT-Andes.tar.bz2 SIGMAT-*gpkg\nzip SIGMAT-Andes.zip SIGMAT-*gpkg\ntar -czvf SIGMAT-Andes.tar.gz SIGMAT-*gpkg\ntar -c --lzma -f SIGMAT-Andes.tar.lzma SIGMAT-*gpkg\n")))}g.isMDXComponent=!0}}]);