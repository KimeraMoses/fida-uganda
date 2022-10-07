import React from "react";
import {
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { MdOutlineDelete } from "react-icons/md";

export const DeletePopup = ({
  handleDelete,
  isLoading,
  record,
  name,
  onClick,
  Icon,
}) => {
  const initRef = React.useRef();
  return (
    <Popover initialFocusRef={initRef}>
      {({ onClose }) => (
        <>
          <PopoverTrigger>
            <IconButton
              size="sm"
              variant="outline"
              aria-label="Delete Item"
              icon={Icon ? Icon : <MdOutlineDelete />}
              onClick={onClick ? onClick : null}
            />
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader color="purple.500" fontSize="3xl" py={5}>
              Confirm Delete
            </PopoverHeader>
            <PopoverBody>
              Are you sure you wish to delete <strong>{name}</strong>? This
              action is permanent and can not be undone
            </PopoverBody>
            <PopoverFooter
              border="0"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              pb={4}
            >
              <ButtonGroup size="sm">
                <Button colorScheme="green" onClick={onClose} ref={initRef}>
                  Cancel
                </Button>
                <Button
                  colorScheme="red"
                  onClick={() => {
                    handleDelete(record.id);
                    onClose();
                  }}
                >
                  {isLoading ? "Deleting..." : "Delete"}
                </Button>
              </ButtonGroup>
            </PopoverFooter>
          </PopoverContent>
        </>
      )}
    </Popover>
  );
};
