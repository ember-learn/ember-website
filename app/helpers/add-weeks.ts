import { helper } from '@ember/component/helper';
import dayjs from 'dayjs';

export default helper(function addWeeks([initialDate, numWeeks = 0]) {
  return dayjs(initialDate).add(numWeeks, 'week');
});
