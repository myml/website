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
      v-for="(card, index) in setting.cards"
      :key="index"
      :class="[classes, 'block']"
    >
      <sys-subheader-2>
        {{ card.title }}
      </sys-subheader-2>

      <sys-paragraph-3 class="sys-paragraph-3">
        {{ card.content }}
      </sys-paragraph-3>

      <ul class="list">
        <li v-for="v in card.list" :key="v">
          {{ v }}
        </li>
      </ul>

      <div v-if="card.link">
        <sys-form-button
          rel="noopener"
          color="primary"
          ghost
          :href="card.link.url"
          target="_blank"
        >
          {{ card.link.title }}
        </sys-form-button>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: repeat(5, auto);
  margin: 4rem auto;
  max-width: 1280px;
  padding: 0 1rem;
  width: 100%;
}

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

.block {
  align-content: stretch;
  align-items: stretch;
  border-radius: 12px;
  border: 1px solid transparent;
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: repeat(4, auto);
  justify-content: stretch;
  margin: 0 auto;
  max-width: 700px;
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

.block > * {
  margin: 0;
}

.block h2 {
  margin: 1rem 1rem 0;
}

.block p {
  margin: 0 1rem;
}

ul {
  align-content: flex-start;
  align-items: flex-start;
  border: 0px solid transparent;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 0 1rem;
}

.light-mode ul {
  border-color: #c8c8c8;
}

.dark-mode ul {
  border-color: #171717;
}

ul li {
  font-size: 1rem;
  height: 1rem;
  line-height: 1rem;
  margin: 0.75rem 0 0.75rem calc(1rem + 1ch);
  position: relative;
}

ul li::before {
  background-color: #2fc6ff;
  border-radius: 50%;
  bottom: 0;
  content: "";
  height: 1rem;
  left: calc(-1rem - 1ch);
  position: absolute;
  width: 1rem;
}

ul li::after {
  background-color: #303030;
  border-radius: 50%;
  bottom: 4px;
  content: "";
  height: calc(1rem - 8px);
  left: calc(-1rem - 1ch + 4px);
  position: absolute;
  width: calc(1rem - 8px);
}

.block div {
  margin: 0 0.4rem 0.4rem;
}

.block div > * {
  margin: 0;
}

@media (width >= 60ch) {
  .block {
    grid-template-columns: auto auto;
    grid-template-rows: auto 1fr auto;
  }

  .block h2 {
    margin: 1rem 1rem 0 0;
  }

  .block p {
    margin: 0 1rem 0 0;
  }

  ul {
    border-bottom-width: 0;
    border-right-width: 1px;
    grid-column: 1 / 2;
    grid-row: 1 / 4;
    padding: 1rem;
    width: 20ch;
  }

  ul li {
    margin: 0 0 0 calc(1rem + 1ch);
  }

  .block div {
    margin: 0 1rem 0.4rem -0.6rem;
  }
}

@media (width >= 750px) {
  .block {
    padding: 0 1rem;
  }
}

@media (width >= 130ch) {
  section {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto repeat(2, 1fr);
  }

  .copy {
    grid-column: 1 / 3;
  }
}
</style>

<script>
import color from "~/mixins/color";

export default {
  mixins: [color],

  props: ["setting"],
};
</script>
