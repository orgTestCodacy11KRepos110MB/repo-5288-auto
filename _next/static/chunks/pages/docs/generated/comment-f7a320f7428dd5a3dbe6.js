_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[38],{"0oBi":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.isDarkMode=function(){if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)return!0;return!1},t.useDarkMode=function(){const[e,t]=d.default.useState(!1);return(0,l.default)((()=>{const e=window.matchMedia("(prefers-color-scheme: dark)"),a=()=>{t(window.matchMedia("(prefers-color-scheme: dark)").matches)};return a(),e.addListener(a),()=>{e.removeListener(a)}}),[]),e};var d=n(a("mXGw")),l=n(a("YO29"))},"63Ad":function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"6f/q":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=n(a("mXGw")),l=n(a("pWCa")),r=a("I08b"),c=a("GDok"),o=a("nZpd"),m=a("AFBu"),s=a("0oBi");var u=({children:e,...t})=>{const a=d.default.useState(!1);d.default.useEffect((()=>{if("undefined"!==typeof document)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)};function e(e){"/"===e.key&&(document.getElementById("search").focus(),e.preventDefault())}}),[]);const n=(0,s.useDarkMode)();return d.default.createElement(o.MobileMenuContext.Provider,{value:t.menuState||a},d.default.createElement(l.default,null,d.default.createElement("link",{rel:"shortcut icon",media:"(prefers-color-scheme:dark)",href:(0,m.formatPath)(n?"favicon-dark.png":"favicon.png")})),d.default.createElement(r.SkipNavLink,null),d.default.createElement("div",{id:"ignite",className:"min-h-screen flex flex-col bg-white dark:bg-gray-1000"},d.default.createElement(c.NavBar,{sections:JSON.parse('["docs","blog"]'),hasHomePage:"true"}),e))};t.default=u},AFBu:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.formatPath=function(e){return d.default.join("/auto",`/${e.replace(/\.mdx$/,"")}`)},t.postFixHTML=function(e){return e;if(e.startsWith("#"))return e;if(d.default.basename(e).includes("#"))return e.replace("#",".html#");return`${e}.html`};var d=n(a("O2/E"))},C3pV:function(e,t,a){"use strict";(function(e){var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.Sidebar=t.SidebarActiveItem=void 0;var d=n(a("mXGw")),l=n(a("5dyF")),r=n(a("pWCa")),c=n(a("O2/E")),o=n(a("PDtE")),m=a("/FXl"),s=a("dAGg"),u=a("nZpd"),i=a("AFBu");const p=d.default.createContext({pathname:"",sidebarFileLocation:""});t.SidebarActiveItem=p;const b=({href:e,children:t})=>{const a=d.default.useContext(p),{SidebarLink:n}=(0,m.useMDXComponents)(),r=c.default.join(a.sidebarFileLocation,e);let o=e;return a.sidebarFileLocation&&(o=r,o.endsWith("/index")&&(o=o.replace("/index","")),o.endsWith("/")&&(o=o.slice(0,-1))),d.default.createElement(l.default,{passHref:!0,href:(0,i.postFixHTML)(o)},d.default.createElement(n,{isActive:a.pathname.replace("/index","")===(0,i.formatPath)(o)},t))};t.Sidebar=({links:t,folder:n})=>{const[l]=d.default.useContext(u.MobileMenuContext),x=`/${n}`,f=(e=>{try{return a("f+ue")("./pages"+e+"/_sidebar.mdx").default}catch(t){try{return a("NDOZ")("./pages"+e+"/_sidebar.js").default}catch(t){}}})(x),g=(t=>{const a=(0,s.useRouter)(),n="phase-production-build"!==e.env.NEXT_PHASE&&a.pathname.includes("/auto")?c.default.relative("/auto",a.pathname):c.default.relative("/",a.pathname);let d=t.find((e=>e.__resourcePath.replace(".mdx","")===n));return d||(d=t.find((e=>{const t=e.__resourcePath.replace(".mdx","");return t.endsWith("index")&&a.pathname.includes(t.replace("/index",""))}))),{title:d.title||"auto",pathname:(0,i.formatPath)(d.__resourcePath)}})(t),{SidebarItemWrapper:O,SidebarLink:j,SidebarTitle:h,SidebarDivider:E,SidebarList:N,Sidebar:y,...v}=(0,m.useMDXComponents)();return d.default.createElement(p.Provider,{value:{...g,sidebarFileLocation:f?x:""}},d.default.createElement(m.MDXProvider,{components:{...v,li:O,ul:N,a:b,p:h,hr:E}},d.default.createElement(r.default,null,d.default.createElement("title",null,g.title.replace(/\\`/g,"`"))),d.default.createElement(y,{className:(0,o.default)(!l&&"hidden","lg:block")},f?d.default.createElement(f,null):d.default.createElement(N,null,t.map((e=>d.default.createElement(O,{key:e.__resourcePath},d.default.createElement(b,{href:e.__resourcePath},e.title))))))))}}).call(this,a("5IsQ"))},GDok:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.NavBar=void 0;var d=n(a("8VmE")),l=n(a("mXGw")),r=n(a("5dyF")),c=a("V5Fo"),o=a("/FXl"),m=n(a("PDtE")),s=a("nZpd"),u=a("AFBu");const i=({className:e,...t})=>l.default.createElement("svg",(0,d.default)({className:(0,m.default)("fill-current w-5 h-5",e),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},t),l.default.createElement("path",{d:"M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"})),p=()=>{const{SearchInput:e}=(0,o.useMDXComponents)();return l.default.createElement("div",{className:"h-full flex items-center w-full lg:w-auto lg:flex-1 lg:mr-4 lg:pr-4"},l.default.createElement(e,null))};t.NavBar=({sections:e,hasHomePage:t})=>{const[a,n]=l.default.useContext(s.MobileMenuContext),{Logo:d,NavBarWrapper:m,NavBar:b,NavBarItem:x,MobileMenuButton:f}=(0,o.useMDXComponents)();return l.default.createElement(l.default.Fragment,null,l.default.createElement(m,null,l.default.createElement(b,null,t?l.default.createElement(r.default,{passHref:!0,href:(0,u.postFixHTML)("/index")},l.default.createElement(d,null)):l.default.createElement(d,null),l.default.createElement("div",{className:"w-full h-full flex items-center lg:flex flex-1 lg:pl-12 lg:pr-6 lg:mx-auto"},l.default.createElement(p,null),l.default.createElement(f,{open:a,setOpen:n,className:"lg:hidden"}),l.default.createElement("div",{className:"hidden lg:flex h-full"},e.map((e=>l.default.createElement(r.default,{passHref:!0,key:e,href:(0,u.postFixHTML)(`/${e}`)},l.default.createElement(x,null,(0,c.titleCase)(e))))),l.default.createElement(x,{href:"https://github.com/intuit/auto",target:"_blank","aria-label":"Open on GitHub"},l.default.createElement(i,null)))))),a&&l.default.createElement("div",{className:"lg:hidden"},e.map((e=>l.default.createElement(r.default,{passHref:!0,key:e,href:(0,u.postFixHTML)(`/${e}`)},l.default.createElement(x,null,(0,c.titleCase)(e))))),l.default.createElement(x,{href:"https://github.com/intuit/auto",target:"_blank"},l.default.createElement(i,{className:"mr-2"}),"Open on GitHub")))}},TJl4:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.OpenGraphTags=void 0;var d=n(a("mXGw")),l=a("dAGg"),r=n(a("ghLh")),c=n(a("pWCa"));t.OpenGraphTags=({title:e,description:t,image:a})=>{const n=(0,l.useRouter)(),o=(0,r.default)("https://intuit.github.io/auto",n.pathname);return d.default.createElement(c.default,null,d.default.createElement("title",null,e),t&&d.default.createElement("meta",{name:"description",content:t}),d.default.createElement("meta",{property:"og:url",content:o}),d.default.createElement("meta",{property:"og:type",content:"website"}),d.default.createElement("meta",{property:"og:title",content:e}),t&&d.default.createElement("meta",{name:"og:description",content:t}),a&&d.default.createElement("meta",{name:"og:image",content:a}),o&&d.default.createElement("meta",{property:"twitter:domain",content:new URL(o).hostname}),d.default.createElement("meta",{property:"twitter:url",content:o}),d.default.createElement("meta",{name:"twitter:title",content:e}),t&&d.default.createElement("meta",{name:"twitter:description",content:t}),a&&d.default.createElement("meta",{name:"twitter:image",content:a}))}},fPVe:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a("Fcif"),d=a("dV/x"),l=a("mXGw"),r=a.n(l),c=a("/FXl"),o=a("pu0P"),m=a.n(o),s=(r.a.createElement,{title:"`comment`",layout:"docs",description:void 0,date:null,author:"",email:"",__resourcePath:"docs/generated/comment.mdx",__scans:{}}),u={frontMatter:s},i=m.a;function p(e){var t=e.components,a=Object(d.a)(e,["components"]);return Object(c.mdx)(i,Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"Comment on a pull request with a markdown message. Each comment has a context, and each context only has one comment."),Object(c.mdx)("h2",{id:"options"},Object(c.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#options"}),"Options")),Object(c.mdx)("table",null,Object(c.mdx)("thead",{parentName:"table"},Object(c.mdx)("tr",{parentName:"thead"},Object(c.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Flag"),Object(c.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.mdx)("tbody",{parentName:"table"},Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.mdx)("inlineCode",{parentName:"td"},"--pr")),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"The pull request the command should use. Detects PR number in CI")),Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.mdx)("inlineCode",{parentName:"td"},"--context")),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"A string label to differentiate this status from others")),Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.mdx)("inlineCode",{parentName:"td"},"--edit"),", ",Object(c.mdx)("inlineCode",{parentName:"td"},"-e")),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Edit old comment")),Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.mdx)("inlineCode",{parentName:"td"},"--delete")),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Delete old comment")),Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.mdx)("inlineCode",{parentName:"td"},"--message"),", ",Object(c.mdx)("inlineCode",{parentName:"td"},"-m")),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Message to post to comment")),Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.mdx)("inlineCode",{parentName:"td"},"--dry-run"),", ",Object(c.mdx)("inlineCode",{parentName:"td"},"-d")),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Report what command will do but do not actually do anything")))),Object(c.mdx)("h2",{id:"examples"},Object(c.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#examples"}),"Examples")),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-bash syntax-light",style:{background:"#fff"}}),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"auto comment --delete"),"\n"),Object(c.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-bash syntax-light syntax-dark",style:{background:"#24292e"}}),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"auto comment --delete"),"\n")),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-bash syntax-light",style:{background:"#fff"}}),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"auto comment --pr 123 --message "),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#032F62"}}),'"# Why you\'re wrong..."'),"\n"),Object(c.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-bash syntax-light syntax-dark",style:{background:"#24292e"}}),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"auto comment --pr 123 --message "),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#9ECBFF"}}),'"# Why you\'re wrong..."'),"\n")),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-bash syntax-light",style:{background:"#fff"}}),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"auto comment --pr 123 --edit --message "),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#032F62"}}),'"This smells..."'),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}})," --context code-smell"),"\n"),Object(c.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-bash syntax-light syntax-dark",style:{background:"#24292e"}}),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"auto comment --pr 123 --edit --message "),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#9ECBFF"}}),'"This smells..."'),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}})," --context code-smell"),"\n")),Object(c.mdx)("h2",{id:"configurable-options"},Object(c.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#configurable-options"}),"Configurable Options")),Object(c.mdx)("p",null,"You can configure some of the options for the ",Object(c.mdx)("inlineCode",{parentName:"p"},"comment")," command in the ",Object(c.mdx)("inlineCode",{parentName:"p"},".autorc"),"."),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("inlineCode",{parentName:"li"},"edit")),Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("inlineCode",{parentName:"li"},"delete"))),Object(c.mdx)("p",null,Object(c.mdx)("strong",{parentName:"p"},"Example ",Object(c.mdx)("inlineCode",{parentName:"strong"},".autorc"),":")),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json syntax-light",style:{background:"#fff"}}),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"{"),"\n",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"  "),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#005CC5"}}),'"comment"'),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),": {"),"\n",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"    "),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#005CC5"}}),'"edit"'),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),": "),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#005CC5"}}),"true"),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),","),"\n",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"    "),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#005CC5"}}),'"delete"'),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),": "),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#005CC5"}}),"true"),"\n",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"  }"),"\n",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"}"),"\n"),Object(c.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json syntax-light syntax-dark",style:{background:"#24292e"}}),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"{"),"\n",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"  "),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#79B8FF"}}),'"comment"'),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),": {"),"\n",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"    "),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#79B8FF"}}),'"edit"'),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),": "),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#79B8FF"}}),"true"),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),","),"\n",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"    "),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#79B8FF"}}),'"delete"'),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),": "),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#79B8FF"}}),"true"),"\n",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"  }"),"\n",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"}"),"\n")))}p.isMDXComponent=!0},nZpd:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.MobileMenuContext=void 0;const d=n(a("mXGw")).default.createContext([!1,()=>{}]);t.MobileMenuContext=d},pu0P:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=n(a("mXGw")),l=n(a("O2/E")),r=a("/FXl"),c=n(a("PDtE")),o=a("I08b"),m=a("C3pV"),s=n(a("6f/q")),u=n(a("x3GE")),i=a("TJl4");const p=/([^`]*)`([^`]*)`(.*)/m;var b=({children:e,frontMatter:t})=>{const[a,n]=d.default.useState(!1),b=(0,r.useMDXComponents)(),x=t.__resourcePath.split("/")[0],f=(0,u.default)(),g=JSON.parse('["index.mdx","blog/both-worlds.mdx","blog/npm-canary-scope.mdx","blog/pr-in-progress.mdx","blog/using-shipit.mdx","blog/v8.mdx","blog/why.mdx","docs/_sidebar.mdx","docs/index.mdx","docs/build-platforms/circleci.mdx","docs/build-platforms/github-actions.mdx","docs/build-platforms/jenkins.mdx","docs/build-platforms/travis.mdx","docs/configuration/autorc.mdx","docs/configuration/non-npm.mdx","docs/configuration/plugins.mdx","docs/configuration/troubleshooting.mdx","docs/generated/all-contributors.mdx","docs/generated/brew.mdx","docs/generated/canary.mdx","docs/generated/changelog.mdx","docs/generated/chrome.mdx","docs/generated/cocoapods.mdx","docs/generated/comment.mdx","docs/generated/conventional-commits.mdx","docs/generated/crates.mdx","docs/generated/create-labels.mdx","docs/generated/defaultLabelsRenderer.mdx","docs/generated/docker.mdx","docs/generated/exec.mdx","docs/generated/first-time-contributor.mdx","docs/generated/gem.mdx","docs/generated/gh-pages.mdx","docs/generated/git-tag.mdx","docs/generated/gradle.mdx","docs/generated/info.mdx","docs/generated/init.mdx","docs/generated/jira.mdx","docs/generated/label.mdx","docs/generated/latest.mdx","docs/generated/magic-zero.mdx","docs/generated/maven.mdx","docs/generated/microsoft-teams.mdx","docs/generated/next.mdx","docs/generated/npm.mdx","docs/generated/omit-commits.mdx","docs/generated/omit-release-notes.mdx","docs/generated/pr-body-labels.mdx","docs/generated/pr-body.mdx","docs/generated/pr-check.mdx","docs/generated/pr-status.mdx","docs/generated/release.mdx","docs/generated/released.mdx","docs/generated/s3.mdx","docs/generated/sbt.mdx","docs/generated/shipit.mdx","docs/generated/slack.mdx","docs/generated/twitter.mdx","docs/generated/upload-assets.mdx","docs/generated/version.mdx","docs/generated/vscode.mdx","docs/plugins/changelog-hooks.mdx","docs/plugins/configuration-hooks.mdx","docs/plugins/hook-api-docs.mdx","docs/plugins/init-hooks.mdx","docs/plugins/log-parse-hooks.mdx","docs/plugins/release-lifecycle-hooks.mdx","docs/plugins/writing-plugins.mdx","docs/plugins/writing-publishing-plugins.mdx","docs/welcome/getting-started.mdx","docs/welcome/quick-merge.mdx"]').map((e=>l.default.relative("./",e))).filter((e=>e.startsWith(x))).map((e=>f.find((t=>t.__resourcePath===e))));return d.default.createElement(d.default.Fragment,null,d.default.createElement(i.OpenGraphTags,t),d.default.createElement(s.default,{menuState:[a,n]},d.default.createElement("div",{className:"flex-1 w-full lg:max-w-6xl mx-auto flex"},d.default.createElement(m.Sidebar,{links:g,folder:x}),d.default.createElement(o.SkipNavContent,null),d.default.createElement("main",{className:(0,c.default)("DocSearch-content","pt-8 pb-16 px-4 sm:px-6 xl:px-12 lg:mx-auto w-full","flex-1 overflow-hidden","lg:block",a&&"hidden")},t.title&&d.default.createElement(b.h1,null,function(e,t){if(!t)return;const a=[];let n=t.replace(/\\`/g,"`");for(;p.test(n);){const[,t,l,r]=n.match(p);a.push(t),a.push(d.default.createElement(e.inlineCode,null,l)),n=r}return a.push(n),d.default.createElement("div",null,a)}(b,t.title)),e))))};t.default=b},x3GE:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;let n=[];try{const e=a("jmz1");n=e.keys().map(e)}catch(l){0}var d=()=>{try{return n}catch(l){return[]}};t.default=d},xB8Q:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/generated/comment",function(){return a("fPVe")}])}},[["xB8Q",0,1,2,3,4]]]);