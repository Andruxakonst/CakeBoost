<template>
  <div class="content">
    <div
      class="popUpMask"
      v-if="popup_terms"
      v-bind:class="{ active_card: popup_terms }"
    >
      <div class="tems_and_conditions">
        <div class="closePopUp">
          <img
            src="/img/Close.svg"
            class="closePopUpImg"
            @click="(popup_terms = false), body_active()"
            alt
          />
        </div>
        <!--div class="tems_and_conditions_body topicItem">
          <p>The following terms and conditions govern your access to and use of the Cakeboost platform, including any content, functionality and services offered on or through Cakeboost.com (the "Website"), by GAMES EXPERTS LTD (Company no. 12399019, Unit 111356, Ground Floor, 30 Bloomsbury Street , London, WC1B 3QJ, United Kingdom) and by Individual Entrepreneur Shevyrtalov Ilya Dmitrievich (Taxpayer Identification Number (INN) 645207249901).</p>
          <p>World of Warcraft™ and Blizzard Entertainment™ are registered trademarks of Blizzard Entertainment inc. in the United States and/or other countries. These terms and all related materials, logos, and images are copyright © Blizzard Entertainment. Cakeboost.com is in no way associated with or endorsed by Blizzard Entertainment™. Cakeboost.com is not selling wow ingame items, only offers for you different services and also it increases your ingame skill and gifting you ingame items.</p>
          <p>Cakeboost.com is a website containing information about the Goods and the Seller that allows choosing, ordering and (or) purchasing the Goods.</p>
          <p style="text-align: center;">
            <span style="color: #ff6600;">The rights of the Parties:</span>
          </p>
          <h3>1. The Seller - Cakeboost.com undertakes to:</h3>
          <ul>
            <li>Change the rules of using the website and the website content. (Changes come into force since the moment of publishing a new revision of the Agree-ment at the Website).</li>
            <li>Keep the Customer and his data confidential.</li>
            <li>Avoid changing prices during order fulfilment.</li>
            <li>Provide information during order fulfilment (service status) and inform about any changes in service fulfilment or about unforeseen circumstances.</li>
            <li>Offer a customer to read the website rules to avoid any problems in the future.</li>
            <li>Refund money in strict compliance with the website rules (Refund Policy)</li>
          </ul>
          <h3>2. The Client (Customer) undertakes to:</h3>
          <ul>
            <li>Provide full payment of the services ordered at website Cakeboost.com, for their ful-filment.</li>
            <li>Avoid preventing the performers from fulfilling an ordered service. (Avoid entering a game beforehand, without warning or agreement upon the time).</li>
            <li>Provide complete information requested by operators for order fulfillment (Character name, server, current rating, etc.), and payment information (full name, data of the credit card used for payment) as well.</li>
            <li>Settle all conflict situations by referring to the rules of this website. (In case of a dis-pute, a customer is obliged to apply to the support service; you can find its contact data at a website that provides consultations prior to effecting payment).</li>
          </ul>
          <h3>3. The Client has the right to:</h3>
          <ul>
            <li>Follow order fulfilment (for example, via Twich translation).</li>
            <li>Request money refund in strict compliance with the website rules.</li>
          </ul>
          <h3>4. Return due to incorrect or accidental payment.</h3>
          <p>If you paid a wrong service (not the one you wanted), or payment was duplicated (payment of the same service was effected several times).</p>
          <h3>4.1. Cancellation of a service.</h3>
          <p>If you paid a service but, for some reason, you do not need this very service any more, or you simply changed your mind – refund will be possible before the start of implementation of this service.</p>
          <p>You can also contact the support service to find an alternative or refund your money:</p>
          <ul>
            <li>Skype: Cakeboost.com</li>
            <li>E-mail: Support@cakeboost.com.</li>
          </ul>
          <h3>4.2. Not completed service or emergency.</h3>
          <p>If we did not complete a service for any reason, we can offer an alternative solution of the problem:</p>
          <ul>
            <li>You have the right to cancel your order after the start of the service and ask for a partial refund. In this case, the amount of the refund will be proportional to the volume of the unfinished services.</li>
            <li>Replacement of a service with the other one the cost of which does not exceed the cost of the service already paid (or multiple services).</li>
            <li>In addition, we can complete the service later, if you agree.</li>
            <li>If the service is replaced with a cheaper one, we will refund the difference between the service cost.</li>
            <li>Full refund of the amount if service wasn’t started.</li>
            <li>The Customer has the right to initiate a dispute within 30 days from the date of payment.</li>
            <li>Disagreements and misunderstanding.</li>
          </ul>
          <div class="eventsItem attentionDiv"><div class="redLine"></div> <div class="bannerItemEvents"><div>Attention</div> <div><div>If a service was delayed and completed we do offer some kind of free service but no refund is possible.</div> <div>If a service has been already started, we refund only part of the amount paid.</div> <div>If the service is completed for 100% any kind of compensation is impossible.</div></div></div></div>
        </!--div-->
        <div class="termsAndConditions">
          <div>
            Terms &amp; Conditions
            <div>
              World of Warcraft™ and Blizzard Entertainment™ are registered
              trademarks of Blizzard Entertainment inc. in the United States
              and/or other countries. These terms and all related materials,
              logos, and images are copyright © Blizzard Entertainment.
              <a href>Cakeboost.com</a> is in no way associated with or endorsed
              by Blizzard Entertainment™. <a href>Cakeboost.com</a> is not
              selling wow ingame items, only offers for you different services
              and also it increases your ingame skill and gifting you ingame
              items.
              <br />
              <br />
              <a href>Cakeboost.com</a> is a website containing information
              about the Goods and the Seller that allows choosing, ordering and
              (or) purchasing the Goods.
            </div>
          </div>

      <div class="termsItem topicItem">
        <p id="p1"></p>
        <div><h3>1. The Seller – Cakeboost.com undertakes to:</h3></div>
        <div class="topicItemList">
          <ul>
            <li>Change the rules of using the website and the website content. (Changes come into force since the moment of publishing a new revision of the Agree-ment at the Website).
            </li>
            <li>Keep the Customer and his data confidential.
            </li>
            <li>Avoid changing prices during order fulfilment.
            </li>
            <li>Provide information during order fulfilment (service status) and inform about any changes in service fulfilment or about unforeseen circumstances.
            </li>
            <li>Offer a customer to read the website rules to avoid any problems in the future.
            </li>
            <li>Refund money in strict compliance with the website rules (Refund Policy)
            </li>
          </ul>
        </div>
      </div>
      <div class="termsItem topicItem">
        <p id="p2"></p>
        <div><h3>2. The Client (Customer) undertakes to:</h3></div>
        <div class="topicItemList">
          <ul>
            <li>Provide full payment of the services ordered at website Cakeboost.com, for their ful-filment.
            </li>
            <li>Avoid preventing the performers from fulfilling an ordered service. (Avoid entering a game beforehand, without warning or agreement upon the time).
            </li>
            <li>Provide complete information requested by operators for order fulfillment (Character name, server, current rating, etc.), and payment information (full name, data of the credit card used for payment) as well.
            </li>
            <li>Settle all conflict situations by referring to the rules of this website. (In case of a dis-pute, a customer is obliged to apply to the support service; you can find its contact data at a website that provides consultations prior to effecting payment).
            </li>
          </ul>
        </div>
      </div>
      <div class="termsItem topicItem">
        <p id="p3"></p>
        <div><h3>3. The Client has the right to:</h3></div>
        <div class="topicItemList">
          <ul>
            <li>Follow order fulfilment (for example, via Twich translation).
            </li>
            <li>Request money refund in strict compliance with the website rules.
            </li>
            <li>Use his account if necessary during boosting if he warned operators beforehand that the account would be needed at that time.
            </li>
          </ul>
        </div>
      </div>
      <div class="termsItem topicItem">
        <p id="p4"></p>
        <div><h3>4. Return due to incorrect or accidental payment.</h3></div>
        <div class="termsItemP">If you paid a wrong service (not the one you wanted), or payment was
          duplicated (payment of the same service was effected several times).
        </div>
      </div>
      <div class="termsItem topicItem">
        <p id="p4.1"></p>
        <div>4.1. Cancellation of a service.</div>
        <div class="termsItemP">
          If you paid a service but, for some reason, you do not need this very
          service any more, or you simply changed your mind – refund will be
          possible before the start of implementation of this service.
        </div>
        <div class="termsItemP">
          You can also contact the support service to find an alternative or
          refund your money:
        </div>
        <div class="topicItemList">
          <ul>
            <li>Skype: Cakeboost.com</li>
            <li>
              E-mail: Support@cakeboost.com
            </li>
          </ul>
        </div>
      </div>
      <div class="termsItem topicItem">
        <p id="p4.2"></p>
        <div><h3>4.2. Cancellation of a service.</h3></div>
        <div class="termsItemP">
          If we did not complete a service for any reason, we can offer an
          alternative solution of the problem:
        </div>
        <div class="topicItemList">
          <ul>
            <li>Skype: Cakeboost.com</li>
            <li>You have the right to cancel your order after the start of the service and ask for a partial refund. In this case, the amount of the refund will be proportional to the volume of the unfinished services.
            </li>
            <li>Replacement of a service with the other one the cost of which does not exceed the cost of the service already paid (or multiple services).
            </li>
            <li>In addition, we can complete the service later, if you agree.
            </li>
            <li>If the service is replaced with a cheaper one, we will refund the difference between the service cost.
            </li>
            <li>Full refund of the amount if service wasn’t started.
            </li>
            <li>The Customer has the right to initiate a dispute within 30 days from the date of payment.
            </li>
            <li>Disagreements and misunderstanding.
            </li>
          </ul>
        </div>
      </div>
      <div class="termsItem topicItem">
        <p id="p5"></p>
        <div><h3>5.Sanctions Compliance Policy</h3></div>
        <div>
          <h3>5.1 Introduction</h3>
        </div>
        <div class="termsItemP">
          GAMES EXPERTS LTD. (the “Company”) is committed to carrying on
          business in accordance with complying with all applicable trade
          sanctions regulations (“Sanctions Laws”) in all jurisdictions in which
          it operates.
        </div>
        <div class="termsItemP">
          This Sanctions Policy (the “Policy”) summarizes restrictive measures
          imposed by the US and the EU, (the “Sanctions”) which restrict the
          ability of the Company to undertake any activity in specific
          territories or with specific persons targeted by the Sanctions. This
          Policy also outlines the restrictions and protective measures to be
          consistently followed by each Employee of the Company.
        </div>
        <div>
          <h3>5.2 Policy Applicability</h3>
        </div>
        <div class="termsItemP">
          The Company will apply and incorporate the Policy in its business
          practices.
        </div>
        <div class="termsItemP">This Policy applies to:</div>
        <div class="topicItemList">
          <ul>
            <li>all employees, officers, directors, and contracted personnel of the Company, and to such other persons as designated by the Company from time to time (each an “Employee”, collectively “Employees”); and,
            </li>
            <li>all natural and legal persons (and their respective employees, officers and directors) that perform services for the Company.
            </li>
          </ul>
        </div>
        <div>
          <h3>5.3 Purpose</h3>
        </div>
        <div class="termsItemP">
          This Policy sets the Company’s approach to identifying and managing
          Sanctions-related risks, including:
        </div>
        <div class="topicItemList">
          <ul>
            <li>the meaning of the Sanctions;
            </li>
            <li>guidance on how to comply with applicable Sanctions Laws and Regulations or specific provisions of any Company’s Sanctions Obligations, with respect to Sanctions;
            </li>
            <li>principles and measures as to how to mitigate the risk associated with or arising from any potential breach of Sanctions Laws and Regulations in the jurisdictions of business operations of the Company;
            </li>
            <li>consequences of failing to comply with Company’s Sanctions Obligations and the Policy;
            </li>
            <li>regular reporting on violation (or risks of such violation) of applicable Sanctions Laws and Regulations;
            </li>
          </ul>
        </div>
        <div>
          <h3>5.4 Sanctions Compliance</h3>
        </div>
        <div class="termsItemP">Key Principles.</div>
        <div class="termsItemP">
          The Company maintains a Sanctions policy to meet obligations under
          Sanctions regimes of the jurisdictions in which it operates, is
          registered and/or licensed.
        </div>
        <div class="termsItemP">
          The company complies with the requirements of the U.S., U.N. and E.U.
          Sanctions regimes (whenever these apply to its operations) wherever it
          operates, and will not undertake any business that would breach those
          Sanctions regimes.
        </div>
        <div class="termsItemP">
          In addition to complying with the requirements of the U.S., U.N. and
          E.U. Sanctions regimes (whenever these apply to its operations), the
          Company complies with other Sanctions regimes whenever they apply to
          particular operations, and will not undertake any business that would
          breach those Sanctions regimes.
        </div>
        <div class="termsItemP">
          Employees are regularly informed on the updates in the applicable
          Company’s Sanctions Obligations and Sanctions Laws and Regulations.
        </div>
        <div class="termsItemP">
          The Company will not undertake any business that would breach any
          export laws that apply to it.
        </div>
        <div class="termsItemP">Obligations of Employees.</div>
        <div class="termsItemP">
          The Company shall not breach any Company’s Sanctions Obligations or
          any Sanctions Laws and Regulations applicable to it.
        </div>
        <div class="termsItemP">
          The Company (or its Employees) shall not maintain, permit or undertake
          any activity or conduct which would result in breaching applicable
          Company’s Sanctions Obligations or any Sanctions Laws and Regulations
          applicable to it.
        </div>
        <div class="termsItemP">
          The Company shall not directly or indirectly do business or enter into
          any transaction with any Sanctions Restricted Person. The Company
          shall ensure that its Employees refrain from doing business with (on
          behalf of their employer-company) any Sanctions Restricted Person in a
          manner that would be in breach of any applicable Sanctions Laws and
          Regulations.
        </div>
        <div class="termsItemP">
          The Company shall not directly or indirectly use or permit to be used
          any funds of, or received by, contribute or otherwise make available
          such funds directly or indirectly to any person or entity (whether or
          not related to the Company) for the purposes of, or with the effect
          of, financing the activities of any person or entity which is a
          Sanctions Restricted Person in a manner that would be in breach of any
          Sanctions Laws and Regulations.
        </div>
        <div class="termsItemP">
          The Company shall not use any revenue or payment that is directly or
          indirectly derived from transactions which would be prohibited by
          applicable Sanctions Laws and Regulations.
        </div>
        <div class="termsItemP">
          The Company shall not do business in the Sanctions Restricted Country
          or Sanction Restricted Territory (or with any person or entity located
          or incorporated thereunder) in a manner that would be in breach of any
          Sanctions Laws and Regulations applicable to it.
        </div>
        <div class="termsItemP">
          Employee shall not breach any applicable Company’s Sanctions
          Obligations or Sanctions Laws or Regulations.
        </div>
        <div class="termsItemP">
          Employee shall not maintain, permit or undertake any activity or
          conduct which would result in breaching applicable Company’s Sanctions
          Obligations or any Sanctions Laws and Regulations applicable to it.
        </div>
        <div class="termsItemP">
          The Company shall, to the extent permitted by applicable laws, ensure
          that its Employees not breaching the Company’s Sanctions Obligations
          or the Sanctions Laws or Regulations applicable to it.
        </div>
        <div class="termsItemP">
          The Company shall appoint a qualified individual within its
          organization (the “Legal and Compliance Officer”) to supervise any
          activity in relation to compliance with the Policy. If no compliance
          officer is appointed by the Company, a chief financial officer of
          relevant member of the Company shall take responsibility over this
          matter.
        </div>
        <div>
          <h3>5.5 Non-Compliance</h3>
        </div>
        <div class="termsItemP">
          Employees shall immediately contact the Legal and Compliance Officer
          by any possible means of communication in case is located in any
          Sanctions Restricted Country or Sanctions Restricted Territory.
        </div>
        <div class="termsItemP">
          Upon becoming aware about any breach or suspected potential breach as
          reported by an Employee pursuant to Clause 5.1 above, the Legal and
          Compliance Officer shall immediately report about such breach or
          suspected potential breach to the Company’s management.
        </div>
        <div class="termsItemP">
          In case any Employee knowingly or intentionally breaches any
          applicable Sanctions Laws and Regulations or Company’s Sanctions
          Obligations, the management of the Company, after consultation with
          the Legal and Compliance Officer, shall immediately terminate the
          employment of such Employee, such termination be perfected in
          accordance with applicable labor or corporate rules or regulations.
        </div>
        <div class="termsItemP">
          In case any Employee intentionally breaches the provision of this
          Policy, the management of the Company, upon consultation with the
          Legal and Compliance Officer, shall have a right, at its sole
          discretion (i) to terminate the employment of such breaching Employee
          or (ii) to impose on such breaching Employee any disciplinary
          liability measures, to the extent permitted by applicable labor or
          corporate laws or regulations.
        </div>
        <div class="termsItemP">
          In case the Company is a party to a contract and, as a result of
          either (i) a change in Sanctions Laws and Regulations applicable to it
          or (ii) a change of control of the counterparty to such contract, the
          existence of such contract contravenes Sanctions Laws and Regulations
          applicable to it, the management of the Company shall immediately
          report thereof to the Legal and Compliance Officer.
        </div>
        <div class="termsItemP">
          Upon instructions of the Group Legal and Compliance Officer the
          Company being in breach of Sanctions Laws and Regulations, as
          mentioned in Clause 5.5, shall take all necessary steps to address
          such breach, including steps to suspend, freeze, cancel and/or
          terminate the relevant contract as to ensure that there’s no
          contravention of applicable Sanctions Laws and Regulations.
        </div>
        <div class="termsItemP">
          As a matter of Policy, the Policy shall be brought to the attention of
          all Employees. Any future Employees shall be informed on the Policy at
          the time of signing the employment agreement. By signing the
          employment agreement (or amendments thereof) Employees confirm that
          they have read, understood and undertake to comply with the Policy.
        </div>
        <div>
          <h3>5.6 Updates, Review and Ownership</h3>
        </div>
        <div class="termsItemP">
          This Policy may be updated from time, and the latest version of the
          Policy will always be available on the Company’s website.
        </div>
        <div>
          <h3>6. Sanctions Lists</h3>
        </div>
        <div class="topicItemList">
          <ul>
            <li>US SDN List (for an updated list of SDNs, please consult the SDN List on OFAC’s website, available at:<a
                href="https://www.treasury.gov/resource-center/sanctions/SDN- List/Pages/default.aspx"
                >https://www.treasury.gov/resource-center/sanctions/SDN-List/Pages/default.aspx</a
              >);
            </li>
            <li>US SSI List (for an updated list of SSI entities, please consult the SSI List on OFAC’s website, available at:<a
                href="https://www.treasury.gov/resource-center/sanctions/SDN-List/Pages/ssi_list.aspx"
                >https://www.treasury.gov/resource-center/sanctions/SDN-List/Pages/ssi_list.aspx</a
              >);
            </li>
            <li>EU Asset Freeze List (for an updated list of all parties subject to an EU asset freeze, please consult the EEAS website<a
                href="http://eeas.europa.eu/cfsp/sanctions/consol-list/index_en.htm"
                >http://eeas.europa.eu/cfsp/sanctions/consol-list/index_en.htm</a
              >);
            </li>
            <li>EU Sectoral List (for an updated list of all relevant parties subject to the EU’s sectoral sanctions, please see Regulation 833/2014, available at:<a
                href="http://eur-lex.europa.eu/legalcontent/EN/TXT/?uri=CELEX%3A32014R0833"
                >http://eur-lex.europa.eu/legalcontent/EN/TXT/?uri=CELEX%3A32014R0833</a
              >);
            </li>
          </ul>
        </div>
        <div class="termsItemP">
          The relevant lists must be consulted on their respective government
          websites before proceeding with any transaction.
        </div>
      </div>
          <div class="eventsItem attentionDiv">
            <div class="redLine"></div>
            <div class="bannerItemEvents">
              <div>Attention</div>
              <div>
                <div>
                  If a service was delayed and completed we do offer some kind
                  of free service but no refund is possible.
                </div>
                <div>
                  If a service has been already started, we refund only part of
                  the amount paid.
                </div>
                <div>
                  If the service is completed for 100% any kind of compensation
                  is impossible.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <breadcrumbs />
    <div class="makeOrder">
      <h1>Make an order</h1>
      <div class="purchaseForm">
        <div class="youPurschaseForm">
          <div>1. Your purchase</div>
          <div
            class="youPurschaseFormItem"
            v-for="(item, index) in this.$store.getters['getCard'].cart_items"
            :key="index"
          >
            <div>
              <div>
                <img :src="apiImg + 'sku/' + item.product.image" :alt="item.product.title" />
                {{ init_coin_pay() }}
              </div>
              <div><a :href="'/' + gameFind(item.product.game) + '/service/' + item.product.slug + '&' + item.product.id" v-html="replaceString(item.product.menu_name)"></a></div>
            </div>
            <div>
              <div v-if="item.product.raid_enable != 0 && item.event.event_date != null">
                <span>
                  <strong>Raid time:</strong>

                  {{ get_cart_format_time(item.event.event_date) }} @
                  <span v-if="!!item.event.times.time_edt"
                    >{{ item.event.times.time_edt }} EDT</span
                  >
                  <span v-if="!!item.event.times.time_cest"
                    >{{ item.event.times.time_cest }} CEST</span
                  >
                </span>
              </div>
              <div v-for="subitem in item.checkbox_list" :key="subitem">
                <span v-html="subitem.array.title"></span>
                <span v-html="subitem.array.descr"></span>
              </div>
              <div v-for="subitem in item.subcheckbox_list" :key="subitem">
                <span v-html="subitem.title"></span>
                <span v-html="subitem.descr"></span>
              </div>
              <div v-for="subitem in item.single_slider" :key="subitem">
                {{ subitem.title }} :
                <span>{{ subitem.real_value }}</span>
              </div>
              <div v-for="subitem in item.double_slider" :key="subitem">
                {{ subitem.slider_title }} :
                <span>{{ subitem.title.replace(";", " - ") }}</span>
              </div>
              <div v-for="subitem in item.calc" :key="subitem">
                {{ subitem.array.title }} :
                <span>{{
                  parseFloat(subitem.array.min) +
                  parseFloat(
                    parseFloat(subitem.array.step) * parseFloat(subitem.count)
                  )
                }}</span>
              </div>
              <div>
                <span v-if="item.rank_object.selected_rank && item.rank_object.selected_rank.title != ''">
                  {{item.rank_object.selected_rank.title}}

                  <span v-if="item.rank_object.current>0">
                    Current:  {{item.rank_object.current}}
                  </span>

                    <span v-if="item.rank_object.desire>0">
                    Desire:  {{item.rank_object.desire}}
                  </span>

                </span>
              </div>
            </div>
            <div class="purschaseFormItemBottom">
              <div>
                <div class="count" v-show="item.product.raid_enable != 1">
                  <img
                    v-if="item.count > 1"
                    src="/img/Minus.svg"
                    @click="count_minus(index, item.count)"
                    alt
                  />
                  <img v-if="item.count == 1" src="/img/Minus.svg" alt />
                  <input
                    type="number"
                    class="input_class"
                    v-bind:value="item.count"
                    size="3"
                    min="1"
                    max="99"
                    readonly
                    v-on:input="
                      item.count = $event.target.value;
                      if (item.count <= 0) count = 1;
                    "
                  />
                  <img src="/img/Plus.svg" @click="count_plus(index, item.count)" alt />
                </div>
                <div v-if="$store.getters['getSelectedZone'] == 'us'">
                  {{
                    (
                      (parseFloat(item.product.price_usd) +
                        parseFloat(item.option_total_us)) *
                      item.count
                    ).toFixed(2)
                  }}$
                  <span
                    v-if="item.product.sales == 1 || item.product.sales_2 == 1"
                    >{{
                      (
                        (((parseFloat(item.product.price_usd) +
                          parseFloat(item.option_total_us)) *
                          100) /
                          (100 - parseFloat(item.product.sales_discount))) *
                        item.count
                      ).toFixed(2)
                    }}$</span
                  >
                </div>
                <div v-if="$store.getters['getSelectedZone'] == 'eu'">
                  {{
                    (
                      (parseFloat(item.product.price_eur) +
                        parseFloat(item.option_total_eu)) *
                      item.count
                    ).toFixed(2)
                  }}€
                  <span
                    v-if="item.product.sales == 1 || item.product.sales_2 == 1"
                    >{{
                      (
                        (((parseFloat(item.product.price_eur) +
                          parseFloat(item.option_total_eu)) *
                          100) /
                          (100 - parseFloat(item.product.sales_discount))) *
                        item.count
                      ).toFixed(2)
                    }}€</span
                  >
                </div>
                <img
                  src="/img/Close.svg"
                  @click="delete_cart_item(index)"
                  alt
                />
              </div>
            </div>
          </div>
          <!--div class="purschaseTotalCount" v-if="this.$store.getters['getCard']">
            <span>Common:</span>
            <span v-if="$store.getters['getSelectedZone']=='us'">
              <span
                v-if="this.$store.getters['getCard'].sales"
              >{{this.$store.getters['getCard'].total_sale_us}}$</span>
              {{this.$store.getters['getCard'].total_price_us}}$
            </span>
            <span v-if="$store.getters['getSelectedZone']=='eu'">
              <span
                v-if="this.$store.getters['getCard'].sales"
              >{{this.$store.getters['getCard'].total_sale_eu}}€</span>
              {{this.$store.getters['getCard'].total_price_eu}}€
            </span>
          </!--div-->
        </div>
        <div class="orderInfoForm">
          <div>2. General information</div>
          <div class="orderInfoFormInput">
            <div>
              Email
              <sup>*</sup>
            </div>
            <input
              :class="{ empty_input_border: !order.email && empty_input }"
              v-model="order.email"
              type="text"
            />
          </div>
          <div class="orderInfoFormName">
            <div class="orderInfoFormInput">
              <div>
                First name
                <sup>*</sup>
              </div>
              <input
                :class="{ empty_input_border: !order.fname && empty_input }"
                v-model="order.fname"
                type="text"
              />
            </div>
            <div class="orderInfoFormInput">
              <div>Last name</div>
              <input v-model="order.lname" type="text" />
            </div>
          </div>
          <div class="orderInfoFormInput">
            <div>
              Country
              <sup>*</sup>
            </div>
            <input
              v-model="order.country"
              readonly
              type="text"
              @click="countries_list_open = countries_list_open ? false : true"
              class="order_country_in"
              :class="{
                empty_input_border:
                  empty_input && !countries_list_open && !order.country,
              }"
            />
            <div
              class="countries_list"
              v-if="countries_list_open"
              style="width: calc(100% - 18px)"
            >
              <div class="country_search">
                <input
                  v-model="country_search"
                  type="text"
                  placeholder="Search the country..."
                  value
                  class="searchInput"
                />
                <!---->
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
                    (order.country = item.country.country_name),
                      (countries_list_open = false)
                  "
                >
                  {{ item.country.country_name }}
                </div>
              </div>
            </div>
          </div>
          <div class="chatForCommunication">
            <div>Сhat for communication</div>
            <div class="chatImg">
              <div
                @click="choosen_chat = 'discord'"
                :class="{ active: choosen_chat == 'discord' }"
              >
                <img src="/img(ColorSochialLogo)/Discord.svg" alt />
              </div>
              <div
                @click="choosen_chat = 'skype'"
                :class="{ active: choosen_chat == 'skype' }"
              >
                <img src="/img(ColorSochialLogo)/Skype.svg" alt />
              </div>
              <div
                @click="choosen_chat = 'whatsapp'"
                :class="{ active: choosen_chat == 'whatsapp' }"
              >
                <img src="/img(ColorSochialLogo)/WhatsApp.svg" alt />
              </div>
              <div
                class="viber"
                @click="choosen_chat = 'viber'"
                :class="{ active: choosen_chat == 'viber' }"
              >
                <img src="/img(ColorSochialLogo)/Viber.svg" alt />
              </div>
              <div
                class="telegram"
                @click="choosen_chat = 'telegram'"
                :class="{ active: choosen_chat == 'telegram' }"
              >
                <img src="/img(ColorSochialLogo)/Telegram.svg" alt />
              </div>
            </div>
            <div class="orderInfoFormInput">
              <!--div>Contact info</!--div-->
              <input
                v-model="order.chat.discord"
                v-if="choosen_chat == 'discord'"
                placeholder="example#9999"
                type="text"
                :class="{
                  empty_input_border: empty_input && !discord_validation(),
                }"
              />
              <input
                v-model="order.chat.skype"
                v-if="choosen_chat == 'skype'"
                type="text"
              />
              <input
                v-model="order.chat.whatsapp"
                v-if="choosen_chat == 'whatsapp'"
                type="number"
              />
              <input
                v-model="order.chat.viber"
                v-if="choosen_chat == 'viber'"
                type="number"
              />
              <input
                v-model="order.chat.telegram"
                v-if="choosen_chat == 'telegram'"
                type="text"
              />
            </div>
          </div>
          <div
            v-for="(item, index) in this.$store.getters['getCard'].cart_items"
            :key="index"
          >
            <div
              v-for="game in games.records"
              :key="game.id"
              v-if="
                item.product.game == game.id &&
                (games_id_cart.indexOf(game.id) == -1 ||
                  (games_id_cart.indexOf(game.id) != -1 &&
                    index_f.indexOf(index) != -1))
              "
            >
              <span>{{ add_index(index) }}</span>
              <div class="fields_title">
                {{ game.title }}
              </div>
              <div
                class="orderInfoFormInput"
                v-for="(fields_n, index) in Object.keys(
                  JSON.parse(game.fields).fields
                )"
                :key="index"
              >
                <div>
                  {{ fields_adder(fields_n, JSON.parse(game.fields), game.id) }}
                </div>
                <input v-model="fields[fields_n]" type="text" />
              </div>
            </div>
            <!--div class="saveForNextOrder">
              <img src="/img/Flag Active.svg" alt />
              <span>Save information for next puchases</span>
              <img src="/imgGameLogoPurple/Notion.svg" alt />
            </!--div-->
          </div>
          <div class="additionaliInformation">
            <div>Additional information</div>
            <textarea
              v-model="order.comment"
              name
              id
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
        <div class="paymentForm">
          <div>3. Payment</div>
          <div
            class="paymentOptions"
            v-if="$store.getters['getUserLoginCheck'].user_check_login"
          >
            <div style="font-size: 12px; color: #828688">
              How are you going to pay for this order?
            </div>
            <div>
              <div
                @click="(bonus_system = 0), (coins_picked_eu = 0) , (coins_picked_us = 0), delete_coupon()"
                :class="{ active_check: bonus_system == 0 }"
              ></div>
              <span class="span_terms_global">
                <span>Use CakeCoins</span>
              </span>
            </div>
            <div>
              <div
                @click="(bonus_system = 1), (coins_picked_eu = 0) , (coins_picked_us = 0), delete_coupon()"
                :class="{ active_check: bonus_system == 1 }"
              ></div>
              <span class="span_terms_global">
                <span>Apply Promocode</span>
              </span>
            </div>
          </div>
          <div class="cakecoinsPicker" v-if="bonus_system == 0">
            <div>
              <input
                v-if="this.$store.getters['getSelectedZone'] == 'eu'"
                type="range"
                name=""
                min="0"
                v-bind:max="coins_pay_storage_eu"
                v-model="coins_picked_eu"
                step="1"
                id=""
              />
              <input
                v-if="this.$store.getters['getSelectedZone'] == 'us'"
                type="range"
                name=""
                min="0"
                v-bind:max="coins_pay_storage_us"
                v-model="coins_picked_us"
                step="1"
                id=""
              />
            </div>
            <input
              v-if="this.$store.getters['getSelectedZone'] == 'eu'"
              type="number"
              min="0"
              v-bind:max="coins_pay_storage_eu"
              v-model="coins_picked_eu"
              id=""
            />
            <input
              v-if="this.$store.getters['getSelectedZone'] == 'us'"
              type="number"
              min="0"
              v-bind:max="coins_pay_storage_us"
              v-model="coins_picked_us"
              id=""
            />
              <div class="cakecoinsPicker_balance">
                Your balance : {{user.balance}}
              </div>
              <div class="cakecoinsPicker_balance" v-if="$store.getters['getSelectedZone'] == 'us'">
                You will save : {{parseFloat(coins_picked_us * coins_settings.usd_coin).toFixed(2)}}$
              </div>
               <div class="cakecoinsPicker_balance" v-if="$store.getters['getSelectedZone'] == 'eu'">
                You will save : {{parseFloat(coins_picked_eu * coins_settings.eur_coin).toFixed(2)}}€
              </div>
          </div>
          <div class="promoCodeForm" v-if="bonus_system == 1">
            <div>Do you have a promocode?</div>
            <div v-if="!$store.getters['getCard'].coupon">
              <input v-model="coupon" type="text" placeholder="Enter code" />
              <button @click="apply_coupon()">Apply</button>
            </div>
            <div v-else>
              <input
                v-model="$store.getters['getCard'].coupon_code"
                readonly
                type="text"
                placeholder="Enter code"
              />
              <button @click="delete_coupon()">Delete</button>
            </div>
          </div>
          <div class="purschaseTotalCount">
            <span style="margin-right:6px;">Total : </span>
            <span v-html="Price"></span>
          </div>
          <div class="choosePaymentSystem">
            <div>
              Choose the payment method
              <div class></div>
            </div>
            <div class="paymentSystemItems">
              <div
                v-for="item in this.payments"
                :key="item.id"
                @click="order.payment_type = item.id"
                :class="{ active: order.payment_type == item.id }"
              >
                <img :src="apiImg + 'gicons/' + item.img" :alt="item.title" />
              </div>
            </div>
          </div>
          <div class="paymentOptions">
            <div>
              <div
                @click="terms_check()"
                :class="{
                  active_check: check_terms,
                  empty_input_border: !check_terms && empty_input,
                }"
              ></div>
              <span class="span_terms_global">
                <span>I have read and agree to the website</span>
                <span
                  @click="(popup_terms = true), body_set_hidden()"
                  class="span_terms"
                  >terms and conditions*</span
                >
              </span>
              <!-- <img src="/imgGameLogoPurple/Notion.svg" alt /> -->
            </div>
            <div>
              <div
                @click="
                  order.mailing == 0 ? (order.mailing = 1) : (order.mailing = 0)
                "
                :class="{ active_check: order.mailing == 1 }"
              ></div>
              <span class="span_terms_global">
                <span>Sign me up for the newsletter!</span>
              </span>
              <!-- <img src="/imgGameLogoPurple/Notion.svg" alt /> -->
            </div>

            <div
              v-if="
                this.$store.getters['getUserLoginCheck'].user_check_login
              "
            >
              <div
                @click="
                  order.save_info == 0
                    ? (order.save_info = 1)
                    : (order.save_info = 0)
                "
                :class="{ active_check: order.save_info == 1 }"
              ></div>
              <span class="span_terms_global">
                <span>Save information for next puchases</span>
              </span>
              <!-- <img src="/imgGameLogoPurple/Notion.svg" alt /> -->
            </div>
            <button
              v-if="
                this.check_terms &&
                this.order.email != '' &&
                this.order.fname != '' &&
                this.order.country != '' &&
                this.discord_validation() &&
                this.check_terms &&
                this.order.email &&
                this.order.fname &&
                this.order.country &&
                this.discord_validation() && this.$store.getters['getCard'].cart_items.length > 0
              "
              id="buyItem"
              @click="send_order()"
            >
              <img src="/img/Card.svg" alt />
              Buy
            </button>
            <button v-else id="buyItem" @click="set_empty_input()">
              <img src="/img/Card.svg" alt />
              Buy
            </button>
            <span
              class="result_failure"
              v-html="order_result_text.text"
              v-if="order_result_text.check"
            >
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import breadcrumbs from "~/components/breadcrumbs.vue";
import countries from "~/static//countries.json";
import moment from "moment";
import momenttz from "moment-timezone";
export default {
  head() {
    return {
      title: "Make an order | Cakeboost",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "",
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href:'https://cakeboost.com'+this.$route.path
        }
      ],
      script: [
        {
          src: "https://js.stripe.com/v3/",
        },
      ],
    };
  },
  components: {
    breadcrumbs,
  },
  data() {
    return {
      countries: [],
      countries_list_open: false,
      apiUrl: this.$store.getters["getApiUrl"],
      apiImg: this.$store.getters["getApiImgUrl"],
      globalApi: this.$store.getters["getGlobalApi"],
      popup_terms: false,
      check_terms: false,
      cart: "",
      country_search: "",
      check_mailing: "1",
      check_registration: "1",
      choosen_chat: "discord",
      order: {
        userid: "",
        email: undefined,
        fname: undefined,
        lname: "",
        country: undefined,
        chat: {
          discord: "",
          skype: "",
          telegram: "",
          whatsapp: "",
          viber: "",
        },
        charactername: [],
        save_info: "0",
        comment: "",
        currency: this.$store.getters["getSelectedZone"],
        payment_type: 1,
        mailing: "0",
        user_id: this.$store.getters["getUserLoginCheck"].id,
        clientId: '',
      },
      user: "",
      coupon: "",
      games_id_cart: [],
      games: [],
      payments: [],
      fields: {},
      index_f: [],
      empty_input: false,
      order_result_text: { check: false, text: "" },
      coins_settings: {
        percent: 0,
        eur_coin: 0,
        usd_coin: 0,
      },
      coins: 0,
      coins_pay_storage_us: 0,
      coins_pay_storage_eu: 0,
      check_init_coin_pay: false,
      bonus_system: 1,
      coins_picked_us: 0,
      coins_picked_eu: 0,
      coin_settings_db: "",
      userId: '',
    };
  },
  created() {},
  mounted() {
    this.get_user(),
      this.get_games(),
      this.get_payments(),
      this.get_coin_settings();
      this.getUserId();
  },
  computed:{
    Price: function() {
      let cart_item = this.$store.getters.getCard.cart_items;
      console.log('coins_picked_us: ' + this.coins_picked_us)
      console.log('coins_pay_storage_us: ' + this.coins_pay_storage_us)
      let PriceUsd = 0;
      let PriceEur = 0;
      let salePriceUsd = 0;
      let salePriceEur = 0;

      cart_item.forEach( function(item){
         if(item.product.sales == 1 || item.product.sales_2 == 1) {
          salePriceUsd += parseFloat(((((parseFloat(item.product.price_usd) + parseFloat(item.option_total_us)) * 100) / (100 - parseFloat(item.product.sales_discount))) * item.count).toFixed(2))
          salePriceEur += parseFloat(((((parseFloat(item.product.price_eur) + parseFloat(item.option_total_eu)) * 100) / (100 - parseFloat(item.product.sales_discount))) * item.count).toFixed(2))
        } else {
          salePriceUsd += parseFloat(((parseFloat(item.product.price_usd) + parseFloat(item.option_total_us)) * item.count).toFixed(2))
          salePriceEur += parseFloat(((parseFloat(item.product.price_eur) + parseFloat(item.option_total_eu)) * item.count).toFixed(2))
        }
        PriceUsd += parseFloat(((parseFloat(item.product.price_usd) + parseFloat(item.option_total_us)) * item.count).toFixed(2))
        PriceEur += parseFloat(((parseFloat(item.product.price_eur) + parseFloat(item.option_total_eu)) * item.count).toFixed(2))

      })
      let priceSpan = '';
      if(this.$store.getters.getSelectedZone == 'us'){
        if(this.$store.getters.getCard['sales']) {
          priceSpan = '<span>'+ salePriceUsd.toFixed(2) +'$</span>                ' + PriceUsd.toFixed(2) + '$';
        } else {
          priceSpan = '                ' + PriceUsd.toFixed(2) + '$' ;
        }
      } else {
        if(this.$store.getters.getCard['sales']) {
          priceSpan = '<span>'+ salePriceEur.toFixed(2) +'€</span>                ' + PriceEur.toFixed(2) + '€';
        } else {
          priceSpan = '                ' + PriceEur.toFixed(2) + '€';
        }
      }
      return priceSpan;
    }
  },
  asyncData({ params }) {
    return { countries };
  },
  watch: {
    coins_picked_us: function () {
      let purschaseTotalCount = document.querySelector('.purschaseTotalCount > span:nth-child(2)')
      if (this.coins_picked_us < 0) {
        this.coins_picked_us = 0;
      }

      if (
        parseFloat(this.coins_picked_us) > parseFloat(this.coins_pay_storage_us)
      ) {
        this.coins_picked_us = this.coins_pay_storage_us;
      }
      let cart_item = this.$store.getters.getCard.cart_items;
      let PriceUsd = 0;
      let salePriceUsd = 0;
      cart_item.forEach( function(item){
        if(item.product.sales == 1 || item.product.sales_2 == 1) {
          salePriceUsd += parseFloat(((((parseFloat(item.product.price_usd) + parseFloat(item.option_total_us)) * 100) / (100 - parseFloat(item.product.sales_discount))) * item.count).toFixed(2))
        } else {
          salePriceUsd += parseFloat(((parseFloat(item.product.price_usd) + parseFloat(item.option_total_us)) * item.count).toFixed(2))
        }
        PriceUsd += parseFloat(((parseFloat(item.product.price_usd) + parseFloat(item.option_total_us)) * item.count).toFixed(2))
      })
      if(this.$store.getters.getCard['sales']) {
        $(purschaseTotalCount).html('<span>'+ (parseFloat(salePriceUsd)).toFixed(2) +'$</span>                ' + (parseFloat(PriceUsd) - parseFloat(this.coins_picked_us * this.coins_settings.usd_coin)).toFixed(2) + '$')
      } else {
        if( this.coins_picked_us > 0 ) {
          $(purschaseTotalCount).html('<span>'+ (parseFloat(salePriceUsd)).toFixed(2) +'$</span>                ' + (parseFloat(PriceUsd) - parseFloat(this.coins_picked_us * this.coins_settings.usd_coin)).toFixed(2) + '$')
        } else{
          $(purschaseTotalCount).html('                ' + (parseFloat(PriceUsd) - parseFloat(this.coins_picked_us * this.coins_settings.usd_coin)).toFixed(2) + '$')
        }
      }
    },
    coins_picked_eu: function () {
      let purschaseTotalCount = document.querySelector('.purschaseTotalCount > span:nth-child(2)')
      if (this.coins_picked_eu < 0) {
        this.coins_picked_eu = 0;
      }
      if (this.coins_picked_eu > this.coins_pay_storage_eu) {
        this.coins_picked_eu = this.coins_pay_storage_eu;
      }
      let cart_item = this.$store.getters.getCard.cart_items;
      let PriceEur = 0;
      let salePriceEur = 0;
      cart_item.forEach( function(item){
        if(item.product.sales == 1 || item.product.sales_2 == 1) {
          salePriceEur += parseFloat(((((parseFloat(item.product.price_eur) + parseFloat(item.option_total_eu)) * 100) / (100 - parseFloat(item.product.sales_discount))) * item.count).toFixed(2))
        } else {
          salePriceEur += parseFloat(((parseFloat(item.product.price_eur) + parseFloat(item.option_total_eu)) * item.count).toFixed(2))
        }
        PriceEur += parseFloat(((parseFloat(item.product.price_eur) + parseFloat(item.option_total_eu)) * item.count).toFixed(2))
      })
      if(this.$store.getters.getCard['sales']) {
        $(purschaseTotalCount).html('<span>'+ (parseFloat(salePriceEur)).toFixed(2) +'€</span>                ' + (parseFloat(PriceEur) - parseFloat(this.coins_picked_eu * this.coins_settings.eur_coin)).toFixed(2) + '€')
      } else {
        if( this.coins_picked_eu > 0 ) {
          $(purschaseTotalCount).html('<span>'+ (parseFloat(salePriceEur)).toFixed(2) +'€</span>                ' + (parseFloat(PriceEur) - parseFloat(this.coins_picked_eu * this.coins_settings.eur_coin)).toFixed(2) + '€')
        } else{
          $(purschaseTotalCount).html('                ' + (parseFloat(PriceEur) - parseFloat(this.coins_picked_eu * this.coins_settings.eur_coin)).toFixed(2) + '€')
        }
      }
    },
  },
  methods: {
    getUserId() {
      try {
        this.order.clientId = this.getCookie('_ga').split('.').slice(2).join('.')
      } catch (e) {
      }
    },
    gameFind(id){
      console.log(this.games)
      // let findGame = this.games.records.find(game => game.id == id)
      if(this.games.records){
        return this.games.records.find(game => game.id == id).slug
      }

    },

    init_coin_pay() {
      if (!this.check_init_coin_pay) {
        if (this.$store.getters["getUserLoginCheck"].user_check_login) {
          for (
            let i = 0;
            i < this.$store.getters["getCard"].cart_items.length;
            i++
          ) {
            if (
              this.$store.getters["getCard"].cart_items[i].product.sales == 1 ||
              this.$store.getters["getCard"].cart_items[i].product.sales_2 == 1
            ) {
            } else {
              this.coins_pay_storage_us = parseFloat(
                parseFloat(this.coins_pay_storage_us) +
                  parseFloat(
                    (
                      (parseFloat(
                        this.$store.getters["getCard"].cart_items[i].product
                          .price_usd
                      ) +
                        parseFloat(
                          this.$store.getters["getCard"].cart_items[i]
                            .option_total_us
                        )) *
                      this.$store.getters["getCard"].cart_items[i].count
                    ).toFixed(2)
                  )
              );
              this.coins_pay_storage_eu = parseFloat(
                parseFloat(this.coins_pay_storage_eu) +
                  parseFloat(
                    (
                      (parseFloat(
                        this.$store.getters["getCard"].cart_items[i].product
                          .price_eur
                      ) +
                        parseFloat(
                          this.$store.getters["getCard"].cart_items[i]
                            .option_total_eu
                        )) *
                      this.$store.getters["getCard"].cart_items[i].count
                    ).toFixed(2)
                  )
              );
            }
          }
          this.coins_pay_storage_us =
            this.coins_pay_storage_us * (this.coins_settings.percent / 100);
          this.coins_pay_storage_eu =
            this.coins_pay_storage_eu * (this.coins_settings.percent / 100);
          this.coins_pay_storage_us = Math.floor(
            this.coins_pay_storage_us / this.coins_settings.usd_coin
          );
          this.coins_pay_storage_eu = Math.floor(
            this.coins_pay_storage_eu / this.coins_settings.eur_coin
          );
          if (this.coins - this.coins_pay_storage_us > 0) {
          } else {
            this.coins_pay_storage_us = this.coins;
          }
          if (this.coins - this.coins_pay_storage_eu > 0) {
          } else {
            this.coins_pay_storage_eu = this.coins;
          }
        }
      }
      this.check_init_coin_pay = true;
    },
    replaceString(string){
      return string.replaceAll("&amp;#39;", "'")
    },
    set_empty_input() {
      this.empty_input = true;
      if (
        this.order.country == "" ||
        !this.order.country ||
        this.order.country == " "
      ) {
        this.order_result_text.text = "Please select a country from the list";
        this.order_result_text.check = true;
      } else {
        this.order_result_text.check = false;
      }
      this.$forceUpdate();
    },
    async get_payments() {
      let response = await this.$axios
        .$get(this.apiUrl + "payments?filter=status,eq,1")
        .then((data) => {
          this.payments = data.records;
        });
    },
    discord_validation() {
      if (this.order.chat.discord != null && this.order.chat.discord != "") {
        if (
          this.order.chat.discord.split("#")[0] &&
          this.order.chat.discord.split("#")[1]
        ) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    },
    add_index(index) {
      if (this.index_f.indexOf(index) == -1) {
        this.index_f.push(index);
      }
    },
    fields_adder(f_name, field, game_id) {
      if (this.games_id_cart.indexOf(game_id) == -1) {
        this.games_id_cart.push(game_id);
        this.fields[f_name] = "";
      }
      return field.fields[f_name];
    },
    async delete_coupon() {
      if (this.$store.getters["getCard"].coupon) {
        let cart_id = "";
        if (this.get_access()) {
          cart_id = JSON.parse(atob(this.get_access().split(".")[1])).cart_id;
        } else {
          cart_id = JSON.parse(this.getCookie("f_token")).cart_id;
        }
        let response = await this.$axios
          .$post(this.globalApi + "requests.php", {
            cart_id: cart_id,
            method: "cart_dp",
          })
          .then((data) => {
            this.$store.commit("setItemInCard", data);
          });
      }
    },
    async apply_coupon() {
      let coupon_temp = this.coupon;
      let cart_id = "";
      if (this.get_access()) {
        cart_id = JSON.parse(atob(this.get_access().split(".")[1])).cart_id;
      } else {
        cart_id = JSON.parse(this.getCookie("f_token")).cart_id;
      }
      console.log( this.$store );
      let response = await this.$axios
        .$post(this.globalApi + "requests.php", {
          cart_id: cart_id,
          coupon: coupon_temp,
          method: "cart_cp",
        })
        .then((data) => {
          if (data.status != 100 && data.status != 109) {
            this.$store.commit("setItemInCard", data);
          }
        });
    },
    async get_games() {
      let response_games = await this.$axios
        .$get(this.apiUrl + "game?order=orders,asc")
        .then((data) => {
          this.games = JSON.stringify(data);
          this.games = JSON.parse(this.games);
        });
    },
    async get_user() {
      try {
        this.user_id = JSON.parse(
          atob(this.get_access().split(".")[1])
        ).user_id;
      } catch (error) {}
      if (this.user_id) {
        let response = await this.$axios
          .$post(this.globalApi + "requests.php", {
            method: "user_info",
            access_token: this.get_access(),
            fields: "all",
            orders: "all",
          })
          .then((data) => {
            this.user = data.user;
          });
        this.order.email = this.user.email;
        this.order.country = this.user.country;
        // this.order.charactername = this.user.nick;
        this.order.mailing = this.user.subscribe;
        this.order.chat.discord = this.user.discord;
        this.order.chat.skype = this.user.skype;
        this.order.chat.telegram = this.user.telegram;
        this.order.chat.whatsapp = this.user.whatsapp;
        this.order.chat.viber = this.user.viber;
        this.order.fname = this.user.name;
        this.order.lname = this.user.lname;
        this.coins = this.user.balance;
        console.log(this.user.private_coins_perc);
        if(this.user.private_coins_perc && this.user.private_coins_perc>0){
          this.coins_settings.percent = this.user.private_coins_perc;
        }
        console.log(this.user);
      }
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
    terms_check() {
      if (this.check_terms) {
        this.check_terms = false;
      } else {
        this.check_terms = true;
      }
    },
    async get_coin_settings() {
      let response = await this.$axios
        .$get(this.apiUrl + "coins")
        .then((data) => {
          this.coin_settingsdb = data.records[0];
          this.coins_settings.percent = this.coin_settingsdb.all_sum;
          this.coins_settings.eur_coin = this.coin_settingsdb.prs_e;
          this.coins_settings.usd_coin = this.coin_settingsdb.prs_d;
        });
    },
    async send_order() {
      if (
        this.check_terms &&
        this.order.email != "" &&
        this.order.fname != "" &&
        this.order.country != "" &&
        this.discord_validation()
      ) {
        this.order_result_text.text = "";
        this.order_result_text.check = false;
        this.$store.commit("set_preloader", true);
        this.$forceUpdate();
        let order = this.order;
        order.fields = JSON.stringify(this.fields);
        if (this.get_access()) {
          order["userid"] = this.get_access();
        } else {
          if (this.getCookie("f_token")) {
            order["userid"] = this.getCookie("f_token");
          } else {
            order["userid"] = this.get_access();
          }
        }
        order.currency = this.$store.getters["getSelectedZone"];
        let token = { access: "", refresh: "" };
        let request = {
          order,
          token,
        };
        if (this.coins == 0) {
          order.coins = 0;
        } else {
          if (
            this.coins_picked_us > 0 &&
            this.$store.getters["getSelectedZone"] == "us"
          ) {
            order.coins = this.coins_picked_us;
          }
          if (
            this.coins_picked_eu > 0 &&
            this.$store.getters["getSelectedZone"] == "eu"
          ) {
            order.coins = this.coins_picked_eu;
          }
        }
        let response = await this.$axios
          .post(this.globalApi + "handlers/order/order.php", order)
          .then((data) => {
            if (
              /*data.data.order_id && data.data.cart_id &&*/ data.data.token &&
              data.data.system &&
              data.data.system == "stripe"
            ) {
              try {
                let stripe = Stripe("pk_live_Z06VdlQgFiO5ICHIxQvowZHl00GQR0ZMMb");
                return stripe.redirectToCheckout({ sessionId: data.data.token });
              } catch (error) {
                 alert('stripe error');
                  this.$store.commit("set_preloader", false);
              }
            } else {
              if (data.data.token) {
                window.location.href = data.data.token;
              } else {
                this.order_result_text.check = true;
                if (data.data.status == "114") {
                  this.order_result_text.text = "Coupon is invalid";
                } else {
                  this.order_result_text.text =
                    "Oops... Something went wrong.<br />Please try another payment option.";
                }
                this.order_result_text.check = true;
                this.$store.commit("set_preloader", false);
              }
            }
          });
      } else {
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
    async get_countries() {
      let response_data_sku = await this.$axios
        .$get("/countries.json")
        .then((data) => {
          this.countries = data;
        });
    },
    body_set_hidden() {
      document.body.className = "body_pop_up_active";
    },
    body_active() {
      document.body.className = "body_pop_up_disable";
      this.registration_mail = "";
      this.registration_result = "";
      this.result_text = "";
    },
    async count_plus(index, count) {
      let cart = {};
      cart["index"] = index;
      if (this.get_access()) {
        cart["userid"] = this.get_access();
      } else {
        cart["userid"] = this.getCookie("f_token");
      }
      cart["method"] = "plus";
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
          this.games_id_cart = [];
          this.index_f = [];
        });
    },
    addHashToLocation(params) {
      history.pushState({}, null, this.$route.path + params);
    },
    async count_minus(index, count) {
      let cart = {};
      cart["index"] = index;
      if (this.get_access()) {
        cart["userid"] = this.get_access();
      } else {
        cart["userid"] = this.getCookie("f_token");
      }
      cart["method"] = "minus";
      let response_data_sku = await this.$axios
        .$post(this.globalApi + "handlers/cart/cart.php", cart)
        .then((data) => {
          this.$store.commit("setItemInCard", data);
        });
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