const mapIdToAttributes = new Map([
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
    'ember-conf2019',
    {
      date: new Date('2019-03-19'),
      id: 'ember-conf2019',
      image: 'emberconf-2019.png',
      tags: ['all', 'tomster', 'zoey', 'meetup'],
      title: 'EmberConf 2019',
      url: 'https://emberconf.com/',
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
