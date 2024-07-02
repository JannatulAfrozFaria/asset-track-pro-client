import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useAssets = () => {
    // const [assets,setAssets] = useState([]);
    // const[loading,setLoading] = useState(true)
    // useEffect(()=>{
    //     setLoading(true)
    //     fetch('https://asset-track-pro-server.vercel.app/assets')
    //     .then(res=> res.json())
    //     .then(data=>{
    //         setAssets(data);
    //         setLoading(false);
    //     })
    // },[])
    const axiosPublic =  useAxiosPublic();
    const {data: assets = [],isPending: loading, refetch} = useQuery({
        queryKey: ['assets'],
        queryFn: async()=>{
            const res =  await axiosPublic.get('/assets');
            return res.data;
        }
    })
    return {assets,loading,refetch}
};

export default useAssets;