---
title: YAML
navbar: false
sidebar: auto
prev: ../../ # home
next: false
---

# YAML Front Matter


``` yaml
---
title: Blogging Like a Hacker
lang: en-US
---
```

## Meta
``` yaml
---
meta:
  - name: description
    content: hello
  - name: keywords
    content: super duper SEO
---
```

## Homepage Layout

``` yaml
---
home: true
heroImage: /hero.png
actionText: Get Started →
actionLink: /guide/
features:
- title: Simplicity First
  details: Minimal setup with markdown-centered project structure helps you focus on writing.
- title: Vue-Powered
  details: Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue.
- title: Performant
  details: VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```

## Navbar
Hide the header with `navbar`.

``` yaml
---
navbar: false
---
```

## Sidebar
Hide sidebar with `false` or use navigation from this page's headers with `auto`.
``` yaml
---
sidebar: false
sidebarDepth: 2
---
```

## Footer
Edit the footer navigation.
``` yaml
prev: ./ # home
next: false
```

## Custom Styles
Add custom css styles to a specific page.

``` yaml
pageClass: custom-page-class
```

Include your style here.
``` css
/* .vuepress/override.styl */

.theme-container.custom-page-class {
  /* page-specific rules */
}
```

## Custom Layout

``` yaml
---
layout: SpecialLayout
---
```

[Go Back 🏡](/custompg.html)
