"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3097],{941:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=a(5893),n=a(1151);const r={title:"EarthEnv-topography",description:"Global 1,5,10,100-km Topography - EarthEnv",tags:["tropical glaciers","IUCN-GET","IUCN-RLE","wget"]},s="Global 1,5,10,100-km Topography - EarthEnv",l={id:"topography/global/EarthEnv-Topography",title:"EarthEnv-topography",description:"Global 1,5,10,100-km Topography - EarthEnv",source:"@site/docs/topography/global/EarthEnv-Topography.md",sourceDirName:"topography/global",slug:"/topography/global/EarthEnv-Topography",permalink:"/cesdata/docs/topography/global/EarthEnv-Topography",draft:!1,unlisted:!1,tags:[{label:"tropical glaciers",permalink:"/cesdata/docs/tags/tropical-glaciers"},{label:"IUCN-GET",permalink:"/cesdata/docs/tags/iucn-get"},{label:"IUCN-RLE",permalink:"/cesdata/docs/tags/iucn-rle"},{label:"wget",permalink:"/cesdata/docs/tags/wget"}],version:"current",frontMatter:{title:"EarthEnv-topography",description:"Global 1,5,10,100-km Topography - EarthEnv",tags:["tropical glaciers","IUCN-GET","IUCN-RLE","wget"]},sidebar:"tutorialSidebar",previous:{title:"ALOS World 3D",permalink:"/cesdata/docs/topography/global/ALOS-World-3D"},next:{title:"GMBA",permalink:"/cesdata/docs/topography/global/GMBA-Mountain-Inventory"}},i={},c=[{value:"Reference",id:"reference",level:2},{value:"This dataset is used for...",id:"this-dataset-is-used-for",level:2},{value:"IUCN RLE assessment of tropical glaciers",id:"iucn-rle-assessment-of-tropical-glaciers",level:3}];function p(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"global-1510100-km-topography---earthenv",children:"Global 1,5,10,100-km Topography - EarthEnv"}),"\n",(0,o.jsx)(t.h2,{id:"reference",children:"Reference"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Amatulli, G., Domisch, S., Tuanmu, M.-N., Parmentier, B., Ranipeta, A., Malczyk, J., and Jetz, W. (2018) A suite of global, cross-scale topographic variables for environmental and biodiversity modeling. Scientific Data volume 5, Article number: 180040. DOI: doi:10.1038/sdata.2018.40."}),"\n"]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["Amatulli, Giuseppe; Domisch, Sami; Tuanmu, Mao-Ning; Parmentier, Benoit; Ranipeta, Ajay; Malczyk, Jeremy; Jetz, Walter (2018): A suite of global, cross-scale topographic variables for environmental and biodiversity modeling, links to files in GeoTIFF format. PANGAEA, ",(0,o.jsx)(t.a,{href:"https://doi.org/10.1594/PANGAEA.867115",children:"https://doi.org/10.1594/PANGAEA.867115"})]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"http://www.earthenv.org//topography",children:"http://www.earthenv.org//topography"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:"source ~/proyectos/CES/cesdata/env/project-env.sh\n\n\nDPATH=topography/global\nDNAME=EarthEnv-topography\n\nmkdir -p $GISDATA/$DPATH/$DNAME/\ncd $GISDATA/$DPATH/$DNAME/\n\nwget 'https://doi.pangaea.de/10.1594/PANGAEA.867114?format=textfile' --output-document=list1\nwget 'https://doi.pangaea.de/10.1594/PANGAEA.867113?format=textfile' --output-document=list2\n\n\ntail -n +14 list1 | cut -f4 >> enlaces\ntail -n +14 list2 | cut -f4 >> enlaces\n\nwget -nH -x --cut-dirs=1 --continue -i enlaces\n\n"})}),"\n",(0,o.jsx)(t.p,{children:"This will download approximatedly 74G of data..."}),"\n",(0,o.jsx)(t.h2,{id:"this-dataset-is-used-for",children:"This dataset is used for..."}),"\n",(0,o.jsx)(t.h3,{id:"iucn-rle-assessment-of-tropical-glaciers",children:"IUCN RLE assessment of tropical glaciers"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://osf.io/432sb/",children:"OSF project component"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},1151:(e,t,a)=>{a.d(t,{Z:()=>l,a:()=>s});var o=a(7294);const n={},r=o.createContext(n);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);