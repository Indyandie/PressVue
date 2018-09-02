// .vuepress/config.js

module.exports = {

  base: "/PressVue/", 
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
        text: 'Get Started',
        link: '/start'
      },

    // Dropdown
      {text: 'Help',
          items: [
            { text: '',
              items: [
                { text: 'Config', link: '/help/config/' },
                { text: 'Markdown', link: '/help/markdown/' },
                { text: 'Vue', link: '/help/vue/' },
                { text: 'YAML', link: '/help/frontmatter/' },
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

  // SIDEBAR
    sidebar: [

      '/start',
      '/help/config/',
      '/help/markdown/',
      '/help/vue/',
      '/help/frontmatter/',
      ['/test', 'Custom sidebar title'],
      ['/custompg', 'Page Specific Layout'],

    ],

  },// END << THEMECONFIG


} // END << module.exports
