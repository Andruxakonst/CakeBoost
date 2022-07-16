
<template>
  <div class="content">
    <breadcrumbs />
    <div class="topicItem refund_div">
        <h1 style="text-align:center;">
            Refund Policy
        </h1>
      <div v-html="content.content">

      </div>
    </div>
    <div class="eventsItem attentionDiv">
      <div class="redLine"></div>
      <div class="bannerItemEvents">
        <div>Attention</div>
        <div v-html="content.attention">

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
      title:'Refund policy | Cakeboost',
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
  data() {
    return {
    };
  },
  created() {
    this.attention_block();
  },
  async asyncData({ $axios, store, route }) {
    let apiUrl = store.getters["getApiUrl"];
    let content = '';
    let page = '';

    let response_data_content = await $axios
      .$get(
        apiUrl +
          "pages?filter=slug,eq,refund-policy"
      )
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
  data() {
    return {
      content:{},
      page:{},
    };
  },
  methods: {
    attention_block() {}
  }
};
</script>
