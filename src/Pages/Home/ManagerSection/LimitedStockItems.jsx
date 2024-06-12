import { useEffect, useState } from "react";
import useAssets from "../../../Hooks/useAssets";
import Title from "../../../Components/Title";

const LimitedStockItems = () => {
    const {assets,loading} = useAssets();
    const [limitedAssets,setLimitedAssets] = useState(assets);
    const filterAssets = assets.filter(asset=> asset.quantity<10);
    useEffect(() => {
        if(!loading){
            setLimitedAssets(filterAssets); 
        }
      }, [loading]);

    return (
        <div className="w-5/6 mx-auto text-center mb-16">
            <Title heading={'limited stock items'} subHeading={'Here is the list of assets which are less than 10 in quantity.'} ></Title>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {limitedAssets.map(asset=>
                    <div key={asset._id} className="card bg-base-100 shadow-xl">
                        <figure><img className="w-[400px] h-[240px]" src={asset.image}  alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                            {asset.name}
                                <div className="badge badge-lg pb-1 bg-purple-600 text-white ">Quantity: {asset.quantity}</div>
                            </h2>
                        </div>
                    </div>
                )}
           </div>
        </div>
    );
};

export default LimitedStockItems;


{/* <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 text-left">
                    <p className="text-gray-600">Type: <span className="font-semibold text-purple-500">{type}</span> </p>
                    <p className="text-gray-600">Quantity: <span className="font-semibold text-purple-500">{quantity}</span> </p>
               </div>
              <div className="mb-2">
                    <p className="text-gray-600 text-left">Date Added: <span className="font-semibold text-purple-500">{date_added}</span> </p>
              </div> */}