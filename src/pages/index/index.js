/*
 * @Description:
 * @Autor: ms.y
 * @Date: 2020-02-20 09:48:58
 * @LastEditors: ms.y
 * @LastEditTime: 2020-02-20 10:13:46
 */
import Vue from "vue";
import App from "./index.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
