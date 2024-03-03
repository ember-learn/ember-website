import Component from '@glimmer/component';

export default class IndexEmberAddonsComponent extends Component {
  simpleComponent = `<template>Hello world</template>`;

  /**
   * import Component from '@glimmer/component';
      import { tracked } from '@glimmer/tracking';
      import { on } from '@ember/modifier';
   */
  stateManagemnent = `export default class Counter extends Component {
  @tracked count = 0;

  increment = () => this.count += 1;

  <template>
    <p>You have clicked the button {{this.count}} times.</p>
    <button {{on "click" this.increment}}>Click</button>
  </template>
}`;
}
