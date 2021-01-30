const highchartsOptions = {
  credits: {
    enabled: false,
  },

  plotOptions: {
    series: {
      shadow: false,
    },
  },

  time: {
    timezoneOffset: new Date().getTimezoneOffset(),
  },
};

export { highchartsOptions };
