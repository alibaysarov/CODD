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
            padding={"9px"}
            bgColor={"black"}
        >
            <Flex justifyContent={"center"}>
                <Flex w={"80%"} justifyContent={"center"} alignItems={"center"}>
                    <Icons.CODDIcon height={"42px"} width={"76px"} />
                </Flex>
            </Flex>
        </Box>
    );
};

export default BottomMenu;