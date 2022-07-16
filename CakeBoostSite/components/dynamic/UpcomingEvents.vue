<template>
    <div class="UpcomingEvents" v-if="times.length > 0" :style="timesFilter().length > 0 ? '' : 'display:none'">
      <div class="arrowAndHref">
        <!-- <a href="/page/special-offers"> -->
          <span>Upcoming Events</span>
        <!-- </a> -->
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(time, index) in times"
            :key="index"
            :style="'border-top: 4px solid' + time.color +
            (($store.getters['getSelectedZone'] == 'eu' && time.time_cest != '' && set_salestime_sku(time.time_cest)) ? '' : '; display: none;')
            "
          >
            <div class="EventTitle">
              <img :src="apiImg + 'gicons/' + time.icon">
              <span>{{ time.title }}</span>
            </div>
            <div class="timer">
              <span>in</span>
              <span id="event_deadline">{{set_salestime_sku(time.time_cest)}}
              </span>
            </div>
            <a :href="'/'+ $store.getters['getGlobalGame'] + '/service/'+ time.slug + '&' + time.product_id + '&' + time.id" v-if="$store.getters['getSelectedZone'] == 'eu'" class="JoinFrom">Join from €{{ time.fr_price_eur }}</a>
          </div>
        </div>
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(time, index) in times"
            :key="index"
            :style="'border-top: 4px solid' + time.color +
            (($store.getters['getSelectedZone'] == 'us' && time.time_edt != '' && set_salestime_sku(time.time_edt)) ? '' : '; display: none;')
            "
          >
            <div class="EventTitle">
              <img :src="apiImg + 'gicons/' + time.icon">
              <span>{{ time.title }}</span>
            </div>
            <div class="timer">
              <span>in</span>
              <span id="event_deadline">{{set_salestime_sku(time.time_edt)}}
              </span>
            </div>
            <a :href="'/'+ $store.getters['getGlobalGame'] + '/service/'+ time.slug + '&' + time.product_id + '&' + time.id" v-if="$store.getters['getSelectedZone'] == 'us'" class="JoinFrom">Join from ${{ time.fr_price_usd }}</a>
          </div>
        </div>
      </div>
      <div class="straightNavL swiper-button-disabled">
        <div style="left: 0; top: 50%">
          <img src="/imgSlider/Right.svg" alt />
        </div>
      </div>
      <div class="straightNavR">
        <div style="right: 0; top: 50%">
          <img src="/imgSlider/Right.svg" alt />
        </div>
      </div>
    <script v-html="jsonld" name="check-json" type="application/ld+json" />
    </div>
</template>

<script>
import moment from "moment";
export default {
    props: ['game_id'],

    data() {
        return {
            apiImg: this.$store.getters["getApiImgUrl"],
            apiUrl: this.$store.getters["getApiUrl"],
            // apiUrl: 'https://api.cakeboost.com/api/v14887401369/api.php/records/',
            globalApi: this.$store.getters["getGlobalApi"],
            times: [],
            jsonld: {},
        }
    },
    mounted() {
      try {
        this.times = JSON.parse(localStorage.getItem("times"))[this.game_id] || [];
        this.compare_times();
      } catch(e) {
        this.times = [];
      }
      if(this.times.length === 0 || this.times.constructor != Object) {
        this.get_times();
      }
    },
    methods: {
        async compare_times() {
          let times_list = await this.$axios
            .$post(this.globalApi + "requests.php", {
                method: "event_times",
                game_id: this.game_id,
            })
            .then((data) => {
              if(data.status != '100'){
                let times_update = data;
                if(JSON.stringify(times_update) !== JSON.stringify(this.times)) {
                  console.log("UPDATED TIMES")
                  this.times = times_update;
                  
                  var allTimes = JSON.parse(localStorage.getItem("times")) || {};
                  allTimes[this.game_id] = this.times
                  localStorage.setItem("times", JSON.stringify(allTimes))
                }
              }
            })
        },

        async get_times(game_id){
            let times_list = await this.$axios
            .$post(this.globalApi + "requests.php", {
                method: "event_times",
                game_id: this.game_id,
            })
            .then((data) => {
                if(data.status != '100'){
                this.times = data;

                var allTimes = JSON.parse(localStorage.getItem("times")) || {};

                allTimes[this.game_id] = this.times
                localStorage.setItem("times", JSON.stringify(allTimes))

                this.jsonld = {
                    "@context": "https://schema.org",
                    "@type": "SaleEvent",
                    "event": this.times.map((time) => {
                    return {
                        "@type": "Event",
                        "offers": '/'+ this.$store.getters['getGlobalGame'] + '/service/'+ time.slug + '&' + time.product_id + '&' + time.id,
                        "startDate": time.time_cest,
                        "url": window.location.href
                    }
                    })
                }
                }
            })
        },
        timesFilter(){
            try {
              if(this.$store.getters['getSelectedZone'] == 'eu'){
                  let timesFiltred = this.times.filter(item => item.time_edt == '')
                  return timesFiltred;
              } else if(this.$store.getters['getSelectedZone'] == 'us'){
                  let timesFiltred = this.times.filter(item => item.time_cest == '')
                  return timesFiltred;
              }
            } catch (e) {
              return 0;
            }
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
    }
}
</script>