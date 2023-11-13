"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8087],{4649:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>t,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(5893),a=n(1151);const s={},t="Fresh water ecoregions of the world (FEOW)",i={id:"ecoregions/global/FEOW-ecoregions",title:"Fresh water ecoregions of the world (FEOW)",description:"Direct download",source:"@site/docs/ecoregions/global/FEOW-ecoregions.md",sourceDirName:"ecoregions/global",slug:"/ecoregions/global/FEOW-ecoregions",permalink:"/cesdata/docs/ecoregions/global/FEOW-ecoregions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"global",permalink:"/cesdata/docs/category/global-3"},next:{title:"Large Marine Ecosystems of the World",permalink:"/cesdata/docs/ecoregions/global/Large-Marine-Ecosystems"}},c={},l=[{value:"Citation",id:"citation",level:2},{value:"Data download and preparation",id:"data-download-and-preparation",level:2}];function d(e){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h1,{id:"fresh-water-ecoregions-of-the-world-feow",children:"Fresh water ecoregions of the world (FEOW)"}),"\n",(0,r.jsx)(o.p,{children:"Direct download"}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.a,{href:"https://www.feow.org/",children:"https://www.feow.org/"})}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.a,{href:"https://geospatial.tnc.org/datasets/38da4656e8074e1c820c42cc21cd76cd_0",children:"https://geospatial.tnc.org/datasets/38da4656e8074e1c820c42cc21cd76cd_0"})}),"\n",(0,r.jsx)(o.h2,{id:"citation",children:"Citation"}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsx)(o.p,{children:"Abell R, Thieme ML, Revenga C, Bryer M, Kottelat M, Bogutskaya N, Coad B, Mandrak N, Contreras Balderas S, Bussing W, Stiassny MLJ, Skelton P, Allen GR, Unmack P, Naseka A, Ng R, Sindorf N, Robertson J, Armijo E, Higgins JV, Heibel TJ, Wikramanayake E, Olson D, L\xf3pez HL, Reis RE, Lundberg JG, Sabaj P\xe9rez MH, Petry P (2008) Freshwater ecoregions of the world: A new map of biogeographic units for freshwater biodiversity conservation, BioScience 58: 403\u2013414. DOI:10.1641/B580507"}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"data-download-and-preparation",children:"Data download and preparation"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-sh",children:"source ~/proyectos/CES/cesdata/env/project-env.sh\n\nmkdir -p $GISDATA/ecoregions/global/FEOW/\ncd $GISDATA/ecoregions/global/FEOW/\n\n# version from FEOW.org\nwget --continue https://www.feow.org/files/downloads/GIS_hs_snapped.zip\n\n# version from TNC: no direct download? copy from local version\n#export LOCALUSER=...\n#export LOCALHOST=...\n#export LOCALPATH=...\n# scp ${LOCALUSER}@${LOCALHOST}:$LOCALPATH/'Freshwater_Ecoregions_Of_the_World_(FEOW)-fgdb.zip' $GISDATA/ecoregions/global/FEOW/\n\n"})}),"\n",(0,r.jsx)(o.p,{children:"Create a new geopackage file with valid topology and assign the (implied) projection information:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-sh",children:'module add python/3.8.3 perl/5.28.0 gdal/3.2.1 geos/3.8.1\nunzip -u GIS_hs_snapped.zip\nunzip -u Freshwater_Ecoregions_Of_the_World_\\(FEOW\\)-fgdb.zip\n\nogrinfo c4be086f842b4fbbab544a047bc90dcb.gdb Freshwater_Ecoregions |less\n\n\nif [ $(ogrinfo --version | grep "GDAL 3.2" -c) -eq 1 ]\nthen\n     ## ogr2ogr -f "GPKG" feow_hs_valid.gpkg GIS_hs_snapped feow_hydrosheds -nlt PROMOTE_TO_MULTI -a_srs "+proj=longlat +datum=WGS84" -makevalid\n\n     ogr2ogr -f "GPKG" feow_all_valid.gpkg c4be086f842b4fbbab544a047bc90dcb.gdb Freshwater_Ecoregions -nlt PROMOTE_TO_MULTI -t_srs "+proj=longlat +datum=WGS84" -makevalid\n\nfi\n\n'})}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-sh",children:'\n\npsql gisdata -c "CREATE SCHEMA FEOW"\nogr2ogr -overwrite -f "PostgreSQL" PG:"host=localhost user=jferrer dbname=gisdata" -lco SCHEMA=feow GIS_hs_snapped feow_hydrosheds -nlt PROMOTE_TO_MULTI\n\n## this one is in pseudomercator...\nogr2ogr -overwrite -f "PostgreSQL" PG:"host=localhost user=jferrer dbname=gisdata" -lco SCHEMA=feow c4be086f842b4fbbab544a047bc90dcb.gdb/ -nln fw_ecoregions -nlt PROMOTE_TO_MULTI\n'})})]})}function g(e={}){const{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,o,n)=>{n.d(o,{Z:()=>i,a:()=>t});var r=n(7294);const a={},s=r.createContext(a);function t(e){const o=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),r.createElement(s.Provider,{value:o},e.children)}}}]);