<template>
    <div class="content">
        <div class="notfound_banner">
            <img src="/img/404.svg" alt="">
            <div>
                This page is not found
            </div>
        </div>
        <div class="notfound_href">
            <a v-bind:href="'/'+$store.getters['getGlobalGame']+'/catalog'">Go to the catalog</a>
        </div>
    </div>
</template>
<script>
import breadcrumbs from "~/components/breadcrumbs.vue";

export default {
   head() {
    return {
      title:'404 | Cakeboost',
      meta: [
        {
          hid: "description",
          name: "description",
          content: '',
        },
      ],

      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href:'https://cakeboost.com'+this.$route.path
        }
      ]
    };
  },
  components: {
    breadcrumbs
  },
  data() {
    return {
    };
  },
  created() {

  },
  async asyncData({ $axios, route, store, redirect,res }) {
       res.statusCode = 404;
  },

  methods: {

  }
};
</script>
