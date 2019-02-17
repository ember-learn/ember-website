---
name: Engines
summary: |
  An advanced enterprise feature that allows an application to be broken up into multiple pieces that are loosely coupled,
  with each having a separate container to avoid naming collisions between teams of developers.
status: in-development
statusText: In Implementation
availability: Available
resources:
  - type: rfc
    name: Engines RFC
    url: https://github.com/emberjs/rfcs/blob/master/text/0010-engines.md
  - type: documentation
    name: Documentation
    url: https://ember-engines.com
champions:
  - name: No one
    image:
    url:
---
Engines is mostly production ready, and is used by major companies such as Chase and LinkedIn.
However, they are still considered experimental due to some build time concerns such as lazyLoading
being controlled by the engine rather than the host and tests not being located in the engine.
Part of the latter issue may be fixed with the release and incorporation of module unification.
For more information, see this great
[Reader's Questions answer](https://discuss.emberjs.com/t/readers-questions-what-is-the-status-of-ember-engines/14236).
