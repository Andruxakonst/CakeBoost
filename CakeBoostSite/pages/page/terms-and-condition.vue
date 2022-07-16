<template>
  <div class="content">
    <breadcrumbs />

    <div class="termsAndConditions">
      <div>
        <h1>Terms &amp; Conditions</h1>
        <div v-html="content.first_text">
        </div>
      </div>
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
        </ul>
      </div>
      <div class="topicItem" v-html="content.second_text">

      </div>

      <div class="eventsItem attentionDiv">
        <div class="redLine"></div>
        <div class="bannerItemEvents">
          <div>Attention</div>
          <div v-html="content.third_text">

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
      title: "Terms and condition| Cakeboost",
      meta: [
        {
          hid: "description",
          name: "description",
          content: ""
        }
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: this.page.seo_canonical ? this.page.seo_canonical : 'https://cakeboost.com'+this.$route.path
        }
      ],
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
          "pages?filter=slug,eq,terms-and-condition"
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
  mounted(){
      console.log(this.content);
  },
  created() {
    this.attention_block();
  },
  methods: {
    attention_block() {}
  }
};
</script>
