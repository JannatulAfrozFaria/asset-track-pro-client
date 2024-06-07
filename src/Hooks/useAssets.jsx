import { useEffect, useState } from "react";

const useAssets = () => {
    const [assets,setAssets] = useState([]);
    const[loading,setLoading] = useState(true)
    useEffect(()=>{
        fetch('/assets.json')
        .then(res=> res.json())
        .then(data=>{
            setAssets(data);
            setLoading(false);
        })
    })
    return [assets,loading]
};

export default useAssets;