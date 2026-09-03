import { helper } from '@ember/component/helper';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

interface AddWeeksSignature {
  Args: {
    Named: {};
    Positional: [initialDate: string | Date | Dayjs, numWeeks?: number];
  };
  Return: Dayjs;
}

export default helper<AddWeeksSignature>(function addWeeks([
  initialDate,
  numWeeks = 0,
]) {
  return dayjs(initialDate).add(numWeeks, 'week');
});
