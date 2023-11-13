"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5590],{8842:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=t(5893),o=t(1151);const r={sidebar_position:3},s="Folder structure",i={id:"tree",title:"Folder structure",description:"We have explored so many datasets that our folder tree keeps growing and growing. I have made my best effort to add documentation for each dataset, sometimes a very thin placeholder, sometimes a more meticulous guide, sometimes I forget or procrastinate... but they will be there eventually.",source:"@site/docs/tree.md",sourceDirName:".",slug:"/tree",permalink:"/cesdata/docs/tree",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"First steps",permalink:"/cesdata/docs/intro"},next:{title:"admin",permalink:"/cesdata/docs/category/admin"}},l={},c=[{value:"What a tree!",id:"what-a-tree",level:3},{value:"Tags",id:"tags",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"folder-structure",children:"Folder structure"}),"\n",(0,a.jsx)(n.p,{children:"We have explored so many datasets that our folder tree keeps growing and growing. I have made my best effort to add documentation for each dataset, sometimes a very thin placeholder, sometimes a more meticulous guide, sometimes I forget or procrastinate... but they will be there eventually."}),"\n",(0,a.jsx)(n.p,{children:"Expand the menus on the left to navigate the intructions for the datasets."}),"\n",(0,a.jsx)(n.h3,{id:"what-a-tree",children:"What a tree!"}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:(0,a.jsxs)(n.p,{children:["This tree listing gives an overview of the datasets available in ",(0,a.jsx)(n.code,{children:"$GISDATA"})," in Katana"]})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"source ~/proyectos/CES/cesdata/env/project-env.sh\ntree -L 3 $GISDATA\n\n/srv/scratch/cesdata/gisdata\n\u251c\u2500\u2500 admin\n\u2502\xa0\xa0 \u2514\u2500\u2500 global\n\u2502\xa0\xa0     \u2514\u2500\u2500 World-Bank\n\u251c\u2500\u2500 antroposphere\n\u2502\xa0\xa0 \u2514\u2500\u2500 global\n\u2502\xa0\xa0     \u2514\u2500\u2500 Earthstats\n\u251c\u2500\u2500 climate\n\u2502\xa0\xa0 \u2514\u2500\u2500 global\n\u2502\xa0\xa0     \u251c\u2500\u2500 CHELSA\n\u2502\xa0\xa0     \u251c\u2500\u2500 CRU_TS\n\u2502\xa0\xa0     \u2514\u2500\u2500 Terraclimate\n\u251c\u2500\u2500 cryosphere\n\u2502\xa0\xa0 \u2514\u2500\u2500 global\n\u2502\xa0\xa0     \u251c\u2500\u2500 GLIMS_2019\n\u2502\xa0\xa0     \u251c\u2500\u2500 LIAG_Ice\n\u2502\xa0\xa0     \u251c\u2500\u2500 Modis-MOD10A2-V006\n\u2502\xa0\xa0     \u251c\u2500\u2500 Modis-MOD10C2\n\u2502\xa0\xa0     \u251c\u2500\u2500 RGI_6.0\n\u2502\xa0\xa0     \u251c\u2500\u2500 SeaIceIndex\n\u2502\xa0\xa0     \u251c\u2500\u2500 SMMR_SeaIceTrends\n\u2502\xa0\xa0     \u251c\u2500\u2500 subglacial-lakes\n\u2502\xa0\xa0     \u251c\u2500\u2500 VIIRS-VNP10A1F-V001\n\u2502\xa0\xa0     \u2514\u2500\u2500 WGI_2012\n\u251c\u2500\u2500 ecological\n\u2502\xa0\xa0 \u2514\u2500\u2500 global\n\u2502\xa0\xa0     \u251c\u2500\u2500 EcologicalMarineUnits\n\u2502\xa0\xa0     \u251c\u2500\u2500 FAO-GEZ\n\u2502\xa0\xa0     \u2514\u2500\u2500 NatureMap\n\u251c\u2500\u2500 ecoregions\n\u2502\xa0\xa0 \u251c\u2500\u2500 global\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 FEOW\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 LME\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 MEOW\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 TEOW\n\u2502\xa0\xa0 \u2514\u2500\u2500 regional\n\u2502\xa0\xa0     \u251c\u2500\u2500 Canada\n\u2502\xa0\xa0     \u2514\u2500\u2500 IBRAv7\n\u251c\u2500\u2500 ecosystems\n\u2502\xa0\xa0 \u251c\u2500\u2500 global\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 WCMC-coral-reefs\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 WCMC-mangroves-2000\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 WCMC-mangroves-GMW\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 WCMC-mangrove-types\n\u2502\xa0\xa0 \u2514\u2500\u2500 regional\n\u2502\xa0\xa0     \u251c\u2500\u2500 MAES\n\u2502\xa0\xa0     \u2514\u2500\u2500 worldbank-Central-America\n\u251c\u2500\u2500 fire\n\u2502\xa0\xa0 \u2514\u2500\u2500 regional\n\u2502\xa0\xa0     \u2514\u2500\u2500 australia-forest-fire-2011-16\n\u251c\u2500\u2500 forest\n\u2502\xa0\xa0 \u251c\u2500\u2500 global\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 3d-forest-JPL\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 GFC\n\u2502\xa0\xa0 \u2514\u2500\u2500 regional\n\u2502\xa0\xa0     \u251c\u2500\u2500 Boreal-Forest-Monitoring\n\u2502\xa0\xa0     \u2514\u2500\u2500 China\n\u251c\u2500\u2500 hydrology\n\u2502\xa0\xa0 \u2514\u2500\u2500 global\n\u2502\xa0\xa0     \u251c\u2500\u2500 GIRES\n\u2502\xa0\xa0     \u251c\u2500\u2500 HydroATLAS\n\u2502\xa0\xa0     \u2514\u2500\u2500 HydroLAKES\n\u251c\u2500\u2500 landcover\n\u2502\xa0\xa0 \u2514\u2500\u2500 global\n\u2502\xa0\xa0     \u251c\u2500\u2500 FROM-GLC10\n\u2502\xa0\xa0     \u251c\u2500\u2500 GLC2000\n\u2502\xa0\xa0     \u251c\u2500\u2500 GlobCover\n\u2502\xa0\xa0     \u2514\u2500\u2500 Modis\n\u251c\u2500\u2500 land-surface-temperature\n\u2502\xa0\xa0 \u2514\u2500\u2500 global\n\u2502\xa0\xa0     \u251c\u2500\u2500 Modis-.\n\u2502\xa0\xa0     \u2514\u2500\u2500 Modis-MOD11A2.006\n\u251c\u2500\u2500 plant-traits\n\u2502\xa0\xa0 \u2514\u2500\u2500 global\n\u2502\xa0\xa0     \u2514\u2500\u2500 TRY-leaf-trait-maps\n\u251c\u2500\u2500 protected\n\u2502\xa0\xa0 \u2514\u2500\u2500 global\n\u2502\xa0\xa0     \u2514\u2500\u2500 WDPA\n\u251c\u2500\u2500 radiation\n\u2502\xa0\xa0 \u2514\u2500\u2500 global\n\u2502\xa0\xa0     \u2514\u2500\u2500 glUV\n\u251c\u2500\u2500 soil\n\u2502\xa0\xa0 \u251c\u2500\u2500 global\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 permafrost\n\u2502\xa0\xa0 \u2514\u2500\u2500 regional\n\u2502\xa0\xa0     \u251c\u2500\u2500 circumpolar_permafrost\n\u2502\xa0\xa0     \u2514\u2500\u2500 soil-landscape-grid-australia\n\u251c\u2500\u2500 species-dist\n\u2502\xa0\xa0 \u2514\u2500\u2500 global\n\u2502\xa0\xa0     \u251c\u2500\u2500 BOTW\n\u2502\xa0\xa0     \u2514\u2500\u2500 IUCN_RLTS\n\u251c\u2500\u2500 topography\n\u2502\xa0\xa0 \u2514\u2500\u2500 global\n\u2502\xa0\xa0     \u251c\u2500\u2500 EarthEnv-topography\n\u2502\xa0\xa0     \u251c\u2500\u2500 GMBA-Mountain-Inventory\n\u2502\xa0\xa0     \u251c\u2500\u2500 GME-Mountain-Inventory\n\u2502\xa0\xa0     \u2514\u2500\u2500 SRTM30-plus\n\u251c\u2500\u2500 vegcover\n\u2502\xa0\xa0 \u2514\u2500\u2500 global\n\u2502\xa0\xa0     \u2514\u2500\u2500 Modis-MOD44B.006\n\u251c\u2500\u2500 vegetation\n\u2502\xa0\xa0 \u2514\u2500\u2500 regional\n\u2502\xa0\xa0     \u251c\u2500\u2500 IVC-EcoVeg\n\u2502\xa0\xa0     \u2514\u2500\u2500 NVIS-Australia\n\u251c\u2500\u2500 veglayer\n\u2502\xa0\xa0 \u251c\u2500\u2500 global\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 WHRC-tropics\n\u2502\xa0\xa0 \u2514\u2500\u2500 regional\n\u2502\xa0\xa0     \u2514\u2500\u2500 TERN-Vegetation-height\n\u2514\u2500\u2500 water\n    \u2514\u2500\u2500 global\n        \u2514\u2500\u2500 ModisDailyWater\n\n111 directories, 0 files\n\n"})})]}),"\n",(0,a.jsx)(n.h3,{id:"tags",children:"Tags"}),"\n",(0,a.jsx)(n.p,{children:"Alternatively you can use the tags to navigate the content. I use the tags to identify common formats and tools, projects, countries, repositories etc."}),"\n",(0,a.jsxs)(n.p,{children:["Start here: ",(0,a.jsx)(n.a,{href:"tags",children:"All tags"})]})]})}function g(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var a=t(7294);const o={},r=a.createContext(o);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);