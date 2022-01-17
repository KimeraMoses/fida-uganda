import { HStack, IconButton } from "@chakra-ui/react";
import {
  BiChevronRight,
  BiChevronsRight,
  BiChevronLeft,
  BiChevronsLeft,
} from "react-icons/bi";

function PaginationButtons({
  gotoPage,
  canPreviousPage,
  previousPage,
  canNextPage,
  nextPage,
  pageCount,
}) {
  return (
    <HStack>
      <IconButton
        icon={<BiChevronsLeft />}
        onClick={() => gotoPage(0)}
        disabled={!canPreviousPage}
      />
      <IconButton
        icon={<BiChevronLeft />}
        onClick={() => previousPage()}
        disabled={!canPreviousPage}
      />
      <IconButton
        icon={<BiChevronRight />}
        onClick={() => nextPage()}
        disabled={!canNextPage}
      />
      <IconButton
        icon={<BiChevronsRight />}
        onClick={() => gotoPage(pageCount - 1)}
        disabled={!canNextPage}
      />
    </HStack>
  );
}

export default PaginationButtons;
