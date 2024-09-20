import { useQuery } from "@tanstack/react-query"
import { EleQueueService } from "../api"



export const useElQueueQuery = (str: string) => {
    const transformList = (list: any[]) => list.map((el, idx) => ({
        ...el,
        id: idx + 1
    }))
    return useQuery({
        queryFn: async () => {
            //, "", "", 60
            const data = await EleQueueService.getEleQueue(str.toUpperCase())
            return transformList(data)
            //  data.map((el, idx) => ({
            //     ...el,
            //     id: idx + 1
            // }))
        },
        staleTime: str.length ? 1000 : import.meta.env.VITE_STALE_TIME,
        queryKey: ["queue", str.length ? "search" : "all",],
        //placeholderData: keepPreviousData,
    })
}