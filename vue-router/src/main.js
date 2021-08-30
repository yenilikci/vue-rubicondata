import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import ComponentA from "./components/ComponentA.vue";
import ComponentB from "./components/ComponentB.vue";
import Detail from "./components/Detail.vue";
import Alert from "./components/Alert.vue";

Vue.config.productionTip = false;

// *********   beforeEach   **********
//her route geçişi öncesinde kontrolü yapabiliriz:
//örn oturum var mı yetki var mı vs..
//diğer method örnekleri gibi to,from,next parametrelerini alır
//component yüklenmeden önce çalışır
//router.beforeEach((to, from, next) => {});

// *********   beforeResolve   **********
//asnyc componentler dahil hepsi yüklendikten sonra çalışır
//router.beforeResolve((to, from, next) => {});

// *********   afterEach   **********
//yönlendirme yapıldıktan sonra yapılmasını istediğimiz işlemleri yazabiliriz
//to,from parametrelerini alır , next'e ihtiyaç yoktur
//router.afterEach((to, from) => {});

const router = new VueRouter({
  routes: [
    {
      path: "/componenta/:id",
      component: ComponentA,
      //beforeEnter: (to, from, next) => {},
    },
    {
      name: "compb",
      path: "/componentb",
      component: ComponentB,
      children: [
        {
          path: "detail",
          component: Detail,
        },
        {
          path: "alert",
          component: Alert,
        },
      ],
    },
  ],
  mode: "history",
});

Vue.use(VueRouter);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
