<template>
  <div :class="$style.layout">
    <nuxt :class="$style.page" />
  </div>
</template>

<style module>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100%;
}

.page {
  flex: 1 0 auto;
}

.specials {
  color: #fff;
  text-decoration: none;
}
</style>

<script>
import { mapGetters, mapState } from "vuex";

import DownloadInfo from "~/components/download-info";
import LightBox from "~/components/light-box";
import ModalNewsletter from "~/components/modal-newsletter";
import PaymentInfo from "~/components/payment-info";

export default {
  components: {
    DownloadInfo,
    ModalNewsletter,
    PaymentInfo,
    LightBox,
  },

  computed: {
    ...mapGetters("download", { isDownloadActive: "showing" }),
    ...mapGetters("newsletter", { isSubscribeModalActive: "showing" }),
    ...mapState("payment", { isPaymentActive: "showing" }),

    isAuthenticated() {
      return this.$auth.loggedIn;
    },

    isStaff() {
      return this.$auth.user && this.$auth.user.staff;
    },
  },

  methods: {
    toggleDownload() {
      this.$store.dispatch("download/detectChannel");
      this.$store.commit("download/toggleShowing");
    },

    togglePayment() {
      this.$store.commit("payment/setShowing");
    },

    toggleSubscribeModal() {
      this.$store.commit("newsletter/toggleShowing");
    },
  },
};
</script>
