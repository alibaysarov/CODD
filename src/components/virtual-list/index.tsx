import { Accordion } from '@chakra-ui/react';
import { FC, } from 'react';
import QueueItem from '../../pages/electronic-queue/queue-item';

interface Props<T> {
    items: T[];
    // height: number;
    // itemSize: (id: number) => number;
    // listRef: React.LegacyRef<List<any>>
    // children: (args: { style: React.CSSProperties, index: number; data: T }) => ReactNode;
}
//{ items, itemSize, height, listRef, children }
const QueueVirtualList: FC<Props<any>> = ({ items }) => {


    return (

        <Accordion defaultIndex={0} allowToggle={true}>
            {items.map((item, idx) => <QueueItem key={idx} {...item} />)}
        </Accordion>
    );
};

export default QueueVirtualList;