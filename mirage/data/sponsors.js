const mapIdToAttributes = new Map([
  [
    '201-created',
    {
      content: 'Matthew Beale',
      end: new Date('2018-12-31'),
      id: '201-created',
      image: '201-created.png',
      name: '201 Created',
      start: new Date('2015-01-02'),
      url: 'https://www.201-created.com',
    },
  ],
  [
    'addepar',
    {
      content: 'Ember Data',
      end: new Date('2013-12-31'),
      id: 'addepar',
      image: 'addepar.png',
      name: '201 Created',
      start: new Date('2012-01-01'),
      url: 'https://addepar.com/',
    },
  ],
  [
    'bookingsync',
    {
      content: 'Subteam F2F',
      end: new Date('2018-07-01'),
      id: 'bookingsync',
      image: 'bookingsync.png',
      name: 'Booking Sync',
      start: new Date('2017-01-01'),
      url: 'https://www.bookingsync.com',
    },
  ],
  [
    'bustle',
    {
      content: 'FastBoot, Glimmer',
      end: new Date('2015-10-31'),
      id: 'bustle',
      image: 'bustle.png',
      name: 'Bustle',
      start: new Date('2014-01-02'),
      url: 'https://www.bustle.com/',
    },
  ],
  [
    'cardstack',
    {
      content: 'Edward Faulkner, Jen Weber',
      end: undefined,
      id: 'cardstack',
      image: 'cardstack-logo.svg',
      name: 'Cardstack',
      start: new Date('2018-01-01'),
      url: 'https://cardstack.com',
    },
  ],
  [
    'discourse',
    {
      content: 'Performance',
      end: new Date('2018-12-31'),
      id: 'discourse',
      image: 'discourse.png',
      name: 'Discourse',
      start: new Date('2018-01-01'),
      url: 'https://www.discourse.com',
    },
  ],
  [
    'dockyard',
    {
      content: 'Ember Data, Robert Jackson',
      end: new Date('2015-10-31'),
      id: 'dockyard',
      image: 'dockyard.png',
      name: 'Dockyard',
      start: new Date('2014-01-01'),
      url: 'https://dockyard.com/ember-consulting',
    },
  ],
  [
    'linkedin',
    {
      content: 'Glimmer, Octane, A11y',
      end: undefined,
      id: 'linkedin',
      image: 'linkedin-logo.svg',
      name: 'LinkedIn',
      start: new Date('2015-01-01'),
      url: 'https://www.linkedin.com',
    },
  ],
  [
    'livingsocial',
    {
      content: 'Ember 1.0, Ember Data',
      end: new Date('2011-12-31'),
      id: 'livingsocial',
      image: 'livingsocial.png',
      name: 'Living Social',
      start: new Date('2011-01-01'),
      url: 'https://livingsocial.com/',
    },
  ],
  [
    'mhelabs',
    {
      content: 'Ember Data, Router',
      end: new Date('2013-12-31'),
      id: 'mhelabs',
      image: 'mhelabs.png',
      name: 'MHE Labs',
      start: new Date('2013-01-01'),
      url: 'https://www.mhelabs.com/',
    },
  ],
  [
    'simplabs',
    {
      content: 'Ember Websites',
      end: undefined,
      id: 'simplabs',
      image: 'simplabs-logo.svg',
      name: 'simplabs',
      start: new Date('2019-01-01'),
      url: 'https://www.simplabs.com',
    },
  ],
  [
    'tilde',
    {
      content: 'Yehuda Katz, Leah Silber, Godfrey Chan',
      end: undefined,
      id: 'tilde',
      image: 'tilde-logo.svg',
      name: 'Tilde',
      start: new Date('2011-01-01'),
      url: 'https://www.tilde.io/',
    },
  ],
  [
    'yahoo',
    {
      content: 'Stefan Penner',
      end: new Date('2015-06-24'),
      id: 'yahoo',
      image: 'yahoo.png',
      name: 'Yahoo',
      start: new Date('2015-01-01'),
      url: 'https://www.yahoo.com',
    },
  ],
  [
    'yapp',
    {
      content: 'Kris Selden',
      end: new Date('2015-10-31'),
      id: 'yapp',
      image: 'yapp.png',
      name: 'Yapp',
      start: new Date('2013-01-01'),
      url: 'https://www.yapp.us/',
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
