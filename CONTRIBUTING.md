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
