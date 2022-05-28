const daysDifference = (startDate, endDate) => {
  const diffInMs = new Date(endDate) - new Date(startDate);
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  return diffInDays;
};

export default daysDifference;
