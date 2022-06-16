<template>
  <div />
</template>

<style scoped>
div {
  margin: calc(0.5rem + 2px) 0;
  position: relative;
  width: 100%;
}

div::before,
div::after {
  content: "";
  height: 2px;
  left: 0;
  position: absolute;
  right: 0;
  width: 100%;
}

div::before {
  top: calc(0.5rem + 2px);
}

div::after {
  bottom: calc(0.5rem + 2px);
}

div,
div::before,
div::after {
  background: linear-gradient(to right, #63b1bc 10%, #9cffea 70%, #00496d);
  height: 2px;
}
</style>
