import { Box, Flex, Text, VStack } from "@chakra-ui/react";

interface Props {
    total: string | number
}
const QueueStats = ({ total }: Props) => {
    return (
        <Box mt={"30px"} mb={"10px"}>
            <Flex justifyContent={"center"} gap={"10px"}>
                <Box flex={"1 0 50%"} border={"1px solid"} borderColor={"gray.70"} borderRadius={"5px"} bg={"#F0F0F0"} py={"21px"} px={"26px"}>
                    <VStack align={"center"}>
                        <Text whiteSpace={"nowrap"} fontSize={"3xl"} fontWeight={600}>{total}</Text>
                        <Text whiteSpace={"nowrap"} fontSize={"md"}>Всего в очереди</Text>
                    </VStack>
                </Box>
                <Box flex={"1 0 50%"} border={"1px solid"} borderColor={"gray.70"} borderRadius={"5px"} bg={"#F0F0F0"} py={"21px"} px={"26px"}>
                    <VStack align={"center"}>
                        <Text whiteSpace={"nowrap"} fontSize={"3xl"} fontWeight={600}>500</Text>
                        <Text whiteSpace={"nowrap"} fontSize={"md"}>Зеленая зона</Text>
                    </VStack>
                </Box>
            </Flex>
        </Box>
    );
};

export default QueueStats;