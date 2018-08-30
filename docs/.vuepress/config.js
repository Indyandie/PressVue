// .vuepress/config.js

module.exports = {

  title: "📗 PressVue",
  head: [
    ['link', { rel: 'shortcut icon', href: `/favicon.ico` }]
  ],

  // Service Worker
  /*
  serviceWorker: true,
  */

  // # SET THEME
  /*
  theme: 'vue',
  */

  // Search Bar
  /*
  search: false,
  searchMaxSuggestions: 10
  */


  // Translations
  locales: {
    '/': {lang: 'en-US' },
    '/zh/': {lang: 'en-JP' }
  },

  // THEME CONFIGURATION
  themeConfig: {

  // Navigation

    // SImple
    nav: [
      {
        text: 'Nav',
        link: '/test.md'
      },

      // Dropdown
      {text: 'Dropdown',
          items: [
            { text: '',
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
  ],

  // Sidebar

  // Displaying Header Links of All Pages
  /*
  splayAllHeaders: true // Default: false
  */


    sidebar:

    // SIdebar — Basic
    [
      '/',
      ['/test', 'Explicit link text'],
      ['/custompg', 'Dark Mode'],
      '/help/vue/',
      '/help/markdown/'
    ],


    // SIdebar — Groups
    /*
    [
      {
        title: 'Main',
        collapsable: false,
        children: [
          '/'
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
    */


    // SIdebar — Page Specific
    /*{

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

    } */

    // SIdebar — From An Object
    /*
    {'/': genSidebarConfig('Pages')}
    */


    // algolia search
    /*
    algolia: {
      apiKey: <APIKEY>,
      indexName: '<NAME>'
    },
    */

    // Locale Specific Settings
    /*
    locales: {

    // US
      '/': {
        lang: 'en-US',

        // Navigation
          nav: [
            {
              text: 'Nav',
              link: '/test.md'
            },
          ],

        // Sidebar
        sidebar:
        //{'/': genSidebarConfig('Pages')}

      },

    // Japan
      '/zh/': {
        lang: 'en-JP',
      }


  } // LOCALES END
  */


  },// THEMECONFIG END

// Markdown Setting
  markdown: {

    // Line Numbers
    lineNumbers: true,

    // options for markdown-it-toc
    toc: { includeLevel: [1, 2, 3, 4] }

    // options for markdown-it-anchor
    /*
    anchor: { permalink: false },
    */

    /*
    config: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-xxx'))
    },
    */

  }


}

function genSidebarConfig (title) {
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
