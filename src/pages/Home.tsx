import ContactUs from "../Components/ContactUs/ContactUs";
import Coupon from "../Components/Coupon/Coupon";
import Featured from "../Components/Featured/Featured";
import HeroSection from "../Components/HeroSecction/HeroSection";
import FramerContainer from "../Components/layouts/FramerContainer";
import Reviews from "../Components/Reviews/Reviews";
import WhyChooseUs from "../Components/WhyChooseUs/WhyChooseUs";
import HelmetElement from "../utils/HelmetElement";

const Home = () => {
  return (
    <FramerContainer>
      <div className="space-y-5 my-8">
        <HelmetElement text="Home" />
        <HeroSection />
        <Featured />
        <WhyChooseUs />
        <Reviews />
        <Coupon/>
        <ContactUs />
      </div>
    </FramerContainer>
  );
};
export default Home;
