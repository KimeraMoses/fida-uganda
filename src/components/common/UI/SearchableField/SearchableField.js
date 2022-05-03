import { useState } from "react";
import DropdownInputField from "../DropdownInputField/DropdownInputField";

const SearchableField = ({
  data,
  setSelectedItem,
  placeholder,
  name,
  selectedItem,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearched, setSearched] = useState(false);

  const selectedItemHandler = (result) => {
    setSearched(true);
    setSelectedItem(result);
    setSearchTerm("");
  };

  const keyWordSearchHandler = (e) => {
    setSelectedItem("");
    setSearched(false);
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
      selectedItem={selectedItem}
      searchResults={searchResults}
      itemClickHandler={selectedItemHandler}
      name={name}
      isSelected={isSearched}
    />
  );
};
export default SearchableField;
