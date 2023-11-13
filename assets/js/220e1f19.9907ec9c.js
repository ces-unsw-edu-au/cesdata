"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2364],{7919:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>t,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var o=n(5893),r=n(1151);const i={tags:["IUCN-GET","Typology web","OGR"]},t="EEZ boundaries",d={id:"admin/global/EEZ-borders",title:"EEZ boundaries",description:"Maritime Boundaries and Exclusive Economic Zones",source:"@site/docs/admin/global/EEZ-borders.md",sourceDirName:"admin/global",slug:"/admin/global/EEZ-borders",permalink:"/cesdata/docs/admin/global/EEZ-borders",draft:!1,unlisted:!1,tags:[{label:"IUCN-GET",permalink:"/cesdata/docs/tags/iucn-get"},{label:"Typology web",permalink:"/cesdata/docs/tags/typology-web"},{label:"OGR",permalink:"/cesdata/docs/tags/ogr"}],version:"current",frontMatter:{tags:["IUCN-GET","Typology web","OGR"]},sidebar:"tutorialSidebar",previous:{title:"admin/global",permalink:"/cesdata/docs/category/adminglobal"},next:{title:"TMWB",permalink:"/cesdata/docs/admin/global/TM-World-Borders"}},s={},l=[{value:"Links",id:"links",level:2},{value:"Citation",id:"citation",level:2},{value:"Data download and preparation",id:"data-download-and-preparation",level:2},{value:"Data preparation",id:"data-preparation",level:2}];function c(e){const a={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.h1,{id:"eez-boundaries",children:"EEZ boundaries"}),"\n",(0,o.jsx)(a.p,{children:"Maritime Boundaries and Exclusive Economic Zones"}),"\n",(0,o.jsx)(a.h2,{id:"links",children:"Links"}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.a,{href:"https://www.marineregions.org/eez.php",children:"https://www.marineregions.org/eez.php"})}),"\n",(0,o.jsx)(a.h2,{id:"citation",children:"Citation"}),"\n",(0,o.jsxs)(a.blockquote,{children:["\n",(0,o.jsxs)(a.p,{children:["Flanders Marine Institute (2019). Maritime Boundaries Geodatabase: Maritime Boundaries and Exclusive Economic Zones (200NM), version 11. Available online at ",(0,o.jsx)(a.a,{href:"https://www.marineregions.org/",children:"https://www.marineregions.org/"}),". ",(0,o.jsx)(a.a,{href:"https://doi.org/10.14284/386",children:"https://doi.org/10.14284/386"})]}),"\n"]}),"\n",(0,o.jsx)(a.h2,{id:"data-download-and-preparation",children:"Data download and preparation"}),"\n",(0,o.jsx)(a.p,{children:"This dataset is available after registration, I have not found a method for direct download from the commandline."}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-sh",children:"source ~/proyectos/CES/cesdata/env/project-env.sh\nmkdir -p $GISDATA/admin/global/EEZ/\ncd $GISDATA/admin/global/EEZ/\n\n# register and download, then move to current folder.\nmv ~/Downloads/World_EEZ_v11_20191118_gpkg.zip $GISDATA/admin/global/EEZ/\n"})}),"\n",(0,o.jsx)(a.h2,{id:"data-preparation",children:"Data preparation"}),"\n",(0,o.jsx)(a.p,{children:"In Katana we need to load the appropriate modules"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-sh",metastring:'title="Load modules for Katana"',children:"module add sqlite/3.31.1 spatialite/5.0.0b0 python/3.8.3 perl/5.28.0 gdal/3.2.1 geos/3.8.1 proj/7.2.0\n"})}),"\n",(0,o.jsxs)(a.p,{children:["Prepare data for use in GIS using ",(0,o.jsx)(a.code,{children:"ogr2ogr"})," with option ",(0,o.jsx)(a.code,{children:"-makevalid"})," and ",(0,o.jsx)(a.code,{children:"-simplify"})]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-sh",metastring:'title="OGR, do your thing!"',children:'unzip -u World_EEZ_v11_20191118_gpkg.zip\nogr2ogr -f "GPKG" eez-valid.gpkg World_EEZ_v11_20191118_gpkg/eez_v11.gpkg -nlt PROMOTE_TO_MULTI -makevalid -simplify 0.0001\n'})})]})}function p(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,a,n)=>{n.d(a,{Z:()=>d,a:()=>t});var o=n(7294);const r={},i=o.createContext(r);function t(e){const a=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(i.Provider,{value:a},e.children)}}}]);