import { useEffect, useState } from "react";
import Title from "../../../Components/Title";
import useAssets from "../../../Hooks/useAssets";
import AssetCard from "./AssetCard";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const RequestAsset = () => {
    const {assets,loading} = useAssets();
    // STATE FOR-----SEARCH-----
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState(assets);
    //to load all the Data initially when page is loaded
    useEffect(() => {
        if(!loading){
            setSearchResults(assets); 
        }
      }, [loading]);
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
    //FUNCTION FOR ------FILTER------
    const handleFilterByStock= (stock) =>{
        const filteredAssets = searchResults.filter(item=> {
            if(stock && item.stock === stock){
                return item;
            }
            else if(!stock){
                return item;
            }
        })
        setSearchResults(filteredAssets);
        console.log(filteredAssets);
    }
    const handleFilterByType= (type) =>{
        const filteredAssets = searchResults.filter(item=> {
           
            if(type && item.type === type){
                console.log(item);
                return item;
            }
            else if(!type){
                return item;
            }
            // return item;
        })
        setSearchResults(filteredAssets);
    }
    return (
        <div className='w-4/5 mx-auto text-center my-16'>
            <Helmet>
                <title>Asset Track Pro | Request An Asset</title>
            </Helmet>
            <Title heading={'request for an asset'} subHeading={'Here you can make a request for adding assets to your list'} ></Title>
            <h2 className="text-2xl mb-4 text-purple-500">Total Assets: {assets.length} </h2>
            {/* FILTER AND SEARCH-----SECTION------*/}
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
                {/* FILTER----SECTION---- */}
                <div>
                    <details className="dropdown">
                        <summary className="btn bg-purple-200 w-28 md:w-36">Filter <IoIosArrowDown /></summary>
                        <ul className="p-2 shadow menu dropdown-content z-[20] bg-base-100 rounded-box w-52">
                            <li className="bg-base-100"><Link onClick={()=>handleFilterByStock('Available')}>Available</Link></li>
                            <li className="bg-base-100"><Link onClick={()=>handleFilterByStock('Out-of-Stock')}>Out-of-Stock</Link></li>
                            <li><Link onClick={()=>handleFilterByType('Returnable')}>Returnable</Link></li>
                            <li><Link onClick={()=>handleFilterByType('Non-Returnable')}>Non-Returnable</Link></li>
                        </ul>
                    </details>
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