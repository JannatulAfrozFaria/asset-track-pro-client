import { Helmet } from "react-helmet";
import Title from "../../../Components/Title";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";


const Profile = () => {
    const {user} = useAuth();
    return (
        <div className="w-3/4 mx-auto text-center" >
                <Helmet>
                    <title>Asset Track Pro | Profile</title>
                </Helmet>
                <Title heading={'Profile details'} subHeading={'Here is your profile info'}></Title>
            <div>
                <img className="w-96 mx-auto rounded-3xl" src={user?.photoURL} alt="" />
            </div>
            <div className="grid grid-cols-1 gap-4 mt-6">
                <h2>User Name: {user?.displayName} </h2>
                <h2>User Name: {user?.email} </h2>
                <div>
                    {/* <Link to={`/dashboard/updateProfile/${user?.email}`} > */}
                    {/* <Link to={`/dashboard/updateProfile`} >
                        <button className="btn btn-base mb-8">Update Info</button>
                    </Link> */}
                    
                </div>
            </div>
        </div>
    );
};

export default Profile;