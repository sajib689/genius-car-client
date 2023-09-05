
import Banner from './Banner/Banner';
import AboutHome from './AboutHome/AboutHome';
import Services from './Services/Services';
import Details from './Details/Details';
import Team from './Team/Team';
import CoreFeature from './CoreFeature/CoreFeature';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='container mx-auto'>
           <Banner></Banner>
           <AboutHome></AboutHome>
           <Services></Services>
           <Details></Details>
           <Team></Team>
           <CoreFeature></CoreFeature>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;