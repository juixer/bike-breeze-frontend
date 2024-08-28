import ContactUs from "../Components/ContactUs/ContactUs";
import Featured from "../Components/Featured/Featured";
import HeroSection from "../Components/HeroSecction/HeroSection";
import Reviews from "../Components/Reviews/Reviews";
import WhyChooseUs from "../Components/WhyChooseUs/WhyChooseUs";
import HelmetElement from "../utils/HelmetElement";

const Home = () => {
  return (
    <div className="space-y-5 my-8">
      <HelmetElement text="Home"/>
      <HeroSection />
      <Featured />
      <WhyChooseUs />
      <Reviews />
      <ContactUs />
    </div>
  );
};
export default Home;
