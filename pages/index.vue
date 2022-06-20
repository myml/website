<template>
  <main :class="classes" v-if="settings">
    <deepin-carousel
      v-if="settings.carousel"
      :setting="settings.carousel"
    ></deepin-carousel>
    <deepin-why v-if="settings.why" :setting="settings.why"></deepin-why>
    <deepin-office
      v-if="settings.office"
      :setting="settings.office"
    ></deepin-office>
    <deepin-production
      v-if="settings.production"
      :setting="settings.production"
    ></deepin-production>
    <deepin-news v-if="settings.news" :setting="settings.news"></deepin-news>
    <deepin-testimonials
      v-if="settings.testimonia"
      :setting="settings.testimonia"
    ></deepin-testimonials>
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
import DeepinCarousel from "~/components/deepin/carousel";
import color from "~/mixins/color";

export default {
  components: {
    DeepinWhy,
    DeepinOffice,
    DeepinProduction,
    DeepinTestimonials,
    DeepinNews,
    DeepinCarousel,
  },

  mixins: [color],

  data: () => {
    return { settings: null };
  },
  created() {
    this.fetchSettings();
  },
  methods: {
    async fetchSettings() {
      const language = this.$route.path.startsWith("/en") ? "en" : "zh";
      const resp = await fetch(
        `${process.env.PUBLIC_URL}/locales/${language}.json`
      );
      this.settings = await resp.json();
    },
  },
};
</script>
