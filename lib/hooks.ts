import useSWR from "swr";
import fecher from "./fecher";

export const useMe=()=>{
    const {data,error}=useSWR("/me",fecher)
    return{
        user: data,
        isLoading: !data && error,
        isError: error
    }
}
export const usePlaylist=()=>{
   const {data,error} = useSWR("/playlist",fecher);
   return{
        playlist:(data as any) || [],
        isLoading: !data && error,
        isError: error
   }
}