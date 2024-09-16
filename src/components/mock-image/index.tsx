import { Box, Flex } from '@chakra-ui/react';
import { MockImageIcon } from '../../icons/icons';

type ImageDimensions = number | string
interface Props {
    w: ImageDimensions,
    h: ImageDimensions,
}
const MockImage = ({ w, h }: Props) => {
    return (
        <Box w={w} h={h} bgColor={"gray.70"} borderRadius={"5px"}>
            <Flex h={"100%"} justifyContent={"center"} alignItems={"center"}>
                <MockImageIcon width={+w / 4} height={+h / 4} />
            </Flex>
        </Box>
    );
};

export default MockImage;