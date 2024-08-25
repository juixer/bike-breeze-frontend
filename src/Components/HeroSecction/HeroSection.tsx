import { Link } from "react-router-dom";
import { basicBtnClassName } from "../../constants";

const HeroSection = () => {
  return (
    <div
      className="hero rounded-md"
      style={{
        backgroundImage: "url(https://i.ibb.co/s62vXmV/hero.gif)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        
      }}
    >
      <div className="hero-overlay rounded-md bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center my-10">
        <div className="max-w-2xl space-y-5">
          <div>
            <h1 className="mb-5 text-5xl font-bold uppercase">Find Your Perfect Ride</h1>
            <p className="mb-5">
              Discover the best bikes from Bike Breeze for every adventure. Whether you're
              hitting the trails or cruising the city, we have the perfect bike
              for you.
            </p>
            <Link to={'/all-bikes'}><button
              className={`${basicBtnClassName} bg-sky-600 hover:bg-sky-700 text-white`}
            >
              Explore Bikes
            </button></Link>
          </div>
          <div className="gap-3 space-x-3 flex md:block">
            <input
              type="text"
              placeholder="example @ Pulser"
              className="input input-bordered rounded-md w-full max-w-xs h-10 text-black bg-white"
            />
            <button
              className={`${basicBtnClassName} bg-sky-600 hover:bg-sky-700 text-white`}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
