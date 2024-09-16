import { Box, Divider, Flex, Img, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CoddNews_Common_NewsArticle } from "../../../../api";
import parse from "html-react-parser"
import { useEffect, useState } from "react";
import { formatDate } from "../../../../helpers/timeFunctions";
import MockImage from "../../../../components/mock-image";
const NewsCard = ({ sourceUrl, title, paragraphs, publishDate, images }: CoddNews_Common_NewsArticle) => {

    const getMainPhotoLink = (): string | undefined => {
        if (images?.length) {
            const photoUrl = images?.find(el => el.mainImage)?.sourceImageUrl;
            return `https://rsocodd.fineroad.ru/NewsArticle/image?imageSource=${photoUrl}`;
        }
        return undefined
    }
    const getExcerpt = (str: string) => {
        return `${str.slice(0, 200)}....`;
    }
    const [hasImage, setHasImage] = useState(false);
    useEffect(() => {
        const image = new Image();
        image.onload = () => {
            setHasImage(true);
        };
        image.onerror = () => {
            setHasImage(false);
        };
        image.src = getMainPhotoLink() ?? "";
    }, []);


    return (
        <Link to={`${sourceUrl}`}>
            <Box overflow={"hidden"} borderRadius={"5px"} bgColor={"white"} _hover={{
                backgroundColor: "gray.70",
            }}>

                {hasImage
                    ? <Img w={360} h={220} borderRadius={"5px"} src={getMainPhotoLink()} />
                    : <MockImage w={360} h={220} />}
                <Box p={"20px"} pt={"23px"} pb={"0px"}>
                    <Flex gap={"10px"} direction={"column"}>
                        <Text
                            fontFamily={"body"}
                            fontWeight={400}
                            fontSize={"sm"}
                        >{publishDate && formatDate(publishDate)}</Text>
                        <Flex gap={"10px"}>
                            <Box bg={"brand_accent.500"} minW={"2px"} maxW={"2px"} w={"2px"} h={"inherit"} />
                            <Text
                                colorScheme="black"
                                fontSize={"md"}
                                fontFamily={"body"}
                                fontWeight={900}
                                textTransform={"uppercase"}
                            >
                                {title}
                            </Text>
                        </Flex>

                        <Box color="black" fontSize={" md"} fontWeight={400}>
                            {paragraphs && parse(getExcerpt(paragraphs))}
                        </Box>
                    </Flex>
                    <Divider mt={"20px"} bg={"gray.70"} />

                </Box>

            </Box >
        </Link>
    );
};

export default NewsCard;