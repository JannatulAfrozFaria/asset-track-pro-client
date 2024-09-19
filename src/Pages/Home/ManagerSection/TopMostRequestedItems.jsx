import Title from "../../../Components/Title";
import useAllEmployeeRequests from "../../../Hooks/useAllEmployeeRequests";


const TopMostRequestedItems = () => {
    const [allEmployeeRequests] = useAllEmployeeRequests();
    // Count the requests for each asset and store the image URL
  const requestCounts = allEmployeeRequests.reduce((acc, request) => {
    if (!acc[request.name]) {
      acc[request.name] = { count: 0, image: request.image };
    }
    acc[request.name].count += 1;
    return acc;
  }, {});

  // Convert the counts object to an array of [asset, data] pairs
  const requestCountsArray = Object.entries(requestCounts);

  // Sort the array by count in descending order
  requestCountsArray.sort((a, b) => b[1].count - a[1].count);

  // Get the top requested assets (e.g., top 5)
  const topRequestedAssets = requestCountsArray.slice(0, 4);
//   console.log(topRequestedAssets)
    return (
        <div className="w-5/6 md:w-full mx-auto">
             <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-delay="100" data-aos-duration="2000" >
                 <Title heading={'TOP MOST REQUESTED ITEMS'} subHeading={'Here is the list of top most Requested Items'} ></Title>
            </div>
            
            <div  data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-delay="300" data-aos-duration="2000" className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {topRequestedAssets.map(([asset, data], index) => (
                    // <li key={index}>{asset}: {count} requests</li>
                    <div key={index} className="card bg-base-100 shadow-xl">
                        <figure><img className=" w-full h-[200px]" src={data.image} alt={asset} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{asset}: {data.count} {data.count === 1 ? 'Request' : 'Requests' }</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopMostRequestedItems;