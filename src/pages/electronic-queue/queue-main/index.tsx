import { Link } from "react-router-dom";
import AppLayout from "../../../components/app-layout";
import Header from "../../../components/header";
import { BackIcon, RegistrationPlacesIcon, UnionIcon } from "../../../icons/icons";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";


const QueueMain = () => {
    const { t } = useTranslation();
    return (
        <AppLayout hasMenu={false}>
            <Header
                leftSide={<Link to={"/"}><BackIcon /></Link>}
                title={t("main.electronicQueue")}
            />
            <Box mt={"30px"} px={"11px"}>
                <Flex direction={"column"} gap={"20px"}>
                    <Link style={{ display: "block" }} to={"/queue-list"}>
                        <Button w={"100%"} leftIcon={<UnionIcon />} color={"white"} py={"15px"} bgColor={"brand_accent.500"}>{t("elQueue.observeQueue")}</Button>
                    </Link>
                    <Link style={{ display: "block" }} to={"/registration-points"}>
                        <Button w={"100%"} leftIcon={<RegistrationPlacesIcon />} color={"white"} py={"15px"} bgColor={"brand_accent.500"}>{t("elQueue.registrationPoints")}</Button>
                    </Link>
                </Flex>
                <Box mt={"20px"} px={"10px"}>
                    <Text fontWeight={700} fontSize={"md"}>
                        <Text as={"span"} textDecoration={"underline"}>8 (800) 200-10-17</Text>
                        -  {t("elQueue.hotlineNumber")}</Text>
                    <Text mt={"15px"} fontSize={"md"} fontWeight={400}>
                        {t("elQueue.termsConditions")}
                    </Text>
                </Box>
            </Box>
        </AppLayout>
    );
};

export default QueueMain;