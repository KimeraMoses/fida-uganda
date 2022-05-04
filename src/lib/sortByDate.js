const sortByDate = (arr) => {
  const sorter = (a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  };
  arr.sort(sorter);
  return arr;
};

export default sortByDate;
