import { useEffect, useState } from "react";
import Title from "../../../Components/Title";
import useAssets from "../../../Hooks/useAssets";
import AssetCard from "./AssetCard";
import { Helmet } from "react-helmet";

const RequestAsset = () => {
    const [assets] = useAssets();
    // STATE FOR-----SEARCH-----
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState(assets);
    //to load all the Data initially when page is loaded
    useEffect(() => {
        setSearchResults(assets); 
      }, []);
      // FUNCTION FOR-----SEARCH-----
    const handleSearch = () =>{
        const results = assets.filter(asset=>
            asset.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    };
    const handleChange = event =>{
        setSearchTerm(event.target.value);
    }
    return (
        <div className='w-4/5 mx-auto text-center my-16'>
            <Helmet>
                <title>Asset Track Pro | Request An Asset</title>
            </Helmet>
            <Title heading={'request for an asset'} subHeading={'Here you can make a request for adding assets to your list'} ></Title>
            <h2 className="text-2xl mb-4 text-purple-500">Total Assets: {assets.length} </h2>
            {/* SECTION------*/}
            <div className='mb-8 flex flex-col md:flex-row gap-4 justify-center w-5/6 md:w-1/2 mx-auto'>
                {/* Search------- */}
                <div className="join">
                    <div className=''>
                        <div>
                            <input type="text" value={searchTerm}
                            onChange={handleChange} className="input input-bordered join-item" placeholder="Search"/>
                        </div>
                    </div>
                    <div className="indicator">
                        <button onClick={handleSearch} className="btn join-item btn-base">Search</button>
                    </div>
                </div>
                <div className='flex gap-4'>
                    {/* FILTER------OPTION */}
                    <div>
                        <select defaultValue={''} className="select select-bordered join-item ">
                                <option disabled>Filter</option>
                                <option>Available</option>
                                <option>Out-Of-Stock</option>
                                <option>Returnable</option>
                                <option>Non-Returnable</option>
                            </select>
                    </div>             
                </div>
            </div>
            {/* Grid of Assets */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {searchResults.map((asset)=> 
                    <AssetCard
                        key={asset._id} 
                        asset={asset}>
                    </AssetCard>)}
            </div>
        </div>
    );
};

export default RequestAsset;