import Headline from "../../utils/Headline";

const WhyChooseUs = () => {
  return (
    <div className="space-y-5">
      <Headline text="Why choose us" />

      <div className="flex justify-center items-center">
        <div className="join join-vertical md:min-w-[750px]">
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Best Prices
            </div>
            <div className="collapse-content">
              <p>
                We offer the most competitive rates in the market, ensuring you
                get the best value for your money without compromising on
                quality.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Wide Selection
            </div>
            <div className="collapse-content">
              <p>
                Choose from a diverse range of bikes, from mountain bikes to
                city cruisers, tailored to suit every rider’s preference and
                need.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Excellent Customer Service
            </div>
            <div className="collapse-content">
              <p>
                Our dedicated support team is here to assist you every step of
                the way, ensuring a smooth and hassle-free rental experience.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Flexible Rental Options
            </div>
            <div className="collapse-content">
              <p>
                Whether you need a bike for a few hours or several days, our
                flexible rental plans are designed to fit your schedule and
                budget.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Easy Online Booking
            </div>
            <div className="collapse-content">
              <p>
                Our user-friendly platform allows you to book your bike rental
                in just a few clicks, making the process quick and convenient.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhyChooseUs;
