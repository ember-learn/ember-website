const mapIdToAttributes = new Map([
  [
    'linkedin',
    {
      added: new Date('2015-06-02'),
      content: '',
      featured: true,
      id: 'linkedin',
      image: 'linkedin.png',
      inactive: undefined,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/',
    },
  ],
  [
    'wnyc',
    {
      added: new Date('2016-09-16'),
      content: "WNYC's front-end is fully powered by Ember",
      featured: undefined,
      id: 'wnyc',
      image: 'wnyc.png',
      inactive: undefined,
      name: 'WNYC',
      url: 'https://www.wnyc.org/',
    },
  ],
  [
    'velocity-labs',
    {
      added: new Date('2015-08-08'),
      content:
        'Consultancy who uses Ember to built our clients awesome client-side apps',
      featured: undefined,
      id: 'velocity-labs',
      image: 'velocitylabs.png',
      inactive: true,
      name: 'Velocity Labs',
      url: 'http://velocitylabs.io',
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
