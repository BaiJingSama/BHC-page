import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/index.vue'
import Notice from '../views/notice/index.vue'
import RecommendBh from '../views/recommendBh/index.vue'
import RecommendIntegration from '../views/recommendBh/recommendIntegration.vue'
import RecommendGame from '../views/recommendBh/recommendGame.vue'
import DownGame from '../views/downGame/index.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/notice', name: 'Notice', component: Notice },
  { path: '/recommendBh', name: 'RecommendBh', component: RecommendBh },
  { path: '/recommendIntegration', name: 'RecommendIntegration', component: RecommendIntegration },
  { path: '/recommendGame', name: 'RecommendGame', component: RecommendGame },
  { path: '/downGame', name: 'DownGame', component: DownGame },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router