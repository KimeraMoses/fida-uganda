import { useState } from "react";
import { Box, Button, Center, Text } from "@chakra-ui/react";
import FileInput from "../../common/FileInput";

function ReportUpload() {
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    alert(formData);
  };

  return (
    <Box as="form" onSubmit={handleSubmit} borderRadius="3xl">
      <Center p="1rem">
        <FileInput onFileSelectSuccess={setFile} />
      </Center>
      <Box
        h="20rem"
        bgColor="purple.100"
        mt="1rem"
        p="2rem"
        borderBottomRadius="3xl"
      >
        <Box
          border="1px"
          borderStyle="dashed"
          height="100%"
          borderRadius="3xl"
          borderColor="gray.500"
        >
          <Center h="100%">
            <Text color="gray.500">
              Click to browse or drag and drop your files
            </Text>
          </Center>
        </Box>
      </Box>
      {file && <Button type="submit">Upload</Button>}
    </Box>
  );
}

export default ReportUpload;
