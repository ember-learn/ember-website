## Description

<!-- Add some details here about the specific task -->

## Important notes - read before claiming this issue

- when staring your PR on this issue, branch off `percy-magic` instead of master.
- please do not claim one of these tasks unless you expect to be able to achieve the required outcome within 24 hours.
  - We have a number of people working on this and a very tight deadline for release so we need a quick turnaround. Don't worry, there will be plenty of work with less stressful timelines as a result of the upcoming Website Redesign project 👍
- The desired outcome of this task is to make the new site **pixel perfect** with the old site, so if you are not reasonably proficient with CSS this might be a challange (especially with the required 24 hour turnaround)

## Supporting information

We are in the final stages of the project to convert the Ember Website into an Ember app 🎉 Even though it may seem like the most difficult part is behind us the **last mile** can often be the hardest.

The original requirement of this site was to convert the technology but to **not** change the design in any way. As such we have set up a PR that uses Percy to check all **visual changes** against the previous website. https://github.com/ember-learn/ember-website/pull/185

Our Goal now is to make the number of Percy differences in that PR be as small as possible. We are no longer merging anything to master, all new PRs are being merged into the `percy-magic` branch so that we can check it against master with Percy before merging.

If you want to get involved with this issue please comment on it to say that you are interested in contributing and we will move it into in-progress. **Note:** as it states above we need this to be turned around within 24 hours so if you don't complete it within that time it might need to be reassigned 👍 Please keep in contact with Chris Manson (@real_ate) in the Ember Community Discord at all times.

When updating the styles for the specified page you should have the existing website open in a tab next to this app running locally. If you swap between your tab and production and there is no change or movement then you are good to submit your PR.

**Make sure to target the `percy-magic` branch** when submitting your PR 👍
