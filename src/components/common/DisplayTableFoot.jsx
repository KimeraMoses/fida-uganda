import {
  HStack,
  Select,
  Text,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import PaginationButtons from "./PaginationButtons";

function DisplayTableFoot({
  gotoPage,
  canPreviousPage,
  previousPage,
  canNextPage,
  nextPage,
  pageCount,
  pageOptions,
  pageIndex,
  pageSize,
  setPageSize,
}) {
  const bg = useColorModeValue("gray.100", "gray.700");

  return (
    <HStack
      bgColor={bg}
      width="100%"
      p={3}
      gap="3rem"
      justifyContent="flex-end"
    >
      <HStack>
        <Text fontWeight="bold">Go to page</Text>
        <Input type="number" size="sm" width="4rem" borderColor="gray.400" />
      </HStack>
      <Text>
        Page{" "}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>
      </Text>
      <HStack>
        <Text fontWeight="bold">Rows per page</Text>
        <Select
          borderColor="gray.400"
          width="auto"
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 15, 20, 25].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </HStack>
      <PaginationButtons
        gotoPage={gotoPage}
        canPreviousPage={canPreviousPage}
        previousPage={previousPage}
        canNextPage={canNextPage}
        nextPage={nextPage}
        pageCount={pageCount}
      />
    </HStack>
  );
}

export default DisplayTableFoot;
