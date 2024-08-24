import { FaAngleUp } from "react-icons/fa6";
import { basicBtnClassName } from "../constants";
import { useEffect, useState } from "react";

const ToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleTakeToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <button
      onClick={handleTakeToTop}
      className={`${basicBtnClassName} bg-sky-500 text-white fixed bottom-5 right-5  duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <FaAngleUp />
    </button>
  );
};
export default ToTop;
