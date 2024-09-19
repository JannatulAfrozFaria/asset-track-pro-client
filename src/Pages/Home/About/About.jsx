import { Link } from 'react-router-dom';
import Title from '../../../Components/Title';
import icon from '../../../assets/About/icon.png'

const About = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20 w-5/6 md:w-full mx-auto'>
            <div className='w-4/5 md:w-full mx-auto'>
                <Title title={'About Us'} caption={'Efficiently managing your assets with precision and expertise'}></Title>
            </div>
            <div className='flex flex-col md:flex-row-reverse justify-center items-center bg-slate-500 bg-opacity-60 pb-10 md:pb-20 pt-0 md:pt-12 px-8 md:px-36 gap-6'>
                  <div className='w-1/3'>
                      <img className=' animate-in zoom-in delay-500 duration-1000 w-full mt-10 md:mt-0' src={icon} alt="" />
                  </div>
                  <div className='w-full md:2/3 text-center md:text-right'>
                      {/* <p>Aug 20, 2029</p> */}
                      <p className=" animate-in spin-in-6 delay-300 duration-1000 uppercase font-bold my-3">Motto Of Asset Track Pro</p>
                      <p className=' animate-in slide-in-from-bottom-48 delay-500 duration-1000 text-xs md:text-base'>Welcome to AssetTrackPro, your trusted partner in efficient asset management. Our mission is to simplify the way you track, manage, and optimize your assets. With cutting-edge technology and a user-friendly interface, we provide comprehensive solutions tailored to meet your unique needs. Our dedicated team of experts is committed to delivering exceptional service and support, ensuring your assets are always performing at their best. Join us on the journey to streamlined asset management and experience the peace of mind that comes with knowing your investments are in capable hands.</p>
                      <Link to='/login'>
                            <button className="animate-bounce delay-150 duration-1000 btn btn-outline border-4 mt-4 text-white w-1/2">Join Us</button>
                        </Link>
                      {/* <button className=' animate-bounce delay-150 duration-1000 btn btn-outline border-4 mt-4 text-white w-1/2' >Join Us</button> */}
                  </div>
             </div>
        </div>
    );
};

export default About;