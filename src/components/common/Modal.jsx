import {
  Modal as ChakraModal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
} from "@chakra-ui/react";

const Modal = ({ isOpen, onClose, title, size = "lg", children }) => {
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

export default Modal;
