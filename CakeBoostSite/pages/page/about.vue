<template>
  <div class="content__wrapper">
    <div class="content__wrapper__content" id="aboutUs">
      <h1>About us</h1>
      <div class="text__row1">
        <div class="text__col">
          <img :src="apiImg + 'gbanner/' + content.block_1.img" alt="" />
          <p>
            — Since 2015, Cakeboost Company has expanded significantly and is
            permanently growing
          </p>
        </div>
        <div class="text__col">
          <h2>{{content.block_1.title}}</h2>
          <div class="short-line"></div>
          <p>
            {{content.block_1.description}}
          </p>
        </div>
      </div>
      <div class="text__row2">
        <div class="text__col">
          <h2>{{content.block_2.title}}</h2>
          <div class="short-line"></div>

          <p>
            {{content.block_2.description}}
          </p>
        </div>
        <div class="text__col">
          <img :src="apiImg + 'gbanner/' + content.block_2.img" alt="" />
        </div>
      </div>
      <h2>Why us?</h2>
      <div class="whyus">
        <div class="whyus__row row1">
          <div class="whyus__item">
            <img src="/assets/img/1.svg" alt="" />
            <h4>Round-the-clock customers support</h4>
            <p>
              Dear customers, do not hesitate to ask our operators to provide you with any details on the service. Our customers support is available 24/7, so that we could always be in touch.
            </p>
          </div>
          <div class="whyus__item">
            <img src="/assets/img/2.svg" alt="" />
            <h4>Highly qualified service</h4>
            <p>
              Our company’s policy is exclusively focused on the top standards of the services to be delivered. You can make sure by checking the reviews at the independent website Trustpilot.com, which is the most popular throughout the gaming communities.
            </p>
          </div>
        </div>
        <div class="whyus__row row2">
          <div class="whyus__item">
            <img src="/assets/img/3.svg" alt="" />
            <h4>Save and secure delivery</h4>
            <p>
              The vast majority of our services are selfplayed. Your personal information will no be provided to anybody, but our coaches to deliver the services.
            </p>
          </div>
          <div class="whyus__item">
            <img src="/assets/img/4.svg" alt="" />
            <h4>High discounts</h4>
            <p>
              We carefully observe the prices for our services on the market and always try to set them at the compatible level. Hot offers, specials – all these you can find on CakeBoost. Besides, for our regular customers we have a 5 – 20 % discount!
            </p>
          </div>
        </div>
      </div>
      <div class="banner__catalog"  :style="{
                'background': 'linear-gradient(90deg, #2f3639 0%, rgba(47, 54, 57, 0) 100%),url(' + apiImg + 'gbanner/' + content.img + ') center/cover;',
              }">
        <div class="bc__top">
          <h1>{{content.title}}</h1>
          <div class="short-line"></div>
          <p>
            {{content.description}}
          </p>
        </div>
        <a v-bind:href="'/' + $store.getters['getGlobalGame'] + '/catalog'" class="btn__link">
          <span> Go to catalog </span>
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
      title:'Abous us | Cakeboost',
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
      ],
    };
  },
  components: {
    breadcrumbs,
  },
   data() {
    return {
      apiImg: this.$store.getters["getApiImgUrl"],
      apiUrl: this.$store.getters["getApiUrl"],
      globalApi: this.$store.getters["getGlobalApi"],
      content:'',
      page:''
    };
  },
  async asyncData({ $axios, store, route }) {
    let apiUrl = store.getters["getApiUrl"];
    let content = '';
    let page = '';

    let response_data_content = await $axios
      .$get(
        apiUrl +
          "pages?filter=slug,eq,about"
      )
      .then((data) => {
        content = data.records[0];
        page = data.records[0];
        content = JSON.parse(content.content);
      });
    return {
      content,
      page
    };
  },
  created() {},

  methods: {
  },
};
</script>
