import { Link } from "react-router-dom";
import Title from "../../../Components/Title";
import pic from '../../../assets/About/purple-maroon.jpg'


const ManageATeam = () => {
    return (
        <div className="w-5/6 md:w-full mx-auto pb-20">
             <Title heading={'Manage A Team'} subHeading={'You can buy a package and manage a team'} ></Title>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure> <img className="w-[400px] h-full " src={pic}/> </figure>
                <div className="card-body bg-gradient-to-b md:bg-gradient-to-r from-purple-200 via-white to-purple-500 rounded-r-2xl">
                    <h2 className="card-title">You can add members to your team!</h2>
                    <p>Buy a Package and add members to your team.</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-base">
                            <Link to='/upgradePackage'>Buy Package</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageATeam;