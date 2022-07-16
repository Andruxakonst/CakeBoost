<template>
  <div class="content">
    <breadcrumbs />
    <div class="eventCalendar calendarPage">
      <h1>
        Events calendar
      </h1>
      <div  class="flex-container" >
        <div  v-for="(item,index) in main_event.near"  v-if="$store.getters['getSelectedZone'] == 'us' && item.last_edt" :key="index"   class="eventsBanner flex-item">
          <div class="eventsItem">
            <div  :style="{background: get_color(item.allegiance)}" class="redLine"></div>
            <img
                        v-for="fraction_img in fractions"
                        :key="fraction_img.id"
                        v-if="fraction_img.id == item.allegiance"
                        :src="apiImg + 'gicons/' + fraction_img.icon"
                        style="padding: 23px;"
                        alt
            />
            <div class="bannerItemEvents">
              <div>{{main_event.product.menu_name}}</div>
              <div>
                <img src="/img/Clocks.png" alt >
                <span>{{get_string_time(item.last_edt)}}</span>
              </div>
              <div>
                <span>
                  <span v-if="main_event.product.price_usd_sale > 0 && main_event.product.price_usd_sale == 0">{{main_event.product.price_usd_sale}}$</span>
                  <span v-if="main_event.product.price_usd_sale == 0 && main_event.product.price_usd_sale2 > 0">{{main_event.product.price_usd_sale2}}$</span>
                  {{main_event.product.price_usd}}$
                </span>
                 <a
                    v-bind:href="
                      '/' +
                      $store.getters['getGlobalGame'] +
                      '/service/' +
                      main_event.product.slug +
                      '&' +
                      main_event.product.id +
                      '&' +
                      item.id
                    " class="eventsBannerBuy">Buy now</a>
              </div>
            </div>
          </div>
        </div>
         <div  v-for="(item,index) in main_event.near"  v-if="$store.getters['getSelectedZone'] == 'eu' && item.last_cest" :key="index"   class="eventsBanner flex-item">
          <div class="eventsItem">
            <div  :style="{background: get_color(item.allegiance)}" class="redLine"></div>
            <img
                        v-for="fraction_img in fractions"
                        :key="fraction_img.id"
                        v-if="fraction_img.id == item.allegiance"
                        :src="apiImg + 'gicons/' + fraction_img.icon"
                        alt
            />
            <div class="bannerItemEvents">
              <div>{{main_event.product.menu_name}}</div>
              <div>
                <img src="/img/Clocks.png" alt >
                <span>{{get_string_time(item.last_cest)}}</span>
              </div>
              <div>
                <span>
                <span v-if="main_event.product.price_eur_sale > 0 && main_event.product.price_eur_sale == 0">{{main_event.product.price_eur_sale}}€</span>
                <span v-if="main_event.product.price_eur_sale == 0 && main_event.product.price_eur_sale2 > 0">{{main_event.product.price_eur_sale2}}€</span>
                {{main_event.product.price_eur}}€
                </span>
                 <a
                    v-bind:href="
                      '/' +
                      $store.getters['getGlobalGame'] +
                      '/service/' +
                      main_event.product.slug +
                      '&' +
                      main_event.product.id +
                      '&' +
                      item.id
                    " class="eventsBannerBuy">Buy now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="calendarLine">
        <div>
          {{ active_date[1].split(" ")[1] }}, {{ active_date[2].split(" ")[1] }}
        </div>
        <div class="swiper-container">
          <div class="swiper-wrapper" style="left: 27px">
            <div
              class="swiper-slide events_ex"
              v-bind:class="{
                active:
                  item[0] == active_date[0] &&
                  item[1] == active_date[1] &&
                  item[2] == active_date[2],
              }"
              v-for="(item, index) in this.date_Array"
              @click="
                (active_date = item),
                  get_event_by_date(item[0] + item[1] + item[2])
              "
              :key="index"
              v-if="item[3]"
            >
              <div>
                <div>{{ item[1].split(" ")[2] }}</div>
                <div>{{ item[0].substr(0, 3) }}</div>
              </div>
            </div>
            <div class="swiper-slide" :key="index" v-else>
              <div>
                <div>{{ item[1].split(" ")[2] }}</div>
                <div>{{ item[0].substr(0, 3) }}</div>
              </div>
            </div>
          </div>
          <div
            class="swiper-button-prev"
            tabindex="-1"
            role="button"
            aria-label="Previous slide"
            aria-disabled="true"
          >
            <div>
              <img src="/imgSlider/leftA.png" alt />
            </div>
          </div>
          <div
            class="swiper-button-next"
            tabindex="0"
            role="button"
            aria-label="Next slide"
            aria-disabled="false"
            style="right: 0"
          >
            <div>
              <img src="/imgSlider/rightA.png" alt />
            </div>
          </div>
        </div>
      </div>
      <div class="aboutEDT">
        <img src="/img/Red clocks.png" alt />
        <a @click="timeZone == 'us' ? selected_zone('eu') : selected_zone('us')">Time indicated in {{ timeZone == 'us' ? 'EDT' : 'CEST' }} zone</a>
      </div>

      <div class="calendarFilter">
        <div>
          <div>Choose the faction</div>
          <ul class="ordersFilter">
            <li
              v-bind:class="{ active: allegiance == 0 }"
              @click="allegiance = 0"
            >
              All
            </li>
            <li
              v-for="(item, index) in this.fractions"
              v-bind:class="{ active: allegiance == item.id }"
              :key="index"
              @click="allegiance = item.id"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      class="calendarPageItem"
      v-for="(item, index) in this.group_event"
      :key="index"
      v-if="item.event && item.event.length && item.event.length > 0 && checkEvent(item)"
    >
      <div>
        <span>{{ item.date.split("-")[2] }}</span>
        <span>
          {{ get_mount(item.date) }}
          <span v-if="check_today(item.date)">, today</span>
        </span>
      </div>
      <div>
        <div class="calendar_list">
          <div
            class="calendar"
            v-for="(sub_item, index) in item.event"
            :key="index"

          >
            <div
              class="container_sale"
              v-if="sub_item.product.sales_discount > 0 && checkAllegiance(sub_item)"
            >
              <div class="bestSale">
                {{ sub_item.product.sales_discount }}% OFF
              </div>
            </div>
             <!-- {{ sub_item.times.find(item => item.allegiance == allegiance)  }} -->
             <!-- {{$store.getters['getSelectedZone'] == 'us' && sub_item.times.find(item => item.time_edt != "")}} -->
            <!-- <div class="calendarItemBody" v-if="sub_item.times.find(item => item.allegiance == allegiance) != undefined || allegiance == 0"> -->
            <div
              class="calendarItemBody"
              v-if="checkAllegiance(sub_item) && sub_item.times"
            >

              <div>
                <img :src="apiImg + 'sku/' + sub_item.product.image" alt />

                <div>{{ sub_item.product.menu_name }}</div>
              </div>
              <div class="vSeparator"></div>
              <div class="calendarTime">
                <div v-if="sub_item.near">Close events</div>
                <div v-if="sub_item.near" class="timer">
                  <div>
                    <span
                      v-for="(near, index) in sub_item.near"
                      :key="index"
                      v-if="
                        $store.getters['getSelectedZone'] == 'us' &&
                        near.last_edt && (near.allegiance == allegiance || allegiance == 0)
                      "
                    >
                      <img
                        v-for="fraction_img in fractions"
                        :key="fraction_img.id"
                        v-if="fraction_img.id == near.allegiance"
                        :src="apiImg + 'gicons/' + fraction_img.icon"
                        alt
                      />
                      <span>{{ near.last_edt }}</span>
                    </span>
                    <span
                      v-for="(near, index) in sub_item.near"
                      :key="index"
                      v-if="
                        $store.getters['getSelectedZone'] == 'eu' &&
                        near.last_cest
                      "
                    >
                      <img
                        v-for="fraction_img in fractions"
                        :key="fraction_img.id"
                        v-if="fraction_img.id == near.allegiance"
                        :src="apiImg + 'gicons/' + fraction_img.icon"
                        alt
                      />
                      <span>{{ near.last_cest }}</span>
                    </span>
                  </div>
                </div>
                <div class="flex-container">
                  <div
                    v-for="times in filterTimes(sub_item.times)"
                    :key="times.id"
                    @click="
                      (choosen_events.event_id = sub_item.id),
                        (choosen_events.time_id = times.id)
                    "
                    v-if="
                      $store.getters['getSelectedZone'] == 'us' &&
                      !!times.time_edt &&
                      (times.allegiance == allegiance || allegiance == 0) &&
                      times.free_space > 0
                    "
                    v-bind:class="{
                      times_div_flex: !times.check_hover,
                      active:
                        choosen_events.event_id == sub_item.id &&
                        choosen_events.time_id == times.id,
                    }"
                    @mouseover="times.check_hover = true"
                    @mouseleave="times.check_hover = false"
                    class="flex-item"
                    :style="{
                      border: '1px solid ' + get_color(times.allegiance),
                      background: get_color(times.allegiance),
                    }"
                  >
                    {{
                      times.time_edt
                    }}
                  </div>
                  <div
                    v-for="times in filterTimes(sub_item.times)"
                    :key="times.id"
                    @click="
                      (choosen_events.event_id = sub_item.id),
                        (choosen_events.time_id = times.id)
                    "
                    v-if="
                      $store.getters['getSelectedZone'] == 'eu' &&
                      !!times.time_cest &&
                      (times.allegiance == allegiance || allegiance == 0) &&
                      times.free_space > 0
                    "
                    v-bind:class="{
                      times_div_flex: !times.check_hover,
                      active:
                        choosen_events.event_id == sub_item.id &&
                        choosen_events.time_id == times.id,
                    }"
                    class="flex-item"
                    :style="{
                      border: '1px solid ' + get_color(times.allegiance),
                      background: get_color(times.allegiance),
                    }"
                    @mouseover="times.check_hover = true"
                    @mouseleave="times.check_hover = false"
                  >
                    {{
                      times.time_cest
                    }}
                  </div>
                </div>
                <div
                  class="txtAlignCenter"
                  v-if="$store.getters['getSelectedZone'] == 'eu'"
                >
                  From {{ sub_item.product.fr_price_eur }}€
                </div>
                <div
                  class="txtAlignCenter"
                  v-if="$store.getters['getSelectedZone'] == 'us'"
                >
                  From {{ sub_item.product.fr_price_usd }}$
                </div>
                <div
                  class="calendar_item_href_to_sky"
                  v-if="choosen_events.event_id == sub_item.id"
                >
                  <a
                    v-bind:href="
                      '/' +
                      $store.getters['getGlobalGame'] +
                      '/service/' +
                      sub_item.product.slug +
                      '&' +
                      sub_item.product.id +
                      '&' +
                      choosen_events.time_id
                    "
                    class="eventsBannerBuy"
                    >More</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
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
      title: "Calendar | Cakeboost",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "",
        },
      ],


    };
  },
  components: {
    breadcrumbs,
  },
  data() {
    return {
      apiImg: this.$store.getters["getApiImgUrl"],
      globalApi: this.$store.getters["getGlobalApi"],
      hide_more_info: false,
      is_open_more_info: false,
      apiUrl: this.$store.getters["getApiUrl"],
      date_Array: [],
      active_date: moment().tz("Europe/Berlin").format("LLLL").split(","),
      events_product_times: [],
      group_event: [],
      allegiance: 0,
      choosen_events: {
        event_id: "",
        time_id: "",
      },
      fractions: [],
      game_id: 1,
      main_events:1,
      main_event:''
    };
  },
  mounted() {
    this.get_more_info_height(), this.init_swiper(),this.get_main_event()
  },
  computed: {
    timeZone() {
      return this.$store.getters.getSelectedZone;
    }
  },
  created() {},
  async asyncData({ $axios, route, store }) {
    let apiUrl = store.getters["getApiUrl"];
    let globalApi = store.getters["getGlobalApi"];
    let events_product_times = [];
    let date_Array = [];
    let date_Array_temp = [];
    let main_events = 1;

    let currentDate = moment().tz("Europe/Berlin");
    let group_event = [];
    let event_times = [];
    let stopDate = moment().add(15, "days");
    let fractions = [];
    let game_id = 1;
    let response_data_game = await $axios
      .$get(apiUrl + "game?filter=slug,eq," + route.params.game + "&include=id")
      .then((data) => {
        // console.log(data)
        if(data){
          game_id = data.records[0].id;
        }

        //filter=game,eq," + game_id
      });
    let response_main_item = await $axios
      .$get(apiUrl + "sku?filter=main_raid,eq,1&filter=game,eq,"+game_id)
      .then((data) => {
        if(data.records[0])
        {
          let temp_sku_id = data.records[0].id;
          let response_main_events =  $axios
          .$get(apiUrl +  "events?filter=date,eq," + moment().tz("Europe/Berlin").format("YYYY-MM-DD")+'&filter=parentid,eq,'+ temp_sku_id)
          .then((data_events) => {
            if(data_events.records[0]){
              main_events = data_events.records[0].id;
            }
          });
        }
      });
    let response_fractions = await $axios
      .$get(apiUrl + "fraction")
      .then((data) => {
        fractions = data.records;
      });
    while (currentDate <= stopDate) {
      date_Array_temp.push(moment(currentDate).format("LLLL"));
      currentDate = moment(currentDate).add(1, "days");
    }
    let temp;
    for (let i = 0; i < date_Array_temp.length; i++) {
      temp = date_Array_temp[i].split(",");
      date_Array.push(temp);
    }
    let response_data = await $axios
      .$get(
        apiUrl +
          "events?filter=date,ge," +
          moment().tz("Europe/Berlin").format("YYYY-MM-DD") +
          "&filter=date,le," +
          moment().tz("Europe/Berlin").add(15, "days").format("YYYY-MM-DD") +
          "&include=date"
      )
      .then((data) => {
        for (let i = 0; i < 16; i++) {
          let check = false;
          for (let j = 0; j < data.records.length; j++) {
            if (
              moment()
                .tz("Europe/Berlin")
                .add(i, "days")
                .format("YYYY-MM-DD") == data.records[j].date
            ) {
              check = true;
              break;
            }
          }
          date_Array[i].push(check);
        }
      });
    let response_data_s = await $axios
      .$get(
        apiUrl +
          "events?filter=date,ge," +
          moment().tz("Europe/Berlin").format("YYYY-MM-DD") +
          "&filter=date,le," +
          moment().tz("Europe/Berlin").add(3, "days").format("YYYY-MM-DD") +
          "&join=sku&join=times"
      )
      .then((data) => {
        events_product_times = data.records;
      });
    for (let i = 0; i < 3; i++) {
      let obj_temp = {
        date: moment().tz("Europe/Berlin").add(i, "days").format("YYYY-MM-DD"),
        events: [],
      };
      // console.log(obj_temp)
      group_event.push(obj_temp);
    }
    // console.log(JSON.stringify({
    //     method: "event_list",
    //     date: moment().tz("Europe/Berlin").format("L"),
    //     count: 3,
    //     game_id: game_id,
    //   }));
    let response_calendar = await $axios
      .post(globalApi + "requests.php", {
        method: "event_list",
        date: moment().tz("Europe/Berlin").format("L"),
        count: 3,
        game_id: game_id,
      })
      .then((data) => {
        if(data){
          group_event = data.data;
        }

      });

    return {
      date_Array,
      events_product_times,
      group_event,
      fractions,
      game_id,
      main_events
    };
  },

  methods: {
    filterTimes(times){
      if(this.$store.getters['getSelectedZone'] == 'us'){
        times = times.filter(item => !!item.time_edt && !!this.allegiance ? item.allegiance == this.allegiance : true)
        return times
      } else if(this.$store.getters['getSelectedZone'] == 'eu'){
        times = times.filter(item => !!item.time_cest && !!this.allegiance ? item.allegiance == this.allegiance : true)
        return times
      }
    },
    selected_zone(newValue) {
      console.log(newValue)
      this.$store.commit("setSelectedZone", newValue);
    },
    checkAllegiance(item){
      if(this.$store.getters['getSelectedZone'] == 'us'){
        item = item.times.filter(item => !!item.time_edt && (!!this.allegiance ? item.allegiance == this.allegiance : true))
        if(item.length > 0) { return true } else { return false}
      } else if(this.$store.getters['getSelectedZone'] == 'eu'){
        item = item.times.filter(item => !!item.time_cest && (!!this.allegiance ? item.allegiance == this.allegiance : true))
        if(item.length > 0) { return true } else { return false}
      }
    },
    checkEvent(item){
      let events = item.event;
      let cheks = [];
      events.forEach(element => {
        if(this.$store.getters['getSelectedZone'] == 'us'){
          element = element.times.filter(item => !!item.time_edt && (!!this.allegiance ? item.allegiance == this.allegiance : true))
          if(element.length > 0) { cheks.push(true) } else { cheks.push(false) }
        } else if(this.$store.getters['getSelectedZone'] == 'eu'){
          element = element.times.filter(item => !!item.time_cest && (!!this.allegiance ? item.allegiance == this.allegiance : true))
          if(element.length > 0) { cheks.push(true) } else { cheks.push(false) }
        }
      });
      let check = cheks.every(item => item == false)
      return !check
    },
    get_string_time(time){
      time = time.replace(':','').replace('h','').replace('m','');
      if(time > 100){
        return 'Starts in more than 1 hour'
      }
      else{
        return 'Starts 15-30m after purchase'
      }
      return '';
    },
    get_main_event(){
      for(let i = 0; i < this.group_event.length; i++){
        for(let j = 0; j < this.group_event[i].event.length; j++){
          if(this.group_event[i].event[j].id == this.main_events){
            this.main_event = this.group_event[i].event[j];
            break;
          }
        }
      }
    },
    get_mount(date) {
      return moment(date).format("MMMM");
    },
    check_today(date) {
      if (date == moment().tz("Europe/Berlin").format("YYYY-MM-DD")) {
        return true;
      } else {
        false;
      }
    },
    get_color(times_id) {
      let color = "";
      for (let i = 0; i < this.fractions.length; i++) {
        if (this.fractions[i].id == times_id) {
          color = this.fractions[i].color;
          break;
        }
      }
      return color;
    },
    async get_event_by_date(item) {
      let response = await this.$axios
        .post(this.globalApi + "requests.php", {
          method: "event_list",
          date: moment(item).tz("Europe/Berlin").format("L"),
          count: 3,
          game_id: this.game_id,
        })
        .then((data) => {
          this.group_event = data.data;
          this.get_main_event();
           this.$forceUpdate();
        });
    },
    open_more_info() {
      if (!this.is_open_more_info) {
        this.is_open_more_info = true;
      } else {
        this.is_open_more_info = false;
      }
    },
    get_more_info_height() {
      if (this.depth > 1) {
        let height = this.$refs.moreText_ref.clientHeight;
        if (height > 140) {
          this.hide_more_info = true;
        }
      }
    },
    init_swiper() {
      var mySwiper = new Swiper(".calendarLine .swiper-container", {
        speed: 1000,
        spaceBetween: 8,
        slidesPerView: "6",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    },
  },
};
</script>
