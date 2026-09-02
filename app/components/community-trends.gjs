import qp from 'ember-website/helpers/qp';

<template>
  {{! optional content, for meme / participating in the broader JS ecosystem, maintaining relevance }}
  {{#if (qp "uwu")}}
    {{! lint incorrectly says this is already called out by a screen reader }}
    {{! eslint-disable-next-line ember/template-require-valid-alt-text }}
    <img
      class="uwu-logo"
      alt="ember uwu / kawaii logo (from internet trend / meme)"
      src="/images/ember-uwu-meme.png"
    />
  {{/if}}
</template>
