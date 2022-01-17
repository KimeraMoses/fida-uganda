import { useEffect, useState } from "react";

const useTable = (data, page, rowsPerPage) => {
  const [range, setRange] = useState([]);
  const [slice, setSlice] = useState([]);

  const calculateRange = (data, rowsPerPage) => {
    const range = [];
    const totalPages = Math.ceil(data.length / rowsPerPage);
    for (let i = 1; i <= totalPages; i++) {
      range.push(i);
    }
    return range;
  };

  const sliceData = (data, page, rowsPerPage) => {
    return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
  };

  useEffect(() => {
    const range = calculateRange(data, rowsPerPage);
    setRange([...range]);
    const slice = sliceData(data, page, rowsPerPage);
    setSlice([...slice]);
  }, [data, setRange, setSlice, page, rowsPerPage]);

  return { slice, range };
};

export default useTable;
