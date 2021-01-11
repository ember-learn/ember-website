import { helper } from '@ember/component/helper';
import { htmlSafe as _htmlSafe } from '@ember/template';

export default helper(function htmlSafe([htmlCode]) {
  return _htmlSafe(htmlCode);
});
