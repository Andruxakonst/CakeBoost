
<template>
  <div class="content">
    <breadcrumbs />
    <div class="topicItem refund_div">
      <h1 style="text-align:center;">Guarantees</h1>
      <div v-html="content">

      </div>
    </div>
  </div>
</template>
<script>
import breadcrumbs from "~/components/breadcrumbs.vue";
export default {
   head() {
    return {
      title:'Guarantees | Cakeboost',
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
  async asyncData({ $axios, store, route }) {
    let apiUrl = store.getters["getApiUrl"];
    let content = '';
    let page = '';

    let response_data_content = await $axios
      .$get(
        apiUrl +
          "pages?filter=slug,eq,guarantees"
      )
      .then((data) => {
        content = data.records[0];
        page = data.records[0];
        content = content.content
        console.log(content);
      });
    return {
      content,
      page
    };
  },
  components: {
    breadcrumbs
  },
  data() {
    return {
      content:''
    };

  },
  created() {
    this.attention_block();
  },

  methods: {
    attention_block() {}
  }
};
</script>
