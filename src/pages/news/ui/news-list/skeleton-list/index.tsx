import { Skeleton, SkeletonText, Stack } from "@chakra-ui/react"

const SkeletonNewsList = () => {
    return (
        <Stack gap={"20px"}>
            {
                [1, 2].map(() => (
                    <Stack>
                        <Skeleton h={220} />
                        <SkeletonText mt='1' noOfLines={1} spacing='4' w={"35%"} skeletonHeight='2' />
                        <SkeletonText mt='2' noOfLines={2} spacing='2' skeletonHeight='4' />
                        <SkeletonText mt='2' noOfLines={3} spacing='2' skeletonHeight='3' />
                    </Stack>
                ))
            }

        </Stack>
    )
}
export default SkeletonNewsList