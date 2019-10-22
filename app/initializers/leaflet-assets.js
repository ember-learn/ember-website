export default {
  name: 'leaflet-assets',
  initialize() {
    // This is to override ember-leaflet's default initializer which prevents from dynamically loading leaflet.js
    // https://github.com/miguelcobain/ember-leaflet/issues/366
    // can be removed once https://github.com/miguelcobain/ember-leaflet/pull/367 is merged    
  }
};
