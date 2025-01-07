---
sidebar_position: 1
title: Docusaurus deploy
tags:
  - docusaurus
---

<!-- TOC -->

## How to use docusaurus with github pages?

1. ​`npx create-docusaurus@latest folder_name`​
2. Change organization name, project name etc.
   - Add gh-pages deployment branch, trailingslah:true
3. ​`yarn install`​
4. ​`yarn build`​
5. Create personal access token or SSH setup
6. Deploy
   - `USE_SSH=true yarn deploy`
   * ​`GIT_USER=<gh_personal_access_token> yarn deploy`​
7. Change github repository page view main to gh-pages from repository `settings -> pages(left sidebar) -> branch` '`gh-pages` and `/root` than save.

## How to update?

- ​`yarn build`
- `USE_SSH=true yarn deploy`
- or ​
- ​`GIT_USER=<gh_personal_access_token> yarn deploy`​

## If you want to add new blog, docs

- You are gonna use main branch to add new pages.
- gh-pages only using for static web view.
- You need to build and deploy again.

## Additional Resource

- Docusourus [Github page](https://github.com/facebook/docusaurus/blob/main/website/docs/api/misc/_category_.yml)
- Tutorial [guide](https://docusaurus.io/docs/sidebar/multiple-sidebars)

‍<!-- /TOC -->
