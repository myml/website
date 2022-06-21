<template>
  <section>
    <v-carousel
      interval="3000"
      :cycle="true"
      :show-arrows="false"
      height="100%"
      width="100%"
    >
      <v-carousel-item
        v-for="(card, index) in setting.cards"
        :key="index"
        eager
      >
        <a :href="card.url">
          <img :src="card.image" eager />
        </a>
      </v-carousel-item>
    </v-carousel>
    <div class="links">
      <a v-for="(link, index) in setting.links" :key="index" :href="link.url">
        {{ link.title }}
      </a>
    </div>
  </section>
</template>
<style lang="scss" scoped>
section {
  max-width: 1280px;
  margin: auto;
}
img {
  width: 100vw;
  max-width: 1280px;
}

@media (width > 1280px) {
  .links {
    position: absolute;
    top: 300px;
    left: 50%;
  }
}
.links {
  display: flex;
  justify-content: space-around;
  a {
    &:first-of-type {
      background-color: #3351ff;
      border-color: #3351ff;
    }
    text-decoration: none;
    color: white;
    border: 1px solid;
    border-radius: 5px;
    padding: 0.8rem 2rem;
    margin: 0.5rem;
    background-color: rgba($color: #000000, $alpha: 0.2);
  }
}
</style>
<script>
export default {
  props: ["setting"],
  data: () => ({
    model: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
  }),
};
</script>
