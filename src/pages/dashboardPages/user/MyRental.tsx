import RentalTabs from "../../../Components/RentalTabs/RentalTabs";
import Headline from "../../../utils/Headline";

const MyRental = () => {
    return(
        <div className="my-5 space-y-5">
            <Headline text="My Rentals"/>
             <RentalTabs/>
        </div>
    )}
export default MyRental;