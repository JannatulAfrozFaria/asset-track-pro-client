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
        <div className="w-5/6 md:w-full mx-auto text-center mb-16">
             <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-delay="50" data-aos-duration="2000" >
                <Title heading={'limited stock items'} subHeading={'Here is the list of assets which are less than 10 in quantity.'} ></Title>
            </div>
            
           <div data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-out" data-aos-delay="200" data-aos-duration="2000" className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {limitedAssets.slice(0,6).map(asset=>
                    <div key={asset._id} className="card bg-base-100 shadow-xl">
                        <figure><img className="w-full h-[240px]" src={asset.image}  alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                            {asset.name}
                            </h2>
                            <div className=" py-1 px-3 rounded-md  text-left bg-purple-200 text-purple-600">Quantity: {asset.quantity}</div>
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