import { Box, Flex, Img, Text } from "@chakra-ui/react";
import AppLayout from "../../../components/app-layout";
import Header from "../../../components/header";
import { useEffect, useState } from "react";
import { PostProps } from "./types";
import { Link, Params, useParams } from "react-router-dom";
import { BackIcon } from "../../../icons/icons";


const SinglePage = () => {
    const [newPost, setNewPost] = useState<PostProps>({
        id: null,
        date: null,
        text: null,
        title: null,
        imgUrl: undefined,
    });
    const [loaded, setLoaded] = useState<boolean>(false)
    const routeParams: Readonly<Params<string>> = useParams()
    useEffect(() => {
        const fetchPost = () => {
            console.log(routeParams.id);

            setTimeout(() => {
                setNewPost({
                    id: routeParams.id,
                    title: "ВОЕННО-ГРУЗИНСКАЯ ДОРОГА ОТКРЫТА ДЛЯ ВСЕХ ВИДОВ ТРАНСПОРТА",
                    date: "13.12.2023 - 16:16",
                    text: "По сообщению ГУ МЧС России по РСО-Алания, в связи с расчисткой дорожного полотна на территории Грузии, возможностью обеспечения безопасного проезда автотранспортных средств, а также с учётом рекомендаций пограничной полиции Грузии разрешено движение для всех видов автотранспорта, на участке 'г. Владикавказ – н.п. Ларс' в обоих направлениях с 13.40 13 декабря 2023 года до особого распоряжения.",
                    imgUrl: "/new-img.png",
                })
                setLoaded(true)
            }, 500)
        }
        fetchPost()
    }, [])
    return (
        <AppLayout>
            <Header leftSide={<Link to={"/news"}><BackIcon /></Link>} title="" />
            <Box pt={"28px"} px={"11px"}>
                {
                    loaded
                        ? <Box pb={"105px"}>
                            <Flex direction={"column"}>
                                <Img minH={"220px"} objectFit={"cover"} borderRadius={"5px"} overflow={"hidden"}
                                    src={newPost.imgUrl} />
                                <Flex px={"25px"} mt={"20px"} direction={"column"}>
                                    <Text lineHeight={1.5} fontSize={"xs"} color={"rgba(13, 33, 39, 0.5)"} fontWeight={400} fontFamily={"body"}>13.12.2023 - 16:16</Text>
                                    <Text color={"black"} mb={"20px"} fontWeight={700} fontSize={"xl"} as={"h1"} textTransform={"uppercase"}>{newPost.title}</Text>
                                    <Text color={"black"} fontSize={"md"} fontWeight={400}>
                                        {newPost.text}
                                    </Text>
                                </Flex>
                            </Flex>
                        </Box>
                        : <Text>Loading...</Text>
                }

            </Box>
        </AppLayout>
    );
};

export default SinglePage;