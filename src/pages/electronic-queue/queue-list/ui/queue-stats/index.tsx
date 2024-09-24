import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

interface Props {
    total: string | number
}
const QueueStats = ({ total }: Props) => {
    const { t } = useTranslation()
    return (
        <Box mt={"30px"} mb={"10px"}>
            <Flex justifyContent={"center"} gap={"10px"}>
                <Box flex={"1 0 50%"} border={"1px solid"} maxW={"175px"} maxH={"90px"} borderColor={"gray.70"} borderRadius={"5px"} bg={"#F0F0F0"} py={"21px"} px={"26px"}>
                    <VStack align={"center"} gap={"5px"}>
                        <Text whiteSpace={"nowrap"} lineHeight={1.19} fontSize={"3xl"} fontWeight={600}>{total}</Text>
                        <Text whiteSpace={"nowrap"} lineHeight={0.76} fontSize={"md"}>{t("elQueue.totalInQueue")}</Text>
                    </VStack>
                </Box>
                <Box flex={"1 0 50%"} border={"1px solid"} maxW={"175px"} maxH={"90px"} borderColor={"gray.70"} borderRadius={"5px"} bg={"#F0F0F0"} py={"21px"} px={"26px"}>
                    <VStack align={"center"} gap={"5px"}>
                        <Text whiteSpace={"nowrap"} lineHeight={1.19} fontSize={"3xl"} fontWeight={600}>500</Text>
                        <Text whiteSpace={"nowrap"} lineHeight={0.76} fontSize={"md"}>{t("elQueue.greenZone")}</Text>
                    </VStack>
                </Box>
            </Flex>
        </Box>
    );
};

export default QueueStats;