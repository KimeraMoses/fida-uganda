export const downloadFile = (data, type = "octet-stream", name = "myData.txt") => {
    const blob = new Blob([data], { type });
    const href = window.URL.createObjectURL(blob);
    return { name, href };
  };
  
  // convert an array of objects to a csv string
  export const arrayToCsv = (data, keys) => {
    const csvRows = [];
    csvRows.push(keys.join(","));
    data.forEach((row) => {
      const csvRow = keys.map((key) => row[key]);
      csvRows.push(csvRow.join(","));
    });
    return csvRows.join("\n");
  };