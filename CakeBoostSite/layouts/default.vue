<template>
  <div class="container">
    
  <div
    class="container_c"
    :class="{
      preload_container_hidden:
        preloader_show || this.$store.getters['get_preloader_show'],
    }"
  >

    <client-only>
      <div @click="scroll_to_top()" class="scroll_up">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 6L8 11L13 6" stroke="#595E61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </client-only>
    <div
      v-if="preloader_show || this.$store.getters['get_preloader_show']"
      class="preloader"
    >
      <img src="/YGgI.gif" alt="" data-not-lazy />
    </div>

    <div
      class="popUpMask subMask active_card"
      v-if="checkModal() && isModalDisplayed">
      <div class="subscribePopUp">
        <div>
          <div class="Percent">
            <span>{{this.percent}}%</span>
            <span>off</span>
            <br>
            <span>{{ this.popUp.popup.title }}</span>
          </div>
          <hr>
          <span>{{ this.popUp.popup.descr }}</span>
          <form @submit.prevent="send_subscribe()" class="emailForm promoCodeForm">
            <span>Email-adress</span>
            <input required class="" placeholder="example@gmail.com" v-model="sub_mail" type="email" />
            <input type="submit" value="Subscribe!" />
            <span v-if="sub_error" :class="{ 'result_failure': sub_error }">This email address is already subscribed to the newsletter.</span>
            <span v-if="sub_success" :class="{ 'result_success': sub_success }">Subscribed.</span>
          </form>
        </div>
        <div>
          <div></div>
          <div></div>
          <div>
            <div :style="'background-image: url('+ apiImg + 'gbanner/' + this.popUp.popup.img +');'"></div>
          </div>
          <!-- <img :src="apiImg + 'gbanner/' + popUp.img "> -->
        </div>
        <div class="closePopUp" @click="closePopUp(), applyCookies('sub')">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none" class="closePopUpImg"><path d="M13.6565 2.34326L2.34277 13.657M13.6565 13.657L2.34277 2.34326" stroke="#C24DFE" stroke-width="2" stroke-linecap="round"></path></svg>
        </div>
      </div>
    </div>
    <div
      class="popUpMask"
      v-if="this.$store.getters['get_is_sku_edit_popup']"
      v-bind:class="{
        active_card: this.$store.getters['get_is_sku_edit_popup'],
      }"
    >
      <div class="regPopUp editskupopup">
        <div class="closePopUp">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" class="closePopUpImg"
            @click="$store.commit('set_edit_sku_popup', false)">
            <path d="M13.6565 2.34326L2.34277 13.657M13.6565 13.657L2.34277 2.34326" stroke="#ACAFB0" stroke-width="2" stroke-linecap="round"/>
          </svg>

        </div>
        <edit_sku />
      </div>
    </div>
    <div
      class="popUpMask"
      v-if="this.$store.getters['get_global_reg_popup_check']"
      v-bind:class="{
        active_card: registration_pop_up,
        active_card: this.$store.getters['get_global_reg_popup_check'],
      }"
    >
      <div class="regPopUp">
        <div class="closePopUp">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" class="closePopUpImg"
            @click="(registration_pop_up = false), $store.commit('set_global_reg_popup_check', false), body_active()">
            <path d="M13.6565 2.34326L2.34277 13.657M13.6565 13.657L2.34277 2.34326" stroke="#ACAFB0" stroke-width="2" stroke-linecap="round"/>
          </svg>

        </div>
        <div class="regPopUpBody">
          <div>Registration</div>
          <div>You can sign up with social media</div>
          <div>
            <a @click="send_login_social('fb')">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M13.1399 22.9999V12.9646H16.383L16.8686 9.05373H13.1399V6.55673C13.1399 5.42446 13.4426 4.65275 15.0061 4.65275L17 4.65179V1.15394C16.655 1.10645 15.4715 1 14.0945 1C11.2197 1 9.25153 2.8225 9.25153 6.1696V9.05383H6V12.9647H9.25143V23L13.1399 22.9999Z" fill="#4064AD"/>
              </svg>
            </a>
            <a @click="send_login_social('google')">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21.9996 12.2291C21.9996 11.5494 21.9434 10.866 21.8235 10.1973H12.2012V14.0478H17.7114C17.4827 15.2897 16.7481 16.3883 15.6722 17.0864V19.5849H18.9596C20.8901 17.8433 21.9996 15.2713 21.9996 12.2291Z" fill="#4285F4"/>
                <path d="M12.2012 22.0002C14.9526 22.0002 17.2729 21.1148 18.9634 19.5863L15.676 17.0878C14.7614 17.6978 13.5806 18.0431 12.205 18.0431C9.54355 18.0431 7.28698 16.2832 6.47731 13.917H3.08496V16.4926C4.81675 19.8692 8.34404 22.0002 12.2012 22.0002Z" fill="#34A853"/>
                <path d="M6.47399 13.9168C6.04667 12.675 6.04667 11.3302 6.47399 10.0883V7.5127H3.08539C1.63849 10.3382 1.63806 13.6669 3.08497 16.4923L6.47399 13.9168Z" fill="#FBBC04"/>
                <path d="M12.2008 5.95779C13.6552 5.93575 15.0609 6.47218 16.1142 7.45687L19.0267 4.60201C17.1825 2.90453 14.7347 1.97128 12.2008 2.00067C8.34362 2.00067 4.81675 4.13247 3.08496 7.51274L6.47356 10.0884C7.27948 7.71849 9.53938 5.95779 12.2008 5.95779Z" fill="#EA4335"/>
              </svg>
            </a>
            <a @click="send_login_social('disc')">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 28 32" fill="none">
                <path d="M11.1402 13.8169C10.2662 13.8169 9.57617 14.5836 9.57617 15.5189C9.57617 16.4542 10.2815 17.2209 11.1402 17.2209C12.0142 17.2209 12.7042 16.4542 12.7042 15.5189C12.7195 14.5836 12.0142 13.8169 11.1402 13.8169ZM16.7368 13.8169C15.8628 13.8169 15.1728 14.5836 15.1728 15.5189C15.1728 16.4542 15.8782 17.2209 16.7368 17.2209C17.6108 17.2209 18.3008 16.4542 18.3008 15.5189C18.3008 14.5836 17.6108 13.8169 16.7368 13.8169Z" fill="#7289DA"/>
                <path d="M24.19 0.952148H3.64333C1.91067 0.952148 0.5 2.36281 0.5 4.11081V24.8415C0.5 26.5895 1.91067 28.0001 3.64333 28.0001H21.0313L20.2187 25.1635L22.1813 26.9881L24.0367 28.7055L27.3333 31.6188V4.11081C27.3333 2.36281 25.9227 0.952148 24.19 0.952148ZM18.2713 20.9775C18.2713 20.9775 17.7193 20.3181 17.2593 19.7355C19.268 19.1681 20.0347 17.9108 20.0347 17.9108C19.406 18.3248 18.808 18.6161 18.2713 18.8155C17.5047 19.1375 16.7687 19.3521 16.048 19.4748C14.576 19.7508 13.2267 19.6741 12.0767 19.4595C11.2027 19.2908 10.4513 19.0455 9.82267 18.8001C9.47 18.6621 9.08667 18.4935 8.70333 18.2788C8.65733 18.2481 8.61133 18.2328 8.56533 18.2021C8.53467 18.1868 8.51933 18.1715 8.504 18.1561C8.228 18.0028 8.07467 17.8955 8.07467 17.8955C8.07467 17.8955 8.81067 19.1221 10.758 19.7048C10.298 20.2875 9.73067 20.9775 9.73067 20.9775C6.342 20.8701 5.054 18.6468 5.054 18.6468C5.054 13.7095 7.262 9.70748 7.262 9.70748C9.47 8.05148 11.5707 8.09748 11.5707 8.09748L11.724 8.28148C8.964 9.07882 7.69133 10.2901 7.69133 10.2901C7.69133 10.2901 8.02867 10.1061 8.596 9.84548C10.2367 9.12481 11.54 8.92548 12.0767 8.87948C12.1687 8.86415 12.2453 8.84882 12.3373 8.84882C13.2727 8.72615 14.3307 8.69548 15.4347 8.81815C16.8913 8.98682 18.4553 9.41615 20.05 10.2901C20.05 10.2901 18.8387 9.14015 16.232 8.34281L16.4467 8.09748C16.4467 8.09748 18.5473 8.05148 20.7553 9.70748C20.7553 9.70748 22.9633 13.7095 22.9633 18.6468C22.9633 18.6468 21.66 20.8701 18.2713 20.9775Z" fill="#7289DA"/>
              </svg>
            </a>
            <!--a href>
              <img src="/img(ColorSochialLogo)/VK.svg" alt />
            </!--a>-->
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
                  this.registration_result == '102' ||
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
            <button
              :disabled="preloader"
              :class="{disable_button: preloader}"
              v-if="
                registration_mail != '' &&
                registration_password != '' &&
                registration_r_password != ''
              "
              @click="send_registraion()"
            >
              Sign up
            </button>
            <button v-else class="disable_button">Sign up</button>
          </div>
          <div>
            <p
              @click="
                (login_pop_up = true),
                  (registration_pop_up = false),
                  $store.commit('set_global_login_popup_check', true),
                  $store.commit('set_global_reg_popup_check', false),
                  reg_started=true,
                  body_active()
              "
              class="switch_popup"
            >
              Already have an account? Log in
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="popUpMask"
      v-if="
        (login_pop_up &&
          !this.$store.getters['getUserLoginCheck'].user_check_login) ||
        (this.$store.getters['get_global_login_popup_check'] &&
          !this.$store.getters['getUserLoginCheck'].user_check_login)
      "
      v-bind:class="{
        active_card: login_pop_up,
        active_card: this.$store.getters['get_global_login_popup_check'],
      }"
    >
      <div class="logPopUp">
        <div class="closePopUp">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" class="closePopUpImg"
            @click="
              (login_pop_up = false),
                body_active(),
                (forgot_pass_popoup = false),
                $store.commit('set_global_login_popup_check', false)
            ">
            <path d="M13.6565 2.34326L2.34277 13.657M13.6565 13.657L2.34277 2.34326" stroke="#ACAFB0" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="back_to_log_button" v-if="forgot_pass_popoup">
          <button @click="forgot_pass_popoup = false">Back</button>
        </div>
        <div class="logPopUpBody" v-if="!forgot_pass_popoup">
          <div>Log In</div>
          <div>You can sign up with social media</div>
          <div>
             <a @click="send_login_social('fb')">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M13.1399 22.9999V12.9646H16.383L16.8686 9.05373H13.1399V6.55673C13.1399 5.42446 13.4426 4.65275 15.0061 4.65275L17 4.65179V1.15394C16.655 1.10645 15.4715 1 14.0945 1C11.2197 1 9.25153 2.8225 9.25153 6.1696V9.05383H6V12.9647H9.25143V23L13.1399 22.9999Z" fill="#4064AD"/>
              </svg>
            </a>
            <a @click="send_login_social('google')">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21.9996 12.2291C21.9996 11.5494 21.9434 10.866 21.8235 10.1973H12.2012V14.0478H17.7114C17.4827 15.2897 16.7481 16.3883 15.6722 17.0864V19.5849H18.9596C20.8901 17.8433 21.9996 15.2713 21.9996 12.2291Z" fill="#4285F4"/>
                <path d="M12.2012 22.0002C14.9526 22.0002 17.2729 21.1148 18.9634 19.5863L15.676 17.0878C14.7614 17.6978 13.5806 18.0431 12.205 18.0431C9.54355 18.0431 7.28698 16.2832 6.47731 13.917H3.08496V16.4926C4.81675 19.8692 8.34404 22.0002 12.2012 22.0002Z" fill="#34A853"/>
                <path d="M6.47399 13.9168C6.04667 12.675 6.04667 11.3302 6.47399 10.0883V7.5127H3.08539C1.63849 10.3382 1.63806 13.6669 3.08497 16.4923L6.47399 13.9168Z" fill="#FBBC04"/>
                <path d="M12.2008 5.95779C13.6552 5.93575 15.0609 6.47218 16.1142 7.45687L19.0267 4.60201C17.1825 2.90453 14.7347 1.97128 12.2008 2.00067C8.34362 2.00067 4.81675 4.13247 3.08496 7.51274L6.47356 10.0884C7.27948 7.71849 9.53938 5.95779 12.2008 5.95779Z" fill="#EA4335"/>
              </svg>
            </a>
            <a @click="send_login_social('disc')">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 28 32" fill="none">
                <path d="M11.1402 13.8169C10.2662 13.8169 9.57617 14.5836 9.57617 15.5189C9.57617 16.4542 10.2815 17.2209 11.1402 17.2209C12.0142 17.2209 12.7042 16.4542 12.7042 15.5189C12.7195 14.5836 12.0142 13.8169 11.1402 13.8169ZM16.7368 13.8169C15.8628 13.8169 15.1728 14.5836 15.1728 15.5189C15.1728 16.4542 15.8782 17.2209 16.7368 17.2209C17.6108 17.2209 18.3008 16.4542 18.3008 15.5189C18.3008 14.5836 17.6108 13.8169 16.7368 13.8169Z" fill="#7289DA"/>
                <path d="M24.19 0.952148H3.64333C1.91067 0.952148 0.5 2.36281 0.5 4.11081V24.8415C0.5 26.5895 1.91067 28.0001 3.64333 28.0001H21.0313L20.2187 25.1635L22.1813 26.9881L24.0367 28.7055L27.3333 31.6188V4.11081C27.3333 2.36281 25.9227 0.952148 24.19 0.952148ZM18.2713 20.9775C18.2713 20.9775 17.7193 20.3181 17.2593 19.7355C19.268 19.1681 20.0347 17.9108 20.0347 17.9108C19.406 18.3248 18.808 18.6161 18.2713 18.8155C17.5047 19.1375 16.7687 19.3521 16.048 19.4748C14.576 19.7508 13.2267 19.6741 12.0767 19.4595C11.2027 19.2908 10.4513 19.0455 9.82267 18.8001C9.47 18.6621 9.08667 18.4935 8.70333 18.2788C8.65733 18.2481 8.61133 18.2328 8.56533 18.2021C8.53467 18.1868 8.51933 18.1715 8.504 18.1561C8.228 18.0028 8.07467 17.8955 8.07467 17.8955C8.07467 17.8955 8.81067 19.1221 10.758 19.7048C10.298 20.2875 9.73067 20.9775 9.73067 20.9775C6.342 20.8701 5.054 18.6468 5.054 18.6468C5.054 13.7095 7.262 9.70748 7.262 9.70748C9.47 8.05148 11.5707 8.09748 11.5707 8.09748L11.724 8.28148C8.964 9.07882 7.69133 10.2901 7.69133 10.2901C7.69133 10.2901 8.02867 10.1061 8.596 9.84548C10.2367 9.12481 11.54 8.92548 12.0767 8.87948C12.1687 8.86415 12.2453 8.84882 12.3373 8.84882C13.2727 8.72615 14.3307 8.69548 15.4347 8.81815C16.8913 8.98682 18.4553 9.41615 20.05 10.2901C20.05 10.2901 18.8387 9.14015 16.232 8.34281L16.4467 8.09748C16.4467 8.09748 18.5473 8.05148 20.7553 9.70748C20.7553 9.70748 22.9633 13.7095 22.9633 18.6468C22.9633 18.6468 21.66 20.8701 18.2713 20.9775Z" fill="#7289DA"/>
              </svg>
            </a>
            <!--a href>
              <img src="/img(ColorSochialLogo)/VK.svg" alt />
            </-a>-->
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
              v-model="password"
              class="password_input"
            />
            <div @click="forgot_pass_popoup = true" class="switch_forget_pass">
              Forgot password?
            </div>
            <img
              class="password_eye"
              @click="pass_vision('.password_input', '.password_eye')"
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
            <button
              v-if="login_mail != '' && password != ''"
              @click="send_login()"
            >
              Log in
            </button>
            <button v-else class="disable_button">Log in</button>
          </div>
          <div>
            <p
              @click="
                (login_pop_up = false),
                  (registration_pop_up = true),
                  $store.commit('set_global_login_popup_check', false),
                  $store.commit('set_global_reg_popup_check', true),
                  reg_started=true,
                  body_active()
              "
              class="switch_popup"
            >
              Don't have an account?
            </p>
          </div>
        </div>
        <div class="logPopUpBody" v-if="forgot_pass_popoup">
          <div>Restoring the password</div>
          <div>Type your email here and we will send you the error message</div>
          <div class="forgot_pass_form">
            <div>Email-adress</div>
            <input autocomplete="false" v-model="restor_mail" />
            <div
              style="margin-top: 8px"
              :class="{
                result_failure: this.registration_result_forgot != '200',
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
    </div>
    <div
      class="popUpMask"
      v-if="contact_us_popoup || $store.getters['get_contact_us_discord']"
      v-bind:class="{
        active_card:
          contact_us_popoup || $store.getters['get_contact_us_discord'],
      }"
    >
      <div class="popup" id="popUp">
        <button
          @click="
            ((contact_us_popoup = false),
            $store.commit('set_contact_us_discord', false)),
            (copied = ''),
              body_active()
          "
          class="close"
        ></button>
        <h3>Contact us</h3>
        <div class="links__popup">
          <div class="link">
            <div class="link__left">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 28 32" fill="none">
                <path d="M11.1402 13.8169C10.2662 13.8169 9.57617 14.5836 9.57617 15.5189C9.57617 16.4542 10.2815 17.2209 11.1402 17.2209C12.0142 17.2209 12.7042 16.4542 12.7042 15.5189C12.7195 14.5836 12.0142 13.8169 11.1402 13.8169ZM16.7368 13.8169C15.8628 13.8169 15.1728 14.5836 15.1728 15.5189C15.1728 16.4542 15.8782 17.2209 16.7368 17.2209C17.6108 17.2209 18.3008 16.4542 18.3008 15.5189C18.3008 14.5836 17.6108 13.8169 16.7368 13.8169Z" fill="#7289DA"/>
                <path d="M24.19 0.952148H3.64333C1.91067 0.952148 0.5 2.36281 0.5 4.11081V24.8415C0.5 26.5895 1.91067 28.0001 3.64333 28.0001H21.0313L20.2187 25.1635L22.1813 26.9881L24.0367 28.7055L27.3333 31.6188V4.11081C27.3333 2.36281 25.9227 0.952148 24.19 0.952148ZM18.2713 20.9775C18.2713 20.9775 17.7193 20.3181 17.2593 19.7355C19.268 19.1681 20.0347 17.9108 20.0347 17.9108C19.406 18.3248 18.808 18.6161 18.2713 18.8155C17.5047 19.1375 16.7687 19.3521 16.048 19.4748C14.576 19.7508 13.2267 19.6741 12.0767 19.4595C11.2027 19.2908 10.4513 19.0455 9.82267 18.8001C9.47 18.6621 9.08667 18.4935 8.70333 18.2788C8.65733 18.2481 8.61133 18.2328 8.56533 18.2021C8.53467 18.1868 8.51933 18.1715 8.504 18.1561C8.228 18.0028 8.07467 17.8955 8.07467 17.8955C8.07467 17.8955 8.81067 19.1221 10.758 19.7048C10.298 20.2875 9.73067 20.9775 9.73067 20.9775C6.342 20.8701 5.054 18.6468 5.054 18.6468C5.054 13.7095 7.262 9.70748 7.262 9.70748C9.47 8.05148 11.5707 8.09748 11.5707 8.09748L11.724 8.28148C8.964 9.07882 7.69133 10.2901 7.69133 10.2901C7.69133 10.2901 8.02867 10.1061 8.596 9.84548C10.2367 9.12481 11.54 8.92548 12.0767 8.87948C12.1687 8.86415 12.2453 8.84882 12.3373 8.84882C13.2727 8.72615 14.3307 8.69548 15.4347 8.81815C16.8913 8.98682 18.4553 9.41615 20.05 10.2901C20.05 10.2901 18.8387 9.14015 16.232 8.34281L16.4467 8.09748C16.4467 8.09748 18.5473 8.05148 20.7553 9.70748C20.7553 9.70748 22.9633 13.7095 22.9633 18.6468C22.9633 18.6468 21.66 20.8701 18.2713 20.9775Z" fill="#7289DA"/>
              </svg>
              <div class="link__names">
                <span>{{ content.support[0].title }}</span>
                <p :id="content.support[0].title">
                  {{ content.support[0].descr }}
                </p>
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
              >
                <span v-if="copied == 'discord'">Copied</span>
                <span v-else>Copy</span>
              </button>
              <a id="discord_href" :href="content.support[0].link"></a>
            </div>
          </div>
          <div class="link">
            <div class="link__left">
              <img src="/assets/img/hlvibnBVrEb.svg" alt="" />
              <div class="link__names">
                <span>Facebook messenger</span>
                <p id="CakeGamesExp">
                  m.me/CakeGamesExp
                </p>
              </div>
            </div>
            <input type="text" value="test" />
            <div class="link__right">
              <button
                id="CakeGamesExp_copy"
                :class="{ copied: copied == 'CakeGamesExp' }"
                @click="
                  copyText('m.me/CakeGamesExp'), (copied = 'CakeGamesExp')
                "
              >
                <span v-if="copied == 'CakeGamesExp'">Copied</span>
                <span v-else>Copy</span>
              </button>
              <a id="CakeGamesExp_href" href="https://m.me/CakeGamesExp"></a>
            </div>
          </div>
          <div class="link" v-if="!$store.getters['get_contact_us_discord']">
            <div class="link__left">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="32" viewBox="0 0 32 32" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 8C4.89543 8 4 8.89543 4 10V23.3333C4 24.4379 4.89543 25.3333 6 25.3333H26C27.1046 25.3333 28 24.4379 28 23.3333V10C28 8.89543 27.1046 8 26 8H6ZM25.5471 10.8592C25.2853 10.373 24.6788 10.191 24.1926 10.4529L16 14.8643L7.80743 10.4529C7.32116 10.191 6.7147 10.373 6.45286 10.8592C6.19102 11.3455 6.37296 11.952 6.85923 12.2138L15.5259 16.8805C15.8219 17.0399 16.1781 17.0399 16.4741 16.8805L25.1408 12.2138C25.627 11.952 25.809 11.3455 25.5471 10.8592Z" fill="#C24DFE"/>
              </svg>
              <div class="link__names">
                <span>{{ content.support[2].title }}</span>
                <p :id="content.support[2].title">
                  {{ content.support[2].descr }}
                </p>
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
          <div class="link" v-if="!$store.getters['get_contact_us_discord']">
            <div class="link__left">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.7024 1.40537C12.4476 1.27035 13.2152 1.19984 13.9994 1.19984C21.0686 1.19984 26.7994 6.93059 26.7994 13.9998C26.7994 14.784 26.7288 15.5516 26.5938 16.2968C27.0677 17.2985 27.3327 18.4182 27.3327 19.5998C27.3327 23.8708 23.8703 27.3332 19.5993 27.3332C18.4177 27.3332 17.298 27.0682 16.2963 26.5943C15.5511 26.7293 14.7835 26.7998 13.9994 26.7998C6.93011 26.7998 1.19935 21.0691 1.19935 13.9998C1.19935 13.2157 1.26986 12.4481 1.40488 11.7029C0.931036 10.7012 0.666016 9.58148 0.666016 8.39984C0.666016 4.12883 4.12835 0.666504 8.39935 0.666504C9.58099 0.666504 10.7007 0.931524 11.7024 1.40537ZM9.46 12.4688C9.76199 12.9864 10.1795 13.4272 10.6799 13.7568H10.6798C11.343 14.1907 12.048 14.5571 12.7843 14.8504C13.6072 15.1939 14.2455 15.4856 14.6992 15.7253C15.0831 15.9137 15.4316 16.1669 15.7295 16.4738C15.9549 16.7131 16.0801 17.0296 16.0794 17.3584C16.089 17.59 16.0434 17.8206 15.9462 18.0311C15.849 18.2415 15.7031 18.4258 15.5205 18.5687C15.0329 18.8969 14.4495 19.0526 13.8631 19.0109C13.5315 19.0142 13.2006 18.98 12.8767 18.9089C12.6139 18.8511 12.3569 18.7698 12.1087 18.6659C11.8915 18.572 11.595 18.431 11.2193 18.243C10.9169 18.0816 10.5803 17.995 10.2376 17.9902C9.92967 17.9775 9.62864 18.0837 9.3968 18.2867C9.28636 18.3919 9.20005 18.5199 9.14385 18.6617C9.08764 18.8035 9.06287 18.9558 9.07124 19.1081C9.06429 19.3968 9.15128 19.68 9.31913 19.915C9.52163 20.1716 9.7835 20.3751 10.0822 20.5079C11.2493 21.0135 12.5144 21.2526 13.7855 21.2079C14.7104 21.2266 15.631 21.0767 16.5023 20.7655C17.2253 20.5089 17.855 20.0417 18.3101 19.424C18.7572 18.7716 18.9837 17.9932 18.9566 17.2028C18.974 16.5575 18.8125 15.92 18.49 15.3607C18.1623 14.8284 17.7208 14.3753 17.1972 14.0339C16.5344 13.6063 15.8312 13.2449 15.0977 12.9549C15.0192 12.9164 14.938 12.8839 14.8547 12.8576C14.103 12.5466 13.5377 12.2971 13.1585 12.1091C12.8202 11.9506 12.5138 11.7315 12.2545 11.4627C12.0364 11.2335 11.9162 10.9284 11.9192 10.6121C11.9086 10.371 11.963 10.1314 12.0767 9.9185C12.1904 9.70559 12.3593 9.52715 12.5656 9.40186C13.054 9.11114 13.616 8.96769 14.184 8.98876C14.6202 8.98408 15.055 9.03802 15.4767 9.14913C15.9348 9.28121 16.3831 9.44524 16.8182 9.63999C16.9949 9.72188 17.1872 9.76499 17.3819 9.76642C17.5234 9.77023 17.6642 9.74405 17.7948 9.68959C17.9255 9.63514 18.0432 9.55365 18.1401 9.45048C18.2425 9.33852 18.3218 9.20749 18.3735 9.06488C18.4252 8.92227 18.4483 8.77087 18.4415 8.61932C18.446 8.32759 18.344 8.0442 18.1547 7.82218C17.8979 7.55224 17.5793 7.34876 17.2264 7.22923C16.8422 7.08812 16.445 6.98554 16.0405 6.92302C15.4751 6.83027 14.9027 6.78636 14.3298 6.79179C13.4542 6.78647 12.5844 6.93283 11.7588 7.22436C10.9999 7.48069 10.3224 7.9335 9.79534 8.53672C9.28807 9.13741 9.01992 9.90396 9.04214 10.6899C9.02419 11.3091 9.16823 11.9223 9.46 12.4688Z" fill="#28A8EA"/>
</svg>
              <div class="link__names">
                <span>{{ content.support[1].title }}</span>
                <p :id="content.support[1].title">
                  {{ content.support[1].descr }}
                </p>
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
              <a id="skype_href" :href="'skype:live:' + content.support[1].link + '?chat'"></a>
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
            <a id="telegram_href" :href="content.support[3].link"
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
                </div>-->
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

   <progress
      value="0.046049442559379546"
      v-if="horizontalProgress"
      v-bind:class="{ close_topic_progress_bar: !close_sidebar }"
    >
      <div class="progress-container">
        <span class="progress-bar" style="width: 4%"></span>
      </div>
    </progress>
    <div class="mobile_game_sidebar" v-if="game_sidebar_open">
      <div
        class="header_menu_mask sidebar_mobile_mask"
        @click="game_sidebar_open = false"
        v-if="game_sidebar_open"
      ></div>
      <div
        v-for="item in this.games.records"
        :key="item.id"
        :id="item.id"
        class="chooseGameButton"
        :class="{ active: $store.getters['getGlobalGameId'] == item.id }"
        @click="set_global_game($event, item)"
      >
        <img :src="apiImg + 'gicons/' + item.img" alt />
        <span>{{ item.title }}</span>
      </div>
    </div>
    <div
      class="sidebar"
      v-if="close_sidebar"
      v-bind:class="{ sidebar_mobile_open: close_sidebar_mobile }"
    >
      <div
        class="header_menu_mask sidebar_mobile_mask"
        @click="close_sidebar_mobile = false"
        v-if="close_sidebar_mobile"
      ></div>
      <div>
        <div class="logo">
          <a href="/">
            <!--img src="/img/Logotype.svg" alt /-->
            <svg width="160" height="65" viewBox="0 0 160 65" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M158.457 14.3364H147.167C141.873 14.3364 139.456 16.1731 138.429 21.0754C137.011 27.9224 135.377 32.217 143.386 32.217H154.676C155.189 32.217 155.5 31.9604 155.594 31.4472L156.31 28.125C156.404 27.6118 156.202 27.3552 155.702 27.3552H144.48C142.629 27.3552 142.454 26.869 142.764 25.3429H155.972C156.485 25.3429 156.796 25.0863 156.891 24.5732L157.471 21.8452C157.579 21.332 157.377 21.0754 156.864 21.0754H143.656C144.034 19.5223 144.52 19.1847 146.208 19.1847H157.431C157.944 19.1847 158.241 18.9281 158.349 18.4149L159.065 15.0927C159.173 14.593 158.97 14.3364 158.457 14.3364Z" fill="white"/>
<path d="M154.176 37.0112H139.172C138.794 37.0112 138.564 37.2003 138.483 37.5919L137.93 40.1714C137.849 40.5495 138.011 40.7521 138.389 40.7521H143.885L141.954 49.8409C141.873 50.2191 142.035 50.4081 142.413 50.4081H145.29C145.668 50.4081 145.897 50.2191 145.979 49.8409L147.91 40.7521H153.406C153.784 40.7521 154.014 40.563 154.095 40.1714L154.649 37.5919C154.703 37.2003 154.554 37.0112 154.176 37.0112Z" fill="white"/>
<path d="M115.795 32.217H119.63C120.144 32.217 120.441 31.9604 120.549 31.4472L121.872 25.181C125.829 25.181 126.032 25.0054 126.464 25.8967L129.53 31.7984C129.827 32.3386 129.705 32.2035 134.945 32.2035C135.607 32.2035 135.661 31.5688 135.553 31.3662C131.609 24.2626 131.447 23.7764 130.542 22.9526C131.096 22.4935 131.204 22.3584 138.335 15.0793C138.591 14.7957 138.618 14.3095 138.078 14.3095C132.852 14.3095 133.041 14.1879 132.555 14.7146L127.193 20.4407C126.396 21.3185 126.207 21.1565 122.696 21.1565L124.006 15.0793C124.114 14.5661 123.925 14.3095 123.412 14.3095H119.603C119.09 14.3095 118.766 14.5661 118.658 15.0793L115.187 31.4337C115.079 31.9739 115.282 32.217 115.795 32.217Z" fill="white"/>
<path d="M136.97 37.0112H127.017C124.546 37.0112 123.02 38.3347 122.601 40.3064C122.223 42.0891 122.182 42.4132 122.182 42.7238C122.182 44.3579 123.236 45.2627 125.207 45.2627H131.798C132.068 45.2627 132.176 45.3843 132.176 45.6139C132.176 46.1135 132 46.7753 131.447 46.7753H121.818C121.44 46.7753 121.21 46.9644 121.129 47.356L120.589 49.8409C120.508 50.2191 120.67 50.4081 121.048 50.4081H131.487C133.959 50.4081 135.471 49.0846 135.89 47.1129C136.295 45.2357 136.335 44.8981 136.335 44.5875C136.335 42.9804 135.296 42.0621 133.324 42.0621H126.747C126.477 42.0621 126.369 41.954 126.369 41.7244C126.369 41.2248 126.517 40.6576 127.058 40.6576H136.2C136.579 40.6576 136.835 40.4685 136.903 40.0768L137.416 37.5919C137.483 37.2003 137.362 37.0112 136.97 37.0112Z" fill="white"/>
<path d="M116.025 37.0112H109.988C106.031 37.0112 104.208 38.3887 103.438 42.0621C102.371 47.1939 101.156 50.4081 107.152 50.4081H113.189C117.146 50.4081 118.969 49.0306 119.739 45.3573C120.562 41.3733 120.643 40.7656 120.643 40.2254C120.643 37.9026 119.252 37.0112 116.025 37.0112ZM115.782 45.0467C115.471 46.4782 115.174 46.7753 113.81 46.7753H108.084C107.084 46.7753 106.706 46.5997 106.706 45.9515C106.706 45.7219 106.76 45.4383 107.409 42.3727C107.719 40.9412 108.016 40.6576 109.38 40.6576H115.106C116.106 40.6576 116.484 40.8331 116.484 41.4814C116.484 41.6974 116.43 41.981 115.782 45.0467Z" fill="white"/>
<path d="M89.8513 32.2169C94.9697 32.2169 94.9697 32.3654 95.3478 31.8117L97.2115 29.1243H107.381L108.151 31.8117C108.232 32.1224 108.38 32.2169 108.785 32.2169H113.309C113.877 32.2169 114.025 31.8793 113.904 31.4471L109.474 16.9158C108.839 14.8225 107.894 14.3364 106.152 14.3364C103.356 14.3364 102.154 13.9852 100.048 16.9158L89.5947 31.4471C89.2841 31.8928 89.2841 32.2169 89.8513 32.2169ZM100.858 23.9114C100.912 23.8303 100.979 23.7358 101.033 23.6548C101.155 23.4927 101.263 23.3307 101.371 23.1686C101.412 23.1011 101.466 23.0335 101.506 22.966C101.506 22.9525 101.52 22.9525 101.52 22.939C101.533 22.9255 101.547 22.912 101.547 22.8985C101.574 22.858 101.587 22.831 101.614 22.7904C102.938 20.8727 103.545 19.9949 103.842 19.6033C103.707 19.7789 103.505 20.0625 103.208 20.4946C103.505 20.0625 103.707 19.7924 103.842 19.6033C103.856 19.5898 103.869 19.5763 103.883 19.5628C103.896 19.5493 103.91 19.5358 103.923 19.5223C104.086 19.3197 104.14 19.2792 104.194 19.2792C104.221 19.2792 104.234 19.2792 104.261 19.2792C104.369 19.2792 104.464 19.2657 104.531 19.3197C104.572 19.3467 104.599 19.3872 104.612 19.4682L104.666 19.6708L105.693 23.2496C105.733 23.3982 105.774 23.5332 105.814 23.6953L106.219 25.1133H100.007C100.318 24.6811 100.601 24.2895 100.858 23.9114Z" fill="white"/>
<path d="M97.2525 37.0112H91.2293C87.2723 37.0112 85.4491 38.3887 84.6794 42.0621C83.6125 47.1939 82.397 50.4081 88.3932 50.4081H94.4299C98.3869 50.4081 100.21 49.0306 100.98 45.3573C101.804 41.3733 101.885 40.7656 101.885 40.2254C101.871 37.9026 100.467 37.0112 97.2525 37.0112ZM97.0094 45.0467C96.6988 46.4782 96.4016 46.7753 95.0376 46.7753H89.3116C88.3122 46.7753 87.9341 46.5997 87.9341 45.9515C87.9341 45.7219 87.9881 45.4383 88.6363 42.3727C88.9469 40.9412 89.244 40.6576 90.608 40.6576H96.3341C97.3335 40.6576 97.7116 40.8331 97.7116 41.4814C97.7116 41.6974 97.6576 41.981 97.0094 45.0467Z" fill="white"/>
<path d="M76.0361 32.217H87.6098C88.123 32.217 88.4336 31.9604 88.5281 31.4472L89.2709 28.0034C89.3654 27.4902 89.1628 27.2336 88.6632 27.2336H77.292C75.9685 27.2336 75.4553 27.0041 75.4553 26.1397C75.4553 25.8291 75.5364 25.451 76.3467 21.6156C76.7518 19.6979 77.157 19.3197 78.9801 19.3197H90.3513C90.8645 19.3197 91.1751 19.0632 91.2696 18.55L92.0124 15.1062C92.1204 14.593 91.9179 14.3364 91.4047 14.3364H79.8309C74.537 14.3364 72.1196 16.1731 71.0932 21.0754C69.6617 27.9359 68.0276 32.217 76.0361 32.217Z" fill="white"/>
<path d="M80.1819 37.0112H68.9053C68.5271 37.0112 68.2705 37.2003 68.203 37.5919L65.5966 49.8409C65.5155 50.2191 65.6776 50.4081 66.0557 50.4081H77.7915C80.3304 50.4081 81.4648 49.0171 81.8835 46.9238C82.1536 45.6139 82.5047 44.4119 81.4784 43.4801C82.2481 42.9399 82.8018 42.1566 83.0044 41.1707C83.2745 39.8878 83.315 39.5367 83.315 39.2125C83.315 37.727 82.3967 37.0112 80.1819 37.0112ZM78.0481 46.2081C77.9536 46.6132 77.7105 46.8023 77.2243 46.8023H70.5124C70.4988 46.8023 70.4853 46.8023 70.4583 46.8023C70.4313 46.8023 70.4043 46.7888 70.3773 46.7888C70.2828 46.7483 70.2828 46.6132 70.3503 46.2756C70.3773 46.1406 70.4178 45.9785 70.4583 45.7759C70.4988 45.5733 70.5529 45.3303 70.6204 45.0467H77.5889C77.6835 45.0467 77.7645 45.0602 77.8185 45.0737C77.859 45.0872 77.886 45.0872 77.9266 45.1007C77.9671 45.1142 77.9941 45.1277 78.0211 45.1547C78.0346 45.1682 78.0481 45.1682 78.0616 45.1817C78.2777 45.3708 78.1561 45.7759 78.0481 46.2081ZM79.034 41.6569C78.9529 42.0351 78.6828 42.2376 78.2102 42.2376H71.2281C71.2956 41.927 71.3497 41.6704 71.3902 41.4679C71.3902 41.4408 71.4037 41.4138 71.4037 41.3868C71.5387 40.7251 71.5792 40.617 71.8358 40.617H78.5478C78.9529 40.617 79.142 40.7656 79.142 41.0357C79.142 41.0897 79.142 41.1167 79.034 41.6569Z" fill="white"/>
<path d="M20.4093 59.8479C23.8396 59.0782 27.1888 57.6331 30.1599 55.9585C48.8912 45.3977 61.964 21.3589 56.4945 7.86747C53.699 0.96645 46.9195 -0.991765 39.5998 0.439757C54.2797 1.3716 56.7781 16.9968 45.9066 33.4998C41.1799 40.6709 34.6435 46.9507 27.6345 51.3533C27.4319 47.2478 28.4988 42.7777 29.9438 38.9018H29.9708L26.284 32.9461C23.8801 29.0837 22.2595 26.3962 20.774 24.1274C16.3173 24.6271 9.86197 23.8978 5.90503 20.8727C5.72946 20.7512 5.51338 20.9537 5.63493 21.1293C6.63429 22.6284 7.51211 23.9518 8.2954 25.1268C3.3526 32.8381 -0.253221 44.1012 2.70436 52.0826C11.7932 45.3977 17.0466 36.2143 17.0466 36.2143L17.4923 36.4709C17.8704 36.687 18.154 36.8355 18.154 36.8355C18.8292 37.1462 19.4505 37.3892 20.0987 37.6053C18.8292 39.7661 13.8054 48.1257 7.93077 55.4994C4.51402 59.5779 0.908203 59.3213 0.908203 59.3213C1.59695 60.01 6.22915 63.6968 15.4665 64.4531C12.2253 63.2242 11.8607 60.2396 12.9546 58.0923L23.1238 38.3616C23.8531 38.4967 24.5823 38.6047 25.5547 38.6992C25.5547 38.6992 25.9193 38.7262 26.4865 38.7668C26.7026 38.7803 26.9457 38.7938 27.2158 38.8073C27.2023 38.8208 21.3277 47.8961 20.4093 59.8479ZM6.01307 44.1282C6.01307 44.1282 5.18927 36.6735 10.4022 28.3274C14.3591 34.2831 14.3591 34.2426 15.426 35.1339C11.8202 39.6581 9.18672 41.8864 6.01307 44.1282ZM16.1012 33.6214L10.3481 24.8972C10.3481 24.8972 14.8453 26.8419 19.6395 26.3827L26.0814 36.714C26.0814 36.7005 20.3148 36.66 16.1012 33.6214Z" fill="#C24DFE"/>
<path d="M25.4202 11.8515C24.2453 18.1042 16.4259 20.211 12.2394 15.5383L12.2259 15.5248C9.65998 17.0644 7.83681 18.1583 7.5127 18.3608C8.55257 19.4007 9.90307 19.9949 11.6047 20.4271C16.2639 21.5885 21.5038 21.386 21.5983 21.386L34.4955 2.80316C34.6846 2.54657 34.374 2.20895 34.1039 2.38451C32.3483 3.4379 28.918 5.50415 25.0826 7.79999C25.5553 9.08296 25.6903 10.474 25.4202 11.8515Z" fill="#C24DFE"/>
<path d="M3.69061 15.4031C3.69061 15.4031 7.10736 9.31237 14.9807 10.0146C13.4277 10.5008 12.4688 12.6751 14.211 14.3497C17.209 17.2398 22.4084 15.7137 23.2187 11.4461C23.3808 10.5953 23.3268 9.75803 23.1107 9.00175C21.7737 4.28853 15.3724 4.00493 14.6026 7.07055C15.3049 6.89498 16.0476 7.13807 16.5203 7.69177C16.993 8.24547 17.1145 9.01526 16.8309 9.677C16.5743 10.2847 16.0341 10.7169 15.3859 10.8249C15.3589 10.8249 15.3454 10.8384 15.3184 10.8384C15.2778 10.8519 15.2373 10.8519 15.1968 10.8519C16.3042 10.3658 15.791 8.92072 14.9807 9.1503C15.0077 9.19082 15.0348 9.21783 15.0618 9.25835C13.3601 9.1233 6.20253 8.96123 1.65137 15.4301C1.7324 15.3221 2.79929 14.4983 3.69061 15.4031Z" fill="#C24DFE"/>
<path d="M29.7275 33.2431L31.078 35.4444L40.0588 19.1304C41.0176 17.4018 41.2067 15.3896 40.626 13.5259L29.7275 32.1087C29.5114 32.4598 29.5114 32.8919 29.7275 33.2431Z" fill="#C24DFE"/>
<path d="M26.7841 27.4899L38.0607 9.13671L36.6697 6.48975L27.6349 20.1162C26.1494 22.3445 25.8523 25.005 26.7841 27.4899Z" fill="#C24DFE"/>
<path d="M60.2894 13.688C61.4913 21.1562 59.6276 29.5833 54.9414 37.7133C47.8783 49.9622 35.8455 59.7263 22.9482 63.8183C25.5547 63.4537 29.3091 62.5623 33.6982 60.4015C41.9902 56.323 47.8513 50.3539 51.3086 46.0593C55.0089 41.4676 56.8051 37.7808 56.8726 37.6187C62.018 27.7196 62.018 20.6565 61.1267 16.4835C60.8971 15.4166 60.6 14.4848 60.2894 13.688Z" fill="#C24DFE"/>
</svg>
          </a>
        </div>
        <div class="languageLogo txtAlignCenter">
          <div
            v-bind:class="{
              active: this.$store.getters['getSelectedZone'] == 'eu',
            }"
            @click="(zone_pick = 'eu'), set_cookie('eu'), selected_zone('eu')"
          >
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g clip-path="url(#clip0)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M24 24V0H-0.111679V24H24Z" fill="#224B8C"/>
              <path d="M12.3892 19.644L12.0002 18.5103L11.6112 19.644H10.4257L11.3705 20.3738L11.0273 21.5103L12.0002 20.8324L12.9732 21.5103L12.63 20.3738L13.5744 19.644H12.3892Z" fill="#F2CA30"/>
              <path d="M12.3892 3.62338L12.0002 2.48969L11.6112 3.62338H10.4257L11.3705 4.35318L11.0273 5.48969L12.0002 4.81172L12.9732 5.48969L12.63 4.35318L13.5744 3.62338H12.3892Z" fill="#F2CA30"/>
              <path d="M20.3995 11.6336L20.0105 10.4999L19.6215 11.6336H18.436L19.3808 12.3634L19.0376 13.4999L20.0105 12.822L20.9835 13.4999L20.6403 12.3634L21.5847 11.6336H20.3995Z" fill="#F2CA30"/>
              <path d="M4.37891 11.6336L3.98989 10.4999L3.60088 11.6336H2.41534L3.36016 12.3634L3.01695 13.4999L3.98989 12.822L4.96283 13.4999L4.61963 12.3634L5.56404 11.6336H4.37891Z" fill="#F2CA30"/>
              <path d="M16.3944 18.5708L16.0054 17.4371L15.6164 18.5708H14.4308L15.3756 19.3006L15.0324 20.4371L16.0054 19.7591L16.9783 20.4371L16.6351 19.3006L17.5795 18.5708H16.3944Z" fill="#F2CA30"/>
              <path d="M8.38407 4.6965L7.99506 3.56281L7.60604 4.6965H6.42051L7.36532 5.4263L7.02212 6.56281L7.99506 5.88485L8.968 6.56281L8.6248 5.4263L9.5692 4.6965H8.38407Z" fill="#F2CA30"/>
              <path d="M19.3263 7.62838L18.9373 6.49469L18.5483 7.62838H17.3628L18.3076 8.35819L17.9644 9.49469L18.9373 8.81673L19.9103 9.49469L19.5671 8.35819L20.5115 7.62838H19.3263Z" fill="#F2CA30"/>
              <path d="M5.45204 15.6388L5.06303 14.5051L4.67401 15.6388H3.48848L4.43329 16.3686L4.09009 17.5051L5.06303 16.8271L6.03597 17.5051L5.69277 16.3686L6.63717 15.6388H5.45204Z" fill="#F2CA30"/>
              <path d="M19.3264 15.6388L18.9374 14.5051L18.5483 15.6388H17.3628L18.3076 16.3686L17.9644 17.5051L18.9374 16.8271L19.9103 17.5051L19.5671 16.3686L20.5115 15.6388H19.3264Z" fill="#F2CA30"/>
              <path d="M5.4521 7.6285L5.06309 6.49481L4.67408 7.6285H3.48854L4.43335 8.35831L4.09015 9.49481L5.06309 8.81685L6.03603 9.49481L5.69283 8.35831L6.63723 7.6285H5.4521Z" fill="#F2CA30"/>
              <path d="M16.3943 4.69638L16.0053 3.56268L15.6163 4.69638H14.4308L15.3756 5.42618L15.0324 6.56268L16.0053 5.88472L16.9782 6.56268L16.635 5.42618L17.5794 4.69638H16.3943Z" fill="#F2CA30"/>
              <path d="M8.38403 18.5708L7.99501 17.4371L7.606 18.5708H6.42046L7.36527 19.3006L7.02207 20.4371L7.99501 19.7591L8.96795 20.4371L8.62475 19.3006L9.56916 18.5708H8.38403Z" fill="#F2CA30"/>
              </g>
              <path d="M0 0V-1H-1V0H0ZM24 0H25V-1H24V0ZM24 24V25H25V24H24ZM0 24H-1V25H0V24ZM0 1H24V-1H0V1ZM23 0V24H25V0H23ZM24 23H0V25H24V23ZM1 24V0H-1V24H1Z" fill="white"/>
              <defs>
              <clipPath id="clip0">
              <path d="M0 0H24V24H0V0Z" fill="white"/>
              </clipPath>
              </defs>
              </svg>
            </span>
            <span>eu</span>
          </div>
          <div class="separator">
            <span></span>
          </div>
          <div
            v-bind:class="{
              active: this.$store.getters['getSelectedZone'] == 'us',
            }"
            @click="(zone_pick = 'us'), set_cookie('us'), selected_zone('us')"
          >
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0)">
                <path d="M39.571 0H-6.02903V24H39.571V0Z" fill="#B22234"/>
                <path d="M-6.02903 2.76923H39.571H-6.02903ZM39.571 6.46153H-6.02903H39.571ZM-6.02903 10.1538H39.571H-6.02903ZM39.571 13.8462H-6.02903H39.571ZM-6.02903 17.5385H39.571H-6.02903ZM39.571 21.2308H-6.02903H39.571Z" fill="black"/>
                <path d="M39.571 21.2308H-6.02903M-6.02903 2.76923H39.571H-6.02903ZM39.571 6.46153H-6.02903H39.571ZM-6.02903 10.1538H39.571H-6.02903ZM39.571 13.8461H-6.02903H39.571ZM-6.02903 17.5385H39.571H-6.02903Z" stroke="white" stroke-width="1.84615"/>
                <path d="M12.211 0H-6.02903V12.9231H12.211V0Z" fill="#3C3B6E"/>
                <path d="M-4.50903 0.553833L-4.07497 1.88972L-5.21135 1.0641H-3.80671L-4.94309 1.88972L-4.50903 0.553833Z" fill="white"/>
                <path d="M-1.4498 0.553868L-1.01574 1.88976L-2.15212 1.06413H-0.74748L-1.88386 1.88976L-1.4498 0.553868Z" fill="white"/>
                <path d="M1.5779 0.553868L2.01195 1.88976L0.875577 1.06413H2.28021L1.14384 1.88976L1.5779 0.553868Z" fill="white"/>
                <path d="M4.60559 0.553868L5.03965 1.88976L3.90327 1.06413H5.30791L4.17153 1.88976L4.60559 0.553868Z" fill="white"/>
                <path d="M7.63328 0.553868L8.06733 1.88976L6.93096 1.06413H8.33559L7.19922 1.88976L7.63328 0.553868Z" fill="white"/>
                <path d="M10.661 0.553868L11.095 1.88976L9.95865 1.06413H11.3633L10.2269 1.88976L10.661 0.553868Z" fill="white"/>
                <path d="M-2.96364 2.2959L-2.52958 3.63179L-3.66595 2.80616H-2.26132L-3.39769 3.63179L-2.96364 2.2959Z" fill="white"/>
                <path d="M0.0956082 2.29586L0.529665 3.63175L-0.60671 2.80612H0.797927L-0.338449 3.63175L0.0956082 2.29586Z" fill="white"/>
                <path d="M3.12329 2.29586L3.55735 3.63175L2.42097 2.80612H3.82561L2.68924 3.63175L3.12329 2.29586Z" fill="white"/>
                <path d="M6.15099 2.29586L6.58504 3.63175L5.44867 2.80612H6.85331L5.71693 3.63175L6.15099 2.29586Z" fill="white"/>
                <path d="M9.17868 2.29586L9.61274 3.63175L8.47636 2.80612H9.881L8.74463 3.63175L9.17868 2.29586Z" fill="white"/>
                <path d="M-4.50903 4.03796L-4.07497 5.37385L-5.21135 4.54823H-3.80671L-4.94309 5.37385L-4.50903 4.03796Z" fill="white"/>
                <path d="M-1.4498 4.03795L-1.01574 5.37384L-2.15212 4.54822H-0.74748L-1.88386 5.37384L-1.4498 4.03795Z" fill="white"/>
                <path d="M1.5779 4.03795L2.01195 5.37384L0.875577 4.54822H2.28021L1.14384 5.37384L1.5779 4.03795Z" fill="white"/>
                <path d="M4.60559 4.03795L5.03965 5.37384L3.90327 4.54822H5.30791L4.17153 5.37384L4.60559 4.03795Z" fill="white"/>
                <path d="M7.63328 4.03795L8.06733 5.37384L6.93096 4.54822H8.33559L7.19922 5.37384L7.63328 4.03795Z" fill="white"/>
                <path d="M10.661 4.03795L11.095 5.37384L9.95865 4.54822H11.3633L10.2269 5.37384L10.661 4.03795Z" fill="white"/>
                <path d="M-2.96364 5.77991L-2.52958 7.1158L-3.66595 6.29017H-2.26132L-3.39769 7.1158L-2.96364 5.77991Z" fill="white"/>
                <path d="M0.0956082 5.77994L0.529665 7.11583L-0.60671 6.29021H0.797927L-0.338449 7.11583L0.0956082 5.77994Z" fill="white"/>
                <path d="M3.12329 5.77994L3.55735 7.11583L2.42097 6.29021H3.82561L2.68924 7.11583L3.12329 5.77994Z" fill="white"/>
                <path d="M6.15099 5.77994L6.58504 7.11583L5.44867 6.29021H6.85331L5.71693 7.11583L6.15099 5.77994Z" fill="white"/>
                <path d="M9.17868 5.77994L9.61274 7.11583L8.47636 6.29021H9.881L8.74463 7.11583L9.17868 5.77994Z" fill="white"/>
                <path d="M-4.50903 7.52209L-4.07497 8.85798L-5.21135 8.03236H-3.80671L-4.94309 8.85798L-4.50903 7.52209Z" fill="white"/>
                <path d="M-1.4498 7.52204L-1.01574 8.85793L-2.15212 8.0323H-0.74748L-1.88386 8.85793L-1.4498 7.52204Z" fill="white"/>
                <path d="M1.5779 7.52204L2.01195 8.85793L0.875577 8.0323H2.28021L1.14384 8.85793L1.5779 7.52204Z" fill="white"/>
                <path d="M4.60559 7.52204L5.03965 8.85793L3.90327 8.0323H5.30791L4.17153 8.85793L4.60559 7.52204Z" fill="white"/>
                <path d="M7.63328 7.52204L8.06733 8.85793L6.93096 8.0323H8.33559L7.19922 8.85793L7.63328 7.52204Z" fill="white"/>
                <path d="M10.661 7.52204L11.095 8.85793L9.95865 8.0323H11.3633L10.2269 8.85793L10.661 7.52204Z" fill="white"/>
                <path d="M-4.50903 11.0061L-4.07497 12.342L-5.21135 11.5164H-3.80671L-4.94309 12.342L-4.50903 11.0061Z" fill="white"/>
                <path d="M-1.4498 11.0061L-1.01574 12.342L-2.15212 11.5164H-0.74748L-1.88386 12.342L-1.4498 11.0061Z" fill="white"/>
                <path d="M1.5779 11.0061L2.01195 12.342L0.875577 11.5164H2.28021L1.14384 12.342L1.5779 11.0061Z" fill="white"/>
                <path d="M4.60559 11.0061L5.03965 12.342L3.90327 11.5164H5.30791L4.17153 12.342L4.60559 11.0061Z" fill="white"/>
                <path d="M7.63328 11.0061L8.06733 12.342L6.93096 11.5164H8.33559L7.19922 12.342L7.63328 11.0061Z" fill="white"/>
                <path d="M10.661 11.0061L11.095 12.342L9.95865 11.5164H11.3633L10.2269 12.342L10.661 11.0061Z" fill="white"/>
                <path d="M-2.96364 9.26404L-2.52958 10.5999L-3.66595 9.7743H-2.26132L-3.39769 10.5999L-2.96364 9.26404Z" fill="white"/>
                <path d="M0.0956082 9.26403L0.529665 10.5999L-0.60671 9.77429H0.797927L-0.338449 10.5999L0.0956082 9.26403Z" fill="white"/>
                <path d="M3.12329 9.26403L3.55735 10.5999L2.42097 9.77429H3.82561L2.68924 10.5999L3.12329 9.26403Z" fill="white"/>
                <path d="M6.15099 9.26403L6.58504 10.5999L5.44867 9.77429H6.85331L5.71693 10.5999L6.15099 9.26403Z" fill="white"/>
                <path d="M9.17868 9.26403L9.61274 10.5999L8.47636 9.77429H9.881L8.74463 10.5999L9.17868 9.26403Z" fill="white"/>
                </g>
                <path d="M0 0V-1H-1V0H0ZM24 0H25V-1H24V0ZM24 24V25H25V24H24ZM0 24H-1V25H0V24ZM0 1H24V-1H0V1ZM23 0V24H25V0H23ZM24 23H0V25H24V23ZM1 24V0H-1V24H1Z" fill="white"/>
                <defs>
                <clipPath id="clip0">
                <path d="M0 0H24V24H0V0Z" fill="white"/>
                </clipPath>
                </defs>
              </svg>
            </span>
            <span>us</span>
          </div>
        </div>
        <div class="separator"></div>
        <div v-if="!category_preload" class="tabs">
          <div
            v-for="item in this.category"
            :key="item.id"
            v-if="item.parent == 0"
            class="tabsItem"
          >
            <div class="tabTitle">
              <a
                v-bind:href="
                  '/' +
                  $store.getters['getGlobalGame'] +
                  '/catalog/' +
                  item.slug
                "
              >
                <span>
                  <img
                    v-if="item.icon != ''"
                    :src="apiImg + 'category/' + item.icon"
                    alt
                  />
                  <img v-else :src="apiImg + 'category/' + item.img" alt />
                </span>
                <span>
                  <a
                    v-bind:href="
                      '/' +
                      $store.getters['getGlobalGame'] +
                      '/catalog/' +
                      item.slug
                    "
                    v-html="item.menu_name"
                  ></a>
                </span>
              </a>
              <span
                v-on:click="open_tab(item)"
                class="arrowDown"
                v-if="item.sub_category != ''"
              >
                <img data-not-lazy :src="'/' + item.img_button" alt />
              </span>
            </div>
            <div class="tabItems" v-if="item.sub_category_open">
              <div
                class="tabItemsHref"
                v-for="itemSub in item.sub_category"
                :key="itemSub.id"
              >
                <a
                  v-bind:href="
                    '/' +
                    $store.getters['getGlobalGame'] +
                    '/catalog/' +
                    item.slug +
                    '/' +
                    itemSub.slug
                  "
                  >{{ itemSub.menu_name }}</a
                >
                <span
                  v-on:click="open_tab(itemSub)"
                  class="arrowDown"
                  v-if="/*itemSub.sub_category != ''*/ false"
                >
                  <img data-not-lazy :src="'/' + itemSub.img_button" alt />
                </span>
                <div class="tabItems" v-if="itemSub.sub_category_open">
                  <div
                    class="tabItemsHref"
                    v-for="sub_itemSub in itemSub.sub_category"
                    :key="sub_itemSub.id"
                  >
                    <a
                      v-bind:href="
                        '/' +
                        $store.getters['getGlobalGame'] +
                        '/catalog/' +
                        item.slug +
                        '/' +
                        itemSub.slug +
                        '/' +
                        sub_itemSub.slug
                      "
                      >{{ sub_itemSub.menu_name }}</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="category_preload" class="tabs category_preload">
          <div class="tabsItem">
            <div class="tabTitle">
              <a
                ><span><img alt="" src="" /></span> <span></span
              ></a>
            </div>
          </div>
          <div class="tabsItem">
            <div class="tabTitle">
              <a
                ><span><img alt="" src="" /></span> <span></span
              ></a>
            </div>
          </div>
          <div class="tabsItem">
            <div class="tabTitle">
              <a
                ><span><img alt="" src="" /></span> <span></span
              ></a>
            </div>
          </div>
          <div class="tabsItem">
            <div class="tabTitle">
              <a
                ><span><img alt="" src="" /></span> <span></span
              ></a>
            </div>
          </div>
          <div class="tabsItem">
            <div class="tabTitle">
              <a
                ><span><img alt="" src="" /></span> <span></span
              ></a>
            </div>
          </div>
          <div class="tabsItem">
            <div class="tabTitle">
              <a
                ><span><img alt="" src="" /></span> <span></span
              ></a>
            </div>
          </div>
          <div class="tabsItem">
            <div class="tabTitle">
              <a
                ><span><img alt="" src="" /></span> <span></span
              ></a>
            </div>
          </div>
          <div class="tabsItem">
            <div class="tabTitle">
              <a
                ><span><img alt="" src="" /></span> <span></span
              ></a>
            </div>
          </div>
        </div>
        <div class="separator"></div>
        <div class="sidebarMobile">
          <div>
            <a
              v-bind:href="'/' + $store.getters['getGlobalGame'] + '/calendar'"
            >
              <img src="/img/Calendar White.png" alt />
              <span>Event calendar</span>
            </a>
          </div>
          <div>
            <div>
              <a href="/page/favorite">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2137 9.10374L12 3.59956L13.7863 9.10374L14.7375 8.79505L13.7863 9.10374C13.9909 9.73401 14.578 10.1618 15.2417 10.1618H21.0256L16.3453 13.5662C15.8091 13.9562 15.5853 14.6469 15.7898 15.277L17.5769 20.7835L12.8998 17.3814C12.3634 16.9912 11.6366 16.9912 11.1002 17.3814L6.42308 20.7835L8.21019 15.277C8.41467 14.6469 8.19087 13.9562 7.65467 13.5662L2.97436 10.1618H8.75831C9.42196 10.1618 10.0091 9.73401 10.2137 9.10374Z" stroke="#ACAFB0" stroke-width="2"/>
                </svg>
                <span>Favourite</span>
              </a>
              <div class="circleNumber">
                <span>{{ favorite.length }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="sidebarMobile separator"></div>
        <div class="subInfo">
          <div>
            <a href="/page/guarantees">Guarantees</a>
          </div>
          <div>
            <a href="/page/blogs">News &amp; Guides</a>
          </div>
          <div>
            <a href="/page/reviews">Feedbacks</a>
          </div>
          <div>
            <a href="/page/work-with-us">Work with us</a>
          </div>
          <div>
            <a href="/page/about">About Us</a>
          </div>
          <div>
            <a href="/page/blogs/about-us">Our Blog</a>
          </div>
        </div>
        <div class="separator"></div>
        <div class="sochialLogo" style="margin-bottom: 16px">
          <a href="https://www.instagram.com/cakeboost/">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M5.34891 20.4215C5.44181 20.4689 5.64603 20.5483 6.22325 20.5954C6.82642 20.6447 7.62036 20.6464 8.85714 20.6464H15.1429C16.3796 20.6464 17.1736 20.6447 17.7767 20.5954C18.354 20.5483 18.5582 20.4689 18.6511 20.4215C19.0394 20.2237 19.355 19.908 19.5529 19.5197C19.6002 19.4269 19.6796 19.2226 19.7268 18.6454C19.776 18.0422 19.7778 17.2483 19.7778 16.0115V9.7258C19.7778 8.48901 19.776 7.69508 19.7268 7.09191C19.6796 6.51468 19.6002 6.31046 19.5529 6.21756L21.5329 5.20869C22 6.12546 22 7.32557 22 9.7258V16.0115C22 18.4117 22 19.6118 21.5329 20.5286C21.122 21.335 20.4664 21.9907 19.66 22.4015C18.7432 22.8687 17.5431 22.8687 15.1429 22.8687H8.85714C6.45692 22.8687 5.25681 22.8687 4.34004 22.4015L5.34891 20.4215Z" fill="#828688"/>
              <path d="M4.34004 22.4015C3.53363 21.9907 2.878 21.335 2.46712 20.5286C2 19.6118 2 18.4117 2 16.0115V9.7258C2 7.32557 2 6.12546 2.46712 5.20869C2.878 4.40228 3.53363 3.74665 4.34004 3.33577C5.25681 2.86865 6.45692 2.86865 8.85714 2.86865H15.1429C17.5431 2.86865 18.7432 2.86865 19.66 3.33577C20.4664 3.74665 21.122 4.40228 21.5329 5.20869L19.5529 6.21756C19.355 5.82929 19.0394 5.51362 18.6511 5.31578C18.5582 5.26845 18.354 5.18904 17.7767 5.14188C17.1736 5.0926 16.3796 5.09087 15.1429 5.09087H8.85714C7.62036 5.09087 6.82642 5.0926 6.22325 5.14188C5.64603 5.18904 5.44181 5.26845 5.34891 5.31578C4.96064 5.51362 4.64496 5.82929 4.44713 6.21756C4.3998 6.31046 4.32039 6.51468 4.27323 7.09191C4.22395 7.69508 4.22222 8.48901 4.22222 9.7258V16.0115C4.22222 17.2483 4.22395 18.0422 4.27323 18.6454C4.32039 19.2226 4.3998 19.4268 4.44713 19.5197C4.64496 19.908 4.96064 20.2237 5.34891 20.4215L4.34004 22.4015Z" fill="#828688"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.64288 12.8687C6.64288 9.90999 9.04135 7.51151 12 7.51151C14.9587 7.51151 17.3572 9.90999 17.3572 12.8687C17.3572 15.8273 14.9587 18.2258 12 18.2258C9.04135 18.2258 6.64288 15.8273 6.64288 12.8687ZM12 9.73373C10.2687 9.73373 8.8651 11.1373 8.8651 12.8687C8.8651 14.6 10.2687 16.0036 12 16.0036C13.7314 16.0036 15.1349 14.6 15.1349 12.8687C15.1349 11.1373 13.7314 9.73373 12 9.73373Z" fill="#828688"/>
              <path d="M17.5556 8.42421C18.1692 8.42421 18.6667 7.92675 18.6667 7.3131C18.6667 6.69945 18.1692 6.20199 17.5556 6.20199C16.9419 6.20199 16.4444 6.69945 16.4444 7.3131C16.4444 7.92675 16.9419 8.42421 17.5556 8.42421Z" fill="#828688"/>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/channel/UCe-rP4IHqXR5fnDwno1fWgg?view_as=subscriber"
          >
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
<path d="M11.9932 5.86865C11.9932 5.86865 5.11728 5.86866 3.39152 6.30556C2.46749 6.5571 1.70662 7.2984 1.44844 8.21191C1.00001 9.89329 1 13.3753 1 13.3753C1 13.3753 1.00001 16.8705 1.44844 18.5254C1.70662 19.4389 2.4539 20.167 3.39152 20.4185C5.13087 20.8686 11.9932 20.8687 11.9932 20.8687C11.9932 20.8687 18.8827 20.8686 20.6084 20.4317C21.5461 20.1802 22.2933 19.4654 22.5379 18.5386C22.9999 16.8705 23 13.3885 23 13.3885C23 13.3885 23.0135 9.89329 22.5379 8.21191C22.2933 7.2984 21.5461 6.57035 20.6084 6.33205C18.8827 5.86867 11.9932 5.86865 11.9932 5.86865ZM9.80538 10.1582L15.5263 13.3753L9.80538 16.5791V10.1582Z" fill="#828688"/>
</svg>
          </a>
          <a href=" https://www.facebook.com/CakeGamesExp/">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
<path d="M18.3337 10.453C18.3337 5.85094 14.6024 2.11963 10.0003 2.11963C5.3983 2.11963 1.66699 5.85094 1.66699 10.453C1.66699 14.612 4.71392 18.0597 8.69835 18.6855V12.8624H6.58191V10.453H8.69835V8.61661C8.69835 6.52829 9.9429 5.37398 11.8461 5.37398C12.7578 5.37398 13.7117 5.53687 13.7117 5.53687V7.58768H12.6605C11.6257 7.58768 11.3023 8.22988 11.3023 8.88966V10.453H13.6133L13.2441 12.8624H11.3023V18.6855C15.2867 18.0609 18.3337 14.6132 18.3337 10.453Z" fill="#1977F3"/>
<path d="M13.2442 12.8624L13.6134 10.453H11.3024V8.8897C11.3024 8.2311 11.6247 7.58773 12.6606 7.58773H13.7118V5.53692C13.7118 5.53692 12.7579 5.37402 11.8462 5.37402C9.94302 5.37402 8.69847 6.52717 8.69847 8.61665V10.453H6.58203V12.8624H8.69847V18.6856C9.1227 18.7524 9.55747 18.7863 10.0004 18.7863C10.4434 18.7863 10.8782 18.7512 11.3024 18.6856V12.8624H13.2442Z" fill="#FEFEFE"/>
</svg>
          </a>
          <a href="https://twitter.com/Cake_boost">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23 6.11934C22.1893 6.49969 21.3196 6.75791 20.4071 6.87306C21.3393 6.27986 22.0548 5.33771 22.3895 4.2176C21.5165 4.76893 20.5515 5.16672 19.5242 5.38307C18.7004 4.45139 17.5287 3.86865 16.229 3.86865C13.7379 3.86865 11.7161 6.01815 11.7161 8.66663C11.7161 9.04349 11.7555 9.40988 11.8343 9.75883C8.0828 9.55993 4.75802 7.64772 2.53275 4.7445C2.14546 5.45286 1.92227 6.27637 1.92227 7.1557C1.92227 8.82017 2.71983 10.2892 3.93093 11.1476C3.19245 11.1232 2.49664 10.9069 1.88617 10.5474C1.88617 10.5684 1.88617 10.5858 1.88617 10.6068C1.88617 12.9307 3.44189 14.8709 5.50634 15.3105C5.1289 15.4187 4.72848 15.478 4.31822 15.478C4.02611 15.478 3.74385 15.4466 3.46815 15.3908C4.04252 17.296 5.70983 18.6848 7.68238 18.7232C6.13651 20.0108 4.1935 20.7785 2.07653 20.7785C1.71222 20.7785 1.35447 20.7541 1 20.7122C2.99552 22.0731 5.36849 22.8687 7.91869 22.8687C16.2192 22.8687 20.7583 15.5583 20.7583 9.21796C20.7583 9.0086 20.755 8.80272 20.7452 8.59684C21.6281 7.91989 22.3928 7.07545 22.9967 6.11236L23 6.11934Z" fill="#828688"/>
</svg>
          </a>
          <a href="https://www.twitch.tv/cakeboost">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
<path d="M2.50029 1.86865L1 5.69482V20.9977H6.4985V23.8687H9.50046L12.4994 20.9977H16.9991L23 15.2609V1.86865H2.50029ZM4.49909 3.78053H21.0004V14.3025L17.4993 17.6508H12L9.00187 20.5178V17.6508H4.49909V3.78053ZM9.9998 13.3472H12V7.60872H9.9998V13.3472ZM15.4995 13.3472H17.4993V7.60872H15.4995V13.3472Z" fill="#828688"/>
</svg>
          </a>
        </div>
      </div>
    </div>
    <div class="main_content" style="position: relative">
      <CookiesPolicy ref="cookiesPolicy"></CookiesPolicy>
       <header
        class="desktop"
        id="unauthorised"
        :class="{ header_close_sidebar: !close_sidebar }"
      >
        <ul class="nav">
          <li
            class="nav__item nav__mobile_enable nav_burger"
            :class="{ nav_burger_open: close_sidebar_mobile,mob_opensearch: open_nav_search }"
            style="display: none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" v-if="!close_sidebar_mobile" @click="close_sidebar_m(), closeCookie()">
              <rect x="2" y="3.00098" width="20" height="4" rx="2" fill="#444B4D"/>
              <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M3.5 9.62598C2.67157 9.62598 2 10.2975 2 11.126V11.876C2 12.7044 2.67157 13.376 3.5 13.376H13C13.8284 13.376 14.5 12.7044 14.5 11.876V11.126C14.5 10.2975 13.8284 9.62598 13 9.62598H3.5ZM3.5 15.876C2.67157 15.876 2 16.5475 2 17.376V18.126C2 18.9544 2.67157 19.626 3.5 19.626H20.5C21.3284 19.626 22 18.9544 22 18.126V17.376C22 16.5475 21.3284 15.876 20.5 15.876H3.5Z" fill="#444B4D"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" v-if="close_sidebar_mobile" @click="close_sidebar_m(), closeCookie()">
              <rect x="5.63477" y="16.9507" width="16" height="2" rx="1" transform="rotate(-45 5.63477 16.9507)" fill="white"/>
              <rect x="7.04883" y="5.63696" width="16" height="2" rx="1" transform="rotate(45 7.04883 5.63696)" fill="white"/>
            </svg>
          </li>
          <li class="nav__item nav__mobile_disable">
            <a @click="close_sidebar_f()" class="back__btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect width="1.66667" height="11.6667" rx="0.833333" transform="matrix(0 -1 -1 0 15.832 10.8335)" fill="#C24DFE"/>
                <path d="M10.5906 14.4109C10.916 14.7363 10.916 15.264 10.5906 15.5894C10.2651 15.9149 9.73748 15.9149 9.41205 15.5894L4.41205 10.5894C4.09657 10.2739 4.08553 9.76595 4.38701 9.43706L8.97034 4.43706C9.28134 4.09779 9.80848 4.07487 10.1477 4.38587C10.487 4.69686 10.5099 5.224 10.1989 5.56327L6.15475 9.9751L10.5906 14.4109Z" fill="#C24DFE"/>
              </svg>
            </a>
          </li>
          <li
            class="nav__item borders nav_search"
            :class="{ opensearch: open_nav_search }"
          >
            <button
              v-if="!open_nav_search"
              class="nav__link"
              @click="open_nav_search = open_nav_search ? false : true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path opacity="0.7" d="M14.2929 16.7081C13.9024 16.3176 13.9024 15.6844 14.2929 15.2939C14.6834 14.9033 15.3166 14.9033 15.7071 15.2939L19.7071 19.2939C20.0976 19.6844 20.0976 20.3176 19.7071 20.7081C19.3166 21.0986 18.6834 21.0986 18.2929 20.7081L14.2929 16.7081Z" fill="#444B4D"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 11.001C4 14.867 7.13401 18.001 11 18.001C14.866 18.001 18 14.867 18 11.001C18 7.13498 14.866 4.00098 11 4.00098C7.13401 4.00098 4 7.13498 4 11.001ZM16 11.001C16 13.7624 13.7614 16.001 11 16.001C8.23858 16.001 6 13.7624 6 11.001C6 8.23955 8.23858 6.00098 11 6.00098C13.7614 6.00098 16 8.23955 16 11.001Z" fill="#444B4D"/>
              </svg>

            </button>
            <input
              v-if="open_nav_search"
              v-model="search_string"
              type="text"
              placeholder="Search"
            />
            <button v-if="open_nav_search" @click="open_nav_search = false">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="5.63672" y="16.9507" width="16" height="2" rx="1" transform="rotate(-45 5.63672 16.9507)" fill="#595E61"/>
                <rect x="7.05078" y="5.63721" width="16" height="2" rx="1" transform="rotate(45 7.05078 5.63721)" fill="#595E61"/>
              </svg>
            </button>
            <div class="searchResult" v-if="search_start && open_nav_search">
              <div>
                <input
                  v-model="search_string"
                  type="text"
                  placeholder="Type here the request"
                />
              </div>
              <div v-for="item in this.search_result" :key="item.id">
                <span>
                  <a
                    v-bind:href="
                      '/' +
                      item.game_slug +
                      '/service/' +
                      item.slug +
                      '&' +
                      item.id
                    "
                    v-html="item.title "
                    ></a
                  >
                </span>
                <span
                  v-if="
                    $store.getters['getSelectedZone'] == 'us' &&
                    item.price_usd != 0
                  "
                >
                  <span
                    v-if="item.price_usd_sale > 0 && item.price_usd_sale2 == 0"
                    >{{ item.price_usd_sale }}$</span
                  >
                  <span v-if="item.price_usd_sale2 > 0"
                    >{{ item.price_usd_sale2 }}$</span
                  >
                  {{ item.price_usd }}$
                </span>
                <span
                  v-else-if="
                    $store.getters['getSelectedZone'] == 'us' &&
                    item.price_usd == 0
                  "
                >
                  <span
                    v-if="item.price_usd_sale > 0 && item.price_usd_sale2 == 0"
                    >{{ item.fr_price_usd_sale }}$</span
                  >
                  <span v-if="item.price_usd_sale2 > 0"
                    >{{ item.fr_price_usd_sale2 }}$</span
                  >
                  {{ item.fr_price_usd }}$
                </span>
                <span
                  v-if="
                    $store.getters['getSelectedZone'] == 'eu' &&
                    item.price_eur != 0
                  "
                >
                  <span
                    v-if="item.price_eur_sale > 0 && item.price_eur_sale2 == 0"
                    >{{ item.price_eur_sale }}€</span
                  >
                  <span v-if="item.price_eur_sale2 > 0"
                    >{{ item.price_eur_sale2 }}€</span
                  >
                  {{ item.price_eur }}€
                </span>
                <span
                  v-else-if="
                    $store.getters['getSelectedZone'] == 'eu' &&
                    item.price_eur == 0
                  "
                >
                  <span
                    v-if="item.price_eur_sale > 0 && item.price_eur_sale2 == 0"
                    >{{ item.fr_price_eur_sale }}€</span
                  >
                  <span v-if="item.price_eur_sale2 > 0"
                    >{{ item.fr_price_eur_sale2 }}€</span
                  >
                  {{ item.fr_price_eur }}€
                </span>
              </div>
              <div>
                <a
                  v-bind:href="
                    '/' +
                    $store.getters['getGlobalGame'] +
                    '/search/' +
                    search_string
                  "
                  id="lookAllSearch"
                  >Look all results</a
                >
              </div>
              <div
                class="txtAlignCenter closeSearch"
                @click="(search_string = ''), (search_start = false)"
              >
                <span id="closeSearch">
                  Close
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.6565 2.34326L2.34277 13.657M13.6565 13.657L2.34277 2.34326" stroke="#C24DFE" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </span>
              </div>
            </div>
          </li>
          <li
            class="nav__item nav__mobile_disable"
            v-if="!open_nav_search"
            :class="{ opengames: open_game_list,mob_opensearch: open_nav_search }"
          >
            <div
              v-if="!open_game_list"
              @click="
                (open_game_list = open_game_list ? false : true),
                  set_focus_game_div()
              "
              class="nav__games"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path opacity="0.3" d="M12.9481 9.31623L11.0508 8.68377C11.8155 6.38965 13.0421 4.95855 14.7569 4.52986C15.6498 4.30665 16.9995 2.86951 16.9995 2H18.9995C18.9995 3.79716 17.0158 6.02668 15.242 6.47014C14.2901 6.70811 13.5168 7.61035 12.9481 9.31623Z" fill="#2F3639"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2572 17H10.7428C9.73405 18.2215 8.20794 19 6.5 19C3.46243 19 1 16.5376 1 13.5C1 10.4624 3.46243 8 6.5 8C6.68789 8 6.87358 8.00942 7.05662 8.02782C7.20183 8.00946 7.34981 8 7.5 8H16.5C16.6502 8 16.7982 8.00946 16.9434 8.02782C17.1264 8.00942 17.3121 8 17.5 8C20.5376 8 23 10.4624 23 13.5C23 16.5376 20.5376 19 17.5 19C15.7921 19 14.266 18.2215 13.2572 17ZM5 10.5C5 10.2239 5.22386 10 5.5 10H6.5C6.77614 10 7 10.2239 7 10.5V11.5C7 11.7761 6.77614 12 6.5 12H5.5C5.22386 12 5 11.7761 5 11.5V10.5ZM7.5 12C7.22386 12 7 12.2239 7 12.5V13.5C7 13.7761 7.22386 14 7.5 14H8.5C8.77614 14 9 13.7761 9 13.5V12.5C9 12.2239 8.77614 12 8.5 12H7.5ZM19 12C19.5523 12 20 11.5523 20 11C20 10.4477 19.5523 10 19 10C18.4477 10 18 10.4477 18 11C18 11.5523 18.4477 12 19 12ZM19 14C19 14.5523 18.5523 15 18 15C17.4477 15 17 14.5523 17 14C17 13.4477 17.4477 13 18 13C18.5523 13 19 13.4477 19 14ZM5 14.5C5 14.2239 5.22386 14 5.5 14H6.5C6.77614 14 7 14.2239 7 14.5V15.5C7 15.7761 6.77614 16 6.5 16H5.5C5.22386 16 5 15.7761 5 15.5V14.5ZM3.5 12C3.22386 12 3 12.2239 3 12.5V13.5C3 13.7761 3.22386 14 3.5 14H4.5C4.77614 14 5 13.7761 5 13.5V12.5C5 12.2239 4.77614 12 4.5 12H3.5Z" fill="#2F3639"/>
              </svg>
              <div class="nav__game">
                <span>Choose your game:</span>
                <span
                  v-for="item in this.games.records"
                  :key="item.id"
                  v-if="$store.getters['getGlobalGameId'] == item.id"
                  >{{ item.title }}</span
                >
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M17.2929 8.29387C17.6834 7.90334 18.3166 7.90334 18.7071 8.29387C19.0976 8.68439 19.0976 9.31756 18.7071 9.70808L12.7071 15.7081C12.3285 16.0867 11.7189 16.0999 11.3243 15.7381L5.32428 10.2381C4.91716 9.86494 4.88965 9.23237 5.26285 8.82525C5.63604 8.41813 6.26861 8.39063 6.67572 8.76382L11.9699 13.6168L17.2929 8.29387Z" fill="#444B4D"/>
              </svg>
            </div>
            <div v-if="open_game_list" class="nav__games">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path opacity="0.3" d="M12.9481 9.31623L11.0508 8.68377C11.8155 6.38965 13.0421 4.95855 14.7569 4.52986C15.6498 4.30665 16.9995 2.86951 16.9995 2H18.9995C18.9995 3.79716 17.0158 6.02668 15.242 6.47014C14.2901 6.70811 13.5168 7.61035 12.9481 9.31623Z" fill="#2F3639"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2572 17H10.7428C9.73405 18.2215 8.20794 19 6.5 19C3.46243 19 1 16.5376 1 13.5C1 10.4624 3.46243 8 6.5 8C6.68789 8 6.87358 8.00942 7.05662 8.02782C7.20183 8.00946 7.34981 8 7.5 8H16.5C16.6502 8 16.7982 8.00946 16.9434 8.02782C17.1264 8.00942 17.3121 8 17.5 8C20.5376 8 23 10.4624 23 13.5C23 16.5376 20.5376 19 17.5 19C15.7921 19 14.266 18.2215 13.2572 17ZM5 10.5C5 10.2239 5.22386 10 5.5 10H6.5C6.77614 10 7 10.2239 7 10.5V11.5C7 11.7761 6.77614 12 6.5 12H5.5C5.22386 12 5 11.7761 5 11.5V10.5ZM7.5 12C7.22386 12 7 12.2239 7 12.5V13.5C7 13.7761 7.22386 14 7.5 14H8.5C8.77614 14 9 13.7761 9 13.5V12.5C9 12.2239 8.77614 12 8.5 12H7.5ZM19 12C19.5523 12 20 11.5523 20 11C20 10.4477 19.5523 10 19 10C18.4477 10 18 10.4477 18 11C18 11.5523 18.4477 12 19 12ZM19 14C19 14.5523 18.5523 15 18 15C17.4477 15 17 14.5523 17 14C17 13.4477 17.4477 13 18 13C18.5523 13 19 13.4477 19 14ZM5 14.5C5 14.2239 5.22386 14 5.5 14H6.5C6.77614 14 7 14.2239 7 14.5V15.5C7 15.7761 6.77614 16 6.5 16H5.5C5.22386 16 5 15.7761 5 15.5V14.5ZM3.5 12C3.22386 12 3 12.2239 3 12.5V13.5C3 13.7761 3.22386 14 3.5 14H4.5C4.77614 14 5 13.7761 5 13.5V12.5C5 12.2239 4.77614 12 4.5 12H3.5Z" fill="#2F3639"/>
              </svg>
              <div class="nav__game">
                <span>Choose your game:</span>
                <span>World of Warcraft: BFA</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M17.2929 8.29387C17.6834 7.90334 18.3166 7.90334 18.7071 8.29387C19.0976 8.68439 19.0976 9.31756 18.7071 9.70808L12.7071 15.7081C12.3285 16.0867 11.7189 16.0999 11.3243 15.7381L5.32428 10.2381C4.91716 9.86494 4.88965 9.23237 5.26285 8.82525C5.63604 8.41813 6.26861 8.39063 6.67572 8.76382L11.9699 13.6168L17.2929 8.29387Z" fill="#444B4D"/>
              </svg>
            </div>
            <div v-if="open_game_list" class="games__list">
              <div class="games__search">
                <input
                  v-model="search_header_game"
                  type="text"
                  placeholder="Search by game"
                />
                <button @click="open_game_list = false">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="5.63672" y="16.9507" width="16" height="2" rx="1" transform="rotate(-45 5.63672 16.9507)" fill="#595E61"/>
                    <rect x="7.05078" y="5.63721" width="16" height="2" rx="1" transform="rotate(45 7.05078 5.63721)" fill="#595E61"/>
                  </svg>
                </button>
              </div>
              <ul class="games">
                <li class="game" v-if="search_header_game == '' || 'wow shadowlands'.includes(search_header_game)">
                  <a href="/wow-boost">WoW Shadowlands</a>
                </li>
                <li class="game" v-if="search_header_game == '' || 'wow vanilla season of mastery'.includes(search_header_game)">
                  <a href="/wow-vanilla">WoW Vanilla | Season of Mastery</a>
                </li>
                <li class="game" v-if="search_header_game == '' || 'new world'.includes(search_header_game)">
                  <a href="/new-world">New World</a>
                </li>
                <li class="game" v-if="search_header_game == '' || 'wow burning crusade tbc'.includes(search_header_game)">
                  <a href="/wow-burning-crusade">WoW Burning Crusade | TBC</a>
                </li>
                <li class="game" v-if="search_header_game == '' || 'destiny 2'.includes(search_header_game)">
                  <a href="/destiny-2">Destiny 2</a>
                </li>
                <li class="game" v-if="search_header_game == '' || 'cod black ops cold war'.includes(search_header_game)">
                  <a href="/cod-cold-war">COD Black Ops: Cold War</a>
                </li>
                <li class="game" v-if="search_header_game == '' || 'cod modern warfare'.includes(search_header_game)">
                  <a href="/cod-mw">COD: Modern Warfare</a>
                </li>
                <li class="game" v-if="search_header_game == '' || 'hearthstone hs'.includes(search_header_game)">
                  <a href="/hearthstone">Hearthstone | HS</a>
                </li>
                <li class="game" v-if="search_header_game == '' || 'cod warzone'.includes(search_header_game)">
                  <a href="/cod-warzone">COD Warzone</a>
                </li>
                <li class="game" v-if="search_header_game == '' || 'path of exile poe'.includes(search_header_game)">
                  <a href="/path-of-exile">Path of Exile | PoE</a>
                </li>
                <li class="game" v-if="search_header_game == '' || 'overwatch ow'.includes(search_header_game)">
                  <a href="/overwatch">Overwatch | OW</a>
                </li>
                <li class="game" v-if="search_header_game == '' || 'league of legends lol'.includes(search_header_game)">
                  <a href="/league-of-legends">League of Legends | LoL</a>
                </li>
                <li class="game" v-if="search_header_game == '' || 'valorant'.includes(search_header_game)">
                  <a href="/valorant">Valorant</a>
                </li>
                <li class="game" v-if="search_header_game == '' || 'apex legends'.includes(search_header_game)">
                  <a href="/apex-legends">Apex Legends</a>
                </li>
                <li class="game" v-if="search_header_game == '' || 'escape from tarkov eft'.includes(search_header_game)">
                  <a href="/escape-from-tarkov">Escape from Tarkov | EfT</a>
                  </li>
                <li class="game" v-if="search_header_game == '' || 'final fantasy XIV'.includes(search_header_game)">
                  <a href="/final-fantasy-xiv">Final Fantasy XIV</a>
                </li>
              </ul>
            </div>
          </li>
          <li :class="{ mob_opensearch: open_nav_search }" class="nav__item borders nav__center nav__mobile_disable">
            <a
              target="_blank"
              style="text-decoration: none"
              href="https://www.trustpilot.com/review/cakeboost.com"
              class="nav__tp"
            >
             <svg xmlns="http://www.w3.org/2000/svg" width="82" height="20" viewBox="0 0 82 20" fill="none">
              <path d="M21.455 7.08789H29.7135V8.62216H26.4618V17.2711H24.6795V8.62216H21.4414L21.455 7.08789ZM29.3597 9.89846H30.8835V11.3241H30.9107C30.9652 11.1205 31.0604 10.9304 31.1964 10.7403C31.3325 10.5502 31.4958 10.3737 31.6998 10.2243C31.8903 10.0614 32.108 9.9392 32.3529 9.84415C32.5842 9.74911 32.8291 9.6948 33.074 9.6948C33.2645 9.6948 33.4005 9.70838 33.4685 9.70838C33.5366 9.72195 33.6182 9.73553 33.6862 9.73553V11.297C33.5774 11.2698 33.4549 11.2562 33.3325 11.2426C33.21 11.2291 33.1012 11.2155 32.9788 11.2155C32.7066 11.2155 32.4481 11.2698 32.2032 11.3784C31.9584 11.487 31.7543 11.65 31.5638 11.8536C31.3869 12.0709 31.2373 12.3289 31.1284 12.6411C31.0196 12.9534 30.9652 13.32 30.9652 13.7274V17.2304H29.3325L29.3597 9.89846ZM41.1692 17.2711H39.5637V16.2392H39.5365C39.3325 16.6194 39.0331 16.9045 38.6386 17.1354C38.244 17.3662 37.8359 17.4748 37.4277 17.4748C36.4617 17.4748 35.7542 17.244 35.3189 16.7552C34.8835 16.28 34.6658 15.5468 34.6658 14.5828V9.89846H36.2985V14.4198C36.2985 15.0715 36.4209 15.5332 36.6794 15.7912C36.9243 16.0627 37.278 16.1985 37.727 16.1985C38.0672 16.1985 38.3529 16.1442 38.5842 16.0356C38.8155 15.9269 39.0059 15.7912 39.142 15.6147C39.2916 15.4381 39.3869 15.2209 39.4549 14.9765C39.5229 14.7321 39.5501 14.4606 39.5501 14.1754V9.89846H41.1828V17.2711H41.1692ZM43.9447 14.9086C43.9991 15.3838 44.176 15.7097 44.4889 15.9134C44.8018 16.1035 45.1828 16.1985 45.6181 16.1985C45.7678 16.1985 45.9447 16.1849 46.1351 16.1578C46.3256 16.1306 46.5161 16.0899 46.6793 16.022C46.8562 15.9541 46.9923 15.8591 47.1011 15.7233C47.21 15.5875 47.2644 15.4246 47.2508 15.2209C47.2372 15.0172 47.1691 14.8407 47.0195 14.7049C46.8698 14.5692 46.693 14.4741 46.4753 14.3791C46.2576 14.2976 45.9991 14.2297 45.7134 14.1754C45.4277 14.1211 45.1419 14.0532 44.8426 13.9853C44.5433 13.9174 44.244 13.836 43.9583 13.7409C43.6726 13.6459 43.4277 13.5237 43.1964 13.3472C42.9787 13.1843 42.7882 12.9806 42.6658 12.7226C42.5297 12.4646 42.4617 12.1659 42.4617 11.7858C42.4617 11.3784 42.5569 11.0526 42.761 10.781C42.9515 10.5095 43.21 10.2922 43.5093 10.1293C43.8086 9.96635 44.1488 9.84415 44.5161 9.77626C44.8834 9.70838 45.2372 9.68122 45.5637 9.68122C45.9447 9.68122 46.312 9.72196 46.6521 9.80342C46.9923 9.88489 47.3188 10.0071 47.5909 10.1972C47.8766 10.3737 48.1079 10.6181 48.2848 10.9032C48.4753 11.1883 48.5841 11.5414 48.6385 11.9487H46.9379C46.8562 11.5549 46.6793 11.297 46.4072 11.1612C46.1215 11.0254 45.8086 10.9575 45.4413 10.9575C45.3324 10.9575 45.1828 10.9711 45.0331 10.9847C44.8698 11.0118 44.7338 11.039 44.5841 11.0933C44.4481 11.1476 44.3256 11.2291 44.2304 11.3241C44.1351 11.4192 44.0807 11.5549 44.0807 11.7179C44.0807 11.9215 44.1488 12.0709 44.2848 12.1931C44.4209 12.3153 44.5977 12.4103 44.829 12.5054C45.0467 12.5868 45.3052 12.6547 45.5909 12.709C45.8766 12.7633 46.176 12.8312 46.4753 12.8991C46.7746 12.967 47.0603 13.0485 47.346 13.1435C47.6317 13.2386 47.8902 13.3608 48.1079 13.5373C48.3256 13.7002 48.5161 13.9039 48.6521 14.1483C48.7882 14.3927 48.8562 14.705 48.8562 15.058C48.8562 15.4925 48.761 15.8591 48.5569 16.1713C48.3528 16.47 48.0943 16.728 47.7814 16.9181C47.4685 17.1082 47.1011 17.244 46.7202 17.339C46.3256 17.4205 45.9447 17.4748 45.5637 17.4748C45.1011 17.4748 44.6658 17.4205 44.2712 17.3119C43.8766 17.2032 43.5229 17.0403 43.2372 16.8366C42.9515 16.6194 42.7202 16.3614 42.5569 16.0356C42.3937 15.7233 42.2984 15.3431 42.2848 14.895H43.9311V14.9086H43.9447ZM49.3188 9.89846H50.5569V7.67173H52.1895V9.88488H53.6589V11.0933H52.1895V15.0308C52.1895 15.2073 52.2031 15.3431 52.2167 15.4789C52.2303 15.6011 52.2712 15.7097 52.312 15.7912C52.3664 15.8726 52.448 15.9405 52.5433 15.9813C52.6521 16.022 52.7882 16.0491 52.9786 16.0491C53.0875 16.0491 53.2099 16.0491 53.3188 16.0356C53.4276 16.022 53.5501 16.0084 53.6589 15.9813V17.244C53.482 17.2711 53.3052 17.2847 53.1283 17.2983C52.9514 17.3254 52.7882 17.3254 52.5977 17.3254C52.1623 17.3254 51.8222 17.2847 51.5637 17.2032C51.3052 17.1218 51.1011 16.9996 50.9514 16.8502C50.8018 16.6873 50.7065 16.4972 50.6521 16.2664C50.5977 16.0356 50.5705 15.7504 50.5569 15.4517V11.1069H49.3188V9.87131V9.89846ZM54.8017 9.89846H56.3392V10.9032H56.3664C56.5977 10.4687 56.9106 10.17 57.3187 9.97993C57.7269 9.78984 58.1623 9.6948 58.6521 9.6948C59.2371 9.6948 59.7405 9.78984 60.1759 10.0071C60.6112 10.2108 60.965 10.4823 61.2507 10.8489C61.5364 11.2019 61.7541 11.6228 61.8901 12.098C62.0262 12.5733 62.1078 13.0892 62.1078 13.6187C62.1078 14.1211 62.0398 14.5963 61.9174 15.058C61.7813 15.5196 61.5908 15.9405 61.3323 16.2935C61.0738 16.6466 60.7473 16.9317 60.3391 17.1489C59.931 17.3662 59.4684 17.4748 58.9242 17.4748C58.6929 17.4748 58.448 17.4476 58.2167 17.4069C57.9854 17.3662 57.7541 17.2983 57.5364 17.2032C57.3187 17.1082 57.1147 16.986 56.9378 16.8366C56.7473 16.6873 56.5977 16.5108 56.4752 16.3207H56.448V20.0002H54.8154V9.89846H54.8017ZM60.5024 13.5916C60.5024 13.2657 60.4616 12.9399 60.3663 12.6276C60.2847 12.3153 60.1487 12.0437 59.9718 11.7993C59.7949 11.5549 59.5772 11.3649 59.3323 11.2155C59.0738 11.0661 58.7745 10.9983 58.448 10.9983C57.7677 10.9983 57.2507 11.2291 56.897 11.7043C56.5568 12.1795 56.38 12.8177 56.38 13.6052C56.38 13.9853 56.4208 14.3248 56.516 14.6371C56.6113 14.9493 56.7337 15.2209 56.9242 15.4517C57.1011 15.6825 57.3187 15.8591 57.5772 15.9948C57.8357 16.1306 58.1215 16.1985 58.4616 16.1985C58.8425 16.1985 59.1419 16.117 59.4004 15.9677C59.6589 15.8183 59.8629 15.6147 60.0398 15.3838C60.2031 15.1394 60.3255 14.8679 60.3936 14.5556C60.4616 14.2297 60.5024 13.9174 60.5024 13.5916ZM63.3731 7.08789H65.0058V8.62216H63.3731V7.08789ZM63.3731 9.89846H65.0058V17.2711H63.3731V9.89846ZM66.4615 7.08789H68.0942V17.2711H66.4615V7.08789ZM73.0737 17.4748C72.4887 17.4748 71.9581 17.3797 71.4955 17.1761C71.0329 16.9724 70.652 16.7144 70.3255 16.375C70.0125 16.0356 69.7676 15.6147 69.6044 15.1394C69.4411 14.6642 69.3459 14.1347 69.3459 13.578C69.3459 13.0213 69.4275 12.5054 69.6044 12.0302C69.7676 11.5549 70.0125 11.1476 70.3255 10.7946C70.6384 10.4551 71.0329 10.1836 71.4955 9.99351C71.9581 9.80342 72.4887 9.6948 73.0737 9.6948C73.6588 9.6948 74.1894 9.78984 74.652 9.99351C75.1146 10.1836 75.4955 10.4551 75.822 10.7946C76.135 11.134 76.3798 11.5549 76.5431 12.0302C76.7064 12.5054 76.8016 13.0213 76.8016 13.578C76.8016 14.1483 76.72 14.6642 76.5431 15.1394C76.3662 15.6147 76.135 16.022 75.822 16.375C75.5091 16.7144 75.1146 16.986 74.652 17.1761C74.1894 17.3662 73.6724 17.4748 73.0737 17.4748ZM73.0737 16.1849C73.4275 16.1849 73.754 16.1034 74.0125 15.9541C74.2846 15.8047 74.4887 15.6011 74.6656 15.3567C74.8424 15.1123 74.9649 14.8272 75.0465 14.5284C75.1282 14.2162 75.169 13.9039 75.169 13.578C75.169 13.2657 75.1282 12.9534 75.0465 12.6411C74.9649 12.3289 74.8424 12.0573 74.6656 11.8129C74.4887 11.5685 74.271 11.3784 74.0125 11.2291C73.7404 11.0797 73.4275 10.9983 73.0737 10.9983C72.72 10.9983 72.3935 11.0797 72.135 11.2291C71.8629 11.3784 71.6588 11.5821 71.4819 11.8129C71.3051 12.0573 71.1826 12.3289 71.101 12.6411C71.0193 12.9534 70.9785 13.2657 70.9785 13.578C70.9785 13.9039 71.0193 14.2162 71.101 14.5284C71.1826 14.8407 71.3051 15.1123 71.4819 15.3567C71.6588 15.6011 71.8765 15.8047 72.135 15.9541C72.4071 16.117 72.72 16.1849 73.0737 16.1849ZM77.2914 9.89846H78.5295V7.67173H80.1621V9.88488H81.6315V11.0933H80.1621V15.0308C80.1621 15.2073 80.1758 15.3431 80.1894 15.4789C80.203 15.6011 80.2438 15.7097 80.2846 15.7912C80.339 15.8726 80.4206 15.9405 80.5159 15.9813C80.6247 16.022 80.7608 16.0491 80.9513 16.0491C81.0601 16.0491 81.1825 16.0491 81.2914 16.0356C81.4002 16.022 81.5227 16.0084 81.6315 15.9813V17.244C81.4547 17.2711 81.2778 17.2847 81.1009 17.2983C80.924 17.3254 80.7608 17.3254 80.5703 17.3254C80.1349 17.3254 79.7948 17.2847 79.5363 17.2032C79.2778 17.1218 79.0737 16.9996 78.924 16.8502C78.7744 16.6873 78.6792 16.4972 78.6247 16.2664C78.5703 16.0356 78.5431 15.7504 78.5295 15.4517V11.1069H77.2914V9.87131V9.89846Z" fill="black"/>
              <path d="M19.5509 7.08754H12.0816L9.78225 0L7.46934 7.08754L0 7.07396L6.04078 11.4595L3.72787 18.5471L9.76865 14.1615L15.8094 18.5471L13.5101 11.4595L19.5509 7.08754Z" fill="#00B67A"/>
              <path d="M14.0261 13.0616L13.5091 11.4595L9.78125 14.1614L14.0261 13.0616Z" fill="#005128"/>
            </svg>
              <span style="text-decoration: none">4.9/5 rating</span>
            </a>
            <div class="nav__btns">
              <!--a-- v-bind:href="'/' + $store.getters['getGlobalGame'] + '/calendar'" class="nav__btn">
                <img src="/icons/calendar.svg" alt="" />
                <span>Events calendar</span>
              </!--a-->
              <a
                class="nav__btn"
                @click="
                  ((contact_us_popoup = true),
                  $store.commit('set_contact_us_discord', false)),
                    body_set_hidden()
                "
                style="text-decoration: none"
              >
                <span>Contact us</span>
              </a>
            </div>
          </li>
          <li class="nav__item" :class="{ mob_opensearch: open_nav_search }">
            <a
              v-if="!this.$store.getters['getUserLoginCheck'].user_check_login"
              @click="user_m_window = true"
              class="nav__btn nav__mobile_disable"
            >
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.00026 9.00049C7.00026 6.23906 9.23883 4.00049 12.0003 4.00049C14.7617 4.00049 17.0003 6.23906 17.0003 9.00049C17.0003 11.7619 14.7617 14.0005 12.0003 14.0005C9.23883 14.0005 7.00026 11.7619 7.00026 9.00049ZM12.0003 2.00049C8.13426 2.00049 5.00026 5.1345 5.00026 9.00049C5.00026 11.3849 6.19243 13.4909 8.01322 14.7548C5.30275 15.8252 3.14145 17.9553 2.07181 20.6291C1.86667 21.1418 2.11606 21.7238 2.62884 21.9289C3.14161 22.1341 3.72359 21.8847 3.92873 21.3719C5.18267 18.2374 8.31627 16.0005 12.0003 16.0005C15.6843 16.0005 18.8179 18.2374 20.0718 21.3719C20.2769 21.8847 20.8589 22.1341 21.3717 21.9289C21.8845 21.7238 22.1339 21.1418 21.9287 20.6291C20.8591 17.9553 18.6978 15.8252 15.9873 14.7548C17.8081 13.4909 19.0003 11.3849 19.0003 9.00049C19.0003 5.1345 15.8663 2.00049 12.0003 2.00049Z" fill="#2F3639"/>
</svg>
              <span>Log in</span>
            </a>
            <a
              v-if="this.$store.getters['getUserLoginCheck'].user_check_login"
              class="nav__link nav__mobile_disable"
              @click="user_m_window = true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00026 9.00049C7.00026 6.23906 9.23883 4.00049 12.0003 4.00049C14.7617 4.00049 17.0003 6.23906 17.0003 9.00049C17.0003 11.7619 14.7617 14.0005 12.0003 14.0005C9.23883 14.0005 7.00026 11.7619 7.00026 9.00049ZM12.0003 2.00049C8.13426 2.00049 5.00026 5.1345 5.00026 9.00049C5.00026 11.3849 6.19243 13.4909 8.01322 14.7548C5.30275 15.8252 3.14145 17.9553 2.07181 20.6291C1.86667 21.1418 2.11606 21.7238 2.62884 21.9289C3.14161 22.1341 3.72359 21.8847 3.92873 21.3719C5.18267 18.2374 8.31627 16.0005 12.0003 16.0005C15.6843 16.0005 18.8179 18.2374 20.0718 21.3719C20.2769 21.8847 20.8589 22.1341 21.3717 21.9289C21.8845 21.7238 22.1339 21.1418 21.9287 20.6291C20.8591 17.9553 18.6978 15.8252 15.9873 14.7548C17.8081 13.4909 19.0003 11.3849 19.0003 9.00049C19.0003 5.1345 15.8663 2.00049 12.0003 2.00049Z" fill="#2F3639"/>
              </svg>
            </a>
            <a
              v-if="this.$store.getters['getUserLoginCheck'].user_check_login"
              class="nav__link nav__mobile_disable"
              @click.self="
                open_notification_popup = open_notification_popup ? false : true
              "
            >
              <svg @click.self="
                  open_notification_popup = open_notification_popup
                    ? false
                    : true
                " width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.0789 6.38538L17.0789 6.38539C17.0997 6.4353 17.1198 6.48558 17.1392 6.53625L17.1418 6.5432L17.1446 6.55011C17.5548 7.57644 17.5638 8.75391 17.5082 10.1034C17.5027 10.2351 17.5 10.3675 17.5 10.5005C17.5 13.547 18.9352 16.2589 21.1623 17.9957C21.1643 17.9973 21.1664 17.9989 21.1684 18.0005H2.83162C2.83364 17.9989 2.83566 17.9973 2.8377 17.9957C5.06481 16.2589 6.5 13.547 6.5 10.5005C6.5 10.3675 6.49726 10.2351 6.49184 10.1034C6.43625 8.75391 6.44524 7.57644 6.85541 6.55011L6.85817 6.5432L6.86083 6.53625C6.88021 6.48559 6.90031 6.4353 6.92112 6.38538C7.75079 4.39586 9.71361 3.00049 12 3.00049C14.2864 3.00049 16.2492 4.39586 17.0789 6.38538Z" stroke="#2F3639" stroke-width="2"/>
                <path d="M12.5 22.0005C13.9806 22.0005 15.2733 21.1961 15.9649 20.0005H9.03516C9.72678 21.1961 11.0195 22.0005 12.5 22.0005Z" fill="#2F3639"/>
              </svg>
              <div
                @click.self="
                  open_notification_popup = open_notification_popup
                    ? false
                    : true
                "
                class="nav__count"
                v-if="notification_enable"
              >
                <span>{{notifications.length}}</span>
              </div>
              <div
                class="header_menu_mask"
                @click="open_notification_popup = false"
                v-if="open_notification_popup"
              ></div>
              <div
                v-if="open_notification_popup"
                style="right: 9px"
                class="divTriangle"
              ></div>
              <div v-if="open_notification_popup" class="notificationHover">
                <div>
                  Receive notifications on your
                  <br />
                  Computer or Phone
                  <br />
                  <button v-if="!notification_enable" @click="notification_view_change()">Turn on</button>
                  <button v-else @click="notification_view_change()">Turn off</button>
                </div>
                <div class="fillProfile" v-if="false">
                  <div>
                    Fill your account to <span>80%</span> to get
                    <span><a href="">100 Cakecoins</a></span>
                  </div>
                  <div class="fillPercent">
                    <div>{{ user.percent }}%</div>
                    <div>
                      <div
                        v-bind:style="{ width: user.percent + '%' }"
                        class="fillLine"
                      ></div>
                      <div
                        class="percent_circle"
                        v-bind:style="{ left: user.percent - 2 + '%' }"
                      ></div>
                      <div
                        v-bind:style="{ width: 100 - user.percent + '%' }"
                        class="notFillLine"
                      ></div>
                    </div>
                  </div>
                  <div class="showLessFill">
                    <span
                      v-if="notification_popup_more"
                      @click="notification_popup_more = false"
                    >
                      Show less
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 6L4 3L7 6" stroke="#828688" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </span>
                    <span
                      v-if="!notification_popup_more"
                      @click="notification_popup_more = true"
                    >
                      Show more
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 3L4 6L7 3" stroke="#828688" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </span>
                  </div>
                  <div v-if="notification_popup_more" class="yetToFill">
                    <div
                      v-if="
                        this.user.nofields && this.user.nofields.length != 0
                      "
                    >
                      Yet to fill:
                    </div>
                    <div
                      v-if="
                        this.user.nofields && this.user.nofields.length != 0
                      "
                    >
                      <div
                        v-for="(item, index) in this.user.nofields"
                        v-if="item != ''"
                        :key="index"
                      >
                        {{ item }}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="notificationItem" v-for="item in notifications" :key="item.id" v-if="notification_enable">
                  <div>
                    <div>
                      <img :src="apiImg + 'notification/' + item.fields.img" alt />
                    </div>
                    <div>
                      <div class="notificationDate">{{item.date.split(' ')[0]}}</div>
                      <div class="notificationName">
                        {{item.fields.title}}
                      </div>
                    </div>
                  </div>
                  <div class="notificationText">
                    {{item.fields.description}}
                  </div>
                  <div class="notificationButton">
                    <a v-if="item.fields.slug != ''" :href="item.fields.slug"> Go to the page </a>
                    <span @click="delete_notifications(item.id)"> Delete </span>
                  </div>
                </div>
              </div>
            </a>

            <a
              class="nav__link nav__mobile_enable"
              style="display: none"
              @click="user_m_window = true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.00026 9.00049C7.00026 6.23906 9.23883 4.00049 12.0003 4.00049C14.7617 4.00049 17.0003 6.23906 17.0003 9.00049C17.0003 11.7619 14.7617 14.0005 12.0003 14.0005C9.23883 14.0005 7.00026 11.7619 7.00026 9.00049ZM12.0003 2.00049C8.13426 2.00049 5.00026 5.1345 5.00026 9.00049C5.00026 11.3849 6.19243 13.4909 8.01322 14.7548C5.30275 15.8252 3.14145 17.9553 2.07181 20.6291C1.86667 21.1418 2.11606 21.7238 2.62884 21.9289C3.14161 22.1341 3.72359 21.8847 3.92873 21.3719C5.18267 18.2374 8.31627 16.0005 12.0003 16.0005C15.6843 16.0005 18.8179 18.2374 20.0718 21.3719C20.2769 21.8847 20.8589 22.1341 21.3717 21.9289C21.8845 21.7238 22.1339 21.1418 21.9287 20.6291C20.8591 17.9553 18.6978 15.8252 15.9873 14.7548C17.8081 13.4909 19.0003 11.3849 19.0003 9.00049C19.0003 5.1345 15.8663 2.00049 12.0003 2.00049Z" fill="#2F3639"></path></svg>
            </a>
            <a
              @click.self="
                open_notification_popup = open_notification_popup ? false : true
              "
              v-if="this.$store.getters['getUserLoginCheck'].user_check_login"
              class="nav__link nav__mobile_enable"
              style="display: none"
            >
              <svg @click.self="
                  open_notification_popup = open_notification_popup
                    ? false
                    : true
                " width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.0789 6.38538L17.0789 6.38539C17.0997 6.4353 17.1198 6.48558 17.1392 6.53625L17.1418 6.5432L17.1446 6.55011C17.5548 7.57644 17.5638 8.75391 17.5082 10.1034C17.5027 10.2351 17.5 10.3675 17.5 10.5005C17.5 13.547 18.9352 16.2589 21.1623 17.9957C21.1643 17.9973 21.1664 17.9989 21.1684 18.0005H2.83162C2.83364 17.9989 2.83566 17.9973 2.8377 17.9957C5.06481 16.2589 6.5 13.547 6.5 10.5005C6.5 10.3675 6.49726 10.2351 6.49184 10.1034C6.43625 8.75391 6.44524 7.57644 6.85541 6.55011L6.85817 6.5432L6.86083 6.53625C6.88021 6.48559 6.90031 6.4353 6.92112 6.38538C7.75079 4.39586 9.71361 3.00049 12 3.00049C14.2864 3.00049 16.2492 4.39586 17.0789 6.38538Z" stroke="#2F3639" stroke-width="2"/>
                <path d="M12.5 22.0005C13.9806 22.0005 15.2733 21.1961 15.9649 20.0005H9.03516C9.72678 21.1961 11.0195 22.0005 12.5 22.0005Z" fill="#2F3639"/>
              </svg>
              <div
                @click.self="
                  open_notification_popup = open_notification_popup
                    ? false
                    : true
                "
                class="nav__count"
                v-if="notification_enable"
              >
                <span >{{notifications.length}}</span>
              </div>
              <div
                v-if="open_notification_popup"
                style="right: 9px"
                class="divTriangle"
              ></div>
              <div
                class="header_menu_mask"
                @click="open_notification_popup = false"
                v-if="open_notification_popup"
              ></div>
              <div v-if="open_notification_popup" class="notificationHover">
                <div>
                  Receive notifications on your
                  <br />
                  Computer or Phone
                  <br />
                  <button v-if="!notification_enable" @click="notification_view_change()">Enable notifications</button>
                  <button v-else @click="notification_view_change()">Disabled notifications</button>
                </div>
                <div class="fillProfile" v-if="false">
                  <div>
                    Fill your account to <span>80%</span> to get
                    <span><a href="">100 Cakecoins</a></span>
                  </div>
                  <div class="fillPercent">
                    <div>{{ user.percent }}%</div>
                    <div>
                      <div
                        v-bind:style="{ width: user.percent + '%' }"
                        class="fillLine"
                      ></div>
                      <div
                        class="percent_circle"
                        v-bind:style="{ left: user.percent - 2 + '%' }"
                      ></div>
                      <div
                        v-bind:style="{ width: 100 - user.percent + '%' }"
                        class="notFillLine"
                      ></div>
                    </div>
                  </div>
                  <div class="showLessFill">
                    <span
                      v-if="notification_popup_more"
                      @click="notification_popup_more = false"
                    >
                      Show less
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 6L4 3L7 6" stroke="#828688" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </span>
                    <span
                      v-if="!notification_popup_more"
                      @click="notification_popup_more = true"
                    >
                      Show more
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 3L4 6L7 3" stroke="#828688" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </span>
                  </div>
                  <div v-if="notification_popup_more" class="yetToFill">
                    <div
                      v-if="
                        this.user.nofields && this.user.nofields.length != 0
                      "
                    >
                      Yet to fill:
                    </div>
                    <div
                      v-if="
                        this.user.nofields && this.user.nofields.length != 0
                      "
                    >
                      <div
                        v-for="(item, index) in this.user.nofields"
                        v-if="item != ''"
                        :key="index"
                      >
                        {{ item }}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="notificationItem" v-for="item in notifications" :key="item.id" v-if="notification_enable">
                  <div>
                    <div>
                      <img :src="apiImg + 'notification/' + item.fields.img" alt />
                    </div>
                    <div>
                      <div class="notificationDate">{{item.date.split(' ')[0]}}</div>
                      <div class="notificationName">
                        {{item.fields.title}}
                      </div>
                    </div>
                  </div>
                  <div class="notificationText">
                    {{item.fields.description}}
                  </div>
                  <div class="notificationButton">
                    <a v-if="item.fields.slug != ''" :href="item.fields.slug"> Go to the page </a>
                    <span @click="delete_notifications(item.id)"> Delete </span>
                  </div>
                </div>
              </div>
            </a>
            <div
              class="header_menu_mask"
              @click="user_m_window = false"
              v-if="user_m_window"
            ></div>
            <div class="logRegHover" v-if="user_m_window">
              <div>My account</div>
              <div></div>
              <button
                id="regButton"
                v-if="
                  !this.$store.getters['getUserLoginCheck'].user_check_login
                "
                @click="(registration_pop_up = true), $store.commit('set_global_reg_popup_check', true),  body_set_hidden()"
              >
                Sign up
              </button>
              <button
                v-if="
                  !this.$store.getters['getUserLoginCheck'].user_check_login
                "
                id="logButton"
                @click="
                  (login_pop_up = true),
                    body_set_hidden(),
                    $store.commit('set_global_login_popup_check', true)
                "
              >
                Sign in
              </button>

              <a
                id="regButtonHref"
                v-if="this.$store.getters['getUserLoginCheck'].user_check_login"
                v-bind:href="
                  '/page/account/' +
                  this.$store.getters['getUserLoginCheck'].id
                "
                >Go to account</a
              >
              <button
                v-if="this.$store.getters['getUserLoginCheck'].user_check_login"
                id="logButton"
                @click="logout()"
              >
                Logout
              </button>
              <div style="top: -11px; right: 108px" class="divTriangle"></div>
            </div>
          </li>
          <li class="nav__item borders__left" :class="{ mob_opensearch: open_nav_search }">
            <a @click.self="favorite_m_window = true" class="nav__link">
              <svg @click.self="favorite_m_window = true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M10.2137 8.55735L12 3.05317L13.7863 8.55735L14.7375 8.24866L13.7863 8.55736C13.9909 9.18762 14.578 9.6154 15.2417 9.6154H21.0256L16.3453 13.0198C15.8091 13.4098 15.5853 14.1005 15.7898 14.7306L17.5769 20.2371L12.8998 16.8351C12.3634 16.4448 11.6366 16.4448 11.1002 16.8351L6.42308 20.2371L8.21019 14.7306C8.41467 14.1005 8.19087 13.4098 7.65467 13.0198L2.97436 9.6154H8.75831C9.42196 9.6154 10.0091 9.18762 10.2137 8.55735Z" stroke="#2F3639" stroke-width="2"/>
              </svg>
              <div @click.self="favorite_m_window = true" class="nav__count">
                <span>{{ favorite.length }}</span>
              </div>
              <div
                class="divTriangle"
                style="left: 9px"
                v-if="favorite_m_window"
              ></div>
              <div class="favorite" v-if="favorite_m_window">
                <div v-for="(item, index) in this.favorite" :key="index">
                  <img :src="apiImg + 'sku/' + item.image" alt />
                  <div>
                    <a
                      @click="set_global_game_favorite(item.game)"
                      v-bind:href="
                        '/' +
                        testGameList(item.game) +
                        '/service/' +
                        item.slug +
                        '&' +
                        item.id
                      "
                      >{{ item.title }}</a
                    >
                    <div @click="delete_favor_byID(index)">Delete</div>
                  </div>
                </div>
                <div class="cardHoverTotal">
                  <span></span>
                  <span></span>
                  <span>
                    <a :style="{'text-align': 'center', 'width' : '100%'}" v-bind:href="'/page/favorite'">Watch all favourite items</a>
                  </span>
                </div>
              </div>
              <div
                class="header_menu_mask"
                @click="favorite_m_window = false"
                v-if="favorite_m_window"
              ></div>
            </a>
            <a @click.self="cart_m_window = true" class="nav__link">
              <svg @click.self="cart_m_window = true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.57859 2.31425C3.84083 1.89969 5.28165 1.96227 6.21376 2.12511C6.26148 2.13344 6.30854 2.14524 6.35455 2.1604L21.2123 7.05496C22.2993 7.41304 23.0879 8.35838 23.2452 9.49197L23.6748 12.5881C23.9251 14.3917 22.5241 16.0005 20.7033 16.0005H9.59026C8.10992 16.0005 6.85088 14.9207 6.6253 13.4576L5.16922 4.01409C4.53051 3.9741 3.80438 4.01677 3.20266 4.21439C2.79505 4.34826 2.50224 4.53411 2.31429 4.75586C2.13981 4.96173 2 5.26245 2 5.75247C2 6.30476 1.55228 6.75247 1 6.75247C0.447715 6.75247 0 6.30476 0 5.75247C0 4.83328 0.280325 4.06241 0.788571 3.46274C1.28335 2.87897 1.93585 2.52534 2.57859 2.31425ZM7.27865 4.57055L20.5865 8.95454C20.9489 9.0739 21.2117 9.38901 21.2642 9.76688L21.6938 12.863C21.7772 13.4642 21.3102 14.0005 20.7033 14.0005H9.59026C9.09682 14.0005 8.67713 13.6405 8.60194 13.1529L7.27865 4.57055ZM11 19.0005C10.4477 19.0005 10 19.4482 10 20.0005C10 20.5528 10.4477 21.0005 11 21.0005C11.5523 21.0005 12 20.5528 12 20.0005C12 19.4482 11.5523 19.0005 11 19.0005ZM8 20.0005C8 18.3436 9.34315 17.0005 11 17.0005C12.6569 17.0005 14 18.3436 14 20.0005C14 21.6573 12.6569 23.0005 11 23.0005C9.34315 23.0005 8 21.6573 8 20.0005ZM19 20.0005C19 19.4482 19.4477 19.0005 20 19.0005C20.5523 19.0005 21 19.4482 21 20.0005C21 20.5528 20.5523 21.0005 20 21.0005C19.4477 21.0005 19 20.5528 19 20.0005ZM20 17.0005C18.3431 17.0005 17 18.3436 17 20.0005C17 21.6573 18.3431 23.0005 20 23.0005C21.6569 23.0005 23 21.6573 23 20.0005C23 18.3436 21.6569 17.0005 20 17.0005Z" fill="#2F3639"/>
              </svg>
              <div @click.self="cart_m_window = true" class="nav__count">
                <span
                  @click.self="cart_m_window = true"
                  v-if="this.$store.getters['getCard'].cart_items.length == 0"
                  >0</span
                >
                <span @click.self="cart_m_window = true" v-else>{{
                  this.$store.getters["getCard"].cart_items.length
                }}</span>
              </div>
              <div
                class="header_menu_mask"
                @click="cart_m_window = false"
                v-if="cart_m_window"
              ></div>
              <div
                v-if="
                  this.$store.getters['getCard'].cart_items.length > 0 &&
                  cart_m_window
                "
                class="divTriangle"
              ></div>
              <div
                class="cardHover"
                v-if="
                  this.$store.getters['getCard'].cart_items.length > 0 &&
                  cart_m_window
                "
              >
                <div
                  class="cardHoverItem"
                  v-for="(item, index) in this.$store.getters['getCard']
                    .cart_items"
                  :key="index"
                >
                  <div>
                    <div>
                      <img :src="apiImg + 'sku/' + item.product.image" alt />
                    </div>
                    <div v-html="item.product.menu_name"></div>
                  </div>
                  <div
                    class="cardItemOptions"
                    v-if="
                      item.subcheckbox_list.length != 0 ||
                      item.checkbox_list.length != 0 ||
                      item.single_slider.length != 0 ||
                      item.double_slider.length != 0 ||
                      item.product.raid_enable != 0
                      //|| item.rank_object.selected_rank.title != ''
                    "
                  >
                    <span v-if="item.product.raid_enable != 0 && item.event.event_date != null ">
                      <strong>Raid time:</strong>
                      {{ get_cart_format_time(item.event.event_date) }} @
                      <span v-if="item.event.times.time_edt != ''"
                        >{{ item.event.times.time_edt }} EDT</span
                      >
                      <span v-if="item.event.times.time_cest != ''"
                        >{{ item.event.times.time_cest }} CEST</span
                      >
                    </span>
                    <span
                      v-for="(subitem, index) in item.subcheckbox_list"
                      :key="index"
                      v-html="subitem.title"
                    ></span>

                    <span
                      v-for="(subitem, index) in item.checkbox_list"
                      :key="index"
                      v-html="subitem.array.title"
                    ></span>

                    <span
                      v-for="(subitem, index) in item.single_slider"
                      :key="index"
                      >{{ subitem.choosen_price }} {{ subitem.title }} :
                      {{ subitem.real_value }}</span
                    >

                    <span
                      v-for="(subitem, index) in item.double_slider"
                      :key="index"
                      >{{ subitem.choosen_price }} {{ subitem.slider_title }} :
                      {{ subitem.title.replace(";", " - ") }}</span
                    >

                    <span v-for="(subitem, index) in item.calc" :key="index">
                      <span v-html="subitem.array.title"></span> :
                      {{
                        parseFloat(subitem.array.min) +
                        parseFloat(
                          parseFloat(subitem.array.step) *
                            parseFloat(subitem.count)
                        )
                      }}</span
                    >
                    <!-- <span v-if="item.rank_object.selected_rank.title != ''">
                      {{item.rank_object.selected_rank.title}}

                      <span v-if="item.rank_object.current>0">
                        Current:  {{item.rank_object.current}}
                      </span>

                       <span v-if="item.rank_object.desire>0">
                        Desire:  {{item.rank_object.desire}}
                      </span>

                    </span> -->
                  </div>
                  <div class="cardItemPrice">
                    <span v-if="$store.getters['getSelectedZone'] == 'us'">
                      {{
                        (
                          (parseFloat(item.product.price_usd) +
                            parseFloat(item.option_total_us)) *
                          parseFloat(item.count)
                        ).toFixed(2)
                      }}$
                      <span>x{{ item.count }}</span>
                    </span>
                    <span v-if="$store.getters['getSelectedZone'] == 'eu'">
                      {{
                        (
                          (parseFloat(item.product.price_eur) +
                            parseFloat(item.option_total_eu)) *
                          parseFloat(item.count)
                        ).toFixed(2)
                      }}€
                      <span>x{{ item.count }}</span>
                    </span>
                    <span>
                      <!-- <a

                        @click="
                          $store.commit('set_edit_sku_popup', true),
                            $store.commit('set_edit_sku_id', item.product.id),
                            $store.commit('set_edit_sku_index', index),
                            (cart_m_window = false)
                        "
                        >Edit options</a
                      > -->
                      <span @click="delete_cart_item(index)">Delete</span>
                    </span>
                  </div>
                </div>
                <div
                  class="cardHoverTotal"
                  v-if="this.$store.getters['getCard'].cart_items.length > 0"
                >
                  <span>Total</span>
                  <span v-if="$store.getters['getSelectedZone'] == 'us'">
                    {{ this.$store.getters["getCard"].total_price_us }}$
                    <span v-if="this.$store.getters['getCard'].sales"
                      >{{ this.$store.getters["getCard"].total_sale_us }}$</span
                    >
                  </span>
                  <span v-if="$store.getters['getSelectedZone'] == 'eu'">
                    {{ this.$store.getters["getCard"].total_price_eu }}€
                    <span v-if="this.$store.getters['getCard'].sales"
                      >{{ this.$store.getters["getCard"].total_sale_eu }}€</span
                    >
                  </span>
                  <span>
                    <a v-bind:href="'/page/make-an-order'">Make an order</a>
                  </span>
                </div>
              </div>
            </a>
          </li>
          <div class="nav_sub_header">
            <img src="" alt="" />
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
        </ul>
        <div class="mobile_sub_header" v-if="$route.path.split('/').length > 2">
          <div>
            <svg width="99" height="40" viewBox="0 0 99 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.222 34.5742C29.8835 28.0483 38.0113 13.1973 34.6081 4.86458C32.8642 0.595307 28.6544 -0.616862 24.0989 0.275112C33.2406 0.854513 34.8001 10.5061 28.0245 20.699C25.0822 25.1284 21.0184 29.0089 16.6472 31.7229C16.5243 29.1918 17.1926 26.4244 18.0838 24.0306H18.0991L15.8022 20.3483C14.3042 17.9621 13.2901 16.3001 12.3683 14.905C9.595 15.21 5.57724 14.7602 3.11127 12.8923C3.00372 12.8161 2.87312 12.9381 2.94226 13.0524C3.56452 13.9825 4.10995 14.7983 4.59392 15.5225C1.10623 20.9354 -1.31365 29.1842 2.11259 34.071C5.40823 30.7471 7.24426 28.6048 10.7396 22.7574C11.1545 22.9556 11.5463 23.1005 11.9457 23.2301C11.1545 24.5642 8.02784 29.7331 4.37114 34.2845C2.25087 36.8155 0 36.6554 0 36.6554C0.4302 37.0824 3.311 39.3619 9.06493 39.8269C7.05221 39.0645 6.81406 37.2196 7.50546 35.9007L13.8355 23.7104C14.2965 23.7942 14.7497 23.8629 15.3412 23.9238C12.5449 28.742 11.0008 31.7763 9.61036 37.3263C12.591 37.1891 15.6408 36.015 18.222 34.5742ZM3.18809 27.263C3.18809 27.263 2.68107 22.6583 5.91525 17.4971C8.37354 21.1717 8.38122 21.1564 9.04188 21.7053C6.7987 24.4956 5.1624 25.8755 3.18809 27.263Z" fill="#C24DFE"/>
              <path d="M17.5929 20.7605L18.8143 22.7427L24.7526 12.0237C25.5362 10.6057 25.567 8.88275 24.7911 7.41138L17.5775 19.6169C17.3701 19.9752 17.3701 20.4174 17.5929 20.7605Z" fill="#C24DFE"/>
              <path d="M16.0482 18.2981C16.0866 18.2371 23.5998 6.10018 23.8687 5.67325C22.5473 3.1803 22.8623 3.76733 22.6779 3.43188C22.5243 3.13456 22.1018 3.11169 21.9174 3.39376C20.8649 4.96425 18.0686 9.15729 16.1097 12.0772C14.9266 13.8535 14.7653 16.2245 16.0482 18.2981Z" fill="#C24DFE"/>
              <path d="M7.05945 9.60706C7.05945 9.59943 7.05945 9.59943 7.05945 9.60706C5.45388 10.5524 4.32461 11.2309 4.11719 11.3529C4.77017 12.0009 5.60752 12.3668 6.66766 12.626C9.57151 13.3427 12.8364 13.2207 12.8902 13.2207L20.918 1.73177C21.0333 1.57167 20.8412 1.36583 20.6722 1.47256C19.5813 2.12058 17.4457 3.39373 15.0566 4.81937C15.3485 5.61223 15.433 6.47371 15.264 7.31994C14.5342 11.1852 9.6637 12.4888 7.05945 9.60706Z" fill="#C24DFE"/>
              <path d="M10.2793 39.8655C11.8004 40.201 15.7874 40.0561 20.6118 37.708C30.7599 32.7602 35.2309 23.4441 35.2309 23.4441C41.5533 11.3529 35.8455 5.75708 35.8455 5.75708C40.6391 19.1595 26.189 36.9151 10.2793 39.8655Z" fill="#C24DFE"/>
              <path d="M1.74386 9.51564C1.74386 9.51564 3.87181 5.75716 8.76534 6.18408C7.79738 6.48141 7.20586 7.8308 8.28136 8.86C10.1481 10.6439 13.3823 9.70623 13.8893 7.06081C13.9892 6.53477 13.9585 6.02399 13.8279 5.55132C12.9291 2.3951 8.30441 2.44847 8.48878 4.88043C8.7807 4.84993 9.07262 4.94904 9.28004 5.11676C9.9407 5.65805 9.61037 6.64151 8.89593 6.68725C9.57964 6.38992 9.27236 5.49795 8.75765 5.63518C8.77302 5.65805 8.78838 5.68092 8.80375 5.70379C7.75897 5.61993 3.29565 5.5132 0.460938 9.51564C0.460938 9.51564 1.16001 8.93624 1.74386 9.51564Z" fill="#C24DFE"/>
              <path d="M46.776 19.9065H53.9819C54.2969 19.9065 54.4889 19.7464 54.558 19.4338L55.019 17.2992C55.0804 16.9866 54.9575 16.8265 54.6349 16.8265H47.5519C46.7223 16.8265 46.4073 16.6817 46.4073 16.148C46.4073 15.9574 46.4534 15.7211 46.9604 13.3577C47.2139 12.1761 47.4674 11.9397 48.5967 11.9397H55.672C55.9869 11.9397 56.179 11.7796 56.2481 11.467L56.709 9.33241C56.7705 9.01984 56.6476 8.85974 56.3249 8.85974H49.1191C45.8235 8.85974 44.3177 9.99567 43.6801 13.0299C42.812 17.2611 41.7903 19.9065 46.776 19.9065Z" fill="#565656"/>
              <path d="M55.372 19.9067C58.5601 19.9067 58.5601 19.9982 58.7906 19.6551L59.9506 18.0008H66.2807L66.757 19.6551C66.8031 19.8457 66.9029 19.9067 67.1564 19.9067H69.9681C70.3215 19.9067 70.4137 19.7009 70.3368 19.4341L67.5866 10.4533C67.1872 9.1573 66.6033 8.85997 65.5201 8.85997C63.7763 8.85997 63.0311 8.64651 61.7175 10.4533L55.2107 19.4341C55.0263 19.7009 55.0263 19.9067 55.372 19.9067ZM64.3448 11.9171C64.4523 11.9171 64.5445 11.9018 64.5675 12.0238L65.5662 15.5155H61.7021C64.3985 11.6807 64.1834 11.9171 64.3448 11.9171Z" fill="#565656"/>
              <path d="M71.5278 19.9066H73.9169C74.2319 19.9066 74.424 19.7465 74.4931 19.4339L75.3228 15.5687C77.7888 15.5687 77.9117 15.462 78.1882 16.0109L80.0934 19.655C80.2778 19.9905 80.2009 19.9066 83.4659 19.9066C83.8807 19.9066 83.9114 19.5102 83.85 19.3882C81.3994 14.9969 81.2918 14.692 80.731 14.1964C81.0767 13.9144 81.1459 13.8229 85.5861 9.33253C85.7475 9.15718 85.7628 8.85986 85.4248 8.85986C82.1676 8.85986 82.2905 8.78362 81.9909 9.11144L78.6492 12.6488C78.1498 13.1901 78.0346 13.091 75.8529 13.091L76.6672 9.33253C76.7286 9.01995 76.6211 8.85986 76.2984 8.85986H73.9016C73.5866 8.85986 73.3792 9.01995 73.3101 9.33253L71.1437 19.4339C71.0822 19.7465 71.2128 19.9066 71.5278 19.9066Z" fill="#565656"/>
              <path d="M98.0854 8.85974H91.0562C87.7605 8.85974 86.2548 9.99567 85.6172 13.0299C84.7338 17.2611 83.7197 19.9141 88.7054 19.9141H95.7346C96.0496 19.9141 96.2416 19.754 96.3108 19.4414L96.7563 17.3907C96.8178 17.0781 96.6949 16.918 96.3722 16.918H89.3892C88.2368 16.918 88.1293 16.6207 88.3213 15.6677H96.5412C96.8562 15.6677 97.0483 15.5076 97.1174 15.195L97.4861 13.5026C97.5476 13.19 97.4247 13.0299 97.102 13.0299H88.8821C89.1203 12.0693 89.4199 11.8635 90.4723 11.8635H97.4554C97.7704 11.8635 97.9624 11.7034 98.0316 11.3908L98.4771 9.34004C98.5309 9.01222 98.408 8.85974 98.0854 8.85974Z" fill="#565656"/>
              <path d="M49.3574 22.8647H42.3359C42.0978 22.8647 41.9441 22.9867 41.898 23.2231L40.2771 30.7934C40.231 31.0297 40.3232 31.1517 40.5614 31.1517H47.8671C49.4496 31.1517 50.1564 30.2902 50.4175 29.0018C50.5789 28.1937 50.8017 27.4466 50.164 26.8748C50.6403 26.547 50.986 26.0591 51.1166 25.4416C51.2856 24.6487 51.3087 24.4352 51.3087 24.237C51.3087 23.3145 50.7402 22.8647 49.3574 22.8647ZM48.0361 28.552C47.9746 28.8036 47.821 28.918 47.5214 28.918H43.3423C43.1349 28.918 43.2117 28.7884 43.4114 27.8278H47.7518C48.2435 27.8278 48.1206 28.1708 48.0361 28.552ZM48.643 25.7389C48.5969 25.9752 48.4279 26.0972 48.1283 26.0972H43.7802C43.9722 25.2205 43.9492 25.0909 44.1643 25.0909H48.3434C48.5969 25.0909 48.7121 25.1824 48.7121 25.3501C48.7121 25.3806 48.7121 25.4034 48.643 25.7389Z" fill="#565656"/>
              <path d="M59.9899 22.8647H56.2334C53.7674 22.8647 52.6381 23.7186 52.1542 25.9905C51.4935 29.1619 50.733 31.1441 54.4665 31.1441H58.223C60.689 31.1441 61.8183 30.2902 62.3023 28.0184C62.817 25.5559 62.863 25.1824 62.863 24.8469C62.863 23.4213 61.9873 22.8647 59.9899 22.8647ZM59.8363 27.8278C59.6442 28.7121 59.4522 28.8951 58.6071 28.8951H55.0426C54.4204 28.8951 54.1822 28.7884 54.1822 28.3843C54.1822 28.2395 54.2206 28.0641 54.6201 26.1734C54.8122 25.2891 55.0042 25.1061 55.8493 25.1061H59.4138C60.036 25.1061 60.2742 25.2128 60.2742 25.6169C60.2742 25.7618 60.2358 25.9371 59.8363 27.8278Z" fill="#565656"/>
              <path d="M71.6735 22.8647H67.917C65.451 22.8647 64.3217 23.7186 63.8378 25.9905C63.1771 29.1619 62.4166 31.1441 66.1501 31.1441H69.9066C72.3726 31.1441 73.5019 30.2902 73.9859 28.0184C74.5006 25.5559 74.5467 25.1824 74.5467 24.8469C74.5467 23.4213 73.6786 22.8647 71.6735 22.8647ZM71.5199 27.8278C71.3278 28.7121 71.1358 28.8951 70.2908 28.8951H66.7262C66.104 28.8951 65.8658 28.7884 65.8658 28.3843C65.8658 28.2395 65.9042 28.0641 66.3037 26.1734C66.4958 25.2891 66.6878 25.1061 67.5329 25.1061H71.0974C71.7196 25.1061 71.9578 25.2128 71.9578 25.6169C71.9578 25.7618 71.927 25.9371 71.5199 27.8278Z" fill="#565656"/>
              <path d="M84.7115 22.8647H78.5121C76.9756 22.8647 76.023 23.6805 75.7619 24.9003C75.5237 25.9981 75.5007 26.2039 75.5007 26.3869C75.5007 27.3932 76.1536 27.9574 77.3828 27.9574H81.485C81.654 27.9574 81.7232 28.026 81.7232 28.1708C81.7232 28.4758 81.6156 28.8951 81.2699 28.8951H75.2779C75.0397 28.8951 74.8938 29.0171 74.8477 29.2534L74.5173 30.7934C74.4713 31.0297 74.5634 31.1517 74.8016 31.1517H81.293C82.8294 31.1517 83.7743 30.336 84.0355 29.1162C84.289 27.9574 84.3121 27.7439 84.3121 27.5533C84.3121 26.5622 83.6668 25.9905 82.4376 25.9905H78.3354C78.1664 25.9905 78.0972 25.9219 78.0972 25.777C78.0972 25.4721 78.1894 25.1137 78.5274 25.1137H84.2199C84.458 25.1137 84.6117 24.9918 84.6578 24.7554L84.9804 23.2154C85.0342 22.9791 84.9497 22.8647 84.7115 22.8647Z" fill="#565656"/>
              <path d="M95.4199 22.8647H86.0784C85.8403 22.8647 85.6943 22.9867 85.6482 23.2231L85.3025 24.8164C85.2564 25.0528 85.3486 25.1747 85.5867 25.1747H89.0053L87.7992 30.7934C87.7531 31.0297 87.8453 31.1517 88.0834 31.1517H89.8734C90.1115 31.1517 90.2575 31.0297 90.3036 30.7934L91.5097 25.1747H94.9282C95.1664 25.1747 95.3123 25.0528 95.3584 24.8164L95.7041 23.2231C95.7502 22.9791 95.658 22.8647 95.4199 22.8647Z" fill="#565656"/>
            </svg>
          </div>
          <a
            target="_blank"
            style="text-decoration: none; display: block"
            href="https://www.trustpilot.com/review/cakeboost.com"
          >
            <svg width="98" height="24" viewBox="0 0 98 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.7468 8.50537H35.6569V10.3465H31.7549V20.7253H29.6162V10.3465H25.7305L25.7468 8.50537ZM35.2325 11.8781H37.061V13.5888H37.0937C37.159 13.3444 37.2733 13.1163 37.4365 12.8882C37.5998 12.6601 37.7957 12.4483 38.0406 12.2691C38.2692 12.0736 38.5304 11.9269 38.8243 11.8129C39.1018 11.6988 39.3957 11.6337 39.6896 11.6337C39.9181 11.6337 40.0814 11.65 40.163 11.65C40.2447 11.6662 40.3426 11.6825 40.4243 11.6825V13.5563C40.2937 13.5237 40.1467 13.5074 39.9998 13.4911C39.8528 13.4748 39.7222 13.4585 39.5753 13.4585C39.2488 13.4585 38.9386 13.5237 38.6447 13.654C38.3508 13.7844 38.1059 13.9799 37.8773 14.2243C37.6651 14.485 37.4855 14.7945 37.3549 15.1693C37.2243 15.544 37.159 15.9839 37.159 16.4727V20.6764H35.1998L35.2325 11.8781ZM49.4038 20.7253H47.4773V19.487H47.4446C47.1997 19.9432 46.8406 20.2853 46.3671 20.5623C45.8936 20.8393 45.4038 20.9697 44.914 20.9697C43.7549 20.9697 42.9059 20.6927 42.3834 20.1061C41.861 19.5359 41.5998 18.656 41.5998 17.4992V11.8781H43.5589V17.3037C43.5589 18.0858 43.7059 18.6397 44.0161 18.9493C44.31 19.2752 44.7344 19.4381 45.2732 19.4381C45.6814 19.4381 46.0242 19.3729 46.3018 19.2426C46.5793 19.1122 46.8079 18.9493 46.9712 18.7375C47.1508 18.5257 47.265 18.265 47.3467 17.9717C47.4283 17.6784 47.461 17.3526 47.461 17.0104V11.8781H49.4201V20.7253H49.4038ZM52.7344 17.8902C52.7997 18.4605 53.012 18.8515 53.3875 19.0959C53.763 19.324 54.2201 19.4381 54.7426 19.4381C54.9221 19.4381 55.1344 19.4218 55.363 19.3892C55.5915 19.3566 55.8201 19.3078 56.016 19.2263C56.2283 19.1448 56.3915 19.0308 56.5221 18.8678C56.6528 18.7049 56.7181 18.5094 56.7017 18.265C56.6854 18.0206 56.6038 17.8088 56.4242 17.6458C56.2446 17.4829 56.0323 17.3689 55.7711 17.2548C55.5099 17.1571 55.1997 17.0756 54.8568 17.0104C54.514 16.9452 54.1711 16.8638 53.8119 16.7823C53.4528 16.7008 53.0936 16.6031 52.7507 16.489C52.4079 16.375 52.114 16.2283 51.8364 16.0165C51.5752 15.821 51.3467 15.5766 51.1997 15.267C51.0365 14.9575 50.9548 14.599 50.9548 14.1428C50.9548 13.654 51.0691 13.263 51.314 12.9371C51.5426 12.6113 51.8528 12.3506 52.212 12.155C52.5711 11.9595 52.9793 11.8129 53.4201 11.7314C53.8609 11.65 54.2854 11.6174 54.6772 11.6174C55.1344 11.6174 55.5752 11.6662 55.9834 11.764C56.3915 11.8618 56.7834 12.0084 57.1099 12.2365C57.4527 12.4483 57.7303 12.7416 57.9425 13.0838C58.1711 13.4259 58.3017 13.8495 58.367 14.3383H56.3262C56.2283 13.8658 56.016 13.5563 55.6895 13.3933C55.3466 13.2304 54.9711 13.1489 54.5303 13.1489C54.3997 13.1489 54.2201 13.1652 54.0405 13.1815C53.8446 13.2141 53.6813 13.2467 53.5017 13.3119C53.3385 13.377 53.1915 13.4748 53.0773 13.5888C52.963 13.7029 52.8977 13.8658 52.8977 14.0613C52.8977 14.3057 52.9793 14.485 53.1426 14.6316C53.3058 14.7782 53.5181 14.8923 53.7956 15.0064C54.0568 15.1041 54.367 15.1856 54.7099 15.2508C55.0528 15.3159 55.4119 15.3974 55.7711 15.4789C56.1303 15.5603 56.4732 15.6581 56.816 15.7721C57.1589 15.8862 57.4691 16.0328 57.7303 16.2446C57.9915 16.4402 58.2201 16.6846 58.3834 16.9778C58.5466 17.2711 58.6283 17.6458 58.6283 18.0695C58.6283 18.5909 58.514 19.0308 58.2691 19.4055C58.0242 19.764 57.714 20.0735 57.3385 20.3016C56.963 20.5297 56.5221 20.6927 56.065 20.8067C55.5915 20.9045 55.1344 20.9697 54.6772 20.9697C54.1222 20.9697 53.5997 20.9045 53.1262 20.7741C52.6528 20.6438 52.2283 20.4483 51.8854 20.2039C51.5426 19.9432 51.265 19.6336 51.0691 19.2426C50.8732 18.8678 50.7589 18.4116 50.7426 17.874H52.7181V17.8902H52.7344ZM59.1833 11.8781H60.6691V9.20598H62.6282V11.8618H64.3915V13.3119H62.6282V18.0369C62.6282 18.2487 62.6446 18.4116 62.6609 18.5746C62.6772 18.7212 62.7262 18.8515 62.7752 18.9493C62.8405 19.0471 62.9384 19.1285 63.0527 19.1774C63.1833 19.2263 63.3466 19.2589 63.5752 19.2589C63.7058 19.2589 63.8527 19.2589 63.9833 19.2426C64.1139 19.2263 64.2609 19.21 64.3915 19.1774V20.6927C64.1792 20.7253 63.967 20.7416 63.7548 20.7578C63.5425 20.7904 63.3466 20.7904 63.118 20.7904C62.5956 20.7904 62.1874 20.7416 61.8772 20.6438C61.567 20.546 61.3221 20.3994 61.1425 20.2202C60.9629 20.0247 60.8486 19.7965 60.7833 19.5196C60.718 19.2426 60.6854 18.9004 60.6691 18.542V13.3282H59.1833V11.8455V11.8781ZM65.7629 11.8781H67.6078V13.0838H67.6404C67.918 12.5624 68.2935 12.2039 68.7833 11.9758C69.2731 11.7477 69.7955 11.6337 70.3833 11.6337C71.0853 11.6337 71.6894 11.7477 72.2118 12.0084C72.7343 12.2528 73.1588 12.5787 73.5016 13.0186C73.8445 13.4422 74.1057 13.9473 74.269 14.5176C74.4322 15.0878 74.5302 15.707 74.5302 16.3424C74.5302 16.9452 74.4486 17.5155 74.3016 18.0695C74.1384 18.6234 73.9098 19.1285 73.5996 19.5522C73.2894 19.9758 72.8976 20.3179 72.4078 20.5786C71.918 20.8393 71.3629 20.9697 70.7098 20.9697C70.4323 20.9697 70.1384 20.9371 69.8608 20.8882C69.5833 20.8393 69.3057 20.7579 69.0445 20.6438C68.7833 20.5297 68.5384 20.3831 68.3262 20.2039C68.0976 20.0247 67.918 19.8128 67.7711 19.5847H67.7384V24.0002H65.7792V11.8781H65.7629ZM72.6037 16.3098C72.6037 15.9188 72.5547 15.5277 72.4404 15.153C72.3425 14.7782 72.1792 14.4524 71.9669 14.1591C71.7547 13.8658 71.4935 13.6377 71.1996 13.4585C70.8894 13.2793 70.5302 13.1978 70.1384 13.1978C69.3221 13.1978 68.7017 13.4748 68.2772 14.0451C67.869 14.6153 67.6568 15.3811 67.6568 16.3261C67.6568 16.7823 67.7057 17.1896 67.82 17.5644C67.9343 17.9391 68.0813 18.265 68.3098 18.542C68.5221 18.819 68.7833 19.0308 69.0935 19.1937C69.4037 19.3566 69.7466 19.4381 70.1547 19.4381C70.6119 19.4381 70.971 19.3403 71.2812 19.1611C71.5914 18.9819 71.8363 18.7375 72.0486 18.4605C72.2445 18.1672 72.3914 17.8414 72.4731 17.4666C72.5547 17.0756 72.6037 16.7008 72.6037 16.3098ZM76.0486 8.50537H78.0077V10.3465H76.0486V8.50537ZM76.0486 11.8781H78.0077V20.7253H76.0486V11.8781ZM79.7547 8.50537H81.7138V20.7253H79.7547V8.50537ZM87.6893 20.9697C86.9873 20.9697 86.3505 20.8556 85.7954 20.6112C85.2403 20.3668 84.7832 20.0572 84.3914 19.6499C84.0159 19.2426 83.722 18.7375 83.5261 18.1672C83.3302 17.597 83.2159 16.9615 83.2159 16.2935C83.2159 15.6255 83.3138 15.0064 83.5261 14.4361C83.722 13.8658 84.0159 13.377 84.3914 12.9534C84.7669 12.5461 85.2403 12.2202 85.7954 11.9921C86.3505 11.764 86.9873 11.6337 87.6893 11.6337C88.3913 11.6337 89.0281 11.7477 89.5832 11.9921C90.1383 12.2202 90.5954 12.5461 90.9873 12.9534C91.3628 13.3607 91.6566 13.8658 91.8526 14.4361C92.0485 15.0064 92.1628 15.6255 92.1628 16.2935C92.1628 16.9778 92.0648 17.597 91.8526 18.1672C91.6403 18.7375 91.3628 19.2263 90.9873 19.6499C90.6117 20.0572 90.1383 20.3831 89.5832 20.6112C89.0281 20.8393 88.4077 20.9697 87.6893 20.9697ZM87.6893 19.4218C88.1138 19.4218 88.5056 19.324 88.8158 19.1448C89.1424 18.9656 89.3873 18.7212 89.5995 18.4279C89.8118 18.1346 89.9587 17.7925 90.0566 17.434C90.1546 17.0593 90.2036 16.6846 90.2036 16.2935C90.2036 15.9188 90.1546 15.544 90.0566 15.1693C89.9587 14.7945 89.8118 14.4687 89.5995 14.1754C89.3873 13.8821 89.126 13.654 88.8158 13.4748C88.4893 13.2956 88.1138 13.1978 87.6893 13.1978C87.2648 13.1978 86.873 13.2956 86.5628 13.4748C86.2363 13.654 85.9914 13.8984 85.7791 14.1754C85.5669 14.4687 85.4199 14.7945 85.322 15.1693C85.224 15.544 85.175 15.9188 85.175 16.2935C85.175 16.6846 85.224 17.0593 85.322 17.434C85.4199 17.8088 85.5669 18.1346 85.7791 18.4279C85.9914 18.7212 86.2526 18.9656 86.5628 19.1448C86.8893 19.3403 87.2648 19.4218 87.6893 19.4218ZM92.7505 11.8781H94.2362V9.20598H96.1954V11.8618H97.9586V13.3119H96.1954V18.0369C96.1954 18.2487 96.2117 18.4116 96.2281 18.5746C96.2444 18.7212 96.2934 18.8515 96.3423 18.9493C96.4076 19.0471 96.5056 19.1285 96.6199 19.1774C96.7505 19.2263 96.9138 19.2589 97.1423 19.2589C97.2729 19.2589 97.4199 19.2589 97.5505 19.2426C97.6811 19.2263 97.828 19.21 97.9586 19.1774V20.6927C97.7464 20.7253 97.5342 20.7416 97.3219 20.7578C97.1097 20.7904 96.9138 20.7904 96.6852 20.7904C96.1627 20.7904 95.7546 20.7416 95.4444 20.6438C95.1342 20.546 94.8893 20.3994 94.7097 20.2202C94.5301 20.0247 94.4158 19.7965 94.3505 19.5196C94.2852 19.2426 94.2525 18.9004 94.2362 18.542V13.3282H92.7505V11.8455V11.8781Z" fill="black"/>
              <path d="M23.4611 8.50517H14.4979L11.7387 0.00012207L8.96322 8.50517L0 8.48888L7.24894 13.7516L4.47345 22.2566L11.7224 16.9939L18.9713 22.2566L16.2122 13.7516L23.4611 8.50517Z" fill="#00B67A"/>
              <path d="M16.8341 15.6741L16.2137 13.7515L11.7402 16.9938L16.8341 15.6741Z" fill="#005128"/>
            </svg>
            <div>4.9/5</div>
          </a>
        </div>

      </header>

      <nuxt
        :class="{
          sub_header_contet_padding: $route.path.split('/').length > 2,
        }"
      />
      <div
        class="mobileChooseGame"
        v-if="!$route.path.includes('investors-and-partners')"
      >
        <a
          v-for="(item, index) in this.games.records"
          v-if="index < 3"
          :key="index"
          :id="item.id"
          class="chooseGameButton"
          :class="{ active: $store.getters['getGlobalGameId'] == item.id }"
          @click="set_global_game($event, item)"
          :href="'/' + item.slug"
        >
          <div>{{ item.title }}</div>
        </a>
        <a
          @click="game_sidebar_open = game_sidebar_open ? false : true"
          :class="{ active: game_sidebar_open }"
        >
          <div>
            &bull;&bull;&bull; <br />
            All games
          </div>
        </a>
      </div>
      <FooterStatic />
    </div>
  </div>
  </div>

</template>
<script>
// import "@/static/css/reset.css";

// import "@/static/ion.rangeSlider.min.css";
// import "@/static/jquery.fancybox.min.css";
// import "@/static/swiper-bundle.css";
import "@/static/swiper-bundle.js";
// import "@/static/css/main.css";
// import "@/static/css/landing.css";
// import "@/static/assets/css/style.css";

import Cookies from "js-cookie";
import moment from "moment";
import momenttz from "moment-timezone";

import edit_sku from "~/components/edit_sku.vue";

import FooterStatic from "~/components/FooterStatic";
import CookiesPolicy from "~/components/CookiesPolicy";

export default {
  loading: {
    color: "blue",
    height: "5px",
  },

  /*
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ["script", "style", "font"].includes(type);
      },
    },
  },*/
  components: {
    edit_sku,
    FooterStatic,
    CookiesPolicy
  },
  data() {
    return {
      cookiesOpen: this.$store.getters["get_cookies_open"],
      windowWidth: 900,
      more: false,
      category: [],
      reg_started: true,
      ErrorPass: false,
      UpperPassError: false,
      close_sidebar: true,
      close_sidebar_mobile: false,
      horizontalProgress: false,
      zone_pick: "us",
      apiUrl: this.$store.getters["getApiUrl"],
      apiImg: this.$store.getters["getApiImgUrl"],
      globalApi: this.$store.getters["getGlobalApi"],
      cart: "",
      registration_pop_up: false,
      login_pop_up: false,
      registration_mail: "",
      registration_password: "",
      registration_r_password: "",
      registration_result: "",
      login_result: "",
      login_result_text: "",
      result_text: "",
      favorite: [],
      favorite_store_temp: this.$store.getters["getFavorite"],
      login_mail: "",
      restor_mail: "",
      password: "",
      most_popular: [],
      search_string: "",
      search_start: false,
      search_result: [],
      games: [],
      gamesSlug: [],
      cart_m_window: false,
      user_m_window: false,
      favorite_m_window: false,
      get_game_options: {},
      forgot_pass_popoup: false,
      open_all_games: false,
      game_sidebar_open: false,
      preloader_show: false,
      result_text_forgot: "",
      registration_result_forgot: "",
      scroll_top_height: 0,
      open_game_list: false,
      open_nav_search: false,
      search_header_game: "",
      contact_us_popoup: false,
      content: "",
      copied: "",
      checkSub: false,
      category_preload: true,
      open_notification_popup: false,
      notification_popup_more: false,
      user: "",
      popUp: "",
      gameSlug: "",
      percent: "",
      sku_edit_id: this.$store.getters["get_is_sku_edit_popup"],
      sku_edit_popup: false,
      notifications:[],
      notification_enable:false,
      PopUp_open: true,
      sub_error: false,
      sub_success: false,
      sub_mail: '',
      preloader: false,
      differentPass: false,
      closedCookie: false,
      isModalDisplayed: false
    };
  },
  head() {
    return {
      script: [
        {
          src: "/jquery.fancybox.min.js",
          defer: true,
        },
        {
          src: "/ion.rangeSlider.min.js",
          defer: true,
        },
      ],
      link: [
        {rel: "stylesheet", type: 'text/css', href: "/ion.rangeSlider.min.css"},
        {rel: "stylesheet", type: 'text/css', href: "/jquery.fancybox.min.css"},
        {rel: "stylesheet", type: 'text/css', href: "/swiper-bundle.css"},
        {rel: "stylesheet", type: 'text/css', href: "/css/main.css"},
        {rel: "stylesheet", type: 'text/css', href: "/css/landing.css"},
        {rel: "stylesheet", type: 'text/css', href: "/assets/css/style.css"},
        {rel: "stylesheet", type: 'text/css', href: "/css/reset.css"},
      ],
      bodyAttrs: {
        class: this.$store.getters["get_is_page_speed"],
      },
    };
  },
  created() {},
  mounted() {
    // this.$nextTick(() => {
    // this.$nuxt.$loading.start(),
    this.windowWidth = window.innerWidth;
    this.check_qookie_for_token(),
      this.getCookie_zone(),
      this.get_blogs_depth(),
      this.get_favorite(this.favorite_store_temp),
      this.change_game_by_offers(),
      this.get_contact_info();
      this.get_popUp();
      this.checkCookie();
    // setTimeout(() => this.$nuxt.$loading.finish(), 500);
    //});

    setTimeout(() => {
      if(dashly) {
        dashly.addCallback('conversation_started', function(data) {
          fbq('track', 'Contact');
        })
      }
    }, 5500)

    window.addEventListener('scroll', () => {
      if(window.scrollY > 300){
        this.isModalDisplayed = true;
        window.removeEventListener('scroll');
      }
    })
  },
  watch: {
    sku_edit_id: async function () {
      this.sku_edit_popup = true;
    },
    search_string: async function () {
      if (this.search_string.split("").length > 2) {
        this.search_start = true;
        let response_search = await this.$axios
          .$get(
            this.apiUrl +
              'sku?filter1=title,cs,' +
              this.search_string +
              '&filter2=title,cs,' +
              (this.search_string.replaceAll("'", "’")) +
              '&size=4&filter=status,eq,1'
          )
          .then((data) => {
            for (let i = 0; i < data.records.length; i++) {
              for (let j = 0; j < this.games.records.length; j++) {
                if (data.records[i].game == this.games.records[j].id) {
                  data.records[i].game_slug = this.games.records[j].slug;
                  break;
                }
              }
              this.search_result = data.records;
              let response_search2 = this.$axios
                .$get(
                  this.apiUrl +
                    '&filter=content,cs,'+
                    this.search_string +
                    '&size=4&filter=status,eq,1'
                )
                .then((data) => {
                  for (let i = 0; i < data.records.length; i++) {
                    for (let j = 0; j < this.games.records.length; j++) {
                      if (data.records[i].game == this.games.records[j].id) {
                        data.records[i].game_slug = this.games.records[j].slug;
                        break;
                      }
                    }
                    this.search_result.push(data.records);
                  }
                });
            }
          });
      } else {
      }
    },
  },

  async fetch() {
    if (this.$route.params.game) {
      if(this.$route.params.game == 'wow-boost'){
        this.$store.commit("setGlobal_game", 'wow-shadowlands');
      } else {
        this.$store.commit("setGlobal_game", this.$route.params.game);
      }
    }
  },
  methods: {
    closeCookie() {
      // this.cookiesOpen = !this.cookiesOpen;
      // this.$store.commit("set_cookies_open", this.cookiesOpen)
      this.$refs.cookiesPolicy.cookiesOpen = !this.$refs.cookiesPolicy.cookiesOpen;
    },
    checkModal(){
      try {
        if(JSON.parse(localStorage.getItem("subscribed")) === true) {
          return false;
        }
      } catch (e) {}
      if(this.popUp.popup){
        if(this.popUp.popup.check){
          if(
            this.$route.path.includes('service')
            || this.$route.path.includes('catalog')
            || (this.$route.path == '/' + this.$route.params.game)
          ){
            if(this.PopUp_open ){
              if(this.$store.getters['getUserLoginCheck'].user_check_login){
                if(this.checkSub || !!this.user.subscribe){
                  return true
                } else {
                  return false
                }
              } else {
                if(this.checkSub){
                  return true
                } else {
                  return false
                }
              }
            } else {
              return false
            }
          } else {
            return false
          }
        } else {
          return false
        }
      }
    },
    applyCookies(method){
      if(method == 'sub'){
        let sub = {
          status: true,
          game_id: this.gameSlug
        };
        sub = JSON.stringify(sub)
        sessionStorage.setItem(method + '_' + this.gameSlug, sub);
        this.checkSub = false;
      }
    },
    closePopUp(){
      this.PopUp_open = false
    },
    async checkCookie(){
      let user_sub = true;
      let user_close = true;
      let thisGame = this.$route.params.game == 'wow-boost' ? 'wow-shadowlands' : this.$route.params.game
      if(sessionStorage.getItem('sub_'+ thisGame)){
        let sub = JSON.parse(sessionStorage.getItem('sub_'+ thisGame))
        user_sub = !sub.status;
        console.log("user_close: " + user_sub)
      }
      if(localStorage.getItem('sub_'+ thisGame)){
        let sub = JSON.parse(localStorage.getItem('sub_'+ thisGame))
        user_close = !sub.status;
      }
      console.log(thisGame)
      console.log(sessionStorage)
      if(!user_sub || !user_close){
        this.checkSub = false;
      } else {
        this.checkSub = true;
      }
    },
    async send_subscribe() {
      let mail_sub = await this.$axios
        .$post(this.globalApi + "requests.php", {
          method: "user_subscr",
          email: this.sub_mail,
          game_id: this.$store.getters["getGlobalGameId"],
        })
        .then((data) => {
          console.log(data)
          if(data.status == 200){
            this.sub_success = true;
            this.sub_error = false;
            let sub = {
              status: true,
              game_id: this.gameSlug
            };
            sub = JSON.stringify(sub)
            localStorage.setItem('sub_'+this.gameSlug, sub);
            localStorage.setItem('subscribed', true);
            this.checkSub = false;
          } else {
            this.sub_error = true;
            this.sub_success = false;
          }
        });
    },
    redirect_url() {
      if (
        window.location.origin ==
        "http://ec2-54-193-108-3.us-west-1.compute.amazonaws.com"
      ) {
        window.location.href = window.location.href.replace(
          "http://ec2-54-193-108-3.us-west-1.compute.amazonaws.com",
          "https://cakeboost.com"
        );
      }
    },
    async get_user() {
      let response_t = await this.$axios
        .$post(this.globalApi + "requests.php", {
          method: "user_info",
          access_token: this.get_access(),
          fields: "all",
          orders: "all",
        })
        .then((data) => {
          this.user = data.user;
          if (this.user.nofields == "") {
            this.user.nofields = [];
          } else {
            this.user.nofields = this.user.nofields.split(",");
          }
          this.orders = data.orders;
          for (let i = 0; i < this.orders.length; i++) {
            for (let i = 0; i < this.orders.length; i++) {
              if (this.orders[i].trash == 1) {
                this.orders.splice(i, 1);
                i--;
              } else {
                this.orders[i].cart = JSON.parse(this.orders[i].cart);
              }
            }
          }
        });
      let response_game_fields = await this.$axios
        .$post(this.globalApi + "requests.php", {
          method: "fields_lk",
          access_token: this.get_access(),
        })
        .then((data) => {});
    },
    async get_contact_info() {
      let response_data_content = await this.$axios
        .$get(this.apiUrl + "pages?filter=slug,eq,contact-us")
        .then((data) => {
          this.content = data.records[0];
          this.content = JSON.parse(this.content.content);
        });
    },
    async get_popUp() {
      try {
        let response_data_content = await this.$axios
        .$get(this.apiUrl + "game?filter=slug,eq," + (this.$route.path.split("/")[1] == 'wow-boost' ? 'wow-shadowlands' : this.$route.path.split("/")[1]) + '&include=id,options,discount,slug')
        .then((data) => {
          if(data){
            this.gameSlug = data.records[0].slug;
            this.popUp = JSON.parse(data.records[0].options);
            this.percent = data.records[0].discount
          }
        });
      } catch (e) {
        console.log("NO POPUP")
      }

      // let response_data_content = await this.$axios
      //   .$get(this.apiUrl + "game/1")
      //   .then((data) => {
      //     // this.popUp = JSON.parse(data.modal_win);
      //     // this.percent = data.subscr_coup
      //   });
    },
    copyText(txt) {
      var dummy = document.createElement("textarea");
      // dummy.style.display = 'none'
      document.body.appendChild(dummy);
      dummy.value = txt;
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
    },
    async change_game_by_offers() {
      if (
        this.$route.path.split("/")[2] == "special-offers" &&
        this.$route.path.split("/").length == 4
      ) {
        let offer_id = this.$route.params.id.split("&");
        let related_product = "";
        let response_offers = await this.$axios
          .$get(this.apiUrl + "offers/" + offer_id[1] + "?include=game_id")
          .then((data) => {
            Cookies.remove("game");
            Cookies.set("game", data.game_id, { expires: 30 });
            this.get_games();
          });
      } else {
        if (
          this.$route.path.split("/")[2] == "blogs" &&
          this.$route.path.split("/").length == 5 &&
          this.$route.params.gameblogs != "about-us"
        ) {
          let temp = this.$route.path.split("&");
          let newsId = temp[1];
          let response_data = await this.$axios
            .$get(this.apiUrl + "news/" + newsId + "?include=game_id")
            .then((data) => {
              Cookies.remove("game");
              Cookies.set("game", data.game_id, { expires: 30 });
              this.get_games();
            });
        } else {
          if (this.$route.path.split("/")[2] == "service") {
            let temp = this.$route.path.split("&");

            let game = temp[0].split("/")[1];
            let response_data = await this.$axios
              .$get(this.apiUrl + "game?filter=slug,eq," + game + "&include=id")
              .then((data) => {
                Cookies.remove("game");
                if (data.records[0]) {
                    Cookies.set("game", data.records[0].id, { expires: 30 });
                  } else {
                    let response_data_game = this.$axios
                      .$get(
                        this.apiUrl +
                          "game?include=id&size=1"
                      )
                      .then((data) => {
                        Cookies.set("game", data.records[0].id, { expires: 30 });
                      });
                  }
                this.get_games();
              });
          } else {
            if (this.$route.path.split("/")[1] != "page") {
              let temp = this.$route.path.split("&");

              let game = temp[0].split("/")[1];
              if(game == 'wow-boost'){
                let response_data = await this.$axios
                .$get(
                  this.apiUrl + "game?filter=slug,eq,wow-shadowlands&include=id"
                )
                .then((data) => {
                  Cookies.remove("game");
                  if (data.records[0]) {
                    Cookies.set("game", data.records[0].id, { expires: 30 });
                  } else {
                    let response_data_game = this.$axios
                      .$get(
                        this.apiUrl +
                          "game?include=id&size=1"
                      )
                      .then((data) => {
                        Cookies.set("game", data.records[0].id, { expires: 30 });
                      });
                  }
                  this.get_games();
                });
              } else {
              let response_data = await this.$axios
                .$get(
                  this.apiUrl + "game?filter=slug,eq," + game + "&include=id"
                )
                .then((data) => {
                  Cookies.remove("game");
                  if (data.records[0]) {
                    Cookies.set("game", data.records[0].id, { expires: 30 });
                  } else {
                    let response_data_game = this.$axios
                      .$get(
                        this.apiUrl +
                          "game?include=id&size=1"
                      )
                      .then((data) => {
                        Cookies.set("game", data.records[0].id, { expires: 30 });
                      });
                  }
                  this.get_games();
                });
              }
            } else {
              this.get_games();
            }
          }
        }
      }
    },
    async get_games() {
      let response_games = await this.$axios
        .$get(this.apiUrl + "game?order=orders,asc")
        .then((data) => {
          let temp = JSON.stringify(data);
          this.games = JSON.stringify(data);
          this.games = JSON.parse(this.games);
          this.games.records.forEach(element =>
            this.gamesSlug[element.id] = element.slug
          );
          this.$store.commit("set_gameSlug", this.gamesSlug);
          if (!Cookies.get("game")) {
            Cookies.remove("game");
            Cookies.set("game", this.games.records[0].id, { expires: 30 });
            this.$store.commit("setGlobal_game", this.games.records[0].slug);
            this.$store.commit("setGlobal_game_id", this.games.records[0].id);
            this.get_game_options = JSON.parse(this.games.records[0].options);
          } else {
            this.$store.commit("setGlobal_game_id", this.getCookie("game"));
            for (let i = 0; i < this.games.records.length; i++) {
              if (this.games.records[i].id == Cookies.get("game")) {
                this.$store.commit(
                  "setGlobal_game",
                  this.games.records[i].slug
                );
                this.get_game_options = JSON.parse(
                  this.games.records[i].options
                );
                break;
              }
            }
          }
          this.get_category();
          this.get_most_popular();
        });
    },
    testGameList(id){
      return this.gamesSlug[id]
    },
    set_global_game_favorite(id) {
      let date = new Date(Date.now() + 30 * 86400e3);
      date = date.toUTCString();
      this.deleteCookie("game");
      this.setCookie("game", id, { expires: date });
    },
    set_global_game(event, item) {
      event.preventDefault();
      let date = new Date(Date.now() + 30 * 86400e3);
      date = date.toUTCString();
      this.deleteCookie("game");
      this.setCookie("game", item.id, { expires: date });
      this.$store.commit("setGlobal_game", item.slug);
      this.$store.commit("setGlobal_game_id", item.id);
      window.location.href = window.location.origin + "/" + item.slug;
    },
    delete_favor_byID(index) {
      let temp = this.$store.getters["getFavorite"].split(",");
      temp.splice(index, 1);
      this.$store.commit("setFavorite", temp.join(","));
      location.reload();
    },
    async get_favorite() {
      let favorite_store_temp = this.$store.getters["getFavorite"];
      if (favorite_store_temp == "") {
        this.favorite = [];
      } else {
        if (favorite_store_temp) {
          let temp = favorite_store_temp.split(",");
          let response_data_sku = await this.$axios
            .$get(this.apiUrl + "sku?filter=id,in," + favorite_store_temp)
            .then((data) => {
              this.favorite = data.records;
            });
        }
      }
    },
    logout() {
      this.deleteCookie("access_t");
      this.deleteCookie("refresh_t");
      this.get_cart({
        total_price_eu: 0,
        total_price_us: 0,
        cart_items: [],
        total_sale_eu: 0,
        total_sale_us: 0
      })
      localStorage.setItem("card", JSON.stringify({
        total_price_eu: 0,
        total_price_us: 0,
        cart_items: [],
        total_sale_eu: 0,
        total_sale_us: 0
      }));
      localStorage.removeItem("dataAddLayer");
      localStorage.removeItem("dataRemoveLayer");
      window.location.href = window.location.origin;
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
          } else {
            if (data.status == "103") {
              this.result_text_forgot = "User not found";
            } else {
              this.result_text_forgot = "Oops,something wrong";
            }
          }
          this.restor_mail = "";
        });
    },
    async send_login_social(type_s) {
      let response = await this.$axios
        .$post(this.globalApi + "requests.php", {
          method: "user_sn",
          type: type_s,
        })
        .then((data) => {
          window.location.href = data;
        });
    },
    get_cart_format_time(date) {
      let temp = moment(date).format("llll");
      return (
        temp.split(",")[0] +
        " " +
        temp.split(",")[1].split(" ")[2] +
        " " +
        temp.split(",")[1].split(" ")[1]
      );
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
    set_focus_game_div() {
      $(".games__list").focus();
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
            this.body_active();

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

            if (this.$route.path != "/page/login") {
              window.location.reload(true);
            } else {
              window.location.href = window.location.origin;
            }
          }
          this.login_result = data.data.status;
          switch (data.data.status) {
            case "100":
              this.login_result_text = "Oops,something wrong";
              break;
            case "104":
              this.login_result_text =
                "Сheck your email and confirm authorization";
              break;
            case "102":
              this.login_result_text = "Invalid email or password";
              break;
            case "103":
              this.login_result_text = "User not found";
              break;
            case "200":
              this.login_result_text = "Login was successful";
              break;
            case "101 ":
              this.login_result_text = "Please fill in the required fields.";
              break;
            default:
              break;
          }
          this.$forceUpdate();
        });
    },
    getCookie(name) {
      let matches = document.cookie.match(
        new RegExp(
          "(?:^|; )" +
            name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
            "=([^;]*)"
        )
      );
      return matches ? decodeURIComponent(matches[1]) : undefined;
    },
    async check_qookie_for_token() {
      let name = "access_t";
      let name_r = "refresh_t";
      let matches = document.cookie.match(
        new RegExp(
          "(?:^|; )" +
            name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
            "=([^;]*)"
        )
      );
      let temp = matches ? decodeURIComponent(matches[1]) : undefined;

      let matches_r = document.cookie.match(
        new RegExp(
          "(?:^|; )" +
            name_r.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
            "=([^;]*)"
        )
      );
      let temp_r = matches_r ? decodeURIComponent(matches_r[1]) : undefined;
      if (!temp) {
        if (this.getCookie("f_token")) {
          let response_get_cart = this.$axios
            .$get(
              this.apiUrl +
                "carts/" +
                JSON.parse(this.getCookie("f_token")).cart_id
            )
            .then((data) => {
              this.get_cart(data.cart);
            });
        }
      } else {
        let response = await this.$axios
          .post(this.globalApi + "requests.php", {
            access_token: temp,
            req: "1",
            method: "user_auth",
          })
          .then((data) => {
            if (data.data.status == "200") {
              this.$store.commit("setUserLoginCheck", true);
              this.$store.commit("setUserLoginId", temp.split(".")[1]);
              let response = this.$axios
                .get(
                  this.apiUrl +
                    "carts/" +
                    JSON.parse(atob(temp.split(".")[1])).cart_id
                )
                .then((data) => {
                  this.get_cart(data.data.cart);
                  this.get_user();
                  this.get_notifications();
                });
            }
            if (data.data.status == "202") {
              let response = this.$axios
                .post(this.globalApi + "requests.php", {
                  refresh_token: temp_r,
                  req: "r",
                  method: "user_auth",
                })
                .then((data) => {
                  let date_r = new Date(Date.now() + 30 * 86400e3);
                  date_r = date_r.toUTCString();
                  Cookies.remove("access_t");
                  Cookies.remove("refresh_t");
                  Cookies.set("access_t", data.data.jwt, {
                    expires: date_r,
                  });
                  this.setCookie(
                    "refresh_t",
                    JSON.stringify(data.data.refresh),
                    {
                      expires: date_r,
                    }
                  );
                  this.$store.commit("setUserLoginCheck", true);
                  this.$store.commit("setUserLoginId", temp.split(".")[1]);
                  let response = this.$axios
                    .get(
                      this.apiUrl +
                        "carts/" +
                        JSON.parse(atob(data.data.jwt.split(".")[1])).cart_id
                    )
                    .then((data) => {
                      this.get_cart(data.data.cart);
                    });
                  this.get_user();
                  this.get_notifications();
                });
            }
          });
      }
    },
    get_notification_enable(){
      if(Cookies.get('notifications')){
        this.notification_enable = Cookies.get('notifications') == "true" ? true : false;
      }else{
        this.notification_enable = true;
        Cookies.remove("notifications");
        Cookies.set("notifications", true, { expires: 3000 });
      }
    },
    notification_view_change(){
      this.notification_enable = this.notification_enable?false:true;
      Cookies.remove("notifications");
      Cookies.set("notifications", this.notification_enable, { expires: 3000 });
    },
    async get_notifications(){
       let response_notifications = await this.$axios
          .post(this.globalApi + "requests.php", {method: "not_list", "token": this.get_access()})
          .then((data) => {
            if(data.data.notifications){
              this.notifications = data.data.notifications;
              this.get_notification_enable();
            }
            else{
              this.notifications = [];
            }
        });
    },
    async delete_notifications(id){
      let response_notifications = await this.$axios
          .post(this.globalApi + "requests.php",{method: "not_del", "id":id, "token": this.get_access()})
          .then((data) => {
             if(data.data.status == '200'){
                this.get_notifications();
             }
      });
    },
    async send_registraion() {
      this.reg_started = false;
      let form = {};
      form["email"] = this.registration_mail;
      form["password"] = this.registration_password;
      form["check_password"] = this.registration_r_password;
      form["method"] = "user_add";
      if(this.registration_password.length < 6) {
        this.ErrorPass = true
      } else {
        this.ErrorPass = false
      }

      if(!this.ErrorPass) {
        this.UpperPassError = !(/[A-Z]/.test(this.registration_password));
      }

      if (this.registration_password == this.registration_r_password  && !this.ErrorPass && !this.UpperPassError) {
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
          case "102":
            this.result_text = "No such user exists";
            break;
          case "101":
            this.result_text = "Oops,something wrong";
            break;
          case "200":
            this.result_text = "Registration was successful, check your email";
            this.login_pop_up = true;
            this.registration_pop_up = false;
            this.$store.commit("set_global_login_popup_check", true);
            this.$store.commit("set_global_reg_popup_check", false);
            break;
          case "110 ":
            this.result_text =
              "The password must be at least 8 characters long.";
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
    body_set_hidden() {
      document.body.className = "body_pop_up_active";
    },
    body_active() {
      document.body.className = "body_pop_up_disable";
      this.registration_mail = "";
      this.registration_password = "";
      this.registration_r_password = "";
      this.registration_result = "";
      this.result_text = "";
      this.ErrorPass = false;
      this.UpperPassError = false;
      this.reg_started = true;
    },
    async delete_cart_item(index) {
      let cart = {};
      cart["index"] = index;
      if (this.get_access()) {
        cart["userid"] = this.get_access();
      } else {
        cart["userid"] = this.getCookie("f_token");
      }
      cart["method"] = "delete";
      let response_data_sku = await this.$axios
        .$post(this.globalApi + "handlers/cart/cart.php", cart)
        .then((data) => {
          this.$store.commit("setItemInCard", data);
        });
    },
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
    async get_most_popular() {
      let response_data_sku_popular = await this.$axios
        .$get(
          this.apiUrl +
            "sku?include=id,menu_name,slug&filter=id,in," +
            this.get_game_options.Most_popular.join(",")
        )
        .then((data) => {
          this.most_popular = data.records;
        });
    },
    get_refresh() {
      let name_r = "refresh_t";
      let matches_r = document.cookie.match(
        new RegExp(
          "(?:^|; )" +
            name_r.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
            "=([^;]*)"
        )
      );
      let temp_r = matches_r ? decodeURIComponent(matches_r[1]) : undefined;
      return temp_r;
    },
    async get_cart(cart) {
      this.$store.commit("setItemInCard", JSON.parse(cart));
    },
    selected_zone(newValue) {
      this.$store.commit("setSelectedZone", newValue);
    },
    set_cookie(zone) {
      this.deleteCookie("zone");
      let name = "zone";
      let value = zone;
      this.setCookie(name, value);
    },
    getCookie_zone() {
      let name = "zone";
      let matches = document.cookie.match(
        new RegExp(
          "(?:^|; )" +
            name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
            "=([^;]*)"
        )
      );
      this.zone_pick = matches ? decodeURIComponent(matches[1]) : undefined;
      if (this.zone_pick == undefined) {
        this.zone_pick = "us";
      }
      this.$store.commit("setSelectedZone", this.zone_pick);
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
    async get_category() {
      let game_id = this.$store.getters["getGlobalGameId"];
      let response_data = await this.$axios
        .$get(
          this.apiUrl +
            "category?order=ordr,asc&filter=status,eq,1&filter=game,eq," +
            game_id
        )
        .then((data) => {
          this.category = data.records;
          for (let i = 0; i < this.category.length; i++) {
            this.category[i].sub_category = [];
            this.category[i].sub_category_open = false;
            this.category[i].img_button = "img/Down.svg";
            for (let j = 0; j < this.category.length; j++) {
              if (this.category[j].parent == this.category[i].id) {
                this.category[i].sub_category.push(this.category[j]);
              }
            }
          }
          this.category_preload = false;
        });
    },
    open_tab(item) {
      if (item.sub_category_open) {
        item.sub_category_open = false;
        item.img_button = "img/Down.svg";

        this.$forceUpdate();
      } else {
        item.img_button = "img/Up.svg";
        this.$set(item, "sub_category_open", true);
        this.$forceUpdate();
      }
    },
    get_blogs_depth() {
      let path = this.$route.path.split("/");
      if (path.length == 5 && path[2] == "blogs") {
        this.horizontalProgress = true;
      } else {
        this.horizontalProgress = false;
      }
    },
    close_sidebar_f() {
      if (this.close_sidebar) {
        this.close_sidebar = false;
      } else {
        this.close_sidebar = true;
      }
    },
    close_sidebar_m() {
      if (this.close_sidebar_mobile) {
        this.close_sidebar_mobile = false;
      } else {
        this.close_sidebar_mobile = true;
      }
    },
    scroll_to_top() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    scroll_button_v() {
      if (process.client) {
        if (window.pageYOffset > 500) {
          return true;
        } else {
          return false;
        }
      }
    },
  },
};
</script>

