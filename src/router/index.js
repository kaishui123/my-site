import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import {
  titleController
} from "@/utils"

if (!window.VueRouter) {
  Vue.use(VueRouter); // Vue.use（插件） 在Vue中安装插件
}

const router = new VueRouter({
  routes,
  mode: "history"
});
router.afterEach((to, from) => {
  if (to.meta.title) {
    titleController.setRouteTitle(to.meta.title)
  }
})
export default router;