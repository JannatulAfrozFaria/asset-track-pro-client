

const Asset = ({asset}) => {
    const {name,type, quantity,stock,date_added,image} = asset;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="w-[400px] h-[240px]" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                {name}
                <div className="badge badge-secondary">{stock}</div>
                </h2>
                <p>Type: {type}</p>
                <p>Quantity: {quantity}</p>
                <p>Date Added: {date_added}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline text-purple-700 font-bold btn-sm">Update</button>
                    <button className="btn btn-outline text-red-500 btn-sm">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Asset;