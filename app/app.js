import Application from 'ember-strict-application-resolver';
import PageTitleService from 'ember-page-title/services/page-title';

// TODO: Re-add once ember-styleguide v2 conversion is complete
// import * as NavbarService from 'ember-styleguide/services/navbar';

import Router from './router.js';

export default class App extends Application {
  modules = {
    './router': Router,

    // v2 addon services
    './services/page-title': PageTitleService,

    // app modules
    ...import.meta.glob('./adapters/*.js', { eager: true }),
    ...import.meta.glob('./components/**/*.{js,hbs}', { eager: true }),
    ...import.meta.glob('./controllers/**/*.js', { eager: true }),
    ...import.meta.glob('./helpers/*.js', { eager: true }),
    ...import.meta.glob('./locations/*.js', { eager: true }),
    ...import.meta.glob('./models/*.js', { eager: true }),
    ...import.meta.glob('./modifiers/*.js', { eager: true }),
    ...import.meta.glob('./routes/**/*.js', { eager: true }),
    ...import.meta.glob('./serializers/*.js', { eager: true }),
    ...import.meta.glob('./services/*.js', { eager: true }),
    ...import.meta.glob('./templates/**/*.hbs', { eager: true }),
    ...import.meta.glob('./utils/**/*.js', { eager: true }),
  };
}
