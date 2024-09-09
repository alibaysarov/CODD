import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import { Props } from './header-types';

const Header = ({ title, leftSide, rightSide }: Props) => {
    return (
        <Box px={"25px"}>

            {
                leftSide && !rightSide &&
                <Grid alignItems={"center"} templateColumns='repeat(3, 1fr)'>
                    <GridItem>
                        {leftSide}
                    </GridItem>
                    <GridItem>
                        <Text as={"h1"} color={"black"} fontFamily={"heading"} fontWeight={900}>{title}</Text>
                    </GridItem>
                    <GridItem></GridItem>
                </Grid>
            }
            {
                leftSide && rightSide &&
                <Grid alignItems={"center"} templateColumns='repeat(3, 1fr)'>
                    <GridItem>
                        {leftSide}
                    </GridItem>
                    <GridItem>
                        <Text as={"h1"} color={"black"} fontFamily={"heading"} fontWeight={900}>{title}</Text>
                    </GridItem>
                    <GridItem>
                        {rightSide}
                    </GridItem>
                </Grid>
            }
            {
                !leftSide && !rightSide &&
                <Grid alignItems={"center"} templateColumns='1fr'>
                    <GridItem justifyContent={"center"}>
                        <Text mx={"auto"} textAlign={"center"} as={"h1"} color={"black"} fontFamily={"heading"} fontWeight={900}>{title}</Text>
                    </GridItem>
                </Grid>
            }
            {
                !leftSide && rightSide &&
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                    <Text as={"h1"} color={"black"} fontFamily={"heading"} fontWeight={900}>{title}</Text>
                    {rightSide}
                </Flex>
            }
        </Box>
    );
};

export default Header;