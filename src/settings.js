module.exports = {
  title: 'vue-serve-repertory',

  /**
   * 侧边栏主题 深色主题theme-dark，浅色主题theme-light
   */
  sideTheme: 'theme-light',

  // 是否显示系统按钮
  showSettings: true,

  // 是否固定头部
  fixedHeader: false,

  // 是否显示logo
  sidebarLogo: true,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: 'production'
}