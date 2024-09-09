import { Flex } from '@chakra-ui/react';
import NewsCard from '../news-card';
const NewsList = () => {
    return (
        <Flex px={"11px"} mt={"28px"} gap={"10px"} direction={"column"}>
            <NewsCard id={1} date={"13.12.2023 - 16:16"} title='ВОЕННО-ГРУЗИНСКАЯ ДОРОГА ОТКРЫТА ДЛЯ ВСЕХ ВИДОВ ТРАНСПОРТА'
                subtite='По сообщению ГУ МЧС России по РСО-Алания, в связи с расчисткой дорожного полотна на территории Грузии...'
                imgUrl='/new-img.png'
            />
            <NewsCard id={2} title='В АЛАГИРСКОМ РАЙОНЕ - ЛАВИНООПАСНО!'
                date='13.12.2023 - 12:13'
                subtite='Доводим до Вашего сведения, что с 18 часов 13.12 2023 г. до 18 часов 14.12.2023 г. 
                в горных районах республики выше 2500 метров лавиноопасно! ...'
            />
        </Flex>
    );
};

export default NewsList;