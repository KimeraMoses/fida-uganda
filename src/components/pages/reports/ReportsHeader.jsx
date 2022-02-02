import { useState } from "react";
import { Flex, Box, Input } from "@chakra-ui/react";
import FileInput from "../../common/FileInput";

function ReportsHeader() {
  const [search, setSearch] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    alert(formData);
  };

  return (
    <Flex
      align="center"
      justifyContent="space-between"
      p="1rem"
      bgColor="white"
      boxShadow="lg"
      borderTopRadius="lg"
      mt="2rem"
      gap="2rem"
    >
      <Input
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Box as="form" onSubmit={handleSubmit}>
        <FileInput
          onFileSelectSuccess={(file) => setFile(file)}
          onFileSelectError={(error) => console.log(error)}
        />
      </Box>
    </Flex>
  );
}

export default ReportsHeader;
