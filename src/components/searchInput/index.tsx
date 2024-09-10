import { Divider, IconButton, Input, InputGroup, InputRightElement, Stack } from '@chakra-ui/react';
import { SearchIcon } from "@chakra-ui/icons"

interface Props {
    value: string | number | readonly string[] | undefined,
    changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
    clickHandler: React.MouseEventHandler<HTMLButtonElement>
}
const SearchInput = ({ value, changeHandler, clickHandler }: Props) => {
    return (
        <InputGroup size={"md"} borderColor={'brand_accent.500'} w={"100%"} mx={"-2px"}>
            <Input value={value} onChange={changeHandler} focusBorderColor={"brand_accent.400"} placeholder='Поиск по номеру' />
            <InputRightElement w={"57px"}>
                <Stack h={"inherit"} direction={"row"}>
                    <Divider orientation='vertical' bg={"rgba(0, 0, 0, 0.05)"} />
                    <IconButton onClick={clickHandler} colorScheme='transparent' aria-label='search' icon={<SearchIcon color={"brand_accent.500"} />} />
                </Stack>
            </InputRightElement>
        </InputGroup>
    );
};

export default SearchInput;