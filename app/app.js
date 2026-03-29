import Application from 'ember-strict-application-resolver';
import PageTitleService from 'ember-page-title/services/page-title';
import NavbarService from 'ember-styleguide/services/navbar';
import ProgressService from 'ember-styleguide/services/progress';

import Router from './router.js';

export default class App extends Application {
  modules = {
    './router': Router,

    // v2 addon services
    './services/page-title': PageTitleService,
    './services/navbar': NavbarService,
    './services/progress': ProgressService,

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
