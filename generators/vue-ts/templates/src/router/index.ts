import { RouteRecordRaw,createWebHashHistory,createRouter } from "vue-router";

const routes:Array<RouteRecordRaw> = [
  {
    path:"/",
    component: () => import("../views/HelloMommy.vue")
  }
];

const router = createRouter({
  history:createWebHashHistory(),
  routes
})

export default router