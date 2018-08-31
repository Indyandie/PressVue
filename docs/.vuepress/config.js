// .vuepress/config.js

module.exports = {

  title: "📗 PressVue",
  head: [
    ['link', { rel: 'shortcut icon', href: `/favicon.ico` }]
  ],




  // THEME CONFIGURATION
  themeConfig: {

  // Navigation

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
  ],

  // Sidebar


    sidebar: [

      '/',
      ['/test', 'custom text'],
      ['/custompg', 'Dark Mode'],
      '/help/vue/',
      '/help/markdown/'

    ],







  


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
