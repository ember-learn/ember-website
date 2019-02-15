---
name: Named Blocks
summary: |
  Introduce syntax for passing in multiple named template blocks into a component,
  and unify the rendering syntaxes / semantics for blocks/primitives/component-factories
  passed into a component.
status: in-development
statusText: In Implementation
availability: Not yet available.
resources:
  - type: rfc
    name: Named Blocks RFC
    url: https://github.com/emberjs/rfcs/pull/226
champions:
  - name: Martin Muñoz
    image: https://avatars0.githubusercontent.com/u/1151810?s=460&v=4
    url: https://github.com/mmun
  - name: Alex Matchneer
    image: https://avatars0.githubusercontent.com/u/81818?s=460&v=4
    url: https://github.com/machty
---
There are limitations to composition due to the inability to pass more than one block to a
component (or 2 blocks if you include the inverse block).

The result of this is that Ember developers have an ultra-powerful, compositional API
for overriding portions of a component, but they can only use it in one place in the
component invocation; any remaining overrides/configuration needs to be expressed as data
and passed in as attributes to the component when it'd be vastly preferable to just pass
in a chunk of DOM.

Example:

```hbs
{{#x-modal headerText=page.title as |c|}}
  <p>Modal Content {{foo}}</p>
  <button onclick={{c.close}}>
     Close modal
  </button>
{{/x-modal}}
```

Named blocks empower developers to express the use case via:

```hbs
{{#x-modal}}
  <@header as |c|>
    {{page.title}}
    {{status-indicator status=status}}
    {{close-button action=c.close}}
  </@header>

  <@main as |c|>
    <p>Modal Content {{foo}}</p>
    <button onclick={{c.close}}>
       Close modal
    </button>
  </@main>
{{/x-modal}}
```
