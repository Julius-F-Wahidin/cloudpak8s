(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"013z":function(e,t,n){"use strict";n("KKXr"),n("pIFo");var a=n("pOBw"),r=n("q1tI"),l=n.n(r),i=n("NmYn"),o=n.n(i),b=n("OKom"),c=n("k4MR"),s=n("TSYQ"),p=n.n(s),d=n("QH2O"),m=n("qKvR"),u=function(e){var t,n=e.title,a=e.tabs,r=void 0===a?[]:a;return Object(m.b)("div",{className:p()(d.pageHeader,(t={},t[d.withTabs]=r.length,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:d.text},n)))))},O=n("pEPl"),j=n("BAC9"),h=function(e){var t=e.relativePagePath,n=e.repository,a=O.data.site.siteMetadata.repository,r=n||a,l=r.baseUrl,i=r.subDirectory,o=l+"/edit/"+r.branch+i+"/src/pages"+t;return l?Object(m.b)("div",{className:"bx--row "+j.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:j.link,href:o},"Edit this page on GitHub"))):null},g=n("FCXl"),N=(n("Oyvg"),n("Wbzz")),f=n("I8xM");var w=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props,t=e.tabs,n=e.slug,a=n.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=o()(e,{lower:!0}),l=r===a,i=new RegExp(a+"(?!-)"),b=n.replace(i,r);return Object(m.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=l,t),f.listItem)},Object(m.b)(N.Link,{className:f.link,to:""+b},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:f.list},r))))))},a}(l.a.Component),v=n("MjG9");t.a=function(e){var t=e.pageContext,n=e.children,r=e.location,l=e.Title,i=t.frontmatter,s=void 0===i?{}:i,p=t.relativePagePath,d=t.titleType,O=s.tabs,j=s.title,N=s.theme,f=s.description,y=s.keywords,C=a.data.site.pathPrefix,P=C?r.pathname.replace(C,""):r.pathname,k=O?P.split("/").filter(Boolean).slice(-1)[0]||o()(O[0],{lower:!0}):"";return Object(m.b)(c.a,{tabs:O,homepage:!1,theme:N,pageTitle:j,pageDescription:f,pageKeywords:y,titleType:d},Object(m.b)(u,{title:l?Object(m.b)(l,null):j,label:"label",tabs:O}),O&&Object(m.b)(w,{slug:P,tabs:O,currentTab:k}),Object(m.b)(v.a,{padded:!0},n,Object(m.b)(h,{relativePagePath:p})),Object(m.b)(g.a,{pageContext:t,location:r,slug:P,tabs:O,currentTab:k}),Object(m.b)(b.a,null))}},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')},vtfQ:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return c}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),r=n("013z");n("qKvR");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={},o={_frontmatter:i},b=r.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(b,l({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,Object(a.b)("strong",{parentName:"h2"},"Installing Cloud Pak for Integration Then Cloud Pak for Applications")),Object(a.b)("p",null,"This section describes the scenario of installing Cloud Pak\nfor Integration first, followed by Cloud Pak for Applications. "),Object(a.b)("p",null,"From the experience of the residency group, if you are wanting to\ninstall these two Cloud Paks in the same cluster, installing them in\nthis order is recommended."),Object(a.b)("p",null,"The first step is to consider the prerequisites for the Cloud Paks you\nwant to install and to make sure your cluster has the required resources."),Object(a.b)("h3",null,Object(a.b)("strong",{parentName:"h3"},"Cloud Pak for Integration Prerequisites")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Refer to the Knowledge Center\n",Object(a.b)("a",l({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/SSGT7J_19.4/install/sysreqs.html"}),"prerequisites page"),"\n(Cloud Pak for Integration 2019.4)\nfor details on what is required before starting an installation.")),Object(a.b)("h3",null,Object(a.b)("strong",{parentName:"h3"},"Cloud Pak for Applications Prerequisites")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Refer to the Knowledge Center\n",Object(a.b)("a",l({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/SSCSJL_4.x/install-prerequisites.html"}),"prerequisites page"),"\n(Cloud Pak for Applications 4.0.x)\nfor details on what is required before starting an installation."),Object(a.b)("li",{parentName:"ul"},"Also consider the prerequisites for installing the Cloud Pak for Applications\ndeveloper tools. Prerequisites and installation instructions are provided in\nthis Playbook for ",Object(a.b)("a",l({parentName:"li"},{href:"/apps/cp4a_install_dev_tools_mac/"}),"Mac")," and for\n",Object(a.b)("a",l({parentName:"li"},{href:"/apps/cp4a_install_dev_tools_win/"}),"Windows")," workstations.")),Object(a.b)("h3",null,Object(a.b)("strong",{parentName:"h3"},"Cloud Pak for Integration + Applications")),Object(a.b)("h3",null,Object(a.b)("strong",{parentName:"h3"},"Combined Minimum Requirements (January 2020):")),Object(a.b)("p",null,"For your convenenience, the combined resource requirements that were used\nduring the residency in January 2020 are shown below. You are advised to\ncheck the product documentation for the most current numbers for the\nreleases you want to install."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",l({parentName:"tr"},{align:"left"}),"Node Type"),Object(a.b)("th",l({parentName:"tr"},{align:"center"}),"Quantity"),Object(a.b)("th",l({parentName:"tr"},{align:"center"}),"CPU"),Object(a.b)("th",l({parentName:"tr"},{align:"center"}),"RAM"),Object(a.b)("th",l({parentName:"tr"},{align:"center"}),"DISK 1"),Object(a.b)("th",l({parentName:"tr"},{align:"center"}),"DISK 2"),Object(a.b)("th",l({parentName:"tr"},{align:"center"}),"DISK 3"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:"left"}),"Bootstrap"),Object(a.b)("td",l({parentName:"tr"},{align:"center"}),"1"),Object(a.b)("td",l({parentName:"tr"},{align:"center"}),"4"),Object(a.b)("td",l({parentName:"tr"},{align:"center"}),"16"),Object(a.b)("td",l({parentName:"tr"},{align:"center"}),"100"),Object(a.b)("td",l({parentName:"tr"},{align:"center"})),Object(a.b)("td",l({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:"left"}),"Installer"),Object(a.b)("td",l({parentName:"tr"},{align:"center"}),"1"),Object(a.b)("td",l({parentName:"tr"},{align:"center"}),"4"),Object(a.b)("td",l({parentName:"tr"},{align:"center"}),"16"),Object(a.b)("td",l({parentName:"tr"},{align:"center"}),"120"),Object(a.b)("td",l({parentName:"tr"},{align:"center"})),Object(a.b)("td",l({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:"left"}),"LB"),Object(a.b)("td",l({parentName:"tr"},{align:"center"}),"1"),Object(a.b)("td",l({parentName:"tr"},{align:"center"}),"4"),Object(a.b)("td",l({parentName:"tr"},{align:"center"}),"16"),Object(a.b)("td",l({parentName:"tr"},{align:"center"}),"120"),Object(a.b)("td",l({parentName:"tr"},{align:"center"})),Object(a.b)("td",l({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:"left"}),"Master"),Object(a.b)("td",l({parentName:"tr"},{align:"center"}),"3"),Object(a.b)("td",l({parentName:"tr"},{align:"center"}),"16"),Object(a.b)("td",l({parentName:"tr"},{align:"center"}),"32"),Object(a.b)("td",l({parentName:"tr"},{align:"center"}),"300"),Object(a.b)("td",l({parentName:"tr"},{align:"center"})),Object(a.b)("td",l({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:"left"}),"Compute"),Object(a.b)("td",l({parentName:"tr"},{align:"center"}),"8"),Object(a.b)("td",l({parentName:"tr"},{align:"center"}),"16"),Object(a.b)("td",l({parentName:"tr"},{align:"center"}),"64"),Object(a.b)("td",l({parentName:"tr"},{align:"center"}),"200"),Object(a.b)("td",l({parentName:"tr"},{align:"center"})),Object(a.b)("td",l({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:"left"}),"Storage"),Object(a.b)("td",l({parentName:"tr"},{align:"center"}),"3"),Object(a.b)("td",l({parentName:"tr"},{align:"center"}),"4"),Object(a.b)("td",l({parentName:"tr"},{align:"center"}),"16"),Object(a.b)("td",l({parentName:"tr"},{align:"center"}),"200"),Object(a.b)("td",l({parentName:"tr"},{align:"center"}),"500"),Object(a.b)("td",l({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:"left"}),"NFS"),Object(a.b)("td",l({parentName:"tr"},{align:"center"}),"1"),Object(a.b)("td",l({parentName:"tr"},{align:"center"}),"2"),Object(a.b)("td",l({parentName:"tr"},{align:"center"}),"8"),Object(a.b)("td",l({parentName:"tr"},{align:"center"}),"500"),Object(a.b)("td",l({parentName:"tr"},{align:"center"})),Object(a.b)("td",l({parentName:"tr"},{align:"center"}))))),Object(a.b)("h2",null,Object(a.b)("strong",{parentName:"h2"},"Installation Instructions")),Object(a.b)("h3",null,"1. ",Object(a.b)("strong",{parentName:"h3"},"Installing Cloud Pak for Integration")),Object(a.b)("p",null,"The Cloud Pak for Integration can be installed following the instructions\nin the\n",Object(a.b)("a",l({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSGT7J_19.4/install/install.html"}),"Knowledge Center"),"\nor in the ",Object(a.b)("a",l({parentName:"p"},{href:"/integration/introduction"}),"Cloud Pak for Integration"),"\nsection of this Playbook."),Object(a.b)("h3",null,"2. ",Object(a.b)("strong",{parentName:"h3"},"Before Installing Cloud Pak for Applications:")),Object(a.b)("h4",null,Object(a.b)("strong",{parentName:"h4"},"Potential Storage Class Issue:")," "),Object(a.b)("p",null,"   The Cloud Pak for Applications installer will use the default\nstorage class. If the solution steps below are not done,\nthe ",Object(a.b)("inlineCode",{parentName:"p"},"CouchDB")," installation will fail. The\nCloud Pak for Applications ",Object(a.b)("inlineCode",{parentName:"p"},"Transformation Advisor (TA)")," component\nrequires ReadWriteMany (RWX) storage. This means you need\nat least one RWX storage volume available. The solution below\ndescribes configuring NFS for RWX storage, which was the option\nused in January 2020."),Object(a.b)("p",null,"   There should be an option to choose a storage class in\nthe ",Object(a.b)("inlineCode",{parentName:"p"},"config.yaml")," file. However,  this option did not exist at the\ntime of writing."),Object(a.b)("h4",null,Object(a.b)("strong",{parentName:"h4"},"Solution:")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Create an NFS export on an NFS server.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Define a Read Write Many (RWX) Persistent Volume (PV)\non the cluster to point to your NFS export.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Change the storage class name in the Transformation\nAdvisor operator definition, so that it uses the NFS storage."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",l({parentName:"pre"},{}),"``` \noc edit crd transadvs.charts.ta.cloud.ibm.com \n```\n")))),Object(a.b)("p",null,"Keep in mind that this configuration will be overwritten by installing\na later release. The only alternative is to change the default storage class."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," The Cloud Pak for Applications installer will report\nthat the installation completed\neven if the ",Object(a.b)("inlineCode",{parentName:"p"},"Transformation Advisor (TA)")," fails."),Object(a.b)("h3",null,"3. ",Object(a.b)("strong",{parentName:"h3"},"Installing Cloud Pak for Applications")),Object(a.b)("p",null,"The Cloud Pak for Applications can be installed following the instructions\nin the\n",Object(a.b)("a",l({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSCSJL_4.0.x/install-icpa.html"}),"Knowledge Center"),"\nor in the ",Object(a.b)("a",l({parentName:"p"},{href:"/apps/cp4a_overview"}),"Cloud Pak for Applications"),"\nsection of this Playbook."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-multipak-cp-4-i-cp-4-a-index-mdx-d8dc87f26f1c9db2ba4e.js.map