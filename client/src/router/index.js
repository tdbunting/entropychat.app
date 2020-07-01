import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Messages from '../views/Messages.vue'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Messages,
  },
  {
    // Added for temporary place to work on the ui
    path: '/main',
    name: 'Main',
    component: Main,
  },
]

const router = new VueRouter({
  routes,
})

export default router