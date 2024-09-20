import { Link } from "react-router-dom";
import AppLayout from "../../../components/app-layout";
import Header from "../../../components/header";
import { BackIcon, RegistrationPlacesIcon, UnionIcon } from "../../../icons/icons";
import { Box, Button, Flex, Text } from "@chakra-ui/react";


const QueueMain = () => {

    return (
        <AppLayout hasMenu={false}>
            <Header leftSide={<Link to={"/"}><BackIcon /></Link>}
                title='Электронная очередь'
            />
            <Box mt={"30px"} px={"11px"}>
                <Flex direction={"column"} gap={"20px"}>
                    <Link style={{ display: "block" }} to={"/queue-list"}>
                        <Button w={"100%"} leftIcon={<UnionIcon />} color={"white"} py={"15px"} bgColor={"brand_accent.500"}>Смотреть очередь</Button>
                    </Link>
                    <Link style={{ display: "block" }} to={"/registration-points"}>
                        <Button w={"100%"} leftIcon={<RegistrationPlacesIcon />} color={"white"} py={"15px"} bgColor={"brand_accent.500"}>Пункты регистрации</Button>
                    </Link>
                </Flex>
                <Box mt={"20px"} px={"10px"}>
                    <Text fontWeight={700} fontSize={"md"}>
                        <Text as={"span"} textDecoration={"underline"}>8 (800) 200-10-17</Text>
                        - Номер горячей линии!</Text>
                    <Text mt={"15px"} fontSize={"md"} fontWeight={400}>
                        В целях организации и упорядочивания движения транзитного большегрузного (крупногабаритного) транспорта по территории Республики Северная Осетия-Алания в направлении многостороннего автомобильного пункта пропуска через Государственную границу Российской Федерации "Верхний Ларс" Комитетом цифрового развития Республики Северная Осетия-Алания совместно с Министерством внутренних дел по Республике Северная Осетия-Алания обеспечено создание и функционирование системы электронной очереди движения транзитного большегрузного (крупногабаритного) транспорта по территории Республики Северная Осетия-Алания в направлении многостороннего автомобильного пункта пропуска через Государственную границу Российской Федерации "Верхний Ларс"
                    </Text>
                </Box>
            </Box>
        </AppLayout>
    );
};

export default QueueMain;