import { useState } from "react";
import DropdownInputField from "../../common/UI/DropdownInputField/DropdownInputField";

const MultSelect = ({ data, selectedItemHandler, placeholder }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  // const [show, setShow] = useState(false);
  //   console.log(data);

  //   const selectedItemHandler = (result) => {
  //     console.log(result);
  //     tags.push(result);
  //   };

  const keyWordSearchHandler = (e) => {
    const { value } = e.target;
    setSearchTerm(value);

    if (searchTerm !== "") {
      const Results = data.filter((Result) => {
        return Object.values(Result)
          .join(" ")
          .replace(/-/g, " ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(Results);
    }
  };

  return (
    <DropdownInputField
      placeholder={placeholder}
      keyWordHandler={keyWordSearchHandler}
      searchTerm={searchTerm}
      searchResults={searchResults}
      itemClickHandler={selectedItemHandler}
    />
  );
};
export default MultSelect;
