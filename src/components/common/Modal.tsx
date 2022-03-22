import {
  Modal as ChakraModal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: "md" | "lg" | "xl" | "full";
  children?: React.ReactNode;
};

const Modal = ({ isOpen, onClose, title, size = "lg", children }: Props) => {
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
