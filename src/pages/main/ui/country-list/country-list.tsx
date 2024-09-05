import { Box, Flex, Img, Text } from '@chakra-ui/react';
const CountryList = () => {
    const viewBox = "0 0 56 56"
    const countries = [
        {
            icon: <Img src={'/countries/Russia.png'} width={"56px"} height={"56px"} />,
            text: "Россия",
        },
        {
            icon: <Img src={'/countries/Turkey.png'} width={"56px"} height={"56px"} />,
            text: "Türk"
        },
        {
            icon: <Img src={'/countries/Georgia.png'} width={"56px"} height={"56px"} />,
            text: "ქართული"
        },
        {
            icon: <Img src={'/countries/Armenia.png'} width={"56px"} height={"56px"} />,
            text: "հայկ"
        },
        {
            icon: <Img src={'/countries/England.png'} width={"56px"} height={"56px"} />,
            text: "England"
        }
    ];
    return (
        <Flex p={"27px"} direction={"column"} gap={"20px"}>
            {
                countries.map(country => (
                    <Box
                        borderRadius={"5px"}
                        padding={"3px"}
                        transitionTimingFunction={"ease"}
                        transitionDelay={"200"} _hover={{
                            transform: "translateY(-5px)",
                            transitionDuration: "350ms",
                            boxShadow: "0px 4px 9.09px #0A488280"
                        }}>
                        <Flex gap={31} alignItems={"center"}>
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