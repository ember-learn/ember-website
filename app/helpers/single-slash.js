import { helper } from '@ember/component/helper';

export function singleSlash(params/*, hash*/) {
  let [ url ] = params;

  if(url.match(/^\/\//)) {
    return url.replace(/^\//, '');
  } else if(!url.match(/^\//)) {
    return `/${url}`;
  }

  return url;
}

export default helper(singleSlash);
