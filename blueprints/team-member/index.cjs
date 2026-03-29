/* eslint-env node */
module.exports = {
  description: 'Simple Blueprint to add an Ember Team-Member',

  locals() {
    return {
      date: new Date().toISOString(),
    };
  },
};
