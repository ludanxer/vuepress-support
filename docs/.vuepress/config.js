module.exports = {
  title: 'Vuepress Docs Boilerplate',

  /**
   * Apply plugins，ref：https://vuepress.vuejs.org/plugin/
   */
  plugins: [
    // You can manually enalbe/disalbe the plugin like this
    ['@vuepress/plugin-back-to-top', true],
    '@vuepress/plugin-medium-zoom',
    'vuepress-plugin-table-of-contents'
  ]
}
