
import { Link } from 'react-router-dom';
import AppLayout from '../../components/app-layout';
import Header from '../../components/header';
import NewsList from './ui/news-list';
import { BackIcon } from '../../icons/icons';
import { useTranslation } from 'react-i18next';

const News = () => {
    const { t } = useTranslation()
    return (
        <AppLayout hasMenu={false}>
            <Header leftSide={<Link to={"/"}><BackIcon /></Link>} title={t("main.news")} />
            <NewsList />
        </AppLayout>
    );
};

export default News;