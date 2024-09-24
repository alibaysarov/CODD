import { Box, Flex, Img, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
const CountryList = () => {
    const { i18n } = useTranslation();
    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("userLanguage", lang)
    }
    const countries = [
        {
            icon: <Img src={'/countries/Russia.png'} width={"56px"} height={"56px"} />,
            text: "Россия",
            code: "ru"
        },
        {
            icon: <Img src={'/countries/Turkey.png'} width={"56px"} height={"56px"} />,
            text: "Türk",
            code: "tr"
        },
        {
            icon: <Img src={'/countries/Georgia.png'} width={"56px"} height={"56px"} />,
            text: "ქართული",
            code: "ge"
        },
        {
            icon: <Img src={'/countries/Armenia.png'} width={"56px"} height={"56px"} />,
            text: "հայկ",
            code: "am",
        },
        {
            icon: <Img src={'/countries/England.png'} width={"56px"} height={"56px"} />,
            text: "England",
            code: "en",
        },
    ];
    return (
        <Flex p={{ base: "0px", sm: "27px" }} direction={"column"} gap={"20px"}>
            {
                countries.map(country => (
                    <Box
                        onClick={() => changeLanguage(country.code)}
                        borderRadius={"5px"}
                        padding={"3px"}
                        transitionTimingFunction={"ease"}
                        transitionDelay={"200"} _hover={{
                            transform: "translateY(-5px)",
                            transitionDuration: "350ms",
                            boxShadow: "0px 4px 9.09px #0A488280"
                        }}>
                        <Flex gap={{ base: "15px", sm: "31px" }} alignItems={"center"}>
                            {country.icon}
                            <Text as={"p"}>{country.text}</Text>
                        </Flex>
                    </Box>
                ))
            }
        </Flex>
    );
};

export default CountryList;