import { computed } from "@ember/object";
import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  router: service(),

  isIndexActive: computed("router.currentRouteName", function() {
    return this.isActiveChannel("index");
  }),

  isTaggedActive: computed("router.currentRouteName", function() {
    return this.isActiveChannel("tagged");
  }),

  isChannelsActive: computed("router.currentRouteName", function() {
    return !["index", "tagged"].some(name => name === this.currentRouteName);
  }),

  isReleaseActive: computed("router.currentRouteName", function() {
    return this.isActiveChannel("release");
  }),

  isBetaActive: computed("router.currentRouteName", function() {
    return this.isActiveChannel("beta");
  }),

  isCanaryActive: computed("router.currentRouteName", function() {
    return this.isActiveChannel("canary");
  }),

  isActiveChannel(channel) {
    return this.router.currentRouteName.includes(channel);
  }
});
