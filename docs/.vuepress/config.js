module.exports = {
  title: 'Unexpandable',
  themeConfig: {
    nav: [
        {text: 'Home', link: '/'},
        {text: 'Demo', link: '/demo/'},
        {text: 'Github', link: 'https://github.com/ludanxer/vuepress-unexpand'}
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