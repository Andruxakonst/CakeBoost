<template>
  <div class="content">
    <div class="popUpMask" v-if="popup_terms" v-bind:class="{active_card:popup_terms}">
      <div class="tems_and_conditions">
        <div class="closePopUp">
          <img
            src="/img/Close.svg"
            class="closePopUpImg"
            @click="popup_terms = false,body_active()"
            alt
          />
        </div>
        <!--div class="tems_and_conditions_body topicItem">
          <p>The following terms and conditions govern your access to and use of the Cakeboost platform, including any content, functionality and services offered on or through Cakeboost.com (the "Website"), by GAMES EXPERTS LTD (Company no. 12399019, Unit 111356, Ground Floor, 30 Bloomsbury Street , London, WC1B 3QJ, United Kingdom) and by Individual Entrepreneur Shevyrtalov Ilya Dmitrievich (Taxpayer Identification Number (INN) 645207249901).</p>
          <p>World of Warcraft™ and Blizzard Entertainment™ are registered trademarks of Blizzard Entertainment inc. in the United States and/or other countries. These terms and all related materials, logos, and images are copyright © Blizzard Entertainment. Cakeboost.com is in no way associated with or endorsed by Blizzard Entertainment™. Cakeboost.com is not selling wow ingame items, only offers for you different services and also it increases your ingame skill and gifting you ingame items.</p>
          <p>Cakeboost.com is a website containing information about the Goods and the Seller that allows choosing, ordering and (or) purchasing the Goods.</p>
          <p style="text-align: center;">
            <span style="color: #ff6600;">The rights of the Parties:</span>
          </p>
          <h3>1. The Seller - Cakeboost.com undertakes to:</h3>
          <ul>
            <li>Change the rules of using the website and the website content. (Changes come into force since the moment of publishing a new revision of the Agree-ment at the Website).</li>
            <li>Keep the Customer and his data confidential.</li>
            <li>Avoid changing prices during order fulfilment.</li>
            <li>Provide information during order fulfilment (service status) and inform about any changes in service fulfilment or about unforeseen circumstances.</li>
            <li>Offer a customer to read the website rules to avoid any problems in the future.</li>
            <li>Refund money in strict compliance with the website rules (Refund Policy)</li>
          </ul>
          <h3>2. The Client (Customer) undertakes to:</h3>
          <ul>
            <li>Provide full payment of the services ordered at website Cakeboost.com, for their ful-filment.</li>
            <li>Avoid preventing the performers from fulfilling an ordered service. (Avoid entering a game beforehand, without warning or agreement upon the time).</li>
            <li>Provide complete information requested by operators for order fulfillment (Character name, server, current rating, etc.), and payment information (full name, data of the credit card used for payment) as well.</li>
            <li>Settle all conflict situations by referring to the rules of this website. (In case of a dis-pute, a customer is obliged to apply to the support service; you can find its contact data at a website that provides consultations prior to effecting payment).</li>
          </ul>
          <h3>3. The Client has the right to:</h3>
          <ul>
            <li>Follow order fulfilment (for example, via Twich translation).</li>
            <li>Request money refund in strict compliance with the website rules.</li>
          </ul>
          <h3>4. Return due to incorrect or accidental payment.</h3>
          <p>If you paid a wrong service (not the one you wanted), or payment was duplicated (payment of the same service was effected several times).</p>
          <h3>4.1. Cancellation of a service.</h3>
          <p>If you paid a service but, for some reason, you do not need this very service any more, or you simply changed your mind – refund will be possible before the start of implementation of this service.</p>
          <p>You can also contact the support service to find an alternative or refund your money:</p>
          <ul>
            <li>Skype: Cakeboost.com</li>
            <li>E-mail: Support@cakeboost.com.</li>
          </ul>
          <h3>4.2. Not completed service or emergency.</h3>
          <p>If we did not complete a service for any reason, we can offer an alternative solution of the problem:</p>
          <ul>
            <li>You have the right to cancel your order after the start of the service and ask for a partial refund. In this case, the amount of the refund will be proportional to the volume of the unfinished services.</li>
            <li>Replacement of a service with the other one the cost of which does not exceed the cost of the service already paid (or multiple services).</li>
            <li>In addition, we can complete the service later, if you agree.</li>
            <li>If the service is replaced with a cheaper one, we will refund the difference between the service cost.</li>
            <li>Full refund of the amount if service wasn’t started.</li>
            <li>The Customer has the right to initiate a dispute within 30 days from the date of payment.</li>
            <li>Disagreements and misunderstanding.</li>
          </ul>
          <div class="eventsItem attentionDiv"><div class="redLine"></div> <div class="bannerItemEvents"><div>Attention</div> <div><div>If a service was delayed and completed we do offer some kind of free service but no refund is possible.</div> <div>If a service has been already started, we refund only part of the amount paid.</div> <div>If the service is completed for 100% any kind of compensation is impossible.</div></div></div></div>
        </!--div-->
        <div class="termsAndConditions">
          <div>
            Terms &amp; Conditions
            <div>
              World of Warcraft™ and Blizzard Entertainment™ are registered trademarks of Blizzard Entertainment inc. in the United States and/or other countries. These terms and all related materials, logos, and images are copyright © Blizzard Entertainment.
              <a
                href
              >Cakeboost.com</a> is in no way associated with or endorsed by Blizzard Entertainment™.
              <a
                href
              >Cakeboost.com</a> is not selling wow ingame items, only offers for you different services and also it increases your ingame skill and gifting you ingame items.
              <br />
              <br />
              <a href>Cakeboost.com</a> is a website containing information about the Goods and the Seller that allows choosing, ordering and (or) purchasing the Goods.
            </div>
          </div>

          <div class="termsItem">
            <p id="p1"></p>
            <div>1. The Seller – Cakeboost.com undertakes to:</div>
            <div class="topicItemList">
              <ul>
                <li>
                  <img src="/css/List Point.svg" alt />Change the rules of using the website and the website content. (Changes come into force since the moment of publishing a new revision of the Agree-ment at the Website).
                </li>
                <li>
                  <img src="/css/List Point.svg" alt />Keep the Customer and his data confidential.
                </li>
                <li>
                  <img src="/css/List Point.svg" alt /> Avoid changing prices during order fulfilment.
                </li>
                <li>
                  <img src="/css/List Point.svg" alt /> Provide information during order fulfilment (service status) and inform about any changes in service fulfilment or about unforeseen circumstances.
                </li>
                <li>
                  <img src="/css/List Point.svg" alt /> Offer a customer to read the website rules to avoid any problems in the future.
                </li>
                <li>
                  <img src="/css/List Point.svg" alt /> Refund money in strict compliance with the website rules (Refund Policy)
                </li>
              </ul>
            </div>
          </div>
          <div class="termsItem">
            <p id="p2"></p>
            <div>2. The Client (Customer) undertakes to:</div>
            <div class="topicItemList">
              <ul>
                <li>
                  <img src="/css/List Point.svg" alt />Provide full payment of the services ordered at website Cakeboost.com, for their ful-filment.
                </li>
                <li>
                  <img src="/css/List Point.svg" alt />Avoid preventing the performers from fulfilling an ordered service. (Avoid entering a game beforehand, without warning or agreement upon the time).
                </li>
                <li>
                  <img src="/css/List Point.svg" alt /> Provide complete information requested by operators for order fulfillment (Character name, server, current rating, etc.), and payment information (full name, data of the credit card used for payment) as well.
                </li>
                <li>
                  <img src="/css/List Point.svg" alt />Settle all conflict situations by referring to the rules of this website. (In case of a dis-pute, a customer is obliged to apply to the support service; you can find its contact data at a website that provides consultations prior to effecting payment).
                </li>
              </ul>
            </div>
          </div>
          <div class="termsItem">
            <p id="p3"></p>
            <div>3. The Client has the right to:</div>
            <div class="topicItemList">
              <ul>
                <li>
                  <img src="/css/List Point.svg" alt />Follow order fulfilment (for example, via Twich translation).
                </li>
                <li>
                  <img src="/css/List Point.svg" alt />Request money refund in strict compliance with the website rules.
                </li>
                <li>
                  <img src="/css/List Point.svg" alt /> Use his account if necessary during boosting if he warned operators beforehand that the account would be needed at that time.
                </li>
              </ul>
            </div>
          </div>
          <div class="termsItem">
            <p id="p4"></p>
            <div>4. Return due to incorrect or accidental payment.</div>
            <div
              class="termsItemP"
            >If you paid a wrong service (not the one you wanted), or payment was duplicated (payment of the same service was effected several times).</div>
          </div>
          <div class="termsItem">
            <p id="p4.1"></p>
            <div>4.1. Cancellation of a service.</div>
            <div
              class="termsItemP"
            >If you paid a service but, for some reason, you do not need this very service any more, or you simply changed your mind – refund will be possible before the start of implementation of this service.</div>
            <div
              class="termsItemP"
            >You can also contact the support service to find an alternative or refund your money:</div>
            <div class="topicItemList">
              <ul>
                <li>
                  <img src="/css/List Point.svg" alt />Skype: Cakeboost.com
                </li>
                <li>
                  <img src="/css/List Point.svg" alt />E-mail: Support@cakeboost.com
                </li>
              </ul>
            </div>
          </div>
          <div class="termsItem">
            <p id="p4.2"></p>
            <div>4.2. Cancellation of a service.</div>
            <div
              class="termsItemP"
            >If we did not complete a service for any reason, we can offer an alternative solution of the problem:</div>
            <div class="topicItemList">
              <ul>
                <li>
                  <img src="/css/List Point.svg" alt />Skype: Cakeboost.com
                </li>
                <li>
                  <img src="/css/List Point.svg" alt />You have the right to cancel your order after the start of the service and ask for a partial refund. In this case, the amount of the refund will be proportional to the volume of the unfinished services.
                </li>
                <li>
                  <img src="/css/List Point.svg" alt />Replacement of a service with the other one the cost of which does not exceed the cost of the service already paid (or multiple services).
                </li>
                <li>
                  <img src="/css/List Point.svg" alt />In addition, we can complete the service later, if you agree.
                </li>
                <li>
                  <img src="/css/List Point.svg" alt />If the service is replaced with a cheaper one, we will refund the difference between the service cost.
                </li>
                <li>
                  <img src="/css/List Point.svg" alt />Full refund of the amount if service wasn’t started.
                </li>
                <li>
                  <img src="/css/List Point.svg" alt />The Customer has the right to initiate a dispute within 30 days from the date of payment.
                </li>
                <li>
                  <img src="/css/List Point.svg" alt />Disagreements and misunderstanding.
                </li>
              </ul>
            </div>
          </div>
          <div class="eventsItem attentionDiv">
            <div class="redLine"></div>
            <div class="bannerItemEvents">
              <div>Attention</div>
              <div>
                <div>If a service was delayed and completed we do offer some kind of free service but no refund is possible.</div>
                <div>If a service has been already started, we refund only part of the amount paid.</div>
                <div>If the service is completed for 100% any kind of compensation is impossible.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <breadcrumbs />
    <div class="workUs">
      <div>
        <h1>
          Work with us
        </h1>
        <div>For gamers, who want exchange their Pro-gamint to money</div>
      </div>
      <div class="workUsForm">
        <div v-html="content">

        </div>
        <!-- <div>
          The GAMES EXPERTS LTD (Company, no. 12399019, Unit 11356, Ground Floor, 30 Bloomsburry Street, London, WC1B 3QJ, The United Kingdom) is classified as a coaching company.
          <br>
          Cakeboost maintains a high level of international standards providing services in the area of computer games for over 5 years. Our long-term and productive relationships with customers stem from the position of trust and responsibility and that is exactly what we want our prospective colleagues to adhere to.
          <br>
          We are looking for those, whose minds were once taken by the gaming process and hearts by the true fellowship of coplayers. You will definitely suit our needs in case you are sociable, punctual, responsive professional with an extensive experience.
          <br>
          If you suggest that you are one of us, we are looking forward to see you as the part of the CakeBoost Family!
        </div> -->
        <div>
          <div class="personalInfoWorkUs">
            <div>1. Personal info</div>
            <div class="inputUsForm">
              <div>
                Name
                <span>*</span>
              </div>
              <input v-model="form.name" :class="{errorInput : validation.checkName}" type="text" name id />
            </div>
            <div class="inputUsForm" style="width: 30%;">
              <div>
                Age
                <span>*</span>
              </div>
              <input v-model="form.age" :class="{errorInput : validation.checkAge}" type="text" name id />
            </div>
            <div style="margin-top:32px;">
              <span class="popUpdescr_mask">
                <div class="popUpANswer"></div>
              </span>
              <div
                class="chatForCommunication"
                v-bind:class="{ open_tab_multi: this.openItem, errorInput : validation.checkGame }"
                v-on:click.self="open_tab_multiselect()"
                >
                <div class="moHeader">
                   What games can you boost?

                  <span>*</span>
                  <img
                    alt=""
                    src="/img/Down.svg"
                    v-bind:class="{ list_arrow_up: this.openItem }"
                    v-on:click.self="open_tab_multiselect()"
                  >
                </div>
                <div class="moOptions" @click="choosen_games('heartsone')">
                  <div :class="{active:check_game('heartsone')}">
                    <img src="/img_workform/1_Heartstone-01.svg" alt />
                  </div>
                  <span>Heartstone</span>
                </div>
                <div class="moOptions" @click="choosen_games('overwatch')">
                  <div :class="{active:check_game('overwatch')}">
                    <img src="/img_workform/1_Overwatch-01.svg" alt />
                  </div>
                  <span>Overwatch</span>
                </div>
                <div class="moOptions" @click="choosen_games('apex')">
                  <div :class="{active:check_game('apex')}">
                    <img src="/img_workform/Apex-01.svg" alt />
                  </div>
                  <span>Apex</span>
                </div>
                <div class="moOptions" @click="choosen_games('wow actual')">
                  <div
                    :class="{active:check_game('wow actual')}"
                  >
                    <img src="/img_workform/BFAWow_3.svg" alt />
                  </div>
                  <span>WoW actual</span>
                </div>
                <div class="moOptions" @click="choosen_games('wow classic')">
                  <div
                    :class="{active:check_game('wow classic')}"
                  >
                    <img src="/img_workform/ClassicWow_2-01-01.svg" alt />
                  </div>
                  <span>WoW Classic</span>
                </div>
                <div class="moOptions" @click="choosen_games('destiny 2')">
                  <div :class="{active:check_game('destiny 2')}">
                    <img src="/img_workform/Destiny2_31.svg" alt />
                  </div>
                  <span>Destiny 2</span>
                </div>
                <div class="moOptions" @click="choosen_games('PoE')">
                  <div :class="{active:check_game('PoE')}">
                    <img src="/img_workform/PoE_1-01-1.svg" alt />
                  </div>
                  <span>PoE</span>
                </div>
                <div class="moOptions" @click="choosen_games('Valorant')">
                  <div :class="{active:check_game('Valorant')}">
                    <img src="/img_workform/Valorant-01.svg" alt />
                  </div>
                  <span>Valorant</span>
                </div>
                <div class="moOptions" @click="choosen_games('lol')">
                  <div :class="{active:check_game('lol')}">
                    <img src="/img_workform/Valorant-01.svg" alt />
                  </div>
                  <span>lol</span>
                </div>
                <div class="moOptions" @click="choosen_games('wow shadowlands')">
                  <div
                    :class="{active:check_game('wow shadowlands')}"
                  >
                    <img src="/img_workform/Valorant-01.svg" alt />
                  </div>
                  <span>WoW Shadowlands</span>
                </div>
                <div class="orderInfoFormInput">
                  <div>Experience in games?</div>
                  <textarea v-model="form.games_exp" class="text_exp" type="text" />
                </div>
              </div>
            </div>
            <!-- <div class="chatForCommunication">
              <div>
                What games can you boost?
                <span>*</span>
              </div>
              <div class="chatImg job_form_img">
                <div @click="choosen_games('heartsone')" :class="{active:check_game('heartsone')}">
                  <img src="/img_workform/1_Heartstone-01.svg" alt />
                </div>
                <div @click="choosen_games('overwatch')" :class="{active:check_game('overwatch')}">
                  <img src="/img_workform/1_Overwatch-01.svg" alt />
                </div>
                <div @click="choosen_games('apex')" :class="{active:check_game('apex')}">
                  <img src="/img_workform/Apex-01.svg" alt />
                </div>
                <div
                  @click="choosen_games('wow actual')"
                  :class="{active:check_game('wow actual')}"
                >
                  <img src="/img_workform/BFAWow_3.svg" alt />
                </div>
                <div
                  @click="choosen_games('wow classic')"
                  :class="{active:check_game('wow classic')}"
                >
                  <img src="/img_workform/ClassicWow_2-01-01.svg" alt />
                </div>
                <div @click="choosen_games('destiny 2')" :class="{active:check_game('destiny 2')}">
                  <img src="/img_workform/Destiny2_31.svg" alt />
                </div>
                <div @click="choosen_games('PoE')" :class="{active:check_game('PoE')}">
                  <img src="/img_workform/PoE_1-01-1.svg" alt />
                </div>
                <div @click="choosen_games('Valorant')" :class="{active:check_game('Valorant')}">
                  <img src="/img_workform/Valorant-01.svg" alt />
                </div>
                <div @click="choosen_games('lol')" :class="{active:check_game('lol')}">
                  <img src="/img_workform/Valorant-01.svg" alt />
                </div>
                <div
                  @click="choosen_games('wow shadowlands')"
                  :class="{active:check_game('wow shadowlands')}"
                >
                  <img src="/img_workform/Valorant-01.svg" alt />
                </div>
              </div>
              <div class="orderInfoFormInput">
                <div>Experience in games?</div>
                <textarea v-model="form.games_exp" class="text_exp" type="text" />
              </div>
            </div> -->
            <div class="chatForCommunication" :class="{errorInput : validation.checkChat}">
              <div>Сhat for communication<span>*</span></div>
              <div class="chatImg">
                <div @click="choosen_chat = 'discord'"  :class="{active:choosen_chat == 'discord'}">
                  <img src="/img(ColorSochialLogo)/Discord.svg" alt />
                </div>
                <div @click="choosen_chat = 'skype'" :class="{active:choosen_chat == 'skype'}">
                  <img src="/img(ColorSochialLogo)/Skype.svg" alt />
                </div>
                <div @click="choosen_chat = 'whatsapp'" :class="{active:choosen_chat== 'whatsapp'}">
                  <img src="/img(ColorSochialLogo)/WhatsApp.svg" alt />
                </div>
                <div
                  class="viber"
                  @click="choosen_chat = 'viber'"
                  :class="{active:choosen_chat == 'viber'}"
                >
                  <img src="/img(ColorSochialLogo)/Viber.svg" alt />
                </div>
                <div
                  class="telegram"
                  @click="choosen_chat = 'telegram'"
                  :class="{active:choosen_chat == 'telegram'}"
                >
                  <img src="/img(ColorSochialLogo)/Telegram.svg" alt />
                </div>
              </div>
              <div class="orderInfoFormInput">
                <div>Contact info</div>
                <input v-model="form.chat.discord" placeholder="example#1111" v-if="choosen_chat == 'discord'" type="text" />
                <input v-model="form.chat.skype" v-if="choosen_chat == 'skype'" type="text" />
                <input v-model="form.chat.whatsapp" v-if="choosen_chat == 'whatsapp'" type="number" />
                <input v-model="form.chat.viber" v-if="choosen_chat == 'viber'" type="number" />
                <input v-model="form.chat.telegram" v-if="choosen_chat == 'telegram'" type="text" />
              </div>
            </div>
          </div>
          <div class="experienceWorkUs">
            <div>2. Experience</div>
            <div class="inputUsForm">
              <div>
                Specify which orders you can perform
                <span>*</span>
              </div>
              <input v-model="form.perform_orders" :class="{errorInput : validation.checkOrders}" type="text" name id />
            </div>
            <div class="inputUsForm">
              <div>Link on your armory or screen to character</div>
              <input v-model="form.armory" type="text" name id />
            </div>
            <div class="inputUsForm">
              <div>Is this a permanent job for you?</div>
              <input v-model="form.permanent_job" type="text" name id />
            </div>
            <div class="inputUsForm">
              <div>How did you find us?</div>
              <input v-model="form.how_find" type="text" name id />
            </div>
            <div
              style="margin-top: 8px"
              :class="{
                result_failure: this.sendFormError,
                result_success: this.sendFormSuccess,
              }"
            >
              {{ result_send_form }}
            </div>
            <div class="paymentOptions">
              <!-- <div>
                <div
                  @click="form.r_employer==0?form.r_employer=1:form.r_employer=0"
                  :class="{active_check:form.r_employer == 1}"
                ></div>
                <span class="span_terms_global">
                  <span>Do you consider yourself a responsible employee?</span>
                </span>
              </div> -->

              <div>
                <div
                  @click="form.check_terms = form.check_terms?false:true"
                  :class="{active_check:form.check_terms, errorInput : validation.checkTerms}"
                ></div>
                <span class="span_terms_global">
                  <span>I have read and agree to the website</span>
                  <span
                    @click="popup_terms = true,body_set_hidden()"
                    class="span_terms"
                  >terms and conditions*</span>
                </span>
              </div>
              <button id="buyItem" @click="send_req_for_job()">
                <img src="/img/RightButton.png" alt />
                Send
              </button>
            </div>
          </div>
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
      title:'Work with us | Cakeboost',
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
          href: this.page.seo_canonical ? this.page.seo_canonical : 'https://cakeboost.com'+this.$route.path
        }
      ]
    };
  },
  components: {
    breadcrumbs,
  },
  data() {
    return {
       apiImg: this.$store.getters["getApiImgUrl"],
      apiUrl: this.$store.getters["getApiUrl"],
      globalApi:this.$store.getters["getGlobalApi"],
      choosen_chat: "discord",
      openItem: false,
      result_send_form: '',
      sendFormError: false,
      sendFormSuccess: false,
      validation:{
        checkName: false,
        checkAge: false,
        checkGame: false,
        checkTerms: false,
        checkOrders: false,
        checkChat: false,
      },
      form: {
        chat: {
          discord: "",
          telegram: "",
          whatsapp: "",
          skype: "",
          viber: "",
        },
        choosen_games: [],
        name: "",
        age: "",
        perform_orders: "",
        armory: "",
        permanent_job: "",
        how_find: "",
        check_terms: false,
        r_employer: 0,
        games_exp: "",
        title: "Work with us",
      },
      popup_terms: false,
      content:{},
      page:{}
    };
  },
   async asyncData({ $axios, store, route }) {
    let apiUrl = store.getters["getApiUrl"];
    let content = '';
    let page = '';

    let response_data_content = await $axios
      .$get(
        apiUrl +
          "pages?filter=slug,eq,work-with-us"
      )
      .then((data) => {
        content = data.records[0];
        page = data.records[0];
        content = content.content;
      });
    return {
      content,
      page,
    };
  },

  methods: {
    async send_req_for_job() {

      this.validation.checkChat = this.form.chat[this.choosen_chat] != '' ? false :true
      this.validation.checkName = this.form.name!='' ? false : true
      this.validation.checkAge = this.form.age!='' ? false : true
      this.validation.checkGame = this.form.choosen_games.length > 0 ? false : true
      this.validation.checkTerms = this.form.check_terms ? false : true
      this.validation.checkOrders = this.form.perform_orders!=''? false :true
      // let checkValidation = this.form.check_terms && this.form.name!='' && this.form.age!='' && this.form.choosen_games
      let checkValidation = !this.validation.checkChat && !this.validation.checkName && !this.validation.checkAge && !this.validation.checkGame && !this.validation.checkTerms && !this.validation.checkOrders;
      console.log(this.validation)
      console.log(checkValidation)
      if (checkValidation){//this.check_terms && this.discord_validation() && this.form.name!='' && this.form.age!='' && this.form.choosen_games) {

        let req_job = await this.$axios
          .$post(this.globalApi+"handlers/forms/forms.php", this.form)
          .then((data) => {

            this.sendFormSuccess = true;
            this.sendFormError = false;
            this.result_send_form = 'Form sent successfully';

            document.querySelector("#buyItem").setAttribute("disabled", "disabled")
            document.querySelector("#buyItem").setAttribute("style", "background: #4a4a4a")

            setTimeout(() =>
              (
                document.querySelector("#buyItem").removeAttribute("disabled"),
                document.querySelector("#buyItem").removeAttribute("style")
              ), 3000
            );

          });
      } else {
        this.sendFormSuccess = false;
        this.sendFormError = true;
        this.result_send_form = 'Fill in required fields';
      }
    },
    open_tab_multiselect() {
      console.log(this.openItem)
      if (this.openItem) {
        this.openItem = false;
      } else {
        this.openItem = true;
      }
    },
    discord_validation() {
      if(this.form.chat.discord.split('#')[0] && this.form.chat.discord.split('#')[1] ){
        return true;
      }
      else{
        return false;
      }
    },
    check_game(item) {
      for (let i = 0; i < this.form.choosen_games.length; i++) {
        if (item == this.form.choosen_games[i]) {
          return true;
        }
      }
    },
    choosen_games(item) {
      let check = false;
      let temp_id = 0;
      for (let i = 0; i < this.form.choosen_games.length; i++) {
        if (this.form.choosen_games[i] == item) {
          check = true;
          temp_id = i;
          break;
        }
      }
      if (check) {
        this.form.choosen_games.splice(temp_id, 1);
      } else {
        this.form.choosen_games.push(item);
      }
    },
    body_set_hidden() {
      document.body.className = "body_pop_up_active";
    },
    body_active() {
      document.body.className = "body_pop_up_disable";
      this.registration_mail = "";
      this.registration_result = "";
      this.result_text = "";
    },
  },
};
</script>
