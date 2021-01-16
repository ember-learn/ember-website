import Route from '@ember/routing/route';

/*
  @deprecated

  From .netlifyredirects, we see that, when a user visits /statusboard,
  they will be redirected to an external webpage.

  Consider removing this route file. In case the route file is needed,
  I only commented out the model hook for now.
*/
export default class StatusboardRoute extends Route {
  // model() {
  //   return this.store.findAll('feature');
  // }
}
