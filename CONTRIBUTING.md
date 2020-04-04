## Where repos are
You can find the current repositories here:
- [Main website](https://github.com/ember-learn/ember-website)
- [Blog](https://github.com/ember-learn/ember-blog)
- [API Docs](https://github.com/ember-learn/ember-api-docs) 
- [Deprecations](https://github.com/ember-learn/deprecation-app) 
- [The Guides](https://github.com/ember-learn/guides-source)
- Builds and Status Board are now part of the main website.

## How to Add New Content

### Adding a showcase
To add an app to the **Showcase** section on the `/learn` page run `ember g showcase name-of-showcase` and replace the placeholder fields with the details of the new item.

### Adding a User
To add a company to the list of [Ember Users](https://emberjs.com/ember-users/) run `ember g user name-of-company` and replace the placeholder fields with the details of your company. You will also need to add a logo image to `public/images/users/`. For more information please read the comment in the markdown file that is generated using the command above.

### Adding a Team Member
To add a new team member you can run `ember g team-member firstname-lastname` and make sure that all the fields are filled in.

If you want to add an existing Team Member to another team or change their team membership you can find that person in the `data/team-member/` folder and edit the `teams` array.

### Adding a Meetup
To add a new team member you can run `ember g meetup city-country` and make sure that all the fields are filled in.

The generated meetup will have two organisers but you can have as many, or as few as you need or want.

### Updating LTS Channel page

Roughly every 4 minor versions, and every final minor version before the next major release, a release of Ember gets promoted to LTS.

Once a new LTS has been announced, please update the [LTS Channel page](https://emberjs.com/releases/lts/) by following these steps:

- Update `app/controllers/releases/lts.js` to show currently supported LTS versions.
- Update `data/project/ember/lts.md` to show the most recent LTS version.

You can find out _when_ a release was promoted to LTS from the [changelog for Ember.js](https://github.com/emberjs/ember.js/blob/master/CHANGELOG.md). The LTS promotion date is the release date of the next minor version. For example, Ember 3.16 was promoted to LTS on [March 4, 2020](https://github.com/emberjs/ember.js/blob/master/CHANGELOG.md#v3170-march-4-2020) because that's the release date of v3.17.0.

Don't worry about calculating dates for bugfixes and security patches. We made a helper, `add-weeks`, to do the math for you!