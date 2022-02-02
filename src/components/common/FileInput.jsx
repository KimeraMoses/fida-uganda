import { useRef, useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function FileInput({
  onChange,
  onFileSelectSuccess,
  name = "file",
  accept = "image/png, image/jpeg",
}) {
  const fileInput = useRef(null);
  const [error, setError] = useState("");

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file.size > 10485760) {
      const error = "File size cannot exceed more than 10MB";
      setError(error);
    } else onFileSelectSuccess(file);
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
        borderRadius="full"
        bgColor="purple.500"
        color="white"
        px="2.5rem"
        _hover={{ bgColor: "purple.700" }}
      >
        Upload
      </Button>
      {error && <Text color="red">{error}</Text>}
    </div>
  );
}

export default FileInput;
