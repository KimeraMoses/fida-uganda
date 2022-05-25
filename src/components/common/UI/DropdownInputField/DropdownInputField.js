import InputField from "../InputField/InputField";
import classes from "./DropdownInputField.module.css";

const DropdownInputField = (props) => {
  const {
    selectedItem,
    searchTerm,
    isSelected,
    keyWordHandler,
    searchResults,
    itemClickHandler,
    placeholder,
    name,
    disabled,
  } = props;

  return (
    <div className={classes.gpa__custom_text_field_wrapper}>
      <>
        <InputField
          placeholder={placeholder}
          type="search"
          name={name}
          fullwidth={true}
          disabled={disabled || false}
          value={isSelected ? selectedItem : searchTerm}
          onChange={keyWordHandler}
        />

        {searchTerm.length > 1 && (
          <>
            <div className={classes.gpa__custom_text_field_result_dropdown}>
              {searchResults.length > 0 ? (
                <ul className={classes.gpa__custom_text_field_results}>
                  {searchTerm &&
                    searchResults.map((result) => {
                      return (
                        <li
                          onClick={() => itemClickHandler(result)}
                          key={result.id}
                        >
                          {result.name}
                        </li>
                      );
                    })}
                </ul>
              ) : (
                <div className={classes.no_results_wrapper}>
                  Oops, No match for <strong>{searchTerm}</strong> found!
                </div>
              )}
            </div>
          </>
        )}
      </>
    </div>
  );
};

export default DropdownInputField;
