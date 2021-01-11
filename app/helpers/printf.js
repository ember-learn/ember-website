import { helper } from '@ember/component/helper';

export default helper(function printf([string = '', replacement = '']) {
  return string.replace(/%s/g, replacement);
});
