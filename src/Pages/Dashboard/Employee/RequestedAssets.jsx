import { Helmet } from "react-helmet";
import Title from "../../../Components/Title";


const RequestedAssets = () => {
    return (
        <div>
             <Helmet>
                <title>Asset Track Pro | Requested Assets</title>
            </Helmet>
            <Title heading={'my requested assets'} subHeading={'Here is the list of assets requested by you'} ></Title>
        </div>
    );
};

export default RequestedAssets;