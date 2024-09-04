import { Box, Flex, Text } from '@chakra-ui/react';
import { Icons } from '../../../../icons';
const CountryList = () => {
    const countries = [
        {
            icon: <Icons.RussiaIcon width={56} height={56} />,
            text: "Россия",
        },
        {
            icon: <Icons.TurkeyIcon width={56} height={56} />,
            text: "Türk"
        },
        {
            icon: <Icons.GeorgiaIcon width={56} height={56} />,
            text: "ქართული"
        },
        {
            icon: <Icons.ArmeniaIcon width={56} height={56} />,
            text: "հայկ"
        },
        {
            icon: <Icons.UKIcon width={56} height={56} />,
            text: "England"
        }
    ];
    return (
        <Flex p={"27px"} direction={"column"} gap={"20px"}>
            {
                countries.map(country => (
                    <Box borderRadius={"5px"} transitionTimingFunction={"ease"} transitionDelay={"200"} _hover={{
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