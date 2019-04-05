// .vuepress/config.js
module.exports = {
 base:   '/',  
  title: "مستندات سیستم",
  description: "یک مثال مناسب از  VuePress برای فارسی زبانان",

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
        text: 'شروع',
        link: '/start'
      },
 
    // Dropdown
      {text: 'راهنما',
          items: [
            { text: '',
              items: [
                { text: 'پیکربندی', link: '/help/config/' },
                { text: 'مارک دان', link: '/help/markdown/' },
                { text: 'ویو', link: '/help/vue/' }
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
      '/help/vue/' 

    ],

  },// END << THEMECONFIG


} // END << module.exports
