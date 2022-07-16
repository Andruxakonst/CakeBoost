<template>
  <div class="content" v-if="this.depth == 1">
    <h1 class="blogTitle">
      Special offers
    </h1>
    <div class="specialOffers sp_offers_div">
      <div class="swiper-slide" v-for="item in this.spechial_offers" :key="item.id" v-if="item.game_id == $store.getters['getGlobalGameId'] ">
        <div>
          <img :src="apiImg + 'offers/'+item.img" alt />
          <a v-bind:href="'/page/special-offers/'+item.slug+'&'+item.id" class="mask"></a>
          <div class="title">
            <div>{{item.title}}</div>
            <div>{{item.intro}}</div>
          </div>
          <div class="time" v-if="item.d_time">{{item.d_time}}</div>
        </div>
      </div>
    </div>
  </div>
  <nuxt-child v-else />
</template>
<script>
import breadcrumbs from "~/components/breadcrumbs.vue";
import moment from "moment";
import momenttz from "moment-timezone";
export default {
  head() {
    return {
      title:'Special offers | Cakeboost',
      meta: [
        {
          hid: "description",
          name: "description",
          content: '',
        },
        {
          hid: "robots",
          name: "robots",
          content: "noindex, follow"
        }
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
  data() {
    return {
      apiImg: this.$store.getters["getApiImgUrl"],
      apiUrl: this.$store.getters["getApiUrl"],
      spechial_offers: [],
      depth:1
    };
  },
  mounted() {},
  components: {
    breadcrumbs,
  },
  created() {
    this.get_blogs_depth();
  },
  async asyncData({ $axios, store, route }) {
    let apiUrl = store.getters["getApiUrl"];
    let spechial_offers = [];
    let currentDate = moment()
      .tz("Europe/Berlin")
      .format("YYYY-MM-DD HH:mm:ss");
    let response_offers = await $axios
      .$get(apiUrl + "offers?filter=status,eq,1&order=sort,asc")
      .then((data) => {
        spechial_offers = data.records;
        for (let i = 0; i < spechial_offers.length; i++) {
          let temp_cedt = moment.duration(
            moment(spechial_offers[i].live).diff(moment(currentDate))
          );
          if (temp_cedt.valueOf() > 0) {
            spechial_offers[i].d_time =
              temp_cedt.days() +
              "d " +
              temp_cedt.hours() +
              "h " +
              temp_cedt.minutes() +
              "m";
          } else {
            spechial_offers[i].d_time = null;
          }
        }
      });
    return {
      spechial_offers,
    };
  },
  methods: {
    get_blogs_depth() {
      if (this.$route.path.split("/").length == 3) {
        this.depth = 1;
      }
      if (this.$route.path.split("/").length == 4) {
        this.depth = 2;
      }
    },
  },
  beforeMount() {},
};
</script>
