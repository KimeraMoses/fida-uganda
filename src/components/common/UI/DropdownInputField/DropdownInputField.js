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
  } = props;

  return (
    <div className={classes.gpa__custom_text_field_wrapper}>
      <>
        <InputField
          placeholder={placeholder}
          type="search"
          name="search"
          fullwidth={true}
          disabled={false}
          value={isSelected ? selectedItem : searchTerm}
          onChange={keyWordHandler}
        />

        {searchTerm.length > 1 && (
          <>
            <div className={classes.gpa__custom_text_field_result_dropdown}>
              {searchResults.length > 0 ? (
                <ul className={classes.gpa__custom_text_field_results}>
                  {searchTerm &&
                    searchResults.map((result: any) => {
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
                <div className="overflow-hidden absolute top-0 right-0 left-0 m-0 border-0 bg-background z-2 rounded pt-2 px-4 pb-3 shadow-md">
                  Ooops, No match for{" "}
                  <strong className="text-primary">{searchTerm}</strong> found!
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
