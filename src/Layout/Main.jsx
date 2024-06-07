import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Banner from "../Pages/Home/Banner";


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="max-w-screen-xl mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;