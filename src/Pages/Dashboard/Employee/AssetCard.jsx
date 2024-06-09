import useAuth from "../../../Hooks/useAuth";


const AssetCard = ({asset}) => {
    const {name,type, quantity,stock,date_added,image,_id} = asset;
    const{user} = useAuth();

    const handleRequest = (item) =>{
        console.log(item);
        const requestedAsset = {
            assetId: _id,
            email: user.email,
            name,type,date_added,image
        }
    }
    return (
        // <div className="card card-side bg-base-100 shadow-xl">
        //     <figure><img className="h-[260px]" src={image} alt="Movie"/></figure>
        //     <div className="card-body">
        //         <h2 className="card-title">{name}</h2>
        //         <p>Type:{type} </p>
        //         <p>Availability:{type} </p>
        //         <div className="card-actions justify-end">
        //             <button className="btn btn-primary">Request</button>
        //         </div>
        //     </div>
        // </div>
        <div className="card bg-base-100 shadow-xl image-full h-[260px]">
            <figure><img className="h-[260px]" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-3xl">{name}</h2>
                <div className="grid grid-cols-1 gap-2 my-2">
                    <p>Type: {type}</p>
                    <p>Availability: {stock} </p>
                </div>
                <div className="card-actions justify-center">
                    <button onClick={()=>handleRequest(asset)} className="btn btn-primary">Request</button>
                </div>
            </div>
        </div>
    );
};

export default AssetCard;