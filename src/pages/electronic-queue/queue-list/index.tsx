import { Link } from 'react-router-dom';
import AppLayout from '../../../components/app-layout';
import Header from '../../../components/header';
import { BackIcon } from '../../../icons/icons';
import InfoButton from '../../../components/info-button';
import QueueStats from './ui/queue-stats';
import { Box, Flex, Text } from '@chakra-ui/react';
import SearchInput from '../../../components/searchInput';
import QueueItem from '../queue-item';
import React, { useEffect, useState } from 'react';
import { ElectronicQueueItem } from '../types';
import NotFoundModal from './ui/NotFoundModal';
import InfoModal from './ui/InfoModal';
import { CoddNews_Common_EleQueue, EleQueueService } from '../../../api';
import { useDebounce } from '../../../hooks/useDebounce';
import VirtualList from '../../../components/virtual-list';
const QueueList = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const debouncedSearch = useDebounce(searchValue);
    const [queueList, setQueueList] = useState<CoddNews_Common_EleQueue[]>([]);

    const [infoOpened, setInfoOpened] = useState(false);
    const [notFound, setNotFound] = useState({
        isOpen: false,
        title: ""
    });
    const [hasItemsFound, setHasItemsFound] = useState(false);



    useEffect(() => {
        const fetchQueueList = async (str = "") => {
            try {
                setIsLoaded(false)
                //"", "", "", 30
                const data = await EleQueueService.getEleQueue(str.toUpperCase())
                console.log("res came")
                const startTime = performance.now();
                //setList(data)
                setQueueList(data);
                setIsLoaded(true)
                const endTime = performance.now();
                console.log(`Execution time: ${endTime - startTime} milliseconds`);
                if (str.length > 0) setHasItemsFound(!data.length && searchValue.length > 0);
            } catch (err) {
                console.log("err ", err);
            }
        }
        fetchQueueList(debouncedSearch)
    }, [debouncedSearch])


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
            return {
                ...el,
                isOpened: idx + 1 == id
            }
        }))
    }



    useEffect(() => {
        console.log("has item ", hasItemsFound)
        if (hasItemsFound) {
            setNotFound({
                isOpen: true,
                title: searchValue
            })
        }

    }, [hasItemsFound])

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
                    <VirtualList
                        height={500}
                        itemSize={30}
                        items={queueList}
                    >
                        {({ index, data }) => {
                            const item = queueList[index];
                            console.log({
                                "idx": index,
                                data
                            })
                            return (
                                <QueueItem clickHandler={() => console.log(123)} id={index + 1} {...item} isOpened={false} />

                            )
                        }}
                    </VirtualList>
                    {/* <Flex direction={"column"} gap={"5px"}>
                        {
                            isLoaded
                                ? queueList.map((item, idx) => (<QueueItem id={idx + 1} {...item} key={idx} />))
                                : <Text>Loading....</Text>
                        }
                    </Flex> */}
                </Box>
            </Box>
        </AppLayout>
    );
};

export default QueueList;