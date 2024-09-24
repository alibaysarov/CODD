import { Flex, Img } from '@chakra-ui/react';
import ServiceItem from './service-item';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const ServiceList = () => {
    const { t } = useTranslation()
    const menu = [
        {
            text: t("main.electronicQueue"),
            image: <Img position={"absolute"} top={"13px"} right={"0px"} src='/el-queue.png' />,
            link: "/el-queue"
        },
        {
            text: t("main.news"),
            image: <Img position={"absolute"} top={"0px"} right={"0px"} src={'/stats.png'} />,
            link: "/news"
        },
        // {
        //     text: "Выдача разрешений",
        //     image: <Img position={"absolute"} top={"0px"} right={"0px"} src='/permissions.png' />,
        //     link: "/"
        // },
        {
            text: t("main.myStreet"),
            image: < Img position={"absolute"} top={"0px"} right={"18.6px"} src={'/camera.png'} />,
            link: "/"
        },
        {
            text: t("main.organization"),
            image: <Img position={"absolute"} top={"0px"} right={"0px"} src={'/organization.png'} />,
            link: "/"
        },

    ];
    return (

        <Flex mt={"15px"} px={"11.5px"} pb={"85px"} gap={"10px"} direction={"column"}>
            {menu.map(item => (
                <Link to={item.link}>
                    <ServiceItem key={item.text} text={item.text} image={item.image} />
                </Link>
            ))}
        </Flex>
    );
};

export default ServiceList;