import { useRef } from "react";
import { basicBtnClassName } from "../../constants";
import Headline from "../../utils/Headline";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  // USE REF FOR GETTING FORM DATA SUGGESTED BY EMAILJS
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const toastId = toast.loading("Please wait...");
    // THIS IS EMAILJS CONFIGURATION
    if (form.current) {
      emailjs
        .sendForm("service_2qjsz3l", "template_2trtxm6", form.current, {
          publicKey: "NBJyE0fwy8IYJVc1o",
        })
        .then(
          () => {
            toast.success("Mail sent!", { id: toastId, duration: 4000 });
            location.reload();
          },
          (error) => {
            console.log("FAILED...", error);
            toast.error("Something went wrong!", {
              id: toastId,
              duration: 4000,
            });
          }
        );
    }
  };
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
        <form
          onSubmit={sendEmail}
          ref={form}
          className="lg:flex lg:flex-col space-y-5"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Type your name here"
            className="input input-bordered w-full lg:w-96"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Type your email here"
            className="input input-bordered w-full lg:w-96"
          />
          <input
            type="text"
            name="user_subject"
            placeholder="Type your subject here"
            className="input input-bordered w-full lg:w-96"
          />
          <textarea
            name="message"
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
