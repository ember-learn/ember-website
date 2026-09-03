import { hash } from '@ember/helper';
import { LinkTo } from '@ember/routing';
import { pageTitle } from 'ember-page-title';
import EmberCommunitySurveyIntroduction from 'ember-website/components/ember-community-survey/introduction';
import EmberCommunitySurveySection from 'ember-website/components/ember-community-survey/section';
import EmberCommunitySurveySponsor from 'ember-website/components/ember-community-survey/sponsor';
import Highcharts from 'ember-website/components/highcharts';
import {
  S01_Q01_SS__TIME_USE,
  S01_Q02_MS__OTHER_FRAMEWORKS,
  S01_Q03_MS__OTHER_UI_LIBS,
  S01_Q04_MS__OTHER_SSG,
  S01_QM01_SS__MERGED_WEB_SKILLS,
  S02_Q01_SS__OS_PREF,
  S02_Q02_SS__OS_WORK,
  S02_Q03_SS__OS_HOME,
  S02_QM01_SS__MERGED_IDE_PREF,
  S03_Q11_MS__WORK_COMPANY_APPS_EMBER_VERSIONS_USED,
  S03_Q17_SS__SERVER_SIDE_FRAMEWORK_WORK,
  S03_QM01_MS__MERGED_WORK_SECTOR,
  S03_QM02_SS__MERGED_WORK_TEST_FW,
  S03_QM03_SS__MERGED_DEPLOY_WORK,
  S05_Q01_MS__FB_OCTANE,
  S05_Q02_MS__FB_NEW_FEAT,
  S05_Q04_MS__FFEAT,
  S06_QM01_SS__MERGED_GLOBAL_LOC,
} from 'ember-website/utils/surveys/2022';

<template>
  {{pageTitle "Ember Community Survey 2022"}}

  <EmberCommunitySurveyIntroduction
    @surveyLogoAlt="Ember Community Survey 2022"
    @surveyLogoSrc="/images/survey/logo2022.svg"
  >
    <p class="text-lg">Our Global Community: Ember.js 2022 Survey Results</p>
    <p>
      This year the global community came out to show its love for Ember; it was
      the first year that more responses came from outside the United States!
      Productivity is finding its way around the world.
    </p>
  </EmberCommunitySurveyIntroduction>

  <EmberCommunitySurveySection
    @sectionId="s00-location"
    @sectionTitle="Ember Users Across the Globe"
  >
    <:charts>
      <Highcharts @chart={{S06_QM01_SS__MERGED_GLOBAL_LOC}} />
    </:charts>
  </EmberCommunitySurveySection>

  <EmberCommunitySurveySection
    @sectionId="s01-background"
    @sectionTitle="Your Development Background"
  >
    <:charts>
      <Highcharts @chart={{S01_Q01_SS__TIME_USE}} />
      <Highcharts @chart={{S01_Q02_MS__OTHER_FRAMEWORKS}} />
      <Highcharts @chart={{S01_Q03_MS__OTHER_UI_LIBS}} />
      <Highcharts @chart={{S01_Q04_MS__OTHER_SSG}} />
      <Highcharts @chart={{S01_QM01_SS__MERGED_WEB_SKILLS}} />
    </:charts>
  </EmberCommunitySurveySection>

  <EmberCommunitySurveySection
    @sectionId="s02-env-pref"
    @sectionTitle="Development Preferences"
  >
    <:charts>
      <Highcharts @chart={{S02_Q01_SS__OS_PREF}} />
      <Highcharts @chart={{S02_Q02_SS__OS_WORK}} />
      <Highcharts @chart={{S02_Q03_SS__OS_HOME}} />
      <Highcharts @chart={{S02_QM01_SS__MERGED_IDE_PREF}} />
    </:charts>
  </EmberCommunitySurveySection>

  <EmberCommunitySurveySection
    @sectionId="s03-at-work"
    @sectionTitle="Ember At Work"
  >
    <:charts>
      <Highcharts @chart={{S03_QM01_MS__MERGED_WORK_SECTOR}} />
      <Highcharts
        @chart={{S03_Q11_MS__WORK_COMPANY_APPS_EMBER_VERSIONS_USED}}
      />
      <Highcharts @chart={{S03_QM02_SS__MERGED_WORK_TEST_FW}} />
      <Highcharts @chart={{S03_Q17_SS__SERVER_SIDE_FRAMEWORK_WORK}} />
      <Highcharts @chart={{S03_QM03_SS__MERGED_DEPLOY_WORK}} />
    </:charts>
  </EmberCommunitySurveySection>

  <EmberCommunitySurveySection
    @sectionId="s05-feedback"
    @sectionTitle="Ember Features"
  >
    <:charts>
      <Highcharts @chart={{S05_Q01_MS__FB_OCTANE}} />
      <Highcharts @chart={{S05_Q02_MS__FB_NEW_FEAT}} />
      <Highcharts @chart={{S05_Q04_MS__FFEAT}} />
    </:charts>
  </EmberCommunitySurveySection>

  <EmberCommunitySurveySection
    @sectionId="closing-thoughts"
    @sectionTitle="Closing Thoughts"
  >
    <:body>
      <p>
        We would like to thank everyone who took the time to participate in the
        2022 Ember Community Survey! We genuinely appreciate the time and the
        valuable feedback our users provide for us every year. We also want to
        thank our sponsors for their generous support, making this year's survey
        possible.
      </p>
      <p>
        To see results for previous years, you can visit the
        <LinkTo @route="survey.2020">2020</LinkTo>,
        <LinkTo @route="survey.2019">2019</LinkTo>,
        <LinkTo @route="survey.2018">2018</LinkTo>,
        <LinkTo @route="survey.2017">2017</LinkTo>,
        <LinkTo @route="survey.2016">2016</LinkTo>, and
        <a
          href="https://www.201-created.com/ember-community-survey-2015/"
          rel="noopener noreferrer"
          target="_blank"
        >2015</a>
        survey results pages.
      </p>
      <p>
        If you have any questions about this survey—the data, the methods used,
        or any other feedback—please email us at
        <a href="mailto:survey@emberjs.com">survey@emberjs.com</a>.
      </p>
      <p>
        Questions? Feedback? Please join us in the
        <code>#dev-ember-learning</code>
        channel on the Discord community chat, or email the survey team via
        <a href="mailto:survey@emberjs.com">survey@emberjs.com</a>.
      </p>
    </:body>
  </EmberCommunitySurveySection>

  <div class="bg-dark">
    <EmberCommunitySurveySponsor
      @sponsor={{hash
        logoAlt="Mainmatter"
        logoSrc="/images/survey/mainmatter_logo_inverted.svg"
        website="https://mainmatter.com/"
      }}
    />
    <EmberCommunitySurveySponsor
      @sponsor={{hash
        logoAlt="Acorn Consulting"
        logoSrc="/images/survey/acorn-header-logo.svg"
        website="http://www.acornwebconsultants.com/"
      }}
    />
  </div>
</template>
