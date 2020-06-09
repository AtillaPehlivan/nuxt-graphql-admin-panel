
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
    ],
    script: [
      { src: "" }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
 loading: { color: "black",height:'5px', throttle: 0 },

  // Simple usage:

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{ src: '~/plugins/nuxt-client-init.js', ssr: false }],
 
  /*
  ** Router settings
  */
  router: {
    linkActiveClass: 'active',

  },
   /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    ['@nuxtjs/eslint-module', { 'fix': true }],
    '@nuxtjs/apollo'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  /*
  ** Apollo config
  */
 apollo: {
  cookieAttributes: {
    expires: 7, // optional, default: 7 (days)
  },
  includeNodeModules: true, // optional, default: false (this includes graphql-tag for node_modules folder)
  //authenticationType: 'Bearer', // optional, default: 'Bearer'
  // optional
  errorHandler: '~/plugins/apollo-error-handler.js',
  // required
  clientConfigs: {
    default: '~/apollo/clientConfig.js'
  },
  defaultOptions: {
    // See 'apollo' definition
    // For example: default query options
    $query: {
      loadingKey: 'loading',
      fetchPolicy: 'cache-and-network',
    },
  },
},
}
