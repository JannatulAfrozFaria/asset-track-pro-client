import { Helmet } from "react-helmet";
import Title from "../../../Components/Title";


const MyTeam = () => {
    return (
        <div className='w-5/6 mx-auto text-center my-16'>
             <Helmet>
                <title>Asset Track Pro | My Team</title>
            </Helmet>
            <Title heading={'my team'} subHeading={'Here is the list of members in your team.'} ></Title>
            <h2 className="text-2xl mb-4 text-purple-500">Total Members: ( <span className="font-semibold">  </span> ) </h2>
        </div>
    );
};

export default MyTeam;