---
name: ES Classes
summary: |
  Use native class syntax interchangeably with the Ember Object model.
status: shipped
statusText: Shipped
availability: Available in Ember 3.6 and up, polyfill for older versions
resources:
  - type: rfc
    name: ES Class RFC
    url: https://github.com/emberjs/rfcs/blob/master/text/0240-es-classes.md
  - type: rfc
    name: Native Class Constructor Update RFC
    url: https://github.com/emberjs/rfcs/blob/master/text/0337-native-class-constructor-update.md
  - type: addons
    name: Native classes in Ember
    url: http://ember-decorators.github.io/ember-decorators/latest/docs
  - type: quest
    name: Quest Issue
    url: https://github.com/emberjs/ember.js/issues/16927
  - type: codemod
    name: Codemod
    url: https://github.com/scalvert/ember-es6-class-codemod/
  - type: polyfill
    name: Polyfill
    url: https://github.com/pzuraq/ember-native-class-polyfill
champions:
  - name: Robert Jackson
    image: https://avatars2.githubusercontent.com/u/12637?v=4&s=460
    url: https://github.com/wycats
  - name: Yehuda Katz
    image: https://avatars0.githubusercontent.com/u/4?s=460&v=4
    url: https://github.com/rwjblue
---
Native ES classes are advancing quickly, with features like [class
fields](https://github.com/tc39/proposal-class-fields),
private [fields](https://github.com/tc39/proposal-class-fields#private-fields)
and [methods](https://github.com/tc39/proposal-private-methods),
and [decorators](https://github.com/tc39/proposal-decorators) just around the
corner. At the same time, more and more tooling is being developed for the
syntax, from developer tools and editors to documentation generators and
more. Ember has always been about shared solutions, and transitioning to the
modern native class syntax is no exception!

As of Ember 3.6, native classes have stabilized and are considered part of
Ember's public API. However, because decorators and class fields are still
going through the TC39 process, they are only recommended for early adopters
who are willing to take on the risk of these experimental features. Without
class fields or decorators, class syntax is cumbersome and difficult to use.

For more details, see [the release blog post for Ember 3.6.](https://emberjs.com/blog/2018/12/13/ember-3-6-released.html)
