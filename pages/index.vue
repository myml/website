<template>
  <main :class="classes">
    <index-streamline />
    <index-development />
    <index-testimonials />
    <index-security />
    <index-software />
    <index-other-features />
  </main>
</template>

<style scoped>
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
import IndexDevelopment from "~/components/index/development";
import IndexFoot from "~/components/index/foot";
import IndexFootnotes from "~/components/index/footnotes";
import IndexHead from "~/components/index/head";
import IndexOtherFeatures from "~/components/index/other-features";
import IndexPopPi from "~/components/index/pop-pi";
import IndexSecurity from "~/components/index/security";
import IndexSoftware from "~/components/index/software";
import IndexStreamline from "~/components/index/streamline";
import IndexSystem76 from "~/components/index/system76";
import IndexTestimonials from "~/components/index/testimonials";
import color from "~/mixins/color";

export default {
  components: {
    IndexDevelopment,
    IndexFoot,
    IndexFootnotes,
    IndexHead,
    IndexOtherFeatures,
    IndexPopPi,
    IndexSecurity,
    IndexSoftware,
    IndexStreamline,
    IndexSystem76,
    IndexTestimonials,
  },

  mixins: [color],
};
</script>
