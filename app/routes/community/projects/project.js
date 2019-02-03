import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      id: 1,
      title: 'Project Title',
      link: 'www.example.com',
      description: 'lets describe this project',
      thumbnail: 'https://placeimg.com/640/480/any',
      date_added: '2010/12/08'
    };
  }
});
