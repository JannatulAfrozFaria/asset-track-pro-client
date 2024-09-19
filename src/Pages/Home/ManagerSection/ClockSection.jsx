import { useEffect, useState } from 'react';
import Clock from 'react-clock';
import Title from '../../../Components/Title';

const ClockSection = () => {
    let time = new Date().toLocaleTimeString();
    const [ctime,setCtime] = useState(time);
    const UpdateTime = () =>{
        time = new Date().toLocaleTimeString();
        setCtime(time);
    }
    setInterval(UpdateTime,1000)
    return (
        <div className='w-5/6 md:w-full mx-auto'>
            <div data-aos-once="false">
                <Title heading={'live - clock'} subHeading={'Time According to: Local Area'} ></Title>
            </div>
           
            <div className='w-1/2 mx-auto bg-purple-100 p-6  border-purple-700 border-4 '>
                    <h2 className='text-2xl text-purple-600 text-center font-bold'>{ctime} </h2>
                    {/* <div className='w-5/6 mx-auto text-center'>
                        <button className=' btn btn-base p-2 px-4 rounded-xl' onClick={UpdateTime} >Load Current Time</button>
                    </div> */}
            </div>
        </div>
    );
};

export default ClockSection;