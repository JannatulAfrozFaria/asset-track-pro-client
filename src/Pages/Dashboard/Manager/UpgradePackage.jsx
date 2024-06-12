import { Helmet } from 'react-helmet';
import Title from '../../../Components/Title';
import usePackages from '../../../Hooks/usePackages';
import { Link } from 'react-router-dom';

const UpgradePackage = () => {
    const {packages,loading,refetch} = usePackages();
    console.log(packages);
    return (
        <div className='w-4/5 mx-auto text-center my-16'>
             <Helmet>
                <title>Asset Track Pro | Select Package</title>
            </Helmet>
            <Title heading={'SELECT YOUR DESIRED PACKAGE'} subHeading={`PACKAGE OPTIONS ( ${packages.length} )`} ></Title>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 '>
                {packages.map(pack=>
                    // <div key={pack._id} className="card bg-purple-200 text-purple-700">
                    //     <div className="card-body items-center text-center">
                    //         <div><img src={pack.image} alt="" /> </div>
                    //         <h2 className="card-title">{pack.name} Package</h2>
                    //         <p>Price: $ {pack.price}</p>
                    //         <p>Member Capacity: {pack.person_capacity}</p>
                    //         <div className="card-actions justify-center w-3/4 mx-auto mt-4">
                    //             <button className="btn btn-base w-36">
                    //                 <Link to={`/dashboard/buyPackage/${pack._id}`} >Buy</Link>
                    //             </button>
                    //             <button className="btn btn-base w-36">
                    //                 <Link to={'/'} >Home</Link>
                    //             </button>
                    //         </div>
                    //     </div>
                    // </div>
                    <div key={pack._id} className="card mx-auto bg-base-100 shadow-xl image-full">
                    <figure><img className="" src={pack.image} alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="uppercase text-center text-4xl text-purple-200 my-6 "><span className=' font-bold'>{pack.name}</span> <br /> Package</h2>
                        <div className="text-xl my-6">
                            <p>Price: <span className='text-yellow-400 font-semibold'>$ {pack.price}.00</span> </p>
                            <p>Member Capacity: <span className='text-purple-200 font-semibold'> {pack.person_capacity}</span> </p>
                        </div>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline bg-purple-300 w-56">
                                <Link to={`/dashboard/buyPackage/${pack._id}`} >Buy</Link>
                            </button>
                            <button className="btn btn-outline bg-purple-300 w-56">
                                <Link to={'/dashboard/payment'} >Payment</Link>
                            </button>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
};

export default UpgradePackage;