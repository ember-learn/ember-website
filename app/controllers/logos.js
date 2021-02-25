import Controller from '@ember/controller';

export default class LogosController extends Controller {
  get logosByCategory() {
    return [
      {
        name: 'Primary Logo',
        description:
          'The Ember logo can be used on websites, mobile apps, or in printed materials to indicate use of Ember technologies assuming **there is no chance it might imply official status or project/core team endorsement.**\n\nThe color mark should only be displayed on a black or very light colored background. In other scenarios, use a solid black or white logo to contrast your background.\n\nWhen printed, the Ember logo should always be in PMS 7417C. The hex value is <span class="pantone">#E04E39</span>.',
        logoSets: [
          [
            'Ember 4C on Dark BG',
            'Ember 4C on Light BG',
            'Ember 1C on Dark BG',
            'Ember 1C on Light BG',
          ],
        ],
      },
      {
        name: 'Tomster Lockup',
        description:
          'A fun alternative to the primary logotype is the Tomster lockup. It’s designed with a white stroke which allows it to work on all background colors without modification.',
        logoSets: [
          [
            'Tomster Lockup 4C',
            'Tomster Lockup 4C',
            'Tomster Lockup 4C',
            'Tomster Lockup 4C',
          ],
        ],
      },
      {
        name: 'Icon',
        description:
          'In situations where the primary logos aren’t legible (e.g., avatars, favicons) you can use the simple “E” icon. Choose the container shape that best suits the context.',
        logoSets: [
          [
            {
              variants: [
                'E Circle Icon 4C',
                'E Rounded Icon 4C',
                'E Square Icon 4C',
              ],
            },
            {
              variants: [
                'E Circle Icon 4C',
                'E Rounded Icon 4C',
                'E Square Icon 4C',
              ],
            },
            {
              variants: [
                'E Circle Icon 1C on Dark BG',
                'E Rounded Icon 1C on Dark BG',
                'E Square Icon 1C on Dark BG',
              ],
            },
            {
              variants: [
                'E Circle Icon 1C on Light BG',
                'E Rounded Icon 1C on Light BG',
                'E Square Icon 1C on Light BG',
              ],
            },
          ],
        ],
      },
      {
        name: 'Ember Family Projects',
        description:
          'There are some projects that, while independent, are integrated tightly with Ember and follow our basic brand guidelines. These logos are only to be used by the project owners themselves on the official properties.',
        logoSets: [
          [
            'Glimmer 4C on Dark BG',
            'Glimmer 4C on Light BG',
            'Glimmer 1C on Dark BG',
            'Glimmer 1C on Light BG',
          ],
          [
            'Embroider 4C on Dark BG',
            'Embroider 4C on Light BG',
            'Embroider 1C on Dark BG',
            'Embroider 1C on Light BG',
          ],
        ],
      },
      {
        name: 'Subproject Logos',
        description:
          'The Ember project has numerous projects under its umbrella. These other logos may be used under the same terms as the primary Ember logo.',
        logoSets: [
          [
            'Ember CLI 4C on Dark BG',
            'Ember CLI 4C on Light BG',
            'Ember CLI 1C on Dark BG',
            'Ember CLI 1C on Light BG',
          ],
          [
            'Ember Data 4C on Dark BG',
            'Ember Data 4C on Light BG',
            'Ember Data 1C on Dark BG',
            'Ember Data 1C on Light BG',
          ],
        ],
      },
      {
        name: 'Tertiary Logos',
        description:
          'Ember communities and smaller projects have Ember-branded logos that are only to be used by the project owners themselves.',
        logoSets: [
          [
            'Ember Forum 4C on Dark BG',
            'Ember Forum 4C on Light BG',
            'Ember Forum 1C on Dark BG',
            'Ember Forum 1C on Light BG',
          ],
          [
            'The Ember Times 4C on Dark BG',
            'The Ember Times 4C on Light BG',
            'The Ember Times 1C on Dark BG',
            'The Ember Times 1C on Light BG',
          ],
        ],
      },
    ];
  }
}
