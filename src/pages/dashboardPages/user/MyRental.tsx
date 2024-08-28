import FramerContainer from "../../../Components/layouts/FramerContainer";
import RentalTabs from "../../../Components/RentalTabs/RentalTabs";
import Headline from "../../../utils/Headline";
import HelmetElement from "../../../utils/HelmetElement";

const MyRental = () => {
  return (
    <FramerContainer>
      <div className="my-5 space-y-5">
        <HelmetElement text="My rental" />
        <Headline text="My Rentals" />
        <RentalTabs />
      </div>
    </FramerContainer>
  );
};
export default MyRental;
