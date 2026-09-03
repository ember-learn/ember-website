import IndexEmberEcosystemImage from 'ember-website/components/index/ember-ecosystem/image';

<template>
  <div class="ecosystem-icons">
    <IndexEmberEcosystemImage
      @alt="Babel"
      @backgroundColor="#323330"
      @src="/images/home/logos/babel.svg"
    />

    <IndexEmberEcosystemImage
      @alt="JavaScript"
      @backgroundColor="#FAE125"
      @rotateIcon={{true}}
      @src="/images/home/logos/js.svg"
    />

    <IndexEmberEcosystemImage
      @alt="Prettier"
      @backgroundColor="#FFFFFF"
      @src="/images/home/logos/prettier.svg"
    />

    <IndexEmberEcosystemImage
      @alt="Visual Studio Code"
      @backgroundColor="#272827"
      @rotateIcon={{true}}
      @src="/images/home/logos/code.svg"
    />

    <IndexEmberEcosystemImage
      @alt="TypeScript"
      @backgroundColor="#0075C7"
      @rotateIcon={{true}}
      @src="/images/home/logos/ts.svg"
    />

    <IndexEmberEcosystemImage
      @alt="npm"
      @backgroundColor="#C12127"
      @rotateIcon={{true}}
      @src="/images/home/logos/npm.svg"
    />
  </div>
</template>
