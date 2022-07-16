<template>
  <div class="content">
    <breadcrumbs />
    <h1 class="minor_h1">Search results by request: {{ $route.params.url }}</h1>
    <div class="categoryItemsContainer catalogCategory">
      <div class="bestItem" v-for="item in this.search_results" :key="item" >
        <div class="bestImg">
          <div>
            <a
              v-bind:href="
                '/' + item.game_slug + '/service/' + item.slug + '&' + item.id
              "
              style="display: block; height: 100%; width: 100%;"></a>
          </div>
          <a
            v-bind:href="
              '/' + item.game_slug + '/service/' + item.slug + '&' + item.id
            "
          >
            <img :src="apiImg + 'sku/' + item.image" alt />
          </a>
          <div class="bestTime" v-if="item.salesdate != null && item.sales == 1 && item.sales_2 == 2">
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
          <div class="best_item_stars">
            <span v-for="sub_item in item.stars" :key="sub_item">
              <svg v-if="sub_item == 's'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#clip0)"><path d="M16 5.85932H9.88727L8.00557 -0.00012207L6.11274 5.85932L0 5.8481L4.94363 9.47377L3.0508 15.3332L7.99443 11.7075L12.9381 15.3332L11.0564 9.47377L16 5.85932Z" fill="#00B67A"></path> <path d="M11.3333 10.5191L10.9274 9.33319L8 11.3332L11.3333 10.5191Z" fill="#005128"></path></g> <defs><clipPath id="clip0"><rect width="16" height="16" fill="white" transform="translate(0 -0.00012207)"></rect></clipPath></defs></svg>
              <svg v-if="sub_item == 'n'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 -0.00012207L9.88854 6.11133H16L11.0557 9.88842L12.9443 15.9999L8 12.2228L3.05573 15.9999L4.94427 9.88842L0 6.11133H6.11146L8 -0.00012207Z" fill="#ACAFB0"></path></svg>
            </span>
          </div>
          <div class="title">
            <a
              v-bind:href="
                '/' + item.game_slug + '/service/' + item.slug + '&' + item.id
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
                '/' + item.game_slug + '/service/' + item.slug + '&' + item.id
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
                '/' + item.game_slug + '/service/' + item.slug + '&' + item.id
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
export default {
  head: {
    title: "CakeBoost.com",
    script: [],
  },
  components: {
    breadcrumbs,
  },
  async asyncData({ $axios, route, store }) {
    let apiUrl = store.getters["getApiUrl"];
    let search_results = [];
    let game;
    let response_data = await $axios.$get(apiUrl + "game").then((data) => {
      game = data.records;
    });
    let response_data_sku = await $axios
      .$get(apiUrl + "sku?filter=title,cs," + route.params.url+'&filter=status,eq,1')
      .then((data) => {
        search_results = data.records;
        // for (let i = 0; i < search_results.length; i++){
        //   console.log(search_results[i])
        // }

      });
      let response_data_sku2 = await $axios
      .$get(apiUrl + "sku?filter=content,cs," + route.params.url+"&title,ncs,"+ route.params.url +"&filter=status,eq,1")
      .then((data) => {
        for (let i = 0; i < data.records.length; i++) {
          if(search_results.find(result => result.id == data.records[i].id) === undefined) {
            search_results.push(data.records[i])
          }
        }

        //  for (let i = 0; i < search_results.length; i++) {
        //   search_results[i].stars = [];
        //   if (search_results[i].gl_rating == 0) {
        //     search_results[i].stars = ["n", "n", "n", "n", "n"];
        //   } else {
        //     for (let j = 0; j < search_results[i].gl_rating; j++) {
        //       search_results[i].stars.push("s");
        //     }
        //     for (let j = 0; j < Math.floor(5 - search_results[i].gl_rating); j++) {
        //       search_results[i].stars.push("n");
        //     }
        //   }
        // }
      });
       for (let i = 0; i < search_results.length; i++) {

          search_results[i].stars = [];
          if (search_results[i].gl_rating == 0) {
            search_results[i].stars = ["n", "n", "n", "n", "n"];
          } else {
            for (let j = 0; j < search_results[i].gl_rating; j++) {
              search_results[i].stars.push("s");
            }
            for (let j = 0; j < Math.floor(5 - search_results[i].gl_rating); j++) {
              search_results[i].stars.push("n");
            }
          }
        }
    for (let i = 0; i < search_results.length; i++) {
      for (let j = 0; j < game.length; j++) {
        if (search_results[i].game == game[j].id) {
          search_results[i].game_slug = game[j].slug;
          break;
        }
      }
    }
    return {
      search_results,
    };
  },
  data() {
    return {
      search_results: [],
      apiUrl: this.$store.getters["getApiUrl"],
      apiImg: this.$store.getters["getApiImgUrl"],
    };
  },
  created() {},

  methods: {},
};
</script>
