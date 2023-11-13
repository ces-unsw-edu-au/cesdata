"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3386],{3931:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=i(5893),s=i(1151);const r={title:"IPG-Chile",description:"Inventario Publico de Glaciares - Chile",tags:["tropical glaciers","IUCN RLE"]},t=void 0,o={id:"cryosphere/regional/IPG-Chile",title:"IPG-Chile",description:"Inventario Publico de Glaciares - Chile",source:"@site/docs/cryosphere/regional/IPG-Chile.md",sourceDirName:"cryosphere/regional",slug:"/cryosphere/regional/IPG-Chile",permalink:"/cesdata/docs/cryosphere/regional/IPG-Chile",draft:!1,unlisted:!1,tags:[{label:"tropical glaciers",permalink:"/cesdata/docs/tags/tropical-glaciers"},{label:"IUCN RLE",permalink:"/cesdata/docs/tags/iucn-rle"}],version:"current",frontMatter:{title:"IPG-Chile",description:"Inventario Publico de Glaciares - Chile",tags:["tropical glaciers","IUCN RLE"]},sidebar:"tutorialSidebar",previous:{title:"CCAMLR Public Data Repository",permalink:"/cesdata/docs/cryosphere/regional/CCAMLR"},next:{title:"NGI-Argentina",permalink:"/cesdata/docs/cryosphere/regional/NGI-Argentina"}},c={},l=[{value:"Links",id:"links",level:2},{value:"Citation",id:"citation",level:2},{value:"Data access and preparation",id:"data-access-and-preparation",level:2},{value:"This dataset is used for...",id:"this-dataset-is-used-for",level:2},{value:"IUCN RLE assessment of tropical glaciers",id:"iucn-rle-assessment-of-tropical-glaciers",level:3}];function d(e){const a={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h2,{id:"links",children:"Links"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://dga.mop.gob.cl/Paginas/InventarioGlaciares.aspx",children:"https://dga.mop.gob.cl/Paginas/InventarioGlaciares.aspx"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://www.ide.cl/index.php/noticias/item/2167-inventario-publico-de-glaciares-2022-disponible-para-la-ciudadania",children:"https://www.ide.cl/index.php/noticias/item/2167-inventario-publico-de-glaciares-2022-disponible-para-la-ciudadania"})}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"citation",children:"Citation"}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Direcci\xf3n General de Aguas (DGA), 2022. METODOLOG\xcdA DEL INVENTARIO P\xdaBLICO DE GLACIARES, SDT N\xb0447, 2022. Ministerio de Obras P\xfablicas, Direcci\xf3n General de Aguas Unidad de Glaciolog\xeda y Nieves. Realizado por: Casassa, G., Espinoza, A., Segovia, A., Huenante, J."}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"data-access-and-preparation",children:"Data access and preparation"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sh",children:"source ~/proyectos/CES/cesdata/env/project-env.sh\n\nDPATH=cryosphere/regional\nDNAME=IPG-Chile\n\nmkdir -p $GISDATA/$DPATH/$DNAME/\ncd $GISDATA/$DPATH/$DNAME/\n\n## Download error\n# wget --continue https://dga.mop.gob.cl/estudiospublicaciones/mapoteca/Documents/IPG2022.zip\n\n## copy from local download\n# scp ~/Downloads/IPG2022.zip $zID@kdm.restech.unsw.edu.au:/srv/scratch/cesdata/gisdata/cryosphere/regional/IPG-Chile/\n"})}),"\n",(0,n.jsx)(a.h2,{id:"this-dataset-is-used-for",children:"This dataset is used for..."}),"\n",(0,n.jsx)(a.h3,{id:"iucn-rle-assessment-of-tropical-glaciers",children:"IUCN RLE assessment of tropical glaciers"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://osf.io/432sb/",children:"OSF project component"})}),"\n"]})]})}function p(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,a,i)=>{i.d(a,{Z:()=>o,a:()=>t});var n=i(7294);const s={},r=n.createContext(s);function t(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);