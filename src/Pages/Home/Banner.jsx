import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="mt-8 md:mt-12">
            <Carousel className="w-5/6 mx-auto"
                autoPlay 
                interval={3000} 
                infiniteLoop 
            >
                <div className="relative">
                    <div className="absolute top-1/4 left-1/5 mx-auto ">
                        <p className="text-sm md:text-lg text-white text-center w-5/6 md:w-1/2 my-3 md:my-8 mx-auto">Join AssetTrackPro today and revolutionize your asset management. Streamline tracking, maximize efficiency, and gain complete control over your assets with our intuitive platform. Experience the ease and precision of AssetTrackPro, your trusted partner in effective asset management.</p>
                        <Link to='/joinAsManager'>
                            <button className="btn btn-primary w-1/3 mx-auto 
                              text-white font-bold bg-purple-700">Join As HR Manger</button>
                        </Link>
                    </div>
                    <img  src="/src/assets/About/black-blue-purple.jpg" />
                </div>
                <div>
                   <div className="absolute top-1/4 left-1/5 mx-auto ">
                        <p className="text-base md:text-lg text-white text-center w-5/6 md:w-1/2 my-3 md:my-8 mx-auto">Elevate your asset management. Simplify tracking, enhance efficiency, and gain total oversight of your assets with our user-friendly platform. Trust AssetTrackPro for accurate and effective asset management solutions.</p>
                        <Link to='/joinAsEmployee'>
                            <button className="btn w-1/3 mx-auto btn-base">Join As Employee</button>
                        </Link>
                    </div>
                    <img  src="/src/assets/About/feather-1.jpg"  />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;