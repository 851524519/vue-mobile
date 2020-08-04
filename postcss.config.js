/**
 * Author: fanqiang
 * Date: 2020年8月4日14:12:40
 * Description: 动态设置 rootValue的大小，这样就可以达到所有的均可自适应
 */
const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
module.exports = ({
  file
}) => {
  let remUnit
  if (file && file.dirname && file.dirname.indexOf('vant') > -1) {
    remUnit = 37.5
  } else {
    remUnit = 75
  }
  return {
    plugins: [
      autoprefixer(),
      pxtorem({
        rootValue: remUnit,
        propList: ['*'],
        selectorBlackList: ['van-circle__layer']
      })
    ]
  }
}