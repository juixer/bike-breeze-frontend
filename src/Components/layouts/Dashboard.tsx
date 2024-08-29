import { Outlet } from "react-router-dom";
import DashboardNav from "../DashboardNav/DashboardNav";

const Dashboard = () => {
  return (
    <div className="max-w-screen-2xl px-2 mx-auto flex flex-col lg:flex-row gap-2">
      <div className="lg:w-1/4 w-full ">
        <DashboardNav />
      </div>
      <div className="lg:w-3/4 lg:my-5">
        <Outlet />
      </div>
    </div>
  );
};
export default Dashboard;
