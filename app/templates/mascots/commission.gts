import { LinkTo } from '@ember/routing';

<template>
  <section class="container layout">
    <div class="lg:col-4">
      <h1>Mascot Commission Requests</h1>

      <p>Thanks so much for your interest in commissioning a Tomster or Zoey for
        your User Group (UG) or Company (Corp)! As per our
        <LinkTo @route="mascots.faq">FAQ</LinkTo>, assuming an approved use
        case, we'd love to work with you!</p>

      <p>Most of the Tomsters and Zoeys we design fit into a somewhat standard
        mold. You can
        <a download href="/pdfs/Mascot-Pricing.pdf">download the pricing sheet</a>
        to learn about the standard options.</p>

      <p>Filling out this form is the first step to commissioning your custom
        Ember Mascot. We'll get back to you as soon as we can with our thoughts
        and next steps.</p>

      <form
        accept-charset="UTF-8"
        action="https://tilde.wufoo.com/forms/q14mw9qi196f6oy/#public"
        autocomplete="off"
        class="tomster-form wufoo topLabel page"
        enctype="multipart/form-data"
        id="tomster-commission-form"
        method="post"
        name="tomster-commission-form"
        novalidate
      >
        <ul>
          <li id="foli3">
            <label class="desc" for="Field3" id="title3">
              Name
              <span class="req" id="req_3">*</span>
            </label>
            <div>
              <input
                class="field"
                id="Field3"
                maxlength="255"
                name="Field3"
                onkeyup=""
                required
                tabindex="0"
                type="text"
                value=""
              />
            </div>
          </li>
          <li id="foli4">
            <label class="desc" for="Field4" id="title4">
              Email
              <span class="req" id="req_4">*</span>
            </label>
            <div>
              <input
                class="field"
                id="Field4"
                maxlength="255"
                name="Field4"
                required
                spellcheck="false"
                tabindex="0"
                type="email"
                value=""
              />
            </div>
          </li>
          <li id="foli6">
            <label class="desc" for="Field6" id="title6">
              Please tell us what you'd like to commission an Ember Mascot for.
              <span class="req" id="req_6">*</span>
            </label>
            <div>
              <textarea
                id="Field6"
                name="Field6"
                onkeyup=""
                required
                spellcheck="true"
                tabindex="0"
              />
            </div>
          </li>
          <li id="foli7">
            <label class="desc" for="Field7" id="title7">
              Do you already have ideas for the character? If so, please do
              share here.
            </label>
            <div>
              <textarea
                id="Field7"
                name="Field7"
                onkeyup=""
                spellcheck="true"
                tabindex="0"
              />
            </div>
          </li>
          <li id="foli8">
            <fieldset>
              <legend class="desc" id="title8">
                I believe what I want fits into the following pricing category:
                <span class="req" id="req_8">*</span>
              </legend>
              <div>
                <input
                  id="radioDefault_8"
                  name="Field8"
                  type="hidden"
                  value=""
                />
                <span class="choice">
                  <input
                    checked="checked"
                    class="field radio"
                    id="Field8_0"
                    name="Field8"
                    required
                    tabindex="0"
                    type="radio"
                    value="UG Tomster with Simple Shirt Change, $80"
                  />
                  <label for="Field8_0">
                    UG Tomster or Zoey with Simple Shirt Change, $80
                  </label>
                </span>
                <span class="choice">
                  <input
                    class="field radio"
                    id="Field8_1"
                    name="Field8"
                    required
                    tabindex="0"
                    type="radio"
                    value="UG Tomster with 1 Prop and Full Costume, $200"
                  />
                  <label for="Field8_1">
                    UG Tomster or Zoey with 1 Prop and Full Costume, $200
                  </label>
                </span>
                <span class="choice">
                  <input
                    class="field radio"
                    id="Field8_2"
                    name="Field8"
                    required
                    tabindex="0"
                    type="radio"
                    value="Tomster with Full Background, $300"
                  />
                  <label for="Field8_2">
                    UG Tomster or Zoey with Full Background, $300
                  </label>
                </span>
                <span class="choice">
                  <input
                    class="field radio"
                    id="Field8_4"
                    name="Field8"
                    required
                    tabindex="0"
                    type="radio"
                    value="Corp Tomster or Zoey, Silver Tier, $750"
                  />
                  <label for="Field8_4">
                    Corp Tomster or Zoey, Silver Tier, $750
                  </label>
                </span>
                <span class="choice">
                  <input
                    class="field radio"
                    id="Field8_5"
                    name="Field8"
                    required
                    tabindex="0"
                    type="radio"
                    value="Corp Tomster and Zoey, Gold Tier, $1500"
                  />
                  <label for="Field8_5">
                    Corp Tomster and Zoey, Gold Tier, $1500
                  </label>
                </span>
                <span class="choice">
                  <input
                    class="field radio"
                    id="Field8_3"
                    name="Field8"
                    onmouseup="document.getElementById('Field8_other').focus();"
                    required
                    tabindex="0"
                    type="radio"
                    value="Other"
                  />
                  <label
                    for="Field8_3"
                    onmouseup="document.getElementById('Field8_other').focus();"
                  >
                    Other
                  </label>
                  <input
                    class="field text other"
                    id="Field8_other"
                    name="Field8_other_Other"
                    onclick="document.getElementById('Field8_3').checked = 'checked';"
                    tabindex="0"
                    type="text"
                    value=""
                  />
                </span>
              </div>
            </fieldset>
          </li>
          <li class="buttons">
            <div>
              <input
                class="es-button button-dark"
                id="saveForm"
                name="saveForm"
                type="submit"
                value="Submit"
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
              value="HzIvtB3mbwMUBgagcaKaxnTASiJAOpXIR2gxYqSusY0="
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
