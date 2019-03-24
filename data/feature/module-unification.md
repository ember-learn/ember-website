---
name: Improved File Layout ("Module Unification")
summary: |
  Groups related files in Ember apps to ease access to commonly used files. This also lays the groundwork
  for long-term improvements to numerous areas in Ember.
status: in-development
statusText: In Implementation
availability: Not yet available.
resources:
  - type: blogpost
    name: High-level overview (2017)
    url: https://madhatted.com/2017/7/12/embercamp-module-unification-update
  - type: rfc
    name: Module Unification RFC
    url: https://github.com/emberjs/rfcs/pull/143
  - type: blogpost
    name: Update on Module Unification (2019)
    url: https://blog.emberjs.com/2019/03/11/update-on-module-unification-and-octane.html
  - type: channel
    name: 'Discord: #st-module-unification'
    url: https://discord.gg/zT3asNS
champions:
  - name: Dan Gebhardt
    image: https://avatars3.githubusercontent.com/u/29122?v=4&s=460
    url: https://github.com/dgeb
---
Module Unification described a new way to lay out Ember applications, and in
general we use the term to refer to a new filesystem layout for Ember
applications.

This new approach will replace both the traditional "classic" filesystem layout and also
"pods". Pods were an initial experiment from the very early days of Ember-CLI (when it too was an experiment)
Pods have been a huge success, but the initial experiment had some issues under-the-hood
that we're now able to improve upon based on what we've learned as a community.

This new design allows us to co-locate related parts of the framework together such as templates,
components, and component tests. It will also provide a solution for
applications being able to consume an addon without using `app/` directory
merging at the build level.
