import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name:'navmenu',
  //   component:() => import('./src/App.vue')
  // },
  {
    path: "/navigationmenu",
    name: "navigationmenu",
    component: () => import("../views/navigationmenu.vue"),
    // children: [{
    //   path: "/helloWorld",
    //   name: "helloWorld",
    //   component: () => import("../components/HelloWorld.vue")
    // }]
  },
  {
    path: "/helloWorld",
      name: "helloWorld",
      component: () => import("../components/HelloWorld.vue")
  },
  {
    path: "/about",
      name: "about",
      component: () => import("../components/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
