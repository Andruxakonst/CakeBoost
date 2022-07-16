<template>
  <div class="content spa_login">
    <div class="logPopUp">
      <div class="closePopUp"></div>
      <div class="back_to_log_button" v-if="forgot_pass_popoup">
        <button @click="forgot_pass_popoup = false">Back</button>
      </div>
      <div class="logPopUpBody" v-if="!forgot_pass_popoup">
        <h1>Log In</h1>
        <div>Login with social media</div>
        <div>
          <a @click="send_login_social('fb')">
            <img src="/img(ColorSochialLogo)/Facebook.svg" alt />
          </a>
           <a @click="send_login_social('google')">
              <img src="/img(ColorSochialLogo)/Google Color.svg" alt />
            </a>
            <a @click="send_login_social('disc')">
              <img src="/assets/img/dis.svg" alt />
            </a>
          <!--a href>
            <img src="/img(ColorSochialLogo)/Google Color.svg" alt />
          </!--a>
          <a href>
            <img src="/img(ColorSochialLogo)/VK.svg" alt />
          </a>-->
        </div>
        <div>
          <div></div>
          <span>or</span>
          <div></div>
        </div>
        <div>
          <div>Email</div>
          <input type="email" v-model="login_mail" />
        </div>
        <div style="position: relative">
          <div>Password</div>
          <input
            type="password"
            autocomplete="true"
            class="password_input"
            v-model="password"
            ref="password_input_ref"
          />
          <div @click="forgot_pass_popoup = true" class="switch_forget_pass">
            Forgot password?
          </div>

          <img
            class="password_eye"
            @click="pass_vision('.spa_login .password_input', '.spa_login .password_eye')"
            src="/img/eye.svg"
            alt=""
          />
          <div
              :class="{
                result_failure:
                  this.login_result == '100' ||
                  this.login_result == '104' ||
                  this.login_result == '102' ||
                  this.login_result == '103' ||
                  this.login_result == '101',
                result_success: this.login_result == '200',
              }"
            >
              {{ login_result_text }}
            </div>
        </div>
        <div>
           <button v-if="login_mail != '' && password != ''" @click="send_login()">Log in</button>
            <button v-else class="disable_button" >Log in</button>
        </div>
        <div>
          <a href="/page/signup" class="switch_popup"
            >Don't have an account?</a
          >
        </div>
      </div>
      <div class="logPopUpBody" v-if="forgot_pass_popoup">
          <div>Restoring the password</div>
          <div>Type your email here and we will send you the error message</div>
          <div class="forgot_pass_form">
            <div>Email-adress</div>
            <input autocomplete="false"  v-model="restor_mail" />
            <div
              :class="{
                result_failure:
                  this.registration_result_forgot == '100' ||
                  this.registration_result_forgot == '108' ||
                  this.registration_result_forgot == '101',
                result_success: this.registration_result_forgot == '200',
              }"
            >
              {{ result_text_forgot }}
            </div>
          </div>
          <div>
            <button class="forgot_pass_button" @click="send_restor_pass()">
              Send email
            </button>
          </div>
        </div>
    </div>

    <a name="about_text_ancor"></a>
    <div
      style="margin-top: 80px;"
      class="text_abous_us"
      :class="{ text_abous_us_open: open_more_info_about }"
    >
      <div
        style="margin-right: 90px;"
        class="text_about_greetings"
        :class="{ text_about_greetings_fixed: open_more_info_about }"
      >
        Welcome to <br />
        Cakeboost.com
      </div>
      <div
        class="text_about_us_content"
        :class="{ text_about_us_content_open: open_more_info_about }"
      >
        <div v-html="landing_s.text"></div>
        <div class="text_about_show_more" style="background: #ebebec;">
          <div style="width: 273px"></div>
          <button
            v-if="!open_more_info_about"
            @click="open_more_info_about = true"
          >
            Show more
          </button>
          <a
            v-if="open_more_info_about"
            @click="open_more_info_about = false"
            href="#about_text_ancor"
          >
            Show less</a
          >
          <div style="width: 273px"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import breadcrumbs from "~/components/breadcrumbs.vue";
import moment from "moment";
import momenttz from "moment-timezone";
import Cookies from "js-cookie";
export default {
  head() {
    return {
      title:'Log in | Cakeboost',
      meta: [
        {
          hid: "description",
          name: "description",
          content: '',
        },
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
  components: {
    breadcrumbs,
  },
  async asyncData({ $axios, route, store }) {
    let apiUrl = store.getters["getApiUrl"];
    return {};
  },
  data() {
    return {
      apiUrl: this.$store.getters["getApiUrl"],
      apiImg: this.$store.getters["getApiImgUrl"],
      globalApi: this.$store.getters["getGlobalApi"],
      forgot_pass_popoup: false,
      login_mail: "",
      password: "",
      login_result:'',
      login_result_text:'',
      result_text_forgot:'',
      restor_mail:'',
      registration_result_forgot:'',
      open_more_info_about: false,
      landing_s: ''
    };
  },
  mounted() {
    this.get_landing_s();
  },
  methods: {
    async get_landing_s() {
      let response_data_sku = await this.$axios
        .$get(this.apiUrl + "landing_s")
        .then((data) => {
          this.landing_s = data.records[0];
          this.basement = JSON.parse(data.records[0].basement);
        });
    },
    async get_cart(cart) {
      this.$store.commit("setItemInCard", JSON.parse(cart));
    },
    async send_login() {
      let user = {
        email: this.login_mail,
        password: this.password,
        req: "f",
        method: "user_auth",
      };
      let response = await this.$axios
        .post(this.globalApi + "requests.php", user)
        .then((data) => {
          if (data.data.status == 200) {
            let date = new Date(Date.now() + 30 * 86400e3);
            date = date.toUTCString();
            let date_r = new Date(Date.now() + 30 * 86400e3);
            date_r = date_r.toUTCString();
            this.deleteCookie("access_t");
            this.deleteCookie("refresh_t");
            this.setCookie("access_t", data.data.jwt, { expires: date });
            this.setCookie("refresh_t", JSON.stringify(data.data.refresh), {
              expires: date_r,
            });
            this.$store.commit("setUserLoginCheck", true);

            if(dashly){
              dashly.track("$authorized", {"$email": this.login_mail, "$name": this.login_mail});
            }
            this.$store.commit(
              "setUserLoginId",
              //JSON.parse(atob(temp.split(".")[1])).user_id
              data.data.jwt.split(".")[1]
            );

            //this.$axios.setToken(data.data.jwt);

            let response = this.$axios
              .get(
                this.apiUrl +
                  "carts/" +
                  JSON.parse(atob(data.data.jwt.split(".")[1])).cart_id
              )
              .then((data) => {
                this.get_cart(data.data.cart);
              });

        if(this.$route.path != "/page/login")
        {
              window.location.reload(true);
        }
        else{
          window.location.href = window.location.origin;
        }
          }
          this.login_result = data.data.status;
          switch (data.data.status) {
          case "100":
            this.login_result_text = "Oops,something wrong";
            break;
          case "104":
            this.login_result_text = "Сheck your email and confirm authorization" ;
            break;
          case "102":
            this.login_result_text = "Invalid email or password";
            break;
          case "103":
            this.login_result_text = "User not found";
            break;
          case "200":
            this.login_result_text = "Login was successful";
            var localCart = JSON.parse(localStorage.getItem("card"));
            break;
          case "101 ":
            this.login_result_text =
              "Please fill in the required fields.";
            break;
          default:
            break;
        }
        this.$forceUpdate();
        });
    },
    pass_vision(input_name, password_eye) {
      this.$forceUpdate();
      let input = $(input_name);
      if (input.attr("type") === "password") {
        input.attr("type", "text");
        $(password_eye).attr("src", "/img/eye_b.svg");
      } else {
        input.attr("type", "password");
        $(password_eye).attr("src", "/img/eye.svg");
      }
      this.$forceUpdate();
    },
    deleteCookie(name) {
      this.setCookie(name, "", {
        "max-age": -1,
      });
    },
    setCookie(name, value, options = {}) {
      options = {
        path: "/",
        ...options,
      };

      if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
      }

      let updatedCookie =
        encodeURIComponent(name) + "=" + encodeURIComponent(value);

      for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
          updatedCookie += "=" + optionValue;
        }
      }

      document.cookie = updatedCookie;
    },
    async send_restor_pass() {
      let response = await this.$axios
        .$post(this.globalApi + "requests.php", {
          method: "user_fp",
          email: this.restor_mail,
        })
        .then((data) => {
          this.registration_result_forgot = data.status;
          if (data.status == "200") {
            this.result_text_forgot =
              "A confirmation email has been sent to " + this.restor_mail;
          }
          this.restor_mail = "";
        });
    },
     async send_login_social(type_s){
      let response = await this.$axios
        .$post(this.globalApi + "requests.php", {
          method: "user_sn",
          type: type_s,
        })
        .then((data) => {
          console.log(data);
          window.location.href = data;
        });
    },
  },
};
</script>
<style>
.text_about_show_more:before {
  background: linear-gradient(180deg, #ebebec 0%, rgba(255, 255, 255, 0) 100%);
}
</style>
