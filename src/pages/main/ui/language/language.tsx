
import { Button, IconButton, Img, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import CountryList from '../country-list/country-list';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Language = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [language, setLanguage] = useState("ru");
    const langIcons: Record<string, string> = {
        "ru": "/countries/Russia.png",
        "tr": "/countries/Turkey.png",
        "ge": "/countries/Georgia.png",
        "am": "/countries/Armenia.png",
        "en": "/countries/England.png",
    }
    const { i18n } = useTranslation();
    useEffect(() => {
        const handleLangChange = (lng: string) => {
            setLanguage(lng);
        }
        i18n.on("languageChanged", handleLangChange)
        return () => {
            i18n.off("languageChanged", handleLangChange);
        }
    }, [])
    const { t } = useTranslation()
    return (
        <>
            <IconButton
                onClick={onOpen}
                colorScheme={"tranparent"}
                padding={"1px"}
                icon={<Img borderRadius={"5px"} src={langIcons[language]} w={"25px"} h={"25px"} />}
                aria-label={'lang'}
            />
            {/* <Icons.RussiaIcon /> */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent px={"35px"} py={"40px"} maxW={"80%"}>
                    <ModalHeader pt={0} textAlign={"center"}>
                        {t("chooseLang")}
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