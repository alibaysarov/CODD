import { Divider, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
interface Props {
    onClose: () => void,
    isOpen: boolean
}
const InfoModal = ({ isOpen, onClose }: Props) => {
    const { t } = useTranslation();
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent mx={"11px"}>
                <ModalHeader textAlign={"center"} />
                <ModalCloseButton w={"30px"} h={"30px"} />
                <ModalBody>
                    <Flex direction={"column"} gap={"15px"}>
                        <Flex alignItems={"center"} direction={"row"} justifyContent={"space-between"}>
                            <Text fontSize={"md"} fontWeight={400}>{t("infoModal.yourNumberIf")}</Text>
                            <Text fontSize={"md"} color={"brand_accent.500"} fontWeight={700}>{t("infoModal.greenZone")}</Text>
                        </Flex>
                        <Divider bg={"gray.70"} />
                        <Flex alignItems={"center"} direction={"row"} justifyContent={"space-between"}>
                            <Text fontSize={"md"} fontWeight={400}>{t("infoModal.followCheckpoint")}</Text>
                            <Text whiteSpace={"nowrap"} fontSize={"md"} fontWeight={700}>{t("infoModal.upperLars")}</Text>
                        </Flex>
                        <Divider bg={"gray.70"} />
                        <Flex alignItems={"center"} direction={"row"} justifyContent={"space-between"}>
                            <Text fontSize={"md"} fontWeight={400}>{t("infoModal.endOfTheDrive")}</Text>
                            <Text whiteSpace={"nowrap"} fontSize={"md"} color={"brand_secondary.500"} fontWeight={700}>{t("infoModal.time")}</Text>
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