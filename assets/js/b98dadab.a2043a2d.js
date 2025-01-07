"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2542],{9122:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>u,default:()=>l,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"docusaurus/index","title":"Docusaurus How to\'s","description":"How to create multiple docs?","source":"@site/dev/docusaurus/index.md","sourceDirName":"docusaurus","slug":"/docusaurus/","permalink":"/dev/docusaurus/","draft":false,"unlisted":false,"editUrl":"https://github.com/Cyber-Syntax/cyber-syntax.github.io/dev/docusaurus/index.md","tags":[{"inline":true,"label":"docusaurus","permalink":"/dev/tags/docusaurus"}],"version":"current","lastUpdatedBy":"Cyber-Syntax","lastUpdatedAt":1736243652000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Docusaurus How to\'s","tags":["docusaurus"]},"sidebar":"defaultSidebar","previous":{"title":"Disclaimer","permalink":"/dev/"},"next":{"title":"Git Fundamentals","permalink":"/dev/git/git-how-to"}}');var o=s(4848),i=s(8453);const a={sidebar_position:2,title:"Docusaurus How to's",tags:["docusaurus"]},u=void 0,r={},c=[{value:"How to create multiple docs?",id:"how-to-create-multiple-docs",level:2},{value:"Basic template",id:"basic-template",level:2}];function d(e){const t={code:"code",h2:"h2",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"how-to-create-multiple-docs",children:"How to create multiple docs?"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'// docusaurus.config.js\n{\nto: "nixos",\nposition: "right",\nlabel: "NixOS",\n},\n\n// sidebar.js\nnixosSidebar: [{ type: "autogenerated", dirName: "nixos" }],\n\n// Create file on `my-website/nixos` instead of `docs/`\n\n'})}),"\n",(0,o.jsx)(t.h2,{id:"basic-template",children:"Basic template"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-md",children:"---\nsidebar_position: 1\nslug: /docs/Linux/Github/docusaurus\ntitle: Docusaurus\nid: docusaurus\ntags:\n  - github\n---\n\n\x3c!-- TOC --\x3e\n\n# Head1\n\n## Head2\n\n- content\n\n\x3c!-- /TOC --\x3e\n"})})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>u});var n=s(6540);const o={},i=n.createContext(o);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);