<template>
  <div class="container">
    <div class="close" @click.prevent="$store.commit('download/toggleShowing')">
      <font-awesome-icon :icon="faTimes" size="1x" />
    </div>

    <template v-if="$fetchState.pending">
      <font-awesome-icon :icon="faSpinner" class="loading" size="3x" spin />
    </template>

    <template v-else-if="$fetchState.error">
      <sys-header-2> An Error Occured </sys-header-2>

      <sys-paragraph-1> Please try again </sys-paragraph-1>
    </template>
    <template v-else>
      <sys-subheader-1 v-if="showFullModal"> Download Pop!_OS </sys-subheader-1>
      <sys-subheader-1 v-else>
        Pop!_Pi for Raspberry Pi 4<br />Tech Preview
      </sys-subheader-1>
      <template v-if="showFullModal">
        <sys-paragraph-1 class="disclaimer">
          If you have NVIDIA graphics, download the ISO with the proprietary
          NVIDIA driver preinstalled.
        </sys-paragraph-1>
        <sys-paragraph-1 class="disclaimer">
          Disable Secure Boot in your BIOS to install Pop!_OS.
        </sys-paragraph-1>
      </template>
      <div class="buttons">
        <sys-form-button
          v-if="showFullModal"
          rel="noopener"
          target="_blank"
          color="secondary"
          title="Download Pop!_OS"
          :ghost="!preferIntel"
          :href="intelUrl"
          @click="trackDownload('intel', intelUrl, version)"
        >
          Download {{ version }} LTS
        </sys-form-button>

        <sys-form-button
          v-if="showFullModal"
          rel="noopener"
          color="secondary"
          target="_blank"
          title="Download Pop!_OS for systems with NVIDIA GPUs"
          :ghost="!preferNvidia"
          :href="nvidiaUrl"
          @click="trackDownload('nvidia', nvidiaUrl, version)"
        >
          Download {{ version }} LTS (nVidia)
        </sys-form-button>

        <sys-form-button
          v-if="!isLts && rpiSha"
          rel="noopener"
          color="secondary"
          target="_blank"
          title="Download Pop!_OS for Raspberry Pi 4"
          :ghost="!preferRpi"
          :href="rpiUrl"
          @click="trackDownload('raspi', rpiUrl, '21.10')"
        >
          Download 21.10 (RAS PI 4)
        </sys-form-button>
      </div>

      <sys-paragraph-1 tag="dl">
        <dt>Recommended:</dt>
        <dd v-if="showFullModal">
          4 GB RAM, 16 GB storage, 64-bit processor
          <template v-if="!isLts && rpiSha">
            , USB 3 Storage (RAS Pi 4)
          </template>
        </dd>
        <dd v-else>4 GB RAM, 16 GB storage, USB 3 storage</dd>

        <dt>Filesize:</dt>
        <dd v-if="showFullModal">
          {{ intelSize }} GB, {{ nvidiaSize }} GB (NVIDIA)
          <template v-if="!isLts && rpiSha">
            , {{ rpiSize }} GB (RAS Pi 4)
          </template>
        </dd>
        <dd v-else>{{ rpiSize }} GB</dd>

        <dt>SHA256 Sum:</dt>
        <dd class="sha">
          <template v-if="showFullModal">
            <code
              ><span>{{ intelSha }}</span></code
            >
            <div>Pop!_OS ISO Image</div>
            <code
              ><span>{{ nvidiaSha }}</span></code
            >
            <div>Pop!_OS ISO Image (NVIDIA)</div>
          </template>
          <template v-if="!isLts && rpiSha">
            <code
              ><span>{{ rpiSha }}</span></code
            >
            <div>Pop!_OS ISO Image (RAS PI 4)</div>
          </template>
        </dd>
      </sys-paragraph-1>

      <p v-if="showFullModal">
        <a
          class="help"
          target="_blank"
          href="https://support.system76.com/articles/install-pop/"
        >
          Learn how to create installation media.
        </a>
      </p>
    </template>
  </div>
</template>

<style scoped>
.container {
  background-color: #fff;
  border-color: #c8c8c8;
  border-radius: 3px;
  border: 1px solid transparent;
  color: #272727;
  padding: 3rem 1rem 0;
  position: relative;
}

.close {
  align-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 48px;
  justify-content: center;
  position: absolute;
  right: 6px;
  top: 6px;
  width: 48px;
}

.close:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.loading {
  display: block;
  text-align: center;
  margin: 2rem 4rem 4rem;
}

h1 {
  text-align: center;
}

.tab {
  display: flex;
  font-family: var(--font-family-slab);
  font-weight: 700;
  margin: 0 auto 2rem;
  max-width: 40ch;
}

.tab > div {
  border: 2px solid #574f4a;
  color: #574f4a;
  cursor: pointer;
  padding: 0.25em;
  text-align: center;
  width: 50%;
}

.tab > div:first-child {
  border-bottom-left-radius: 0.25em;
  border-top-left-radius: 0.25em;
}

.tab > div:not(:first-child) {
  border-left: none;
}

.tab > div:last-child {
  border-bottom-right-radius: 0.25em;
  border-top-right-radius: 0.25em;
}

.tab > div.selected {
  background-color: #ffad00;
  color: #fff;
}

.buttons {
  align-content: center;
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  margin: 0 -0.5rem;
}

.buttons > * {
  flex: 1 1 40%;
  margin: 0.5rem;
  max-width: 40ch;
  min-width: 28ch;
}

.disclaimer {
  margin: 1rem auto;
  max-width: 40ch;
  text-align: center;
  font-size: 1rem;
}

dl {
  font-size: 1rem;
}

dt {
  font-weight: bold;
  margin: 0;
  padding: 0;
}

dd {
  margin: 0 0 2rem;
  padding: 0;
}

.sha {
  text-align: center;
}

.sha > * {
  display: block;
}

.sha code {
  background-color: var(--color-black);
  border-radius: 3px;
  color: var(--color-white);
  margin: 0.2rem 0;
  padding: 0.4rem;
  width: 100%;
}

.sha span {
  display: block;
  max-width: 100%;
  overflow: auto;
  width: 100%;
}

.sha div {
  margin: 0.2rem auto 1rem;
}

a.help {
  color: inherit;
  display: block;
  padding: 1rem 0;
  text-decoration: underline;
}
</style>

<script>
import { faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  components: {
    FontAwesomeIcon,
  },

  computed: {
    ...mapGetters("download", [
      "loaded",
      "canSwitchRelease",
      "release",
      "isLts",
      "version",
      "ltsVersion",
      "latestVersion",
      "alternativeVersion",
      "channel",

      "intelSha",
      "nvidiaSha",
      "rpiSha",
      "intelSize",
      "nvidiaSize",
      "rpiSize",
      "intelUrl",
      "nvidiaUrl",
      "rpiUrl",

      "hasPreference",
      "preferIntel",
      "preferNvidia",
      "preferRpi",

      "showFullModal",
    ]),

    faSpinner: () => faSpinner,
    faTimes: () => faTimes,
  },

  async fetch() {
    if (!this.loaded) {
      await this.fetch(this.release);
    }
  },

  methods: {
    ...mapMutations("download", ["switchRelease"]),

    ...mapActions("download", ["fetch"]),

    toggle() {
      this.switchRelease(this.release);
      this.$fetch();
    },

    trackDownload(type, url, version) {
      window.plausible("download", {
        props: { version: `${this.version} ${type}` },
      });
    },
  },
};
</script>
