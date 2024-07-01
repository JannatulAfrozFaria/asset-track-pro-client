import Title from "../../../Components/Title";
import useRequest from "../../../Hooks/useRequest";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const PieChartSection = () => {
    const [allRequests] = useRequest();
    const COLORS= ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    const pieChartData = allRequests.map(request =>{
        return {name:request.type}
    })
    return (
        <div>
             <Title heading={'returnable and non-returnable asset requests'} subHeading={'Here is the list of returnable and non-returnable asset requests by all the employees'} ></Title>
             {/* <Pie data={chartData} /> */}
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
        </div>
    );
};

export default PieChartSection;