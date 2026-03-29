/* eslint-env node */
module.exports = {
  description: 'Simple Blueprint to add a Sponsor',

  locals() {
    return {
      date: new Date().toISOString(),
    };
  },
};
