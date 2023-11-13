"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4250],{3888:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>l,contentTitle:()=>n,default:()=>m,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var i=o(5893),a=o(1151);const t={title:"Colombia",description:"Ecosistemas terrestres de Colombia",tags:["tropical glaciers","tropical alpine","IUCN RLE","IUCN GET"]},n=void 0,r={id:"ecosystems-status/regional/Colombia-Terr-Eco-2015",title:"Colombia",description:"Ecosistemas terrestres de Colombia",source:"@site/docs/ecosystems-status/regional/Colombia-Terr-Eco-2015.md",sourceDirName:"ecosystems-status/regional",slug:"/ecosystems-status/regional/Colombia-Terr-Eco-2015",permalink:"/cesdata/docs/ecosystems-status/regional/Colombia-Terr-Eco-2015",draft:!1,unlisted:!1,tags:[{label:"tropical glaciers",permalink:"/cesdata/docs/tags/tropical-glaciers"},{label:"tropical alpine",permalink:"/cesdata/docs/tags/tropical-alpine"},{label:"IUCN RLE",permalink:"/cesdata/docs/tags/iucn-rle"},{label:"IUCN GET",permalink:"/cesdata/docs/tags/iucn-get"}],version:"current",frontMatter:{title:"Colombia",description:"Ecosistemas terrestres de Colombia",tags:["tropical glaciers","tropical alpine","IUCN RLE","IUCN GET"]},sidebar:"tutorialSidebar",previous:{title:"Ecosystem types of Europe",permalink:"/cesdata/docs/ecosystems/regional/Ecosystem-types-Europe"},next:{title:"EUplus RLH",permalink:"/cesdata/docs/ecosystems-status/regional/EU-RLH"}},l={},c=[{value:"Citation",id:"citation",level:2},{value:"Data access",id:"data-access",level:2},{value:"Data preparation",id:"data-preparation",level:2},{value:"Import into postGIS",id:"import-into-postgis",level:3},{value:"Reformat and make valid",id:"reformat-and-make-valid",level:3},{value:"Crosswalk",id:"crosswalk",level:2},{value:"Using SQLite",id:"using-sqlite",level:3},{value:"Within R",id:"within-r",level:3},{value:"This dataset is used for...",id:"this-dataset-is-used-for",level:2},{value:"IUCN RLE assessment of tropical glaciers",id:"iucn-rle-assessment-of-tropical-glaciers",level:3},{value:"Global suitability map of tropical alpine ecosystems",id:"global-suitability-map-of-tropical-alpine-ecosystems",level:3}];function d(e){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"citation",children:"Citation"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["Etter A., Andrade A., Saavedra K., Amaya P. y P. Ar\xe9valo 2017. Risk assessment of Colombian continental ecosystems: An application of the Red List of Ecosystems methodology (v. 2.0). Final Report. Pontificia Universidad Javeriana and Conservaci\xf3n Internacional-Colombia. Bogot\xe1. 138 pp. Final Report. Pontificia Universidad Javeriana and Conservaci\xf3n Internacional-Colombia. Bogot\xe1. 138 pp. ",(0,i.jsx)(s.a,{href:"https://www.researchgate.net/publication/325498072_Risk_assessment_of_Colombian_continental_ecosystems_An_application_of_the_Red_List_of_Ecosystems_methodology_v_20",children:"Report"}),". ",(0,i.jsx)(s.a,{href:"https://iucnrle.org/static/media/uploads/references/published-assessments/Brochures/brochure_lre_colombia_v_2.0.pdf",children:"Summary"})]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"data-access",children:"Data access"}),"\n",(0,i.jsx)(s.p,{children:"Files provided by Andr\xe9s Etter -()- Alaska to Patagonia project"}),"\n",(0,i.jsx)(s.h2,{id:"data-preparation",children:"Data preparation"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"source ~/proyectos/CES/cesdata/env/project-env.sh\nmkdir -p $GISDATA/ecosystems-status/regional/Colombia\ncd $GISDATA/ecosystems-status/regional/Colombia\n## cp .. $GISDATA/ecosystems-status/regional/Colombia\n"})}),"\n",(0,i.jsx)(s.p,{children:"Original projection in WGS_1984_UTM_Zone_18N, o EPSG 32618"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"ogrinfo -al -geom=NO EcoOri_12052015_2014_TodosCriterios.shp | less\n"})}),"\n",(0,i.jsx)(s.h3,{id:"import-into-postgis",children:"Import into postGIS"}),"\n",(0,i.jsx)(s.p,{children:"This gets the data in the original projection and promoted to multi-geometry"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:' psql gisdata  jferrer -c "CREATE SCHEMA colombia_rle"\n ## exclude shape_area column to avoid column precision error\nogr2ogr -f "PostgreSQL" PG:"host=localhost user=jferrer dbname=gisdata" -nlt PROMOTE_TO_MULTI -lco SCHEMA=ecocolombia $GISDATA/ecosystems-status/regional/EcoOri_12052015_2014_TodosCriterios.shp -sql "SELECT COD, A1P, A1E, A2aP, A2aE, A2bP, A2bE, A3P, A3E, C2,  D2, B1ai, B1aiiV1, B1aiiV2, B1aiii, B2ai, B2aiiV1, B2aiiV2, B2aiii, C2Precp, EvFinal FROM EcoOri_12052015_2014_TodosCriterios"\n'})}),"\n",(0,i.jsx)(s.h3,{id:"reformat-and-make-valid",children:"Reformat and make valid"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"cd $GISDATA/ecosystems-status/regional/Colombia\nogr2ogr Colombia-Ecosystems.gpkg EcoOri_12052015_2014_TodosCriterios.shp -nlt PROMOTE_TO_MULTI -makevalid\n"})}),"\n",(0,i.jsx)(s.h2,{id:"crosswalk",children:"Crosswalk"}),"\n",(0,i.jsx)(s.h3,{id:"using-sqlite",children:"Using SQLite"}),"\n",(0,i.jsx)(s.p,{children:"Add a column using CASE WHEN statements and a set of simple rules."}),"\n",(0,i.jsxs)(s.p,{children:["In this example we assign EFG following an updated cross walk provided by Emily in file ",(0,i.jsx)(s.code,{children:"SI_data_Colombia.xlsx"}),"."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"ogr2ogr Colombia-Ecos-simple.gpkg Colombia-Ecosystems.gpkg  -dialect SQLite \\\n    -nln efg_xwalk\\\n    -sql \"SELECT *, CASE \n    WHEN COD = 'N' THEN 'T6.1' \n    WHEN COD IN ('S13','S14','S15') THEN 'T6.5'\n    WHEN COD IN ('B16','B17', 'B18', 'B19a','B19b','B20a','B20b','B21a','B21b','B21c','B21d','B22' ) THEN 'T1.3' \n     ELSE 'others' END EFG FROM EcoOri_12052015_2014_TodosCriterios;\" \\\n     -simplify 500 -makevalid\n\n"})}),"\n",(0,i.jsx)(s.h3,{id:"within-r",children:"Within R"}),"\n",(0,i.jsxs)(s.p,{children:["In a previous version, I used the file ",(0,i.jsx)(s.code,{children:"GETcrosswalk_Colombia_AEtter.xlsx"})," provided by David Keith and Andres Etter."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"cp ~/proyectos/CES/ecosphere-db/input/xwalks/GETcrosswalk_Colombia_AEtter.xlsx $GISDATA/ecosistemas/RLEDB/Colombia\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Run ",(0,i.jsx)(s.code,{children:"R --vanilla"}),":"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-{r}",children:'require(gdata)\nrequire(dplyr)\nrequire(readxl)\nrequire(tidyr)\nrequire("RPostgreSQL")\n\ngis.data <- Sys.getenv("GISDATA")\n\nXW <- read_excel(sprintf("%s/ecosistemas/RLEDB/Colombia/GETcrosswalk_Colombia_AEtter.xlsx",gis.data),sheet=3) %>% select(1:51)\ncolnames(XW)[2] <- "fullcode"\n\nXW %>% pivot_longer(cols=3:51, names_to = "EFG name", values_to = "membership") %>% filter(!is.na(membership)) %>% mutate(code=gsub("^[A-Za-z_]+-","",fullcode),EFG=gsub(" ","",gsub("(^[A-Za-z 0-9]+.[0-9]+)[A-Za-z -,/-]+","\\\\1",`EFG name`))) -> rslt\n\ndrv <- dbDriver("PostgreSQL") ## remember to update .pgpass file\ncon <- dbConnect(drv, dbname = "gisdata", port = 5432,user = "jferrer",\n                 host = ifelse( system("hostname -s",intern=T)=="terra","localhost","terra.ad.unsw.edu.au"))\n\nrslts <- dbWriteTable(con,c("ecocolombia","iucnget_xwalk"),rslt)\ndbDisconnect(con)\n'})}),"\n",(0,i.jsxs)(s.p,{children:["Now we can make some queries in ",(0,i.jsx)(s.code,{children:"psql"}),":"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",children:"select cod,evfinal,ST_Area(wkb_geometry),ST_Centroid(wkb_geometry) from ecocolombia.ecoori_12052015_2014_todoscriterios m left join ecocolombia.iucnget_xwalk x on m.cod=x.code where \"EFG\" IN ('T1.3');\nselect cod,evfinal,ST_Centroid(wkb_geometry) from ecocolombia.ecoori_12052015_2014_todoscriterios m left join ecocolombia.iucnget_xwalk x on m.cod=x.code where \"EFG\" IN ('T6.1');\nselect cod,evfinal,ST_Centroid(wkb_geometry) from ecocolombia.ecoori_12052015_2014_todoscriterios m left join ecocolombia.iucnget_xwalk x on m.cod=x.code where \"EFG\" IN ('T6.5');\n\nselect fullcode,cod,EFG from ecocolombia.ecoori_12052015_2014_todoscriterios m left join ecocolombia.iucnget_xwalk x on m.cod=x.code where \"EFG\" IN ('T6.5');\n\n"})}),"\n",(0,i.jsx)(s.h2,{id:"this-dataset-is-used-for",children:"This dataset is used for..."}),"\n",(0,i.jsx)(s.h3,{id:"iucn-rle-assessment-of-tropical-glaciers",children:"IUCN RLE assessment of tropical glaciers"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://osf.io/432sb/",children:"OSF project component"})}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"global-suitability-map-of-tropical-alpine-ecosystems",children:"Global suitability map of tropical alpine ecosystems"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://osf.io/vaund/",children:"OSF project component"})}),"\n"]})]})}function m(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,s,o)=>{o.d(s,{Z:()=>r,a:()=>n});var i=o(7294);const a={},t=i.createContext(a);function n(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);