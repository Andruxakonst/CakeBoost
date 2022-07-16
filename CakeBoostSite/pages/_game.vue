<template>
  <!--client-only-->
  <error v-if="this.$store.getters['get_show_error']"> </error>
  <div
    v-else-if="this.depth == 2 && !this.$store.getters['get_show_error']"
    class="content GamePage"
  >
    <breadcrumbs />
    <div class="mainTitle">
      <div class="logo"><img :src="apiImg + 'gicons/' + this.game_id_all.img"/></div>
      <h1>{{ this.game_id_all.main_title ? this.game_id_all.main_title : this.game_id_all.title }}</h1>
      <button id="Custom_order" @click="openChat()">
        Create a custom order
      </button>
    </div>
    <UpcomingEvents v-bind:game_id="this.game_id" />
    <PopularOffers :key="game_id" v-bind:game_id="this.game_id" />
    <div class="infoBlock">
      <div class="CustomOrder">
        <div class="logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
            <rect width="72" height="72" rx="36" fill="#C24DFE" fill-opacity="0.15"/>
            <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M38.2498 20.25C38.2498 19.0074 37.2425 18 35.9998 18C34.7572 18 33.7498 19.0074 33.7498 20.25V24H38.2498V20.25ZM32.2021 39.1617C30.8107 38.5378 29.5867 37.6072 28.6162 36.4558L24.75 44.9997L25.5 52.4997L32.2021 39.1617ZM43.5921 36.929C42.5631 38.0048 41.2979 38.8527 39.8798 39.3895L46.5 52.4999L47.25 44.9999L43.5921 36.929Z" fill="#C24DFE"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M28.5 30C28.5 34.1421 31.8579 37.5 36 37.5C40.1421 37.5 43.5 34.1421 43.5 30C43.5 25.8579 40.1421 22.5 36 22.5C31.8579 22.5 28.5 25.8579 28.5 30ZM39 29.9998C39 31.6567 37.6569 32.9998 36 32.9998C34.3431 32.9998 33 31.6567 33 29.9998C33 28.343 34.3431 26.9998 36 26.9998C37.6569 26.9998 39 28.343 39 29.9998Z" fill="#C24DFE"/>
          </svg>
        </div>
        <div class="content">
          <label>Can't find the service you need? Build your own order!</label>
          <span>Contact us and get help from our qualified managers! We will find the best offer for you or build a personal order at a really low price!</span>
          <button class="customOrderInput" @click="openChat()">Create a custom order</button>
        </div>
      </div>
      <div class="bonusSystem">
        <div class="logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
            <rect width="72" height="72" rx="36" fill="#C24DFE" fill-opacity="0.15"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5 28C22.5 27.4477 22.9477 27 23.5 27H48.5C49.0523 27 49.5 27.4477 49.5 28V30.5C49.5 31.0523 49.0523 31.5 48.5 31.5H23.5C22.9477 31.5 22.5 31.0523 22.5 30.5V28ZM24 35.5C24 34.9477 24.4477 34.5 25 34.5H33.5C34.0523 34.5 34.5 34.9477 34.5 35.5V47C34.5 47.5523 34.0523 48 33.5 48H25C24.4477 48 24 47.5523 24 47V35.5ZM38.5 34.5C37.9477 34.5 37.5 34.9477 37.5 35.5V47C37.5 47.5523 37.9477 48 38.5 48H47C47.5523 48 48 47.5523 48 47V35.5C48 34.9477 47.5523 34.5 47 34.5H38.5Z" fill="#C24DFE"/>
            <path opacity="0.3" d="M39.668 21.2518C40.3573 20.7923 41.2886 20.9786 41.7481 21.6679C42.2076 22.3572 42.0214 23.2885 41.3321 23.748L36 27.3027L30.668 23.748C29.9787 23.2885 29.7924 22.3572 30.252 21.6679C30.7115 20.9786 31.6428 20.7923 32.3321 21.2518L36 23.6971L39.668 21.2518Z" fill="#C24DFE"/>
          </svg>
        </div>
        <div class="content">
          <label>Sign in and get CakeCoins</label>
          <span>More benefits for our customers! Use CakeCoins to order services with a 50% discount! Make an account on the website and save more money with every purchase!</span>
          <a href="/page/bonus-and-referal" class="customOrderInput">Learn more</a>
        </div>
      </div>
    </div>
    <AllServices v-bind:game_id="this.game_id" />
    <div class="Protect">
      <div>
        <label>We protect you as much as possible</label>
        <div class="Protectitem" @click="showInfoblock(1)" style="height: 90px; overflow: hidden;">
          <span><span>01</span> Are there any risks?</span>
          <div>In order to secure your account we ALWAYS use VPN accurately within your city and country. Secondly, since we use the most reliable ways of security you may be sure that your gold and miscellaneous achievements are properly stored. Thirdly, we never ask our client’s secret question for the account. And finally we do not pay our coaches until your order has been completed.</div>
        </div>
        <div class="Protectitem" @click="showInfoblock(2)" style="height: 90px; overflow: hidden;">
          <span><span>02</span>Does my account need to be unlocked?</span>
          <div>Depends on the option of service you choose. If you choose the selfplayed option for order completion then your account shouldn’t be unlocked.</div>
        </div>
        <div class="Protectitem show OpenProtectitem" @click="showInfoblock(3)" style="height: 90px; overflow: hidden;">
          <span><span>03</span> Do I lose the access to my account during the order process?</span>
          <div>We guarantee the security for your personal account information. That means that all information we have from you couldn’t be shared to anybody else except our company. However, once our player is on your account you don’t have the opportunity to play simultaneously, that's why we ask our clients before order start to make a schedule for convenient playing for both sides. </div>
        </div>
        <div class="infoBlock">
          <div>
            <img src="/img/01.png" />
            <div class="title">Personal approach for each client</div>
            <div class="infoContent">Our company policy is taking care of our clients. We can advise you on how to protect your account, help with forming an order schedule, etc. During the order performing you are always in touch with our customer support to get anytime the report of the process. </div>
          </div>
          <div>
            <img src="/img/02.png" />
            <div class="title">Transparency</div>
            <div class="infoContent">Our goal is to earn the trust of our clients that is why we always warn about all possible risks and look for a solution to each client's question. </div>
          </div>
        </div>
      </div>
    </div>

    <div class="MainFaq FAQitems">
      <div class="arrowAndHref">
        <!-- <a v-bind:href="'/' + $store.getters['getGlobalGame'] + '/FAQ'"> -->
        <!-- <a href="#"> -->
          <span>FAQ</span>
        <!-- </a> -->
      </div>
      <div class="FAQContent">
        <div class="FAQList">


            <div v-for="(question, index) in game_options.FAQ" :key="index" @click="showQuestion(index)" :class="'MainFAQitem ' + 'question'+index" style="height: auto; overflow: hidden;">
              <!-- <span> -->
                <!-- <svg class="show" xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7" fill="none"><circle cx="3" cy="3.5" r="3" fill="#C24DFE"/></svg>
                <svg class="hide" xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7" fill="none"><circle cx="3" cy="3.5" r="3" fill="#828688"/></svg> -->

                <span>{{question.title}}</span>
              <!-- </span> -->
              <div>{{question.desc}}</div>
              <hr>
            </div>
          <!-- <div class="MainFAQitem" style="height: auto; overflow: hidden;">
            <span>&#8226; What are further steps after payment?</span>
            <div>Once payment is done our operators will contact you by any channel of communication that you prefer more to discuss all details of your order. Don’t forget to leave all necessary information in order details before payment is done.</div>
            <hr>
          </div>
          <div class="MainFAQitem" style="height: auto; overflow: hidden;">
            <span>&#8226; Can I check the progress of my order?</span>
            <div>Of course!! We could provide you with screenshots or stream of your order process.</div>
            <hr>
          </div>
          <div class="MainFAQitem" style="height: auto; overflow: hidden;">
            <span>&#8226; Can I choose the schedule of order completion ? </span>
            <div>Our operators will help you to find the player for your special needs including the schedule of order fulfillment.</div>
            <hr>
          </div>
          <div class="MainFAQitem" style="height: auto; overflow: hidden;">
            <span>&#8226; What does “duration” mean?</span>
            <div>Our duration is defined by the average time of customer order completion. Attention! Our average time of completion does not include circumstances that our company cannot influence (lack of communication with the client, providing incorrect data for order fulfillment, etc.).</div>
            <hr>
          </div>
          <div class="MainFAQitem" style="height: auto; overflow: hidden;">
            <span>&#8226; How can I get a discount? </span>
            <div>Our clients can use the Bonus System to get up to 10% Cake Coins cashback for each order. We also can offer a personal discount by contacting us at Discord or Skype. </div>
            <hr>
          </div>
          <div class="MainFAQitem" style="height: auto; overflow: hidden;">
            <span>&#8226; Can I get a refund? </span>
            <div>Our company has a Refund Policy that you can check here.</div>
            <hr>
          </div>
          <div class="MainFAQitem" style="height: auto; overflow: hidden;">
            <span>&#8226; Who will be my booster?  </span>
            <div>We have a huge team of experienced and reliable boosters for each game we provide services for. Booster is chosen for you after payment by our operator team depending on the requirements of your order.</div>
            <hr>
          </div> -->
        </div>
        <div class="questions">
          <div>
            <img src="/icons/Question-circle.svg" />
            <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" fill="none">
              <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M28 51.3333C40.8866 51.3333 51.3333 40.8866 51.3333 28C51.3333 15.1133 40.8866 4.66663 28 4.66663C15.1133 4.66663 4.66663 15.1133 4.66663 28C4.66663 40.8866 15.1133 51.3333 28 51.3333Z" fill="#F3DBFF"/>
              <path d="M24.7123 30.821V34.692H27.6523C33.5813 34.692 38.2363 30.135 38.2363 24.255C38.2363 18.375 33.5813 13.818 27.6523 13.818C21.7233 13.818 17.1173 18.375 17.1173 24.255H21.2823C21.2823 20.531 23.8793 17.689 27.6523 17.689C31.3763 17.689 34.0713 20.531 34.0713 24.255C34.0713 27.979 31.3763 30.821 27.6523 30.821H24.7123Z" fill="#F3DBFF"/>
              <path d="M28 37.3333C26.7113 37.3333 25.6666 38.378 25.6666 39.6667C25.6666 40.9553 26.7113 42 28 42C29.2886 42 30.3333 40.9553 30.3333 39.6667C30.3333 38.378 29.2886 37.3333 28 37.3333Z" fill="#F3DBFF"/>
            </svg> -->
            <div>
              <span>Still have questions left?</span>
              <span>Ask straight and we will reply to you!</span>
            </div>
          </div>
          <button @click="openChat()">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 6L8 11L13 6" stroke="#C24DFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Go to chat
          </button>
        </div>
      </div>

    </div>
    <div class="last_news">
      <div class="last_news_header">
        <div>Latest news & guides</div>
        <div>
          <a :href="'/page/blogs/' + ($route.params.game == 'wow-boost' ? 'wow-shadowlands' : $route.params.game)">
            Show all news
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<rect opacity="0.8" x="4.16699" y="10.8333" width="1.66667" height="11.6667" rx="0.833333" transform="rotate(-90 4.16699 10.8333)" fill="#2F3639"/>
<path d="M9.41042 14.4107C9.08498 14.7362 9.08498 15.2638 9.41042 15.5893C9.73585 15.9147 10.2635 15.9147 10.5889 15.5893L15.5889 10.5893C15.9044 10.2738 15.9154 9.76578 15.614 9.43689L11.0306 4.43689C10.7196 4.09762 10.1925 4.07471 9.85324 4.3857C9.51397 4.69669 9.49105 5.22383 9.80204 5.5631L13.8462 9.97493L9.41042 14.4107Z" fill="#2F3639"/>
</svg>
          </a>
        </div>
      </div>
      <div class="last_news_items">
        <a
          v-for="(item, index) in this.last_blogs"
          :key="index"
          v-if="index < 5"
          :href="'/page/blogs/' + ($route.params.game == 'wow-boost' ? 'wow-shadowlands' : $route.params.game) +'/'+ item.slug + '&' + item.id"
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
              :href="'/page/blogs/' + ($route.params.game == 'wow-boost' ? 'wow-shadowlands' : $route.params.game) +'/' + item.slug + '&' + item.id"
              >Read the full topic
              <img src="/landing_page/Arrow-right.svg" alt=""
            /></a>
          </div>
        </a>
        <a
          v-if="this.last_blogs.length > 5"
          class="last_news_all"
         :href="'/page/blogs/' + ($route.params.game == 'wow-boost' ? 'wow-shadowlands' : $route.params.game)"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="57" height="56" viewBox="0 0 57 56" fill="none">
<path d="M29.1834 15.6499C28.2722 14.7387 28.2722 13.2613 29.1834 12.35C30.0946 11.4388 31.572 11.4388 32.4832 12.35L46.4832 26.35C47.3666 27.2334 47.3975 28.6558 46.5534 29.5766L33.72 43.5767C32.8492 44.5266 31.3733 44.5908 30.4233 43.72C29.4734 42.8492 29.4092 41.3732 30.28 40.4233L41.6037 28.0701L29.1834 15.6499Z" fill="#C24DFE"/>
<path d="M12.8498 15.6499C11.9385 14.7387 11.9385 13.2613 12.8498 12.35C13.761 11.4388 15.2384 11.4388 16.1496 12.35L30.1496 26.35C31.0329 27.2334 31.0638 28.6558 30.2197 29.5766L17.3864 43.5767C16.5156 44.5266 15.0396 44.5908 14.0896 43.72C13.1397 42.8492 13.0755 41.3732 13.9463 40.4233L25.27 28.0701L12.8498 15.6499Z" fill="#C24DFE"/>
</svg>
          <div>Go to the news page</div>
        </a>
      </div>
    </div>

    <div class="MainWhyUs">
      <div class="arrowAndHref">
        <!-- <a href="/page/our-advantages"> -->
          <span>Why us?</span>
        <!-- </a> -->
      </div>
      <div class="MainWhyUsList">
        <div class="MainWhyUsItem">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none">
            <path d="M38.501 10.5002C34.7455 10.5002 30.3536 14.7577 28.001 17.5002C25.6484 14.7577 21.2565 10.5002 17.501 10.5002C10.8533 10.5002 7.00098 15.6853 7.00098 22.2845C7.00098 33.2502 28.001 45.5002 28.001 45.5002C28.001 45.5002 49.001 33.2502 49.001 22.7502C49.001 16.151 45.1486 10.5002 38.501 10.5002Z" fill="#C24DFE"/>
          </svg> -->
          <img src="/icons/Heart.svg" />
          <div>
            <div class="WhyUsTitle">24/7 Online Support</div>
            <div class="WhyUsContent">Feel free to ask our operators any questions. Our customer support is available 24/7 so we could always be in touch.</div>
          </div>
        </div>
        <div class="MainWhyUsItem">
          <img src="/icons/Fire.svg" />
          <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none">
            <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M37.3333 16.3333C37.3333 16.3333 31.5 28 25.6667 28.8174C25.6667 28.8174 29.1667 15.1667 24.5 8.16666C24.5 8.16666 24.0051 15.667 19.005 24.6673C16.6611 28.8862 14 31.7302 14 37.3333C14 45.3336 22.1934 49.4682 28.0133 49.4682C33.8333 49.4682 42 46.6681 42 36.8678C42 30.823 37.3333 16.3333 37.3333 16.3333Z" fill="#C24DFE"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M30.3333 16.3333C30.3333 16.3333 31.5 28 25.6667 28.8174C25.6667 28.8174 29.1667 15.1667 24.5 8.16666C24.5 8.16666 24.0051 15.667 19.005 24.6673C16.6611 28.8862 14 31.7302 14 37.3333C14 45.3336 22.1934 49.4682 28.0133 49.4682C33.8333 49.4682 42 46.6681 42 36.8678C42 30.823 30.3333 16.3333 30.3333 16.3333Z" fill="#C24DFE"/>
          </svg> -->
          <div>
            <div class="WhyUsTitle">Highly-qualified Service</div>
            <div class="WhyUsContent">Our company policy is only highly-qualified service. You can make sure by checking the reviews on independent review website Trustpilot.com.</div>
          </div>
        </div>
        <div class="MainWhyUsItem">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none">
            <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M9.33337 9.33333L27.6315 5.90244C27.8751 5.85677 28.125 5.85677 28.3686 5.90244L46.6667 9.33333V35.9033C46.6667 39.696 44.7129 43.2211 41.4967 45.2313L28.53 53.3354C28.2058 53.5381 27.7943 53.5381 27.47 53.3354L14.5034 45.2313C11.2872 43.2211 9.33337 39.696 9.33337 35.9033L9.33337 9.33333Z" fill="#C24DFE"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.075 34.4167C25.516 34.4167 24.957 34.1931 24.5098 33.7458L20.0375 29.2736C19.1431 28.3792 19.1431 27.0375 20.0375 26.1431C20.932 25.2486 22.3854 25.2486 23.1681 26.1431L26.075 29.05L33.4542 21.6708C34.3486 20.7764 35.6903 20.7764 36.5848 21.6708C37.4792 22.5653 37.4792 23.9069 36.5848 24.8014L27.6403 33.7458C27.1931 34.1931 26.6341 34.4167 26.075 34.4167Z" fill="#C24DFE"/>
          </svg> -->
          <img src="/icons/Shield-check.svg" />
          <div>
            <div class="WhyUsTitle">Save and Secure Delivery</div>
            <div class="WhyUsContent">The vast majority of our services are selfplayed and always handmade. Your personal information will not be provided to anybody but our coaches to deliver the services.</div>
          </div>
        </div>

        <div class="MainWhyUsItem">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.33325 28C9.33325 38.3093 17.6906 46.6667 27.9999 46.6667C38.3092 46.6667 46.6666 38.3093 46.6666 28C46.6666 17.6907 38.3092 9.33334 27.9999 9.33334C17.6906 9.33334 9.33325 17.6907 9.33325 28ZM27.9999 42V14C20.2679 14 13.9999 20.268 13.9999 28C13.9999 35.732 20.2679 42 27.9999 42Z" fill="#C24DFE"/>
          </svg> -->
          <img src="/icons/Adjust.svg">
          <div>
            <div class="WhyUsTitle">Easy to order</div>
            <div class="WhyUsContent">Easy navigation on the website. Assistance during all steps of order placement.</div>
          </div>
        </div>
        <div class="MainWhyUsItem">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none">
            <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M9.33337 35C9.33337 41.4433 14.5567 46.6667 21 46.6667C23.6265 46.6667 26.0502 45.7988 28.0001 44.3342C29.9499 45.7988 32.3736 46.6667 35.0001 46.6667C41.4434 46.6667 46.6667 41.4433 46.6667 35C46.6667 28.5567 41.4434 23.3333 35.0001 23.3333C32.3736 23.3333 29.9499 24.2012 28 25.6658C26.0502 24.2012 23.6265 23.3333 21 23.3333C14.5567 23.3333 9.33337 28.5567 9.33337 35ZM31.1118 29.1768C32.1008 30.8906 32.6667 32.8792 32.6667 35C32.6667 37.1208 32.1008 39.1093 31.1119 40.823C32.2441 41.5816 33.5857 42 35.0001 42C38.8661 42 42.0001 38.866 42.0001 35C42.0001 31.134 38.8661 28 35.0001 28C33.5839 28 32.2411 28.421 31.1118 29.1768Z" fill="#C24DFE"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M28 32.6667C34.4434 32.6667 39.6667 27.4433 39.6667 21C39.6667 14.5567 34.4434 9.33334 28 9.33334C21.5567 9.33334 16.3334 14.5567 16.3334 21C16.3334 27.4433 21.5567 32.6667 28 32.6667Z" fill="#C24DFE"/>
          </svg> -->
          <img src="/assets/img/percent.svg" />
          <div>
            <div class="WhyUsTitle">High Discounts & Bundles</div>
            <div class="WhyUsContent">The lowest prices are only for our customers. Hot offers, good discounts, bundles - all that you can find on Cakeboost!</div>
          </div>
        </div>
        <div class="MainWhyUsItem">
          <img src="/icons/Sketch.svg">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none">
            <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M11.6667 7H44.3334L53.6667 18.6667H2.33337L11.6667 7Z" fill="#C24DFE"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M53.6667 18.6667L28 46.6667L2.33337 18.6667H53.6667Z" fill="#C24DFE"/>
          </svg> -->
          <div>
            <div class="WhyUsTitle">Bonus & Reward System</div>
            <div class="WhyUsContent">Make an account and join our Bonus & Reward system to get CakeCoins which you are free to spend on services.</div>
          </div>
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
            <a class="swiper-slide swiper-slide-trustpilot swiper-slide-active" role="group" aria-label="1 / 7" style="margin-right: 24px;"><div><span style="color: rgb(255, 255, 255); font-size: 32px; font-family: Roboto; font-weight: 500;">Our Reviews</span></div> <div><div>More than</div> <div>1700+</div> <div>positive reviews</div></div>
            <div class="swiper_slide_trustpilot_raiting">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#clip0)"><path d="M16 5.85932H9.88727L8.00557 -0.00012207L6.11274 5.85932L0 5.8481L4.94363 9.47377L3.0508 15.3332L7.99443 11.7075L12.9381 15.3332L11.0564 9.47377L16 5.85932Z" fill="#00B67A"></path> <path d="M11.3333 10.5191L10.9274 9.33319L8 11.3332L11.3333 10.5191Z" fill="#005128"></path></g> <defs><clipPath id="clip0"><rect width="16" height="16" fill="white" transform="translate(0 -0.00012207)"></rect></clipPath></defs></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#clip0)"><path d="M16 5.85932H9.88727L8.00557 -0.00012207L6.11274 5.85932L0 5.8481L4.94363 9.47377L3.0508 15.3332L7.99443 11.7075L12.9381 15.3332L11.0564 9.47377L16 5.85932Z" fill="#00B67A"></path> <path d="M11.3333 10.5191L10.9274 9.33319L8 11.3332L11.3333 10.5191Z" fill="#005128"></path></g> <defs><clipPath id="clip0"><rect width="16" height="16" fill="white" transform="translate(0 -0.00012207)"></rect></clipPath></defs></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#clip0)"><path d="M16 5.85932H9.88727L8.00557 -0.00012207L6.11274 5.85932L0 5.8481L4.94363 9.47377L3.0508 15.3332L7.99443 11.7075L12.9381 15.3332L11.0564 9.47377L16 5.85932Z" fill="#00B67A"></path> <path d="M11.3333 10.5191L10.9274 9.33319L8 11.3332L11.3333 10.5191Z" fill="#005128"></path></g> <defs><clipPath id="clip0"><rect width="16" height="16" fill="white" transform="translate(0 -0.00012207)"></rect></clipPath></defs></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#clip0)"><path d="M16 5.85932H9.88727L8.00557 -0.00012207L6.11274 5.85932L0 5.8481L4.94363 9.47377L3.0508 15.3332L7.99443 11.7075L12.9381 15.3332L11.0564 9.47377L16 5.85932Z" fill="#00B67A"></path> <path d="M11.3333 10.5191L10.9274 9.33319L8 11.3332L11.3333 10.5191Z" fill="#005128"></path></g> <defs><clipPath id="clip0"><rect width="16" height="16" fill="white" transform="translate(0 -0.00012207)"></rect></clipPath></defs></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#clip0)"><path d="M16 5.85932H9.88727L8.00557 -0.00012207L6.11274 5.85932L0 5.8481L4.94363 9.47377L3.0508 15.3332L7.99443 11.7075L12.9381 15.3332L11.0564 9.47377L16 5.85932Z" fill="#00B67A"></path> <path d="M11.3333 10.5191L10.9274 9.33319L8 11.3332L11.3333 10.5191Z" fill="#005128"></path></g> <defs><clipPath id="clip0"><rect width="16" height="16" fill="white" transform="translate(0 -0.00012207)"></rect></clipPath></defs></svg>
                <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 -0.00012207L9.88854 6.11133H16L11.0557 9.88842L12.9443 15.9999L8 12.2228L3.05573 15.9999L4.94427 9.88842L0 6.11133H6.11146L8 -0.00012207Z" fill="#ACAFB0"></path></svg> -->
              </div>
              <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="15.8892" y="7.19666" width="2" height="14" rx="1" transform="rotate(45 15.8892 7.19666)" fill="white"></rect> <path d="M8.11084 8.90381C7.55856 8.90381 7.11084 8.45609 7.11084 7.90381C7.11084 7.35152 7.55856 6.90381 8.11084 6.90381L16.5961 6.90381C17.1315 6.90381 17.5719 7.32549 17.5952 7.86037L17.9487 15.9921C17.9727 16.5439 17.5449 17.0106 16.9931 17.0346C16.4413 17.0586 15.9746 16.6307 15.9506 16.079L15.6387 8.90381H8.11084Z" fill="white"></path></svg>
              </div>
            </div> <svg xmlns="http://www.w3.org/2000/svg" width="256" height="222" viewBox="0 0 256 222" fill="none"><g opacity="0.1" filter="url(#filter0_d)"><path fill-rule="evenodd" clip-rule="evenodd" d="M165.501 139.249L109.17 168.864C102.428 172.408 94.0894 169.816 90.545 163.074C89.1335 160.39 88.6465 157.315 89.1592 154.325L99.9174 91.6003L54.3451 47.1783C48.8907 41.8616 48.7791 33.1299 54.0958 27.6755C56.213 25.5036 58.9871 24.0901 61.9886 23.6539L124.968 14.5025L153.133 -42.5664C156.504 -49.3968 164.774 -52.2012 171.604 -48.8302C174.324 -47.4878 176.526 -45.2863 177.868 -42.5664L206.033 14.5025L269.013 23.6539C276.55 24.7493 281.773 31.7477 280.678 39.2855C280.242 42.2871 278.828 45.0612 276.656 47.1783L231.084 91.6003L241.842 154.325C243.13 161.832 238.088 168.962 230.58 170.25C227.591 170.762 224.516 170.275 221.831 168.864L165.501 139.249Z" fill="white"></path></g> <defs><filter id="filter0_d" x="-12" y="-117" width="355" height="355" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix> <feOffset dy="4"></feOffset> <feGaussianBlur stdDeviation="6"></feGaussianBlur> <feColorMatrix type="matrix" values="0 0 0 0 0.266667 0 0 0 0 0.294118 0 0 0 0 0.301961 0 0 0 0.1 0"></feColorMatrix> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs></svg></a>
            <a
              href="/page/reviews"
              v-for="(item,index) in this.reviews"
              :key="index"
              class="swiper-slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.3333 11.6665L15 21.6665H18.3333V29.9998H10V21.6665L13.3333 11.6665H18.3333Z" fill="#2F3639"></path> <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M31.6663 11.6665L28.333 21.6665H31.6663V29.9998H23.333V21.6665L26.6663 11.6665H31.6663Z" fill="#2F3639"></path></svg>
              <div class="reviews_swiper_info">
                <div>
                  <span v-for="(sub_item, index) in 5" :key="index">
                    <svg v-if="sub_item <= Math.round(item.rating )" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
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
                    <svg v-if="sub_item > Math.round(item.rating )" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 -0.00012207L9.88854 6.11133H16L11.0557 9.88842L12.9443 15.9999L8 12.2228L3.05573 15.9999L4.94427 9.88842L0 6.11133H6.11146L8 -0.00012207Z" fill="#ACAFB0"/>
                    </svg>
                  </span>
                </div>
                <!-- <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#clip0)"><path d="M16 5.85932H9.88727L8.00557 -0.00012207L6.11274 5.85932L0 5.8481L4.94363 9.47377L3.0508 15.3332L7.99443 11.7075L12.9381 15.3332L11.0564 9.47377L16 5.85932Z" fill="#00B67A"></path> <path d="M11.3333 10.5191L10.9274 9.33319L8 11.3332L11.3333 10.5191Z" fill="#005128"></path></g> <defs><clipPath id="clip0"><rect width="16" height="16" fill="white" transform="translate(0 -0.00012207)"></rect></clipPath></defs></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#clip0)"><path d="M16 5.85932H9.88727L8.00557 -0.00012207L6.11274 5.85932L0 5.8481L4.94363 9.47377L3.0508 15.3332L7.99443 11.7075L12.9381 15.3332L11.0564 9.47377L16 5.85932Z" fill="#00B67A"></path> <path d="M11.3333 10.5191L10.9274 9.33319L8 11.3332L11.3333 10.5191Z" fill="#005128"></path></g> <defs><clipPath id="clip0"><rect width="16" height="16" fill="white" transform="translate(0 -0.00012207)"></rect></clipPath></defs></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#clip0)"><path d="M16 5.85932H9.88727L8.00557 -0.00012207L6.11274 5.85932L0 5.8481L4.94363 9.47377L3.0508 15.3332L7.99443 11.7075L12.9381 15.3332L11.0564 9.47377L16 5.85932Z" fill="#00B67A"></path> <path d="M11.3333 10.5191L10.9274 9.33319L8 11.3332L11.3333 10.5191Z" fill="#005128"></path></g> <defs><clipPath id="clip0"><rect width="16" height="16" fill="white" transform="translate(0 -0.00012207)"></rect></clipPath></defs></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#clip0)"><path d="M16 5.85932H9.88727L8.00557 -0.00012207L6.11274 5.85932L0 5.8481L4.94363 9.47377L3.0508 15.3332L7.99443 11.7075L12.9381 15.3332L11.0564 9.47377L16 5.85932Z" fill="#00B67A"></path> <path d="M11.3333 10.5191L10.9274 9.33319L8 11.3332L11.3333 10.5191Z" fill="#005128"></path></g> <defs><clipPath id="clip0"><rect width="16" height="16" fill="white" transform="translate(0 -0.00012207)"></rect></clipPath></defs></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 -0.00012207L9.88854 6.11133H16L11.0557 9.88842L12.9443 15.9999L8 12.2228L3.05573 15.9999L4.94427 9.88842L0 6.11133H6.11146L8 -0.00012207Z" fill="#ACAFB0"></path></svg>
                </div> -->
                <div>{{ item.name }}</div>
              </div>
              <div class="reviews_swiper_text">
                {{ reviews_text_filter(item.review) }}
              </div>
              <!-- <a href="/page/reviews">
                Read entire review
                <img src="/landing_page/Arrow-right.svg" alt="" />
              </a> -->
            </a>
          </div>
        </div>
      </div>
    </div>
    <div
      class="text_abous_us"
      :class="{ text_abous_us_open: open_more_info_about }"
    >
      <div
        class="text_about_us_content"
        :class="{ text_about_us_content_open: open_more_info_about }"
      >
        <div v-html="game_options.desc"></div>
        <div class="text_about_show_more">
          <div></div>
          <button
            v-if="!open_more_info_about && game_options.desc"
            @click="open_more_info_about = true"
          >
            Show more
          </button>
          <button
            v-if="open_more_info_about && game_options.desc"
            @click="open_more_info_about = false"
          >
            Show less</button
          >
          <div></div>
        </div>
      </div>
    </div>

    <div class="banner__catalog mainBannerCatalog"  :style="{
              'background': 'linear-gradient(90deg, #2f3639 0%, rgba(47, 54, 57, 0) 100%),url(' + apiImg + 'gbanner/' + about.img + ') center/cover;',
            }">
      <div class="bc__top">
        <label>{{about.title}}</label>
        <div class="short-line"><hr></div>
        <p v-html="about.description"></p>
      </div>
      <a href="/page/bonus-and-referal" class="btn__link">
        <span>Bonus system</span>
      </a>
    </div>
    <script v-html="jsonld_extra" name="check-json-extra" type="application/ld+json" />

    <!--
    <script v-html="jsonld" name="check-json-faq" type="application/ld+json" />
    <script v-html="best_offers_jsonld" name="check-json-popular-offers" type="application/ld+json" />
    <script v-html="all_services_jsonld" name="check-json-all-services" type="application/ld+json" />
    <script v-html="last_blogs_jsonld" name="check-json-last-blogs" type="application/ld+json" />
    -->
  </div>
  <nuxt-child
    v-else-if="this.depth > 2 && !this.$store.getters['get_show_error']"
  ></nuxt-child>
</template>

<script>
import moment from "moment";
import momenttz from "moment-timezone";
import Cookies from "js-cookie";
import error from "~/components/404.vue";
import breadcrumbs from "~/components/breadcrumbs.vue";

import UpcomingEvents from "~/components/dynamic/UpcomingEvents";
import PopularOffers from "~/components/dynamic/PopularOffers";
import AllServices from "~/components/dynamic/AllServices";

export default {
  head() {
    return {
      title: this.$route.params.game == 'wow-shadowlands' ? "" :
        this.game_id_all.seo_title
        ? this.game_id_all.seo_title
        : this.game_id_all.title + " | Cakeboost",
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: this.game.seo_canonical ? this.game.seo_canonical : 'https://cakeboost.com'+ (this.$route.path == '/wow-shadowlands' ? '/wow-boost' : this.$route.path)
        }
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$route.params.game == 'wow-shadowlands' ? "" : this.game_id_all.seo_descr,
        },
        {
          hid: "robots",
          name: "robots",
          content: this.$route.params.game == 'wow-shadowlands' ? "noindex, nofollow" : "max-image-preview:large, index, follow, max-snippet:-1, max-video-preview:-1"
        },
      ],
    };
  },
  components: {
    error,
    breadcrumbs,
    UpcomingEvents,
    PopularOffers,
    AllServices
  },
  data() {
    return {
      apiImg: this.$store.getters["getApiImgUrl"],
      apiUrl: this.$store.getters["getApiUrl"],
      // apiUrl: 'https://api.cakeboost.com/api/v14887401369/api.php/records/',
      globalApi: this.$store.getters["getGlobalApi"],
      timer:"",
      starttime: "2021-09-22",
      endtime: "2021-09-23",
      wordString: {},
      start: "",
      end: "",
      interval: "",
      days:"",
      minutes:"",
      hours:"",
      seconds:"",
      message:"",
      statusType:"",
      statusText: "",
      depth: 0,
      landing_s: "",
      last_blogs: [],
      spechial_offers: [],
      reviews: [],
      games: [],
      open_more_info_about: "",
      more_text_open: false,
      game_options: {},
      game_title: "",
      game: [],
      hide_more: false,
      date_Array: [],
      active_date: moment().tz("Europe/Berlin").format("LLLL").split(","),
      events_product_times: [],
      group_event: [],
      allegiance: 0,
      choosen_events: {
        event_id: "",
        time_id: "",
      },
      reviews_count: 0,
      settings: "",
      game_id: "",
      game_id_all: "",
      sub_mail: "",
      check_likes_array:[],
      origin_location:'',
      main_events:1,
      main_event:'',
      screen: 0,
      // jsonld: {},
      jsonld_extra: {
        "@context": "http://schema.org",
        "@graph": []
      }
    };
  },

  mounted() {
    if([
      "wow-burning-crusade",
      "wow-boost",
      "wow-vanilla",
    ].includes(window.location.href.split("/")[3])) {
      fbq('track', 'ViewContent');
    }
    this.get_game_options(),
    this.set_time_skus(),
    this.get_landing_s(),
    this.get_calendar_week(),
    this.get_likes(),
    this.origin_location = window.location.origin,
    setTimeout(() => {
      this.init_swiper();
    }, 3000);
    /*
    try {
      this.jsonld = {
        "@context": "http://schema.org",
        "@graph": [
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": this.game_options.FAQ.map(faq_item => {
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
        ],
      }
    } catch(e) {
      console.log(this.game_options, "GAME OPTIONS")
    }
    */
    setInterval(() => {
      this.$forceUpdate();
    },1000);
  },
  async asyncData({ $axios, route, store, redirect, res }) {
    try {
      let currentDate = moment()
        .tz("Europe/Berlin")
        .format("YYYY-MM-DD HH:mm:ss");
      let apiUrl = store.getters["getApiUrl"];
      // let apiUrl = 'https://api.cakeboost.com/api/v14887401369/api.php/records/';
      let last_blogs = [];
      let apiImg = store.getters["getApiImgUrl"];
      let spechial_offers = [];
      let game = route.params.game;
      let game_id = '';
      let game_id_all = '';
      let main_events = 1;
      if(game == 'wow-boost'){
        let response_game = await $axios
          .$get(apiUrl + "game?filter=slug,eq,wow-shadowlands")
          .then((data) => {
            game_id = data.records[0].id;
            game_id_all = data.records[0];
          });
      } else {
         let response_game = await $axios
          .$get(apiUrl + "game?filter=slug,eq," + game)
          .then((data) => {
            game_id = data.records[0].id;
            game_id_all = data.records[0];
          });
      }

      let depth = route.path.split("/").length;
      let events_product_times = [];
      let date_Array = [];
      let date_Array_temp = [];
      let group_event = [];
      let event_times = [];
      let stopDate = moment().add(15, "days");
      let fractions = [];
      let reviews_count = 0;
      let faq = [];
      let about = [];
      let settings;
      let times = [];
      let jsonld_extra = {
        "@context": "http://schema.org",
        "@graph": []
      };
      let best_offers = {};
      let all_gameItem = [];

      let response_faq = await $axios
        .$get(apiUrl + "pages?filter=id,eq,11")
        .then((data) => {
          if(data){
            faq = JSON.parse(data.records[0].content)
            console.log(route.path.split("/").length - 1)
          }
        });
      let response_about = await $axios
        .$get(
          apiUrl +
            "pages?filter=slug,eq,about"
        )
        .then((data) => {
          about = JSON.parse(data.records[0].content);
        });
      let response_main_item = await $axios
      .$get(apiUrl + "sku?order=ordr,asc&filter=main_raid,eq,1&filter=game,eq,"+game_id)
      .then((data) => {
        if(data.records[0])
        {
          let temp_sku_id = data.records[0].id;
          let response_main_events =  $axios
          .$get(apiUrl +  "events?filter=date,eq," + moment().tz("Europe/Berlin").format("YYYY-MM-DD")+'&filter=parentid,eq,'+ temp_sku_id)
          .then((data_events) => {
            if(data_events.records[0]){
              main_events = data_events.records[0].id;
            }
          });
        }
      });

      let response_fractions = await $axios
        .$get(apiUrl + "fraction")
        .then((data) => {
          fractions = data.records;
        });
      let response_settigns = await $axios
        .$get(apiUrl + "settings?filter=id,eq,1")
        .then((data) => {
          settings = data.records[0];
        });
      while (currentDate <= stopDate) {
        date_Array_temp.push(moment(currentDate).format("LLLL"));
        currentDate = moment(currentDate).add(1, "days");
      }
      let temp;
      for (let i = 0; i < date_Array_temp.length; i++) {
        temp = date_Array_temp[i].split(",");
        date_Array.push(temp);
      }

      let response_data_s = await $axios
        .$get(
          apiUrl +
            "events?filter=date,ge," +
            moment().tz("Europe/Berlin").format("YYYY-MM-DD") +
            "&filter=date,le," +
            moment().tz("Europe/Berlin").add(7, "days").format("YYYY-MM-DD") +
            "&join=sku&join=times&filter=game,eq," +
            game_id
        )
        .then((data) => {
          events_product_times = data.records;
        });
      for (let i = 0; i < 7; i++) {
        let obj_temp = {
          date: moment()
            .tz("Europe/Berlin")
            .add(i, "days")
            .format("YYYY-MM-DD"),
          date_dddd: moment().tz("Europe/Berlin").add(i, "days").format("dddd"),
          events: [],
        };
        group_event.push(obj_temp);
      }
      for (let i = 0; i < events_product_times.length; i++) {
        for (let j = 0; j < group_event.length; j++) {
          if (group_event[j].date == events_product_times[i].date) {
            group_event[j].events.push(events_product_times[i]);
          }
        }
      }
      for (let i = 0; i < group_event.length; i++) {
        for (let j = 0; j < group_event[i].events.length; j++) {
          let response_data_times = await $axios
            .$get(
              apiUrl + "times?filter=parentid,eq," + group_event[i].events[j].id
            )
            .then((data) => {
              group_event[i].events[j].times = data.records;
              for (let k = 0; k < group_event[i].events[j].times.length; k++) {
                group_event[i].events[j].times[k].check_hover = false;
              }
            });
        }
      }

      let response_blogs = await $axios
        .$get(
          apiUrl +
            "news?filter=status,eq,1&order=date,desc&filter=game_id,eq," +
            game_id +
            "&size=7"
        )
        .then((data) => {
          last_blogs = data.records;
          try {
            last_blogs.map((blog) => {
              jsonld_extra["@graph"].push({
                "@context": "https://schema.org",
                "@type": "Article",
                "name": blog.title
              })
            })
          } catch (e) {
            console.log("LAST BLOGS FAIL")
          }
        });
      let response_offers = await $axios
        .$get(
          apiUrl +
            "offers?filter=status,eq,1&filter=game_id,eq," +
            game_id +
            "size=6&order=sort,asc"
        )
        .then((data) => {
          spechial_offers = data.records;
          for (let i = 0; i < spechial_offers.length; i++) {
            let temp_cedt = moment.duration(
              moment(spechial_offers[i].live).diff(moment(currentDate))
            );
            if (temp_cedt.valueOf() > 0) {
              spechial_offers[i].d_time =
                temp_cedt.days() +
                "d " +
                temp_cedt.hours() +
                "h " +
                temp_cedt.minutes() +
                "m";
            } else {
              spechial_offers[i].d_time = null;
            }
          }
        });
      let reviews = [];
      let games = [];
      let response_data_r = await $axios
        .$get(
          apiUrl +
            "reviews?size=20&order=date,desc&filter=status,eq,1&filter=game_id,eq," +
            game_id
        )
        .then((data) => {
          reviews = data.records;
          console.log(game_id)
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

      // for (let i = 0; i < reviews.length; i++) {
      //   let response_data_sku_popular = await $axios
      //     .$get(
      //       apiUrl +
      //         "sku/" +
      //         reviews[i].parentid + '?include=id,slug,game'
      //     )
      //     .then((data) => {
      //       reviews[i].sku = data;
      //     })
      //     .catch((error) => {});
      // }

      let response_data_g = await $axios.$get(apiUrl + "game").then((data) => {
        games = data.records;
      });
      let response_data_r_count = await $axios
        .$get(
          apiUrl +
            "reviews?order=date,desc&filter=status,eq,1&page=1,1"
        )
        .then((data) => {
          reviews_count = data.results;
        });

      if (games) {
        let thisGame = games.find(item => item.id == game_id)
        if(thisGame){
          let game_options = JSON.parse(thisGame.options);
          try {
            jsonld_extra["@graph"].push({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": game_options.FAQ.map(faq_item => {
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
            })
          } catch (e) {
            console.log("FAQ FAIL")
          }
        }
      }

      let response_data_sku_sales = await $axios
          .$get(
          apiUrl +
              "sku?order=ordr,asc&filter=hot,eq,1&size=8&filter=status,eq,1&filter=game,eq," +
              game_id
          )
          .then((data) => {

          best_offers = data.records;
          try {
            best_offers.map((product) => {
              jsonld_extra["@graph"].push({
                "@context": "http://schema.org",
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
                }
              })
            })
          } catch (e) {
            console.log("BEST OFFERS FAIL");
          }
        })


    let response_data_sku_sales2 = await $axios
      .$get(
        apiUrl +
          "sku?order=ordr,asc&filter=status,eq,1&filter=game,eq," +
          game_id
      )
      .then((data) => {
        all_gameItem = data.records;
        try {
          all_gameItem.map((product) => {
            jsonld_extra["@graph"].push({
              "@context": "http://schema.org",
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
              }
            })
          })
        } catch (e) {
          console.log("ALL SERVICES FAIL")
        }
      })

      return {
        last_blogs,
        spechial_offers,
        reviews,
        games,
        date_Array,
        events_product_times,
        group_event,
        fractions,
        reviews_count,
        settings,
        faq,
        about,
        depth,
        game_id,
        game_id_all,
        main_events,
        jsonld_extra,
      };
    } catch (error) {
      console.error(error)
      res.statusCode = 404;
      store.commit("set_show_error", true);
    }
  },
  methods: {
    openChat(){
      if(dashly){
        dashly.open()

      /*try {
        carrotquest.open()
      } catch (e) {
        console.log("Carrotquest not loaded")*/
      }
    },
    getFraction(fractionId, text){
      let thisFraction = this.fractions.find(item => item.id == fractionId)
      return thisFraction[text]
    },
    get_string_time(time){
      time = time.replace(':','').replace('h','').replace('m','');
      if(time > 100){
        return 'Starts in more than 1 hour'
      }
      else{
        return 'Starts 15-30m after purchase'
      }
      return '';
    },
    get_main_event(){
      for(let i = 0; i < this.group_event.length; i++){
        for(let j = 0; j < this.group_event[i].event.length; j++){
          if(this.group_event[i].event[j].id == this.main_events){
            this.main_event = this.group_event[i].event[j];
            break;
          }
        }
      }
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
    share_url(item){
        return this.origin_location + this.$store.getters['getGlobalGame'] +'/'+encodeURIComponent(item.slug+'&'+item.id);
    },
    async delete_like(item){
      let news_set_likes = await this.$axios
          .$post(this.globalApi + "requests.php", {
            method: "likes_dell",
            token: this.get_access(),
            news_id:item.id,
          })
          .then((data) => {
            if(data.status == '200'){
              this.get_likes();
              item.likes--;
            }
          });
    },
    async get_landing_s() {
      let response_data_sku = await this.$axios
        .$get(this.apiUrl + "landing_s")
        .then((data) => {
          this.landing_s = data.records[0];
          // this.basement = JSON.parse(data.records[0].basement);
        });
    },
    async set_like(item){
      let news_set_likes = await this.$axios
          .$post(this.globalApi + "requests.php", {
            method: "likes_add",
            token: this.get_access(),
            news_id:item.id,
          })
          .then((data) => {
            if(data.status == '200'){
              this.get_likes();
              item.likes++;
            }
          });
    },
    check_likes(id){
      for(let i = 0; i < this.check_likes_array.length;i++){
        if(this.check_likes_array[i] == id){
          return true;
        }
      }
      return false;
    },
    async get_likes(){
      let temp = [];
      for(let i = 0; i < this.last_blogs.length;i++){
        temp.push(this.last_blogs[i].id);
      }
      let temp_id =  temp.join(',');
      if(this.get_access()){
        let news_likes = await this.$axios
          .$post(this.globalApi + "requests.php", {
            method: "likes_list",
            token: this.get_access(),
            news_id:temp_id,
          })
          .then((data) => {
            if(!data.status){
              this.check_likes_array = data;
            }
          });
      }
    },
    async send_subscribe() {
      let mail_sub = await this.$axios
        .$post(this.globalApi + "requests.php", {
          method: "user_subscr",
          email: this.sub_mail,
        })
        .then((data) => {
        });
    },
    async get_calendar_week() {
      let response = await this.$axios
        .post(this.globalApi + "requests.php", {
          method: "event_list",
          date: moment().tz("Europe/Berlin").format("L"),
          count: 7,
          game_id: this.game_id,
        })
        .then((data) => {
          this.group_event = data.data;
          this.get_main_event();
        });
      for (let i = 0; i < this.group_event.length; i++) {
        this.group_event[i].date_dddd = moment()
          .tz("Europe/Berlin")
          .add(i, "days")
          .format("dddd");
      }
    },
    get_game_options() {
      if (this.games) {
        let thisGame = this.games.find(item => item.id == this.game_id)
        if(thisGame){
          this.game_options = JSON.parse(thisGame.options);
          this.game_title = thisGame.title;
          this.game = thisGame;
        }
      }
      this.more_info_height();
    },
    more_info_height() {
      if(this.game_options.desc){
        this.hide_more =
        this.game_options.desc.split("").length > 500 ? true : false;
      }
    },
    get_color(times_id) {
      let color = "";
      for (let i = 0; i < this.fractions.length; i++) {
        if (this.fractions[i].id == times_id) {
          color = this.fractions[i].color;
          break;
        }
      }
      return color;
    },
    init_swiper() {
      var mySwiper = new Swiper(".reviews_landing .swiper-container", {
        speed: 1000,
        spaceBetween: 16,
        slidesPerView: "auto",
        navigation: {
          nextEl: ".reviews_landing .straightNavR",
          prevEl: ".reviews_landing .straightNavL",
        },
      });
      // var mySwiper = new Swiper(".calendar .swiper-container", {
      //   speed: 1000,
      //   spaceBetween: 16,
      //   slidesPerView: "auto",
      //   navigation: {
      //     nextEl: ".calendar .straightNavR",
      //     prevEl: ".calendar .straightNavL",
      //   },
      // });
      var mySwiper = new Swiper(".UpcomingEvents .swiper-container", {
        speed: 1000,
        spaceBetween: 16,
        slidesPerView: "auto",
        navigation: {
          nextEl: ".UpcomingEvents .straightNavR",
          prevEl: ".UpcomingEvents .straightNavL",
        },
      });
      var mySwiper = new Swiper(".bestOffers .swiper-container", {
        speed: 1000,
        spaceBetween: 32,
        slidesPerView: "auto",
        navigation: {
          nextEl: ".bestOffers .straightNavR",
          prevEl: ".bestOffers .straightNavL",
        },
      });
      var mySwiper = new Swiper(".MainCategory .swiper-container", {
        speed: 1000,
        // spaceBetween: 16,
        slidesPerView: "auto",
      });
      var mySwiper = new Swiper(".openLengthegory .swiper-container", {
        speed: 1000,
        // spaceBetween: 16,
        slidesPerView: "auto",
      });
      // var mySwiper = new Swiper(".newsGuides .swiper-container", {
      //   speed: 1000,
      //   spaceBetween: 16,
      //   slidesPerView: "auto",
      //   navigation: {
      //     nextEl: ".newsGuides .straightNavR",
      //     prevEl: ".newsGuides .straightNavL",
      //   },
      // });

      this.$forceUpdate();
    },
    async temp_review_item() {
      for (let i = 0; i < this.reviews.length; i++) {
        let response_data_sku_popular = await this.$axios
          .$get(
            this.apiUrl +
              "sku/" +
              this.reviews[i].parentid +
              "?include=id,title,slug,game"
          )
          .then((data) => {
            this.reviews[i].sku = data;
          });
      }
      this.$forceUpdate();
    },
    reviews_text_filter(text) {
      let strippedString = text.replace(/(<([^>]+)>)/gi, "");
      return strippedString;
    },
    set_time_skus(time) {
      let berlin_m = moment().tz("Europe/Berlin").format("YYYY-MM-DD HH:mm:ss");
      let temp_cedt = moment.duration(
        moment(time + " 23:59:59").diff(moment(berlin_m))
      );
      if (temp_cedt.valueOf() > 0) {
        temp_cedt =
          temp_cedt.hours() +
          ":" +
          temp_cedt.minutes() +
          ":" +
          temp_cedt.seconds();
        return temp_cedt;
      } else {
        return null;
      }
    },
    showQuestion(id){
      let question = document.querySelector('.question' + id)
      question.classList.toggle('show')
      question.classList.toggle('OpenFAQitem')
      // console.log(question)
    },
    showInfoblock(index){
      let Protectitem = document.querySelectorAll('.Protectitem')[(index-1)]
      Protectitem.classList.toggle('show')
      Protectitem.classList.toggle('OpenProtectitem')
      // console.log(Protectitem)
    },
  },
};
</script>
