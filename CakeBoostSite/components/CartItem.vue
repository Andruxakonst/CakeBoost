<template>
  <div v-if="type == 'offer_of_day'" class="top_services_item offer_of_day">
    <div class="offers_of_day_date">
      <span>Offer of the day</span> <span> &bull;</span>
      <span id="sku_deadline">{{ set_salestime_skus(item.end_date) }}</span>
      <b id="sku_deadline2" style="display: none !important">{{
        set_salestime_skus(item.end_date)
      }}</b>
    </div>
    <a
      :href="choosen_filter_game_slug + '/service/' + item.slug + '&' + item.id"
      class="top_services_item_img"
    >
      <img :src="apiImg + 'sku/' + item.image" :alt="item.menu_name" />
      <div class="top_services_item_img_mask">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="41"
          height="40"
          viewBox="0 0 41 40"
          fill="none"
        >
          <g id=" Navigation / Arrow-up">
            <rect
              id="Rectangle"
              opacity="0.8"
              x="18.834"
              y="8.33282"
              width="3.33333"
              height="23.3333"
              rx="1.66667"
              fill="white"
            />
            <path
              id="Path 94"
              d="M11.6792 21.178C11.0283 21.8289 9.97301 21.8289 9.32214 21.178C8.67127 20.5271 8.67127 19.4719 9.32214 18.821L19.3221 8.82098C19.9531 8.19002 20.9691 8.16794 21.6269 8.7709L31.6269 17.9376C32.3054 18.5596 32.3512 19.6138 31.7292 20.2924C31.1073 20.9709 30.053 21.0167 29.3744 20.3948L20.5508 12.3064L11.6792 21.178Z"
              fill="white"
            />
          </g>
        </svg>
        <div>View details</div>
      </div>
    </a>
    <a
      :href="choosen_filter_game_slug + '/service/' + item.slug + '&' + item.id"
      class="top_services_item_title"
      v-html="item.menu_name"
    >
    </a>
    <div class="top_services_item_price">
      <span
        v-if="item.price_eur != 0 && $store.getters['getSelectedZone'] == 'eu'"
      >
        <span> €{{ item.price_eur }}</span>
        <span v-if="item.sales == 1">€{{ item.price_eur_sale }}</span>
        <span v-if="item.sales_2 == 1">€{{ item.price_eur_sale2 }}</span>
      </span>
      <span
        v-else-if="
          item.price_eur == 0 && $store.getters['getSelectedZone'] == 'eu'
        "
      >
        <span>€{{ item.fr_price_eur }}</span>
        <span v-if="item.sales == 1">€{{ item.fr_price_eur_sale }}</span>
        <span v-if="item.sales_2 == 1">€{{ itemfr_price_eur_sale2 }}</span>
      </span>
      <span
        v-if="item.price_usd != 0 && $store.getters['getSelectedZone'] == 'us'"
      >
        <span> ${{ item.price_usd }}</span>
        <span v-if="item.sales == 1">${{ item.price_usd_sale }}</span>
        <span v-if="item.sales_2 == 1">${{ item.price_usd_sale2 }}</span>
      </span>
      <span
        v-else-if="
          item.price_usd == 0 && $store.getters['getSelectedZone'] == 'us'
        "
      >
        <span>${{ item.fr_price_usd }}</span>
        <span v-if="item.sales == 1">${{ item.fr_price_usd_sale }}</span>
        <span v-if="item.sales_2 == 1">${{ item.fr_price_usd_sale2 }}</span>
      </span>
      <div class="top_services_item_stars">
        <span v-for="(sub_item, index) in item.stars" :key="index">
          <svg
            v-if="sub_item == 's'"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M16 5.85871H9.88727L8.00557 -0.000732422L6.11274 5.85871L0 5.84749L4.94363 9.47316L3.0508 15.3326L7.99443 11.7069L12.9381 15.3326L11.0564 9.47316L16 5.85871Z"
              fill="white"
            />
            <path
              d="M11.3333 10.5185L10.9274 9.33258L8 11.3326L11.3333 10.5185Z"
              fill="#828688"
            />
          </svg>
          <svg
            v-if="sub_item == 'n'"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M8 -0.000610352L9.88854 6.11085H16L11.0557 9.88793L12.9443 15.9994L8 12.2223L3.05573 15.9994L4.94427 9.88793L0 6.11085H6.11146L8 -0.000610352Z"
              fill="#DA94FE"
            />
          </svg>
        </span>
      </div>
    </div>
    <a
      :href="choosen_filter_game_slug + '/service/' + item.slug + '&' + item.id"
      class="top_services_item_href"
    >
      Buy now
    </a>
  </div>
  <div class="top_services_item" v-else-if="type == 'hot_offers'">
    <div class="top_services_item_offers">
      <div
        class="top_services_item_hot"
        v-if="item.sale == 1 || item.sales_2 == 1"
      >
        SALE
      </div>
      <div class="top_services_item_sale" v-if="item.hot == 1">HOT</div>
    </div>
    <div></div>
    <a
      :href="choosen_filter_game_slug + '/service/' + item.slug + '&' + item.id"
      class="top_services_item_img"
    >
      <img :src="apiImg + 'sku/' + item.image" :alt="item.menu_name" />
      <div class="top_services_item_img_mask">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="41"
          height="40"
          viewBox="0 0 41 40"
          fill="none"
        >
          <g id=" Navigation / Arrow-up">
            <rect
              id="Rectangle"
              opacity="0.8"
              x="18.834"
              y="8.33282"
              width="3.33333"
              height="23.3333"
              rx="1.66667"
              fill="white"
            />
            <path
              id="Path 94"
              d="M11.6792 21.178C11.0283 21.8289 9.97301 21.8289 9.32214 21.178C8.67127 20.5271 8.67127 19.4719 9.32214 18.821L19.3221 8.82098C19.9531 8.19002 20.9691 8.16794 21.6269 8.7709L31.6269 17.9376C32.3054 18.5596 32.3512 19.6138 31.7292 20.2924C31.1073 20.9709 30.053 21.0167 29.3744 20.3948L20.5508 12.3064L11.6792 21.178Z"
              fill="white"
            />
          </g>
        </svg>
        <div>View details</div>
      </div>
    </a>
    <a
      :href="choosen_filter_game_slug + '/service/' + item.slug + '&' + item.id"
      class="top_services_item_title"
      v-html="item.menu_name"
    >
    </a>
    <div class="top_services_item_price">
      <span
        v-if="item.price_eur != 0 && $store.getters['getSelectedZone'] == 'eu'"
      >
        <span> €{{ item.price_eur }}</span>
        <span v-if="item.sales == 1">€{{ item.price_eur_sale }}</span>
        <span v-if="item.sales_2 == 1">€{{ item.price_eur_sale2 }}</span>
      </span>
      <span
        v-else-if="
          item.price_eur == 0 && $store.getters['getSelectedZone'] == 'eu'
        "
      >
        <span>€{{ item.fr_price_eur }}</span>
        <span v-if="item.sales == 1">€{{ item.fr_price_eur_sale }}</span>
        <span v-if="item.sales_2 == 1">€{{ item.fr_price_eur_sale2 }}</span>
      </span>
      <span
        v-if="item.price_usd != 0 && $store.getters['getSelectedZone'] == 'us'"
      >
        <span> ${{ item.price_usd }}</span>
        <span v-if="item.sales == 1">${{ item.price_usd_sale }}</span>
        <span v-if="item.sales_2 == 1">${{ item.price_usd_sale2 }}</span>
      </span>
      <span
        v-else-if="
          item.price_usd == 0 && $store.getters['getSelectedZone'] == 'us'
        "
      >
        <span>${{ item.fr_price_usd }}</span>
        <span v-if="item.sales == 1">${{ item.fr_price_usd_sale }}</span>
        <span v-if="item.sales_2 == 1">${{ item.fr_price_usd_sale2 }}</span>
      </span>
      <div class="top_services_item_stars">
        <span v-for="(sub_item, index) in item.stars" :key="index">
          <svg
            v-if="sub_item == 's'"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <g clip-path="url(#clip0)">
              <path
                d="M16 5.85932H9.88727L8.00557 -0.00012207L6.11274 5.85932L0 5.8481L4.94363 9.47377L3.0508 15.3332L7.99443 11.7075L12.9381 15.3332L11.0564 9.47377L16 5.85932Z"
                fill="#00B67A"
              />
              <path
                d="M11.3333 10.5191L10.9274 9.33319L8 11.3332L11.3333 10.5191Z"
                fill="#005128"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(0 -0.00012207)"
                />
              </clipPath>
            </defs>
          </svg>
          <svg
            v-if="sub_item == 'n'"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M8 -0.00012207L9.88854 6.11133H16L11.0557 9.88842L12.9443 15.9999L8 12.2228L3.05573 15.9999L4.94427 9.88842L0 6.11133H6.11146L8 -0.00012207Z"
              fill="#ACAFB0"
            />
          </svg>
        </span>
      </div>
    </div>
    <a
      :href="choosen_filter_game_slug + '/service/' + item.slug + '&' + item.id"
      class="top_services_item_href"
    >
      Buy now
    </a>
  </div>
</template>

<script>
import moment from "moment";
import momenttz from "moment-timezone";

import "@/static/css/cart_item.css";

export default {
  name: "CartItem",
  props: [
    "type",
    "item",
    "choosen_filter_game",
    "choosen_filter_game_slug",
    "main_prods"
  ],
  data() {
    return {
      apiImg: this.$store.getters["getApiImgUrl"],
    }
  },
  methods: {
    set_salestime_skus(time) {
      let berlin_m = moment()
        .tz("Europe/Berlin")
        .format("YYYY-MM-DD HH:mm:ss");
      let temp_cedt = moment.duration(
        moment(time + " 23:59:59").diff(moment(berlin_m))
      );
      if (temp_cedt.valueOf() > 0) {
        temp_cedt =
          temp_cedt.hours() +
          ":" +
          temp_cedt.minutes() +
          ":" +
          temp_cedt.seconds();
        return temp_cedt;
      } else {
        return null;
      }
    }
  }
};
</script>
