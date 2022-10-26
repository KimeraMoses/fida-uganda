export const getMonthName = (date) => {
  //fix app crashing after leave remarks submission
  function dateIsValid(date) {
    return !Number.isNaN(new Date(date).getTime());
  }

  if (dateIsValid(date)) {
    return new Intl.DateTimeFormat("en-US", { month: "long" }).format(
      new Date(date)
    );
  } else {
    // 👇️ this runs
    // console.log('not a valid date');
  }
};

export const getDay = (date) => {
  return new Date(date).getDay();
};
