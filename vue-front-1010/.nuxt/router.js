import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _342f7bb7 = () => interopDefault(import('..\\pages\\course\\index.vue' /* webpackChunkName: "pages/course/index" */))
const _e58e1d6e = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _1870921a = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _8ab82200 = () => interopDefault(import('..\\pages\\teacher\\index.vue' /* webpackChunkName: "pages/teacher/index" */))
const _6a06ffdf = () => interopDefault(import('..\\pages\\course\\_id.vue' /* webpackChunkName: "pages/course/_id" */))
const _1c61b168 = () => interopDefault(import('..\\pages\\teacher\\_id.vue' /* webpackChunkName: "pages/teacher/_id" */))
const _240689a1 = () => interopDefault(import('..\\pages\\videoplay\\_vid.vue' /* webpackChunkName: "pages/videoplay/_vid" */))
const _78dd639c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/course",
    component: _342f7bb7,
    name: "course"
  }, {
    path: "/login",
    component: _e58e1d6e,
    name: "login"
  }, {
    path: "/register",
    component: _1870921a,
    name: "register"
  }, {
    path: "/teacher",
    component: _8ab82200,
    name: "teacher"
  }, {
    path: "/course/:id",
    component: _6a06ffdf,
    name: "course-id"
  }, {
    path: "/teacher/:id",
    component: _1c61b168,
    name: "teacher-id"
  }, {
    path: "/videoplay/:vid?",
    component: _240689a1,
    name: "videoplay-vid"
  }, {
    path: "/",
    component: _78dd639c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
