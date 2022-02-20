import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { registerDestructor } from '@ember/destroyable';
import { inject as service } from '@ember/service';

/**
 * These are not translated, because someone who knows the language knows what
 * their language is called in their language, and it doesn't matter if
 * non-speakers can't read it.
 */
const LOCALES = [
  { locale: 'en-us', localName: 'English' },
  // Spanish
  { locale: 'es-es', localName: 'Español' },
  // Chinese
  { locale: 'cmn', localName: '中国语訳' },
  // Russian
  { locale: 'ru', localName: 'Pусский' },
  // Japanese
  { locale: 'ja-jp', localName: '日本' },
];

export default class LanguageSwitcherComponent extends Component {
  @service intl;
  @service router;

  locales = LOCALES;

  constructor(owner, args) {
    super(owner, args);

    watchLocale(this, () => {
      let locale = this.router.currentRoute.queryParams.locale;

      this.intl.setLocale(locale || this.intl.primaryLocale);
    });
  }

  get current() {
    let locale = this.intl.locale[0];

    let info = LOCALES.find((info) => info.locale === locale);

    assert(
      `${locale} not found in static list of LOCALES. ` +
        `Something is maybe misconfigured? ` +
        `Known locale codes are: ${LOCALES.map((i) => i.locale).join(', ')}`,
      info
    );

    return info.localName;
  }
}

function watchLocale(ctx, callback) {
  ctx.router.on('routeDidChange', callback);
  registerDestructor(ctx, () => ctx.router.off('routeDidChange', callback));
}
