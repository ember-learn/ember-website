const mapIdToAttributes = new Map([
  [
    '1',
    {
      demo: 'https://ember-learn-super-rentals.herokuapp.com/',
      features: [
        'Basic routing, and routing with dynamic segments',
        'Acceptance, integration, and unit tests using <a href="http://www.ember-cli-mirage.com/">Ember CLI Mirage</a>.',
      ],
      html: `<p>If you've gone through our <a href="https://guides.emberjs.com/release/tutorial/">tutorial</a> you will already be familiar with this application! <strong>Super Rentals</strong> is a good starter project to get acclimated to the Ember.js way of doing things. In this repository you'll be able to see:</p>`,
      id: '1',
      image: {
        alt: 'Super Rentals tutorial application',
        src: 'super-rentals.png',
      },
      name: 'Super Rentals',
      repository: 'https://github.com/ember-learn/super-rentals',
    },
  ],
  [
    '3',
    {
      demo: 'https://api.emberjs.com/',
      features: [
        'A more full-featured Ember web app in action',
        'Usage of <a href="https://ember-fastboot.com/">Ember FastBoot</a>.',
      ],
      html: `<p>This application was built to display our versioned <a href="http://emberjs.com/api/">API docs</a>.  You'll be able to learn about:</p>`,
      id: '3',
      image: {
        alt: 'API docs application',
        src: 'api-docs.png',
      },
      name: 'API Docs',
      repository: 'https://github.com/ember-learn/ember-api-docs',
    },
  ],
  [
    '4',
    {
      demo: 'https://deprecations.emberjs.com/',
      features: [
        'Deprecations for each version of Ember from <a href="https://emberjs.com/deprecations/v1.x">v1</a> through <a href="https://emberjs.com/deprecations/v3.x">v3</a>.',
        'Ember Data specific deprecations in <a href="https://emberjs.com/deprecations/ember-data/v2.x">v2</a> and  <a href="https://emberjs.com/deprecations/ember-data/v3.x">v3</a>.',
        'Ember CLI specific deprecations in <a href="https://emberjs.com/deprecations/ember-cli/v2.x">v2</a>.',
      ],
      html: `Ember CLI specific deprecations in <a href="https://emberjs.com/deprecations/ember-cli/v2.x">v2</a>.`,
      id: '4',
      image: {
        alt: 'Deprecations application',
        src: 'deprecations.png',
      },
      name: 'Deprecations',
      repository: 'https://github.com/ember-learn/deprecation-app',
    },
  ],
]);

// Default export is for loading data into Mirage
export default Array.from(mapIdToAttributes.values());

// Named export is for unit testing the model
function getAttributesForId(id) {
  return mapIdToAttributes.get(id);
}

export { getAttributesForId };
