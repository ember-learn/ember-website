import { helper } from '@ember/component/helper';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

interface FormatDateTimeSignature {
  Args: {
    Named: {};
    Positional: [date?: string | Date | Dayjs, format?: string];
  };
  Return: string;
}

export default helper<FormatDateTimeSignature>(function formatDateTime([
  date,
  format = 'MMM D',
]) {
  if (!date) {
    return 'Unknown date';
  }

  return dayjs(date).format(format);
});
