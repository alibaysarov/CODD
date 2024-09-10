import { Link } from 'react-router-dom';
import AppLayout from '../../../components/app-layout';
import Header from '../../../components/header';
import { BackIcon } from '../../../icons/icons';
import InfoButton from '../../../components/info-button';
import QueueStats from './ui/queue-stats';
import { Box, Flex } from '@chakra-ui/react';
import SearchInput from '../../../components/searchInput';
import QueueItem from '../queue-item';
import React, { useEffect, useState } from 'react';
import { QueueItemProps } from '../types';
import NotFoundModal from './ui/NotFoundModal';
import InfoModal from './ui/InfoModal';

const QueueList = () => {
    const [queueList, setQueueList] = useState<QueueItemProps[]>([]);
    const users: QueueItemProps[] = [
        {
            id: 1,
            title: "21MR121-01C218",
            country: "RUS",
            date: "12.12.23  09:29",
            isOpened: false,
            model: "KAMAZ",
            time: "02:25",
        },
        {
            id: 2,
            title: "11TR121-01C231",
            country: "RUS",
            date: "12.12.23  09:29",
            isOpened: false,
            model: "KAMAZ",
            time: " 03:12",
        },
        {
            id: 3,
            title: "67HR121-01C271",
            country: "RUS",
            date: "12.12.23  09:29",
            isOpened: false,
            model: "KAMAZ",
            time: "03:21",
        },
        {
            id: 4,
            title: "61MR121-01C211",
            country: "RUS",
            date: "12.12.23  09:29",
            isOpened: false,
            model: "KAMAZ",
            time: "03:37",
        },
    ];
    useEffect(() => {

        setQueueList(users)
    }, [])
    const [notFound, setNotFound] = useState({
        isOpen: false,
        title: ""
    });
    const [searchValue, setSearchValue] = useState("");
    const closeNotFound = () => {
        setNotFound(prev => {
            return {
                ...prev,
                isOpen: false
            }
        })
    }
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }
    const startSearchHandler = () => {
        if (searchValue.length) {
            setQueueList(prev => {
                const result = prev.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()));

                if (result.length) {

                    return result.map((el, id) => {
                        if (id == 0) {
                            return {
                                ...el,
                                isOpened: true
                            }
                        }
                        return el
                    })
                } else {
                    setNotFound({
                        isOpen: true,
                        title: searchValue
                    })
                    return []
                }
            })
        } else {
            console.log("lengt empty", users)
            setQueueList(users)
        }
    }
    const [infoOpened, setInfoOpened] = useState(false)
    return (
        <AppLayout hasMenu={false}>
            <Header
                leftSide={<Link to={"/el-queue"}><BackIcon /></Link>}
                title='Просмотр очереди'
                rightSide={<InfoButton clickHandler={() => setInfoOpened(true)} />}
            />
            <InfoModal isOpen={infoOpened} onClose={() => setInfoOpened(false)} />
            <NotFoundModal title={notFound.title} isOpen={notFound.isOpen} onClose={closeNotFound} />
            <Box px={"11px"} overflowY={"auto"}>
                <QueueStats />
                <SearchInput clickHandler={startSearchHandler} value={searchValue} changeHandler={changeHandler} />
                <Box my={"10px"}>
                    <Flex direction={"column"} gap={"5px"}>
                        {
                            queueList.map((item, idx) => (
                                <QueueItem {...item} isOpened={item.isOpened} id={idx + 1} key={idx} />
                            ))
                        }
                    </Flex>
                </Box>
            </Box>
        </AppLayout>
    );
};

export default QueueList;