import { Link } from "react-router-dom";
import Title from "../../../Components/Title";
import pic from '../../../assets/About/purple-maroon.jpg'


const ManageATeam = () => {
    return (
        <div className="w-5/6 md:w-full mx-auto pb-8 md:pb-20">
            <div  data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-delay="50" data-aos-duration="2000">
                <Title heading={'Manage A Team'} subHeading={'You can buy a package and manage a team'} ></Title>
            </div>
            <div className="card md:card-side bg-base-100 shadow-xl">
                <figure> <img className="w-[400px] h-full " src={pic}/> </figure>
                <div className="card-body bg-gradient-to-b md:bg-gradient-to-r from-purple-200 via-white to-purple-500 rounded-b-2xl md:rounded-bl-none md:rounded-tr-2xl ">
                    <h2 data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-delay="100" data-aos-duration="2000"
                     className="card-title ">You can add members to your team!</h2>
                    <p data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-delay="150" data-aos-duration="2000">Buy a Package and add members to your team.</p>
                    <div className="card-actions justify-start">
                        <button className=" animate-bounce delay-200 duration-1000 btn btn-sm w-full md:w-1/3 btn-base">
                            <Link to='/upgradePackage'>Buy Package</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageATeam;