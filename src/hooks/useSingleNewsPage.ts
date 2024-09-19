import { useQuery } from "@tanstack/react-query"
import { NewsArticleService } from "../api"

export const useSingleNewsPage = (url: string) => {
    return useQuery({
        queryFn: () => NewsArticleService.getNewsArticleGet(url),
        queryKey: ['news', 'single']
    })
}