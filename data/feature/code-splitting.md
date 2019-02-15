---
name: Code Splitting
summary: |
    Split assets up along route boundaries automatically, so file sizes (and
    thus load times) grow with the size of the route, not the entire app.
status: under-consideration
statusText: 'RFC Submitted'
availability: Not yet available.
resources:
  - type: rfc
    name: Packaging Strategies RFC
    url: https://github.com/ember-cli/rfcs/pull/110
    #- type: quest
    #- name: Quest Issue
    #- url: https://github.com/ember-cli/ember-cli/issues/4211
champions:
  - name: Robert Jackson
    image: https://avatars2.githubusercontent.com/u/12637?v=4&s=460
    url: https://github.com/rwjblue
  - name: Tom Dale
    image: https://avatars0.githubusercontent.com/u/90888?v=4&s=460
    url: https://github.com/tomdale
---
Code splitting is a technique where you package an app's JavaScript modules
into multiple "bundles" that can be loaded asynchronously at runtime.

Rather than having to download, parse and evaluate a single, concatenated
file that contains every dependency and all of the application code, you
can break it up into a smaller file that contains just a subset for the
task at hand. You can then fetch additional bundles either in the
background when the user is idle, or in response to a user-initiated
action.

An application's routes are the most common boundary used to decide where
to split code. Because of Ember's strong conventions around both routing
and file system layout, and early adoption of JavaScript (ES6) modules, we
should make it easy for developers to get route-based code splitting "for
free" with Ember CLI.

If a developer wants to code split more aggressively (i.e. _within_ a route
in addition to between routes), at minimum that capability should be
available via an addon.

The advantage of code splitting is that load time is tied to the
complexity of a particular task or page, not the complexity of the entire
app. Currently, when adding code to an app, every user pays some cost for
that code even if they never visit the page that uses it.

The most popular code splitting tool in the ecosystem today is webpack,
although Closure Compiler has had similar functionality for years.
Whichever tool we use by default, we want to design the route-based code
splitting feature to be pluggable so it can be implemented with any tool.
Not only does this give us portability in case a new tool gains
popularity, it means that addon authors can experiment with new packaging
and bundling strategies.

The [Strategies RFC](https://github.com/ember-cli/rfcs/pull/110) proposes an
extension to Ember CLI to add a packaging hook to the build pipeline.
This hook would allow any addon to see the entire application in its final,
assembled form but before concatenation or compilation of JavaScript modules
into AMD.

In keeping with our goal of ["unlocked
experimentation"](https://emberjs.com/blog/2017/04/05/emberconf-2017-state-of-the-union.html#toc_our-new-modus-operandi-unlocked-experimentation-in-place-upgrades),
we are starting with this extension point to allow the community to build
addons that can easily integrate with code splitting tools like webpack.

Once the extension point exists and we can experiment with different
approaches, the next step will be to evaluate when and how this might
become part of the default out-of-the-box Ember experience.
