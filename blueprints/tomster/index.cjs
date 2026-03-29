/* eslint-env node */
module.exports = {
  description: 'Simple Blueprint to add a tomster',

  locals() {
    return {
      date: new Date().toISOString(),
    };
  },
};
