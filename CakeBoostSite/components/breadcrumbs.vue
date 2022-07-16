<template>
  <div class="breadCrumb">
    <ul>
      <li
        v-for="item in this.b_path"
        :key="item.id"
        v-if="!item[2] && item[0] != 'page' && item[0] != 'search'"
      >
        <a v-bind:href="'/wow-boost'" v-if="item[0] == 'wow shadowlands'">
          World of Warcraft
        </a>
        <a v-bind:href="item[1]" v-else>
          {{ replace_sl(item[0]) }}
        </a>
      </li>
      <li v-else-if="item[0] != 'page' && item[0] != 'search'" class="active">
        {{ replace_sl(item[0]) }}
      </li>
    </ul>
    <script v-html="jsonld" name="check-json-breadcrumbs" type="application/ld+json" />
  </div>
</template>
<script>
import Cookies from "js-cookie";
export default {
  head: {
    script: [],
    link: [],
  },
  data() {
    return {
      jsonld: {},
      b_path: [],
      apiUrl: this.$store.getters["getApiUrl"],
    };
  },
  components: {},
  async mounted() {
    await this.get_url();
    console.log(this.b_path)
    this.jsonld = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": this.b_path.map((path, index) => {
        return {
          "@type": "ListItem",
          "position": index,
          "item":
          {
            "@id": path[1],
            "name": path[0]
          }
        }
      })
    };
  },
  created() {},
  methods: {
    async get_url() {
      this.b_path.push(["Home", "/", false]);
      let temp = this.$route.path.split("&");
      let string_path_arr = temp[0].split("/");

      if (string_path_arr[2] == "service") {
        let product_id = this.$route.params.id.split("&");
        let product = "";
        let response_data_sku = await this.$axios
          .$get(
            this.apiUrl +
              "sku?filter=id,eq," +
              product_id[1] +
              "&include=id,slug,category"
          )
          .then((data) => {
            product = data.records[0];
          });
        let category = "";
        let response_data_sku_category = await this.$axios
          .$get(
            this.apiUrl +
              "category?filter=id,eq," +
              product.category +
              "&include=id,slug,parent"
          )
          .then((data) => {
            category = data.records[0];
          });
        if (category.parent == 0) {
          let game_id = Cookies.get("game");
          let game_temp = "";
          let response_games = await this.$axios
            .$get(this.apiUrl + "game/" + game_id)
            .then((data) => {
              game_temp = data.slug;
            });
          string_path_arr = [
            "",
            game_temp,
            "catalog",
            category.slug,
            product.slug,
          ];
        } else {
          let sub_category = "";
          let game_id = Cookies.get("game");
          let game_temp = "";
          let response_games = await this.$axios
            .$get(this.apiUrl + "game/" + game_id)
            .then((data) => {
              game_temp = data.slug;
            });
          let response_data_sku_category = await this.$axios
            .$get(
              this.apiUrl +
                "category?filter=id,eq," +
                category.parent +
                "&include=id,slug,parent"
            )
            .then((data) => {
              sub_category = data.records[0];
            });
          string_path_arr = [
            "",
            game_temp,
            "catalog",
            sub_category.slug,
            category.slug,
            product.slug,
          ];
        }
      }
      let summaru_path = "";
      for (let i = 1; i < string_path_arr.length; i++) {
        if (i != string_path_arr.length - 1) {
          if (i < 2) {
            this.b_path.push([
              string_path_arr[i].replace(/\-/g, " "),
              string_path_arr[i - 1] + "/" + string_path_arr[i],
              false,
            ]);
          } else {
            this.b_path.push([
              string_path_arr[i].replace(/\-/g, " "),
              this.b_path[i - 1][1] + "/" + string_path_arr[i],
              false,
            ]);
          }
        } else {
          this.b_path.push([
            string_path_arr[i].replace(/\-/g, " "),
            string_path_arr[i - 1] + "/" + string_path_arr[i],
            true,
          ]);
        }
      }
      this.b_path = this.b_path.filter(path => path[0] != 'catalog');
    },
    replace_sl(string_temp) {
      string_temp = string_temp.replaceAll("sl ", "SL ");
      string_temp = string_temp.replaceAll(" sl ", " SL ");
      string_temp = string_temp.replaceAll(" sl", " SL");
      return string_temp;
    },
  },
};
</script>
