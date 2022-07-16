<template>
  <div class="content">
    <div class="thanksBanner">
      <div>
        <img style="width:80px;height:80px" src="/imgSmiles/Bad.png" alt />
      </div>
      <div>Payment fail. Please try again later or choose another payment system.</div>
    </div>
    <div style="text-align:center" class="thanksPurschaseTotal">
      <a style="margin-left:0" v-bind:href="'/'+$store.getters['getGlobalGame']+'/catalog'">Go back to catalog</a>
    </div>
    <div class="contactUs">
      <div>Contact us</div>
      <div>
        <a href>
          <img src="/img(ColorSochialLogo)/Skype.png" alt />
        </a>
        <a href>
          <img src="/img(ColorSochialLogo)/Discord.png" alt />
        </a>
        <a href>
          <img src="/img(ColorSochialLogo)/WhatsApp.png" alt />
        </a>
        <a href>
          <img src="/img(ColorSochialLogo)/Telegram.png" alt />
        </a>
        <a href>
          <img src="/img(ColorSochialLogo)/Mail.png" alt />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import breadcrumbs from "~/components/breadcrumbs.vue";
export default {
  head() {
    return {
      title:'Payment faulire | Cakeboost',
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
    breadcrumbs,
  },
  }
</script>

