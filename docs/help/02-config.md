# پیکربندی تنظیمات

::: tip
This is a tip
:::

!!! note DDD
CC
!!!

## Admonition Task List 

Tasks can be made using 

```
- [ ] incomplete
- [x] complete
```

!!! danger Major Backlog
The tasks listed below are expected to be done by the end of the term ENGR 004, haha?.
- [ ] cool [firebase Vue Dapp](https://medium.com/@sebinatx/building-an-ethereum-firebase-user-profile-dapp-part-2-226bcc11ae62, ), typescript
- [x] Soldiity contracts repo for games, explaining how to use then and more. Also, use solcdoc to make markdoown files and a script for latex/vuepress to include the source? 
- [ ] Update the Blockchain notes repo.
- [x] When making the solidity contracts use boostnote minus the admonitions, but write the code in either js or solidity and use [Pandoc Markdown Code Blocks in LaTeX](http://weibeld.net/markdown/pandoc_code_blocks.html) with a custom pandoc template. Idk, don't really care about documenting smart contracts.
- [x] update python script to probably with jinja based format and maybe latex output.
- [ ] [Building a chat bot with Nest.js and Dialogflow](https://pusher.com/tutorials/chat-bot-nestjs), extend this app. and look at [How to Build a Vue.js Chat App with ChatEngine | PubNub](https://www.pubnub.com/tutorials/chatengine/vuejs/chat-app/)
- [ ] Dash application to track ethereum stats and hashgraph
- [x] Update the Bchain application, Vue-Dapp and finish a basic IPFS app using a box.
- [ ] Ability to upload sites to ipfs and look into cloudiary
- [x] Build a basic scrappy bot for reddit, host on scrappy hub and maybe even send data to apis. Used Rss feeds instead.
- [ ] Consider using [GitHub - thomasreinecke/git-playbook: GIT Playbook is a documentation framework that allows you to create Documentation for your project using Markdown and GH-Pages rapidly](https://github.com/thomasreinecke/git-playbook) as a good final repo for all of my documentation, particularly when it comes to searching for things. 
!!!

## Badges <p class="badge warning">Warning</p> 

<badge class="warning">warning </badge>


<span class="badge badge-default">New</span>

<span class="badge error">ERROR</span>
$x^2=4$

$$x^5 = 5$$

## Build-in admonitions <Badge vertical="middle">Middle badge</Badge>

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger STOP
This is a dangerous warning
:::
<pros-cons
  intro="There are a couple of things we need to cover:"
  :good="[
    'Documentation Theme Based on Vue.',
    'Use of markdown-it plugins.',
    'Static Site Generator.'
  ]"
  :bad="[
    'Vuepress is not very stable yet',
    'Can be complex to configure',
  ]"
/>
<ul v-for="i in 3">
  <li>{{ i }} </li>
</ul>
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
          { text: 'Markdown', link: '/markdown' },
          { text: 'Vue', link: '/vue' }
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
  '/vue',
  '/markdown'
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
        '/vue',
        '/markdown'
     ]
  },
  {
    title: 'All',
    children: [
        '/',
        '/test',
        '/vue',
        '/markdown'
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
        '/vue',
        '/markdown'
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
        '/vue',
        '/markdown'
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
