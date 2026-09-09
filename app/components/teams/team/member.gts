import type { TOC } from '@ember/component/template-only';
// @ts-expect-error: Incorrect type
import EsIcon from 'ember-styleguide/components/es-icon';
import type TeamMember from 'ember-website/models/team-member';

interface TeamsTeamMemberSignature {
  Args: {
    member: TeamMember;
  };
}

<template>
  <div class="text-center" data-test-member={{@member.name}}>
    <img
      alt=""
      class="team-image"
      role="presentation"
      src="/images/team/{{@member.image}}"
      width={{100}}
    />

    <div data-test-field="Name">
      {{@member.name}}
    </div>

    <div class="social-links">
      {{#if @member.github}}
        <a
          aria-label="{{@member.name}} Github Profile"
          class="icon"
          data-test-link="GitHub"
          href={{@member.github}}
          rel="noopener noreferrer"
          target="_blank"
        >
          {{~! ~}}<EsIcon @class="icon" @icon="github-logo" />{{~! ~}}
        </a>
      {{/if}}

      {{#if @member.twitter}}
        <a
          aria-label="{{@member.name}} Twitter"
          class="icon"
          data-test-link="Twitter"
          href={{@member.twitter}}
          rel="noopener noreferrer"
          target="_blank"
        >
          {{~! ~}}<EsIcon @class="icon" @icon="twitter-logo" />{{~! ~}}
        </a>
      {{/if}}

      {{#if @member.mastodon}}
        <a
          aria-label="{{@member.name}} Mastodon"
          class="icon"
          data-test-link="Mastodon"
          href={{@member.mastodon}}
          rel="noopener noreferrer"
          target="_blank"
        >
          {{~! ~}}<EsIcon @class="icon" @icon="mastadon-logo" />{{~! ~}}
        </a>
      {{/if}}

      {{#if @member.bluesky}}
        <a
          aria-label="{{@member.name}} Bluesky"
          class="icon"
          data-test-link="Bluesky"
          href={{@member.bluesky}}
          rel="noopener noreferrer"
          target="_blank"
        >
          {{~! ~}}<EsIcon @class="icon" @icon="bluesky-logo" />{{~! ~}}
        </a>
      {{/if}}

      {{#if @member.social}}
        <a
          aria-label="{{@member.name}} generic social link"
          class="icon"
          data-test-link="Social"
          href={{@member.social}}
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="chain-link" class="icon" src="/images/link.png" />
        </a>
      {{/if}}
    </div>
  </div>
</template> satisfies TOC<TeamsTeamMemberSignature>;
