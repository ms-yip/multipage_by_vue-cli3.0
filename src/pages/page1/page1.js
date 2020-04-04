/*
 * @Description:
 * @Autor: ms.y
 * @Date: 2020-02-20 09:50:04
 * @LastEditors: ms.y
 * @LastEditTime: 2020-02-20 09:50:04
 */
import Vue from "vue";
import App from "./page1.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
