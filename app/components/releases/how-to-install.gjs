import { trustHTML } from '@ember/template';
import TerminalCode from 'ember-website/components/terminal-code';
import printf from 'ember-website/helpers/printf';

<template>
  <h3 data-test-field="Name">
    {{@project.name}}
  </h3>

  <div class="mb-2">
    {{#if (has-block)}}
      {{yield}}
    {{else}}
      <TerminalCode>
        {{trustHTML (printf @project.content @project.lastRelease)}}
      </TerminalCode>
    {{/if}}
  </div>

  {{#if @project.lastReleaseChangelogUrl}}
    <p data-test-field="More Information">
      Read the
      <a
        data-test-link="Changelog"
        href={{@project.lastReleaseChangelogUrl}}
        rel="noopener noreferrer"
        target="_blank"
      >changelog</a>
      for
      {{@project.name}}
      {{@project.lastRelease}}.
    </p>
  {{/if}}
</template>
