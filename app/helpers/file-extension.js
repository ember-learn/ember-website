import { helper } from '@ember/component/helper';

export default helper(function fileExtension([filename]) {
  // taken from https://stackoverflow.com/a/12900504 for optimal performance
  return filename.slice(((filename.lastIndexOf('.') - 1) >>> 0) + 2);
});
