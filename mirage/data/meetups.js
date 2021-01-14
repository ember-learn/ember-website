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
  [
    'belo-horizonte-brazil',
    {
      area: 'South America',
      id: 'belo-horizonte-brazil',
      lat: -19.9166813,
      lng: -43.9344931,
      location: 'Belo Horizonte, Brazil',
      organizers: [
        {
          organizer: 'Fabrício Tavares',
          profileImage:
            'https://photos4.meetupstatic.com/photos/member/1/1/6/4/thumb_119464452.jpeg',
        },
      ],
      url: 'https://www.meetup.com/Ember-BH/',
    },
  ],
  [
    'berlin-germany',
    {
      area: 'Europe',
      id: 'berlin-germany',
      lat: 52.5200066,
      lng: 13.404954,
      location: 'Berlin, Germany',
      organizers: [
        {
          organizer: 'Matthew Beale',
          profileImage:
            'https://photos4.meetupstatic.com/photos/member/5/8/f/thumb_7501423.jpeg',
        },
        {
          organizer: 'Alexandre Sutra',
          profileImage:
            'https://photos1.meetupstatic.com/photos/member/6/2/b/8/thumb_117805272.jpeg',
        },
        {
          organizer: 'Robert Barbey',
          profileImage:
            'https://photos2.meetupstatic.com/photos/member/7/5/a/thumb_102061882.jpeg',
        },
        {
          organizer: 'Jordane R.',
          profileImage:
            'https://photos4.meetupstatic.com/photos/member/a/f/c/0/thumb_222224992.jpeg',
        },
      ],
      url: 'https://www.meetup.com/Ember-js-Berlin/',
    },
  ],
  [
    'cape-town-south-africa',
    {
      area: 'Africa',
      id: 'cape-town-south-africa',
      lat: -33.926957,
      lng: 18.445928,
      location: 'Cape Town, South Africa',
      organizers: [
        {
          organizer: 'Matthew ONeil',
          profileImage:
            'https://photos4.meetupstatic.com/photos/member/7/d/6/7/member_256892103.jpeg',
        },
      ],
      url: 'https://www.meetup.com/EmberJS-Cape-Town',
    },
  ],
  [
    'chennai-india',
    {
      area: 'Asia',
      id: 'chennai-india',
      lat: 12.9695,
      lng: 80.2438,
      location: 'Chennai, India',
      organizers: [
        {
          organizer: 'Abhilash LR',
          profileImage:
            'https://secure.meetupstatic.com/photos/member/7/0/5/7/highres_281188759.jpeg',
        },
        {
          organizer: 'Ashwin Ramesh',
          profileImage:
            'https://secure.meetupstatic.com/photos/member/3/1/4/a/highres_289452618.jpeg',
        },
        {
          organizer: 'Arun Rajkumar',
          profileImage: 'https://i.ibb.co/T0ZcXqv/Arun-Rajkumar.jpg',
        },
        {
          organizer: 'Robin Philip Thomas',
          profileImage:
            'https://secure.meetupstatic.com/photos/member/9/d/9/4/highres_289180340.jpeg',
        },
        {
          organizer: 'Ruphaa Ganesh',
          profileImage:
            'https://secure.meetupstatic.com/photos/member/a/f/c/f/highres_288225007.jpeg',
        },
        {
          organizer: 'Siwalik Mukherjee',
          profileImage: 'https://i.ibb.co/7zxDs7V/Siwalik-Mukherjee.jpg',
        },
        {
          organizer: 'Vasantha Kumar',
          profileImage: 'https://i.ibb.co/MPGXFM0/Vasantha-Kumar.jpg',
        },
        {
          organizer: 'Gokul K',
          profileImage:
            'https://secure.meetupstatic.com/photos/member/3/f/2/8/highres_258136168.jpeg',
        },
      ],
      url: 'https://www.meetup.com/Chennai-EmberJS/',
    },
  ],
  [
    'madrid-spain',
    {
      area: 'Europe',
      id: 'madrid-spain',
      lat: 40.4168,
      lng: -3.7036,
      location: 'Madrid, Spain',
      organizers: [
        {
          organizer: 'Sergio del Valle Salvador',
          profileImage:
            'https://photos4.meetupstatic.com/photos/member/5/a/7/f/thumb_253703167.jpeg',
        },
        {
          organizer: 'Adrián González Rus',
          profileImage:
            'https://photos4.meetupstatic.com/photos/member/8/7/c/9/thumb_255634761.jpeg',
        },
        {
          organizer: 'Juan Antonio Gómez',
          profileImage:
            'https://photos4.meetupstatic.com/photos/member/5/8/3/3/thumb_253282579.jpeg',
        },
        {
          organizer: 'Ruben Gómez',
          profileImage:
            'https://photos4.meetupstatic.com/photos/member/7/1/f/d/thumb_253949181.jpeg',
        },
        {
          organizer: 'Eduardo Tarancón',
          profileImage:
            'https://photos4.meetupstatic.com/photos/member/2/c/e/9/thumb_254651497.jpeg',
        },
      ],
      url: 'https://www.meetup.com/Ember-js-Madrid/',
    },
  ],
  [
    'new-york-ny',
    {
      area: 'North America',
      id: 'new-york-ny',
      lat: 40.740314,
      lng: -73.995068,
      location: 'New York, NY',
      organizers: [
        {
          organizer: 'Luke Melia',
          profileImage:
            'https://photos3.meetupstatic.com/photos/member/5/6/3/8/thumb_5902072.jpeg',
        },
        {
          organizer: 'Jorge Davila',
          profileImage:
            'https://photos2.meetupstatic.com/photos/member/9/b/6/6/thumb_215499782.jpeg',
        },
        {
          organizer: 'Kevin Prentiss',
          profileImage:
            'https://photos3.meetupstatic.com/photos/member/8/9/5/3/thumb_5855155.jpeg',
        },
      ],
      url: 'https://www.meetup.com/EmberJS-NYC/',
    },
  ],
  [
    'nizhny-novgorod-russia',
    {
      area: 'Europe',
      id: 'nizhny-novgorod-russia',
      lat: 56.319827,
      lng: 44.001361,
      location: 'Nizhny Novgorod, Russia',
      organizers: [
        {
          organizer: 'Natasha Fel',
          profileImage:
            'https://pbs.twimg.com/profile_images/1158999373658951680/deOa-COd_400x400.jpg',
        },
      ],
      url: 'https://emberjs-nn.timepad.ru/events/',
    },
  ],
  [
    'portland-or',
    {
      area: 'North America',
      id: 'portland-or',
      lat: 45.5230622,
      lng: -122.6764816,
      location: 'Portland, OR',
      organizers: [
        {
          organizer: 'Leah Silber',
          profileImage:
            'https://photos1.meetupstatic.com/photos/member/9/1/a/c/thumb_107077292.jpeg',
        },
        {
          organizer: 'Kait Olson',
          profileImage:
            'https://photos2.meetupstatic.com/photos/member/3/4/7/8/thumb_163753432.jpeg',
        },
      ],
      url: 'https://www.meetup.com/Ember-PDX/',
    },
  ],
  [
    'santiago-chile',
    {
      area: 'South America',
      id: 'santiago-chile',
      lat: -33.4533661,
      lng: -70.6967031,
      location: 'Santiago, Chile',
      organizers: [
        {
          organizer: 'Yoran Brondsema',
          profileImage:
            'https://photos2.meetupstatic.com/photos/member/6/b/a/0/thumb_142947552.jpeg',
        },
      ],
      url: 'https://www.meetup.com/Santiago-Ember-js-Group/',
    },
  ],
  [
    'seattle-wa',
    {
      area: 'North America',
      id: 'seattle-wa',
      lat: 47.6062095,
      lng: -122.3320708,
      location: 'Seattle, WA',
      organizers: [
        {
          organizer: 'Gordon Hempton',
          profileImage:
            'https://photos3.meetupstatic.com/photos/member/9/d/1/e/thumb_38560222.jpeg',
        },
        {
          organizer: 'Dave Laird',
          profileImage:
            'https://photos1.meetupstatic.com/photos/member/b/8/3/a/thumb_24347162.jpeg',
        },
        {
          organizer: 'Kristofor Selden',
          profileImage:
            'https://photos2.meetupstatic.com/photos/member/9/6/f/c/thumb_57458652.jpeg',
        },
        {
          organizer: 'Wes Hather',
          profileImage:
            'https://photos4.meetupstatic.com/photos/member/3/f/0/e/thumb_85396142.jpeg',
        },
      ],
      url: 'https://www.meetup.com/Ember-js-Seattle-Meetup/',
    },
  ],
  [
    'tel-aviv-israel',
    {
      area: 'Asia',
      id: 'tel-aviv-israel',
      lat: 32.0852999,
      lng: 34.7817676,
      location: 'Tel Aviv, Israel',
      organizers: [
        {
          organizer: 'Oren Rubin',
          profileImage:
            'https://photos2.meetupstatic.com/photos/member/d/d/c/4/thumb_112016772.jpeg',
        },
        {
          organizer: 'Sergey Bolshchikov',
          profileImage:
            'https://photos1.meetupstatic.com/photos/member/1/b/d/c/thumb_69787132.jpeg',
        },
      ],
      url: 'https://www.meetup.com/Ember-IL/',
    },
  ],
  [
    'toronto-on',
    {
      area: 'North America',
      id: 'toronto-on',
      lat: 43.653226,
      lng: -79.3831843,
      location: 'Toronto, ON',
      organizers: [
        {
          organizer: 'Meghann Millard',
          profileImage:
            'https://photos3.meetupstatic.com/photos/member/a/d/a/e/thumb_11084462.jpeg',
        },
        {
          organizer: 'Robin Ward',
          profileImage:
            'https://photos3.meetupstatic.com/photos/member/1/5/7/4/thumb_177125492.jpeg',
        },
        {
          organizer: 'Carsten N.',
          profileImage:
            'https://photos3.meetupstatic.com/photos/member/2/5/5/a/thumb_177129562.jpeg',
        },
        {
          organizer: 'Mattia G.',
          profileImage:
            'https://photos4.meetupstatic.com/photos/member/4/c/e/c/thumb_77659692.jpeg',
        },
        {
          organizer: 'Justin G.',
          profileImage:
            'https://photos2.meetupstatic.com/photos/member/8/c/d/c/thumb_12036060.jpeg',
        },
      ],
      url: 'https://www.meetup.com/Toronto-Ember-JS-Meetup/',
    },
  ],
  [
    'wellington-new-zealand',
    {
      area: 'Oceania',
      id: 'wellington-new-zealand',
      lat: -41.298089,
      lng: 174.77831,
      location: 'Wellington, New Zealand',
      organizers: [
        {
          organizer: 'Eoin Kelly',
          profileImage:
            'https://photos4.meetupstatic.com/photos/member/1/d/6/c/thumb_196567532.jpeg',
        },
      ],
      url: 'https://www.meetup.com/ember-js-wellington/',
    },
  ],
  [
    'zurich-switzerland',
    {
      area: 'Europe',
      id: 'zurich-switzerland',
      lat: 47.3686498,
      lng: 8.5391825,
      location: 'Zürich, Switzerland',
      organizers: [
        {
          organizer: 'Claudio Romano',
          profileImage:
            'https://photos3.meetupstatic.com/photos/member/4/f/9/8/thumb_241760376.jpeg',
        },
      ],
      url: 'https://www.meetup.com/Ember-js-Zurich/',
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
