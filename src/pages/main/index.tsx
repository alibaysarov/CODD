import { useTranslation } from 'react-i18next';
import AppLayout from '../../components/app-layout';
import Header from '../../components/header';
import ServiceList from '../../components/service-list';
import Language from './ui/language/language';

const Main = () => {
    const { t } = useTranslation()
    return (
        <AppLayout hasMenu={false}>
            <Header title={t("header.services")} rightSide={<Language />} />
            <ServiceList />
        </AppLayout>
    );
};

export default Main;