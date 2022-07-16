<template>
  <div
    class="cookiesPopUpWrapper"
    v-if="this.checkCookies && this.cookiesOpen && !closedCookie"
  >
    <div class="cookiesPopUp">
      <img class="cookiesImg" src="../static/assets/img/cookies.png" alt="" />
      <div class="cookiesPopUp__content">
        <div class="cookiesPopUp__content__content">
          This website or its third-party tools use cookies, which are necessary
          for its functioning and require to archive the purposes illustrated in
          the
          <a class="cookiesPolicy" href="/page/privacy-policy">cookie policy</a
          >.
        </div>
      </div>

      <div class="cookiesPopUp__btns">
        <input
          class="cookiesPopUp__btn cookiesPopUp__btn__apply"
          @click="applyCookies('cookies')"
          type="button"
          value="Apply"
        />
      </div>
      <a @click="closedCookie = true" class="cookiesPopUp__btn__close"
        ><svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.6575 2.34326L2.34375 13.657M13.6575 13.657L2.34375 2.34326"
            stroke="#ACAFB0"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
import "@/static/css/cookies_policy.css";
export default {
  name: "CookiesPolicy",
  data() {
    return {
      cookiesOpen: this.$store.getters["get_cookies_open"] || true,
      checkCookies: false,
      closedCookie: false
    };
  },
  watch: {
    "$store.state.cookiesOpen": function() {
      this.cookiesOpen = this.$store.state.cookiesOpen;
    }
  },
  mounted() {
    this.checkCookie();
  },
  methods: {
    applyCookies() {
      localStorage.setItem("cookies", true);
      this.checkCookies = false;
    },
    async checkCookie() {
      if (localStorage.getItem("cookies")) {
        this.checkCookies = false;
      } else {
        this.checkCookies = true;
      }
    }
  }
};
</script>
