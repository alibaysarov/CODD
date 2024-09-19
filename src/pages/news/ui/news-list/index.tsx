import { Flex } from '@chakra-ui/react';
import NewsCard from '../news-card';
import SkeletonNewsList from './skeleton-list';
import { useNewsQuery } from '../../../../hooks/useNewsQuery';



const NewsList = () => {
    const { data: newsList, error, isLoading, isSuccess } = useNewsQuery({})

    if (error) {
        console.log("redirect on error page")
    }
    return (
        <Flex px={"11px"} mt={"28px"} gap={"10px"} direction={"column"}>
            {
                isLoading
                    ? <SkeletonNewsList />
                    : isSuccess && newsList.map(newsPost => <NewsCard key={newsPost.sourceUrl} {...newsPost} />)
            }
        </Flex>
    );
};

export default NewsList;