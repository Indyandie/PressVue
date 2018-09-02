# Config Settings
Add site wide settings from `.vuepress/config.js` or just hear from the 🐴👅 [VuePres - config reference](https://vuepress.vuejs.org/config/#basic-config).
``` js
module.exports = {
  // Settings
}
```

## Basic Site Info
``` js
title: "Kooll Pname", // Site Header
description: "Etc. etc. etc.",
```

## HTML \<head>
``` js
head: [
  //Favicon
  ['link', { rel: 'icon', href: `/logo.png` }] // .vuepress/public/logo.png
],
```

## Search
``` js
search: false,
searchMaxSuggestions: 10
```

## Theme Configuration

``` js
themeConfig: {
  // Nav, Sidebar, Locales (for country specific themeconfig)
}
```

## Navigation

``` bash
# This Site
cwd
└─ docs
│   │─ README.md
│   │─ test.md
│   └─ help
│      └─ config
│      │  └─ README.md
│      │─ markdown
│      │  └─ README.md
│      │─ vue
│      │  └─ README.md
```

### Simple

``` js
nav: [

  // Simple
  {
    text: 'Nav',
    link: '/test.md'
  },

  // Dropdown
  {text: 'Dropdown',
      items: [
        { text: 'Label',
          items: [
            { text: 'One', link: '/test.md' },
            { text: 'Two', link: '/test.md' }
          ]
      }
    ]
  },
  {text: 'Help',
    items: [
      { text: '',
        items: [
          { text: 'Markdown', link: '/help/markdown/' },
          { text: 'Vue', link: '/help/vue/' }
        ]
      }
    ]
  },

  // External Link
  {
    text: 'Github',
    link: 'https://github.com/'
  }

]
```

### Sidebar

### All the links are belong to us
Displaying Header Links of All Pages
``` js
displayAllHeaders: true // Default: false
```

#### Basic
```js
[
  '/',
  ['/test', 'custom text'],
  ['/custompg', 'Dark Mode'],
  '/help/vue/',
  '/help/markdown/'
],
```

#### Groups

```js
[
  {
    title: 'Main',
    collapsable: false,
    children: [
      '/',
      '/config'
    ]
  },
  {
    title: 'Help',
    children: [
        '/help/vue/',
        '/help/markdown/'
     ]
  },
  {
    title: 'All',
    children: [
        '/',
        '/test',
        '/help/vue/',
        '/help/markdown/'
     ]
  }
]
```

#### Page Specific

``` js
{

  '/help/': [
    {
    // Collapsable
      title: 'Help',
      collapsable: true,
      children: [
        '/help/vue/',
        '/help/markdown/'
        ]
    }
  ],

  '/': [
    '/',
    '/test',
  ]

}
```

#### From an object

``` js
{'/': genSidebarConfig('Pages')}
```

##### Object
``` js
function genSidebarConfig (title) {

  // You should put this outisde of module.exports
  return [
    {
      title,
      collapsable: true,
      children: [
        '',
        '/test',
        '/help/vue/',
        '/help/markdown/'
      ]
    }
  ]
}
```

### Algolia Search (Super Search)
This will crawl through your entire site. The default search only looks through headings.

``` js
algolia: {
  apiKey: <APIKEY>,
  indexName: '<NAME>'
},
```

## Service Worker
``` js
serviceWorker: true
```

## Translations
``` js
locales: {
  '/': {lang: 'en-US' },
  '/zh/': {lang: 'en-JP' }
}
```
