<template>
  <div class="content">
    <div
      class="popUpMask"
      v-if="reviews_pop_up"
      v-bind:class="{ active_card: reviews_pop_up }"
    >
      <div class="leaveReviewPopUp" style="display: block">
        <div class="closePopUp">
          <img
            src="/img/Close.svg"
            class="closePopUpImg"
            @click="(reviews_pop_up = false), body_active()"
            alt
          />
        </div>
        <div class="logPopUpBody">
          <div>Leave a review</div>
          <div class="rewPopUpUnderTitle">
            Choose order by number and date
          </div>
          <div class="rewiewOptionPiker" @click.self="open_rev_order = true">
            <span>{{ review.order }}</span>
            <img src="/img/Down.svg" alt />
            <div class="reviews_orders_list" v-if="open_rev_order">
              <div
                v-for="item in this.orders"
                v-if="item.trash != 1"
                :key="item.id"
                @click="
                  (open_rev_order = false),
                    (review.order = item.id),
                    (review.item = '-'),
                    (open_rev_order_temp = true),
                    init_sku_list(item)
                "
              >
                {{ item.id }} - {{ item.date }}
              </div>
            </div>
          </div>
          <div v-if="open_rev_order_temp" class="rewPopUpUnderTitle">
            Choose the service in order
          </div>
          <div
            v-if="open_rev_order_temp"
            class="rewiewOptionPiker"
            @click.self="open_rev_item = true"
          >
            <span>{{ review.item }}</span>
            <img src="/img/Down.svg" alt />
            <div class="reviews_orders_list" v-if="open_rev_item">
              <div
                v-for="item in this.items.cart_items"
                :key="item"
                @click="
                  (open_rev_item = false),
                    (review.item = item.product.title),
                    (review.skuid = item.product.id)
                "
              >
                {{ item.product.title }}
              </div>
            </div>
          </div>
          <div class="rewPopUpUnderTitle">Your review</div>
          <textarea
            v-model="text"
            name
            id
            cols="30"
            rows="10"
            placeholder="How fast was the service delivered?? Were the operators friendly? Do you like the results?"
          ></textarea>
          <div class="reviewWordCounter">{{ word_count }}/2000</div>
          <div class="reviewsRate">
            <div>How do you like it?</div>
            <span>
              <img
                v-for="index in 5"
                :key="index"
                @click="review.rating = index"
                src="/img/Favorite.svg"
                alt
              />
            </span>
            <span>
              <img
                v-for="index in review.rating"
                :key="index"
                @click="review.rating = index"
                src="/img/Trustpilot.svg"
                alt
              />
            </span>
          </div>
          <button @click="send_review()" id="popUpLeaveReview">
            Leave a review
          </button>
        </div>
      </div>
    </div>
    <breadcrumbs />
    <div class="createReview">
      <h1>
        Reviews
      </h1>
      <div>
        <button
          @click="(reviews_pop_up = true), body_set_hidden()"
          v-if="this.$store.getters['getUserLoginCheck'].user_check_login"
        >
          Create review
        </button>
        <button
          class="disabled_button"
          @click="open_login_popup()"
          v-if="!this.$store.getters['getUserLoginCheck'].user_check_login"
        >
          Create review
        </button>
      </div>
    </div>
    <!-- <div class="alsoTrustPilot">
          <div>One and all of the CakeBoost team work for you to obtain the most admirable quality of services! We enjoy to see you being fulfilled and grateful. You have frequently asked us to forge a way, by which you could leave the feedback easily, and here it is.
    <br style="margin:8px 0">On this page you may find a number of notable web-sites most users are likely to trust, but we would recommend to use a Trustpilot as “the world’s most powerful review platform, free and open to all” as they call themselves.
    <br style="margin:8px 0">In our work we adhere to the concepts of openness, transparency and responsibility, that is to say we understand that there may be cases, when even true professionals are facing certain misunderstandings or such with the clients. In order to prevent all dissensions or dissatisfactions, we kindly ask you to inform us as soon as you became aware of their essence. No matter what kind of issue you are experiencing, the competent and knowledgeable staff of our company will offer you the best possible solution of the problem.
    </div> -->
    <div class="alsoTrustPilot">
      <div>
      <div>One and all of the CakeBoost team work for you to obtain the most admirable quality of services! We enjoy to see you being fulfilled and grateful. You have frequently asked us to forge a way, by which you could leave the feedback easily, and here it is.</div>

      <div style="margin:8px 0">On this page you may find a number of notable web-sites most users are likely to trust, but we would recommend to use a Trustpilot as “the world’s most powerful review platform, free and open to all” as they call themselves.</div>

      <div>In our work we adhere to the concepts of openness, transparency and responsibility, that is to say we understand that there may be cases, when even true professionals are facing certain misunderstandings or such with the clients. In order to prevent all dissensions or dissatisfactions, we kindly ask you to inform us as soon as you became aware of their essence. No matter what kind of issue you are experiencing, the competent and knowledgeable staff of our company will offer you the best possible solution of the problem.</div>
    </div>
      <a href="https://www.trustpilot.com/review/cakeboost.com">
        <img src="/img(headerLogo)/Trustpilot big.svg" alt />
      </a>
    </div>
    <div class="reviewTabTAble">
      <div
        class="reviewTabTAbleItem"
        v-for="item in this.reviews"
        :key="item.id"
      >
        <div>
          <span>{{ item.name }}</span>
          <span v-for="sub_item in item.stars" :key="sub_item">
            <img v-if="sub_item == 's'" src="/img/Star TrustPilot.svg" alt />
            <img v-if="sub_item == 'n'" src="/img/Star.svg" alt />
          </span>
        </div>
        <div>{{ reviews_text_filter(item.review) }}</div>
        <div class="reviewRelevantItem">
          <!--img v-for="img_item in games"  :key="img_item.id" :src="apiImg + 'gicons/' + img_item.img" v-if="item.sku != undefined && img_item.id == item.sku.game" alt -->
          Game:
          <span
            v-for="game in games"
            :key="game.id"
            v-if="item.sku != undefined && game.id == item.sku.game"
            >{{ game.title }}
          </span>
          <br />
          Service:
          <span v-if="item.sku != undefined">{{ item.sku.title }}</span>
        </div>
        <script type="application/ld+json" v-if="item.hasSku" v-html="item.our_sku_json"></script>
      </div>
      <div class="pagination">
        <img
          src="/img/Left.svg"
          v-on:click="get_all_rev_by_pag(active_index - 2)"
          v-if="active_index > 1"
          alt
        />
        <img v-else src="/img/Left.svg" alt />
        <div
          v-for="item in this.paginator_list"
          :key="item.id"
          v-bind:class="{ active: active_index == item.title }"
          v-on:click="get_all_rev_by_pag(item.index)"
          v-if="item.active"
        >
          {{ item.title }}
        </div>
        <div v-else-if="item.title + 1 == list_number" class="pagginator_dots">
          ...
        </div>
        <div v-else-if="item.title - 1 == 1" class="pagginator_dots">...</div>
        <img
          src="/img/Right.svg"
          v-on:click="get_all_rev_by_pag(active_index)"
          v-if="active_index != list_number"
          alt
        />
        <img v-else src="/img/Right.svg" alt />
      </div>
    </div>
  </div>
</template>
<script>
import breadcrumbs from "~/components/breadcrumbs.vue";
import moment from "moment";
import momenttz from "moment-timezone";

export default {
  head() {
    return {
      title:'Reviews | Cakeboost',
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
          href:'https://cakeboost.com'+this.$route.path
        }
      ]
    };
  },
  components: {
    breadcrumbs,
  },
  data() {
    return {
      results_paginator: 0,
      paginator_list: [],
      list_number: 0,
      active_index: 1,
      apiImg: this.$store.getters["getApiImgUrl"],
      apiUrl: this.$store.getters["getApiUrl"],

      globalApi: this.$store.getters["getGlobalApi"],
      reviews: [],
      tab_value: 0,
      games: [],
      reviews_pop_up: false,
      user_id: "",
      orders: "",
      review: {
        order: "-",
        item: "-",
        name: "",
        rating: 0,
        email: "",
        skuid: 0,
      },
      text: "",
      open_rev_order: false,
      open_rev_item: false,
      open_rev_order_temp: false,
      items: [],
      word_count: 0,
    };
  },
  async asyncData({ $axios, store, route }) {
    let apiUrl = store.getters["getApiUrl"];
    let results_paginator = 0;
    let reviews = [];
    let our_sku_json = '';
    let games = [];
    let response_data_r = await $axios
      .$get(apiUrl + "reviews?order=date,desc&filter=status,eq,1&page=1,8")
      .then((data) => {
        reviews = data.records;
        for (let i = 0; i < reviews.length; i++) {
          reviews[i].stars = [];
          if (reviews[i].rating == 0) {
            reviews[i].stars = ["n", "n", "n", "n", "n"];
          } else {
            for (let j = 0; j < reviews[i].rating; j++) {
              reviews[i].stars.push("s");
            }
            for (let j = 0; j < 5 - reviews[i].rating; j++) {
              reviews[i].stars.push("n");
            }
          }
          /*
          let response_data_sku_popular = $axios
            .$get(
              apiUrl + "sku/" + reviews[i].parentid + "?include=id,title,slug"
            )
            .then((data) => {
              reviews[i].sku = data;
            });*/
        }
        results_paginator = data.results;
      });
    for (let i = 0; i < reviews.length; i++) {
      let skuNone = {}
      skuNone['title'] = 'Service deleted'
      reviews[i].sku = skuNone
      reviews[i].hasSku = false;
      let response_data_sku_popular = await $axios
        .$get(
          apiUrl + "sku/" + reviews[i].parentid + "?include=id,title,slug,game,image"
        )
        .then((data) => {
          reviews[i].sku = data;
          our_sku_json = '{"@context": "https://schema.org/", "@type": "Review", "reviewBody": " '+ reviews[i].review.replace(/(<([^>]+)>)/gi, "") +'", "author": "'+ reviews[i].name +'", "itemReviewed": {"@type": "Restaurant","name": "'+ reviews[i].name +'", "image": "'+ reviews[i].sku.image +'"},"reviewRating": {"@type": "Rating","bestRating": "5","ratingValue": "'+ reviews[i].rating +'","worstRating": "1"},"datePublished": "'+ reviews[i].date +'"}';
          reviews[i].our_sku_json = our_sku_json;
          reviews[i].hasSku = true;
        })
        .catch((error) => {});
    }
    let response_data_g = await $axios.$get(apiUrl + "game").then((data) => {
      games = data.records;
    });
    return {
      reviews,
      results_paginator,
      games,
      our_sku_json,
    };
  },
  watch: {
    text: function () {
      this.word_count = this.text.split("").length;
    },
  },
  methods: {
    open_login_popup() {
      this.$store.commit("set_global_login_popup_check", true);
    },
    reviews_text_filter(text) {
      let strippedString = text.replace(/(<([^>]+)>)/gi, "");
      return strippedString;
    },
    async send_review() {
      let response_get_name = await this.$axios
        .$post(this.globalApi + "requests.php", {
          method: "user_info",
          access_token: this.get_access(),
          fields: "all",
          orders: "all",
        })
        .then((data) => {
          this.review.name = data.user.name;
          this.review.email = data.user.email;
        });
      let form = {
        userid: this.user_id,
        name: this.review.name,
        email: this.review.email,
        orderid: this.review.order,
        rating: this.review.rating,
        parentid: this.review.skuid,
        status: 0,
        date: moment().tz("Europe/Berlin").format("YYYY-MM-DD HH:mm:ss"),
        checks: 0,
        review: this.text,
      };
      let response_data_sku_popular = await this.$axios
        .$post(this.apiUrl + "reviews", form)
        .then((data) => {
          this.body_active();
          this.reviews_pop_up = false;
        });
    },
    init_sku_list(item) {
      this.items = JSON.parse(item.cart);
    },
    fill_paginator_list() {
      (this.paginator_list = []),
        (this.list_number = Math.ceil(this.results_paginator / 8));
      if (this.list_number < 7) {
        for (let i = 0; i < this.list_number; i++) {
          let list_item = {
            title: i + 1,
            index: i,
            active: true,
          };
          this.paginator_list.push(list_item);
        }
      } else {
        for (let i = 0; i < this.list_number; i++) {
          let check = true;
          if (i > 3) {
            check = false;
          }
          let list_item = {
            title: i + 1,
            index: i,
            active: check,
          };
          this.paginator_list.push(list_item);
        }
        this.paginator_list[this.list_number - 1].active = true;
      }
    },
    async temp_review_item() {
      for (let i = 0; i < this.reviews.length; i++) {
        let response_data_sku_popular = await this.$axios
          .$get(
            this.apiUrl +
              "sku/" +
              this.reviews[i].parentid +
              "?include=id,title,slug,game"
          )
          .then((data) => {
            this.reviews[i].sku = data;
          });
      }
      this.$forceUpdate();
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
    async get_all_rev_by_pag(index) {
      this.active_index = this.paginator_list[index].title;

      let response_data = await this.$axios
        .$get(
          this.apiUrl +
            "reviews?order=date,desc&filter=status,eq,1" +
            "&page=" +
            this.paginator_list[index].title +
            ",8"
        )
        .then((data) => {
          this.reviews = data.records;
          for (let i = 0; i < this.reviews.length; i++) {
            this.reviews[i].stars = [];
            if (this.reviews[i].rating == 0) {
              this.reviews[i].stars = ["n", "n", "n", "n", "n"];
            } else {
              for (let j = 0; j < this.reviews[i].rating; j++) {
                this.reviews[i].stars.push("s");
              }
              for (let j = 0; j < 5 - this.reviews[i].rating; j++) {
                this.reviews[i].stars.push("n");
              }
            }

            let response_data_sku_popular = this.$axios
              .$get(
                this.apiUrl +
                  "sku/" +
                  this.reviews[i].parentid +
                  "?include=id,title,slug,game"
              )
              .then((data) => {
                this.reviews[i].sku = data;
                this.$forceUpdate();
              });
          }
          this.results_paginator = data.results;
        });

      if (index == 0) {
        this.fill_paginator_list();
      } else {
        if (index == this.list_number - 1 || index == this.list_number - 2) {
          this.paginator_list = [];
          for (let i = 0; i < this.list_number; i++) {
            let check = false;
            if (i > this.list_number - 5) {
              check = true;
            }
            let list_item = {
              title: i + 1,
              index: i,
              active: check,
            };
            this.paginator_list.push(list_item);
          }
          this.paginator_list[0].active = true;
        } else {
          let temp = [];
          if (
            !this.paginator_list[index + 1].active ||
            !this.paginator_list[index - 1].active
          ) {
            for (let i = 0; i < this.list_number; i++) {
              let check = false;
              if (i == index || i == index - 1 || i == index + 1) {
                check = true;
              }
              let list_item = {
                title: i + 1,
                index: i,
                active: check,
              };
              temp.push(list_item);
            }
            temp[this.list_number - 1].active = true;
            temp[0].active = true;
            this.paginator_list = temp;
          }
        }
      }
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        1000
      );
    },
    body_set_hidden() {
      document.body.className = "body_pop_up_active";
    },
    body_active() {
      document.body.className = "body_pop_up_disable";
      this.registration_mail = "";
      this.registration_result = "";
      this.result_text = "";
    },
    async get_orders() {
      this.user_id = JSON.parse(atob(this.get_access().split(".")[1])).user_id;
      let response = await this.$axios
        .$post(this.globalApi + "requests.php", {
          method: "user_info",
          access_token: this.get_access(),
          fields: "all",
          orders: "all",
        })
        .then((data) => {
          this.orders = data.orders;
        });
    },
  },
  mounted() {
    this.fill_paginator_list();
    this.get_orders();
  },
};
</script>
