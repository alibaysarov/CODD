import { Flex, Img } from '@chakra-ui/react';
import ServiceItem from './service-item';
const ServiceList = () => {
    const menu = [
        {
            text: "Электронная очередь",
            image: <Img position={"absolute"} top={"0px"} right={"0px"} src='/el-queue.png' />
        },
        {
            text: "Выдача разрешений",
            image: <Img position={"absolute"} top={"0px"} right={"0px"} src='/permissions.png' />
        },
        {
            text: "Камеры фотовидеофиксации",
            image: < Img position={"absolute"} top={"0px"} right={"18.6px"} src={'/camera.png'} />
        },
        {
            text: "Об организации",
            image: <Img position={"absolute"} top={"0px"} right={"0px"} src={'/organization.png'} />
        },
        {
            text: "Статистика",
            image: <Img position={"absolute"} top={"0px"} right={"0px"} src={'/stats.png'} />
        }
    ];
    return (
        <Flex mt={"15px"} px={"11.5px"} gap={"10px"} direction={"column"}>
            {menu.map(item => (
                <ServiceItem key={item.text} text={item.text} image={item.image} />
            ))}
        </Flex>
    );
};

export default ServiceList;