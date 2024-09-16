import { Skeleton, SkeletonText, Stack } from '@chakra-ui/react';

const SkeletonPage = () => {
    return (
        <Stack>
            <Skeleton h={220} />
            <Skeleton w={"35%"} mt={"10px"} h={"15px"} />
            <SkeletonText mt='4' noOfLines={2} spacing='4' skeletonHeight='5' />
            <SkeletonText mt='4' noOfLines={20} spacing='2' skeletonHeight='2' />
        </Stack>
    );
};

export default SkeletonPage;