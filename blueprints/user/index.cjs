/* eslint-env node */
module.exports = {
  description: 'Simple Blueprint to add an Ember User',

  locals() {
    return {
      date: new Date().toISOString(),
    };
  },
};
