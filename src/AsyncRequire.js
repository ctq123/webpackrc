/**
 * 异步加载App页面
 */
export function getAppPage () {
  return (location, callback) => {
    require.ensure([], require => {
      callback(null, require('./App').default)
    }, 'page-app')
  }
}

/**
 * 异步加载About页面
 */
export function getAboutPage () {
  return (location, callback) => {
    require.ensure([], require => {
      callback(null, require('./About').default)
    }, 'page-about')
  }
}
