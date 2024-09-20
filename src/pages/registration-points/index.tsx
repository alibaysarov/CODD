import AppLayout from '../../components/app-layout';
import Header from '../../components/header';
import { Link } from 'react-router-dom';
import { BackIcon } from '../../icons/icons';
import { Box, Flex } from '@chakra-ui/react';
import RegistrationPointItem from './ui/registration-point-item';
import data from "./points.json"
const RegistrationPointsPage = () => {

    return (
        <AppLayout hasMenu={false}>
            <Header
                leftSide={<Link to={"/el-queue"}><BackIcon /></Link>}
                title='ПУНКТЫ РЕГИСТРАЦИИ' />
            <Box mt={"30px"} px={"11px"}>
                <Flex direction={"column"}>
                    {data.map((el, id) => (<RegistrationPointItem key={id} description={el.description} location={el.name} />))}
                </Flex>
            </Box>
        </AppLayout>
    );
};

export default RegistrationPointsPage;