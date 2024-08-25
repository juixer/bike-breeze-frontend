import ContactUs from "../Components/ContactUs/ContactUs";
import Featured from "../Components/Featured/Featured";
import HeroSection from "../Components/HeroSecction/HeroSection";
import Reviews from "../Components/Reviews/Reviews";
import WhyChooseUs from "../Components/WhyChooseUs/WhyChooseUs";

const Home = () => {
    return(
        <div className="space-y-5 my-8">
        <HeroSection/>
        <Featured/>
        <Reviews/>
        <WhyChooseUs/>
        <ContactUs/>
        </div>
    )}
export default Home;