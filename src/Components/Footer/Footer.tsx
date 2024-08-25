import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {

    const year = new Date().getFullYear();

  return (
    <div className="bg-base-200">
      <footer className="footer max-w-screen-2xl mx-auto text-base-content p-10">
        <aside>
          <img src="https://i.ibb.co/JrYxbpg/Logo.png" className="w-52" />
          <p>
            Copyright © {year} - All right reserved <br /> by Bike Breeze Ltd
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Social Links</h6>
          <a className="link link-hover flex  gap-2 items-center">
            <FaFacebook /> Facebook
          </a>
          <a className="link link-hover flex  gap-2 items-center">
            <FaYoutube /> YouTube
          </a>
          <a className="link link-hover flex  gap-2 items-center">
            <FaInstagram /> Instagram
          </a>
          <a className="link link-hover flex  gap-2 items-center">
            <FaXTwitter /> Twitter
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Quick Link</h6>
          <p className="link link-hover">
            <Link to={"/"}>Home</Link>
          </p>
          <p className="link link-hover">
            <Link to={"/bikes"}>All Bikes</Link>
          </p>
          <p className="link link-hover">
            <Link to={"/bikes"}>About Us</Link>
          </p>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy policy</a>
        </nav>
      </footer>
    </div>
  );
};
export default Footer;
