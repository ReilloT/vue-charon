import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "home",
    component:()=>import("@/views/Index.vue")
  },
  {
    path: "/blog",
    name: "blog",
    component:()=>import("@/views/BlogIndex.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;
