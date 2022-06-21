import config from "./config/index";

export default {
  ssr: true,
  target: "server",

  head: {
    title: "深度科技社区",

    htmlAttrs: {
      lang: "en",
    },

    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Imagine an OS for the software developer, maker and computer science professional who uses their computer as a tool to discover and create. Welcome to Pop!_OS.",
      },

      { name: "theme-color", content: "#000" },
      { name: "msapplication-TileColor", content: "#000" },
    ],

    link: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "128x128",
        href: "/favicon.png",
      },
    ],

    script: [],

    __dangerouslyDisableSanitizers: ["script"],
  },

  build: {
    transpile: [/@system76/],
  },

  css: [
    "@system76/design/dist/index.common.css",
    "@system76/components/dist/index.common.css",
    "@system76/forms/dist/index.common.css",
    "~/assets/styles/main.css",
  ],

  env: config,
  publicRuntimeConfig: {
    PUBLIC_URL: process.env.BASE_URL || "http://localhost:3000",
  },

  loading: {
    color: "#6ACAD8",
  },

  buildModules: [
    "@aceforth/nuxt-optimized-images",
    "@nuxtjs/color-mode",
    "@nuxtjs/vuetify",
    "@nuxtjs/google-analytics",
  ],

  googleAnalytics: {
    id: "G-QHZ7DPPD2D",
  },

  modules: ["@nuxtjs/axios"],

  plugins: [
    "~/plugins/components",
    "~/plugins/design",
    "~/plugins/forms",
    "~/plugins/hal",
    "~/plugins/lazyload",
  ],

  optimizedImages: {
    optimizeImages: true,
  },
};
