import RentalTabs from "../../../Components/RentalTabs/RentalTabs";
import Headline from "../../../utils/Headline";
import HelmetElement from "../../../utils/HelmetElement";

const MyRental = () => {
    return(
        <div className="my-5 space-y-5">
            <HelmetElement text="My rental"/>
            <Headline text="My Rentals"/>
             <RentalTabs/>
        </div>
    )}
export default MyRental;