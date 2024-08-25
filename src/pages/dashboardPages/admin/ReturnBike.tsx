import ReturnBikeTable from "../../../Components/ReturnBikeTable/ReturnBikeTable";
import Headline from "../../../utils/Headline";

const ReturnBike = () => {
    return(
        <div className="my-5 space-y-5">
             <Headline text="Return Bikes"/>
             <ReturnBikeTable/>
        </div>
    )}
export default ReturnBike;