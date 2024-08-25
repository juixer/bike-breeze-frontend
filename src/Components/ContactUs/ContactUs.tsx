import { basicBtnClassName } from "../../constants";
import Headline from "../../utils/Headline";

const ContactUs = () => {
  return (
    <div className="space-y-5">
      <Headline text="Contact us" />
      <div className="flex justify-center items-center gap-10">
        <div className=" hidden lg:block">
          <img
            src="https://i.ibb.co/FJ4mjV5/mail.gif"
            className="rounded-xl w-[500px]"
          />
        </div>
        <form className="lg:flex lg:flex-col space-y-5">
         
          <input
            type="text"
            placeholder="Type your name here"
            className="input input-bordered w-full lg:w-96"
          />
          <input
            type="email"
            placeholder="Type your email here"
            className="input input-bordered w-full lg:w-96"
          />
          <textarea
            className="textarea textarea-bordered w-full lg:w-96 h-44"
            placeholder="Type your message here"
          ></textarea>
          <button
            className={`${basicBtnClassName} bg-sky-600 text-white hover:bg-sky-700 duration-300 w-full lg:w-96`}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactUs;
