import { Box, Flex } from '@chakra-ui/react';
import { Icons } from '../../icons';

const BottomMenu = () => {
    return (
        <Box
            borderTopRightRadius={"5px"}
            borderTopLeftRadius={"5px"}
            w={"100%"}
            position={"fixed"}
            bottom={"0px"}
            padding={"15px"}
            bgColor={"black"}
        >
            <Flex justifyContent={"center"}>
                <Flex w={"80%"} justifyContent={"space-between"} alignItems={"center"}>
                    <Icons.NewsIcon />
                    <Icons.CODDIcon />
                    <Icons.ChatIcon />
                </Flex>
            </Flex>
        </Box>
    );
};

export default BottomMenu;