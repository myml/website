import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: "zh-CN",
    fallbackLocale: "en-US", //我这里默认语言为英文
    messages: {
      "en-US": { hello: "Hello" },
      "zh-CN": { hello: "你好" },
    },
  });
};
