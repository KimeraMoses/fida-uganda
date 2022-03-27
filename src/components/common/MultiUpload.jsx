import { useRef } from "react";
import { Flex, IconButton, List, ListIcon, ListItem } from "@chakra-ui/react";
import { MdFilePresent, MdAttachFile } from "react-icons/md";
import { produce } from "immer";

const MultiUpload = ({ files, setFiles }) => {
  const input = useRef(null);
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setFiles((preFiles) =>
      produce(preFiles, (draft) => {
        draft.push(file);
      })
    );
  };

  return (
    <Flex
      gap={10}
      bgColor="purple.100"
      p={5}
      borderRadius={10}
      flexDir="column"
      border="1px"
      borderColor="purple.300"
    >
      <input
        type="file"
        ref={input}
        onChange={handleFileSelect}
        style={{ display: "none" }}
        accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,
text/plain, application/pdf, image/*"
      />
      <List spacing={3}>
        {files.map((file, index) => {
          return (
            <ListItem key={index}>
              <ListIcon as={MdFilePresent} color="purple.700" />
              {file.name}
            </ListItem>
          );
        })}
      </List>
      <IconButton
        alignSelf="start"
        color="purple.800"
        icon={<MdAttachFile size={20} />}
        onClick={(e) => input.current && input.current.click()}
      />
    </Flex>
  );
};

export default MultiUpload;
