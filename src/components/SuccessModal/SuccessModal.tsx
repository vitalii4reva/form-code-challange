import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

type SuccessModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SuccessModal = ({ isOpen, onClose }: SuccessModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Registration Successful</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Your registration was successful. Thank you for signing up!</ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SuccessModal;
