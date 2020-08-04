/**
 * Author: fanqiang
 * Date: 2020年8月3日14:12:07
 * Description: 需要按需引入vant组件，配置babel-plugin-import插件
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
