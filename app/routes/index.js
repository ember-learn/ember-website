import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      users: [{
        url: 'https://www.microsoft.com',
        file: 'microsoft.png',
        alt: 'Microsoft logo',
      }, {
        url: 'https://www.intercom.com',
        file: 'intercom.png',
        alt: 'Intercom logo',
      }, {
        url: 'https://www.netflix.com',
        file: 'netflix.png',
        alt: 'Netflix logo',
      }, {
        url: 'https://www.heroku.com',
        file: 'heroku.png',
        alt: 'Heroku logo',
      }, {
        url: 'https://www.skylight.io',
        file: 'skylight.png',
        alt: 'Skylight logo',
      }, {
        url: 'https://www.linkedin.com',
        file: 'linkedin.png',
        alt: 'Linkedin logo',
      }, {
        url: 'https://www.square.com',
        file: 'square.png',
        alt: 'Square logo',
      }, {
        url: 'https://www.zendesk.com',
        file: 'zendesk.png',
        alt: 'Zendesk logo',
      }]
    };
  }
});
