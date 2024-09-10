import { IconButton } from '@chakra-ui/react';
import { InfoIcon } from '../../icons/icons';


interface Props {
    clickHandler?: React.MouseEventHandler<HTMLButtonElement>
}
const InfoButton = ({ clickHandler }: Props) => {
    return (
        <IconButton
            onClick={clickHandler}
            colorScheme='transparent'
            aria-label='info'
            bg={"transparent"}
            icon={<InfoIcon />} />
    );
};

export default InfoButton;