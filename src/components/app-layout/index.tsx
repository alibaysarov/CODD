import { Box } from '@chakra-ui/react';
import { Props } from './types';
import BottomMenu from '../bottom-menu';
const AppLayout = ({ children, hasMenu = true }: Props) => {
    return (
        <Box position={"relative"} minH={"100vh"} pt={"17px"} fontSize={"2xl"}>
            {children}
            {hasMenu && <BottomMenu />}
        </Box>
    );
};

export default AppLayout;