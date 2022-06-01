export const getMonthName = (date) => {
  return new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    new Date(date)
  );
};

export const getDay = (date) => {
  return new Date(date).getDay();
};
