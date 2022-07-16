<template>
   <div
      class="popUpMask"
      v-if="contact_us_popoup || $store.getters['get_contact_us_discord']"
      v-bind:class="{
        active_card: contact_us_popoup || $store.getters['get_contact_us_discord'],
      }"
    >
      <div class="popup" id="popUp">
        <button
          @click="(contact_us_popoup = false,$store.commit('set_contact_us_discord', false), copied='')"
          class="close"
        ></button>
        <h3>Contact us</h3>
        <div class="links__popup">
          <div  class="link">
            <div class="link__left">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 28 32" fill="none">
                <path d="M11.1402 13.8169C10.2662 13.8169 9.57617 14.5836 9.57617 15.5189C9.57617 16.4542 10.2815 17.2209 11.1402 17.2209C12.0142 17.2209 12.7042 16.4542 12.7042 15.5189C12.7195 14.5836 12.0142 13.8169 11.1402 13.8169ZM16.7368 13.8169C15.8628 13.8169 15.1728 14.5836 15.1728 15.5189C15.1728 16.4542 15.8782 17.2209 16.7368 17.2209C17.6108 17.2209 18.3008 16.4542 18.3008 15.5189C18.3008 14.5836 17.6108 13.8169 16.7368 13.8169Z" fill="#7289DA"/>
                <path d="M24.19 0.952148H3.64333C1.91067 0.952148 0.5 2.36281 0.5 4.11081V24.8415C0.5 26.5895 1.91067 28.0001 3.64333 28.0001H21.0313L20.2187 25.1635L22.1813 26.9881L24.0367 28.7055L27.3333 31.6188V4.11081C27.3333 2.36281 25.9227 0.952148 24.19 0.952148ZM18.2713 20.9775C18.2713 20.9775 17.7193 20.3181 17.2593 19.7355C19.268 19.1681 20.0347 17.9108 20.0347 17.9108C19.406 18.3248 18.808 18.6161 18.2713 18.8155C17.5047 19.1375 16.7687 19.3521 16.048 19.4748C14.576 19.7508 13.2267 19.6741 12.0767 19.4595C11.2027 19.2908 10.4513 19.0455 9.82267 18.8001C9.47 18.6621 9.08667 18.4935 8.70333 18.2788C8.65733 18.2481 8.61133 18.2328 8.56533 18.2021C8.53467 18.1868 8.51933 18.1715 8.504 18.1561C8.228 18.0028 8.07467 17.8955 8.07467 17.8955C8.07467 17.8955 8.81067 19.1221 10.758 19.7048C10.298 20.2875 9.73067 20.9775 9.73067 20.9775C6.342 20.8701 5.054 18.6468 5.054 18.6468C5.054 13.7095 7.262 9.70748 7.262 9.70748C9.47 8.05148 11.5707 8.09748 11.5707 8.09748L11.724 8.28148C8.964 9.07882 7.69133 10.2901 7.69133 10.2901C7.69133 10.2901 8.02867 10.1061 8.596 9.84548C10.2367 9.12481 11.54 8.92548 12.0767 8.87948C12.1687 8.86415 12.2453 8.84882 12.3373 8.84882C13.2727 8.72615 14.3307 8.69548 15.4347 8.81815C16.8913 8.98682 18.4553 9.41615 20.05 10.2901C20.05 10.2901 18.8387 9.14015 16.232 8.34281L16.4467 8.09748C16.4467 8.09748 18.5473 8.05148 20.7553 9.70748C20.7553 9.70748 22.9633 13.7095 22.9633 18.6468C22.9633 18.6468 21.66 20.8701 18.2713 20.9775Z" fill="#7289DA"/>
              </svg>
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
                @click="
                  copyText(content.support[0].descr), (copied = 'discord')
                "
                style="margin-right: 48px;"
              >
                <span v-if="copied == 'discord'">Copied</span>
                <span v-else>Copy</span>
              </button>

            </div>
          </div>
          <div class="link" v-if="!$store.getters['get_contact_us_discord']">
            <div class="link__left">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 8C4.89543 8 4 8.89543 4 10V23.3333C4 24.4379 4.89543 25.3333 6 25.3333H26C27.1046 25.3333 28 24.4379 28 23.3333V10C28 8.89543 27.1046 8 26 8H6ZM25.5471 10.8592C25.2853 10.373 24.6788 10.191 24.1926 10.4529L16 14.8643L7.80743 10.4529C7.32116 10.191 6.7147 10.373 6.45286 10.8592C6.19102 11.3455 6.37296 11.952 6.85923 12.2138L15.5259 16.8805C15.8219 17.0399 16.1781 17.0399 16.4741 16.8805L25.1408 12.2138C25.627 11.952 25.809 11.3455 25.5471 10.8592Z" fill="#C24DFE"/>
              </svg>
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
              <a id="mail_href" href="mailto:support@cakeboost.com"></a>
            </div>
          </div>
          <div class="link" v-if="!$store.getters['get_contact_us_discord']">
            <div class="link__left">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7024 1.40537C12.4476 1.27035 13.2152 1.19984 13.9994 1.19984C21.0686 1.19984 26.7994 6.93059 26.7994 13.9998C26.7994 14.784 26.7288 15.5516 26.5938 16.2968C27.0677 17.2985 27.3327 18.4182 27.3327 19.5998C27.3327 23.8708 23.8703 27.3332 19.5993 27.3332C18.4177 27.3332 17.298 27.0682 16.2963 26.5943C15.5511 26.7293 14.7835 26.7998 13.9994 26.7998C6.93011 26.7998 1.19935 21.0691 1.19935 13.9998C1.19935 13.2157 1.26986 12.4481 1.40488 11.7029C0.931036 10.7012 0.666016 9.58148 0.666016 8.39984C0.666016 4.12883 4.12835 0.666504 8.39935 0.666504C9.58099 0.666504 10.7007 0.931524 11.7024 1.40537ZM9.46 12.4688C9.76199 12.9864 10.1795 13.4272 10.6799 13.7568H10.6798C11.343 14.1907 12.048 14.5571 12.7843 14.8504C13.6072 15.1939 14.2455 15.4856 14.6992 15.7253C15.0831 15.9137 15.4316 16.1669 15.7295 16.4738C15.9549 16.7131 16.0801 17.0296 16.0794 17.3584C16.089 17.59 16.0434 17.8206 15.9462 18.0311C15.849 18.2415 15.7031 18.4258 15.5205 18.5687C15.0329 18.8969 14.4495 19.0526 13.8631 19.0109C13.5315 19.0142 13.2006 18.98 12.8767 18.9089C12.6139 18.8511 12.3569 18.7698 12.1087 18.6659C11.8915 18.572 11.595 18.431 11.2193 18.243C10.9169 18.0816 10.5803 17.995 10.2376 17.9902C9.92967 17.9775 9.62864 18.0837 9.3968 18.2867C9.28636 18.3919 9.20005 18.5199 9.14385 18.6617C9.08764 18.8035 9.06287 18.9558 9.07124 19.1081C9.06429 19.3968 9.15128 19.68 9.31913 19.915C9.52163 20.1716 9.7835 20.3751 10.0822 20.5079C11.2493 21.0135 12.5144 21.2526 13.7855 21.2079C14.7104 21.2266 15.631 21.0767 16.5023 20.7655C17.2253 20.5089 17.855 20.0417 18.3101 19.424C18.7572 18.7716 18.9837 17.9932 18.9566 17.2028C18.974 16.5575 18.8125 15.92 18.49 15.3607C18.1623 14.8284 17.7208 14.3753 17.1972 14.0339C16.5344 13.6063 15.8312 13.2449 15.0977 12.9549C15.0192 12.9164 14.938 12.8839 14.8547 12.8576C14.103 12.5466 13.5377 12.2971 13.1585 12.1091C12.8202 11.9506 12.5138 11.7315 12.2545 11.4627C12.0364 11.2335 11.9162 10.9284 11.9192 10.6121C11.9086 10.371 11.963 10.1314 12.0767 9.9185C12.1904 9.70559 12.3593 9.52715 12.5656 9.40186C13.054 9.11114 13.616 8.96769 14.184 8.98876C14.6202 8.98408 15.055 9.03802 15.4767 9.14913C15.9348 9.28121 16.3831 9.44524 16.8182 9.63999C16.9949 9.72188 17.1872 9.76499 17.3819 9.76642C17.5234 9.77023 17.6642 9.74405 17.7948 9.68959C17.9255 9.63514 18.0432 9.55365 18.1401 9.45048C18.2425 9.33852 18.3218 9.20749 18.3735 9.06488C18.4252 8.92227 18.4483 8.77087 18.4415 8.61932C18.446 8.32759 18.344 8.0442 18.1547 7.82218C17.8979 7.55224 17.5793 7.34876 17.2264 7.22923C16.8422 7.08812 16.445 6.98554 16.0405 6.92302C15.4751 6.83027 14.9027 6.78636 14.3298 6.79179C13.4542 6.78647 12.5844 6.93283 11.7588 7.22436C10.9999 7.48069 10.3224 7.9335 9.79534 8.53672C9.28807 9.13741 9.01992 9.90396 9.04214 10.6899C9.02419 11.3091 9.16823 11.9223 9.46 12.4688Z" fill="#28A8EA"/>
              </svg>
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
              <a id="skype_href" href="skype:live:support_51317?chat"></a>
            </div>
          </div>
          <div class="link" v-if="!$store.getters['get_contact_us_discord']">
          <div class="link__left">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9.63262 14.8632L9.2687 19.8888C9.78938 19.8888 10.0149 19.6692 10.2853 19.4055L12.7264 17.115L17.7847 20.7519C18.7124 21.2595 19.366 20.9922 19.6163 19.914L22.9365 4.63926L22.9374 4.63836C23.2317 3.29196 22.4415 2.76547 21.5377 3.09576L2.02135 10.4316C0.689406 10.9392 0.709573 11.6682 1.79493 11.9985L6.78447 13.5222L18.3742 6.40235C18.9196 6.04775 19.4155 6.24395 19.0076 6.59855L9.63262 14.8632Z" fill="#29A0DC"/>
            </svg>
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
            <a id="telegram_href" href="https://t.me/cakeboost"
              target="_blank"></a>
          </div>
        </div>
          <!--div class="link">
                    <div class="link__left">
                        <img src="/assets/img/wa.svg" alt="">
                        <div class="link__names">
                            <span>What’sApp</span>
                            <p>+7 (214) 215 12-73</p>
                        </div>
                    </div>
                    <input type="text" value="test">
                    <div class="link__right">
                        <button onclick="copyText(this.parentElement.children[2])">Copy</button>
                        <a href=""></a>
                    </div>
                </div-->
        </div>
        <div class="popup__or">
          <div class="popup__or-line"></div>
          <p>or</p>
          <div class="popup__or-line"></div>
        </div>
        <a href="/page/contact-us" class="btn__link">
          <span> View more contacts </span>
        </a>
      </div>
    </div>
</template>
<script>

import Cookies from "js-cookie";
export default {
  head: {
    script: [],
    link: []
  },
  data() {
    return {
      b_path: [],
      apiUrl: this.$store.getters['getApiUrl'],
      contact_us_popoup: false,
     content: "",
      copied: "",
    };
  },
  components: {},
  mounted() {
    this.get_contact_info()
  },
  created() {

  },
  methods: {
     copyText(txt) {
      var dummy = document.createElement("textarea");
      // dummy.style.display = 'none'
      document.body.appendChild(dummy);
      dummy.value = txt;
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
    },
     async get_contact_info() {
      let response_data_content = await this.$axios
        .$get(this.apiUrl + "pages?filter=slug,eq,contact")
        .then((data) => {
          this.content = data.records[0];
          this.content = JSON.parse(this.content.content);
        });
    },
  }
};
</script>
