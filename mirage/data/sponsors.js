const mapIdToAttributes = new Map([
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
    'discourse',
    {
      content: 'Performance',
      end: new Date('2018-01-01'),
      id: 'discourse',
      image: 'discourse.png',
      name: 'Discourse',
      start: new Date('2018-12-31'),
      url: 'https://www.discourse.com',
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
