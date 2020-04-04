import { helper } from '@ember/component/helper';

export default helper(
  function addWeeks([initialDate, numWeeks = 0]) {
    let finalDate = new Date(initialDate);

    finalDate.setDate(finalDate.getDate() + 7 * numWeeks);

    return finalDate;
  }
);