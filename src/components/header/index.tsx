import { Box, Flex, Text } from '@chakra-ui/react';
import { Props } from './header-types';


const Header = ({ title, rightSide }: Props) => {
    return (
        <Box px={"25px"}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Text as={"h1"} color={"black"} fontFamily={"heading"} fontWeight={900}>{title}</Text>
                {rightSide}

            </Flex>
        </Box>
    );
};

export default Header;