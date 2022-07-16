<template>
  <nuxt />
</template>
<script>
// import "@/static/css/reset.css";
// import "@/static/css/landing.css";
import Cookies from "js-cookie";
import moment from "moment";
import momenttz from "moment-timezone";


export default {

  /*
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ["script", "style", "font"].includes(type);
      },
    },
  },*/
  data() {
    return {
      
    };
  },
  head: {
    link: [
        {rel: "stylesheet", type: 'text/css', href: "/jquery.fancybox.min.css"},
        {rel: "stylesheet", type: 'text/css', href: "/swiper-bundle.css"},
        {rel: "stylesheet", type: 'text/css', href: "/css/landing.css"},
        {rel: "stylesheet", type: 'text/css', href: "/css/reset.css"},
        {rel: "stylesheet", type: 'text/css', href: "/css/main.css"},
      ],
  },
  created() {},
  mounted() {
    
  },
  watch: {
    
  },

  async asyncData({ $axios, store, route }) {
    let apiUrl = store.getters["getApiUrl"];
  
  },
  methods: {
  },
};
</script>

