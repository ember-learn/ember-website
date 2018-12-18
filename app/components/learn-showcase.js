import Component from '@ember/component';

const showcase = [
  {
    "name": "Super Rentals",
    "image": {
      "src": "showcase-super-rentals.png",
      "alt": "Super Rentals tutorial application"
    },
    "repository": "https://github.com/ember-learn/super-rentals",
    "demo": "https://ember-learn-super-rentals.herokuapp.com/rentals",
    "description": "If you've gone through our <a href=\"https://guides.emberjs.com/_CURRENT_VERSION_/tutorial/ember-cli/\">Tutorial</a> you will already be familiar with this application! <strong>Super Rentals</strong> is a good starter project to get acclimated to the Ember.js way of doing things. In this repository you'll be able to see:\n",
    "features": [
      "Basic routing, and routing with dynamic segments",
      "Acceptance, integration, and unit tests using <a href=\"http://www.ember-cli-mirage.com/\">Ember CLI Mirage</a>."
    ]
  },
  {
    "name": "Builds",
    "image": {
      "src": "showcase-builds.png",
      "alt": "Builds page application"
    },
    "repository": "https://github.com/ember-learn/builds",
    "demo": "https://emberjs.com/builds",
    "description": "This is the application that the Ember.js team built to display our <a href=\"http://emberjs.com/builds/\">various release channels</a>. It is slightly more complex than Super Rentals, and you'll be able to see:\n",
    "features": [
      "Usage of <a href=\"http://ember-cli-deploy.com/\">Ember CLI Deploy</a> to deploy to S3.",
      "Loading of an Ember.js application via JavaScript in the <a href=\"https://github.com/emberjs/website\">website</a>."
    ]
  },
  {
    "name": "API Docs",
    "image": {
      "src": "showcase-api-docs.png",
      "alt": "API docs application"
    },
    "repository": "https://github.com/ember-learn/ember-api-docs",
    "demo": "https://emberjs.com/api/",
    "description": "This application was built to display our <a href=\"http://emberjs.com/api/\">versioned API docs</a>.  You'll be able to learn about:\n",
    "features": [
      "A more full-featured Ember web app in action",
      "Usage of <a href=\"https://ember-fastboot.com/\">Ember FastBoot</a>."
    ]
  },
  {
    "name": "Deprecations",
    "image": {
      "src": "showcase-deprecations.png",
      "alt": "Deprecations application"
    },
    "repository": "https://github.com/ember-learn/deprecation-app",
    "demo": "https://emberjs.com/deprecations",
    "description": "This application was built to showcase Ember deprecations at <a href=\"http://emberjs.com/deprecations/\">deprecations app</a>.  You'll be able to learn and identify deprecations for each major release such as:\n",
    "features": [
      "Deprecations for each version of Ember from <a href=\"https://emberjs.com/deprecations/v1.x\">1.X</a> through <a href=\"https://emberjs.com/deprecations/v3.x\">3.X</a>.",
      "Ember Data specific deprecations in <a href=\"https://emberjs.com/deprecations/ember-data/v2.x\">Ember 2.X</a>.",
      "Ember CLI specific deprecations in <a href=\"https://emberjs.com/deprecations/ember-cli/v2.x\">Ember 2.X</a>."
    ]
  }
];

export default Component.extend({
  init() {
    this._super();
    this.showcase = showcase;
  }
});
