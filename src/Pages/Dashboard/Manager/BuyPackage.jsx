import { Helmet } from "react-helmet";
import Title from "../../../Components/Title";
import { useLoaderData } from "react-router-dom";
// import bg from "../../../assets/About/purple-water.jpg";
// import bg2 from "../../../assets/About/pink.png";
// import bg3 from "../../../assets/About/liquid-purple.jpg";



const BuyPackage = () => {
    const {_id,name,price,person_capacity,image} = useLoaderData();
    return (
        <div>
             <Helmet>
                <title>Asset Track Pro | Buy Package</title>
            </Helmet>
            <Title heading={'BUY YOUR DESIRED PACKAGE'} subHeading={`${name} Package has member limit upto ${person_capacity} persons`} ></Title>
            <div className="card w-1/2 h-[360px] mx-auto bg-base-100 shadow-xl image-full">
                <figure><img className="" src={image} alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <h2 className="uppercase text-center text-4xl my-6">{name} Package</h2>
                    <div className="text-xl my-6">
                        <p>Price: ${price}</p>
                        <p>Member Capacity: {person_capacity}</p>
                    </div>
                    <div className="card-actions justify-center">
                        <button className="btn btn-outline bg-purple-300 w-56">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyPackage;