// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  devServer: {
    port: 5000,
  },
  runtimeConfig: {
    public: {
      ApiBaseUrl: process.env.API_Base_URL,
    },
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
    pageTransition: { name: 'scale', mode: 'out-in' },
  },
  css: ['~/assets/scss/main.scss'],
  components: {
    dirs: [
      '~/components/app',
      '~/components/buttons',
      '~/components/form',
      '~/components/ui',
    ],
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-icon',
    '@nuxt/image',
    'nuxt-swiper',
  ],
  image: {
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
  plugins: [],
});
