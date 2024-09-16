import { Box, Flex, Grid, IconButton, Text } from "@chakra-ui/react";
import { DownIcon } from "../../../icons/icons";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"
import { formatDate } from "../../../helpers/timeFunctions";
import { ElectronicQueueItem } from "../types";

interface Props {
    clickHandler: (id: number | string) => void
    style: React.CSSProperties
}
const QueueItem = ({ carNumber, dateReg, style, land, model, id, isOpened }: ElectronicQueueItem & Props) => {
    const [opened, setOpened] = useState<boolean>(isOpened);
    const toggleCard = () => {
        setOpened(prev => {
            if (prev == true) {
                return false
            } else {
                //clickHandler(id)
                return true;
            }
        })

    }
    useEffect(() => {
        setOpened(isOpened)
    }, [isOpened])
    return (
        <Box style={style} mb={"5px"} onClick={toggleCard} bg={+id % 2 == 0 ? "brand_accent.100" : "rgb(243,249,239)"} borderRadius={"5px"} p={"15px"} pr={"5px"}>
            <Grid templateColumns={"25px 3fr .5fr"}>
                <Text lineHeight={"21px"} fontSize={"12px"} color={"brand_accent.500"}>{id}</Text>

                <Flex gap={"15px"} direction={"column"}>
                    <Flex w={"75%"} justifyContent={"space-between"}>
                        <Text fontWeight={700} fontSize={"md"}>{carNumber}</Text>
                        <Text color={"#FF0E0E"} fontWeight={700} fontSize={"md"}>02:25</Text>
                    </Flex>
                    {opened &&
                        <Flex justifyContent={"space-between"}>
                            <Text fontWeight={400} fontSize={"md"}>{land}</Text>
                            <Text fontWeight={400} fontSize={"md"}>{model}</Text>
                            <Text fontWeight={400} fontSize={"md"}>{dateReg ? formatDate(dateReg) : ""}</Text>
                        </Flex>
                    }

                </Flex>

                <IconButton
                    rotate={180}
                    colorScheme="transparent"
                    aria-label="open"
                    maxW={"25px"}
                    h={"15px"}
                    icon={<motion.div animate={{ rotate: opened ? 180 : 0 }}><DownIcon /></motion.div>} />

            </Grid>
        </Box >
    );
};

export default QueueItem;