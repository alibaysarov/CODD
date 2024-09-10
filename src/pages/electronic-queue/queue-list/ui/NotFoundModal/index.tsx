import { Divider, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, VStack } from '@chakra-ui/react';

interface Props {
    onClose: () => void,
    title: string,
    isOpen: boolean
}
const NotFoundModal = ({ isOpen, onClose, title }: Props) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent mx={"11px"}>
                <ModalHeader textAlign={"center"} />
                <ModalCloseButton w={"30px"} h={"30px"} />
                <ModalBody>
                    <VStack gap={"15px"} align={"center"}>
                        <Text fontSize={"lg"} fontWeight={700}>{title}</Text>
                        <Divider bg={"gray.70"} />
                        <Text fontSize={"sm"}>Номер не найден</Text>
                    </VStack>
                </ModalBody>

                <ModalFooter>

                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default NotFoundModal;