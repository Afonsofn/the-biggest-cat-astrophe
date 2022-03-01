export default {
  ssr: false,

  head: {
    title: 'The biggest Cat-astrophe',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: ['@/assets/sass/main.scss'],

  plugins: [],

  components: true,

  buildModules: [],

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: 'https://api.thecatapi.com/v1/images',
    headers : {
      common: {
        'x-api-key' : '24be637f-e596-4847-b47a-1791feeea1bd'
      }
    }
  },
  
  build: {}
}
