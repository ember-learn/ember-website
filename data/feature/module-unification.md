---
name: Improved File Layout ("New Pods" or "Module Unification")
summary: |
  Groups related files in Ember apps to ease access to commonly used files. This also lays the groundwork
  for long-term improvements to numerous areas in Ember.
status: in-development
statusText: In Implementation
availability: Not yet available.
resources:
  - type: blogpost
    name: High-level overview
    url: https://madhatted.com/2017/7/12/embercamp-module-unification-update
  - type: rfc
    name: Module Unification RFC
    url: https://github.com/emberjs/rfcs/pull/143
  - type: quest
    name: Quest Issue
    url: https://github.com/emberjs/ember.js/issues/16373
  - type: channel
    name: 'Discord: #st-module-unification'
    url: https://discord.gg/zT3asNS
champions:
  - name: Matthew Beale
    image: https://avatars0.githubusercontent.com/u/8752?v=4&s=460
    url: https://github.com/mixonic
  - name: Dan Gebhardt
    image: https://avatars3.githubusercontent.com/u/29122?v=4&s=460
    url: https://github.com/dgeb
---
The "New Pods" project (or "Module Unification") describes a new way to lay out Ember applications and
addons in the `src/` directory (switching away from the `app/` folder).

This new approach will replace both the traditional "classic" filesystem layout and also
"pods". Pods were an initial experiment from the very early days of Ember-CLI (when it too was an experiment)
Pods have been a huge success, but the initial experiment had some issues under-the-hood
that we're now able to improve upon based on what we've learned as a community.

This new design allows us to put related parts of the framework together such as templates,
components, and component tests. It also makes it possible for components to reference relative
components and provides the ability for addons to declare new module types.

As part of the rework here, the rules for "resolving" files become much simpler,
allowing for better app performance and compile-time optimizations. It also lays the ground work for
automated code-splitting work to occur (see further down the page).
