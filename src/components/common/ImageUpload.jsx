import { IconButton, Text } from "@chakra-ui/react";
import { useState, useRef } from "react";
import { MdAddAPhoto } from "react-icons/md";

function ImageUpload({
  name = "image",
  accept = "image/png, image/jpeg",
  onFileSelectSuccess,
  getFile,
}) {
  const imageInput = useRef(null);
  const [error, setError] = useState("");

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file.size > 2097152) {
      const error = "File size cannot exceed more than 2MB";
      setError(error);
    } else {
      const url = URL.createObjectURL(file);
      getFile(file)
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
        ref={imageInput}
        style={{ display: "none" }}
      />
      <IconButton
        alignSelf="center"
        h="6rem"
        w="6rem"
        colorScheme="gray"
        aria-label="profile picture upload"
        borderRadius="full"
        icon={<MdAddAPhoto color="purple" size={40} />}
        onClick={(e) => imageInput.current && imageInput.current.click()}
      />
      {error && <Text>{error}</Text>}
    </>
  );
}

export default ImageUpload;
