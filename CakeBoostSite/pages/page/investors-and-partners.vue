<template>
  <div id="investors">
    <div
      class="popUpMask"
      v-if="pop_up_form_sucses"
      v-bind:class="{ active_card: pop_up_form_sucses }"
    >
      <div class="regPopUp">
        <div class="closePopUp">
          <img
            src="/img/Close.svg"
            class="closePopUpImg"
            @click="pop_up_form_sucses = false"
            alt
          />
        </div>
        <div class="regPopUpBody form_popup">
          <img src="/assets/img/Half-heart.svg" alt="" />
          <div>Thank you :)</div>
          <div>We will respond you not later, than in 2 hours</div>
          <div>
            <button @click="pop_up_form_sucses = false">
              <img src="/assets/img/Angle-left.svg" alt="" /> Go back to the
              page
            </button>
          </div>
        </div>
      </div>
    </div>
    <div id="flpr">
      <span>Interested in partnership?</span
      ><a onclick="goForm();"> <img style="display:none;" src="/assets/img/Angle-down.svg"  alt=""> Leave a proposal</a
      ><b onclick="closePop();"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g id="close">
            <path
              id="x"
              d="M18.717 6.697l-1.414-1.414-5.303 5.303-5.303-5.303-1.414 1.414 5.303 5.303-5.303 5.303 1.414 1.414 5.303-5.303 5.303 5.303 1.414-1.414-5.303-5.303z"
            />
          </g></svg
      ></b>
    </div>
    <div class="content__wrapper investors__1">
      <div class="topnav" id="topnav">
        <div class="topnav__links">
          <a id="go1" href="#home">Home</a>
          <a id="go2" href="#about">About us</a>
          <a id="go3" href="#facts">Facts</a>
          <a id="go4" href="#video">Video</a>
          <a id="go5" href="#journey">Our journey</a>
          <a id="go6" href="#map">Map of clients</a>
          <a id="go7" href="#news">News</a>
          <a id="go8" href="#register">Register</a>
        </div>
      </div>
      <div class="content__wrapper__content" id="home">
        <h1>
          {{ content.title }}
        </h1>
        <div class="investors__top-wrapper">
          <a  href="#register" class="btn__link">
            <span style="padding-left: 28.75px;">Leave a proposal</span>
          </a>
          <p>
            {{ content.description }}
          </p>
        </div>
      </div>
      <div class="soc_links">
        <a href="https://www.instagram.com/cakeboost/">
          <img src="/assets/img/Instsoc.svg" alt="" />
        </a>
        <a href="https://www.facebook.com/CakeGamesExp/">
          <img src="/assets/img/Facebook.svg" alt="" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCe-rP4IHqXR5fnDwno1fWgg?view_as=subscriber"
        >
          <img src="/assets/img/YTsoc.svg" alt="" />
        </a>
      </div>
    </div>
    <div class="content__wrapper investors__2" id="about">
      <div class="content__wrapper__content">
        <div class="about__row">
          <div class="text__col" style="align-self: center">
            <h2>{{ content.block_1.title }}</h2>
            <div class="short-line"></div>
            <p>
              {{ content.block_1.description }}
            </p>
          </div>
          <div class="text__col">
            <img :src="apiImg + 'gbanner/' + content.block_1.img" alt="" />
          </div>
        </div>
        <div class="about__row">
          <div class="text__col">
            <img :src="apiImg + 'gbanner/' + content.block_2.img" alt="" />
          </div>
          <div class="text__col" style="align-self: center">
            <h2>{{ content.block_2.title }}</h2>
            <div class="short-line"></div>
            <p>
              {{ content.block_2.description }}
            </p>
            <a style="padding: 0 4.38px;" href="#register" class="btn__link">
              <span style="height: 40px;display: flex;align-items: center;">Leave a proposal</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="content__wrapper investors__3" id="facts">
      <div class="content__wrapper__content">
        <h2 class="grey2">Several facts about us</h2>
        <div class="counts__wrapper">
          <div class="counts">
            <div class="count">
              <h1>$800 000</h1>
              <p>company’s annual turnover;</p>
            </div>
            <div class="count">
              <h1>+50%</h1>
              <p>growth in 2020 in comparison with 2019;</p>
            </div>
            <div class="count">
              <h1>$350 000</h1>
              <p>annual return;</p>
            </div>
            <div class="count">
              <h1>3 000</h1>
              <p>
                satisfied customers from The European Union and the United
                States served.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="content__wrapper investors__8" id="video">
        <div class="content__wrapper__content">
          <h2>Video about us</h2>
          <a
            data-fancybox="gallery"
            :href="'https://www.youtube.com/watch?v=' + content.youtube"
            class="video"
            style="display: block"
          ></a>
        </div>
      </div>
    </div>
    <div class="investors__4" id="journey">
      <div class="investors__lcol">
        <div class="timeline__left">
          <div class="timeline__heading">
            <h2>Who we were?</h2>
            <span>On January 01, 2020</span>
          </div>
          <div v-for="(item, index) in this.content.who_we_were" :key="index">
            <h3 :id="'inv' + (index + 1)">{{ item.title }}</h3>
            <span>{{ item.description }}</span>
            <p>
              {{ item.information }}
            </p>
          </div>
        </div>
      </div>
      <div class="investors__rcol">
        <div class="timeline__right">
          <div class="timeline__heading">
            <h2>Who we now?</h2>
            <span>&nbsp;</span>
          </div>
          <div v-for="(item, index) in this.content.who_we_became" :key="index">
            <h3 :id="'inv' + (index + 5)">{{ item.title }}</h3>
            <span>{{ item.description }}</span>
            <p>
              {{ item.information }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="content__wrapper investors__5" id="map">
      <div class="content__wrapper__content">
        <h2 class="p1">5%</h2>
        <h2 class="p2">29%</h2>
        <h2 class="p3">7%</h2>
        <h2 class="p4">3%</h2>
        <h2>Our client from certain countries:</h2>
        <img src="/assets/img/world.png" alt="" class="world" />
        <div class="world__mobile" style="display: none">
          <div class="countries">
            <div class="countrie">
              <p>Canada</p>
              <h2>5%</h2>
            </div>
            <div class="countrie">
              <p>USA</p>
              <h2>29%</h2>
            </div>
            <div class="countrie">
              <p>Germany</p>
              <h2>7%</h2>
            </div>
            <div class="countrie">
              <p>France</p>
              <h2>3%</h2>
            </div>
          </div>
          <img src="/assets/img/worldm.png" alt="" />
        </div>
      </div>
    </div>
    <div class="content__wrapper investors__6" id="news">
      <div class="content__wrapper__content">
        <div class="news__heading">
          <h2>Last news about us</h2>
          <a href="/page/blogs/wow-shadowlands" class="news__btn">
            <span>Read all news</span>
          </a>
        </div>
        <div class="news">
          <div v-for="item in this.news" :key="item.id" class="news__item">
            <div
              class="news__img"
              :style="{
                'background-image': 'url(' + apiImg + 'news/' + item.img + ')',
              }"
            ></div>
            <div class="news__info">
              <p>{{ item.title }}</p>
              <div class="news__bottom">
                <a
                  :href="
                    '/page/blogs/wow-shadowlands/' + item.slug + '&' + item.id
                  "
                  >Read the full topic</a
                >
                <span>{{ item.date.split(" ")[0] }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content__wrapper investors__7" id="register">
      <div class="content__wrapper__content">
        <div class="form">
          <h2>Registery</h2>
          <div id="registery">
            <span>Your name</span>
            <input
              v-model="form.name"
              type="text"
              id="invname"
              required
              placeholder="Your name"
              :class="{empty_input_border:form_check_click_send && form.name == ''}"
            />
            <span>Email adress</span>
            <input
              v-model="form.email"
              type="text"
              id="invmail"
              required
              placeholder="example@gmail.com"
              :class="{empty_input_border:form_check_click_send && form.email == ''}"
            />
            <span>Comment</span>
            <textarea
              v-model="form.comment"
              name=""
              id="invtext"
              cols="30"
              rows="10"
              placeholder="Your comment..."
            ></textarea>
            <span>Who are you?</span>
            <div class="input-wrapper">
              <input
                @click="form.role = 1"
                type="radio"
                name="role"
                checked
                value="1"
                id="radio1"
              />
              <label class="radio-label" for="radio1">Investor</label>
            </div>
            <div class="input-wrapper">
              <input
                @click="form.role = 1"
                type="radio"
                name="role"
                value="0"
                id="radio2"
              />
              <label class="radio-label" for="radio2">Partner</label>
            </div>
            <div class="line"></div>
            <div class="input-wrapper cb">
              <input
                @click="form_check = form_check ? false : true"
                type="checkbox"
                id="checkbox1"
                v-model="form_check"
              />
              <label
                :class="{ redd: form_check_click_send && !form_check }"
                class="checkbox-label"
                for="checkbox1"
                >I’m agree with
                <a href="/page/terms-and-condition/"
                  >terms and conditions</a
                ></label
              >
            </div>

            <button @click="send_form()">
              <span>Submit and register</span>
            </button>
            <div
              style="margin-top: 8px"
              :class="{
                result_failure: this.sendFormError,
                result_success: this.sendFormSuccess,
              }"
            >
              {{ result_send_form }}
            </div>
          </div>
        </div>
        <div class="reasons">
          <h2>Two more reasons to work with us</h2>
          <img src="/assets/img/01.svg" alt="" />
          <h3>Reliability</h3>
          <p>
            Our company’s policy is exclusively focused on the top standards of
            the services to be delivered. You can make sure by checking the
            reviews at the independent website Trustpilot.com, which is the most
            popular throughout the gaming communities.
          </p>
          <img src="/assets/img/02.svg" alt="" />
          <h3>Accessibility</h3>
          <p>
            Our clients may always rest assured that CakeBoost provides with the
            best prices on the market. Besides, our customers support works
            24/7. We want all those who has once become one of the CakeBoost
            customers to feel free to contact us anytime they want to receive
            appropriate and immediate assistance. And now it’s your turn!
          </p>
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
      title: "Investors and partners | Cakeboost",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "",
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: this.page.seo_canonical ? this.page.seo_canonical : 'https://cakeboost.com'+this.$route.path
        }
      ],

      bodyAttrs: {
        class: "investors",
      },
    };
  },
  components: {
    breadcrumbs,
  },
  data() {
    return {
      apiImg: this.$store.getters["getApiImgUrl"],
      apiUrl: this.$store.getters["getApiUrl"],
      globalApi: this.$store.getters["getGlobalApi"],
      news: [],
      content: "",
      page: "",
      form: {
        email: "",
        name: "",
        comment: "",
        role: 1,
        method: "user_partn",
      },
      result_send_form: '',
      form_check: false,
      sendFormError: false,
      sendFormSuccess: false,
      form_check_click_send: false,
      pop_up_form_sucses: false,
    };
  },
  async asyncData({ $axios, store, route }) {
    let apiUrl = store.getters["getApiUrl"];
    let news = [];
    let content = "";
    let page = "";
    let response_data = await $axios
      .$get(
        apiUrl +
          "news?filter=status,eq,1&filter=type,eq,1&filter=game_id,eq,3&size=4"
      )
      .then((data) => {
        news = data.records;
      });
    let response_data_content = await $axios
      .$get(apiUrl + "pages?filter1=slug,eq,investors&pages?filter1=slug,eq,investors-and-partners")
      .then((data) => {
        content = data.records[0];
        page = data.records[0];
        content = JSON.parse(content.content);
      });
    return {
      news,
      content,
      page,
    };
  },
  created() {},

  methods: {
    text_strip(text) {
      let strippedString = text.replace(/(<([^>]+)>)/gi, "");
      return strippedString;
    },
    async send_form() {
      if (this.form_check && this.form.email != '' && this.form.name != '' ) {
        console.log(this.form);
        let response = await this.$axios
          .$post(this.globalApi + "requests.php", this.form)
          .then((data) => {
            console.log(data);
            if (data.status == "200") {
              this.sendFormSuccess = true;
              this.sendFormError = false;
              this.result_send_form = 'Form sent successfully';
              this.pop_up_form_sucses = true;
              this.form_check = false; this.form.email = ''; this.form.name = '';this.form_check_click_send = false;this.form.comment = '';
            } else {
              this.sendFormSuccess = false;
              this.sendFormError = true;
              this.result_send_form = 'Fill in required fields';
            }
          });
      } else {
        this.form_check_click_send = true;
      }
    },
  },
};
</script>
