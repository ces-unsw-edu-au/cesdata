"use strict";(self.webpackChunkdocusite=self.webpackChunkdocusite||[]).push([[4250],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)a=s[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)a=s[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=n(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||s;return a?o.createElement(g,i(i({ref:t},p),{},{components:a})):o.createElement(g,i({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=u;var n={};for(var l in t)hasOwnProperty.call(t,l)&&(n[l]=t[l]);n.originalType=e,n[m]="string"==typeof e?e:r,i[1]=n;for(var c=2;c<s;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8039:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>n,toc:()=>c});var o=a(7462),r=(a(7294),a(3905));const s={title:"Colombia",description:"Ecosistemas terrestres de Colombia",tags:["tropical glaciers","tropical alpine","IUCN RLE","IUCN GET"]},i=void 0,n={unversionedId:"ecosystems-status/regional/Colombia-Terr-Eco-2015",id:"ecosystems-status/regional/Colombia-Terr-Eco-2015",title:"Colombia",description:"Ecosistemas terrestres de Colombia",source:"@site/docs/ecosystems-status/regional/Colombia-Terr-Eco-2015.md",sourceDirName:"ecosystems-status/regional",slug:"/ecosystems-status/regional/Colombia-Terr-Eco-2015",permalink:"/cesdata/docs/ecosystems-status/regional/Colombia-Terr-Eco-2015",draft:!1,tags:[{label:"tropical glaciers",permalink:"/cesdata/docs/tags/tropical-glaciers"},{label:"tropical alpine",permalink:"/cesdata/docs/tags/tropical-alpine"},{label:"IUCN RLE",permalink:"/cesdata/docs/tags/iucn-rle"},{label:"IUCN GET",permalink:"/cesdata/docs/tags/iucn-get"}],version:"current",frontMatter:{title:"Colombia",description:"Ecosistemas terrestres de Colombia",tags:["tropical glaciers","tropical alpine","IUCN RLE","IUCN GET"]},sidebar:"tutorialSidebar",previous:{title:"Ecosystem types of Europe",permalink:"/cesdata/docs/ecosystems/regional/Ecosystem-types-Europe"},next:{title:"EUplus RLH",permalink:"/cesdata/docs/ecosystems-status/regional/EU-RLH"}},l={},c=[{value:"Citation",id:"citation",level:2},{value:"Data access",id:"data-access",level:2},{value:"Data preparation",id:"data-preparation",level:2},{value:"Import into postGIS",id:"import-into-postgis",level:3},{value:"Reformat and make valid",id:"reformat-and-make-valid",level:3},{value:"Crosswalk",id:"crosswalk",level:2},{value:"Using SQLite",id:"using-sqlite",level:3},{value:"Within R",id:"within-r",level:3},{value:"This dataset is used for...",id:"this-dataset-is-used-for",level:2},{value:"IUCN RLE assessment of tropical glaciers",id:"iucn-rle-assessment-of-tropical-glaciers",level:3},{value:"Global suitability map of tropical alpine ecosystems",id:"global-suitability-map-of-tropical-alpine-ecosystems",level:3}],p={toc:c},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"citation"},"Citation"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Etter A., Andrade A., Saavedra K., Amaya P. y P. Ar\xe9valo 2017. Risk assessment of Colombian continental ecosystems: An application of the Red List of Ecosystems methodology (v. 2.0). Final Report. Pontificia Universidad Javeriana and Conservaci\xf3n Internacional-Colombia. Bogot\xe1. 138 pp. Final Report. Pontificia Universidad Javeriana and Conservaci\xf3n Internacional-Colombia. Bogot\xe1. 138 pp. ",(0,r.kt)("a",{parentName:"p",href:"https://www.researchgate.net/publication/325498072_Risk_assessment_of_Colombian_continental_ecosystems_An_application_of_the_Red_List_of_Ecosystems_methodology_v_20"},"Report"),". ",(0,r.kt)("a",{parentName:"p",href:"https://iucnrle.org/static/media/uploads/references/published-assessments/Brochures/brochure_lre_colombia_v_2.0.pdf"},"Summary"))),(0,r.kt)("h2",{id:"data-access"},"Data access"),(0,r.kt)("p",null,"Files provided by Andr\xe9s Etter -()- Alaska to Patagonia project"),(0,r.kt)("h2",{id:"data-preparation"},"Data preparation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"source ~/proyectos/CES/cesdata/env/project-env.sh\nmkdir -p $GISDATA/ecosystems-status/regional/Colombia\ncd $GISDATA/ecosystems-status/regional/Colombia\n## cp .. $GISDATA/ecosystems-status/regional/Colombia\n")),(0,r.kt)("p",null,"Original projection in WGS_1984_UTM_Zone_18N, o EPSG 32618"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"ogrinfo -al -geom=NO EcoOri_12052015_2014_TodosCriterios.shp | less\n")),(0,r.kt)("h3",{id:"import-into-postgis"},"Import into postGIS"),(0,r.kt)("p",null,"This gets the data in the original projection and promoted to multi-geometry"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},' psql gisdata  jferrer -c "CREATE SCHEMA colombia_rle"\n ## exclude shape_area column to avoid column precision error\nogr2ogr -f "PostgreSQL" PG:"host=localhost user=jferrer dbname=gisdata" -nlt PROMOTE_TO_MULTI -lco SCHEMA=ecocolombia $GISDATA/ecosystems-status/regional/EcoOri_12052015_2014_TodosCriterios.shp -sql "SELECT COD, A1P, A1E, A2aP, A2aE, A2bP, A2bE, A3P, A3E, C2,  D2, B1ai, B1aiiV1, B1aiiV2, B1aiii, B2ai, B2aiiV1, B2aiiV2, B2aiii, C2Precp, EvFinal FROM EcoOri_12052015_2014_TodosCriterios"\n')),(0,r.kt)("h3",{id:"reformat-and-make-valid"},"Reformat and make valid"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd $GISDATA/ecosystems-status/regional/Colombia\nogr2ogr Colombia-Ecosystems.gpkg EcoOri_12052015_2014_TodosCriterios.shp -nlt PROMOTE_TO_MULTI -makevalid\n")),(0,r.kt)("h2",{id:"crosswalk"},"Crosswalk"),(0,r.kt)("h3",{id:"using-sqlite"},"Using SQLite"),(0,r.kt)("p",null,"Add a column using CASE WHEN statements and a set of simple rules. "),(0,r.kt)("p",null,"In this example we assign EFG following an updated cross walk provided by Emily in file ",(0,r.kt)("inlineCode",{parentName:"p"},"SI_data_Colombia.xlsx"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"ogr2ogr Colombia-Ecos-simple.gpkg Colombia-Ecosystems.gpkg  -dialect SQLite \\\n    -nln efg_xwalk\\\n    -sql \"SELECT *, CASE \n    WHEN COD = 'N' THEN 'T6.1' \n    WHEN COD IN ('S13','S14','S15') THEN 'T6.5'\n    WHEN COD IN ('B16','B17', 'B18', 'B19a','B19b','B20a','B20b','B21a','B21b','B21c','B21d','B22' ) THEN 'T1.3' \n     ELSE 'others' END EFG FROM EcoOri_12052015_2014_TodosCriterios;\" \\\n     -simplify 500 -makevalid\n\n")),(0,r.kt)("h3",{id:"within-r"},"Within R"),(0,r.kt)("p",null,"In a previous version, I used the file ",(0,r.kt)("inlineCode",{parentName:"p"},"GETcrosswalk_Colombia_AEtter.xlsx")," provided by David Keith and Andres Etter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cp ~/proyectos/CES/ecosphere-db/input/xwalks/GETcrosswalk_Colombia_AEtter.xlsx $GISDATA/ecosistemas/RLEDB/Colombia\n")),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"R --vanilla"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{r}"},'require(gdata)\nrequire(dplyr)\nrequire(readxl)\nrequire(tidyr)\nrequire("RPostgreSQL")\n\ngis.data <- Sys.getenv("GISDATA")\n\nXW <- read_excel(sprintf("%s/ecosistemas/RLEDB/Colombia/GETcrosswalk_Colombia_AEtter.xlsx",gis.data),sheet=3) %>% select(1:51)\ncolnames(XW)[2] <- "fullcode"\n\nXW %>% pivot_longer(cols=3:51, names_to = "EFG name", values_to = "membership") %>% filter(!is.na(membership)) %>% mutate(code=gsub("^[A-Za-z_]+-","",fullcode),EFG=gsub(" ","",gsub("(^[A-Za-z 0-9]+.[0-9]+)[A-Za-z -,/-]+","\\\\1",`EFG name`))) -> rslt\n\ndrv <- dbDriver("PostgreSQL") ## remember to update .pgpass file\ncon <- dbConnect(drv, dbname = "gisdata", port = 5432,user = "jferrer",\n                 host = ifelse( system("hostname -s",intern=T)=="terra","localhost","terra.ad.unsw.edu.au"))\n\nrslts <- dbWriteTable(con,c("ecocolombia","iucnget_xwalk"),rslt)\ndbDisconnect(con)\n')),(0,r.kt)("p",null,"Now we can make some queries in ",(0,r.kt)("inlineCode",{parentName:"p"},"psql"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select cod,evfinal,ST_Area(wkb_geometry),ST_Centroid(wkb_geometry) from ecocolombia.ecoori_12052015_2014_todoscriterios m left join ecocolombia.iucnget_xwalk x on m.cod=x.code where \"EFG\" IN ('T1.3');\nselect cod,evfinal,ST_Centroid(wkb_geometry) from ecocolombia.ecoori_12052015_2014_todoscriterios m left join ecocolombia.iucnget_xwalk x on m.cod=x.code where \"EFG\" IN ('T6.1');\nselect cod,evfinal,ST_Centroid(wkb_geometry) from ecocolombia.ecoori_12052015_2014_todoscriterios m left join ecocolombia.iucnget_xwalk x on m.cod=x.code where \"EFG\" IN ('T6.5');\n\nselect fullcode,cod,EFG from ecocolombia.ecoori_12052015_2014_todoscriterios m left join ecocolombia.iucnget_xwalk x on m.cod=x.code where \"EFG\" IN ('T6.5');\n\n")),(0,r.kt)("h2",{id:"this-dataset-is-used-for"},"This dataset is used for..."),(0,r.kt)("h3",{id:"iucn-rle-assessment-of-tropical-glaciers"},"IUCN RLE assessment of tropical glaciers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://osf.io/432sb/"},"OSF project component"))),(0,r.kt)("h3",{id:"global-suitability-map-of-tropical-alpine-ecosystems"},"Global suitability map of tropical alpine ecosystems"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://osf.io/vaund/"},"OSF project component"))))}d.isMDXComponent=!0}}]);