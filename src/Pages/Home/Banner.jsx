import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import bg1 from '../../assets/About/black-blue-purple.jpg'
import bg2 from '../../assets/About/feather-1.jpg'

const Banner = () => {
    return (
        <div className="mt-0 md:mt-12">
            <Carousel className=""
                autoPlay
                interval={2000}
                infiniteLoop
            >
                {/* SLIDER-----1 */}
                <div className="relative">
                    <div className="absolute top-1/4 left-1/5 mx-auto ">
                        <p className="text-xs md:text-lg text-white text-center w-5/6 md:w-1/2 my-2 md:my-8 mx-auto">Join AssetTrackPro today and revolutionize your asset management. Streamline tracking, maximize efficiency, and gain complete control over your assets with our intuitive platform. Experience the ease and precision of AssetTrackPro, your trusted partner in effective asset management.</p>
                        <Link to='/joinAsManager'>
                            <button className=" animate-bounce btn w-1/2 md:w-1/3 mx-auto btn-sm  bg-white text-purple-800 ">Join As HR Manager</button>
                        </Link>
                    </div>
                    <img src={'https://i.postimg.cc/MK8tSD79/black-blue-purple.jpg'} />
                </div>
                {/* SLIDER------2 */}
                <div>
                    <div className="absolute top-1/4 left-1/5 mx-auto ">
                        <p className="text-xs md:text-lg text-white text-center w-5/6 md:w-1/2 my-2 md:my-8 mx-auto">Elevate your asset management. Simplify tracking, enhance efficiency, and gain total oversight of your assets with our user-friendly platform. Trust AssetTrackPro for accurate and effective asset management solutions.</p>
                        <Link to='/joinAsEmployee'>
                            <button className="btn w-1/2 md:w-1/3 mx-auto btn-sm  bg-white text-purple-800">Join As Employee</button>
                        </Link>
                    </div>
                    <img src={'https://i.postimg.cc/yxKRwLM9/feather-1.jpg'} />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                {/* SLIDER------3 */}
                <div>
                    <div className="absolute top-1/4 left-1/5 mx-auto ">
                        <p className="text-xs md:text-lg text-white text-center w-5/6 md:w-1/2 my-2 md:my-8 mx-auto">Optimize your investments with our seamless asset management solutions. We help you track, analyze, and grow your portfolio with real-time insights and expert guidance. Simplify financial decision-making and maximize returns, all from a single, easy-to-use platform tailored to your needs.</p>
                        <Link to='/login'>
                            <button className="btn w-1/2 md:w-1/3 mx-auto btn-sm bg-white text-purple-800">Login</button>
                        </Link>
                    </div>
                    <img className="" src={'https://i.postimg.cc/HxWB7Nwq/is-bg.jpg'} />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;