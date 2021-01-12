const mapIdToAttributes = new Map([
  [
    'austin-tx',
    {
      area: 'North America',
      id: 'austin-tx',
      lat: 30.305083,
      lng: -97.743753,
      location: 'Austin, TX',
      organizers: [
        {
          organizer: 'Brandon Hays',
          profileImage:
            'https://photos4.meetupstatic.com/photos/member/c/e/2/4/thumb_111832772.jpeg',
        },
      ],
      url: 'https://www.meetup.com/Ember-ATX/',
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
