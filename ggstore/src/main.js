import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import { firebase, auth } from "../firebase/firebase";

Vue.config.productionTip = false;

let app;

firebase.onAuthStateChanged(auth, () => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
