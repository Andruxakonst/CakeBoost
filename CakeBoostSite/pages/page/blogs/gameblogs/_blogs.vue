<template>
  <error v-if="this.$store.getters['get_show_error']"> </error>
  <div v-else class="content">
    <breadcrumbs />
    <h1 class="blogTopicTitle">{{news.title}}</h1>
    <div class="topicImage">
      <img :src="apiImg+'news/'+ news.img" :alt="news.title" />
    </div>
    <div class="controlTopicPanel">

      <span>
        <a
          v-for="game in this.games" :key="game.id"  v-bind:href="'/page/blogs/'+game.slug+'/' + next_news.slug + '&' + next_news.id"
          class="href_panel_nav"
          v-if="next_news != undefined && next_news.game_id == game.id"
        >
          <img src="/imgGameLogoPurple/Left.svg" alt />
          <span>Next</span>
        </a>
        <a  class="href_panel_nav" v-bind:href="'/page/blogs/about-us/' + next_news.slug + '&' + next_news.id" v-if="next_news != undefined && next_news.game_id == 0">
        <img src="/imgGameLogoPurple/Left.svg" alt />
          <span>Next</span>
        </a>
        <span v-if="next_news == undefined" class="disabled_panel_nav">
          <img src="/imgGameLogoPurple/Left.svg" alt />
          <span>Next</span>
        </span>
        <a
          v-for="game in this.games" :key="game.id"  v-bind:href="'/page/blogs/'+game.slug+'/' + prev_news.slug + '&' + prev_news.id"
          class="href_panel_nav"
          v-if="prev_news != undefined && prev_news.game_id == game.id"
        >
          <span>Prev</span>
          <img src="/imgGameLogoPurple/Right.svg" alt />
        </a>
        <a  class="href_panel_nav" v-bind:href="'/page/blogs/about-us/' + prev_news.slug + '&' + prev_news.id" v-if="prev_news != undefined && prev_news.game_id == 0">
        <img src="/imgGameLogoPurple/Left.svg" alt />
          <span>Prev</span>
          <img src="/imgGameLogoPurple/Right.svg" alt />
        </a>
        <span v-if="prev_news == undefined" class="disabled_panel_nav">
          <span>Prev</span>
          <img src="/imgGameLogoPurple/Right.svg" alt />
        </span>
      </span>
      <span>{{reading_time}} min read</span>
      <span>
        <span>{{news.date}}</span>
        <img v-if="!$store.getters['getUserLoginCheck'].user_check_login" src="/img/Like.svg" alt />
        <img @click="set_like(news)" v-if="$store.getters['getUserLoginCheck'].user_check_login && !check_likes(news.id)" src="/img/Like.svg" alt />
        <img class="active_likes" @click="delete_like(news)" v-if="$store.getters['getUserLoginCheck'].user_check_login && check_likes(news.id)" src="/img/Like.svg" alt />
        {{news.likes}}
        <img class="topicShare" src="/imgGameLogoPurple/Share.svg" alt />
        <div class="topicShareDiv">
            <a :href="'https://www.facebook.com/sharer.php?display=popup&u=' +  share_url" >
              <img src="/img(ColorSochialLogo)/Facebook.svg" alt />
            </a>
          <!--img src="/img(ColorSochialLogo)/Skype.svg" alt />
          <img src="/img(ColorSochialLogo)/Mail.svg" alt />
          <img src="/img(ColorSochialLogo)/Telegram.svg" alt /-->
             <a :href="'https://www.twitter.com/share?url=' +  share_url" >
                <img src="/img(ColorSochialLogo)/Twitter.svg" alt />
            </a>
        </div>
      </span>
    </div>
    <div class="topicItem" v-html="news.content"></div>
    <div class="controlTopicPanel">
      <span>
        <a
          v-for="game in this.games" :key="game.id"  v-bind:href="'/page/blogs/'+game.slug+'/' + next_news.slug + '&' + next_news.id"
          class="href_panel_nav"
          v-if="next_news != undefined && next_news.game_id == game.id"
        >
          <img src="/imgGameLogoPurple/Left.svg" alt />
          <span>Next</span>
        </a>
        <a  class="href_panel_nav" v-bind:href="'/page/blogs/about-us/' + next_news.slug + '&' + next_news.id" v-if="next_news != undefined && next_news.game_id == 0">
        <img src="/imgGameLogoPurple/Left.svg" alt />
          <span>Next</span>
        </a>
        <span v-if="next_news == undefined" class="disabled_panel_nav">
          <img src="/imgGameLogoPurple/Left.svg" alt />
          <span>Next</span>
        </span>
        <a
          v-for="game in this.games" :key="game.id"  v-bind:href="'/page/blogs/'+game.slug+'/' + prev_news.slug + '&' + prev_news.id"
          class="href_panel_nav"
          v-if="prev_news != undefined && prev_news.game_id == game.id"
        >
          <span>Prev</span>
          <img src="/imgGameLogoPurple/Right.svg" alt />
        </a>
        <a  class="href_panel_nav" v-bind:href="'/page/blogs/about-us/' + prev_news.slug + '&' + prev_news.id" v-if="prev_news != undefined && prev_news.game_id == 0">
        <img src="/imgGameLogoPurple/Left.svg" alt />
          <span>Prev</span>
          <img src="/imgGameLogoPurple/Right.svg" alt />
        </a>
        <span v-if="prev_news == undefined" class="disabled_panel_nav">
          <span>Prev</span>
          <img src="/imgGameLogoPurple/Right.svg" alt />
        </span>
      </span>
      <span>{{reading_time}} min read</span>
      <span>
        <span>{{news.date}}</span>
        <img v-if="!$store.getters['getUserLoginCheck'].user_check_login" src="/img/Like.svg" alt />
        <img @click="set_like(news)" v-if="$store.getters['getUserLoginCheck'].user_check_login && !check_likes(news.id)" src="/img/Like.svg" alt />
        <img class="active_likes" @click="delete_like(news)" v-if="$store.getters['getUserLoginCheck'].user_check_login && check_likes(news.id)" src="/img/Like.svg" alt />
        {{news.likes}}
        <img class="topicShare" src="/imgGameLogoPurple/Share.svg" alt />
         <div class="topicShareDiv">
            <a :href="'https://www.facebook.com/sharer.php?display=popup&u=' +  share_url" >
              <img src="/img(ColorSochialLogo)/Facebook.svg" alt />
            </a>
          <!--img src="/img(ColorSochialLogo)/Skype.svg" alt />
          <img src="/img(ColorSochialLogo)/Mail.svg" alt />
          <img src="/img(ColorSochialLogo)/Telegram.svg" alt /-->
             <a :href="'https://www.twitter.com/share?url=' +  share_url" >
                <img src="/img(ColorSochialLogo)/Twitter.svg" alt />
            </a>
        </div>
      </span>
    </div>
    <div class="relatedProducts" v-if="this.relayted_sku.length>0">
      <div class="arrowAndHref">
        <a>
          <span>Related products</span>
        </a>
      </div>
      <div class="swiper-container related-products-offers">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in this.relayted_sku" :key="item.id">
            <div class="bestItem">
              <div class="bestImg">
                <div>
                  <a
                    style="display: block; height: 100%; width: 100%;"
                    v-bind:href="'/'+$store.getters['getGlobalGame']+'/service/' + item.slug + '&' + item.id "
                  ></a>
                </div>
                <a
                  v-bind:href="'/'+$store.getters['getGlobalGame']+'/service/' + item.slug + '&' + item.id "
                >
                  <img :src="apiImg+'sku/'+ item.image" alt />
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
                    v-bind:href="'/'+$store.getters['getGlobalGame']+'/service/' + item.slug + '&' + item.id "
                    v-html="item.menu_name"
                  ></a>
                </div>
              </div>
              <div class="price" v-if="$store.getters['getSelectedZone'] == 'eu'">
          <span v-if="item.price_eur != 0">
            € {{ item.price_eur }}
            <span :class="{small_sku_font:(item.price_eur_sale+''+item.price_eur).split('').length>10}" v-if="item.sales == 1">{{ item.price_eur_sale }}€</span>
            <span :class="{small_sku_font:(item.price_eur_sale2+''+item.price_eur).split('').length>10}"  v-if="item.sales_2 == 1">{{ item.price_eur_sale2 }}€</span>
          </span>
          <span v-else>
            € {{ item.fr_price_eur }}
            <span :class="{small_sku_font:(item.fr_price_eur_sale+''+item.fr_price_eur).split('').length>10}" v-if="item.sales == 1">{{ item.fr_price_eur_sale }}€</span>
            <span :class="{small_sku_font:(item.fr_price_eur_sale2+''+item.fr_price_eur).split('').length>10}"  v-if="item.sales_2 == 1">{{ item.fr_price_eur_sale2 }}€</span>
          </span>
          <!--
          <span>
            <a
              v-bind:href="
                '/' +
                $store.getters['getGlobalGame'] +
                '/service/' +
                item.slug +
                '&' +
                item.id"
              >
              <img
                alt=""
                style="width:24px;
                      height:24px;
                      filter: invert(43%) sepia(81%) saturate(3792%) hue-rotate(255deg) brightness(100%) contrast(99%);"
                class="lazyLoad isLoaded"
                src="/icons/cart.svg"
              >
            </a>
          </span> -->
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
        <div
          class="price"
          v-else-if="$store.getters['getSelectedZone'] == 'us'"
        >
          <span v-if="item.price_usd != 0">
            $ {{ item.price_usd }}
            <span :class="{small_sku_font:(item.price_usd_sale+''+item.price_usd).split('').length>10}" v-if="item.sales == 1">{{ item.price_usd_sale }}$</span>
            <span :class="{small_sku_font:(item.price_usd_sale2+''+item.price_usd).split('').length>10}" v-if="item.sales_2 == 1">{{ item.price_usd_sale2 }}$</span>

          </span>
          <span v-else>
            $ {{ item.fr_price_usd }}
             <span :class="{small_sku_font:(item.fr_price_usd_sale+''+item.fr_price_usd).split('').length>10}" v-if="item.sales == 1">{{ item.fr_price_usd_sale }}$</span>
            <span :class="{small_sku_font:(item.fr_price_usd_sale2+''+item.fr_price_usd).split('').length>10}" v-if="item.sales_2 == 1">{{ item.fr_price_usd_sale2 }}$</span>
          </span>
          <!--
          <span>
            <a
              v-bind:href="
                '/' +
                $store.getters['getGlobalGame'] +
                '/service/' +
                item.slug +
                '&' +
                item.id"
              >
              <img
                alt=""
                style="width:24px;
                      height:24px;
                      filter: invert(43%) sepia(81%) saturate(3792%) hue-rotate(255deg) brightness(100%) contrast(99%);"
                class="lazyLoad isLoaded"
                src="/icons/cart.svg"
              >
            </a>
          </span>
          -->
          <div class="BuyNow">
            <a v-bind:href="
                '/' +
                $store.getters['getGlobalGame'] +
                '/service/' +
                item.slug +
                '&' +
                item.id"
              style="text-decoration: none">Buy now</a>
          </div>
        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script v-html="jsonld" name="check-json" type="application/ld+json" />
  </div>
</template>
<script>
import breadcrumbs from "~/components/breadcrumbs.vue";
import error from "~/components/404.vue";
export default {
   head() {
      return {
        //title: this.news.seo_title,
        title:this.news.seo_title?this.news.seo_title:this.news.title+ ' | Cakeboost',
        link: [
          {
            hid: 'canonical',
            rel: 'canonical',
            href: this.news.seo_canonical ? this.news.seo_canonical : 'https://cakeboost.com'+this.$route.path
          }
        ],
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.news.seo_descr
          },
          {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.news.seo_title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.news.seo_descr
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.apiImg+'news/'+ this.news.img
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.news.seo_title
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.news.seo_title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.news.seo_descr
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.apiImg+'news/'+ this.news.img
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.apiImg+'news/'+ this.news.img
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.news.seo_title
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'Cakeboost Boosting Platform'
        }
        ],


      }
  },
  data() {
    return {
      jsonld: {},
      apiImg: this.$store.getters["getApiImgUrl"],
      apiUrl: this.$store.getters["getApiUrl"],
      globalApi: this.$store.getters["getGlobalApi"],
      thisGame: this.$store.getters['getGlobalGameId'],
      newsId: 0,
      news: "",
      next_news: "",
      prev_news: "",
      reading_time: 0,
      relayted_sku: "",
      relayted_topic: "",
      games:'',
      share_url:'',
      check_likes_array:[]
    };
  },
  components: {
    breadcrumbs,
    error
  },
  mounted(){
    try {
    this.init_swiper(),this.get_games(),this.get_likes()
    } catch (error) {
      this.$store.commit("set_show_error", true);
    }
    this.share_url = window.location.origin + '/page/blogs/'+this.$route.path.split("/")[3] +'/'+encodeURIComponent(this.$route.params.blogs);
  },
  created() {},
  async asyncData({ $axios, store, route,redirect,res }) {
    try {
       if (route.path.split("/").length == 5) {
      let apiUrl = store.getters["getApiUrl"];
      let apiImg = store.getters["getApiImgUrl"];
      let thisGame = "";
      let temp = route.path.split("&");
      let newsId = temp[1];
      let news = "";
      let next_news = "";
      let prev_news = "";
      let jsonld = {
        "@context": "https://schema.org",
        "@graph": []
      };
      let reading_time = 0;
      let relayted_sku = "";
      let relayted_topic = "";

      try {
        let response_data_game = await $axios
          .$get(apiUrl + "game?filter=slug,eq," + route.path.split('/')[3])
          .then(data => {
            thisGame = data.records[0].id;
          });
      } catch (e) {}
      
      let response_data = await $axios
        .$get(apiUrl + "news/" + newsId)
        .then(data => {
          if(data.game_id == thisGame) {
            news = data;
            console.log(data, "news")
            jsonld["@graph"].push({
              "@context": "https://schema.org",
              "@type": "Article",
              "name": data.title
            })
          }
        });

      let response_data_rel_sku = await $axios
        .$get(apiUrl + "sku?filter=id,in," + news.related_sku)
        .then(data => {
          relayted_sku = data.records;
          for (let i = 0; i < relayted_sku.length; i++) {
          relayted_sku[i].stars = [];
          if (relayted_sku[i].gl_rating == 0) {
            relayted_sku[i].stars = ["n", "n", "n", "n", "n"];
          } else {
            for (let j = 0; j < relayted_sku[i].gl_rating; j++) {
              relayted_sku[i].stars.push("s");
            }
            for (let j = 0; j < Math.floor(5 - relayted_sku[i].gl_rating); j++) {
              relayted_sku[i].stars.push("n");
            }
          }
        }
        });
      let response_data_p = await $axios
        .$get(
          apiUrl +
            "news?size=1&order=date,desc&filter=date,lt," +
            news.date +
            "&filter=status,eq,1&filter=type,eq," +
            news.type
        )
        .then(data => {
          prev_news = data.records[0];
        });
      let response_data_s = await $axios
        .$get(
          apiUrl +
            "news?size=1&order=date,asc&filter=date,gt," +
            news.date +
            "&filter=status,eq,1&filter=type,eq," +
            news.type
        )
        .then(data => {
          next_news = data.records[0];
        });
      let temp_content = news.content.replace(/<[^>]+>/g, "").split(" ").length;
      if (temp_content / 150 >= 1) {
        reading_time = Math.floor(temp_content / 150);
      } else {
        if (temp_content / 150 > 0.4) {
          reading_time = Math.ceil(temp_content / 150);
        }
      }

      relayted_sku.map((product) => {
        jsonld["@graph"].push({          
          "@context": "https://schema.org",
          "@type": "Product",
          "description": product.seo_descr,
          "name": product.title,
          "image": apiImg + 'sku/' + product.image,
          "brand": "Cakeboost",
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "price": product.fr_price_usd,
            "priceCurrency": "USD"
          }})
      })
      return {
        newsId,
        news,
        jsonld,
        next_news,
        prev_news,
        reading_time,
        relayted_sku,
        thisGame,
        relayted_topic
      };
    }
    } catch (error) {
      res.statusCode = 404;
      store.commit("set_show_error", true);
      console.error(error)
    }

  },
  methods: {
    // async get_news_by_id() {
    //   let response_data = await this.$axios
    //     .$get(this.apiUrl + "news?filter=game_id,eq," + this.thisGame + "&filter=id,eq," + this.newsId)
    //     .then(data => {
    //       this.news = data.records[0];
    //       // alert(this.thisGame)
    //     });
    //   this.get_prev_next_news(this.news.date);
    //   this.calc_reading_time(this.news.content);
    // },
    async get_games() {
      let response_data = await this.$axios
        .$get(this.apiUrl + "game")
        .then((data) => {
          this.games = data.records;
        });
    },
    async get_prev_next_news(date) {
      let response_data = await this.$axios
        .$get(
          this.apiUrl +
            "news?size=1&order=date,desc&filter=date,lt," +
            date +
            "&filter=status,eq,1"
        )
        .then(data => {
          this.prev_news = data.records[0];
        });
      let response_data_s = await this.$axios
        .$get(
          this.apiUrl +
            "news?size=1&order=date,asc&filter=date,gt," +
            date +
            "&filter=status,eq,1"
        )
        .then(data => {
          this.next_news = data.records[0];
        });
    },
    calc_reading_time(content) {
      let temp = content.replace(/<[^>]+>/g, "").split(" ").length;
      if (temp / 150 >= 1) {
        this.reading_time = Math.floor(temp / 150);
      } else {
        if (temp / 150 > 0.4) {
          this.reading_time = Math.ceil(temp / 150);
        }
      }
    },
    init_swiper() {
      var mySwiper = new Swiper(".relatedProducts .swiper-container", {
        speed: 1000,
        spaceBetween: 8,
        slidesPerView: "auto"
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
    async delete_like(item){
      let news_set_likes = await this.$axios
          .$post(this.globalApi + "requests.php", {
            method: "likes_dell",
            token: this.get_access(),
            news_id:item.id,
          })
          .then((data) => {
            if(data.status == '200'){
              this.get_likes();
              item.likes--;
            }
          });
    },
    async set_like(item){
      let news_set_likes = await this.$axios
          .$post(this.globalApi + "requests.php", {
            method: "likes_add",
            token: this.get_access(),
            news_id:item.id,
          })
          .then((data) => {
            if(data.status == '200'){
              this.get_likes();
              item.likes++;
            }
          });
    },
    check_likes(id){
      for(let i = 0; i < this.check_likes_array.length;i++){
        if(this.check_likes_array[i] == id){
          return true;
        }
      }
      return false;
    },
    async get_likes(){
      let temp_id =  this.news.id;
      if(this.get_access()){
        let news_likes = await this.$axios
          .$post(this.globalApi + "requests.php", {
            method: "likes_list",
            token: this.get_access(),
            news_id:temp_id,
          })
          .then((data) => {
            console.log(data);
            if(!data.status){
              this.check_likes_array = data;
            }else{
                this.check_likes_array = [];
            }
          });
      }
    }
  }
};
</script>
