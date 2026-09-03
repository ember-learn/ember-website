import Component from '@glimmer/component';
import { sortBy } from '@nullvoxpopuli/ember-composable-helpers';
import { pageTitle } from 'ember-page-title';
import type InitiativeSponsor from 'ember-website/models/initiative-sponsor';
import type Sponsor from 'ember-website/models/sponsor';
import type SponsorsRoute from 'ember-website/routes/sponsors';
import type { ModelFrom } from 'ember-website/utils/routes';

interface SponsorsSignature {
  Args: {
    model: ModelFrom<SponsorsRoute>;
  };
}

export default class Sponsors extends Component<SponsorsSignature> {
  get currentSponsors(): Sponsor[] {
    const { sponsors } = this.args.model;

    return sponsors.filter((sponsor) => {
      return sponsor.end === undefined;
    });
  }

  get initiativeSponsors(): InitiativeSponsor[] {
    const { initiativeSponsors } = this.args.model;

    return initiativeSponsors.filter((initiativeSponsor) => {
      return initiativeSponsor.tier !== 1;
    });
  }

  get pastSponsors(): Sponsor[] {
    const { sponsors } = this.args.model;

    return sponsors.filter((sponsor) => {
      return sponsor.end !== undefined;
    });
  }

  <template>
    {{pageTitle "Sponsors"}}
    <section class="container" aria-labelledby="ember-sponsors-and-friends">
      <h1 id="ember-sponsors-and-friends">
        Ember Sponsors and Friends
      </h1>

      <p>
        Since its beginnings in 2011, Ember has been able to grow to where we
        are now, thanks to the support&mdash;both financial and
        technical&mdash;of various companies and individuals:
      </p>

      <section
        class="my-5"
        aria-labelledby="ember-sponsors-and-friends-current-sponsors"
      >
        <h2 id="ember-sponsors-and-friends-current-sponsors">Current Sponsors</h2>

        <ul class="unstyled grid sm:grid-2 lg:grid-3">
          {{#each
            (sortBy "order:asc" "end:desc" "start:asc" this.currentSponsors)
            as |sponsor|
          }}
            <li>
              <figure>
                <a
                  href={{sponsor.url}}
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                  class="well well-16/9"
                >
                  <img
                    src="/images/users/{{sponsor.image}}"
                    alt="{{sponsor.name}} website"
                    loading="lazy"
                  />
                </a>
                <figcaption class="text-muted">
                  <p>
                    {{sponsor.term}}
                    <br />
                    {{sponsor.content}}
                  </p>
                </figcaption>
              </figure>
            </li>
          {{/each}}
        </ul>
      </section>

      <section
        class="my-5"
        aria-labelledby="ember-sponsors-and-friends-ember-initiative"
      >
        <h2 id="ember-sponsors-and-friends-ember-initiative">Ember Initiative
          Sponsors</h2>

        <ul class="unstyled grid sm:grid-2 lg:grid-3">
          {{#each
            (sortBy "tier:desc" "order:asc" this.initiativeSponsors)
            as |sponsor|
          }}
            <li>
              <figure>
                <a
                  href={{sponsor.url}}
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                  class="well well-16/9"
                >
                  <img
                    src="/images/users/{{sponsor.image}}"
                    alt="{{sponsor.name}} website"
                    loading="lazy"
                  />
                </a>
                <figcaption class="text-muted">
                  <p>
                    {{sponsor.name}}
                  </p>
                </figcaption>
              </figure>
            </li>
          {{/each}}
        </ul>

        <p class="my-5">Read more about the Ember Initiative and see all the
          contributors
          <a href="https://mainmatter.com/ember-initiative/">here</a>.</p>
      </section>

      <section
        class="my-5"
        aria-labelledby="ember-sponsors-and-friends-past-sponsors"
      >
        <h2 id="ember-sponsors-and-friends-past-sponsors">Past Sponsors</h2>

        <ul class="unstyled grid sm:grid-2 lg:grid-3">
          {{#each
            (sortBy "end:desc" "start:asc" this.pastSponsors)
            as |sponsor|
          }}
            <li>
              <figure>
                <a
                  href={{sponsor.url}}
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                  class="well well-16/9"
                >
                  <img
                    src="/images/users/{{sponsor.image}}"
                    alt="{{sponsor.name}} website"
                    loading="lazy"
                  />
                </a>
                <figcaption class="text-muted">
                  <p>
                    {{sponsor.term}}
                    <br />
                    {{sponsor.content}}
                  </p>
                </figcaption>
              </figure>
            </li>
          {{/each}}
        </ul>
      </section>

      <section
        class="my-5"
        aria-labelledby="ember-sponsors-and-friends-individual-sponsors"
      >
        <h2 id="ember-sponsors-and-friends-individual-sponsors">Individual
          Sponsors</h2>

        <p>
          If you can help fund the development of Ember, we encourage you to
          visit our
          <a href="https://opencollective.com/emberjs">Open Collective</a>
          and
          <a href="https://github.com/sponsors/emberjs">GitHub Sponsors</a>
          channels. You can provide your donation in either channel. All
          financial contributions are moved to Open Collective and centrally,
          publicly managed there.
        </p>

        <p>
          A special thanks goes to
          <a
            href="https://dribbble.com/mg"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >Matt Grantham</a>
          for designing the original Ember website.
        </p>
      </section>
    </section>
  </template>
}
