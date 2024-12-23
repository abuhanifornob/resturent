import { Helmet } from "react-helmet-async";
import Cover from "../../../components/Cover/Cover";
import contactImg from "../../../assets/contact/banner.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import { MdPhoneInTalk } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import ContactForm from "../ContactForm/ContactForm";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>BISTRO BOSS | CONTACT</title>
      </Helmet>
      <div className="h-[600px]">
        <Cover
          img={contactImg}
          cvHeading="contactus"
          description="WOULD YOU LIKE TO TRY A DISH ?"
        />
      </div>
      <div className="mx-16">
        <SectionTitle
          subHeading={"Visit Us"}
          heading={"our location"}
        ></SectionTitle>
        <div className="my-16">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex justify-center items-center">
              <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="text-white bg-orange-500 py-4  ">
                  <MdPhoneInTalk className="text-5xl" />
                </figure>
                <div className="card-body items-center text-center h-44 bg-stone-100 mx-8 mb-8">
                  <h2 className="card-title uppercase text-2xl">Phone</h2>
                  <address>+880 01716203929</address>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="text-white bg-orange-500 py-4  ">
                  <CiLocationOn className="text-5xl" />
                </figure>
                <div className="card-body items-center text-center h-44 bg-stone-100 mx-8 mb-8">
                  <h2 className="card-title uppercase text-2xl">address</h2>
                  <address>Uttara, Sector-3 , Dhaka , Bangladesh</address>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="text-white bg-orange-500 py-4  ">
                  <CiClock2 className="text-5xl" />
                </figure>
                <div className="card-body items-center text-center h-44 bg-stone-100 mx-8 mb-8">
                  <h2 className="card-title uppercase text-2xl">
                    working hour
                  </h2>
                  <address>
                    Mon - fri: 08:00 - 22:00 <br />
                    Sat - Sun : 10:00 - 23:00
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SectionTitle
          subHeading={"Send Us a Message"}
          heading={"contact form"}
        ></SectionTitle>

        <div className="my-16">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
