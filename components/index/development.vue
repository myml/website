<template>
  <section>
    <div class="copy">
      <sys-header-2>Development toolkits work flawlessly</sys-header-2>

      <sys-paragraph-1>
        Develop software out of the box with a vast array of libraries and tools
        at your disposal. Pop!_OS uses APT and Flatpak package management,
        meaning it’s easy to install, remove, and update all software on the OS.
      </sys-paragraph-1>
    </div>

    <div :class="[classes, 'block']">
      <sys-subheader-2>Deep Learning</sys-subheader-2>

      <sys-paragraph-1>
        Code life into the machinery of the future. Perfect your model for
        predicting a hurricane’s path, and use Tensorman to keep organized along
        the way.
      </sys-paragraph-1>

      <ul class="list">
        <li>Tensorman</li>
        <li>Tensorflow</li>
        <li>PyTorch</li>
        <li>Caffe</li>
        <li>Jupyter</li>
        <li>MATLAB</li>
      </ul>

      <div>
        <sys-form-button
          rel="noopener"
          color="primary"
          ghost
          href="https://support.system76.com/articles/tensorman/"
          target="_blank"
        >
          Learn about Tensorman
        </sys-form-button>
      </div>
    </div>

    <div :class="[classes, 'block']">
      <sys-subheader-2>Engineering</sys-subheader-2>

      <sys-paragraph-1>
        Secure data inside an impenetrable fortress. Break ground, then leave
        it, on a journey for interstellar travel. Your possibilities—and
        potential—are infinite.
      </sys-paragraph-1>

      <ul class="list">
        <li>VS Code</li>
        <li>ROS</li>
        <li>Postman</li>
        <li>KiCad</li>
        <li>Android Studio</li>
        <li>Arduino IDE</li>
      </ul>
    </div>

    <div :class="[classes, 'block']">
      <sys-subheader-2>Media Production</sys-subheader-2>

      <sys-paragraph-1>
        Design a character. Animate it. Give it a voice, then tell its story.
        Stream your technique to hundreds of young artists. No subscription
        required.
      </sys-paragraph-1>

      <ul class="list">
        <li>Blender</li>
        <li>DaVinci Resolve</li>
        <li>OBS Studio</li>
        <li>Inkscape</li>
        <li>Lightworks</li>
        <li>Natron</li>
      </ul>

      <div>
        <sys-form-button
          aria-label="learn more about media production on pop"
          rel="noopener"
          color="primary"
          ghost
          target="_blank"
          href="https://support.system76.com/articles/media-production-on-pop/"
        >
          Learn more
        </sys-form-button>
      </div>
    </div>

    <div :class="[classes, 'block']">
      <sys-subheader-2>Bioinformatics</sys-subheader-2>

      <sys-paragraph-1>
        Discover new treatments for bacterial diseases. Explore the vast
        ecosystem of the gut. Use a bevy of programs to learn more about the
        human genome than ever before.
      </sys-paragraph-1>

      <ul class="list">
        <li>R</li>
        <li>Bioconductor</li>
        <li>Bioconda</li>
        <li>UniProt</li>
        <li>Bowtie 2</li>
        <li>Biopython</li>
      </ul>

      <div>
        <sys-form-button
          color="primary"
          ghost
          href="https://support.system76.com/articles/bioinformatics-moritz-beber-dtu"
          rel="noopener"
          target="_blank"
        >
          Read User Story
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
};
</script>
