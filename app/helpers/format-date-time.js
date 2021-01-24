import { helper } from '@ember/component/helper';
import dayjs from 'dayjs';

export default helper(function formatDateTime([date, format = 'MMM D']) {
  if (!date) {
    return 'Unknown date';
  }

  return dayjs(date).format(format);
});
