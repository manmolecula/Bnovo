import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router'; // Убедитесь, что этот файл настроен правильно

Vue.config.productionTip = false; // Добавьте, если нужно

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
