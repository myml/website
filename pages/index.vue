<template>
  <main :class="classes" v-if="settings">
    <deepin-why :setting="settings.why"></deepin-why>
    <deepin-office :setting="settings.office"></deepin-office>
    <deepin-production :setting="settings.production"></deepin-production>
    <deepin-news :setting="settings.news"></deepin-news>
    <deepin-testimonials :setting="settings.testimonia"></deepin-testimonials>
    <iframe src="https://bbs.deepin.org/footer"></iframe>
  </main>
</template>

<style scoped>
iframe {
  width: 100%;
  height: 259px;
  border: none;
}
main {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.light-mode {
  background-color: #f6f6f6;
  color: #272727;
}

.dark-mode {
  background-color: #303030;
  color: #cccccc;
}

.end {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1 1 auto;
}
</style>

<script>
import DeepinWhy from "~/components/deepin/why";
import DeepinOffice from "~/components/deepin/office";
import DeepinProduction from "~/components/deepin/production";
import DeepinNews from "~/components/deepin/news";
import DeepinTestimonials from "~/components/deepin/testimonials";
import color from "~/mixins/color";
import zh from "~/assets/locales/zh.json";
import en from "~/assets/locales/en.json";

export default {
  components: {
    DeepinWhy,
    DeepinOffice,
    DeepinProduction,
    DeepinTestimonials,
    DeepinNews,
  },

  mixins: [color],

  computed: {
    settings() {
      if (this.$route.path.startsWith("/en")) {
        return en;
      } else {
        return zh;
      }
    },
  },
};
</script>
