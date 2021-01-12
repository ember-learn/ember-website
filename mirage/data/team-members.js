const mapIdToAttributes = new Map([
  [
    'isaac-lee',
    {
      added: new Date('2020-06-18'),
      first: 'Isaac',
      github: 'https://github.com/ijlee2',
      id: 'isaac-lee',
      image: 'ilee.jpg',
      last: 'Lee',
      name: 'Isaac Lee',
      teams: ['learning'],
      twitter: null,
    },
  ],
  [
    'katie-gengler',
    {
      added: new Date('2016-04-14'),
      first: 'Katie',
      github: 'https://github.com/kategengler',
      id: 'katie-gengler',
      image: 'kgengler.jpg',
      last: 'Gengler',
      name: 'Katie Gengler',
      teams: ['corejs', 'cli', 'steering'],
      twitter: 'https://twitter.com/katiegengler',
    },
  ],
  [
    'trek-glowacki',
    {
      added: new Date('2013-04-02'),
      first: 'Trek',
      github: 'https://github.com/trek',
      id: 'trek-glowacki',
      image: 'tglowacki.jpg',
      last: 'Glowacki',
      name: 'Trek Glowacki',
      teams: ['alumni'],
      twitter: 'https://twitter.com/trek',
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
