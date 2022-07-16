<template>
  <div class="content">
     <div class="popUpMask" v-if="if_buy_pack" @click.self="if_buy_pack=false" v-bind:class="{ active_card: if_buy_pack }">
      <div
        class="addpackToCard"
        v-if="if_buy_pack"
        v-bind:class="{ active_card_popup: if_buy_pack }"
      >
        <div class="closePopUp">
          <img
            src="/img/Close.svg"
            class="closePopUpImg"
            @click="if_buy_pack = false"
            alt
          />
        </div>
         <div class="buy_pack_title">
          <div>Choose a payment system</div>
          <div>{{choosen_pack.title}}</div>
           <div class="paymentSystemItems">
              <div
                v-for="item in this.payments"
                :key="item.id"
                @click="payment_type = item.id"
                :class="{ active: payment_type == item.id }"
              >
                <img :src="apiImg + 'gicons/' + item.img" alt />
              </div>
            </div>
            <div style="text-align:center;">
            <button @click="send_payment_pack()">Buy</button>
            </div>
        </div>
      </div>
    </div>
    <div class="profileGreetings">Welcome, Nikolay!</div>
    <div class="chooseAreaTab">
      <div
        @click="tab = 'order'"
        v-bind:class="{ active: tab == 'order' }"
        id="ordersHistoryTab"
      >
        Orders history
      </div>
      <div
        @click="tab = 'data'"
        v-bind:class="{ active: tab == 'data' }"
        id="personalDataTab"
      >
        Personal data
      </div>
      <div
        @click="tab = 'bonus'"
        v-bind:class="{ active: tab == 'bonus' }"
        id="bonusReferalSystem"
      >
        Bonus & Referal system
      </div>
    </div>
    <div v-if="tab == 'order'" class="ordersHistoryTab">
      <div class="title">
        All orders
        <span v-if="orders != null">{{ orders.length }} orders</span>
        <span v-else>{{ 0 }} orders</span>
      </div>
      <ul class="ordersFilter">
        <li
          v-bind:class="{
            active:
              JSON.stringify(orders_filter) == JSON.stringify([0, 1, 2, 3]),
          }"
          @click="orders_filter = [0, 1, 2, 3]"
        >
          All
        </li>
        <li
          v-bind:class="{
            active: JSON.stringify(orders_filter) == JSON.stringify([0, 1, 2]),
          }"
          @click="orders_filter = [0, 1, 2]"
        >
          Delivering
        </li>
        <li
          v-bind:class="{
            active: JSON.stringify(orders_filter) == JSON.stringify([3]),
          }"
          @click="orders_filter = [3]"
        >
          Completed
        </li>
      </ul>
      <div
        class="orderItem"
        v-if="
          orders != null &&
          orders_filter.indexOf(parseInt(item.status, 10)) != -1
        "
        v-for="item in orders"
        :key="item.id"
      >
        <div class="orderId">
          Order №{{ item.id }}
          <!-- <span>{{ item.cart.cart_items.length }} items</span> -->
        </div>
        <table>
          <thead>
            <tr>
              <td>Photo</td>
              <td>Name</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Total</td>
              <td>Options &amp; Comment</td>
            </tr>
          </thead>
        </table>
        <div v-for="(sub_item, index) in item.cart.cart_items" :key="index">
          <table>
            <tbody>
              <tr>
                <td>
                  <img
                    :src="apiImg + 'sku/' + sub_item.product.image"
                    width="96px"
                    height="96px"
                    style="object-fit: cover; border: 1px solid #d5d7d7"
                    alt
                  />
                </td>
                <td>{{ sub_item.product.title }}</td>
                <td v-if="$store.getters['getSelectedZone'] == 'us'">
                  {{
                    parseFloat(sub_item.product.price_usd) +
                    parseFloat(sub_item.option_total_us)
                  }}$
                </td>
                <td v-if="$store.getters['getSelectedZone'] == 'eu'">
                  {{
                    parseFloat(sub_item.product.price_eur) +
                    parseFloat(sub_item.option_total_eu)
                  }}€
                </td>
                <td>{{ sub_item.count }}</td>
                <td v-if="$store.getters['getSelectedZone'] == 'us'">
                  {{
                    (parseFloat(sub_item.product.price_usd) +
                      parseFloat(sub_item.option_total_us)) *
                    parseFloat(sub_item.count)
                  }}$
                </td>
                <td v-if="$store.getters['getSelectedZone'] == 'eu'">
                  {{
                    (parseFloat(sub_item.product.price_eur) +
                      parseFloat(sub_item.option_total_eu)) *
                    parseFloat(sub_item.count)
                  }}€
                </td>
                <td>
                  <span
                    v-for="subitem in sub_item.subcheckbox_list"
                    :key="subitem.count"
                    >{{ subitem.title }}</span
                  >

                  <span
                    v-for="subitem in sub_item.checkbox_list"
                    :key="subitem.count"
                    >{{ subitem.array.title }}</span
                  >

                  <span
                    v-for="subitem in sub_item.single_slider"
                    :key="subitem.title"
                    >{{ subitem.title }} : {{ subitem.real_value }}</span
                  >

                  <span
                    v-for="subitem in sub_item.double_slider"
                    :key="subitem.title"
                    >{{ subitem.slider_title }} :
                    {{ subitem.title.replace(";", " - ") }}</span
                  >

                  <span v-for="subitem in sub_item.calc" :key="subitem.title"
                    >{{ subitem.array.title }} :
                    {{
                      parseFloat(subitem.array.min) +
                      parseFloat(
                        parseFloat(subitem.array.step) *
                          parseFloat(subitem.count)
                      )
                    }}</span
                  >
                </td>
              </tr>
            </tbody>
          </table>
          <div class="mobileItemInfo">
            <div>
              <div>Photo</div>
              <div>
                <img :src="apiImg + 'sku/' + sub_item.product.image" alt />
              </div>
            </div>
            <div>
              <div>Service</div>
              <div>
                {{ sub_item.product.title }}
                <br />
                <a href>Write the review</a>
              </div>
            </div>
            <div>
              <div>Price</div>
              <div v-if="$store.getters['getSelectedZone'] == 'us'">
                {{
                  parseFloat(sub_item.product.price_usd) +
                  parseFloat(sub_item.option_total_us)
                }}$
              </div>
              <div v-if="$store.getters['getSelectedZone'] == 'eu'">
                {{
                  parseFloat(sub_item.product.price_eur) +
                  parseFloat(sub_item.option_total_eu)
                }}€
              </div>
            </div>
            <div>
              <div>Quantity</div>
              <div>{{ sub_item.count }}</div>
            </div>
            <div>
              <div>Total</div>
              <div v-if="$store.getters['getSelectedZone'] == 'us'">
                {{
                  (parseFloat(sub_item.product.price_usd) +
                    parseFloat(sub_item.option_total_us)) *
                  parseFloat(sub_item.count)
                }}$
              </div>
              <div v-if="$store.getters['getSelectedZone'] == 'eu'">
                {{
                  (parseFloat(sub_item.product.price_eur) +
                    parseFloat(sub_item.option_total_eu)) *
                  parseFloat(sub_item.count)
                }}€
              </div>
            </div>
            <div>
              <div>Options &amp; Comment</div>
              <div>
                <span
                  v-for="subitem in sub_item.subcheckbox_list"
                  :key="subitem.count"
                  >{{ subitem.title }}</span
                >

                <span
                  v-for="subitem in sub_item.checkbox_list"
                  :key="subitem.count"
                  >{{ subitem.array.title }}</span
                >

                <span
                  v-for="subitem in sub_item.single_slider"
                  :key="subitem.title"
                  >{{ subitem.title }} : {{ subitem.real_value }}</span
                >

                <span
                  v-for="subitem in sub_item.double_slider"
                  :key="subitem.title"
                  >{{ subitem.slider_title }} :
                  {{ subitem.title.replace(";", " - ") }}</span
                >

                <span v-for="subitem in sub_item.calc" :key="subitem.title"
                  >{{ subitem.array.title }} :
                  {{
                    parseFloat(subitem.array.min) +
                    parseFloat(
                      parseFloat(subitem.array.step) * parseFloat(subitem.count)
                    )
                  }}</span
                >
              </div>
            </div>
          </div>
          <div class="progressLine">
            <div v-bind:class="{ active: sub_item.status == 0 || !sub_item.status }">
              <div class="circle">
                <div></div>
              </div>
              <span>Accepted</span>
            </div>
            <div v-bind:class="{ active: sub_item.status == 1 }">
              <div class="circle">
                <div></div>
              </div>
              <span>Preparing</span>
            </div>
            <div v-bind:class="{ active: sub_item.status == 2 }">
              <div class="circle">
                <div></div>
              </div>
              <span>Delivering</span>
            </div>
            <div v-bind:class="{ active: sub_item.status == 3 }">
              <div class="circle">
                <div></div>
              </div>
              <span>Completed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="tab == 'data'" class="personalDataTab">
      <div class="fillProfile">
        <div>
          Fill your account to
          <span>80%</span> to get
          <span>
            <a href="#" @click="tab = 'bonus'">{{this.coin_settings.lk_coins}} Cakecoins</a>
          </span>
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
        <div class="yetToFill">
          <div v-if="this.user.nofields && this.user.nofields.length != 0">
            Yet to fill:
          </div>
          <div v-if="this.user.nofields && this.user.nofields.length != 0">
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
      <div class="majorInfo">
        <div>
          <h1>General information</h1>
          <!--h2>Fill all of your contacts</!--h2-->
          <div class="majorInfoInput">
            <div>Email</div>
            <input
              class="lock"
              type="text"
              v-model="user.email"
              name
              id
              readonly
            />
          </div>
          <div class="majorInfoInput">
            <div>Nickname</div>
            <input v-model="user.nick" type="text" name id />
          </div>
          <div class="majorInfoInput">
            <div>First Name</div>
            <input v-model="user.name" type="text" name id />
          </div>
          <div class="majorInfoInput">
            <div>Last Name</div>
            <input v-model="user.lname" type="text" name id />
          </div>
          <div class="majorInfoInput">
            <div>Link to Armory profile (Nickname/Server)</div>
            <input v-model="user.armory" type="text" name id />
          </div>
          <div class="majorInfoInput" style="position: relative">
            <div>Country</div>
            <input
              v-model="user.country"
              class="country_input"
              readonly
              type="text"
              @click="countries_list_open = countries_list_open ? false : true"
            />
            <div
              class="countries_list"
              style="padding-top: 60px"
              v-if="countries_list_open"
            >
              <div class="country_search" style="top: 8px">
                <input
                  v-model="country_search"
                  type="text"
                  placeholder="Search the country..."
                  value
                  class="searchInput"
                />
              </div>
              <div>
                <div
                  v-for="item in this.countries.countries"
                  v-if="
                    country_search == '' ||
                    item.country.country_name
                      .toLowerCase()
                      .includes(country_search.toLowerCase())
                  "
                  :key="item.country_id"
                  @click="
                    (user.country = item.country.country_name),
                      (countries_list_open = false)
                  "
                >
                  {{ item.country.country_name }}
                </div>
              </div>
            </div>
          </div>
          <div v-if="check_info_change" style="color: #0dc143;font-weight: 400;font-size: 14px;font-family: Roboto;">
            Information changed
          </div>
          <div class="subscribeRButton">
            <div
              v-bind:class="{ active: user.subscribe == 1 }"
              @click="change_mailing()"
            >
              <div></div>
            </div>
            <span>Subscribe to our Email newsletter</span>

          </div>
          <div
            style="display: flex; justify-content: flex-end; flex-warp: warp"
          >
            <button id="logout" @click="logout()">Logout</button>
            <button
              style="margin-left: 6px"
              :class="{ change_password_button_active: change_password_form }"
              id="cnahgePassword"
              @click="
                change_password_form = change_password_form ? false : true
              "
            >
              Change password
            </button>
            <button
              style="margin-left: 6px"
              id="cnahgePassword"
              @click="change_info()"
            >
              Save information
            </button>
          </div>
          <div v-if="change_password_form" class="change_password_form">
            <div class="majorInfoInput">
              <div>Current password</div>
              <input
                v-model="change_password.password"
                placeholder="Type current password..."
                type="text"
                name
                id
              />
            </div>
            <div class="majorInfoInput">
              <div>New password</div>
              <input
                v-model="change_password.new_password"
                placeholder="Type new password..."
                type="text"
                name
                id
              />
            </div>
            <div class="majorInfoInput">
              <div>Confirm password</div>
              <input
                v-model="change_password.check_new_password"
                placeholder="Type one more time"
                type="text"
                name
                id
              />
            </div>
            <div
              :class="{
                result_failure: result_failure,
                result_success: result_success,
              }"
            >
              {{ resultText }}
            </div>
            <div style="display: flex; justify-content: flex-start">
              <button id="logout" @click="send_change_password()">
                Change
              </button>
              <button
                style="margin-left: 6px"
                id="cnahgePassword"
                @click="
                  (change_password_form = false),
                    (change_password.password = ''),
                    (change_password.new_password = ''),
                    (change_password.check_new_password = '')
                "
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
        <div></div>
        <div>
          <h1>Social links</h1>
          <h2>Fill at least 2 contacts</h2>
          <div class="majorInputSochialLogo">
            <div>
              <img src="/img(ColorSochialLogo)/Skype.svg" alt />
            </div>
            <div class="majorInfoInput">
              <div>Skype</div>
              <input v-model="user.skype" type="text" name id />
            </div>
          </div>
          <div class="majorInputSochialLogo">
            <div>
              <img src="/img(ColorSochialLogo)/Discord.svg" alt />
            </div>
            <div class="majorInfoInput">
              <div>Discord</div>
              <input
                placeholder="example#1111"
                v-model="user.discord"
                type="text"
                name
                id
              />
            </div>
          </div>
          <div class="majorInputSochialLogo">
            <div>
              <img src="/img(ColorSochialLogo)/Telegram.svg" alt />
            </div>
            <div class="majorInfoInput">
              <div>Telegram</div>
              <input v-model="user.telegram" type="text" name id />
            </div>
          </div>
          <div class="majorInputSochialLogo">
            <div>
              <img src="/img(ColorSochialLogo)/Twitch.svg" alt />
            </div>
            <div class="majorInfoInput">
              <div>Twitch</div>
              <input v-model="user.twitch" type="text" name id />
            </div>
          </div>
          <div class="majorInputSochialLogo">
            <div>
              <img src="/img(ColorSochialLogo)/WhatsApp.svg" alt />
            </div>
            <div class="majorInfoInput">
              <div>What’s App</div>
              <input v-model="user.whatsapp" type="text" name id />
            </div>
          </div>
          <div class="majorInputSochialLogo">
            <div>
              <img src="/img(ColorSochialLogo)/Viber.svg" alt />
            </div>
            <div class="majorInfoInput">
              <div>Viber</div>
              <input v-model="user.viber" type="text" name id />
            </div>
          </div>
        </div>
      </div>
      <div class="couponInfo" v-if="user.coupons != ''">
        <div>Coupons</div>
        <div>
          <div
            v-for="item in user.coupons"
            :key="item.id"
            class="couponInfo_items"
          >
            <div>{{ item.code }}</div>
            <div>Discount: {{ item.discount }}%</div>
            <div>Lifetime: {{ item.enddate }}</div>
            <div v-if="item.usages == 0">Number of uses: &#8734;</div>
            <div v-else>Number of uses: {{ item.usages }}</div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="tab == 'bonus'" class="bonusReferalSystem">
      <div class="referalNumber">
        <div>
          <div>From referal system</div>
          <div>{{user.coin_ref}}</div>
        </div>
        <div class="separator"></div>
        <div>
          <div>From purchases</div>
          <div>{{user.coin_prod}}</div>
        </div>
        <div class="separator"></div>
        <div>
          <div>Your current balace</div>
          <div class="curBalance">
            {{user.balance}}
          </div>
        </div>
        <div class="separator"></div>
        <div>
          <div>From packs</div>
          <div>{{user.coin_pack}}</div>
        </div>
        <div class="separator"></div>
        <div>
          <div>Other transactions</div>
          <div>{{user.coin_prof}}</div>
        </div>
      </div>
      <h5 v-if="coin_settings.text_f">{{ coin_settings.text_f.block_1.mainTitle }}</h5>
      <div class="cardPack">
        <div style="position: relative;">
          <div class="container_sale" >
          <div
            class="bestSale"

            v-if="packs.first.sales == 1 || packs.first.sales_2 == 1"
            v-bind:class="{
              border_zero_sale:
                packs.first.sales == packs.first.hot || packs.first.sales_2 == packs.first.hot,
            }"
          >
            {{ packs.first.sales_discount }}% OFF
          </div>
        </div>
          <div>
            <img :src="apiImg + 'sku/' + packs.first.image" alt />
          </div>
          <div class="cardTitle">
            <div>{{ packs.first.title }}</div>
            <div>{{ packs.first.descr }}</div>
          </div>
          <div class="separator"></div>
          <div class="cakeCoins">{{ packs.first.quant_coins }} Cc</div>
          <div
            v-if="
              packs.first.sales == 1 &&
              $store.getters['getSelectedZone'] == 'us'
            "
            class="price"
          >
            <div>{{ packs.first.price_usd }} USD</div>
            <div>{{ packs.first.price_usd_sale }} USD</div>
          </div>
          <div
            v-if="
              packs.first.sales_2 == 1 &&
              $store.getters['getSelectedZone'] == 'us'
            "
            class="price"
          >
            <div>{{ packs.first.price_usd }} USD</div>
            <div>{{ packs.first.price_usd_sale2 }} USD</div>
          </div>
          <div
            v-if="
              packs.first.sales_2 == 0 &&
              packs.first.sales == 0 &&
              $store.getters['getSelectedZone'] == 'us'
            "
            class="price"
          >
            <div>{{ packs.first.price_usd }} USD</div>
          </div>

          <div
            v-if="
              packs.first.sales == 1 &&
              $store.getters['getSelectedZone'] == 'eu'
            "
            class="price"
          >
            <div>{{ packs.first.price_eur }} EUR</div>
            <div>{{ packs.first.price_eur_sale }} EUR</div>
          </div>
          <div
            v-if="
              packs.first.sales_2 == 1 &&
              $store.getters['getSelectedZone'] == 'eu'
            "
            class="price"
          >
            <div>{{ packs.first.price_eur }} EUR</div>
            <div>{{ packs.first.price_eur_sale2 }} EUR</div>
          </div>
          <div
            v-if="
              packs.first.sales_2 == 0 &&
              packs.first.sales == 0 &&
              $store.getters['getSelectedZone'] == 'eu'
            "
            class="price"
          >
            <div>{{ packs.first.price_eur }} EUR</div>
          </div>
          <div>
            <button  @click="buy_pack(packs.first)">Buy now</button>
          </div>
        </div>
        <div class="popular" style="position: relative;">
          <div
            class="container_sale"
            style="right: 111px;
                  border: 0;
                  height: 20px;"
            >
          <div
            class="bestSale"
            style="border-radius: 0px 0px 6px 6px;"
            v-if="packs.second.sales == 1 || packs.second.sales_2 == 1"
            v-bind:class="{
              border_zero_sale:
                packs.second.sales == packs.second.hot || packs.second.sales_2 == packs.second.hot,
            }"
          >
            {{ packs.second.sales_discount }}% OFF
          </div>
        </div>
          <div class="polularBanner">Most popular</div>
          <div>
            <img :src="apiImg + 'sku/' + packs.second.image" alt />
          </div>
          <div class="cardTitle">
            <div>{{ packs.second.title }}</div>
            <div>{{ packs.second.descr }}</div>
          </div>
          <div class="separator"></div>
          <div class="cakeCoins">{{ packs.second.quant_coins }} Cc</div>
          <div
            v-if="
              packs.second.sales == 1 &&
              $store.getters['getSelectedZone'] == 'us'
            "
            class="price"
          >
            <div>{{ packs.second.price_usd }} USD</div>
            <div>{{ packs.second.price_usd_sale }} USD</div>
          </div>
          <div
            v-if="
              packs.second.sales_2 == 1 &&
              $store.getters['getSelectedZone'] == 'us'
            "
            class="price"
          >
            <div>{{ packs.second.price_usd }} USD</div>
            <div>{{ packs.second.price_usd_sale2 }} USD</div>
          </div>
          <div
            v-if="
              packs.second.sales_2 == 0 &&
              packs.second.sales == 0 &&
              $store.getters['getSelectedZone'] == 'us'
            "
            class="price"
          >
            <div>{{ packs.second.price_usd }} USD</div>
          </div>

          <div
            v-if="
              packs.second.sales == 1 &&
              $store.getters['getSelectedZone'] == 'eu'
            "
            class="price"
          >
            <div>{{ packs.second.price_eur }} EUR</div>
            <div>{{ packs.second.price_eur_sale }} EUR</div>
          </div>
          <div
            v-if="
              packs.second.sales_2 == 1 &&
              $store.getters['getSelectedZone'] == 'eu'
            "
            class="price"
          >
            <div>{{ packs.second.price_eur }} EUR</div>
            <div>{{ packs.second.price_eur_sale2 }} EUR</div>
          </div>
          <div
            v-if="
              packs.second.sales_2 == 0 &&
              packs.second.sales == 0 &&
              $store.getters['getSelectedZone'] == 'eu'
            "
            class="price"
          >
            <div>{{ packs.second.price_eur }} EUR</div>
          </div>
          <div>
            <button  @click="buy_pack(packs.second)">Buy now</button>
          </div>
        </div>
        <div style="position: relative;">
          <div class="container_sale" >
          <div
            class="bestSale"

            v-if="packs.third.sales == 1 || packs.third.sales_2 == 1"
            v-bind:class="{
              border_zero_sale:
                packs.third.sales == packs.third.hot || packs.third.sales_2 == packs.third.hot,
            }"
          >
            {{ packs.third.sales_discount }}% OFF
          </div>
        </div>
          <div>
            <img :src="apiImg + 'sku/' + packs.third.image" alt />
          </div>
          <div class="cardTitle">
            <div>{{ packs.third.title }}</div>
            <div>{{ packs.third.descr }}</div>
          </div>
          <div class="separator"></div>
          <div class="cakeCoins">{{ packs.third.quant_coins }} Cc</div>
          <div
            v-if="
              packs.third.sales == 1 &&
              $store.getters['getSelectedZone'] == 'us'
            "
            class="price"
          >
            <div>{{ packs.third.price_usd }} USD</div>
            <div>{{ packs.third.price_usd_sale }} USD</div>
          </div>
          <div
            v-if="
              packs.third.sales_2 == 1 &&
              $store.getters['getSelectedZone'] == 'us'
            "
            class="price"
          >
            <div>{{ packs.third.price_usd }} USD</div>
            <div>{{ packs.third.price_usd_sale2 }} USD</div>
          </div>
          <div
            v-if="
              packs.third.sales_2 == 0 &&
              packs.third.sales == 0 &&
              $store.getters['getSelectedZone'] == 'us'
            "
            class="price"
          >
            <div>{{ packs.third.price_usd }} USD</div>
          </div>

          <div
            v-if="
              packs.third.sales == 1 &&
              $store.getters['getSelectedZone'] == 'eu'
            "
            class="price"
          >
            <div>{{ packs.third.price_eur }} EUR</div>
            <div>{{ packs.third.price_eur_sale }} EUR</div>
          </div>
          <div
            v-if="
              packs.third.sales_2 == 1 &&
              $store.getters['getSelectedZone'] == 'eu'
            "
            class="price"
          >
            <div>{{ packs.third.price_eur }} EUR</div>
            <div>{{ packs.third.price_eur_sale2 }} EUR</div>
          </div>
          <div
            v-if="
              packs.third.sales_2 == 0 &&
              packs.third.sales == 0 &&
              $store.getters['getSelectedZone'] == 'eu'
            "
            class="price"
          >
            <div>{{ packs.third.price_eur }} EUR</div>
          </div>
          <div>
            <button @click="buy_pack(packs.third)">Buy now</button>
          </div>
        </div>
      </div>
      <h5 v-if="coin_settings.text_s">{{coin_settings.text_s.block_0.tilte}}</h5>
      <div class="moneyRate" v-if="$store.getters['getSelectedZone'] == 'us'">100 CakeCoin = {{coin_settings.prs_d * 100}} USD</div>
      <div class="moneyRate" v-if="$store.getters['getSelectedZone'] == 'eu'">100 CakeCoin = {{coin_settings.prs_e * 100}} EUR</div>
      <div v-if="coin_settings.text_s">
        <img v-if="coin_settings.text_s.block_0.img & coin_settings.text_s.block_0.img != error" width="100%" :src="apiImg + 'coins/' + coin_settings.text_s.block_0.img" alt />
      </div>
      <div class="aboutCakeCoins">
        <div>
          <div v-if="coin_settings.text_s">{{coin_settings.text_s.block_1.tilte}}</div>
          <div v-if="coin_settings.text_s" v-html="coin_settings.text_s.block_1.desc">

          </div>
        </div>
        <div>
          <div v-if="coin_settings.text_s">{{coin_settings.text_s.block_2.tilte}}</div>
          <div v-if="coin_settings.text_s" v-html="coin_settings.text_s.block_2.desc">

          </div>
        </div>
        <div style="text-align: center;">
          <button @click="learnMore()">Learn more about Bonus System</button>
        </div>
      </div>
      <div class="referalSystem">
        <h5>Referal system</h5>
        <div class="referalLink">
          <div>Your link for sharing</div>
          <input
            type="text"
            :value='location_oridgin+"/page/signup?referal="+user.ref_code'
            readonly
            disabled
          />
          <a style="cursor:pointer;" @click="copyText(location_oridgin+'/page/signup?referal='+user.ref_code)">Copy to exchange buffer</a>
          <div
            v-if="this.Copied"
            style="
              color: #0dc143;
              font-family: Roboto;
              font-weight: bold;
              font-size: 14px;
              display: contents;
            "
          >
            Copied
          </div>
        </div>
        <!-- <div class="txtAlignCenter">
          <img src="/imgGameLogoPurple/Alliance.svg" alt />
        </div> -->
        <div class="about_ref">
          <div v-if="coin_settings.text_s">{{coin_settings.text_s.block_3.tilte}}</div>
          <div v-if="coin_settings.text_s" v-html="coin_settings.text_s.block_3.desc">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import breadcrumbs from "~/components/breadcrumbs.vue";
import countries from "~/static//countries.json";
export default {
  head() {
    return {
      title: "My Account | Cakeboost",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "",
        },
      ],
       script: [
        {
          src: "https://js.stripe.com/v3/",
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href:'https://cakeboost.com'+this.$route.path
        }
      ],
    };
  },
  data() {
    return {
      apiUrl: this.$store.getters["getApiUrl"],
      apiImg: this.$store.getters["getApiImgUrl"],
      globalApi: this.$store.getters["getGlobalApi"],
      user_id: "",
      tab: 'order',
      orders: "",
      user: "",
      country_search: "",
      countries_list_open: false,
      orders_filter: [0, 1, 2, 3],
      change_password_form: false,
      result_failure: false,
      result_success: false,
      resultText: '',
      change_password: {
        password: "",
        new_password: "",
        check_new_password: "",
      },
      packs: {
        first: "",
        second: "",
        third: "",
      },
      if_buy_pack:false,
      choosen_pack:{
        img:'',
        title:'',
        id:''
      },
      payments:[],
      payment_type:0,
      coin_settings:'',
      location_oridgin:'',
      check_info_change:false,
      Copied: false
    };
  },
  components: {
    breadcrumbs,
  },
  mounted() {
    (this.user_id = JSON.parse(atob(this.$route.params.id)).user_id),
      //this.get_orders(),
      this.get_user(),
      this.get_packs(),
      this.get_payments(),
      this.get_coin_settings(),
      this.getTabs(),
      this.location_oridgin = window.location.origin
  },
  created() {},
  async asyncData({ $axios, store, route, redirect }) {
    return { countries };
  },
  methods: {
    copyText(txt) {
      this.Copied = true
      setTimeout(() => this.Copied = false, 5000);
      var dummy = document.createElement("textarea");
      // dummy.style.display = 'none'
      document.body.appendChild(dummy);
      dummy.value = txt;
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
    },
    learnMore() {
      window.location.href='/page/bonus-and-referal'
    },
    async send_payment_pack(){
      this.$store.commit("set_preloader", true);
      this.if_buy_pack = false;
      let cur = this.$store.getters["getSelectedZone"] == 'eu' ? 'eur' : 'usd';
      let response = await this.$axios
          .post(this.globalApi + "handlers/packs/packs.php", {id:this.choosen_pack.id,paymant:this.payment_type,cur:cur,token:this.get_access()})
          .then((data) => {
            console.log(data);
            if ( data.data.token &&
              data.data.system &&
              data.data.system == "stripe"
            ) {
              let stripe = Stripe("pk_live_Z06VdlQgFiO5ICHIxQvowZHl00GQR0ZMMb");
              return stripe.redirectToCheckout({ sessionId: data.data.token });
            } else {
              if (data.data.token) {
                window.location.href = data.data.token;
              } else {
                this.$store.commit("set_preloader", false);
              }
            }
          });
    },
    async buy_pack(item){
      this.if_buy_pack = true;
      this.choosen_pack.title = item.title;
      this.choosen_pack.img = item.image;
      this.choosen_pack.id = item.id;
    },

     async get_payments() {
      let response = await this.$axios
        .$get(this.apiUrl + "payments?filter=status,eq,1")
        .then((data) => {
          this.payments = data.records;
          this.payment_type = this.payments[0].id
        });
    },
    async getTabs(){
      if (localStorage.tab) {
        this.tab = localStorage.tab;
        localStorage.removeItem('tab')
      }
    },
    async get_coin_settings(){
      let response = await this.$axios
        .$get(this.apiUrl + "coins")
        .then((data) => {
          this.coin_settings = data.records[0];
          this.coin_settings.text_s = JSON.parse(this.coin_settings.text_s);
          this.coin_settings.text_f = JSON.parse(this.coin_settings.text_f);
          console.log(this.coin_settings);
        });
    },
    async send_change_password() {
      console.log(
        JSON.stringify({
          check_new_password: this.change_password.check_new_password,
          new_password: this.change_password.new_password,
          userid: this.get_access(),
          method: "user_ps",
        })
      );
      if (
        this.change_password.check_new_password ==
        this.change_password.new_password
      ) {
        let response = await this.$axios
          .$post(this.globalApi + "requests.php", {
            check_new_password: this.change_password.check_new_password,
            new_password: this.change_password.new_password,
            userid: this.get_access(),
            method: "user_ps",
          })
          .then((data) => {
            console.log(data);
            if (data.status == 200) {
              let date = new Date(Date.now() + 30 * 86400e3);
              date = date.toUTCString();
              let date_r = new Date(Date.now() + 30 * 86400e3);
              date_r = date_r.toUTCString();
              this.result_failure = false;
              this.result_success = true;
              this.resultText = 'Password changed successfully';
              this.deleteCookie("access_t");
              this.deleteCookie("refresh_t");
              this.setCookie("access_t", data.jwt, { expires: date });
              this.setCookie("refresh_t", JSON.stringify(data.refresh), {
                expires: date_r,
              });
              this.$store.commit("setUserLoginCheck", true);
              this.$store.commit("setUserLoginId", data.jwt.split(".")[1]);
              try {
                dashly.track("Пользователь сменил Пароль")
              } catch (e) {
                console.log("dashly not loaded")
              }
            } else {
              this.result_failure = true;
              this.result_success = false;
              this.resultText = 'Something went wrong';
            }
          });
      }
    },
    discord_validation() {
      if (this.user.discord != null && this.user.discord != "") {
        if (
          this.user.discord.split("#")[0] &&
          this.user.discord.split("#")[1]
        ) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    },
    change_mailing() {
      if (this.user.subscribe == 0) {
        this.user.subscribe = 1;
      } else {
        this.user.subscribe = 0;
      }
    },
    async get_packs() {
      let response = await this.$axios
        .$get(this.apiUrl + "packs")
        .then((data) => {
          this.packs.first = data.records[0];
          this.packs.second = data.records[1];
          this.packs.third = data.records[2];
          console.log(this.packs);
        });
    },
    async get_orders_by_filter() {
      if (this.orders_filter == 0) {
        let response = await this.$axios
          .$get(this.apiUrl + "orders?filter=userid,eq," + this.user_id)
          .then((data) => {
            this.orders = data.records;
            for (let i = 0; i < this.orders.length; i++) {
              this.orders[i].cart = JSON.parse(this.orders[i].cart);
            }
          });
      } else {
        if (this.orders_filter == 1) {
          let response = await this.$axios
            .$get(
              this.apiUrl +
                "orders?filter=userid,eq," +
                this.user_id +
                "&filter=status,lt,3"
            )
            .then((data) => {
              this.orders = data.records;
              for (let i = 0; i < this.orders.length; i++) {
                this.orders[i].cart = JSON.parse(this.orders[i].cart);
              }
            });
        } else {
          let response = await this.$axios
            .$get(
              this.apiUrl +
                "orders?filter=userid,eq," +
                this.user_id +
                "&filter=status,eq,3"
            )
            .then((data) => {
              this.orders = data.records;
              for (let i = 0; i < this.orders.length; i++) {
                this.orders[i].cart = JSON.parse(this.orders[i].cart);
              }
            });
        }
      }
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
          if (this.user.nofields == "") {
            this.user.nofields = [];
          } else {
            this.user.nofields = this.user.nofields.split(",");
          }
          this.orders = data.orders;
          for (let i = 0; i < this.orders.length; i++) {
            if (this.orders[i].trash == 1) {
              this.orders.splice(i, 1);
              i--;
            } else {
              this.orders[i].cart = JSON.parse(this.orders[i].cart);
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
    async change_info() {
      if (this.discord_validation()) {
        console.log(this.user);
        let response = await this.$axios
          .$post(this.globalApi + "requests.php", {
            userid: this.get_access(),
            lk: this.user,
            method: "user_auth",
          })
          .then((data) => {
            console.log(data);
            this.get_user();
            this.check_info_change = true;
          });
      }
    },
    logout() {
      this.deleteCookie("access_t");
      this.deleteCookie("refresh_t");
      window.location.href = window.location.origin;
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
  },
};
</script>
