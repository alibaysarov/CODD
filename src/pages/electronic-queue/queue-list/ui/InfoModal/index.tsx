import { Divider, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react';
interface Props {
    onClose: () => void,
    isOpen: boolean
}
const InfoModal = ({ isOpen, onClose }: Props) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent mx={"11px"}>
                <ModalHeader textAlign={"center"} />
                <ModalCloseButton w={"30px"} h={"30px"} />
                <ModalBody>
                    <Flex direction={"column"} gap={"15px"}>
                        <Flex alignItems={"center"} direction={"row"} justifyContent={"space-between"}>
                            <Text fontSize={"md"} fontWeight={400}>Если ваш номер в</Text>
                            <Text fontSize={"md"} color={"brand_accent.500"} fontWeight={700}>Зеленой зоне</Text>
                        </Flex>
                        <Divider bg={"gray.70"} />
                        <Flex alignItems={"center"} direction={"row"} justifyContent={"space-between"}>
                            <Text fontSize={"md"} fontWeight={400}>{"Следуйте на\n\n пропускной пункт"}</Text>
                            <Text whiteSpace={"nowrap"} fontSize={"md"} fontWeight={700}>“Верхний Ларс”</Text>
                        </Flex>
                        <Divider bg={"gray.70"} />
                        <Flex alignItems={"center"} direction={"row"} justifyContent={"space-between"}>
                            <Text fontSize={"md"} fontWeight={400}>Окончание проезда
                                до МАПП «Верхний Ларс»</Text>
                            <Text whiteSpace={"nowrap"} fontSize={"md"} color={"brand_secondary.500"} fontWeight={700}>8 часов</Text>
                        </Flex>
                    </Flex>
                </ModalBody>

                <ModalFooter>

                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default InfoModal;