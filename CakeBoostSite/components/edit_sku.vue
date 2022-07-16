<template>
  <div>
    <div class="mobileItemTitle">
      <h1 class="title">{{ product.title }}{{ title }}</h1>
    </div>
    <div class="itemPageHeaer">
      <div class="sliderPhoto">
        <div class="mainPhoto">
          <a
            data-fancybox="gallery"
            v-bind:href="apiImg + 'sku/' + product.image"
          >
            <img :src="apiImg + 'sku/' + product.image" alt />
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
                <img class="play_button" src="/img/Play button.svg" alt="" />
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
              <img src="/img(ColorSochialLogo)/Facebook.svg" alt />
            </a>
            <!--a href="google.com">
            <img src="/img(ColorSochialLogo)/Google Color.svg" alt />
            </!--a-->
            <a href="https://discord.gg/ypHKBqa">
              <img src="/img(ColorSochialLogo)/Discord.svg" alt />
            </a>
            <!--a href="https://www.twitch.tv/cakeboost">
            <img src="/img(ColorSochialLogo)/Twitch.svg" alt />
          </!--a>
          <a-- href="https://www.instagram.com/cakeboost/">
            <img src="/img(ColorSochialLogo)/Inst.svg" alt />
            </a-->
            <a href="https://twitter.com/Cake_boost">
              <img src="/img(ColorSochialLogo)/Twitter.svg" alt />
            </a>
            <!--a href="https://www.youtube.com/channel/UCe-rP...subscriber">
            <img src="/img(ColorSochialLogo)/YT.svg" alt />
            </!--a-->
            <a href="https://www.whatsapp.com/">
              <img src="/img(ColorSochialLogo)/WhatsApp.svg" alt />
            </a>
            <!--a href="https://ru.linkedin.com/">
            <img src="/img(ColorSochialLogo)/LiknedIn.svg" alt />
            </!--a-->
            <a href="https://t.me/cakeboost">
              <img src="/img(ColorSochialLogo)/Telegram.svg" alt />
            </a>
            <!--a href="https://www.viber.com/ru/">
            <img src="/img(ColorSochialLogo)/Viber.svg" alt />
            </!--a-->
          </div>
        </div>
      </div>
      <div class="itemInfo">
        <h1 class="title">{{ product.title }}</h1>
        <div class="reviews">
          <img src="/img/Star TrustPilot.svg" alt />
          <img src="/img/Star TrustPilot.svg" alt />
          <img src="/img/Star TrustPilot.svg" alt />
          <img src="/img/Star TrustPilot.svg" alt />
          <img src="/img/Star.svg" alt />

          <a href="#reviewsds">
            <span v-if="rev_result">
              {{ rev_result }} reviews
              <img src="/img/Arrow Down.svg" alt />
            </span>
            <span  v-else>
              0 reviews
              <img src="/img/Arrow Down.svg" alt />
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
            <svg
              width="54"
              height="33"
              viewBox="0 0 54 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 4.00195C0 1.79281 1.79086 0.00195312 4 0.00195312H50C52.2091 0.00195312 54 1.79281 54 4.00195V28.002C54 30.2111 52.2091 32.002 50 32.002H4C1.79086 32.002 0 30.2111 0 28.002V4.00195Z"
                fill="#224B8C"
              />
              <path
                d="M27.0888 27.2546L26.5003 25.5857L25.9118 27.2546H24.1183L25.5476 28.3289L25.0284 30.002L26.5003 29.0039L27.9722 30.002L27.453 28.3289L28.8817 27.2546H27.0888Z"
                fill="#F2CA30"
              />
              <path
                d="M27.0888 3.67085L26.5003 2.00195L25.9118 3.67085H24.1183L25.5476 4.74518L25.0284 6.41821L26.5003 5.4202L27.9722 6.41821L27.453 4.74518L28.8817 3.67085H27.0888Z"
                fill="#F2CA30"
              />
              <path
                d="M39.2071 15.4626L38.6186 13.7937L38.0301 15.4626H36.2366L37.6659 16.537L37.1467 18.21L38.6186 17.212L40.0905 18.21L39.5713 16.537L41 15.4626H39.2071Z"
                fill="#F2CA30"
              />
              <path
                d="M14.9705 15.4626L14.382 13.7937L13.7935 15.4626H12L13.4293 16.537L12.9101 18.21L14.382 17.212L15.8539 18.21L15.3347 16.537L16.7635 15.4626H14.9705Z"
                fill="#F2CA30"
              />
              <path
                d="M33.148 25.6747L32.5595 24.0058L31.9709 25.6747H30.1774L31.6068 26.749L31.0876 28.422L32.5595 27.424L34.0314 28.422L33.5121 26.749L34.9409 25.6747H33.148Z"
                fill="#F2CA30"
              />
              <path
                d="M21.0297 5.25057L20.4412 3.58168L19.8527 5.25057H18.0591L19.4885 6.32491L18.9693 7.99794L20.4412 6.99992L21.9131 7.99794L21.3939 6.32491L22.8226 5.25057H21.0297Z"
                fill="#F2CA30"
              />
              <path
                d="M37.5835 9.56656L36.995 7.89766L36.4065 9.56656H34.613L36.0423 10.6409L35.5231 12.3139L36.995 11.3159L38.4669 12.3139L37.9477 10.6409L39.3764 9.56656H37.5835Z"
                fill="#F2CA30"
              />
              <path
                d="M16.594 21.3585L16.0055 19.6896L15.417 21.3585H13.6235L15.0528 22.4329L14.5336 24.1059L16.0055 23.1079L17.4774 24.1059L16.9582 22.4329L18.3869 21.3585H16.594Z"
                fill="#F2CA30"
              />
              <path
                d="M37.5836 21.3585L36.9951 19.6896L36.4065 21.3585H34.613L36.0424 22.4329L35.5232 24.1059L36.9951 23.1079L38.467 24.1059L37.9477 22.4329L39.3765 21.3585H37.5836Z"
                fill="#F2CA30"
              />
              <path
                d="M16.5941 9.56674L16.0056 7.89784L15.4171 9.56674H13.6236L15.0529 10.6411L14.5337 12.3141L16.0056 11.3161L17.4775 12.3141L16.9583 10.6411L18.387 9.56674H16.5941Z"
                fill="#F2CA30"
              />
              <path
                d="M33.1479 5.25039L32.5593 3.5815L31.9708 5.25039H30.1773L31.6067 6.32473L31.0875 7.99776L32.5593 6.99974L34.0312 7.99776L33.512 6.32473L34.9408 5.25039H33.1479Z"
                fill="#F2CA30"
              />
              <path
                d="M21.0296 25.6747L20.4411 24.0058L19.8526 25.6747H18.0591L19.4884 26.749L18.9692 28.422L20.4411 27.424L21.913 28.422L21.3938 26.749L22.8225 25.6747H21.0296Z"
                fill="#F2CA30"
              />
              <path
                d="M4 1.00195H50V-0.998047H4V1.00195ZM53 4.00195V28.002H55V4.00195H53ZM50 31.002H4V33.002H50V31.002ZM1 28.002V4.00195H-1V28.002H1ZM4 31.002C2.34315 31.002 1 29.6588 1 28.002H-1C-1 30.7634 1.23858 33.002 4 33.002V31.002ZM53 28.002C53 29.6588 51.6569 31.002 50 31.002V33.002C52.7614 33.002 55 30.7634 55 28.002H53ZM50 1.00195C51.6569 1.00195 53 2.3451 53 4.00195H55C55 1.24053 52.7614 -0.998047 50 -0.998047V1.00195ZM4 -0.998047C1.23858 -0.998047 -1 1.24053 -1 4.00195H1C1 2.3451 2.34315 1.00195 4 1.00195V-0.998047Z"
                fill="#50565B"
              />
            </svg>
          </div>

          <div
            v-bind:class="{
              active: this.$store.getters['getSelectedZone'] == 'us',
            }"
            @click="(zone_pick = 'us'), set_cookie('us'), selected_zone('us')"
          >
            <svg
              width="54"
              height="32"
              viewBox="0 0 54 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M56.3141 0.799988H-1.87695V31.2H56.3141V0.799988Z"
                fill="#B22234"
              />
              <path
                d="M-1.87695 4.30768H56.3141H-1.87695ZM56.3141 8.9846H-1.87695H56.3141ZM-1.87695 13.6615H56.3141H-1.87695ZM56.3141 18.3384H-1.87695H56.3141ZM-1.87695 23.0154H56.3141H-1.87695ZM56.3141 27.6923H-1.87695H56.3141Z"
                fill="black"
              />
              <path
                d="M56.3141 27.6923H-1.87695M-1.87695 4.30768H56.3141H-1.87695ZM56.3141 8.9846H-1.87695H56.3141ZM-1.87695 13.6615H56.3141H-1.87695ZM56.3141 18.3384H-1.87695H56.3141ZM-1.87695 23.0154H56.3141H-1.87695Z"
                stroke="white"
                stroke-width="1.84615"
              />
              <path
                d="M21.3995 0.799988H-1.87695V17.1692H21.3995V0.799988Z"
                fill="#3C3B6E"
              />
              <path
                d="M0.0632346 1.50153L0.617143 3.19365L-0.833008 2.14786H0.959477L-0.490674 3.19365L0.0632346 1.50153Z"
                fill="white"
              />
              <path
                d="M3.96718 1.50157L4.52109 3.1937L3.07094 2.1479H4.86342L3.41327 3.1937L3.96718 1.50157Z"
                fill="white"
              />
              <path
                d="M7.83088 1.50157L8.38479 3.1937L6.93464 2.1479H8.72712L7.27697 3.1937L7.83088 1.50157Z"
                fill="white"
              />
              <path
                d="M11.6946 1.50157L12.2485 3.1937L10.7983 2.1479H12.5908L11.1407 3.1937L11.6946 1.50157Z"
                fill="white"
              />
              <path
                d="M15.5583 1.50157L16.1122 3.1937L14.662 2.1479H16.4545L15.0044 3.1937L15.5583 1.50157Z"
                fill="white"
              />
              <path
                d="M19.422 1.50157L19.9759 3.1937L18.5257 2.1479H20.3182L18.8681 3.1937L19.422 1.50157Z"
                fill="white"
              />
              <path
                d="M2.03534 3.70814L2.58925 5.40027L1.1391 4.35448H2.93159L1.48143 5.40027L2.03534 3.70814Z"
                fill="white"
              />
              <path
                d="M5.9393 3.70809L6.49321 5.40022L5.04306 4.35443H6.83555L5.3854 5.40022L5.9393 3.70809Z"
                fill="white"
              />
              <path
                d="M9.80299 3.70809L10.3569 5.40022L8.90675 4.35443H10.6992L9.24908 5.40022L9.80299 3.70809Z"
                fill="white"
              />
              <path
                d="M13.6667 3.70809L14.2206 5.40022L12.7704 4.35443H14.5629L13.1128 5.40022L13.6667 3.70809Z"
                fill="white"
              />
              <path
                d="M17.5304 3.70809L18.0843 5.40022L16.6341 4.35443H18.4266L16.9765 5.40022L17.5304 3.70809Z"
                fill="white"
              />
              <path
                d="M0.0632346 5.91476L0.617143 7.60689L-0.833008 6.56109H0.959477L-0.490674 7.60689L0.0632346 5.91476Z"
                fill="white"
              />
              <path
                d="M3.96718 5.91474L4.52109 7.60687L3.07094 6.56108H4.86342L3.41327 7.60687L3.96718 5.91474Z"
                fill="white"
              />
              <path
                d="M7.83088 5.91474L8.38479 7.60687L6.93464 6.56108H8.72712L7.27697 7.60687L7.83088 5.91474Z"
                fill="white"
              />
              <path
                d="M11.6946 5.91474L12.2485 7.60687L10.7983 6.56108H12.5908L11.1407 7.60687L11.6946 5.91474Z"
                fill="white"
              />
              <path
                d="M15.5583 5.91474L16.1122 7.60687L14.662 6.56108H16.4545L15.0044 7.60687L15.5583 5.91474Z"
                fill="white"
              />
              <path
                d="M19.422 5.91474L19.9759 7.60687L18.5257 6.56108H20.3182L18.8681 7.60687L19.422 5.91474Z"
                fill="white"
              />
              <path
                d="M2.03534 8.12122L2.58925 9.81335L1.1391 8.76755H2.93159L1.48143 9.81335L2.03534 8.12122Z"
                fill="white"
              />
              <path
                d="M5.9393 8.12127L6.49321 9.81339L5.04306 8.7676H6.83555L5.3854 9.81339L5.9393 8.12127Z"
                fill="white"
              />
              <path
                d="M9.80299 8.12127L10.3569 9.81339L8.90675 8.7676H10.6992L9.24908 9.81339L9.80299 8.12127Z"
                fill="white"
              />
              <path
                d="M13.6667 8.12127L14.2206 9.81339L12.7704 8.7676H14.5629L13.1128 9.81339L13.6667 8.12127Z"
                fill="white"
              />
              <path
                d="M17.5304 8.12127L18.0843 9.81339L16.6341 8.7676H18.4266L16.9765 9.81339L17.5304 8.12127Z"
                fill="white"
              />
              <path
                d="M0.0632346 10.328L0.617143 12.0201L-0.833008 10.9743H0.959477L-0.490674 12.0201L0.0632346 10.328Z"
                fill="white"
              />
              <path
                d="M3.96718 10.3279L4.52109 12.02L3.07094 10.9743H4.86342L3.41327 12.02L3.96718 10.3279Z"
                fill="white"
              />
              <path
                d="M7.83088 10.3279L8.38479 12.02L6.93464 10.9743H8.72712L7.27697 12.02L7.83088 10.3279Z"
                fill="white"
              />
              <path
                d="M11.6946 10.3279L12.2485 12.02L10.7983 10.9743H12.5908L11.1407 12.02L11.6946 10.3279Z"
                fill="white"
              />
              <path
                d="M15.5583 10.3279L16.1122 12.02L14.662 10.9743H16.4545L15.0044 12.02L15.5583 10.3279Z"
                fill="white"
              />
              <path
                d="M19.422 10.3279L19.9759 12.02L18.5257 10.9743H20.3182L18.8681 12.02L19.422 10.3279Z"
                fill="white"
              />
              <path
                d="M0.0632346 14.7411L0.617143 16.4332L-0.833008 15.3874H0.959477L-0.490674 16.4332L0.0632346 14.7411Z"
                fill="white"
              />
              <path
                d="M3.96718 14.7411L4.52109 16.4332L3.07094 15.3874H4.86342L3.41327 16.4332L3.96718 14.7411Z"
                fill="white"
              />
              <path
                d="M7.83088 14.7411L8.38479 16.4332L6.93464 15.3874H8.72712L7.27697 16.4332L7.83088 14.7411Z"
                fill="white"
              />
              <path
                d="M11.6946 14.7411L12.2485 16.4332L10.7983 15.3874H12.5908L11.1407 16.4332L11.6946 14.7411Z"
                fill="white"
              />
              <path
                d="M15.5583 14.7411L16.1122 16.4332L14.662 15.3874H16.4545L15.0044 16.4332L15.5583 14.7411Z"
                fill="white"
              />
              <path
                d="M19.422 14.7411L19.9759 16.4332L18.5257 15.3874H20.3182L18.8681 16.4332L19.422 14.7411Z"
                fill="white"
              />
              <path
                d="M2.03534 12.5345L2.58925 14.2266L1.1391 13.1808H2.93159L1.48143 14.2266L2.03534 12.5345Z"
                fill="white"
              />
              <path
                d="M5.9393 12.5344L6.49321 14.2266L5.04306 13.1808H6.83555L5.3854 14.2266L5.9393 12.5344Z"
                fill="white"
              />
              <path
                d="M9.80299 12.5344L10.3569 14.2266L8.90675 13.1808H10.6992L9.24908 14.2266L9.80299 12.5344Z"
                fill="white"
              />
              <path
                d="M13.6667 12.5344L14.2206 14.2266L12.7704 13.1808H14.5629L13.1128 14.2266L13.6667 12.5344Z"
                fill="white"
              />
              <path
                d="M17.5304 12.5344L18.0843 14.2266L16.6341 13.1808H18.4266L16.9765 14.2266L17.5304 12.5344Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div class="buyItem">
          <div class="priceItem">
            <div v-if="$store.getters['getSelectedZone'] == 'eu'">
              <span
                >{{
                  (
                    (parseFloat(product.price_eur) +
                      parseFloat(option_total_eu) +
                      parseFloat(sliders_price_eur) +
                      parseFloat(double_sliders_price_eur)) *
                    parseFloat(count)
                  ).toFixed(2)
                }}€</span
              >
              <span v-if="product.sales == '1' && product.sales_2 == '0'"
                >{{
                  (
                    (parseFloat(product.price_eur_sale) +
                      ((parseFloat(option_total_eu) +
                        parseFloat(sliders_price_eur) +
                        parseFloat(double_sliders_price_eur)) *
                        100) /
                        (100 - parseFloat(product.sales_discount))) *
                    count
                  ).toFixed(2)
                }}€</span
              >
              <span v-if="product.sales_2 == '1'"
                >{{
                  (
                    (parseFloat(product.price_eur_sale2) +
                      ((parseFloat(option_total_eu) +
                        parseFloat(sliders_price_eur) +
                        parseFloat(double_sliders_price_eur)) *
                        100) /
                        (100 - parseFloat(product.sales_discount))) *
                    count
                  ).toFixed(2)
                }}€</span
              >
              <span v-if="product.sales == '1' || product.sales_2 == '1'" class="sku_discount_span">
                -{{product.sales_discount}}%
              </span>
            </div>

            <div v-else-if="$store.getters['getSelectedZone'] == 'us'">
              <span
                >{{
                  (
                    (parseFloat(product.price_usd) +
                      parseFloat(option_total_us) +
                      parseFloat(sliders_price_usd) +
                      parseFloat(double_sliders_price_usd)) *
                    parseFloat(count)
                  ).toFixed(2)
                }}$</span
              >
              <span v-if="product.sales == '1' && product.sales_2 == '0'"
                >{{
                  (
                    (parseFloat(product.price_usd_sale) +
                      ((parseFloat(option_total_us) +
                        parseFloat(sliders_price_usd) +
                        parseFloat(double_sliders_price_usd)) *
                        100) /
                        (100 - parseFloat(product.sales_discount))) *
                    count
                  ).toFixed(2)
                }}$</span
              >
              <span v-if="product.sales_2 == '1'"
                >{{
                  (
                    (parseFloat(product.price_usd_sale2) +
                      ((parseFloat(option_total_us) +
                        parseFloat(sliders_price_usd) +
                        parseFloat(double_sliders_price_usd)) *
                        100) /
                        (100 - parseFloat(product.sales_discount))) *
                    count
                  ).toFixed(2)
                }}$</span>
                <span v-if="product.sales == '1' || product.sales_2 == '1'" class="sku_discount_span">
                -{{product.sales_discount}}%
              </span>
            </div>
            <div class="separator"></div>
            <div class="cakeCoinItem">
              <div v-if="$store.getters['getSelectedZone'] == 'eu'">
                +{{
                  (
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
                }}
                <img src="/img/CakeCoin.svg" alt />
              </div>
              <div v-if="$store.getters['getSelectedZone'] == 'us'">
                +{{
                  (
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
                }}
                <img src="/img/CakeCoin.svg" alt />
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
                <img src="/img/Minus.svg" @click="count_minus()" alt />
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
                <img src="/img/Plus.svg" @click="count++" alt />
              </div>
              <button
                id="buyItem"
                @click=" scroll_to_top()"
                v-if="
                  (
                    (parseFloat(product.price_eur) +
                      parseFloat(option_total_eu) +
                      parseFloat(sliders_price_eur) +
                      parseFloat(double_sliders_price_eur)) *
                    parseFloat(count)
                  ).toFixed(2) > 0 &&
                  (choosen_event_id || product.raid_enable == 0)
                "
              >
                <img src="/img/Card.svg" alt />
                Save
              </button>
              <button id="buyItem" @click="select_option_text = true" v-else>
                <img src="/img/Card.svg" alt />
                Save
              </button>

              
            </div>
            <div>
              <span
                v-if="
                  select_option_text &&
                  (
                    (parseFloat(product.price_eur) +
                      parseFloat(option_total_eu) +
                      parseFloat(sliders_price_eur) +
                      parseFloat(double_sliders_price_eur)) *
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
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bookYouSlot">
      <h4 v-if="product.raid_enable == 1">Book your slot</h4>
      <h5 v-if="product.raid_enable == 1">Pick you date</h5>
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
                <img src="/img/Calendar.svg" alt />
                <span>{{
                  date.getDate() +
                  "." +
                  date.getMonth() +
                  "." +
                  date.getFullYear()
                }}</span>
                <img src="/img/Down.svg" alt />
              </div>
            </button>
          </v-date-picker>
        </client-only>

        <div>
          <span @click="set_date_tomorrow()">Tomorrow</span>
          <span @click="set_date_today()">Today</span>
        </div>
      </div>
      <h5 v-if="product.raid_enable == 1 && events_by_product != undefined">
        Pick a raid
      </h5>
      <div
        v-if="product.raid_enable == 1 && events_by_product != undefined"
        ref="raid_slot_ref"
        :class="{ open_raid_slot: !hide_more_raid }"
        class="raidSlost"
      >
        <div
          v-for="item in this.events_by_product.times"
          :key="item.id"
          v-if="
            $store.getters['getSelectedZone'] == 'eu' &&
            item.time_cest != '' &&
            item.users != item.max
          "
          :class="{
            active: item.id == choosen_event_id && item.users != item.max,
            grey: item.users == item.max,
          }"
          @click="
            choosen_event_id = item.id == choosen_event_id ? undefined : item.id
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
              {{
                item.time_cest.split(":")[0] +
                ":" +
                item.time_cest.split(":")[1]
              }}
              <span>СETD</span>
            </span>
            <span class="slotPeoples">
              {{ item.users }}/{{ item.max }}
              <img src="/imgGameLogoPurple/Person.svg" alt />
            </span>
          </div>
          <div class="separator"></div>
          <div class="slotOptions">
            <div>
              <span>Personal loot</span>
              <img src="/imgGameLogoPurple/Notion.svg" alt />
            </div>
            <div>
              <span>Selfplay</span>
              <img src="/imgGameLogoPurple/Notion.svg" alt />
            </div>
          </div>
        </div>
        <div
          v-for="item in this.events_by_product.times"
          :key="item.id"
          v-if="
            $store.getters['getSelectedZone'] == 'eu' &&
            item.time_cest != '' &&
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
              {{
                item.time_cest.split(":")[0] +
                ":" +
                item.time_cest.split(":")[1]
              }}
              <span>СETD</span>
            </span>
            <span class="slotPeoples">
              {{ item.users }}/{{ item.max }}
              <img src="/imgGameLogoPurple/Person_grey.svg" alt />
            </span>
          </div>
          <div class="separator"></div>
          <div class="slotOptions">
            <div>
              <span>Personal loot</span>
              <img src="/imgGameLogoPurple/Notion.svg" alt />
            </div>
            <div>
              <span>Selfplay</span>
              <img src="/imgGameLogoPurple/Notion.svg" alt />
            </div>
          </div>
        </div>
        <div
          v-for="item in this.events_by_product.times"
          :key="item.id"
          v-if="
            $store.getters['getSelectedZone'] == 'us' &&
            item.time_edt != '' &&
            item.users != item.max
          "
          :class="{
            active: item.id == choosen_event_id && item.users != item.max,
            grey: item.users == item.max,
          }"
          @click="
            choosen_event_id = item.id == choosen_event_id ? undefined : item.id
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
              {{
                item.time_edt.split(":")[0] + ":" + item.time_edt.split(":")[1]
              }}
              <span>ETD</span>
            </span>
            <span class="slotPeoples">
              {{ item.users }}/{{ item.max }}
              <img src="/imgGameLogoPurple/Person.svg" alt />
            </span>
          </div>
          <div class="separator"></div>
          <div class="slotOptions">
            <div>
              <span>Personal loot</span>
              <img src="/imgGameLogoPurple/Notion.svg" alt />
            </div>
            <div>
              <span>Selfplay</span>
              <img src="/imgGameLogoPurple/Notion.svg" alt />
            </div>
          </div>
        </div>
        <div
          v-for="item in this.events_by_product.times"
          :key="item.id"
          v-if="
            $store.getters['getSelectedZone'] == 'us' &&
            item.time_edt != '' &&
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
              {{
                item.time_edt.split(":")[0] + ":" + item.time_edt.split(":")[1]
              }}
              <span>ETD</span>
            </span>
            <span class="slotPeoples">
              {{ item.users }}/{{ item.max }}
              <img src="/imgGameLogoPurple/Person_grey.svg" alt />
            </span>
          </div>
          <div class="separator"></div>
          <div class="slotOptions">
            <div>
              <span>Personal loot</span>
              <img src="/imgGameLogoPurple/Notion.svg" alt />
            </div>
            <div>
              <span>Selfplay</span>
              <img src="/imgGameLogoPurple/Notion.svg" alt />
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
        <div v-if="item.type == 0" class="option_title">
          {{ item.title }}
        </div>
        <div class="specialDungeon" v-if="item.type == 1">
          <div
            class="specialDungeonItem"
            v-if="item.type == 1 && item.checkbox_type != 1"
            @click="add_option(item)"
          >
            <div v-bind:class="{ active_check: check_checked(item) }"></div>
            <span>{{ item.array.title }}</span>
            <span>
              <span class="popUpdescr_mask">
                <img
                  v-if="item.array.descr != ''"
                  src="/imgGameLogoPurple/Notion.svg"
                  alt
                />
                <div class="popUpANswer">{{ item.array.descr }}</div>
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
            <div v-bind:class="{ active_check: check_c_checked(item) }"></div>
            <span>{{ item.array.title }}</span>
            <span>
              <span class="popUpdescr_mask">
                <img
                  v-if="item.array.desc != ''"
                  src="/imgGameLogoPurple/Notion.svg"
                  alt
                />
                <div class="popUpANswer">{{ item.array.desc }}</div>
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
          <h5>{{ item.title }}</h5>
          <input
            type="text"
            :id="item.title"
            name="my_range"
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
              v-for="titles in item.titles"
              v-bind:key="titles"
              v-bind:class="{ active: titles == item.choosen_price }"
              @click="change_price_double(titles, item.title)"
            >
              {{ titles }}
            </li>
          </ul>
          <h5>{{ item.title }}</h5>
          <input
            type="text"
            :id="item.title"
            name="my_range"
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
          <h5>{{ item.title }}</h5>
          <input
            type="text"
            :id="item.title"
            name="my_range"
            value
            :class="[`js-range-slider-${index}`]"
          />
          <div
            class="under_thumb_info"
            v-for="sign in sliders_check_price"
            v-bind:key="sign.title"
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
              v-for="titles in item.titles"
              v-bind:key="titles"
              v-bind:class="{ active: titles == item.choosen_price }"
              @click="change_price(titles, item.title)"
            >
              {{ titles }}
            </li>
          </ul>
          <h5>{{ item.title }}</h5>
          <input
            type="text"
            :id="item.title"
            name="my_range"
            value
            :class="[`js-range-slider-price-${index}`]"
          />
          <div
            class="under_thumb_info"
            v-for="sign in sliders_check_price"
            v-bind:key="sign.title"
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
          <h5>{{ item.array.title }}</h5>
          <div
            class="multipleOption"
            v-bind:class="{ open_tab_multi: item.open }"
            v-on:click.self="open_tab_multiselect(item)"
          >
            <div class="moHeader" v-on:click.self="open_tab_multiselect(item)">
              <span v-on:click.self="open_tab_multiselect(item)"
                >{{ item.counter }} options selected</span
              >
              <img
                src="/img/Down.svg"
                v-bind:class="{ list_arrow_up: item.open }"
                alt
                v-on:click.self="open_tab_multiselect(item)"
              />
            </div>
            <div
              class="moOptions"
              v-for="sub_item in item.array.subarray"
              :key="sub_item"
              @click="add_sub_option(sub_item, item)"
            >
              <div
                class="sub_checked"
                v-bind:class="{
                  active_check: check_sub_checked(sub_item),
                }"
              ></div>
              <span>{{ sub_item.title }}</span>
              <span class="moPrice">
                <span class="popUpdescr_mask">
                  <img
                    v-if="sub_item.descr != ''"
                    src="/imgGameLogoPurple/Notion.svg"
                    alt
                  />
                  <div class="popUpANswer">{{ sub_item.descr }}</div>
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
          <h5>{{ item.array.title }}</h5>
          <div
            class="multipleOption"
            v-bind:class="{ open_tab_multi: item.open }"
            v-on:click.self="open_tab_multiselect(item)"
          >
            <div class="moHeader" v-on:click.self="open_tab_multiselect(item)">
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
              <img
                src="/img/Down.svg"
                v-bind:class="{ list_arrow_up: item.open }"
                v-on:click.self="open_tab_multiselect(item)"
                alt
              />
            </div>
            <div
              class="moOptions"
              v-for="sub_item in item.array.subarray"
              :key="sub_item"
              @click="add_sub_option(sub_item, item)"
            >
              <div
                class="sub_checked"
                v-bind:class="{
                  active_check: check_sub_checked(sub_item),
                }"
              ></div>
              <span>{{ sub_item.title }}</span>
              <span class="moPrice">
                <span class="popUpdescr_mask">
                  <img
                    v-if="sub_item.descr != ''"
                    src="/imgGameLogoPurple/Notion.svg"
                    alt
                  />
                  <div class="popUpANswer">{{ sub_item.descr }}</div>
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
          v-for="sub_item in cacl_array"
          :key="sub_item.title"
          v-if="item.type == 6 && sub_item.array.title == item.array.title"
        >
          <h5>Choose the amount of {{ sub_item.array.title }} you need</h5>
          <div class="calc_div">
            <div v-if="$store.getters['getSelectedZone'] == 'us'">
              {{
                (
                  parseFloat(sub_item.array.min_usd) +
                  parseFloat(sub_item.count) * parseFloat(sub_item.array.usd)
                ).toFixed(2)
              }}$
            </div>
            <div v-if="$store.getters['getSelectedZone'] == 'eu'">
              {{
                (
                  parseFloat(sub_item.array.min_eur) +
                  parseFloat(sub_item.count) * parseFloat(sub_item.array.eur)
                ).toFixed(2)
              }}€
            </div>
            <div class="count" style="width: 190px; margin-bottom: 30px">
              <img
                src="/img/Minus.svg"
                style="float: left"
                @click="calc_minus(sub_item)"
                alt
              />
              <span style="margin: 0; width: 80%">{{
                parseFloat(sub_item.array.min) +
                parseFloat(sub_item.count) * parseFloat(sub_item.array.step)
              }}</span>
              <img
                src="/img/Plus.svg"
                style="float: right"
                @click="calc_plus(sub_item)"
                alt
              />
            </div>
          </div>
        </div>
        <!-- <div v-if="item.type == 16" style="margin-top: 32px">
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
                      <div @click="f_rank_open = f_rank_open ? false : true">
                        <span>{{
                          item.rank[first_rank_select.rank].title
                        }}</span>
                        <img src="/Down.svg" alt="" />
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
                        <img src="/img/Minus.svg" @click="current--" alt />
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
                        <img src="/img/Plus.svg" @click="current++" alt />
                      </div>
                      <div
                        @click="
                          f_division_open = f_division_open ? false : true
                        "
                        v-if="
                          rank_option.rank[first_rank_select.rank].is_rank != 0
                        "
                      >
                        <span>{{
                          item.division[first_rank_select.division]
                        }}</span>
                        <img src="/Down.svg" alt="" />
                        <div v-if="f_division_open">
                          <div
                            v-for="(division, index) in item.division"
                            :key="index"
                            @click="
                              (first_rank_select.division =
                                index == rank_option.division.length - 1
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
                        @click="item.open_div = item.open_div ? false : true"
                      >
                        <span>{{ item.subarray[item.selected].title }}</span>
                        <img src="/Down.svg" alt="" />
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
                        <img src="/Down.svg" alt="" />
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
                      <div>Please select your desire rank</div>
                    </div>
                    <div class="rank_select_item_selects">
                      <div @click="s_rank_open = s_rank_open ? false : true">
                        <span>{{
                          item.rank[second_rank_select.rank].title
                        }}</span>
                        <img src="/Down.svg" alt="" />
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
                        <img src="/img/Minus.svg" @click="desire--" alt />
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
                        <img src="/img/Plus.svg" @click="desire++" alt />
                      </div>
                      <div
                        @click="
                          s_division_open = s_division_open ? false : true
                        "
                        v-if="
                          rank_option.rank[second_rank_select.rank].is_rank != 0
                        "
                      >
                        <span>{{
                          item.division[second_rank_select.division]
                        }}</span>
                        <img src="/Down.svg" alt="" />
                        <div v-if="s_division_open">
                          <div
                            v-for="(division, index) in item.division"
                            :key="index"
                            @click="
                              (second_rank_select.division =
                                index == 0 ? 1 : index),
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
                        @click="item.open_div = item.open_div ? false : true"
                      >
                        <span>{{ item.subarray[item.selected].title }}</span>
                        <img src="/Down.svg" alt="" />
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
                        <img src="/Down.svg" alt="" />
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
              </div>-->
      </div> 
    </div>
  </div>
</template>
<script>
import Cookies from "js-cookie";
import moment from "moment";
import momenttz from "moment-timezone";
var temp_slider = { id: 0, check: false, slider_name: "" };

export default {
  head: {
    script: [
      {
        src: "/ion.rangeSlider.min.js",
      },
      {
        src: "/jquery.fancybox.min.js",
      },
    ],
    link: [],
  },
  data() {
    return {
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
      more_text_open: false,
      hide_more: false,
      more_text_open2: false,
      hide_more2: false,
      select_option_text: false,
      init_slider: true,
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
      rank_selects: [],
      coin_settings: ""
    };
  },
  components: {},
  watch: {
    date: async function () {
      this.events_by_product = "";
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
          this.events_by_product = data.records[0];
          this.events_by_product.times = [];
          if (
            moment(this.date).format("YYYY-MM-DD") ==
            moment().format("YYYY-MM-DD")
          ) {
            let response_data_times_cest_rel = this.$axios
              .$get(
                this.apiUrl +
                  "times?filter=parentid,eq," +
                  this.events_by_product.id +
                  "&filter=time_cest,gt," +
                  moment().tz("Europe/Berlin").format("hh:mm") +
                  "&order=cest,asc"
              )
              .then((data) => {
                for (let i = 0; i < data.records.length; i++) {
                  this.events_by_product.times.push(data.records[i]);
                }
              });
            let response_data_times_edt_rel = this.$axios
              .$get(
                this.apiUrl +
                  "times?filter=parentid,eq," +
                  this.events_by_product.id +
                  "&filter=time_edt,gt," +
                  moment().tz("America/New_York").format("hh:mm") +
                  "&order=time_edt,asc"
              )
              .then((data) => {
                for (let i = 0; i < data.records.length; i++) {
                  this.events_by_product.times.push(data.records[i]);
                }
              });
          } else {
            let response_data_times_cest_rel = this.$axios
              .$get(
                this.apiUrl +
                  "times?filter=parentid,eq," +
                  this.events_by_product.id +
                  "&order=cest,asc"
              )
              .then((data) => {
                for (let i = 0; i < data.records.length; i++) {
                  this.events_by_product.times.push(data.records[i]);
                }
              });
            let response_data_times_edt_rel = this.$axios
              .$get(
                this.apiUrl +
                  "times?filter=parentid,eq," +
                  this.events_by_product.id +
                  "&order=time_edt,asc"
              )
              .then((data) => {
                for (let i = 0; i < data.records.length; i++) {
                  this.events_by_product.times.push(data.records[i]);
                }
              });
          }
        });
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
  mounted() {
    this.init_swiper_galerry();
  },
  created() {
    this.init_sku(),
      (this.interval = setInterval(() => this.slider_watcher(), 100)),
      (this.interval = setInterval(() => this.init_all_range(), 1000));
  },
  methods: {
    async init_sku() {
      let category = "";
      let product = "";
      let fractions = [];
      let gallery = "";
      let related_product = "";
      let chars = [];
      let events_by_product = undefined;
      let sliders_check_price = [];
      let sliders_price_usd = 0;
      let sliders_price_eur = 0;

      let double_sliders_check_price = [];
      let double_sliders_price_usd = 0;
      let double_sliders_price_eur = 0;
      let choosen_event_id = undefined;
      let rev_result = 0;
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
      this.selected_list_chars = this.$store.getters["getCard"].cart_items[
        this.$store.getters["get_edit_sku_id"].index
      ].checkbox_list;
      this.selected_sub_list_chars = this.$store.getters["getCard"].cart_items[
        this.$store.getters["get_edit_sku_id"].index
      ].subcheckbox_list;
      this.sliders_check_price = this.$store.getters["getCard"].cart_items[
        this.$store.getters["get_edit_sku_id"].index
      ].single_slider;
      this.double_sliders_check_price = this.$store.getters[
        "getCard"
      ].cart_items[this.$store.getters["get_edit_sku_id"].index].double_slider;
      this.count = this.$store.getters["getCard"].cart_items[
        this.$store.getters["get_edit_sku_id"].index
      ].count;
      this.cacl_array = this.$store.getters["getCard"].cart_items[
        this.$store.getters["get_edit_sku_id"].index
      ].calc;
      this.choosen_event_id = this.$store.getters["getCard"].cart_items[
        this.$store.getters["get_edit_sku_id"].index
      ].time_id;
      this.option_total_eu = this.$store.getters["getCard"].cart_items[
        this.$store.getters["get_edit_sku_id"].index
      ].option_total_eu;
      this.option_total_us = this.$store.getters["getCard"].cart_items[
        this.$store.getters["get_edit_sku_id"].index
      ].option_total_us;


      let temp_rank = this.$store.getters["getCard"].cart_items[
        this.$store.getters["get_edit_sku_id"].index
      ].rank_object;



     /*  this.selected_rank = temp_rank.selected_rank;
         this.desire = temp_rank.selected_rank;
         this.current = temp_rank.selected_rank;
         this.step_rank = temp_rank.selected_rank;
         this.rank_selects = temp_rank.selected_rank;*/


      let product_id = this.$store.getters["get_edit_sku_id"].id;

        let response_coin_settings = await this.$axios
        .$get(this.apiUrl + "coins")
        .then((data) => {
          this.coin_settings = data.records[0];
        });

      let response_fractions = await this.$axios
        .$get(this.apiUrl + "fraction")
        .then((data) => {
          fractions = data.records;
        });
      let response_data_sku = await this.$axios
        .$get(this.apiUrl + "sku?filter=id,eq," + product_id)
        .then((data) => {
          product = data.records[0];
          if ((product.images !== null) & (product.images != "")) {
            gallery = product.images.split(",");
          }
        });
      if (product.related != "") {
        let response_data_sku_rel = await this.$axios
          .$get(this.apiUrl + "sku?filter=id,in," + product.related)
          .then((data) => {
            related_product = data.records;
          });
      }
      if (product.chars != null) {
        chars = JSON.parse(product.chars);
        for (let i = 0; i < chars.length; i++) {
          //  if (chars[i].type == 16) {

             
          //   this.rank_option = chars[i];
            
          //   this.sselected_rank = chars[i].array.subarray[0];
          //   this.selected_rank.usd_master = 0;
          //   this.selected_rank.eur_master = 0;
          //   this.first_rank_select.rank = 0;
          //   this.first_rank_select.division = 0;

          //   this.second_rank_select.rank = 0;
          //   this.second_rank_select.division = 1;

          //   for (let j = 0; j < this.rank_option.select.current.length; j++) {
          //     this.rank_option.select.current[j].area = "current";
          //     this.rank_option.select.current[j].open_div = false;
          //     this.rank_option.select.current[j].selected = 0;
          //     this.rank_selects.push(this.rank_option.select.current[j]);
          //   }
          //   for (let j = 0; j < this.rank_option.select.desired.length; j++) {
          //     this.rank_option.select.desired[j].area = "desired";
          //     this.rank_option.select.desired[j].open_div = false;
          //     this.rank_option.select.desired[j].selected = 0;
          //     this.rank_selects.push(this.rank_option.select.desired[j]);
          //   }
          // }
          if (chars[i].type == 5 || chars[i].type == 4) {
            chars[i].counter = 0;
            chars[i].open = false;
            chars[i];
          }
          if (chars[i].type == 8) {
            let temp_obj = {};
            for (let j = 0; j < this.sliders_check_price.length; j++) {
              if (this.sliders_check_price[j].title == chars[i].title) {
                temp_obj = this.sliders_check_price[j];
                break;
              }
            }

            chars[i].value = temp_obj.value;

            sliders_price_usd =
              parseFloat(sliders_price_usd) + parseFloat(temp_obj.usd);
            sliders_price_eur =
              parseFloat(sliders_price_eur) + parseFloat(temp_obj.eur);
            this.option_total_eu -= parseFloat(temp_obj.eur);
            this.option_total_us -= parseFloat(temp_obj.usd);
            sliders_check_price.push(temp_obj);
          }
          if (chars[i].type == 13) {
            let temp_obj = {};
            for (let j = 0; j < this.sliders_check_price.length; j++) {
              if (this.sliders_check_price[j].title == chars[i].title) {
                temp_obj = this.sliders_check_price[j];
                break;
              }
            }

            chars[i].value = temp_obj.value;
            chars[i].choosen_price = temp_obj.choosen_price;

            sliders_price_usd =
              parseFloat(sliders_price_usd) + parseFloat(temp_obj.usd);
            sliders_price_eur =
              parseFloat(sliders_price_eur) + parseFloat(temp_obj.eur);
            this.option_total_eu -= parseFloat(temp_obj.eur);
            this.option_total_us -= parseFloat(temp_obj.usd);

            sliders_check_price.push(temp_obj);
          }
          if (chars[i].type == 14) {
            let temp_obj = {};
            for (let j = 0; j < this.double_sliders_check_price.length; j++) {
              if (
                this.double_sliders_check_price[j].slider_title ==
                chars[i].title
              ) {
                temp_obj = this.double_sliders_check_price[j];
                break;
              }
            }
            chars[i].choosen_price = temp_obj.choosen_price;

            
            double_sliders_price_usd =
              parseFloat(double_sliders_price_usd) + parseFloat(temp_obj.usd);
            double_sliders_price_eur =
              parseFloat(double_sliders_price_eur) + parseFloat(temp_obj.eur);
            this.option_total_eu -= parseFloat(temp_obj.eur);
            this.option_total_us -= parseFloat(temp_obj.usd);

            double_sliders_check_price.push(temp_obj);
          }
          if (chars[i].type == 7) {
            let temp_obj = {};
            for (let j = 0; j < this.double_sliders_check_price.length; j++) {
              if (
                this.double_sliders_check_price[j].slider_title ==
                chars[i].title
              ) {
                temp_obj = this.double_sliders_check_price[j];
                break;
              }
            }

            double_sliders_price_usd =
              parseFloat(double_sliders_price_usd) + parseFloat(temp_obj.usd);
            double_sliders_price_eur =
              parseFloat(double_sliders_price_eur) + parseFloat(temp_obj.eur);
            this.option_total_eu -= parseFloat(temp_obj.eur);
            this.option_total_us -= parseFloat(temp_obj.usd);
            double_sliders_check_price.push(temp_obj);
          }
        }
      }
      if (product.raid_enable == 1) {
        let response_data_event_rel = await this.$axios
          .$get(
            this.apiUrl +
              "events?filter=date,eq," +
              moment().tz("Europe/Berlin").format("YYYY-MM-DD") +
              "&filter=parentid,eq," +
              product.id +
              "&filter=status,eq,1"
          )
          .then((data) => {
            events_by_product = data.records[0];
            if (events_by_product) {
              events_by_product.times = [];
              let response_data_times_cest_rel = this.$axios
                .$get(
                  this.apiUrl +
                    "times?filter=parentid,eq," +
                    events_by_product.id +
                    "&filter=time_cest,gt," +
                    moment().tz("Europe/Berlin").format("hh:mm") +
                    "&order=cest,asc"
                )
                .then((data) => {
                  for (let i = 0; i < data.records.length; i++) {
                    events_by_product.times.push(data.records[i]);
                  }
                });
              let response_data_times_edt_rel = this.$axios
                .$get(
                  this.apiUrl +
                    "times?filter=parentid,eq," +
                    events_by_product.id +
                    "&filter=time_edt,gt," +
                    moment().tz("America/New_York").format("hh:mm") +
                    "&order=time_edt,asc"
                )
                .then((data) => {
                  for (let i = 0; i < data.records.length; i++) {
                    events_by_product.times.push(data.records[i]);
                  }
                });
            }
          });
      }

      let reviews = [];
      let games = [];
      let response_data_r = await this.$axios
        .$get(
          this.apiUrl +
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
      let response_data_g = await this.$axios
        .$get(this.apiUrl + "game")
        .then((data) => {
          games = data.records;
        });

      let results_paginator = 0;
      let reviews_pag = [];
      let response_data_r_pag = await this.$axios
        .$get(
          this.apiUrl +
            "reviews?order=date,desc&filter=status,eq,1&page=1,5&filter=parentid,eq," +
            product_id
        )
        .then((data) => {
          reviews_pag = data.records;
          rev_result = data.results;
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
            this.apiUrl +
              "sku/" +
              reviews[i].parentid +
              "?include=id,title,slug,game"
          )
          .then((data) => {
            reviews[i].sku = data;
          })
          .catch((error) => {});
      }
      this.sliders_price_usd = sliders_price_usd;
      this.sliders_price_eur = sliders_price_eur;
      this.double_sliders_price_usd = double_sliders_price_usd;
      this.double_sliders_price_eur = double_sliders_price_eur;

      this.reviews_pag = reviews_pag;
      this.results_paginator = results_paginator;
      this.category = category;
      this.product = product;
      this.gallery = gallery;
      this.related_product = related_product;
      this.chars = chars;
      this.events_by_product = events_by_product;

      this.reviews = reviews;
      this.games = games;
      this.choosen_event_id = choosen_event_id;
      this.fractions = fractions;
      this.rev_result = rev_result;


      





      this.getCookie_zone();
      this.init_swiper_related();
      //this.list_option_add_calc();
      this.get_more_raid_slot_height();
      this.check_favorite();
      this.temp_review_item_sku();
      this.fill_paginator_list();
      this.temp_review_item();
      this.get_orders();
      this.more_info_height();
      this.init_step();

      for (let i = 0; i < this.selected_sub_list_chars.length; i++) {
        for (let j = 0; j < this.chars.length; j++) {
          if (this.chars[j].type == 4 || this.chars[j].type == 5) {
            for (let k = 0; k < this.chars[j].array.subarray.length; k++) {
              if (
                this.chars[j].array.subarray[k].title ==
                this.selected_sub_list_chars[i].title
              ) {
                this.option_total_us =
                  parseFloat(this.option_total_us) -
                  parseFloat(this.selected_sub_list_chars[i].usd);
                this.option_total_eu =
                  parseFloat(this.option_total_eu) -
                  parseFloat(this.selected_sub_list_chars[i].eur);
                this.selected_sub_list_chars.splice(i, 1);
                this.add_sub_option(
                  this.chars[j].array.subarray[k],
                  this.chars[j]
                );
                break;
              }
            }
          }
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
    count_price_coeff_usd() {
      let temp_usd = this.selected_rank.usd;
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
      return parseFloat(temp_usd) + parseFloat(temp_usd_master);
    },
    count_price_coeff_eur() {
      let temp_eur = this.selected_rank.eur;
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
      this.hide_more =
        this.product.content.split("").length > 2000 ? true : false;
      this.hide_more2 =
        this.product.requirements.split("").length > 2000 ? true : false;
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
      if (this.init_slider) {
        for (let i = 0; i < this.chars.length; i++) {
          if (this.chars[i].type == 8) {
            let from = 0;
            for (let i = 0; i < this.sliders_check_price.length; i++) {
              if (this.sliders_check_price[i].title == this.chars[i].title) {
                from = this.sliders_check_price[i].value;
                break;
              }
            }
            let temp = this.chars[i].step;
            let temp_class = ".js-range-slider-" + i;
            let custom_values = this.chars[i].step;

            $(".editskupopup .js-range-slider-" + i).ionRangeSlider({
              type: "single",
              grid: true,
              from: from,
              values: custom_values,
              hide_min_max: true,
              hide_from_to: true,
              onChange: function (data) {
                temp_slider.id = data.from;
                temp_slider.check = true;
                temp_slider.slider_name = data.input[0].id;
                let left = $(temp_class)
                  .parent()
                  .find(".irs-handle")
                  .css("left");
                let left_temp = left.split("p")[0];
                $(temp_class)
                  .parent()
                  .find(".under_thumb_info")
                  .css("left", parseFloat(left_temp) - 34 + "px");
              },
            });
            let left = $(temp_class).parent().find(".irs-handle").css("left");
            let left_temp = left.toString().split("p")[0];
            $(temp_class)
              .parent()
              .find(".under_thumb_info")
              .css("left", parseFloat(left_temp) - 34 + "px");
          }
          if (this.chars[i].type == 13) {
            let from = 0;
            for (let i = 0; i < this.sliders_check_price.length; i++) {
              if (this.sliders_check_price[i].title == this.chars[i].title) {
                from = this.sliders_check_price[i].value;
                break;
              }
            }
            let temp = this.chars[i].step;
            let temp_class = ".js-range-slider-price-" + i;
            let custom_values = this.chars[i].step;

            $(" .editskupopup .js-range-slider-price-" + i).ionRangeSlider({
              type: "single",
              grid: true,
              from: from,
              values: custom_values,
              hide_min_max: true,
              hide_from_to: true,
              onChange: function (data) {
                temp_slider.id = data.from;
                temp_slider.check = true;
                temp_slider.slider_name = data.input[0].id;
                let left = $(temp_class)
                  .parent()
                  .find(".irs-handle")
                  .css("left");
                let left_temp = left.split("p")[0];
                $(temp_class)
                  .parent()
                  .find(".under_thumb_info")
                  .css("left", parseFloat(left_temp) - 34 + "px");
              },
            });
            let left = $(temp_class).parent().find(".irs-handle").css("left");
            let left_temp = left.split("p")[0];
            $(temp_class)
              .parent()
              .find(".under_thumb_info")
              .css("left", parseFloat(left_temp) - 34 + "px");
          }
          if (this.chars[i].type == 7) {
            let temp = this.chars[i].step;
            let temp_class = ".js-range-slider-double-" + i;
            let custom_values = this.chars[i].step;
            let from = "";
            let from_s = 0;
            let to_s = 0;
            for (let i = 0; i < this.double_sliders_check_price.length; i++) {
              if (
                this.double_sliders_check_price[i].slider_title ==
                this.chars[i].title
              ) {
                from = this.double_sliders_check_price[i].title;
                from = from.toString().split(";");

                from_s = this.chars[i].step.indexOf(from[0]);
                to_s = this.chars[i].step.indexOf(from[1]);
                break;
              }
            }
            $(".editskupopup .js-range-slider-double-" + i).ionRangeSlider({
              type: "double",
              grid: true,
              from: from_s,
              to: to_s,
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

            let left = $(temp_class).parent().find(".from").css("left");
            let left_temp = left.toString().split("p")[0];
            $(temp_class)
              .parent()
              .find(".under_thumb_info")
              .css("left", parseFloat(left_temp) - 34 + "px");
          }
          if (this.chars[i].type == 14) {
            let from = "";
            let from_s = 0;
            let to_s = 0;
            for (let i = 0; i < this.double_sliders_check_price.length; i++) {
              if (
                this.double_sliders_check_price[i].slider_title ==
                this.chars[i].title
              ) {
                from = this.double_sliders_check_price[i].title;
                from = from.toString().split(";");
                from_s = this.chars[i].step.indexOf(from[0]);
                to_s = this.chars[i].step.indexOf(from[1]);
                break;
              }
            }

            let temp = this.chars[i].step;
            let temp_class = ".js-range-slider-double-price-" + i;
            let custom_values = this.chars[i].step;

            $(
              ".editskupopup .js-range-slider-double-price-" + i
            ).ionRangeSlider({
              type: "double",
              grid: true,
              from: from_s,
              to: to_s,
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
            let left = $(temp_class).parent().find(".from").css("left");
            let left_temp = left.toString().split("p")[0];
            $(temp_class)
              .parent()
              .find(".under_thumb_info")
              .css("left", parseFloat(left_temp) - 34 + "px");
          }
        }
        this.init_slider = true;
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
        parseFloat(item.array.min) +
          parseFloat(item.count) * parseFloat(item.array.step) >
          parseFloat(item.array.max)
      ) {
        item.count--;
      }
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
              this.get_slidierUSD_byTitle(item) * item.array.coefficient
            );
          this.option_total_eu =
            parseFloat(this.option_total_eu) -
            parseFloat(
              this.get_slidierEUR_byTitle(item) * item.array.coefficient
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
              this.get_slidierUSD_byTitle(item) * item.array.coefficient
            );
          this.option_total_eu =
            parseFloat(this.option_total_eu) +
            parseFloat(
              this.get_slidierEUR_byTitle(item) * item.array.coefficient
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
                this.get_slidierUSD_byTitle(item) * item.array.coefficient
              );
            this.option_total_eu =
              parseFloat(this.option_total_eu) -
              parseFloat(
                this.get_slidierEUR_byTitle(item) * item.array.coefficient
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
              this.get_slidierUSD_byTitle(item) * item.array.coefficient
            );
          this.option_total_eu =
            parseFloat(this.option_total_eu) +
            parseFloat(
              this.get_slidierEUR_byTitle(item) * item.array.coefficient
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
      document.body.className = "body_pop_up_active";
      let cart = {};
      cart["id"] = this.product.id;
      cart["checkbox_list"] = this.selected_list_chars;
      cart["subcheckbox_list"] = this.selected_sub_list_chars;
      cart["single_slider"] = this.sliders_check_price;
      cart["double_slider"] = this.double_sliders_check_price;
      cart["count"] = this.count;
      cart["calc"] = this.cacl_array;
      cart["time_id"] = this.choosen_event_id;
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
                });
            }
          }
        });
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
        date: moment().tz("Europe/Berlin").format("YYYY-MM-DD HH:mm:ss"),
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
  },
};
</script>
