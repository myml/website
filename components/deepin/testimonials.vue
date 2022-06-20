<template>
  <div>
    <div class="copy">
      <sys-header-2>
        {{ setting.title }}
      </sys-header-2>
      <sys-paragraph-1 class="sys-paragraph-1">
        {{ setting.content }}
      </sys-paragraph-1>
    </div>
    <section>
      <div
        :class="['icon', 'previous', hasPrevious ? null : 'disabled']"
        @click.prevent="gotoPrevious"
      >
        <font-awesome-icon :icon="faChevronLeft" />
      </div>

      <div
        :class="['icon', 'next', hasNext ? null : 'disabled']"
        @click.prevent="gotoNext"
      >
        <font-awesome-icon :icon="faChevronRight" />
      </div>

      <transition mode="out-in" :name="transition">
        <div :key="currentIndex" class="item">
          <font-awesome-icon class="quote" :icon="faQuoteLeft" />

          <p>{{ current.content }}</p>
          <h5>{{ current.name }}</h5>

          <img
            class="avatar"
            v-if="current.image"
            :src="current.image"
            :alt="current.name"
          />
        </div>
      </transition>
    </section>
  </div>
</template>

<style scoped>
section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem auto;
  max-width: 800px;
  padding: 0 1rem;
  position: relative;
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

.next-enter-active,
.next-leave-active,
.previous-enter-active,
.previous-leave-active {
  transition: all 100ms ease;
}

.next-enter-active,
.previous-leave-active {
  transform: translateX(1rem);
}

.next-leave-active,
.previous-enter-active {
  transform: translateX(-1rem);
}

.next-leave-active,
.previous-leave-active {
  opacity: 0;
}

.item {
  align-content: center;
  align-items: center;
  display: grid;
  flex: 0 0 100%;
  grid-gap: 1rem;
  justify-content: center;
  position: relative;
}

.icon {
  align-content: center;
  align-items: center;
  border-radius: 50%;
  display: flex;
  flex: 0 0 auto;
  font-size: 2rem;
  height: 4rem;
  justify-content: center;
  margin: 1rem;
  user-select: none;
  width: 4rem;
}

.icon:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.icon.disabled {
  background-color: transparent !important;
  opacity: 0.2;
}

.icon.previous {
  left: 0;
}

.icon.next {
  right: 0;
}

.quote {
  color: #2fc6ff;
  content: "“";
  font-size: 2rem;
  left: calc(-2rem - 1ch);
  position: absolute;
  top: -0.5rem;
  user-select: none;
}

.item p {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  margin: 0;
  padding: 0;
}

.item h5 {
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  margin: 0 0;
  text-align: center;
}

.avatar {
  border-radius: 50%;
  display: block;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  height: 8rem;
  margin: 0 auto;
  object-fit: cover;
  object-position: center;
  user-select: none;
  width: 8rem;
}

@media (width >= 600px) {
  .item p {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  .item h5 {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }

  .avatar {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
  }
}

@media (width >= 800px) {
  .icon {
    position: absolute;
    top: calc(50% - 2rem);
  }

  .icon.previous {
    left: -6rem;
  }

  .icon.next {
    right: -6rem;
  }
}
</style>

<script>
import {
  faChevronLeft,
  faChevronRight,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "IndexTestimonials",

  components: {
    FontAwesomeIcon,
  },

  data: () => {
    return {
      currentIndex: 0,
      transition: "next",
    };
  },

  props: ["setting"],

  computed: {
    ITEMS() {
      return this.setting.cards;
    },
    faChevronLeft: () => faChevronLeft,
    faChevronRight: () => faChevronRight,
    faQuoteLeft: () => faQuoteLeft,

    current() {
      return this.ITEMS[this.currentIndex];
    },

    hasNext() {
      return this.currentIndex < this.ITEMS.length - 1;
    },

    hasPrevious() {
      return this.currentIndex !== 0;
    },
  },

  methods: {
    gotoNext() {
      if (this.hasNext) {
        this.transition = "next";
        this.currentIndex++;
      }
    },

    gotoPrevious() {
      if (this.hasPrevious) {
        this.transition = "previous";
        this.currentIndex--;
      }
    },
  },
};
</script>
