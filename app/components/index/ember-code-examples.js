import Component from '@glimmer/component';

export default class IndexEmberAddonsComponent extends Component {
  simpleComponent = `<template>
  <p>Hello, World!</p>
</template>`;

  composableComponent = `// components/welcome.gjs
<template>
  <p>Hello, {{@name}}!</p>
</template>

// components/another-component.gjs
import Welcome from './welcome';
<template>
  <Welcome @name="Ember" />
</template>`;

  /**
   * import Component from '@glimmer/component';
      import { tracked } from '@glimmer/tracking';
      import { on } from '@ember/modifier';
   */
  stateManagemnent = `class Counter extends Component {
  @tracked count = 0;

  increment = () => this.count += 1;

  <template>
    <p>You have clicked the button {{this.count}} times.</p>
    <button {{on "click" this.increment}}>Click</button>
  </template>
}`;
}
