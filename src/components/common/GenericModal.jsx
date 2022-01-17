import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";

function GenericModal({ isOpen, onClose, children }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="56rem">{children}</ModalContent>
    </Modal>
  );
}

export default GenericModal;
