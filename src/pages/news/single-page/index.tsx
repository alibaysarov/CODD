import { Box, Flex, Img, Text } from "@chakra-ui/react";
import AppLayout from "../../../components/app-layout";
import Header from "../../../components/header";
import { Link, Params, useParams } from "react-router-dom";
import { BackIcon } from "../../../icons/icons";
import { CoddNews_Common_NewsArticle } from "../../../api";
import parse from "html-react-parser"

import MockImage from "../../../components/mock-image";
import SkeletonPage from "./skeleton-page";
import { useSingleNewsPage } from "../../../hooks/useSingleNewsPage";

const SinglePage = () => {
    const routeParams: Readonly<Params<string>> = useParams();
    const { data, isSuccess, isLoading, isError } = useSingleNewsPage(`/ru/news/${routeParams.url}`)
    const getMainPhotoLink = (data: CoddNews_Common_NewsArticle): string | undefined => {
        if (data.images?.length) {
            const photoUrl = data.images?.find(el => el.mainImage)?.sourceImageUrl
            return `https://rsocodd.fineroad.ru/NewsArticle/image?imageSource=${photoUrl}`;
        }
        return undefined
    }

    if (isError) {
        console.log("redirect to error");
    }

    return (
        <AppLayout hasMenu={false}>
            <Header leftSide={<Link to={"/news"}><BackIcon /></Link>} title="" />
            <Box pt={"28px"} px={"11px"}>
                {
                    isLoading
                        ? <SkeletonPage />
                        : isSuccess && <Box pb={"105px"}>
                            <Flex direction={"column"}>
                                {
                                    isLoading
                                        ? <MockImage w={360} h={220} />
                                        : <Img minH={"220px"} objectFit={"cover"} borderRadius={"5px"} overflow={"hidden"}
                                            src={getMainPhotoLink(data)} />
                                }
                                <Flex px={"25px"} mt={"20px"} direction={"column"}>
                                    <Text lineHeight={1.5} fontSize={"xs"} color={"rgba(13, 33, 39, 0.5)"} fontWeight={400} fontFamily={"body"}>13.12.2023 - 16:16</Text>
                                    <Text color={"black"} mb={"20px"} fontWeight={700} fontSize={"xl"} as={"h1"} textTransform={"uppercase"}>{data.title}</Text>
                                    <Box color={"black"} fontSize={"md"} fontWeight={400}>
                                        {data.paragraphs && parse(data.paragraphs)}
                                    </Box>
                                </Flex>
                            </Flex>
                        </Box>

                }

            </Box>
        </AppLayout>
    );
};

export default SinglePage;