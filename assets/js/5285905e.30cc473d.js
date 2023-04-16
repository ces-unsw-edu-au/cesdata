"use strict";(self.webpackChunkdocusite=self.webpackChunkdocusite||[]).push([[866],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=n,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},717:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const i={},o="Global Fire Emissions Database, Version 4.1 (GFEDv4)",l={unversionedId:"fire/global/Global-Fire-Emission-Database",id:"fire/global/Global-Fire-Emission-Database",title:"Global Fire Emissions Database, Version 4.1 (GFEDv4)",description:"Citation",source:"@site/docs/fire/global/Global-Fire-Emission-Database.md",sourceDirName:"fire/global",slug:"/fire/global/Global-Fire-Emission-Database",permalink:"/docs/fire/global/Global-Fire-Emission-Database",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Map of the terrestrial ecosystems of Myanmar, Version 1.0",permalink:"/docs/ecosystems/regional/Myanmar-Terrestrial-Ecosystems"},next:{title:"Modis-burned-area",permalink:"/docs/fire/global/Modis-burned-area"}},s={},c=[{value:"Citation",id:"citation",level:4},{value:"Documentation",id:"documentation",level:4},{value:"Data availability",id:"data-availability",level:4},{value:"Data preparation",id:"data-preparation",level:4}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"global-fire-emissions-database-version-41-gfedv4"},"Global Fire Emissions Database, Version 4.1 (GFEDv4)"),(0,n.kt)("h4",{id:"citation"},"Citation"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Randerson, J.T., G.R. van der Werf, L. Giglio, G.J. Collatz, and P.S. Kasibhatla. 2017. Global Fire Emissions Database, Version 4.1 (GFEDv4). ORNL DAAC, Oak Ridge, Tennessee, USA. ",(0,n.kt)("a",{parentName:"p",href:"https://doi.org/10.3334/ORNLDAAC/1293"},"https://doi.org/10.3334/ORNLDAAC/1293"))),(0,n.kt)("h4",{id:"documentation"},"Documentation"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://daac.ornl.gov/VEGETATION/guides/fire_emissions_v4_R1.html"},"https://daac.ornl.gov/VEGETATION/guides/fire_emissions_v4_R1.html")),(0,n.kt)("h4",{id:"data-availability"},"Data availability"),(0,n.kt)("p",null,"Sign in to ORNL DAAC\n",(0,n.kt)("a",{parentName:"p",href:"https://daac.ornl.gov/cgi-bin/dsviewer.pl?ds_id=1293"},"https://daac.ornl.gov/cgi-bin/dsviewer.pl?ds_id=1293")),(0,n.kt)("h4",{id:"data-preparation"},"Data preparation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"\nmkdir -p $GISDATA/fire/GFEDv4\ncd $GISDATA/fire/GFEDv4\nmv ~/Downloads/fire_emissions_v4_R1_1293.zip $GISDATA/fire/GFEDv4\n\ncd $WORKDIR\n unzip $GISDATA/fire/GFEDv4/fire_emissions_v4_R1_1293.zip\n\n")))}u.isMDXComponent=!0}}]);