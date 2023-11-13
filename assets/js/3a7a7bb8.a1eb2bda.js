"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[31],{1080:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>r});var t=s(5893),l=s(1151);const n={title:"SI-Volcanos",description:"Volcanoes of the World database",tags:["tropical glaciers","IUCN-GET","IUCN-RLE","wget","excel","xml"]},a=void 0,c={id:"geology/global/SI-Volcanos",title:"SI-Volcanos",description:"Volcanoes of the World database",source:"@site/docs/geology/global/SI-Volcanos.md",sourceDirName:"geology/global",slug:"/geology/global/SI-Volcanos",permalink:"/cesdata/docs/geology/global/SI-Volcanos",draft:!1,unlisted:!1,tags:[{label:"tropical glaciers",permalink:"/cesdata/docs/tags/tropical-glaciers"},{label:"IUCN-GET",permalink:"/cesdata/docs/tags/iucn-get"},{label:"IUCN-RLE",permalink:"/cesdata/docs/tags/iucn-rle"},{label:"wget",permalink:"/cesdata/docs/tags/wget"},{label:"excel",permalink:"/cesdata/docs/tags/excel"},{label:"xml",permalink:"/cesdata/docs/tags/xml"}],version:"current",frontMatter:{title:"SI-Volcanos",description:"Volcanoes of the World database",tags:["tropical glaciers","IUCN-GET","IUCN-RLE","wget","excel","xml"]},sidebar:"tutorialSidebar",previous:{title:"Forest Map for China",permalink:"/cesdata/docs/forest/regional/Forest-China"},next:{title:"AGSON",permalink:"/cesdata/docs/geology/regional/AGSON"}},i={},r=[{value:"Description",id:"description",level:2},{value:"Links",id:"links",level:2},{value:"Citation",id:"citation",level:2},{value:"Data access",id:"data-access",level:2},{value:"This dataset is used for...",id:"this-dataset-is-used-for",level:2},{value:"IUCN RLE assessment of tropical glaciers",id:"iucn-rle-assessment-of-tropical-glaciers",level:3}];function d(e){const o={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(o.p,{children:"The Volcanoes of the World database is a catalog of Holocene and Pleistocene volcanoes, and eruptions from the past 12,000 years."}),"\n",(0,t.jsx)(o.h2,{id:"links",children:"Links"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"https://volcano.si.edu/",children:"https://volcano.si.edu/"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"https://doi.org/10.5479/si.GVP.VOTW5-2022.5.0",children:"https://doi.org/10.5479/si.GVP.VOTW5-2022.5.0"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"https://volcano.si.edu/volcanolist_pleistocene.cfm",children:"https://volcano.si.edu/volcanolist_pleistocene.cfm"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"https://volcano.si.edu/volcanolist_holocene.cfm",children:"https://volcano.si.edu/volcanolist_holocene.cfm"})}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"citation",children:"Citation"}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsxs)(o.p,{children:["Global Volcanism Program, 2023. [Database] Volcanoes of the World (v. 5.0.4; 17 Apr 2023). Distributed by Smithsonian Institution, compiled by Venzke, E. ",(0,t.jsx)(o.a,{href:"https://doi.org/10.5479/si.GVP.VOTW5-2022.5.0",children:"https://doi.org/10.5479/si.GVP.VOTW5-2022.5.0"})]}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:"@Venzke_2013_Volcano_List"}),"\n",(0,t.jsx)(o.h2,{id:"data-access",children:"Data access"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-sh",children:"source ~/proyectos/CES/cesdata/env/project-env.sh\nmkdir -p $GISDATA/geology/global/SI-Volcanos\ncd $GISDATA/geology/global/SI-Volcanos\n\nwget --continue https://volcano.si.edu/database/list_volcano_holocene_excel.cfm --output-document=GVP_Volcano_List_Holocene.xml\n#Need to open in excel and then save as xlsx\nwget --continue https://volcano.si.edu/database/list_volcano_pleistocene_excel.cfm --output-document=GVP_Volcano_List_Pleistocene.xml\n#Need to open in excel and then save as xlsx\n"})}),"\n",(0,t.jsx)(o.h2,{id:"this-dataset-is-used-for",children:"This dataset is used for..."}),"\n",(0,t.jsx)(o.h3,{id:"iucn-rle-assessment-of-tropical-glaciers",children:"IUCN RLE assessment of tropical glaciers"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"https://osf.io/432sb/",children:"OSF project component"})}),"\n"]})]})}function h(e={}){const{wrapper:o}={...(0,l.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,o,s)=>{s.d(o,{Z:()=>c,a:()=>a});var t=s(7294);const l={},n=t.createContext(l);function a(e){const o=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(n.Provider,{value:o},e.children)}}}]);