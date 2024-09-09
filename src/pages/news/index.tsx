
import { Link } from 'react-router-dom';
import AppLayout from '../../components/app-layout';
import Header from '../../components/header';
import NewsList from './ui/news-list';
import { BackIcon } from '../../icons/icons';

const News = () => {
    return (
        <AppLayout>
            <Header leftSide={<Link to={"/"}><BackIcon /></Link>} title='Новости' />
            <NewsList />
        </AppLayout>
    );
};

export default News;