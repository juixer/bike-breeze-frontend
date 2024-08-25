import Featured from "../Components/Featured/Featured";
import HeroSection from "../Components/HeroSecction/HeroSection";
import Reviews from "../Components/Reviews/Reviews";

const Home = () => {
    return(
        <div className="space-y-5 my-8">
        <HeroSection/>
        <Featured/>
        <Reviews/>
        </div>
    )}
export default Home;