import { Flex } from '@chakra-ui/react';
import { FixedSizeList as List } from 'react-window';
interface Props<T> {
    items: T[];
    height: number;
    itemSize: number;
    children: (args: { index: number; data: T }) => ReactNode;
}
const VirtualList: FC<Props<any>> = ({ items, height, itemSize, children }) => {
    return (
        <Flex direction={"column"} gap={"5px"}>
            <List
                height={height}
                itemCount={items.length}
                itemSize={itemSize}
                width="100%"
            >
                {({ index }) => children({ index, data: items[index] })}
            </List>
        </Flex>
    );
};

export default VirtualList;