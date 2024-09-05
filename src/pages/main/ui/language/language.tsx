import { Icons } from '../../../../icons';
import { Button, IconButton, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import CountryList from '../country-list/country-list';

const Language = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <IconButton
                onClick={onOpen}
                colorScheme={"tranparent"}
                padding={"1px"}
                icon={<Icons.RussiaIcon />}
                aria-label={'lang'}
            />
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent px={"35px"} py={"40px"} maxW={"80%"}>
                    <ModalHeader pt={0} textAlign={"center"}>
                        Выберите язык
                        <Text as={"p"} color={"grey"} fontSize={"md"}>Select  language</Text>
                    </ModalHeader>
                    <ModalBody px={{ base: "0px" }} justifyContent={"center"}>
                        <CountryList />
                    </ModalBody>

                    <ModalFooter p={0}>
                        <Button w={"100%"} colorScheme='brand_accent' mr={3} onClick={onClose}>
                            Ок
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default Language;