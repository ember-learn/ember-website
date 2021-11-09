const mapIdToAttributes = new Map([
  [
    '201-created',
    {
      added: new Date('2017-06-16'),
      content: 'Ember.js and JavaScript consulting since 2011.',
      featured: undefined,
      id: '201-created',
      image: '201-created.png',
      inactive: undefined,
      name: '201 Created',
      url: 'https://www.201-created.com',
    },
  ],
  [
    'articad',
    {
      added: new Date('2019-03-25'),
      content:
        "ArtiCAD uses ember.js for it's room planner and styler application.",
      featured: undefined,
      id: 'articad',
      image: 'articad.png',
      inactive: undefined,
      name: 'Articad Ltd',
      url: 'https://www.articad.com',
    },
  ],
  [
    'clark',
    {
      added: new Date('2016-12-17'),
      content:
        "Clark's consumer UI is powered by Ember.js - available on our website and integrated into our iOS & Android apps.",
      featured: undefined,
      id: 'clark',
      image: 'clark.png',
      inactive: undefined,
      name: 'Clark',
      url: 'https://www.clark.de',
    },
  ],
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
    'netflix',
    {
      added: new Date('2015-01-28'),
      content: '',
      featured: true,
      id: 'netflix',
      image: 'netflix.png',
      inactive: undefined,
      name: 'Netflix',
      url: 'https://www.netflix.com/',
    },
  ],
  [
    'ted',
    {
      added: new Date('2014-12-15'),
      content: '',
      featured: true,
      id: 'ted',
      image: 'ted.png',
      inactive: undefined,
      name: 'TED',
      url: 'https://www.ted.com',
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
      url: 'https://velocitylabs.io',
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
]);

// Default export is for loading data into Mirage
export default Array.from(mapIdToAttributes.values());

// Named export is for unit testing the model
function getAttributesForId(id) {
  return mapIdToAttributes.get(id);
}

export { getAttributesForId };
