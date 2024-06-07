import useAssets from '../../../Hooks/useAssets';
import Asset from './Asset';

const AllAssets = () => {
    const [assets] = useAssets();
    console.log(assets);
    return (
        <div className='w-4/5 mx-auto text-center my-16'>
            <h2 className="text-3xl">Total Assets: {assets.length} </h2>
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