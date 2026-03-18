export const getTodaysDate = () => {
  const getYear = `${new Date().getFullYear()}`;
  let getMonth = `${new Date().getMonth() + 1}`;
  let getDay = `${new Date().getDate()}`;

  getDay = parseInt(getDay, 10) < 10 ? getDay = `0${getDay}` : getDay;
  getMonth = parseInt(getMonth, 10) < 10 ? getMonth = `0${getMonth}` : getMonth;

  return {
    yyyy_mm_dd: `${getYear}-${getMonth}-${getDay}`,
    mm_dd_yyyy: `${getMonth}-${getDay}-${getYear}`,
    dd_mm_yyyy: `${getDay}-${getMonth}-${getYear}`,
  };
};
