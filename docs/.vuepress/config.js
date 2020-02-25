module.exports = {
  title: 'Vuepress Docs Boilerplate',
  markdown: {
    extractHeaders: [ 'h2', 'h3', 'h4' ]
  },
  themeConfig: {
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Test',
        link: '/test.html',
      },
      {
        text: 'VuePress',
        link: 'https://vuepress.vuejs.org'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            ['', 'Default'],
            ['depth1', 'Depth1'],
            ['depth2', 'Depth2']
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://vuepress.vuejs.org/plugin/
   */
  plugins: [
    // You can manually enalbe/disalbe the plugin like this
    ['@vuepress/plugin-back-to-top', true],
    '@vuepress/plugin-medium-zoom',
  ]
}
