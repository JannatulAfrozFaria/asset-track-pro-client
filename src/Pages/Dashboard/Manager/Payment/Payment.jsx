import { Helmet } from "react-helmet";
import Title from "../../../../Components/Title";


const Payment = () => {
    return (
        <div>
            <Helmet>
                <title>Asset Track Pro | Select Package</title>
            </Helmet>
            <Title heading={'PAYMENT'} subHeading={'Buy this package and enjoy our service!'} ></Title>
        </div>
    );
};

export default Payment;