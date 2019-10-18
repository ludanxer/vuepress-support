module.exports = {
  title: 'Vuepress-Support',
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
        {text: 'Github', link: 'https://github.com/ludanxer/vuepress-support'}
    ],
    sidebar: {
       '/demo/': [
         {
           title: 'Demo',
           children: [
             ''
           ]
         },
         {
           title: 'Unexpandable',
           children: [
            'bug'
           ]
         }
       ]
    }
  },
}