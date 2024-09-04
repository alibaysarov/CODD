
import AppLayout from '../../components/app-layout';
import Header from '../../components/header';
import ServiceList from '../../components/service-list';
import Language from './ui/language/language';

const Main = () => {
    return (
        <AppLayout>
            <Header title='Сервисы' rightSide={<Language />} />
            <ServiceList />
        </AppLayout>
    );
};

export default Main;