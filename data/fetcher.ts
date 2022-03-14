export const fetcher = async (url: string) => {
  const res = await fetch(url);
  console.log(res);
  const data = await res.json();

  return data;
};
