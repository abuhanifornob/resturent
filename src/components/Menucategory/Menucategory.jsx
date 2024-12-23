/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Cover from "../Cover/Cover";
import PopularMenuCard from "../PopularMenuCard/PopularMenuCard";
import SectionTitle from "../SectionTitle/SectionTitle";

const Menucategory = ({
  menu,
  heading,
  subHeading,
  buttonText,
  img,
  cvHeading,
  description,
  category,
}) => {
  return (
    <div>
      <div className="my-20">
        {subHeading && (
          <section className="my-10">
            <SectionTitle
              heading={heading}
              subHeading={subHeading}
            ></SectionTitle>
          </section>
        )}
        <div className="my-8">
          {img && (
            <Cover img={img} cvHeading={cvHeading} description={description} />
          )}
        </div>
        <div className="mx-16">
          <section className="grid md:grid-cols-2 gap-8">
            {menu.map((item) => (
              <PopularMenuCard key={item._id} item={item}></PopularMenuCard>
            ))}
          </section>
        </div>

        <div className="flex items-center justify-center mt-8">
          <Link to={`/shop/${category}`}>
            <button className="btn btn-outline border-0 border-b-4 uppercase mt-5 ">
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menucategory;
