<template>
  <nuxt-child/>
</template>
<script>
import breadcrumbs from "~/components/breadcrumbs.vue";
export default {
   head() {
    return {
      title:'Search | Cakeboost',
      meta: [
        {
          hid: "description",
          name: "description",
          content: '',
        },
      ],

   
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

  methods: {
   
  }
};
</script>
