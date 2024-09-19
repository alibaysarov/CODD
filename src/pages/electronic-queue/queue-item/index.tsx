import { Box, Flex, Grid, IconButton, Text } from "@chakra-ui/react";
import { motion } from "framer-motion"
import { formatDate } from "../../../helpers/timeFunctions";
import { ElectronicQueueItem } from "../types";
import {
    AccordionItem,
    AccordionButton,
    AccordionPanel,
} from '@chakra-ui/react'
import { DownIcon } from "../../../icons/icons";
interface Props {
    //clickHandler: (id: number) => void
    style: React.CSSProperties
}
const QueueItem = ({ carNumber, dateReg, style, land, model, id, timeToDel }: ElectronicQueueItem & Props) => {
    return (

        <AccordionItem mb={"5px"} style={style} borderRadius={"5px"} bgColor={+id % 2 == 0 ? "brand_accent.100" : "rgb(243,249,239)"}>
            {({ isExpanded }) => (
                <>
                    <AccordionButton p={"14px"} bg={"transparent"} _hover={{ background: "transparent" }} bgColor={"transparent"} >
                        <Box flex={1}>
                            <Grid templateColumns={"25px 2fr 25px"}>
                                <Text textAlign={"left"} lineHeight={"21px"} fontSize={"12px"} color={"brand_accent.500"}>{+id}</Text>
                                <Flex w={"90%"} justifyContent={"space-between"}>
                                    <Text fontWeight={700} fontSize={"md"}>{carNumber}</Text>
                                    <Text color={"#FF0E0E"} fontWeight={700} fontSize={"md"}>{timeToDel}</Text>
                                </Flex>
                                {/* <AccordionIcon fill={"green"} justifySelf={"end"} /> */}
                                <IconButton
                                    rotate={180}
                                    colorScheme="transparent"
                                    aria-label="open"
                                    maxW={"25px"}
                                    h={"15px"}
                                    icon={<motion.div animate={{ rotate: isExpanded ? 180 : 0 }}><DownIcon /></motion.div>} />
                            </Grid>
                        </Box>
                    </AccordionButton>

                    <AccordionPanel px={"14px"} pb={4}>
                        <Grid templateColumns={"25px 2fr 25px"}>
                            <Flex gridColumn={"2/3"} justifyContent={"space-between"}>
                                <Text fontWeight={400} fontSize={"md"}>{land}</Text>
                                <Text fontWeight={400} fontSize={"md"}>{model}</Text>
                                <Text fontWeight={400} fontSize={"md"}>{dateReg ? formatDate(dateReg) : ""}</Text>
                            </Flex>
                        </Grid>
                    </AccordionPanel>
                </>
            )}

        </AccordionItem>


    );
};

export default QueueItem;

// <Box style={style} mb={"5px"} onClick={toggleCard} bg={+id % 2 == 0 ? "brand_accent.100" : "rgb(243,249,239)"} borderRadius={"5px"} p={"15px"} pr={"5px"}>
//     <Grid templateColumns={"25px 3fr .5fr"}>
//         <Text lineHeight={"21px"} fontSize={"12px"} color={"brand_accent.500"}>{id}</Text>

//         <Flex gap={"15px"} direction={"column"}>
//             <Flex w={"90%"} justifyContent={"space-between"}>
//                 <Text fontWeight={700} fontSize={"md"}>{carNumber}</Text>
//                 <Text color={"#FF0E0E"} fontWeight={700} fontSize={"md"}>02:25</Text>
//             </Flex>
//             {accordeonOpened &&
//                 <Flex justifyContent={"space-between"}>
//                     <Text fontWeight={400} fontSize={"md"}>{land}</Text>
//                     <Text fontWeight={400} fontSize={"md"}>{model}</Text>
//                     <Text fontWeight={400} fontSize={"md"}>{dateReg ? formatDate(dateReg) : ""}</Text>
//                 </Flex>
//             }

//         </Flex>

//         <IconButton
//             rotate={180}
//             colorScheme="transparent"
//             aria-label="open"
//             maxW={"25px"}
//             h={"15px"}
//             icon={<motion.div animate={{ rotate: accordeonOpened ? 180 : 0 }}><DownIcon /></motion.div>} />

//     </Grid>
// </Box >