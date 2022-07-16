<template>
  <error v-if="this.$store.getters['get_show_error']"> </error>
  <div v-else class="content">
    <breadcrumbs />
    <div class="categoryItems">
      <h1 v-if="this.depth == 1">Boosting {{ game_title }} </h1>
      <h1 v-if="this.depth > 1">{{ the_category.title }}</h1>
    </div>
    <div class="mainContent topicItem">
      <!-- <div
        class="moreText"
        v-bind:class="{ moretext_hide: hide_more_info & !is_open_more_info2 & (lengthContent2 || lengthContent)}"
        ref="moreText_ref"
      > -->
        <div v-if="this.depth == 1 && CatalogSettings" v-html="CatalogSettings.main_content"></div>
        <div v-if="this.depth > 1" v-html="the_category.main_content"></div>
       <!--</div>
      <div @click="open_more_info2()" v-if="!is_open_more_info2 & (lengthContent2 || lengthContent)">
        Show more
        <img src="/imgGameLogoPurple/Down.png" alt />
      </div>
      <div @click="open_more_info2()" v-if="is_open_more_info2">
        Show less
        <img src="/imgGameLogoPurple/Down.png" class="down_open" alt />
      </div>       -->
    </div>
    <div class="categoryItemsContainer catalogCategory" style="flex-direction: unset;" v-if="this.depth == 1">
      <div
        v-for="item in this.category"
        :key="item"
        v-if="item.parent == 0"
        class="categoryItem"
      >
        <a
          v-bind:href="
            '/' + $store.getters['getGlobalGame'] + '/catalog/' + item.slug
          "
        >
          <img
            v-if="item.img != ''"
            :src="apiImg + 'category/' + item.img"
            :alt="item.title"
          />
          <img v-else :src="apiImg + 'category/' + item.icon" alt />
        </a>

        <div>
          <a
            v-bind:href="
              '/' + $store.getters['getGlobalGame'] + '/catalog/' + item.slug
            "
            >{{ item.menu_name }}</a
          >
        </div>
      </div>
    </div>
    <div class="categoryItemsContainer catalogCategory" style="flex-direction: unset;" v-if="this.depth == 2">
      <div v-for="item in this.category" :key="item" class="categoryItem">
        <a
          v-bind:href="
            '/' +
            $store.getters['getGlobalGame'] +
            '/catalog/' +
            the_category.slug +
            '/' +
            item.slug
          "
        >
          <img
            v-if="item.img != ''"
            :src="apiImg + 'category/' + item.img"
            :alt="item.title"
          />
          <img v-else :src="apiImg + 'category/' + item.icon" alt />
        </a>
        <div>
          <a
            v-bind:href="
              '/' +
              $store.getters['getGlobalGame'] +
              '/catalog/' +
              the_category.slug +
              '/' +
              item.slug
            "
            >{{ item.menu_name }}</a
          >
        </div>
      </div>
      <div class="bestItem" v-for="item in this.skus" :key="item">
        <div class="bestImg">
          <div>
            <a style="display: block; height: 100%; width: 100%;"
              v-bind:href="
                '/' +
                $store.getters['getGlobalGame'] +
                '/service/' +
                item.slug +
                '&' +
                item.id
              "
            ></a>
          </div>
          <a
            v-bind:href="
              '/' +
              $store.getters['getGlobalGame'] +
              '/service/' +
              item.slug +
              '&' +
              item.id
            "
          >
            <!--
            <div class="catalog_item_img_mask">
              <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                <g id=" Navigation / Arrow-up">
                <rect id="Rectangle" opacity="0.8" x="18.834" y="8.33282" width="3.33333" height="23.3333" rx="1.66667" fill="white"/>
                <path id="Path 94" d="M11.6792 21.178C11.0283 21.8289 9.97301 21.8289 9.32214 21.178C8.67127 20.5271 8.67127 19.4719 9.32214 18.821L19.3221 8.82098C19.9531 8.19002 20.9691 8.16794 21.6269 8.7709L31.6269 17.9376C32.3054 18.5596 32.3512 19.6138 31.7292 20.2924C31.1073 20.9709 30.053 21.0167 29.3744 20.3948L20.5508 12.3064L11.6792 21.178Z" fill="white"/>
                </g>
              </svg>
              <div>View details</div>
            </div> -->
            <img :src="apiImg + 'sku/' + item.image" :alt="item.title" />
          </a>
          <div
            class="bestTime"
            v-if="
              item.salesdate != null && item.sales == 1 && item.sales_2 == 2
            "
          >
            {{ item.sales_time_cedt }}
          </div>
          <div class="container_sale">
            <div
              class="bestSale"
              v-if="item.sales == 1 || item.sales_2 == 1"
              v-bind:class="{
                border_zero_sale:
                  item.sales == item.hot || item.sales_2 == item.hot,
              }"
            >
              {{ item.sales_discount }}% OFF
            </div>
            <div
              class="hot_sales"
              v-bind:class="{
                border_zero_hot:
                  item.sales == item.hot || item.sales_2 == item.hot,
              }"
              v-if="item.hot == 1"
            >
              HOT
            </div>
          </div>
        </div>
        <div class="bestbody">
          <div class="best_item_stars">
            <span v-for="sub_item in item.stars" :key="sub_item">
              <svg v-if="sub_item == 's'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g clip-path="url(#clip0)">
                <path d="M16 5.85932H9.88727L8.00557 -0.00012207L6.11274 5.85932L0 5.8481L4.94363 9.47377L3.0508 15.3332L7.99443 11.7075L12.9381 15.3332L11.0564 9.47377L16 5.85932Z" fill="#00B67A"/>
                <path d="M11.3333 10.5191L10.9274 9.33319L8 11.3332L11.3333 10.5191Z" fill="#005128"/>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="16" height="16" fill="white" transform="translate(0 -0.00012207)"/>
                </clipPath>
                </defs>
              </svg>
                <svg v-if="sub_item == 'n'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 -0.00012207L9.88854 6.11133H16L11.0557 9.88842L12.9443 15.9999L8 12.2228L3.05573 15.9999L4.94427 9.88842L0 6.11133H6.11146L8 -0.00012207Z" fill="#ACAFB0"/>
                </svg>
            </span>
          </div>
          <div class="title">
            <a
              v-bind:href="
                '/' +
                $store.getters['getGlobalGame'] +
                '/service/' +
                item.slug +
                '&' +
                item.id
              "
              v-html="item.menu_name"
            ></a>
          </div>

          <div class="price" v-if="$store.getters['getSelectedZone'] == 'eu'">
            <span v-if="item.price_eur != 0">
              € {{ item.price_eur }}
              <span :class="{small_sku_font:(item.price_eur_sale+''+item.price_eur).split('').length>10}" v-if="item.sales == 1">{{ item.price_eur_sale }}€</span>
              <span :class="{small_sku_font:(item.price_eur_sale2+''+item.price_eur).split('').length>10}"  v-if="item.sales_2 == 1">{{ item.price_eur_sale2 }}€</span>
            </span>
            <span v-else>
              € {{ item.fr_price_eur }}
              <span :class="{small_sku_font:(item.fr_price_eur_sale+''+item.fr_price_eur).split('').length>10}" v-if="item.sales == 1">{{ item.fr_price_eur_sale }}€</span>
              <span :class="{small_sku_font:(item.fr_price_eur_sale2+''+item.fr_price_eur).split('').length>10}"  v-if="item.sales_2 == 1">{{ item.fr_price_eur_sale2 }}€</span>
            </span>
            <div class="BuyNow">
              <a
                v-bind:href="
                  '/' +
                  $store.getters['getGlobalGame'] +
                  '/service/' +
                  item.slug +
                  '&' +
                  item.id
                "
                >
                <!-- View details -->
                Buy Now
                </a
              >
            </div>
          </div>
          <div
            class="price"
            v-else-if="$store.getters['getSelectedZone'] == 'us'"
          >
            <span v-if="item.price_usd != 0">
              $ {{ item.price_usd }}
              <span :class="{small_sku_font:(item.price_usd_sale+''+item.price_usd).split('').length>10}" v-if="item.sales == 1">{{ item.price_usd_sale }}$</span>
              <span :class="{small_sku_font:(item.price_usd_sale2+''+item.price_usd).split('').length>10}" v-if="item.sales_2 == 1">{{ item.price_usd_sale2 }}$</span>

            </span>
            <span v-else>
              $ {{ item.fr_price_usd }}
              <span :class="{small_sku_font:(item.fr_price_usd_sale+''+item.fr_price_usd).split('').length>10}" v-if="item.sales == 1">{{ item.fr_price_usd_sale }}$</span>
              <span :class="{small_sku_font:(item.fr_price_usd_sale2+''+item.fr_price_usd).split('').length>10}" v-if="item.sales_2 == 1">{{ item.fr_price_usd_sale2 }}$</span>
            </span>
            <div class="BuyNow">
              <a
                v-bind:href="
                  '/' +
                  $store.getters['getGlobalGame'] +
                  '/service/' +
                  item.slug +
                  '&' +
                  item.id
                "
                >
                <!-- View details -->
                Buy Now
                </a
              >
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="categoryItemsContainer catalogCategory" style="flex-direction: unset;" v-if="this.depth == 3">
      <div v-for="item in this.category" :key="item" class="categoryItem">
        <a
          v-bind:href="
            '/' +
            $store.getters['getGlobalGame'] +
            '/catalog/' +
            the_category.slug +
            '/' +
            item.slug
          "
        >
          <img
            v-if="item.img != ''"
            :src="apiImg + 'category/' + item.img"
            :alt="item.title"
          />
          <img v-else :src="apiImg + 'category/' + item.icon" alt />
        </a>
        <div>
          <a
            v-bind:href="
              '/' +
              $store.getters['getGlobalGame'] +
              '/catalog/' +
              $route.params.category +
              '/' +
              $route.params.id +
              '/' +
              item.slug
            "
            >{{ item.menu_name }}</a
          >
        </div>
      </div>
      <div class="bestItem" v-for="item in this.skus" :key="item">
        <div class="bestImg">
          <div>
          <a style="display: block; height: 100%; width: 100%;"
            v-bind:href="
              '/' +
              $store.getters['getGlobalGame'] +
              '/service/' +
              item.slug +
              '&' +
              item.id
            "
          ></a>
          </div>
          <a
            v-bind:href="
              '/' +
              $store.getters['getGlobalGame'] +
              '/service/' +
              item.slug +
              '&' +
              item.id
            "
          >
            <!--
            <div class="catalog_item_img_mask">
              <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                <g id=" Navigation / Arrow-up">
                <rect id="Rectangle" opacity="0.8" x="18.834" y="8.33282" width="3.33333" height="23.3333" rx="1.66667" fill="white"/>
                <path id="Path 94" d="M11.6792 21.178C11.0283 21.8289 9.97301 21.8289 9.32214 21.178C8.67127 20.5271 8.67127 19.4719 9.32214 18.821L19.3221 8.82098C19.9531 8.19002 20.9691 8.16794 21.6269 8.7709L31.6269 17.9376C32.3054 18.5596 32.3512 19.6138 31.7292 20.2924C31.1073 20.9709 30.053 21.0167 29.3744 20.3948L20.5508 12.3064L11.6792 21.178Z" fill="white"/>
                </g>
              </svg>
              <div>View details</div>
            </div> -->
            <img :src="apiImg + 'sku/' + item.image" :alt="item.title" />
          </a>
          <div
            class="bestTime"
            v-if="
              item.salesdate != null && item.sales == 1 && item.sales_2 == 2
            "
          >
            {{ item.sales_time_cedt }}
          </div>
          <div class="container_sale">
            <div
              class="bestSale"
              v-if="item.sales == 1 || item.sales_2 == 1"
              v-bind:class="{
                border_zero_sale:
                  item.sales == item.hot || item.sales_2 == item.hot,
              }"
            >
              {{ item.sales_discount }}% OFF
            </div>
            <div
              class="hot_sales"
              v-bind:class="{
                border_zero_hot:
                  item.sales == item.hot || item.sales_2 == item.hot,
              }"
              v-if="item.hot == 1"
            >
              HOT
            </div>
          </div>
        </div>
        <div class="bestbody">
          <div class="best_item_stars">
            <span v-for="sub_item in item.stars" :key="sub_item">
              <svg v-if="sub_item == 's'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g clip-path="url(#clip0)">
                <path d="M16 5.85932H9.88727L8.00557 -0.00012207L6.11274 5.85932L0 5.8481L4.94363 9.47377L3.0508 15.3332L7.99443 11.7075L12.9381 15.3332L11.0564 9.47377L16 5.85932Z" fill="#00B67A"/>
                <path d="M11.3333 10.5191L10.9274 9.33319L8 11.3332L11.3333 10.5191Z" fill="#005128"/>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="16" height="16" fill="white" transform="translate(0 -0.00012207)"/>
                </clipPath>
                </defs>
              </svg>
                <svg v-if="sub_item == 'n'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 -0.00012207L9.88854 6.11133H16L11.0557 9.88842L12.9443 15.9999L8 12.2228L3.05573 15.9999L4.94427 9.88842L0 6.11133H6.11146L8 -0.00012207Z" fill="#ACAFB0"/>
                </svg>
            </span>
          </div>
          <div class="title">
            <a
              v-bind:href="
                '/' +
                $store.getters['getGlobalGame'] +
                '/service/' +
                item.slug +
                '&' +
                item.id
              "
              v-html="item.menu_name"
            ></a>
          </div>
          <div class="price" v-if="$store.getters['getSelectedZone'] == 'eu'">
            <span v-if="item.price_eur != 0">
              € {{ item.price_eur }}
              <span :class="{small_sku_font:(item.price_eur_sale+''+item.price_eur).split('').length>10}" v-if="item.sales == 1">{{ item.price_eur_sale }}€</span>
              <span :class="{small_sku_font:(item.price_eur_sale2+''+item.price_eur).split('').length>10}"  v-if="item.sales_2 == 1">{{ item.price_eur_sale2 }}€</span>
            </span>
            <span v-else>
              € {{ item.fr_price_eur }}
              <span :class="{small_sku_font:(item.fr_price_eur_sale+''+item.fr_price_eur).split('').length>10}" v-if="item.sales == 1">{{ item.fr_price_eur_sale }}€</span>
              <span :class="{small_sku_font:(item.fr_price_eur_sale2+''+item.fr_price_eur).split('').length>10}"  v-if="item.sales_2 == 1">{{ item.fr_price_eur_sale2 }}€</span>
            </span>
            <div class="BuyNow">
              <a
                v-bind:href="
                  '/' +
                  $store.getters['getGlobalGame'] +
                  '/service/' +
                  item.slug +
                  '&' +
                  item.id
                "
                >
                <!-- View details -->
                Buy Now
                </a
              >
            </div>
          </div>
          <div
            class="price"
            v-else-if="$store.getters['getSelectedZone'] == 'us'"
          >
            <span v-if="item.price_usd != 0">
              $ {{ item.price_usd }}
              <span :class="{small_sku_font:(item.price_usd_sale+''+item.price_usd).split('').length>10}" v-if="item.sales == 1">{{ item.price_usd_sale }}$</span>
              <span :class="{small_sku_font:(item.price_usd_sale2+''+item.price_usd).split('').length>10}" v-if="item.sales_2 == 1">{{ item.price_usd_sale2 }}$</span>

            </span>
            <span v-else>
              $ {{ item.fr_price_usd }}
              <span :class="{small_sku_font:(item.fr_price_usd_sale+''+item.fr_price_usd).split('').length>10}" v-if="item.sales == 1">{{ item.fr_price_usd_sale }}$</span>
              <span :class="{small_sku_font:(item.fr_price_usd_sale2+''+item.fr_price_usd).split('').length>10}" v-if="item.sales_2 == 1">{{ item.fr_price_usd_sale2 }}$</span>
            </span>
            <div class="BuyNow">
              <a
                v-bind:href="
                  '/' +
                  $store.getters['getGlobalGame'] +
                  '/service/' +
                  item.slug +
                  '&' +
                  item.id
                "
                >
                <!-- View details -->
                Buy Now
                </a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="categoryItemsContainer catalogCategory" style="flex-direction: unset;" v-if="this.depth == 4">
      <div class="bestItem" v-for="item in this.skus" :key="item">
        <div class="bestImg">
          <div>
            <a style="display: block; height: 100%; width: 100%;"
              v-bind:href="
                '/' +
                $store.getters['getGlobalGame'] +
                '/service/' +
                item.slug +
                '&' +
                item.id
              "
            ></a>
          </div>
          <a
            v-bind:href="
              '/' +
              $store.getters['getGlobalGame'] +
              '/service/' +
              item.slug +
              '&' +
              item.id
            "
          >
            <!--
            <div class="catalog_item_img_mask">
              <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                <g id=" Navigation / Arrow-up">
                <rect id="Rectangle" opacity="0.8" x="18.834" y="8.33282" width="3.33333" height="23.3333" rx="1.66667" fill="white"/>
                <path id="Path 94" d="M11.6792 21.178C11.0283 21.8289 9.97301 21.8289 9.32214 21.178C8.67127 20.5271 8.67127 19.4719 9.32214 18.821L19.3221 8.82098C19.9531 8.19002 20.9691 8.16794 21.6269 8.7709L31.6269 17.9376C32.3054 18.5596 32.3512 19.6138 31.7292 20.2924C31.1073 20.9709 30.053 21.0167 29.3744 20.3948L20.5508 12.3064L11.6792 21.178Z" fill="white"/>
                </g>
              </svg>
              <div>View details</div>
            </div> -->
            <img :src="apiImg + 'sku/' + item.image" :alt="item.title" />
          </a>
          <div
            class="bestTime"
            v-if="
              item.salesdate != null && item.sales == 1 && item.sales_2 == 2
            "
          >
            {{ item.sales_time_cedt }}
          </div>
          <div class="container_sale">
            <div
              class="bestSale"
              v-if="item.sales == 1 || item.sales_2 == 1"
              v-bind:class="{
                border_zero_sale:
                  item.sales == item.hot || item.sales_2 == item.hot,
              }"
            >
              {{ item.sales_discount }}% OFF
            </div>
            <div
              class="hot_sales"
              v-bind:class="{
                border_zero_hot:
                  item.sales == item.hot || item.sales_2 == item.hot,
              }"
              v-if="item.hot == 1"
            >
              HOT
            </div>
          </div>
        </div>
        <div class="best_item_stars">
          <span v-for="sub_item in item.stars" :key="sub_item">
            <svg v-if="sub_item == 's'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g clip-path="url(#clip0)">
                <path d="M16 5.85932H9.88727L8.00557 -0.00012207L6.11274 5.85932L0 5.8481L4.94363 9.47377L3.0508 15.3332L7.99443 11.7075L12.9381 15.3332L11.0564 9.47377L16 5.85932Z" fill="#00B67A"/>
                <path d="M11.3333 10.5191L10.9274 9.33319L8 11.3332L11.3333 10.5191Z" fill="#005128"/>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="16" height="16" fill="white" transform="translate(0 -0.00012207)"/>
                </clipPath>
                </defs>
              </svg>
              <svg v-if="sub_item == 'n'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 -0.00012207L9.88854 6.11133H16L11.0557 9.88842L12.9443 15.9999L8 12.2228L3.05573 15.9999L4.94427 9.88842L0 6.11133H6.11146L8 -0.00012207Z" fill="#ACAFB0"/>
              </svg>
          </span>
        </div>
        <div class="bestbody">
          <div class="best_item_stars">
            <span v-for="sub_item in item.stars" :key="sub_item">
              <svg v-if="sub_item == 's'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g clip-path="url(#clip0)">
                <path d="M16 5.85932H9.88727L8.00557 -0.00012207L6.11274 5.85932L0 5.8481L4.94363 9.47377L3.0508 15.3332L7.99443 11.7075L12.9381 15.3332L11.0564 9.47377L16 5.85932Z" fill="#00B67A"/>
                <path d="M11.3333 10.5191L10.9274 9.33319L8 11.3332L11.3333 10.5191Z" fill="#005128"/>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="16" height="16" fill="white" transform="translate(0 -0.00012207)"/>
                </clipPath>
                </defs>
              </svg>
                <svg v-if="sub_item == 'n'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 -0.00012207L9.88854 6.11133H16L11.0557 9.88842L12.9443 15.9999L8 12.2228L3.05573 15.9999L4.94427 9.88842L0 6.11133H6.11146L8 -0.00012207Z" fill="#ACAFB0"/>
                </svg>
            </span>
          </div>
          <div class="title">
            <a
              v-bind:href="
                '/' +
                $store.getters['getGlobalGame'] +
                '/service/' +
                item.slug +
                '&' +
                item.id
              "
              v-html="item.menu_name"
            ></a>
          </div>
        </div>

         <div class="price" v-if="$store.getters['getSelectedZone'] == 'eu'">
          <span v-if="item.price_eur != 0">
            € {{ item.price_eur }}
            <span :class="{small_sku_font:(item.price_eur_sale+''+item.price_eur).split('').length>10}" v-if="item.sales == 1">{{ item.price_eur_sale }}€</span>
            <span :class="{small_sku_font:(item.price_eur_sale2+''+item.price_eur).split('').length>10}"  v-if="item.sales_2 == 1">{{ item.price_eur_sale2 }}€</span>
          </span>
          <span v-else>
            € {{ item.fr_price_eur }}
            <span :class="{small_sku_font:(item.fr_price_eur_sale+''+item.fr_price_eur).split('').length>10}" v-if="item.sales == 1">{{ item.fr_price_eur_sale }}€</span>
            <span :class="{small_sku_font:(item.fr_price_eur_sale2+''+item.fr_price_eur).split('').length>10}"  v-if="item.sales_2 == 1">{{ item.fr_price_eur_sale2 }}€</span>
          </span>
          <div class="BuyNow">
            <a
              v-bind:href="
                '/' +
                $store.getters['getGlobalGame'] +
                '/service/' +
                item.slug +
                '&' +
                item.id
              "
              >
              <!-- View details -->
              Buy Now
            </a>
          </div>
        </div>
        <div
          class="price"
          v-else-if="$store.getters['getSelectedZone'] == 'us'"
        >
          <span v-if="item.price_usd != 0">
            $ {{ item.price_usd }}
            <span :class="{small_sku_font:(item.price_usd_sale+''+item.price_usd).split('').length>10}" v-if="item.sales == 1">{{ item.price_usd_sale }}$</span>
            <span :class="{small_sku_font:(item.price_usd_sale2+''+item.price_usd).split('').length>10}" v-if="item.sales_2 == 1">{{ item.price_usd_sale2 }}$</span>

          </span>
          <span v-else>
            $ {{ item.fr_price_usd }}
             <span :class="{small_sku_font:(item.fr_price_usd_sale+''+item.fr_price_usd).split('').length>10}" v-if="item.sales == 1">{{ item.fr_price_usd_sale }}$</span>
            <span :class="{small_sku_font:(item.fr_price_usd_sale2+''+item.fr_price_usd).split('').length>10}" v-if="item.sales_2 == 1">{{ item.fr_price_usd_sale2 }}$</span>
          </span>
          <div class="BuyNow">
            <a
              v-bind:href="
                '/' +
                $store.getters['getGlobalGame'] +
                '/service/' +
                item.slug +
                '&' +
                item.id
              "
              >
              <!-- View details -->
              Buy Now
              </a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="moreInfo topicItem" v-if="this.depth == 1 && CatalogSettings" >
      <div class="aboutUsText aboutUs">
        <span></span>
        <div
          class="moreText"
          v-bind:class="{ moretext_hide: hide_more_info & !is_open_more_info2 }"
          ref="moreText_ref"
        >
            <div v-html="CatalogSettings.footer_content"></div>

        </div>
        <div @click="open_more_info2()" v-if="!is_open_more_info2">
          Show more
          <img src="/imgGameLogoPurple/Down.png" alt />
        </div>
        <div @click="open_more_info2()" v-if="is_open_more_info2">
          Show less
          <img src="/imgGameLogoPurple/Down.png" class="down_open" alt />
        </div>
      </div>
    </div>
    <div
      class="moreInfo topicItem"
      v-if="this.depth > 1 && this.the_category.content != ''"
    >
      <div class="aboutUsText aboutUs" v-if="hide_more_info">
        <span></span>
        <!-- <h2>{{ the_category.title }}</h2> -->
        <div
          class="moreText"
          v-bind:class="{ moretext_hide: hide_more_info & !is_open_more_info}"
          ref="moreText_ref"
        >
          <div v-html="the_category.content"></div>
          <div v-if="this.the_category.video" style="margin: 32px 0">
            <iframe
              width="100%"
              height="450"
              :src="'https://www.youtube.com/embed/' + this.the_category.video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div @click="open_more_info()" v-if="!is_open_more_info">
          Show more
          <img src="/imgGameLogoPurple/Down.png" alt />
        </div>
        <div @click="open_more_info()" v-if="is_open_more_info">
          Show less
          <img src="/imgGameLogoPurple/Down.png" class="down_open" alt />
        </div>

      </div>
      <div class="aboutUsText aboutUs" v-else>
        <h1>{{ the_category.title }}</h1>
        <div class="moreText" ref="moreText_ref">
          <div v-html="the_category.content"></div>
          <div v-if="this.the_category.video" style="margin: 32px 0">
            <iframe
              width="100%"
              height="450"
              :src="'https://www.youtube.com/embed/' + this.the_category.video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    <script v-html="jsonld" name="check-json-catalog" type="application/ld+json" />
  </div>
</template>
<script>
import breadcrumbs from "~/components/breadcrumbs.vue";
import moment from "moment";
import momenttz from "moment-timezone";
import error from "~/components/404.vue";
export default {
  head() {
    return {
      //title: this.the_category.seo_title,
      title: this.the_category.seo_title
        ? this.the_category.seo_title
        : this.the_category.title
        ? this.the_category.title + " | Cakeboost"
        : this.CatalogSettings
        ? this.CatalogSettings.seo_titleCatalog
        : "Catalog | Cakeboost",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.the_category.seo_descr
            ? this.the_category.seo_descr
            : this.CatalogSettings
            ? this.CatalogSettings.seo_descrCatalog
            : "",
        },
        {
          hid: "robots",
          name: "robots",
          content: this.depth === 1 ? "noindex, follow" : "max-image-preview:large, index, follow, max-snippet:-1, max-video-preview:-1"
        },
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: this.the_category.seo_canonical
            ? this.the_category.seo_canonical
            : this.CatalogSettings
            ? this.CatalogSettings.seo_canonicalCatalog || 'https://cakeboost.com'+this.$route.path
            : "",
        },
      ]
    };
  },
  components: {
    breadcrumbs,
    error,
  },
  data() {
    return {
      depth: 0,
      category: [],
      the_category: "",
      game: [],
      skus: [],
      apiImg: this.$store.getters["getApiImgUrl"],
      hide_more_info: false,
      lengthContent: false,
      lengthContent2: false,
      is_open_more_info: false,
      is_open_more_info2: false,
      apiUrl: this.$store.getters["getApiUrl"],
      jsonld: {
        "@context": "https://schema.org",
        "@graph": []
      }
    };
  },
  mounted() {
    this.get_more_info_height(), this.set_salestime_skus();
  },
  async asyncData({ $axios, route, store, redirect, res }) {
    try {
      let depth = 0;
      let apiUrl = store.getters["getApiUrl"];
      let apiImg = store.getters["getApiImgUrl"];
      let category = [];
      let the_category = "";
      let lengthContent = false;
      let lengthContent2 = false;
      let skus = [];
      let game_id = 1;
      let game_title = '';
      let CatalogSettings = [];
      let jsonld = {
        "@context": "https://schema.org",
        "@graph": []
      };

      let response_data = await $axios
        .$get(
          apiUrl + "game?filter=slug,eq," + route.params.game
        )
        .then((data) => {
          game_id = data.records[0].id;
          game_title = data.records[0].title;
          CatalogSettings = JSON.parse(data.records[0].catalog_content)
        });
      if (route.path.split("/").length == 3) {
        depth = 1;
        let response_data = await $axios
          .$get(
            apiUrl +
              "category?order=ordr,asc&filter=status,eq,1&filter=game,eq," +
              game_id
          )
          .then((data) => {
            category = data.records;
            for (let i = 0; i < category.length; i++) {
              if (category[i].parent == 0) {
                category[i].sub_category = [];
                for (let j = 0; j < category.length; j++) {
                  if (category[j].parent == category[i].id) {
                    category[i].sub_category.push(category[j]);
                  }
                }
              }
            }
          });
        if(CatalogSettings){
          if(CatalogSettings.main_content.length > 2000){
            lengthContent2 = true
          }  else {
            lengthContent2 = false
          }
        }
      }
      if (route.path.split("/").length == 4) {
        let category_name = route.params.category;
        depth = 2;
        // let urlCount = route.path.split("/").find(item => item == category_name).length
        // if(urlCount < 2){
          let response_data = await $axios
            .$get(
              apiUrl +
                "category?order=ordr,asc&filter=parent,eq,0&filter=status,eq,1&filter=slug,eq," +
                category_name +
                "&filter=game,eq," +
                game_id
            )
            .then((data) => {
              the_category = data.records[0];
            });
          let response_data_c = await $axios
            .$get(
              apiUrl +
                "category?order=ordr,asc&filter=status,eq,1&filter=parent,eq," +
                the_category.id +
                "&filter=game,eq," +
                game_id
            )
            .then((data) => {
              category = data.records;
            });
          let response_data_sku = await $axios
            .$get(
              apiUrl +
                "sku?order=ordr,asc&filter=category,eq," +
                the_category.id +
                "&filter=status,eq,1" +
                "&filter=game,eq," +
                game_id
            )
            .then((data) => {
              skus = data.records;
              for (let i = 0; i < skus.length; i++) {
                skus[i].stars = [];
                if (skus[i].gl_rating == 0) {
                  skus[i].stars = ["n", "n", "n", "n", "n"];
                } else {
                  for (let j = 0; j < skus[i].gl_rating; j++) {
                    skus[i].stars.push("s");
                  }
                  for (let j = 0; j < Math.floor(5 - skus[i].gl_rating); j++) {
                    skus[i].stars.push("n");
                  }
                }
              }
            });
          lengthContent2 = false
          if(the_category.main_content){
            if(the_category.main_content.length > 2000){
              lengthContent = true
            }  else {
              lengthContent = false
            }
          }
        // } else {
        //   res.statusCode = 404;
        //   store.commit("set_show_error", true);
        // }
      }
      if (route.path.split("/").length == 5) {
        let category_name = route.params.id;
        depth = 3;
        let urlCount = route.path.split("/").filter(item => item == category_name).length
        if(urlCount < 2){
          let response_data = await $axios
            .$get(
              apiUrl +
                "category?order=ordr,asc&filter=status,eq,1&filter=parent,neq,0&filter=slug,eq," +
                encodeURIComponent(category_name) +
                "&filter=game,eq," +
                game_id
            )
            .then((data) => {
                the_category = data.records[0];
            });
          let response_data_c = await $axios
            .$get(
              apiUrl +
                "category?order=ordr,asc&filter=status,eq,1&filter=parent,eq," +
                the_category.id +
                "&filter=game,eq," +
                game_id
            )
            .then((data) => {
              category = data.records;
            });
          let response_data_sku = await $axios
            .$get(
              apiUrl +
                "sku?order=ordr,asc&filter=category,eq," +
                the_category.id +
                "&filter=status,eq,1" +
                "&filter=game,eq," +
                game_id
            )
            .then((data) => {
              skus = data.records;
              for (let i = 0; i < skus.length; i++) {
                skus[i].stars = [];
                if (skus[i].gl_rating == 0) {
                  skus[i].stars = ["n", "n", "n", "n", "n"];
                } else {
                  for (let j = 0; j < skus[i].gl_rating; j++) {
                    skus[i].stars.push("s");
                  }
                  for (let j = 0; j < Math.floor(5 - skus[i].gl_rating); j++) {
                    skus[i].stars.push("n");
                  }
                }
              }
            });
              lengthContent2 = false
          if(the_category.main_content){
            if(the_category.main_content.length > 2000){
              lengthContent = true
            }  else {
              lengthContent = false
            }
          }
        } else {
          res.statusCode = 404;
          store.commit("set_show_error", true);
        }
      }
      if (route.path.split("/").length == 6) {
        let category_name = route.params.sub_id;
        depth = 4;
        // let urlCount = route.path.split("/").find(item => item == category_name).length
        // if(urlCount < 2){
          let response_data = await $axios
            .$get(
              apiUrl +
                "category?order=ordr,asc&filter=status,eq,1&filter=slug,eq," +
                category_name +
                "&filter=game,eq," +
                game_id
            )
            .then((data) => {
              the_category = data.records[0];
            });
          let response_data_sku = await $axios
            .$get(
              apiUrl +
                "sku?order=ordr,asc&filter=category,eq," +
                the_category.id +
                "&filter=status,eq,1" +
                "&filter=game,eq," +
                game_id
            )
            .then((data) => {
              skus = data.records;
              for (let i = 0; i < skus[i].length; i++) {
                skus[i].stars = [];
                if (skus[i].gl_rating == 0) {
                  skus[i].stars = ["n", "n", "n", "n", "n"];
                } else {
                  for (let j = 0; j < skus[i].gl_rating; j++) {
                    skus[i].stars.push("s");
                  }
                  for (let j = 0; j < Math.floor(5 - skus[i].gl_rating); j++) {
                    skus[i].stars.push("n");
                  }
                }
              }
            });
              lengthContent2 = false
          if(the_category.main_content){
            if(the_category.main_content.length > 2000){
              lengthContent = true
            }  else {
              lengthContent = false
            }
          }
        // } else {
        //   res.statusCode = 404;
        //   store.commit("set_show_error", true);
        // }
      }
      
      try {
        skus.map((product) => {
          jsonld["@graph"].push({          
            "@context": "https://schema.org",
            "@type": "Product",
            "description": product.seo_descr,
            "name": product.title,
            "image": apiImg + 'sku/' + product.image,
            "brand": "Cakeboost",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "price": product.fr_price_usd,
              "priceCurrency": "USD"
            }})
        })
      } catch (e) {
        console.log("SKUS FAIL")
      }
      return {
        depth,
        apiUrl,
        category,
        CatalogSettings,
        lengthContent,
        lengthContent2,
        the_category,
        game_title,
        skus,
        jsonld
      };
    } catch (error) {
      res.statusCode = 404;
      store.commit("set_show_error", true);
    }
  },
  methods: {
    set_salestime_skus() {
      let berlin_m = moment().tz("Europe/Berlin").format("YYYY-MM-DD HH:mm:ss");
      for (let i = 0; i < this.skus.length; i++) {
        let temp_cedt = moment.duration(
          moment(this.skus[i].salesdate + " 23:59:59").diff(moment(berlin_m))
        );
        if (temp_cedt.valueOf() > 0) {
          this.skus[i].sales_time_cedt =
            temp_cedt.days() +
            "d " +
            temp_cedt.hours() +
            "h " +
            temp_cedt.minutes() +
            "m";
        } else {
          this.skus[i].sales_time_cedt = null;
        }
      }
    },
    open_more_info() {
      if (!this.is_open_more_info) {
        this.is_open_more_info = true;
      } else {
        this.is_open_more_info = false;
      }
    },
    open_more_info2() {
      if (!this.is_open_more_info2) {
        this.is_open_more_info2 = true;
      } else {
        this.is_open_more_info2 = false;
      }
    },
    get_more_info_height() {
      if (this.depth > 1) {
        if (this.$refs.moreText_ref) {
          let height = this.$refs.moreText_ref.clientHeight;
          if (height > 140) {
            this.hide_more_info = true;
          }
        }
      } else {
        this.hide_more_info = true;
      }
    },
    async get_category() {
      let response_data = await this.$axios
        .$get(this.apiUrl + "category")
        .then((data) => {
          this.category = data.records;
          for (let i = 0; i < this.category.length; i++) {
            if (this.category[i].parent == 0) {
              this.category[i].sub_category = [];
              for (let j = 0; j < this.category.length; j++) {
                if (this.category[j].parent == this.category[i].id) {
                  this.category[i].sub_category.push(this.category[j]);
                }
              }
            }
          }
        });
    },
    async get_catalog_depth() {
      if (this.$route.path.split("/").length == 3) {
        this.depth = 1;
        this.get_category();
      }
      if (this.$route.path.split("/").length == 4) {
        let category_name = this.$route.params.category;
        this.depth = 2;
        let response_data = await this.$axios
          .$get(
            this.apiUrl +
              "category?filter=slug,eq," +
              category_name +
              "&filter=status,eq,1"
          )
          .then((data) => {
            this.the_category = data.records[0];
          });
        let response_data_c = await this.$axios
          .$get(
            this.apiUrl +
              "category?filter=parent,eq," +
              this.the_category.id +
              "&filter=status,eq,1"
          )
          .then((data) => {
            this.category = data.records;
          });
        let response_data_sku = await this.$axios
          .$get(
            this.apiUrl +
              "sku?filter=category,eq," +
              this.the_category.id +
              "&filter=status,eq,1&order=ordr,asc"
          )
          .then((data) => {
            this.skus = data.records;
            for (let i = 0; i < this.skus.length; i++) {
              this.skus[i].stars = [];
              if (this.skus[i].gl_rating == 0) {
                this.skus[i].stars = ["n", "n", "n", "n", "n"];
              } else {
                for (let j = 0; j < this.skus[i].gl_rating; j++) {
                  this.skus[i].stars.push("s");
                }
                for (
                  let j = 0;
                  j < Math.floor(5 - this.skus[i].gl_rating);
                  j++
                ) {
                  this.skus[i].stars.push("n");
                }
              }
            }
          });
      }
      if (this.$route.path.split("/").length == 5) {
        let category_name = this.$route.params.id;
        this.depth = 3;
        let response_data = await this.$axios
          .$get(this.apiUrl + "category?filter=slug,eq,")
          .then((data) => {
            this.the_category = data.records[0];
          });
        let response_data_sku = await this.$axios
          .$get(
            this.apiUrl +
              "sku?filter=category,eq," +
              this.the_category.id +
              "&filter=status,eq,1&order=ordr,asc"
          )
          .then((data) => {
            this.skus = data.records;
            for (let i = 0; i < this.skus.length; i++) {
              this.skus[i].stars = [];
              if (this.skus[i].gl_rating == 0) {
                this.skus[i].stars = ["n", "n", "n", "n", "n"];
              } else {
                for (let j = 0; j < this.skus[i].gl_rating; j++) {
                  this.skus[i].stars.push("s");
                }
                for (
                  let j = 0;
                  j < Math.floor(5 - this.skus[i].gl_rating);
                  j++
                ) {
                  this.skus[i].stars.push("n");
                }
              }
            }
          });
      }
      this.get_more_info_height();
    },
  },
};
</script>
