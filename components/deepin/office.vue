<template>
  <section v-lazy-container="{ selector: 'img' }">
    <div class="copy">
      <sys-header-2>{{ setting.title }}</sys-header-2>

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

      <sys-paragraph-1 class="sys-paragraph-1">
        {{ card.content }}
      </sys-paragraph-1>
      <div class="video-wrap" @click.prevent="toggleVideo(card.video)">
        <div class="play-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 494.148 494.148"
            xml:space="preserve"
          >
            <path
              d="M405.284,201.188L130.804,13.28C118.128,4.596,105.356,0,94.74,0C74.216,0,61.52,16.472,61.52,44.044v406.124c0,27.54,12.68,43.98,33.156,43.98c10.632,0,23.2-4.6,35.904-13.308l274.608-187.904c17.66-12.104,27.44-28.392,27.44-45.884C432.632,229.572,422.964,213.288,405.284,201.188z"
            />
          </svg>
        </div>
        <img
          alt="Auto-tiling with Pop shell video"
          :data-src="card.image"
          class="video"
        />
      </div>
    </div>

    <light-box v-model="active">
      <div class="youtube">
        <youtube-responsive :video="video" />
      </div>
    </light-box>
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

.block h2 {
  margin: 0 auto 1rem;
  max-width: 80ch;
}

.block p {
  align-self: center;
  flex: 1 1 auto;
  margin: 1rem auto;
  max-width: 60ch;
}

.block:nth-child(4) p {
  max-width: 53ch;
}

.block ul {
  margin: 1rem 0 0;
  padding: 0;
  list-style: none;
}

.block ul li::before {
  content: "- ";
}

.block .video-wrap {
  cursor: pointer;
  height: 0;
  margin: 1rem 0 0;
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
}

.video-wrap .play-btn {
  position: absolute;
  max-width: 700px;
  width: 100px;
  height: 100px;
  left: 50%;
  top: 50%;
  transform: translate(-25%, -25%);
  z-index: 99;
}

.video-wrap .play-btn svg {
  transition: all 0.2s ease;
  fill: rgba(255, 255, 255, 0.8);
  width: 50%;
}

.video-wrap .play-btn:hover svg,
.video-wrap .play-btn:focus svg {
  fill: #fff;
}

.block img {
  bottom: 0;
  cursor: pointer;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
}

.youtube {
  width: 90vw;
}

@media (width >= 900px) {
  section {
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(2, auto);
  }

  .block {
    padding: 2rem;
  }

  .copy {
    grid-column: 1 / 3;
  }
}

@media (width >= 1280px) {
  section {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, auto);
  }

  .copy {
    grid-column: 1 / span 2;
    margin: 0 auto 1rem;
    max-width: 80ch;
  }

  .youtube {
    width: 60vw;
  }
}
</style>

<script>
import LightBox from "~/components/light-box";
import YoutubeResponsive from "~/components/youtube-responsive";
import color from "~/mixins/color";

export default {
  components: {
    LightBox,
    YoutubeResponsive,
  },

  mixins: [color],

  props: ["setting"],

  data: () => ({
    active: false,
    video: null,
  }),

  methods: {
    toggleVideo(video) {
      this.video = video;
      this.active = true;
    },
  },
};
</script>
