import { Link } from 'react-router-dom';
import AppLayout from '../../../components/app-layout';
import Header from '../../../components/header';
import { BackIcon } from '../../../icons/icons';
import InfoButton from '../../../components/info-button';
import QueueStats from './ui/queue-stats';
import { Box, Skeleton, Stack } from '@chakra-ui/react';
import SearchInput from '../../../components/searchInput';
import QueueItem from '../queue-item';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import NotFoundModal from './ui/NotFoundModal';
import InfoModal from './ui/InfoModal';
import { EleQueueService } from '../../../api';
import { useDebounce } from '../../../hooks/useDebounce';
import { ElectronicQueueItem } from '../types';
import QueueVirtualList from '../../../components/virtual-list';

const SkeletonQueueList = () => {
    return (
        <Stack gap={"5px"}>
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
                    <Skeleton h={"51px"} borderRadius={"5px"} />
                ))
            }
        </Stack>
    )
}

const QueueList = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const debouncedSearch = useDebounce(searchValue);
    const [queueList, setQueueList] = useState<ElectronicQueueItem[]>([]);

    const [infoOpened, setInfoOpened] = useState(false);
    const [notFound, setNotFound] = useState({
        isOpen: false,
        title: ""
    });
    const [hasItemsFound, setHasItemsFound] = useState(false);
    const listRef = useRef(null);
    const [totalItemsNum, setTotalItemsNum] = useState("---")
    useEffect(() => {
        const fetchQueueList = async () => {
            try {

                //"", "", "", 30
                const data = await EleQueueService.getEleQueue()
                console.log("res came")
                setTotalItemsNum(`${data.length}`)
            } catch (err) {
                console.log("err ", err);
            }
        }
        fetchQueueList()
    }, [])

    useEffect(() => {
        const fetchQueueList = async (str = "") => {
            try {
                setIsLoaded(false)
                //"", "", "", 30
                const data = await EleQueueService.getEleQueue(str.toUpperCase())
                console.log("res came")
                const startTime = performance.now();
                //setList(data)
                setQueueList(data.map((el, idx) => ({
                    ...el,
                    isOpened: false,
                    id: idx + 1
                })));
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
    const clickHandler = (id: number) => {
        console.log("idx is ", id)
        setQueueList(prev => prev.map((el, idx) => {
            if (idx + 1 == id) {
                console.log("is equal for id " + id + " and idx " + idx, idx + 1 == id)
            }
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
    const getItemSize = useCallback((idx: number) => {
        return queueList[idx].isOpened ? 102 : 51
    }, [queueList]);
    useEffect(() => {
        console.log("list is ", queueList)
    }, [queueList])
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
                <QueueStats total={totalItemsNum} />
                <SearchInput clickHandler={() => console.log("123")} value={searchValue} changeHandler={changeHandler} />
                <Box my={"10px"}>
                    {
                        isLoaded
                            ? <QueueVirtualList
                                height={600}
                                itemSize={getItemSize}
                                items={queueList}
                                listRef={listRef}
                            >
                                {({ index, style }) => {
                                    const item = queueList[index];

                                    return (
                                        <QueueItem style={style} clickHandler={clickHandler} {...item} isOpened={false} />
                                    )
                                }}
                            </QueueVirtualList>
                            : <SkeletonQueueList />
                    }


                </Box>
            </Box>
        </AppLayout>
    );
};

export default QueueList;