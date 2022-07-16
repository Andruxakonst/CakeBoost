<template>
  <div class="landing" style="position: relative">
    <CookiesPolicy ref="cookiesPolicy"></CookiesPolicy>
      <div class="baner">
      <div class="banner_img_mask">
        <img
          src="/icons/banner_img_mask.jpg" alt=""
        />
      </div>
      <div
        v-if="!this.$store.getters['getUserLoginCheck'].user_check_login"
        class="banner_header banner_header_stable"
      >
        <div>
          <div
            class="header_region_picker"
            :class="{ region_choose_open: region_choose_div }"
            @click="region_choose_div = region_choose_div ? false : true"
          >
            <div class="header_game_picker_select">
              <div>
                <div>Region:</div>
                <div v-if="this.$store.getters['getSelectedZone'] == 'eu'">
                  EU
                </div>
                <div v-if="this.$store.getters['getSelectedZone'] == 'us'">
                  US
                </div>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M11.5284 5.52868C11.7888 5.26833 12.2109 5.26833 12.4712 5.52868C12.7316 5.78903 12.7316 6.21114 12.4712 6.47149L8.47124 10.4715C8.21886 10.7239 7.81246 10.7327 7.54935 10.4915L3.54935 6.82485C3.27794 6.57606 3.25961 6.15434 3.5084 5.88293C3.7572 5.61152 4.17891 5.59318 4.45032 5.84198L7.97979 9.07732L11.5284 5.52868Z" fill="#F5F5F6"/>
                </svg>
              </div>
              <div class="region_choose_div" v-if="region_choose_div">
                <div
                  @click="change_zone('us')"
                  :class="{
                    active: this.$store.getters['getSelectedZone'] == 'us',
                  }"
                >
                  US
                </div>
                <div
                  @click="change_zone('eu')"
                  :class="{
                    active: this.$store.getters['getSelectedZone'] == 'eu',
                  }"
                >
                  EU
                </div>
              </div>
            </div>
          </div>
          <div
            class="header_game_picker"
            :class="{
              region_choose_open_game: region_choose_div,
              game_choose_open: game_choose_div,
            }"
            @click.self="game_choose_div = game_choose_div ? false : true"
          >
            <div
              v-if="!game_choose_div"
              @click="game_choose_div = game_choose_div ? false : true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path opacity="0.3" d="M12.9486 9.31623L11.0513 8.68377C11.816 6.38965 13.0426 4.95855 14.7574 4.52986C15.6502 4.30665 17 2.86951 17 2H19C19 3.79716 17.0163 6.02668 15.2425 6.47014C14.2906 6.70811 13.5173 7.61035 12.9486 9.31623Z" fill="#F5F5F6"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2572 17H10.7428C9.73405 18.2215 8.20794 19 6.5 19C3.46243 19 1 16.5376 1 13.5C1 10.4624 3.46243 8 6.5 8C6.68789 8 6.87358 8.00942 7.05662 8.02782C7.20183 8.00946 7.34981 8 7.5 8H16.5C16.6502 8 16.7982 8.00946 16.9434 8.02782C17.1264 8.00942 17.3121 8 17.5 8C20.5376 8 23 10.4624 23 13.5C23 16.5376 20.5376 19 17.5 19C15.7921 19 14.266 18.2215 13.2572 17ZM5 10.5C5 10.2239 5.22386 10 5.5 10H6.5C6.77614 10 7 10.2239 7 10.5V11.5C7 11.7761 6.77614 12 6.5 12H5.5C5.22386 12 5 11.7761 5 11.5V10.5ZM7.5 12C7.22386 12 7 12.2239 7 12.5V13.5C7 13.7761 7.22386 14 7.5 14H8.5C8.77614 14 9 13.7761 9 13.5V12.5C9 12.2239 8.77614 12 8.5 12H7.5ZM19 12C19.5523 12 20 11.5523 20 11C20 10.4477 19.5523 10 19 10C18.4477 10 18 10.4477 18 11C18 11.5523 18.4477 12 19 12ZM19 14C19 14.5523 18.5523 15 18 15C17.4477 15 17 14.5523 17 14C17 13.4477 17.4477 13 18 13C18.5523 13 19 13.4477 19 14ZM5 14.5C5 14.2239 5.22386 14 5.5 14H6.5C6.77614 14 7 14.2239 7 14.5V15.5C7 15.7761 6.77614 16 6.5 16H5.5C5.22386 16 5 15.7761 5 15.5V14.5ZM3.5 12C3.22386 12 3 12.2239 3 12.5V13.5C3 13.7761 3.22386 14 3.5 14H4.5C4.77614 14 5 13.7761 5 13.5V12.5C5 12.2239 4.77614 12 4.5 12H3.5Z" fill="#F5F5F6"/>
              </svg>
            </div>
            <div
              @click.self="game_choose_div = game_choose_div ? false : true"
              class="header_game_picker_select"
            >
              <div
                v-if="!game_choose_div"
                @click="game_choose_div = game_choose_div ? false : true"
              >
                <div>Choose your game</div>
              </div>
              <div
                v-if="!game_choose_div"
                @click="game_choose_div = game_choose_div ? false : true"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" @click="game_choose_div = game_choose_div ? false : true">
                  <path d="M11.5284 5.52868C11.7888 5.26833 12.2109 5.26833 12.4712 5.52868C12.7316 5.78903 12.7316 6.21114 12.4712 6.47149L8.47124 10.4715C8.21886 10.7239 7.81246 10.7327 7.54935 10.4915L3.54935 6.82485C3.27794 6.57606 3.25961 6.15434 3.5084 5.88293C3.7572 5.61152 4.17891 5.59318 4.45032 5.84198L7.97979 9.07732L11.5284 5.52868Z" fill="#F5F5F6"/>
                </svg>
              </div>
              <div v-if="game_choose_div" class="game_picker_header_search">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path opacity="0.7" d="M11.9111 13.9226C11.5856 13.5972 11.5856 13.0695 11.9111 12.7441C12.2365 12.4186 12.7641 12.4186 13.0896 12.7441L16.4229 16.0774C16.7484 16.4028 16.7484 16.9305 16.4229 17.2559C16.0975 17.5814 15.5698 17.5814 15.2444 17.2559L11.9111 13.9226Z" fill="#444B4D"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33496 9.16701C3.33496 12.3887 5.94663 15.0003 9.16829 15.0003C12.39 15.0003 15.0016 12.3887 15.0016 9.16701C15.0016 5.94535 12.39 3.33368 9.16829 3.33368C5.94663 3.33368 3.33496 5.94535 3.33496 9.16701ZM13.335 9.16701C13.335 11.4682 11.4695 13.3337 9.16829 13.3337C6.86711 13.3337 5.00163 11.4682 5.00163 9.16701C5.00163 6.86583 6.86711 5.00035 9.16829 5.00035C11.4695 5.00035 13.335 6.86583 13.335 9.16701Z" fill="#444B4D"/>
                  </svg>
                  <input
                    v-model="search_header_game"
                    type="text"
                    placeholder="Search by game"
                  />
                </div>
              </div>
              <svg v-if="game_choose_div" @click="game_choose_div = false" style="margin-left: 8px"  xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <rect x="5.63477" y="16.9509" width="16" height="2" rx="1" transform="rotate(-45 5.63477 16.9509)" fill="#595E61"/>
                <rect x="7.04883" y="5.63721" width="16" height="2" rx="1" transform="rotate(45 7.04883 5.63721)" fill="#595E61"/>
              </svg>
              <div class="game_choose_div" v-if="game_choose_div">
                <a href="/wow-boost" v-if="search_header_game == '' || 'wow shadowlands'.includes(search_header_game)">WoW Shadowlands</a>
                <a href="/wow-vanilla" v-if="search_header_game == '' || 'wow vanilla season of mastery'.includes(search_header_game)">WoW Vanilla | Season of Mastery</a>
                <a href="/new-world" v-if="search_header_game == '' || 'new world'.includes(search_header_game)">New World</a>
                <a href="/wow-burning-crusade" v-if="search_header_game == '' || 'wow burning crusade tbc'.includes(search_header_game)">WoW Burning Crusade | TBC</a>
                <a href="/destiny-2" v-if="search_header_game == '' || 'destiny 2'.includes(search_header_game)">Destiny 2</a>
                <a href="/cod-cold-war" v-if="search_header_game == '' || 'cod black ops cold war'.includes(search_header_game)">COD Black Ops: Cold War</a>
                <a href="/cod-mw" v-if="search_header_game == '' || 'cod modern warfare'.includes(search_header_game)">COD: Modern Warfare</a>
                <a href="/hearthstone" v-if="search_header_game == '' || 'hearthstone hs'.includes(search_header_game)">Hearthstone | HS</a>
                <a href="/cod-warzone" v-if="search_header_game == '' || 'cod warzone'.includes(search_header_game)">COD Warzone</a>
                <a href="/path-of-exile" v-if="search_header_game == '' || 'path of exile poe'.includes(search_header_game)">Path of Exile | PoE</a>
                <a href="/overwatch" v-if="search_header_game == '' || 'overwatch ow'.includes(search_header_game)">Overwatch | OW</a>
                <a href="/league-of-legends" v-if="search_header_game == '' || 'league of legends lol'.includes(search_header_game)">League of Legends | LoL</a>
                <a href="/valorant" v-if="search_header_game == '' || 'valorant'.includes(search_header_game)">Valorant</a>
                <a href="/apex-legends" v-if="search_header_game == '' || 'apex legends'.includes(search_header_game)">Apex Legends</a>
                <a href="/escape-from-tarkov" v-if="search_header_game == '' || 'escape from tarkov eft'.includes(search_header_game)">Escape from Tarkov | EfT</a>
                <a href="/final-fantasy-xiv" v-if="search_header_game == '' || 'final fantasy XIV'.includes(search_header_game)">Final Fantasy XIV</a>
              </div>
            </div>
          </div>
          <!-- <div style="text-align: center; padding: 10px;" class="MainTrustpilot">
            <a target="_blank" href="https://www.trustpilot.com/review/cakeboost.com" class="nav__tp" style="text-decoration: none">
            <img alt=""style="width:82px;height:20px;" class="lazyLoad isLoading" src="/icons/tp.svg">
            <span style="text-decoration: none">4.9/5 rating</span></a>
          </div> -->
        </div>
        <div
          class="nav__item nav__mobile_enable nav_burger"
          style="display: none; border-left: none"
        >
          <svg v-if="!all_game_popup_check" @click="all_game_popup_check = true, closeCookie()" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="3.00098" width="20" height="4" rx="2" fill="#444B4D"/>
            <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M3.5 9.62598C2.67157 9.62598 2 10.2975 2 11.126V11.876C2 12.7044 2.67157 13.376 3.5 13.376H13C13.8284 13.376 14.5 12.7044 14.5 11.876V11.126C14.5 10.2975 13.8284 9.62598 13 9.62598H3.5ZM3.5 15.876C2.67157 15.876 2 16.5475 2 17.376V18.126C2 18.9544 2.67157 19.626 3.5 19.626H20.5C21.3284 19.626 22 18.9544 22 18.126V17.376C22 16.5475 21.3284 15.876 20.5 15.876H3.5Z" fill="#444B4D"/>
          </svg>
          <svg v-if="all_game_popup_check" @click="all_game_popup_check = false, closeCookie()" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="5.63477" y="16.9507" width="16" height="2" rx="1" transform="rotate(-45 5.63477 16.9507)" fill="white"/>
            <rect x="7.04883" y="5.63696" width="16" height="2" rx="1" transform="rotate(45 7.04883 5.63696)" fill="white"/>
          </svg>
        </div>
        <!-- <div class="Follow">
          <span style="margin-right: 12px;"> Follow us</span>
          <a href="https://www.facebook.com/CakeGamesExp/"><img alt="" class="lazyLoad isLoaded" src="/landing_page/Facebook_footer.svg"></a>
          <a href="https://www.youtube.com/channel/UCe-rP4IHqXR5fnDwno1fWgg?view_as=subscriber"><img alt="" class="lazyLoad isLoaded" src="/landing_page/YT_footer.svg"></a>
          <a href="https://www.twitch.tv/cakeboost"><img alt="" class="lazyLoad isLoaded" src="/landing_page/Twitch.svg"></a>
          <a href="https://www.instagram.com/cakeboost/"><img alt="" class="lazyLoad isLoaded" src="/landing_page/Inst_footer.svg"></a>
          <a href="https://twitter.com/Cake_boost"><img alt="" class="lazyLoad isLoaded" src="/landing_page/Twitter.svg"></a>
        </div> -->
        <div class="header_nav">
          <a
            class="header_nav_href"
            target="_blank"
            href="https://www.trustpilot.com/review/cakeboost.com"
            >Reviews</a
          >
          <a class="header_nav_href" href="/page/investors-and-partners"
            >Become a partner</a
          >
          <a class="header_nav_href" href="/page/contact-us">Contact us</a>
        </div>
        <!-- <div class="Support">
          <span style="margin-right: 12px;">24/7 support:</span>
          <a href="skype:live:support_51317?add"><img alt="" class="lazyLoad isLoaded" src="/landing_page/Skype.svg"></a>
          <a style="cursor: pointer;"><img alt="" class="lazyLoad isLoaded" src="/landing_page/Discord.svg"></a>
          <a href="https://www.whatsapp.com/"><img alt="" class="lazyLoad isLoaded" src="/landing_page/WhatsApp.svg"></a>
          <a href="https://t.me/cakeboost"><img alt="" class="lazyLoad isLoaded" src="/landing_page/Telegram.svg"></a>
        </div> -->
        <div class="header_user_button">
          <a href="/page/login" class="header_login"> Login </a>
          <a href="/page/signup" class="header_signup"> Sign up </a>
        </div>
        <div
          @click.self="region_choose_div = region_choose_div ? false : true"
          :class="{ region_open_active: region_choose_div }"
          class="header_game_picker_select nav__item"
          style="display: none"
        >
          <div
            @click.self="region_choose_div = region_choose_div ? false : true"
          >
            <div
              @click.self="region_choose_div = region_choose_div ? false : true"
              v-if="this.$store.getters['getSelectedZone'] == 'eu'"
            >
              EU
            </div>
            <div
              @click.self="region_choose_div = region_choose_div ? false : true"
              v-if="this.$store.getters['getSelectedZone'] == 'us'"
            >
              US
            </div>
          </div>

          <div class="region_choose_div" v-if="region_choose_div">
            <div
              @click="change_zone('us'), (region_choose_div = false)"
              :class="{
                active: this.$store.getters['getSelectedZone'] == 'us',
              }"
            >
              US
            </div>
            <div
              @click="change_zone('eu'), (region_choose_div = false)"
              :class="{
                active: this.$store.getters['getSelectedZone'] == 'eu',
              }"
            >
              EU
            </div>
          </div>
        </div>
        <div class="nav__item">
          <a
            class="nav__link nav__mobile_enable"
            style="display: none"
            @click="user_m_window = true"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00026 9.00049C7.00026 6.23906 9.23883 4.00049 12.0003 4.00049C14.7617 4.00049 17.0003 6.23906 17.0003 9.00049C17.0003 11.7619 14.7617 14.0005 12.0003 14.0005C9.23883 14.0005 7.00026 11.7619 7.00026 9.00049ZM12.0003 2.00049C8.13426 2.00049 5.00026 5.1345 5.00026 9.00049C5.00026 11.3849 6.19243 13.4909 8.01322 14.7548C5.30275 15.8252 3.14145 17.9553 2.07181 20.6291C1.86667 21.1418 2.11606 21.7238 2.62884 21.9289C3.14161 22.1341 3.72359 21.8847 3.92873 21.3719C5.18267 18.2374 8.31627 16.0005 12.0003 16.0005C15.6843 16.0005 18.8179 18.2374 20.0718 21.3719C20.2769 21.8847 20.8589 22.1341 21.3717 21.9289C21.8845 21.7238 22.1339 21.1418 21.9287 20.6291C20.8591 17.9553 18.6978 15.8252 15.9873 14.7548C17.8081 13.4909 19.0003 11.3849 19.0003 9.00049C19.0003 5.1345 15.8663 2.00049 12.0003 2.00049Z" fill="#2F3639"/>
            </svg>
          </a>

          <div
            class="header_menu_mask"
            @click="user_m_window = false"
            v-if="user_m_window"
          ></div>
          <div class="logRegHover" v-if="user_m_window">
            <div>You account</div>
            <div>What do you want to do?</div>

            <a id="regButtonHref" href="/page/signup">Registration</a>
            <a href="page/login" id="logButton"> Login </a>
            <div style="top: -11px; right: 16px" class="divTriangle"></div>
          </div>
        </div>
        <div
          class="banner_header_cart"
          v-if="this.$store.getters['getCard'].cart_items.length > 0"
        >
          <a @click.self="cart_m_window = true" class="nav__link">
            <svg @click.self="cart_m_window = true" class="banner_header_cart_img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.57859 2.31425C3.84083 1.89969 5.28165 1.96227 6.21376 2.12511C6.26148 2.13344 6.30854 2.14524 6.35455 2.1604L21.2123 7.05496C22.2993 7.41304 23.0879 8.35838 23.2452 9.49197L23.6748 12.5881C23.9251 14.3917 22.5241 16.0005 20.7033 16.0005H9.59026C8.10992 16.0005 6.85088 14.9207 6.6253 13.4576L5.16922 4.01409C4.53051 3.9741 3.80438 4.01677 3.20266 4.21439C2.79505 4.34826 2.50224 4.53411 2.31429 4.75586C2.13981 4.96173 2 5.26245 2 5.75247C2 6.30476 1.55228 6.75247 1 6.75247C0.447715 6.75247 0 6.30476 0 5.75247C0 4.83328 0.280325 4.06241 0.788571 3.46274C1.28335 2.87897 1.93585 2.52534 2.57859 2.31425ZM7.27865 4.57055L20.5865 8.95454C20.9489 9.0739 21.2117 9.38901 21.2642 9.76688L21.6938 12.863C21.7772 13.4642 21.3102 14.0005 20.7033 14.0005H9.59026C9.09682 14.0005 8.67713 13.6405 8.60194 13.1529L7.27865 4.57055ZM11 19.0005C10.4477 19.0005 10 19.4482 10 20.0005C10 20.5528 10.4477 21.0005 11 21.0005C11.5523 21.0005 12 20.5528 12 20.0005C12 19.4482 11.5523 19.0005 11 19.0005ZM8 20.0005C8 18.3436 9.34315 17.0005 11 17.0005C12.6569 17.0005 14 18.3436 14 20.0005C14 21.6573 12.6569 23.0005 11 23.0005C9.34315 23.0005 8 21.6573 8 20.0005ZM19 20.0005C19 19.4482 19.4477 19.0005 20 19.0005C20.5523 19.0005 21 19.4482 21 20.0005C21 20.5528 20.5523 21.0005 20 21.0005C19.4477 21.0005 19 20.5528 19 20.0005ZM20 17.0005C18.3431 17.0005 17 18.3436 17 20.0005C17 21.6573 18.3431 23.0005 20 23.0005C21.6569 23.0005 23 21.6573 23 20.0005C23 18.3436 21.6569 17.0005 20 17.0005Z" fill="#2F3639"/>
            </svg>
            <div @click.self="cart_m_window = true" class="nav__count">
              <span
                @click.self="cart_m_window = true"
                v-if="this.$store.getters['getCard'].cart_items.length == 0"
                >0</span
              >
              <span @click.self="cart_m_window = true" v-else>{{
                this.$store.getters["getCard"].cart_items.length
              }}</span>
            </div>
            <div
              class="header_menu_mask"
              @click="cart_m_window = false"
              v-if="cart_m_window"
            ></div>
            <div
              v-if="
                this.$store.getters['getCard'].cart_items.length > 0 &&
                cart_m_window
              "
              class="divTriangle"
            ></div>
            <div
              class="cardHover"
              v-if="
                this.$store.getters['getCard'].cart_items.length > 0 &&
                cart_m_window
              "
            >
              <div
                class="cardHoverItem"
                v-for="(item, index) in this.$store.getters['getCard']
                  .cart_items"
                :key="index"
              >
                <div>
                  <div>
                    <img
                      class="banner_header_sku_img"
                      :src="apiImg + 'sku/' + item.product.image"
                      alt
                    />
                  </div>
                  <div v-html="item.product.menu_name"></div>
                </div>
                <div
                  class="cardItemOptions"
                  v-if="
                    item.subcheckbox_list.length != 0 ||
                    item.checkbox_list.length != 0 ||
                    item.single_slider.length != 0 ||
                    item.double_slider.length != 0 ||
                    item.product.raid_enable != 0
                  "
                >
                  <span v-if="item.product.raid_enable != 0">
                    <strong>Raid time:</strong>
                    {{ get_cart_format_time(item.event.event_date) }} @
                    <span v-if="item.event.times.time_edt != ''"
                      >{{ item.event.times.time_edt }} EDT</span
                    >
                    <span v-if="item.event.times.time_cest != ''"
                      >{{ item.event.times.time_cest }} CEST</span
                    >
                  </span>
                  <span
                    v-for="(subitem, index) in item.subcheckbox_list"
                    :key="index"
                    v-html="subitem.title"
                  ></span>

                  <span
                    v-for="(subitem, index) in item.checkbox_list"
                    :key="index"
                    v-html="subitem.array.title"
                  ></span>

                  <span
                    v-for="subitem in item.single_slider"
                    :key="subitem.title"
                    >{{ subitem.choosen_price }} {{ subitem.title }} :
                    {{ subitem.real_value }}</span
                  >

                  <span
                    v-for="subitem in item.double_slider"
                    :key="subitem.title"
                    >{{ subitem.choosen_price }} {{ subitem.slider_title }} :
                    {{ subitem.title.replace(";", " - ") }}</span
                  >

                  <span v-for="subitem in item.calc" :key="subitem.title">
                    <span v-html="subitem.array.title"></span> :
                    {{
                      parseFloat(subitem.array.min) +
                      parseFloat(
                        parseFloat(subitem.array.step) *
                          parseFloat(subitem.count)
                      )
                    }}</span
                  >
                </div>
                <div class="cardItemPrice">
                  <span v-if="$store.getters['getSelectedZone'] == 'us'">
                    {{
                      (
                        (parseFloat(item.product.price_usd) +
                          parseFloat(item.option_total_us)) *
                        parseFloat(item.count)
                      ).toFixed(2)
                    }}$
                    <span>x{{ item.count }}</span>
                  </span>
                  <span v-if="$store.getters['getSelectedZone'] == 'eu'">
                    {{
                      (
                        (parseFloat(item.product.price_eur) +
                          parseFloat(item.option_total_eu)) *
                        parseFloat(item.count)
                      ).toFixed(2)
                    }}€
                    <span>x{{ item.count }}</span>
                  </span>
                  <span>
                    <!--a href>рoptions</!--a-->
                    <span @click="delete_cart_item(index)">Delete</span>
                  </span>
                </div>
              </div>
              <div
                class="cardHoverTotal"
                v-if="this.$store.getters['getCard'].cart_items.length > 0"
              >
                <span>Total</span>
                <span v-if="$store.getters['getSelectedZone'] == 'us'">
                  {{ this.$store.getters["getCard"].total_price_us }}$
                  <span v-if="this.$store.getters['getCard'].sales"
                    >{{ this.$store.getters["getCard"].total_sale_us }}$</span
                  >
                </span>
                <span v-if="$store.getters['getSelectedZone'] == 'eu'">
                  {{ this.$store.getters["getCard"].total_price_eu }}€
                  <span v-if="this.$store.getters['getCard'].sales"
                    >{{ this.$store.getters["getCard"].total_sale_eu }}€</span
                  >
                </span>
                <span>
                  <a v-bind:href="'/page/make-an-order'">Make an order</a>
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
      <header
        class="desktop"
        id="authorised"
        :class="{ header_close_sidebar: !close_sidebar }"
        v-if="this.$store.getters['getUserLoginCheck'].user_check_login"
      >
        <ul class="nav">
          <li
            @click.self="region_choose_div = region_choose_div ? false : true"
            :class="{ region_open_active: region_choose_div }"
            class="header_game_picker_select nav__item landing_h_auth_region_div"
          >
            <div
              @click.self="region_choose_div = region_choose_div ? false : true"
              class="landing_h_auth_region"
            >
              <div
                @click.self="
                  region_choose_div = region_choose_div ? false : true
                "
                style="color: #2f3639"
                v-if="this.$store.getters['getSelectedZone'] == 'eu'"
              >
                EU
              </div>
              <div
                @click.self="
                  region_choose_div = region_choose_div ? false : true
                "
                v-if="this.$store.getters['getSelectedZone'] == 'us'"
                style="color: #2f3639"
              >
                US
              </div>
            </div>

            <div class="region_choose_div" v-if="region_choose_div">
              <div
                @click="change_zone('us'), (region_choose_div = false)"
                :class="{
                  active: this.$store.getters['getSelectedZone'] == 'us',
                }"
              >
                US
              </div>
              <div
                @click="change_zone('eu'), (region_choose_div = false)"
                :class="{
                  active: this.$store.getters['getSelectedZone'] == 'eu',
                }"
              >
                EU
              </div>
            </div>
          </li>

          <li
            class="nav__item nav__mobile_disable"
            style="border-left: 1px solid #d5d7d7"
            v-if="!open_nav_search"
            :class="{ opengames: open_game_list }"
          >
            <div
              v-if="!open_game_list"
              @click="open_game_list = open_game_list ? false : true"
              class="nav__games"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path opacity="0.3" d="M12.9486 9.31623L11.0513 8.68377C11.816 6.38965 13.0426 4.95855 14.7574 4.52986C15.6502 4.30665 17 2.86951 17 2H19C19 3.79716 17.0163 6.02668 15.2425 6.47014C14.2906 6.70811 13.5173 7.61035 12.9486 9.31623Z" fill="#2F3639"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2572 17H10.7428C9.73405 18.2215 8.20794 19 6.5 19C3.46243 19 1 16.5376 1 13.5C1 10.4624 3.46243 8 6.5 8C6.68789 8 6.87358 8.00942 7.05662 8.02782C7.20183 8.00946 7.34981 8 7.5 8H16.5C16.6502 8 16.7982 8.00946 16.9434 8.02782C17.1264 8.00942 17.3121 8 17.5 8C20.5376 8 23 10.4624 23 13.5C23 16.5376 20.5376 19 17.5 19C15.7921 19 14.266 18.2215 13.2572 17ZM5 10.5C5 10.2239 5.22386 10 5.5 10H6.5C6.77614 10 7 10.2239 7 10.5V11.5C7 11.7761 6.77614 12 6.5 12H5.5C5.22386 12 5 11.7761 5 11.5V10.5ZM7.5 12C7.22386 12 7 12.2239 7 12.5V13.5C7 13.7761 7.22386 14 7.5 14H8.5C8.77614 14 9 13.7761 9 13.5V12.5C9 12.2239 8.77614 12 8.5 12H7.5ZM19 12C19.5523 12 20 11.5523 20 11C20 10.4477 19.5523 10 19 10C18.4477 10 18 10.4477 18 11C18 11.5523 18.4477 12 19 12ZM19 14C19 14.5523 18.5523 15 18 15C17.4477 15 17 14.5523 17 14C17 13.4477 17.4477 13 18 13C18.5523 13 19 13.4477 19 14ZM5 14.5C5 14.2239 5.22386 14 5.5 14H6.5C6.77614 14 7 14.2239 7 14.5V15.5C7 15.7761 6.77614 16 6.5 16H5.5C5.22386 16 5 15.7761 5 15.5V14.5ZM3.5 12C3.22386 12 3 12.2239 3 12.5V13.5C3 13.7761 3.22386 14 3.5 14H4.5C4.77614 14 5 13.7761 5 13.5V12.5C5 12.2239 4.77614 12 4.5 12H3.5Z" fill="#2F3639"></path></svg>
              <div class="nav__game">
                <span>Choose your game</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="none"><path d="M11.5284 5.52868C11.7888 5.26833 12.2109 5.26833 12.4712 5.52868C12.7316 5.78903 12.7316 6.21114 12.4712 6.47149L8.47124 10.4715C8.21886 10.7239 7.81246 10.7327 7.54935 10.4915L3.54935 6.82485C3.27794 6.57606 3.25961 6.15434 3.5084 5.88293C3.7572 5.61152 4.17891 5.59318 4.45032 5.84198L7.97979 9.07732L11.5284 5.52868Z" fill="#2F3639"></path></svg>
            </div>
            <div v-if="open_game_list" class="nav__games">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path opacity="0.3" d="M12.9486 9.31623L11.0513 8.68377C11.816 6.38965 13.0426 4.95855 14.7574 4.52986C15.6502 4.30665 17 2.86951 17 2H19C19 3.79716 17.0163 6.02668 15.2425 6.47014C14.2906 6.70811 13.5173 7.61035 12.9486 9.31623Z" fill="#F5F5F6"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2572 17H10.7428C9.73405 18.2215 8.20794 19 6.5 19C3.46243 19 1 16.5376 1 13.5C1 10.4624 3.46243 8 6.5 8C6.68789 8 6.87358 8.00942 7.05662 8.02782C7.20183 8.00946 7.34981 8 7.5 8H16.5C16.6502 8 16.7982 8.00946 16.9434 8.02782C17.1264 8.00942 17.3121 8 17.5 8C20.5376 8 23 10.4624 23 13.5C23 16.5376 20.5376 19 17.5 19C15.7921 19 14.266 18.2215 13.2572 17ZM5 10.5C5 10.2239 5.22386 10 5.5 10H6.5C6.77614 10 7 10.2239 7 10.5V11.5C7 11.7761 6.77614 12 6.5 12H5.5C5.22386 12 5 11.7761 5 11.5V10.5ZM7.5 12C7.22386 12 7 12.2239 7 12.5V13.5C7 13.7761 7.22386 14 7.5 14H8.5C8.77614 14 9 13.7761 9 13.5V12.5C9 12.2239 8.77614 12 8.5 12H7.5ZM19 12C19.5523 12 20 11.5523 20 11C20 10.4477 19.5523 10 19 10C18.4477 10 18 10.4477 18 11C18 11.5523 18.4477 12 19 12ZM19 14C19 14.5523 18.5523 15 18 15C17.4477 15 17 14.5523 17 14C17 13.4477 17.4477 13 18 13C18.5523 13 19 13.4477 19 14ZM5 14.5C5 14.2239 5.22386 14 5.5 14H6.5C6.77614 14 7 14.2239 7 14.5V15.5C7 15.7761 6.77614 16 6.5 16H5.5C5.22386 16 5 15.7761 5 15.5V14.5ZM3.5 12C3.22386 12 3 12.2239 3 12.5V13.5C3 13.7761 3.22386 14 3.5 14H4.5C4.77614 14 5 13.7761 5 13.5V12.5C5 12.2239 4.77614 12 4.5 12H3.5Z" fill="#F5F5F6"></path></svg>
              <div class="nav__game">
                <span>Choose your game</span>
                <span>World of Warcraft: BFA</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M11.5284 5.52868C11.7888 5.26833 12.2109 5.26833 12.4712 5.52868C12.7316 5.78903 12.7316 6.21114 12.4712 6.47149L8.47124 10.4715C8.21886 10.7239 7.81246 10.7327 7.54935 10.4915L3.54935 6.82485C3.27794 6.57606 3.25961 6.15434 3.5084 5.88293C3.7572 5.61152 4.17891 5.59318 4.45032 5.84198L7.97979 9.07732L11.5284 5.52868Z" fill="#2F3639"></path></svg>
            </div>
            <div v-if="open_game_list" class="games__list">
              <div class="games__search">
                <input
                  v-model="search_header_game"
                  type="text"
                  placeholder="Search by game"
                />
                <button @click="open_game_list = false">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="5.63672" y="16.9507" width="16" height="2" rx="1" transform="rotate(-45 5.63672 16.9507)" fill="#595E61"/>
                    <rect x="7.05078" y="5.63721" width="16" height="2" rx="1" transform="rotate(45 7.05078 5.63721)" fill="#595E61"/>
                  </svg>
                </button>
              </div>
              <ul class="games">
                <li class="game">
                  <a href="/wow-boost" v-if="search_header_game == '' || 'wow shadowlands'.includes(search_header_game)">WoW Shadowlands</a>
                </li>
                <li class="game">
                  <a href="/wow-vanilla" v-if="search_header_game == '' || 'wow vanilla season of mastery'.includes(search_header_game)">WoW Vanilla | Season of Mastery</a>
                </li>
                <li class="game" v-if="search_header_game == '' || 'new world'.includes(search_header_game)">
                  <a href="/new-world">New World</a>
                </li>
                <li class="game" v-if="search_header_game == '' || 'wow burning crusade tbc'.includes(search_header_game)">
                  <a href="/wow-burning-crusade">WoW Burning Crusade | TBC</a>
                </li>
                <li class="game" v-if="search_header_game == '' || 'destiny 2'.includes(search_header_game)">
                  <a href="/destiny-2">Destiny 2</a>
                </li>
                <li class="game" v-if="search_header_game == '' || 'cod black ops cold war'.includes(search_header_game)">
                  <a href="/cod-cold-war">COD Black Ops: Cold War</a>
                </li>
                <li class="game" v-if="search_header_game == '' || 'cod modern warfare'.includes(search_header_game)">
                  <a href="/cod-mw">COD: Modern Warfare</a>
                </li>
                <li class="game" v-if="search_header_game == '' || 'hearthstone hs'.includes(search_header_game)">
                  <a href="/hearthstone">Hearthstone | HS</a>
                </li>
                <li class="game" v-if="search_header_game == '' || 'cod warzone'.includes(search_header_game)">
                  <a href="/cod-warzone">COD Warzone</a>
                </li>
                <li class="game" v-if="search_header_game == '' || 'path of exile poe'.includes(search_header_game)">
                  <a href="/path-of-exile">Path of Exile | PoE</a>
                </li>
                <li class="game" v-if="search_header_game == '' || 'overwatch ow'.includes(search_header_game)">
                  <a href="/overwatch">Overwatch | OW</a>
                </li>
                <li class="game" v-if="search_header_game == '' || 'league of legends lol'.includes(search_header_game)">
                  <a href="/league-of-legends">League of Legends | LoL</a>
                </li>
                <li class="game" v-if="search_header_game == '' || 'valorant'.includes(search_header_game)">
                  <a href="/valorant">Valorant</a>
                </li>
                <li class="game" v-if="search_header_game == '' || 'apex legends'.includes(search_header_game)">
                  <a href="/apex-legends">Apex Legends</a>
                </li>
                <li class="game" v-if="search_header_game == '' || 'escape from tarkov eft'.includes(search_header_game)">
                  <a href="/escape-from-tarkov">Escape from Tarkov | EfT</a>
                  </li>
                <li class="game" v-if="search_header_game == '' || 'final fantasy XIV'.includes(search_header_game)">
                  <a href="/final-fantasy-xiv">Final Fantasy XIV</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav__item borders nav__center nav__mobile_disable">
            <a target="_blank" href="https://www.trustpilot.com/review/cakeboost.com" class="nav__tp" style="text-decoration: none">
            <svg xmlns="http://www.w3.org/2000/svg" width="82" height="20" viewBox="0 0 82 20" fill="none">
              <path d="M21.455 7.08789H29.7135V8.62216H26.4618V17.2711H24.6795V8.62216H21.4414L21.455 7.08789ZM29.3597 9.89846H30.8835V11.3241H30.9107C30.9652 11.1205 31.0604 10.9304 31.1964 10.7403C31.3325 10.5502 31.4958 10.3737 31.6998 10.2243C31.8903 10.0614 32.108 9.9392 32.3529 9.84415C32.5842 9.74911 32.8291 9.6948 33.074 9.6948C33.2645 9.6948 33.4005 9.70838 33.4685 9.70838C33.5366 9.72195 33.6182 9.73553 33.6862 9.73553V11.297C33.5774 11.2698 33.4549 11.2562 33.3325 11.2426C33.21 11.2291 33.1012 11.2155 32.9788 11.2155C32.7066 11.2155 32.4481 11.2698 32.2032 11.3784C31.9584 11.487 31.7543 11.65 31.5638 11.8536C31.3869 12.0709 31.2373 12.3289 31.1284 12.6411C31.0196 12.9534 30.9652 13.32 30.9652 13.7274V17.2304H29.3325L29.3597 9.89846ZM41.1692 17.2711H39.5637V16.2392H39.5365C39.3325 16.6194 39.0331 16.9045 38.6386 17.1354C38.244 17.3662 37.8359 17.4748 37.4277 17.4748C36.4617 17.4748 35.7542 17.244 35.3189 16.7552C34.8835 16.28 34.6658 15.5468 34.6658 14.5828V9.89846H36.2985V14.4198C36.2985 15.0715 36.4209 15.5332 36.6794 15.7912C36.9243 16.0627 37.278 16.1985 37.727 16.1985C38.0672 16.1985 38.3529 16.1442 38.5842 16.0356C38.8155 15.9269 39.0059 15.7912 39.142 15.6147C39.2916 15.4381 39.3869 15.2209 39.4549 14.9765C39.5229 14.7321 39.5501 14.4606 39.5501 14.1754V9.89846H41.1828V17.2711H41.1692ZM43.9447 14.9086C43.9991 15.3838 44.176 15.7097 44.4889 15.9134C44.8018 16.1035 45.1828 16.1985 45.6181 16.1985C45.7678 16.1985 45.9447 16.1849 46.1351 16.1578C46.3256 16.1306 46.5161 16.0899 46.6793 16.022C46.8562 15.9541 46.9923 15.8591 47.1011 15.7233C47.21 15.5875 47.2644 15.4246 47.2508 15.2209C47.2372 15.0172 47.1691 14.8407 47.0195 14.7049C46.8698 14.5692 46.693 14.4741 46.4753 14.3791C46.2576 14.2976 45.9991 14.2297 45.7134 14.1754C45.4277 14.1211 45.1419 14.0532 44.8426 13.9853C44.5433 13.9174 44.244 13.836 43.9583 13.7409C43.6726 13.6459 43.4277 13.5237 43.1964 13.3472C42.9787 13.1843 42.7882 12.9806 42.6658 12.7226C42.5297 12.4646 42.4617 12.1659 42.4617 11.7858C42.4617 11.3784 42.5569 11.0526 42.761 10.781C42.9515 10.5095 43.21 10.2922 43.5093 10.1293C43.8086 9.96635 44.1488 9.84415 44.5161 9.77626C44.8834 9.70838 45.2372 9.68122 45.5637 9.68122C45.9447 9.68122 46.312 9.72196 46.6521 9.80342C46.9923 9.88489 47.3188 10.0071 47.5909 10.1972C47.8766 10.3737 48.1079 10.6181 48.2848 10.9032C48.4753 11.1883 48.5841 11.5414 48.6385 11.9487H46.9379C46.8562 11.5549 46.6793 11.297 46.4072 11.1612C46.1215 11.0254 45.8086 10.9575 45.4413 10.9575C45.3324 10.9575 45.1828 10.9711 45.0331 10.9847C44.8698 11.0118 44.7338 11.039 44.5841 11.0933C44.4481 11.1476 44.3256 11.2291 44.2304 11.3241C44.1351 11.4192 44.0807 11.5549 44.0807 11.7179C44.0807 11.9215 44.1488 12.0709 44.2848 12.1931C44.4209 12.3153 44.5977 12.4103 44.829 12.5054C45.0467 12.5868 45.3052 12.6547 45.5909 12.709C45.8766 12.7633 46.176 12.8312 46.4753 12.8991C46.7746 12.967 47.0603 13.0485 47.346 13.1435C47.6317 13.2386 47.8902 13.3608 48.1079 13.5373C48.3256 13.7002 48.5161 13.9039 48.6521 14.1483C48.7882 14.3927 48.8562 14.705 48.8562 15.058C48.8562 15.4925 48.761 15.8591 48.5569 16.1713C48.3528 16.47 48.0943 16.728 47.7814 16.9181C47.4685 17.1082 47.1011 17.244 46.7202 17.339C46.3256 17.4205 45.9447 17.4748 45.5637 17.4748C45.1011 17.4748 44.6658 17.4205 44.2712 17.3119C43.8766 17.2032 43.5229 17.0403 43.2372 16.8366C42.9515 16.6194 42.7202 16.3614 42.5569 16.0356C42.3937 15.7233 42.2984 15.3431 42.2848 14.895H43.9311V14.9086H43.9447ZM49.3188 9.89846H50.5569V7.67173H52.1895V9.88488H53.6589V11.0933H52.1895V15.0308C52.1895 15.2073 52.2031 15.3431 52.2167 15.4789C52.2303 15.6011 52.2712 15.7097 52.312 15.7912C52.3664 15.8726 52.448 15.9405 52.5433 15.9813C52.6521 16.022 52.7882 16.0491 52.9786 16.0491C53.0875 16.0491 53.2099 16.0491 53.3188 16.0356C53.4276 16.022 53.5501 16.0084 53.6589 15.9813V17.244C53.482 17.2711 53.3052 17.2847 53.1283 17.2983C52.9514 17.3254 52.7882 17.3254 52.5977 17.3254C52.1623 17.3254 51.8222 17.2847 51.5637 17.2032C51.3052 17.1218 51.1011 16.9996 50.9514 16.8502C50.8018 16.6873 50.7065 16.4972 50.6521 16.2664C50.5977 16.0356 50.5705 15.7504 50.5569 15.4517V11.1069H49.3188V9.87131V9.89846ZM54.8017 9.89846H56.3392V10.9032H56.3664C56.5977 10.4687 56.9106 10.17 57.3187 9.97993C57.7269 9.78984 58.1623 9.6948 58.6521 9.6948C59.2371 9.6948 59.7405 9.78984 60.1759 10.0071C60.6112 10.2108 60.965 10.4823 61.2507 10.8489C61.5364 11.2019 61.7541 11.6228 61.8901 12.098C62.0262 12.5733 62.1078 13.0892 62.1078 13.6187C62.1078 14.1211 62.0398 14.5963 61.9174 15.058C61.7813 15.5196 61.5908 15.9405 61.3323 16.2935C61.0738 16.6466 60.7473 16.9317 60.3391 17.1489C59.931 17.3662 59.4684 17.4748 58.9242 17.4748C58.6929 17.4748 58.448 17.4476 58.2167 17.4069C57.9854 17.3662 57.7541 17.2983 57.5364 17.2032C57.3187 17.1082 57.1147 16.986 56.9378 16.8366C56.7473 16.6873 56.5977 16.5108 56.4752 16.3207H56.448V20.0002H54.8154V9.89846H54.8017ZM60.5024 13.5916C60.5024 13.2657 60.4616 12.9399 60.3663 12.6276C60.2847 12.3153 60.1487 12.0437 59.9718 11.7993C59.7949 11.5549 59.5772 11.3649 59.3323 11.2155C59.0738 11.0661 58.7745 10.9983 58.448 10.9983C57.7677 10.9983 57.2507 11.2291 56.897 11.7043C56.5568 12.1795 56.38 12.8177 56.38 13.6052C56.38 13.9853 56.4208 14.3248 56.516 14.6371C56.6113 14.9493 56.7337 15.2209 56.9242 15.4517C57.1011 15.6825 57.3187 15.8591 57.5772 15.9948C57.8357 16.1306 58.1215 16.1985 58.4616 16.1985C58.8425 16.1985 59.1419 16.117 59.4004 15.9677C59.6589 15.8183 59.8629 15.6147 60.0398 15.3838C60.2031 15.1394 60.3255 14.8679 60.3936 14.5556C60.4616 14.2297 60.5024 13.9174 60.5024 13.5916ZM63.3731 7.08789H65.0058V8.62216H63.3731V7.08789ZM63.3731 9.89846H65.0058V17.2711H63.3731V9.89846ZM66.4615 7.08789H68.0942V17.2711H66.4615V7.08789ZM73.0737 17.4748C72.4887 17.4748 71.9581 17.3797 71.4955 17.1761C71.0329 16.9724 70.652 16.7144 70.3255 16.375C70.0125 16.0356 69.7676 15.6147 69.6044 15.1394C69.4411 14.6642 69.3459 14.1347 69.3459 13.578C69.3459 13.0213 69.4275 12.5054 69.6044 12.0302C69.7676 11.5549 70.0125 11.1476 70.3255 10.7946C70.6384 10.4551 71.0329 10.1836 71.4955 9.99351C71.9581 9.80342 72.4887 9.6948 73.0737 9.6948C73.6588 9.6948 74.1894 9.78984 74.652 9.99351C75.1146 10.1836 75.4955 10.4551 75.822 10.7946C76.135 11.134 76.3798 11.5549 76.5431 12.0302C76.7064 12.5054 76.8016 13.0213 76.8016 13.578C76.8016 14.1483 76.72 14.6642 76.5431 15.1394C76.3662 15.6147 76.135 16.022 75.822 16.375C75.5091 16.7144 75.1146 16.986 74.652 17.1761C74.1894 17.3662 73.6724 17.4748 73.0737 17.4748ZM73.0737 16.1849C73.4275 16.1849 73.754 16.1034 74.0125 15.9541C74.2846 15.8047 74.4887 15.6011 74.6656 15.3567C74.8424 15.1123 74.9649 14.8272 75.0465 14.5284C75.1282 14.2162 75.169 13.9039 75.169 13.578C75.169 13.2657 75.1282 12.9534 75.0465 12.6411C74.9649 12.3289 74.8424 12.0573 74.6656 11.8129C74.4887 11.5685 74.271 11.3784 74.0125 11.2291C73.7404 11.0797 73.4275 10.9983 73.0737 10.9983C72.72 10.9983 72.3935 11.0797 72.135 11.2291C71.8629 11.3784 71.6588 11.5821 71.4819 11.8129C71.3051 12.0573 71.1826 12.3289 71.101 12.6411C71.0193 12.9534 70.9785 13.2657 70.9785 13.578C70.9785 13.9039 71.0193 14.2162 71.101 14.5284C71.1826 14.8407 71.3051 15.1123 71.4819 15.3567C71.6588 15.6011 71.8765 15.8047 72.135 15.9541C72.4071 16.117 72.72 16.1849 73.0737 16.1849ZM77.2914 9.89846H78.5295V7.67173H80.1621V9.88488H81.6315V11.0933H80.1621V15.0308C80.1621 15.2073 80.1758 15.3431 80.1894 15.4789C80.203 15.6011 80.2438 15.7097 80.2846 15.7912C80.339 15.8726 80.4206 15.9405 80.5159 15.9813C80.6247 16.022 80.7608 16.0491 80.9513 16.0491C81.0601 16.0491 81.1825 16.0491 81.2914 16.0356C81.4002 16.022 81.5227 16.0084 81.6315 15.9813V17.244C81.4547 17.2711 81.2778 17.2847 81.1009 17.2983C80.924 17.3254 80.7608 17.3254 80.5703 17.3254C80.1349 17.3254 79.7948 17.2847 79.5363 17.2032C79.2778 17.1218 79.0737 16.9996 78.924 16.8502C78.7744 16.6873 78.6792 16.4972 78.6247 16.2664C78.5703 16.0356 78.5431 15.7504 78.5295 15.4517V11.1069H77.2914V9.87131V9.89846Z" fill="black"/>
              <path d="M19.5509 7.08754H12.0816L9.78225 0L7.46934 7.08754L0 7.07396L6.04078 11.4595L3.72787 18.5471L9.76865 14.1615L15.8094 18.5471L13.5101 11.4595L19.5509 7.08754Z" fill="#00B67A"/>
              <path d="M14.0261 13.0616L13.5091 11.4595L9.78125 14.1614L14.0261 13.0616Z" fill="#005128"/>
            </svg>
            <span style="text-decoration: none">4.9/5 rating</span></a>
            <div class="nav__btns">
              <!-- <a href="/wow-shadowlands/calendar" class="nav__btn">
                <img src="/icons/calendar.svg" alt="" />
                <span>Events calendar</span>
              </a> -->
              <a
                class="nav__btn"
                href="/page/contact-us"
                style="text-decoration: none"
              >
                <button
                  style="display: none !important; height: 44px"
                  class="nav__btn"
                >
                  <span>Contact us</span>
                </button>
                <span>Contact us</span>
              </a>
            </div>
          </li>
          <li class="nav__item">
            <a
              v-if="!this.$store.getters['getUserLoginCheck'].user_check_login"
              @click="user_m_window = true"
              class="nav__btn nav__mobile_disable"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00026 9.00049C7.00026 6.23906 9.23883 4.00049 12.0003 4.00049C14.7617 4.00049 17.0003 6.23906 17.0003 9.00049C17.0003 11.7619 14.7617 14.0005 12.0003 14.0005C9.23883 14.0005 7.00026 11.7619 7.00026 9.00049ZM12.0003 2.00049C8.13426 2.00049 5.00026 5.1345 5.00026 9.00049C5.00026 11.3849 6.19243 13.4909 8.01322 14.7548C5.30275 15.8252 3.14145 17.9553 2.07181 20.6291C1.86667 21.1418 2.11606 21.7238 2.62884 21.9289C3.14161 22.1341 3.72359 21.8847 3.92873 21.3719C5.18267 18.2374 8.31627 16.0005 12.0003 16.0005C15.6843 16.0005 18.8179 18.2374 20.0718 21.3719C20.2769 21.8847 20.8589 22.1341 21.3717 21.9289C21.8845 21.7238 22.1339 21.1418 21.9287 20.6291C20.8591 17.9553 18.6978 15.8252 15.9873 14.7548C17.8081 13.4909 19.0003 11.3849 19.0003 9.00049C19.0003 5.1345 15.8663 2.00049 12.0003 2.00049Z" fill="#2F3639"/>
              </svg>
              <span>Log in</span>
            </a>
            <a
              v-if="this.$store.getters['getUserLoginCheck'].user_check_login"
              class="nav__link nav__mobile_disable"
              @click="user_m_window = true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00026 9.00049C7.00026 6.23906 9.23883 4.00049 12.0003 4.00049C14.7617 4.00049 17.0003 6.23906 17.0003 9.00049C17.0003 11.7619 14.7617 14.0005 12.0003 14.0005C9.23883 14.0005 7.00026 11.7619 7.00026 9.00049ZM12.0003 2.00049C8.13426 2.00049 5.00026 5.1345 5.00026 9.00049C5.00026 11.3849 6.19243 13.4909 8.01322 14.7548C5.30275 15.8252 3.14145 17.9553 2.07181 20.6291C1.86667 21.1418 2.11606 21.7238 2.62884 21.9289C3.14161 22.1341 3.72359 21.8847 3.92873 21.3719C5.18267 18.2374 8.31627 16.0005 12.0003 16.0005C15.6843 16.0005 18.8179 18.2374 20.0718 21.3719C20.2769 21.8847 20.8589 22.1341 21.3717 21.9289C21.8845 21.7238 22.1339 21.1418 21.9287 20.6291C20.8591 17.9553 18.6978 15.8252 15.9873 14.7548C17.8081 13.4909 19.0003 11.3849 19.0003 9.00049C19.0003 5.1345 15.8663 2.00049 12.0003 2.00049Z" fill="#2F3639"/>
              </svg>
            </a>
            <a
              v-if="this.$store.getters['getUserLoginCheck'].user_check_login"
              class="nav__link nav__mobile_disable"
              @click.self="
                open_notification_popup = open_notification_popup ? false : true
              "
            >
              <svg @click.self="
                  open_notification_popup = open_notification_popup
                    ? false
                    : true
                " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M17.0789 6.38538L17.0789 6.38539C17.0997 6.4353 17.1198 6.48558 17.1392 6.53625L17.1418 6.5432L17.1446 6.55011C17.5548 7.57644 17.5638 8.75391 17.5082 10.1034C17.5027 10.2351 17.5 10.3675 17.5 10.5005C17.5 13.547 18.9352 16.2589 21.1623 17.9957C21.1643 17.9973 21.1664 17.9989 21.1684 18.0005H2.83162C2.83364 17.9989 2.83566 17.9973 2.8377 17.9957C5.06481 16.2589 6.5 13.547 6.5 10.5005C6.5 10.3675 6.49726 10.2351 6.49184 10.1034C6.43625 8.75391 6.44524 7.57644 6.85541 6.55011L6.85817 6.5432L6.86083 6.53625C6.88021 6.48559 6.90031 6.4353 6.92112 6.38538C7.75079 4.39586 9.71361 3.00049 12 3.00049C14.2864 3.00049 16.2492 4.39586 17.0789 6.38538Z" stroke="#2F3639" stroke-width="2"/>
                <path d="M12.5 22.0005C13.9806 22.0005 15.2733 21.1961 15.9649 20.0005H9.03516C9.72678 21.1961 11.0195 22.0005 12.5 22.0005Z" fill="#2F3639"/>
              </svg>
              <div
                @click.self="
                  open_notification_popup = open_notification_popup
                    ? false
                    : true
                "
                class="nav__count"
                v-if="notification_enable"
              >
                <span>{{notifications.length}}</span>
              </div>
              <div
                class="header_menu_mask"
                @click="open_notification_popup = false"
                v-if="open_notification_popup"
              ></div>
              <div
                v-if="open_notification_popup"
                style="right: 9px"
                class="divTriangle"
              ></div>
              <div v-if="open_notification_popup" style="right:-80px;" class="notificationHover">
                <div>
                  Receive notifications on your
                  <br />
                  Computer or Phone
                  <br />
                  <button v-if="!notification_enable" @click="notification_view_change()">Enable notifications</button>
                  <button v-else @click="notification_view_change()">Disabled notifications</button>
                </div>
                <div class="fillProfile">
                  <div>
                    Fill your account to <span>80%</span> to get
                    <span><a href="">100 Cakecoins</a></span>
                  </div>
                  <div class="fillPercent">
                    <div>{{ user.percent }}%</div>
                    <div>
                      <div
                        v-bind:style="{ width: user.percent + '%' }"
                        class="fillLine"
                      ></div>
                      <div
                        class="percent_circle"
                        v-bind:style="{ left: user.percent - 2 + '%' }"
                      ></div>
                      <div
                        v-bind:style="{ width: 100 - user.percent + '%' }"
                        class="notFillLine"
                      ></div>
                    </div>
                  </div>
                  <div class="showLessFill">
                    <span
                      v-if="notification_popup_more"
                      @click="notification_popup_more = false"
                    >
                      Show less
                      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1 6L4 3L7 6" stroke="#828688" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </span>
                    <span
                      v-if="!notification_popup_more"
                      @click="notification_popup_more = true"
                    >
                      Show more
                      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1 3L4 6L7 3" stroke="#828688" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </span>
                  </div>
                  <div v-if="notification_popup_more" class="yetToFill">
                    <div
                      v-if="
                        this.user.nofields && this.user.nofields.length != 0
                      "
                    >
                      Yet to fill:
                    </div>
                    <div
                      v-if="
                        this.user.nofields && this.user.nofields.length != 0
                      "
                    >
                      <div
                        v-for="(item, index) in this.user.nofields"
                        v-if="item != ''"
                        :key="index"
                      >
                        {{ item }}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="notificationItem" v-if="notification_enable" style="right:-80px;" v-for="item in notifications" :key="item.id">
                  <div>
                    <div>
                      <img :src="apiImg + 'notification/' + item.fields.img" alt />
                    </div>
                    <div>
                      <div class="notificationDate">{{item.date.split(' ')[0]}}</div>
                      <div class="notificationName">
                        {{item.fields.title}}
                      </div>
                    </div>
                  </div>
                  <div class="notificationText">
                    {{item.fields.description}}
                  </div>
                  <div class="notificationButton">
                    <a v-if="item.fields.slug != ''" :href="item.fields.slug"> Go to the page </a>
                    <span @click="delete_notifications(item.id)"> Delete </span>
                  </div>
                </div>
              </div>
            </a>

            <a
              class="nav__link nav__mobile_enable"
              style="display: none"
              @click="user_m_window = true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.00026 9.00049C7.00026 6.23906 9.23883 4.00049 12.0003 4.00049C14.7617 4.00049 17.0003 6.23906 17.0003 9.00049C17.0003 11.7619 14.7617 14.0005 12.0003 14.0005C9.23883 14.0005 7.00026 11.7619 7.00026 9.00049ZM12.0003 2.00049C8.13426 2.00049 5.00026 5.1345 5.00026 9.00049C5.00026 11.3849 6.19243 13.4909 8.01322 14.7548C5.30275 15.8252 3.14145 17.9553 2.07181 20.6291C1.86667 21.1418 2.11606 21.7238 2.62884 21.9289C3.14161 22.1341 3.72359 21.8847 3.92873 21.3719C5.18267 18.2374 8.31627 16.0005 12.0003 16.0005C15.6843 16.0005 18.8179 18.2374 20.0718 21.3719C20.2769 21.8847 20.8589 22.1341 21.3717 21.9289C21.8845 21.7238 22.1339 21.1418 21.9287 20.6291C20.8591 17.9553 18.6978 15.8252 15.9873 14.7548C17.8081 13.4909 19.0003 11.3849 19.0003 9.00049C19.0003 5.1345 15.8663 2.00049 12.0003 2.00049Z" fill="#2F3639"></path></svg>
            </a>
            <a
              @click.self="
                open_notification_popup = open_notification_popup ? false : true
              "
              v-if="this.$store.getters['getUserLoginCheck'].user_check_login"
              class="nav__link nav__mobile_enable"
              style="display: none"
            >
              <svg @click.self="
                  open_notification_popup = open_notification_popup
                    ? false
                    : true
                " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17.0789 6.38538L17.0789 6.38539C17.0997 6.4353 17.1198 6.48558 17.1392 6.53625L17.1418 6.5432L17.1446 6.55011C17.5548 7.57644 17.5638 8.75391 17.5082 10.1034C17.5027 10.2351 17.5 10.3675 17.5 10.5005C17.5 13.547 18.9352 16.2589 21.1623 17.9957C21.1643 17.9973 21.1664 17.9989 21.1684 18.0005H2.83162C2.83364 17.9989 2.83566 17.9973 2.8377 17.9957C5.06481 16.2589 6.5 13.547 6.5 10.5005C6.5 10.3675 6.49726 10.2351 6.49184 10.1034C6.43625 8.75391 6.44524 7.57644 6.85541 6.55011L6.85817 6.5432L6.86083 6.53625C6.88021 6.48559 6.90031 6.4353 6.92112 6.38538C7.75079 4.39586 9.71361 3.00049 12 3.00049C14.2864 3.00049 16.2492 4.39586 17.0789 6.38538Z" stroke="#2F3639" stroke-width="2"></path> <path d="M12.5 22.0005C13.9806 22.0005 15.2733 21.1961 15.9649 20.0005H9.03516C9.72678 21.1961 11.0195 22.0005 12.5 22.0005Z" fill="#2F3639"></path></svg>
              <div
                @click.self="
                  open_notification_popup = open_notification_popup
                    ? false
                    : true
                "
                class="nav__count"
                v-if="notification_enable"
              >
                <span >{{notifications.length}}</span>
              </div>
              <div
                v-if="open_notification_popup"
                style="right: 9px"
                class="divTriangle"
              ></div>
              <div
                class="header_menu_mask"
                @click="open_notification_popup = false"
                v-if="open_notification_popup"
              ></div>
              <div v-if="open_notification_popup" style="right:-80px;" class="notificationHover">
                <div>
                  Receive notifications on your
                  <br />
                  Computer or Phone
                  <br />
                  <button v-if="!notification_enable" @click="notification_view_change()">Enable notifications</button>
                  <button v-else @click="notification_view_change()">Disabled notifications</button>
                </div>
                <div class="fillProfile">
                  <div>
                    Fill your account to <span>80%</span> to get
                    <span><a href="">100 Cakecoins</a></span>
                  </div>
                  <div class="fillPercent">
                    <div>{{ user.percent }}%</div>
                    <div>
                      <div
                        v-bind:style="{ width: user.percent + '%' }"
                        class="fillLine"
                      ></div>
                      <div
                        class="percent_circle"
                        v-bind:style="{ left: user.percent - 2 + '%' }"
                      ></div>
                      <div
                        v-bind:style="{ width: 100 - user.percent + '%' }"
                        class="notFillLine"
                      ></div>
                    </div>
                  </div>
                  <div class="showLessFill">
                    <span
                      v-if="notification_popup_more"
                      @click="notification_popup_more = false"
                    >
                      Show less
                      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1 6L4 3L7 6" stroke="#828688" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </span>
                    <span
                      v-if="!notification_popup_more"
                      @click="notification_popup_more = true"
                    >
                      Show more
                      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1 3L4 6L7 3" stroke="#828688" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </span>
                  </div>
                  <div v-if="notification_popup_more" class="yetToFill">
                    <div
                      v-if="
                        this.user.nofields && this.user.nofields.length != 0
                      "
                    >
                      Yet to fill:
                    </div>
                    <div
                      v-if="
                        this.user.nofields && this.user.nofields.length != 0
                      "
                    >
                      <div
                        v-for="(item, index) in this.user.nofields"
                        v-if="item != ''"
                        :key="index"
                      >
                        {{ item }}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="notificationItem" v-if="notification_enable"  v-for="item in notifications" :key="item.id">
                  <div>
                    <div>
                      <img :src="apiImg + 'notification/' + item.fields.img" alt />
                    </div>
                    <div>
                      <div class="notificationDate">{{item.date.split(' ')[0]}}</div>
                      <div class="notificationName">
                        {{item.fields.title}}
                      </div>
                    </div>
                  </div>
                  <div class="notificationText">
                    {{item.fields.description}}
                  </div>
                  <div class="notificationButton">
                    <a v-if="item.fields.slug != ''" :href="item.fields.slug"> Go to the page </a>
                    <span @click="delete_notifications(item.id)"> Delete </span>
                  </div>
                </div>
              </div>
            </a>
            <div
              class="header_menu_mask"
              @click="user_m_window = false"
              v-if="user_m_window"
            ></div>
            <div class="logRegHover" v-if="user_m_window">
              <div>You account</div>
              <div>What do you want to do?</div>
              <button
                id="regButton"
                v-if="
                  !this.$store.getters['getUserLoginCheck'].user_check_login
                "
                @click="(registration_pop_up = true), body_set_hidden()"
              >
                Registration
              </button>
              <button
                v-if="
                  !this.$store.getters['getUserLoginCheck'].user_check_login
                "
                id="logButton"
                @click="
                  (login_pop_up = true),
                    body_set_hidden(),
                    $store.commit('set_global_login_popup_check', true)
                "
              >
                Login
              </button>

              <a
                id="regButtonHref"
                v-if="this.$store.getters['getUserLoginCheck'].user_check_login"
                v-bind:href="
                  '/page/account/' +
                  this.$store.getters['getUserLoginCheck'].id
                "
                >Go to account</a
              >
              <button
                v-if="this.$store.getters['getUserLoginCheck'].user_check_login"
                id="logButton"
                @click="logout()"
              >
                Logout
              </button>
              <div style="top: -11px; right: 108px" class="divTriangle"></div>
            </div>
          </li>
          <li class="nav__item borders__left">
            <a @click.self="favorite_m_window = true" class="nav__link">
              <svg @click.self="favorite_m_window = true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M10.2137 8.55735L12 3.05317L13.7863 8.55735L14.7375 8.24866L13.7863 8.55736C13.9909 9.18762 14.578 9.6154 15.2417 9.6154H21.0256L16.3453 13.0198C15.8091 13.4098 15.5853 14.1005 15.7898 14.7306L17.5769 20.2371L12.8998 16.8351C12.3634 16.4448 11.6366 16.4448 11.1002 16.8351L6.42308 20.2371L8.21019 14.7306C8.41467 14.1005 8.19087 13.4098 7.65467 13.0198L2.97436 9.6154H8.75831C9.42196 9.6154 10.0091 9.18762 10.2137 8.55735Z" stroke="#2F3639" stroke-width="2"/>
              </svg>
              <div class="nav__count">
                <span>{{ favorite.length }}</span>
              </div>
              <div
                class="divTriangle"
                style="left: 9px"
                v-if="favorite_m_window"
              ></div>
              <div class="favorite" v-if="favorite_m_window">
                <div v-for="(item, index) in this.favorite" :key="item.id">
                  <img :src="apiImg + 'sku/' + item.image" alt />
                  <div>
                    <a
                      @click="set_global_game_favorite(item.game)"
                      v-bind:href="
                        '/' +
                        testGameList(item.game) +
                        '/service/' +
                        item.slug +
                        '&' +
                        item.id
                      "
                      >{{ item.title }}</a
                    >
                    <div @click="delete_favor_byID(index)">Delete</div>
                  </div>
                </div>
                <div class="cardHoverTotal">
                  <span></span>
                  <span></span>
                  <span>
                    <a :style="{'text-align': 'center', 'width' : '100%'}" v-bind:href="'/page/favorite'">Watch all favourite items</a>
                  </span>
                </div>
              </div>
              <div
                class="header_menu_mask"
                @click="favorite_m_window = false"
                v-if="favorite_m_window"
              ></div>
            </a>
            <a
              @click.self="cart_m_window = true"
              class="nav__link"
              v-if="this.$store.getters['getCard'].cart_items.length > 0"
            >
              <svg @click.self="cart_m_window = true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.57859 2.31425C3.84083 1.89969 5.28165 1.96227 6.21376 2.12511C6.26148 2.13344 6.30854 2.14524 6.35455 2.1604L21.2123 7.05496C22.2993 7.41304 23.0879 8.35838 23.2452 9.49197L23.6748 12.5881C23.9251 14.3917 22.5241 16.0005 20.7033 16.0005H9.59026C8.10992 16.0005 6.85088 14.9207 6.6253 13.4576L5.16922 4.01409C4.53051 3.9741 3.80438 4.01677 3.20266 4.21439C2.79505 4.34826 2.50224 4.53411 2.31429 4.75586C2.13981 4.96173 2 5.26245 2 5.75247C2 6.30476 1.55228 6.75247 1 6.75247C0.447715 6.75247 0 6.30476 0 5.75247C0 4.83328 0.280325 4.06241 0.788571 3.46274C1.28335 2.87897 1.93585 2.52534 2.57859 2.31425ZM7.27865 4.57055L20.5865 8.95454C20.9489 9.0739 21.2117 9.38901 21.2642 9.76688L21.6938 12.863C21.7772 13.4642 21.3102 14.0005 20.7033 14.0005H9.59026C9.09682 14.0005 8.67713 13.6405 8.60194 13.1529L7.27865 4.57055ZM11 19.0005C10.4477 19.0005 10 19.4482 10 20.0005C10 20.5528 10.4477 21.0005 11 21.0005C11.5523 21.0005 12 20.5528 12 20.0005C12 19.4482 11.5523 19.0005 11 19.0005ZM8 20.0005C8 18.3436 9.34315 17.0005 11 17.0005C12.6569 17.0005 14 18.3436 14 20.0005C14 21.6573 12.6569 23.0005 11 23.0005C9.34315 23.0005 8 21.6573 8 20.0005ZM19 20.0005C19 19.4482 19.4477 19.0005 20 19.0005C20.5523 19.0005 21 19.4482 21 20.0005C21 20.5528 20.5523 21.0005 20 21.0005C19.4477 21.0005 19 20.5528 19 20.0005ZM20 17.0005C18.3431 17.0005 17 18.3436 17 20.0005C17 21.6573 18.3431 23.0005 20 23.0005C21.6569 23.0005 23 21.6573 23 20.0005C23 18.3436 21.6569 17.0005 20 17.0005Z" fill="#2F3639"/>
              </svg>
              <div class="nav__count">
                <span
                  v-if="this.$store.getters['getCard'].cart_items.length == 0"
                  >0</span
                >
                <span v-else>{{
                  this.$store.getters["getCard"].cart_items.length
                }}</span>
              </div>
              <div
                class="header_menu_mask"
                @click="cart_m_window = false"
                v-if="cart_m_window"
              ></div>
              <div
                v-if="
                  this.$store.getters['getCard'].cart_items.length > 0 &&
                  cart_m_window
                "
                class="divTriangle"
              ></div>
              <div
                class="cardHover"
                v-if="
                  this.$store.getters['getCard'].cart_items.length > 0 &&
                  cart_m_window
                "
              >
                <div
                  class="cardHoverItem"
                  v-for="(item, index) in this.$store.getters['getCard']
                    .cart_items"
                  :key="index"
                >
                  <div>
                    <div>
                      <img
                        class="banner_header_sku_img"
                        :src="apiImg + 'sku/' + item.product.image"
                        alt
                      />
                    </div>
                    <div v-html="item.product.menu_name"></div>
                  </div>
                  <div
                    class="cardItemOptions"
                    v-if="
                      item.subcheckbox_list.length != 0 ||
                      item.checkbox_list.length != 0 ||
                      item.single_slider.length != 0 ||
                      item.double_slider.length != 0 ||
                      item.product.raid_enable != 0
                    "
                  >
                    <span v-if="item.product.raid_enable != 0 && item.event.event_date != null">
                      <strong>Raid time:</strong>
                      {{ get_cart_format_time(item.event.event_date) }} @
                      <span v-if="item.event.times.time_edt != ''"
                        >{{ item.event.times.time_edt }} EDT</span
                      >
                      <span v-if="item.event.times.time_cest != ''"
                        >{{ item.event.times.time_cest }} CEST</span
                      >
                    </span>
                    <span
                      v-for="(subitem, index) in item.subcheckbox_list"
                      :key="index"
                      v-html="subitem.title"
                    ></span>

                    <span
                      v-for="(subitem, index) in item.checkbox_list"
                      :key="index"
                      v-html="subitem.array.title"
                    ></span>

                    <span
                      v-for="subitem in item.single_slider"
                      :key="subitem.title"
                      >{{ subitem.choosen_price }} {{ subitem.title }} :
                      {{ subitem.real_value }}</span
                    >

                    <span
                      v-for="subitem in item.double_slider"
                      :key="subitem.title"
                      >{{ subitem.choosen_price }} {{ subitem.slider_title }} :
                      {{ subitem.title.replace(";", " - ") }}</span
                    >

                    <span v-for="subitem in item.calc" :key="subitem.title">
                      <span v-html="subitem.array.title"></span> :
                      {{
                        parseFloat(subitem.array.min) +
                        parseFloat(
                          parseFloat(subitem.array.step) *
                            parseFloat(subitem.count)
                        )
                      }}</span
                    >
                  </div>
                  <div class="cardItemPrice">
                    <span v-if="$store.getters['getSelectedZone'] == 'us'">
                      {{
                        (
                          (parseFloat(item.product.price_usd) +
                            parseFloat(item.option_total_us)) *
                          parseFloat(item.count)
                        ).toFixed(2)
                      }}$
                      <span>x{{ item.count }}</span>
                    </span>
                    <span v-if="$store.getters['getSelectedZone'] == 'eu'">
                      {{
                        (
                          (parseFloat(item.product.price_eur) +
                            parseFloat(item.option_total_eu)) *
                          parseFloat(item.count)
                        ).toFixed(2)
                      }}€
                      <span>x{{ item.count }}</span>
                    </span>
                    <span>
                      <!--a href>Edit options</!--a-->
                      <span @click="delete_cart_item(index)">Delete</span>
                    </span>
                  </div>
                </div>
                <div
                  class="cardHoverTotal"
                  v-if="this.$store.getters['getCard'].cart_items.length > 0"
                >
                  <span>Total</span>
                  <span v-if="$store.getters['getSelectedZone'] == 'us'">
                    {{ this.$store.getters["getCard"].total_price_us }}$
                    <span v-if="this.$store.getters['getCard'].sales"
                      >{{ this.$store.getters["getCard"].total_sale_us }}$</span
                    >
                  </span>
                  <span v-if="$store.getters['getSelectedZone'] == 'eu'">
                    {{ this.$store.getters["getCard"].total_price_eu }}€
                    <span v-if="this.$store.getters['getCard'].sales"
                      >{{ this.$store.getters["getCard"].total_sale_eu }}€</span
                    >
                  </span>
                  <span>
                    <a v-bind:href="'/page/make-an-order'">Make an order</a>
                  </span>
                </div>
              </div>
            </a>
          </li>
          <div class="nav_sub_header">
            <img src="" alt="" />
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
        </ul>
      </header>
      <div class="banner_main">
        <div>
          <div class="banner_logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="208" height="85" viewBox="0 0 208 85" fill="none">
              <path d="M207.164 18.8512H192.318C185.357 18.8512 182.179 21.2663 180.829 27.7124C178.964 36.7157 176.816 42.3627 187.346 42.3627H202.192C202.867 42.3627 203.275 42.0253 203.399 41.3505L204.34 36.982C204.465 36.3072 204.198 35.9698 203.541 35.9698H188.784C186.352 35.9698 186.121 35.3305 186.529 33.3239H203.897C204.571 33.3239 204.98 32.9865 205.104 32.3117L205.868 28.7246C206.01 28.0498 205.743 27.7124 205.069 27.7124H187.701C188.198 25.6702 188.838 25.2263 191.058 25.2263H205.814C206.489 25.2263 206.88 24.8889 207.022 24.2141L207.963 19.8456C208.105 19.1886 207.839 18.8512 207.164 18.8512Z" fill="white"/>
              <path d="M201.535 48.6667H181.806C181.308 48.6667 181.006 48.9154 180.9 49.4303L180.172 52.8221C180.065 53.3193 180.278 53.5857 180.776 53.5857H188.003L185.464 65.5368C185.357 66.034 185.57 66.2826 186.067 66.2826H189.85C190.347 66.2826 190.649 66.034 190.756 65.5368L193.295 53.5857H200.522C201.02 53.5857 201.321 53.3371 201.428 52.8221L202.156 49.4303C202.227 48.9154 202.032 48.6667 201.535 48.6667Z" fill="white"/>
              <path d="M151.067 42.3627H156.11C156.785 42.3627 157.175 42.0253 157.317 41.3505L159.058 33.1109C164.261 33.1109 164.527 32.88 165.095 34.052L169.126 41.8122C169.517 42.5226 169.357 42.345 176.247 42.345C177.118 42.345 177.189 41.5104 177.047 41.244C171.861 31.9033 171.648 31.264 170.458 30.1808C171.186 29.577 171.328 29.3995 180.705 19.8279C181.042 19.455 181.078 18.8157 180.367 18.8157C173.495 18.8157 173.744 18.6559 173.104 19.3485L166.054 26.8778C165.007 28.0321 164.758 27.819 160.141 27.819L161.863 19.8279C162.006 19.1531 161.757 18.8157 161.082 18.8157H156.074C155.4 18.8157 154.973 19.1531 154.831 19.8279L150.268 41.3328C150.125 42.0431 150.392 42.3627 151.067 42.3627Z" fill="white"/>
              <path d="M178.911 48.6667H165.824C162.574 48.6667 160.567 50.407 160.017 52.9997C159.52 55.3437 159.466 55.7699 159.466 56.1783C159.466 58.3271 160.852 59.5168 163.444 59.5168H172.11C172.465 59.5168 172.607 59.6766 172.607 59.9785C172.607 60.6356 172.376 61.5057 171.648 61.5057H158.987C158.49 61.5057 158.188 61.7543 158.081 62.2693L157.371 65.5368C157.264 66.034 157.478 66.2826 157.975 66.2826H171.702C174.951 66.2826 176.94 64.5423 177.491 61.9497C178.024 59.4813 178.077 59.0374 178.077 58.6289C178.077 56.5157 176.709 55.3082 174.117 55.3082H165.469C165.114 55.3082 164.971 55.1661 164.971 54.8643C164.971 54.2072 165.167 53.4614 165.877 53.4614H177.899C178.396 53.4614 178.734 53.2128 178.823 52.6978L179.497 49.4303C179.586 48.9154 179.426 48.6667 178.911 48.6667Z" fill="white"/>
              <path d="M151.368 48.6667H143.431C138.228 48.6667 135.83 50.478 134.818 55.3082C133.415 62.0562 131.817 66.2826 139.701 66.2826H147.639C152.842 66.2826 155.24 64.4713 156.252 59.6411C157.335 54.4026 157.442 53.6034 157.442 52.8931C157.442 49.8388 155.613 48.6667 151.368 48.6667ZM151.049 59.2327C150.64 61.115 150.25 61.5057 148.456 61.5057H140.927C139.613 61.5057 139.115 61.2749 139.115 60.4225C139.115 60.1206 139.186 59.7477 140.039 55.7166C140.447 53.8343 140.838 53.4614 142.631 53.4614H150.161C151.475 53.4614 151.972 53.6922 151.972 54.5446C151.972 54.8287 151.901 55.2017 151.049 59.2327Z" fill="white"/>
              <path d="M116.954 42.3627C123.684 42.3627 123.684 42.5581 124.181 41.83L126.632 38.2962H140.003L141.016 41.83C141.122 42.2384 141.318 42.3627 141.85 42.3627H147.799C148.545 42.3627 148.74 41.9188 148.581 41.3505L142.756 22.243C141.921 19.4905 140.678 18.8512 138.387 18.8512C134.712 18.8512 133.131 18.3895 130.361 22.243L116.616 41.3505C116.208 41.9365 116.208 42.3627 116.954 42.3627ZM131.426 31.4416C131.497 31.3351 131.586 31.2107 131.657 31.1042C131.817 30.8911 131.959 30.678 132.101 30.4649C132.154 30.3761 132.225 30.2873 132.279 30.1985C132.279 30.1808 132.297 30.1808 132.297 30.163C132.314 30.1453 132.332 30.1275 132.332 30.1098C132.368 30.0565 132.385 30.021 132.421 29.9677C134.161 27.4461 134.96 26.2918 135.351 25.7768C135.173 26.0077 134.907 26.3806 134.516 26.9488C134.907 26.3806 135.173 26.0254 135.351 25.7768C135.369 25.7591 135.386 25.7413 135.404 25.7236C135.422 25.7058 135.44 25.688 135.457 25.6703C135.671 25.4039 135.742 25.3506 135.813 25.3506C135.848 25.3506 135.866 25.3506 135.901 25.3506C136.043 25.3506 136.168 25.3329 136.257 25.4039C136.31 25.4394 136.345 25.4927 136.363 25.5992L136.434 25.8656L137.784 30.5715C137.837 30.7668 137.89 30.9444 137.944 31.1575L138.476 33.022H130.308C130.716 32.4538 131.089 31.9388 131.426 31.4416Z" fill="white"/>
              <path d="M126.685 48.6667H118.765C113.562 48.6667 111.165 50.478 110.152 55.3082C108.75 62.0562 107.151 66.2826 115.036 66.2826H122.974C128.177 66.2826 130.574 64.4713 131.586 59.6411C132.67 54.4026 132.776 53.6034 132.776 52.8931C132.758 49.8388 130.911 48.6667 126.685 48.6667ZM126.365 59.2327C125.957 61.115 125.566 61.5057 123.773 61.5057H116.243C114.929 61.5057 114.432 61.2749 114.432 60.4225C114.432 60.1206 114.503 59.7477 115.356 55.7166C115.764 53.8343 116.155 53.4614 117.948 53.4614H125.478C126.792 53.4614 127.289 53.6922 127.289 54.5446C127.289 54.8287 127.218 55.2017 126.365 59.2327Z" fill="white"/>
              <path d="M98.7876 42.3627H114.006C114.681 42.3627 115.089 42.0253 115.214 41.3505L116.19 36.8222C116.315 36.1474 116.048 35.81 115.391 35.81H100.439C98.6988 35.81 98.024 35.5081 98.024 34.3716C98.024 33.9632 98.1306 33.466 99.1961 28.4227C99.7288 25.9011 100.262 25.4039 102.659 25.4039H117.611C118.286 25.4039 118.694 25.0665 118.819 24.3917L119.795 19.8634C119.937 19.1886 119.671 18.8512 118.996 18.8512H103.778C96.8165 18.8512 93.6378 21.2663 92.2882 27.7124C90.4059 36.7334 88.2572 42.3627 98.7876 42.3627Z" fill="white"/>
              <path d="M104.239 48.6667H89.4112C88.914 48.6667 88.5766 48.9154 88.4878 49.4303L85.0605 65.5368C84.9539 66.034 85.167 66.2826 85.6643 66.2826H101.096C104.434 66.2826 105.926 64.4535 106.477 61.7011C106.832 59.9785 107.293 58.3981 105.944 57.1728C106.956 56.4625 107.684 55.4325 107.95 54.1362C108.306 52.4492 108.359 51.9875 108.359 51.5613C108.359 49.6079 107.151 48.6667 104.239 48.6667ZM101.433 60.7599C101.309 61.2926 100.989 61.5412 100.35 61.5412H91.5244C91.5066 61.5412 91.4889 61.5412 91.4533 61.5412C91.4178 61.5412 91.3823 61.5235 91.3468 61.5235C91.2225 61.4702 91.2225 61.2926 91.3113 60.8487C91.3468 60.6711 91.4001 60.458 91.4533 60.1916C91.5066 59.9253 91.5776 59.6056 91.6664 59.2327H100.83C100.954 59.2327 101.06 59.2505 101.131 59.2682C101.185 59.286 101.22 59.286 101.273 59.3037C101.327 59.3215 101.362 59.3393 101.398 59.3748C101.416 59.3925 101.433 59.3925 101.451 59.4103C101.735 59.6589 101.575 60.1916 101.433 60.7599ZM102.73 54.7755C102.623 55.2727 102.268 55.5391 101.646 55.5391H92.4655C92.5543 55.1306 92.6254 54.7932 92.6786 54.5269C92.6786 54.4913 92.6964 54.4558 92.6964 54.4203C92.874 53.5502 92.9273 53.4081 93.2647 53.4081H102.09C102.623 53.4081 102.872 53.6034 102.872 53.9586C102.872 54.0296 102.872 54.0651 102.73 54.7755Z" fill="white"/>
              <path d="M25.6424 78.6953C30.1529 77.6831 34.5569 75.783 38.4636 73.581C63.0938 59.6944 80.2835 28.0853 73.0916 10.3451C69.4157 1.27081 60.5012 -1.30409 50.8764 0.578246C70.1793 1.80354 73.4645 22.3495 59.1693 44.0496C52.9541 53.4791 44.3593 61.7365 35.1429 67.5256C34.8765 62.1272 36.2794 56.2493 38.1795 51.1528H38.215L33.3671 43.3215C30.2062 38.2428 28.0753 34.709 26.1219 31.7256C20.2618 32.3827 11.7735 31.4238 6.57043 27.446C6.33957 27.2862 6.05545 27.5525 6.21527 27.7834C7.52935 29.7545 8.68362 31.4948 9.71358 33.0397C3.21418 43.1795 -1.52718 57.9896 2.3618 68.4845C14.3129 59.6944 21.2207 47.619 21.2207 47.619L21.8067 47.9564C22.3039 48.2405 22.6769 48.4358 22.6769 48.4358C23.5647 48.8443 24.3816 49.1639 25.234 49.448C23.5647 52.2893 16.9588 63.2814 9.23411 72.9773C4.74136 78.3402 0 78.0028 0 78.0028C0.905653 78.9084 6.99662 83.7563 19.143 84.7508C14.8811 83.1348 14.4017 79.2103 15.8401 76.3868L29.2118 50.4425C30.1707 50.6201 31.1296 50.7621 32.4082 50.8864C32.4082 50.8864 32.8876 50.9219 33.6335 50.9752C33.9176 50.993 34.2372 51.0107 34.5924 51.0285C34.5746 51.0462 26.85 62.9796 25.6424 78.6953ZM6.71249 58.0251C6.71249 58.0251 5.62926 48.2227 12.4838 37.2483C17.6869 45.0796 17.6869 45.0263 19.0898 46.1983C14.3484 52.1472 10.8856 55.0773 6.71249 58.0251ZM19.9776 44.2094L12.4128 32.7378C12.4128 32.7378 18.3262 35.295 24.6302 34.6912L33.1007 48.276C33.1007 48.2583 25.5181 48.205 19.9776 44.2094Z" fill="#C24DFE"/>
              <path d="M32.2311 15.5837C30.6861 23.8056 20.4043 26.5759 14.8994 20.4316L14.8816 20.4139C11.5076 22.4383 9.11027 23.8766 8.68408 24.143C10.0514 25.5104 11.8272 26.2917 14.0647 26.86C20.1912 28.3872 27.0813 28.1208 27.2056 28.1208L44.1644 3.6859C44.413 3.3485 44.0046 2.90456 43.6494 3.13541C41.3409 4.52053 36.8304 7.23748 31.7871 10.2563C32.4087 11.9433 32.5862 13.7724 32.2311 15.5837Z" fill="#C24DFE"/>
              <path d="M3.65801 20.254C3.65801 20.254 8.15076 12.2452 18.5036 13.1686C16.4615 13.8079 15.2007 16.6669 17.4914 18.8689C21.4337 22.669 28.2705 20.6624 29.336 15.0509C29.5491 13.9322 29.478 12.8312 29.1939 11.8367C27.4359 5.63922 19.0186 5.26631 18.0064 9.29735C18.9298 9.0665 19.9065 9.38614 20.528 10.1142C21.1496 10.8423 21.3094 11.8545 20.9365 12.7246C20.5991 13.5237 19.8888 14.092 19.0364 14.234C19.0009 14.234 18.9831 14.2518 18.9476 14.2518C18.8943 14.2696 18.841 14.2696 18.7878 14.2696C20.2439 13.6303 19.5691 11.7302 18.5036 12.0321C18.5392 12.0853 18.5747 12.1209 18.6102 12.1741C16.3727 11.9966 6.96098 11.7835 0.976562 20.2895C1.08311 20.1474 2.48599 19.0642 3.65801 20.254Z" fill="#C24DFE"/>
              <path d="M37.8952 43.7122L39.671 46.6068L51.48 25.1552C52.7408 22.8822 52.9895 20.2362 52.2259 17.7856L37.8952 42.2205C37.6111 42.6822 37.6111 43.2505 37.8952 43.7122Z" fill="#C24DFE"/>
              <path d="M34.024 36.1475L48.8518 12.0145L47.0227 8.53394L35.1427 26.4517C33.1893 29.3817 32.7987 32.88 34.024 36.1475Z" fill="#C24DFE"/>
              <path d="M78.0816 17.9988C79.6621 27.8189 77.2115 38.8998 71.0495 49.5901C61.7621 65.6965 45.9398 78.5355 28.981 83.9162C32.4082 83.4367 37.3449 82.2647 43.1163 79.4234C54.0196 74.0605 61.7266 66.2115 66.2726 60.5645C71.1383 54.5268 73.5001 49.6789 73.5888 49.4658C80.3546 36.4493 80.3546 27.1619 79.1826 21.6747C78.8807 20.2718 78.49 19.0465 78.0816 17.9988Z" fill="#C24DFE"/>
            </svg>
          </div>
          <div class="banner_counter">
            <div>
              <div>{{ landing.landing[0].counter11 }}</div>
              <div>{{ landing.landing[0].counter12 }}</div>
            </div>
            <div>
              <div>{{ landing.landing[0].counter21 }}</div>
              <div>{{ landing.landing[0].counter22 }}</div>
            </div>
            <div>
              <div>{{ landing.landing[0].counter31 }}</div>
              <div>{{ landing.landing[0].counter32 }}</div>
            </div>
            <div>
              <div>{{ landing.landing[0].counter41 }}</div>
              <div>{{ landing.landing[0].counter42 }}</div>
            </div>
            <div>
              <div>{{ landing.landing[0].counter51 }}</div>
              <div>{{ landing.landing[0].counter52 }}</div>
            </div>
          </div>
        </div>
        <div class="banner_info">
          <h1 class="banner_info_title">Find a pro coach in online games</h1>
          <div class="banner_info_subtext">
            Where each gamer also controls one character and interacts with
            other gamers in an open virtual world.
          </div>
          <div class="banner_info_buttons">
            <a href="#games">Find a coach</a>
            <a href="/page/about"
              >Learn more about us
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect opacity="0.8" x="3.3335" y="8.66663" width="1.33333" height="9.33333" rx="0.666667" transform="rotate(-90 3.3335 8.66663)" fill="#C24DFE"/>
                <path d="M7.52843 11.5286C7.26808 11.7889 7.26808 12.211 7.52843 12.4714C7.78878 12.7317 8.21089 12.7317 8.47124 12.4714L12.4712 8.47136C12.7236 8.21898 12.7325 7.81259 12.4913 7.54948L8.82461 3.54948C8.57581 3.27806 8.1541 3.25973 7.88269 3.50852C7.61127 3.75732 7.59294 4.17903 7.84173 4.45044L11.0771 7.97991L7.52843 11.5286Z" fill="#C24DFE"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="banner_panel">
        <div @click="open_first_item_galery()" class="banner_play_button">
          <div></div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.50146 13.3249C7.50146 14.3037 8.65366 14.8277 9.39135 14.1842L13.1858 10.8745C13.7057 10.421 13.707 9.61326 13.1885 9.15814L9.39402 5.82754C8.65709 5.1807 7.50146 5.704 7.50146 6.68455V13.3249Z" fill="#C24DFE"/>
            </svg>
          </div>
        </div>
        <div class="banner_motivation">
          Subsribe to our social media channels
        </div>
        <div class="banner_panel_separator"></div>
        <div class="banner_panel_media">
          <a href="https://www.facebook.com/CakeGamesExp/">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12.3021 19.9999V10.8769H15.619L16.1156 7.32157H12.3021V5.05157C12.3021 4.02223 12.6118 3.32068 14.2107 3.32068L16.25 3.31981V0.139943C15.8972 0.0967723 14.6867 0 13.2785 0C10.3383 0 8.32543 1.65682 8.32543 4.69964V7.32167H5V10.877H8.32532V20L12.3021 19.9999Z" fill="#F9EEFF"/>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/channel/UCe-rP4IHqXR5fnDwno1fWgg?view_as=subscriber"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M9.9938 3.75C9.9938 3.75 3.74298 3.75001 2.17411 4.15049C1.33408 4.38108 0.642384 5.06061 0.40767 5.89799C9.2881e-06 7.43925 0 10.6311 0 10.6311C0 10.6311 9.2881e-06 13.835 0.40767 15.352C0.642384 16.1894 1.32173 16.8568 2.17411 17.0874C3.75534 17.5 9.9938 17.5 9.9938 17.5C9.9938 17.5 16.257 17.5 17.8259 17.0995C18.6782 16.8689 19.3576 16.2137 19.5799 15.3642C20 13.835 20 10.6432 20 10.6432C20 10.6432 20.0123 7.43925 19.5799 5.89799C19.3576 5.06061 18.6782 4.39323 17.8259 4.17478C16.257 3.75002 9.9938 3.75 9.9938 3.75ZM8.00489 7.68209L13.2057 10.6311L8.00489 13.5679V7.68209Z" fill="#F9EEFF"/>
            </svg></a>
          <a href="https://www.instagram.com/cakeboost/">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M5.34891 20.4215C5.44181 20.4689 5.64603 20.5483 6.22325 20.5954C6.82642 20.6447 7.62036 20.6464 8.85714 20.6464H15.1429C16.3796 20.6464 17.1736 20.6447 17.7767 20.5954C18.354 20.5483 18.5582 20.4689 18.6511 20.4215C19.0394 20.2237 19.355 19.908 19.5529 19.5197C19.6002 19.4269 19.6796 19.2226 19.7268 18.6454C19.776 18.0422 19.7778 17.2483 19.7778 16.0115V9.7258C19.7778 8.48901 19.776 7.69508 19.7268 7.09191C19.6796 6.51468 19.6002 6.31046 19.5529 6.21756L21.5329 5.20869C22 6.12546 22 7.32557 22 9.7258V16.0115C22 18.4117 22 19.6118 21.5329 20.5286C21.122 21.335 20.4664 21.9907 19.66 22.4015C18.7432 22.8687 17.5431 22.8687 15.1429 22.8687H8.85714C6.45692 22.8687 5.25681 22.8687 4.34004 22.4015L5.34891 20.4215Z" fill="#F9EEFF"/>
              <path d="M4.34004 22.4015C3.53363 21.9907 2.878 21.335 2.46712 20.5286C2 19.6118 2 18.4117 2 16.0115V9.7258C2 7.32557 2 6.12546 2.46712 5.20869C2.878 4.40228 3.53363 3.74665 4.34004 3.33577C5.25681 2.86865 6.45692 2.86865 8.85714 2.86865H15.1429C17.5431 2.86865 18.7432 2.86865 19.66 3.33577C20.4664 3.74665 21.122 4.40228 21.5329 5.20869L19.5529 6.21756C19.355 5.82929 19.0394 5.51362 18.6511 5.31578C18.5582 5.26845 18.354 5.18904 17.7767 5.14188C17.1736 5.0926 16.3796 5.09087 15.1429 5.09087H8.85714C7.62036 5.09087 6.82642 5.0926 6.22325 5.14188C5.64603 5.18904 5.44181 5.26845 5.34891 5.31578C4.96064 5.51362 4.64496 5.82929 4.44713 6.21756C4.3998 6.31046 4.32039 6.51468 4.27323 7.09191C4.22395 7.69508 4.22222 8.48901 4.22222 9.7258V16.0115C4.22222 17.2483 4.22395 18.0422 4.27323 18.6454C4.32039 19.2226 4.3998 19.4268 4.44713 19.5197C4.64496 19.908 4.96064 20.2237 5.34891 20.4215L4.34004 22.4015Z" fill="#F9EEFF"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.64288 12.8687C6.64288 9.90999 9.04135 7.51151 12 7.51151C14.9587 7.51151 17.3572 9.90999 17.3572 12.8687C17.3572 15.8273 14.9587 18.2258 12 18.2258C9.04135 18.2258 6.64288 15.8273 6.64288 12.8687ZM12 9.73373C10.2687 9.73373 8.8651 11.1373 8.8651 12.8687C8.8651 14.6 10.2687 16.0036 12 16.0036C13.7314 16.0036 15.1349 14.6 15.1349 12.8687C15.1349 11.1373 13.7314 9.73373 12 9.73373Z" fill="#F9EEFF"/>
              <path d="M17.5556 8.42421C18.1692 8.42421 18.6667 7.92675 18.6667 7.3131C18.6667 6.69945 18.1692 6.20199 17.5556 6.20199C16.9419 6.20199 16.4444 6.69945 16.4444 7.3131C16.4444 7.92675 16.9419 8.42421 17.5556 8.42421Z" fill="#828688"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <contact_us_popup />
    <div @click="scroll_to_top()" class="scroll_up">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 6L8 11L13 6" stroke="#595E61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div
      class="landing_mask"
      @click.self="all_game_popup_check = false"
      @click="closeCookie()"
      :class="{ landing_mask_show: all_game_popup_check }"
    >
      <div
        class="all_games_div"
        :class="{ all_games_div_fadeout: all_game_popup_check }"
      >
        <div>
          <div class="all_games_div_header">
            <div>
              Choose your game
              <span>{{ landing.games.games_list.length }}</span>
            </div>
            <div>
              <div @click="all_game_popup_check = false">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <rect x="5.63477" y="16.9509" width="16" height="2" rx="1" transform="rotate(-45 5.63477 16.9509)" fill="#595E61"/>
                  <rect x="7.04883" y="5.63721" width="16" height="2" rx="1" transform="rotate(45 7.04883 5.63721)" fill="#595E61"/>
                </svg>
              </div>
            </div>
          </div>
          <div class="all_games_div_search">
            <div class="game_picker_header_search">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path opacity="0.7" d="M11.9111 13.9226C11.5856 13.5972 11.5856 13.0695 11.9111 12.7441C12.2365 12.4186 12.7641 12.4186 13.0896 12.7441L16.4229 16.0774C16.7484 16.4028 16.7484 16.9305 16.4229 17.2559C16.0975 17.5814 15.5698 17.5814 15.2444 17.2559L11.9111 13.9226Z" fill="#444B4D"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33496 9.16701C3.33496 12.3887 5.94663 15.0003 9.16829 15.0003C12.39 15.0003 15.0016 12.3887 15.0016 9.16701C15.0016 5.94535 12.39 3.33368 9.16829 3.33368C5.94663 3.33368 3.33496 5.94535 3.33496 9.16701ZM13.335 9.16701C13.335 11.4682 11.4695 13.3337 9.16829 13.3337C6.86711 13.3337 5.00163 11.4682 5.00163 9.16701C5.00163 6.86583 6.86711 5.00035 9.16829 5.00035C11.4695 5.00035 13.335 6.86583 13.335 9.16701Z" fill="#444B4D"/>
                </svg>
                <input
                  v-model="sidebar_game_search"
                  type="text"
                  class="game_search"
                  id="game_search"
                  ref="game_search"
                  placeholder="Search by the game name"
                  @focus="chasidebar_game_chars = ''"
                />
              </div>
            </div>
            <div class="all_games_div_search_chars">
              <span
                v-for="(item, index) in this.alphabet"
                :key="item.id"
                :class="{ active: chasidebar_game_chars == item }"
                @click="selectGame(item, index)"
                >{{ item }}</span
              >
            </div>
          </div>
          <div class="all_games_div_list">
            <div class="game_picker_games">
              <a
                v-for="item in filterGame()"
                :key="item.id"
                :href="'/' + (item.slug != 'wow-shadowlands' ? item.slug : 'wow-boost')"
                class="game_item"
                ><div>{{ item.title }}</div>
                <div class="game_item_mask">
                  <img :src="apiImg + 'gbanner/' + item.imgland" alt />
                  <div class="game_item_mask_gradient"></div>
                  <div class="game_item_mask_hover"></div></div
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="game_picker">
      <a href="" name="games"></a>
      <div class="game_picker_header">
        <div>
          Choose your game
          <span>{{ landing.games.games_list.length }}</span>
        </div>
        <div class="game_picker_header_search">
          <div @click="set_focus(), (all_game_popup_check = true)">
            <svg @click="set_focus(), (all_game_popup_check = true)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path opacity="0.7" d="M11.9111 13.9226C11.5856 13.5972 11.5856 13.0695 11.9111 12.7441C12.2365 12.4186 12.7641 12.4186 13.0896 12.7441L16.4229 16.0774C16.7484 16.4028 16.7484 16.9305 16.4229 17.2559C16.0975 17.5814 15.5698 17.5814 15.2444 17.2559L11.9111 13.9226Z" fill="#444B4D"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33496 9.16701C3.33496 12.3887 5.94663 15.0003 9.16829 15.0003C12.39 15.0003 15.0016 12.3887 15.0016 9.16701C15.0016 5.94535 12.39 3.33368 9.16829 3.33368C5.94663 3.33368 3.33496 5.94535 3.33496 9.16701ZM13.335 9.16701C13.335 11.4682 11.4695 13.3337 9.16829 13.3337C6.86711 13.3337 5.00163 11.4682 5.00163 9.16701C5.00163 6.86583 6.86711 5.00035 9.16829 5.00035C11.4695 5.00035 13.335 6.86583 13.335 9.16701Z" fill="#444B4D"/>
            </svg>
            <span>Search by the game name</span>
          </div>
        </div>
      </div>
      <div class="game_picker_games">
        <a
          :href="'/' + item.slug"
          v-for="(item, index) in this.landing.games.games_list"
          v-if="index < 7 && item.slug != 'wow-shadowlands'"
          :key="item.id"
          class="game_item"
        >
          <div>{{ item.title }}</div>
          <div class="game_item_mask">
            <img :src="apiImg + 'gbanner/' + item.imgland" alt />
            <div class="game_item_mask_gradient"></div>
            <div class="game_item_mask_hover"></div>
          </div>
        </a>
        <a
          :href="'/wow-boost'"
          v-else-if="item.slug == 'wow-shadowlands'"
          class="game_item"
        >
          <div>{{ item.title }}</div>
          <div class="game_item_mask">
            <img :src="apiImg + 'gbanner/' + item.imgland" alt />
            <div class="game_item_mask_gradient"></div>
            <div class="game_item_mask_hover"></div>
          </div>
        </a>
        <div @click="all_game_popup_check = true" class="games_show_all">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect opacity="0.3" x="6.66699" y="6.66669" width="6.66667" height="6.66667" rx="1.66667" fill="#C24DFE"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3337 6.66669C17.4132 6.66669 16.667 7.41288 16.667 8.33335V11.6667C16.667 12.5872 17.4132 13.3334 18.3337 13.3334H21.667C22.5875 13.3334 23.3337 12.5872 23.3337 11.6667V8.33335C23.3337 7.41288 22.5875 6.66669 21.667 6.66669H18.3337ZM8.33366 16.6667C7.41318 16.6667 6.66699 17.4129 6.66699 18.3334V21.6667C6.66699 22.5872 7.41318 23.3334 8.33366 23.3334H11.667C12.5875 23.3334 13.3337 22.5872 13.3337 21.6667V18.3334C13.3337 17.4129 12.5875 16.6667 11.667 16.6667H8.33366ZM16.667 18.3334C16.667 17.4129 17.4132 16.6667 18.3337 16.6667H21.667C22.5875 16.6667 23.3337 17.4129 23.3337 18.3334V21.6667C23.3337 22.5872 22.5875 23.3334 21.667 23.3334H18.3337C17.4132 23.3334 16.667 22.5872 16.667 21.6667V18.3334ZM28.3337 6.66669C27.4132 6.66669 26.667 7.41288 26.667 8.33335V11.6667C26.667 12.5872 27.4132 13.3334 28.3337 13.3334H31.667C32.5875 13.3334 33.3337 12.5872 33.3337 11.6667V8.33335C33.3337 7.41288 32.5875 6.66669 31.667 6.66669H28.3337ZM26.667 18.3334C26.667 17.4129 27.4132 16.6667 28.3337 16.6667H31.667C32.5875 16.6667 33.3337 17.4129 33.3337 18.3334V21.6667C33.3337 22.5872 32.5875 23.3334 31.667 23.3334H28.3337C27.4132 23.3334 26.667 22.5872 26.667 21.6667V18.3334ZM8.33366 26.6667C7.41318 26.6667 6.66699 27.4129 6.66699 28.3334V31.6667C6.66699 32.5872 7.41318 33.3334 8.33366 33.3334H11.667C12.5875 33.3334 13.3337 32.5872 13.3337 31.6667V28.3334C13.3337 27.4129 12.5875 26.6667 11.667 26.6667H8.33366ZM16.667 28.3334C16.667 27.4129 17.4132 26.6667 18.3337 26.6667H21.667C22.5875 26.6667 23.3337 27.4129 23.3337 28.3334V31.6667C23.3337 32.5872 22.5875 33.3334 21.667 33.3334H18.3337C17.4132 33.3334 16.667 32.5872 16.667 31.6667V28.3334ZM28.3337 26.6667C27.4132 26.6667 26.667 27.4129 26.667 28.3334V31.6667C26.667 32.5872 27.4132 33.3334 28.3337 33.3334H31.667C32.5875 33.3334 33.3337 32.5872 33.3337 31.6667V28.3334C33.3337 27.4129 32.5875 26.6667 31.667 26.6667H28.3337Z" fill="#C24DFE"/>
          </svg>
          <div>Show all games...</div>
        </div>
      </div>
    </div>
    <div class="reviews_landing">
      <div class="reviews_header">
        <div>Latest reviews of Cakeboost service</div>
        <div>
          <a href="/page/reviews">
            Show all reviews
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect opacity="0.8" x="4.16699" y="10.8333" width="1.66667" height="11.6667" rx="0.833333" transform="rotate(-90 4.16699 10.8333)" fill="#2F3639"/>
            <path d="M9.41042 14.4107C9.08498 14.7362 9.08498 15.2638 9.41042 15.5893C9.73585 15.9147 10.2635 15.9147 10.5889 15.5893L15.5889 10.5893C15.9044 10.2738 15.9154 9.76578 15.614 9.43689L11.0306 4.43689C10.7196 4.09762 10.1925 4.07471 9.85324 4.3857C9.51397 4.69669 9.49105 5.22383 9.80204 5.5631L13.8462 9.97493L9.41042 14.4107Z" fill="#2F3639"/>
            </svg>
          </a>
        </div>
      </div>
      <div class="reviews_swiper">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <a
              class="swiper-slide swiper-slide-trustpilot"
            >
              <div>
                <span style="
                    color: #fff;
                    font-size: 32px;
                    font-family: Roboto;
                    font-weight: 500;
                ">Our Reviews</span>
                <!-- <img src="/landing_page/Trustpilot.svg" alt="" /> -->
              </div>
              <div>
                <div>More than</div>
                <div>1700+</div>
                <div>positive reviews</div>
              </div>
              <div class="swiper_slide_trustpilot_raiting">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#clip0)"><path d="M16 5.85932H9.88727L8.00557 -0.00012207L6.11274 5.85932L0 5.8481L4.94363 9.47377L3.0508 15.3332L7.99443 11.7075L12.9381 15.3332L11.0564 9.47377L16 5.85932Z" fill="#00B67A"></path> <path d="M11.3333 10.5191L10.9274 9.33319L8 11.3332L11.3333 10.5191Z" fill="#005128"></path></g> <defs><clipPath id="clip0"><rect width="16" height="16" fill="white" transform="translate(0 -0.00012207)"></rect></clipPath></defs></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#clip0)"><path d="M16 5.85932H9.88727L8.00557 -0.00012207L6.11274 5.85932L0 5.8481L4.94363 9.47377L3.0508 15.3332L7.99443 11.7075L12.9381 15.3332L11.0564 9.47377L16 5.85932Z" fill="#00B67A"></path> <path d="M11.3333 10.5191L10.9274 9.33319L8 11.3332L11.3333 10.5191Z" fill="#005128"></path></g> <defs><clipPath id="clip0"><rect width="16" height="16" fill="white" transform="translate(0 -0.00012207)"></rect></clipPath></defs></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#clip0)"><path d="M16 5.85932H9.88727L8.00557 -0.00012207L6.11274 5.85932L0 5.8481L4.94363 9.47377L3.0508 15.3332L7.99443 11.7075L12.9381 15.3332L11.0564 9.47377L16 5.85932Z" fill="#00B67A"></path> <path d="M11.3333 10.5191L10.9274 9.33319L8 11.3332L11.3333 10.5191Z" fill="#005128"></path></g> <defs><clipPath id="clip0"><rect width="16" height="16" fill="white" transform="translate(0 -0.00012207)"></rect></clipPath></defs></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#clip0)"><path d="M16 5.85932H9.88727L8.00557 -0.00012207L6.11274 5.85932L0 5.8481L4.94363 9.47377L3.0508 15.3332L7.99443 11.7075L12.9381 15.3332L11.0564 9.47377L16 5.85932Z" fill="#00B67A"></path> <path d="M11.3333 10.5191L10.9274 9.33319L8 11.3332L11.3333 10.5191Z" fill="#005128"></path></g> <defs><clipPath id="clip0"><rect width="16" height="16" fill="white" transform="translate(0 -0.00012207)"></rect></clipPath></defs></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#clip0)"><path d="M16 5.85932H9.88727L8.00557 -0.00012207L6.11274 5.85932L0 5.8481L4.94363 9.47377L3.0508 15.3332L7.99443 11.7075L12.9381 15.3332L11.0564 9.47377L16 5.85932Z" fill="#00B67A"></path> <path d="M11.3333 10.5191L10.9274 9.33319L8 11.3332L11.3333 10.5191Z" fill="#005128"></path></g> <defs><clipPath id="clip0"><rect width="16" height="16" fill="white" transform="translate(0 -0.00012207)"></rect></clipPath></defs></svg>
                  <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 -0.00012207L9.88854 6.11133H16L11.0557 9.88842L12.9443 15.9999L8 12.2228L3.05573 15.9999L4.94427 9.88842L0 6.11133H6.11146L8 -0.00012207Z" fill="#ACAFB0"></path></svg>-->
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="15.8892" y="7.19666" width="2" height="14" rx="1" transform="rotate(45 15.8892 7.19666)" fill="white"></rect> <path d="M8.11084 8.90381C7.55856 8.90381 7.11084 8.45609 7.11084 7.90381C7.11084 7.35152 7.55856 6.90381 8.11084 6.90381L16.5961 6.90381C17.1315 6.90381 17.5719 7.32549 17.5952 7.86037L17.9487 15.9921C17.9727 16.5439 17.5449 17.0106 16.9931 17.0346C16.4413 17.0586 15.9746 16.6307 15.9506 16.079L15.6387 8.90381H8.11084Z" fill="white"></path></svg>
                </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="256" height="222" viewBox="0 0 256 222" fill="none"><g opacity="0.1" filter="url(#filter0_d)"><path fill-rule="evenodd" clip-rule="evenodd" d="M165.501 139.249L109.17 168.864C102.428 172.408 94.0894 169.816 90.545 163.074C89.1335 160.39 88.6465 157.315 89.1592 154.325L99.9174 91.6003L54.3451 47.1783C48.8907 41.8616 48.7791 33.1299 54.0958 27.6755C56.213 25.5036 58.9871 24.0901 61.9886 23.6539L124.968 14.5025L153.133 -42.5664C156.504 -49.3968 164.774 -52.2012 171.604 -48.8302C174.324 -47.4878 176.526 -45.2863 177.868 -42.5664L206.033 14.5025L269.013 23.6539C276.55 24.7493 281.773 31.7477 280.678 39.2855C280.242 42.2871 278.828 45.0612 276.656 47.1783L231.084 91.6003L241.842 154.325C243.13 161.832 238.088 168.962 230.58 170.25C227.591 170.762 224.516 170.275 221.831 168.864L165.501 139.249Z" fill="white"></path></g> <defs><filter id="filter0_d" x="-12" y="-117" width="355" height="355" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix> <feOffset dy="4"></feOffset> <feGaussianBlur stdDeviation="6"></feGaussianBlur> <feColorMatrix type="matrix" values="0 0 0 0 0.266667 0 0 0 0 0.294118 0 0 0 0 0.301961 0 0 0 0.1 0"></feColorMatrix> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs></svg>
            </a>

            <a
              href="/page/reviews"
              class="swiper-slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3333 11.6665L15 21.6665H18.3333V29.9998H10V21.6665L13.3333 11.6665H18.3333Z" fill="#2F3639"/>
              <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M31.6663 11.6665L28.333 21.6665H31.6663V29.9998H23.333V21.6665L26.6663 11.6665H31.6663Z" fill="#2F3639"/>
              </svg>
              <div class="reviews_swiper_info">
              <div>
                  <span v-for="(sub_item, index) in 5" :key="index">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
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
                  </span>
              </div>
              <div>Steven</div>
              </div>
              <div class="reviews_swiper_text">
                  It was done quickly. Wonderful boost
              </div>
            </a>
            <a
              href="/page/reviews"
              class="swiper-slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3333 11.6665L15 21.6665H18.3333V29.9998H10V21.6665L13.3333 11.6665H18.3333Z" fill="#2F3639"/>
              <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M31.6663 11.6665L28.333 21.6665H31.6663V29.9998H23.333V21.6665L26.6663 11.6665H31.6663Z" fill="#2F3639"/>
              </svg>
              <div class="reviews_swiper_info">
              <div>
                  <span v-for="(sub_item, index) in 5" :key="index">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
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
                  </span>
              </div>
              <div>George</div>
              </div>
              <div class="reviews_swiper_text">
                Great service
              </div>
            </a>
            <a
              href="/page/reviews"
              class="swiper-slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3333 11.6665L15 21.6665H18.3333V29.9998H10V21.6665L13.3333 11.6665H18.3333Z" fill="#2F3639"/>
              <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M31.6663 11.6665L28.333 21.6665H31.6663V29.9998H23.333V21.6665L26.6663 11.6665H31.6663Z" fill="#2F3639"/>
              </svg>
              <div class="reviews_swiper_info">
              <div>
                  <span v-for="(sub_item, index) in 5" :key="index">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
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
                  </span>
              </div>
              <div>John</div>
              </div>
              <div class="reviews_swiper_text">
                Reliable guys, this is not my first purchase, so I pre-order without worry
              </div>
            </a>
            <a
              href="/page/reviews"
              class="swiper-slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3333 11.6665L15 21.6665H18.3333V29.9998H10V21.6665L13.3333 11.6665H18.3333Z" fill="#2F3639"/>
              <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M31.6663 11.6665L28.333 21.6665H31.6663V29.9998H23.333V21.6665L26.6663 11.6665H31.6663Z" fill="#2F3639"/>
              </svg>
              <div class="reviews_swiper_info">
              <div>
                  <span v-for="(sub_item, index) in 5" :key="index">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
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
                  </span>
              </div>
              <div>Raymond</div>
              </div>
              <div class="reviews_swiper_text">
                Fast run for the first week. Waiting for release 9.2
              </div>
            </a>
            <a
              href="/page/reviews"
              class="swiper-slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3333 11.6665L15 21.6665H18.3333V29.9998H10V21.6665L13.3333 11.6665H18.3333Z" fill="#2F3639"/>
              <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M31.6663 11.6665L28.333 21.6665H31.6663V29.9998H23.333V21.6665L26.6663 11.6665H31.6663Z" fill="#2F3639"/>
              </svg>
              <div class="reviews_swiper_info">
              <div>
                  <span v-for="(sub_item, index) in 5" :key="index">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
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
                  </span>
              </div>
              <div>Matthew</div>
              </div>
              <div class="reviews_swiper_text">
                I really want to complete the heroic in the first week. I think with these guys I can handle it
              </div>
            </a>
            <a
              href="/page/reviews"
              class="swiper-slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3333 11.6665L15 21.6665H18.3333V29.9998H10V21.6665L13.3333 11.6665H18.3333Z" fill="#2F3639"/>
              <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M31.6663 11.6665L28.333 21.6665H31.6663V29.9998H23.333V21.6665L26.6663 11.6665H31.6663Z" fill="#2F3639"/>
              </svg>
              <div class="reviews_swiper_info">
              <div>
                  <span v-for="(sub_item, index) in 5" :key="index">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
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
                  </span>
              </div>
              <div>Sharon</div>
              </div>
              <div class="reviews_swiper_text">
                This is the second raid I order. I hope everything ends as smoothly as last time.
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="top_services">
      <div class="top_services_header">
        <div>Top services</div>
        <div>
          <a :href="choosen_filter_game_slug + '/catalog'">
            Show all offers
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><rect opacity="0.8" x="4.16699" y="10.8333" width="1.66667" height="11.6667" rx="0.833333" transform="rotate(-90 4.16699 10.8333)" fill="#2F3639"></rect> <path d="M9.41042 14.4107C9.08498 14.7362 9.08498 15.2638 9.41042 15.5893C9.73585 15.9147 10.2635 15.9147 10.5889 15.5893L15.5889 10.5893C15.9044 10.2738 15.9154 9.76578 15.614 9.43689L11.0306 4.43689C10.7196 4.09762 10.1925 4.07471 9.85324 4.3857C9.51397 4.69669 9.49105 5.22383 9.80204 5.5631L13.8462 9.97493L9.41042 14.4107Z" fill="#2F3639"></path></svg>
          </a>
        </div>
      </div>
      <div class="top_services_filter">
        <div
          v-for="item in this.landing.games.games_list"
          :key="item.id"
          :class="{ active: choosen_filter_game == item.id }"
          @click="
            (choosen_filter_game = item.id),
              (choosen_filter_game_slug = item.slug)
          "
        >
          {{ item.title }}
        </div>
      </div>
      <div class="top_services_items">
        <CartItem
          type="offer_of_day"
          v-for="item in landing.top_serv"
          :key="item.id"
          v-if="item.game_id == choosen_filter_game"
          :item="item"
          :choosen_filter_game="choosen_filter_game"
          :choosen_filter_game_slug="choosen_filter_game_slug"
          :main_prods="landing.main_prods"
        />
        <CartItem
          type="hot_offers"
          v-for="item in landing.main_prods"
          :key="item.id"
          v-if="item.game == choosen_filter_game"
          :item="item"
          :choosen_filter_game="choosen_filter_game"
          :choosen_filter_game_slug="choosen_filter_game_slug"
          :main_prods="landing.main_prods"
        />
        <a
          :href="choosen_filter_game_slug + '/catalog'"
          class="top_services_item_all"
        >
          <div>
           <svg xmlns="http://www.w3.org/2000/svg" width="57" height="56" viewBox="0 0 57 56" fill="none">
              <path d="M29.1834 15.6499C28.2722 14.7387 28.2722 13.2613 29.1834 12.35C30.0946 11.4388 31.572 11.4388 32.4832 12.35L46.4832 26.35C47.3666 27.2334 47.3975 28.6558 46.5534 29.5766L33.72 43.5767C32.8492 44.5266 31.3733 44.5908 30.4233 43.72C29.4734 42.8492 29.4092 41.3732 30.28 40.4233L41.6037 28.0701L29.1834 15.6499Z" fill="#C24DFE"/>
              <path d="M12.8498 15.6499C11.9385 14.7387 11.9385 13.2613 12.8498 12.35C13.761 11.4388 15.2384 11.4388 16.1496 12.35L30.1496 26.35C31.0329 27.2334 31.0638 28.6558 30.2197 29.5766L17.3864 43.5767C16.5156 44.5266 15.0396 44.5908 14.0896 43.72C13.1397 42.8492 13.0755 41.3732 13.9463 40.4233L25.27 28.0701L12.8498 15.6499Z" fill="#C24DFE"/>
            </svg>
            <div>Show all offers...</div>
          </div>
        </a>
      </div>
    </div>

    <div class="last_news">
      <div class="last_news_header">
        <div>Latest news & guides</div>
        <div>
          <a href="/page/blogs/wow-shadowlands">
            Show all news
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><rect opacity="0.8" x="4.16699" y="10.8333" width="1.66667" height="11.6667" rx="0.833333" transform="rotate(-90 4.16699 10.8333)" fill="#2F3639"></rect> <path d="M9.41042 14.4107C9.08498 14.7362 9.08498 15.2638 9.41042 15.5893C9.73585 15.9147 10.2635 15.9147 10.5889 15.5893L15.5889 10.5893C15.9044 10.2738 15.9154 9.76578 15.614 9.43689L11.0306 4.43689C10.7196 4.09762 10.1925 4.07471 9.85324 4.3857C9.51397 4.69669 9.49105 5.22383 9.80204 5.5631L13.8462 9.97493L9.41042 14.4107Z" fill="#2F3639"></path></svg>
          </a>
        </div>
      </div>
      <div class="last_news_items">
        <a
          v-for="(item, index) in this.landing.news"
          :key="item.id"
          v-if="index < 5"
          :href="'/page/blogs/wow-shadowlands/' + item.slug + '&' + item.id"
          class="last_news_item"
        >
          <div>
            <img :src="apiImg + 'news/' + item.img" :alt="item.title" />
          </div>
          <div>
            <div>
              <div>{{ item.date.split(" ")[0] }}</div>
              <div>
                {{ item.title }}
              </div>
            </div>
            <a
              :href="'/page/blogs/wow-shadowlands/' + item.slug + '&' + item.id"
              >Read the full topic
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect opacity="0.8" x="3.3335" y="8.66663" width="1.33333" height="9.33333" rx="0.666667" transform="rotate(-90 3.3335 8.66663)" fill="#C24DFE"/>
              <path d="M7.52843 11.5286C7.26808 11.7889 7.26808 12.211 7.52843 12.4714C7.78878 12.7317 8.21089 12.7317 8.47124 12.4714L12.4712 8.47136C12.7236 8.21898 12.7325 7.81259 12.4913 7.54948L8.82461 3.54948C8.57581 3.27806 8.1541 3.25973 7.88269 3.50852C7.61127 3.75732 7.59294 4.17903 7.84173 4.45044L11.0771 7.97991L7.52843 11.5286Z" fill="#C24DFE"/>
              </svg>
            </a>
          </div>
        </a>
        <a
          v-if="this.landing.news.length > 5"
          class="last_news_all"
          href="/page/blogs/wow-shadowlands"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="57" height="56" viewBox="0 0 57 56" fill="none"><path d="M29.1834 15.6499C28.2722 14.7387 28.2722 13.2613 29.1834 12.35C30.0946 11.4388 31.572 11.4388 32.4832 12.35L46.4832 26.35C47.3666 27.2334 47.3975 28.6558 46.5534 29.5766L33.72 43.5767C32.8492 44.5266 31.3733 44.5908 30.4233 43.72C29.4734 42.8492 29.4092 41.3732 30.28 40.4233L41.6037 28.0701L29.1834 15.6499Z" fill="#C24DFE"></path> <path d="M12.8498 15.6499C11.9385 14.7387 11.9385 13.2613 12.8498 12.35C13.761 11.4388 15.2384 11.4388 16.1496 12.35L30.1496 26.35C31.0329 27.2334 31.0638 28.6558 30.2197 29.5766L17.3864 43.5767C16.5156 44.5266 15.0396 44.5908 14.0896 43.72C13.1397 42.8492 13.0755 41.3732 13.9463 40.4233L25.27 28.0701L12.8498 15.6499Z" fill="#C24DFE"></path></svg>
          <div>Go to the news page</div>
        </a>
      </div>
    </div>
    <a name="about_text_ancor"></a>
    <div
      class="text_abous_us"
      :class="{ text_abous_us_open: open_more_info_about }"
    >
      <div
        class="text_about_greetings"
        :class="{ text_about_greetings_fixed: open_more_info_about }"
      >
        Welcome to <br />
        Cakeboost.com
      </div>
      <div
        class="text_about_us_content"
        :class="{ text_about_us_content_open: open_more_info_about }"
      >
        <div v-html="landing_s.text"></div>

        <div class="text_about_show_more">
          <div></div>
          <button
            v-if="!open_more_info_about"
            @click="open_more_info_about = true"
          >
            Show more
          </button>
          <a
            v-if="open_more_info_about"
            @click="open_more_info_about = false"
            href="#about_text_ancor"
          >
            Show less</a
          >
          <div></div>
        </div>
      </div>
    </div>
    <div class="subs_and_about">
      <div class="subscribe">

        <svg v-if="!if_sub" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
          <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M19.9998 6.66675C18.1589 6.66675 16.6665 8.15913 16.6665 10.0001V43.3334C16.6665 45.1744 18.1589 46.6667 19.9998 46.6667H59.9998C61.8408 46.6667 63.3332 45.1744 63.3332 43.3334V10.0001C63.3332 8.15913 61.8408 6.66675 59.9998 6.66675H19.9998ZM39.9994 17.3333C41.3438 15.7662 43.8534 13.3333 45.9994 13.3333C49.7981 13.3333 51.9994 16.5624 51.9994 20.3333C51.9994 26.3333 39.9994 33.3333 39.9994 33.3333C39.9994 33.3333 27.9994 26.3333 27.9994 20.0672C27.9994 16.2962 30.2008 13.3333 33.9994 13.3333C36.1454 13.3333 38.6551 15.7662 39.9994 17.3333Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 20.978C10 20.5701 10.4621 20.3338 10.7927 20.5727L40 41.6668L69.2073 20.5727C69.5379 20.3338 70 20.5701 70 20.978V61.3335C70 62.438 69.1046 63.3335 68 63.3335H12C10.8954 63.3335 10 62.438 10 61.3335V20.978Z" fill="white"/>
        </svg>
        <svg v-if="if_sub" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
          <g id=" Communication / Readed-mail">
          <path id="check" opacity="0.3" d="M16.2501 69.1663C15.4515 69.1663 14.6529 68.8469 14.014 68.208L7.62508 61.8191C6.3473 60.5413 6.3473 58.6246 7.62508 57.3469C8.90286 56.0691 10.9792 56.0691 12.0973 57.3469L16.2501 61.4996L26.7917 50.958C28.0695 49.6802 29.9862 49.6802 31.264 50.958C32.5417 52.2357 32.5417 54.1524 31.264 55.4302L18.4862 68.208C17.8473 68.8469 17.0487 69.1663 16.2501 69.1663Z" fill="white"/>
          <path id="Combined Shape" fill-rule="evenodd" clip-rule="evenodd" d="M13.3333 23.333C13.3333 19.6511 16.318 16.6663 19.9999 16.6663H66.6666C70.3485 16.6663 73.3333 19.6511 73.3333 23.333V53.333C73.3333 57.0149 70.3485 59.9996 66.6666 59.9996H43.2784C42.4208 46.9695 31.5802 36.6662 18.3331 36.6662C16.6208 36.6662 14.9488 36.8383 13.3333 37.1663V23.333ZM63.815 22.798C65.0307 22.1434 66.5468 22.5983 67.2014 23.814C67.856 25.0296 67.4012 26.5458 66.1855 27.2004L44.5188 38.8671C43.7789 39.2655 42.8883 39.2655 42.1483 38.8671L20.4817 27.2004C19.266 26.5458 18.8111 25.0296 19.4657 23.814C20.1203 22.5983 21.6365 22.1434 22.8522 22.798L43.3336 33.8265L63.815 22.798Z" fill="white"/>
          </g>
        </svg>
        <div class="subscribe_form">
          <div v-if="!if_sub">Subscribe to our weekly newsletters</div>
          <div v-else>
            You are already subscribed on our Email newsletter
          </div>
          <div v-if="!if_sub">
            To enhance your WoW proficiency, take out a monthly paid subscription. Furthermore, once a new patch is released, you will receive all the information that may significantly expand your in-game perception.
          </div>
          <div v-else>
            To step in the World of Warcraft, take out Cakeboost subscription. Also, once in a time, developers release mass add-ons that significantly expand
          </div>
          <form @submit.prevent="send_subscribe()" v-if="!if_sub && !this.$store.getters['getUserLoginCheck'].user_check_login " class="subscribe_form_inputs">
            <input required type="text" v-model="sub_mail" placeholder="Your email" />
            <button id="email_sub_button" type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 3.27328C2.5 2.91045 2.87431 2.66842 3.20518 2.81732L18.1534 9.54402C18.5465 9.72091 18.5465 10.2791 18.1534 10.4559L3.20518 17.1827C2.87431 17.3315 2.5 17.0895 2.5 16.7267V11.25L15.8333 9.99998L2.5 8.74998V3.27328Z" fill="#C24DFE"/>
              </svg> Subscribe
            </button>
          </form>
          <div v-if="!if_sub && !this.$store.getters['getUserLoginCheck'].user_check_login"  class="subscribe_form_check">
            <!--  <div
              @click="
                subscribe_form_check = subscribe_form_check
                  ? (subscribe_form_check = false)
                  : (subscribe_form_check = true)
              "
            >
              <div v-if="subscribe_form_check"></div>
            </div>
           I agree to
            <span style="margin-left: 6px; cursor: pointer">
              <a href="/page/privacy-policy" target="_blank"
                >privacy policy</a
              ></span
            > -->
          </div>
          <div @click="subscribe_form_check = true,send_subscribe()" v-if="this.$store.getters['getUserLoginCheck'].user_check_login"  class="subscribe_form_check">
            <div>
              <div v-if="subscribe_form_check"></div>
            </div>
            Activate subscription
          </div>
        </div>
      </div>
      <div class="about_main">
        <div class="about_main_header">Our advantages</div>
        <div class="about_main_items">
          <div class="about_main_items_s">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3333 11.6665L15 21.6665H18.3333V29.9998H10V21.6665L13.3333 11.6665H18.3333Z" fill="#2F3639"/>
            <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M31.6663 11.6665L28.333 21.6665H31.6663V29.9998H23.333V21.6665L26.6663 11.6665H31.6663Z" fill="#2F3639"/>
            </svg>
            <div>24/7 online support</div>
            <div>
              Dear customer, feel free to ask our operators any question. They
              will help you. Our support is available 24/7, so we can be always
              in touch.
            </div>
          </div>
          <div class="about_main_items_s">
            <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
              <path opacity="0.3" d="M51.7926 37.2649L44.2031 34.7351C47.262 25.5586 52.1686 19.8342 59.0277 18.1194C62.599 17.2266 67.9979 11.478 67.9979 8H75.9979C75.9979 15.1886 68.0634 24.1067 60.968 25.8806C57.1605 26.8324 54.0671 30.4414 51.7926 37.2649Z" fill="#444B4D"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M70 76C82.1503 76 92 66.1503 92 54C92 41.8497 82.1503 32 70 32C69.2484 32 68.5057 32.0377 67.7735 32.1113C67.1927 32.0378 66.6008 32 66 32H30C29.3992 32 28.8073 32.0378 28.2265 32.1113C27.4943 32.0377 26.7515 32 26 32C13.8497 32 4 41.8497 4 54C4 66.1503 13.8497 76 26 76C32.8317 76 38.9362 72.886 42.9714 68H53.0286C57.0638 72.886 63.1682 76 70 76ZM20 42C20 40.8954 20.8954 40 22 40H26C27.1046 40 28 40.8954 28 42V46C28 47.1046 27.1046 48 26 48H22C20.8954 48 20 47.1046 20 46V42ZM30 48C28.8954 48 28 48.8954 28 50V54C28 55.1046 28.8954 56 30 56H34C35.1046 56 36 55.1046 36 54V50C36 48.8954 35.1046 48 34 48H30ZM76 48C78.2091 48 80 46.2091 80 44C80 41.7909 78.2091 40 76 40C73.7909 40 72 41.7909 72 44C72 46.2091 73.7909 48 76 48ZM76 56C76 58.2091 74.2091 60 72 60C69.7909 60 68 58.2091 68 56C68 53.7909 69.7909 52 72 52C74.2091 52 76 53.7909 76 56ZM20 58C20 56.8954 20.8954 56 22 56H26C27.1046 56 28 56.8954 28 58V62C28 63.1046 27.1046 64 26 64H22C20.8954 64 20 63.1046 20 62V58ZM14 48C12.8954 48 12 48.8954 12 50V54C12 55.1046 12.8954 56 14 56H18C19.1046 56 20 55.1046 20 54V50C20 48.8954 19.1046 48 18 48H14Z" fill="#444B4D"/>
            </svg>
            <div>Highly-qualified service</div>
            <div>
              The policy of our company is only highly-qualified service. You
              can make sure by checking the reviews at the independent review
              website Trustpilot.com.
            </div>
          </div>
          <div class="about_main_items_b">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160" fill="none">
                <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M79.9998 113.333C109.455 113.333 133.333 89.4551 133.333 60C133.333 30.5448 109.455 6.66663 79.9998 6.66663C50.5446 6.66663 26.6665 30.5448 26.6665 60C26.6665 89.4551 50.5446 113.333 79.9998 113.333Z" fill="#444B4D"/>
                <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M43.5874 60L70.453 129.083L79.8393 125.433L89.163 129.116L116.468 60H43.5874ZM63.0794 73.3333H96.8653L79.8394 116.43L63.0794 73.3333Z" fill="#444B4D"/>
                <path opacity="0.3" d="M66.6665 146.667H93.3332C93.3332 154.031 87.3636 160 79.9998 160C72.636 160 66.6665 154.031 66.6665 146.667Z" fill="#444B4D"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M53.3332 113.333C53.3332 109.652 56.3179 106.667 59.9998 106.667H99.9998C103.682 106.667 106.667 109.652 106.667 113.333C106.667 117.015 103.682 120 99.9998 120H59.9998C56.3179 120 53.3332 117.015 53.3332 113.333ZM53.333 126.667C53.333 122.985 56.3178 120 59.9997 120H99.9997C103.682 120 106.666 122.985 106.666 126.667C106.666 130.349 103.682 133.334 99.9997 133.334C103.682 133.334 106.666 136.318 106.666 140C106.666 143.682 103.682 146.667 99.9997 146.667H59.9997C56.3178 146.667 53.333 143.682 53.333 140C53.333 136.318 56.3178 133.334 59.9997 133.334C56.3178 133.334 53.333 130.349 53.333 126.667Z" fill="#444B4D"/>
              </svg>
              <div>
                <div>Save and secure delivery</div>
                <div>
                  Your personal information is
                  not provided to anybody except our coaches to fulfill the
                  service.
                </div>
              </div>
            </div>
            <a href="page/our-advantages" class="about_main_items_b_footer">
              <div>Why you should choose us?</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect opacity="0.8" x="5" y="13" width="2" height="14" rx="1" transform="rotate(-90 5 13)" fill="white"/>
                <path d="M11.2929 17.2929C10.9024 17.6834 10.9024 18.3166 11.2929 18.7071C11.6834 19.0976 12.3166 19.0976 12.7071 18.7071L18.7071 12.7071C19.0857 12.3285 19.0989 11.7189 18.7372 11.3243L13.2372 5.32428C12.864 4.91716 12.2314 4.88965 11.8243 5.26285C11.4172 5.63604 11.3897 6.26861 11.7628 6.67572L16.6159 11.9699L11.2929 17.2929Z" fill="white"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="subs_and_about_under_mask">
        <svg xmlns="http://www.w3.org/2000/svg" width="558" height="692" viewBox="0 0 558 692" fill="none">
          <g opacity="0.05">
          <path d="M101.882 303.981C46.0877 393.543 54.783 473.539 54.783 473.539C88.8395 449.483 117.099 425.571 155.793 377.022C144.344 367.457 144.199 367.892 101.882 303.981Z" fill="white"/>
          <path d="M209.266 642.228C246.076 633.968 282.017 618.461 313.9 600.491C514.906 487.162 655.189 229.202 596.496 84.4258C566.497 10.371 493.747 -10.6426 415.2 4.71904C572.729 14.7186 599.54 182.393 482.878 359.487C432.155 436.44 362.013 503.828 286.799 551.073C284.625 507.017 296.074 459.048 311.581 417.455H311.871L272.307 353.545C246.511 312.097 229.121 283.258 213.179 258.911C165.355 264.273 96.0828 256.448 53.6209 223.985C51.7369 222.681 49.4182 224.855 50.7225 226.739C61.4466 242.825 70.8665 257.027 79.272 269.635C26.2308 352.385 -12.4632 473.25 19.2745 558.898C116.807 487.162 173.181 388.616 173.181 388.616L177.963 391.369C182.021 393.688 185.065 395.282 185.065 395.282C192.311 398.615 198.977 401.224 205.933 403.543C192.311 426.73 138.4 516.436 75.3591 595.564C38.694 639.33 0 636.576 0 636.576C7.39099 643.967 57.099 683.531 156.225 691.646C121.444 678.458 117.531 646.431 129.27 623.388L238.396 411.658C246.221 413.108 254.047 414.267 264.481 415.281C264.481 415.281 268.394 415.571 274.481 416.006C276.8 416.151 279.408 416.296 282.307 416.441C282.162 416.586 219.121 513.973 209.266 642.228ZM54.7803 473.54C54.7803 473.54 45.9401 393.543 101.88 303.982C144.342 367.892 144.342 367.457 155.79 377.022C117.096 425.571 88.8368 449.483 54.7803 473.54ZM163.036 360.791L101.3 267.172C101.3 267.172 149.559 288.04 201.006 283.113L270.133 393.978C270.133 393.833 208.252 393.398 163.036 360.791Z" fill="white"/>
          <path d="M263.035 127.178C250.427 194.276 166.517 216.884 121.592 166.741L121.447 166.596C93.9116 183.117 74.3473 194.856 70.8691 197.03C82.0281 208.189 96.5202 214.565 114.78 219.203C164.778 231.666 221.008 229.492 222.022 229.492L360.422 30.0802C362.451 27.3267 359.118 23.7037 356.219 25.5877C337.38 36.8916 300.57 59.0645 259.412 83.7011C264.484 97.4686 265.933 112.396 263.035 127.178Z" fill="white"/>
          <path d="M29.8548 165.292C29.8548 165.292 66.5199 99.9329 151.009 107.469C134.343 112.686 124.054 136.018 142.749 153.989C174.921 185.002 230.716 168.626 239.411 122.83C241.15 113.7 240.57 104.715 238.252 96.5997C223.905 46.0221 155.212 42.9788 146.951 75.8759C154.487 73.992 162.458 76.6005 167.53 82.5423C172.602 88.4841 173.907 96.7446 170.863 103.846C168.11 110.367 162.313 115.005 155.357 116.164C155.067 116.164 154.922 116.309 154.632 116.309C154.197 116.454 153.763 116.454 153.328 116.454C165.211 111.237 159.704 95.7301 151.009 98.1938C151.299 98.6285 151.589 98.9185 151.879 99.3532C133.619 97.904 56.8102 96.1649 7.97168 165.582C8.84121 164.423 20.29 155.583 29.8548 165.292Z" fill="white"/>
          <path d="M309.265 356.733L323.758 380.355L420.13 205.29C430.42 186.74 432.449 165.147 426.217 145.148L309.265 344.56C306.947 348.328 306.947 352.965 309.265 356.733Z" fill="white"/>
          <path d="M277.669 294.997L398.679 98.0484L383.752 69.6438L286.8 215.869C270.858 239.781 267.67 268.331 277.669 294.997Z" fill="white"/>
          <path d="M637.219 146.886C650.117 227.028 630.118 317.459 579.83 404.702C504.037 536.145 374.912 640.923 236.512 684.835C264.482 680.922 304.77 671.357 351.869 648.169C440.851 604.403 503.747 540.348 540.847 494.263C580.555 444.99 599.83 405.426 600.554 403.687C655.769 297.46 655.769 221.666 646.204 176.885C643.741 165.436 640.552 155.437 637.219 146.886Z" fill="white"/>
          </g>
        </svg>
      </div>
    </div>
    <div class="about">
      <div class="about_info_title about_info_title_m" style="display: none">
        <span>About</span> us
      </div>
      <div class="about_info">
        <div class="about_info_text">
          Since 2015, Cakeboost Company has expanded significantly and is
          permanently growing. Today we are working with clients and players all
          over the world and we are very happy with such experience. Our team
          makes improvements with this regard.<br /><br />We never stop our
          efforts to increase the quality of our services and make the gaming
          and purchasing process as convenient for our clients and highly
          honored players as possible. We are doing everything to worth your
          trust.
        </div>
        <div class="about_info_buttons">
          <a href="page/about">Learn more about us</a>
          <div class="about_info_sliders_button">
            <div class="left">
              <svg style="transform: rotate(180deg)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect opacity="0.8" x="4.1665" y="10.8334" width="1.66667" height="11.6667" rx="0.833333" transform="rotate(-90 4.1665 10.8334)" fill="#C24DFE"/>
                <path d="M9.41091 14.4108C9.08547 14.7362 9.08547 15.2639 9.41091 15.5893C9.73634 15.9147 10.264 15.9147 10.5894 15.5893L15.5894 10.5893C15.9049 10.2738 15.9159 9.76583 15.6145 9.43694L11.0311 4.43694C10.7201 4.09767 10.193 4.07475 9.85372 4.38575C9.51446 4.69674 9.49154 5.22388 9.80253 5.56314L13.8467 9.97498L9.41091 14.4108Z" fill="#C24DFE"/>
              </svg>
            </div>
            <div class="right">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect opacity="0.8" x="4.1665" y="10.8334" width="1.66667" height="11.6667" rx="0.833333" transform="rotate(-90 4.1665 10.8334)" fill="#C24DFE"/>
                <path d="M9.41091 14.4108C9.08547 14.7362 9.08547 15.2639 9.41091 15.5893C9.73634 15.9147 10.264 15.9147 10.5894 15.5893L15.5894 10.5893C15.9049 10.2738 15.9159 9.76583 15.6145 9.43694L11.0311 4.43694C10.7201 4.09767 10.193 4.07475 9.85372 4.38575C9.51446 4.69674 9.49154 5.22388 9.80253 5.56314L13.8467 9.97498L9.41091 14.4108Z" fill="#C24DFE"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="abous_slider">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div
              v-for="item in this.landing.video"
              :key="item"
              class="swiper-slide"
            >
              <a
                data-fancybox="gallery"
                v-bind:href="'https://www.youtube.com/watch?v=' + item"
              >
                <img
                  :src="'https://img.youtube.com/vi/' + item + '/0.jpg'"
                  alt
                />
                <div class="banner_play_button">
                  <div></div>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M21 41.768C21 42.7695 22.1788 43.3055 22.9336 42.6472L38.6619 28.9282C39.1938 28.4642 39.1951 27.6378 38.6646 27.1722L22.9363 13.3667C22.1823 12.7049 21 13.2403 21 14.2435V41.768Z" fill="white"/>
                    </svg>
                  </div>
                </div>
                <div class="banner_play_slider_mask"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <FooterStatic />
  </div>
</template>
<script>
import moment from "moment";
import momenttz from "moment-timezone";
import Cookies from "js-cookie";
import contact_us_popup from "~/components/contact_us_popup.vue";
import FooterStatic from "~/components/FooterStatic.vue";
import CookiesPolicy from "~/components/CookiesPolicy.vue";
import CartItem from "~/components/CartItem.vue";

export default {
  layout: "landing_page",
  head() {
    return {
      script: [
        {
          src: "/jquery.fancybox.min.js",
          defer: true,
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href:'https://cakeboost.com'+this.$route.path
        }
      ],
      title: this.landing.landing[0].seo_title,
       meta: [
      {
        hid: 'description',
        name: 'description',
        content: this.landing.landing[0].seo_descr,
      }
    ],
      bodyAttrs: {
        class: this.$store.getters["get_is_page_speed"],
      },
    };
  },
  components: {
    contact_us_popup,
    FooterStatic,
    CookiesPolicy,
    CartItem
  },
  data() {
    return {
      cookiesOpen: this.$store.getters["get_cookies_open"],
      more: false,
      windowWidth: 900,
      open_more_info_about: false,
      subscribe_form_check: true,
      all_game_popup_check: false,
      region_choose_div: false,
      game_choose_div: false,
      apiImg: this.$store.getters["getApiImgUrl"],
      apiUrl: this.$store.getters["getApiUrl"],
      globalApi: this.$store.getters["getGlobalApi"],
      landing: "",
      games: "",
      gamesSlug: [],
      search_header_game: "",
      sidebar_game_search: "",
      alphabet: [],
      get_game_options: {},
      chasidebar_game_chars: "",
      choosen_filter_game: "",
      choosen_filter_game_slug: "",
      cart: "",
      registration_pop_up: false,
      login_pop_up: false,
      favorite: [],
      favorite_store_temp: this.$store.getters["getFavorite"],
      search_string: "",
      search_start: false,
      search_result: [],
      cart_m_window: false,
      user_m_window: false,
      favorite_m_window: false,
      open_game_list: false,
      open_nav_search: false,
      landing_s: "",
      basement: "",
      user: "",
      open_notification_popup: false,
      notification_popup_more: false,
      sub_mail: "",
      if_sub:false,
      notifications:[],
      notification_enable:false,
    };
  },
  created() {},
  mounted() {
    this.windowWidth = window.innerWidth;
    this.init_swiper(),
      this.set_zone(),
      this.check_qookie_for_token(),
      this.get_favorite(this.favorite_store_temp),
      this.get_games(),
      this.get_landing_s()
    //this.test()
    setTimeout(() => {
      if(dashly) {
        dashly.addCallback('conversation_started', function(data) {
          fbq('track', 'Contact');
        })
      }
    }, 5500)
  },
  watch: {
    search_string: async function () {
      if (this.search_string.split("").length > 2) {
        this.search_start = true;
        let response_search = await this.$axios
          .$get(
            this.apiUrl +
              "sku?filter=title,cs," +
              this.search_string +
              "&size=4"
          )
          .then((data) => {
            for (let i = 0; i < data.records.length; i++) {
              for (let j = 0; j < this.games.records.length; j++) {
                if (data.records[i].game == this.games.records[j].id) {
                  data.records[i].game_slug = this.games.records[j].slug;
                  break;
                }
              }
              this.search_result = data.records;
            }
          });
      } else {
      }
    },
  },
  async fetch() {
    let currentDate = moment()
      .tz("Europe/Berlin")
      .format("YYYY-MM-DD HH:mm:ss");
    let best_offers = [];
    let apiUrl = this.$store.getters["getApiUrl"];
    let globalApi = this.$store.getters["getGlobalApi"];
    let landing;
    let landing_s = "";
    let basement = "";
    let alphabet = [];
    let choosen_filter_game = "";
    let choosen_filter_game_slug = "";
    let response = await this.$axios
      .post(globalApi + "requests.php", {
        method: "land_list",
      })
      .then((data) => {
        landing = data.data;
        landing.video = landing.landing[0].yt_id.split(",");
        landing.games.games_list.sort(
          (a, b) => parseFloat(a.orders) - parseFloat(b.orders)
        );
        choosen_filter_game = landing.games.games_list[0].id;
        choosen_filter_game_slug = landing.games.games_list[0].slug;
        for (let i = 0; i < landing.games.games_list.length; i++) {
          alphabet += landing.games.games_list[i].title.split("")[0];
          alphabet = Array.from(new Set(alphabet)).join("");

          alphabet = alphabet.replace(/,/g, "").split("");
          alphabet.sort();
        }
        for (let i = 0; i < landing.main_prods.length; i++) {
          landing.main_prods[i].stars = [];
          if (landing.main_prods[i].gl_rating == 0) {
            landing.main_prods[i].stars = ["n", "n", "n", "n", "n"];
          } else {
            for (let j = 0; j < landing.main_prods[i].gl_rating; j++) {
              landing.main_prods[i].stars.push("s");
            }
            for (
              let j = 0;
              j < Math.floor(5 - landing.main_prods[i].gl_rating);
              j++
            ) {
              landing.main_prods[i].stars.push("n");
            }
          }
        }
        for (let i = 0; i < landing.top_serv.length; i++) {
          landing.top_serv[i].stars = [];
          if (landing.top_serv[i].gl_rating == 0) {
            landing.top_serv[i].stars = ["n", "n", "n", "n", "n"];
          } else {
            for (let j = 0; j < landing.top_serv[i].gl_rating; j++) {
              landing.top_serv[i].stars.push("s");
            }
            for (
              let j = 0;
              j < Math.floor(5 - landing.top_serv[i].gl_rating);
              j++
            ) {
              landing.top_serv[i].stars.push("n");
            }
          }
        }
      });
    this.landing = landing;
    this.landing_s = landing_s;
    this.alphabet = alphabet;
    this.choosen_filter_game = choosen_filter_game;
    this.choosen_filter_game_slug = choosen_filter_game_slug;
  },
  methods: {
    closeCookie() {
      this.$refs.cookiesPolicy.cookiesOpen = !this.$refs.cookiesPolicy.cookiesOpen;
      // this.cookiesOpen = !this.cookiesOpen;
      // this.$store.commit("set_cookies_open", this.cookiesOpen)
    },
    selectGame(item, index){
      if(this.chasidebar_game_chars == item){
        this.chasidebar_game_chars = '';
      } else {
        this.chasidebar_game_chars = item;
      }
      this.sidebar_game_search = ''
    },
    filterGame(){
      if(this.sidebar_game_search == '' && this.chasidebar_game_chars == ''){
        return this.landing.games.games_list
      } else if(this.sidebar_game_search == ''){
        let filterGameList = this.landing.games.games_list.filter(game => game.title.split('')[0] == this.chasidebar_game_chars);
        return filterGameList;
      } else {
        let filterGameList = this.landing.games.games_list.filter(game => game.title.toLowerCase().includes(this.sidebar_game_search));
        return filterGameList;
      }
    },
     get_notification_enable(){
      if(Cookies.get('notifications')){
        this.notification_enable = Cookies.get('notifications') == "true" ? true : false;
      }else{
        this.notification_enable = true;
        Cookies.remove("notifications");
        Cookies.set("notifications", true, { expires: 3000 });
      }
    },
    notification_view_change(){
      this.notification_enable = this.notification_enable?false:true;
      Cookies.remove("notifications");
      Cookies.set("notifications", this.notification_enable, { expires: 3000 });
    },
    async get_notifications(){
      let response_notifications = await this.$axios
        .post(this.globalApi + "requests.php", {method: "not_list", "token": this.get_access()})
        .then((data) => {
          if(data.data.notifications){
              this.notifications = data.data.notifications;
              this.get_notification_enable()
          }
    });
    },
    async delete_notifications(id){
      let response_notifications = await this.$axios
          .post(this.globalApi + "requests.php",{method: "not_del", "id":id, "token": this.get_access()})
          .then((data) => {
            if(data.data.status == '200'){
                this.get_notifications();
             }
      });
    },
    async send_subscribe() {
      if (this.subscribe_form_check) {
        let mail_sub = await this.$axios
          .$post(this.globalApi + "requests.php", {
            method: "user_subscr",
            email: this.sub_mail,
          })
          .then((data) => {
            console.log(data);
            if(data.status == 108){
              this.if_sub = true;
            }
          });
      }
    },
    init_swiper() {
      var mySwiper = new Swiper(".abous_slider .swiper-container", {
        speed: 1000,
        spaceBetween: 16,
        slidesPerView: "auto",
        navigation: {
          nextEl: ".about_info_buttons .right",
          prevEl: ".about_info_buttons .left",
        },
      });

      var mySwiper_rev = new Swiper(".reviews_swiper .swiper-container", {
        speed: 1000,
        spaceBetween: 24,
        slidesPerView: "auto",
      });
      this.$forceUpdate();
    },
    reviews_text_filter(text) {
      let strippedString = text.replace(/(<([^>]+)>)/gi, "");
      return strippedString;
    },
    set_focus() {
      //this.$refs.game_search.focus();
      //document.getElementById("game_search").focus();
      $(".game_search").focus();
    },
    scroll_to_top() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    async get_cart(cart) {
      this.$store.commit("setItemInCard", JSON.parse(cart));
    },
    get_cart_format_time(date) {
      let temp = moment(date).format("llll");
      return (
        temp.split(",")[0] +
        " " +
        temp.split(",")[1].split(" ")[2] +
        " " +
        temp.split(",")[1].split(" ")[1]
      );
    },
    set_zone() {
      if (Cookies.get("zone")) {
        this.$store.commit("setSelectedZone", Cookies.get("zone"));
      } else {
        Cookies.set("zone", "us", { expires: 30 });
        this.$store.commit("setSelectedZone", "us");
      }
    },
    change_zone(zone) {
      Cookies.set("zone", zone, { expires: 30 });
      this.$store.commit("setSelectedZone", zone);
    },
    open_first_item_galery() {
      document
        .querySelector(".swiper-slide-active .banner_play_button")
        .click();
    },
    async get_user() {
      let response_t = await this.$axios
        .$post(this.globalApi + "requests.php", {
          method: "user_info",
          access_token: this.get_access(),
          fields: "all",
          orders: "all",
        })
        .then((data) => {
          console.log(data);
          this.user = data.user;
          if(this.user.subscribe == 1){
            this.if_sub =  true;
          }
          else{
            this.sub_mail = this.user.email;
          }
          if (this.user.nofields == "") {
            this.user.nofields = [];
          } else {
            this.user.nofields = this.user.nofields.split(",");
          }
          this.orders = data.orders;
          for (let i = 0; i < this.orders.length; i++) {
            for (let i = 0; i < this.orders.length; i++) {
              if (this.orders[i].trash == 1) {
                this.orders.splice(i, 1);
                i--;
              } else {
                try {
                  this.orders[i].cart = JSON.parse(this.orders[i].cart);
                } catch (error) {

                }
              }
            }
          }
        });
      let response_game_fields = await this.$axios
        .$post(this.globalApi + "requests.php", {
          method: "fields_lk",
          access_token: this.get_access(),
        })
        .then((data) => {});
    },
    redirect_url() {
      if (
        window.location.origin ==
        "http://ec2-54-193-108-3.us-west-1.compute.amazonaws.com"
      ) {
        window.location.href = window.location.href.replace(
          "http://ec2-54-193-108-3.us-west-1.compute.amazonaws.com",
          "https://cakeboost.com"
        );
      } else {
        let robots = '<meta data-n-head="ssr" name="robots" content="noindex, nofollow">'
        document.querySelector('head').append(robots)
      }
    },
    async load_sku(game) {
      let response_data_sku_day = await this.$axios
        .$get(this.apiUrl + "top_services?filter=game_id,eq," + game)
        .then((data) => {
          if (data.records.length > 0) {
            let response_data_sku_day_ = this.$axios
              .$get(this.apiUrl + "sku/" + data.records[0].offer_id)
              .then((data_sku) => {
                this.landing.top_serv[0] = data_sku;
                this.landing.top_serv[0].end_date = data.records[0].end_date;
                this.landing.top_serv[0].stars = [];
                if (this.landing.top_serv[0].gl_rating == 0) {
                  this.landing.top_serv[0].stars = ["n", "n", "n", "n", "n"];
                } else {
                  for (let j = 0; j < this.landing.top_serv[0].gl_rating; j++) {
                    this.landing.top_serv[0].stars.push("s");
                  }
                  for (
                    let j = 0;
                    Math.floor(j < 5 - this.landing.top_serv[0].gl_rating);
                    j++
                  ) {
                    this.landing.top_serv[0].stars.push("n");
                  }
                }
                let response_data_sku = this.$axios
                  .$get(
                    this.apiUrl +
                      "sku?filter=game,eq," +
                      game +
                      "&filter=on_main,eq,1&size=7"
                  )
                  .then((data) => {
                    this.landing.main_prods = data.records;
                    for (let i = 0; i < this.landing.main_prods.length; i++) {
                      if (
                        this.landing.main_prods[i].id ==
                        this.landing.top_serv[0].id
                      ) {
                        this.landing.main_prods.splice(i, 1);
                        i--;
                      } else {
                        this.landing.main_prods[i].stars = [];
                        if (this.landing.main_prods[i].gl_rating == 0) {
                          this.landing.main_prods[i].stars = [
                            "n",
                            "n",
                            "n",
                            "n",
                            "n",
                          ];
                        } else {
                          for (
                            let j = 0;
                            j < this.landing.main_prods[i].gl_rating;
                            j++
                          ) {
                            this.landing.main_prods[i].stars.push("s");
                          }
                          for (
                            let j = 0;
                            j <
                            Math.floor(
                              5 - this.landing.main_prods[i].gl_rating
                            );
                            j++
                          ) {
                            this.landing.main_prods[i].stars.push("n");
                          }
                        }
                      }
                    }
                  });
                this.$forceUpdate();
              });
          } else {
            this.landing.top_serv[0] = undefined;

            let response_data_sku = this.$axios
              .$get(
                this.apiUrl +
                  "sku?filter=game,eq," +
                  game +
                  "&filter=on_main,eq,1&size=7"
              )
              .then((data) => {
                this.landing.main_prods = data.records;
                for (let i = 0; i < this.landing.main_prods.length; i++) {
                  this.landing.main_prods[i].stars = [];
                  if (this.landing.main_prods[i].gl_rating == 0) {
                    this.landing.main_prods[i].stars = [
                      "n",
                      "n",
                      "n",
                      "n",
                      "n",
                    ];
                  } else {
                    for (
                      let j = 0;
                      j < this.landing.main_prods[i].gl_rating;
                      j++
                    ) {
                      this.landing.main_prods[i].stars.push("s");
                    }
                    for (
                      let j = 0;
                      j < Math.floor(5 - this.landing.main_prods[i].gl_rating);
                      j++
                    ) {
                      this.landing.main_prods[i].stars.push("n");
                    }
                  }
                }
              });
            this.$forceUpdate();
          }
        });
    },
    // set_salestime_skus(time) {
    //   let berlin_m = moment().tz("Europe/Berlin").format("YYYY-MM-DD HH:mm:ss");
    //   let temp_cedt = moment.duration(
    //     moment(time + " 23:59:59").diff(moment(berlin_m))
    //   );
    //   if (temp_cedt.valueOf() > 0) {
    //     temp_cedt =
    //       temp_cedt.hours() +
    //       ":" +
    //       temp_cedt.minutes() +
    //       ":" +
    //       temp_cedt.seconds();
    //     return temp_cedt;
    //   } else {
    //     return null;
    //   }
    // },
    async check_qookie_for_token() {
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
      let temp_r = matches_r ? decodeURIComponent(matches_r[1]) : undefined;
      if (!temp) {
        if (Cookies.get("f_token")) {
          let response_get_cart = this.$axios
            .$get(
              this.apiUrl +
                "carts/" +
                JSON.parse(Cookies.get("f_token")).cart_id
            )
            .then((data) => {
              this.get_cart(data.cart);
            });
        }
      } else {
        let response = await this.$axios
          .post(this.globalApi + "requests.php", {
            access_token: temp,
            req: "1",
            method: "user_auth",
          })
          .then((data) => {
            if (data.data.status == "200") {
              this.$store.commit("setUserLoginCheck", true);
              this.$store.commit("setUserLoginId", temp.split(".")[1]);
              let response = this.$axios
                .get(
                  this.apiUrl +
                    "carts/" +
                    JSON.parse(atob(temp.split(".")[1])).cart_id
                )
                .then((data) => {
                  this.get_cart(data.data.cart);
                  this.get_user();
                  this.get_notifications();
                });
            }
            if (data.data.status == "202") {
              let response = this.$axios
                .post(this.globalApi + "requests.php", {
                  refresh_token: temp_r,
                  req: "r",
                  method: "user_auth",
                })
                .then((data) => {
                  let date_r = new Date(Date.now() + 30 * 86400e3);
                  date_r = date_r.toUTCString();
                  Cookies.remove("access_t");
                  Cookies.remove("refresh_t");
                  Cookies.set("access_t", data.data.jwt, {
                    expires: date_r,
                  });
                  this.setCookie(
                    "refresh_t",
                    JSON.stringify(data.data.refresh),
                    {
                      expires: date_r,
                    }
                  );
                  this.$store.commit("setUserLoginCheck", true);
                  this.$store.commit("setUserLoginId", temp.split(".")[1]);
                  let response = this.$axios
                    .get(
                      this.apiUrl +
                        "carts/" +
                        JSON.parse(atob(data.data.jwt.split(".")[1])).cart_id
                    )
                    .then((data) => {
                      this.get_cart(data.data.cart);
                      this.get_user();
                      this.get_notifications();
                    });
                });
            }
          });
      }
    },
    async get_favorite(favorite_store_temp) {
      if (favorite_store_temp == "") {
        this.favorite = [];
      } else {
        let temp = favorite_store_temp.split(",");
        let response_data_sku = await this.$axios
          .$get(this.apiUrl + "sku?filter=id,in," + favorite_store_temp)
          .then((data) => {
            this.favorite = data.records;
          });
      }
    },
    async get_landing_s() {
      let response_data_sku = await this.$axios
        .$get(this.apiUrl + "landing_s")
        .then((data) => {
          this.landing_s = data.records[0];
          this.basement = JSON.parse(data.records[0].basement);
        });
    },
    async get_games() {
      // let response_games = await this.$axios
      //   .$get(this.apiUrl + "game?order=orders,asc")
      //   .then((data) => {
      //     let temp = JSON.stringify(data);
      //     this.games = JSON.stringify(data);
      //     this.games = JSON.parse(this.games);
      //     this.games.records.forEach(element =>
      //       this.gamesSlug[element.id] = element.slug
      //     );
      //     this.$store.commit("gamesSlug", this.gamesSlug);
      //   });
      let response_games = await this.$axios
        .$get(this.apiUrl + "game?order=orders,asc&filter=status,eq,1&filter=trash,eq,0")
        .then((data) => {
          let temp = JSON.stringify(data);
          this.games = JSON.stringify(data);
          this.games = JSON.parse(this.games);
          this.games.records.forEach(element =>
            this.gamesSlug[element.id] = element.slug
          );
          this.$store.commit("set_gameSlug", this.gamesSlug);
          if (!Cookies.get("game")) {
            Cookies.remove("game");
            Cookies.set("game", this.games.records[0].id, { expires: 30 });
            this.$store.commit("setGlobal_game", this.games.records[0].slug);
            this.$store.commit("setGlobal_game_id", this.games.records[0].id);
            this.get_game_options = JSON.parse(this.games.records[0].options);
          } else {
            this.$store.commit("setGlobal_game_id", this.getCookie("game"));
            for (let i = 0; i < this.games.records.length; i++) {
              if (this.games.records[i].id == Cookies.get("game")) {
                this.$store.commit(
                  "setGlobal_game",
                  this.games.records[i].slug
                );
                this.get_game_options = JSON.parse(
                  this.games.records[i].options
                );
                break;
              }
            }
          }
        });
    },
    testGameList(id){
      return this.gamesSlug[id]
    },
    logout() {
      Cookies.remove("access_t");
      Cookies.remove("refresh_t");
      window.location.href = window.location.origin;
    },
    async delete_cart_item(index) {    
      let cart = {};
      cart["index"] = index;
      if (this.get_access()) {
        cart["userid"] = this.get_access();
      } else {
        cart["userid"] = this.getCookie("f_token");
      }
      cart["method"] = "delete";
      let response_data_sku = await this.$axios
        .$post(this.globalApi + "handlers/cart/cart.php", cart)
        .then((data) => {
          this.$store.commit("setItemInCard", data);
        });
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
    async test() {
      let response_data_sku = await this.$axios
        .$post(this.globalApi + "order_status.php", { id: 196 })
        .then((data) => {
          console.log(data);
        });
    },
  },
};
</script>
