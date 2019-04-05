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
                { text: 'پیکربندی', link: '/config' },
                { text: 'مارک دان', link: '/markdown' },
                { text: 'ویو', link: '/vue' }
              ]
          }
        ]
      } 
    
  ],

  // SIDEBAR
    sidebar: [

      '/start',
      '/config',
      '/markdown',
      '/vue' 

    ],

  },// END << THEMECONFIG


} // END << module.exports
