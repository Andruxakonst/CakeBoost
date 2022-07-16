<template>
  <div class="content" v-if="this.depth < 3">
    <breadcrumbs />
    <h1 v-if="GuidesCheck" class="blogTitle"> Guides </h1>
    <h1 v-if="NewsCheck" class="blogTitle"> News </h1>

    <div class="chooseAreaTab">
      <div
        id="guidesTab"
        v-on:click="
          (check_heading = false),
            (tab_value = 1),
            NewsCheck = false,
            GuidesCheck = true,
            get_everything(choosen_filter)
        "
        v-bind:class="{ active: !check_heading }"
      >
        Guides
      </div>
      <div
        id="newsTab"
        v-on:click="
          (check_heading = true),
            NewsCheck = true,
            GuidesCheck = false,
            (tab_value = 0),
            get_everything(choosen_filter)
        "
        v-bind:class="{ active: check_heading }"
      >
        News
      </div>
    </div>
    <!--div class="guidesTab" v-if="!this.check_heading"></!--div-->
    <div class="newsTab" style="display: block">
      <div class="mainNews" v-if="main_Guides && this.GuidesCheck">
        <a
          v-for="game in this.games"
          :key="game.id"
          v-if="main_Guides.game_id == game.id"
          v-bind:href="
            '/page/blogs/' +
            game.slug +
            '/' +
            main_Guides.slug +
            '&' +
            main_Guides.id
          "
        >
          <img :src="apiImg + 'news/' + main_Guides.img" alt />
        </a>
        <a
          v-if="main_Guides.game_id == 0"
          v-bind:href="
            '/page/blogs/about-us/' + main_Guides.slug + '&' + main_Guides.id
          "
        >
          <img :src="apiImg + 'news/' + main_Guides.img" alt />
        </a>
        <div>
          <div>{{ main_Guides.date }}</div>
          <div class="mainNewsTitle">{{ main_Guides.title }}</div>
          <div class="mainNewsText">{{ main_Guides.intro }}</div>
          <div>
            <a
              v-for="game in this.games"
              :key="game.id"
              v-if="main_Guides.game_id == game.id"
              v-bind:href="
                '/page/blogs/' +
                game.slug +
                '/' +
                main_Guides.slug +
                '&' +
                main_Guides.id
              "
              >Read more...</a
            >
            <a
              v-if="main_Guides.game_id == 0"
              v-bind:href="
                '/page/blogs/about-us/' + main_Guides.slug + '&' + main_Guides.id
              "
            >
              Read more...
            </a>
          </div>
        </div>
      </div>
      <div class="mainNews" v-if="main_News && this.NewsCheck">
        <a
          v-for="game in this.games"
          :key="game.id"
          v-if="main_News.game_id == game.id"
          v-bind:href="
            '/page/blogs/' +
            game.slug +
            '/' +
            main_News.slug +
            '&' +
            main_News.id
          "
        >
          <img :src="apiImg + 'news/' + main_News.img" alt />
        </a>
        <a
          v-if="main_News.game_id == 0"
          v-bind:href="
            '/page/blogs/about-us/' + main_News.slug + '&' + main_News.id
          "
        >
          <img :src="apiImg + 'news/' + main_News.img" alt />
        </a>
        <div>
          <div>{{ main_News.date }}</div>
          <div class="mainNewsTitle">{{ main_News.title }}</div>
          <div class="mainNewsText">{{ main_News.intro }}</div>
          <div>
            <a
              v-for="game in this.games"
              :key="game.id"
              v-if="main_News.game_id == game.id"
              v-bind:href="
                '/page/blogs/' +
                game.slug +
                '/' +
                main_News.slug +
                '&' +
                main_News.id
              "
              >Read more...</a
            >
            <a
              v-if="main_News.game_id == 0"
              v-bind:href="
                '/page/blogs/about-us/' + main_News.slug + '&' + main_News.id
              "
            >
              Read more...
            </a>
          </div>
        </div>
      </div>
      <div class="chooseGameNews">
        <div>Choose a game for the topic</div>
        <div class="chooseGameNewsFilter_div">
          <ul class="chooseGameNewsFilter">
            <li v-bind:class="{ active: choosen_filter == -1 }">
              <a href="/page/blogs">All</a>
            </li>
            <li v-bind:class="{ active: choosen_filter == 0 }">
              <a href="/page/blogs/about-us">About us</a>
            </li>
            <li
              v-for="item in this.games"
              :key="item.id"
              :id="item.id"
              v-bind:class="{ active: choosen_filter == item.id }"
            >
              <a :href="'/page/blogs/' + item.slug">
                {{ item.title }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="bestTopic" v-if="best_topic.length > 0">
        <div class="newsGuides">
          <div class="underMaskTopic">
            <img
              class="decstop_b"
              v-for="item in this.games"
              v-if="choosen_filter == item.id"
              :key="item.id"
              :src="apiImg + 'gbanner/' + JSON.parse(item.options).banner_news"
              alt
            />
            <img
              class="mobile_b"
              v-for="item in this.games"
              v-if="choosen_filter == item.id"
              :key="item.id"
              :src="
                apiImg +
                'gbanner/' +
                JSON.parse(item.options).banner_news_mobile
              "
              alt
            />
            <img
              class="decstop_b"
              v-if="choosen_filter == -1"
              :src="apiImg +'gbanner/' +imageAll"
              alt
            />
            <img
              class="mobile_b"
              v-if="choosen_filter == -1"
              :src="apiImg +'gbanner/' +imageAll"
              alt
            />
            <img
              class="decstop_b"
              v-if="choosen_filter == 0"
              :src="apiImg +'gbanner/' +imageAbout"
              alt
            />
            <img
              class="mobile_b"
              v-if="choosen_filter == 0"
              :src="apiImg +'gbanner/' +imageAbout"
              alt
            />
            <div></div>
          </div>
          <div class="swiper-container">
            <div>
              <h2 v-if="choosen_filter == -1"
                >Best topics in all of themes</h2
              >
              <h2
                v-for="item in this.games"
                :key="item.id"
                v-if="choosen_filter == item.id"
                >Best topics in {{ item.title }} of theme</h2
              >
            </div>
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-bind:id="item.id"
                v-for="item in this.best_topic"
                :key="item.id"
              >
                <a
                  v-for="game in games"
                  :key="game.id"
                  v-if="item.game_id == game.id"
                  v-bind:href="
                    '/page/blogs/' + game.slug + '/' + item.slug + '&' + item.id
                  "
                >
                  <img :src="apiImg + 'news/' + item.img" alt />
                </a>
                <a
                  v-if="item.game_id == 0"
                  v-bind:href="
                    '/page/blogs/about-us/' + item.slug + '&' + item.id
                  "
                  ><img :src="apiImg + 'news/' + item.img" alt
                /></a>
                <div class="newGuidesBody">
                  <div>
                    <span>{{ item.date }}</span>
                    <span v-if="tab_value == 0">News</span>
                    <span v-else-if="tab_value == 1">Guides</span>
                  </div>
                  <div>
                    <a
                      v-for="game in games"
                      :key="game.id"
                      v-if="item.game_id == game.id"
                      v-bind:href="
                        '/page/blogs/' +
                        game.slug +
                        '/' +
                        item.slug +
                        '&' +
                        item.id
                      "
                      >{{ item.title }}</a
                    >
                    <a
                      v-if="item.game_id == 0"
                      v-bind:href="
                        '/page/blogs/about-us/' + item.slug + '&' + item.id
                      "
                      >{{ item.title }}</a
                    >
                  </div>
                  <div>
                    <span
                      v-for="item_games in games"
                      :key="item_games.id"
                      v-if="item_games.id == item.game_id"
                      >{{ item_games.title }}</span
                    >
                    <span>
                      <img class="topicShare" src="/img/Share.svg" alt />

                      <div style="right: 36px" class="topicShareDiv">
                        <a
                          :href="
                            'https://www.facebook.com/sharer.php?display=popup&u=' +
                            share_url(item)
                          "
                        >
                          <img
                            style="margin-right: 0"
                            src="/img(ColorSochialLogo)/Facebook.svg"
                            alt
                          />
                        </a>
                        <!--img src="/img(ColorSochialLogo)/Skype.svg" alt />
                        <img src="/img(ColorSochialLogo)/Mail.svg" alt />
                        <img src="/img(ColorSochialLogo)/Telegram.svg" alt /-->
                        <a
                          :href="
                            'https://www.twitter.com/share?url=' +
                            share_url(item)
                          "
                        >
                          <img
                            style="margin-right: 0"
                            src="/img(ColorSochialLogo)/Twitter.svg"
                            alt
                          />
                        </a>
                      </div>

                      <img
                        v-if="
                          !$store.getters['getUserLoginCheck'].user_check_login
                        "
                        src="/img/Like.svg"
                        alt
                      />
                      <img
                        @click="set_like(item)"
                        v-if="
                          $store.getters['getUserLoginCheck']
                            .user_check_login && !check_likes(item.id)
                        "
                        src="/img/Like.svg"
                        alt
                      />
                      <img
                        class="active_likes"
                        @click="delete_like(item)"
                        v-if="
                          $store.getters['getUserLoginCheck']
                            .user_check_login && check_likes(item.id)
                        "
                        src="/img/Like.svg"
                        alt
                      />
                      <span>{{ item.likes }}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <span
              class="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
            <span
              class="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
          </div>
        </div>
      </div>
      <h2
        class="lastNewsTitle"
        v-if="choosen_filter == -1 && last_news.length > 0"
      >
        Latest news in all themes
      </h2>
      <h2
        class="lastNewsTitle"
        v-for="item in this.games"
        :key="item.id"
        v-if="choosen_filter == item.id && last_news.length > 0"
      >
        Latest news in {{ item.title }} themes
      </h2>
      <div class="lastNews" v-if="last_news.length > 0">
        <div class="lastNewsItem" v-for="item in this.last_news" :key="item.id">
          <a
            v-for="game in games"
            :key="game.id"
            v-if="item.game_id == game.id"
            v-bind:href="
              '/page/blogs/' + game.slug + '/' + item.slug + '&' + item.id
            "
          >
            <img :src="apiImg + 'news/' + item.img" alt />
          </a>
          <a
            v-if="item.game_id == 0"
            v-bind:href="'/page/blogs/about-us/' + item.slug + '&' + item.id"
          >
            <img :src="apiImg + 'news/' + item.img" alt />
          </a>
          <div class="newGuidesBody">
            <div>
              <span>{{ item.date }}</span>
              <span v-if="tab_value == 0">News</span>
              <span v-else-if="tab_value == 1">Guides</span>
            </div>
            <div>
              <a
                v-for="game in games"
                :key="game.id"
                v-if="item.game_id == game.id"
                v-bind:href="
                  '/page/blogs/' + game.slug + '/' + item.slug + '&' + item.id
                "
                >{{ item.title }}</a
              >
              <a
                v-if="item.game_id == 0"
                v-bind:href="
                  '/page/blogs/about-us/' + item.slug + '&' + item.id
                "
              >
                {{ item.title }}
              </a>
            </div>
            <div>
              <span
                v-for="item_games in games"
                :key="item_games.id"
                v-if="item_games.id == item.game_id"
                >{{ item_games.title }}</span
              >
              <span>
                <img class="topicShare" src="/img/Share.svg" alt />

                <div style="right: 36px" class="topicShareDiv">
                  <a
                    :href="
                      'https://www.facebook.com/sharer.php?display=popup&u=' +
                      share_url(item)
                    "
                  >
                    <img
                      style="margin-right: 0"
                      src="/img(ColorSochialLogo)/Facebook.svg"
                      alt
                    />
                  </a>
                  <!--img src="/img(ColorSochialLogo)/Skype.svg" alt />
                        <img src="/img(ColorSochialLogo)/Mail.svg" alt />
                        <img src="/img(ColorSochialLogo)/Telegram.svg" alt /-->
                  <a
                    :href="
                      'https://www.twitter.com/share?url=' + share_url(item)
                    "
                  >
                    <img
                      style="margin-right: 0"
                      src="/img(ColorSochialLogo)/Twitter.svg"
                      alt
                    />
                  </a>
                </div>

                <img
                  v-if="!$store.getters['getUserLoginCheck'].user_check_login"
                  src="/img/Like.svg"
                  alt
                />
                <img
                  @click="set_like(item)"
                  v-if="
                    $store.getters['getUserLoginCheck'].user_check_login &&
                    !check_likes(item.id)
                  "
                  src="/img/Like.svg"
                  alt
                />
                <img
                  class="active_likes"
                  @click="delete_like(item)"
                  v-if="
                    $store.getters['getUserLoginCheck'].user_check_login &&
                    check_likes(item.id)
                  "
                  src="/img/Like.svg"
                  alt
                />
                <span>{{ item.likes }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="allNews" v-if="all_news.length > 0">
        <div class="lastNewsItem" v-for="item in this.all_news" :key="item.id">
          <a
            v-for="game in games"
            :key="game.id"
            v-if="item.game_id == game.id"
            v-bind:href="
              '/page/blogs/' + game.slug + '/' + item.slug + '&' + item.id
            "
          >
            <img :src="apiImg + 'news/' + item.img" alt />
          </a>
          <a
            v-if="item.game_id == 0"
            v-bind:href="'/page/blogs/about-us/' + item.slug + '&' + item.id"
            ><img :src="apiImg + 'news/' + item.img" alt
          /></a>
          <div class="newGuidesBody">
            <div>
              <span>{{ item.date }}</span>
              <span v-if="tab_value == 0">News</span>
              <span v-else-if="tab_value == 1">Guides</span>
            </div>
            <div>
              <a
                v-for="game in games"
                :key="game.id"
                v-if="item.game_id == game.id"
                v-bind:href="
                  '/page/blogs/' + game.slug + '/' + item.slug + '&' + item.id
                "
                >{{ item.title }}</a
              >
              <a
                v-if="item.game_id == 0"
                v-bind:href="
                  '/page/blogs/about-us/' + item.slug + '&' + item.id
                "
              >
                {{ item.title }}
              </a>
            </div>
            <div>
              <span
                v-for="item_games in games"
                :key="item_games.id"
                v-if="item_games.id == item.game_id"
                >{{ item_games.title }}</span
              >
              <span>
                <img class="topicShare" src="/img/Share.svg" alt />

                <div style="right: 36px" class="topicShareDiv">
                  <a
                    :href="
                      'https://www.facebook.com/sharer.php?display=popup&u=' +
                      share_url(item)
                    "
                  >
                    <img
                      style="margin-right: 0"
                      src="/img(ColorSochialLogo)/Facebook.svg"
                      alt
                    />
                  </a>
                  <!--img src="/img(ColorSochialLogo)/Skype.svg" alt />
                        <img src="/img(ColorSochialLogo)/Mail.svg" alt />
                        <img src="/img(ColorSochialLogo)/Telegram.svg" alt /-->
                  <a
                    :href="
                      'https://www.twitter.com/share?url=' + share_url(item)
                    "
                  >
                    <img
                      style="margin-right: 0"
                      src="/img(ColorSochialLogo)/Twitter.svg"
                      alt
                    />
                  </a>
                </div>

                <img
                  v-if="!$store.getters['getUserLoginCheck'].user_check_login"
                  src="/img/Like.svg"
                  alt
                />
                <img
                  @click="set_like(item)"
                  v-if="
                    $store.getters['getUserLoginCheck'].user_check_login &&
                    !check_likes(item.id)
                  "
                  src="/img/Like.svg"
                  alt
                />
                <img
                  class="active_likes"
                  @click="delete_like(item)"
                  v-if="
                    $store.getters['getUserLoginCheck'].user_check_login &&
                    check_likes(item.id)
                  "
                  src="/img/Like.svg"
                  alt
                />
                <span>{{ item.likes }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <img
          src="/img/Left.svg"
          v-on:click="get_all_news_by_pag(active_index - 2)"
          v-if="active_index > 1"
          alt
        />
        <img v-else src="/img/Left.svg" alt />
        <div
          v-for="item in this.paginator_list"
          :key="item.id"
          v-bind:class="{ active: active_index == item.title }"
          v-on:click="get_all_news_by_pag(item.index)"
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
          v-on:click="get_all_news_by_pag(active_index)"
          v-if="active_index != list_number"
          alt
        />
        <img v-else src="/img/Right.svg" alt />
      </div>
    </div>

    <script v-html="jsonld" name="check-json-articles" type="application/ld+json" />
  </div>
  <nuxt-child v-else-if="this.depth == 3" />
</template>
<script>
import breadcrumbs from "~/components/breadcrumbs.vue";

export default {
  head() {
    return {
      title: "Blogs | " + this.game_page_title + " Cakeboost",
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: this.getSeoNewsGame(this.choosen_filter , this.games, 'canonical'),
          // href: "WoW",
        }
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          // content: this.settings ? this.settings.description : '',
          content: this.getSeoNewsGame(this.choosen_filter , this.games, 'description'),
        },
         {
          hid: "title",
          name: "title",
          // content: this.settings ? this.settings.title : '',
          content: this.getSeoNewsGame(this.choosen_filter , this.games, 'title'),
        },
      ],

      // link: [
      //   {
      //     hid: 'canonical',
      //     rel: 'canonical',
      //     href:'https://cakeboost.com'+this.$route.path
      //   }
      // ],
    };
  },
  data() {
    return {
       apiImg: this.$store.getters["getApiImgUrl"],
      apiUrl: this.$store.getters["getApiUrl"],
      globalApi: this.$store.getters["getGlobalApi"],
      news: [],
      blogs: [],
      check_heading: false,
      game_url: 0,
      game_url_string: "",
      choosen_filter: -1,
      last_news: [],
      games: [],
      all_news: [],
      best_topic: [],
      results_paginator: 0,
      paginator_list: [],
      list_number: 0,
      active_index: 1,
      depth: 1,
      main_Guides: "",
      tab_value: 1,
      game_page_title: "",
      check_likes_array: [],
      origin_location: "",
      NewsCheck: false,
      GuidesCheck: true,
      settings: [],
      jsonld: {},
    };
  },
  mounted() {
    this.fill_paginator_list(),
      this.init_swiper(),
      this.get_game_for_filter(),
      this.get_likes(),
      (this.origin_location = window.location.origin);
  },
  components: {
    breadcrumbs,
  },
  created() {
    this.get_blogs_depth();
  },
  async asyncData({ $axios, store, route }) {
    let apiUrl = store.getters["getApiUrl"];
    let main_Guides = "";
    let main_News = "";
    let last_news = [];
    let games = [];
    let all_news = [];
    let results_paginator = 0;
    let best_topic = [];
    let tab_value = 1;
    let game_url = 0;
    let game_url_string = "";
    let game_page_title = "";
    let settings = [];
    let imageAll = [];
    let imageAbout = [];
    let jsonld = {
      "@context": "https://schema.org",
      "@graph": []
    };
    let response_data_settings = await $axios
        .$get(
          apiUrl +
            "settings/1"
        )
        .then((data) => {
          if(data.seo_news){
            console.log(data.seo_news)
            imageAll = data.news_img
            imageAbout = data.about_img
            settings = JSON.parse(data.seo_news);
          }
        });
    if (route.path.split("/").length == 4) {
      game_url = route.params.gameblogs;
      game_url_string = route.params.gameblogs;
      if (route.params.gameblogs == "about-us") {
        game_url = 0;
        game_page_title = "About us";
      } else {
        let response_data_game_id = await $axios
          .$get(apiUrl + "game?filter=slug,eq," + game_url)
          .then((data) => {
            game_url = data.records[0].id;
            game_page_title = data.records[0].title;
          });
      }
      let response_data = await $axios
        .$get(
          apiUrl +
            "news?filter=status,eq,1&order=sticky,desc&filter=type,eq,1&order=date,desc&size=1&filter=game_id,eq," +
            game_url
        )
        .then((data) => {
          main_Guides = data.records[0];
        });

      let response_data_Guides = await $axios
        .$get(
          apiUrl +
            "news?filter=status,eq,1&order=sticky,desc&filter=type,eq,0&order=date,desc&size=1&filter=game_id,eq," +
            game_url
        )
        .then((data) => {
          main_News = data.records[0];
        });
      let response_data_l = await $axios
        .$get(
          apiUrl +
            "news?order=date,desc&filter=status,eq,1&filter=type,eq,1&size=2&filter=game_id,eq," +
            game_url
        )
        .then((data) => {
          last_news = data.records;
        });
      let response_data_g = await $axios.$get(apiUrl + "game").then((data) => {
        games = data.records;
      });
      let response_data_r = await $axios
        .$get(
          apiUrl +
            "news?order=date,desc&filter=status,eq,1&filter=type,eq,1&page=1,8&filter=game_id,eq," +
            game_url
        )
        .then((data) => {
          all_news = data.records;
          results_paginator = data.results ? data.results : 0;
        });
      let response_data_b = await $axios
        .$get(
          apiUrl +
            "news?order=likes,desc&order=shares,desc&filter=status,eq,1&filter=type,eq,1&size=6&filter=game_id,eq," +
            game_url
        )
        .then((data) => {
          best_topic = data.records;
        });
    } else {
      let response_data = await $axios
        .$get(
          apiUrl +
            "news?filter=status,eq,1&order=sticky,desc&filter=type,eq,1&order=date,desc&size=1"
        )
        .then((data) => {
          main_Guides = data.records[0];
        });
      let response_data_l = await $axios
        .$get(
          apiUrl +
            "news?order=date,desc&filter=status,eq,1&filter=type,eq,1&size=2"
        )
        .then((data) => {
          last_news = data.records;
        });
      let response_data_g = await $axios.$get(apiUrl + "game").then((data) => {
        games = data.records;
      });
      let response_data_r = await $axios
        .$get(
          apiUrl +
            "news?order=date,desc&filter=status,eq,1&filter=type,eq,1&page=1,8"
        )
        .then((data) => {
          all_news = data.records;
          results_paginator = data.results;
        });
      let response_data_b = await $axios
        .$get(
          apiUrl +
            "news?order=likes,desc&order=shares,desc&filter=status,eq,1&filter=type,eq,1&size=6"
        )
        .then((data) => {
          best_topic = data.records;
        });
    }

    try {
      all_news.map((blog) => {
        jsonld["@graph"].push({
          "@context": "https://schema.org",
          "@type": "Article",
          "name": blog.title
        })
      })
    } catch (e) {}
    return {
      main_Guides,
      main_News,
      last_news,
      games,
      all_news,
      results_paginator,
      best_topic,
      game_url,
      game_url_string,
      game_page_title,
      settings,
      imageAll,
      imageAbout,
      jsonld
    };
  },
  methods: {
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
    share_url(item) {
      return (
        this.origin_location +
        this.$store.getters["getGlobalGame"] +
        "/" +
        encodeURIComponent(item.slug + "&" + item.id)
      );
    },
    async delete_like(item) {
      let news_set_likes = await this.$axios
        .$post(this.globalApi + "requests.php", {
          method: "likes_dell",
          token: this.get_access(),
          news_id: item.id,
        })
        .then((data) => {
          if (data.status == "200") {
            this.get_likes();
            item.likes--;
          }
        });
    },
    async set_like(item) {
      let news_set_likes = await this.$axios
        .$post(this.globalApi + "requests.php", {
          method: "likes_add",
          token: this.get_access(),
          news_id: item.id,
        })
        .then((data) => {
          if (data.status == "200") {
            this.get_likes();
            item.likes++;
          }
        });
    },
    check_likes(id) {
      for (let i = 0; i < this.check_likes_array.length; i++) {
        if (this.check_likes_array[i] == id) {
          return true;
        }
      }
      return false;
    },
    async get_likes() {
      let temp = [];
      for (let i = 0; i < this.all_news.length; i++) {
        temp.push(this.all_news[i].id);
      }
      for (let i = 0; i < this.best_topic.length; i++) {
        temp.push(this.best_topic[i].id);
      }
      for (let i = 0; i < this.last_news.length; i++) {
        temp.push(this.last_news[i].id);
      }
      let temp_id = temp.join(",");
      if (this.get_access()) {
        let news_likes = await this.$axios
          .$post(this.globalApi + "requests.php", {
            method: "likes_list",
            token: this.get_access(),
            news_id: temp_id,
          })
          .then((data) => {
            if (!data.status) {
              this.check_likes_array = data;
            }
          });
      }
    },
    async get_game_for_filter() {
      if (this.$route.path.split("/").length == 4) {
        let game_url = this.$route.params.gameblogs;
        if (this.$route.params.gameblogs == "about-us") {
          this.choosen_filter = 0;
        } else {
          let response_data_game_id = await this.$axios
            .$get(
              this.apiUrl + "game?filter=slug,eq," + game_url + "&include=id"
            )
            .then((data) => {
              this.choosen_filter = data.records[0].id;
            });
        }
      }
    },
	  // async get_main_news(id) {
    //   freezeClic = true;
		//   if (this.choosen_filter == -1) {
		// 	let response_data = await this.$axios
		// 	  .$get(
		// 		this.apiUrl +
		// 		  "news?filter=status,eq,1&order=sticky,desc&filter=type,eq," +
		// 		  this.tab_value +
		// 		  "&order=date,desc&size=1"
		// 	  )
		// 	  .then((data) => {
		// 		this.main_Guides = data.records[0];
		// 	  });
		//   } else {
		// 	let response_data = await this.$axios
		// 	  .$get(
		// 		this.apiUrl +
		// 		  "news?filter=status,eq,1&filter=sticky,ge,1&order=date,desc&filter=type,eq," +
		// 		  this.tab_value +
		// 		  "&size=1&filter=game_id,eq," +
		// 		  id
		// 	  )
		// 	  .then((data) => {
		// 		this.main_Guides = data.records[0];
		// 	  });
		//   }
    //   freezeClic = false;
		// },
		async get_last_news(id) {
      freezeClic = true;
		  if (this.choosen_filter == -1) {
			let response_data = await this.$axios
			  .$get(
				this.apiUrl +
				  "news?order=date,desc&filter=status,eq,1&filter=type,eq," +
				  this.tab_value +
				  "&size=2"
			  )
			  .then((data) => {
				this.last_news = data.records;
			  });
		  } else {
			let response_data = await this.$axios
			  .$get(
				this.apiUrl +
				  "news?order=date,desc&filter=status,eq,1&filter=game_id,eq," +
				  id +
				  "&filter=type,eq," +
				  this.tab_value +
				  "&size=2"
			  )
			  .then((data) => {
				this.last_news = data.records;
			  });
		  }
      freezeClic = false;
		},
		async get_all_news(id) {
      freezeClic = true;
		  if (this.choosen_filter == -1) {
			let response_data = await this.$axios
			  .$get(
				this.apiUrl +
				  "news?order=date,desc&filter=status,eq,1&filter=type,eq," +
				  this.tab_value +
				  "&page=1,8"
			  )
			  .then((data) => {
				this.all_news = data.records;
				this.results_paginator = data.results;
				this.fill_paginator_list();
			  });
		  } else {
			let response_data = await this.$axios
			  .$get(
				this.apiUrl +
				  "news?order=date,desc&filter=status,eq,1&filter=game_id,eq," +
				  id +
				  "&filter=type,eq," +
				  this.tab_value +
				  "&page=1,8"
			  )
			  .then((data) => {
				this.all_news = data.records;
				this.results_paginator = data.results;
				this.fill_paginator_list();
			  });
		  }
      freezeClic = false;
		},
		async get_best_topic(id) {
      freezeClic = true;
		  if (this.choosen_filter == -1) {
			let response_data = await this.$axios
			  .$get(
				this.apiUrl +
				  "news?order=likes,desc&order=shares,desc&filter=status,eq,1&filter=type,eq," +
				  this.tab_value +
				  "&size=6"
			  )
			  .then((data) => {
				this.best_topic = data.records;
			  });
		  } else {
			let response_data = await this.$axios
			  .$get(
				this.apiUrl +
				  "news?order=likes,desc&order=shares,desc&filter=status,eq,1&filter=game_id,eq," +
				  id +
				  "&filter=type,eq," +
				  this.tab_value +
				  "&size=6"
			  )
			  .then((data) => {
				this.best_topic = data.records;
			  });
		  }
		  this.init_swiper();
      freezeClic = false;
		},
		get_everything(id) {

      console.log(this.main_Guides),
      console.log(this.main_News),
			freezeClic = true;
			  // if (this.choosen_filter == -1) {
				// let response_data = this.$axios
				//   .$get(
				// 	this.apiUrl +
				// 	  "news?filter=status,eq,1&order=sticky,desc&filter=type,eq," +
				// 	  this.tab_value +
				// 	  "&order=date,desc&size=1"
				//   )
				//   .then((data) => {
				// 	this.main_Guides = data.records[0];
				//   });
			  // } else {
				// let response_data = this.$axios
				//   .$get(
				// 	this.apiUrl +
				// 	  "news?filter=status,eq,1&filter=sticky,ge,1&order=date,desc&filter=type,eq," +
				// 	  this.tab_value +
				// 	  "&size=1&filter=game_id,eq," +
				// 	  id
				//   )
				//   .then((data) => {
				// 	this.main_Guides = data.records[0];
				//   });
			  // }
			  if (this.choosen_filter == -1) {
				let response_data = this.$axios
				  .$get(
					this.apiUrl +
					  "news?order=date,desc&filter=status,eq,1&filter=type,eq," +
					  this.tab_value +
					  "&size=2"
				  )
				  .then((data) => {
					this.last_news = data.records;
				  });
			  } else {
				let response_data = this.$axios
				  .$get(
					this.apiUrl +
					  "news?order=date,desc&filter=status,eq,1&filter=game_id,eq," +
					  id +
					  "&filter=type,eq," +
					  this.tab_value +
					  "&size=2"
				  )
				  .then((data) => {
					this.last_news = data.records;
				  });
			  }
			  if (this.choosen_filter == -1) {
				let response_data = this.$axios
				  .$get(
					this.apiUrl +
					  "news?order=date,desc&filter=status,eq,1&filter=type,eq," +
					  this.tab_value +
					  "&page=1,8"
				  )
				  .then((data) => {
					this.all_news = data.records;
					this.results_paginator = data.results;
					this.fill_paginator_list();
				  });
			  } else {
				let response_data = this.$axios
				  .$get(
					this.apiUrl +
					  "news?order=date,desc&filter=status,eq,1&filter=game_id,eq," +
					  id +
					  "&filter=type,eq," +
					  this.tab_value +
					  "&page=1,8"
				  )
				  .then((data) => {
					this.all_news = data.records;
					this.results_paginator = data.results;
					this.fill_paginator_list();
				  });
			  }
			  if (this.choosen_filter == -1) {
				let response_data = this.$axios
				  .$get(
					this.apiUrl +
					  "news?order=likes,desc&order=shares,desc&filter=status,eq,1&filter=type,eq," +
					  this.tab_value +
					  "&size=6"
				  )
				  .then((data) => {
					this.best_topic = data.records;
				  });
			  } else {
				let response_data = this.$axios
				  .$get(
					this.apiUrl +
					  "news?order=likes,desc&order=shares,desc&filter=status,eq,1&filter=game_id,eq," +
					  id +
					  "&filter=type,eq," +
					  this.tab_value +
					  "&size=6"
				  )
				  .then((data) => {
					this.best_topic = data.records;
				  });
			  }
			  this.init_swiper();
			freezeClic = false;
		},
    async get_games() {
			freezeClic = true;
      let response_data = await this.$axios
        .$get(this.apiUrl + "game")
        .then((data) => {
          this.games = data.records;
        });
			freezeClic = false;
    },
    scroll_to_top() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    getSeoNewsGame(gameId, gamesArr, text){
      let seoNews = gamesArr.find(item => item.id == gameId)
      if(gameId > 0) {
        if(seoNews){
          if(seoNews.seo_news != ''){
            seoNews = JSON.parse(seoNews.seo_news)
            if(text == "canonical"){
              return seoNews[text] != "" ? seoNews[text] : 'https://cakeboost.com'+ this.$route.path
            } else {
              return seoNews[text]
            }
          } else {
            if(text == "canonical"){
              return this.settings[text] != "" ? this.settings[text] : 'https://cakeboost.com'+ this.$route.path
            } else {
              return this.settings[text]
            }
          }
        }
      } else {
        return this.settings[text]
      }
    },
    fill_paginator_list() {
			freezeClic = true;
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
			freezeClic = false;
    },
    async get_all_news_by_pag(index) {
			freezeClic = true;
      this.active_index = this.paginator_list[index].title;
      if (this.choosen_filter == -1) {
        let response_data = await this.$axios
          .$get(
            this.apiUrl +
              "news?order=date,desc&filter=status,eq,1&filter=type,eq," +
              this.tab_value +
              "&page=" +
              this.paginator_list[index].title +
              ",8"
          )
          .then((data) => {
            this.all_news = data.records;
            this.results_paginator = data.results;
            this.get_likes()
          });
      } else {
        let response_data = await this.$axios
          .$get(
            this.apiUrl +
              "news?order=date,desc&filter=status,eq,1&filter=game_id,eq," +
              this.choosen_filter +
              "&filter=type,eq," +
              this.tab_value +
              "&page=" +
              this.paginator_list[index].title +
              ",8"
          )
          .then((data) => {
            this.all_news = data.records;
            this.results_paginator = data.results;
            this.get_likes();
          });
      }
			freezeClic = false;
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
    },
    get_blogs_depth() {
      if (this.$route.path.split("/").length == 3) {
        this.depth = 1;
      }
      if (this.$route.path.split("/").length == 4) {
        this.depth = 2;
      }
      if (this.$route.path.split("/").length == 5) {
        this.depth = 3;
      }
    },
    init_swiper() {
      console.log(document.querySelector(".newsGuides .swiper-container"))
      var mySwiper = new Swiper(".newsGuides .swiper-container", {
        speed: 1000,
        // spaceBetween: 16,
        slidesPerView: "3",
      });
    },
  },
  beforeMount() {},
};
</script>
