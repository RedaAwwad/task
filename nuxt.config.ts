// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  pages: true,
  devServer: {
    port: 3333,
  },
  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Almarai&display=swap',
        },
      ],
    },
  },
  css: ['~/assets/scss/main.scss'],
  modules: ['@nuxtjs/tailwindcss'],
});
