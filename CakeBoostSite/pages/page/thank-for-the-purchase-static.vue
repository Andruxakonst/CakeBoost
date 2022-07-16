<template>
  <div class="content">
    <div class="thanksBanner">
      <div>
        <img src="/imgSmiles/Happy purple.png" alt />
      </div>
      <div>Thank you for the purchase!</div>
    </div>
    <div style="text-align:center" class="thanksPurschaseTotal">
      <a style="margin-left:0" v-bind:href="'/'+$store.getters['getGlobalGame']+'/catalog'">Go back to catalog</a>
    </div>
    <div class="contactUs">
      <div>Contact us</div>
      <div>
        <a href="skype:live:support_51317?add">
          <img id="Skype" src="/img(ColorSochialLogo)/Skype.png" alt />
        </a>
        <a style="cursor: pointer;" @click="$store.commit('set_contact_us_discord', true)">
          <img id="Discord" src="/img(ColorSochialLogo)/Discord.png" alt />
        </a>
        <a href="https://www.whatsapp.com/">
          <img id="WhatsApp" src="/img(ColorSochialLogo)/WhatsApp.png" alt />
        </a>
        <a href="https://t.me/cakeboost">
          <img id="Telegram" src="/img(ColorSochialLogo)/Telegram.png" alt />
        </a>
        <a href="mailto:support@cakeboost.com">
          <img id="Mail" src="/img(ColorSochialLogo)/Mail.png" alt />
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
      title:'Thank for purchase | Cakeboost',
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
  mounted() {
    let cart = JSON.parse(localStorage.getItem("card"))
    let parsedAddLayer = JSON.parse(localStorage.getItem('dataAddLayer')) || []
    let products = []
    for(let i=0; i<parsedAddLayer.length; i++) {
      products.push(parsedAddLayer[i].ecommerce.add.products[0])
    }

    /*
    console.log(cart);
    let purchase = {
    'event':'purchase',
    'ecommerce': {
      'currencyCode': 'USD', // выбранная валюта
        'purchase': {
          'actionField': {
            'id': '37487',                     
            'revenue': `${cart.total_price_us}`,
          },
          'products': products
        }
      }
    }
    if(cart.coupon) {
      purchase.ecommerce.purchase.actionField.coupon = cart.coupon_code
    }
    console.log(purchase)
    */
  }
}
</script>

