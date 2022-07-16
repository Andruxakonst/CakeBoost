<template>
  <error v-if="this.$store.getters['get_show_error']"> </error>
  <div v-else class="content">
    <div class="popUpMask" v-if="if_buy" v-bind:class="{ active_card: if_buy }">
      <div
        class="addItemToCard"
        v-if="if_buy"
        v-bind:class="{ active_card_popup: if_buy }"
      >
        <div class="closePopUp">
          <svg class="closePopUpImg" @click="(if_buy = false), body_active(), (blocked_buy_button = false)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13.6565 2.34326L2.34277 13.657M13.6565 13.657L2.34277 2.34326" stroke="#ACAFB0" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <div>
          <div>Your order successfully added into cart</div>
          <div v-html="product.title"></div>
          <div>
            <div>
              <img :src="apiImg + 'sku/' + product.image" :alt="product.title" />
            </div>
            <div>
              <div v-if="$store.getters['getCard'].cart_items.length > 1">
                There are
                {{ this.$store.getters["getCard"].cart_items.length }} items in
                your cart
              </div>
              <div v-else>
                There is
                {{ this.$store.getters["getCard"].cart_items.length }} item in
                your cart
              </div>
              <div>
                <span>Cart total:</span>
                <span v-if="$store.getters['getSelectedZone'] == 'us' "
                  >{{ this.$store.getters["getCard"].total_price_us }}$</span
                >
                <span v-if="$store.getters['getSelectedZone'] == 'eu'"
                  >{{ this.$store.getters["getCard"].total_price_eu }}€</span
                >
              </div>
              <a
                id="popUpBuyButtonWhite"
                style="
                  display: block;
                  text-align: center;
                  text-decoration: none;
                "
                href="/page/make-an-order"
                >View cart</a
              >
              <button
                id="popUpBuyButtonWhite"
                @click="
                  (if_buy = false), body_active(), (blocked_buy_button = false)
                "
              >
                Continue shopping
              </button>
              <div class="Mobile" v-if="settings && !this.$store.getters['getUserLoginCheck'].user_check_login" v-html="settings.Purchase_mobile"></div>
              <!-- <button
                id="popUpBuyButtonPurple"
                @click="
                  $store.commit('set_edit_sku_popup', true),
                    $store.commit('set_edit_sku_id', product.id),
                    $store.commit(
                      'set_edit_sku_index',
                      $store.getters['getCard'].cart_items.length - 1
                    ),
                    (cart_m_window = false),
                    (if_buy = false),
                    (blocked_buy_button = false),
                    body_active()
                "
              >
                Express check-out
              </button> -->
            </div>
          </div>
          <div class="Desktop" v-if="settings && !this.$store.getters['getUserLoginCheck'].user_check_login" v-html="settings.Purchase_Desctop"></div>
           <a
            id="popUpBuyButtonWhite"
            style="
              display: block;
              text-align: center;
              text-decoration: none;
              width: 50%;
              margin: 8px auto;
            "
            v-if="!this.$store.getters['getUserLoginCheck'].user_check_login"
            href="/page/signup"
            >Registration</a
          >
          <div class="referalLink" style="text-align: center;" v-if="!this.$store.getters['getUserLoginCheck'].user_check_login">
            <a href="/page/bonus-and-referal"
              >Learn more about Reward Program</a
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="popUpMask"
      v-if="reviews_pop_up"
      v-bind:class="{ active_card: reviews_pop_up }"
    >
      <div class="leaveReviewPopUp">
        <div class="closePopUp">
          <svg class="closePopUpImg" @click="(reviews_pop_up = false), body_active()" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13.6565 2.34326L2.34277 13.657M13.6565 13.657L2.34277 2.34326" stroke="#ACAFB0" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="logPopUpBody">
          <div>Leave a review</div>
          <div class="rewPopUpUnderTitle">
            Choose you order by number and date
          </div>
          <div class="rewiewOptionPiker" @click.self="open_rev_order = true">
            <span>{{ review.order }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 3L4 6L7 3" stroke="#595E61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <div class="reviews_orders_list" v-if="open_rev_order">
              <div
                v-for="item in this.orders"
                :key="item.id"
                v-if="item.temp_check && item.trash != 1"
                @click="
                  (open_rev_order = false),
                    (review.order = item.id),
                    (review.item = '-'),
                    (open_rev_order_temp = true),
                    init_sku_list(item)
                "
              >
                {{ item.id }} - {{ item.date }}
              </div>
            </div>
          </div>
          <div v-if="open_rev_order_temp" class="rewPopUpUnderTitle">
            Choose the service in order
          </div>
          <div v-if="open_rev_order_temp" class="rewiewOptionPiker">
            <span v-html="product.title"></span>
            <div class="reviews_orders_list" v-if="open_rev_item">
              <div
                v-for="item in this.items.cart_items"
                v-html="item.product.title"
                :key="item"
                @click="
                  (open_rev_item = false),
                    (review.item = item.product.title),
                    (review.skuid = item.product.id)
                "
              ></div>
            </div>
          </div>
          <div class="rewPopUpUnderTitle">Your review</div>
          <textarea
            v-model="text"
            name
            id
            cols="30"
            rows="10"
            placeholder="How fast was the service? Were the operators friendly? Do you like the results?"
          ></textarea>
          <div class="reviewWordCounter">{{ word_count }}/2000</div>
          <div class="reviewsRate">
            <div>How do you like it?</div>
            <span>
              <svg v-for="index in 5" :key="index" @click="review.rating = index" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11.4958 1.36674C11.6545 0.877754 12.3455 0.877754 12.5042 1.36674L14.7375 8.24817C14.8085 8.46685 15.012 8.61491 15.2417 8.61491H22.4689C22.9824 8.61491 23.1959 9.27283 22.7805 9.57504L16.9336 13.828C16.7478 13.9632 16.67 14.2027 16.741 14.4214L18.9743 21.3028C19.133 21.7918 18.574 22.1984 18.1585 21.8962L12.3116 17.6433C12.1258 17.5081 11.8742 17.5081 11.6884 17.6433L5.8415 21.8962C5.42603 22.1984 4.86701 21.7918 5.02571 21.3028L7.25903 14.4214C7.33 14.2027 7.25225 13.9632 7.06644 13.828L1.21954 9.57504C0.804073 9.27283 1.0176 8.61491 1.53115 8.61491H8.75831C8.98798 8.61491 9.19153 8.46685 9.2625 8.24817L11.4958 1.36674Z" fill="#ACAFB0"/>
              </svg>
            </span>
            <span>
              <svg v-for="index in review.rating" :key="index" @click="review.rating = index" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M24 8.78917H14.8309L12.0084 0L9.1691 8.78917L0 8.77233L7.41545 14.2108L4.5762 23L11.9916 17.5615L19.4071 23L16.5846 14.2108L24 8.78917Z" fill="#00B67A"/>
                <path d="M17 15.7789L16.391 14L12 17L17 15.7789Z" fill="#005128"/>
              </svg>
            </span>
          </div>
          <button @click="send_review()" id="popUpLeaveReview">
            Leave a review
          </button>
        </div>
      </div>
    </div>
    <breadcrumbs />

    <div v-if="!isMobile" class="mobileItemTitle">
      <h1 class="title" v-html="product.title"></h1>
    </div>
    <div class="itemPageHeaer ">
      <!-- <script type="application/ld+json">
        {
          "@context": "https://schema.org/",
          "@type": "Product",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "{{ product.gl_rating }}",
            "reviewCount": "{{ rev_result }}"
          },
          "description": "{{ product.seo_descr }}",
          "name": "{{ product.title }}",
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "price": "{{ product.fr_price_usd }}",
            "priceCurrency": "USD"
          }
        }
      </script>
      <script type="application/ld+json" v-html="our_sku_json">

      </script> -->
      <div class="sliderPhoto">
        <div class="container_sale" >
          <div
            class="bestSale"
            style="border-radius: 0;"
            v-if="product.sales == 1 || product.sales_2 == 1"
            v-bind:class="{
              border_zero_sale:
                product.sales == product.hot || product.sales_2 == product.hot,
            }"
          >
            {{ product.sales_discount }}% OFF
          </div>
          <div
            class="hot_sales"
            v-bind:class="{
              border_zero_hot:
                product.sales == product.hot || product.sales_2 == product.hot,
            }"
            v-if="product.hot == 1"
          >
            HOT
          </div>
        </div>
        <div class="mainPhoto">
          <a
            data-fancybox="gallery"
            v-bind:href="apiImg + 'sku/' + product.image"
          >
            <img :src="apiImg + 'sku/' + product.image" :alt="product.title" />
          </a>
        </div>
        <div
          class="swiper-container"
          v-if="product.images != 'test' || product.youtube != ''"
        >
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-if="product.youtube != ''">
              <a
                data-fancybox
                v-bind:href="
                  'https://www.youtube.com/watch?v=' + this.product.youtube
                "
              >
                <img
                  :src="
                    'https://img.youtube.com/vi/' +
                    this.product.youtube +
                    '/default.jpg'
                  "
                  alt
                />
                <svg class="play_button" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <g clip-path="url(#clip0)">
                  <path d="M35.7131 18.6976C36.7208 19.2735 36.7208 20.7265 35.7131 21.3024L6.74421 37.856C5.74423 38.4274 4.5 37.7054 4.5 36.5536L4.5 3.44636C4.5 2.29462 5.74422 1.57257 6.74421 2.14399L35.7131 18.6976Z" fill="white" stroke="#ACAFB0"/>
                  </g>
                  <defs>
                  <clipPath id="clip0">
                  <rect width="40" height="40" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
            <div
              class="swiper-slide"
              v-if="gallery != ''"
              v-for="item in this.gallery"
              :key="item"
            >
              <a
                data-fancybox="gallery"
                v-bind:href="apiImg + 'images_sku/' + item"
              >
                <img :src="apiImg + 'images_sku/' + item" alt />
              </a>
            </div>
          </div>
          <span
            class="swiper-ftification"
            aria-live="assertive"
            aria-atomic="true"
          ></span>
        </div>
        <div class="shareLogo">
          <div>
            <a href="https://www.facebook.com/CakeGamesExp/">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M13.1399 22.9999V12.9646H16.383L16.8686 9.05373H13.1399V6.55673C13.1399 5.42446 13.4426 4.65275 15.0061 4.65275L17 4.65179V1.15394C16.655 1.10645 15.4715 1 14.0945 1C11.2197 1 9.25153 2.8225 9.25153 6.1696V9.05383H6V12.9647H9.25143V23L13.1399 22.9999Z" fill="#4064AD"/>
              </svg>
            </a>
            <!--a href="google.com">
            <img src="/img(ColorSochialLogo)/Google Color.svg" alt />
            </!--a-->
            <a
              style="cursor: pointer"
              @click="$store.commit('set_contact_us_discord', true)"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9.85562 10.3623C9.20012 10.3623 8.68262 10.9373 8.68262 11.6388C8.68262 12.3403 9.21162 12.9153 9.85562 12.9153C10.5111 12.9153 11.0286 12.3403 11.0286 11.6388C11.0401 10.9373 10.5111 10.3623 9.85562 10.3623ZM14.0531 10.3623C13.3976 10.3623 12.8801 10.9373 12.8801 11.6388C12.8801 12.3403 13.4091 12.9153 14.0531 12.9153C14.7086 12.9153 15.2261 12.3403 15.2261 11.6388C15.2261 10.9373 14.7086 10.3623 14.0531 10.3623Z" fill="#7289DA"/>
                <path d="M19.6425 0.713867H4.2325C2.933 0.713867 1.875 1.77187 1.875 3.08287V18.6309C1.875 19.9419 2.933 20.9999 4.2325 20.9999H17.2735L16.664 18.8724L18.136 20.2409L19.5275 21.5289L22 23.7139V3.08287C22 1.77187 20.942 0.713867 19.6425 0.713867ZM15.2035 15.7329C15.2035 15.7329 14.7895 15.2384 14.4445 14.8014C15.951 14.3759 16.526 13.4329 16.526 13.4329C16.0545 13.7434 15.606 13.9619 15.2035 14.1114C14.6285 14.3529 14.0765 14.5139 13.536 14.6059C12.432 14.8129 11.42 14.7554 10.5575 14.5944C9.902 14.4679 9.3385 14.2839 8.867 14.0999C8.6025 13.9964 8.315 13.8699 8.0275 13.7089C7.993 13.6859 7.9585 13.6744 7.924 13.6514C7.901 13.6399 7.8895 13.6284 7.878 13.6169C7.671 13.5019 7.556 13.4214 7.556 13.4214C7.556 13.4214 8.108 14.3414 9.5685 14.7784C9.2235 15.2154 8.798 15.7329 8.798 15.7329C6.2565 15.6524 5.2905 13.9849 5.2905 13.9849C5.2905 10.2819 6.9465 7.28037 6.9465 7.28037C8.6025 6.03837 10.178 6.07287 10.178 6.07287L10.293 6.21087C8.223 6.80887 7.2685 7.71737 7.2685 7.71737C7.2685 7.71737 7.5215 7.57937 7.947 7.38387C9.1775 6.84337 10.155 6.69387 10.5575 6.65937C10.6265 6.64787 10.684 6.63637 10.753 6.63637C11.4545 6.54437 12.248 6.52137 13.076 6.61337C14.1685 6.73987 15.3415 7.06187 16.5375 7.71737C16.5375 7.71737 15.629 6.85487 13.674 6.25687L13.835 6.07287C13.835 6.07287 15.4105 6.03837 17.0665 7.28037C17.0665 7.28037 18.7225 10.2819 18.7225 13.9849C18.7225 13.9849 17.745 15.6524 15.2035 15.7329Z" fill="#7289DA"/>
              </svg>
            </a>
            <!--a href="https://www.twitch.tv/cakeboost">
            <img src="/img(ColorSochialLogo)/Twitch.svg" alt />
          </!--a>
          <a-- href="https://www.instagram.com/cakeboost/">
            <img src="/img(ColorSochialLogo)/Inst.svg" alt />
            </a-->
            <a href="https://twitter.com/Cake_boost">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M23 5.25069C22.1893 5.63104 21.3196 5.88926 20.4071 6.00441C21.3393 5.4112 22.0548 4.46905 22.3895 3.34894C21.5165 3.90028 20.5515 4.29807 19.5242 4.51442C18.7004 3.58274 17.5287 3 16.229 3C13.7379 3 11.7161 5.14949 11.7161 7.79798C11.7161 8.17484 11.7555 8.54123 11.8343 8.89017C8.0828 8.69128 4.75802 6.77906 2.53275 3.87585C2.14546 4.58421 1.92227 5.40771 1.92227 6.28705C1.92227 7.95152 2.71983 9.42057 3.93093 10.279C3.19245 10.2545 2.49664 10.0382 1.88617 9.67879C1.88617 9.69972 1.88617 9.71717 1.88617 9.73811C1.88617 12.0621 3.44189 14.0022 5.50634 14.4419C5.1289 14.55 4.72848 14.6094 4.31822 14.6094C4.02611 14.6094 3.74385 14.578 3.46815 14.5221C4.04252 16.4274 5.70983 17.8162 7.68238 17.8545C6.13651 19.1421 4.1935 19.9098 2.07653 19.9098C1.71222 19.9098 1.35447 19.8854 1 19.8435C2.99552 21.2044 5.36849 22 7.91869 22C16.2192 22 20.7583 14.6896 20.7583 8.34931C20.7583 8.13995 20.755 7.93407 20.7452 7.72819C21.6281 7.05124 22.3928 6.2068 22.9967 5.24371L23 5.25069Z" fill="#41ABE1"/>
              </svg>
            </a>
            <!--a href="https://www.youtube.com/channel/UCe-rP...subscriber">
            <img src="/img(ColorSochialLogo)/YT.svg" alt />
            </!--a-->
            <a href="https://www.whatsapp.com/">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M11.4622 1.01272C5.60469 1.28937 0.982282 6.12812 1.00005 11.9449C1.00546 13.7165 1.43665 15.3887 2.19729 16.8662L1.02944 22.4893C0.966262 22.7935 1.24283 23.0598 1.54746 22.9883L7.10231 21.6828C8.52944 22.388 10.1324 22.7953 11.8289 22.8209C17.8158 22.9116 22.8079 18.1963 22.9945 12.2599C23.1945 5.89657 17.8999 0.708611 11.4622 1.01272ZM18.0903 17.9522C16.4636 19.5659 14.3006 20.4545 12 20.4545C10.6529 20.4545 9.36323 20.1547 8.16663 19.5635L7.39304 19.1813L3.98734 19.9816L4.70422 16.5298L4.32311 15.7895C3.70192 14.5828 3.38695 13.2779 3.38695 11.9111C3.38695 9.62904 4.28285 7.48363 5.90963 5.86994C7.52188 4.27072 9.72011 3.36759 12.0002 3.36759C14.3008 3.36765 16.4636 4.25631 18.0904 5.86989C19.7172 7.48353 20.6131 9.62894 20.6131 11.9109C20.6131 14.1726 19.7026 16.3531 18.0903 17.9522Z" fill="#0DC143"/>
              <path d="M16.9478 14.4366L14.9019 13.805C14.6329 13.722 14.3433 13.8041 14.1473 14.0188L13.647 14.5668C13.436 14.7979 13.1159 14.8722 12.8367 14.7507C11.8689 14.3296 9.83302 12.3834 9.31311 11.4099C9.16311 11.1291 9.18792 10.778 9.37209 10.5218L9.80888 9.91426C9.98001 9.67621 10.0161 9.35652 9.90295 9.08135L9.0422 6.98824C8.83603 6.48691 8.24017 6.34097 7.8509 6.69494C7.2799 7.21418 6.6024 8.00322 6.52005 8.87736C6.37484 10.4185 6.98959 12.3613 9.31428 14.6941C11.9999 17.3892 14.1506 17.7452 15.5509 17.3805C16.3451 17.1737 16.9798 16.3445 17.3804 15.6656C17.6535 15.2027 17.4378 14.588 16.9478 14.4366Z" fill="#0DC143"/>
              </svg>
            </a>
            <!--a href="https://ru.linkedin.com/">
            <img src="/img(ColorSochialLogo)/LiknedIn.svg" alt />
            </!--a-->
            <a href="https://t.me/cakeboost">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9.63262 14.8632L9.2687 19.8888C9.78938 19.8888 10.0149 19.6692 10.2853 19.4055L12.7264 17.115L17.7847 20.7519C18.7124 21.2595 19.366 20.9922 19.6163 19.914L22.9365 4.63926L22.9374 4.63836C23.2317 3.29196 22.4415 2.76547 21.5377 3.09576L2.02135 10.4316C0.689406 10.9392 0.709573 11.6682 1.79493 11.9985L6.78447 13.5222L18.3742 6.40235C18.9196 6.04775 19.4155 6.24395 19.0076 6.59855L9.63262 14.8632Z" fill="#29A0DC"/>
              </svg>
            </a>
            <!--a href="https://www.viber.com/ru/">
            <img src="/img(ColorSochialLogo)/Viber.svg" alt />
            </!--a-->
          </div>
        </div>
      </div>
      <div class="itemInfo">
        <h1 v-if="isMobile" class="title" v-html="product.title"></h1>
        <div class="reviews">
          <span
            style="margin-left: 0"
            v-for="(sub_item, index) in product.stars"
            :key="index"
          >
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

          <a href="#reviews" @click="open_tab = 'reviews'">
            <span v-if="rev_result">
              {{ rev_result }} reviews
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 3L4 6L7 3" stroke="#595E61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </span>
            <span v-else>
              0 reviews
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 3L4 6L7 3" stroke="#595E61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </span>
          </a>
        </div>
        <div class="languageLogo item_languageLogo" style="margin-bottom: 30px">
          <div>Your region</div>
          <div
            v-bind:class="{
              active: this.$store.getters['getSelectedZone'] == 'eu',
            }"
            @click="(zone_pick = 'eu'), set_cookie('eu'), selected_zone('eu')"
          >
            <img src="/icons/europe-4886332.svg">
          </div>

          <div
            v-bind:class="{
              active: this.$store.getters['getSelectedZone'] == 'us',
            }"
            @click="(zone_pick = 'us'), set_cookie('us'), selected_zone('us')"
          >
            <img src="/icons/united-26177.svg">
          </div>
        </div>
        <div class="buyItem">
          <div class="priceItem">
            <div v-if="$store.getters['getSelectedZone'] == 'eu'">
              <span
                >{{
                  (
                    (
                      parseFloat(product.price_eur) +
                      parseFloat(option_total_eu) +
                      parseFloat(sliders_price_eur) +
                      parseFloat(double_sliders_price_eur) +
                      count_price_coeff_eur()
                    ).toFixed(2) * parseFloat(count)
                  ).toFixed(2)
                }}€</span
              >
              <span v-if="product.sales == '1' && product.sales_2 == '0'"
                >{{
                  (
                    (parseFloat(product.price_eur_sale) +
                      (
                        (parseFloat(option_total_eu) +
                          parseFloat(sliders_price_eur) +
                          parseFloat(double_sliders_price_eur) +
                          count_price_coeff_eur()) *
                        100
                      ).toFixed(2) /
                        (100 - parseFloat(product.sales_discount))) *
                    count
                  ).toFixed(2)
                }}€</span
              >
              <span v-if="product.sales_2 == '1'"
                >{{
                  (
                    (parseFloat(product.price_eur_sale2) +
                      (
                        (parseFloat(option_total_eu) +
                          parseFloat(sliders_price_eur) +
                          parseFloat(double_sliders_price_eur) +
                          count_price_coeff_eur()) *
                        100
                      ).toFixed(2) /
                        (100 - parseFloat(product.sales_discount))) *
                    count
                  ).toFixed(2)
                }}€</span
              >
            </div>

            <div v-else-if="$store.getters['getSelectedZone'] == 'us'">
              <span
                >{{
                  (
                    (
                      parseFloat(product.price_usd) +
                      parseFloat(option_total_us) +
                      parseFloat(sliders_price_usd) +
                      parseFloat(double_sliders_price_usd) +
                      count_price_coeff_usd()
                    ).toFixed(2) * parseFloat(count)
                  ).toFixed(2)
                }}$
                <!-- option_total_us: {{ option_total_us }}
                sliders_price_usd {{ sliders_price_usd }}
                double_sliders_price_usd {{ double_sliders_price_usd }} -->

                </span
              >
              <span v-if="product.sales == '1' && product.sales_2 == '0'"
                >{{
                  (
                    (parseFloat(product.price_usd_sale) +
                      (
                        (parseFloat(option_total_us) +
                          parseFloat(sliders_price_usd) +
                          parseFloat(double_sliders_price_usd) +
                          count_price_coeff_usd()) *
                        100
                      ).toFixed(2) /
                        (100 - parseFloat(product.sales_discount))) *
                    count
                  ).toFixed(2)
                }}$</span
              >
              <span v-if="product.sales_2 == '1'"
                >{{
                  (
                    (parseFloat(product.price_usd_sale2) +
                      (
                        (parseFloat(option_total_us) +
                          parseFloat(sliders_price_usd) +
                          parseFloat(double_sliders_price_usd) +
                          count_price_coeff_usd()) *
                        100
                      ).toFixed(2) /
                        (100 - parseFloat(product.sales_discount))) *
                    count
                  ).toFixed(2)
                }}$</span
              >
            </div>
            <div class="separator"></div>
            <div class="cakeCoinItem">
              <div v-if="$store.getters['getSelectedZone'] == 'eu'">
                +{{
                  ((
                    ((
                      (
                        parseFloat(product.price_eur) +
                        parseFloat(option_total_eu) +
                        parseFloat(sliders_price_eur) +
                        parseFloat(double_sliders_price_eur) +
                        count_price_coeff_eur()
                      ).toFixed(2) * parseFloat(count)
                    ).toFixed(2) *
                      coin_settings.percent) /
                    100
                  ).toFixed(2)
                   / parseFloat(coin_settings.prs_e)).toFixed()
                }}
                <svg style="margin-left: 10px" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM9.13818 9.48467C9.12712 10.3701 8.78125 10.8128 8.10059 10.8128C7.79622 10.8128 7.56104 10.7464 7.39502 10.6136C7.229 10.4752 7.11003 10.2622 7.03809 9.97441C6.96615 9.68112 6.93018 9.16924 6.93018 8.43877V7.52568C6.94124 6.69007 7.03532 6.12839 7.2124 5.84062C7.38949 5.54733 7.68278 5.40068 8.09229 5.40068C8.46305 5.40068 8.72868 5.53626 8.88916 5.80742C9.04964 6.07858 9.13265 6.46595 9.13818 6.96953H11.3462C11.3351 5.84616 11.0446 4.98011 10.4746 4.37139C9.90462 3.75713 9.12435 3.45 8.13379 3.45C6.96061 3.45 6.07243 3.82077 5.46924 4.5623C4.87158 5.30384 4.57275 6.38018 4.57275 7.79131V8.50518C4.58382 9.90524 4.89372 10.965 5.50244 11.6844C6.11117 12.4038 6.99381 12.7635 8.15039 12.7635C9.08561 12.7635 9.84928 12.4619 10.4414 11.8587C11.0335 11.2555 11.3351 10.4642 11.3462 9.48467H9.13818Z" fill="#2F3639"/></svg>
              </div>
              <div v-if="$store.getters['getSelectedZone'] == 'us'">
                +{{
                  ((
                    ((
                      (
                        parseFloat(product.price_usd) +
                        parseFloat(option_total_us) +
                        parseFloat(sliders_price_usd) +
                        parseFloat(double_sliders_price_usd) +
                        count_price_coeff_usd()
                      ).toFixed(2) * parseFloat(count)
                    ).toFixed(2) *
                      coin_settings.percent) /
                    100
                  ).toFixed(2)
                  / parseFloat(coin_settings.prs_d)).toFixed()
                }}
                <svg style="margin-left: 10px" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM9.13818 9.48467C9.12712 10.3701 8.78125 10.8128 8.10059 10.8128C7.79622 10.8128 7.56104 10.7464 7.39502 10.6136C7.229 10.4752 7.11003 10.2622 7.03809 9.97441C6.96615 9.68112 6.93018 9.16924 6.93018 8.43877V7.52568C6.94124 6.69007 7.03532 6.12839 7.2124 5.84062C7.38949 5.54733 7.68278 5.40068 8.09229 5.40068C8.46305 5.40068 8.72868 5.53626 8.88916 5.80742C9.04964 6.07858 9.13265 6.46595 9.13818 6.96953H11.3462C11.3351 5.84616 11.0446 4.98011 10.4746 4.37139C9.90462 3.75713 9.12435 3.45 8.13379 3.45C6.96061 3.45 6.07243 3.82077 5.46924 4.5623C4.87158 5.30384 4.57275 6.38018 4.57275 7.79131V8.50518C4.58382 9.90524 4.89372 10.965 5.50244 11.6844C6.11117 12.4038 6.99381 12.7635 8.15039 12.7635C9.08561 12.7635 9.84928 12.4619 10.4414 11.8587C11.0335 11.2555 11.3351 10.4642 11.3462 9.48467H9.13818Z" fill="#2F3639"/></svg>
              </div>
              <div>
                <a href="/page/bonus-and-referal"
                  >Learn more about Reward Program</a
                >
              </div>
            </div>
          </div>
          <div class="buyItemButton">
            <h5 v-if="product.raid_enable == 0">Quantity</h5>
            <div>
              <div class="count" v-if="product.raid_enable == 0">
                <svg @click="changeCount(count-1)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1 8H15" stroke="#ACAFB0" stroke-width="2"/></svg>
                <input
                  type="number"
                  class="input_class"
                  v-bind:value="count"
                  readonly
                  disabled
                  size="3"
                  min="1"
                  max="99"
                  v-on:input="
                    count = $event.target.value;
                    if (count <= 0) count = 1;
                  "
                />
                <svg @click="changeCount(count+1)" alt xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1V15M15 8L1 8" stroke="#ACAFB0" stroke-width="2"/></svg>
              </div>
              <button
                id="buyItem"
                @click="add_to_card()"
                v-if="
                  (
                    (parseFloat(product.price_eur) +
                      parseFloat(option_total_eu) +
                      parseFloat(sliders_price_eur) +
                      parseFloat(double_sliders_price_eur) +
                      count_price_coeff_eur()) *
                    parseFloat(count)
                  ).toFixed(2) > 0  &&
                  !blocked_buy_button
                "
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.57859 2.31376C3.84083 1.8992 5.28165 1.96178 6.21376 2.12462C6.26148 2.13295 6.30854 2.14475 6.35455 2.15991L21.2123 7.05447C22.2993 7.41256 23.0879 8.35789 23.2452 9.49149L23.6748 12.5876C23.9251 14.3912 22.5241 16 20.7033 16H9.59026C8.10992 16 6.85088 14.9202 6.6253 13.4571L5.16922 4.0136C4.53051 3.97361 3.80438 4.01628 3.20266 4.2139C2.79505 4.34777 2.50224 4.53362 2.31429 4.75538C2.13981 4.96124 2 5.26196 2 5.75199C2 6.30427 1.55228 6.75199 1 6.75199C0.447715 6.75199 0 6.30427 0 5.75199C0 4.83279 0.280325 4.06192 0.788571 3.46225C1.28335 2.87848 1.93585 2.52486 2.57859 2.31376ZM7.27865 4.57006L20.5865 8.95405C20.9489 9.07341 21.2117 9.38852 21.2642 9.76639L21.6938 12.8625C21.7772 13.4637 21.3102 14 20.7033 14H9.59026C9.09682 14 8.67713 13.6401 8.60194 13.1524L7.27865 4.57006ZM11 19C10.4477 19 10 19.4477 10 20C10 20.5523 10.4477 21 11 21C11.5523 21 12 20.5523 12 20C12 19.4477 11.5523 19 11 19ZM8 20C8 18.3431 9.34315 17 11 17C12.6569 17 14 18.3431 14 20C14 21.6568 12.6569 23 11 23C9.34315 23 8 21.6568 8 20ZM19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20ZM20 17C18.3431 17 17 18.3431 17 20C17 21.6568 18.3431 23 20 23C21.6569 23 23 21.6568 23 20C23 18.3431 21.6569 17 20 17Z" fill="white"/></svg>
                Buy
              </button>
              <button id="buyItem" @click="select_option_text = true"
                v-else-if="
                  (
                    (parseFloat(product.price_eur) +
                      parseFloat(option_total_eu) +
                      parseFloat(sliders_price_eur) +
                      parseFloat(double_sliders_price_eur) +
                      count_price_coeff_eur()) *
                    parseFloat(count)
                  ).toFixed(2) == 0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.57859 2.31376C3.84083 1.8992 5.28165 1.96178 6.21376 2.12462C6.26148 2.13295 6.30854 2.14475 6.35455 2.15991L21.2123 7.05447C22.2993 7.41256 23.0879 8.35789 23.2452 9.49149L23.6748 12.5876C23.9251 14.3912 22.5241 16 20.7033 16H9.59026C8.10992 16 6.85088 14.9202 6.6253 13.4571L5.16922 4.0136C4.53051 3.97361 3.80438 4.01628 3.20266 4.2139C2.79505 4.34777 2.50224 4.53362 2.31429 4.75538C2.13981 4.96124 2 5.26196 2 5.75199C2 6.30427 1.55228 6.75199 1 6.75199C0.447715 6.75199 0 6.30427 0 5.75199C0 4.83279 0.280325 4.06192 0.788571 3.46225C1.28335 2.87848 1.93585 2.52486 2.57859 2.31376ZM7.27865 4.57006L20.5865 8.95405C20.9489 9.07341 21.2117 9.38852 21.2642 9.76639L21.6938 12.8625C21.7772 13.4637 21.3102 14 20.7033 14H9.59026C9.09682 14 8.67713 13.6401 8.60194 13.1524L7.27865 4.57006ZM11 19C10.4477 19 10 19.4477 10 20C10 20.5523 10.4477 21 11 21C11.5523 21 12 20.5523 12 20C12 19.4477 11.5523 19 11 19ZM8 20C8 18.3431 9.34315 17 11 17C12.6569 17 14 18.3431 14 20C14 21.6568 12.6569 23 11 23C9.34315 23 8 21.6568 8 20ZM19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20ZM20 17C18.3431 17 17 18.3431 17 20C17 21.6568 18.3431 23 20 23C21.6569 23 23 21.6568 23 20C23 18.3431 21.6569 17 20 17Z" fill="white"/></svg>
                Buy
              </button>
              <button id="buyItem" v-else>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.57859 2.31376C3.84083 1.8992 5.28165 1.96178 6.21376 2.12462C6.26148 2.13295 6.30854 2.14475 6.35455 2.15991L21.2123 7.05447C22.2993 7.41256 23.0879 8.35789 23.2452 9.49149L23.6748 12.5876C23.9251 14.3912 22.5241 16 20.7033 16H9.59026C8.10992 16 6.85088 14.9202 6.6253 13.4571L5.16922 4.0136C4.53051 3.97361 3.80438 4.01628 3.20266 4.2139C2.79505 4.34777 2.50224 4.53362 2.31429 4.75538C2.13981 4.96124 2 5.26196 2 5.75199C2 6.30427 1.55228 6.75199 1 6.75199C0.447715 6.75199 0 6.30427 0 5.75199C0 4.83279 0.280325 4.06192 0.788571 3.46225C1.28335 2.87848 1.93585 2.52486 2.57859 2.31376ZM7.27865 4.57006L20.5865 8.95405C20.9489 9.07341 21.2117 9.38852 21.2642 9.76639L21.6938 12.8625C21.7772 13.4637 21.3102 14 20.7033 14H9.59026C9.09682 14 8.67713 13.6401 8.60194 13.1524L7.27865 4.57006ZM11 19C10.4477 19 10 19.4477 10 20C10 20.5523 10.4477 21 11 21C11.5523 21 12 20.5523 12 20C12 19.4477 11.5523 19 11 19ZM8 20C8 18.3431 9.34315 17 11 17C12.6569 17 14 18.3431 14 20C14 21.6568 12.6569 23 11 23C9.34315 23 8 21.6568 8 20ZM19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20ZM20 17C18.3431 17 17 18.3431 17 20C17 21.6568 18.3431 23 20 23C21.6569 23 23 21.6568 23 20C23 18.3431 21.6569 17 20 17Z" fill="white"/></svg>
                Buy
              </button>
              <div
                v-if="!favorite"
                class="favoriteItemButton"
                @click="set_sku_favor()"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M10.2137 8.55687L12 3.05269L13.7863 8.55687L14.7375 8.24817L13.7863 8.55687C13.9909 9.18714 14.578 9.61491 15.2417 9.61491H21.0256L16.3453 13.0193C15.8091 13.4093 15.5853 14.1 15.7898 14.7301L17.5769 20.2366L12.8998 16.8346C12.3634 16.4443 11.6366 16.4443 11.1002 16.8346L6.42308 20.2366L8.21019 14.7301C8.41467 14.1 8.19087 13.4093 7.65467 13.0193L2.97436 9.61491H8.75831C9.42196 9.61491 10.0091 9.18714 10.2137 8.55687Z" stroke="#C24DFE" stroke-width="2"/></svg>
              </div>
              <div
                style="border: 4px solid #c24dfe; width: 68px; padding: 6px 0"
                v-if="favorite"
                class="favoriteItemButton"
                @click="delete_sku_favor()"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M10.2137 8.55687L12 3.05269L13.7863 8.55687L14.7375 8.24817L13.7863 8.55687C13.9909 9.18714 14.578 9.61491 15.2417 9.61491H21.0256L16.3453 13.0193C15.8091 13.4093 15.5853 14.1 15.7898 14.7301L17.5769 20.2366L12.8998 16.8346C12.3634 16.4443 11.6366 16.4443 11.1002 16.8346L6.42308 20.2366L8.21019 14.7301C8.41467 14.1 8.19087 13.4093 7.65467 13.0193L2.97436 9.61491H8.75831C9.42196 9.61491 10.0091 9.18714 10.2137 8.55687Z" stroke="#C24DFE" stroke-width="2"/></svg>
              </div>
            </div>
            <div>
              <span
                v-if="
                  select_option_text &&
                  (
                    (parseFloat(product.price_eur) +
                      parseFloat(option_total_eu) +
                      parseFloat(sliders_price_eur) +
                      parseFloat(double_sliders_price_eur) +
                      count_price_coeff_eur()) *
                    parseFloat(count)
                  ).toFixed(2) == 0
                "
                style="
                  font-family: Roboto;
                  font-style: normal;
                  font-weight: bold;
                  font-size: 12px;
                  line-height: 14px;
                  text-align: left;
                  color: #e9464b;
                  margin-top: 8px;
                "
              >
                Select at least one option
              </span>
              <!--span
                v-if="
                  select_option_text && (!choosen_event_id && product.raid_enable == 1)
                "
                style="
                  font-family: Roboto;
                  font-style: normal;
                  font-weight: bold;
                  font-size: 12px;
                  line-height: 14px;
                  text-align: left;
                  color: #e9464b;
                  margin-top: 8px;
                "
              >
                Pick a date
              </!--span-->
            </div>
          </div>
          <div class="bookYouSlot">
            <!-- <h4 v-if="product.raid_enable == 1">Book a slot</h4>
            <h5 v-if="product.raid_enable == 1">Choose a date</h5>
            <div v-if="product.raid_enable == 1" class="slotPeekerDate">
              <client-only>
                <v-date-picker
                  v-model="date"
                  title-position="left"
                  :min-date="new Date()"
                  :popover="{ placement: 'bottom', visibility: 'click' }"
                >
                  <button class="button_v_calendar">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 6C15.4477 6 15 5.55228 15 5V2C15 1.44771 15.4477 1 16 1C16.5523 1 17 1.44772 17 2V5C17 5.55228 16.5523 6 16 6ZM23 18C23 20.2091 21.2091 22 19 22L5 22C2.79086 22 1 20.2091 1 18V3C1 2.44771 1.44772 2 2 2C2.55229 2 3 2.44771 3 3L3 18C3 19.1046 3.89543 20 5 20L19 20C20.1046 20 21 19.1046 21 18L21 3C21 2.44772 21.4477 2 22 2C22.5523 2 23 2.44772 23 3L23 18ZM11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5V2C13 1.44772 12.5523 1 12 1C11.4477 1 11 1.44771 11 2V5ZM8 6C7.44772 6 7 5.55228 7 5L7 2C7 1.44771 7.44772 1 8 1C8.55229 1 9 1.44772 9 2V5C9 5.55228 8.55228 6 8 6ZM14.1641 18.5C14.6258 18.5 15 18.1258 15 17.6641C15 17.2025 14.6258 16.8283 14.1641 16.8283H11.6327L12.9048 14.9289C13.6122 14.0515 14.0998 13.314 14.3673 12.7165C14.6395 12.1142 14.7755 11.5213 14.7755 10.938C14.7755 9.99898 14.5306 9.27575 14.0408 8.76829C13.5556 8.2561 12.8707 8 11.9864 8C11.4104 8 10.8934 8.14702 10.4354 8.44106C9.98186 8.73035 9.62812 9.13821 9.37415 9.66463C9.25604 9.9139 9.16589 10.1754 9.10371 10.4491C8.98552 10.9694 9.43249 11.4075 9.96599 11.4075C10.4995 11.4075 10.8942 10.9612 11.0586 10.4537C11.098 10.3324 11.1464 10.2235 11.2041 10.127C11.39 9.82351 11.6395 9.67175 11.9524 9.67175C12.2381 9.67175 12.4558 9.80217 12.6054 10.063C12.7596 10.3238 12.8367 10.6843 12.8367 11.1443C12.8367 11.4858 12.7551 11.8438 12.5918 12.2185C12.4331 12.5884 12.1837 13.02 11.8435 13.5132L9.3774 16.7925C9.23842 16.9773 9.16327 17.2023 9.16327 17.4335C9.16327 18.0225 9.64075 18.5 10.2298 18.5H14.1641Z" fill="#444B4D"/></svg>
                      <span>{{
                        date.getDate() +
                        "." +
                        (date.getMonth() + 1) +
                        "." +
                        date.getFullYear()
                      }}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 6L8 11L13 6" stroke="#595E61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                  </button>
                </v-date-picker>
              </client-only>

              <div>
                <span @click="set_date_tomorrow()">Tomorrow</span>
                <span @click="set_date_today()">Today</span>
              </div>
            </div>
            <ul class="chooseFaction">
              <li
                v-for="fraction in fractions"
                :key="fraction.id"
                v-if="product.raid_enable == 1 && events_by_productTest.filter(item => item.times.length > 0).length > 0"
                :class="{active:selected_fraction == fraction.id}"
                @click="chooseFaction(fraction.id)">
                {{fraction.name}}
              </li>
            </ul>
             -->

            <span class="result_failure" style="font-size:16px" v-if="product.raid_enable == 1 && !events_by_productTest.filter(item => item.times.length > 0).length > 0">There are no raids on this date. Please choose another date</span>
            <div
              v-if="product.raid_enable == 1 && events_by_productTest.filter(item => item.times.length > 0).length > 0"
              ref="raid_slot_ref"
              :class="{ open_raid_slot: !hide_more_raid }"
              class="raidSlost"
            >
            <!--
              <div class="EventTimeInfo" v-if="showTimesTitile !='Choose raid'">
                <span>Run start in <span v-html="timesLeft(selectTimes)"></span>
                &nbsp;
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_102_439)">
                  <path d="M10 2.32979C10 3.43436 9.10457 4.32979 8 4.32979C6.89543 4.32979 6 3.43436 6 2.32979C6 1.22522 6.89543 0.329788 8 0.329788C9.10457 0.329788 10 1.22522 10 2.32979Z" fill="#C24DFE"/>
                  <path d="M5.33333 5.66312C5.33333 4.92674 5.93029 4.32979 6.66667 4.32979H9.33333C10.0697 4.32979 10.6667 4.92674 10.6667 5.66312V11.6631C10.6667 12.3995 10.0697 12.9965 9.33333 12.9965H6.66667C5.93029 12.9965 5.33333 12.3995 5.33333 11.6631V5.66312Z" fill="#C24DFE"/>
                  <path d="M8 5.66312C8 4.92674 8.59695 4.32979 9.33333 4.32979H10.6667C11.403 4.32979 12 4.92674 12 5.66312V8.32979C12 9.06617 11.403 9.66312 10.6667 9.66312H9.33333C8.59695 9.66312 8 9.06617 8 8.32979V5.66312Z" fill="#C24DFE"/>
                  <path d="M8 12.3298C8 11.5934 8.59695 10.9965 9.33333 10.9965C10.0697 10.9965 10.6667 11.5934 10.6667 12.3298V14.9965C10.6667 15.7328 10.0697 16.3298 9.33333 16.3298C8.59695 16.3298 8 15.7328 8 14.9965V12.3298Z" fill="#C24DFE"/>
                  <path d="M5.33333 12.3298C5.33333 11.5934 5.93029 10.9965 6.66667 10.9965C7.40305 10.9965 8 11.5934 8 12.3298V14.9965C8 15.7328 7.40305 16.3298 6.66667 16.3298C5.93029 16.3298 5.33333 15.7328 5.33333 14.9965V12.3298Z" fill="#C24DFE"/>
                  <path d="M4 5.66312C4 4.92674 4.59695 4.32979 5.33333 4.32979H6.66667C7.40305 4.32979 8 4.92674 8 5.66312V8.32979C8 9.06617 7.40305 9.66312 6.66667 9.66312H5.33333C4.59695 9.66312 4 9.06617 4 8.32979V5.66312Z" fill="#C24DFE"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_102_439">
                  <rect width="16" height="16" fill="white" transform="translate(0 0.329788)"/>
                  </clipPath>
                  </defs>
                </svg>
                &nbsp;
                {{selectTimes.max - selectTimes.users}}/{{selectTimes.max}} Slots left</span>
              </div>

              <ul class="choodeEventTime" :class="{show: showTimes}">
                <li class="choodeEventTime__main" @click="showAllTimes()"><span> {{ showTimesTitile }}</span></li>

                <li v-if="showTimesTitile !='Choose raid'" @click="changeTime(event, true)"><span>Choose raid</span> </li>
                <li
                  v-for="(event, index) in timeList()"
                  :key="index"
                  :selected="event.id == choosen_event_id"
                  class="choodeEventTime__item"
                  @click="changeTime(event, false)"
                >
                  <span>{{ event.week }} {{ event.date }} | {{ $store.getters['getSelectedZone'] == 'eu'  ? event.time_cest + ' CEST' : event.time_edt + 'EDT'}}</span>
                </li>
                <li v-if="timeList() == ''"><span>There are no raids</span></li>
              </ul>
            -->
              <div style='display:none' v-for="(event, index) in events_by_productTest" :key="index">
                <div
                  v-for="item in event.times"
                  :key="item.id"
                  v-if="
                    $store.getters['getSelectedZone'] == 'eu' &&
                    item.time_cest != '' &&
                    item.time_cest != null &&
                    item.users != item.max
                  "
                  :class="{
                    active: item.id == choosen_event_id && item.users != item.max,
                    grey: item.users == item.max,
                  }"
                  @click="
                    choosen_event_id =
                      item.id == choosen_event_id ? undefined : item.id
                  "
                >

                  <div class="raidSlotItemHeader">
                    <img
                      v-for="fraction_img in fractions"
                      :key="fraction_img.id"
                      v-if="fraction_img.id == item.allegiance"
                      :src="apiImg + 'gicons/' + fraction_img.icon"
                      alt
                    />

                    <span class="itemTime">
                      {{ item.time_cest }}
                    <!--  {{
                        item.time_cest.split(":")[0] +
                        ":" +
                        item.time_cest.split(":")[1]
                      }}-->
                      <span>СETD</span>
                    </span>
                    <span class="slotPeoples">
                      {{ item.users }}/{{ item.max }}
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <g clip-path="url(#clip0)">
                      <path d="M10 2.5C10 3.60457 9.10457 4.5 8 4.5C6.89543 4.5 6 3.60457 6 2.5C6 1.39543 6.89543 0.5 8 0.5C9.10457 0.5 10 1.39543 10 2.5Z" fill="#C24DFE"/>
                      <path d="M5.33333 5.83333C5.33333 5.09695 5.93029 4.5 6.66667 4.5H9.33333C10.0697 4.5 10.6667 5.09695 10.6667 5.83333V11.8333C10.6667 12.5697 10.0697 13.1667 9.33333 13.1667H6.66667C5.93029 13.1667 5.33333 12.5697 5.33333 11.8333V5.83333Z" fill="#C24DFE"/>
                      <path d="M8 5.83333C8 5.09695 8.59695 4.5 9.33333 4.5H10.6667C11.403 4.5 12 5.09695 12 5.83333V8.5C12 9.23638 11.403 9.83333 10.6667 9.83333H9.33333C8.59695 9.83333 8 9.23638 8 8.5V5.83333Z" fill="#C24DFE"/>
                      <path d="M8 12.5C8 11.7636 8.59695 11.1667 9.33333 11.1667C10.0697 11.1667 10.6667 11.7636 10.6667 12.5V15.1667C10.6667 15.903 10.0697 16.5 9.33333 16.5C8.59695 16.5 8 15.903 8 15.1667V12.5Z" fill="#C24DFE"/>
                      <path d="M5.33333 12.5C5.33333 11.7636 5.93029 11.1667 6.66667 11.1667C7.40305 11.1667 8 11.7636 8 12.5V15.1667C8 15.903 7.40305 16.5 6.66667 16.5C5.93029 16.5 5.33333 15.903 5.33333 15.1667V12.5Z" fill="#C24DFE"/>
                      <path d="M4 5.83333C4 5.09695 4.59695 4.5 5.33333 4.5H6.66667C7.40305 4.5 8 5.09695 8 5.83333V8.5C8 9.23638 7.40305 9.83333 6.66667 9.83333H5.33333C4.59695 9.83333 4 9.23638 4 8.5V5.83333Z" fill="#C24DFE"/>
                      </g>
                      <defs>
                      <clipPath id="clip0">
                      <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
                      </clipPath>
                      </defs>
                      </svg>
                    </span>
                  </div>
                  <div class="separator"></div>
                  <div class="slotOptions">
                    <div>
                      <span>Personal loot</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><g clip-path="url(#clip0)"><circle cx="8" cy="8.84863" r="7.5" fill="white" stroke="#C24DFE"/><path d="M6.93991 10.9924C6.93991 10.3973 6.9973 9.92544 7.11208 9.57686C7.2311 9.22404 7.44152 8.88821 7.74334 8.56939C8.06216 8.21657 8.2747 7.9275 8.38097 7.70221C8.48725 7.47691 8.54038 7.24948 8.54038 7.01993C8.54038 6.31003 8.31083 5.95508 7.85174 5.95508C7.64769 5.95508 7.47765 6.05285 7.34162 6.24839C7.2056 6.44393 7.13333 6.70749 7.12483 7.03906H5.32031C5.32881 6.21438 5.55836 5.57462 6.00896 5.11977C6.46381 4.66492 7.07807 4.4375 7.85174 4.4375C8.64241 4.4375 9.25666 4.65855 9.69451 5.10064C10.1324 5.53849 10.3513 6.15275 10.3513 6.94342C10.3513 7.59806 10.0813 8.23995 9.54148 8.86908L9.01224 9.46846C8.83795 9.67676 8.71467 9.89356 8.64241 10.1189C8.57014 10.3399 8.52976 10.6311 8.52125 10.9924H6.93991ZM6.77413 12.9436C6.77413 12.6545 6.86552 12.4186 7.04831 12.2358C7.23535 12.053 7.47128 11.9616 7.75609 11.9616C8.0494 11.9616 8.28745 12.0551 8.47024 12.2422C8.65303 12.425 8.74443 12.6588 8.74443 12.9436C8.74443 13.2242 8.65516 13.458 8.47662 13.645C8.29808 13.832 8.0579 13.9256 7.75609 13.9256C7.45853 13.9256 7.22047 13.832 7.04193 13.645C6.8634 13.458 6.77413 13.2242 6.77413 12.9436Z" fill="#C24DFE"/></g><defs><clipPath id="clip0"><rect width="16" height="16" fill="white" transform="translate(0 0.848633)"/></clipPath></defs></svg>
                    </div>
                    <div>
                      <span>Selfplay</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><g clip-path="url(#clip0)"><circle cx="8" cy="8.84863" r="7.5" fill="white" stroke="#C24DFE"/><path d="M6.93991 10.9924C6.93991 10.3973 6.9973 9.92544 7.11208 9.57686C7.2311 9.22404 7.44152 8.88821 7.74334 8.56939C8.06216 8.21657 8.2747 7.9275 8.38097 7.70221C8.48725 7.47691 8.54038 7.24948 8.54038 7.01993C8.54038 6.31003 8.31083 5.95508 7.85174 5.95508C7.64769 5.95508 7.47765 6.05285 7.34162 6.24839C7.2056 6.44393 7.13333 6.70749 7.12483 7.03906H5.32031C5.32881 6.21438 5.55836 5.57462 6.00896 5.11977C6.46381 4.66492 7.07807 4.4375 7.85174 4.4375C8.64241 4.4375 9.25666 4.65855 9.69451 5.10064C10.1324 5.53849 10.3513 6.15275 10.3513 6.94342C10.3513 7.59806 10.0813 8.23995 9.54148 8.86908L9.01224 9.46846C8.83795 9.67676 8.71467 9.89356 8.64241 10.1189C8.57014 10.3399 8.52976 10.6311 8.52125 10.9924H6.93991ZM6.77413 12.9436C6.77413 12.6545 6.86552 12.4186 7.04831 12.2358C7.23535 12.053 7.47128 11.9616 7.75609 11.9616C8.0494 11.9616 8.28745 12.0551 8.47024 12.2422C8.65303 12.425 8.74443 12.6588 8.74443 12.9436C8.74443 13.2242 8.65516 13.458 8.47662 13.645C8.29808 13.832 8.0579 13.9256 7.75609 13.9256C7.45853 13.9256 7.22047 13.832 7.04193 13.645C6.8634 13.458 6.77413 13.2242 6.77413 12.9436Z" fill="#C24DFE"/></g><defs><clipPath id="clip0"><rect width="16" height="16" fill="white" transform="translate(0 0.848633)"/></clipPath></defs></svg>
                    </div>
                  </div>
                </div>

                <div
                  v-for="item in event.times"
                  :key="item.id"
                  v-if="
                    $store.getters['getSelectedZone'] == 'eu' &&
                    item.time_cest != '' &&
                    item.time_cest != null &&
                    item.users == item.max
                  "
                  :class="{
                    active: item.id == choosen_event_id && item.users != item.max,
                    grey: item.users == item.max,
                  }"
                >
                  <div class="raidSlotItemHeader">
                    <img
                      v-for="fraction_img in fractions"
                      :key="fraction_img.id"
                      v-if="fraction_img.id == item.allegiance"
                      :src="apiImg + 'gicons/' + fraction_img.icon"
                      alt
                    />
                    <span class="itemTime">
                      {{ item.time_cest }}
                      <!-- {{
                        item.time_cest.split(":")[0] +
                        ":" +
                        item.time_cest.split(":")[1]
                      }}-->
                      <span>СETD</span>
                    </span>
                    <span class="slotPeoples">
                      {{ item.users }}/{{ item.max }}
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><g clip-path="url(#clip0)"><path d="M10 2.5C10 3.60457 9.10457 4.5 8 4.5C6.89543 4.5 6 3.60457 6 2.5C6 1.39543 6.89543 0.5 8 0.5C9.10457 0.5 10 1.39543 10 2.5Z" fill="#ACAFB0"/><path d="M5.33333 5.83333C5.33333 5.09695 5.93029 4.5 6.66667 4.5H9.33333C10.0697 4.5 10.6667 5.09695 10.6667 5.83333V11.8333C10.6667 12.5697 10.0697 13.1667 9.33333 13.1667H6.66667C5.93029 13.1667 5.33333 12.5697 5.33333 11.8333V5.83333Z" fill="#ACAFB0"/><path d="M8 5.83333C8 5.09695 8.59695 4.5 9.33333 4.5H10.6667C11.403 4.5 12 5.09695 12 5.83333V8.5C12 9.23638 11.403 9.83333 10.6667 9.83333H9.33333C8.59695 9.83333 8 9.23638 8 8.5V5.83333Z" fill="#ACAFB0"/><path d="M8 12.5C8 11.7636 8.59695 11.1667 9.33333 11.1667C10.0697 11.1667 10.6667 11.7636 10.6667 12.5V15.1667C10.6667 15.903 10.0697 16.5 9.33333 16.5C8.59695 16.5 8 15.903 8 15.1667V12.5Z" fill="#ACAFB0"/><path d="M5.33333 12.5C5.33333 11.7636 5.93029 11.1667 6.66667 11.1667C7.40305 11.1667 8 11.7636 8 12.5V15.1667C8 15.903 7.40305 16.5 6.66667 16.5C5.93029 16.5 5.33333 15.903 5.33333 15.1667V12.5Z" fill="#ACAFB0"/><path d="M4 5.83333C4 5.09695 4.59695 4.5 5.33333 4.5H6.66667C7.40305 4.5 8 5.09695 8 5.83333V8.5C8 9.23638 7.40305 9.83333 6.66667 9.83333H5.33333C4.59695 9.83333 4 9.23638 4 8.5V5.83333Z" fill="#ACAFB0"/></g><defs><clipPath id="clip0"><rect width="16" height="16" fill="white" transform="translate(0 0.5)"/></clipPath></defs></svg>
                    </span>
                  </div>
                  <div class="separator"></div>
                  <div class="slotOptions">
                    <div>
                      <span>Personal loot</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><g clip-path="url(#clip0)"><circle cx="8" cy="8.84863" r="7.5" fill="white" stroke="#C24DFE"/><path d="M6.93991 10.9924C6.93991 10.3973 6.9973 9.92544 7.11208 9.57686C7.2311 9.22404 7.44152 8.88821 7.74334 8.56939C8.06216 8.21657 8.2747 7.9275 8.38097 7.70221C8.48725 7.47691 8.54038 7.24948 8.54038 7.01993C8.54038 6.31003 8.31083 5.95508 7.85174 5.95508C7.64769 5.95508 7.47765 6.05285 7.34162 6.24839C7.2056 6.44393 7.13333 6.70749 7.12483 7.03906H5.32031C5.32881 6.21438 5.55836 5.57462 6.00896 5.11977C6.46381 4.66492 7.07807 4.4375 7.85174 4.4375C8.64241 4.4375 9.25666 4.65855 9.69451 5.10064C10.1324 5.53849 10.3513 6.15275 10.3513 6.94342C10.3513 7.59806 10.0813 8.23995 9.54148 8.86908L9.01224 9.46846C8.83795 9.67676 8.71467 9.89356 8.64241 10.1189C8.57014 10.3399 8.52976 10.6311 8.52125 10.9924H6.93991ZM6.77413 12.9436C6.77413 12.6545 6.86552 12.4186 7.04831 12.2358C7.23535 12.053 7.47128 11.9616 7.75609 11.9616C8.0494 11.9616 8.28745 12.0551 8.47024 12.2422C8.65303 12.425 8.74443 12.6588 8.74443 12.9436C8.74443 13.2242 8.65516 13.458 8.47662 13.645C8.29808 13.832 8.0579 13.9256 7.75609 13.9256C7.45853 13.9256 7.22047 13.832 7.04193 13.645C6.8634 13.458 6.77413 13.2242 6.77413 12.9436Z" fill="#C24DFE"/></g><defs><clipPath id="clip0"><rect width="16" height="16" fill="white" transform="translate(0 0.848633)"/></clipPath></defs></svg>
                    </div>
                    <div>
                      <span>Selfplay</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><g clip-path="url(#clip0)"><circle cx="8" cy="8.84863" r="7.5" fill="white" stroke="#C24DFE"/><path d="M6.93991 10.9924C6.93991 10.3973 6.9973 9.92544 7.11208 9.57686C7.2311 9.22404 7.44152 8.88821 7.74334 8.56939C8.06216 8.21657 8.2747 7.9275 8.38097 7.70221C8.48725 7.47691 8.54038 7.24948 8.54038 7.01993C8.54038 6.31003 8.31083 5.95508 7.85174 5.95508C7.64769 5.95508 7.47765 6.05285 7.34162 6.24839C7.2056 6.44393 7.13333 6.70749 7.12483 7.03906H5.32031C5.32881 6.21438 5.55836 5.57462 6.00896 5.11977C6.46381 4.66492 7.07807 4.4375 7.85174 4.4375C8.64241 4.4375 9.25666 4.65855 9.69451 5.10064C10.1324 5.53849 10.3513 6.15275 10.3513 6.94342C10.3513 7.59806 10.0813 8.23995 9.54148 8.86908L9.01224 9.46846C8.83795 9.67676 8.71467 9.89356 8.64241 10.1189C8.57014 10.3399 8.52976 10.6311 8.52125 10.9924H6.93991ZM6.77413 12.9436C6.77413 12.6545 6.86552 12.4186 7.04831 12.2358C7.23535 12.053 7.47128 11.9616 7.75609 11.9616C8.0494 11.9616 8.28745 12.0551 8.47024 12.2422C8.65303 12.425 8.74443 12.6588 8.74443 12.9436C8.74443 13.2242 8.65516 13.458 8.47662 13.645C8.29808 13.832 8.0579 13.9256 7.75609 13.9256C7.45853 13.9256 7.22047 13.832 7.04193 13.645C6.8634 13.458 6.77413 13.2242 6.77413 12.9436Z" fill="#C24DFE"/></g><defs><clipPath id="clip0"><rect width="16" height="16" fill="white" transform="translate(0 0.848633)"/></clipPath></defs></svg>
                    </div>
                  </div>
                </div>
                <div
                  v-for="item in event.times"
                  :key="item.id"
                  v-if="
                    $store.getters['getSelectedZone'] == 'us' &&
                    item.time_edt != '' &&
                    item.time_edt != null &&
                    item.users != item.max
                  "
                  :class="{
                    active: item.id == choosen_event_id && item.users != item.max,
                    grey: item.users == item.max,
                  }"
                  @click="
                    choosen_event_id =
                      item.id == choosen_event_id ? undefined : item.id
                  "
                >

                  <div class="raidSlotItemHeader">
                    <img
                      v-for="fraction_img in fractions"
                      :key="fraction_img.id"
                      v-if="fraction_img.id == item.allegiance"
                      :src="apiImg + 'gicons/' + fraction_img.icon"
                      alt
                    />
                    <span class="itemTime">
                      {{ item.time_edt }}
                      <!-- {{
                        item.time_edt.split(":")[0] +
                        ":" +
                        item.time_edt.split(":")[1]
                      }}-->
                      <span>ETD</span>
                    </span>
                    <span class="slotPeoples">
                      {{ item.users }}/{{ item.max }}
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <g clip-path="url(#clip0)">
                      <path d="M10 2.5C10 3.60457 9.10457 4.5 8 4.5C6.89543 4.5 6 3.60457 6 2.5C6 1.39543 6.89543 0.5 8 0.5C9.10457 0.5 10 1.39543 10 2.5Z" fill="#C24DFE"/>
                      <path d="M5.33333 5.83333C5.33333 5.09695 5.93029 4.5 6.66667 4.5H9.33333C10.0697 4.5 10.6667 5.09695 10.6667 5.83333V11.8333C10.6667 12.5697 10.0697 13.1667 9.33333 13.1667H6.66667C5.93029 13.1667 5.33333 12.5697 5.33333 11.8333V5.83333Z" fill="#C24DFE"/>
                      <path d="M8 5.83333C8 5.09695 8.59695 4.5 9.33333 4.5H10.6667C11.403 4.5 12 5.09695 12 5.83333V8.5C12 9.23638 11.403 9.83333 10.6667 9.83333H9.33333C8.59695 9.83333 8 9.23638 8 8.5V5.83333Z" fill="#C24DFE"/>
                      <path d="M8 12.5C8 11.7636 8.59695 11.1667 9.33333 11.1667C10.0697 11.1667 10.6667 11.7636 10.6667 12.5V15.1667C10.6667 15.903 10.0697 16.5 9.33333 16.5C8.59695 16.5 8 15.903 8 15.1667V12.5Z" fill="#C24DFE"/>
                      <path d="M5.33333 12.5C5.33333 11.7636 5.93029 11.1667 6.66667 11.1667C7.40305 11.1667 8 11.7636 8 12.5V15.1667C8 15.903 7.40305 16.5 6.66667 16.5C5.93029 16.5 5.33333 15.903 5.33333 15.1667V12.5Z" fill="#C24DFE"/>
                      <path d="M4 5.83333C4 5.09695 4.59695 4.5 5.33333 4.5H6.66667C7.40305 4.5 8 5.09695 8 5.83333V8.5C8 9.23638 7.40305 9.83333 6.66667 9.83333H5.33333C4.59695 9.83333 4 9.23638 4 8.5V5.83333Z" fill="#C24DFE"/>
                      </g>
                      <defs>
                      <clipPath id="clip0">
                      <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
                      </clipPath>
                      </defs>
                      </svg>
                    </span>
                  </div>
                  <div class="separator"></div>
                  <div class="slotOptions">
                    <div>
                      <span>Personal loot</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><g clip-path="url(#clip0)"><circle cx="8" cy="8.84863" r="7.5" fill="white" stroke="#C24DFE"/><path d="M6.93991 10.9924C6.93991 10.3973 6.9973 9.92544 7.11208 9.57686C7.2311 9.22404 7.44152 8.88821 7.74334 8.56939C8.06216 8.21657 8.2747 7.9275 8.38097 7.70221C8.48725 7.47691 8.54038 7.24948 8.54038 7.01993C8.54038 6.31003 8.31083 5.95508 7.85174 5.95508C7.64769 5.95508 7.47765 6.05285 7.34162 6.24839C7.2056 6.44393 7.13333 6.70749 7.12483 7.03906H5.32031C5.32881 6.21438 5.55836 5.57462 6.00896 5.11977C6.46381 4.66492 7.07807 4.4375 7.85174 4.4375C8.64241 4.4375 9.25666 4.65855 9.69451 5.10064C10.1324 5.53849 10.3513 6.15275 10.3513 6.94342C10.3513 7.59806 10.0813 8.23995 9.54148 8.86908L9.01224 9.46846C8.83795 9.67676 8.71467 9.89356 8.64241 10.1189C8.57014 10.3399 8.52976 10.6311 8.52125 10.9924H6.93991ZM6.77413 12.9436C6.77413 12.6545 6.86552 12.4186 7.04831 12.2358C7.23535 12.053 7.47128 11.9616 7.75609 11.9616C8.0494 11.9616 8.28745 12.0551 8.47024 12.2422C8.65303 12.425 8.74443 12.6588 8.74443 12.9436C8.74443 13.2242 8.65516 13.458 8.47662 13.645C8.29808 13.832 8.0579 13.9256 7.75609 13.9256C7.45853 13.9256 7.22047 13.832 7.04193 13.645C6.8634 13.458 6.77413 13.2242 6.77413 12.9436Z" fill="#C24DFE"/></g><defs><clipPath id="clip0"><rect width="16" height="16" fill="white" transform="translate(0 0.848633)"/></clipPath></defs></svg>
                    </div>
                    <div>
                      <span>Selfplay</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><g clip-path="url(#clip0)"><circle cx="8" cy="8.84863" r="7.5" fill="white" stroke="#C24DFE"/><path d="M6.93991 10.9924C6.93991 10.3973 6.9973 9.92544 7.11208 9.57686C7.2311 9.22404 7.44152 8.88821 7.74334 8.56939C8.06216 8.21657 8.2747 7.9275 8.38097 7.70221C8.48725 7.47691 8.54038 7.24948 8.54038 7.01993C8.54038 6.31003 8.31083 5.95508 7.85174 5.95508C7.64769 5.95508 7.47765 6.05285 7.34162 6.24839C7.2056 6.44393 7.13333 6.70749 7.12483 7.03906H5.32031C5.32881 6.21438 5.55836 5.57462 6.00896 5.11977C6.46381 4.66492 7.07807 4.4375 7.85174 4.4375C8.64241 4.4375 9.25666 4.65855 9.69451 5.10064C10.1324 5.53849 10.3513 6.15275 10.3513 6.94342C10.3513 7.59806 10.0813 8.23995 9.54148 8.86908L9.01224 9.46846C8.83795 9.67676 8.71467 9.89356 8.64241 10.1189C8.57014 10.3399 8.52976 10.6311 8.52125 10.9924H6.93991ZM6.77413 12.9436C6.77413 12.6545 6.86552 12.4186 7.04831 12.2358C7.23535 12.053 7.47128 11.9616 7.75609 11.9616C8.0494 11.9616 8.28745 12.0551 8.47024 12.2422C8.65303 12.425 8.74443 12.6588 8.74443 12.9436C8.74443 13.2242 8.65516 13.458 8.47662 13.645C8.29808 13.832 8.0579 13.9256 7.75609 13.9256C7.45853 13.9256 7.22047 13.832 7.04193 13.645C6.8634 13.458 6.77413 13.2242 6.77413 12.9436Z" fill="#C24DFE"/></g><defs><clipPath id="clip0"><rect width="16" height="16" fill="white" transform="translate(0 0.848633)"/></clipPath></defs></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              v-if="
                product.raid_enable == 1 &&
                events_by_product != undefined &&
                events_by_product.times != undefined &&
                hide_more_raid &&
                events_by_product.times.length > 4
              "
              @click="hide_more_raid = false"
              id="openAllSlots"
            >
              Open all
            </div>

            <div
              v-if="
                product.raid_enable == 1 &&
                events_by_product != undefined &&
                events_by_product.times != undefined &&
                !hide_more_raid &&
                events_by_product.times.length > 4
              "
              @click="hide_more_raid = true"
              id="openAllSlots"
            >
              Close
            </div>

            <h4 v-if="false">Additional options</h4>
            <div
              v-for="(item, index) in this.chars"
              v-if="chars.length > 0"
              :key="index"
            >
              <h5
                v-html="item.title"
                v-if="item.type == 0"
                class="option_title"
              ></h5>
              <div class="specialDungeon" v-if="item.type == 1">
                <div
                  class="specialDungeonItem"
                  v-if="item.type == 1 && item.checkbox_type != 1"
                  @click="add_option(item)"
                >
                  <div
                    v-bind:class="{ active_check: check_checked(item) }"
                  ></div>
                  <span v-html="item.array.title"></span>
                  <span>
                    <span class="popUpdescr_mask">
                      <svg v-if="!!item.array.descr" xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <g clip-path="url(#clip0)">
                        <circle cx="8" cy="8.84863" r="7.5" fill="white" stroke="#C24DFE"/>
                        <path d="M6.93991 10.9924C6.93991 10.3973 6.9973 9.92544 7.11208 9.57686C7.2311 9.22404 7.44152 8.88821 7.74334 8.56939C8.06216 8.21657 8.2747 7.9275 8.38097 7.70221C8.48725 7.47691 8.54038 7.24948 8.54038 7.01993C8.54038 6.31003 8.31083 5.95508 7.85174 5.95508C7.64769 5.95508 7.47765 6.05285 7.34162 6.24839C7.2056 6.44393 7.13333 6.70749 7.12483 7.03906H5.32031C5.32881 6.21438 5.55836 5.57462 6.00896 5.11977C6.46381 4.66492 7.07807 4.4375 7.85174 4.4375C8.64241 4.4375 9.25666 4.65855 9.69451 5.10064C10.1324 5.53849 10.3513 6.15275 10.3513 6.94342C10.3513 7.59806 10.0813 8.23995 9.54148 8.86908L9.01224 9.46846C8.83795 9.67676 8.71467 9.89356 8.64241 10.1189C8.57014 10.3399 8.52976 10.6311 8.52125 10.9924H6.93991ZM6.77413 12.9436C6.77413 12.6545 6.86552 12.4186 7.04831 12.2358C7.23535 12.053 7.47128 11.9616 7.75609 11.9616C8.0494 11.9616 8.28745 12.0551 8.47024 12.2422C8.65303 12.425 8.74443 12.6588 8.74443 12.9436C8.74443 13.2242 8.65516 13.458 8.47662 13.645C8.29808 13.832 8.0579 13.9256 7.75609 13.9256C7.45853 13.9256 7.22047 13.832 7.04193 13.645C6.8634 13.458 6.77413 13.2242 6.77413 12.9436Z" fill="#C24DFE"/>
                        </g>
                        <defs>
                        <clipPath id="clip0">
                        <rect width="16" height="16" fill="white" transform="translate(0 0.848633)"/>
                        </clipPath>
                        </defs>
                      </svg>
                      <div class="popUpANswer" v-html="item.array.descr"></div>
                    </span>
                    <span
                      v-if="
                        $store.getters['getSelectedZone'] == 'us' &&
                        item.array.usd_sales != 0 &&
                        item.array.usd_sales2 == 0
                      "
                      >+{{ item.array.usd_sales }}$</span
                    >
                    <span
                      v-if="
                        $store.getters['getSelectedZone'] == 'us' &&
                        item.array.usd_sales2 > 0
                      "
                      >+{{ item.array.usd_sales2 }}$</span
                    >
                    <span
                      class="check_box_price"
                      v-if="$store.getters['getSelectedZone'] == 'us'"
                      >+{{ item.array.usd }}$</span
                    >

                    <span
                      v-if="
                        $store.getters['getSelectedZone'] == 'eu' &&
                        item.array.eur_sales > 0 &&
                        item.array.eur_sales2 == 0
                      "
                      >+{{ item.array.eur_sales }}€</span
                    >
                    <span
                      v-if="
                        $store.getters['getSelectedZone'] == 'eu' &&
                        item.array.eur_sales2 > 0
                      "
                      >+{{ item.array.eur_sales2 }}€</span
                    >
                    <span
                      class="check_box_price"
                      v-if="$store.getters['getSelectedZone'] == 'eu'"
                      >+{{ item.array.eur }}€</span
                    >

                    <!--div class="popUpANswer" v-if="item.array.descr !=''">{{item.array.descr}}</!--div-->
                  </span>
                </div>
                <div
                  class="specialDungeonItem"
                  v-if="item.type == 1 && item.checkbox_type == 1"
                  @click="add_option(item)"
                >
                  <div
                    v-bind:class="{ active_check: check_c_checked(item) }"
                  ></div>
                  <span v-html="item.array.title"></span>
                  <span>
                    <span class="popUpdescr_mask">
                      <svg v-if="!!item.array.desc" xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <g clip-path="url(#clip0)">
                      <circle cx="8" cy="8.84863" r="7.5" fill="white" stroke="#C24DFE"/>
                      <path d="M6.93991 10.9924C6.93991 10.3973 6.9973 9.92544 7.11208 9.57686C7.2311 9.22404 7.44152 8.88821 7.74334 8.56939C8.06216 8.21657 8.2747 7.9275 8.38097 7.70221C8.48725 7.47691 8.54038 7.24948 8.54038 7.01993C8.54038 6.31003 8.31083 5.95508 7.85174 5.95508C7.64769 5.95508 7.47765 6.05285 7.34162 6.24839C7.2056 6.44393 7.13333 6.70749 7.12483 7.03906H5.32031C5.32881 6.21438 5.55836 5.57462 6.00896 5.11977C6.46381 4.66492 7.07807 4.4375 7.85174 4.4375C8.64241 4.4375 9.25666 4.65855 9.69451 5.10064C10.1324 5.53849 10.3513 6.15275 10.3513 6.94342C10.3513 7.59806 10.0813 8.23995 9.54148 8.86908L9.01224 9.46846C8.83795 9.67676 8.71467 9.89356 8.64241 10.1189C8.57014 10.3399 8.52976 10.6311 8.52125 10.9924H6.93991ZM6.77413 12.9436C6.77413 12.6545 6.86552 12.4186 7.04831 12.2358C7.23535 12.053 7.47128 11.9616 7.75609 11.9616C8.0494 11.9616 8.28745 12.0551 8.47024 12.2422C8.65303 12.425 8.74443 12.6588 8.74443 12.9436C8.74443 13.2242 8.65516 13.458 8.47662 13.645C8.29808 13.832 8.0579 13.9256 7.75609 13.9256C7.45853 13.9256 7.22047 13.832 7.04193 13.645C6.8634 13.458 6.77413 13.2242 6.77413 12.9436Z" fill="#C24DFE"/>
                      </g>
                      <defs>
                      <clipPath id="clip0">
                      <rect width="16" height="16" fill="white" transform="translate(0 0.848633)"/>
                      </clipPath>
                      </defs>
                      </svg>
                      <div class="popUpANswer" v-html="item.array.desc"></div>
                    </span>

                    <span
                      v-if="
                        $store.getters['getSelectedZone'] == 'us' &&
                        product.price_usd_sale != 0 &&
                        product.price_usd_sale2 == 0
                      "
                      >+{{
                        (
                          (get_slidierUSD_byTitle(item) *
                            parseFloat(item.array.coefficient) *
                            100) /
                          (100 - parseFloat(product.sales_discount))
                        ).toFixed(2)
                      }}$</span
                    >
                    <span
                      v-if="
                        $store.getters['getSelectedZone'] == 'us' &&
                        product.price_usd_sale2 > 0
                      "
                      >+{{
                        (
                          (get_slidierUSD_byTitle(item) *
                            parseFloat(item.array.coefficient) *
                            100) /
                          (100 - parseFloat(product.sales_discount))
                        ).toFixed(2)
                      }}$</span
                    >
                    <span
                      class="check_box_price"
                      v-if="$store.getters['getSelectedZone'] == 'us'"
                      >+{{
                        (
                          get_slidierUSD_byTitle(item) *
                          parseFloat(item.array.coefficient)
                        ).toFixed(2)
                      }}$</span
                    >
                    <span
                      v-if="
                        $store.getters['getSelectedZone'] == 'eu' &&
                        product.price_eur_sale != 0 &&
                        product.price_eur_sale2 == 0
                      "
                      >+{{
                        (
                          (parseFloat(parsget_slidierEUR_byTitle(item)) *
                            parseFloat(item.array.coefficient) *
                            100) /
                          (100 - parseFloat(product.sales_discount))
                        ).toFixed(2)
                      }}€</span
                    >
                    <span
                      v-if="
                        $store.getters['getSelectedZone'] == 'eu' &&
                        product.price_eur_sale2 > 0
                      "
                      >+{{
                        (
                          (parseFloat(get_slidierEUR_byTitle(item)) *
                            parseFloat(item.array.coefficient) *
                            100) /
                          (100 - parseFloat(product.sales_discount))
                        ).toFixed(2)
                      }}€</span
                    >
                    <span
                      class="check_box_price"
                      v-if="$store.getters['getSelectedZone'] == 'eu'"
                      >+{{
                        (
                          parseFloat(get_slidierEUR_byTitle(item)) *
                          parseFloat(item.array.coefficient)
                        ).toFixed(2)
                      }}€</span
                    >

                    <!--div class="popUpANswer" v-if="item.array.descr !=''">{{item.array.descr}}</!--div-->
                  </span>
                </div>
              </div>
              <div
                v-if="item.type == 7"
                class="sliders_container"
                :class="{
                  short_designation:
                    item.short_designation && item.short_designation == 1,
                }"
              >
                <h5 v-html="item.title"></h5>
                <input
                  type="text"
                  :id="item.title"
                  name="my_range"
                  style="display:none"
                  value
                  :class="[`js-range-slider-double-${index}`]"
                />
                <div class="under_thumb_info">
                  <div v-if="$store.getters['getSelectedZone'] == 'us'">
                    {{ get_double_usd(item.title) }}$
                  </div>
                  <div v-if="$store.getters['getSelectedZone'] == 'eu'">
                    {{ get_double_eur(item.title) }}€
                  </div>
                  <div>{{ get_double_title(item.title) }}</div>
                </div>
              </div>
              <div
                v-if="item.type == 14"
                class="sliders_container"
                :class="{
                  short_designation:
                    item.short_designation && item.short_designation == 1,
                }"
              >
                <ul class="ordersFilter" style="margin-bottom: 35px">
                  <li
                    v-for="(titles, index) in item.titles"
                    v-bind:key="index"
                    v-bind:class="{ active: titles == item.choosen_price }"
                    @click="change_price_double(titles, item.title)"
                  >
                    {{ titles }}
                  </li>
                </ul>
                <h5 v-html="item.title"></h5>
                <input
                  type="text"
                  :id="item.title"
                  name="my_range"
                  style="display:none"
                  value
                  :class="[`js-range-slider-double-price-${index}`]"
                />
                <div class="under_thumb_info" style="top: 40px">
                  <div v-if="$store.getters['getSelectedZone'] == 'us'">
                    {{ get_double_usd(item.title) }}$
                  </div>
                  <div v-if="$store.getters['getSelectedZone'] == 'eu'">
                    {{ get_double_eur(item.title) }}€
                  </div>
                  <div>{{ get_double_title(item.title) }}</div>
                </div>
              </div>
              <div
                v-if="item.type == 8"
                class="sliders_container"
                :class="{
                  short_designation:
                    item.short_designation && item.short_designation == 1,
                }"
              >
                <h5 v-html="item.title"></h5>
                <input
                  type="text"
                  :id="item.title"
                  name="my_range"
                  style="display:none"
                  value
                  :class="[`js-range-slider-${index}`]"
                />
                <div
                  class="under_thumb_info"
                  v-for="(sign, index) in sliders_check_price"
                  v-bind:key="index"
                  v-if="sign.title == item.title"
                >
                  <div v-if="$store.getters['getSelectedZone'] == 'us'">
                    {{ sign.usd }}$
                  </div>
                  <div v-if="$store.getters['getSelectedZone'] == 'eu'">
                    {{ sign.eur }}€
                  </div>
                  <div>{{ sign.real_value }}</div>
                </div>
              </div>
              <div
                v-if="item.type == 13"
                class="sliders_container"
                :class="{
                  short_designation:
                    item.short_designation && item.short_designation == 1,
                }"
              >
                <ul class="ordersFilter" style="margin-bottom: 35px">
                  <li
                    v-for="(titles, index) in item.titles"
                    v-bind:key="index"
                    v-bind:class="{ active: titles == item.choosen_price }"
                    @click="change_price(titles, item.title)"
                  >
                    {{ titles }}
                  </li>
                </ul>
                <h5 v-html="item.title"></h5>
                <input
                  type="text"
                  :id="item.title"
                  name="my_range"
                  style="display:none"
                  value
                  :class="[`js-range-slider-price-${index}`]"
                />
                <div
                  class="under_thumb_info"
                  v-for="(sign, index) in sliders_check_price"
                  v-bind:key="index"
                  v-if="sign.title == item.title"
                  style="top: 40px"
                >
                  <div v-if="$store.getters['getSelectedZone'] == 'us'">
                    {{ sign.usd }}$
                  </div>
                  <div v-if="$store.getters['getSelectedZone'] == 'eu'">
                    {{ sign.eur }}€
                  </div>
                  <div>{{ sign.real_value }}</div>
                </div>
              </div>

              <div v-if="item.type == 5" style="margin-top: 32px">
                <h5
                  style="display: inline-block"
                  v-html="item.array.title"
                ></h5>
                <span class="popUpdescr_mask">
                  <svg v-if="!!item.array.desc" xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <g clip-path="url(#clip0)">
                      <circle cx="8" cy="8.84863" r="7.5" fill="white" stroke="#C24DFE"/>
                      <path d="M6.93991 10.9924C6.93991 10.3973 6.9973 9.92544 7.11208 9.57686C7.2311 9.22404 7.44152 8.88821 7.74334 8.56939C8.06216 8.21657 8.2747 7.9275 8.38097 7.70221C8.48725 7.47691 8.54038 7.24948 8.54038 7.01993C8.54038 6.31003 8.31083 5.95508 7.85174 5.95508C7.64769 5.95508 7.47765 6.05285 7.34162 6.24839C7.2056 6.44393 7.13333 6.70749 7.12483 7.03906H5.32031C5.32881 6.21438 5.55836 5.57462 6.00896 5.11977C6.46381 4.66492 7.07807 4.4375 7.85174 4.4375C8.64241 4.4375 9.25666 4.65855 9.69451 5.10064C10.1324 5.53849 10.3513 6.15275 10.3513 6.94342C10.3513 7.59806 10.0813 8.23995 9.54148 8.86908L9.01224 9.46846C8.83795 9.67676 8.71467 9.89356 8.64241 10.1189C8.57014 10.3399 8.52976 10.6311 8.52125 10.9924H6.93991ZM6.77413 12.9436C6.77413 12.6545 6.86552 12.4186 7.04831 12.2358C7.23535 12.053 7.47128 11.9616 7.75609 11.9616C8.0494 11.9616 8.28745 12.0551 8.47024 12.2422C8.65303 12.425 8.74443 12.6588 8.74443 12.9436C8.74443 13.2242 8.65516 13.458 8.47662 13.645C8.29808 13.832 8.0579 13.9256 7.75609 13.9256C7.45853 13.9256 7.22047 13.832 7.04193 13.645C6.8634 13.458 6.77413 13.2242 6.77413 12.9436Z" fill="#C24DFE"/>
                      </g>
                      <defs>
                      <clipPath id="clip0">
                      <rect width="16" height="16" fill="white" transform="translate(0 0.848633)"/>
                      </clipPath>
                      </defs>
                      </svg>
                  <div class="popUpANswer" v-html="item.array.descr"></div>
                </span>
                <div
                  class="multipleOption"
                  v-bind:class="{ open_tab_multi: item.open }"
                  v-on:click.self="open_tab_multiselect(item)"
                >
                  <div
                    class="moHeader"
                    v-on:click.self="open_tab_multiselect(item)"
                  >
                    <span v-on:click.self="open_tab_multiselect(item)"
                      >{{ item.counter }} options selected</span
                    >
                    <svg :class="{ list_arrow_up: item.open }" @click.self="open_tab_multiselect(item)"  xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 6L8 11L13 6" stroke="#595E61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </div>
                  <div
                    class="moOptions"
                    v-for="(sub_item, index) in item.array.subarray"
                    :key="index"
                    @click="add_sub_option(sub_item, item)"
                  >
                    <div
                      class="sub_checked"
                      v-bind:class="{
                        active_check: check_sub_checked(sub_item),
                      }"
                    ></div>
                    <span v-html="sub_item.title"></span>
                    <span class="moPrice">
                      <span class="popUpdescr_mask">
                        <svg v-if="!!sub_item.desc" xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <g clip-path="url(#clip0)">
                        <circle cx="8" cy="8.84863" r="7.5" fill="white" stroke="#C24DFE"/>
                        <path d="M6.93991 10.9924C6.93991 10.3973 6.9973 9.92544 7.11208 9.57686C7.2311 9.22404 7.44152 8.88821 7.74334 8.56939C8.06216 8.21657 8.2747 7.9275 8.38097 7.70221C8.48725 7.47691 8.54038 7.24948 8.54038 7.01993C8.54038 6.31003 8.31083 5.95508 7.85174 5.95508C7.64769 5.95508 7.47765 6.05285 7.34162 6.24839C7.2056 6.44393 7.13333 6.70749 7.12483 7.03906H5.32031C5.32881 6.21438 5.55836 5.57462 6.00896 5.11977C6.46381 4.66492 7.07807 4.4375 7.85174 4.4375C8.64241 4.4375 9.25666 4.65855 9.69451 5.10064C10.1324 5.53849 10.3513 6.15275 10.3513 6.94342C10.3513 7.59806 10.0813 8.23995 9.54148 8.86908L9.01224 9.46846C8.83795 9.67676 8.71467 9.89356 8.64241 10.1189C8.57014 10.3399 8.52976 10.6311 8.52125 10.9924H6.93991ZM6.77413 12.9436C6.77413 12.6545 6.86552 12.4186 7.04831 12.2358C7.23535 12.053 7.47128 11.9616 7.75609 11.9616C8.0494 11.9616 8.28745 12.0551 8.47024 12.2422C8.65303 12.425 8.74443 12.6588 8.74443 12.9436C8.74443 13.2242 8.65516 13.458 8.47662 13.645C8.29808 13.832 8.0579 13.9256 7.75609 13.9256C7.45853 13.9256 7.22047 13.832 7.04193 13.645C6.8634 13.458 6.77413 13.2242 6.77413 12.9436Z" fill="#C24DFE"/>
                        </g>
                        <defs>
                        <clipPath id="clip0">
                        <rect width="16" height="16" fill="white" transform="translate(0 0.848633)"/>
                        </clipPath>
                        </defs>
                        </svg>
                        <div class="popUpANswer" v-html="sub_item.descr"></div>
                      </span>
                      <span
                        v-if="
                          $store.getters['getSelectedZone'] == 'us' &&
                          sub_item.usd_sales != 0 &&
                          sub_item.usd_sales2 == 0
                        "
                        >+{{ sub_item.usd_sales }}$</span
                      >
                      <span
                        v-if="
                          $store.getters['getSelectedZone'] == 'us' &&
                          sub_item.usd_sales2 > 0
                        "
                        >+{{ sub_item.usd_sales2 }}$</span
                      >
                      <span
                        class="check_box_price"
                        v-if="$store.getters['getSelectedZone'] == 'us'"
                        >+{{ sub_item.usd }}$</span
                      >

                      <span
                        v-if="
                          $store.getters['getSelectedZone'] == 'eu' &&
                          sub_item.eur_sales > 0 &&
                          sub_item.eur_sales2 == 0
                        "
                        >+{{ sub_item.eur_sales }}€</span
                      >
                      <span
                        v-if="
                          $store.getters['getSelectedZone'] == 'eu' &&
                          sub_item.eur_sales2 > 0
                        "
                        >+{{ sub_item.eur_sales2 }}€</span
                      >
                      <span
                        class="check_box_price"
                        v-if="$store.getters['getSelectedZone'] == 'eu'"
                        >+{{ sub_item.eur }}€</span
                      >
                    </span>
                  </div>
                </div>
              </div>
              <div v-if="item.type == 4" style="margin-top: 32px">
                <h5
                  style="display: inline-block"
                  v-html="item.array.title"
                ></h5>
                <span class="popUpdescr_mask">
                  <svg v-if="!!item.array.descr" xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <g clip-path="url(#clip0)">
                  <circle cx="8" cy="8.84863" r="7.5" fill="white" stroke="#C24DFE"/>
                  <path d="M6.93991 10.9924C6.93991 10.3973 6.9973 9.92544 7.11208 9.57686C7.2311 9.22404 7.44152 8.88821 7.74334 8.56939C8.06216 8.21657 8.2747 7.9275 8.38097 7.70221C8.48725 7.47691 8.54038 7.24948 8.54038 7.01993C8.54038 6.31003 8.31083 5.95508 7.85174 5.95508C7.64769 5.95508 7.47765 6.05285 7.34162 6.24839C7.2056 6.44393 7.13333 6.70749 7.12483 7.03906H5.32031C5.32881 6.21438 5.55836 5.57462 6.00896 5.11977C6.46381 4.66492 7.07807 4.4375 7.85174 4.4375C8.64241 4.4375 9.25666 4.65855 9.69451 5.10064C10.1324 5.53849 10.3513 6.15275 10.3513 6.94342C10.3513 7.59806 10.0813 8.23995 9.54148 8.86908L9.01224 9.46846C8.83795 9.67676 8.71467 9.89356 8.64241 10.1189C8.57014 10.3399 8.52976 10.6311 8.52125 10.9924H6.93991ZM6.77413 12.9436C6.77413 12.6545 6.86552 12.4186 7.04831 12.2358C7.23535 12.053 7.47128 11.9616 7.75609 11.9616C8.0494 11.9616 8.28745 12.0551 8.47024 12.2422C8.65303 12.425 8.74443 12.6588 8.74443 12.9436C8.74443 13.2242 8.65516 13.458 8.47662 13.645C8.29808 13.832 8.0579 13.9256 7.75609 13.9256C7.45853 13.9256 7.22047 13.832 7.04193 13.645C6.8634 13.458 6.77413 13.2242 6.77413 12.9436Z" fill="#C24DFE"/>
                  </g>
                  <defs>
                  <clipPath id="clip0">
                  <rect width="16" height="16" fill="white" transform="translate(0 0.848633)"/>
                  </clipPath>
                  </defs>
                  </svg>
                  <div class="popUpANswer" v-html="item.array.descr"></div>
                </span>
                <div
                  class="multipleOption"
                  v-bind:class="{ open_tab_multi: item.open }"
                  v-on:click.self="open_tab_multiselect(item)"
                >
                  <div
                    class="moHeader"
                    v-on:click.self="open_tab_multiselect(item)"
                  >
                    <span
                      v-on:click.self="open_tab_multiselect(item)"
                      v-if="!item.select_name"
                      >{{ item.counter }} options selected</span
                    >
                    <span
                      v-on:click.self="open_tab_multiselect(item)"
                      v-if="item.select_name"
                      >{{ item.select_name }}</span
                    >
                    <svg :class="{ list_arrow_up: item.open }" @click.self="open_tab_multiselect(item)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 6L8 11L13 6" stroke="#595E61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </div>
                  <div
                    class="moOptions"
                    v-for="(sub_item, index) in item.array.subarray"
                    :key="index"
                    @click="add_sub_option(sub_item, item)"
                  >
                    <div
                      class="sub_checked"
                      v-bind:class="{
                        active_check: check_sub_checked(sub_item),
                      }"
                    ></div>
                    <span v-html="sub_item.title"></span>
                    <span class="moPrice">
                      <span class="popUpdescr_mask">
                        <svg v-if="!!sub_item.descr" xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <g clip-path="url(#clip0)">
                        <circle cx="8" cy="8.84863" r="7.5" fill="white" stroke="#C24DFE"/>
                        <path d="M6.93991 10.9924C6.93991 10.3973 6.9973 9.92544 7.11208 9.57686C7.2311 9.22404 7.44152 8.88821 7.74334 8.56939C8.06216 8.21657 8.2747 7.9275 8.38097 7.70221C8.48725 7.47691 8.54038 7.24948 8.54038 7.01993C8.54038 6.31003 8.31083 5.95508 7.85174 5.95508C7.64769 5.95508 7.47765 6.05285 7.34162 6.24839C7.2056 6.44393 7.13333 6.70749 7.12483 7.03906H5.32031C5.32881 6.21438 5.55836 5.57462 6.00896 5.11977C6.46381 4.66492 7.07807 4.4375 7.85174 4.4375C8.64241 4.4375 9.25666 4.65855 9.69451 5.10064C10.1324 5.53849 10.3513 6.15275 10.3513 6.94342C10.3513 7.59806 10.0813 8.23995 9.54148 8.86908L9.01224 9.46846C8.83795 9.67676 8.71467 9.89356 8.64241 10.1189C8.57014 10.3399 8.52976 10.6311 8.52125 10.9924H6.93991ZM6.77413 12.9436C6.77413 12.6545 6.86552 12.4186 7.04831 12.2358C7.23535 12.053 7.47128 11.9616 7.75609 11.9616C8.0494 11.9616 8.28745 12.0551 8.47024 12.2422C8.65303 12.425 8.74443 12.6588 8.74443 12.9436C8.74443 13.2242 8.65516 13.458 8.47662 13.645C8.29808 13.832 8.0579 13.9256 7.75609 13.9256C7.45853 13.9256 7.22047 13.832 7.04193 13.645C6.8634 13.458 6.77413 13.2242 6.77413 12.9436Z" fill="#C24DFE"/>
                        </g>
                        <defs>
                        <clipPath id="clip0">
                        <rect width="16" height="16" fill="white" transform="translate(0 0.848633)"/>
                        </clipPath>
                        </defs>
                        </svg>
                        <div class="popUpANswer" v-html="sub_item.descr"></div>
                      </span>
                      <span
                        v-if="
                          $store.getters['getSelectedZone'] == 'us' &&
                          sub_item.usd_sales != 0 &&
                          sub_item.usd_sales2 == 0
                        "
                        >+{{ sub_item.usd_sales }}$</span
                      >
                      <span
                        v-if="
                          $store.getters['getSelectedZone'] == 'us' &&
                          sub_item.usd_sales2 > 0
                        "
                        >+{{ sub_item.usd_sales2 }}$</span
                      >
                      <span
                        class="check_box_price"
                        v-if="$store.getters['getSelectedZone'] == 'us'"
                        >+{{ sub_item.usd }}$</span
                      >

                      <span
                        v-if="
                          $store.getters['getSelectedZone'] == 'eu' &&
                          sub_item.eur_sales > 0 &&
                          sub_item.eur_sales2 == 0
                        "
                        >+{{ sub_item.eur_sales }}€</span
                      >
                      <span
                        v-if="
                          $store.getters['getSelectedZone'] == 'eu' &&
                          sub_item.eur_sales2 > 0
                        "
                        >+{{ sub_item.eur_sales2 }}€</span
                      >
                      <span
                        class="check_box_price"
                        v-if="$store.getters['getSelectedZone'] == 'eu'"
                        >+{{ sub_item.eur }}€</span
                      >
                    </span>
                  </div>
                </div>
              </div>
              <div
                v-for="(sub_item, index) in cacl_array"
                :key="index"
                v-if="
                  item.type == 6 && sub_item.array.title == item.array.title
                "
              >
                <h5>
                  Choose the amount of
                  <span v-html="sub_item.array.title"></span> you need
                </h5>
                <div class="calc_div">
                  <div v-if="$store.getters['getSelectedZone'] == 'us'">
                    {{
                      (
                        parseFloat(sub_item.array.min_usd) +
                        parseFloat(sub_item.count) *
                          parseFloat(sub_item.array.usd)
                      ).toFixed(2)
                    }}$
                  </div>
                  <div v-if="$store.getters['getSelectedZone'] == 'eu'">
                    {{
                      (
                        parseFloat(sub_item.array.min_eur) +
                        parseFloat(sub_item.count) *
                          parseFloat(sub_item.array.eur)
                      ).toFixed(2)
                    }}€
                  </div>
                  <div class="count" style="width: 190px; margin-bottom: 30px">
                    <svg style="float: left" @click="calc_minus(sub_item)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1 8H15" stroke="#ACAFB0" stroke-width="2"></path></svg>
                    <span style="margin: 0; width: 80%">{{
                      parseFloat(sub_item.array.min) +
                      parseFloat(sub_item.count) *
                        parseFloat(sub_item.array.step)
                    }}</span>
                    <svg style="float: right" @click="calc_plus(sub_item)" alt="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1V15M15 8L1 8" stroke="#ACAFB0" stroke-width="2"></path></svg>
                  </div>
                </div>
              </div>
              <div v-if="item.type == 16" style="margin-top: 32px">
                <div class="rank_char_title">Select the ranks</div>
                <div class="rank_select_item">
                  <div class="rank_select_item_img">
                    <img
                      :src="
                        apiImg +
                        'sku/' +
                        get_ranks_img(
                          first_rank_select.rank,
                          first_rank_select.division
                        )
                      "
                      alt
                    />
                  </div>
                  <div>
                    <div class="rank_select_item_title">
                      <div>Current Rank</div>
                      <div>Please select your current rank</div>
                    </div>
                    <div class="rank_select_item_selects">
                      <div @click="
                        f_rank_open = f_rank_open ? false : true,
                        f_division_open = false,
                        s_division_open = false,
                        s_rank_open = false,
                        reloadRank_select()">
                        <span>{{
                          item.rank[first_rank_select.rank].title
                        }}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 6L8 11L13 6" stroke="#595E61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>

                        <div v-if="f_rank_open">
                          <div
                            @click="
                              (first_rank_select.rank = index),
                                update_ranks('first')
                            "
                            v-for="(rank, index) in item.rank"
                            :key="index"
                          >
                            {{ rank.title }}
                          </div>
                        </div>
                      </div>
                      <div
                        class="count"
                        v-if="
                          rank_option.rank[first_rank_select.rank].is_rank == 0
                        "
                      >
                        <svg @click="current--" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1 8H15" stroke="#ACAFB0" stroke-width="2"></path></svg>
                        <input
                          type="number"
                          class="input_class"
                          v-model="current"
                          size="4"
                          v-if="
                            rank_option.rank[first_rank_select.rank].is_rank ==
                            0
                          "
                        />
                        <svg alt="" xmlns="http://www.w3.org/2000/svg" @click="current++" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1V15M15 8L1 8" stroke="#ACAFB0" stroke-width="2"></path></svg>
                      </div>
                      <div
                        @click="
                          f_division_open = f_division_open ? false : true,
                          f_rank_open = false,
                          s_division_open = false,
                          s_rank_open = false,
                          reloadRank_select()
                        "
                        v-if="
                          rank_option.rank[first_rank_select.rank].is_rank != 0
                        "
                      >
                        <span>{{
                          item.division[first_rank_select.division]
                        }}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 6L8 11L13 6" stroke="#595E61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>

                        <div v-if="f_division_open">
                          <div
                            v-for="(division, index) in item.division"
                            :key="index"
                            @click="
                              (first_rank_select.division =
                                index == rank_option.division.length
                                  ? index - 1
                                  : index),
                                update_ranks('first')
                            "
                          >
                            {{ division }}
                          </div>
                        </div>
                      </div>

                      <div
                        v-for="(item, index) in rank_selects"
                        :key="index"
                        v-if="
                          item.area == 'current' &&
                          rank_option.rank[first_rank_select.rank].is_rank != 0
                        "
                        @click="reloadRank_selects(item)"
                      >
                        <span>{{ item.subarray[item.selected].title }}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 6L8 11L13 6" stroke="#595E61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>

                        <div v-if="item.open_div">
                          <div
                            @click="
                              (item.selected = index),
                                init_step(),
                                step_trigger()
                            "
                            v-for="(select_item, index) in item.subarray"
                            :key="index"
                          >
                            {{ select_item.title }}
                          </div>
                        </div>
                        <span class="rank_select_title">
                          {{ item.title }}
                        </span>
                      </div>
                      <div
                        v-for="(item, index) in rank_selects"
                        :key="index"
                        v-if="
                          item.area == 'current' &&
                          rank_option.rank[first_rank_select.rank].is_rank ==
                            0 &&
                          item.type != 'Raiting'
                        "
                        @click="item.open_div = item.open_div ? false : true"
                      >
                        <span>{{ item.subarray[item.selected].title }}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 6L8 11L13 6" stroke="#595E61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>

                        <div v-if="item.open_div">
                          <div
                            @click="
                              (item.selected = index),
                                init_step(),
                                step_trigger()
                            "
                            v-for="(select_item, index) in item.subarray"
                            :key="index"
                          >
                            {{ select_item.title }}
                          </div>
                        </div>
                        <span class="rank_select_title">
                          {{ item.title }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="rank_select_item">
                  <div class="rank_select_item_img">
                    <img
                      :src="
                        apiImg +
                        'sku/' +
                        get_ranks_img(
                          second_rank_select.rank,
                          second_rank_select.division
                        )
                      "
                      alt
                    />
                  </div>
                  <div>
                    <div class="rank_select_item_title">
                      <div>Desired Rank</div>
                      <div>Please select your desired rank</div>
                    </div>
                    <div class="rank_select_item_selects">
                      <div @click="
                        s_rank_open = s_rank_open ? false : true
                        f_division_open = false,
                        s_division_open = false,
                        f_rank_open = false,
                        reloadRank_select()
                      ">
                        <span>{{
                          item.rank[second_rank_select.rank].title
                        }}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 6L8 11L13 6" stroke="#595E61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>

                        <div v-if="s_rank_open">
                          <div
                            v-for="(rank, index) in item.rank"
                            :key="index"
                            @click="
                              (second_rank_select.rank = index),
                                update_ranks('second')
                            "
                          >
                            {{ rank.title }}
                          </div>
                        </div>
                      </div>
                      <div
                        class="count"
                        v-if="
                          rank_option.rank[second_rank_select.rank].is_rank == 0
                        "
                      >
                        <svg  @click="desire--" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1 8H15" stroke="#ACAFB0" stroke-width="2"></path></svg>
                        <input
                          type="number"
                          class="input_class"
                          v-model="desire"
                          size="4"
                          v-if="
                            rank_option.rank[second_rank_select.rank].is_rank ==
                            0
                          "
                        />
                        <svg alt="" @click="desire++" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1V15M15 8L1 8" stroke="#ACAFB0" stroke-width="2"></path></svg>
                      </div>
                      <div
                        @click="
                          s_division_open = s_division_open ? false : true,
                          f_division_open = false,
                          f_rank_open = false,
                          s_rank_open = false,
                          reloadRank_select()
                        "
                        v-if="
                          rank_option.rank[second_rank_select.rank].is_rank != 0
                        "
                      >
                        <span>{{
                          item.division[second_rank_select.division]
                        }}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 6L8 11L13 6" stroke="#595E61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>

                        <div v-if="s_division_open">
                          <div
                            v-for="(division, index) in item.division"
                            :key="index"
                            @click="
                              changeDivision(index),
                              update_ranks('second')
                            "
                          >
                            {{ division }}
                          </div>
                        </div>
                      </div>
                      <div
                        v-for="(item, index) in rank_selects"
                        :key="index"
                        v-if="
                          item.area == 'desired' &&
                          rank_option.rank[first_rank_select.rank].is_rank != 0
                        "
                        @click="reloadRank_selects(item)"
                      >
                        <span>{{ item.subarray[item.selected].title }}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 6L8 11L13 6" stroke="#595E61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>

                        <div v-if="item.open_div">
                          <div
                            @click="
                              (item.selected = index),
                                init_step(),
                                step_trigger()
                            "
                            v-for="(select_item, index) in item.subarray"
                            :key="index"
                          >
                            {{ select_item.title }}
                          </div>
                        </div>
                        <span class="rank_select_title">
                          {{ item.title }}
                        </span>
                      </div>
                      <div
                        v-for="(item, index) in rank_selects"
                        :key="index"
                        v-if="
                          item.area == 'desired' &&
                          rank_option.rank[first_rank_select.rank].is_rank ==
                            0 &&
                          item.type != 'Raiting'
                        "
                        @click="item.open_div = item.open_div ? false : true"
                      >
                        <span>{{ item.subarray[item.selected].title }}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 6L8 11L13 6" stroke="#595E61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>

                        <div v-if="item.open_div">
                          <div
                            @click="
                              (item.selected = index),
                                init_step(),
                                step_trigger()
                            "
                            v-for="(select_item, index) in item.subarray"
                            :key="index"
                          >
                            {{ select_item.title }}
                          </div>
                        </div>
                        <span class="rank_select_title">
                          {{ item.title }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="movileItemShareLogo">
      <div class="shareLogo">
        <div>
          <a href="https://www.facebook.com/CakeGamesExp/">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13.1399 22.9999V12.9646H16.383L16.8686 9.05373H13.1399V6.55673C13.1399 5.42446 13.4426 4.65275 15.0061 4.65275L17 4.65179V1.15394C16.655 1.10645 15.4715 1 14.0945 1C11.2197 1 9.25153 2.8225 9.25153 6.1696V9.05383H6V12.9647H9.25143V23L13.1399 22.9999Z" fill="#4064AD"/></svg>
          </a>
          <!--a href="google.com">
            <img src="/img(ColorSochialLogo)/Google Color.svg" alt />
          </!--a-->
          <a
            style="cursor: pointer"
            @click="$store.commit('set_contact_us_discord', true)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9.85562 10.3623C9.20012 10.3623 8.68262 10.9373 8.68262 11.6388C8.68262 12.3403 9.21162 12.9153 9.85562 12.9153C10.5111 12.9153 11.0286 12.3403 11.0286 11.6388C11.0401 10.9373 10.5111 10.3623 9.85562 10.3623ZM14.0531 10.3623C13.3976 10.3623 12.8801 10.9373 12.8801 11.6388C12.8801 12.3403 13.4091 12.9153 14.0531 12.9153C14.7086 12.9153 15.2261 12.3403 15.2261 11.6388C15.2261 10.9373 14.7086 10.3623 14.0531 10.3623Z" fill="#7289DA"/>
            <path d="M19.6425 0.713867H4.2325C2.933 0.713867 1.875 1.77187 1.875 3.08287V18.6309C1.875 19.9419 2.933 20.9999 4.2325 20.9999H17.2735L16.664 18.8724L18.136 20.2409L19.5275 21.5289L22 23.7139V3.08287C22 1.77187 20.942 0.713867 19.6425 0.713867ZM15.2035 15.7329C15.2035 15.7329 14.7895 15.2384 14.4445 14.8014C15.951 14.3759 16.526 13.4329 16.526 13.4329C16.0545 13.7434 15.606 13.9619 15.2035 14.1114C14.6285 14.3529 14.0765 14.5139 13.536 14.6059C12.432 14.8129 11.42 14.7554 10.5575 14.5944C9.902 14.4679 9.3385 14.2839 8.867 14.0999C8.6025 13.9964 8.315 13.8699 8.0275 13.7089C7.993 13.6859 7.9585 13.6744 7.924 13.6514C7.901 13.6399 7.8895 13.6284 7.878 13.6169C7.671 13.5019 7.556 13.4214 7.556 13.4214C7.556 13.4214 8.108 14.3414 9.5685 14.7784C9.2235 15.2154 8.798 15.7329 8.798 15.7329C6.2565 15.6524 5.2905 13.9849 5.2905 13.9849C5.2905 10.2819 6.9465 7.28037 6.9465 7.28037C8.6025 6.03837 10.178 6.07287 10.178 6.07287L10.293 6.21087C8.223 6.80887 7.2685 7.71737 7.2685 7.71737C7.2685 7.71737 7.5215 7.57937 7.947 7.38387C9.1775 6.84337 10.155 6.69387 10.5575 6.65937C10.6265 6.64787 10.684 6.63637 10.753 6.63637C11.4545 6.54437 12.248 6.52137 13.076 6.61337C14.1685 6.73987 15.3415 7.06187 16.5375 7.71737C16.5375 7.71737 15.629 6.85487 13.674 6.25687L13.835 6.07287C13.835 6.07287 15.4105 6.03837 17.0665 7.28037C17.0665 7.28037 18.7225 10.2819 18.7225 13.9849C18.7225 13.9849 17.745 15.6524 15.2035 15.7329Z" fill="#7289DA"/>
            </svg>
          </a>
          <!--a href="https://www.twitch.tv/cakeboost">
            <img src="/img(ColorSochialLogo)/Twitch.svg" alt />
          </!--a>
          <a-- href="https://www.instagram.com/cakeboost/">
            <img src="/img(ColorSochialLogo)/Inst.svg" alt />
          </a-->
          <a href="https://twitter.com/Cake_boost">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M23 5.25069C22.1893 5.63104 21.3196 5.88926 20.4071 6.00441C21.3393 5.4112 22.0548 4.46905 22.3895 3.34894C21.5165 3.90028 20.5515 4.29807 19.5242 4.51442C18.7004 3.58274 17.5287 3 16.229 3C13.7379 3 11.7161 5.14949 11.7161 7.79798C11.7161 8.17484 11.7555 8.54123 11.8343 8.89017C8.0828 8.69128 4.75802 6.77906 2.53275 3.87585C2.14546 4.58421 1.92227 5.40771 1.92227 6.28705C1.92227 7.95152 2.71983 9.42057 3.93093 10.279C3.19245 10.2545 2.49664 10.0382 1.88617 9.67879C1.88617 9.69972 1.88617 9.71717 1.88617 9.73811C1.88617 12.0621 3.44189 14.0022 5.50634 14.4419C5.1289 14.55 4.72848 14.6094 4.31822 14.6094C4.02611 14.6094 3.74385 14.578 3.46815 14.5221C4.04252 16.4274 5.70983 17.8162 7.68238 17.8545C6.13651 19.1421 4.1935 19.9098 2.07653 19.9098C1.71222 19.9098 1.35447 19.8854 1 19.8435C2.99552 21.2044 5.36849 22 7.91869 22C16.2192 22 20.7583 14.6896 20.7583 8.34931C20.7583 8.13995 20.755 7.93407 20.7452 7.72819C21.6281 7.05124 22.3928 6.2068 22.9967 5.24371L23 5.25069Z" fill="#41ABE1"/>
            </svg>
          </a>
          <!--a href="https://www.youtube.com/channel/UCe-rP...subscriber">
            <img src="/img(ColorSochialLogo)/YT.svg" alt />
          </!--a-->
          <a href="https://www.whatsapp.com/">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M11.4622 1.01272C5.60469 1.28937 0.982282 6.12812 1.00005 11.9449C1.00546 13.7165 1.43665 15.3887 2.19729 16.8662L1.02944 22.4893C0.966262 22.7935 1.24283 23.0598 1.54746 22.9883L7.10231 21.6828C8.52944 22.388 10.1324 22.7953 11.8289 22.8209C17.8158 22.9116 22.8079 18.1963 22.9945 12.2599C23.1945 5.89657 17.8999 0.708611 11.4622 1.01272ZM18.0903 17.9522C16.4636 19.5659 14.3006 20.4545 12 20.4545C10.6529 20.4545 9.36323 20.1547 8.16663 19.5635L7.39304 19.1813L3.98734 19.9816L4.70422 16.5298L4.32311 15.7895C3.70192 14.5828 3.38695 13.2779 3.38695 11.9111C3.38695 9.62904 4.28285 7.48363 5.90963 5.86994C7.52188 4.27072 9.72011 3.36759 12.0002 3.36759C14.3008 3.36765 16.4636 4.25631 18.0904 5.86989C19.7172 7.48353 20.6131 9.62894 20.6131 11.9109C20.6131 14.1726 19.7026 16.3531 18.0903 17.9522Z" fill="#0DC143"/>
            <path d="M16.9478 14.4366L14.9019 13.805C14.6329 13.722 14.3433 13.8041 14.1473 14.0188L13.647 14.5668C13.436 14.7979 13.1159 14.8722 12.8367 14.7507C11.8689 14.3296 9.83302 12.3834 9.31311 11.4099C9.16311 11.1291 9.18792 10.778 9.37209 10.5218L9.80888 9.91426C9.98001 9.67621 10.0161 9.35652 9.90295 9.08135L9.0422 6.98824C8.83603 6.48691 8.24017 6.34097 7.8509 6.69494C7.2799 7.21418 6.6024 8.00322 6.52005 8.87736C6.37484 10.4185 6.98959 12.3613 9.31428 14.6941C11.9999 17.3892 14.1506 17.7452 15.5509 17.3805C16.3451 17.1737 16.9798 16.3445 17.3804 15.6656C17.6535 15.2027 17.4378 14.588 16.9478 14.4366Z" fill="#0DC143"/>
            </svg>
          </a>
          <!--a href="https://ru.linkedin.com/">
            <img src="/img(ColorSochialLogo)/LiknedIn.svg" alt />
          </!--a-->
          <a href="https://t.me/cakeboost">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9.63262 14.8632L9.2687 19.8888C9.78938 19.8888 10.0149 19.6692 10.2853 19.4055L12.7264 17.115L17.7847 20.7519C18.7124 21.2595 19.366 20.9922 19.6163 19.914L22.9365 4.63926L22.9374 4.63836C23.2317 3.29196 22.4415 2.76547 21.5377 3.09576L2.02135 10.4316C0.689406 10.9392 0.709573 11.6682 1.79493 11.9985L6.78447 13.5222L18.3742 6.40235C18.9196 6.04775 19.4155 6.24395 19.0076 6.59855L9.63262 14.8632Z" fill="#29A0DC"/>
            </svg>
          </a>
          <!--a href="https://www.viber.com/ru/">
            <img src="/img(ColorSochialLogo)/Viber.svg" alt />
          </!--a-->
        </div>
      </div>
    </div>
    <div class="itemPageBottomInfo">
      <div class="chooseAreaTab itemtabs">
        <div
          id="rewardsAndDescriptionTab"
          v-bind:class="{ active: open_tab == 'reward' }"
          @click="open_tab = 'reward'"
        >
          Rewards and description
        </div>
        <div
          id="requirementsTab"
          v-bind:class="{ active: open_tab == 'req' }"
          @click="open_tab = 'req'"
        >
          Requirements
        </div>
        <div
          id="reviewTab"
          v-bind:class="{ active: open_tab == 'reviews' }"
          @click="open_tab = 'reviews'"
        >
          Reviews
        </div>
      </div>
      <div
        class="rewardsAndDescriptionTab topicItem"
        v-html="product.content"
        v-if="open_tab == 'reward'"
        :class="{ temp_moretext: !more_text_open && hide_more }"
      ></div>

      <div
        @click="
          more_text_open == false
            ? (more_text_open = true)
            : (more_text_open = false)
        "
        v-if="hide_more && open_tab == 'reward'"
        class="moreinfo_button"
      >
        <span v-if="!more_text_open">Show more</span>
        <span v-if="more_text_open">Show less</span>
        <img
          :class="{ moretext_img_rotate: more_text_open }"
          src="/imgGameLogoPurple/Down.png"
          alt
        />
      </div>

      <div
        class="requirementsTab topicItem"
        v-html="product.requirements"
        v-if="open_tab == 'req'"
        :class="{ temp_moretext: !more_text_open2 && hide_more2 }"
      ></div>
      <div
        @click="
          more_text_open2 == false
            ? (more_text_open2 = true)
            : (more_text_open2 = false)
        "
        v-if="hide_more2 && open_tab == 'req'"
        class="moreinfo_button"
      >
        <span v-if="!more_text_open2">Show more</span>
        <span v-if="more_text_open2">Show less</span>
        <img
          :class="{ moretext_img_rotate: more_text_open2 }"
          src="/imgGameLogoPurple/Down.png"
          alt
        />
      </div>

      <div class="reviewTab" v-if="open_tab == 'reviews'">
        <div>Reviews to: <span v-html="product.title"></span></div>
        <a name="reviews"></a>
        <div class="reviewtabButton">
          <button
            @click="(reviews_pop_up = true), body_set_hidden()"
            v-if="this.$store.getters['getUserLoginCheck'].user_check_login"
          >
            Create review
          </button>
          <button
            class="disabled_button"
            v-if="!this.$store.getters['getUserLoginCheck'].user_check_login"
            @click="open_login_popup()"
          >
            Create review
          </button>
          <a href="/page/reviews">View all reviews</a>
        </div>
        <div class="reviewTabTAble" v-if="this.reviews_pag.length > 0">
          <div
            class="reviewTabTAbleItem"
            v-for="item in this.reviews_pag"
            :key="item.id"
          >
            <div>
              <span>{{ item.name }}</span>
              <span v-for="(sub_item, index) in item.stars" :key="index">
                <svg v-if="sub_item == 's'" xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                <g clip-path="url(#clip0)">
                <path d="M16 6.30818H9.88727L8.00557 0.44873L6.11274 6.30818L0 6.29695L4.94363 9.92262L3.0508 15.7821L7.99443 12.1564L12.9381 15.7821L11.0564 9.92262L16 6.30818Z" fill="#00B67A"/>
                <path d="M11.3333 10.9682L10.9274 9.78223L8 11.7822L11.3333 10.9682Z" fill="#005128"/>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="16" height="16" fill="white" transform="translate(0 0.44873)"/>
                </clipPath>
                </defs>
                </svg>
                <svg v-if="sub_item == 'n'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 0.5L9.77051 6.22949H15.5L10.8647 9.77051L12.6353 15.5L8 11.959L3.36475 15.5L5.13526 9.77051L0.5 6.22949H6.22949L8 0.5Z" fill="#ACAFB0"/></svg>

              </span>
            </div>
            <div>{{ reviews_text_filter(item.review) }}</div>
            <div class="reviewRelevantItem">
              Game:
              <span
                v-for="game in games"
                :key="game.id"
                v-if="item.sku != undefined && game.id == item.sku.game"
                >{{ game.title }}
              </span>
              <br />Service:
              <span v-html="item.sku.title" v-if="item.sku != undefined"></span>
            </div>
          </div>
          <div class="pagination">
            <svg @click="get_all_rev_by_pag(active_index - 2)" v-if="active_index > 1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10.5 3L5.5 8L10.5 13" stroke="#ACAFB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10.5 3L5.5 8L10.5 13" stroke="#ACAFB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <div
              v-for="item in this.paginator_list"
              :key="item.id"
              v-bind:class="{ active: active_index == item.title }"
              v-on:click="get_all_rev_by_pag(item.index)"
              v-if="item.active"
            >
              {{ item.title }}
            </div>
            <div
              v-else-if="item.title + 1 == list_number"
              class="pagginator_dots"
            >
              ...
            </div>
            <div v-else-if="item.title - 1 == 1" class="pagginator_dots">
              ...
            </div>
            <svg @click="get_all_rev_by_pag(active_index)" v-if="active_index != list_number" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 13L11 8L6 3" stroke="#595E61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 13L11 8L6 3" stroke="#595E61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
        </div>
      </div>
    </div>
    <div class="reviews" v-if="this.reviews == []">
      <div class="arrowAndHref">
        <a href="/page/reviews">
          <span>Last reviews</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="19.5" fill="white" stroke="#D5D7D7"/><path d="M30 20.5H11M30 20.5L24.5 26M30 20.5L24.5 15" stroke="#C24DFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
        <a
          class="trustPilotHref"
        >
          <span>Also watch reviews on Trustpilot</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M24 8.78917H14.8309L12.0084 0L9.1691 8.78917L0 8.77233L7.41545 14.2108L4.5762 23L11.9916 17.5615L19.4071 23L16.5846 14.2108L24 8.78917Z" fill="#00B67A"/><path d="M17 15.7789L16.391 14L12 17L17 15.7789Z" fill="#005128"/></svg>
        </a>
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in this.reviews" :key="item.id">
            <div class="reviewName">
              <span>{{ item.name }}</span>
              <span v-for="(sub_item, index) in item.stars" :key="index">
                <svg v-if="sub_item == 's'" xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                <g clip-path="url(#clip0)">
                <path d="M16 6.30818H9.88727L8.00557 0.44873L6.11274 6.30818L0 6.29695L4.94363 9.92262L3.0508 15.7821L7.99443 12.1564L12.9381 15.7821L11.0564 9.92262L16 6.30818Z" fill="#00B67A"/>
                <path d="M11.3333 10.9682L10.9274 9.78223L8 11.7822L11.3333 10.9682Z" fill="#005128"/>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="16" height="16" fill="white" transform="translate(0 0.44873)"/>
                </clipPath>
                </defs>
                </svg>
                <svg v-if="sub_item == 'n'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 0.5L9.77051 6.22949H15.5L10.8647 9.77051L12.6353 15.5L8 11.959L3.36475 15.5L5.13526 9.77051L0.5 6.22949H6.22949L8 0.5Z" fill="#ACAFB0"/></svg>
              </span>
            </div>
            <div class="reviewText">{{ reviews_text_filter(item.review) }}</div>
            <div class="reviewItem">
              <img src="/img/Wow Classic.svg" alt />
              <div>
                Service:
                <span
                  v-html="item.sku.title"
                  v-if="item.sku != undefined"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="relatedProducts" v-if="product.related != null">
      <div class="arrowAndHref">
        <a>
          <span>Related products</span>
        </a>
      </div>
      <div class="swiper-container related-products-offers">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide swiper-slide-active"
            v-for="item in this.related_product"
            :key="item.id"
          >
            <div class="bestItem">
              <div class="bestImg">
                <div>
                <a
                  style="display: block; width: 100%; height: 100%;"
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
                  <img :src="apiImg + 'sku/' + item.image" alt />
                </a>
                <div
                  class="bestTime"
                  v-if="
                    item.salesdate != null &&
                    item.sales == 1 &&
                    item.sales_2 == 2
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
                  <span v-for="(sub_item, index) in item.stars" :key="index">
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
          <span>
            <a
              v-bind:href="
                '/' +
                $store.getters['getGlobalGame'] +
                '/service/' +
                item.slug +
                '&' +
                item.id"
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.57859 2.31425C3.84083 1.89969 5.28165 1.96227 6.21376 2.12511C6.26148 2.13344 6.30854 2.14524 6.35455 2.1604L21.2123 7.05496C22.2993 7.41304 23.0879 8.35838 23.2452 9.49197L23.6748 12.5881C23.9251 14.3917 22.5241 16.0005 20.7033 16.0005H9.59026C8.10992 16.0005 6.85088 14.9207 6.6253 13.4576L5.16922 4.01409C4.53051 3.9741 3.80438 4.01677 3.20266 4.21439C2.79505 4.34826 2.50224 4.53411 2.31429 4.75586C2.13981 4.96173 2 5.26245 2 5.75247C2 6.30476 1.55228 6.75247 1 6.75247C0.447715 6.75247 0 6.30476 0 5.75247C0 4.83328 0.280325 4.06241 0.788571 3.46274C1.28335 2.87897 1.93585 2.52534 2.57859 2.31425ZM7.27865 4.57055L20.5865 8.95454C20.9489 9.0739 21.2117 9.38901 21.2642 9.76688L21.6938 12.863C21.7772 13.4642 21.3102 14.0005 20.7033 14.0005H9.59026C9.09682 14.0005 8.67713 13.6405 8.60194 13.1529L7.27865 4.57055ZM11 19.0005C10.4477 19.0005 10 19.4482 10 20.0005C10 20.5528 10.4477 21.0005 11 21.0005C11.5523 21.0005 12 20.5528 12 20.0005C12 19.4482 11.5523 19.0005 11 19.0005ZM8 20.0005C8 18.3436 9.34315 17.0005 11 17.0005C12.6569 17.0005 14 18.3436 14 20.0005C14 21.6573 12.6569 23.0005 11 23.0005C9.34315 23.0005 8 21.6573 8 20.0005ZM19 20.0005C19 19.4482 19.4477 19.0005 20 19.0005C20.5523 19.0005 21 19.4482 21 20.0005C21 20.5528 20.5523 21.0005 20 21.0005C19.4477 21.0005 19 20.5528 19 20.0005ZM20 17.0005C18.3431 17.0005 17 18.3436 17 20.0005C17 21.6573 18.3431 23.0005 20 23.0005C21.6569 23.0005 23 21.6573 23 20.0005C23 18.3436 21.6569 17.0005 20 17.0005Z" fill="#c24dfe"/></svg>
            </a>
          </span>
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
          <!--
          <span>
            <a
              v-bind:href="
                '/' +
                $store.getters['getGlobalGame'] +
                '/service/' +
                item.slug +
                '&' +
                item.id"
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.57859 2.31425C3.84083 1.89969 5.28165 1.96227 6.21376 2.12511C6.26148 2.13344 6.30854 2.14524 6.35455 2.1604L21.2123 7.05496C22.2993 7.41304 23.0879 8.35838 23.2452 9.49197L23.6748 12.5881C23.9251 14.3917 22.5241 16.0005 20.7033 16.0005H9.59026C8.10992 16.0005 6.85088 14.9207 6.6253 13.4576L5.16922 4.01409C4.53051 3.9741 3.80438 4.01677 3.20266 4.21439C2.79505 4.34826 2.50224 4.53411 2.31429 4.75586C2.13981 4.96173 2 5.26245 2 5.75247C2 6.30476 1.55228 6.75247 1 6.75247C0.447715 6.75247 0 6.30476 0 5.75247C0 4.83328 0.280325 4.06241 0.788571 3.46274C1.28335 2.87897 1.93585 2.52534 2.57859 2.31425ZM7.27865 4.57055L20.5865 8.95454C20.9489 9.0739 21.2117 9.38901 21.2642 9.76688L21.6938 12.863C21.7772 13.4642 21.3102 14.0005 20.7033 14.0005H9.59026C9.09682 14.0005 8.67713 13.6405 8.60194 13.1529L7.27865 4.57055ZM11 19.0005C10.4477 19.0005 10 19.4482 10 20.0005C10 20.5528 10.4477 21.0005 11 21.0005C11.5523 21.0005 12 20.5528 12 20.0005C12 19.4482 11.5523 19.0005 11 19.0005ZM8 20.0005C8 18.3436 9.34315 17.0005 11 17.0005C12.6569 17.0005 14 18.3436 14 20.0005C14 21.6573 12.6569 23.0005 11 23.0005C9.34315 23.0005 8 21.6573 8 20.0005ZM19 20.0005C19 19.4482 19.4477 19.0005 20 19.0005C20.5523 19.0005 21 19.4482 21 20.0005C21 20.5528 20.5523 21.0005 20 21.0005C19.4477 21.0005 19 20.5528 19 20.0005ZM20 17.0005C18.3431 17.0005 17 18.3436 17 20.0005C17 21.6573 18.3431 23.0005 20 23.0005C21.6569 23.0005 23 21.6573 23 20.0005C23 18.3436 21.6569 17.0005 20 17.0005Z" fill="#c24dfe"/></svg>
            </a>
          </span>
          -->
          <div class="BuyNow">
            <a v-bind:href="
                '/' +
                $store.getters['getGlobalGame'] +
                '/service/' +
                item.slug +
                '&' +
                item.id
              "
              style="text-decoration: none">Buy now</a>
          </div>
        </div>
            </div>
          </div>
        </div>
        <span
          class="swiper-notification"
          aria-live="assertive"
          aria-atomic="true"
        ></span>
      </div>
    </div>
    <script v-html="jsonld" name="check-json" type="application/ld+json" />
  </div>
</template>
<script>
import Cookies from "js-cookie";
import breadcrumbs from "~/components/breadcrumbs.vue";
import moment from "moment";
import momenttz from "moment-timezone";
import error from "~/components/404.vue";
import { mapState } from 'vuex';
var temp_slider = { id: 0, check: false, slider_name: "" };
export default {
  head() {
    return {
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.1/js/ion.rangeSlider.min.js",
          defer: true
        },
      ],
      title: this.product.seo_title
        ? this.product.seo_title
        : this.product.title + " | Cakeboost",
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: this.product.seo_canonical ? this.product.seo_canonical : 'https://cakeboost.com'+ (this.$route.path == '/wow-shadowlands' ? '/wow-boost' : this.$route.path)
        }
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.product.seo_descr
        },
        {
          hid: "description",
          name: "description",
          content: this.product.seo_descr
        },
        {
          hid: "robots",
          name: "robots",
          content: "max-image-preview:large, index, follow, max-snippet:-1, max-video-preview:-1"
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
      jsonld: {},
      apiImg: this.$store.getters["getApiImgUrl"],
      apiUrl: this.$store.getters["getApiUrl"],
      globalApi: this.$store.getters["getGlobalApi"],
      product_id: "",
      product: "",
      count: 1,
      open_tab: "reward",
      related_product: "",
      product_price: 0,
      chars: [],
      selected_list_chars: [],
      option_total_eu: 0,
      option_total_us: 0,
      selected_sub_list_chars: [],
      gallery: [],
      zone_pick: "us",
      if_buy: false,
      option_total_eu_sale: 0,
      option_total_us_sale: 0,
      date: new Date(),
      events_by_product: undefined,
      hide_more_raid: false,
      sliders_check_price: [],
      sliders_price_usd: 0,
      sliders_price_eur: 0,
      double_sliders_check_price: [],
      double_sliders_price_usd: 0,
      double_sliders_price_eur: 0,
      favorite: false,
      cacl_array: [],
      reviews: [],
      games: [],
      results_paginator: 0,
      reviews_pag: [],
      paginator_list: [],
      list_number: 0,
      active_index: 1,
      tab_value: 0,
      reviews_pop_up: false,
      user_id: "",
      orders: "",
      review: {
        order: "-",
        item: "-",
        name: "",
        rating: 0,
        email: "",
        skuid: 0,
      },
      text: "",
      open_rev_order: false,
      open_rev_item: false,
      open_rev_order_temp: false,
      items: [],
      word_count: 0,
      choosen_event_id: undefined,
      fractions: [],
      rev_result: 0,
      rev_results2: 0,
      // our_sku_json: '',
      more_text_open: false,
      hide_more: false,
      more_text_open2: false,
      hide_more2: false,
      select_option_text: false,
      blocked_buy_button: false,
      coin_settings: "",
      settings: "",
      first_rank_select: {
        rank: "",
        division: "",
      },
      second_rank_select: {
        rank: "",
        division: "",
      },
      selected_rank: {
        title: "",
        usd: 0,
        eur: 0,
        desire: 0,
        usd_master: 0,
        eur_master: 0,
      },
      f_rank_open: false,
      s_rank_open: false,
      f_division_open: false,
      s_division_open: false,
      rank_option: "",
      desire: 0,
      current: 0,
      step_rank: 1,
      total_rank_price_usd: 0,
      total_rank_price_usdSale: 0,
      total_rank_price_usdSale2: 0,
      total_rank_price_eur: 0,
      total_rank_price_eurSale: 0,
      total_rank_price_eurSale2: 0,
      rank_selects: [],
      isMobile: false,
      b_path: [],
      events_by_productTest: '',
      // eventsTimes_by_productTest: '',
      // showTimes: false,
      // showTimesTitile: 'Choose raid',
      // selectTimes: [],
      // selected_fraction: '',
    };
  },
  created() {
    this.interval = setInterval(() => this.slider_watcher(), 100);
  },
  computed: mapState(['card']),
  watch: {
    date: async function () {
      this.events_by_product = "";
      /*
       let response_data_event_rel2 = await this.$axios
        .$get(
          this.apiUrl +
            "events?filter=parentid,eq," +
            this.product.id +
            "&filter=status,eq,1"
        )
        .then((data) => {
            let eventList = data.records;
            if (eventList){
              for(let i = 0; i < eventList.length; i++){
                eventList[i].times = [];

                let response_data_times_edt_rel = this.$axios
                  .$get(
                    this.apiUrl +
                      "times?filter=parentid,eq," +
                      eventList[i].id +
                      "&order=time_edt,asc"
                  )
                  .then((data) => {
                      eventList[i].times = data.records
                      this.eventsTimes_by_productTest = []
                      for (let j = 0; j < eventList.length; j++) {
                        let el = eventList[j];
                        for (let k = 0; k < el.times.length; k++) {
                          el.times[k].oldDate = el.date
                          el.times[k].date = moment(el.date).format('DD MMM')
                          el.times[k].week = moment(el.date).format('ddd')
                          this.eventsTimes_by_productTest.push(el.times[k])
                        }
                      }
                      // console.log(this.eventsTimes_by_productTest)
                    });
              }

            }
        })
        */

      let response_data_event_rel = await this.$axios
        .$get(
          this.apiUrl +
            "events?filter=date,eq," +
            moment(this.date).format("YYYY-MM-DD") +
            "&filter=parentid,eq," +
            this.product.id +
            "&filter=status,eq,1"
        )
        .then((data) => {

          // this.events_by_product = data.records[0];
          // this.events_by_product.times = [];

          this.events_by_productTest = data.records
            if (this.events_by_productTest){
              for(let i = 0; i < this.events_by_productTest.length; i++){
                this.events_by_productTest[i].times = [];
                let response_data_times_edt_rel = this.$axios
                  .$get(
                    this.apiUrl +
                      "times?filter=parentid,eq," +
                      this.events_by_productTest[i].id +
                      "&order=time_edt,asc"
                  )
                  .then((data) => {
                      this.events_by_productTest[i].times = data.records;
                    });
              }

            }


            // let response_data_times_cest_rel = this.$axios
            //   .$get(
            //     this.apiUrl +
            //       "times?filter=parentid,eq," +
            //       this.events_by_product.id +
            //       "&order=cest,asc"
            //   )
            //   .then((data) => {
            //     // console.log(data)
            //     this.events_by_product.times.push(data.records);
            //   });

        });
        for (let i = 0; i < this.chars.length; i++) {
        if (this.chars[i].type == 8) {
          let temp = this.chars[i].step;
          let temp_class = ".js-range-slider-" + i;
          let custom_values = this.chars[i].step;
          $(".js-range-slider-" + i).ionRangeSlider({
            type: "single",
            grid: true,
            from: 0,
            values: custom_values,
            hide_min_max: true,
            hide_from_to: true,
            onChange: function (data) {
              temp_slider.id = data.from;
              temp_slider.check = true;
              temp_slider.slider_name = data.input[0].id;
              let left = $(temp_class).parent().find(".irs-handle").css("left");
              let left_temp = left.split("p")[0];
              $(temp_class)
                .parent()
                .find(".under_thumb_info")
                .css("left", parseFloat(left_temp) - 34 + "px");
            },
          });
        }
        if (this.chars[i].type == 13) {
          let temp = this.chars[i].step;
          let temp_class = ".js-range-slider-price-" + i;
          let custom_values = this.chars[i].step;
          $(".js-range-slider-price-" + i).ionRangeSlider({
            type: "single",
            grid: true,
            from: 0,
            values: custom_values,
            hide_min_max: true,
            hide_from_to: true,
            onChange: function (data) {
              temp_slider.id = data.from;
              temp_slider.check = true;
              temp_slider.slider_name = data.input[0].id;
              let left = $(temp_class).parent().find(".irs-handle").css("left");
              let left_temp = left.split("p")[0];
              $(temp_class)
                .parent()
                .find(".under_thumb_info")
                .css("left", parseFloat(left_temp) - 34 + "px");
            },
          });
        }
        if (this.chars[i].type == 7) {
          let temp = this.chars[i].step;
          let temp_class = ".js-range-slider-double-" + i;
          let custom_values = this.chars[i].step;
          $(".js-range-slider-double-" + i).ionRangeSlider({
            type: "double",
            grid: true,
            from: 0,
            to: 1,
            values: custom_values,
            hide_min_max: true,
            hide_from_to: true,
            min_interval: 1,
            onChange: function (data) {
              temp_slider.id = data.from_value + ";" + data.to_value;
              temp_slider.check = true;
              temp_slider.slider_name = data.input[0].id;
              let left = $(temp_class).parent().find(".from").css("left");
              let left_temp = left.split("p")[0];
              $(temp_class)
                .parent()
                .find(".under_thumb_info")
                .css("left", parseFloat(left_temp) - 34 + "px");
            },
          });
        }
        if (this.chars[i].type == 14) {
          let temp = this.chars[i].step;
          let temp_class = ".js-range-slider-double-price-" + i;
          let custom_values = this.chars[i].step;
          $(".js-range-slider-double-price-" + i).ionRangeSlider({
            type: "double",
            grid: true,
            from: 0,
            to: 1,
            values: custom_values,
            hide_min_max: true,
            hide_from_to: true,
            min_interval: 1,
            onChange: function (data) {
              temp_slider.id = data.from_value + ";" + data.to_value;
              temp_slider.check = true;
              temp_slider.slider_name = data.input[0].id;
              let left = $(temp_class).parent().find(".from").css("left");
              let left_temp = left.split("p")[0];
              $(temp_class)
                .parent()
                .find(".under_thumb_info")
                .css("left", parseFloat(left_temp) - 34 + "px");
            },
          });
        }
      }
    },
    text: function () {
      this.word_count = this.text.split("").length;
    },
    current: function () {
      if (this.current < 0) {
        this.current = 0;
      }
      if (this.current > parseFloat(this.rank_option.calc.max)) {
        this.current = this.desire - this.step_rank;
      }
      if (this.current + this.step_rank >= this.desire) {
        if (
          parseFloat(this.desire) + parseFloat(this.step_rank) >
          parseFloat(this.rank_option.calc.max)
        ) {
          this.desire = parseFloat(this.rank_option.calc.max);
          this.current = parseFloat(this.rank_option.calc.max) - this.step_rank;
        } else {
          this.desire = parseFloat(this.current) + parseFloat(this.step_rank);
        }
      }
      this.count_price_two_master();
    },
    desire: function () {
      if (
        this.desire <= this.current + this.step_rank &&
        this.rank_option.rank[this.first_rank_select.rank].is_rank == 0
      ) {
        if (this.desire - this.step_rank < 0) {
          this.current = 0;
          this.desire = this.step_rank;
        } else {
          this.current = this.desire - this.step_rank;
        }
      }
      if (
        this.desire < 0 &&
        this.rank_option.rank[this.first_rank_select.rank].is_rank != 0
      ) {
        this.desire = 0;
      } else {
        if (
          this.rank_option.rank[this.first_rank_select.rank].is_rank == 0 &&
          this.desire < 1
        ) {
          this.desire = 1;
        }
      }
      if (this.desire > parseFloat(this.rank_option.calc.max)) {
        this.desire = parseFloat(this.rank_option.calc.max);
      }
      this.selected_rank.desire = this.desire;
      if (
        this.rank_option.rank[this.first_rank_select.rank].is_rank != 0 &&
        this.rank_option.rank[this.second_rank_select.rank].is_rank == 0
      ) {
        let temp_array_master = [];
        for (
          let i = this.desire;
          i > 0;
          i = i - parseFloat(this.rank_option.calc.step)
        ) {
          if (i - parseFloat(this.rank_option.calc.step) < 0) {
            temp_array_master.push(parseFloat(i));
          } else {
            temp_array_master.push(parseFloat(this.rank_option.calc.step));
          }
        }
        this.selected_rank.usd_master = 0;
        this.selected_rank.eur_master = 0;
        let j = 0;
        for (let i = 0; i < temp_array_master.length; i++) {
          this.selected_rank.usd_master =
            parseFloat(this.selected_rank.usd_master) +
            temp_array_master[i] *
              parseFloat(this.rank_option.calc.min_usd) *
              parseFloat(this.rank_option.calc.subarray[j].coef);
          this.selected_rank.eur_master =
            parseFloat(this.selected_rank.eur_master) +
            temp_array_master[i] *
              parseFloat(this.rank_option.calc.min_eur) *
              parseFloat(this.rank_option.calc.subarray[j].coef);
          j++;
        }
      } else {
        this.count_price_two_master();
      }
    },
  },
  // async asyncData({ $axios, route, store, redirect, res }) {
  async fetch() {
    try {
      let apiUrl = this.$store.getters["getApiUrl"];
      let category = "";
      let product = "";
      let fractions = [];
      let gallery = "";
      let related_product = "";
      let chars = [];
      let events_by_product = undefined;
      let events_by_productTest = [];
      let sliders_check_price = [];
      let sliders_price_usd = 0;
      let sliders_price_eur = 0;
      let coin_settings = "";
      let settings = "";
      let rank_selects = [];
      let first_rank_select = {
        rank: "",
        division: "",
      };
      let second_rank_select = {
        rank: "",
        division: "",
      };
      let selected_rank = {
        title: "",
        usd: 0,
        eur: 0,
        desire: 0,
        usd_master: 0,
        eur_master: 0,
      };
      let rank_option = "";
      let double_sliders_check_price = [];
      let double_sliders_price_usd = 0;
      let double_sliders_price_eur = 0;
      let rev_result = 0;
      let rev_results2 = 0;
      // let our_sku_json = '';
      let choosen_eventParent = '';
      let choosen_eventDate = '';
      let date = choosen_eventDate != '' ? new Date(choosen_eventDate) : new Date();
      let temp = this.$route.params.id.split("&");
      let choosen_event_id = this.$route.params.id.split("&")[2]
        ? this.$route.params.id.split("&")[2]
        : undefined;
      let product_id = temp[1];
      let product_slug = temp[0];
      let response_coin_settings = await this.$axios
        .$get(apiUrl + "coins")
        .then((data) => {
          coin_settings = data.records[0];
        });
      let response_settings = await this.$axios
      .$get(apiUrl + "settings")
      .then((data) => {
        settings = data.records[0];
      });
      let response_fractions = await this.$axios
        .$get(apiUrl + "fraction")
        .then((data) => {
          fractions = data.records;
          // this.selected_fraction = fractions[0].id
        });
      let response_data_sku = await this.$axios
        .$get(apiUrl + "sku?filter=id,eq," + product_id + "&filter=slug,eq," + product_slug)
        .then((data) => {
          console.log(apiUrl + "sku?filter=id,eq," + product_id + "&filter=slug,eq," + product_slug, "API URL")
          product = data.records[0];
          if ((product.images !== null) & (product.images != "")) {
            gallery = product.images.split(",");
          }
          let response_game_slug = this.$axios
            .$get(apiUrl + "game/" + product.game)
            .then((data) => {
              if (
                this.$route.path.split("/")[1] != data.slug ||
                this.$route.params.id.split("&")[0] != product.slug
              ) {
                this.$nuxt.context.res.statusCode = 404;
                this.$store.commit("set_show_error", true);
              }
            });
        });
        if(choosen_event_id != undefined){
          let response_times = await this.$axios
          .$get(apiUrl + "times/" + choosen_event_id)
          .then((data) => {
            choosen_eventParent = data.parentid;
            let response_event = this.$axios
            .$get(apiUrl + "events/" + choosen_eventParent)
            .then((data) => {
              choosen_eventDate = data.date
              if(choosen_eventDate != ''){
                date = new Date(choosen_eventDate)
              }
            });
          });
        }
      if (product.trash == 1) {
        this.$nuxt.context.res.statusCode = 404;
        this.$store.commit("set_show_error", true);
      }
      if (product.status == 0) {
        this.$nuxt.context.res.statusCode = 404;
        this.$store.commit("set_show_error", true);
      }
      if (product.related != "") {
        let response_data_sku_rel = await this.$axios
          .$get(apiUrl + "sku?filter=id,in," + product.related)
          .then((data) => {
            related_product = data.records;
            for (let i = 0; i < related_product.length; i++) {
              related_product[i].stars = [];
              if (related_product[i].gl_rating == 0) {
                related_product[i].stars = ["n", "n", "n", "n", "n"];
              } else {
                for (let j = 0; j < related_product[i].gl_rating; j++) {
                  related_product[i].stars.push("s");
                }
                for (
                  let j = 0;
                  j < Math.floor(5 - related_product[i].gl_rating);
                  j++
                ) {
                  related_product[i].stars.push("n");
                }
              }
            }
          });
      }
      if (product.chars != null) {
        chars = JSON.parse(product.chars);
        for (let i = 0; i < chars.length; i++) {
          if (chars[i].type == 16) {
            rank_option = chars[i];
            selected_rank = chars[i].array.subarray[0];
            selected_rank.usd_master = 0;
            selected_rank.eur_master = 0;
            first_rank_select.rank = 0;
            first_rank_select.division = 0;
            second_rank_select.rank = 0;
            second_rank_select.division = 1;
            for (let j = 0; j < rank_option.select.current.length; j++) {
              rank_option.select.current[j].area = "current";
              rank_option.select.current[j].open_div = false;
              rank_option.select.current[j].selected = 0;
              rank_option.select.current[j].id = j;
              rank_selects.push(rank_option.select.current[j]);
            }
            for (let j = 0; j < rank_option.select.desired.length; j++) {
              rank_option.select.desired[j].area = "desired";
              rank_option.select.desired[j].open_div = false;
              rank_option.select.desired[j].selected = 0;
              rank_option.select.desired[j].id = j;
              rank_selects.push(rank_option.select.desired[j]);
            }
          }
          if (chars[i].type == 5 || chars[i].type == 4) {
            chars[i].counter = 0;
            chars[i].open = false;
            chars[i];
          }
          if (chars[i].type == 8) {
            chars[i].value = 0;
            let temp_obj = {
              title: chars[i].title,
              value: chars[i].value,
              real_value: chars[i].array.subarray[chars[i].value].title,
              usd: chars[i].array.subarray[chars[i].value].usd,
              eur: chars[i].array.subarray[chars[i].value].eur,
            };
            sliders_price_usd =
              parseFloat(sliders_price_usd) + parseFloat(temp_obj.usd);
            sliders_price_eur =
              parseFloat(sliders_price_eur) + parseFloat(temp_obj.eur);
            sliders_check_price.push(temp_obj);
          }
          if (chars[i].type == 13) {
            chars[i].value = 0;
            chars[i].choosen_price = chars[i].array[0].title_page;
            let temp_obj = {
              title: chars[i].title,
              value: chars[i].value,
              real_value: chars[i].array[0].subarray[0].title,
              usd: chars[i].array[0].subarray[0].usd,
              eur: chars[i].array[0].subarray[0].eur,
              choosen_price: chars[i].choosen_price,
            };
            sliders_price_usd =
              parseFloat(sliders_price_usd) + parseFloat(temp_obj.usd);
            sliders_price_eur =
              parseFloat(sliders_price_eur) + parseFloat(temp_obj.eur);
            sliders_check_price.push(temp_obj);
          }
          if (chars[i].type == 14) {
            chars[i].choosen_price = chars[i].titles[0];
            let temp_obj = {
              slider_title: chars[i].title,
              title: chars[i].array[0].subarray[0].title,
              usd: chars[i].array[0].subarray[0].usd,
              eur: chars[i].array[0].subarray[0].eur,
              choosen_price: chars[i].titles[0],
            };
            double_sliders_price_usd =
              parseFloat(double_sliders_price_usd) + parseFloat(temp_obj.usd);
            double_sliders_price_eur =
              parseFloat(double_sliders_price_eur) + parseFloat(temp_obj.eur);
            double_sliders_check_price.push(temp_obj);
          }
          if (chars[i].type == 7) {
            let temp_obj = {
              slider_title: chars[i].title,
              title: chars[i].array.subarray[0].title,
              usd: chars[i].array.subarray[0].usd,
              eur: chars[i].array.subarray[0].eur,
            };
            double_sliders_price_usd =
              parseFloat(double_sliders_price_usd) + parseFloat(temp_obj.usd);
            double_sliders_price_eur =
              parseFloat(double_sliders_price_eur) + parseFloat(temp_obj.eur);
            double_sliders_check_price.push(temp_obj);
          }
        }
      }
      if (product.raid_enable == 1) {
        let response_data_event_rel = await this.$axios
          .$get(
            apiUrl +
              "events?filter=date,eq," +
              moment(date).tz("Europe/Berlin").format("YYYY-MM-DD") +
              "&filter=parentid,eq," +
              product.id +
              "&filter=status,eq,1"
          )
          .then((data) => {
            // console.log(moment(date).tz("Europe/Berlin").format("YYYY-MM-DD"))
            events_by_product = data.records[0];
            events_by_productTest = data.records
            if (events_by_productTest){
              for(let i = 0; i < events_by_productTest.length; i++){
                events_by_productTest[i].times = [];
                let response_data_times_edt_rel = this.$axios
                  .$get(
                    apiUrl +
                      "times?filter=parentid,eq," +
                      events_by_productTest[i].id +
                      "&order=time_edt,asc"
                  )
                  .then((data) => {
                      events_by_productTest[i].times = data.records;
                  });
              }
            }
            // if (events_by_product) {
            //   events_by_product.times = [];
            //   let response_data_times_edt_rel = this.$axios
            //     .$get(
            //       apiUrl +
            //         "times?filter=parentid,eq," +
            //         events_by_product.id +
            //         "&order=time_edt,asc"
            //     )
            //     .then((data) => {
            //         events_by_product.times = data.records;
            //     });
            // }
          });
      }
      let reviews = [];
      let games = [];
      let response_data_r = await this.$axios
        .$get(
          apiUrl +
            "reviews?order=date,desc&filter=status,eq,1&size=6&filter=parentid,eq," +
            product_id
        )
        .then((data) => {
          reviews = data.records;
          for (let i = 0; i < reviews.length; i++) {
            reviews[i].stars = [];
            if (reviews[i].rating == 0) {
              reviews[i].stars = ["n", "n", "n", "n", "n"];
            } else {
              for (let j = 0; j < reviews[i].rating; j++) {
                reviews[i].stars.push("s");
              }
              for (let j = 0; j < 5 - reviews[i].rating; j++) {
                reviews[i].stars.push("n");
              }
            }
          }
        });
      let response_data_g = await this.$axios.$get(apiUrl + "game").then((data) => {
        games = data.records;
      });
      let results_paginator = 0;
      let reviews_pag = [];
      let response_data_r_pag = await this.$axios
        .$get(
          apiUrl +
            "reviews?order=date,desc&filter=status,eq,1&page=1,5&filter=parentid,eq," +
            product_id
        )
        .then((data) => {
          reviews_pag = data.records;
          rev_result = data.results;
          /*
          our_sku_json = '{ "@context": "https://schema.org/", "@type": "Product", ';
          if (!data.results) {
            our_sku_json += '';
          } else {
            our_sku_json += '"aggregateRating": { "@type": "AggregateRating", "ratingValue":"' + product.gl_rating + '", "reviewCount": "' + data.results + '" }, ';
          };
          // our_sku_json += rev_result2;
          our_sku_json += '"description": "'+ product.seo_descr +'", "name": "'+ product.title +'", "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "price": "' + product.fr_price_usd + '", "priceCurrency": "USD" } }';
          */
          for (let i = 0; i < reviews_pag.length; i++) {
            reviews_pag[i].stars = [];
            if (reviews_pag[i].rating == 0) {
              reviews_pag[i].stars = ["n", "n", "n", "n", "n"];
            } else {
              for (let j = 0; j < reviews_pag[i].rating; j++) {
                reviews_pag[i].stars.push("s");
              }
              for (let j = 0; j < 5 - reviews_pag[i].rating; j++) {
                reviews_pag[i].stars.push("n");
              }
            }
          }
          results_paginator = data.results;
        });
      for (let i = 0; i < reviews.length; i++) {
        let response_data_sku_popular = await this.$axios
          .$get(
            apiUrl +
              "sku/" +
              reviews[i].parentid +
              "?include=id,title,slug,game"
          )
          .then((data) => {
            reviews[i].sku = data;
          })
          .catch((error) => {});
      }
      product.stars = [];
      if (product.gl_rating == 0) {
        product.stars = ["n", "n", "n", "n", "n"];
      } else {
        for (let j = 0; j < product.gl_rating; j++) {
          product.stars.push("s");
        }
        for (let j = 0; j < Math.floor(5 - product.gl_rating); j++) {
          product.stars.push("n");
        }
      }

      this.reviews_pag = reviews_pag;
      this.results_paginator = results_paginator;
      this.category = category;
      this.product = product;
      this.gallery = gallery;
      this.related_product = related_product;
      this.chars = chars;
      this.events_by_product = events_by_product;
      this.events_by_productTest = events_by_productTest;
      this.sliders_check_price = sliders_check_price;
      this.sliders_price_usd = sliders_price_usd;
      this.sliders_price_eur = sliders_price_eur;
      this.double_sliders_check_price = double_sliders_check_price;
      this.double_sliders_price_usd = double_sliders_price_usd;
      this.double_sliders_price_eur = double_sliders_price_eur;
      this.reviews = reviews;
      this.games = games;
      this.choosen_event_id = choosen_event_id;
      this.fractions = fractions;
      this.rev_result = rev_result;
      this.rev_results2 = rev_results2;
      // this.our_sku_json = our_sku_json;
      this.coin_settings = coin_settings;
      this.settings = settings;
      this.first_rank_select = first_rank_select;
      this.second_rank_select = second_rank_select;
      this.selected_rank = selected_rank;
      this.rank_option = rank_option;
      this.rank_selects = rank_selects;
      this.choosen_eventDate = choosen_eventDate;
      this.date = date;

      try {
        this.jsonld = {
          "@context": "https://schema.org",
          "@graph": [{
            "@context": "https://schema.org",
            "@type": "Product",
            "description": this.product.seo_descr,
            "name": this.product.title,
            "image": this.apiImg + 'sku/' + this.product.image,
            "brand": "Cakeboost",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "price": this.product.fr_price_usd,
              "priceCurrency": "USD"
            },
            "review": this.reviews.map(review => {
              return {
                "@type": "Review",
                "author": review.name,
                "datePublished": review.date.slice(0, 10),
                "reviewBody": review.review,
                "name": review.review,
                "reviewRating": {
                  "@type": "Rating",
                  "bestRating": "5",
                  "ratingValue": review.rating,
                  "worstRating": "1"
                }
              }
            })
          }]
        }

        if (this.product.gl_rating > 0 && this.rev_result !== undefined && this.rev_result !== null) {
          this.jsonld["@graph"][0]["aggregateRating"] = {
            "@type": "AggregateRating",
              "ratingValue": `${this.product.gl_rating}`,
              "reviewCount": `${this.rev_result}`
          }
        }
        this.related_product.map((product) => {
          this.jsonld["@graph"].push({
            "@context": "https://schema.org",
            "@type": "Product",
            "description": product.seo_descr,
            "name": product.title,
            "image": this.apiImg + 'sku/' + product.image,
            "brand": "Cakeboost",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "price": product.fr_price_usd,
              "priceCurrency": "USD"
            }})
        })
      } catch (e) {}


    } catch (error) {
      // console.log(error, "ERROR")
      this.$nuxt.context.res.statusCode = 404;
      this.$store.commit("set_show_error", true);
    }
  },
  async mounted() {
    this.getCookie_zone(),
      this.init_swiper_related(),
      this.init_swiper_galerry(),
      this.list_option_add_calc(),
      this.get_more_raid_slot_height(),
      this.init_all_range(),
      this.check_favorite(),
      this.temp_review_item_sku(),
      this.fill_paginator_list(),
      this.temp_review_item(),
      this.get_orders(),
      this.more_info_height(),
      this.init_step(),
      this.onResize(),
    await this.get_url();
  },
  methods: {
    /*
    timeList() {
      if(this.eventsTimes_by_productTest){
        let thisTimeList = this.$store.getters['getSelectedZone'] == 'eu' ? this.eventsTimes_by_productTest.filter(item => item.time_cest ) : this.eventsTimes_by_productTest.filter(item => item.time_edt );

        let thisFraction = this.selected_fraction
        let newList = {}

        let thisTimeListSort = thisTimeList.filter(item => {
          if(item.allegiance == thisFraction){
            return item
          }
        })
        let nowDate = moment().tz("Europe/Berlin").format("YYYY-MM-DD HH:mm")
        let newArr = []
        for (let i = 0; i < thisTimeListSort.length; i++) {
          const element = thisTimeListSort[i];
          let thisTime = this.$store.getters['getSelectedZone'] == 'eu'  ? element.time_cest : element.time_edt
          let date = element.oldDate + ' ' + thisTime
          if(element.oldDate){
            let countDownDate = moment(date).tz("Europe/Berlin").format("YYYY-MM-DD HH:mm");
            if(new Date(countDownDate).getTime() - new Date(nowDate).getTime() > 0) {
              newArr.push(thisTimeListSort[i])
            }
          }
        }

        return newArr;
      }
    },
    */
    onResize() {
      this.isMobile = document.documentElement.clientWidth > 1055 ? true : false;
    },
    insert (arr, index, newItem) {
      let temp = arr[index];
      arr[index] = newItem;
      if(temp != null && arr != undefined) {
        arr.push(temp);
      }
      return arr
    },
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
    },
    async changeCount(count, method) {
      if(count < 1) {
        this.count = 1;
      } else {
        this.count = count;
      }
    },
    reloadRank_selects (item) {
      for(let i = 0; i < this.rank_selects.length; i++){
        if(this.rank_selects[i].id != item.id || this.rank_selects[i].area != item.area){
          this.rank_selects[i].open_div = false;
        }
      }
      this.f_division_open = false ;
      this.s_division_open = false ;
      this.f_rank_open = false   ;
      this.s_rank_open = false   ;
      item.open_div = item.open_div ? false : true
    },
    reloadRank_select (){
      for(let i = 0; i < this.rank_selects.length; i++){
        this.rank_selects[i].open_div = false;
      }
    },
    init_step() {
      for (let i = 0; i < this.rank_selects.length; i++) {
        if (this.rank_selects[i].type == "Calc") {
          this.step_rank = parseFloat(
            this.rank_selects[i].subarray[this.rank_selects[i].selected].step
          );
          break;
        }
      }
    },
    step_trigger() {
      if (
        this.rank_option.rank[this.first_rank_select.rank].is_rank == 0 &&
        this.rank_option.rank[this.second_rank_select.rank].is_rank == 0
      ) {
        if (this.current < 0) {
          this.current = 0;
        }
        if (this.current > parseFloat(this.rank_option.calc.max)) {
          this.current = this.desire - this.step_rank;
        }
        if (this.current + this.step_rank >= this.desire) {
          if (
            parseFloat(this.desire) + parseFloat(this.step_rank) >
            parseFloat(this.rank_option.calc.max)
          ) {
            this.desire = parseFloat(this.rank_option.calc.max);
            this.current =
              parseFloat(this.rank_option.calc.max) - this.step_rank;
          } else {
            this.desire = parseFloat(this.current) + parseFloat(this.step_rank);
          }
        }
        this.count_price_two_master();
      }
    },
    count_price_coeff_usd() {
      let temp_usd = this.selected_rank.usd;
      let temp_usd_sale = this.selected_rank.usd_sales
      let temp_usd_sale2 = this.selected_rank.usd_sales2
      let temp_usd_master = this.selected_rank.usd_master;

      for (let i = 0; i < this.rank_selects.length; i++) {
        temp_usd =
          temp_usd *
          parseFloat(
            this.rank_selects[i].subarray[this.rank_selects[i].selected]
              .coefficient
          );
        if (this.rank_selects[i].type != "Raiting") {
          temp_usd_master =
            temp_usd_master *
            parseFloat(
              this.rank_selects[i].subarray[this.rank_selects[i].selected]
                .coefficient
            );
        }
      }
      this.total_rank_price_usd = parseFloat(temp_usd) + parseFloat(temp_usd_master);
      if(temp_usd_sale != 0){
        this.total_rank_price_usdSale = parseFloat(temp_usd_sale) + parseFloat(temp_usd_master);
      }
      if(temp_usd_sale2 != 0){
        this.total_rank_price_usdSale2 = parseFloat(temp_usd_sale2) + parseFloat(temp_usd_master);
      }
      return parseFloat(temp_usd) + parseFloat(temp_usd_master);
    },
    count_price_coeff_eur() {
      let temp_eur = this.selected_rank.eur;
      let temp_eur_sale = this.selected_rank.eur_sales
      let temp_eur_sale2 = this.selected_rank.eur_sales2
      let temp_eur_master = this.selected_rank.eur_master;
      for (let i = 0; i < this.rank_selects.length; i++) {
        temp_eur =
          temp_eur *
          parseFloat(
            this.rank_selects[i].subarray[this.rank_selects[i].selected]
              .coefficient
          );
        if (this.rank_selects[i].type != "Raiting") {
          temp_eur_master =
            temp_eur_master *
            parseFloat(
              this.rank_selects[i].subarray[this.rank_selects[i].selected]
                .coefficient
            );
        }
      }
      if(temp_eur_sale != 0){
        this.total_rank_price_eurSale = parseFloat(temp_eur_sale) + parseFloat(temp_eur_master);
      }
      if(temp_eur_sale2 != 0){
        this.total_rank_price_eurSale2 = parseFloat(temp_eur_sale2) + parseFloat(temp_eur_master);
      }
      this.total_rank_price_eur = parseFloat(temp_eur) + parseFloat(temp_eur_master);
      return parseFloat(temp_eur) + parseFloat(temp_eur_master);
    },
    count_price_two_master() {
      let temp_array_master = [];
      for (
        let i = this.desire - this.current;
        i > 0;
        i = i - parseFloat(this.rank_option.calc.step)
      ) {
        if (i - parseFloat(this.rank_option.calc.step) < 0) {
          temp_array_master.push(parseFloat(i));
        } else {
          temp_array_master.push(parseFloat(this.rank_option.calc.step));
        }
      }
      this.selected_rank.usd_master = 0;
      this.selected_rank.eur_master = 0;
      let j = 0;
      for (let k = 0; k < this.rank_option.calc.subarray.length; k++) {
        let temp = this.rank_option.calc.subarray[k].step.split(" - ");
        if (
          this.current >= parseFloat(temp[0]) &&
          this.current < parseFloat(temp[1])
        ) {
          j = k;
          break;
        }
      }
      for (let i = 0; i < temp_array_master.length; i++) {
        this.selected_rank.usd_master =
          parseFloat(this.selected_rank.usd_master) +
          temp_array_master[i] *
            parseFloat(this.rank_option.calc.min_usd) *
            parseFloat(this.rank_option.calc.subarray[j].coef);
        this.selected_rank.eur_master =
          parseFloat(this.selected_rank.eur_master) +
          temp_array_master[i] *
            parseFloat(this.rank_option.calc.min_eur) *
            parseFloat(this.rank_option.calc.subarray[j].coef);
        j++;
      }
    },
    changeDivision(index) {
      if(this.second_rank_select.rank > this.first_rank_select.rank){
        this.second_rank_select.division = index
      } else {
        this.second_rank_select.division = index == 0 ? 1 : index
      }
    },
    update_ranks(update) {
      if (update == "first") {
        if (this.first_rank_select.rank > this.second_rank_select.rank) {
          this.second_rank_select.rank = this.first_rank_select.rank;
        }
        if (this.first_rank_select.rank == this.second_rank_select.rank) {
          if (
            this.first_rank_select.division >= this.second_rank_select.division
          ) {

            this.second_rank_select.division =
              this.first_rank_select.division + 1;
            if(this.first_rank_select.division + 1 == this.rank_option.division.length){
              this.second_rank_select.rank = this.second_rank_select.rank + 1;
              this.second_rank_select.division = 0;
            }
          }
        }
      } else {
        if (this.first_rank_select.rank > this.second_rank_select.rank) {
          this.first_rank_select.rank = this.second_rank_select.rank;
        }
        if (this.first_rank_select.rank == this.second_rank_select.rank) {
          if (
            this.first_rank_select.division >= this.second_rank_select.division
          ) {
            this.first_rank_select.division =
              this.second_rank_select.division - 1;
            if(this.first_rank_select.division < 0){
              this.first_rank_select.division = 0;
              this.second_rank_select.division = 1;
            }
          }
        }
      }
      if (
        this.rank_option.rank[this.first_rank_select.rank].is_rank != 0 &&
        this.rank_option.rank[this.second_rank_select.rank].is_rank != 0
      ) {
        let temp_rank_string =
          this.rank_option.rank[this.first_rank_select.rank].title +
          "_" +
          this.rank_option.division[this.first_rank_select.division] +
          ":" +
          this.rank_option.rank[this.second_rank_select.rank].title +
          "_" +
          this.rank_option.division[this.second_rank_select.division];
        for (let i = 0; i < this.rank_option.array.subarray.length; i++) {
          if (this.rank_option.array.subarray[i].title == temp_rank_string) {
            this.selected_rank = this.rank_option.array.subarray[i];
            this.selected_rank.usd_master = 0;
            this.selected_rank.eur_master = 0;
            break;
          }
        }
      } else {
        if (
          this.rank_option.rank[this.first_rank_select.rank].is_rank != 0 &&
          this.rank_option.rank[this.second_rank_select.rank].is_rank == 0
        ) {
          let temp_rank_string =
            this.rank_option.rank[this.first_rank_select.rank].title +
            "_" +
            this.rank_option.division[this.first_rank_select.division] +
            ":" +
            this.rank_option.rank[this.second_rank_select.rank].title;
          for (let i = 0; i < this.rank_option.array.subarray.length; i++) {
            if (this.rank_option.array.subarray[i].title == temp_rank_string) {
              this.selected_rank = this.rank_option.array.subarray[i];
              this.selected_rank.desire = this.desire;
              this.selected_rank.usd_master = 0;
              this.selected_rank.eur_master = 0;
              if (this.desire == 0) {
                this.selected_rank.usd_master = 0;
                this.selected_rank.eur_master = 0;
              } else {
                let temp_array_master = [];
                for (
                  let i = this.desire;
                  i > 0;
                  i = i - parseFloat(this.rank_option.calc.step)
                ) {
                  if (i - parseFloat(this.rank_option.calc.step) < 0) {
                    temp_array_master.push(parseFloat(i));
                  } else {
                    temp_array_master.push(
                      parseFloat(this.rank_option.calc.step)
                    );
                  }
                }
                this.selected_rank.usd_master = 0;
                this.selected_rank.eur_master = 0;
                let j = 0;
                for (let i = 0; i < temp_array_master.length; i++) {
                  this.selected_rank.usd_master =
                    parseFloat(this.selected_rank.usd_master) +
                    temp_array_master[i] *
                      parseFloat(this.rank_option.calc.min_usd) *
                      parseFloat(this.rank_option.calc.subarray[j].coef);
                  this.selected_rank.eur_master =
                    parseFloat(this.selected_rank.eur_master) +
                    temp_array_master[i] *
                      parseFloat(this.rank_option.calc.min_eur) *
                      parseFloat(this.rank_option.calc.subarray[j].coef);
                  j++;
                }
              }
              break;
            }
          }
        } else {
          this.selected_rank = {
            eur: 0,
            desire: 0,
            current: 0,
            usd: 0,
            usd_master: 0,
            eur_master: 0,
          };
          this.current = 0;
          if (this.desire > 1) {
            this.selected_rank.desire = this.desire;
          } else {
            this.desire = 1;
            this.selected_rank.desire = 1;
          }
          let temp_array_master = [];
          for (
            let i = this.desire;
            i > 0;
            i = i - parseFloat(this.rank_option.calc.step)
          ) {
            if (i - parseFloat(this.rank_option.calc.step) < 0) {
              temp_array_master.push(parseFloat(i));
            } else {
              temp_array_master.push(parseFloat(this.rank_option.calc.step));
            }
          }
          this.selected_rank.usd_master = 0;
          this.selected_rank.eur_master = 0;
          let j = 0;
          for (let i = 0; i < temp_array_master.length; i++) {
            this.selected_rank.usd_master =
              parseFloat(this.selected_rank.usd_master) +
              temp_array_master[i] *
                parseFloat(this.rank_option.calc.min_usd) *
                parseFloat(this.rank_option.calc.subarray[j].coef);
            this.selected_rank.eur_master =
              parseFloat(this.selected_rank.eur_master) +
              temp_array_master[i] *
                parseFloat(this.rank_option.calc.min_eur) *
                parseFloat(this.rank_option.calc.subarray[j].coef);
            j++;
          }
        }
      }
    },
    count_master_price(rank_count) {},
    get_ranks_img(rank, division) {
      if (this.rank_option.rank[rank].is_rank == 0) {
        return this.rank_option.calc.img;
      } else {
        let temp_rank_string =
          this.rank_option.rank[rank].title +
          "_" +
          this.rank_option.division[division];
        for (let i = 0; i < this.rank_option.rank_div.length; i++) {
          if (temp_rank_string == this.rank_option.rank_div[i].title) {
            return this.rank_option.rank_div[i].img;
          }
        }
      }
    },
    more_info_height() {
      if(this.product.content){
      this.hide_more =
        this.product.content.split("").length > 2000 ? true : false;
        }
        if(this.product.requirements){
      this.hide_more2 =
        this.product.requirements.split("").length > 2000 ? true : false;
        }
    },
    async temp_review_item_sku() {
      for (let i = 0; i < this.reviews.length; i++) {
        /* let response_data_sku_popular = await this.$axios
          .$get(
            this.apiUrl +
              "sku/" +
              this.reviews[i].parentid +
              "?include=id,title,slug,game"
          )
          .then((data) => {
            this.reviews[i].sku = data;
          });*/
        this.reviews[i].sku = this.product;
      }
      this.$forceUpdate();
    },
    reviews_text_filter(text) {
      let strippedString = text.replace(/(<([^>]+)>)/gi, "");
      return strippedString;
    },
    scroll_to_top() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    change_price_double(titles, slider_title) {
      for (let i = 0; i < this.chars.length; i++) {
        if (this.chars[i].type == 14 && this.chars[i].title == slider_title) {
          this.change_price_c_option_m(slider_title);
          this.chars[i].choosen_price = titles;
          this.double_sliders_price_usd = 0;
          this.double_sliders_price_eur = 0;
          for (let j = 0; j < this.double_sliders_check_price.length; j++) {
            if (
              this.double_sliders_check_price[j].slider_title == slider_title
            ) {
              for (
                let k = 0;
                k <
                this.chars[i].array[
                  this.chars[i].titles.indexOf(this.chars[i].choosen_price)
                ].subarray.length;
                k++
              ) {
                if (
                  this.chars[i].array[
                    this.chars[i].titles.indexOf(this.chars[i].choosen_price)
                  ].subarray[k].title == temp_slider.id
                ) {
                  this.double_sliders_check_price[j].title = this.chars[
                    i
                  ].array[
                    this.chars[i].titles.indexOf(this.chars[i].choosen_price)
                  ].subarray[k].title;
                  this.double_sliders_check_price[j].usd = this.chars[i].array[
                    this.chars[i].titles.indexOf(this.chars[i].choosen_price)
                  ].subarray[k].usd;
                  this.double_sliders_check_price[j].eur = this.chars[i].array[
                    this.chars[i].titles.indexOf(this.chars[i].choosen_price)
                  ].subarray[k].eur;
                  this.double_sliders_check_price[j].choosen_price = titles;
                } else {
                  if (
                    this.chars[i].array[
                      this.chars[i].titles.indexOf(this.chars[i].choosen_price)
                    ].subarray[k].title ==
                      this.double_sliders_check_price[j].title &&
                    this.double_sliders_check_price[j].slider_title !=
                      temp_slider.slider_name
                  ) {
                    this.double_sliders_check_price[j].title = this.chars[
                      i
                    ].array[
                      this.chars[i].titles.indexOf(this.chars[i].choosen_price)
                    ].subarray[k].title;
                    this.double_sliders_check_price[j].usd = this.chars[
                      i
                    ].array[
                      this.chars[i].titles.indexOf(this.chars[i].choosen_price)
                    ].subarray[k].usd;
                    this.double_sliders_check_price[j].eur = this.chars[
                      i
                    ].array[
                      this.chars[i].titles.indexOf(this.chars[i].choosen_price)
                    ].subarray[k].eur;
                    this.double_sliders_check_price[j].choosen_price = titles;
                  }
                }
              }
            }
            this.double_sliders_price_usd =
              parseFloat(this.double_sliders_price_usd) +
              parseFloat(this.double_sliders_check_price[j].usd);
            this.double_sliders_price_eur =
              parseFloat(this.double_sliders_price_eur) +
              parseFloat(this.double_sliders_check_price[j].eur);
          }
          this.change_price_c_option_p(slider_title);
        }
      }
    },
    change_price(titles, slider_title) {
      for (let i = 0; i < this.chars.length; i++) {
        if (this.chars[i].type == 13 && this.chars[i].title == slider_title) {
          this.change_price_c_option_m(slider_title);
          this.sliders_price_usd = 0;
          this.sliders_price_eur = 0;
          this.chars[i].choosen_price = titles;
          for (let j = 0; j < this.sliders_check_price.length; j++) {
            if (this.sliders_check_price[j].title == slider_title) {
              this.sliders_check_price[j].value = this.chars[i].value;
              this.sliders_check_price[j].choosen_price = this.chars[
                i
              ].choosen_price;
              (this.sliders_check_price[j].real_value = this.chars[i].array[
                this.chars[i].titles.indexOf(this.chars[i].choosen_price)
              ].subarray[this.chars[i].value].title),
                (this.sliders_check_price[j].usd = this.chars[i].array[
                  this.chars[i].titles.indexOf(this.chars[i].choosen_price)
                ].subarray[this.chars[i].value].usd);
              this.sliders_check_price[j].eur = this.chars[i].array[
                this.chars[i].titles.indexOf(this.chars[i].choosen_price)
              ].subarray[this.chars[i].value].eur;
              this.sliders_check_price[j].usd_sales = this.chars[i].array[
                this.chars[i].titles.indexOf(this.chars[i].choosen_price)
              ].subarray[this.chars[i].value].usd_sales;
              this.sliders_check_price[j].eur_sales = this.chars[i].array[
                this.chars[i].titles.indexOf(this.chars[i].choosen_price)
              ].subarray[this.chars[i].value].eur_sales;
              this.sliders_check_price[j].usd_sales2 = this.chars[i].array[
                this.chars[i].titles.indexOf(this.chars[i].choosen_price)
              ].subarray[this.chars[i].value].usd_sales2;
              this.sliders_check_price[j].eur_sales2 = this.chars[i].array[
                this.chars[i].titles.indexOf(this.chars[i].choosen_price)
              ].subarray[this.chars[i].value].eur_sales2;
            }
            this.sliders_price_usd =
              parseFloat(this.sliders_price_usd) +
              parseFloat(this.sliders_check_price[j].usd);
            this.sliders_price_eur =
              parseFloat(this.sliders_price_eur) +
              parseFloat(this.sliders_check_price[j].eur);
          }
          this.change_price_c_option_p(slider_title);
        }
      }
    },
    get_slidierUSD_byTitle(item) {
      if (item.array.slider_type == "one") {
        for (let i = 0; i < this.sliders_check_price.length; i++) {
          if (this.sliders_check_price[i].title == item.array.slider_title) {
            return parseFloat(this.sliders_check_price[i].usd);
          }
        }
      } else {
        for (let i = 0; i < this.double_sliders_check_price.length; i++) {
          if (
            this.double_sliders_check_price[i].slider_title ==
            item.array.slider_title
          ) {
            return parseFloat(this.double_sliders_check_price[i].usd);
          }
        }
      }
    },
    get_slidierEUR_byTitle(item) {
      if (item.array.slider_type == "one") {
        for (let i = 0; i < this.sliders_check_price.length; i++) {
          if (this.sliders_check_price[i].title == item.array.slider_title) {
            return parseFloat(this.sliders_check_price[i].eur);
          }
        }
      } else {
        for (let i = 0; i < this.double_sliders_check_price.length; i++) {
          if (
            this.double_sliders_check_price[i].slider_title ==
            item.array.slider_title
          ) {
            return parseFloat(this.double_sliders_check_price[i].eur);
          }
        }
      }
    },
    get_double_title(title) {
      for (let i = 0; i < this.double_sliders_check_price.length; i++) {
        if (this.double_sliders_check_price[i].slider_title == title) {
          return this.double_sliders_check_price[i].title.replace(";", " - ");
        }
      }
    },
    get_double_usd(title) {
      for (let i = 0; i < this.double_sliders_check_price.length; i++) {
        if (this.double_sliders_check_price[i].slider_title == title) {
          return this.double_sliders_check_price[i].usd;
        }
      }
    },
    get_double_eur(title) {
      for (let i = 0; i < this.double_sliders_check_price.length; i++) {
        if (this.double_sliders_check_price[i].slider_title == title) {
          return this.double_sliders_check_price[i].eur;
        }
      }
    },
    set_sku_favor() {
      let temp = this.$store.getters["getFavorite"];
      if (temp == "") {
        let temp_id = this.product.id;
        this.$store.commit("setFavorite", temp_id);
      } else {
        let temp_id = this.product.id;
        this.$store.commit("setFavorite", temp + "," + temp_id);
      }
      this.check_favorite();
      try {
        dashly.track("Пользователь добавил товар в избранное", {"product": this.product.id})
      } catch (e) {
        console.log("dashly not loaded")
      }
      try {
        fbq('track', 'AddToWishlist');
      } catch (e) {}
      location.reload();
    },
    delete_sku_favor() {
      let temp = this.$store.getters["getFavorite"].split(",");
      let index_temp = 0;
      for (let i = 0; i < temp.length; i++) {
        if (parseInt(temp[i], 10) == this.product.id) {
          index_temp = i;
          break;
        }
      }
      temp.splice(index_temp, 1);
      this.$store.commit("setFavorite", temp.join(","));
      this.check_favorite();
      try {
        dashly.track("Пользователь удалил товар из избранного", {"product": this.product.id})
      } catch (e) {
        console.log("dashly not loaded")
      }
      location.reload();
    },
    check_favorite() {
      let temp = this.$store.getters["getFavorite"];
      if (temp == "") {
        this.favorite = false;
      } else {
        let favorite_temp = temp.split(",");
        for (let i = 0; i < favorite_temp.length; i++) {
          if (parseInt(favorite_temp[i], 10) == this.product.id) {
            this.favorite = true;
            break;
          }
        }
      }
    },
    slider_watcher() {
      if (temp_slider.check) {
        for (let i = 0; i < this.chars.length; i++) {
          if (
            this.chars[i].type == 8 &&
            this.chars[i].title == temp_slider.slider_name
          ) {
            this.change_price_c_option_m(this.chars[i].title);
            this.chars[i].value = temp_slider.id;
            this.sliders_price_usd = 0;
            this.sliders_price_eur = 0;
            for (let j = 0; j < this.sliders_check_price.length; j++) {
              if (
                this.sliders_check_price[j].title == temp_slider.slider_name
              ) {
                this.sliders_check_price[j].value = this.chars[i].value;
                (this.sliders_check_price[j].real_value = this.chars[
                  i
                ].array.subarray[this.chars[i].value].title),
                  (this.sliders_check_price[j].usd = this.chars[
                    i
                  ].array.subarray[this.chars[i].value].usd);
                this.sliders_check_price[j].eur = this.chars[i].array.subarray[
                  this.chars[i].value
                ].eur;
                this.sliders_check_price[j].usd_sales = this.chars[
                  i
                ].array.subarray[this.chars[i].value].usd_sales;
                this.sliders_check_price[j].eur_sales = this.chars[
                  i
                ].array.subarray[this.chars[i].value].eur_sales;
                this.sliders_check_price[j].usd_sales2 = this.chars[
                  i
                ].array.subarray[this.chars[i].value].usd_sales2;
                this.sliders_check_price[j].eur_sales2 = this.chars[
                  i
                ].array.subarray[this.chars[i].value].eur_sales2;
              }
              this.sliders_price_usd =
                parseFloat(this.sliders_price_usd) +
                parseFloat(this.sliders_check_price[j].usd);
              this.sliders_price_eur =
                parseFloat(this.sliders_price_eur) +
                parseFloat(this.sliders_check_price[j].eur);
            }
            this.change_price_c_option_p(this.chars[i].title);
          }
          if (
            this.chars[i].type == 13 &&
            this.chars[i].title == temp_slider.slider_name
          ) {
            this.change_price_c_option_m(this.chars[i].title);
            this.chars[i].value = temp_slider.id;
            this.sliders_price_usd = 0;
            this.sliders_price_eur = 0;
            for (let j = 0; j < this.sliders_check_price.length; j++) {
              if (
                this.sliders_check_price[j].title == temp_slider.slider_name
              ) {
                this.sliders_check_price[j].value = this.chars[i].value;
                (this.sliders_check_price[j].real_value = this.chars[i].array[
                  this.chars[i].titles.indexOf(this.chars[i].choosen_price)
                ].subarray[this.chars[i].value].title),
                  (this.sliders_check_price[j].usd = this.chars[i].array[
                    this.chars[i].titles.indexOf(this.chars[i].choosen_price)
                  ].subarray[this.chars[i].value].usd);
                this.sliders_check_price[j].eur = this.chars[i].array[
                  this.chars[i].titles.indexOf(this.chars[i].choosen_price)
                ].subarray[this.chars[i].value].eur;
                this.sliders_check_price[j].usd_sales = this.chars[i].array[
                  this.chars[i].titles.indexOf(this.chars[i].choosen_price)
                ].subarray[this.chars[i].value].usd_sales;
                this.sliders_check_price[j].eur_sales = this.chars[i].array[
                  this.chars[i].titles.indexOf(this.chars[i].choosen_price)
                ].subarray[this.chars[i].value].eur_sales;
                this.sliders_check_price[j].usd_sales2 = this.chars[i].array[
                  this.chars[i].titles.indexOf(this.chars[i].choosen_price)
                ].subarray[this.chars[i].value].usd_sales2;
                this.sliders_check_price[j].eur_sales2 = this.chars[i].array[
                  this.chars[i].titles.indexOf(this.chars[i].choosen_price)
                ].subarray[this.chars[i].value].eur_sales2;
              }
              this.sliders_price_usd =
                parseFloat(this.sliders_price_usd) +
                parseFloat(this.sliders_check_price[j].usd);
              this.sliders_price_eur =
                parseFloat(this.sliders_price_eur) +
                parseFloat(this.sliders_check_price[j].eur);
            }
            this.change_price_c_option_p(this.chars[i].title);
          }
          if (
            this.chars[i].type == 7 &&
            this.chars[i].title == temp_slider.slider_name
          ) {
            this.change_price_c_option_m(this.chars[i].title);
            this.double_sliders_price_usd = 0;
            this.double_sliders_price_eur = 0;
            for (let j = 0; j < this.double_sliders_check_price.length; j++) {
              if (
                this.double_sliders_check_price[j].slider_title ==
                temp_slider.slider_name
              ) {
                for (let k = 0; k < this.chars[i].array.subarray.length; k++) {
                  if (this.chars[i].array.subarray[k].title == temp_slider.id) {
                    this.double_sliders_check_price[j].title = this.chars[
                      i
                    ].array.subarray[k].title;
                    this.double_sliders_check_price[j].usd = this.chars[
                      i
                    ].array.subarray[k].usd;
                    this.double_sliders_check_price[j].eur = this.chars[
                      i
                    ].array.subarray[k].eur;
                  }
                }
              }
              this.double_sliders_price_usd =
                parseFloat(this.double_sliders_price_usd) +
                parseFloat(this.double_sliders_check_price[j].usd);
              this.double_sliders_price_eur =
                parseFloat(this.double_sliders_price_eur) +
                parseFloat(this.double_sliders_check_price[j].eur);
            }
            this.change_price_c_option_p(this.chars[i].title);
          }
          if (
            this.chars[i].type == 14 &&
            this.chars[i].title == temp_slider.slider_name
          ) {
            this.change_price_c_option_m(this.chars[i].title);
            this.double_sliders_price_usd = 0;
            this.double_sliders_price_eur = 0;
            for (let j = 0; j < this.double_sliders_check_price.length; j++) {
              if (
                this.double_sliders_check_price[j].slider_title ==
                temp_slider.slider_name
              ) {
                for (
                  let k = 0;
                  k <
                  this.chars[i].array[
                    this.chars[i].titles.indexOf(this.chars[i].choosen_price)
                  ].subarray.length;
                  k++
                ) {
                  if (
                    this.chars[i].array[
                      this.chars[i].titles.indexOf(this.chars[i].choosen_price)
                    ].subarray[k].title == temp_slider.id
                  ) {
                    this.double_sliders_check_price[j].title = this.chars[
                      i
                    ].array[
                      this.chars[i].titles.indexOf(this.chars[i].choosen_price)
                    ].subarray[k].title;
                    this.double_sliders_check_price[j].usd = this.chars[
                      i
                    ].array[
                      this.chars[i].titles.indexOf(this.chars[i].choosen_price)
                    ].subarray[k].usd;
                    this.double_sliders_check_price[j].eur = this.chars[
                      i
                    ].array[
                      this.chars[i].titles.indexOf(this.chars[i].choosen_price)
                    ].subarray[k].eur;
                  }
                }
              }
              this.double_sliders_price_usd =
                parseFloat(this.double_sliders_price_usd) +
                parseFloat(this.double_sliders_check_price[j].usd);
              this.double_sliders_price_eur =
                parseFloat(this.double_sliders_price_eur) +
                parseFloat(this.double_sliders_check_price[j].eur);
            }
            this.change_price_c_option_p(this.chars[i].title);
          }
          temp_slider.check = false;
        }
      }
    },
    init_all_range() {
      for (let i = 0; i < this.chars.length; i++) {
        if (this.chars[i].type == 8) {
          let temp = this.chars[i].step;
          let temp_class = ".js-range-slider-" + i;
          let custom_values = this.chars[i].step;

          try {
            temp_slider.id = 0;
            temp_slider.check = true;
            temp_slider.slider_name = this.chars[0].title;
          } catch (e) {}

          $(".js-range-slider-" + i).ionRangeSlider({
            type: "single",
            grid: true,
            from: 0,
            values: custom_values,
            hide_min_max: true,
            hide_from_to: true,
            onChange: function (data) {
              temp_slider.id = data.from;
              temp_slider.check = true;
              temp_slider.slider_name = data.input[0].id;
              let left = $(temp_class).parent().find(".irs-handle").css("left");
              let left_temp = left.split("p")[0];
              $(temp_class)
                .parent()
                .find(".under_thumb_info")
                .css("left", parseFloat(left_temp) - 34 + "px");
            },
          });
        }
        if (this.chars[i].type == 13) {
          let temp = this.chars[i].step;
          let temp_class = ".js-range-slider-price-" + i;
          let custom_values = this.chars[i].step;

          try {
            temp_slider.id = 0;
            temp_slider.check = true;
            temp_slider.slider_name = this.chars[0].title;
          } catch (e) {}
          $(".js-range-slider-price-" + i).ionRangeSlider({
            type: "single",
            grid: true,
            from: 0,
            values: custom_values,
            hide_min_max: true,
            hide_from_to: true,
            onChange: function (data) {
              temp_slider.id = data.from;
              temp_slider.check = true;
              temp_slider.slider_name = data.input[0].id;
              let left = $(temp_class).parent().find(".irs-handle").css("left");
              let left_temp = left.split("p")[0];
              $(temp_class)
                .parent()
                .find(".under_thumb_info")
                .css("left", parseFloat(left_temp) - 34 + "px");
            },
          });
        }
        if (this.chars[i].type == 7) {
          let temp = this.chars[i].step;
          let temp_class = ".js-range-slider-double-" + i;
          let custom_values = this.chars[i].step;
          $(".js-range-slider-double-" + i).ionRangeSlider({
            type: "double",
            grid: true,
            from: 0,
            to: 1,
            values: custom_values,
            hide_min_max: true,
            hide_from_to: true,
            min_interval: 1,
            onChange: function (data) {
              temp_slider.id = data.from_value + ";" + data.to_value;
              temp_slider.check = true;
              temp_slider.slider_name = data.input[0].id;
              let left = $(temp_class).parent().find(".from").css("left");
              let left_temp = left.split("p")[0];
              $(temp_class)
                .parent()
                .find(".under_thumb_info")
                .css("left", parseFloat(left_temp) - 34 + "px");
            },
          });
        }
        if (this.chars[i].type == 14) {
          let temp = this.chars[i].step;
          let temp_class = ".js-range-slider-double-price-" + i;
          let custom_values = this.chars[i].step;
          $(".js-range-slider-double-price-" + i).ionRangeSlider({
            type: "double",
            grid: true,
            from: 0,
            to: 1,
            values: custom_values,
            hide_min_max: true,
            hide_from_to: true,
            min_interval: 1,
            onChange: function (data) {
              temp_slider.id = data.from_value + ";" + data.to_value;
              temp_slider.check = true;
              temp_slider.slider_name = data.input[0].id;
              let left = $(temp_class).parent().find(".from").css("left");
              let left_temp = left.split("p")[0];
              $(temp_class)
                .parent()
                .find(".under_thumb_info")
                .css("left", parseFloat(left_temp) - 34 + "px");
            },
          });
        }
      }
    },
    get_more_raid_slot_height() {
      if (this.events_by_product != undefined) {
        this.hide_more_raid =
          this.events_by_product.times.length > 4 ? true : false;
      }
    },
    set_date_tomorrow() {
      let temp = moment(this.date).add(1, "days").format("YYYY,MM,DD");
      this.date = new Date(temp);
    },
    set_date_today() {
      let temp = moment().tz("Europe/Berlin").format("YYYY,MM,DD");
      this.date = new Date(temp);
    },
    calc_plus(item) {
      item.count++;
      if (
        item.array.max != "" &&
        parseFloat(item.count) * parseFloat(item.array.step) ==
          parseFloat(item.array.max)
      ) {
        item.count--;
      } else {
        this.option_total_eu =
          parseFloat(this.option_total_eu) + parseFloat(item.array.eur);
        this.option_total_us =
          parseFloat(this.option_total_us) + parseFloat(item.array.usd);
        if (
          item.array.min_eur_sales > 0 &&
          item.array.min_usd_sales > 0 &&
          item.array.min_eur_sales2 == 0 &&
          item.array.min_usd_sales2 == 0
        ) {
          this.option_total_eu_sale =
            parseFloat(this.option_total_eu_sale) +
            parseFloat(item.array.eur_sales);
          this.option_total_us_sale =
            parseFloat(this.option_total_us_sale) +
            parseFloat(item.array.usd_sales);
        } else {
          if (item.array.min_eur_sales2 > 0 && item.array.min_usd_sales2 > 0) {
            this.option_total_eu_sale =
              parseFloat(this.option_total_eu_sale) +
              parseFloat(item.array.eur_sales2);
            this.option_total_us_sale =
              parseFloat(this.option_total_us_sale) +
              parseFloat(item.array.usd_sales2);
          }
        }
        this.$forceUpdate();
      }
    },
    calc_minus(item) {
      item.count--;
      if (item.count < 0) {
        item.count = 0;
      } else {
        this.option_total_eu =
          parseFloat(this.option_total_eu) - parseFloat(item.array.eur);
        this.option_total_us =
          parseFloat(this.option_total_us) - parseFloat(item.array.usd);
        if (
          item.array.min_eur_sales > 0 &&
          item.array.min_usd_sales > 0 &&
          item.array.min_eur_sales2 == 0 &&
          item.array.min_usd_sales2 == 0
        ) {
          this.option_total_eu_sale =
            parseFloat(this.option_total_eu_sale) -
            parseFloat(item.array.eur_sales);
          this.option_total_us_sale =
            parseFloat(this.option_total_us_sale) -
            parseFloat(item.array.usd_sales);
        } else {
          if (item.array.min_eur_sales2 > 0 && item.array.min_usd_sales2 > 0) {
            this.option_total_eu_sale =
              parseFloat(this.option_total_eu_sale) -
              parseFloat(item.array.eur_sales2);
            this.option_total_us_sale =
              parseFloat(this.option_total_us_sale) -
              parseFloat(item.array.usd_sales2);
          }
        }
      }
      this.$forceUpdate();
    },
    body_active() {
      document.body.className = "body_pop_up_disable";
    },
    list_option_add_calc() {
      if (this.product.chars) {
        let chars = JSON.parse(this.product.chars);
        for (let i = 0; i < chars.length; i++) {
          if (chars[i].type == 6) {
            this.cacl_array.push(chars[i]);
            this.option_total_eu =
              parseFloat(this.option_total_eu) +
              parseFloat(chars[i].array.min_eur);
            this.option_total_us =
              parseFloat(this.option_total_us) +
              parseFloat(chars[i].array.min_usd);
            if (
              chars[i].array.min_eur_sales > 0 &&
              chars[i].array.min_usd_sales > 0 &&
              chars[i].array.min_eur_sales2 == 0 &&
              chars[i].array.min_usd_sales2 == 0
            ) {
              this.option_total_eu_sale =
                parseFloat(this.option_total_eu_sale) +
                parseFloat(chars[i].array.min_eur_sales);
              this.option_total_us_sale =
                parseFloat(this.option_total_us_sale) +
                parseFloat(chars[i].array.min_usd_sales);
            } else {
              if (
                chars[i].array.min_eur_sales2 > 0 &&
                chars[i].array.min_usd_sales2 > 0
              ) {
                this.option_total_eu_sale =
                  parseFloat(this.option_total_eu_sale) +
                  parseFloat(chars[i].array.min_eur_sales2);
                this.option_total_us_sale =
                  parseFloat(this.option_total_us_sale) +
                  parseFloat(chars[i].array.min_usd_sales2);
              }
            }
            chars[i].count = 0;
          }
        }
      }
    },
    count_minus() {
      if (this.count == 1) {
      } else {
        this.count--;
      }
    },
    init_swiper_related() {
      var mySwiper = new Swiper(".relatedProducts .swiper-container", {
        speed: 1000,
        spaceBetween: 16,
        slidesPerView: "auto",
      });
      var mySwiper = new Swiper(".reviews .swiper-container", {
        speed: 1000,
        spaceBetween: 16,
        slidesPerView: "auto",
      });
    },
    init_swiper_galerry() {
      var mySwiper_mainPhoto = new Swiper(".sliderPhoto .swiper-container", {
        speed: 1000,
        spaceBetween: 16,
        slidesPerView: "3",
      });
    },
    change_price_c_option_m(title) {
      for (let i = 0; i < this.selected_list_chars.length; i++) {
        if (
          this.selected_list_chars[i].array.slider_title &&
          this.selected_list_chars[i].array.slider_title == title
        ) {
          let item = this.selected_list_chars[i];
          this.option_total_us =
            parseFloat(this.option_total_us) -
            parseFloat(
              this.get_slidierUSD_byTitle(item) * parseFloat(item.array.coefficient)
            );
          this.option_total_eu =
            parseFloat(this.option_total_eu) -
            parseFloat(
              this.get_slidierEUR_byTitle(item) * parseFloat(item.array.coefficient)
            );
        }
      }
    },
    change_price_c_option_p(title) {
      for (let i = 0; i < this.selected_list_chars.length; i++) {
        if (
          this.selected_list_chars[i].array.slider_title &&
          this.selected_list_chars[i].array.slider_title == title
        ) {
          let item = this.selected_list_chars[i];
          this.option_total_us =
            parseFloat(this.option_total_us) +
            parseFloat(
              this.get_slidierUSD_byTitle(item) * parseFloat(item.array.coefficient)
            );
          this.option_total_eu =
            parseFloat(this.option_total_eu) +
            parseFloat(
              this.get_slidierEUR_byTitle(item) * parseFloat(item.array.coefficient)
            );
        }
      }
    },
    add_option(item) {
      let check_ex = false;
      if (item.checkbox_type == 0) {
        for (let i = 0; i < this.selected_list_chars.length; i++) {
          if (item.array.title == this.selected_list_chars[i].array.title) {
            check_ex = true;
            this.option_total_us =
              parseFloat(this.option_total_us) - parseFloat(item.array.usd);
            this.option_total_eu =
              parseFloat(this.option_total_eu) - parseFloat(item.array.eur);
            this.selected_list_chars.splice(i, 1);
            break;
          }
        }
      } else {
        for (let i = 0; i < this.selected_list_chars.length; i++) {
          if (item.array.title == this.selected_list_chars[i].array.title) {
            check_ex = true;
            this.option_total_us =
              parseFloat(this.option_total_us) -
              parseFloat(
                this.get_slidierUSD_byTitle(item) * parseFloat(item.array.coefficient)
              );
            this.option_total_eu =
              parseFloat(this.option_total_eu) -
              parseFloat(
                this.get_slidierEUR_byTitle(item) * parseFloat(item.array.coefficient)
              );
            this.selected_list_chars.splice(i, 1);
            break;
          }
        }
      }
      if (!check_ex) {
        this.selected_list_chars.push(item);
        if (item.checkbox_type == 0) {
          this.option_total_us =
            parseFloat(this.option_total_us) + parseFloat(item.array.usd);
          this.option_total_eu =
            parseFloat(this.option_total_eu) + parseFloat(item.array.eur);
        } else {
          this.option_total_us =
            parseFloat(this.option_total_us) +
            parseFloat(
              this.get_slidierUSD_byTitle(item) * parseFloat(item.array.coefficient)
            );
          this.option_total_eu =
            parseFloat(this.option_total_eu) +
            parseFloat(
              this.get_slidierEUR_byTitle(item) * parseFloat(item.array.coefficient)
            );
        }
      }
    },
    add_sub_option(item, main_item) {
      if (main_item.type == 4) {
        for (let i = 0; i < main_item.array.subarray.length; i++) {
          for (let j = 0; j < this.selected_sub_list_chars.length; j++) {
            if (
              main_item.array.subarray[i].title ==
                this.selected_sub_list_chars[j].title &&
              this.selected_sub_list_chars[j].title != item.title
            ) {
              this.option_total_us =
                parseFloat(this.option_total_us) -
                parseFloat(this.selected_sub_list_chars[j].usd);
              this.option_total_eu =
                parseFloat(this.option_total_eu) -
                parseFloat(this.selected_sub_list_chars[j].eur);
              this.selected_sub_list_chars.splice(j, 1);
              main_item.counter--;
              main_item.select_name = "";
              main_item.open = false;
              break;
            }
          }
        }
      }
      let check_ex = false;
      for (let i = 0; i < this.selected_sub_list_chars.length; i++) {
        if (item.title == this.selected_sub_list_chars[i].title) {
          check_ex = true;
          this.option_total_us =
            parseFloat(this.option_total_us) - parseFloat(item.usd);
          this.option_total_eu =
            parseFloat(this.option_total_eu) - parseFloat(item.eur);
          this.selected_sub_list_chars.splice(i, 1);
          main_item.counter--;
          main_item.select_name = "";
          if (main_item.type == 4) {
            main_item.open = false;
          }
          break;
        }
      }
      if (!check_ex) {
        this.selected_sub_list_chars.push(item);
        main_item.select_name = item.title;
        this.option_total_us =
          parseFloat(this.option_total_us) + parseFloat(item.usd);
        this.option_total_eu =
          parseFloat(this.option_total_eu) + parseFloat(item.eur);
        if (main_item.type == 4) {
          main_item.open = false;
        }
        main_item.counter++;
      }
    },
    check_checked(item) {
      for (let i = 0; i < this.selected_list_chars.length; i++) {
        if (item.array.title == this.selected_list_chars[i].array.title) {
          return true;
        }
      }
    },
    check_c_checked(item) {
      for (let i = 0; i < this.selected_list_chars.length; i++) {
        if (this.selected_list_chars[i].checkbox_type != 0) {
          if (item.array.title == this.selected_list_chars[i].array.title) {
            return true;
          }
        }
      }
    },
    check_sub_checked(sub_item) {
      for (let i = 0; i < this.selected_sub_list_chars.length; i++) {
        if (sub_item.title == this.selected_sub_list_chars[i].title) {
          return true;
        }
      }
    },
    open_tab_multiselect(item) {
      if (item.open) {
        item.open = false;
      } else {
        item.open = true;
      }
      this.$forceUpdate();
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
    async token_validations() {
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
      let response_code = "";
      let temp_r = matches_r ? decodeURIComponent(matches_r[1]) : undefined;
      if (temp == undefined) {
      } else {
        let response = await this.$axios
          .$post(this.globalApi + "handlers/verifi.php", {
            access_token: temp,
            req: "f",
          })
          .then((data) => {
            response_code = data.status;
          });
      }
      return response_code;
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
    async add_to_card() {
      try {
        dashly.track("Пользователь добавил товар в коризну", {"product": this.product.id})
      } catch (e) {
        console.log("dashly not loaded")
      }

      this.blocked_buy_button = true;
      document.body.className = "body_pop_up_active";
      let rank_object = {
        selected_rank: this.selected_rank,
        desire: this.desire,
        current: this.current,
        step_rank: this.step_rank,
        rank_selects: this.rank_selects,
        total_rank_price_usd: this.total_rank_price_usd.toFixed(2),
        total_rank_price_eur: this.total_rank_price_usd.toFixed(2),
        total_rank_price_usdSale: this.total_rank_price_usdSale.toFixed(2),
        total_rank_price_usdSale2: this.total_rank_price_usdSale2.toFixed(2),
        total_rank_price_eurSale: this.total_rank_price_eurSale.toFixed(2),
        total_rank_price_eurSale2: this.total_rank_price_eurSale2.toFixed(2),
      };
      let cart = {};
      cart["id"] = this.product.id;
      cart["checkbox_list"] = this.selected_list_chars;
      cart["subcheckbox_list"] = this.selected_sub_list_chars;
      cart["single_slider"] = this.sliders_check_price;
      cart["double_slider"] = this.double_sliders_check_price;
      cart["count"] = this.count;
      cart["calc"] = this.cacl_array;
      cart["time_id"] = this.choosen_event_id;
      cart["rank_object"] = rank_object;
      if (this.get_access()) {
        cart["userid"] = this.get_access();
      } else {
        if (this.getCookie("f_token")) {
          cart["userid"] = this.getCookie("f_token");
        } else {
          cart["userid"] = this.get_access();
        }
      }
      cart["method"] = "add";
      let response_data_sku = await this.$axios
        .$post(this.globalApi + "handlers/cart/cart.php", cart)
        .then((data) => {
          if (data.jwt && data.refresh) {
            let date = new Date(Date.now() + 30 * 86400e3);
            date = date.toUTCString();
            let date_r = new Date(Date.now() + 30 * 86400e3);
            date_r = date_r.toUTCString();
            this.deleteCookie("access_t");
            this.deleteCookie("refresh_t");
            this.setCookie("access_t", data.jwt, { expires: date });
            this.setCookie("refresh_t", JSON.stringify(data.refresh), {
              expires: date_r,
            });
            this.$store.commit("setUserLoginCheck", true);
            this.$store.commit("setUserLoginId", data.jwt.split(".")[1]);
            if (data.status == "200") {
              let temp = JSON.parse(atob(this.get_access().split(".")[1]));
              let response_get_cart = this.$axios
                .$get(this.apiUrl + "carts/" + temp.cart_id)
                .then((data) => {
                  this.get_cart(data.cart);
                  this.if_buy = true;
                  this.scroll_to_top();
                });
            }
          } else {
            if (data.user_id && data.cart_id && data.key) {
              let date = new Date(Date.now() + 30 * 86400e3);
              this.deleteCookie("f_token");
              this.setCookie("f_token", JSON.stringify(data), {
                expires: date,
              });
              let response_get_cart = this.$axios
                .$get(this.apiUrl + "carts/" + data.cart_id)
                .then((data) => {
                  this.get_cart(data.cart);
                  this.if_buy = true;
                  this.scroll_to_top();
                });
            }
          }
        });

        fbq('track', 'AddToCart');
    },
    get_cart(cart) {
      this.$store.commit("setItemInCard", JSON.parse(cart));
    },
    async send_review() {
      let response_get_name = await this.$axios
        .$post(this.globalApi + "requests.php", {
          method: "user_info",
          access_token: this.get_access(),
          fields: "all",
          orders: "all",
        })
        .then((data) => {
          this.review.name = data.user.name;
          this.review.email = data.user.email;
        });
      let form = {
        userid: this.user_id,
        name: this.review.name,
        email: this.review.email,
        orderid: this.review.order,
        rating: this.review.rating,
        parentid: this.$route.params.id.split("&")[1],
        status: 0,
        date:  moment("2021-08-26").tz("Europe/Berlin").format("YYYY-MM-DD HH:mm:ss"),
        // date: moment().tz("Europe/Berlin").format("YYYY-MM-DD HH:mm:ss"),
        checks: 0,
        review: this.text,
      };
      let response_data_sku_popular = await this.$axios
        .$post(this.apiUrl + "reviews", form)
        .then((data) => {
          this.body_active();
          this.reviews_pop_up = false;
        });
    },
    init_sku_list(item) {
      this.items = JSON.parse(item.cart);
    },
    open_login_popup() {
      this.$store.commit("set_global_login_popup_check", true);
    },
    fill_paginator_list() {
      if (this.results_paginator) {
        (this.paginator_list = []),
          (this.list_number = Math.ceil(this.results_paginator / 5));
        if (this.list_number < 7) {
          for (let i = 0; i < this.list_number; i++) {
            let list_item = {
              title: i + 1,
              index: i,
              active: true,
            };
            this.paginator_list.push(list_item);
          }
        } else {
          for (let i = 0; i < this.list_number; i++) {
            let check = true;
            if (i > 3) {
              check = false;
            }
            let list_item = {
              title: i + 1,
              index: i,
              active: check,
            };
            this.paginator_list.push(list_item);
          }
          this.paginator_list[this.list_number - 1].active = true;
        }
      }
    },
    async temp_review_item() {
      for (let i = 0; i < this.reviews_pag.length; i++) {
        /* let response_data_sku_popular = await this.$axios
          .$get(
            this.apiUrl +
              "sku/" +
              this.reviews_pag[i].parentid +
              "?include=id,title,slug,game"
          )
          .then((data) => {
            this.reviews_pag[i].sku = data;
          });*/
        this.reviews_pag[i].sku = this.product;
      }
      this.$forceUpdate();
    },
    async get_all_rev_by_pag(index) {
      this.active_index = this.paginator_list[index].title;
      let response_data = await this.$axios
        .$get(
          this.apiUrl +
            "reviews?order=date,desc&filter=status,eq,1" +
            "&page=" +
            this.paginator_list[index].title +
            ",5&filter=parentid,eq," +
            this.$route.params.id.split("&")[1]
        )
        .then((data) => {
          this.reviews_pag = data.records;
          for (let i = 0; i < this.reviews_pag.length; i++) {
            this.reviews_pag[i].stars = [];
            if (this.reviews_pag[i].rating == 0) {
              this.reviews_pag[i].stars = ["n", "n", "n", "n", "n"];
            } else {
              for (let j = 0; j < this.reviews_pag[i].rating; j++) {
                this.reviews_pag[i].stars.push("s");
              }
              for (let j = 0; j < 5 - this.reviews_pag[i].rating; j++) {
                this.reviews_pag[i].stars.push("n");
              }
            }
            /*let response_data_sku_popular = this.$axios
              .$get(
                this.apiUrl +
                  "sku/" +
                  this.reviews_pag[i].parentid +
                  "?include=id,title,slug,game"
              )
              .then((data) => {
                this.reviews_pag[i].sku = data;
                this.$forceUpdate();
              });*/
            this.reviews_pag[i].sku = this.product;
          }
          this.results_paginator = data.results;
        });
      if (index == 0) {
        this.fill_paginator_list();
      } else {
        if (index == this.list_number - 1 || index == this.list_number - 2) {
          this.paginator_list = [];
          for (let i = 0; i < this.list_number; i++) {
            let check = false;
            if (i > this.list_number - 5) {
              check = true;
            }
            let list_item = {
              title: i + 1,
              index: i,
              active: check,
            };
            this.paginator_list.push(list_item);
          }
          this.paginator_list[0].active = true;
        } else {
          let temp = [];
          if (
            !this.paginator_list[index + 1].active ||
            !this.paginator_list[index - 1].active
          ) {
            for (let i = 0; i < this.list_number; i++) {
              let check = false;
              if (i == index || i == index - 1 || i == index + 1) {
                check = true;
              }
              let list_item = {
                title: i + 1,
                index: i,
                active: check,
              };
              temp.push(list_item);
            }
            temp[this.list_number - 1].active = true;
            temp[0].active = true;
            this.paginator_list = temp;
          }
        }
      }
    },
    body_set_hidden() {
      document.body.className = "body_pop_up_active";
    },
    async get_orders() {
      if (this.get_access()) {
        this.user_id = JSON.parse(
          atob(this.get_access().split(".")[1])
        ).user_id;
        let response = await this.$axios
          .$post(this.globalApi + "requests.php", {
            method: "user_info",
            access_token: this.get_access(),
            fields: "all",
            orders: "all",
          })
          .then((data) => {
            this.orders = data.orders;
            for (let i = 0; i < this.orders.length; i++) {
              let temp_check = false;
              let temp_cart = JSON.parse(this.orders[i].cart);
              for (let j = 0; j < temp_cart.cart_items.length; j++) {
                if (
                  temp_cart.cart_items[j].product.id ==
                  this.$route.params.id.split("&")[1]
                ) {
                  this.orders[i].temp_check = true;
                  break;
                }
              }
            }
          });
      }
    },
    /*
    showAllTimes() {
      this.showTimes = !this.showTimes
    },
    changeTime(event, def) {
      let thisTime =  def ? '' : this.$store.getters['getSelectedZone'] == 'eu'  ? event.time_cest : event.time_edt
      this.showTimesTitile = def ? 'Choose raid' : `${event.week} ${event.date} | ${thisTime}`
      this.showTimes = !this.showTimes
      if(!def) {
        this.choosen_event_id = event.id
        this.selectTimes = event
      } else {
        this.choosen_event_id = ''
      }
    },
    timesLeft(event) {
      if(event){
        let thisTime = this.$store.getters['getSelectedZone'] == 'eu'  ? event.time_cest : event.time_edt
        let date = event.oldDate + ' ' + thisTime
        if(event.oldDate){

          var countDownDate = moment(date);
          let diff = countDownDate.diff(moment());
          let timeLeft = moment.utc(diff).format("HH:mm")

          let text = `<span class="timeVal">&nbsp; ${timeLeft.split(':')[0]}</span> HR : <span class="timeVal">${timeLeft.split(':')[1]}</span> MIN`

          return text;
        }

      }
    },
    chooseFaction(id) {
      this.selected_fraction = id;
      this.timeList()
    }
    */
  },
};

</script>

<style scoped>
  .choodeEventTime {
    width: 288px;
    height: 40px;
    background: #F5F5F6;
    overflow: hidden;

    border: 1px solid #D5D7D7;
    box-sizing: border-box;

    box-shadow: 0px 4px 12px rgba(68, 75, 77, 0.1);
    border-radius: 6px;
    transition: 5s;
  }
  .choodeEventTime.show {
    height: auto;
  }
  .choodeEventTime__main {
    position: relative;
    transition: 5s;
  }
  .choodeEventTime .choodeEventTime__main::after {
    content: '';
    background-image: url("data:image/svg+xml,%3Csvg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3 11L8 6L13 11' stroke='%23595E61' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    width: 16px;
    height: 16px;
    position: absolute;
    right: 15px;
    transition: .5s;
  }
  .choodeEventTime.show .choodeEventTime__main::after{
    transform: rotate(-180deg)
  }
  .choodeEventTime li {
    padding: 12px 16px;
    box-sizing: border-box;
    width: 288px;
    height: 40px;
    cursor: pointer;
    transition: .5s;
  }
  .choodeEventTime__item:hover {
    background: #D5D7D7;
  }
  .choodeEventTime span {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;

    /* Grey/2 */
    color: #444B4D;
  }
  .raidSlost.open_raid_slot {
    flex-direction: column;
  }
  .EventTimeInfo {
    font-family: Roboto;
    font-weight: 500;
    font-size: 14px;
    color: #444B4D;
    margin: 0 0 20px 0;
  }
  .EventTimeInfo > span {
    display: flex;
    align-items: end;
  }
  .chooseFaction {
    display: flex;
    border: 1px solid #D5D7D7;
    width: fit-content;
    border-radius: 36px;
    margin: 16px 0;
  }
  .chooseFaction > li.active {
    border: 2px solid #C24DFE;
  }
  .chooseFaction > li {
    height: 32px;
    box-sizing: border-box;
    border-radius: 35px;
    justify-content: center;
    padding: 9px 16px;
    font-family: Roboto;
    font-weight: bold;
    font-size: 12px;
    display: flex;
    align-items: center;
    color: #2F3639;
    cursor: pointer;
  }
</style>
<style>
  .timeVal {
    color: #C24DFE;
  }
</style>
