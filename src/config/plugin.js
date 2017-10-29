import data from './data'

function plugin (Vue) {
  Vue.prototype.$udiData = data
}

if (typeof window !== 'undefined' && window.Vue) { // eslint-disable-line no-undef
  window.Vue.use(plugin) // eslint-disable-line no-undef
}

export default plugin
