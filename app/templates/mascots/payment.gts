import { LinkTo } from '@ember/routing';

<template>
  <section class="container layout">
    <div class="lg:col-4">
      <h1>Tomster and Zoey Commission Payment</h1>

      <p>This form is processed using Stripe.</p>

      <p>This form is only for Tomsters that we've already discussed payment and
        details on. If you have a new idea,
        <LinkTo @route="mascots.commission">reach out to discuss</LinkTo>
        first. 🙂</p>

      <form
        accept-charset="UTF-8"
        action="https://tilde.wufoo.com/forms/q3qhbsp095gijb"
        autocomplete="off"
        class="tomster-form wufoo topLabel page1"
        enctype="multipart/form-data"
        id="form35"
        method="post"
        name="form35"
        novalidate=""
      >
        <ul>
          <li class="notranslate" id="fo35li1">
            <fieldset>
              <legend class="desc" id="title1">
                Name
                <span class="req" id="req_1">*</span>
              </legend>

              <span>
                <input
                  class="field text fn"
                  id="Field1"
                  name="Field1"
                  onchange="handleInput(this);"
                  onkeyup="handleInput(this);"
                  placeholder=""
                  required=""
                  size="8"
                  tabindex="0"
                  type="text"
                  value=""
                />
                <label for="Field1">First</label>
              </span>

              <span>
                <input
                  class="field text ln"
                  id="Field2"
                  name="Field2"
                  onchange="handleInput(this);"
                  onkeyup="handleInput(this);"
                  placeholder=""
                  required=""
                  size="14"
                  tabindex="0"
                  type="text"
                  value=""
                />
                <label for="Field2">Last</label>
              </span>
            </fieldset>
          </li>

          <li
            class="notranslate"
            data-field-type="text"
            data-wufoo-field=""
            id="fo35li9"
          >
            <label class="desc" for="Field9" id="title9"> Company </label>

            <div>
              <input
                class="field text medium"
                id="Field9"
                maxlength="255"
                name="Field9"
                onchange="handleInput(this);"
                onkeyup="handleInput(this); "
                placeholder=""
                tabindex="0"
                type="text"
                value=""
              />
            </div>
          </li>

          <li class="notranslate" id="fo35li3">
            <label class="desc" for="Field3" id="title3">
              Email
              <span class="req" id="req_3">*</span>
            </label>

            <div>
              <input
                class="field text medium"
                id="Field3"
                maxlength="255"
                name="Field3"
                onchange="handleInput(this);"
                onkeyup="handleInput(this);"
                placeholder=""
                required=""
                spellcheck="false"
                tabindex="0"
                type="email"
                value=""
              />
            </div>
          </li>

          <li
            class="notranslate"
            data-field-type="text"
            data-wufoo-field=""
            id="fo35li11"
          >
            <label class="desc" for="Field11" id="title11">
              Which Tomster and/or Zoey is this payment for?
              <span class="req" id="req_11">*</span>
            </label>

            <div>
              <input
                class="field text medium"
                id="Field11"
                maxlength="255"
                name="Field11"
                onchange="handleInput(this);"
                onkeyup="handleInput(this); "
                placeholder=""
                required=""
                tabindex="0"
                type="text"
                value=""
              />
            </div>
          </li>

          <li class="notranslate" id="fo35li4">
            <fieldset>
              <legend class="desc" id="title4">
                Commission Amount (USD)
                <span class="req" id="req_4">*</span>
              </legend>

              <span>
                <input
                  class="field text currency nospin"
                  id="Field4"
                  name="Field4"
                  onchange="handleInput(this);"
                  onkeyup="handleInput(this);"
                  required=""
                  size="10"
                  tabindex="0"
                  type="text"
                  value=""
                />
                <label for="Field4">Dollars</label>
              </span>

              <span class="cents">
                <input
                  class="field text nospin"
                  id="Field4-1"
                  maxlength="2"
                  name="Field4-1"
                  onchange="handleInput(this);"
                  onkeyup="handleInput(this);"
                  size="2"
                  tabindex="0"
                  type="text"
                  value=""
                />
                <label for="Field4-1">Cents</label>
              </span>
            </fieldset>
          </li>

          <li class="" id="fo35li16">
            <fieldset>
              {{![if !IE | (gte IE 8)]}}
              <legend class="desc notranslate" id="title16">
                I can confirm that I have already signed the Licensing agreement
                I was previously sent via HelloSign.
                <span class="req" id="req_16">*</span>
              </legend>
              {{![endif]}}

              {{![if lt IE 8]>
              <label id="title16" class="desc">
                I can confirm that I have already signed the Licensing agreement I
                was previously sent via HelloSign.
                <span id="req_16" class="req">*</span>
              </label>
            <![endif]}}

              <div>
                <span class="subfield">
                  <input
                    class="field checkbox"
                    id="Field16"
                    name="Field16"
                    onchange="handleInput(this);"
                    tabindex="0"
                    type="checkbox"
                    value="Confirmed, it's been signed!"
                  />

                  <label class="choice" for="Field16">
                    <span class="choice__text notranslate">Confirmed, it's been
                      signed!</span>
                    <span class="choice__qty"></span>
                  </label>
                </span>

                <span class="subfield">
                  <input
                    class="field checkbox"
                    id="Field17"
                    name="Field17"
                    onchange="handleInput(this);"
                    tabindex="0"
                    type="checkbox"
                    value="I haven't, so I shouldn't be submitting this payment yet..."
                  />

                  <label class="choice" for="Field17">
                    <span class="choice__text notranslate">I haven't, so I
                      shouldn't be submitting this payment yet...</span>
                    <span class="choice__qty"></span>
                  </label>
                </span>

                <span class="subfield">
                  <input
                    class="field checkbox"
                    id="Field18"
                    name="Field18"
                    onchange="handleInput(this);"
                    tabindex="0"
                    type="checkbox"
                    value="This payment is covering official project variants, so no licensing agreement is needed."
                  />

                  <label class="choice" for="Field18">
                    <span class="choice__text notranslate">This payment is
                      covering official project variants, so no licensing
                      agreement is needed.</span>
                    <span class="choice__qty"></span>
                  </label>
                </span>
              </div>
            </fieldset>
          </li>

          <li class="buttons">
            <div>
              <input
                id="currentPage"
                name="currentPage"
                type="hidden"
                value="4MEwuslashIt71HHTl4RHHwuBejVv47f4wuslashdPwuBeUDhWl3a811Scy1w="
              />

              <input
                class="es-button button-dark"
                id="saveForm"
                name="saveForm"
                {{! eslint-disable-next-line ember/template-no-pointer-down-event-binding }}
                onmousedown="doSubmitEvents();"
                type="submit"
                value="Let's Do This!"
              />
            </div>
          </li>

          <li class="hide">
            <label for="comment">Do Not Fill This Out</label>
            <textarea cols="1" id="comment" name="comment" rows="1"></textarea>
            <input
              id="idstamp"
              name="idstamp"
              type="hidden"
              value="4hFMwfQHT3iHQJczq5EUJA=="
            />
            <input
              id="encryptedPassword"
              name="encryptedPassword"
              type="hidden"
              value=""
            />
            <input
              id="stats"
              name="stats"
              type="hidden"
              value='{"errors":0,"startTime":0,"endTime":0,"referer":null}'
            />
            <input
              id="clickOrEnter"
              name="clickOrEnter"
              type="hidden"
              value=""
            />
          </li>
        </ul>
      </form>
    </div>

    <div class="lg:col-2 hide-on-mobile">
      <img
        alt=""
        loading="lazy"
        role="presentation"
        src="/images/tomster-faq.png"
      />
    </div>
  </section>
</template>
