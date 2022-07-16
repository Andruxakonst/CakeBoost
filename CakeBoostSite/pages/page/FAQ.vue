<template>
  <div class="content">
    <breadcrumbs />
    <div class="FAQitems" v-if="content.length > 0">
      <div>
        <h1>FAQ</h1>
        <div>Frequently Asked Questions</div>
      </div>
      <div class="FAQitem" v-for="content_item in content" :key="content_item">
        <span>{{content_item.title}}</span>
        <div>{{ content_item.desc }}</div>
      </div>
    </div>
    <script v-html="jsonld" name="check-json" type="application/ld+json" />
  </div>
</template>

<script>
import breadcrumbs from "~/components/breadcrumbs.vue";
export default {
  head() {
    return {
      title: (this.page.seo_title != '' ? this.page.seo_title : 'FAQ'),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.page.seo_descr,
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: this.page.seo_canonical ? this.page.seo_canonical : 'https://cakeboost.com'+this.$route.path
        }
      ],
    }
  },
  components: {
    breadcrumbs,
  },
  data() {
    return{
      jsonld: {},
      page: [],
      content: [],
      apiImg: this.$store.getters["getApiImgUrl"],
      globalApi: this.$store.getters["getGlobalApi"],
    }
  },
  async fetch () {
    let apiUrl = this.$store.getters["getApiUrl"];
    let globalApi = this.$store.getters["getGlobalApi"];
    let content = [];
    let jsonld = {};
    let page = [];
    let response_data_game = await this.$axios
      .$get(apiUrl + "pages?filter=id,eq,11")
      .then((data) => {
        if(data){
          page = data.records[0]
          content = JSON.parse(data.records[0].content)
          console.log(data.records[0].content.match('/\/'))
          jsonld = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": content.map(faq_item => {
              return {
                "@type": "Question",
                "name": faq_item.title,
                "text": faq_item.title, 
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq_item.desc,
                }
              }
            })
          }
        }
        //filter=game,eq," + game_id
      },
    );
    
    this.content = content;
    this.page = page;
    this.jsonld = jsonld;
  }
}
</script>