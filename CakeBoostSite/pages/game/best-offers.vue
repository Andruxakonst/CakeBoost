<template>
  <!--client-only-->
   <error v-if="this.$store.getters['get_show_error']"> </error>
  <div v-else class="content">
    <div class="bestOffers">
      <div class="arrowAndHref">
        <a href>
          <span>Best offers</span>
          <img src="ControlElements/Right.png" alt />
        </a>
      </div>
      <div class="flex-container">
        <div class="bestItem" v-for="item in this.best_offers" :key="item">
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
                item.salesdate != null && item.sales == 1 && item.sales_2 == 2
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
              <svg v-if="sub_item == 's'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g clip-path="url(#clip0)">
                <path d="M16 5.85932H9.88727L8.00557 -0.00012207L6.11274 5.85932L0 5.8481L4.94363 9.47377L3.0508 15.3332L7.99443 11.7075L12.9381 15.3332L11.0564 9.47377L16 5.85932Z" fill="#00B67A"/>
                <path d="M11.3333 10.5191L10.9274 9.33319L8 11.3332L11.3333 10.5191Z" fill="#005128"/>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="16" height="16" fill="white" transform="translate(0 -0.00012207)"/>
                </clipPath>
                </defs>
              </svg>
              <svg v-if="sub_item == 'n'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 -0.00012207L9.88854 6.11133H16L11.0557 9.88842L12.9443 15.9999L8 12.2228L3.05573 15.9999L4.94427 9.88842L0 6.11133H6.11146L8 -0.00012207Z" fill="#ACAFB0"/>
              </svg>
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
  </div>
</template>

<script>
import moment from "moment";
import momenttz from "moment-timezone";
import error from "~/components/404.vue";
export default {
  head() {
    return {
      title: "Best offers | Cakeboost",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "",
        },
      ],


    };
  },
  components: {
    error
  },
  data() {
    return {
      apiImg: this.$store.getters["getApiImgUrl"],
      apiUrl: this.$store.getters["getApiUrl"],
      best_offers: [],
      best_offers_fake: [],
      game_id: 1,
    };
  },
  mounted() {
    console.log(this.best_offers_fake), this.get_best_offers();
  },
  created() {},
  async asyncData({ $axios, route, store,res }) {
    try {
      let currentDate = moment()
        .tz("Europe/Berlin")
        .format("YYYY-MM-DD HH:mm:ss");
      let best_offers = [];
      let best_offers_fake = [];
      let apiUrl = store.getters["getApiUrl"];
      let game_id = 1;
      let response_data = await $axios
        .$get(
          apiUrl + "game?filter=slug,eq," + route.params.game + "&include=id"
        )
        .then((data) => {
          game_id = data.records[0].id;
        });

      let response_data_sku_sales_2 = $axios
        .$get(
          apiUrl +
            "sku?filter=sales,eq,1&filter=status,eq,1&filter=game,eq," +
            game_id
        )
        .then((data) => {
          best_offers_fake = data.records;
          console.log(best_offers_fake);
          for (let i = 0; i < best_offers_fake.length; i++) {
            best_offers_fake[i].stars = [];
            if (best_offers_fake[i].gl_rating == 0) {
              best_offers_fake[i].stars = ["n", "n", "n", "n", "n"];
            } else {
              for (let j = 0; j < best_offers_fake[i].gl_rating; j++) {
                best_offers_fake[i].stars.push("s");
              }
              for (
                let j = 0;
                j < Math.floor(5 - best_offers_fake[i].gl_rating);
                j++
              ) {
                best_offers_fake[i].stars.push("n");
              }
            }
          }
        });
      let response_data_sku_sales = await $axios
        .$get(
          apiUrl +
            "sku?filter=sales_2,eq,1&filter=status,eq,1&filter=game,eq," +
            game_id
        )
        .then((data) => {
          best_offers = data.records;

          for (let i = 0; i < best_offers.length; i++) {
            best_offers[i].stars = [];
            if (best_offers[i].gl_rating == 0) {
              best_offers[i].stars = ["n", "n", "n", "n", "n"];
            } else {
              for (let j = 0; j < best_offers[i].gl_rating; j++) {
                best_offers[i].stars.push("s");
              }
              for (
                let j = 0;
                j < Math.floor(5 - best_offers[i].gl_rating);
                j++
              ) {
                best_offers[i].stars.push("n");
              }
            }
          }
        });

      return {
        game_id,
      };
    } catch (error) {
      res.statusCode = 404;
      store.commit("set_show_error", true);
    }
  },
  methods: {
    async get_best_offers() {
      let response_data_sku_sales = await this.$axios
        .$get(
          this.apiUrl +
            "sku?filter=sales,eq,1&filter=status,eq,1&filter=game,eq," +
            this.game_id
        )
        .then((data) => {
          let temp = data.records;
          this.best_offers = temp;
          let response_data_sku_sales = this.$axios
            .$get(
              this.apiUrl +
                "sku?filter=sales_2,eq,1&filter=status,eq,1&filter=game,eq," +
                this.game_id
            )
            .then((data) => {
              this.best_offers = this.best_offers.concat(data.records);
              for (let i = 0; i < this.best_offers.length; i++) {
                this.best_offers[i].stars = [];
                if (this.best_offers[i].gl_rating == 0) {
                  this.best_offers[i].stars = ["n", "n", "n", "n", "n"];
                } else {
                  for (let j = 0; j < this.best_offers[i].gl_rating; j++) {
                    this.best_offers[i].stars.push("s");
                  }
                  for (
                    let j = 0;
                    j < Math.floor(5 - this.best_offers.gl_rating);
                    j++
                  ) {
                    this.best_offers.stars.push("n");
                  }
                }
              }
            });
        });
    },
  },
};
</script>
