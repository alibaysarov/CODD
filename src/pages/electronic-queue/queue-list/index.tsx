import { Link } from 'react-router-dom';
import AppLayout from '../../../components/app-layout';
import Header from '../../../components/header';
import { BackIcon } from '../../../icons/icons';
import InfoButton from '../../../components/info-button';
import QueueStats from './ui/queue-stats';
import { Box, Skeleton, Stack } from '@chakra-ui/react';
import SearchInput from '../../../components/searchInput';
import React, { useEffect, useRef, useState } from 'react';
import NotFoundModal from './ui/NotFoundModal';
import InfoModal from './ui/InfoModal';
import { EleQueueService } from '../../../api';

import QueueVirtualList from '../../../components/virtual-list';
import { useQuery } from '@tanstack/react-query';
import { useElQueueQuery } from '../../../hooks/useElQueueQuery';
import { useTranslation } from 'react-i18next';

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
    const [searchValue, setSearchValue] = useState("");

    const [infoOpened, setInfoOpened] = useState(false);
    const [notFound, setNotFound] = useState({
        isOpen: false,
        title: ""
    });
    const [page, setPage] = useState(0);
    const observerRef = useRef(null);
    const fetchQueueList = async () => (await EleQueueService.getEleQueue()).length
    const { data: totalItems, isLoading: isNumberLoading } = useQuery({
        queryFn: fetchQueueList,
        queryKey: ["queue", "total"],
        staleTime: import.meta.env.VITE_STALE_TIME
    })
    const [startSearch, setStartSearch] = useState("");
    const { data: queueItems, isSuccess, isError, isLoading } = useElQueueQuery(startSearch)
    if (isError) {
        console.log("redirect to err page")
    }
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
    const clickStartSearchHandler = () => {
        setStartSearch(searchValue);

    }
    useEffect(() => {
        if (startSearch.length && queueItems?.length == 0 && isSuccess && !isLoading) {
            setNotFound({
                isOpen: true,
                title: startSearch
            })
        }
    }, [queueItems, startSearch]);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setPage((prevPage) => prevPage + 1);
                }
            },
            { rootMargin: '0px' }
        );

        if (observerRef.current) observer.observe(observerRef.current);

        return () => observer && observer.disconnect();
    }, []);
    useEffect(() => {
        console.log("new page ", page);
    }, [page])
    const { t } = useTranslation()
    return (
        <AppLayout hasMenu={false}>
            <Header
                leftSide={<Link to={"/el-queue"}><BackIcon /></Link>}
                title={t("elQueue.queueObserver")}
                rightSide={<InfoButton clickHandler={() => setInfoOpened(true)} />}
            />
            <InfoModal isOpen={infoOpened} onClose={() => setInfoOpened(false)} />
            <NotFoundModal title={notFound.title} isOpen={notFound.isOpen} onClose={closeNotFound} />
            <Box px={"11px"} overflowY={"auto"}>
                <QueueStats total={isNumberLoading ? "---" : String(totalItems)} />
                <SearchInput clickHandler={clickStartSearchHandler} value={searchValue} changeHandler={changeHandler} />
                <Box my={"10px"}>
                    {
                        isLoading
                            ? <SkeletonQueueList />
                            : <QueueVirtualList items={isSuccess ? queueItems : []} />
                    }
                </Box>


                {isSuccess && <div className='inf-scroll' ref={observerRef} />}
            </Box>
        </AppLayout>
    );
};

export default QueueList;