<template>
  <div  style="width:100vw;height:100vh;background:#fffff;display:flex;justify-content: center;
    align-items: center;overflow:hidden;">
    <img src="/YGgI.gif" alt=""  />
  </div>
</template>
<script>

import Cookies from "js-cookie";
export default {
    
layout: "landing_page",
  head: {
    title:'Personal area | Cakeboost',
    script: [],
    
      // link: [
      //   {
      //     rel: 'canonical',
      //     href:'https://cakeboost.com'+this.$route.path
      //   }
      // ],
  },
  data() {
    return {    
    };
  },
  mounted() {

    console.log(this.$route.query);
    let acs = this.$route.query.access.split('&')[0];
    let ref = this.$route.query.refresh.split('&')[1];
    Cookies.remove('access_t');
    Cookies.remove('refresh_t');
    Cookies.set("access_t", acs, { expires: 30 });
    Cookies.set("refresh_t", ref, { expires: 30 });
    window.location.href = window.location.origin+'/page/account/'+ acs.split(".")[1];
  },

  methods: {
   
  }
};
</script>