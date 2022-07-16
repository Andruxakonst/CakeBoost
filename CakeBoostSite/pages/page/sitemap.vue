<template>
  <div class="content">
    <breadcrumbs />
    <div class="Sitemap ">
      <div>
        <h1>Sitemap</h1>
      </div>
      <div class="">
        <ul class="policyUl">
          <li v-for="game in games" :key="game.id">
            <a @click="scrollTo('game_' + game.id)" href="#"><img alt="" class="lazyLoad isLoaded" src="/icons/Left4.svg">
              {{ game.title }}
            </a>
          </li>
          <li>
            <a href="#Guides"><img alt="" class="lazyLoad isLoaded" src="/icons/Left4.svg">
              Guides
            </a>
          </li>
          <li>
            <a href="#News"><img alt="" class="lazyLoad isLoaded" src="/icons/Left4.svg">
              News
            </a>
          </li>
          <li>
            <a href="#Pages"><img alt="" class="lazyLoad isLoaded" src="/icons/Left4.svg">
              Pages
            </a>
          </li>
        </ul>
        <div v-for="game in games" :key="game.id">
          <a :href="'/' + (game.slug == 'wow-shadowlands' ? 'wow-boost' : game.slug)" :id="'game_' + game.id" class="Game">{{ game.title }}</a>

            <div class="Categorylist">
              <div class="swiper-container">
                <div class="swiper-wrapper">
                  <div v-for="item in mainCat.filter(category => category.game == game.id)" :key="item.id" class="swiper-slide">
                    <a :href="'/' + game.slug + '/catalog/' + item.slug " class="MainCat">{{ item.title }}</a>
                    <div class="service" v-for="service in AllService.filter(sku => sku.category == item.id)" :key="service.id">
                      <a :href="'/' + game.slug + '/service/' + service.slug + '&' + service.id ">{{ service.title }}</a>
                    </div>
                    <div v-for="child in childCat.filter(category => category.parent == item.id)" :key="child.id" class="">
                      <a :href="'/' + game.slug + '/catalog/' + child.slug ">{{ child.title }}</a>
                      <div class="service" v-for="service in AllService.filter(sku => sku.category == child.id)" :key="service.id">
                        <a :href="'/' + game.slug + '/service/' + service.slug + '&' + service.id ">{{ service.title }}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        </div>
        <div class="Guides" id="Guides">
          <span class="mainTitle">Guides</span>
          <div class="Categorylist">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div v-for="game in games" :key="game.id" class="swiper-slide">
                  <a :href="'/' + (game.slug == 'wow-shadowlands' ? 'wow-boost' : game.slug)" :id="'game_' + game.id" class="Game">{{ game.title }}</a>
                  <div v-for="item in news.filter(news => news.game_id == game.id)" :key="item.id" v-if="item.type == 1" class="service">
                    <a :href="'/page/blogs/' + game.slug + '/' + item.slug + '&' + item.id">{{ item.title }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="News" id="News">
          <span class="mainTitle">News</span>
          <div class="Categorylist">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div v-for="game in games" :key="game" class="swiper-slide">
                  <a :href="'/' + (game.slug == 'wow-shadowlands' ? 'wow-boost' : game.slug)" :id="'game_' + game.id" class="Game">{{ game.title }}</a>
                  <div v-for="item in news.filter(news => news.game_id == game.id)" :key="item.id" v-if="item.type == 0" class="service">
                    <a :href="'/page/blogs/' + game.slug + '/' + item.slug + '&' + item.id">{{ item.title }}</a>
                  </div>
                </div>
                <div class="swiper-slide">
                  <a href="#" class="Game">About us</a>
                  <div v-for="item in news.filter(news => news.game_id == 0)" :key="item.id" v-if="item.type == 0" class="service">
                    <a :href="'/page/blogs/about-us/' + item.slug + '&' + item.id">{{ item.title }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="Pages" id="Pages">
          <span class="mainTitle">Pages</span>
          <div class="Categorylist">
            <div v-for="page in pages" :key="page.id" v-if="page.slug != 'main'" class="service">
              <a :href="'/page/' + page.slug">{{ ChangeName(page.slug) }}</a>
            </div>
            <div class="service">
              <a href="/page/our-advantages">Why us</a>
            </div>
            <div class="service">
              <a href="/page/signup">Registration</a>
            </div>
             <div class="service">
              <a href="/page/login">Log In</a>
            </div>
             <div class="service">
              <a href="/page/bonus-and-referal">Bonus & Referal system</a>
            </div>
          </div>
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
      title: "Sitemap | Cakeboost",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "",
        },
        {
          hid: "robots",
          name: "robots",
          content: "noindex, follow"
        },
      ],

      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://cakeboost.com'+this.$route.path
        }
      ],
    }
  },
  components: {
    breadcrumbs,
  },
  data() {
    return{
      apiImg: this.$store.getters["getApiImgUrl"],
      globalApi: this.$store.getters["getGlobalApi"],
      categoriesList: []
    }
  },
  async asyncData({ $axios, route, store }) {
      let apiUrl = store.getters["getApiUrl"];
      let globalApi = store.getters["getGlobalApi"];
      let content = [];
      let categories = [];
      let games = [];
      let news = [];
      let mainCat = [];
      let childCat = [];
      let pages = [];
      let AllService = [];
      let response_data_game = await $axios
        .$get(apiUrl + "game?order=orders,asc&filter=status,eq,0&include=id,title,slug")
        .then((data) => {
          if(data){
            games = data.records
          }
        });
        let response_data_main_category = await $axios
        .$get(apiUrl + "category?order=ordr,asc&filter=status,eq,1&filter=parent,eq,0&filter=title,neq,Without category&include=id,title,menu_name,parent,game,slug")
        .then((data) => {
          if(data){
            mainCat = data.records
          }
        });
        let response_data_child_category = await $axios
        .$get(apiUrl + "category?order=ordr,asc&filter=status,eq,1&filter=parent,neq,0&filter=title,neq,Without category&include=id,title,menu_name,parent,game,slug")
        .then((data) => {
          if(data){
            childCat = data.records
          }
        });
        let response_data_sku = await $axios
        .$get(apiUrl + "sku?order=ordr,asc&filter=status,eq,1&include=id,title,menu_name,category,slug,status")
        .then((data) => {
          if(data){
            AllService = data.records
          }
        });
        let response_data_news = await $axios
        .$get(apiUrl + "news?filter=status,eq,1&include=id,title,menu_name,type,game_id,slug")
        .then((data) => {
          if(data){
            news = data.records
          }
        });
        let response_data_pages = await $axios
        .$get(apiUrl + "pages")
        .then((data) => {
          if(data){
            pages = data.records
            console.log(pages)
          }
        });
      return {
        content,
        categories,
        mainCat,
        childCat,
        AllService,
        news,
        pages,
        games,
      };
  },
  mounted() {
    // this.getSitemap()
    setTimeout(() => this.init_swiper(), 1000)

  },
  methods: {
    scrollTo(href){
      var scrollDiv = document.getElementById(href).offsetTop;
      window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
    },

    getCategory(id) {
      let MainCategory = this.categories.find(item => item.id == id)

      let ChildCategory = this.categories.find(item => item.parent == id)
    },
    init_swiper() {
      var mySwiper = new Swiper(".Categorylist .swiper-container", {
        speed: 1000,
        slidesPerView: "auto",
        // slidesPerView: 1,
        spaceBetween: 16,
        // spaceBetween: 30,
      });
    },
    ChangeName(name) {
      let newName = (name[0].toUpperCase() + name.slice(1)).replace(/-/g, " ");
      return newName;
    }
  },
}
</script>
<style scoped>
  .breadCrumb{
    width: 1280px !important;
  }
  @media screen and (max-width: 1745px) {
  .breadCrumb{
    margin-left: 0 !important;
    width: 992px !important;
  }
}
</style>
