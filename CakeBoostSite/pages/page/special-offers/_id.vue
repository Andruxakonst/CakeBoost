<template>
  <error v-if="this.$store.getters['get_show_error']"> </error>
  <div v-else class="content">
    <breadcrumbs />
    <h1 class="blogTopicTitle">{{ special_offer.title }}</h1>
    <div class="topicImage">
      <img :src="apiImg + 'offers/' + special_offer.img" :alt="special_offer.title" />
    </div>
    <div class="topicItem" v-html="special_offer.content"></div>
    <div class="relatedProducts" v-if="related_product != ''">
      <div class="arrowAndHref">
        <a href>
          <span>Related services</span>
          <img src="ControlElements/Right.png" alt />
        </a>
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide swiper-slide-active"
            v-for="item in this.related_product"
            :key="item.id"
          >
            <div class="bestItem">
              <div class="bestImg">
                <a
                  v-bind:href="
                    '/' +
                    $store.getters['getGlobalGame'] +
                    '/service/' +
                    item.slug +
                    '&' +
                    item.id
                  "
                >
                  <img :src="apiImg + 'sku/' + item.image" alt />
                </a>
                <div
                  class="bestTime"
                  v-if="
                    item.salesdate != null &&
                    item.sales == 1 &&
                    item.sales_2 == 2
                  "
                >
                  {{ item.sales_time_cedt }}
                </div>
                <div class="container_sale">
                  <div
                    class="bestSale"
                    v-if="item.sales == 1 || item.sales_2 == 1"
                    v-bind:class="{
                      border_zero_sale:
                        item.sales == item.hot || item.sales_2 == item.hot,
                    }"
                  >
                    {{ item.sales_discount }}% OFF
                  </div>
                  <div
                    class="hot_sales"
                    v-bind:class="{
                      border_zero_hot:
                        item.sales == item.hot || item.sales_2 == item.hot,
                    }"
                    v-if="item.hot == 1"
                  >
                    HOT
                  </div>
                </div>
              </div>
              <div class="bestbody">
                <div class="title">
                  <a
                    v-bind:href="
                      '/' +
                      $store.getters['getGlobalGame'] +
                      '/service/' +
                      item.slug +
                      '&' +
                      item.id
                    "
                    v-html="item.menu_name"
                  ></a>
                </div>
              </div>
              <div class="best_item_stars">
                <span v-for="sub_item in item.stars" :key="sub_item">
                  <img
                    v-if="sub_item == 's'"
                    src="/landing_page/Active.svg"
                    alt
                  />
                  <img
                    v-if="sub_item == 'n'"
                    src="/landing_page/Disabled.svg"
                    alt
                  />
                </span>
              </div>
               <div class="price" v-if="$store.getters['getSelectedZone'] == 'eu'">
          <span v-if="item.price_eur != 0">
            {{ item.price_eur }}€
            <span :class="{small_sku_font:(item.price_eur_sale+''+item.price_eur).split('').length>10}" v-if="item.sales == 1">{{ item.price_eur_sale }}€</span>
            <span :class="{small_sku_font:(item.price_eur_sale2+''+item.price_eur).split('').length>10}"  v-if="item.sales_2 == 1">{{ item.price_eur_sale2 }}€</span>
          </span>
          <span v-else>
            {{ item.fr_price_eur }}€
            <span :class="{small_sku_font:(item.fr_price_eur_sale+''+item.fr_price_eur).split('').length>10}" v-if="item.sales == 1">{{ item.fr_price_eur_sale }}€</span>
            <span :class="{small_sku_font:(item.fr_price_eur_sale2+''+item.fr_price_eur).split('').length>10}"  v-if="item.sales_2 == 1">{{ item.fr_price_eur_sale2 }}€</span>
          </span>
          <span>
            <a
              v-bind:href="
                '/' +
                $store.getters['getGlobalGame'] +
                '/service/' +
                item.slug +
                '&' +
                item.id
              "
              >View details</a
            >
          </span>
        </div>
        <div
          class="price"
          v-else-if="$store.getters['getSelectedZone'] == 'us'"
        >
          <span v-if="item.price_usd != 0">
            {{ item.price_usd }}$
            <span :class="{small_sku_font:(item.price_usd_sale+''+item.price_usd).split('').length>10}" v-if="item.sales == 1">{{ item.price_usd_sale }}$</span>
            <span :class="{small_sku_font:(item.price_usd_sale2+''+item.price_usd).split('').length>10}" v-if="item.sales_2 == 1">{{ item.price_usd_sale2 }}$</span>

          </span>
          <span v-else>
            {{ item.fr_price_usd }}$
             <span :class="{small_sku_font:(item.fr_price_usd_sale+''+item.fr_price_usd).split('').length>10}" v-if="item.sales == 1">{{ item.fr_price_usd_sale }}$</span>
            <span :class="{small_sku_font:(item.fr_price_usd_sale2+''+item.fr_price_usd).split('').length>10}" v-if="item.sales_2 == 1">{{ item.fr_price_usd_sale2 }}$</span>
          </span>
          <span>
            <a
              v-bind:href="
                '/' +
                $store.getters['getGlobalGame'] +
                '/service/' +
                item.slug +
                '&' +
                item.id
              "
              >View details</a
            >
          </span>
        </div>
            </div>
          </div>
        </div>
        <span
          class="swiper-notification"
          aria-live="assertive"
          aria-atomic="true"
        ></span>
      </div>
    </div>
  </div>
</template>
<script>
import breadcrumbs from "~/components/breadcrumbs.vue";
import error from "~/components/404.vue";
import Cookies from "js-cookie";
export default {
  head() {
    return {
      title: this.special_offer.seo_title
        ? this.special_offer.seo_title
        : this.special_offer.title + "| Cakeboost",
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: this.special_offer.seo_canonical ? this.special_offer.seo_canonical : 'https://cakeboost.com'+this.$route.path
        }
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.special_offer.seo_descr,
        },
        {
          hid: "robots",
          name: "robots",
          content: "noindex, follow"
        }
      ],


    };
  },
  data() {
    return {
      special_offer: "",
      apiImg: this.$store.getters["getApiImgUrl"],
      related_product: "",
    };
  },
  components: {
    breadcrumbs,
    error,
  },
  mounted() {
    this.init_swiper();
  },
  created() {},
  async asyncData({ $axios, store, route, redirect, res }) {
    try {
      if (route.path.split("/").length == 4) {
        let apiUrl = store.getters["getApiUrl"];
        let temp = route.params.id.split("&");
        let special_offer = "";
        let related_product = "";
        let response_offers = await $axios

          .$get(apiUrl + "offers/" + temp)
          .then((data) => {
            special_offer = data[1];
          });
        let response_data_sku_rel = await $axios
          .$get(apiUrl + "sku?filter=id,in," + special_offer.related_sku)
          .then((data) => {
            related_product = data.records;
            console.log(related_product);
            for (let i = 0; i < related_product.length; i++) {
              related_product[i].stars = [];
              if (related_product[i].gl_rating == 0) {
                related_product[i].stars = ["n", "n", "n", "n", "n"];
              } else {
                for (let j = 0; j < related_product[i].gl_rating; j++) {
                  related_product[i].stars.push("s");
                }
                for (
                  let j = 0;
                  j < Math.floor(5 - related_product[i].gl_rating);
                  j++
                ) {
                  related_product[i].stars.push("n");
                }
              }
            }
          });
        let game_id_temp = related_product[0].game;
        let game_temp = await $axios
          .$get(apiUrl + "game/" + game_id_temp)
          .then((data) => {
            store.commit("setGlobal_game", data.slug);
            store.commit("setGlobal_game_id", data.id);
            console.log(data);
          });
        return {
          special_offer,
          related_product,
        };
      }
    } catch (error) {
      res.statusCode = 404;
      store.commit("set_show_error", true);
      let apiUrl = store.getters["getApiUrl"];
      let game_temp = await $axios.$get(apiUrl + "game?size=1").then((data) => {
        Cookies.remove("game");
        Cookies.set("game", data.records[0].id, { expires: 30 });
        store.commit("setGlobal_game", data.records[0].slug);
        store.commit("setGlobal_game_id", data.records[0].id);
      });
    }
  },
  methods: {
    init_swiper() {
      var mySwiper = new Swiper(".relatedProducts .swiper-container", {
        speed: 1000,
        spaceBetween: 8,
        slidesPerView: "auto",
      });
    },
  },
};
</script>
