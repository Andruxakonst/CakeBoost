<template>
  <div class="content">
    <breadcrumbs />
    <div class="policyText">
      <div>Privacy Policy</div>
      <div>
        <ul class="policyUl">
           <li v-for="(item,index) in content.inputs" :key="index" style="flex-direction:column;">
             <a :href="'#'+ item.array.link">
              <img src="/img/Ancor Link.png" alt />
               {{index+1}}.  {{item.array.title}}
            </a>
            <a class="level_two_li" v-for="(sub_item,index2) in item.array.subarray" :key="index2" :href="'#'+ sub_item.link">
              <img style="margin-right: 16px;" src="/img/Ancor Link.png" alt />
               {{index+1}}.{{index2+1}}.  {{sub_item.title}}
            </a>
          </li>
          <!-- <li>
            <a href="#p1">
              <img src="/img/Ancor Link.png" alt />

            1. INVIOLABILITY OF YOUR PERSONAL DATA
            </a>
          </li>
          <li>
            <a  href="#p2">
              <img src="/img/Ancor Link.png" alt />

            2. USE OF YOUR PERSONAL DATA
             </a>
          </li>
          <li>
            <a href="#p3">
              <img src="/img/Ancor Link.png" alt />

            3. ACCESS TO YOUR DETAILS
            </a>
          </li>
          <li>
            <a href="#p4">
              <img src="/img/Ancor Link.png" alt />

            4. WHAT PERSONAL DATA CAN ELSE BE ASSEMBLED?
            </a>
          </li>
          <li>
            <a href="#p5">
              <img src="/img/Ancor Link.png" alt />

            5. WHAT IS DOCUMENT PREPARATION AND PRIVACY OF INFORMATION
            </a>
          </li>
          <li>
            <a href="#p6">
              <img src="/img/Ancor Link.png" alt />

            6. ADVERTISING AND THIRD-PARTY SERVICES USAGE
            </a>
          </li> -->
        </ul>
      </div>
      <!-- <p>CakeBoost takes care of the security of our customer accounts. When you purchase any service, you can be sure that we will take a full range of comprehensive measures to ensure your safety. The inviolability of your personal data is our first priority. Below you can find out the details of our Privacy Policy to be 100% confident in each of its aspects.</p>
      <p id="p1"></p>
      <h1>1. INVIOLABILITY OF YOUR PERSONAL DATA</h1>
      <p>CakeBoost uses the 128-bit + encrypted Transport Layer Security (TLS) protocol to convey important information that doesn’t have to get into third parties. The same technology is used by banks, large online stores, IT corporations and even government agencies. This technology provides the most protection for the transmitted data and practically excludes its leakage. After entering our system, only verified CakeBoost employees have limited access to it. Throughout the transaction, the information you provide is protected by our company, so the possibility of transferring your data to third parties is excluded. For this we are responsible to international law, which is why we have made the integrity of our customers’ data our first priority.</p>
      <p id="p2"></p>
      <h1>2. USE OF YOUR PERSONAL DATA</h1>
      <p>Providing some of your personal data is necessary in order for us to be able to provide the best Boosting products and services for you. Basically, your data is used to secure money transaction. Also, some of your data (without providing specific information about you) can be used to compile site statistics (for example, to determine the most commonly used browser prevailing among customers in the home region, etc.), however, only that data is used that doesn’t allow you to be identified: in such cases, we commit ourselves to ensure that you are completely anonymous.</p>
      <p id="p3"></p>
      <h1>3. ACCESS TO YOUR DETAILS</h1>
      <p>Your data will NOT fall into third parties. NOBODY will get access to them. However, please note that in accordance with the law, our company is obliged to share the data you provide only when the request comes from government agencies: for example, in the case of a court order or fraud investigation. In this case, the lawfulness of the request will be repeatedly checked by our lawyers. In other cases, your data will be used exclusively to the least extent necessary to provide high-quality services.</p>
      <p id="p4"></p>
      <h1>4. WHAT PERSONAL DATA CAN ELSE BE ASSEMBLED?</h1>
      <p>As mentioned in the previous paragraph, we use your personal data only to the minimum extent to provide the services you ordered. Finally, CakeBoost would like to clarify what information is required specifically. Usually this is: first and last name, mobile phone and email address, document creation data, as well as payment data for the transaction with which you pay for the provision of services. This data will be stored on our servers until the completion of the order, after which you can make a formal question for their removal. To initiate this process, it is enough to contact our Managers.</p>
      <p id="p5"></p>
      <h1>5. WHAT IS DOCUMENT PREPARATION AND PRIVACY OF INFORMATION</h1>
      <p>This information is necessary for the correct ordering, so you can subsequently receive our Services. In order for the process to proceed correctly, it is necessary for the Client to provide an existing and working email address to which he or she has access. This email address is also used to manage your Cake Account in the future: for example, to change the password, etc. Please note that a mobile phone can NOT be used to restore access to your account! Therefore, we urge you to make sure that the email you use when working with CakeBoost is valid in order to avoid misunderstandings.</p>
      <p id="p6"></p>
      <h1>6. ADVERTISING AND THIRD-PARTY SERVICES USAGE</h1>
      <p>There are a number of third-party services with which we cooperate to ensure the correct operation of the site, advertising and other processes that accompany any large-scale business. In particular, Google Adwords and other advertisement providers allows us to expand our customer base and provide Boosting Services to as many people as possible thanks to special algorithms that adapt to our current user statistics. These services may use cookies and Web beacons to collect anonymous statistical information in order to be able to provide you with an advertisement that will interest you most likely. You can terminate this process if you want: you can change the settings of Google’s, Bing’s, or the Network Advertising Initiative Opt-out at any time.</p>
      <p>CakeBoost also uses the following series of third-party services to ensure the platform works correctly: Google Maps API and the terms of Google’s Privacy Policy, which in no way conflicts with CakeBoost Privacy Policy.</p>
      <p>We hope that the above information answered all your questions in full. If you want to get additional advice or ask any question regarding the security of your data and account, please contact our Managers 24/7.</p> -->
      <div class="topicItem" v-html="content.first_text">

      </div>
    </div>
  </div>
</template>
<script>
import breadcrumbs from "~/components/breadcrumbs.vue";
export default {
  head() {
    return {
      title:'Privacy policy | Cakeboost',
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
    breadcrumbs
  },
  async asyncData({ $axios, store, route }) {
    let apiUrl = store.getters["getApiUrl"];
    let content = '';
    let page = '';

    let response_data_content = await $axios
      .$get(
        apiUrl +
          "pages?filter=slug,eq,privacy-policy"
      )
      .then((data) => {
        content = data.records[0];
        page = data.records[0];
        content = JSON.parse(content.content);
        console.log(content);
      });
    return {
      content,
      page
    };
  },
  data() {
    return {
      content:{}
    };
  },
  created() {},

  methods: {}
};
</script>
