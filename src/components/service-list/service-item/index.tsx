import { Box, Text } from '@chakra-ui/react';
import { Props } from './service-item.types';

const ServiceItem = ({ image, text }: Props) => {
    return (
        <Box
            overflow={"hidden"}
            w={"100%"}
            minH={"150px"}
            maxH={"150px"}
            borderRadius={"5px"}
            bgColor={"gray.50"}
            p={"14px"}
            position={"relative"}
        >
            <Text color={"black"} fontSize={"lg"} fontWeight={900} maxW={"50%"}>
                {text}
            </Text>
            {image}

        </Box>
    );
};

export default ServiceItem;