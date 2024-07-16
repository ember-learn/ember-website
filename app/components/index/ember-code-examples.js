import Component from '@glimmer/component';

export default class IndexEmberAddonsComponent extends Component {
  simpleComponent = `<template>
  <p>Hello, World!</p>
</template>`;

  composableComponent = `const Welcome = <template>
  <p>Hello, {{@name}}!</p>
</template>;

<template>
  <Welcome @name="Ember" />
  <p>Components can easily be reused 🚀</p>
</template>`;

  stateManagemnent = `import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { on } from '@ember/modifier';

export default class Counter extends Component {
  @tracked count = 0;

  add = () => this.count += 1;

  <template>
    <p>You have clicked {{this.count}} times.</p>
    <button {{on "click" this.add}}>Click</button>
  </template>
}`;
}
