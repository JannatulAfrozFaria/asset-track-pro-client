import Banner from './Banner';
import About from './About/About';
import Packages from './Packages/Packages';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Asset Track Pro | Home</title>
            </Helmet>
            <Banner></Banner>
            <About></About>
            <Packages></Packages>
        </div>
    );
};

export default Home;