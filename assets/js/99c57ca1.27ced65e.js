"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5824],{3501:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=s(5893),r=s(1151);const o={slug:"forest-macrogroups-americas",title:"Distribution maps for the Forest macrogroups",authors:"jrfep",tags:["Distribution maps","IUCN RLE","OSF","OSF cloud storage","QGIS","GPKG","IVC macrogroups"]},n=void 0,i={permalink:"/cesdata/blog/forest-macrogroups-americas",source:"@site/blog/2023-04-10-Forest-Macrogroups.md",title:"Distribution maps for the Forest macrogroups",description:"I have been asked a couple of times to share the maps of the forest macrogroups that we assessed with the IUCN Red List of Ecosystems back in 2019.",date:"2023-04-10T00:00:00.000Z",formattedDate:"April 10, 2023",tags:[{label:"Distribution maps",permalink:"/cesdata/blog/tags/distribution-maps"},{label:"IUCN RLE",permalink:"/cesdata/blog/tags/iucn-rle"},{label:"OSF",permalink:"/cesdata/blog/tags/osf"},{label:"OSF cloud storage",permalink:"/cesdata/blog/tags/osf-cloud-storage"},{label:"QGIS",permalink:"/cesdata/blog/tags/qgis"},{label:"GPKG",permalink:"/cesdata/blog/tags/gpkg"},{label:"IVC macrogroups",permalink:"/cesdata/blog/tags/ivc-macrogroups"}],readingTime:1.71,hasTruncateMarker:!0,authors:[{name:"Jos\xe9 R. Ferrer-Paris",title:"Factotum",url:"https://github.com/jrfep",imageURL:"https://github.com/jrfep.png",key:"jrfep"}],frontMatter:{slug:"forest-macrogroups-americas",title:"Distribution maps for the Forest macrogroups",authors:"jrfep",tags:["Distribution maps","IUCN RLE","OSF","OSF cloud storage","QGIS","GPKG","IVC macrogroups"]},unlisted:!1,prevItem:{title:"Start of a journey",permalink:"/cesdata/blog/very-first-blog-post"}},l={authorsImageUrls:[void 0]},c=[{value:"The assessment",id:"the-assessment",level:2},{value:"The distribution maps",id:"the-distribution-maps",level:2},{value:"Original raster data",id:"original-raster-data",level:3},{value:"Derived vector data",id:"derived-vector-data",level:3}];function d(e){const t={a:"a",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",section:"section",sup:"sup",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"I have been asked a couple of times to share the maps of the forest macrogroups that we assessed with the IUCN Red List of Ecosystems back in 2019."}),"\n",(0,a.jsx)(t.p,{children:"Here are some instructions to explore and download the maps."}),"\n",(0,a.jsx)(t.h2,{id:"the-assessment",children:"The assessment"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.em,{children:"IUCN Red List of Ecosystems (RLE) assessment of the forest macrogroups of the Americas"}),(0,a.jsx)(t.sup,{children:(0,a.jsx)(t.a,{href:"#user-content-fn-1-845b8a",id:"user-content-fnref-1-845b8a","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})," was a continental level application of the RLE protocol."]}),"\n",(0,a.jsxs)(t.p,{children:["The assessment report is accessible in the ",(0,a.jsx)(t.a,{href:"https://assessments.iucnrle.org/systematics/8",children:"RLE assessment database"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["I am preparing a series of repositories to share results (output data) and code of the assessment",(0,a.jsx)(t.sup,{children:(0,a.jsx)(t.a,{href:"#user-content-fn-2-845b8a",id:"user-content-fnref-2-845b8a","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"the-distribution-maps",children:"The distribution maps"}),"\n",(0,a.jsxs)(t.p,{children:["The input maps for the assessment represent ",(0,a.jsx)(t.em,{children:"potential distribution"})," of vegetation macrogroups of the Americas. Vegetation macrogroups are one level of the* International Vegetation Classification* (know as IVC or EcoVeg",(0,a.jsx)(t.sup,{children:(0,a.jsx)(t.a,{href:"#user-content-fn-3-845b8a",id:"user-content-fnref-3-845b8a","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})}),"), I have included in our documentation an entry with download scripts for several datasets related to the: ",(0,a.jsx)(t.a,{href:"/docs/vegetation/regional/IVC-potential-macrogroups",children:"-> Go to the entry"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"original-raster-data",children:"Original raster data"}),"\n",(0,a.jsx)(t.p,{children:"The original spatial data of the vegetation macrogroups for North and South America was prepared by NatureServe and should be available in their data portals:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://geohub-natureserve.opendata.arcgis.com/maps/Natureserve::macrogroups-of-the-americas-1/explore?location=2.669578%2C114.745000%2C2.74",children:"geohub"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://securemaps.natureserve.org/pub2/rest/services/Americas/Macrogroup/MapServer",children:"MapServer"})}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"derived-vector-data",children:"Derived vector data"}),"\n",(0,a.jsxs)(t.p,{children:["I created my own version of the potential distribution maps and shared them in one ",(0,a.jsx)(t.a,{href:"https://osf.io/wme3b",children:"OSF repository"}),"."]}),"\n",(0,a.jsx)(t.p,{children:'Many people have requested vector data, so I exported this using the Geopackage (".gpkg") format. This format should open in open source software like QGIS without any problem.'}),"\n",(0,a.jsxs)(t.section,{"data-footnotes":!0,className:"footnotes",children:[(0,a.jsx)(t.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{id:"user-content-fn-1-845b8a",children:["\n",(0,a.jsxs)(t.p,{children:["Ferrer-Paris, J. R., Zager, I., Keith, D. A., Oliveira-Miranda, M., Rodr\xedguez, J. P., Josse, C., Gonz\xe1lez-Gil, M., Miller, R. M., Zambrana-Torrelio, C., & Barrow, E. (2019) An ecosystem risk assessment of temperate and tropical forests of the Americas with an outlook on future conservation strategies. Conserv. Lett. 12. ",(0,a.jsx)(t.a,{href:"https://doi.org/10.1111/conl.12623",children:"https://doi.org/10.1111/conl.12623"})," ",(0,a.jsx)(t.a,{href:"#user-content-fnref-1-845b8a","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{id:"user-content-fn-2-845b8a",children:["\n",(0,a.jsxs)(t.p,{children:["Ferrer-Paris, J. R. (2023, April 5). Lista Roja de Ecosistemas de UICN de los bosques de las Am\xe9ricas. ",(0,a.jsx)(t.a,{href:"https://doi.org/10.17605/OSF.IO/M6AFP",children:"https://doi.org/10.17605/OSF.IO/M6AFP"})," ",(0,a.jsx)(t.a,{href:"#user-content-fnref-2-845b8a","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{id:"user-content-fn-3-845b8a",children:["\n",(0,a.jsxs)(t.p,{children:["Faber-Langendoen, D., Baldwin, K., Peet, R. K., Meidinger, D., Muldavin, E., Keeler-Wolf, T., & Josse, C. (2018). The EcoVeg approach in the Americas: U.S., Canadian and International Vegetation Classifications. In Phytocoenologia (Vol. 48, Issue 2, pp. 215\u2013237). Schweizerbart. ",(0,a.jsx)(t.a,{href:"https://doi.org/10.1127/phyto/2017/0165",children:"https://doi.org/10.1127/phyto/2017/0165"})," ",(0,a.jsx)(t.a,{href:"#user-content-fnref-3-845b8a","data-footnote-backref":"","aria-label":"Back to reference 3",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>n});var a=s(7294);const r={},o=a.createContext(r);function n(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);