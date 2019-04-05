---
title: Getting Started
---

# NPC Village 🍄🏠👴🏾

## برنامه سلام دنیا

### Add your files and directories

``` bash

cwo
└── docs
    ├── README.md    # baseurl/
    ├── custompg.md  # baseurl/custompg.html
    ├── help
    │   ├── config
    │   │   └── README.md   # baseurl/help/config.md
    │   ├── frontmatter
    │   │   └── README.md   # baseurl/help/frontmatter.md
    │   ├── markdown
    │   │   └── README.md   # baseurl/help/markdown.md
    │   └── vue
    │       └── README.md   # baseurl/help/config.md
    │
    ├── start.md     # baseurl/start.html
    ├── test.md      # baseurl/start.html
    └── zh
        └── README.md # for translations with locales

```

### Add your content

Use [markdown](/help/markdown/) for your main content and [vuejs](/help/vue/) if you want to get fancy.

``` md
# Page Title
Some type of description. Add some _emojies_ 🥦🥕🍠.

A **picture**.
![alt text]( /PressVue/hero.png "Hero Image")

## Vue Components
<Beep/>
```



## Let's setup your header
In `docs/.vuepress/config.js`.

### Header Title
``` js
  title: "Your Title"
```

### [Navbar](/help/config/#navigation)

Inside the `themeConfig` object
``` js
// Navigation
  nav: [

  // Simple
    {
      text: 'Get Started',
      link: '/start'    // cwd/docs/start.md
    },

  // Dropdown
    {text: 'Dropdown',
      items: [
        { text: 'Help',
          items: [
            { text: 'Config', link: '/help/config/README.md' },     // cwd/docs/help/config/README.md
            { text: 'Markdown', link: '/help/markdown/README.md' }, // cwd/docs/help/markdown/README.md
            { text: 'Vue', link: '/help/vue/README.md' }            // cwd/docs/help/vue/README.md
          ]
        }
      ]
    },

  // External Link
    {
      text: 'Github',
      link: 'https://github.com/Indyandie/Pressvue'
    }

],
```

### [Searchbar](/help/config/#search)
You might want to hide it for a personal site or if you don't want some awesome search.

```
search: false
```


## Now for the sidebar
If you need one. 🤔

Inside the `themeConfig` object

``` js
sidebar: [

  '/start',
  '/help/config/',
  '/help/markdown/',
  '/help/vue/',
  '/help/frontmatter/',
  ['/test', 'Custom sidebar title'],
  ['/custompg', 'Page Specific Layout'],

]
```
[More options](/help/config/#sidebar)


## Default Styles

You can edit these from `override.styl`.

<<< @/.vuepress/override.styl {2,3,4,5}


## Add Your Own Styles

You can edit these from `override.styl`.

<<< @/.vuepress/style.styl

## Assets
Make sure to add your local assets under `/.vuepress/public`

``` bash {4}
cwd
└── docs
    └── .vuepress
        ├── public
        │   ├── favicon.ico
        │   ├── hero.png
        │   └── logo.png
```

Okay that should get you started.
