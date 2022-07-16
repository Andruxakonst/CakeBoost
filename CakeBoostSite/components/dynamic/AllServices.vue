<template>
  <div class="AllItems" v-if="totalResults != 0">
    <div class="arrowAndHref">
      <!-- <a v-bind:href="'/' + $store.getters['getGlobalGame'] + '/best-offers'"> -->
      <!-- <a href="#"> -->
      <span>All services</span>
      <!-- </a> -->
      <span class="serviceLength">{{ totalResults }} orders</span>
    </div>
    <div class="CategoryList">
      <div class="MainCategory">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div
              :class="
                'CatItem swiper-slide ' +
                (mainCatActive == 'all' ? 'activeItem' : '')
              "
              @click="changeCategory('all', 'mainCatActive')"
            >
              <span>All</span>
            </div>
            <div
              v-for="(item, index) in MainCategory"
              :key="index"
              :class="
                'CatItem swiper-slide ' +
                (mainCatActive == item.id ? 'activeItem' : '')
              "
              @click="changeCategory(item, 'mainCatActive')"
            >
              <span>{{ item.menu_name }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="MainCategory">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div
              :class="
                'CatItem swiper-slide ' +
                (childCatActive == 'all' ? 'activeItem' : '')
              "
              @click="changeCategory('all', 'childCatActive')"
              :style="
                mainCatActive != 'all' && this.ChildCategorySort.length != 0
                  ? ''
                  : 'display:none !important'
              "
            >
              <span>All</span>
            </div>
            <div
              @click="changeCategory(child, 'childCatActive')"
              v-for="(child, index) in ChildCategorySort"
              :key="index"
              :class="
                'CatItem swiper-slide ' +
                (childCatActive == child.id ? 'activeItem' : '')
              "
            >
              <span>{{ child.menu_name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="swiper-wrapper" style="flex-wrap: wrap">
        <div
          class="swiper-slide"
          v-for="(item, index) in all_gameItem"
          :key="index"
          v-if="index < allItemLength"
        >
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
            ></a>
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
          <div>
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
                  <svg
                    v-if="sub_item <= Math.round(item.gl_rating)"
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
                    v-if="sub_item > Math.round(item.gl_rating)"
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
                <span
                  :class="{
                    small_sku_font:
                      (item.price_eur_sale + '' + item.price_eur).split('')
                        .length > 10,
                  }"
                  v-if="item.sales == 1"
                  >€ {{ item.price_eur_sale }}</span
                >
                <span
                  :class="{
                    small_sku_font:
                      (item.price_eur_sale2 + '' + item.price_eur).split('')
                        .length > 10,
                  }"
                  v-if="item.sales_2 == 1"
                  >€ {{ item.price_eur_sale2 }}</span
                >
              </span>
              <span v-else>
                € {{ item.fr_price_eur }}
                <span
                  :class="{
                    small_sku_font:
                      (item.fr_price_eur_sale + '' + item.fr_price_eur).split(
                        ''
                      ).length > 10,
                  }"
                  v-if="item.sales == 1"
                  >€ {{ item.fr_price_eur_sale }}</span
                >
                <span
                  :class="{
                    small_sku_font:
                      (item.fr_price_eur_sale2 + '' + item.fr_price_eur).split(
                        ''
                      ).length > 10,
                  }"
                  v-if="item.sales_2 == 1"
                  >€ {{ item.fr_price_eur_sale2 }}</span
                >
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
                <span
                  :class="{
                    small_sku_font:
                      (item.price_usd_sale + '' + item.price_usd).split('')
                        .length > 10,
                  }"
                  v-if="item.sales == 1"
                  >$ {{ item.price_usd_sale }}</span
                >
                <span
                  :class="{
                    small_sku_font:
                      (item.price_usd_sale2 + '' + item.price_usd).split('')
                        .length > 10,
                  }"
                  v-if="item.sales_2 == 1"
                  >$ {{ item.price_usd_sale2 }}</span
                >
              </span>
              <span v-else>
                $ {{ item.fr_price_usd }}
                <span
                  :class="{
                    small_sku_font:
                      (item.fr_price_usd_sale + '' + item.fr_price_usd).split(
                        ''
                      ).length > 10,
                  }"
                  v-if="item.sales == 1"
                  >$ {{ item.fr_price_usd_sale }}</span
                >
                <span
                  :class="{
                    small_sku_font:
                      (item.fr_price_usd_sale2 + '' + item.fr_price_usd).split(
                        ''
                      ).length > 10,
                  }"
                  v-if="item.sales_2 == 1"
                  >$ {{ item.fr_price_usd_sale2 }}</span
                >
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
              <a
                :href="
                  '/' +
                  $store.getters['getGlobalGame'] +
                  '/service/' +
                  item.slug +
                  '&' +
                  item.id
                "
                style="text-decoration: none"
                >Buy now</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ShowMore" v-if="showMore">
      <hr />
      <button @click="ShowMore()">Show more</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["game_id"],
  data() {
    return {
      currentCategoryId: "",
      page: 1,
      totalResults: 0,
      all_gameItem: [],
      MainCategory: [],
      ChildCategory: [],
      ChildCategorySort: [],
      mainCatActive: "all",
      childCatActive: "all",
      allItemLength: 6,
      allItemLengthStep: 6,
      showMore: false,
      apiImg: this.$store.getters["getApiImgUrl"],
      apiUrl: this.$store.getters["getApiUrl"],
      // apiUrl: 'https://api.cakeboost.com/api/v14887401369/api.php/records/',
      globalApi: this.$store.getters["getGlobalApi"],
    };
  },
  mounted() {
    this.get_allSku();
    this.loadCats();
    this.childCat();
    this.init_swiper()

    setTimeout(() => {
      this.showMore = this.filterSku().length >= 6 
      // && this.openLength()
    }, 3000);
  },
  created() {
    if (process.browser) {
      window.addEventListener("resize", this.updateWidth);
      this.updateWidth();
    }
  },
  methods: {
    updateWidth() {
      this.screen = window.innerWidth;
      if (this.screen < 1600 && this.screen > 960) {
        this.allItemLength = 4;
        this.allItemLengthStep = 4;
      } else {
        this.allItemLength = 6;
        this.allItemLengthStep = 6;
      }
    },
    async loadCats() {
      let response_mainCat = await this.$axios
        .$get(
          this.apiUrl +
            "category?filter=status,eq,1&filter=parent,eq,0&filter=game,eq," +
            this.game_id +
            "&include=id,slug,parent,menu_name,title,game"
        )
        .then((data) => {
          this.MainCategory = data.records;
        });
      let response_childCat = await this.$axios
        .$get(
          this.apiUrl +
            "category?filter=status,eq,1&filter=parent,neq,0&filter=game,eq," +
            this.game_id +
            "&include=id,slug,parent,menu_name,title,game"
        )
        .then((data) => {
          this.ChildCategory = data.records;
        });
    },
    changeCategory(item, active) {
      this.page = 1;
      this.updateWidth();
      if (item != "all") {
        active == "mainCatActive"
          ? ((this.mainCatActive = item.id), (this.childCatActive = "all"))
          : (this.childCatActive = item.id);
      } else {
        active == "mainCatActive"
          ? ((this.mainCatActive = "all"), (this.childCatActive = "all"))
          : (this.childCatActive = "all");
      }
      this.childCat();
      this.filterSku();
      this.init_swiper();
    },
    async childCat() {
      this.ChildCategorySort = this.ChildCategory.filter(
        (item) => item.parent == this.mainCatActive
      );
      // this.init_swiper();
    },
    async getCategorySku (categoryId) {
      let response_data_sku_sales = await this.$axios
        .$get(
          this.apiUrl +
            "sku?order=ordr,asc&filter=status,eq,1&filter=category,in," + categoryId + "&filter=game,eq," +
            this.game_id +"&page=1," + 6 * this.page
        )
        .then((data) => {
          this.all_gameItem = data.records;
        })
    },
    filterSku() {
      if (this.mainCatActive != "all" && this.childCatActive == "all") {
        this.currentCategoryId = this.mainCatActive;
        this.ChildCategorySort.forEach((item) => {
          this.currentCategoryId = this.currentCategoryId + "," + item.id;
        })
      } else if (this.mainCatActive == "all" && this.childCatActive == "all") {
        this.get_allSku();
        return this.all_gameItem;
      } else if (this.mainCatActive != "all" && this.childCatActive != "all") {
        this.currentCategoryId = this.childCatActive;
      } else if (this.mainCatActive == "all" && this.childCatActive != "all") {
        this.currentCategoryId = this.childCatActive;
      }
      this.getCategorySku(this.currentCategoryId);

      return this.all_gameItem;
    },
    // openLength() {
    //   if (document.querySelector(".AllItems > div:nth-child(3)")) {
    //     let openItem = document
    //       .querySelector(".AllItems > div:nth-child(3)")
    //       .querySelectorAll(".swiper-slide").length;
    //     if (this.filterSku().length - openItem > 0) {
    //       return true;
    //     }
    //   }
    // },
    ShowMore() {
      this.allItemLength += this.allItemLengthStep;
      this.page += 1;
      if (this.mainCatActive == "all" && this.childCatActive == "all") {
        this.get_allSku()
      } else {
        this.getCategorySku(this.currentCategoryId);
      }
      return this.allItemLength;
    },
    async get_allSku() {
      let response_data_sku_sales = await this.$axios
        .$get(
          this.apiUrl +
            "sku?order=ordr,asc&filter=status,eq,1&filter=game,eq," +
            this.game_id +"&page=1," + 6 * this.page 
        )
        .then((data) => {
          this.all_gameItem = data.records;
          this.totalResults = data.results


          // if (this.all_gameItem.length < 8) {
          // let response_data_sku_sales = this.$axios
          //   .$get(
          //     this.apiUrl +
          //       "sku?order=ordr,asc&filter=status,eq,1&filter=game,eq," +
          //       this.game_id
          //   )
          //   .then((data) => {
          //     // this.all_gameItem = this.all_gameItem.concat(data.records);
          //     // for (let i = 0; i < this.all_gameItem.length; i++) {
          //     //   this.all_gameItem[i].stars = [];
          //     //   if (this.all_gameItem[i].gl_rating == 0) {
          //     //     this.all_gameItem[i].stars = ["n", "n", "n", "n", "n"];
          //     //   } else {
          //     //     for (let j = 0; j < this.all_gameItem[i].gl_rating; j++) {
          //     //       this.all_gameItem[i].stars.push("s");
          //     //     }
          //     //     for (
          //     //       let j = 0;
          //     //       j < Math.floor(5 - this.all_gameItem.gl_rating);
          //     //       j++
          //     //     ) {
          //     //       this.all_gameItem.stars.push("n");
          //     //     }
          //     //   }
          //     // }
          //   });
          // }
        });
    },
    init_swiper() {
      var mySwiper = new Swiper(".reviews_landing .swiper-container", {
        speed: 1000,
        spaceBetween: 16,
        slidesPerView: "auto",
        navigation: {
          nextEl: ".reviews_landing .straightNavR",
          prevEl: ".reviews_landing .straightNavL",
        },
      });
    },
  },
};
</script>
