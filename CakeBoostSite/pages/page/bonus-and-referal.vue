<template>
  <div class="content">
     <div class="popUpMask" v-if="if_buy_pack" @click.self="if_buy_pack=false" v-bind:class="{ active_card: if_buy_pack }">
      <div
        class="addpackToCard"
        v-if="if_buy_pack"
        v-bind:class="{ active_card_popup: if_buy_pack }"
      >
        <div class="closePopUp">
          <img
            src="/img/Close.svg"
            class="closePopUpImg"
            @click="if_buy_pack = false"
            alt
          />
        </div>
         <div class="buy_pack_title">
          <div>Choose a payment system</div>
          <div>{{choosen_pack.title}}</div>
           <div class="paymentSystemItems">
              <div
                v-for="item in this.payments"
                :key="item.id"
                @click="payment_type = item.id"
                :class="{ active: payment_type == item.id }"
              >
                <img :src="apiImg + 'gicons/' + item.img" alt />
              </div>
            </div>
            <div style="text-align:center;">
            <button @click="send_payment_pack()">Buy</button>
            </div>
        </div>
      </div>
    </div>
    <breadcrumbs />
    <div class="bonusAndReferal">
      <div> <h1>Bonus &amp; Referal system</h1>
        <div>System which allows you to buy with benefits</div>
      </div>
      <div>
        <ul class="policyUl">
          <li v-if="content_page.block_1.tilte">
            <a href="#p1">
              <img src="/img/Ancor Link.png" alt />
              {{content_page.block_1.tilte}}
            </a>
          </li>
          <li v-if="content_page.block_1.subtilte">
            <a href="#p2">
              <img src="/img/Ancor Link.png" alt />
              {{content_page.block_1.subtilte}}
            </a>
          </li>
          <li v-if="content_page.block_2.tilte">
            <a href="#p3">
              <img src="/img/Ancor Link.png" alt />
              {{content_page.block_2.tilte}}
            </a>
          </li>
          <li v-if="content_page.block_3.tilte">
            <a href="#p4">
              <img src="/img/Ancor Link.png" alt />
              {{content_page.block_3.tilte}}
            </a>
          </li>
          <li v-if="content_page.block_4.tilte">
            <a href="#p5">
              <img src="/img/Ancor Link.png" alt />
              {{content_page.block_4.tilte}}
            </a>
          </li>
          <li v-if="content_page.block_ref.tilte">
            <a href="#p6">
              <img src="/img/Ancor Link.png" alt />
              {{content_page.block_ref.tilte}}
            </a>
          </li>
        </ul>
      </div>
      <div class="bonusSystem">
        <p id="p1"></p>
        <div> <h2>{{content_page.block_1.tilte}}</h2></div>
        <div class="txtAlignCenter">
          <img width="100%" :src="apiImg + 'coins/' + content_page.block_1.img" alt />
        </div>
        <p id="p2"></p>
        <h3>{{content_page.block_1.subtilte}}</h3>
        <p v-html="content_page.block_1.desc">
        </p>

        <p id="p3"></p>
        <h3>{{content_page.block_2.tilte}}</h3>
        <p v-html="content_page.block_2.desc">

        </p>

       <div style="text-align: center;" v-if="!this.$store.getters['getUserLoginCheck'].user_check_login">
          <button class="registerAndGet" @click="$store.commit('set_global_reg_popup_check', true)">
            <img src="/img(headerLogo)/Account.png" alt /> Register and get 300 Cc now
         </button>
       </div>
        <div style="text-align: center;" v-else>
          <a class="registerAndGet" :href="'/page/account/' + this.$store.getters['getUserLoginCheck'].id">
            <img src="/img(headerLogo)/Account.png" alt /> Register and get 300 Cc now
         </a>
       </div>

        <p id="p4"></p>
        <h3>{{content_page.block_3.tilte}}</h3>
        <p v-html="content_page.block_3.desc">

        </p>

        <!--div class="howEarnHref">
          <div>
            +XXX
            <img src="/img/CakeCoin.png" alt />
          </div>
          <div>
            <a href>
              Learn more about
              <br />Reward Program
            </a>
          </div>
        </!--div-->
        <div class="moneyRate" v-if="$store.getters['getSelectedZone'] == 'us'">100 CakeCoin = {{coin_settings.prs_d * 100}} USD</div>
        <div class="moneyRate" v-if="$store.getters['getSelectedZone'] == 'eu'">100 CakeCoin = {{coin_settings.prs_e * 100}} EUR</div>
        <p id="p5"></p>
        <h3>{{content_page.block_4.tilte}}</h3>
        <p v-html="content_page.block_4.desc">

        </p>

        <!-- <button class="registerAndGet" @click="$store.commit('set_global_login_popup_check', true)">
          <img src="/img(headerLogo)/Account.png"   alt /> Register and get 300 Cc now
        </button> -->


      </div>
      <div class="cardPack" style="margin-top:50px">
        <div>
          <div>
            <img :src="apiImg + 'sku/' + packs.first.image" alt />
          </div>
          <div class="cardTitle">
            <div>{{ packs.first.title }}</div>
            <div>{{ packs.first.descr }}</div>
          </div>
          <div class="separator"></div>
          <div class="cakeCoins">{{ packs.first.quant_coins }} Cc</div>
          <div
            v-if="
              packs.first.sales == 1 &&
              $store.getters['getSelectedZone'] == 'us'
            "
            class="price"
          >
            <div>{{ packs.first.price_usd }} USD</div>
            <div>{{ packs.first.price_usd_sale }} USD</div>
          </div>
          <div
            v-if="
              packs.first.sales_2 == 1 &&
              $store.getters['getSelectedZone'] == 'us'
            "
            class="price"
          >
            <div>{{ packs.first.price_usd }} USD</div>
            <div>{{ packs.first.price_usd_sale2 }} USD</div>
          </div>
          <div
            v-if="
              packs.first.sales_2 == 0 &&
              packs.first.sales == 0 &&
              $store.getters['getSelectedZone'] == 'us'
            "
            class="price"
          >
            <div>{{ packs.first.price_usd }} USD</div>
          </div>

          <div
            v-if="
              packs.first.sales == 1 &&
              $store.getters['getSelectedZone'] == 'eu'
            "
            class="price"
          >
            <div>{{ packs.first.price_eur }} EUR</div>
            <div>{{ packs.first.price_eur_sale }} EUR</div>
          </div>
          <div
            v-if="
              packs.first.sales_2 == 1 &&
              $store.getters['getSelectedZone'] == 'eu'
            "
            class="price"
          >
            <div>{{ packs.first.price_eur }} EUR</div>
            <div>{{ packs.first.price_eur_sale2 }} EUR</div>
          </div>
          <div
            v-if="
              packs.first.sales_2 == 0 &&
              packs.first.sales == 0 &&
              $store.getters['getSelectedZone'] == 'eu'
            "
            class="price"
          >
            <div>{{ packs.first.price_eur }} EUR</div>
          </div>
          <div v-if="
                  this.$store.getters['getUserLoginCheck'].user_check_login
                ">
            <button   @click="buy_pack(packs.first)">Buy now</button>
          </div>
          <div v-else>
            <button   @click="$store.commit('set_global_login_popup_check', true)">Buy now</button>
          </div>
        </div>
        <div class="popular">
          <div class="polularBanner">Most popular</div>
          <div>
            <img :src="apiImg + 'sku/' + packs.second.image" alt />
          </div>
          <div class="cardTitle">
            <div>{{ packs.second.title }}</div>
            <div>{{ packs.second.descr }}</div>
          </div>
          <div class="separator"></div>
          <div class="cakeCoins">{{ packs.second.quant_coins }} Cc</div>
          <div
            v-if="
              packs.second.sales == 1 &&
              $store.getters['getSelectedZone'] == 'us'
            "
            class="price"
          >
            <div>{{ packs.second.price_usd }} USD</div>
            <div>{{ packs.second.price_usd_sale }} USD</div>
          </div>
          <div
            v-if="
              packs.second.sales_2 == 1 &&
              $store.getters['getSelectedZone'] == 'us'
            "
            class="price"
          >
            <div>{{ packs.second.price_usd }} USD</div>
            <div>{{ packs.second.price_usd_sale2 }} USD</div>
          </div>
          <div
            v-if="
              packs.second.sales_2 == 0 &&
              packs.second.sales == 0 &&
              $store.getters['getSelectedZone'] == 'us'
            "
            class="price"
          >
            <div>{{ packs.second.price_usd }} USD</div>
          </div>

          <div
            v-if="
              packs.second.sales == 1 &&
              $store.getters['getSelectedZone'] == 'eu'
            "
            class="price"
          >
            <div>{{ packs.second.price_eur }} EUR</div>
            <div>{{ packs.second.price_eur_sale }} EUR</div>
          </div>
          <div
            v-if="
              packs.second.sales_2 == 1 &&
              $store.getters['getSelectedZone'] == 'eu'
            "
            class="price"
          >
            <div>{{ packs.second.price_eur }} EUR</div>
            <div>{{ packs.second.price_eur_sale2 }} EUR</div>
          </div>
          <div
            v-if="
              packs.second.sales_2 == 0 &&
              packs.second.sales == 0 &&
              $store.getters['getSelectedZone'] == 'eu'
            "
            class="price"
          >
            <div>{{ packs.second.price_eur }} EUR</div>
          </div>
          <div>
            <div v-if="
                  this.$store.getters['getUserLoginCheck'].user_check_login
                ">
            <button   @click="buy_pack(packs.first)">Buy now</button>
          </div>
          <div v-else>
            <button   @click="$store.commit('set_global_login_popup_check', true)">Buy now</button>
          </div>
          </div>
        </div>
        <div>
          <div>
            <img :src="apiImg + 'sku/' + packs.third.image" alt />
          </div>
          <div class="cardTitle">
            <div>{{ packs.third.title }}</div>
            <div>{{ packs.third.descr }}</div>
          </div>
          <div class="separator"></div>
          <div class="cakeCoins">{{ packs.third.quant_coins }} Cc</div>
          <div
            v-if="
              packs.third.sales == 1 &&
              $store.getters['getSelectedZone'] == 'us'
            "
            class="price"
          >
            <div>{{ packs.third.price_usd }} USD</div>
            <div>{{ packs.third.price_usd_sale }} USD</div>
          </div>
          <div
            v-if="
              packs.third.sales_2 == 1 &&
              $store.getters['getSelectedZone'] == 'us'
            "
            class="price"
          >
            <div>{{ packs.third.price_usd }} USD</div>
            <div>{{ packs.third.price_usd_sale2 }} USD</div>
          </div>
          <div
            v-if="
              packs.third.sales_2 == 0 &&
              packs.third.sales == 0 &&
              $store.getters['getSelectedZone'] == 'us'
            "
            class="price"
          >
            <div>{{ packs.third.price_usd }} USD</div>
          </div>

          <div
            v-if="
              packs.third.sales == 1 &&
              $store.getters['getSelectedZone'] == 'eu'
            "
            class="price"
          >
            <div>{{ packs.third.price_eur }} EUR</div>
            <div>{{ packs.third.price_eur_sale }} EUR</div>
          </div>
          <div
            v-if="
              packs.third.sales_2 == 1 &&
              $store.getters['getSelectedZone'] == 'eu'
            "
            class="price"
          >
            <div>{{ packs.third.price_eur }} EUR</div>
            <div>{{ packs.third.price_eur_sale2 }} EUR</div>
          </div>
          <div
            v-if="
              packs.third.sales_2 == 0 &&
              packs.third.sales == 0 &&
              $store.getters['getSelectedZone'] == 'eu'
            "
            class="price"
          >
            <div>{{ packs.third.price_eur }} EUR</div>
          </div>
          <div>
            <div v-if="
                  this.$store.getters['getUserLoginCheck'].user_check_login
                ">
            <button   @click="buy_pack(packs.first)">Buy now</button>
          </div>
          <div v-else>
            <button   @click="$store.commit('set_global_login_popup_check', true)">Buy now</button>
          </div>
          </div>
        </div>
      </div>
      <h2
          class="cardPackTitle"
        >{{content_page.block_coins.tilte}}</h2>
      <div class="bonusSystem">
        <div
          class="cardPackBottom"
          v-html="content_page.block_coins.desc"
        >

        </div>
      </div>
      <div class="bonusSystem referalSystem">
        <div></div>
        <div> <h2>{{content_page.block_ref.tilte}}</h2></div>
        <div class="txtAlignCenter">
          <img width="100%" :src="apiImg + 'coins/' + content_page.block_ref.img" alt />
        </div>
        <p id="p6"></p>
        <h3>{{content_page.block_ref.subtilte}}</h3>
        <p v-html="content_page.block_ref.desc">World of Warcraft (EU/US), WOW, is an incredibly popular MMORPG, developed by Blizzard Entertainment. Gamers are given the opportunity to take part in the fate of the magical universe of Warcraft. The idea and mechanics of the gameplay evolve the tradition of earlier representatives of the series, where each gamer also controls one character and interacts with other gamers in an open virtual world. The game was released on November 23, 2004.</p>
        <div style="text-align: center; margin-top: 24px;">
          <!-- <button
            class="registerAndGet"
            style="margin-top: 16px;"
            @click="$store.commit('set_global_login_popup_check', true)"
          >Register and be a partner of referal system</button> -->
          <a
            href="/page/signup"
            class="registerAndGet"
            style="margin-top: 16px; text-decoration:none"
            v-if="!this.$store.getters['getUserLoginCheck'].user_check_login"
          >Get the referral link

          <!-- {{ this.$store.getters['getUserLoginCheck'].id }} -->
          </a>
          <a
            @click="tabChange"
            :href="'/page/account/' + this.$store.getters['getUserLoginCheck'].id"
            class="registerAndGet"
            style="margin-top: 16px; text-decoration:none"
            v-if="this.$store.getters['getUserLoginCheck'].user_check_login"
          >Get the referral link
          </a>
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
      title:'Bonus and referal | Cakeboost',
      meta: [
        {
          hid: "description",
          name: "description",
          content: '',
        },
      ],
       script: [
        {
          src: "https://js.stripe.com/v3/",
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href:'https://cakeboost.com'+this.$route.path
        }
      ],
    };
  },
  components: {
    breadcrumbs
  },
  data() {
    return {
      apiUrl: this.$store.getters["getApiUrl"],
      apiImg: this.$store.getters["getApiImgUrl"],
      globalApi: this.$store.getters["getGlobalApi"],
      user_id: "",
      tab: "order",
      orders: "",
      user: "",
      country_search: "",
      countries_list_open: false,
      orders_filter: [0, 1, 2, 3],
      change_password_form: false,
      change_password: {
        password: "",
        new_password: "",
        check_new_password: "",
      },
      packs: {
        first: "",
        second: "",
        third: "",
      },
      if_buy_pack:false,
      choosen_pack:{
        img:'',
        title:'',
        id:''
      },
      payments:[],
      payment_type:0,
      coin_settings:'',
      location_oridgin:'',
      content_page:{
      block_1:{
        title:'',
        subtilte:'',
        img:''
      },
      block_2:{
        tilte:'',
        decs:''
      },
      block_3:{
        tilte:'',
        decs:''
      },
      block_4:{
        tilte:'',
        decs:''
      },
      block_coins:{
        tilte:'',
        desc:''
      },
      block_ref:{
        tilte:'',
        subtilte:'',
        img:'',
        desc:''
      }
    }
    };

  },
  created() {},
   mounted() {
      this.get_coin_settings(),
      this.get_packs(),
      this.get_payments(),
      this.location_oridgin = window.location.origin
  },
    methods: {
      open_login_popup() {
      this.$store.commit("set_global_login_popup_check", true);
    },
    tabChange() {
      localStorage.tab = "bonus";
    },
    open_reg_popup(){
      $(document.querySelector("#regButton")).click()
    },
    copyText(txt) {
      var dummy = document.createElement("textarea");
      // dummy.style.display = 'none'
      document.body.appendChild(dummy);
      dummy.value = txt;
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
    },
    async send_payment_pack(){
      this.$store.commit("set_preloader", true);
      this.if_buy_pack = false;
      let cur = this.$store.getters["getSelectedZone"] == 'eu' ? 'eur' : 'usd';
      let response = await this.$axios
          .post(this.globalApi + "handlers/packs/packs.php", {id:this.choosen_pack.id,paymant:this.payment_type,cur:cur,token:this.get_access()})
          .then((data) => {
            console.log(data);
            if ( data.data.token &&
              data.data.system &&
              data.data.system == "stripe"
            ) {
              let stripe = Stripe("pk_live_Z06VdlQgFiO5ICHIxQvowZHl00GQR0ZMMb");
              return stripe.redirectToCheckout({ sessionId: data.data.token });
            } else {
              if (data.data.token) {
                window.location.href = data.data.token;
              } else {
                this.$store.commit("set_preloader", false);
              }
            }
          });
    },
    async buy_pack(item){
      this.if_buy_pack = true;
      this.choosen_pack.title = item.title;
      this.choosen_pack.img = item.image;
      this.choosen_pack.id = item.id;
    },
     async get_payments() {
      let response = await this.$axios
        .$get(this.apiUrl + "payments?filter=status,eq,1")
        .then((data) => {
          this.payments = data.records;
          this.payment_type = this.payments[0].id
        });
    },
    async get_coin_settings(){
      let response = await this.$axios
        .$get(this.apiUrl + "coins")
        .then((data) => {
          this.coin_settings = data.records[0];
          this.coin_settings.text_f = JSON.parse(this.coin_settings.text_f);
          this.content_page = this.coin_settings.text_f;
          console.log(this.content_page);
        });
    },
    async send_change_password() {
      console.log(
        JSON.stringify({
          check_new_password: this.change_password.check_new_password,
          new_password: this.change_password.new_password,
          userid: this.get_access(),
          method: "user_ps",
        })
      );
      if (
        this.change_password.check_new_password ==
        this.change_password.new_password
      ) {
        let response = await this.$axios
          .$post(this.globalApi + "requests.php", {
            check_new_password: this.change_password.check_new_password,
            new_password: this.change_password.new_password,
            userid: this.get_access(),
            method: "user_ps",
          })
          .then((data) => {
            console.log(data);
            if (data.status == 200) {
              let date = new Date(Date.now() + 30 * 86400e3);
              date = date.toUTCString();
              let date_r = new Date(Date.now() + 30 * 86400e3);
              date_r = date_r.toUTCString();
              this.deleteCookie("access_t");
              this.deleteCookie("refresh_t");
              this.setCookie("access_t", data.jwt, { expires: date });
              this.setCookie("refresh_t", JSON.stringify(data.refresh), {
                expires: date_r,
              });
              this.$store.commit("setUserLoginCheck", true);
              this.$store.commit("setUserLoginId", data.jwt.split(".")[1]);
              try {
                dashly.track("Пользователь сменил Пароль")
              } catch (e) {
                console.log("dashly not loaded")
              }
            }
          });
      }
    },
    discord_validation() {
      if (this.user.discord != null && this.user.discord != "") {
        if (
          this.user.discord.split("#")[0] &&
          this.user.discord.split("#")[1]
        ) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    },
    change_mailing() {
      if (this.user.subscribe == 0) {
        this.user.subscribe = 1;
      } else {
        this.user.subscribe = 0;
      }
    },
    async get_packs() {
      let response = await this.$axios
        .$get(this.apiUrl + "packs")
        .then((data) => {
          this.packs.first = data.records[0];
          this.packs.second = data.records[1];
          this.packs.third = data.records[2];
          console.log(this.packs);
        });
    },
    async get_orders_by_filter() {
      if (this.orders_filter == 0) {
        let response = await this.$axios
          .$get(this.apiUrl + "orders?filter=userid,eq," + this.user_id)
          .then((data) => {
            this.orders = data.records;
            for (let i = 0; i < this.orders.length; i++) {
              this.orders[i].cart = JSON.parse(this.orders[i].cart);
            }
          });
      } else {
        if (this.orders_filter == 1) {
          let response = await this.$axios
            .$get(
              this.apiUrl +
                "orders?filter=userid,eq," +
                this.user_id +
                "&filter=status,lt,3"
            )
            .then((data) => {
              this.orders = data.records;
              for (let i = 0; i < this.orders.length; i++) {
                this.orders[i].cart = JSON.parse(this.orders[i].cart);
              }
            });
        } else {
          let response = await this.$axios
            .$get(
              this.apiUrl +
                "orders?filter=userid,eq," +
                this.user_id +
                "&filter=status,eq,3"
            )
            .then((data) => {
              this.orders = data.records;
              for (let i = 0; i < this.orders.length; i++) {
                this.orders[i].cart = JSON.parse(this.orders[i].cart);
              }
            });
        }
      }
    },
    async get_user() {
      let response_t = await this.$axios
        .$post(this.globalApi + "requests.php", {
          method: "user_info",
          access_token: this.get_access(),
          fields: "all",
          orders: "all",
        })
        .then((data) => {
          console.log(data);
          this.user = data.user;
          if (this.user.nofields == "") {
            this.user.nofields = [];
          } else {
            this.user.nofields = this.user.nofields.split(",");
          }
          this.orders = data.orders;
          for (let i = 0; i < this.orders.length; i++) {
            if (this.orders[i].trash == 1) {
              this.orders.splice(i, 1);
              i--;
            } else {
              this.orders[i].cart = JSON.parse(this.orders[i].cart);
            }
          }
        });
      let response_game_fields = await this.$axios
        .$post(this.globalApi + "requests.php", {
          method: "fields_lk",
          access_token: this.get_access(),
        })
        .then((data) => {});
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
    async change_info() {
      if (this.discord_validation()) {
        let response = await this.$axios
          .$post(this.globalApi + "requests.php", {
            userid: this.get_access(),
            lk: this.user,
            method: "user_auth",
          })
          .then((data) => {
            console.log(data);
            this.get_user();
          });
      }
    },
    logout() {
      this.deleteCookie("access_t");
      this.deleteCookie("refresh_t");
      window.location.href = window.location.origin;
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
  }
};
</script>
