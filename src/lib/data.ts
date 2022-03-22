export const formatDate = (date: string) => {
  const d = new Date(date).toDateString();
  const dArr = d.split(" ");
  return `${dArr[2]} ${dArr[1]}, ${dArr[3]}`;
};
