// .vuepress/config.js

module.exports = {

  title: "PressVue",
  description: "A simple vuepress template.",

  // HTML <head>
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }] // .vuepress/public/logo.png
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

  // SIDEBAR
    sidebar: [

      '/start',
      '/help/config/',
      '/help/markdown/',
      '/help/vue/',
      ['/test', 'Custom sidebar title'],
      ['/custompg', 'Page Specific Layout'],

    ],

  },// END << THEMECONFIG


} // END << module.exports
