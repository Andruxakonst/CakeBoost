<template>
  <div class="content">
    <div class="thanksBanner">
      <div>
        <img src="/imgSmiles/Happy purple.png" alt />
      </div>
      <div>Thank you for the registration!</div>
    </div>
    <div style="text-align:center" class="thanksPurschaseTotal">
      <a style="margin-left:0" v-bind:href="'/'+$store.getters['getGlobalGame']+'/catalog'">Go back to catalog</a>
    </div>
    <div class="contactUs">
      <div>Contact us</div>
      <div>
        <a href="skype:live:support_51317?add">
          <img src="/img(ColorSochialLogo)/Skype.png" alt />
        </a>
        <a href="https://discord.gg/ypHKBqa">
          <img src="/img(ColorSochialLogo)/Discord.png" alt />
        </a>
        <a href="https://www.whatsapp.com/">
          <img src="/img(ColorSochialLogo)/WhatsApp.png" alt />
        </a>
        <a href="https://t.me/cakeboost">
          <img src="/img(ColorSochialLogo)/Telegram.png" alt />
        </a>
        <a href="mailto:support@cakeboost.com">
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
      title:'Thank for registration | Cakeboost',
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

