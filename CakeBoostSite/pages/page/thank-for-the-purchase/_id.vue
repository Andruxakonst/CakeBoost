<template>
  <div class="content">
    <div class="thanksBanner">
      <div>
        <img src="/imgSmiles/Happy purple.png" alt />
      </div>
      <div>Thank you for the purchase!</div>
    </div>
    <div class="orderItem thanksFopPurscheTable">
      <div class="orderId">
        Order №{{order.id}}
        <span>{{cart.cart_items.length}} items</span>
      </div>
      <table>
        <thead>
          <tr>
            <td>Photo</td>
            <td>Name</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Total</td>
            <td>Options &amp; Comment</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in this.cart.cart_items" :key="item">
            <td>
              <img
                :src="apiImg+'sku/'+ item.product.image"
                width="96px"
                height="96px"
                style="object-fit: cover;border:1px solid #D5D7D7;"
                alt
              />
            </td>
            <td v-html="item.product.title"></td>
            <td
              v-if="$store.getters['getSelectedZone']=='us'"
            >{{(parseFloat(item.product.price_usd) + parseFloat(item.option_total_us))}}$</td>
            <td
              v-if="$store.getters['getSelectedZone']=='eu'"
            >{{(parseFloat(item.product.price_eur) + parseFloat(item.option_total_eu))}}€</td>
            <td>{{item.count}}</td>
            <td
              v-if="$store.getters['getSelectedZone']=='us'"
            >{{(parseFloat(item.product.price_usd) + parseFloat(item.option_total_us))* parseFloat(item.count)}}$</td>
            <td
              v-if="$store.getters['getSelectedZone']=='eu'"
            >{{(parseFloat(item.product.price_eur) + parseFloat(item.option_total_eu))* parseFloat(item.count)}}€</td>
            <td>
              <span v-for="subitem in item.subcheckbox_list" :key="subitem.count">{{subitem.title}}</span>

              <span
                v-for="subitem in item.checkbox_list"
                :key="subitem.count"
              >{{subitem.array.title}}</span>

              <span
                v-for="subitem in item.single_slider"
                :key="subitem.title"
              >{{subitem.title}} : {{subitem.real_value}}</span>

              <span
                v-for="subitem in item.double_slider"
                :key="subitem.title"
              >{{subitem.slider_title}} : {{subitem.title.replace(';',' - ')}}</span>

              <span
                v-for="subitem in item.calc"
                :key="subitem.title"
              >{{subitem.array.title}} : {{parseFloat(subitem.array.min) + parseFloat(parseFloat(subitem.array.step) * parseFloat(subitem.count))}}</span>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="youPurschaseForm mobileThanksItem">
        <div class="youPurschaseFormItem" v-for="item in this.cart.cart_items" :key="item">
          <div>
            <div>
              <img :src="apiImg+'sku/'+ item.product.image" alt />
            </div>
            <div v-html="item.product.title"></div>
          </div>
          <div>
            <div v-for="subitem in item.subcheckbox_list" :key="subitem.count" v-html="subitem.title"></div>

            <div v-for="subitem in item.checkbox_list" :key="subitem.count" v-html="subitem.array.title"></div>

            <div
              v-for="subitem in item.single_slider"
              :key="subitem.title"
            >{{subitem.title}} : {{subitem.real_value}}</div>

            <div
              v-for="subitem in item.double_slider"
              :key="subitem.title"
            >{{subitem.slider_title}} : {{subitem.title.replace(';',' - ')}}</div>

            <div
              v-for="subitem in item.calc"
              :key="subitem.title"
            >{{subitem.array.title}} : {{parseFloat(subitem.array.min) + parseFloat(parseFloat(subitem.array.step) * parseFloat(subitem.count))}}</div>
          </div>
          <div class="purschaseFormItemBottom">
            <div>x{{item.count}}</div>
            <div>
              <span
                v-if="$store.getters['getSelectedZone']=='us'"
              >{{(parseFloat(item.product.price_usd) + parseFloat(item.option_total_us))* parseFloat(item.count)}}$</span>
              <span
                v-if="$store.getters['getSelectedZone']=='eu'"
              >{{(parseFloat(item.product.price_eur) + parseFloat(item.option_total_eu))* parseFloat(item.count)}}€</span>
              <span
                v-if="$store.getters['getSelectedZone']=='us'"
              >{{(parseFloat(item.product.price_usd) + parseFloat(item.option_total_us))* parseFloat(item.count)}}$</span>
              <span
                v-if="$store.getters['getSelectedZone']=='eu'"
              >{{(parseFloat(item.product.price_eur) + parseFloat(item.option_total_eu))* parseFloat(item.count)}}€</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="thanksPurschaseTotal">
      <div class="purschaseTotalCount">
        <span>Total:</span>
        <span v-if="this.$store.getters['getSelectedZone'] == 'us' ">
          <span v-if="cart.sales">{{cart.total_sale_us}}$</span>
          {{cart.total_price_us}}$
        </span>
        <span v-if="this.$store.getters['getSelectedZone'] == 'eu' ">
          <span v-if="cart.sales">{{cart.total_sale_eu}}$</span>
          {{cart.total_price_eu}}$
        </span>
      </div>
      <a v-bind:href="'/'+$store.getters['getGlobalGame']+'/catalog'">Go back to catalog</a>
    </div>
    <div class="contactUs">
      <div>Contact us</div>
      <div>
        <a href>
          <img src="/img(ColorSochialLogo)/Skype.png" alt />
        </a>
        <a href>
          <img src="/img(ColorSochialLogo)/Discord.png" alt />
        </a>
        <a href>
          <img src="/img(ColorSochialLogo)/WhatsApp.png" alt />
        </a>
        <a href>
          <img src="/img(ColorSochialLogo)/Telegram.png" alt />
        </a>
        <a href>
          <img src="/img(ColorSochialLogo)/Mail.png" alt />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import breadcrumbs from "~/components/breadcrumbs.vue";
export default {
  head: {
    title: "CakeBoost.com",
  },
  components: {
    breadcrumbs,
  },
  data() {
    return {
      apiUrl: this.$store.getters["getApiUrl"],
      apiImg: this.$store.getters["getApiImgUrl"],
      order: "",
      cart: {
        cart_items: [],
        sales: false,
        total_price_eu: 0,
        total_price_us: 0,
        total_sale_eu: 0,
        total_sale_us: 0,
      },
    };
  },
  created() {},
  mounted() {
    this.get_order();
    fbq('track', 'ViewContent');
  },
  async asyncData({ $axios, store }) {
    let apiUrl = store.getters["getApiUrl"];
    return {};
  },
  methods: {
    async get_order() {
      let temp_order_id = this.$route.params.id;
      let response = await this.$axios
        .$get(this.apiUrl + "orders/" + temp_order_id)
        .then((data) => {
          this.order = data;
          this.cart = JSON.parse(data.cart);
        });
    },
    get_access() {
      let name = "access_t";
      let matches = document.cookie.match(
        new RegExp(
          "(?:^|; )" +
            name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
            "=([^;]*)"
        )
      );
      let temp = matches ? decodeURIComponent(matches[1]) : undefined;
      if (temp == undefined) {
      } else {
        return temp;
      }
    },
    get_refresh() {
      let name_r = "refresh_t";
      let matches_r = document.cookie.match(
        new RegExp(
          "(?:^|; )" +
            name_r.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
            "=([^;]*)"
        )
      );
      let temp_r = matches_r ? decodeURIComponent(matches_r[1]) : undefined;
      return temp_r;
    },
    set_cookie(zone) {
      this.deleteCookie("zone");
      let name = "zone";
      let value = zone;
      this.setCookie(name, value);
    },
    getCookie() {
      let name = "zone";
      let matches = document.cookie.match(
        new RegExp(
          "(?:^|; )" +
            name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
            "=([^;]*)"
        )
      );
      this.zone_pick = matches ? decodeURIComponent(matches[1]) : undefined;
      if (this.zone_pick == undefined) {
        this.zone_pick = "us";
      }
      this.$store.commit("setSelectedZone", this.zone_pick);
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

