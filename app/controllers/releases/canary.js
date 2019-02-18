import Controller from "@ember/controller";
import { computed } from "@ember/object";
import ProjectsMixin from "../../mixins/projects";

export default Controller.extend(ProjectsMixin, {
  channel: "canary",
  channelDescription:
    "Canary releases are generated from each commit to the master branch of Ember and Ember Data. These builds are not suitable for use in production, and may contain unstable features disabled behind a flag.",

  installWithEmberCLI: computed("model.assetPath", function() {
    return `# Install the latest Ember canary:
npm install --save-dev https://s3.amazonaws.com/builds.emberjs.com${this.model.assetPath}`;
  })
});
