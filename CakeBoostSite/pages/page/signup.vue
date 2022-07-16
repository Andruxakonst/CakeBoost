<template>
  <div class="content spa_login">
    <div class="regPopUp">
      <div class="closePopUp"></div>
      <div class="regPopUpBody">
        <h1>Registration</h1>
        <div>You can sign up with social media</div>
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
        <div style="position: relative">
          <div>Email-adress</div>
          <input
            autocomplete="false"
            type="email"
            v-model="registration_mail"
          />
          <div>Password</div>
          <input
            autocomplete="false"
            type="password"
            class="password_input_reg"
            v-model="registration_password"
          />
          <img
            class="password_eye_reg"
            @click="pass_vision('.password_input_reg', '.password_eye_reg')"
            src="/img/eye.svg"
            alt=""
          />
          <div>Confirm password</div>
          <input
            autocomplete="false"
            type="password"
            class="password_input_reg_rep"
            v-model="registration_r_password"
          />
          <img
            class="password_eye_reg_rep"
            @click="
              pass_vision('.password_input_reg_rep', '.password_eye_reg_rep')
            "
            src="/img/eye.svg"
            alt=""
          />
          <div
            :class="{
              result_failure:
                this.registration_result == '100' ||
                this.registration_result == '108' ||
                this.registration_result == '101' ||
                this.registration_result == '110',
              result_success: this.registration_result == '200',
            }"
          >
            {{ result_text }}
          </div>
          <div
            v-if="reg_started"
            class="result_success"
            style="
                text-align: center;
            "
            >
            Password must contain minimum 6 characters and one capital letter
          </div>
          <div
            v-if="this.ErrorPass || this.UpperPassError"
            style="
                color: #E9464B;
                text-align: center;
            "
            >
            Password must contain minimum 6 characters and one capital letter
          </div>
          <div
            v-if="differentPass"
            style="
                color: #E9464B;
                text-align: center;
            "
            >
            Both passwords entered must be identical
          </div>
        </div>
        <div>
          <button :disabled="preloader" :class="{disable_button: preloader}" v-if="registration_mail != '' && registration_password!='' && registration_r_password!=''" @click="send_registraion()">Sign up</button>
          <button v-else class="disable_button">Sign up</button>
        </div>
        <div>
          <a href="/page/login" class="switch_popup"
            >Already have an account? Log in</a
          >
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
      title:'Sign up | Cakeboost',
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
      registration_mail: "",
      registration_password: "",
      registration_r_password: "",
      reg_started: true,
      ErrorPass: false,
      hasError: false,
      UpperPassError: false,
      result_text: '',
      preloader: false,
      registration_result: '',
      differentPass: false,
      open_more_info_about: false,
      landing_s: ''
    };
  },
  mounted(){
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
    async send_registraion() {
      this.reg_started = false;
      let form = {};
      form["email"] = this.registration_mail;
      form["method"] = "user_add";
      form["password"] = this.registration_password;
      form["check_password"] = this.registration_r_password;
      form["ref"] = this.$route.query.referal?this.$route.query.referal:'';
      if(this.registration_password.length < 6) {
        this.ErrorPass = true
      } else {
        this.ErrorPass = false
      }

      if(!this.ErrorPass) {
        this.UpperPassError = !(/[A-Z]/.test(this.registration_password));
      }

      if (this.registration_password == this.registration_r_password && !this.ErrorPass && !this.UpperPassError) {
        this.preloader = true;
        this.differentPass = false
        let response = await this.$axios
          .post(this.globalApi + "requests.php", form)
          .then((data) => {
            this.registration_result = data.data.status;
            this.preloader = false;
          });
        switch (this.registration_result) {
          case "100":
            this.result_text = "Oops,something wrong";
            break;
          case "108":
            this.result_text = "That email address is already associated with a Cakeboost account";
            break;
          case "101":
            this.result_text = "Oops,something wrong";
            break;
          case "200":
            this.result_text = "Registration was successful, check your email";
            break;
          case "110 ":
            this.result_text =
              "The password must be at least 6 characters long.";
            break;
          default:
            break;
        }
        this.$forceUpdate();
      } else {
        if(!this.ErrorPass && !this.UpperPassError) {
          this.differentPass = true
        }
      }
    },
    pass_vision(input_name, password_eye) {
      let input = $(input_name);
      if (input.attr("type") === "password") {
        input.attr("type", "text");
        $(password_eye).attr("src", "/img/eye_b.svg");
      } else {
        input.attr("type", "password");
        $(password_eye).attr("src", "/img/eye.svg");
      }
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
