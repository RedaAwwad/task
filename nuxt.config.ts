// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  pages: true,
  devServer: {
    port: 3333,
  },
  app: {
    head: {
      title: 'Task App',
      meta: [
        {
          name: 'description',
          content: 'app description goes here',
        },
        {
          name: 'keyword',
          content: 'meta, keywords, goes here',
        },
      ],
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
  components: {
    dirs: ['~/components/app', '~/components/buttons'],
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-icon',
    [
      '@nuxt/image',
      {
        presets: {
          cover: {
            modifiers: {
              fit: 'cover',
              format: 'jpg',
              width: 300,
              height: 300,
            },
          },
        },
        screens: {
          xs: 320,
          sm: 640,
          md: 768,
          lg: 1024,
          xl: 1280,
          xxl: 1536,
          '2xl': 1536,
        },
      },
    ],
  ],
  plugins: [],
});
