const axios = require('axios');


module.exports = {
  /*
   ** Headers of the page
   */
  filenameHashing: false,
  modules: [
    "@nuxtjs/axios",
    [
      "nuxt-lazy-load",
      {
        // These are the default values
        images: true,
        videos: true,
        audios: true,
        iframes: true,
        native: false,
        polyfill: true,
        directiveOnly: false,

        // Default image must be in the static folder

        // To remove class set value to false
        loadingClass: "isLoading",
        loadedClass: "isLoaded",
        appendClass: "lazyLoad",

        observerConfig: {
          // See IntersectionObserver documentation
        }
      }
    ],
    "@nuxtjs/sitemap",
    //'@nuxtjs/gtm'
  ],
  sitemap: {
    hostname: 'https://cakeboost.com',
    gzip: true,
    exclude: [
      '/page/404'
    ],
    routes: async () => {
      const { data } = await axios.get('https://cp.cakeboost.com/_sitemap.php')
      return data.map((site_urls) => ({
        url: `${site_urls.fullurl}`,
        lastmod: `${site_urls.date}`
      }))
    }
  },
  /*
  gtm: {
    enabled: true, // see below
    debug: false,
    id: 'GTM-T4WSW6Q', // Used as fallback if no runtime config is provided
    layer: 'dataLayer',
    variables: {},

    pageTracking: false,
    pageViewEventName: 'nuxtRoute',

    autoInit: true,
    respectDoNotTrack: false,

    scriptId: 'gtm-script',
    scriptDefer: true,
    scriptURL: 'https://www.googletagmanager.com/gtm.js',
    crossOrigin: false,

    noscript: true,
    noscriptId: 'gtm-noscript',
    noscriptURL: 'https://www.googletagmanager.com/ns.html'
  },
  */
  publicRuntimeConfig: {
    //gtm: {
    //  id: process.env.GOOGLE_TAG_MANAGER_ID
    //}
  },
  plugins: [{ src: "~plugins/v-calendar.js", ssr: false }],
  axios: {
    // proxyHeaders: false
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: "custom",
        path: "*",
        component: resolve(__dirname, "pages/page/404.vue")
      });
    }
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ["script", "style", "font"].includes(type);
      }
    }
  },
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "{{escape description }}"
      },
      {
        hid: "robots",
        name: "robots",
        content: "max-image-preview:large, index, follow, max-snippet:-1, max-video-preview:-1"
      }
    ],

    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap"
      },
      {
        hid: 'canonical',
        rel: 'canonical',
        href:'https://cakeboost.com/'
      }
    ],
    htmlAttrs: {
      lang: 'en-us',
    },
    script: [
      /*{ src: "/jquery.min.js" },*/
      { src: "/swiper-bundle.js", defer: true },
      { src: "/main.js", defer: true, body: true },
      /*
      { innerHTML: "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-T4WSW6Q');" },
      */
      /*{ src: "/cakeboostcom_tmp.js", body: true, id:'aurora' },*/
    ],
    __dangerouslyDisableSanitizers: ['script']
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#c95fff", height: "0px" },
  /*
   ** Build configuration
   */
  build: {
    html: {
      minify: {
        minifyJS: false,
        removeComments: false
      }
    },
    filenames:{
      app: ({ isDev }) => isDev ? '[name].js' : '[name].js?ver=[contenthash]',
      chunk: ({ isDev }) => isDev ? '[name].js' : '[name].js?ver=[contenthash]',
      css: ({ isDev }) => isDev ? '[name].css' : '[contenthash].css',
      img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]',
      font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]',
      video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]'
    },
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      config.node = {
        fs: 'empty'
      };
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  serverMiddleware: [{ path: '/', handler: '~/middleware/index.js' }],
};
