// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false

Vue.directive('down', {
  inserted: (el, binding) => {
    el.style.cssText = 'cursor: pointer;color:write;'
    el.addEventListener('click', () => {
      console.log(binding.value)
      let link = document.createElement('a')
      let url = binding.value
      // 这里是将url转成blob地址，
      fetch(url).then(res => res.blob()).then(blob => { // 将链接地址字符内容转变成blob地址
        link.href = URL.createObjectURL(blob)
        console.log(link.href)
        link.download = ''
        document.body.appendChild(link)
        link.click()
      })
    })
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
