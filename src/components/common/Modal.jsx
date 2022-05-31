import {
  Modal as ChakraModal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
} from "@chakra-ui/react";

const Modal = ({
  isOpen,
  onClose,
  title,
  isCentered,
  size = "lg",
  children,
}) => {
  return (
    <ChakraModal
      isOpen={isOpen}
      onClose={onClose}
      size={size}
      isCentered={isCentered ? true : false}
    >
      <ModalOverlay />
      <ModalContent>
        {title && (
          <ModalHeader style={{ fontWeight: "700" }}>{title}</ModalHeader>
        )}
        {children}
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
