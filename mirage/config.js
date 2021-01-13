import { Response } from 'ember-cli-mirage';

export default function () {
  this.get('https://s3.amazonaws.com/builds.emberjs.com/canary.json', () => {
    return {
      version: '3.25.0-canary+635799d4',
      buildType: 'canary',
      SHA: '635799d425f1abfa0d4bdf6704b8a08bb1a741c5',
      assetPath: '/canary/shas/635799d425f1abfa0d4bdf6704b8a08bb1a741c5.tgz',
    };
  });

  this.get('/data/meetups/all.json', (schema) => {
    return schema.meetups.all();
  });

  this.get('/data/projects/all.json', (schema) => {
    return schema.projects.all();
  });

  this.get('/data/projects/:project/:release', (schema, request) => {
    const { project, release } = request.params;
    const id = `${project}/${release.replace('.json', '')}`;

    const record = schema.projects.find(id);

    if (record) {
      return record;
    }

    /*
      If you happen to run into this error, please check that
      you created project(s) in your test.
    */
    return new Response(
      500,
      {},
      {
        errors: [`A project with id ${id} could not be found.`],
      }
    );
  });

  this.get('/data/showcases/all.json', (schema) => {
    return schema.showcases.all();
  });

  this.get('/data/sponsors/all.json', (schema) => {
    return schema.sponsors.all();
  });

  this.get('/data/team-members/all.json', (schema) => {
    return schema.teamMembers.all();
  });

  this.get('/data/tomsters/all.json', (schema) => {
    return schema.tomsters.all();
  });

  this.get('/data/users/all.json', (schema) => {
    return schema.users.all();
  });
}
