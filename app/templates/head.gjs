<template>
  {{! eslint-disable ember/template-no-forbidden-elements }}
  <meta property="st:title" content={{@controller.model.pageTitle}} />
  <meta property="og:title" content={{@controller.model.pageTitle}} />
  <meta name="twitter:title" content={{@controller.model.pageTitle}} />
</template>
