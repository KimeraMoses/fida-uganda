const sortByDate = (arr) => {
  const sorter = (a, b) => {
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
  };
  arr.sort(sorter);
  return arr;
};

export default sortByDate;
