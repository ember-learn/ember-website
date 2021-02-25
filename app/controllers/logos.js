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
            {
              name: 'Ember dark background',
              fileName: 'ember_Ember-Dark.png',
            },
            {
              name: 'Ember white background',
              fileName: 'ember_Ember-Light.png',
            },
            {
              name: 'Ember 1-color logo on red',
              fileName: 'ember_Ember-1c-Light.png',
            },
            {
              name: 'Ember 1-color logo on white',
              fileName: 'ember_Ember-1c-Dark.png',
            },
          ],
        ],
      },
      {
        name: 'Tomster Lockup',
        description:
          'A fun alternative to the primary logotype is the Tomster lockup. It’s designed with a white stroke which allows it to work on all background colors without modification.',
        logoSets: [
          [
            {
              name: 'Tomster lockup dark background',
              fileName: 'ember_Tomster-Lockup.png',
            },
            {
              name: 'Tomster lockup white background',
              fileName: 'ember_Tomster-Lockup.png',
            },
            {
              name: 'Tomster lockup red background',
              fileName: 'ember_Tomster-Lockup.png',
            },
            {
              name: 'Tomster lockup transparent background',
              fileName: 'ember_Tomster-Lockup.png',
            },
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
              subsets: [
                [
                  {
                    name: 'Ember E square dark background',
                    fileName: 'ember_E-Icon-4c-Square.png',
                  },
                  {
                    name: 'Ember E rounded rectangle dark background',
                    fileName: 'ember_E-Icon-4c-Rounded-Rectangle.png',
                  },
                  {
                    name: 'Ember E circle dark background',
                    fileName: 'ember_E-Icon-4c-Circle.png',
                  },
                ],
              ],
            },
            {
              subsets: [
                [
                  {
                    name: 'Ember E square dark background',
                    fileName: 'ember_E-Icon-4c-Square.png',
                  },
                  {
                    name: 'Ember E rounded rectangle dark background',
                    fileName: 'ember_E-Icon-4c-Rounded-Rectangle.png',
                  },
                  {
                    name: 'Ember E circle dark background',
                    fileName: 'ember_E-Icon-4c-Circle.png',
                  },
                ],
              ],
            },
            {
              subsets: [
                [
                  {
                    name: 'Ember E square dark background',
                    fileName: 'ember_E-Icon-4c-Square.png',
                  },
                  {
                    name: 'Ember E rounded rectangle dark background',
                    fileName: 'ember_E-Icon-4c-Rounded-Rectangle.png',
                  },
                  {
                    name: 'Ember E circle dark background',
                    fileName: 'ember_E-Icon-4c-Circle.png',
                  },
                ],
              ],
            },
            {
              subsets: [
                [
                  {
                    name: 'Ember E square dark background',
                    fileName: 'ember_E-Icon-4c-Square.png',
                  },
                  {
                    name: 'Ember E rounded rectangle dark background',
                    fileName: 'ember_E-Icon-4c-Rounded-Rectangle.png',
                  },
                  {
                    name: 'Ember E circle dark background',
                    fileName: 'ember_E-Icon-4c-Circle.png',
                  },
                ],
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
            {
              name: 'Glimmer dark background',
              fileName: 'glimmer_Dark.png',
            },
            {
              name: 'Glimmer white background',
              fileName: 'glimmer_Light.png',
            },
            {
              name: 'Glimmer 1-color logo on red',
              fileName: 'glimmer_1c-Light.png',
            },
            {
              name: 'Glimmer 1-color logo on white',
              fileName: 'glimmer_1c-Dark.png',
            },
          ],
          [
            {
              name: 'Embroider dark background',
              fileName: 'embroider_Dark.png',
            },
            {
              name: 'Embroider white background',
              fileName: 'embroider_Light.png',
            },
            {
              name: 'Embroider 1-color logo on red',
              fileName: 'embroider_1c-Light.png',
            },
            {
              name: 'Embroider 1-color logo on white',
              fileName: 'embroider_1c-Dark.png',
            },
          ],
        ],
      },
      {
        name: 'Subproject Logos',
        description:
          'The Ember project has numerous projects under its umbrella. These other logos may be used under the same terms as the primary Ember logo.',
        logoSets: [
          [
            {
              name: 'Ember CLI dark background',
              fileName: 'ember_CLI-Dark.png',
            },
            {
              name: 'Ember CLI light background',
              fileName: 'ember_CLI-Light.png',
            },
            {
              name: 'Ember CLI 1-color logo on red',
              fileName: 'ember_CLI-1c-Light.png',
            },
            {
              name: 'Ember CLI 1-color logo on white',
              fileName: 'ember_CLI-1c-Dark.png',
            },
          ],
          [
            {
              name: 'Ember Data dark background',
              fileName: 'ember_Data-Dark.png',
            },
            {
              name: 'Ember Date light background',
              fileName: 'ember_Data-Light.png',
            },
            {
              name: 'Ember Date 1-color logo on red',
              fileName: 'ember_Data-1c-Light.png',
            },
            {
              name: 'Ember Date 1-color logo on white',
              fileName: 'ember_Data-1c-Dark.png',
            },
          ],
        ],
      },
      {
        name: 'Tertiary Logos',
        description:
          'Ember communities and smaller projects have Ember-branded logos that are only to be used by the project owners themselves.',
        logoSets: [
          [
            {
              name: 'Ember Forum dark background',
              fileName: 'ember_Forum-Dark.png',
            },
            {
              name: 'Ember Forum light background',
              fileName: 'ember_Forum-Light.png',
            },
            {
              name: 'Ember Forum 1-color logo on red',
              fileName: 'ember_Forum-1c-Light.png',
            },
            {
              name: 'Ember Forum 1-color logo on white',
              fileName: 'ember_Forum-1c-Dark.png',
            },
          ],
          [
            {
              name: 'Ember Times dark background',
              fileName: 'ember_Times-Dark.png',
            },
            {
              name: 'Ember Times light background',
              fileName: 'ember_Times-Light.png',
            },
            {
              name: 'Ember Times 1-color logo on red',
              fileName: 'ember_Times-1c-Light.png',
            },
            {
              name: 'Ember Times 1-color logo on white',
              fileName: 'ember_Times-1c-Dark.png',
            },
          ],
          [
            {
              name: 'Ember Jobs dark background',
              fileName: 'ember_Jobs-Dark.png',
            },
            {
              name: 'Ember Jobs light background',
              fileName: 'ember_Jobs-Light.png',
            },
            {
              name: 'Ember Jobs 1-color logo on red',
              fileName: 'ember_Jobs-1c-Light.png',
            },
            {
              name: 'Ember Jobs 1-color logo on white',
              fileName: 'ember_Jobs-1c-Dark.png',
            },
          ],
        ],
      },
    ];
  }
}
