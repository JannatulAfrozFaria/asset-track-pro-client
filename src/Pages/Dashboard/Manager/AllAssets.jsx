import { useEffect, useState } from 'react';
import Title from '../../../Components/Title';
import useAssets from '../../../Hooks/useAssets';
import Asset from './Asset';
import { IoIosArrowDown } from "react-icons/io";

const AllAssets = () => {
    const [assets] = useAssets();
    // console.log(assets);

    // STATE FOR-----SEARCH-----
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState(assets);

    //STATE FOR-----SORT------
    // const [assetList,setAssetList] = useState(assets);

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
    //FUNCTION FOR ------FILTER------

    //FUNCTION FOR-----SORT------
    const handleQuantitySorting = () =>{
        const sortByQuantity = [...searchResults.sort((a,b)=>{
            return parseInt(b.quantity.slice(1)) - parseInt(a.quantity.slice(1))
        })]
        setSearchResults(sortByQuantity);
    }

    return (
        <div className='w-4/5 mx-auto text-center my-16'>
            <Title heading={'ASSET LIST'} subHeading={'All the Returnable and Non-Returnable Assets are listed here.'} ></Title>
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
                    {/* ----SORT---SECTION----*/}
                    <div className=''>
                        <div>
                            <div className="dropdown dropdown-bottom dropdown-end">
                            <div tabIndex={0} role="button " className="btn bg-purple-200 w-28 md:w-36">Sort  <IoIosArrowDown /> </div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-boxw-52">
                                <li onClick={handleQuantitySorting} ><a>Quantity</a></li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Grid of Assets */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {searchResults.map((asset)=> 
                    <Asset 
                        key={asset._id} 
                        asset={asset}>
                    </Asset>)}
            </div>
        </div>
    );
};

export default AllAssets;