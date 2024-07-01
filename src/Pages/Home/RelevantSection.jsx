import useAdmin from "../../Hooks/useAdmin";
import useAuth from "../../Hooks/useAuth";
import PendingRequests from "./ManagerSection/PendingRequests";
import LimitedStockItems from "./ManagerSection/LimitedStockItems";
import PieChartDisplay from "./ManagerSection/PieChartDisplay";
import Events from "./EmployeeSections/Events";
import MyPendingRequests from "./EmployeeSections/MyPendingRequests";



const RelevantSection = () => {
    const {user} = useAuth();
    const [isHR] = useAdmin();
    return (
        <div>
            {/* {user &&
                <>
                    <MyPendingRequests></MyPendingRequests>
                    <Events></Events>
                </> 
            }
            {isHR &&
                <>
                    <PendingRequests></PendingRequests>
                    <LimitedStockItems></LimitedStockItems>
                    <PieChart></PieChart>
                    <Events></Events>
                </> 
            } */}

            { isHR ?
                <>
                    <PendingRequests></PendingRequests>
                    <LimitedStockItems></LimitedStockItems>
                    <PieChartDisplay></PieChartDisplay>
                    <Events></Events>
                </>   
                :
                <>
                    <MyPendingRequests></MyPendingRequests>
                    <Events></Events>
                </>     
             }
        </div>
    );
};

export default RelevantSection;