<template>
  <nuxt-child/>
</template>
<script>
import breadcrumbs from "~/components/breadcrumbs.vue";

export default {
  head: {
    title: "CakeBoost.com",
    script: [],
    link: [],
    link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href:'https://cakeboost.com'+this.$route.path
        }
      ],
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

  methods: {

  }
};
</script>
