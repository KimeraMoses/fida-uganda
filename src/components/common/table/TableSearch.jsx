import {
  Flex,
  Button,
  Input,
  Menu,
  MenuButton,
  IconButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { SiMicrosoftexcel } from "react-icons/si";
import { AiOutlineFilePdf } from "react-icons/ai";

import { MdFilterList, MdAdd, MdMoreVert } from "react-icons/md";

function TableSearch({
  handleDownload,
  downloadExcel,
  downloadMetaData,
  onSearchHandler,
  searchTerm,
  btnLabel,
  btnClick,
  showBtn = true,
}) {
  return (
    <Flex
      as="form"
      width="100%"
      gap={3}
      my="2rem"
      p="1rem"
      bgColor="white"
      borderRadius="xl"
    >
      <Button leftIcon={<MdFilterList />} color="blackAlpha.800" px="2rem">
        Filter
      </Button>
      <Input
        placeholder="Search"
        type="search"
        value={searchTerm}
        onChange={onSearchHandler}
      />
      {showBtn && (
        <Button
          leftIcon={<MdAdd />}
          borderRadius="full"
          bgColor="purple.500"
          color="white"
          px="2.5rem"
          _hover={{ bgColor: "purple.700" }}
          onClick={btnClick}
        >
          {btnLabel}
        </Button>
      )}
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Table Options"
          variant="ghost"
          icon={<MdMoreVert />}
        />
        <MenuList>
          <MenuItem
            onClick={handleDownload}
            icon={<AiOutlineFilePdf size={20} />}
          >
            Export As Pdf
          </MenuItem>

          <MenuItem
            onClick={downloadExcel}
            icon={<SiMicrosoftexcel size={20} />}
          >
            Export As Excel
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default TableSearch;
