import { LinkTo } from '@ember/routing';
import { sortBy } from '@nullvoxpopuli/ember-composable-helpers';
import { pageTitle } from 'ember-page-title';
import MascotsMascotFilters from 'ember-website/components/mascots/mascot-filters';
import MascotsMascotList from 'ember-website/components/mascots/mascot-list';

<template>
  {{pageTitle "Mascots"}}
  <section aria-label="Mascots" class="container">
    <h1>Tomster and Zoey</h1>
    <p>
      Tomster was the first of many friendly faces of the Ember project and
      community. Over the years we've dressed and redressed him for all sorts of
      fun projects and reasons. With the addition of his sister Zoey, you'll see
      Ember friends around even more.
    </p>
    <p>
      Tomster is a registered and protected trademark. These images may not be
      used without specific and explicit consent (which we aim never to hold
      back unreasonably). If you have questions about using or commissioning a
      custom Mascot,
      <LinkTo @route="mascots.faq">check out the FAQ</LinkTo>.
    </p>

    <MascotsMascotFilters />

    <MascotsMascotList
      @display={{@controller.display}}
      @mascots={{sortBy "date:desc" @controller.filteredMascots}}
    />
  </section>
</template>
