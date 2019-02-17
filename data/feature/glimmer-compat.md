---
name: Ember/Glimmer.js Compatibility
summary: |
  Seamlessly use components written using the [Glimmer.js](https://www.glimmerjs.com)
  component API in Ember apps.
status: in-development
statusText: In Implementation
availability: Not yet available.
resources:
  - type: rfc
    name: Custom Components RFC
    url: https://github.com/emberjs/rfcs/blob/master/text/0213-custom-components.md
  - type: quest
    name: Quest Issue
    url: https://github.com/emberjs/ember.js/issues/16301
  - type: discord
    name: "#st-glimmer-components"
    url: https://discordapp.com/channels/480462759797063690/484527412160364574
champions:
  - name: Kris Selden
    image: https://avatars2.githubusercontent.com/u/61024?v=4&s=460
    url: https://github.com/krisselden/
  - name: Robert Jackson
    image: https://avatars2.githubusercontent.com/u/12637?v=4&s=460
    url: https://github.com/rwjblue
  - name: Tom Dale
    image: https://avatars0.githubusercontent.com/u/90888?v=4&s=460
    url: https://github.com/tomdale
---
Glimmer.js introduces a new, modern take on writing UI components for the
web. Because they're powered by the same Glimmer VM that Ember uses, it
will be possible to mix and match them with your existing components in an
Ember app.

We want to be upfront about the fact that the API in Glimmer.js is still
undergoing rapid breaking changes, and isn't ready to be included by
default in Ember. For those comfortable living on the bleeding edge,
however, we'd like to begin this integration work either behind a feature
flag or via an addon so we can start gathering feedback.

The first steps toward this integration are:

1. Iterate and merge the [Custom Components RFC](https://github.com/emberjs/rfcs/blob/master/text/0213-custom-components.md),
   which describes a public API for registering custom Glimmer component managers.
2. Update the Ember.js build pipeline to support TypeScript. Glimmer itself is exhaustively
   typed, but today Ember's rendering code (on top of Glimmer VM) is untyped JavaScript, which
   has caused unnecessary bugs and lost time.
3. Update Ember.js to use the latest Glimmer VM version (0.29.0 at the time of this writing).

There is some additional design work that is still needed as well. For example, Ember needs to
know which component manager to use for a given template (i.e., is this a Glimmer component
template or an Ember component template?). We need to design an API that will allow users to
indicate which is which in projects that use multiple component styles.
