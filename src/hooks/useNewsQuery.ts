import { useQuery } from '@tanstack/react-query';
import { NewsArticleService } from '../api';


type Options = {
    limit?: number,
    offset?: number,
}
export const useNewsQuery = ({ limit, offset }: Options) => {
    return useQuery({
        queryFn: () => NewsArticleService.getNewsArticleAll(limit, offset),
        staleTime: import.meta.env.VITE_STALE_TIME,
        queryKey: ["news", "all"]
    })
}