<template>
  <div class="content">
    <breadcrumbs />
    <div class="howItWorks">
      <div>
         <h1>How it works?</h1>
        <div>All stages of our work</div>
      </div>
      <div class="howItWorksItems">
        <div class="howItWorksItem">
          <div>01</div>
          <div v-html="content.howItWorks_1.title">

          </div>
          <div v-html="content.howItWorks_1.desc"></div>
          <!-- <div>Make your choice!</div>
          <div>Decide on the service you prefer and make an order. Our customers support works exactly to meet your needs and requirements. Our operators are available 24/7 via Discord and you are always welcome at CakeBoost#9024.</div>
           -->
        </div>
        <img src="/img/RightPurple.png" alt />
        <div class="howItWorksItem">
          <div>02</div>
           <div v-html="content.howItWorks_2.title">

          </div>
           <div v-html="content.howItWorks_2.desc">
             </div>
           <!-- <div>Add to the cart.</div>
          <div>We are happy to provide you with the best quality of services on the market. So that these services were even more satisfying and your experience pleasant, we are here to offer you a 7% discount coupon “SWEETCAKE”.</div>   -->

        </div>
        <img src="/img/RightPurple.png" alt />
        <div class="howItWorksItem">
          <div>03</div>
           <div v-html="content.howItWorks_3.title">

          </div>
          <div v-html="content.howItWorks_3.desc">
            </div>
          <!-- <div>Make a payment.</div>
          <div>Our customers have always been of a top priority! As soon as you added the service to your cart, in case you have not communicated with us before, please, make sure to fill in the “User info” and “Account info” of the order form. We will contact you promptly!</div>   -->

        </div>
        <img src="/img/RightPurple.png" alt />
        <div class="howItWorksItem">
          <div>04</div>
           <div v-html="content.howItWorks_4.title">

          </div>
          <div v-html="content.howItWorks_4.desc">
            </div>
            <!-- <div>Enjoy!</div>
          <div>You can always enjoy the performance of your order, watching it live on the stream, on a pro bono basis. Once your service is delivered you have no way other than to become a part of the CakeBoost Family!</div> -->

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import breadcrumbs from "~/components/breadcrumbs.vue";
export default {
   head() {
    return {
      title:'How it works | Cakeboost',
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
          href: this.page.seo_canonical ? this.page.seo_canonical : 'https://cakeboost.com'+this.$route.path
        }
      ]
    };
  },
  components: {
    breadcrumbs
  },
   async asyncData({ $axios, store, route }) {
    let apiUrl = store.getters["getApiUrl"];
    let content = '';
    let page = '';

    let response_data_content = await $axios
      .$get(
        apiUrl +
          "pages?filter=slug,eq,how-it-works"
      )
      .then((data) => {
        content = data.records[0];
        page = data.records[0];
        content = JSON.parse(content.content);
        console.log(content);
      });
    return {
      content,
      page
    };
  },
  data() {
    return {
      content:{},
      page:{}
    };
  },
  created() {},

  methods: {}
};
</script>
