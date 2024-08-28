import TimeLine from "../Components/TimeLine/TimeLine";
import { teamMembers } from "../constants";
import Headline from "../utils/Headline";
import HelmetElement from "../utils/HelmetElement";

const About = () => {
  return (
    <div className="space-y-5 my-5">
      <HelmetElement text="About Us"/>
      <Headline text="About us" />

      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Mission Statement</h1>
        <p>
          At Bike Breeze, our mission is to provide a seamless and efficient
          platform for individuals to access high-quality bikes, enabling them
          to explore their surroundings with ease and enjoyment. We are
          committed to promoting sustainable transportation, fostering a sense
          of adventure, and delivering exceptional customer experiences.
        </p>
      </div>

      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Platform’s Purpose and Values</h1>
        <p>
          Our platform is built on the values of accessibility, sustainability,
          and community. We strive to make bike rentals simple, affordable, and
          accessible to everyone. By offering a diverse range of bikes, we aim
          to support eco-friendly travel and encourage a healthier, more active
          lifestyle. Our commitment to customer satisfaction drives everything
          we do, from our user-friendly booking process to our responsive
          customer support.
        </p>
      </div>

      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Meet the Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5">
          {teamMembers.map((member, index) => {
            return (
              <div
                key={index}
                className="flex justify-center flex-grow items-center flex-col gap-2 p-2 rounded-md"
              >
                <img src={member.imgSrc} className="w-52 border rounded-full h-52 object-contain"/>
                <h2 className="text-2xl font-medium">{member.name}</h2>
                <h2 className="text-base font-bold">{member.position}</h2>
                <p>{member.bio}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="space-y-3">
        <h1 className="text-3xl font-bold">History & Milestones</h1>
        <TimeLine />
      </div>

      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Contact Information</h1>

        <div>
          <h1 className="text-xl font-semibold">Office Address</h1>
          <p>
            1234 Cycle Lane, Suite 101, <br /> Greenwood City, CA 94027, USA{" "}
          </p>
        </div>
        <div>
          <h1 className="text-xl font-semibold">Phone Number</h1>
          <p>+1 (555) 123-4567</p>
        </div>
        <div>
          <h1 className="text-xl font-semibold">Email          </h1>
          <a className="cursor-pointer">support@bikebreeze.com</a>
        </div>
      </div>
    </div>
  );
};
export default About;
