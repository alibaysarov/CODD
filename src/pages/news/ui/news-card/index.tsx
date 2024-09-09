import { Box, Flex, Img, Text } from "@chakra-ui/react";
import { Props } from "./types";
import { Link } from "react-router-dom";

const NewsCard = ({ id, imgUrl, title, date, subtite }: Props) => {
    return (
        <Link to={`/news/${id}`}>
            <Box overflow={"hidden"} borderRadius={"5px"} bgColor={"white"} _hover={{
                backgroundColor: "gray.70",
            }}>
                <Img borderRadius={"5px"} src={imgUrl} />
                <Box p={"20px"} pt={"23px"}>
                    <Flex gap={"10px"} direction={"column"}>
                        <Text
                            fontFamily={"body"}
                            fontWeight={400}
                            fontSize={"sm"}
                        >{date}</Text>
                        <Text
                            colorScheme="black"
                            fontSize={"md"}
                            fontFamily={"body"}
                            fontWeight={900}
                            textTransform={"uppercase"}
                        >
                            {title}
                        </Text>
                        <Text colorScheme="black" fontSize={" md"} fontWeight={400}>
                            {subtite}
                        </Text>
                    </Flex>
                </Box>
            </Box >
        </Link>
    );
};

export default NewsCard;