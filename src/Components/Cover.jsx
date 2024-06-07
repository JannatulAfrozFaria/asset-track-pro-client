import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';
const Cover = ({img,title,text}) => {
    return (
        <div>
            <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="About Section"
        strength={-200}
    >
        <div className="hero h-[350px] md:h-[545px]" >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className=" bg-black bg-opacity-40 py-8 px-12 md:px-0 mx-2 md:mx-6">
                    <h1 className="mb-2 md:mb-5 text-3xl md:text-5xl font-bold uppercase">{title}</h1>
                    <p className="mb-2 md:mb-5 text-base md:text-2xl font-bold"> {text}</p>
                <Link to='/login'><button className='btn btn-outline border-4 mt-4 text-white w-1/2'>Join Us</button></Link>
                </div>
            </div>
        </div>
        </Parallax>
        </div>
    );
};

export default Cover;