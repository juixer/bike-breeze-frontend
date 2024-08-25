import Headline from "../../utils/Headline";
import "./style.css";

const WhyChooseUs = () => {
  return (
    <div className="space-y-5">
      <Headline text="Why choose us" />

      

      <div>
        <ul className="gap-5">
          <li id="slide1">
            <div className="w-full md:max-w-5xl mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md flex shadow-md">
              <div className="flex flex-col md:space-y-5 w-3/4">
                <h1 className="uppercase text-xl md:text-5xl font-bold text-white">
                  Best Prices
                </h1>
                <p className="max-w-96 text-white text-sm pb-1 md:text-xl">
                  We offer the most competitive rates in the market, ensuring
                  you get the best value for your money without compromising on
                  quality.
                </p>
              </div>
              <div className="w-1/4 hidden md:block bg-white">
                <img src="https://i.ibb.co/QX0NLBV/price.gif" />
              </div>
            </div>
          </li>
          {/* slide2 */}
          <li id="slide2">
          <div className="w-full md:max-w-5xl mx-auto bg-gradient-to-r from-purple-500 to-indigo-500 rounded-md flex shadow-md">
              <div className="flex flex-col md:space-y-5 w-3/4">
                <h1 className="uppercase text-xl md:text-5xl font-bold text-white">
                Wide Selection
                </h1>
                <p className="max-w-96 text-white text-sm pb-1 md:text-xl">
                Choose from a diverse range of bikes, from mountain bikes to
                city cruisers, tailored to suit every rider’s preference and
                need.
                </p>
              </div>
              <div className="w-1/4 hidden md:block bg-white">
                <img src="https://i.ibb.co/b3mrVHT/selection.gif" />
              </div>
            </div>
          </li>
          {/* slide 3 */}
          <li id="slide3">
          <div className="w-full md:max-w-5xl mx-auto bg-gradient-to-r from-amber-500 to-orange-500 rounded-md flex shadow-md">
              <div className="flex flex-col md:space-y-5 w-3/4">
                <h1 className="uppercase text-xl md:text-5xl font-bold text-white">
                Excellent Service
                </h1>
                <p className="max-w-96 text-white text-sm pb-1 md:text-xl">
                Our dedicated support team is here to assist you every step of
                the way, ensuring a smooth and hassle-free rental experience.
                </p>
              </div>
              <div className="w-1/4 hidden md:block bg-white">
                <img src="https://i.ibb.co/wNNbpZq/service.gif" />
              </div>
            </div>
          </li>
          {/* slide 4 */}
          <li id="slide4">
          <div className="w-full md:max-w-5xl mx-auto bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-md flex shadow-md">
              <div className="flex flex-col md:space-y-5 w-3/4">
                <h1 className="uppercase text-xl md:text-5xl font-bold text-white">
                Flexible Rental
                </h1>
                <p className="max-w-96 text-white text-sm pb-1 md:text-xl">
                Whether you need a bike for a few hours or several days, our
                flexible rental plans are designed to fit your schedule and
                budget.
                </p>
              </div>
              <div className="w-1/4 hidden md:block bg-white">
                <img src="https://i.ibb.co/wgRwCWT/flexible.gif" />
              </div>
            </div>
          </li>
          {/* slide 5 */}
          <li id="slide5">
          <div className="w-full md:max-w-5xl mx-auto bg-gradient-to-r from-indigo-500 to-orange-500 rounded-md flex shadow-md">
              <div className="flex flex-col md:space-y-5 w-3/4">
                <h1 className="uppercase text-xl md:text-5xl font-bold text-white">
                Easy Online Booking
                </h1>
                <p className="max-w-96 text-white text-sm pb-1 md:text-xl">
                Our user-friendly platform allows you to book your bike rental
                in just a few clicks, making the process quick and convenient.
                </p>
              </div>
              <div className="w-1/4 hidden md:block bg-white">
                <img src="https://i.ibb.co/nR1xS8X/booking.gif" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default WhyChooseUs;
