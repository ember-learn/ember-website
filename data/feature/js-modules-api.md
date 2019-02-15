---
name: JavaScript Modules API
summary: |
  Allows developers to import just the parts of Ember they want via a JavaScript
  (ES6) modules API.
status: shipped
statusText: Shipped
availability: Ember CLI Babel v6.6.0+
resources:
  - type: rfc
    name: RFC 176
    url: https://github.com/emberjs/rfcs/blob/master/text/0176-javascript-module-api.md
  - type: repo
    name: Ember RFC 176 Data
    url: https://github.com/ember-cli/ember-rfc176-data
  - type: repo
    name: Ember Modules Codemod
    url: https://github.com/tomdale/ember-modules-codemod
champions:
  - name: Tom Dale
    image: https://avatars0.githubusercontent.com/u/90888?v=4&s=460
    url: https://github.com/tomdale
  - name: Ricardo Mendes
    image: https://avatars2.githubusercontent.com/u/32344?v=4&s=460
    url: https://github.com/locks
---
While Ember.js apps use JavaScript modules, the framework itself is still
accessed via the single global `Ember` or the single package `ember`.

```ts
import Ember from 'ember';
export default Ember.Component.extend({
  // ...
});
```

[RFC 176](https://github.com/emberjs/rfcs/blob/master/text/0176-javascript-module-api.md)
describes a module API for Ember that allows developers to import specific modules rather
than the whole framework. Decomposing the framework into small modules like this will
both make Ember more accessible to new users, as well as allow Ember CLI to build smaller
assets by only including the parts of the framework that actually get used.

```typescript
import Component from '@ember/component';

export default Component.extend({
  // ...
});
```

You can find the most up-to-date and complete mappings between the
previous API and the new modules API at the
[ember-rfc176-data](https://github.com/ember-cli/ember-rfc176-data)
repository. We also provide an
[ember-modules-codemod](https://github.com/tomdale/ember-modules-codemod)
so that you can easily migrate your project.
