import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue'; // Компонент главной страницы
import RepositoryDetail from '../components/RepositoryDetail.vue'; // Компонент деталей репозитория

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home }, // Главная страница
  { path: '/repository/:id', component: RepositoryDetail, name: 'repository-detail', props: true } // Детали репозитория
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
