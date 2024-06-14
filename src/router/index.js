import path from '@/api/path';
import { createRouter, createWebHashHistory } from 'vue-router'
import BlogHome from "@/views/BlogHome.vue"

const routes = [
  {
    path:"",
    name:"blogHome",
    component:BlogHome,
    // redirect:"/",
    children:[
      {
        path: "/",
        name: "basemain",
        component: ()=>inmport("@/views/blog/BaseMain.vue"),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;
