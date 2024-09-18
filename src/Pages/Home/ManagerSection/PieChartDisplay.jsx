// import { Pie } from "react-chartjs-2";
import Title from "../../../Components/Title";
import useAllEmployeeRequests from "../../../Hooks/useAllEmployeeRequests";
// import useRequest from "../../../Hooks/useRequest";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

 const PieChartDisplay = () => {
    const  [allEmployeeRequests] = useAllEmployeeRequests();
    const  returnableAssetRequest = allEmployeeRequests.filter(item=> 
        item.type === 'Returnable'
    );
    const returnableAssetCount = returnableAssetRequest.length;
    const  nonReturnableAssetRequest = allEmployeeRequests.filter(item=> 
        item.type === 'Non-Returnable'
    );
    const nonReturnableAssetCount = nonReturnableAssetRequest.length;

    

    const COLORS= ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    // custom shape for pi chart
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" >
          {`${(percent * 100).toFixed(0)}%`}
          </text>
      );
   };
    
    const pieChartData = [
        { name: 'Returnable', value: returnableAssetCount },
        { name: 'Non-Returnable', value: nonReturnableAssetCount },
    ]
    
    return (
        <div>
             <Title heading={'returnable and non-returnable asset requests'} subHeading={'Here is the list of returnable and non-returnable asset requests by all the employees'} ></Title>
             {/* <Pie data={chartData} /> */}
             <div className="w-1/2 mx-auto text-center justify-center">
                <PieChart width={400} height={400}>
                    <Pie
                        data={pieChartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {pieChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
                <div className="flex flex-col md:flex-row gap-4 w-5/6 mx-auto justify-center">
                    <div className="flex items-center">
                        <div className="w-[20px] h-[20px] bg-[#0088FE] mr-2 rounded-full"></div>
                        <div>Returnable</div>
                    </div>
                    <div className="flex items-center">
                        <div className="w-[20px] h-[20px] bg-[#00C49F] mr-2 rounded-full"></div>
                        <div>Non-Returnable</div>
                    </div>
                </div>
             </div>
        </div>
    );
}
export default PieChartDisplay;