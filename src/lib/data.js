export const formatDate = (date) => {
  const d = new Date(date).toDateString();
  const dArr = d.split(" ");
  return `${dArr[2]} ${dArr[1]}, ${dArr[3]}`;
};

export const upperCaseFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
