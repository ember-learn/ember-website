import { helper } from '@ember/component/helper';
import moment from 'moment';

export function formatDateTime([date, format]/*, hash*/) {
  if (format) { return moment(date).format(format); }

  return moment(date).fromNow();
}

export default helper(formatDateTime);
