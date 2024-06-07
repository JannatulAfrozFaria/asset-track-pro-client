import { useEffect, useState } from "react";

const useAssets = () => {
    const [assets,setAssets] = useState([]);
    const[loading,setLoading] = useState(true)
    useEffect(()=>{
        fetch('http://localhost:5000/assets')
        .then(res=> res.json())
        .then(data=>{
            setAssets(data);
            setLoading(false);
        })
    })
    return [assets,loading]
};

export default useAssets;