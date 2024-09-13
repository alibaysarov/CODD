import { Link } from 'react-router-dom';
import AppLayout from '../../../components/app-layout';
import Header from '../../../components/header';
import { BackIcon } from '../../../icons/icons';
import InfoButton from '../../../components/info-button';
import QueueStats from './ui/queue-stats';
import { Box, Flex, Text } from '@chakra-ui/react';
import SearchInput from '../../../components/searchInput';
import QueueItem from '../queue-item';
import React, { useEffect, useState, useTransition } from 'react';
import { ElectronicQueueItem } from '../types';
import NotFoundModal from './ui/NotFoundModal';
import InfoModal from './ui/InfoModal';
import { EleQueueService } from '../../../api';
import { useDebounce } from '../../../hooks/useDebounce';
const QueueList = () => {
    const [queueList, setQueueList] = useState<ElectronicQueueItem[]>([]);
    const [isPending, startTransition] = useTransition();
    useEffect(() => {
        //"", "", "", 30

        EleQueueService
            .getEleQueue("", "", "", 30)
            .then(res => {
                const data = res.map((el, idx) => ({
                    ...el,
                    id: idx + 1,
                    isOpened: false
                }));
                startTransition(() => {
                    //setItems(data);
                    setQueueList(data)
                })
            })
            .catch(err => {
                console.log(err)
            })

    }, [])
    const [notFound, setNotFound] = useState({
        isOpen: false,
        title: ""
    });
    const [searchValue, setSearchValue] = useState("");
    const [hasItemsFound, setHasItemsFound] = useState(false);
    const closeNotFound = () => {
        setHasItemsFound(false)
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
    const clickHandler = (id: number | string) => {
        setQueueList(prev => prev.map((el, idx) => {
            if (idx + 1 == id) {
                return {
                    ...el,
                    isOpened: true
                }
            }
            return {
                ...el,
                isOpened: false
            }
        }))
    }
    useEffect(() => {
        const searchHandler = useDebounce(() => {
            console.log("start debounce", searchValue);
            const fetchItems = async () => {
                try {
                    const res = await EleQueueService.getEleQueue(searchValue.toUpperCase(), "", "", 30);
                    const data = res.map((el, idx) => ({
                        ...el,
                        id: idx + 1,
                        isOpened: false
                    }));
                    if (!data.length && searchValue.length > 0) {
                        setHasItemsFound(true);

                    } else {
                        setQueueList(data)
                    }
                } catch (err) {
                    console.log(err)
                }
            }
            fetchItems();
        }, 500)
        searchHandler();
    }, [searchValue])
    useEffect(() => {
        if (hasItemsFound) {
            setNotFound({
                isOpen: true,
                title: searchValue
            })
        }

    }, [hasItemsFound])
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
                <SearchInput clickHandler={() => console.log("123")} value={searchValue} changeHandler={changeHandler} />
                <Box my={"10px"}>
                    <Flex direction={"column"} gap={"5px"}>
                        {
                            isPending
                                ? <Text>Loading....</Text>
                                : queueList.map((item, idx, arr) => {
                                    const opened = searchValue.length && arr.length > 0 && idx == 0 ? true : item.isOpened
                                    return <QueueItem clickHandler={() => clickHandler(idx + 1)} {...item} isOpened={opened} id={idx + 1} key={idx} />
                                }

                                )

                        }
                    </Flex>
                </Box>
            </Box>
        </AppLayout>
    );
};

export default QueueList;