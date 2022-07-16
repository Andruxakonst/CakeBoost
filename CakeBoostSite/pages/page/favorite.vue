<template>
  <div class="content">
    <breadcrumbs />
    <h1 class="minor_h1"
    >
      Favorite
    </h1>
    <div class="categoryItemsContainer catalogCategory">
      <div class="bestItem" v-for="item in this.favorite" :key="item">
        <div class="bestImg">
          <div>
          <a
          style="display: block; width: 100%; height: 100%;"
          @click="set_global_game_favorite(item.game)"
            v-bind:href="
              '/' +
              $store.getters['getGlobalGame'] +
              '/service/' +
              item.slug +
              '&' +
              item.id
            "
          ></a>
          </div>
          <a
          @click="set_global_game_favorite(item.game)"
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
          <div class="bestTime" v-if="item.salesdate != null && item.sales == 1 && item.sales_2 == 2">{{ item.sales_time_cedt }}</div>
          <div class="container_sale">
              <div
                class="bestSale"
                v-if="item.sales == 1 || item.sales_2 == 1"
                v-bind:class="{ border_zero_sale: item.sales == item.hot || item.sales_2 == item.hot }"
              >{{ item.sales_discount }}% OFF</div>
              <div
                class="hot_sales"
                v-bind:class="{ border_zero_hot: item.sales == item.hot || item.sales_2 == item.hot }"
                v-if="item.hot == 1"
              >HOT</div>
            </div>
        </div>
        <div class="bestbody">
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
          <div class="title">
            <a
            @click="set_global_game_favorite(item.game)"
              v-bind:href="
                '/' +
                $store.getters['getGlobalGame'] +
                '/service/' +
                item.slug +
                '&' +
                item.id
              "
              v-html="item.menu_name"
              ></a
            >
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
          <div class="BuyNow">
            <a
              v-bind:href="
                '/' +
                $store.getters['getGlobalGame'] +
                '/service/' +
                item.slug +
                '&' +
                item.id
              "
              >Buy Now</a
            >
          </div>
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
          <div class="BuyNow">
            <a
              v-bind:href="
                '/' +
                $store.getters['getGlobalGame'] +
                '/service/' +
                item.slug +
                '&' +
                item.id
              "
              >Buy Now</a
            >
          </div>
        </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import breadcrumbs from "~/components/breadcrumbs.vue";
import moment from "moment";
import momenttz from "moment-timezone";

import Cookies from "js-cookie";
export default {
   head() {
    return {
      title:'Favorite | Cakeboost',
      meta: [
        {
          hid: "description",
          name: "description",
          content: '',
        },
        {
          hid: "robots",
          name: "robots",
          content: "noindex, nofollow"
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
  async asyncData({ $axios, route, store }) {

    return {
    };
  },
  data() {
    return {
      search_results: [],
      apiUrl: this.$store.getters["getApiUrl"],
      apiImg: this.$store.getters["getApiImgUrl"],

      favorite: [],
      favorite_store_temp: this.$store.getters["getFavorite"],
    };
  },
  created() {},
  mounted() {
    this.get_favorite(this.favorite_store_temp);
  },

  methods: {
    async get_favorite(favorite_store_temp) {
      if (favorite_store_temp == "") {
        this.favorite = [];
      } else {
        let temp = favorite_store_temp.split(",");
        let response_data_sku = await this.$axios
          .$get(this.apiUrl + "sku?filter=id,in," + favorite_store_temp)
          .then((data) => {
            this.favorite = data.records;
             for (let i = 0; i < this.favorite.length; i++) {
          this.favorite[i].stars = [];
          if (this.favorite[i].gl_rating == 0) {
            this.favorite[i].stars = ["n", "n", "n", "n", "n"];
          } else {
            for (let j = 0; j < this.favorite[i].gl_rating; j++) {
              this.favorite[i].stars.push("s");
            }
            for (let j = 0; j < Math.floor(5 - this.favorite[i].gl_rating); j++) {
              this.favorite[i].stars.push("n");
            }
          }
        }
          });
      }
    },
    set_global_game_favorite(id){
      let date = new Date(Date.now() + 30 * 86400e3);
      date = date.toUTCString();
      this.deleteCookie("game");
      this.setCookie("game", id, { expires: date });
    },
    deleteCookie(name) {
      this.setCookie(name, "", {
        "max-age": -1,
      });
    },
    setCookie(name, value, options = {}) {
      options = {
        path: "/",
        ...options,
      };

      if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
      }

      let updatedCookie =
        encodeURIComponent(name) + "=" + encodeURIComponent(value);

      for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
          updatedCookie += "=" + optionValue;
        }
      }

      document.cookie = updatedCookie;
    },
  },

};
</script>
