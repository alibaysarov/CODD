import { Flex } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
//import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';
interface Props<T> {
    items: T[];
    height: number;
    itemSize: number;
    listRef: React.LegacyRef<List<any>>
    children: (args: { style: React.CSSProperties, index: number; data: T }) => ReactNode;
}
const VirtualList: FC<Props<any>> = ({ items, height, itemSize, listRef, children }) => {
    const listStyle = {
        display: "flex",
        flexdDirection: "column",
        gap: "5px"
    }
    return (
        <Flex direction={"column"} gap={"5px"}>

            <List
                style={listStyle}
                height={height}
                itemCount={items.length}
                itemSize={itemSize}
                width={"100%"}
                ref={listRef}
            >
                {({ index, style }) => children({ index, style, data: items[index] })}
            </List>

        </Flex>
    );
};

export default VirtualList;