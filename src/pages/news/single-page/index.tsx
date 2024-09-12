import { Box, Flex, Img, Text } from "@chakra-ui/react";
import AppLayout from "../../../components/app-layout";
import Header from "../../../components/header";
import { useEffect, useState } from "react";
import { Link, Params, useParams } from "react-router-dom";
import { BackIcon } from "../../../icons/icons";
import { CoddNews_Common_NewsArticle, NewsArticleService } from "../../../api";
import ReactHtmlParser from 'react-html-parser';


const SinglePage = () => {
    const [newPost, setNewPost] = useState<CoddNews_Common_NewsArticle>({
        images: [],
        paragraphs: "",
        publishDate: "",
        sourceUrl: "",
        title: ""
    });
    const [loaded, setLoaded] = useState<boolean>(false)
    const routeParams: Readonly<Params<string>> = useParams();
    const getMainPhotoLink = (): string | undefined => {
        if (newPost.images?.length) {
            const photoUrl = newPost.images?.find(el => el.mainImage)?.sourceImageUrl
            console.log("photoUrl ", photoUrl);
            return `https://rsocodd.fineroad.ru/NewsArticle/image?imageSource=${photoUrl}`;
        }
        return undefined
    }


    useEffect(() => {
        NewsArticleService
            .getNewsArticleGet(`/ru/news/${routeParams.url}`)
            .then(res => {
                console.log("res is ", res)
                setNewPost(res);
                setLoaded(true);
            })
            .catch(err => {
                console.log("err", err);
                setNewPost({})
            })
    }, [])
    return (
        <AppLayout hasMenu={false}>
            <Header leftSide={<Link to={"/news"}><BackIcon /></Link>} title="" />
            <Box pt={"28px"} px={"11px"}>
                {
                    loaded
                        ? <Box pb={"105px"}>
                            <Flex direction={"column"}>
                                <Img minH={"220px"} objectFit={"cover"} borderRadius={"5px"} overflow={"hidden"}
                                    src={getMainPhotoLink()} />


                                <Flex px={"25px"} mt={"20px"} direction={"column"}>
                                    <Text lineHeight={1.5} fontSize={"xs"} color={"rgba(13, 33, 39, 0.5)"} fontWeight={400} fontFamily={"body"}>13.12.2023 - 16:16</Text>
                                    <Text color={"black"} mb={"20px"} fontWeight={700} fontSize={"xl"} as={"h1"} textTransform={"uppercase"}>{newPost.title}</Text>
                                    <Box color={"black"} fontSize={"md"} fontWeight={400}>
                                        {newPost.paragraphs && ReactHtmlParser(newPost.paragraphs)}
                                    </Box>
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