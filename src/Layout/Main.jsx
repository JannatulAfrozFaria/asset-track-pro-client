import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";


const Main = () => {
    return (
        <div className='bg-gradient-to-b from-purple-50 to-violet-300'>
            <NavBar></NavBar>
            <div >
                <div className="max-w-screen-xl mx-auto">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;