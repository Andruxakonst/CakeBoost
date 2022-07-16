<template>
  <div class="content">
    <breadcrumbs />
    <div class="whyUs">
      <div>
        <h1>
           Why CakeBoost?
        </h1>
        <div data-old="Our advantages"></div>
      </div>
      <div>
        <div class="txtAlignCenter">
          <img width="200px" height="90px" style="object-fit:cover;" src="/CB-purple-bcg.png" alt />
        </div>
        <div
          class="whyUsText"
        >Cakeboost.com, which is a property of GAMES EXPERTS LTD, maintains a high level of international standards providing services in the area of computer games for over 5 years. Our long-term and productive relationships with customers stem from the position of trust and responsibility our team of Pro coaches and career experts adheres to.</div>
        <div class="whyUsItem">
          <h2 class="whyUsTitle">Why you should trust us?</h2>
          <div class="whyUsSubItem">
            <div>
              <img  src="/imgGameLogoPurple/Experience.png" alt />
            </div>
            <div>
              <div> <h3>We have a real location</h3></div>
              <div>
                GAMES EXPERTS LTD, Unit 111356, Group Floor, 30 Bloomsbury Street, London, WC1B 3QJ, The United Kingdom
                <br>
                151 SE 1st St #2408, Miami, FL 33131, USA +1 786-351-1005
              </div>
            </div>
          </div>
          <div class="whyUsSubItem">
            <div>
              <img src="/imgGameLogoPurple/Experience.png" alt />
            </div>
            <div>
              <div> <h3>Experience</h3></div>
              <div>We have more than a 5 year experience in delivering of online services. Our professional coaches and other experts have already earned trust of thousands of customers throughout the world.</div>
            </div>
          </div>
          <div class="whyUsSubItem">
            <div>
              <img src="/imgGameLogoPurple/Security.png" alt />
            </div>
            <div>
              <div> <h3>Security</h3></div>
              <div>As to our privacy policy all personal data that is collected by CakeBoost officials is safely stored. We do not transmit and disclose any of the data obtained. Our coaches, so as the CakeBoost staff have access to such extent of the personal data submitted, that is necessary to operate efficiently.</div>
            </div>
          </div>
          <div class="whyUsSubItem">
            <div>
              <img src="/imgGameLogoPurple/Experience.png" alt />
            </div>
            <div>
              <div> <h3>Affordability</h3></div>
              <div>We constantly monitor the prices for those services represented on our website and compare them with our competitors to uphold our prices at the level most available for our customers.</div>
            </div>
          </div>
        </div>
        <div class="whyUsItem">
          <h2 class="whyUsTitle">Why we are better than competitors?</h2>
          <div class="whyUsSubItem">
            <div>
              <img src="/imgGameLogoPurple/Discount.png" alt />
            </div>
            <div>
              <div> <h3>Bonus and reward system</h3></div>
              <div>In order to be even more affordable, we launch a Bonus & reward system, which is aimed for our notable customers to obtain a lot more benefits than ever before.</div>
            </div>
          </div>
          <div class="whyUsSubItem">
            <div>
              <img src="/imgGameLogoPurple/Support.png" alt />
            </div>
            <div>
              <div> <h3>24/7 customers’ support</h3></div>
              <div>One of our company’s priorities constitutes a convenient and pleasant B2C interaction. That is why we have established the customers’ round-the-clock support with highly qualified experts.</div>
            </div>
          </div>
          <div class="whyUsSubItem">
            <div>
              <img src="/imgGameLogoPurple/Support.png" alt />
            </div>
            <div>
              <div> <h3>Pro gaming coaches</h3></div>
              <div>Our coaches pass through a couple of rounds of severe selection and are career gamers that are always there to help you.</div>
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
      title:'Our advantages | Cakeboost',
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
  data() {
    return {};
  },
  created() {},

  methods: {},
};
</script>
