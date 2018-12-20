import AssetMapHelper from 'ember-cli-ifa/helpers/asset-map';

export default AssetMapHelper.extend({
  compute() {
    let url = this._super(...arguments);

    if(url.match(/^\/\//)) {
      return url.replace(/^\//, '');
    } else if(!url.match(/^\//)) {
      return `/${url}`;
    }

    return url;
  }
});
