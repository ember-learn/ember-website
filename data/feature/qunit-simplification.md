---
name: Ember QUnit Simplification
summary: |
  Unify the concepts amongst the various types of test (acceptance, integration, and unit) and provide a single common structure to tests.
status: shipped
statusText: Shipped
availability: Available in ember-qunit 4.1.0 and up
resources:
  - type: rfc
    name: Simplify QUnit testing API
    url: https://github.com/emberjs/rfcs/blob/master/text/0232-simplify-qunit-testing-api.md
  - type: rfc
    name: Acceptance Testing Refactor
    url: https://github.com/emberjs/rfcs/blob/master/text/0268-acceptance-testing-refactor.md
  - type: blogpost
    name: High-level overview
    url: http://rwjblue.com/2017/10/23/ember-qunit-simplication/
champions:
  - name: Robert Jackson
    image: https://avatars0.githubusercontent.com/u/12637?s=400&v=4
    url: https://github.com/rwjblue=
---
The current structure of ember-qunit impedes ability to take advantage of some of new features being added to QUnit (Ember.js chosen default testing framework) becuaise of the tight coupling between ember-qunit and QUnit itself.

On the other hand developers are often confused by the "magic" `ember-qunit` is doing and the lines between QUnit and `ember-qunit` are vague.

The [Simplify QUnit testing API RFC](https://github.com/emberjs/rfcs/pull/232) proposes a new testing syntax, that will expose QUnit API directly while also making tests much easier to understand.

RFC 232 also aims to remove a number of custom testing only APIs (largely because the container/registry system was completely private when the current tools were authored). Instead of things like this.subject, this.register, this.inject, or this.lookup we can rely on the standard way of performing these functions in Ember via the owner API.

Whereas RFC 232 is concerned about Component / Helper integration and Service/Route/Controller/Component unit tests the [Acceptance Testing Refactor RFC](https://github.com/emberjs/rfcs/pull/268) aims to leverage what has been learned and apply that knowledge to acceptance testing.

Once RFCs 232 and 268 are shipped all test types in Ember will have a unified cohesive structure.
