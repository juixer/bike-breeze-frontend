import CouponTabs from "../../../Components/CouponTabs/CouponTabs";
import FramerContainer from "../../../Components/layouts/FramerContainer";
import Headline from "../../../utils/Headline";
import HelmetElement from "../../../utils/HelmetElement";

const CouponManagement = () => {
    return(
        <FramerContainer>
            <HelmetElement text="Coupon Management"/>
            <Headline text="Coupon Management" />
            <CouponTabs/>
        </FramerContainer>
    )}
export default CouponManagement;