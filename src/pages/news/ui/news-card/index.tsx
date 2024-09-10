import { Box, Divider, Flex, Img, Text } from "@chakra-ui/react";
import { Props } from "./types";
import { Link } from "react-router-dom";

const NewsCard = ({ id, imgUrl, title, date, subtite }: Props) => {
    return (
        <Link to={`/news/${id}`}>
            <Box overflow={"hidden"} borderRadius={"5px"} bgColor={"white"} _hover={{
                backgroundColor: "gray.70",
            }}>
                <Img borderRadius={"5px"} src={imgUrl} />
                <Box p={"20px"} pt={"23px"} pb={"0px"}>
                    <Flex gap={"10px"} direction={"column"}>
                        <Text
                            fontFamily={"body"}
                            fontWeight={400}
                            fontSize={"sm"}
                        >{date}</Text>
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

                        <Text colorScheme="black" fontSize={" md"} fontWeight={400}>
                            {subtite}
                        </Text>
                    </Flex>
                    <Divider mt={"20px"} bg={"gray.70"} />

                </Box>

            </Box >
        </Link>
    );
};

export default NewsCard;