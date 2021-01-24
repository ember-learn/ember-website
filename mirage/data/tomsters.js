const mapIdToAttributes = new Map([
  [
    'austin-zoey',
    {
      date: new Date('2016-07-08'),
      id: 'austin-zoey',
      image: 'austin-zoey.png',
      tags: ['all', 'zoey', 'meetup'],
      title: 'Austin Zoey',
      url: 'https://www.meetup.com/Ember-ATX/',
    },
  ],
  [
    'ember-a11y',
    {
      date: new Date('2018-03-10'),
      id: 'ember-a11y',
      image: 'a11y-zoey.png',
      tags: ['all', 'zoey', 'other'],
      title: 'Ember A11y',
      url: undefined,
    },
  ],
  [
    'ember-camp-tomster',
    {
      date: new Date('2013-02-15'),
      id: 'ember-camp-tomster',
      image: 'embercamp.png',
      tags: ['all', 'tomster', 'conference'],
      title: 'EmberCamp Tomster',
      url: null,
    },
  ],
  [
    'ember-conf2019',
    {
      date: new Date('2019-03-19'),
      id: 'ember-conf2019',
      image: 'emberconf-2019.png',
      tags: ['all', 'tomster', 'zoey', 'conference'],
      title: 'EmberConf 2019',
      url: 'https://emberconf.com/',
    },
  ],
  [
    'minnesota-tomster',
    {
      date: new Date('2019-09-10'),
      id: 'minnesota-tomster',
      image: 'minnesota-tomster.png',
      tags: ['all', 'tomster', 'meetup'],
      title: 'Minnesota',
      url: 'https://www.meetup.com/EmberMN/',
    },
  ],
  [
    'octane',
    {
      date: new Date('2019-03-21'),
      id: 'octane',
      image: 'octane.png',
      tags: ['other', 'tomster', 'zoey'],
      title: 'Ember Octane',
      url: null,
    },
  ],
  [
    'san-diego-zoey',
    {
      date: new Date('2016-05-31'),
      id: 'san-diego-zoey',
      image: 'sandiego-zoey.png',
      tags: ['all', 'zoey', 'meetup'],
      title: 'San Diego Zoey',
      url: 'https://www.meetup.com/sandiego-ember/',
    },
  ],
  [
    'skylight',
    {
      date: new Date('2016-04-06'),
      id: 'skylight',
      image: 'corp/skylight-both.png',
      tags: ['all', 'tomster', 'zoey', 'corp'],
      title: 'Skylight',
      url: 'https://www.skylight.io',
    },
  ],
  [
    'stable-release-bust',
    {
      date: new Date('2013-12-02'),
      id: 'stable-release-bust',
      image: '3-release.png',
      tags: ['all', 'tomster', 'other'],
      title: 'Stable Release Bust',
      url: 'https://www.emberjs.com/builds',
    },
  ],
  [
    'teaching-tomster',
    {
      date: new Date('2013-01-14'),
      id: 'teaching-tomster',
      image: 'teaching.png',
      tags: ['all', 'tomster', 'other'],
      title: 'Teaching Tomster',
      url: null,
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
