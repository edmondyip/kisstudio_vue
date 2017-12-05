import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Home from '@/components/PageIndex'
import About from '@/components/PageAbout'
import NotFound from '@/components/layout/PageNotFound'

Vue.use(Router)
Vue.use(Meta)

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    if (to.hash) {
      return { anchor: true }
    }
    if (to.matched.some(m => m.meta.scrollToTop)) {
      return { x: 0, y: 0 }
    }
  }
}

export default new Router({
  mode: 'history',
  base: __dirname,
  scrollBehavior,
  routes: [{
    name: 'error',
    path: '*',
    component: NotFound
  }, {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }]
})
