import notRobotImg from "../../../assets/contact/1_O0hPhfithgkGiY-mm_ON0Q.png";
import { IoIosSend } from "react-icons/io";

const ContactForm = () => {
  return (
    <div className="bg-stone-100 p-16">
      <div className="flex gap-8">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-xl pb-2">Name*</span>
          </div>
          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered w-full text-xl p-6"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-xl pb-2">Email*</span>
          </div>
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full text-xl p-6"
          />
        </label>
      </div>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text text-xl pb-2">Phone*</span>
        </div>
        <input
          type="text"
          placeholder="Enter your phone number"
          className="input input-bordered w-full text-xl p-6"
        />
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text text-xl pb-2">Message*</span>
        </div>
        <textarea
          type="textarea textarea-bordered"
          placeholder="Write your message here"
          className="textarea textarea-bordered textarea-lg w-full text-xl p-6"
        ></textarea>
      </label>
      <div className="mt-4">
        <img src={notRobotImg} alt="" className="p-0 -ms-4" />
      </div>
      <div className="flex justify-center items-center">
        <button className="btn border-orange-500 bg-orange-600 text-white text-2xl mt-20 ">
          Send Message <IoIosSend />
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
