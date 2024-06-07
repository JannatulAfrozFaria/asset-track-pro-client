import Title from '../../../Components/Title';
import useAssets from '../../../Hooks/useAssets';
import Asset from './Asset';

const AllAssets = () => {
    const [assets] = useAssets();
    console.log(assets);
    return (
        <div className='w-4/5 mx-auto text-center my-16'>
            <Title heading={'ASSET LIST'} subHeading={'All the Returnable and Non-Returnable Assets are listed here.'} ></Title>
            <h2 className="text-2xl mb-4 text-purple-500">Total Assets: {assets.length} </h2>
            {/* SECTION------*/}
            <div className='mb-8 flex flex-col md:flex-row justify-center w-5/6 md:w-1/2 mx-auto'>
                {/* Filter ANd Search------- */}
                <div className="join">
                    <div className='w-1/3 md:full'>
                        <div>
                            <input className="input input-bordered join-item" placeholder="Search"/>
                        </div>
                    </div>
                    <select className="select select-bordered join-item w-1/3 md:full">
                        <option disabled selected>Filter</option>
                        <option>Available</option>
                        <option>Out-Of-Stock</option>
                    </select>
                    <div className="indicator w-1/3 md:full">
                        <button className="btn join-item btn-base">Search</button>
                    </div>
                </div>
                {/* ----SORT---SECTION----*/}
                <div className='mt-4 md:mt-0'>
                    <div className="join">
                        <select className="select select-bordered join-item">
                            <option disabled selected>Sort</option>
                            <option>Quantity</option>
                        </select>
                        <div className="indicator">
                            <button className="btn join-item btn-base">Sort</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Grid of Assets */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {assets.map((asset)=> 
                    <Asset 
                        key={asset.id} 
                        asset={asset}>
                    </Asset>)}
            </div>
        </div>
    );
};

export default AllAssets;