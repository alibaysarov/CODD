import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { EleQueueService } from "../api"

export const useElQueueQuery = (str: string) => {
    return useQuery({
        queryFn: async () => {
            const data = await EleQueueService.getEleQueue(str.toUpperCase(), "", "", 60)
            return data.map((el, idx) => ({
                ...el,
                id: idx + 1
            }))
        },
        staleTime: str.length ? 1000 : import.meta.env.VITE_STALE_TIME,
        queryKey: ["queue", str.length ? "search" : "all"],
        placeholderData: keepPreviousData,
    })
}