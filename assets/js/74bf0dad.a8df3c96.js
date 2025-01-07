"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9725],{9474:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"git/git-troubleshoots","title":"Git Troubleshoots","description":"Updates were rejected because the remote contains work that you do not have locally.","source":"@site/dev/git/git-troubleshoots.md","sourceDirName":"git","slug":"/git/git-troubleshoots","permalink":"/dev/git/git-troubleshoots","draft":false,"unlisted":false,"editUrl":"https://github.com/Cyber-Syntax/cyber-syntax.github.io/dev/git/git-troubleshoots.md","tags":[{"inline":true,"label":"git","permalink":"/dev/tags/git"}],"version":"current","lastUpdatedBy":"Cyber-Syntax","lastUpdatedAt":1736243652000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Git Troubleshoots","tags":["git"]},"sidebar":"defaultSidebar","previous":{"title":"Git Fundamentals","permalink":"/dev/git/git-how-to"}}');var n=o(4848),i=o(8453);const r={sidebar_position:2,title:"Git Troubleshoots",tags:["git"]},a=void 0,c={},l=[{value:"Updates were rejected because the remote contains work that you do not have locally.",id:"updates-were-rejected-because-the-remote-contains-work-that-you-do-not-have-locally",level:2},{value:"Accessing A Lost Commit",id:"accessing-a-lost-commit",level:2},{value:"How to stash your commits when you mistakenly update them on main branch?",id:"how-to-stash-your-commits-when-you-mistakenly-update-them-on-main-branch",level:2},{value:"how to do a pull request when my branch and master have no related history",id:"how-to-do-a-pull-request-when-my-branch-and-master-have-no-related-history",level:2},{value:"<strong>warning: adding embedded git repository: .git-bare/polybar</strong>",id:"warning-adding-embedded-git-repository-git-barepolybar",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"updates-were-rejected-because-the-remote-contains-work-that-you-do-not-have-locally",children:"Updates were rejected because the remote contains work that you do not have locally."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-git",children:"git pull --rebase # ofcourse backup before do\n"})}),"\n",(0,n.jsx)(t.h2,{id:"accessing-a-lost-commit",children:"Accessing A Lost Commit"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/jbranchaud/til/blob/master/git/accessing-a-lost-commit.md#accessing-a-lost-commit",children:"https://github.com/jbranchaud/til/blob/master/git/accessing-a-lost-commit.md#accessing-a-lost-commit"})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["If you have lost track of a recent commit (perhaps you did a reset), you can generally still get it back. Run\xa0",(0,n.jsx)(t.code,{children:"git reflog"}),"\xa0and look through the output to see if you can find that commit. Note the sha value associated with that commit. Let's say it is\xa0",(0,n.jsx)(t.code,{children:"39e85b2"}),". You can peruse the details of that commit with\xa0",(0,n.jsx)(t.code,{children:"git show 39e85b2"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["From there, the utility belt that is git is at your disposal. For example, you can\xa0",(0,n.jsx)(t.code,{children:"cherry-pick"}),"\xa0the commit or do a\xa0",(0,n.jsx)(t.code,{children:"rebase"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"how-to-stash-your-commits-when-you-mistakenly-update-them-on-main-branch",children:"How to stash your commits when you mistakenly update them on main branch?"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"[!INFO] Please commit your changes or stash them before you switch branches."}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"git stash"})," is a command in the Git version control system that allows you to temporarily shelve or \"stash\" changes you've made in your working directory. This means it will save all the changes you haven't committed yet, allowing you to switch to a different branch or fix bugs without committing those changes."]}),"\n",(0,n.jsxs)(t.li,{children:["You can list all stashes by using ",(0,n.jsx)(t.code,{children:"git stash list"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["To apply the most recent stash and continue working on it, you would use ",(0,n.jsx)(t.code,{children:"git stash apply"}),".","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"git stash apply"})," doesn't remove the stash, while ",(0,n.jsx)(t.code,{children:"git stash pop"})," would apply and remove the most recent stash."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["If you want to delete the most recent stash after you've finished working on it, you can use ",(0,n.jsx)(t.code,{children:"git stash drop"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"how-to-do-a-pull-request-when-my-branch-and-master-have-no-related-history",children:"how to do a pull request when my branch and master have no related history"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["source: ",(0,n.jsx)(t.a,{href:"https://stackoverflow.com/questions/51955269/how-to-do-a-pull-request-when-my-branch-and-master-have-no-related-history",children:"stackoverflow"})]}),"\n"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Checkout ",(0,n.jsx)(t.code,{children:"branch_x"}),"\u200b to work on it:",(0,n.jsx)(t.br,{}),"\n","\u200b",(0,n.jsx)(t.code,{children:"git checkout bare-repo"}),"\u200b"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Reset soft to ",(0,n.jsx)(t.code,{children:"master"}),"\u200b so that ",(0,n.jsx)(t.code,{children:"branch_x"}),"\u200b is now at the same place than ",(0,n.jsx)(t.code,{children:"master"}),"\u200b in the git history but all your changes are now staged (",(0,n.jsx)(t.code,{children:"reset --soft"}),"\u200b doesn't touch files in the working directory and even add the changes directly to the staging area):",(0,n.jsx)(t.br,{}),"\n","\u200b",(0,n.jsx)(t.code,{children:"git reset --soft main"}),"\u200b"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Commit the files so that it will create one commit containing just the changes made in ",(0,n.jsx)(t.code,{children:"branch_x"}),"\u200b compared to ",(0,n.jsx)(t.code,{children:"master"}),"\u200b",(0,n.jsx)(t.br,{}),"\n","\u200b",(0,n.jsx)(t.code,{children:'git commit -m "update bare-repo files"'}),"\u200b"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["And now ",(0,n.jsx)(t.code,{children:"branch_x"}),"\u200b\u200b is one commit ahead of ",(0,n.jsx)(t.code,{children:"master"}),"\u200b\u200b and you can create your PR. You perhaps will have to ",(0,n.jsx)(t.code,{children:"push --force"}),"\u200b\u200b depending if you already pushed ",(0,n.jsx)(t.code,{children:"branch_x"}),"\u200b\u200b"]}),"\n",(0,n.jsxs)(t.p,{children:["\u200b",(0,n.jsx)(t.code,{children:"git push --force"}),"\u200b\u200b"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Need to do something to get changes on main because that doesn't worked."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"warning-adding-embedded-git-repository-git-barepolybar",children:(0,n.jsx)(t.strong,{children:"warning: adding embedded git repository: .git-bare/polybar"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"or submodule error"}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Firstly rm with --cached command what it's suggested from error."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-git",children:"git-bare rm -f --cached .git-bare/polybar\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Don't forget to do from your main .git repo(e.g ",(0,n.jsx)(t.code,{children:"git"}),"\u200b instead of alias ",(0,n.jsx)(t.code,{children:"git-bare"}),"\u200b), that's how I solve my problem:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"git rm --cached # general\ngit rm -f --cached .git-bare/polybar # -f for force\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"\u200d"})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>a});var s=o(6540);const n={},i=s.createContext(n);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);