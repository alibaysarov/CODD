import { Flex } from '@chakra-ui/react';
import NewsCard from '../news-card';
import { useEffect, useState } from 'react';
import { CoddNews_Common_NewsArticle, NewsArticleService } from '../../../../api';
const NewsList = () => {
    const [newsList, setNewsList] = useState<CoddNews_Common_NewsArticle[]>([]);
    useEffect(() => {
        NewsArticleService
            .getNewsArticleAll()
            .then(res => {
                console.log("news are", res)
                setNewsList(res);
            })
            .catch(err => {
                console.log(err);
                setNewsList([]);
            })
    }, [])
    return (
        <Flex px={"11px"} mt={"28px"} gap={"10px"} direction={"column"}>
            {
                newsList.map(newsPost => (
                    <NewsCard {...newsPost} />
                ))
            }
        </Flex>
    );
};

export default NewsList;