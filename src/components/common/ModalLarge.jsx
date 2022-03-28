import {
  Modal as ChakraModal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
} from "@chakra-ui/react";

const ModalLarge = ({ isOpen, onClose, title, size = "6xl", children }) => {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose} size={size}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        {children}
      </ModalContent>
    </ChakraModal>
  );
};

export default ModalLarge;
