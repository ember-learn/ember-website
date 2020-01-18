import { helper } from '@ember/component/helper';
import { DateTime } from 'luxon';

export function formatDateTime([date, format]) {
  let defaultFormat = 'MMM d';
  return DateTime.fromJSDate(date).toFormat(format ? format : defaultFormat);
}

export default helper(formatDateTime);
