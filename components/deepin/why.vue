<template>
  <section>
    <div class="copy">
      <sys-header-2>
        {{ setting.title }}
      </sys-header-2>
      <sys-paragraph-1 class="sys-paragraph-1">
        {{ setting.content }}
      </sys-paragraph-1>
    </div>

    <div
      :class="[classes, 'block']"
      v-for="(card, index) in setting.cards"
      :key="index"
    >
      <div class="text">
        <sys-subheader-2>{{ card.title }}</sys-subheader-2>

        <sys-paragraph-1 class="sys-paragraph-1">
          {{ card.content }}
        </sys-paragraph-1>
      </div>
    </div>
  </section>
</template>

<style scoped>
.copy {
  grid-column: 1 / 2;
  margin: 0 auto 1rem;
  max-width: 80ch;
}

.copy > *:first-child {
  margin-top: 0;
  text-align: center;
}

.copy > *:last-child {
  margin-bottom: 0;
}

.modal {
  width: 80vw;
}

.modal > img {
  width: 100%;
}

section {
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: repeat(5, auto);
  margin: 4rem auto;
  max-width: 1280px;
  padding: 0 1rem;
}

section > h2 {
  grid-column: 1 / 2;
  margin-top: 0;
  text-align: center;
}

.block {
  border-radius: 12px;
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.light-mode.block {
  background-color: #fff;
  border-color: #c8c8c8;
  color: #272727;
}

.dark-mode.block {
  background-color: #272727;
  border-color: #171717;
  color: #ccc;
}

.text {
  flex: 1 1 auto;
}

.block h2 {
  margin-top: 0;
}

.switch {
  border-radius: 22px;
  display: inline-block;
  height: 44px;
  position: relative;
  transition: all 200ms linear;
  width: 86px;
}

.light-mode.switch {
  background-color: #c8c8c8;
  border-color: #fff;
  box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.15);
}

.dark-mode.switch {
  background-color: #2fc6ff;
  border-color: #000;
  box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.25);
}

.switch input {
  appearance: none;
  border-radius: 24px;
  display: block;
  height: 36px;
  outline: none;
  position: absolute;
  top: 4px;
  transition: all 200ms linear;
  width: 36px;
}

.switch input:focus {
  outline: none !important;
}

.light-mode.switch input {
  background-color: #fff;
  left: 4px;
}

.dark-mode.switch input {
  background-color: #303030;
  left: 46px;
}

.block .image {
  cursor: pointer;
  flex: 0 0 auto;
  margin-top: 1rem;
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  user-select: none;
  width: 100%;
}

.block img {
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
}

@media (width >= 700px) {
  .block {
    padding: 2rem;
  }
}

@media (width >= 120ch) {
  section {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto repeat(2, 1fr);
  }

  section > h2 {
    grid-column: 1 / 3;
  }
}

@media (width >= 1280px) {
  section {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto 1fr auto;
  }

  section > .copy {
    grid-column: 1 / 4;
  }
}
</style>

<script>
import LightBox from "~/components/light-box";
import color from "~/mixins/color";

export default {
  components: {
    LightBox,
  },

  props: ["setting"],

  mixins: [color],

  data: () => ({
    active: false,
    image: "other-features-mode",
  }),

  methods: {
    toggleModal(image) {
      this.image = image;
      this.active = true;
    },
  },
};
</script>
