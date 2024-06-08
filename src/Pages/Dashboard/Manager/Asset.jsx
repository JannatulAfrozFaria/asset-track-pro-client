

const Asset = ({asset}) => {
    const {name,type, quantity,stock,date_added,image} = asset;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="w-[400px] h-[240px]" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-primary">{stock}</div>
                </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 text-left">
                    <p className="text-gray-600">Type: <span className="font-semibold text-purple-500">{type}</span> </p>
                    <p className="text-gray-600">Quantity: <span className="font-semibold text-purple-500">{quantity}</span> </p>
               </div>
              <div className="mb-2">
                    <p className="text-gray-600 text-left">Date Added: <span className="font-semibold text-purple-500">{date_added}</span> </p>
              </div>
                <div className="flex gap-2 justify-evenly">
                    <button className="btn btn-outline text-purple-700 font-bold btn-sm w-1/2">Update</button>
                    <button className="btn btn-outline text-red-500 btn-sm w-1/2">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Asset;