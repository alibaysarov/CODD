import { Flex } from '@chakra-ui/react';
import NewsCard from '../news-card';
import { useEffect, useState } from 'react';
import { CoddNews_Common_NewsArticle, NewsArticleService } from '../../../../api';
import SkeletonNewsList from './skeleton-list';



const NewsList = () => {
    const [newsList, setNewsList] = useState<CoddNews_Common_NewsArticle[]>([]);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false)
    useEffect(() => {
        NewsArticleService
            .getNewsArticleAll()
            .then(res => {
                console.log("news are", res)
                setNewsList(res);
                setLoaded(true);
            })
            .catch(err => {
                console.log(err);
                setError(true);
                setNewsList([]);
            })
    }, [])
    if (error) {
        console.log("redirect on error page")
    }
    return (
        <Flex px={"11px"} mt={"28px"} gap={"10px"} direction={"column"}>
            {
                loaded
                    ? newsList.map(newsPost => (
                        <NewsCard {...newsPost} />
                    ))
                    : <SkeletonNewsList />
            }
        </Flex>
    );
};

export default NewsList;