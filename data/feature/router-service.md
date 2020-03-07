---
name: Router Service
summary: |
  Provides low-level access to Ember's router, giving greater control to app
  and addon authors.
status: shipped
statusText: Partially Shipped
availability: Available in Ember 2.15 and up
resources:
  - type: rfc
    name: Router Service
    url: https://github.com/emberjs/rfcs/blob/master/text/0095-router-service.md
  - type: pull-request
    name: Router Service MVP
    url: https://github.com/emberjs/ember.js/pull/14805
champions:
  - name: Robert Jackson
    image: https://avatars2.githubusercontent.com/u/12637?v=4&s=460
    url: https://github.com/rwjblue
  - name: Edward Faulkner
    image: https://avatars0.githubusercontent.com/u/319282?v=4&s=460
    url: https://github.com/ef4
---
Routing, or mapping URLs on to UI components, is at the heart of every
Ember application. Historically, app developers have been constrained to
declarative forms of controlling the router, limiting their ability to
implement new features easily or replace built-in framework APIs.

The router service is an Ember
[`Service`](https://guides.emberjs.com/release/current/applications/services/) that
that can be injected into components or other services
and used to imperatively query and modify the current state of the router.

By making these lower-level API public, app and addon authors have a
supported path for replacing Ember's built-in declarative routing APIs
with their own, should the need arise.

For example, previously it was impossible to fully recreate Ember's
`{{link-to}}` component with public API. Developers who wanted to
experiment with creating an optimized version without the full set of
features were stuck.

With the router service, it's possible to write a custom component that
transitions the application's router to a new URL:

```js
import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  router: inject(),
  url: '/home',
  click() {
    let url = this.get('url');
    this.get('router').transitionTo(url);
  }
})
```

The [Router Service
RFC](https://github.com/emberjs/rfcs/blob/master/text/0095-router-service.md)
has been accepted and implementation has begun. In order to get it in your
hands as soon as possible, we are taking a phased approach to
implementation.

* Phase 1: Basic functionality like transitioning, querying the active
  route, etc.
* Phase 2: Advanced functionality that exposes and manipulates internal
  data structures describing the current
  routing state.

Phase 1 was completed and shipped in Ember 2.15, with a [polyfill](https://github.com/rwjblue/ember-router-service-polyfill)
for older versions of Ember (back to 2.8).

We are currently looking for someone to lead the implementation of Phase
2, which requires coordination and refactoring of the `RouteInfo` data structure
across [router.js](https://github.com/tildeio/router.js/) and Ember's current
`outletState` and `handlerInfos` data structures.
