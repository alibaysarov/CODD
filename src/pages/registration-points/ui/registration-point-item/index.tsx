import { Box, Flex, Text, Divider } from '@chakra-ui/react';
import { GeoIcon } from '../../../../icons/icons';


interface Props {

    location: string,
    description: string
}
const RegistrationPointItem = ({ description, location }: Props) => {
    const hoverStyle = {
        background: "#F0F0F0",
        outline: "1px solid #E8E8E8"
    }
    return (
        <Box transition={"background .3s ease"} borderRadius={"5px"} _hover={hoverStyle} py={"25px"} pb={"0px"} px={"10px"}>
            <Flex direction={"column"} justifyContent={"space-between"}>
                <Flex mb={"20px"} direction={"column"}>
                    <Flex alignItems={"center"} gap={"5px"} >
                        <GeoIcon />
                        <Text fontSize={"md"} color={"black"} fontWeight={700}>{location}</Text>
                    </Flex>
                    <Text fontSize={"lg"} color={"black"} fontWeight={700}>ЦОДД РСО - Алания</Text>
                </Flex>
                <Text mb={"25px"} fontSize={"md"}>{description}</Text>
                <Flex justifyContent={"center"}>
                    <Divider w={"91%"} />
                </Flex>
            </Flex>
        </Box>
    );
};

export default RegistrationPointItem;