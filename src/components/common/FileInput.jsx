import { Button } from "@chakra-ui/react";
import { useRef } from "react";
import { MdAdd } from "react-icons/md";

function FileInput(
  onFileSelectError,
  onFileSelectSuccess,
  name = "file",
  accept = "image/png, image/jpeg"
) {
  const fileInput = useRef(null);

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file.size > 5120)
      onFileSelectError("File size cannot exceed more than 5MB");
    else onFileSelectSuccess(file);
  };

  return (
    <div>
      <input
        type="file"
        name={name}
        accept={accept}
        onChange={handleFileInput}
        ref={fileInput}
        style={{ display: "none" }}
      />
      <Button
        onClick={(e) => fileInput.current && fileInput.current.click()}
        leftIcon={<MdAdd />}
        borderRadius="full"
        bgColor="purple.500"
        color="white"
        px="2.5rem"
        _hover={{ bgColor: "purple.700" }}
      >
        Upload
      </Button>
    </div>
  );
}

export default FileInput;
