import { useRef, useState } from "react";
import { Button, useToast } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";

function FileInput({
  onFileSelectSuccess,
  getFile,
  name = "file",
  accept = "image/png, image/jpeg",
}) {
  const fileInput = useRef(null);
  const [error, setError] = useState("");
  const toast = useToast();

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file.size > 10485760) {
      const error = "File size cannot exceed more than 10MB";
      setError(error);
      toast({
        title: "Error",
        description: error,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      error && setError("");
      const url = URL.createObjectURL(file);
      getFile(file);
      onFileSelectSuccess(url);
    }
  };

  return (
    <>
      <input
        type="file"
        name={name}
        accept={accept}
        onChange={handleFileInput}
        ref={fileInput}
        style={{ display: "none" }}
      />
      <Button
        leftIcon={<MdAdd />}
        onClick={(e) => fileInput.current && fileInput.current.click()}
        borderRadius="full"
        bgColor="purple.500"
        color="white"
        px="2.5rem"
        _hover={{ bgColor: "purple.700" }}
      >
        Upload Report
      </Button>
    </>
  );
}

export default FileInput;
