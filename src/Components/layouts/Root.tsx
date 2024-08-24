import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import ToTop from "../../utils/ToTop";

const Root = () => {
   return (
    <div className="max-w-screen-2xl px-2 mx-auto relative">
      <Navbar />
      <Outlet />
     <ToTop/>
    </div>
  );
};
export default Root;
