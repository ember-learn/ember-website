import type { TOC } from '@ember/component/template-only';
import { concat, hash } from '@ember/helper';
import { trustHTML } from '@ember/template';
// @ts-expect-error: Incorrect type
import EsCard from 'ember-styleguide/components/es-card';
import type LearnRoute from 'ember-website/routes/learn';
import type { ModelFrom } from 'ember-website/utils/routes';

interface LearnExamplesSignature {
  Args: {
    model: ModelFrom<LearnRoute>;
  };
}

<template>
  <section class="container" aria-labelledby="learning-emberjs-examples">
    <h1 id="learning-emberjs-examples">Examples</h1>

    <p>In this section, you will find applications that are maintained by the
      Ember.js teams with the help of contributors. While software is always a
      work in progress, the goal is to showcase patterns and solutions applied
      in real-world applications.</p>

    <p>Whether you're simply interested in checking out how some feature is
      implemented, or you're looking to contribute, one of these projects might
      pique your interest!</p>

    <ul class="list-unstyled grid lg:grid-2">
      {{#each @model as |showcase|}}
        <EsCard
          @alt=""
          @image={{hash src=(concat "/images/showcase/" showcase.image.src)}}
        >
          <h2>{{showcase.name}}</h2>

          <h3>Description</h3>

          {{trustHTML showcase.html}}

          <ul>
            {{#each showcase.features as |feature|}}
              <li>{{trustHTML feature}}</li>
            {{/each}}
          </ul>

          <h3>External Links</h3>

          <ul class="list-unstyled">
            <li>
              <a
                href={{showcase.demo}}
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                Visit website
              </a>
            </li>
            <li>
              <a
                href={{showcase.repository}}
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                Visit repository
              </a>
            </li>
          </ul>
        </EsCard>
      {{/each}}
    </ul>
  </section>
</template> satisfies TOC<LearnExamplesSignature>;
