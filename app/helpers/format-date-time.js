import { helper } from '@ember/component/helper';
import { DateTime } from 'luxon';

export default helper(function formatDateTime([date, format = 'MMM d']) {
  return DateTime.fromJSDate(date).toFormat(format);
});
