<template>
    <div class="bestOffers">
      <div class="arrowAndHref">
        <!-- <a v-bind:href="'/' + $store.getters['getGlobalGame'] + '/best-offers'"> -->
        <!-- <a href="#"> -->
          <span>Popular Offers</span>
        <!-- </a> -->
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <!--<div class="swiper-slide offer_of_day" v-if="this.landing && set_salestime_sku(landing.end_date + ' 23:59:59')"> -->
          <div class="swiper-slide offer_of_day" v-if="this.landing">
            <div class="offers_of_day_date"><span>Offer of the day • </span><span>{{ set_salestime_sku(landing.end_date + ' 23:59:59') }}</span></div>
            <div class="bestImg">
              <a
                v-bind:href="
                  '/' +
                  $store.getters['getGlobalGame'] +
                  '/service/' +
                  this.landing.slug +
                  '&' +
                  this.landing.id
                "></a>
              <a
                v-bind:href="
                  '/' +
                  $store.getters['getGlobalGame'] +
                  '/service/' +
                  this.landing.slug +
                  '&' +
                  this.landing.id
                "
                class="popular_offer_item"
              >
                <img :src="apiImg + 'sku/' + this.landing.image" :alt="this.landing.title" />
                <div class="popular_offer_item_img_mask">
                  <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                    <g id=" Navigation / Arrow-up">
                    <rect id="Rectangle" opacity="0.8" x="18.834" y="8.33282" width="3.33333" height="23.3333" rx="1.66667" fill="white"/>
                    <path id="Path 94" d="M11.6792 21.178C11.0283 21.8289 9.97301 21.8289 9.32214 21.178C8.67127 20.5271 8.67127 19.4719 9.32214 18.821L19.3221 8.82098C19.9531 8.19002 20.9691 8.16794 21.6269 8.7709L31.6269 17.9376C32.3054 18.5596 32.3512 19.6138 31.7292 20.2924C31.1073 20.9709 30.053 21.0167 29.3744 20.3948L20.5508 12.3064L11.6792 21.178Z" fill="white"/>
                    </g>
                  </svg>
                  <div>View details</div>
                </div>
              </a>
              <!-- <div
                class="bestTime"
                v-if="
                  this.landing.salesdate != null && this.landing.sales == 1 && this.landing.sales_2 == 2
                "
              >
                {{ this.landing.sales_time_cedt }}
              </div>
              <div class="container_sale">
                <div
                  class="hot_sales"
                  v-bind:class="{
                    border_zero_hot:
                      this.landing.sales == this.landing.hot || this.landing.sales_2 == this.landing.hot,
                  }"
                  v-if="this.landing.hot == 1"
                >
                  HOT
                </div>
              </div> -->
            </div>
            <div style="margin-top: 16px">
              <div class="bestbody">
                <div class="best_item_stars">
                  <span v-for="(sub_item, index) in 5" :key="index">
                    <svg v-if="sub_item <= Math.round(landing.gl_rating )" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <g clip-path="url(#clip0)">
                      <path d="M16 5.85932H9.88727L8.00557 -0.00012207L6.11274 5.85932L0 5.8481L4.94363 9.47377L3.0508 15.3332L7.99443 11.7075L12.9381 15.3332L11.0564 9.47377L16 5.85932Z" fill="#FFF"/>
                      <path d="M11.3333 10.5191L10.9274 9.33319L8 11.3332L11.3333 10.5191Z" fill="#828688"/>
                      </g>
                      <defs>
                      <clipPath id="clip0">
                      <rect width="16" height="16" fill="white" transform="translate(0 -0.00012207)"/>
                      </clipPath>
                      </defs>
                    </svg>
                    <svg v-if="sub_item > Math.round(landing.gl_rating )" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 -0.00012207L9.88854 6.11133H16L11.0557 9.88842L12.9443 15.9999L8 12.2228L3.05573 15.9999L4.94427 9.88842L0 6.11133H6.11146L8 -0.00012207Z" fill="#DA94FE"/>
                    </svg>
                  </span>
                  <!-- <span v-for="sub_item in 5" :key="sub_item.index">
                    <img v-if="sub_item <= this.landing.gl_rating" src="/landing_page/Active.svg" alt />
                    <img
                      v-if="sub_item > this.landing.gl_rating"
                      src="/landing_page/Disabled.svg"
                      alt
                    />
                  </span> -->
                </div>
                <div class="title">
                  <a
                    v-bind:href="
                      '/' +
                      $store.getters['getGlobalGame'] +
                      '/service/' +
                      this.landing.slug +
                      '&' +
                      this.landing.id
                    "
                    v-html="this.landing.menu_name"
                  ></a>
                </div>
              </div>

              <div class="price" v-if="$store.getters['getSelectedZone'] == 'eu'">
                <span v-if="this.landing.price_eur != 0">
                  € {{ this.landing.price_eur }}
                  <span :class="{small_sku_font:(this.landing.price_eur_sale+''+this.landing.price_eur).split('').length>10}" v-if="this.landing.sales == 1">€ {{ this.landing.price_eur_sale }}</span>
                  <span :class="{small_sku_font:(this.landing.price_eur_sale2+''+this.landing.price_eur).split('').length>10}"  v-if="this.landing.sales_2 == 1">€ {{ this.landing.price_eur_sale2 }}</span>
                </span>
                <span v-else>
                  € {{ this.landing.fr_price_eur }}
                  <span :class="{small_sku_font:(this.landing.fr_price_eur_sale+''+this.landing.fr_price_eur).split('').length>10}" v-if="this.landing.sales == 1">€ {{ this.landing.fr_price_eur_sale }}</span>
                  <span :class="{small_sku_font:(this.landing.fr_price_eur_sale2+''+this.landing.fr_price_eur).split('').length>10}"  v-if="this.landing.sales_2 == 1">€ {{ this.landing.fr_price_eur_sale2 }}</span>
                </span>
                <span>
                  <a
                    v-bind:href="
                      '/' +
                      $store.getters['getGlobalGame'] +
                      '/service/' +
                      this.landing.slug +
                      '&' +
                      this.landing.id
                    "
                    >
                  </a>
                </span>
              </div>
              <div
                class="price"
                v-else-if="$store.getters['getSelectedZone'] == 'us'"
              >
                <span v-if="this.landing.price_usd != 0">
                  $ {{ this.landing.price_usd }}
                  <span :class="{small_sku_font:(this.landing.price_usd_sale+''+this.landing.price_usd).split('').length>10}" v-if="this.landing.sales == 1">$ {{ this.landing.price_usd_sale }}</span>
                  <span :class="{small_sku_font:(this.landing.price_usd_sale2+''+this.landing.price_usd).split('').length>10}" v-if="this.landing.sales_2 == 1">$ {{ this.landing.price_usd_sale2 }}</span>

                </span>
                <span v-else>
                  $ {{ this.landing.fr_price_usd }}
                  <span :class="{small_sku_font:(this.landing.fr_price_usd_sale+''+this.landing.fr_price_usd).split('').length>10}" v-if="this.landing.sales == 1">$ {{ this.landing.fr_price_usd_sale }}</span>
                  <span :class="{small_sku_font:(this.landing.fr_price_usd_sale2+''+this.landing.fr_price_usd).split('').length>10}" v-if="this.landing.sales_2 == 1">$ {{ this.landing.fr_price_usd_sale2 }}</span>
                </span>
                <span>
                  <a
                    v-bind:href="
                      '/' +
                      $store.getters['getGlobalGame'] +
                      '/service/' +
                      this.landing.slug +
                      '&' +
                      this.landing.id
                    "
                    >
                    </a>
                </span>
              </div>
              <div class="BuyNow">
                <a v-bind:href="
                    '/' +
                    $store.getters['getGlobalGame'] +
                    '/service/' +
                    this.landing.slug +
                    '&' +
                    this.landing.id
                  "
                  style="text-decoration: none">Buy now</a>
              </div>
            </div>
          </div>
          <div class="swiper-slide" v-for="(item, index) in this.best_offers" :key="index" v-if="item.id != landing.id">
            <div class="bestImg">
              <a
                v-bind:href="
                  '/' +
                  $store.getters['getGlobalGame'] +
                  '/service/' +
                  item.slug +
                  '&' +
                  item.id
                "></a>
              <a
                v-bind:href="
                  '/' +
                  $store.getters['getGlobalGame'] +
                  '/service/' +
                  item.slug +
                  '&' +
                  item.id
                "
                class="popular_offer_item"
              >
                <img :src="apiImg + 'sku/' + item.image" :alt="item.title" />
                <div class="popular_offer_item_img_mask">
                  <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                    <g id=" Navigation / Arrow-up">
                    <rect id="Rectangle" opacity="0.8" x="18.834" y="8.33282" width="3.33333" height="23.3333" rx="1.66667" fill="white"/>
                    <path id="Path 94" d="M11.6792 21.178C11.0283 21.8289 9.97301 21.8289 9.32214 21.178C8.67127 20.5271 8.67127 19.4719 9.32214 18.821L19.3221 8.82098C19.9531 8.19002 20.9691 8.16794 21.6269 8.7709L31.6269 17.9376C32.3054 18.5596 32.3512 19.6138 31.7292 20.2924C31.1073 20.9709 30.053 21.0167 29.3744 20.3948L20.5508 12.3064L11.6792 21.178Z" fill="white"/>
                    </g>
                  </svg>
                  <div>View details</div>
                </div>
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
                  <!-- {{ item.sales_discount }}% OFF -->
                  SALE
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
            <div style="margin-top: 16px">
              <div class="bestbody">
                <div class="best_item_stars">
                  <!-- <span v-for="sub_item in item.stars" :key="sub_item">
                    <img v-if="sub_item == 's'" src="/landing_page/Active.svg" alt />
                    <img
                      v-if="sub_item == 'n'"
                      src="/landing_page/Disabled.svg"
                      alt
                    />
                  </span> -->
                  <span v-for="(sub_item, index) in 5" :key="index">
                    <svg v-if="sub_item <= Math.round(item.gl_rating )" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
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
                    <svg v-if="sub_item > Math.round(item.gl_rating )" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 -0.00012207L9.88854 6.11133H16L11.0557 9.88842L12.9443 15.9999L8 12.2228L3.05573 15.9999L4.94427 9.88842L0 6.11133H6.11146L8 -0.00012207Z" fill="#ACAFB0"/>
                    </svg>
                  </span>
                </div>
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

              <div class="price" v-if="$store.getters['getSelectedZone'] == 'eu'">
                <span v-if="item.price_eur != 0">
                  € {{ item.price_eur }}
                  <span :class="{small_sku_font:(item.price_eur_sale+''+item.price_eur).split('').length>10}" v-if="item.sales == 1">€ {{ item.price_eur_sale }}</span>
                  <span :class="{small_sku_font:(item.price_eur_sale2+''+item.price_eur).split('').length>10}"  v-if="item.sales_2 == 1">€ {{ item.price_eur_sale2 }}</span>
                </span>
                <span v-else>
                  € {{ item.fr_price_eur }}
                  <span :class="{small_sku_font:(item.fr_price_eur_sale+''+item.fr_price_eur).split('').length>10}" v-if="item.sales == 1">€ {{ item.fr_price_eur_sale }}</span>
                  <span :class="{small_sku_font:(item.fr_price_eur_sale2+''+item.fr_price_eur).split('').length>10}"  v-if="item.sales_2 == 1">€ {{ item.fr_price_eur_sale2 }}</span>
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
                    >
                  </a>
                </span>
              </div>
              <div
                class="price"
                v-else-if="$store.getters['getSelectedZone'] == 'us'"
              >
                <span v-if="item.price_usd != 0">
                  $ {{ item.price_usd }}
                  <span :class="{small_sku_font:(item.price_usd_sale+''+item.price_usd).split('').length>10}" v-if="item.sales == 1">$ {{ item.price_usd_sale }}</span>
                  <span :class="{small_sku_font:(item.price_usd_sale2+''+item.price_usd).split('').length>10}" v-if="item.sales_2 == 1">$ {{ item.price_usd_sale2 }}</span>

                </span>
                <span v-else>
                  $ {{ item.fr_price_usd }}
                  <span :class="{small_sku_font:(item.fr_price_usd_sale+''+item.fr_price_usd).split('').length>10}" v-if="item.sales == 1">$ {{ item.fr_price_usd_sale }}</span>
                  <span :class="{small_sku_font:(item.fr_price_usd_sale2+''+item.fr_price_usd).split('').length>10}" v-if="item.sales_2 == 1">$ {{ item.fr_price_usd_sale2 }}</span>
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
                    >
                    </a>
                </span>
              </div>
              <div class="BuyNow">
                <a v-bind:href="
                    '/' +
                    $store.getters['getGlobalGame'] +
                    '/service/' +
                    item.slug +
                    '&' +
                    item.id
                  "
                  style="text-decoration: none">Buy now</a>
              </div>
            </div>
          </div>
        </div>
        <div class="straightNavL swiper-button-disabled">
          <div style="left: 0; top: 50%">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="13" viewBox="0 0 21 13" fill="none">
              <path d="M20 6.5H1M20 6.5L14.5 12M20 6.5L14.5 1" stroke="#C24DFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div class="straightNavR">
          <div style="right: 0; top: 50%">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="13" viewBox="0 0 21 13" fill="none">
            <path d="M20 6.5H1M20 6.5L14.5 12M20 6.5L14.5 1" stroke="#C24DFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import moment from "moment";
export default {
    props: ["game_id",],
    data() {
        return {
            landing: "",
            best_offers: [],
            apiImg: this.$store.getters["getApiImgUrl"],
            apiUrl: this.$store.getters["getApiUrl"],
            // apiUrl: 'https://api.cakeboost.com/api/v14887401369/api.php/records/',
            globalApi: this.$store.getters["getGlobalApi"],
        }
    },
    mounted() {
      try {
        this.best_offers = JSON.parse(localStorage.getItem("best_offers"))[this.game_id] || [];
        this.compare_best_offers();
      } catch(e) {
        this.best_offers = [];
      }

      if(this.best_offers.length === 0) {
        this.get_best_offers();
      }
      this.load_sku()
      // console.log(this.best_offers, "BEST OFFERS")
    },
    methods: {
        async compare_best_offers() {
            let response_data_sku_sales = await this.$axios
            .$get(
            this.apiUrl +
                "sku?order=ordr,asc&filter=hot,eq,1&size=8&filter=status,eq,1&filter=game,eq," +
                this.game_id
            )
            .then((data) => {
              let best_offers_updated = data.records;
              if(JSON.stringify(best_offers_updated) !== JSON.stringify(this.best_offers)) {
                  console.log("UPDATED BEST OFFERS")
                  this.best_offers = best_offers_updated;
                  var allBestOffers = JSON.parse(localStorage.getItem("best_offers")) || {};

                  allBestOffers[this.game_id] = this.best_offers
                  localStorage.setItem("best_offers", JSON.stringify(allBestOffers))
                }
            })
        },

        set_salestime_sku(time) {
            let berlin_m = moment().tz("Europe/Berlin").format("YYYY-MM-DD HH:mm:ss");
            let berlin_d = moment().tz("Europe/Berlin").format("YYYY-MM-DD");
            let temp_cedt = moment.duration(
            moment(time).diff(moment(berlin_m))
            );
            if (temp_cedt.valueOf() > 0) {
            temp_cedt =
                (temp_cedt.days() > 0 ? temp_cedt.days() + ' day ' : '') +
                (temp_cedt.hours() > 9 ? temp_cedt.hours() : '0' + temp_cedt.hours()) +
                ":" +
                (temp_cedt.minutes() > 9 ? temp_cedt.minutes() : '0' + temp_cedt.minutes()) +
                ":" +
                ( temp_cedt.seconds() > 9 ? temp_cedt.seconds() : '0' + temp_cedt.seconds());
            return temp_cedt;
            } else {
            return null;
            }
        },
        load_sku() {
            let OfferOfDay = {};
            let response_data_sku_day = this.$axios
            .$get(this.apiUrl + "top_services?filter=game_id,eq," + this.game_id)
            .then((data) => {
                if (data.records.length > 0) {
                let response_data_sku_day_ = this.$axios
                    .$get(this.apiUrl + "sku/" + data.records[0].offer_id)
                    .then((data_sku) => {

                    OfferOfDay = data_sku;
                    OfferOfDay['end_date'] = data.records[0].end_date;
                    OfferOfDay['stars'] = [];

                    if ( OfferOfDay.gl_rating == 0) {
                        OfferOfDay.stars = ["n", "n", "n", "n", "n"];
                    } else {
                        for (let j = 0; j < OfferOfDay.gl_rating; j++) {
                        OfferOfDay.stars.push("s");
                        }
                        for (
                        let j = 0;
                        Math.floor(j < 5 - OfferOfDay.gl_rating);
                        j++
                        ) {
                        OfferOfDay.stars.push("n");
                        }
                    }
                    this.landing = OfferOfDay;

                    this.$forceUpdate();
                    });
                }
            });
        },
        async get_best_offers() {
            let response_data_sku_sales = await this.$axios
            .$get(
            this.apiUrl +
                "sku?order=ordr,asc&filter=hot,eq,1&size=8&filter=status,eq,1&filter=game,eq," +
                this.game_id
            )
            .then((data) => {
            
            this.best_offers = data.records;
            var allBestOffers = JSON.parse(localStorage.getItem("best_offers")) || {};

            allBestOffers[this.game_id] = this.best_offers
            localStorage.setItem("best_offers", JSON.stringify(allBestOffers))

            // if (this.best_offers.length < 8) {
            //   let response_data_sku_sales = this.$axios
            //     .$get(
            //       this.apiUrl +
            //         "sku?order=ordr,asc&filter=sales_2,eq,1&size=" +
            //         (8 - this.best_offers.length) +
            //         "&filter=status,eq,1&filter=game,eq," +
            //         this.game_id
            //     )
            //     .then((data) => {
            //       this.best_offers = this.best_offers.concat(data.records);
            //       // for (let i = 0; i < this.best_offers.length; i++) {
            //       //   this.best_offers[i].stars = [];
            //       //   if (this.best_offers[i].gl_rating == 0) {
            //       //     this.best_offers[i].stars = ["n", "n", "n", "n", "n"];
            //       //   } else {
            //       //     for (let j = 0; j < this.best_offers[i].gl_rating; j++) {
            //       //       this.best_offers[i].stars.push("s");
            //       //     }
            //       //     for (
            //       //       let j = 0;
            //       //       j < Math.floor(5 - this.best_offers.gl_rating);
            //       //       j++
            //       //     ) {
            //       //       this.best_offers.stars.push("n");
            //       //     }
            //       //   }
            //       // }
            //     });
            // }
            });
        },
    }
}

</script>