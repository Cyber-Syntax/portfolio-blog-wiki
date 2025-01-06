---
sidebar_position: 1
# slug: /nixos
title: Nixos Troubleshoots
id: nixos1
tags:
  - nixos
---

<!-- TOC -->

## How to solve lua-language-server error on neovim?

1. Install lua-language-server as a package.
2. Learn location of bin file `which lua-language-server`
3. Setup this on `.local/share/nvim/mason/bin/lua-language-server`.

```bash
#!/usr/bin/env bash
exec "/run/current-system/sw/bin/lua-language-server" "$@"
#exec "/home/developer/.nix-profile/bin/lua-language-server"

#old path give error
#exec "/home/developer/.local/share/nvim/mason/packages/lua-language-server/libexec/bin/lua-language-server" "$@"
```

<!-- /TOC -->
