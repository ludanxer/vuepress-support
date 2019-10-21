module.exports = {
  title: 'Vuepress-Support',
  base: process.env.VUEPRESS_BASE || '/',
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-146772217-2'
      }
    ]
  ],
  themeConfig: {
    nav: [
        {text: 'Home', link: '/'},
        {text: 'Demo', link: '/demo/'},
        {text: 'About', link: '/about/'},
        {text: 'Github', link: 'https://github.com/ludanxer/vuepress-support'}
    ],
    sidebar: {
       '/demo/': [
         {
           title: 'Demo',
           children: [
             ''
           ]
         }
       ]
    }
  },
}