
<template>
  <div class="content__wrapper">
    <div class="content__wrapper__content" id="contactUs">
      <h1>Contact us</h1>
      <div class="cu__heading">
        <img src="/assets/img/cu1.svg" alt="" />
        <h2>24/7 online support</h2>
      </div>
      <div class="links">
        <div  class="link">
          <div class="link__left">
            <img src="/assets/img/dis.svg" alt="" />
            <div class="link__names">
              <span>{{ content.support[0].title }}</span>
              <p :id="content.support[0].title">{{ content.support[0].descr }}</p>
            </div>
          </div>
          <input type="text" value="test" />
          <div class="link__right">
            <button
              id="discord_copy"
              :class="{ copied: copied == 'discord' }"
              @click="copyText(content.support[0].descr), (copied = 'discord')"

            >
              <span v-if="copied == 'discord'">Copied</span>
              <span v-else>Copy</span>
            </button>
            <a id="discord_href" :href="content.support[0].link"></a>
          </div>
        </div>
        <div  class="link">
          <div class="link__left">
            <img src="/assets/img/hlvibnBVrEb.svg" alt="" />
            <div class="link__names">
              <span>Facebook messenger</span>
              <p id="CakeGamesExp">m.me/CakeGamesExp</p>
            </div>
          </div>
          <input type="text" value="test" />
          <div class="link__right">
            <button
              id="CakeGamesExp_copy"
              :class="{ copied: copied == 'CakeGamesExp' }"
              @click="copyText('m.me/CakeGamesExp'), (copied = 'CakeGamesExp')"

            >
              <span v-if="copied == 'CakeGamesExp'">Copied</span>
              <span v-else>Copy</span>
            </button>
            <a id="CakeGamesExp_href" href="https://m.me/CakeGamesExp"></a>
          </div>
        </div>
        <div class="link">
          <div class="link__left">
            <img src="/assets/img/email.svg" alt="" />
            <div class="link__names">
              <span>{{ content.support[2].title }}</span>
              <p :id="content.support[2].title">{{ content.support[2].descr }}</p>
            </div>
          </div>
          <input type="text" value="test" />
          <div class="link__right">
            <button
              id="mail_copy"
              :class="{ copied: copied == 'mail' }"
              @click="copyText(content.support[2].descr), (copied = 'mail')"
            >
              <span v-if="copied == 'mail'">Copied</span>
              <span v-else>Copy</span>
            </button>
            <a id="mail_href" :href="'mailto:' + content.support[2].link"></a>
          </div>
        </div>
        <div class="link">
          <div class="link__left">
            <img src="/assets/img/skype.svg" alt="" />
            <div class="link__names">
              <span>{{ content.support[1].title }}</span>
              <p :id="content.support[1].title">{{ content.support[1].descr }}</p>
            </div>
          </div>
          <input type="text" value="test" />
          <div class="link__right">
            <button
              id="skype_copy"
              :class="{ copied: copied == 'skype' }"
              @click="copyText(content.support[1].descr), (copied = 'skype')"
            >
              <span v-if="copied == 'skype'">Copied</span>
              <span v-else>Copy</span>
            </button>
            <a id="skype_href" :href="'skype:live:'+content.support[1].link+'?chat'"></a>
          </div>
        </div>


         <div class="link">
          <div class="link__left">
            <img src="/img(ColorSochialLogo)/Telegram.svg" alt="" />
            <div class="link__names">
              <span>{{ content.support[3].title }}</span>
              <p :id="content.support[3].title">{{ content.support[3].descr }}</p>
            </div>
          </div>
          <input type="text" value="test" />
          <div class="link__right">
            <button
              id="telegram_copy"
              :class="{ copied: copied == 'telegram' }"
              @click="copyText(content.support[3].descr), (copied = 'telegram')"
            >
              <span v-if="copied == 'telegram'">Copied</span>
              <span v-else>Copy</span>
            </button>
            <a id="telegram_href" :href="content.support[3].link"
              target="_blank"></a>
          </div>
        </div>

      </div>
      <div class="cu__heading">
        <img src="/assets/img/cu2.svg" alt="" />
        <h2>Follow us</h2>
      </div>
      <div class="links">
        <div class="link">
          <div class="link__left">
            <img src="/assets/img/inst.svg" alt="" />
            <div class="link__names">
              <span>{{ content.media[0].title }}</span>
              <p :id="content.media[0].title">{{ content.media[0].descr }}</p>
            </div>
          </div>
          <input type="text" value="test" />
          <div class="link__right">
            <button
              id="inst_copy"
              :class="{ copied: copied == 'inst' }"
              @click="copyText(content.media[0].descr), (copied = 'inst')"
            >
               <span v-if="copied == 'inst'">Copied</span>
                <span v-else>Copy</span>
            </button>
            <a
              id="inst_href"
              :href="content.media[0].link"
              target="_blank"
            ></a>
          </div>
        </div>
        <div class="link">
          <div class="link__left">
            <img src="/assets/img/yt.svg" alt="" />
            <div class="link__names">
              <span>{{ content.media[1].title }}</span>
              <p :id="content.media[1].title">{{ content.media[1].descr }}</p>
            </div>
          </div>
          <input type="text" value="test" />
          <div class="link__right">
            <button
              id="yt_copy"
              :class="{ copied: copied == 'yt' }"
              @click="copyText(content.media[1].descr), (copied = 'yt')"
            >
               <span v-if="copied == 'yt'">Copied</span>
                <span v-else>Copy</span>
            </button>
            <a
              id="yt_href"
              :href="content.media[1].link"
              target="_blank"
            ></a>
          </div>
        </div>
        <div class="link">
          <div class="link__left">
            <img src="/assets/img/fb.svg" alt="" />
            <div class="link__names">
              <span>{{ content.media[2].title }}</span>
              <p :id="content.media[2].title">{{ content.media[2].descr }}</p>
            </div>
          </div>
          <input type="text" value="test" />
          <div class="link__right">
            <button
              id="fb_copy"
              :class="{ copied: copied == 'fb' }"
              @click="copyText(content.media[2].descr), (copied = 'fb')"
            >
               <span v-if="copied == 'fb'">Copied</span>
                <span v-else>Copy</span>
            </button>
            <a
              id="fb_href"
              :href="content.media[2].link"
              target="_blank"
            ></a>
          </div>
        </div>
        <div class="link">
          <div class="link__left">
            <img src="/assets/img/twi.svg" alt="" />
            <div class="link__names">
              <span>{{ content.media[3].title }}</span>
              <p :id="content.media[3].title">{{ content.media[3].descr }}</p>
            </div>
          </div>
          <input type="text" value="test" />
          <div class="link__right">
            <button
              id="twitter_copy"
              :class="{ copied: copied == 'tw' }"
              @click="copyText(content.media[2].descr), (copied = 'tw')"
            >
               <span v-if="copied == 'tw'">Copied</span>
                <span v-else>Copy</span>
            </button>
            <a
              id="twitter_href"
              :href="content.media[2].link"
              target="_blank"
            ></a>
          </div>
        </div>
        <div class="link">
          <div class="link__left">
            <img src="/assets/img/twitch.svg" alt="" />
            <div class="link__names">
              <span>{{ content.media[4].title }}</span>
              <p :id="content.media[4].title">{{ content.media[4].descr }}</p>
            </div>
          </div>
          <input type="text" value="test" />
          <div class="link__right">
            <button
              id="twitch_copy"
              :class="{ copied: copied == 'twitch' }"
              @click="copyText(content.media[4].descr), (copied = 'twitch')"
            >
               <span v-if="copied == 'twitch'">Copied</span>
                <span v-else>Copy</span>
            </button>
            <a
              id="twitch_href"
              :href="content.media[4].link"
              target="_blank"
            ></a>
          </div>
        </div>
      </div>
      <div class="cu__heading">
        <img src="/assets/img/cu3.svg" alt="" />
        <h2>Our adress</h2>
      </div>
      <div class="map__wrapper">
        <p>{{ content.adress }}</p>
        <div
          class="map"
          style="background: url(/assets/img/map.png) center/cover"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.7277057668643!2d-0.12992388426245033!3d51.51821137963697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3267fa2dcf%3A0x3aab0fd4e4b8d79!2zMzAgQmxvb21zYnVyeSBTdCwgTG9uZG9uIFdDMUIgM1FKLCDQktC10LvQuNC60L7QsdGA0LjRgtCw0L3QuNGP!5e0!3m2!1sru!2sru!4v1637542008159!5m2!1sru!2sru"
            width="100%"
            height="335px"
            style="border: none"
          ></iframe>
        </div>

        <p>151 SE 1st St0 #2408, Miami, FL 33131, USA +1 786-351-1005</p>
        <div
          class="map"
          style="background: url(/assets/img/map.png) center/cover"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1796.4536134506143!2d-80.19178163342816!3d25.773627695704295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b765db7055a7%3A0x4617e01e29e1fe5!2sCakeboost!5e0!3m2!1sru!2sru!4v1637541610600!5m2!1sru!2sru"
            width="100%"
            height="335px"
            style="border: none"
          ></iframe>
        </div>
      </div>
    </div>
    <script v-html="jsonld1" name="check-json-1" type="application/ld+json" />
    <script v-html="jsonld2" name="check-json-2" type="application/ld+json" />
  </div>
</template>
<script>
import breadcrumbs from "~/components/breadcrumbs.vue";
export default {
  head() {
    return {
      title: "Contact us | Cakeboost",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "/assets/css/style.css",
        },
        {
          hid: 'canonical',
          rel: 'canonical',
          href: this.page.seo_canonical ? this.page.seo_canonical : 'https://cakeboost.com'+this.$route.path
        }
      ],
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
      content: "",
      page: "",
      copied: "",
      jsonld1: {
        "@context" : "http://schema.org",
        "@type" : "LocalBusiness",
        "telephone" : "UNITED",
        "image": "https://cakeboost.com/favicon.ico",
        "address" : {
          "@type" : "PostalAddress",
          "streetAddress" : "GROUND FLOOR, 30 BLOOMSBURY STREET",
          "addressLocality" : "LONDON",
          "addressRegion" : "WC1B 3QJ",
          "addressCountry" : "KINGDOM",
          "postalCode" : "UNIT 111356",
        },
        "name": "Cakeboost",
      },
      jsonld2: {
        "@context" : "https://schema.org",
        "@type" : "LocalBusiness",
        "telephone" : "UNITED",
        "image": "http://cakeboost.com/favicon.ico",
        "address" : {
          "@type" : "PostalAddress",
          "streetAddress" : "1st St #2408",
          "addressLocality" : "MIAMI",
          "addressRegion" : "151 SE",
          "addressCountry" : "KINGDOM",
          "postalCode" : "FL 33131"
        },
        "name": "Cakeboost",
      }
    };
  },
  async asyncData({ $axios, store, route }) {
    let apiUrl = store.getters["getApiUrl"];
    let content = "";
    let page = "";

    let response_data_content = await $axios
      .$get(apiUrl + "pages?filter=slug,eq,contact-us")
      .then((data) => {
        content = data.records[0];
        page = data.records[0];
        content = JSON.parse(content.content);
        console.log(content);
      });
    return {
      content,
      page,
    };
  },
  created() {
    this.attention_block();
  },

  methods: {
    attention_block() {},

    copyText(txt) {
      var dummy = document.createElement("textarea");
      // dummy.style.display = 'none'
      document.body.appendChild(dummy);
      dummy.value = txt;
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
    },
  },
};
</script>
