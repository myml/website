<template>
  <div>
    <sys-paragraph-1>
      {{ error }}
    </sys-paragraph-1>

    <div class="buttons">
      <sys-form-button
        type="submit"
        color="primary"
        @click.prevent="$store.dispatch('payment/gotoNextPage')"
      >
        <span>Try Again</span>
      </sys-form-button>
    </div>
  </div>
</template>

<style scoped>
img {
  display: block;
  margin: 0 auto;
}

p {
  max-width: 40ch;
  margin: 3rem auto;
  text-align: center;
}

.buttons {
  flex-direction: row-reverse;
}
</style>

<script>
import { mapState } from "vuex";

export default {
  name: "PaymentInfoError",

  computed: {
    ...mapState("payment", ["error"]),
  },
};
</script>
