import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import ToTop from "../../utils/ToTop";
import Footer from "../Footer/Footer";
import Container from "./Container";

const Root = () => {
  return (
    <>
      <Container>
        <div className="max-w-screen-2xl px-2 mx-auto relative">
          <Navbar />
          <Outlet />
          <ToTop />
        </div>
      </Container>
      <Footer />
    </>
  );
};
export default Root;
